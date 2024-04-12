import * as authJS from './auth.js';

// 이메일 이벤트
authJS.email.addEventListener('focusout', authJS.emailCheck);
authJS.email.addEventListener('focusin', authJS.resetInput);
authJS.email.addEventListener('focusout', authJS.activateSignUpButton);

// 닉네임 이벤트
authJS.nickname.addEventListener('focusout', authJS.nicknameCheck);
authJS.nickname.addEventListener('focusin', authJS.resetInput);
authJS.nickname.addEventListener('focusout', authJS.activateSignUpButton);

// 비밀번호 이벤트
authJS.password.addEventListener('focusout', authJS.passwordCheck);
authJS.password.addEventListener('focusin', authJS.resetInput);
authJS.password.addEventListener('focusout', authJS.activateSignUpButton);

// 비밀번호 확인 이벤트
authJS.passwordConfirm.addEventListener(
  'focusout',
  authJS.passwordConfirmCheck,
);
authJS.passwordConfirm.addEventListener('focusin', authJS.resetInput);
authJS.passwordConfirm.addEventListener(
  'focusout',
  authJS.activateSignUpButton,
);

authJS.invisibleButton[0].addEventListener('click', authJS.buttonVisibleOrNot);
authJS.invisibleButton[1].addEventListener('click', authJS.buttonVisibleOrNot);
