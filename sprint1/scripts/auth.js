const email = document.getElementById('email');
const password = document.getElementById('password');
const nickname = document.getElementById('nickname');
const passwordConfirm = document.getElementById('passwordConfirmation');
const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
const message = document.createElement('p');
message.classList.add('error-color');

function addErrorMessage(el, msg) {
  el.classList.add('input-error');
  message.textContent = msg;
  el.after(message);
}

function emailCheck(e) {
  if (!e.target.value) {
    addErrorMessage(e.target, '이메일을 입력해주세요');
  } else if (!pattern.test(e.target.value)) {
    addErrorMessage(e.target, '잘못된 이메일 형식입니다');
  }
}

function passwordCheck(e) {
  if (!e.target.value) {
    addErrorMessage(e.target, '비밀번호를 입력해주세요');
  } else if (e.target.value.length < 8) {
    addErrorMessage(e.target, '비밀번호를 8자 이상 입력해주세요');
  }
}

function nicknameCheck(e) {
  if (!e.target.value) {
    addErrorMessage(e.target, '닉네임을 입력해주세요');
  }
}

function passwordConfirmCheck(e) {
  if (e.target.value !== password.value) {
    addErrorMessage(e.target, '비밀번호가 일치하지 않습니다');
  }
}

function resetInput(e) {
  if (
    e.target.classList.contains('error-color') &&
    e.target.nextElementSibling
  ) {
    e.target.classList.remove('error-color');
    e.target.nextElementSibling.remove();
  }
}

function activateLogInButton(e) {
  const condition =
    !inputEmail.classList.contains('error-color') &&
    !inputPassword.classList.contains('error-color') &&
    inputEmail.value &&
    inputPassword.value;

  formButton.classList.toggle('button-activated', condition);
  condition ? (formButton.disabled = false) : (formButton.disabled = true);
}

function activateSignUpButton(e) {
  const condition =
    !inputEmail.classList.contains('error-color') &&
    !inputNickname.classList.contains('error-color') &&
    !inputPassword.classList.contains('error-color') &&
    !inputPasswordConfirm.classList.contains('error-color') &&
    inputEmail.value &&
    inputNickname.value &&
    inputPassword.value &&
    inputPasswordConfirm.value;

  formButton.classList.toggle('button-activated', condition);
  condition ? (formButton.disabled = false) : (formButton.disabled = true);
}

function buttonVisibleOrNot(e) {
  const input = e.target.parentElement.nextElementSibling;
  if (input.type === 'password') {
  }
}

export {
  email,
  password,
  nickname,
  passwordConfirm,
  emailCheck,
  passwordCheck,
  nicknameCheck,
  passwordConfirmCheck,
  resetInput,
  activateLogInButton,
  activateSignUpButton,
  buttonVisibleOrNot,
};
