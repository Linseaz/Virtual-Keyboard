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
