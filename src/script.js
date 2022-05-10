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
    system: "Keyboard Windows",
    changing: "Available hotkeys: Ctrl + Alt - switch language",
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
    system: "Keyboard Windows",
    changing: "Available hotkeys: Ctrl + Alt - switch language",
  },
};

const defaultLang = "en";
let lang = localStorage.getItem("lang") || defaultLang;

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
                                <div class="key letter symbol" data-i18="backquote" id='Backquote'>\`</div>
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
                                <div class="key control-key middle backspace" id="Backspace">backspace</div>
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
                                <div class="key control-key del" id="Delete">del</div>
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
                                <div class="key control-key middle enter" id="Enter">enter</div>
                            </div>
                            <div class="fourth-row">
                                <div class="key control-key middle shift" id="ShiftLeft">shift</div>
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
                                <div class="key control-key arrow-up arrow" id="ArrowUp">▲</div>
                                <div class="key control-key middle shift" id="ShiftRight">shift</div>
                            </div>
                            <div class="fifth-row">
                                <div class="key control-key" id="ControlLeft">ctrl</div>
                                <div class="key control-key" id="MetaLeft">win</div>
                                <div class="key control-key" id="AltLeft">alt</div>
                                <div class="key big" id="Space"> </div>
                                <div class="key control-key" id="AltRight">alt</div>
                                <div class="key control-key arrow" id="ArrowLeft">◄</div>
                                <div class="key control-key arrow" id="ArrowDown">▼</div>
                                <div class="key control-key arrow" id="ArrowRight">►</div>
                                <div class="key control-key" id="ControlRight">ctrl</div>
                            </div>
                        </div>
                        <div class="addition">
                            <p data-i18="system">Keyboard Windows</p>
                            <p data-i18="changing">Available hotkeys: Ctrl + Alt - switch language</p>
                        </div>
                    </div>`;

  body.insertAdjacentHTML("afterbegin", content);
}
contentPages();

const data = document.querySelectorAll("[data-i18]");
const letters = document.querySelectorAll(".letter");
const digits = document.querySelectorAll(".digit");
const symbols = document.querySelectorAll(".symbol");
const shift = document.querySelectorAll(".shift");

const controlLeft = document.querySelector("#ControlLeft");
const altLeft = document.querySelector("#AltLeft");
const controlRight = document.querySelector("#ControlRight");
const altRight = document.querySelector("#AltRight");

const textarea = document.querySelector(".textarea");
const keyboard = document.querySelector(".keyboard");

function saveToLocal() {
  localStorage.setItem("lang", lang);
}

function translation() {
  data.forEach((el) => {
    const elem = el;
    elem.textContent = buttons[lang][elem.dataset.i18];
  });
}

function onShift() {
  const [one, two, three, four, five, six, seven, eight, nine, zero] = digits;
  const [
    backquote,
    minus,
    equal,
    bracketleft,
    bracketright,
    backslash,
    semicolon,
    quote,
    comma,
    period,
    slash,
  ] = symbols;
  if (lang === "en") {
    one.textContent = "!";
    two.textContent = "@";
    three.textContent = "#";
    four.textContent = "$";
    five.textContent = "%";
    six.textContent = "^";
    seven.textContent = "&";
    eight.textContent = "*";
    nine.textContent = "(";
    zero.textContent = ")";
    backquote.textContent = "~";
    minus.textContent = "_";
    equal.textContent = "+";
    bracketleft.textContent = "{";
    bracketright.textContent = "}";
    backslash.textContent = "|";
    semicolon.textContent = ":";
    quote.textContent = '"';
    comma.textContent = "<";
    period.textContent = ">";
    slash.textContent = "?";
  } else if (lang === "ru") {
    one.textContent = "!";
    two.textContent = '"';
    three.textContent = "№";
    four.textContent = ";";
    five.textContent = "%";
    six.textContent = ":";
    seven.textContent = "?";
    eight.textContent = "*";
    nine.textContent = "(";
    zero.textContent = ")";
    minus.textContent = "_";
    equal.textContent = "+";
    backslash.textContent = "/";
    slash.textContent = ",";
  }
}

function offShift() {
  const [one, two, three, four, five, six, seven, eight, nine, zero] = digits;
  const [
    backquote,
    minus,
    equal,
    bracketleft,
    bracketright,
    backslash,
    semicolon,
    quote,
    comma,
    period,
    slash,
  ] = symbols;
  one.textContent = "1";
  two.textContent = "2";
  three.textContent = "3";
  four.textContent = "4";
  five.textContent = "5";
  six.textContent = "6";
  seven.textContent = "7";
  eight.textContent = "8";
  nine.textContent = "9";
  zero.textContent = "0";
  minus.textContent = "-";
  equal.textContent = "=";
  if (lang === "en") {
    backquote.textContent = "`";
    bracketleft.textContent = "[";
    bracketright.textContent = "]";
    backslash.textContent = "\\";
    semicolon.textContent = ";";
    quote.textContent = "'";
    comma.textContent = ",";
    period.textContent = ".";
    slash.textContent = "/";
  } else if (lang === "ru") {
    backslash.textContent = "\\";
    slash.textContent = ".";
  }
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

function delFromTextarea() {
  if (positionCursor > 0) {
    textForm =
      textForm.substring(0, textarea.selectionStart - 1) +
      textForm.substring(textarea.selectionEnd);
    positionCursor -= 1;
  }
}

function buttonDel() {
  textForm =
    textForm.substring(0, textarea.selectionStart) +
    textForm.substring(textarea.selectionEnd + 1);
}

textarea.addEventListener("click", () => {
  positionCursor = textarea.selectionStart;
});

function enter(text) {
  textForm =
    textForm.substring(0, positionCursor) +
    text +
    textForm.substring(positionCursor);
  positionCursor += text.length;
}

function updateText() {
  textarea.textContent = textForm;
  textarea.selectionStart = positionCursor;
  textarea.focus();
}

function upandLowerCase(key) {
  if (capsLocked) {
    key.classList.remove("capslock-active");
    key.classList.remove("active");
    key.classList.remove("active-background");
    letters.forEach((l) => {
      const letter = l;
      letter.textContent = letter.textContent.toLowerCase();
    });
    capsLocked = false;
  } else if (!capsLocked) {
    letters.forEach((l) => {
      const letter = l;
      letter.textContent = letter.textContent.toUpperCase();
    });
    key.classList.add("capslock-active");
    key.classList.add("active");
    key.classList.add("active-background");
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
      elem.textContent = buttons[lang][elem.dataset.i18].toUpperCase();
    });
  } else if (!capsLocked) {
    data.forEach((el) => {
      const elem = el;
      elem.textContent = buttons[lang][elem.dataset.i18].toLowerCase();
    });
  }
}

function SerPressedKey(key) {
  if (key.classList.contains("key") && !key.classList.contains("control-key")) {
    enter(key.textContent);
  }
  if (key.classList.contains("arrow")) {
    enter(key.textContent);
  }
  if (key.classList.contains("capslock")) {
    upandLowerCase(key);
  }
  if (key.classList.contains("enter")) {
    enter("\n");
  }
  if (key.classList.contains("tab")) {
    enter("\t");
  }
  if (key.classList.contains("backspace")) {
    delFromTextarea();
  }
  if (key.classList.contains("del")) {
    buttonDel();
  }
  updateText();
}

function pressureKey(e) {
  const key = document.querySelector(`#${e.code}`);
  if (key) {
    if (key.classList.contains("key")) {
      e.preventDefault();
    }
    if (key.classList.contains("control-key")) {
      key.classList.add("active-background");
    }
    key.classList.add("active");
    if (key.classList.contains("shift")) {
      onShift();
      lowerUpperLetter();
    }
    SerPressedKey(key);
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
        letter.textContent = letter.textContent.toLowerCase();
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

function releaseKey(e) {
  const key = document.querySelector(`#${e.code}`);
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

shift.forEach((shift) =>
  shift.addEventListener("mousedown", () => {
    onShift();
    lowerUpperLetter();
  })
);

shift.forEach((shif) =>
  shif.addEventListener("mouseup", (e) => {
    const key = e.target;
    UpKey(key);
  })
);

function identKey(e) {
  const key = e.target;
  SerPressedKey(key);
}

keyboard.addEventListener("click", identKey);

translation();
