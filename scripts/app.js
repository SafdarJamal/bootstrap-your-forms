let password = document.getElementById('password');
let showHideBtn = document.getElementById('show-hide');
let signUpBtn = document.getElementById('sign-up');

function showHide() {
  const fieldAtt = password.getAttribute('type');
  // console.log(fieldAtt);
  if (fieldAtt === 'password') {
    password.setAttribute('type', 'text');
    showHideBtn.innerHTML = 'hide';
  } else {
    password.setAttribute('type', 'password');
    showHideBtn.innerHTML = 'show';
  }
}

function signUp() {
  const currentSite = window.location.hostname;
  const destination = 'https://' + currentSite + '/pages/verify.html';
  window.location.href = destination;
  // console.log(currentSite);
  // console.log(destination);
  // console.log(location.href);
}

showHideBtn.onclick = showHide;
signUpBtn.onclick = signUp;
