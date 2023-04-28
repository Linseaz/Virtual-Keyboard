const keys = [
  {
    code: 'Backquote',
    english: {
      basic: '`',
      shift: '~',
      caps: '`',
      capsShift: '~',
    },
    russian: {
      basic: 'ё',
      shift: 'Ё',
      caps: 'Ё',
      capsShift: 'ё',
    },
  },
  {
    code: 'Digit1',
    english: {
      basic: '1',
      shift: '!',
      caps: '1',
      capsShift: '!',
    },
    russian: {
      basic: '1',
      shift: '!',
      caps: '1',
      capsShift: '!',
    },
  },
  {
    code: 'Digit2',
    english: {
      basic: '2',
      shift: '@',
      caps: '2',
      capsShift: '@',
    },
    russian: {
      basic: '2',
      shift: '"',
      caps: '2',
      capsShift: '"',
    },
  },
  {
    code: 'Digit3',
    english: {
      basic: '3',
      shift: '#',
      caps: '3',
      capsShift: '#',
    },
    russian: {
      basic: '3',
      shift: '№',
      caps: '3',
      capsShift: '№',
    },
  },
  {
    code: 'Digit4',
    english: {
      basic: '4',
      shift: '$',
      caps: '4',
      capsShift: '$',
    },
    russian: {
      basic: '4',
      shift: ';',
      caps: '4',
      capsShift: ';',
    },

  },
  {
    code: 'Digit5',
    english: {
      basic: '5',
      shift: '%',
      caps: '5',
      capsShift: '%',
    },
    russian: {
      basic: '5',
      shift: '%',
      caps: '5',
      capsShift: '%',
    },
  },
  {
    code: 'Digit6',
    english: {
      basic: '6',
      shift: '^',
      caps: '6',
      capsShift: '^',
    },
    russian: {
      basic: '6',
      shift: ':',
      caps: '6',
      capsShift: ':',
    },
  },
  {
    code: 'Digit7',
    english: {
      basic: '7',
      shift: '&',
      caps: '7',
      capsShift: '&',
    },
    russian: {
      basic: '7',
      shift: '?',
      caps: '7',
      capsShift: '?',
    },
  },
  {
    code: 'Digit8',
    english: {
      basic: '8',
      shift: '*',
      caps: '8',
      capsShift: '*',
    },
    russian: {
      basic: '8',
      shift: '*',
      caps: '8',
      capsShift: '*',
    },
  },
  {
    code: 'Digit9',
    english: {
      basic: '9',
      shift: '(',
      caps: '9',
      capsShift: '(',
    },
    russian: {
      basic: '9',
      shift: '(',
      caps: '9',
      capsShift: '(',
    },
  },
  {
    code: 'Digit0',
    english: {
      basic: '0',
      shift: ')',
      caps: '0',
      capsShift: ')',
    },
    russian: {
      basic: '0',
      shift: ')',
      caps: '0',
      capsShift: ')',
    },
  },
  {
    code: 'Minus',
    english: {
      basic: '-',
      shift: '_',
      caps: '-',
      capsShift: '_',
    },
    russian: {
      basic: '-',
      shift: '_',
      caps: '-',
      capsShift: '_',
    },
  },
  {
    code: 'Equal',
    english: {
      basic: '=',
      shift: '+',
      caps: '=',
      capsShift: '+',
    },
    russian: {
      basic: '=',
      shift: '+',
      caps: '=',
      capsShift: '+',
    },
  },
  {
    code: 'Backspace',
    english: {
      basic: '⌫ Backspace',
      shift: '⌫ Backspace',
      caps: '⌫ Backspace',
      capsShift: '⌫ Backspace',
    },
    russian: {
      basic: '⌫ Backspace',
      shift: '⌫ Backspace',
      caps: '⌫ Backspace',
      capsShift: '⌫ Backspace',
    },
  },
  {
    code: 'Tab',
    english: {
      basic: '↹ Tab',
      shift: '↹ Tab',
      caps: '↹ Tab',
      capsShift: '↹ Tab',
    },
    russian: {
      basic: '↹ Tab',
      shift: '↹ Tab',
      caps: '↹ Tab',
      capsShift: '↹ Tab',
    },
  },
  {
    code: 'KeyQ',
    english: {
      basic: 'q',
      shift: 'Q',
      caps: 'Q',
      capsShift: 'q',
    },
    russian: {
      basic: 'й',
      shift: 'Й',
      caps: 'Й',
      capsShift: 'й',
    },
  },
  {
    code: 'KeyW',
    english: {
      basic: 'w',
      shift: 'W',
      caps: 'W',
      capsShift: 'w',
    },
    russian: {
      basic: 'ц',
      shift: 'Ц',
      caps: 'Ц',
      capsShift: 'ц',
    },
  },
  {
    code: 'KeyE',
    english: {
      basic: 'e',
      shift: 'E',
      caps: 'E',
      capsShift: 'e',
    },
    russian: {
      basic: 'у',
      shift: 'У',
      caps: 'У',
      capsShift: 'y',
    },
  },
  {
    code: 'KeyR',
    english: {
      basic: 'r',
      shift: 'R',
      caps: 'R',
      capsShift: 'r',
    },
    russian: {
      basic: 'к',
      shift: 'К',
      caps: 'К',
      capsShift: 'к',
    },
  },
  {
    code: 'KeyT',
    english: {
      basic: 't',
      shift: 'T',
      caps: 'T',
      capsShift: 't',
    },
    russian: {
      basic: 'е',
      shift: 'Е',
      caps: 'Е',
      capsShift: 'e',
    },
  },
  {
    code: 'KeyY',
    english: {
      basic: 'y',
      shift: 'Y',
      caps: 'Y',
      capsShift: 'y',
    },
    russian: {
      basic: 'н',
      shift: 'Н',
      caps: 'Н',
      capsShift: 'н',
    },
  },
  {
    code: 'KeyU',
    english: {
      basic: 'u',
      shift: 'U',
      caps: 'U',
      capsShift: 'u',
    },
    russian: {
      basic: 'г',
      shift: 'Г',
      caps: 'Г',
      capsShift: 'г',
    },
  },
  {
    code: 'KeyI',
    english: {
      basic: 'i',
      shift: 'I',
      caps: 'I',
      capsShift: 'i',
    },
    russian: {
      basic: 'ш',
      shift: 'Ш',
      caps: 'Ш',
      capsShift: 'ш',
    },
  },
  {
    code: 'KeyO',
    english: {
      basic: 'o',
      shift: 'O',
      caps: 'O',
      capsShift: 'o',
    },
    russian: {
      basic: 'щ',
      shift: 'Щ',
      caps: 'Щ',
      capsShift: 'щ',
    },
  },
  {
    code: 'KeyP',
    english: {
      basic: 'p',
      shift: 'P',
      caps: 'P',
      capsShift: 'p',
    },
    russian: {
      basic: 'з',
      shift: 'З',
      caps: 'З',
      capsShift: 'з',
    },
  },
  {
    code: 'BracketLeft',
    english: {
      basic: '[',
      shift: '{',
      caps: '[',
      capsShift: '{',
    },
    russian: {
      basic: 'х',
      shift: 'Х',
      caps: 'Х',
      capsShift: 'x',
    },
  },
  {
    code: 'BracketRight',
    english: {
      basic: ']',
      shift: '}',
      caps: ']',
      capsShift: '}',
    },
    russian: {
      basic: 'ъ',
      shift: 'Ъ',
      caps: 'Ъ',
      capsShift: 'ъ',
    },
  },
  {
    code: 'Backslash',
    english: {
      basic: '\\',
      shift: '|',
      caps: '\\',
      capsShift: '|',
    },
    russian: {
      basic: '\\',
      shift: '/',
      caps: '\\',
      capsShift: '/',
    },
  },
  {
    code: 'Delete',
    english: {
      basic: 'Del',
      shift: 'Del',
      caps: 'Del',
      capsShift: 'Del',
    },
    russian: {
      basic: 'Del',
      shift: 'Del',
      caps: 'Del',
      capsShift: 'Del',
    },
  },
  {
    code: 'CapsLock',
    english: {
      basic: '⇪ Caps',
      shift: '⇪ Caps',
      caps: '⇪ Caps',
      capsShift: '⇪ Caps',
    },
    russian: {
      basic: '⇪ Caps',
      shift: '⇪ Caps',
      caps: '⇪ Caps',
      capsShift: '⇪ Caps',
    },
  },
  {
    code: 'KeyA',
    english: {
      basic: 'a',
      shift: 'A',
      caps: 'A',
      capsShift: 'a',
    },
    russian: {
      basic: 'ф',
      shift: 'Ф',
      caps: 'Ф',
      capsShift: 'ф',
    },
  },
  {
    code: 'KeyS',
    english: {
      basic: 's',
      shift: 'S',
      caps: 'S',
      capsShift: 's',
    },
    russian: {
      basic: 'ы',
      shift: 'Ы',
      caps: 'Ы',
      capsShift: 'ы',
    },
  },
  {
    code: 'KeyD',
    english: {
      basic: 'd',
      shift: 'D',
      caps: 'D',
      capsShift: 'd',
    },
    russian: {
      basic: 'в',
      shift: 'В',
      caps: 'В',
      capsShift: 'в',
    },
  },
  {
    code: 'KeyF',
    english: {
      basic: 'f',
      shift: 'F',
      caps: 'F',
      capsShift: 'f',
    },
    russian: {
      basic: 'а',
      shift: 'А',
      caps: 'А',
      capsShift: 'а',
    },
  },
  {
    code: 'KeyG',
    english: {
      basic: 'g',
      shift: 'G',
      caps: 'G',
      capsShift: 'g',
    },
    russian: {
      basic: 'п',
      shift: 'П',
      caps: 'П',
      capsShift: 'п',
    },
  },
  {
    code: 'KeyH',
    english: {
      basic: 'h',
      shift: 'H',
      caps: 'H',
      capsShift: 'h',
    },
    russian: {
      basic: 'р',
      shift: 'Р',
      caps: 'Р',
      capsShift: 'р',
    },
  },
  {
    code: 'KeyJ',
    english: {
      basic: 'j',
      shift: 'J',
      caps: 'J',
      capsShift: 'j',
    },
    russian: {
      basic: 'о',
      shift: 'О',
      caps: 'О',
      capsShift: 'о',
    },
  },
  {
    code: 'KeyK',
    english: {
      basic: 'k',
      shift: 'K',
      caps: 'K',
      capsShift: 'k',
    },
    russian: {
      basic: 'л',
      shift: 'Л',
      caps: 'Л',
      capsShift: 'л',
    },
  },
  {
    code: 'KeyL',
    english: {
      basic: 'l',
      shift: 'L',
      caps: 'L',
      capsShift: 'l',
    },
    russian: {
      basic: 'д',
      shift: 'Д',
      caps: 'Д',
      capsShift: 'д',
    },
  },
  {
    code: 'Semicolon',
    english: {
      basic: ';',
      shift: ':',
      caps: ';',
      capsShift: ':',
    },
    russian: {
      basic: 'ж',
      shift: 'Ж',
      caps: 'Ж',
      capsShift: 'ж',
    },
  },
  {
    code: 'Quote',
    english: {
      basic: '\'',
      shift: '"',
      caps: '\'',
      capsShift: '"',
    },
    russian: {
      basic: 'э',
      shift: 'Э',
      caps: 'Э',
      capsShift: 'э',
    },
  },
  {
    code: 'Enter',
    english: {
      basic: '↵ Enter',
      shift: '↵ Enter',
      caps: '↵ Enter',
      capsShift: '↵ Enter',
    },
    russian: {
      basic: '↵ Enter',
      shift: '↵ Enter',
      caps: '↵ Enter',
      capsShift: '↵ Enter',
    },
  },
  {
    code: 'ShiftLeft',
    english: {
      basic: '⇧ Shift',
      shift: '⇧ Shift',
      caps: '⇧ Shift',
      capsShift: '⇧ Shift',
    },
    russian: {
      basic: '⇧ Shift',
      shift: '⇧ Shift',
      caps: '⇧ Shift',
      capsShift: '⇧ Shift',
    },
  },
  {
    code: 'KeyZ',
    english: {
      basic: 'z',
      shift: 'Z',
      caps: 'Z',
      capsShift: 'z',
    },
    russian: {
      basic: 'я',
      shift: 'Я',
      caps: 'Я',
      capsShift: 'я',
    },
  },
  {
    code: 'KeyX',
    english: {
      basic: 'x',
      shift: 'X',
      caps: 'X',
      capsShift: 'x',
    },
    russian: {
      basic: 'ч',
      shift: 'Ч',
      caps: 'Ч',
      capsShift: 'ч',
    },
  },
  {
    code: 'KeyC',
    english: {
      basic: 'c',
      shift: 'C',
      caps: 'C',
      capsShift: 'c',
    },
    russian: {
      basic: 'с',
      shift: 'С',
      caps: 'С',
      capsShift: 'с',
    },
  },
  {
    code: 'KeyV',
    english: {
      basic: 'v',
      shift: 'V',
      caps: 'V',
      capsShift: 'v',
    },
    russian: {
      basic: 'м',
      shift: 'М',
      caps: 'М',
      capsShift: 'м',
    },
  },
  {
    code: 'KeyB',
    english: {
      basic: 'b',
      shift: 'B',
      caps: 'B',
      capsShift: 'b',
    },
    russian: {
      basic: 'и',
      shift: 'И',
      caps: 'И',
      capsShift: 'и',
    },
  },
  {
    code: 'KeyN',
    english: {
      basic: 'n',
      shift: 'N',
      caps: 'N',
      capsShift: 'n',
    },
    russian: {
      basic: 'т',
      shift: 'Т',
      caps: 'Т',
      capsShift: 'т',
    },
  },
  {
    code: 'KeyM',
    english: {
      basic: 'm',
      shift: 'M',
      caps: 'M',
      capsShift: 'm',
    },
    russian: {
      basic: 'ь',
      shift: 'Ь',
      caps: 'Ь',
      capsShift: 'ь',
    },
  },
  {
    code: 'Comma',
    english: {
      basic: ',',
      shift: '<',
      caps: ',',
      capsShift: '<',
    },
    russian: {
      basic: 'б',
      shift: 'Б',
      caps: 'Б',
      capsShift: 'б',
    },
  },
  {
    code: 'Period',
    english: {
      basic: '.',
      shift: '>',
      caps: '.',
      capsShift: '>',
    },
    russian: {
      basic: 'ю',
      shift: 'Ю',
      caps: 'Ю',
      capsShift: 'ю',
    },
  },
  {
    code: 'Slash',
    english: {
      basic: '/',
      shift: '?',
      caps: '/',
      capsShift: '?',
    },
    russian: {
      basic: '.',
      shift: ',',
      caps: '.',
      capsShift: ',',
    },
  },
  {
    code: 'ArrowUp',
    english: {
      basic: '▲',
      shift: '▲',
      caps: '▲',
      capsShift: '▲',

    },
    russian: {
      basic: '▲',
      shift: '▲',
      caps: '▲',
      capsShift: '▲',
    },
  },
  {
    code: 'ShiftRight',
    english: {
      basic: '⇧ Shift',
      shift: '⇧ Shift',
      caps: '⇧ Shift',
      capsShift: '⇧ Shift',
    },
    russian: {
      basic: '⇧ Shift',
      shift: '⇧ Shift',
      caps: '⇧ Shift',
      capsShift: '⇧ Shift',
    },
  },
  {
    code: 'ControlLeft',
    english: {
      basic: 'Ctrl',
      shift: 'Ctrl',
      caps: 'Ctrl',
      capsShift: 'Ctrl',
    },
    russian: {
      basic: 'Ctrl',
      shift: 'Ctrl',
      caps: 'Ctrl',
      capsShift: 'Ctrl',
    },
  },
  {
    code: 'MetaLeft',
    english: {
      basic: 'Win',
      shift: 'Win',
      caps: 'Win',
      capsShift: 'Win',
    },
    russian: {
      basic: 'Win',
      shift: 'Win',
      caps: 'Win',
      capsShift: 'Win',
    },
  },
  {
    code: 'AltLeft',
    english: {
      basic: 'Alt',
      shift: 'Alt',
      caps: 'Alt',
      capsShift: 'Alt',
    },
    russian: {
      basic: 'Alt',
      shift: 'Alt',
      caps: 'Alt',
      capsShift: 'Alt',
    },
  },
  {
    code: 'Space',
    english: {
      basic: 'Space',
      shift: 'Space',
      caps: 'Space',
      capsShift: 'Space',
    },
    russian: {
      basic: 'Space',
      shift: 'Space',
      caps: 'Space',
      capsShift: 'Space',
    },
  },
  {
    code: 'AltRight',
    english: {
      basic: 'Alt',
      shift: 'Alt',
      caps: 'Alt',
      capsShift: 'Alt',
    },
    russian: {
      basic: 'Alt',
      shift: 'Alt',
      caps: 'Alt',
      capsShift: 'Alt',
    },
  },
  {
    code: 'ArrowLeft',
    english: {
      basic: '◄',
      shift: '◄',
      caps: '◄',
      capsShift: '◄',
    },
    russian: {
      basic: '◄',
      shift: '◄',
      caps: '◄',
      capsShift: '◄',
    },
  },
  {
    code: 'ArrowDown',
    english: {
      basic: '▼',
      shift: '▼',
      caps: '▼',
      capsShift: '▼',
    },
    russian: {
      basic: '▼',
      shift: '▼',
      caps: '▼',
      capsShift: '▼',
    },
  },
  {
    code: 'ArrowRight',
    english: {
      basic: '►',
      shift: '►',
      caps: '►',
      capsShift: '►',
    },
    russian: {
      basic: '►',
      shift: '►',
      caps: '►',
      capsShift: '►',
    },
  },
  {
    code: 'ControlRight',
    english: {
      basic: 'Ctrl',
      shift: 'Ctrl',
      caps: 'Ctrl',
      capsShift: 'Ctrl',
    },
    russian: {
      basic: 'Ctrl',
      shift: 'Ctrl',
      caps: 'Ctrl',
      capsShift: 'Ctrl',
    },
  },

];
export default keys;
