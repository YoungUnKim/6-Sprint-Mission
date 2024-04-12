import * as authJS from './auth.js';

// 이메일 이벤트
authJS.email.addEventListener('focusout', authJS.emailCheck);
authJS.email.addEventListener('focusin', authJS.resetInput);
authJS.email.addEventListener('focusout', authJS.activateLogInButton);

// 비밀번호 이벤트
authJS.password.addEventListener('focusout', authJS.passwordCheck);
authJS.password.addEventListener('focusin', authJS.resetInput);
authJS.password.addEventListener('focusout', authJS.activateLogInButton);

authJS.invisibleButton[0].addEventListener('click', authJS.buttonVisibleOrNot);
