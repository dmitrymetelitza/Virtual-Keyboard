const i180bj = {
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

let lang = "en";
let capsLocked = false;
let positionCursor = 0;
let textTextArea = "";

const body = document.querySelector("body");

function contentPages() {
  const content = `<div class="wrapper">
    <h1>Keyboard</h1>
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
            <div class="key control-key middle backspace" id="backspase">backspase</div>
        </div>
        <div class="cecond-row">
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
            <div class="key letter symbol" data-i18="]" id="BracketRight">]</div>
            <div class="key control-key middle enter" id='Enter'>Enter</div>
        </div>
        <div class="fought-row">
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
        <div class="fought-row">
            <div class="key control-key" id='ControlLeft'>ctrl</div>
            <div class="key control-key" id='MetaLeft'>win</div>
            <div class="key control-key middle shift" id='ShiftRight'>shift</div>
            <div class="key control-key" id='AltLeft'>alt</div>
            <div class="key big" id='Space'> </div>
            <div class="key control-key arrow" id='ArrowLeft'>◄</div>
            <div class="key control-key arrow" id='ArrowDown'>▼</div>
            <div class="key control-key arrow" id='ArrowRight'>►</div>
            <div class="key control-key" id='ControlRight'>ctrl</div>
        </div>
    </div>
</div>`;
  body.insertAdjacentHTML("afterbegin", content);
}
contentPages();

const virtualKeyboard = document.querySelector(".keyboard");
const textArea = document.querySelector(".textarea");
const altRight = document.querySelector("#AltRight");
const altLeft = document.querySelector("#AltLeft");
const controlLeft = document.querySelector("#ControlLeft");
const controlRight = document.querySelector("#ControlRihgt");
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
