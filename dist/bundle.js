(()=>{const t={en:{backquote:"`",q:"q",w:"w",e:"e",r:"r",t:"t",y:"y",u:"u",i:"i",o:"o",p:"p","[":"[","]":"]",a:"a",s:"s",d:"d",f:"f",g:"g",h:"h",j:"j",k:"k",l:"l",";":";",quotes:"'",z:"z",x:"x",c:"c",v:"v",b:"b",n:"n",m:"m",comma:",",period:".",slash:"/",system:"клавиатура выполнена на системе windows",changing:"для смены языка используйте: ctrl + alt"},ru:{backquote:"ё",q:"й",w:"ц",e:"у",r:"к",t:"е",y:"н",u:"г",i:"ш",o:"щ",p:"з","[":"х","]":"ъ",a:"ф",s:"ы",d:"в",f:"а",g:"п",h:"р",j:"о",k:"л",l:"д",";":"ж",quotes:"э",z:"я",x:"ч",c:"с",v:"м",b:"и",n:"т",m:"ь",comma:"б",period:"ю",slash:".",system:"клавиатура выполнена на системе windows",changing:"для смены языка используйте: ctrl + alt"}};let e=localStorage.getItem("lang"),i=!1,n=0,s="";document.querySelector("body").insertAdjacentHTML("afterbegin",'<div class="wrapper">\n    <h1>Virtual Keyboard</h1>\n    <textarea name="textarea" class="textarea" autofocus></textarea>\n    <div class="keyboard">\n        <div class="first-row">\n            <div class="key letter symbol" data-i18="backquote" id="Backquote">`</div>\n            <div class="key digit" id="Digit1">1</div>\n            <div class="key digit" id="Digit2">2</div>\n            <div class="key digit" id="Digit3">3</div>\n            <div class="key digit" id="Digit4">4</div>\n            <div class="key digit" id="Digit5">5</div>\n            <div class="key digit" id="Digit6">6</div>\n            <div class="key digit" id="Digit7">7</div>\n            <div class="key digit" id="Digit8">8</div>\n            <div class="key digit" id="Digit9">9</div>\n            <div class="key digit" id="Digit0">0</div>\n            <div class="key symbol" id="Minus">-</div>\n            <div class="key symbol" id="Equal">=</div>\n            <div class="key control-key middle backspace" id="Backspace">backspaсe</div>\n        </div>\n        <div class="second-row">\n            <div class="key control-key tab" id="Tab">tab</div>\n            <div class="key letter" data-i18="q" id="KeyQ">q</div>\n            <div class="key letter" data-i18="w" id="KeyW">w</div>\n            <div class="key letter" data-i18="e" id="KeyE">e</div>\n            <div class="key letter" data-i18="r" id="KeyR">r</div>\n            <div class="key letter" data-i18="t" id="KeyT">t</div>\n            <div class="key letter" data-i18="y" id="KeyY">y</div>\n            <div class="key letter" data-i18="u" id="KeyU">u</div>\n            <div class="key letter" data-i18="i" id="KeyI">i</div>\n            <div class="key letter" data-i18="o" id="KeyO">o</div>\n            <div class="key letter" data-i18="p" id="KeyP">p</div>\n            <div class="key letter symbol" data-i18="[" id="BracketLeft">[</div>\n            <div class="key letter symbol" data-i18="]" id="BracketRight">]</div>\n            <div class="key symbol" id="Backslash">\\</div>\n            <div class="key control-key del" id=\'Delete\'>del</div>\n        </div>\n        <div class="third-row">\n            <div class="key control-key middle capslock" id="CapsLock">caps lock</div>\n            <div class="key letter" data-i18="a" id="KeyA">a</div>\n            <div class="key letter" data-i18="s" id="KeyS">s</div>\n            <div class="key letter" data-i18="d" id="KeyD">d</div>\n            <div class="key letter" data-i18="f" id="KeyF">f</div>\n            <div class="key letter" data-i18="g" id="KeyG">g</div>\n            <div class="key letter" data-i18="h" id="KeyH">h</div>\n            <div class="key letter" data-i18="j" id="KeyJ">j</div>\n            <div class="key letter" data-i18="k" id="KeyK">k</div>\n            <div class="key letter" data-i18="l" id="KeyL">l</div>\n            <div class="key letter symbol" data-i18=";" id="Semicolon">;</div>\n            <div class="key letter symbol" data-i18="quotes" id="Quote">\'</div>\n            <div class="key control-key middle enter" id=\'Enter\'>Enter</div>\n        </div>\n        <div class="fourth-row">\n            <div class="key control-key mniddle shift" id="ShiftLeft">shift</div>\n            <div class="key letter" data-i18="z" id="KeyZ">z</div>\n            <div class="key letter" data-i18="x" id="KeyX">x</div>\n            <div class="key letter" data-i18="c" id="KeyC">c</div>\n            <div class="key letter" data-i18="v" id="KeyV">v</div>\n            <div class="key letter" data-i18="b" id="KeyB">b</div>\n            <div class="key letter" data-i18="n" id="KeyN">n</div>\n            <div class="key letter" data-i18="m" id="KeyM">m</div>\n            <div class="key letter symbol" data-i18="comma" id="Comma">,</div>\n            <div class="key letter symbol" data-i18="period" id="Period">.</div>\n            <div class="key symbol" data-i18="slash" id="Slash">/</div>\n            <div class="key control-key arrow-up arrow" id=\'ArrowUp\'>▲</div>\n            <div class="key control-key middle shift" id=\'ShiftRight\'>shift</div>\n        </div>\n        <div class="fifth-row">\n            <div class="key control-key" id=\'ControlLeft\'>ctrl</div>\n            <div class="key control-key" id=\'MetaLeft\'>win</div>\n            <div class="key control-key" id=\'AltLeft\'>alt</div>\n            <div class="key big" id=\'Space\'> </div>\n            <div class="key control-key" id="AltRight">alt</div>\n            <div class="key control-key arrow" id=\'ArrowLeft\'>◄</div>\n            <div class="key control-key arrow" id=\'ArrowDown\'>▼</div>\n            <div class="key control-key arrow" id=\'ArrowRight\'>►</div>\n            <div class="key control-key" id=\'ControlRight\'>ctrl</div>\n        </div>\n    </div>\n    <p>Available hotkeys:\n    Ctrl + Alt - switch language</p>\n</div>');const a=document.querySelector(".keyboard"),d=document.querySelector(".textarea"),o=document.querySelector("#AltRight"),c=document.querySelector("#AltLeft"),l=document.querySelector("#ControlLeft"),r=document.querySelector("#ControlRight"),v=document.querySelectorAll(".shift"),y=document.querySelectorAll(".letter"),k=document.querySelectorAll(".symbol"),C=document.querySelectorAll(".digit"),x=document.querySelectorAll("[data-i18]");function u(){const[t,i,n,s,a,d,o,c,l,r]=C,[v,y,x,u,g,m,L,f,h,b,p]=k;"en"===e?(t.textContent="!",i.textContent="@",n.textContent="#",s.textContent="$",a.textContent="%",d.textContent="^",o.textContent="&",c.textContent="*",l.textContent="(",r.textContent=")",v.textContent="?",y.textContent=">",x.textContent="<",u.textContent='"',g.textContent=":",m.textContent="|",L.textContent="}",f.textContent="{",h.textContent="+",b.textContent="-",p.textContent="~"):"ru"===e&&(t.textContent="!",i.textContent='"',n.textContent="№",s.textContent=";",a.textContent="%",d.textContent=":",o.textContent="?",c.textContent="*",l.textContent="(",r.textContent=")",v.textContent="=",h.textContent="+",m.textContent="/",b.textContent="_")}function g(){i?y.forEach((t=>{const e=t;e.textContent=e.textContent.toLowerCase()})):i||y.forEach((t=>{const e=t;e.textContent=e.textContent.toUpperCase()}))}function m(t){s=s.substring(0,n)+t+s.substring(n),n+=t.length,console.log(t.lenght)}function L(){"ru"===e?e="en":"en"===e&&(e="ru"),localStorage.setItem("lang",e),i?x.forEach((i=>{const n=i;n.textContent=t[e][n.dataset.i18].toLocaleUpperCase()})):i||x.forEach((i=>{const n=i;n.textContent=t[e][n.dataset.i18].toLocaleLowerCase()}))}function f(t){t.classList.contains("key")&&!t.classList.contains("control-key")&&m(t.textContent),t.classList.contains("arrow")&&m(t.textContent),t.classList.contains("capslock")&&function(t){i?(t.classList.remove("caps-active"),t.classList.remove("active"),t.classList.remove("act-background"),y.forEach((t=>{const e=t;e.textContent=e.textContent.toLocaleLowerCase()})),i=!1):i||(y.forEach((t=>{const e=t;e.textContent=e.textContent.toLocaleUpperCase()})),t.classList.add("caps-active"),t.classList.add("active"),t.classList.add("act-background"),i=!0)}(t),t.classList.contains("enter")&&m("\n"),t.classList.contains("tab")&&m("\t"),t.classList.contains("backspace")&&n>0&&(s=s.substring(0,d.selectionStart-1)+s.substring(d.selectionEnd),n-=1),t.classList.contains("del")&&(s=s.substring(0,d.selectionStart)+s.substring(d.selectionEnd+1)),d.textContent=s,d.selectionStart=n,d.focus()}function h(t){t.classList.contains("shift")&&(i?i&&y.forEach((t=>{const e=t;e.textContent=e.textContent.toUpperCase()})):y.forEach((t=>{const e=t;e.textContent=e.textContent.toLocaleLowerCase()})),function(){const[t,i,n,s,a,d,o,c,l,r]=C,[v,y,x,u,g,m,L,f,h,b,p]=k;t.textContent="1",i.textContent="2",n.textContent="3",s.textContent="4",a.textContent="5",d.textContent="6",o.textContent="7",c.textContent="8",l.textContent="9",r.textContent="0",b.textContent="-",h.textContent="+","en"===e?(v.textContent="/",y.textContent=".",x.textContent=",",u.textContent="'",g.textContent=";",m.textContent="\\",L.textContent="]",f.textContent="[",p.textContent="`"):"ru"===e&&(v.textContent=".",m.textContent="\\")}())}d.addEventListener("click",(()=>{n=d.selectionStart})),document.addEventListener("keydown",(function(t){const e=document.querySelector(`#${t.code}`);e&&(e.classList.contains("key")&&t.preventDefault(),e.classList.contains("control-key")&&e.classList.add("active-background"),e.classList.add("active"),e.classList.contains("shift")&&(u(),g()),f(e)),l.classList.contains("active")&&c.classList.contains("active")&&L(),r.classList.contains("active")&&o.classList.contains("active")&&L(),r.classList.contains("active")&&c.classList.contains("active")&&L(),l.classList.contains("active")&&o.classList.contains("active")&&L()})),document.addEventListener("keyup",(function(t){const e=document.querySelector(`#${t.code}`);e&&(e.classList.contains("control-key")&&!e.classList.contains("capslock")&&e.classList.remove("active-background"),e.classList.contains("capslock")||e.classList.remove("active"),h(e))})),v.forEach((t=>t.addEventListener("mousedown",(()=>{u(),g()})))),v.forEach((t=>t.addEventListener("mouseup",(t=>{h(t.target)})))),a.addEventListener("click",(function(t){f(t.target)})),x.forEach((i=>{const n=i;n.textContent=t[e][n.dataset.i18]}))})();