const buttons = {
  en: {
    backquote: "`",
    q: "q",
    w: "w",
    e: "e",
    r: "r",
    t: "t",
    y: "y",
    u: "u",
    i: "i",
    o: "o",
    p: "p",
    "[": "[",
    "]": "]",
    a: "a",
    s: "s",
    d: "d",
    f: "f",
    g: "g",
    h: "h",
    j: "j",
    k: "k",
    l: "l",
    ";": ";",
    quotes: "'",
    z: "z",
    x: "x",
    c: "c",
    v: "v",
    b: "b",
    n: "n",
    m: "m",
    comma: ",",
    period: ".",
    slash: "/",
    system: "клавиатура выполнена на системе windows",
    changing: "для смены языка используйте: ctrl + alt",
  },
  ru: {
    backquote: "ё",
    q: "й",
    w: "ц",
    e: "у",
    r: "к",
    t: "е",
    y: "н",
    u: "г",
    i: "ш",
    o: "щ",
    p: "з",
    "[": "х",
    "]": "ъ",
    a: "ф",
    s: "ы",
    d: "в",
    f: "а",
    g: "п",
    h: "р",
    j: "о",
    k: "л",
    l: "д",
    ";": "ж",
    quotes: "э",
    z: "я",
    x: "ч",
    c: "с",
    v: "м",
    b: "и",
    n: "т",
    m: "ь",
    comma: "б",
    period: "ю",
    slash: ".",
    system: "клавиатура выполнена на системе windows",
    changing: "для смены языка используйте: ctrl + alt",
  },
};

const defaultLang = "en";
let lang = localStorage.getItem("lang" || defaultLang);
let capsLocked = false;
let positionCursor = 0;
let textForm = "";

const body = document.querySelector("body");

function contentPages() {
  const content = `<div class="wrapper">
    <h1>Virtual Keyboard</h1>
    <textarea name="textarea" class="textarea" autofocus></textarea>
    <div class="keyboard">
        <div class="first-row">
            <div class="key letter symbol" data-i18="backquote" id="Backquote">\`</div>
            <div class="key digit" id="Digit1">1</div>
            <div class="key digit" id="Digit2">2</div>
            <div class="key digit" id="Digit3">3</div>
            <div class="key digit" id="Digit4">4</div>
            <div class="key digit" id="Digit5">5</div>
            <div class="key digit" id="Digit6">6</div>
            <div class="key digit" id="Digit7">7</div>
            <div class="key digit" id="Digit8">8</div>
            <div class="key digit" id="Digit9">9</div>
            <div class="key digit" id="Digit0">0</div>
            <div class="key symbol" id="Minus">-</div>
            <div class="key symbol" id="Equal">=</div>
            <div class="key control-key middle backspace" id="Backspace">backspaсe</div>
        </div>
        <div class="second-row">
            <div class="key control-key tab" id="Tab">tab</div>
            <div class="key letter" data-i18="q" id="KeyQ">q</div>
            <div class="key letter" data-i18="w" id="KeyW">w</div>
            <div class="key letter" data-i18="e" id="KeyE">e</div>
            <div class="key letter" data-i18="r" id="KeyR">r</div>
            <div class="key letter" data-i18="t" id="KeyT">t</div>
            <div class="key letter" data-i18="y" id="KeyY">y</div>
            <div class="key letter" data-i18="u" id="KeyU">u</div>
            <div class="key letter" data-i18="i" id="KeyI">i</div>
            <div class="key letter" data-i18="o" id="KeyO">o</div>
            <div class="key letter" data-i18="p" id="KeyP">p</div>
            <div class="key letter symbol" data-i18="[" id="BracketLeft">[</div>
            <div class="key letter symbol" data-i18="]" id="BracketRight">]</div>
            <div class="key symbol" id="Backslash">\\</div>
            <div class="key control-key del" id='Delete'>del</div>
        </div>
        <div class="third-row">
            <div class="key control-key middle capslock" id="CapsLock">caps lock</div>
            <div class="key letter" data-i18="a" id="KeyA">a</div>
            <div class="key letter" data-i18="s" id="KeyS">s</div>
            <div class="key letter" data-i18="d" id="KeyD">d</div>
            <div class="key letter" data-i18="f" id="KeyF">f</div>
            <div class="key letter" data-i18="g" id="KeyG">g</div>
            <div class="key letter" data-i18="h" id="KeyH">h</div>
            <div class="key letter" data-i18="j" id="KeyJ">j</div>
            <div class="key letter" data-i18="k" id="KeyK">k</div>
            <div class="key letter" data-i18="l" id="KeyL">l</div>
            <div class="key letter symbol" data-i18=";" id="Semicolon">;</div>
            <div class="key letter symbol" data-i18="quotes" id="Quote">'</div>
            <div class="key control-key middle enter" id='Enter'>Enter</div>
        </div>
        <div class="fourth-row">
            <div class="key control-key mniddle shift" id="ShiftLeft">shift</div>
            <div class="key letter" data-i18="z" id="KeyZ">z</div>
            <div class="key letter" data-i18="x" id="KeyX">x</div>
            <div class="key letter" data-i18="c" id="KeyC">c</div>
            <div class="key letter" data-i18="v" id="KeyV">v</div>
            <div class="key letter" data-i18="b" id="KeyB">b</div>
            <div class="key letter" data-i18="n" id="KeyN">n</div>
            <div class="key letter" data-i18="m" id="KeyM">m</div>
            <div class="key letter symbol" data-i18="comma" id="Comma">,</div>
            <div class="key letter symbol" data-i18="period" id="Period">.</div>
            <div class="key symbol" data-i18="slash" id="Slash">/</div>
            <div class="key control-key arrow-up arrow" id='ArrowUp'>▲</div>
            <div class="key control-key middle shift" id='ShiftRight'>shift</div>
        </div>
        <div class="fifth-row">
            <div class="key control-key" id='ControlLeft'>ctrl</div>
            <div class="key control-key" id='MetaLeft'>win</div>
            <div class="key control-key" id='AltLeft'>alt</div>
            <div class="key big" id='Space'> </div>
            <div class="key control-key" id="AltRight">alt</div>
            <div class="key control-key arrow" id='ArrowLeft'>◄</div>
            <div class="key control-key arrow" id='ArrowDown'>▼</div>
            <div class="key control-key arrow" id='ArrowRight'>►</div>
            <div class="key control-key" id='ControlRight'>ctrl</div>
        </div>
    </div>
    <p>Available hotkeys:
    Ctrl + Alt - switch language</p>
</div>`;
  body.insertAdjacentHTML("afterbegin", content);
}
contentPages();

const virtualKeyboard = document.querySelector(".keyboard");
const textArea = document.querySelector(".textarea");
const altRight = document.querySelector("#AltRight");
const altLeft = document.querySelector("#AltLeft");
const controlLeft = document.querySelector("#ControlLeft");
const controlRight = document.querySelector("#ControlRight");
const shift = document.querySelectorAll(".shift");
const letters = document.querySelectorAll(".letter");
const symbols = document.querySelectorAll(".symbol");
const digits = document.querySelectorAll(".digit");
const data = document.querySelectorAll("[data-i18]");

function onShift() {
  const [one, two, three, four, five, six, seven, eoght, nine, zero] = digits;
  const [
    slash,
    period,
    comma,
    quote,
    semicolon,
    backslash,
    breacketright,
    breacketleft,
    equal,
    minus,
    backquote,
  ] = symbols;
  if (lang === "en") {
    one.textContent = "!";
    two.textContent = "@";
    three.textContent = "#";
    four.textContent = "$";
    five.textContent = "%";
    six.textContent = "^";
    seven.textContent = "&";
    eoght.textContent = "*";
    nine.textContent = "(";
    zero.textContent = ")";
    slash.textContent = "?";
    period.textContent = ">";
    comma.textContent = "<";
    quote.textContent = '"';
    semicolon.textContent = ":";
    backslash.textContent = "|";
    breacketright.textContent = "}";
    breacketleft.textContent = "{";
    equal.textContent = "+";
    minus.textContent = "-";
    backquote.textContent = "~";
  } else if (lang === "ru") {
    one.textContent = "!";
    two.textContent = '"';
    three.textContent = "№";
    four.textContent = ";";
    five.textContent = "%";
    six.textContent = ":";
    seven.textContent = "?";
    eoght.textContent = "*";
    nine.textContent = "(";
    zero.textContent = ")";
    slash.textContent = "=";
    equal.textContent = "+";
    backslash.textContent = "/";
    minus.textContent = "_";
  }
}

function offShift() {
  const [one, two, three, four, five, six, seven, eoght, nine, zero] = digits;
  const [
    slash,
    period,
    comma,
    quote,
    semicolon,
    backslash,
    breacketright,
    breacketleft,
    equal,
    minus,
    backquote,
  ] = symbols;

  one.textContent = "1";
  two.textContent = "2";
  three.textContent = "3";
  four.textContent = "4";
  five.textContent = "5";
  six.textContent = "6";
  seven.textContent = "7";
  eoght.textContent = "8";
  nine.textContent = "9";
  zero.textContent = "0";
  minus.textContent = "-";
  equal.textContent = "+";
  if (lang === "en") {
    slash.textContent = "/";
    period.textContent = ".";
    comma.textContent = ",";
    quote.textContent = "'";
    semicolon.textContent = ";";
    backslash.textContent = "\\";
    breacketright.textContent = "]";
    breacketleft.textContent = "[";
    backquote.textContent = "`";
  } else if (lang === "ru") {
    slash.textContent = ".";
    backslash.textContent = "\\";
  }
}
function translation() {
  data.forEach((el) => {
    const elem = el;
    elem.textContent = buttons[lang][elem.dataset.i18];
  });
}

function lowerUpperLetter() {
  if (capsLocked) {
    letters.forEach((l) => {
      const letter = l;
      letter.textContent = letter.textContent.toLowerCase();
    });
  } else if (!capsLocked) {
    letters.forEach((l) => {
      const letter = l;
      letter.textContent = letter.textContent.toUpperCase();
    });
  }
}

function delFormText() {
  if (positionCursor > 0) {
    textForm =
      textForm.substring(0, textArea.selectionStart - 1) +
      textForm.substring(textArea.selectionEnd);
    positionCursor -= 1;
  }
}
function buttonDel() {
  textForm =
    textForm.substring(0, textArea.selectionStart) +
    textForm.substring(textArea.selectionEnd + 1);
}

textArea.addEventListener("click", () => {
  positionCursor = textArea.selectionStart;
});

function enter(text) {
  textForm =
    textForm.substring(0, positionCursor) +
    text +
    textForm.substring(positionCursor);
  positionCursor += text.length;
  console.log(text.lenght);
}

function updateText() {
  textArea.textContent = textForm;
  textArea.selectionStart = positionCursor;
  textArea.focus();
}

function upAndLowerCase(key) {
  if (capsLocked) {
    key.classList.remove("caps-active");
    key.classList.remove("active");
    key.classList.remove("act-background");
    letters.forEach((l) => {
      const letter = l;
      letter.textContent = letter.textContent.toLocaleLowerCase();
    });
    capsLocked = false;
  } else if (!capsLocked) {
    letters.forEach((l) => {
      const letter = l;
      letter.textContent = letter.textContent.toLocaleUpperCase();
    });
    key.classList.add("caps-active");
    key.classList.add("active");
    key.classList.add("act-background");
    capsLocked = true;
  }
}

function changeLang() {
  if (lang === "ru") {
    lang = "en";
  } else if (lang === "en") {
    lang = "ru";
  }

  saveToLocal();
  if (capsLocked) {
    data.forEach((el) => {
      const elem = el;
      elem.textContent = buttons[lang][elem.dataset.i18].toLocaleUpperCase();
    });
  } else if (!capsLocked) {
    data.forEach((el) => {
      const elem = el;
      elem.textContent = buttons[lang][elem.dataset.i18].toLocaleLowerCase();
    });
  }
}
function saveToLocal() {
  localStorage.setItem("lang", lang);
}

function SetPressedKey(key) {
  if (key.classList.contains("key") && !key.classList.contains("control-key")) {
    enter(key.textContent);
  }
  if (key.classList.contains("arrow")) {
    enter(key.textContent);
  }
  if (key.classList.contains("capslock")) {
    upAndLowerCase(key);
  }
  if (key.classList.contains("enter")) {
    enter("\n");
  }
  if (key.classList.contains("tab")) {
    enter("\t");
  }
  if (key.classList.contains("backspace")) {
    delFormText();
  }
  if (key.classList.contains("del")) {
    buttonDel();
  }
  updateText();
}

function pressureKey(el) {
  const key = document.querySelector(`#${el.code}`);
  if (key) {
    if (key.classList.contains("key")) {
      el.preventDefault();
    }
    if (key.classList.contains("control-key")) {
      key.classList.add("active-background");
    }
    key.classList.add("active");
    if (key.classList.contains("shift")) {
      onShift();
      lowerUpperLetter();
    }
    SetPressedKey(key);
  }
  if (
    controlLeft.classList.contains("active") &&
    altLeft.classList.contains("active")
  ) {
    changeLang();
  }
  if (
    controlRight.classList.contains("active") &&
    altRight.classList.contains("active")
  ) {
    changeLang();
  }
  if (
    controlRight.classList.contains("active") &&
    altLeft.classList.contains("active")
  ) {
    changeLang();
  }
  if (
    controlLeft.classList.contains("active") &&
    altRight.classList.contains("active")
  ) {
    changeLang();
  }
}

function UpKey(key) {
  if (key.classList.contains("shift")) {
    if (!capsLocked) {
      letters.forEach((l) => {
        const letter = l;
        letter.textContent = letter.textContent.toLocaleLowerCase();
      });
    } else if (capsLocked) {
      letters.forEach((l) => {
        const letter = l;
        letter.textContent = letter.textContent.toUpperCase();
      });
    }
    offShift();
  }
}

function releaseKey(el) {
  const key = document.querySelector(`#${el.code}`);
  if (key) {
    if (
      key.classList.contains("control-key") &&
      !key.classList.contains("capslock")
    ) {
      key.classList.remove("active-background");
    }
    if (!key.classList.contains("capslock")) {
      key.classList.remove("active");
    }
    UpKey(key);
  }
}

document.addEventListener("keydown", pressureKey);
document.addEventListener("keyup", releaseKey);

shift.forEach((shif) =>
  shif.addEventListener("mousedown", () => {
    onShift();
    lowerUpperLetter();
  })
);

shift.forEach((shif) =>
  shif.addEventListener("mouseup", (el) => {
    const key = el.target;
    UpKey(key);
  })
);

function indentKey(e) {
  const key = e.target;
  SetPressedKey(key);
}

virtualKeyboard.addEventListener("click", indentKey);

translation();
