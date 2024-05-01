import {
    addApiComments,
    getApiComments,
    answerApiComments,
    deleteApiComments,
    addLike,
} from './api';
import { renderLogin, userName } from './components/login-component';

let token: string = '';
let comments: Comment[] = [];
let initialLoading = true;
let isLoadingAdd = false;
interface Comment {
    date: string;
    author: {
        name: string;
    };
    name: string;
    id: number;
    text: string;
    likes: number;
    isLiked: boolean;
    isLikeLoading: boolean;
    index: number;
}

export const getComments = async () => {
    if (initialLoading) {
        let loaderElement: HTMLElement | null = document.getElementById('app');
        if (loaderElement) {
            loaderElement.innerHTML = `<div class="preloader">
  <div class="preloader-image">Приложение загружается</div></div>`;
        }
    }
    return getApiComments({ token }).then((responseData) => {
        const appComments = responseData.comments.map((comment: Comment) => {
            return {
                date: new Date(comment.date),
                name: comment.author.name,
                id: comment.id,
                text: comment.text,
                likes: comment.likes,
                isLiked: comment.isLiked,
                isLikeLoading: false,
            };
        });
        comments = appComments;
        initialLoading = false;
        renderComments();
    });
};

getComments();

function formatDate(date: Date) {
    const year = date.getFullYear().toString().slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

const sanitizeHtml = (htmlString: string) => {
    return htmlString
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/QUOTE_BEGIN/g, '<div class="quote">')
        .replace(/QUOTE_END/g, '</div>');
};

const renderComments = () => {
    const appEl = document.getElementById('app');
    const commentHTML = comments
        .map((comment: Comment, index: number) => {
            return `<li data-index="${index}" class="comment">
          <div class="comment-header">
            <div class="comment-name">${sanitizeHtml(comment.name)}</div>
            <div>${formatDate(new Date(comment.date))}</div>
          </div>
          <div class="comment-body">
            <div class="comment-text">${sanitizeHtml(comment.text)}</div>
          </div>
          <div class="comment-footer">
          <button data-edit="${index}" class="edit-button">Редактировать</button>
          <button data-id="${index}" class="delete-button" id="button-delete">Удалить</button>
            <div class="likes">
            <span class="likes-counter">${comment.likes}</span>
          <button data-id="${
              comment.id
          }" data-index="${index}" class="like-button ${
              comment.isLiked ? '-active-like' : '-non-active-like'
          } ${
              comment.isLikeLoading ? '-loading-like' : ''
          }"></button></div></div>
          </li>`;
        })
        .join('');

    if (!token) {
        const appHtml: string = `<ul class="comments">
                ${commentHTML}
                </ul>
                <p class="warning">Чтобы добавить комментарий, <button class="login-button">авторизуйтесь</button></p>`;
        if (appEl) {
            appEl.innerHTML = appHtml;
        }

        const loginButton = document.querySelector('.login-button');
        if (loginButton) {
            loginButton.addEventListener('click', () => {
                if (appEl) {
                    renderLogin({
                        appEl,
                        setToken: (newToken: string) => {
                            token = newToken;
                        },
                        getComments,
                    });
                }
            });
        }
        return;
    }

    const appHtml = `<ul class="comments">
                ${commentHTML}
                </ul>
                <div class="add-form-row">
                </div>
                <div class="add-form" id="add-comment">
                  <input
                    type="text"
                    class="add-form-name"
                    placeholder="Введите ваше имя"
                    disabled
                    value="${userName}"
                    id="name-input"
                    disabled/>
                  <textarea
                    type="textarea"
                    class="add-form-text"
                    placeholder="Введите ваш комментарий"
                    rows="4"
                    id="text-input"
                  ></textarea>
                  <div class="add-form-row">
                    <button class="add-form-button" id="button-add">Написать</button>
                  </div>
                </div>
                <div class="preloader">
                  <div id="form-loading" class="hidden">Комментарий загружается</div>
                </div>`;

    if (appEl) {
        appEl.innerHTML = appHtml;
    }

    const nameInputElement: HTMLInputElement | null =
        document.querySelector('#nameInput');
    const textInputElement: HTMLInputElement | null =
        document.querySelector('#textInput');
    const buttonElement: HTMLButtonElement | null =
        document.querySelector('#submitButton');
    if (buttonElement) {
        buttonElement.classList.add('empty');
        (buttonElement as HTMLButtonElement).disabled = true;
    }

    const loadingElement = document.getElementById('form-loading');
    if (loadingElement) {
        loadingElement.classList.add('preloader-image');
    }

    function answerComment() {
        const oldComments = document.querySelectorAll('.comment');
        oldComments.forEach((oldComment) => {
            oldComment.addEventListener('click', (event) => {
                event.stopPropagation();
                const index = (oldComment as HTMLElement).dataset.index;
                if (index !== undefined && textInputElement) {
                    const commentIndex = Number(index);
                    textInputElement.value = `QUOTE_BEGIN ${comments[commentIndex].text}\n${comments[commentIndex].name} QUOTE_END`;
                }
            });
        });
    }

    const deleteButtonElements = document.querySelectorAll('.delete-button');
    deleteButtonElements.forEach((deleteButtonElement) => {
        deleteButtonElement.addEventListener('click', (event) => {
            event.stopPropagation();
            const index = (deleteButtonElement as HTMLElement).dataset.id;
            if (index) {
                const commentIndex = Number(index);
                deleteApiComments(comments[commentIndex].id, token).then(() => {
                    return getComments();
                });
            }
        });
    });

    const addComment = () => {
        isLoadingAdd = true;
        renderForm(isLoadingAdd);

        if (textInputElement) {
            addApiComments({
                text: sanitizeHtml(textInputElement.value),
                token,
            })
                .then(() => {
                    return getComments();
                })
                .then(() => {
                    isLoadingAdd = false;
                    renderForm(isLoadingAdd);
                    if (nameInputElement && textInputElement && buttonElement) {
                        nameInputElement.value = '';
                        textInputElement.value = '';
                        buttonElement.classList.add('empty');
                        buttonElement.disabled = true;
                    }
                })
                .catch((error) => {
                    isLoadingAdd = false;
                    renderForm(isLoadingAdd);
                    alert(error.message);
                });
        } else {
            console.error('textInputElement is null');
        }
    };

    const handleInput = () => {
        if (nameInputElement && textInputElement && buttonElement) {
            if (
                nameInputElement.value.trim() !== '' &&
                textInputElement.value.trim() !== ''
            ) {
                buttonElement.disabled = false;
                buttonElement.classList.remove('empty');
            } else {
                buttonElement.disabled = true;
                buttonElement.classList.add('empty');
            }
        }
    };

    if (nameInputElement && textInputElement && buttonElement) {
        nameInputElement.addEventListener('input', handleInput);
        textInputElement.addEventListener('input', handleInput);
        buttonElement.addEventListener('click', addComment);
        textInputElement.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addComment();
            }
        });
    }

    counterLikes();
    answerComment();

    const editButtonElements = document.querySelectorAll('.edit-button');
    editButtonElements.forEach((editButtonElement) => {
        editButtonElement.addEventListener('click', (event) => {
            event.stopPropagation();
            const index = parseInt(
                (editButtonElement as HTMLElement).dataset.edit ?? '',
            );
            if (!isNaN(index)) {
                if (editButtonElements[index].innerHTML === 'Редактировать') {
                    editButtonElements[index].innerHTML = 'Сохранить';
                    const commentBodyElements =
                        document.querySelectorAll('.comment-text');
                    const commentBodyElement = commentBodyElements[index];
                    commentBodyElement.innerHTML = `<textarea type="textarea" class="edit-comment" rows="4">${comments[index].text}</textarea>`;
                } else {
                    const redactCommentElement = document.querySelectorAll(
                        '.edit-comment',
                    ) as NodeListOf<HTMLTextAreaElement>;
                    comments[index].text = redactCommentElement[0].value;

                    deleteApiComments(comments[index].id, token).then(() => {
                        getComments();
                    });

                    answerApiComments({
                        text: sanitizeHtml(comments[index].text),
                        token,
                    })
                        .then(() => {})
                        .then(() => {
                            getComments();
                            renderComments();
                        });
                    renderComments();
                }
            }
        });
    });
};

function counterLikes() {
    const likesButtonElements = document.querySelectorAll('.like-button');

    likesButtonElements.forEach((likesButtonElement) => {
        likesButtonElement.addEventListener('click', (event) => {
            event.stopPropagation();
            const index = parseInt(
                (likesButtonElement as HTMLElement).dataset.index ?? '',
            );
            const commentId = comments[index].id;
            addLike(token, commentId).then(() => {
                return getComments();
            });
        });
    });
}

const renderForm = (isLoading: boolean) => {
    const formWindow = document.querySelector('.add-form');
    const loaderText = document.getElementById('form-loading');
    if (loaderText && formWindow) {
        if (isLoading) {
            loaderText.classList.remove('hidden');
            formWindow.classList.add('hidden');
        } else {
            loaderText.classList.add('hidden');
            formWindow.classList.remove('hidden');
        }
    }
};
