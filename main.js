// eslint-disable-next-line import/extensions
import keys from './data.js';

let language = localStorage.getItem('language');
if (language === null) language = 'english';
const keyCase = 'basic';

const body = document.querySelector('body');

const input = document.createElement('textarea');
input.setAttribute('type', 'text');
input.id = 'alert';
body.append(input);

const wrapper = document.createElement('div');
wrapper.className = 'wrapper-keys';
body.append(wrapper);

const text = document.createElement('div');
text.className = 'text';
text.textContent = 'Клавиатура создана в операционной системе Windows 10, для переключения языка используйте комбинацию: левыe ctrl + alt';
wrapper.after(text);

function renderKeys() {
  for (let i = 0; i < keys.length; i += 1) {
    const key = document.createElement('span');
    key.id = `${keys[i].code}`;
    wrapper.append(key);
    key.className = 'key';
  }
}
renderKeys();

function renderKeySymbol() {
  const key = document.querySelectorAll('.key');
  for (let i = 0; i < keys.length; i += 1) {
    key[i].textContent = `${keys[i][language][keyCase]}`;
  }
}
renderKeySymbol();

function highlight(event) {
  if (event.target.classList.contains('key')
    && event.target.id !== 'CapsLock'
    && event.type !== 'mouseup') event.target.classList.add('active');
  setTimeout(() => {
    if (event.target.id !== 'CapsLock' && event.type === 'mouseup') {
      const renderedKeys = document.querySelectorAll('.key');
      renderedKeys.forEach((key) => {
        if (key.id !== 'CapsLock') key.classList.remove('active');
      });
    }
  }, 250);

  if (event.target.id === 'CapsLock' && (keyCase === 'caps' || keyCase === 'capsShift')) {
    event.target.classList.add('active');
  } else if (event.target.id === 'CapsLock' && (keyCase !== 'caps' || keyCase !== 'capsShift')) {
    event.target.classList.remove('active');
  }
}

wrapper.addEventListener('mousedown', (event) => highlight(event));
wrapper.addEventListener('mouseup', (event) => highlight(event));

function toggleLanguage() {
  if (language === 'english') language = 'russian';
  else language = 'english';
  renderKeySymbol();
  localStorage.setItem('language', language);
}

function clickKey(event) {
  const temp = input.selectionStart;
  const result = event.target.textContent;

  if ((event.target.id === 'AltLeft' && event.ctrlKey === true)) toggleLanguage();
  if ((event.altKey === true && event.target.id === 'ControlLeft')) toggleLanguage();

  if (result === '⌫ Backspace') {
    if (input.selectionStart === input.selectionEnd) {
      if (input.selectionStart === 0) return;
      input.value = input.value.slice(0, input.selectionStart - 1)
        + input.value.slice(input.selectionStart);
      input.selectionEnd = temp - 1;
    } else {
      input.value = input.value.slice(0, input.selectionStart)
        + input.value.slice(input.selectionEnd);
      input.selectionEnd = temp;
    }
  } else if (result === '↹ Tab') {
    if (temp === 0) {
      input.value = `    ${input.value}`;
      input.selectionEnd = temp + 4;
    } else {
      input.value = `${input.value.slice(0, input.selectionStart)}    ${input.value.slice(input.selectionStart)}`;
      input.selectionEnd = temp + 4;
    }
  } else if (result === 'Space') {
    if (temp === 0) {
      input.value = ` ${input.value}`;
      input.selectionEnd = temp + 1;
    } else {
      input.value = `${input.value.slice(0, input.selectionStart)} ${input.value.slice(input.selectionStart)}`;
      input.selectionEnd = temp + 1;
    }
  } else if (result === '↵ Enter') {
    input.value = `${input.value.slice(0, input.selectionStart)}\n${input.value.slice(input.selectionStart)}`;
    input.selectionEnd = temp + 1;
  } else if (result === 'Del') {
    input.value = input.value.slice(0, input.selectionStart)
      + input.value.slice(input.selectionStart + 1);
    input.selectionEnd = temp;
  } else if (result === '⇪ Caps'
    || result === '⇧ Shift'
    || result === 'Alt'
    || result === 'Win'
    || result === 'Ctrl') {
    input.value += '';
  } else {
    input.value = `${input.value.slice(0, input.selectionStart)}${result}${input.value.slice(input.selectionStart)}`;
    input.selectionEnd = temp + 1;
  }
}

function capsLock(event) {
  if (event.target.textContent === '⇪ Caps') {
    if (keyCase === 'basic') keyCase = 'caps';
    else keyCase = 'basic';
    renderKeySymbol();
  }
}
