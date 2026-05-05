'use strict';

const p = document.getElementById('output');
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const start = document.getElementById('start');
const stopp = document.getElementById('stop');
const list = ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と", "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む", "め", "も", "や", "ゆ", "よ", "わ", "を", "ん", "が", "ぎ", "ぐ", "げ", "ご", "ざ", "じ", "ず", "ぜ", "ぞ", "だ", "ぢ", "づ", "で", "ど", "ば", "び", "ぶ", "べ", "ぼ", "ぱ", "ぴ", "ぷ", "ぺ", "ぽ", "あ゛", "い゛", "う゛", "え゛", "お゛", "ぁ", "ぃ", "ぅ", "ぇ", "ぉ", "っ", "ゃ", "ゅ", "ょ"];

function setRandomA() {
  let rand1 = Math.floor(Math.random()*(list.length-9));
  first.textContent = list[rand1];
}
function setRandomB() {
  let rand2 = Math.floor(Math.random()*list.length);
  second.textContent = list[rand2];
}
function setRandomC() {
  let rand3 = Math.floor(Math.random()*list.length);
  third.textContent = list[rand3];
}

let timer1;
let timer2;
let timer3;
start.addEventListener('click', () => {
  start.disabled = true;
  start.classList.add('disabledbtn');
  stopp.classList.remove('disabledbtn');
  first.classList.remove('under');
  second.classList.remove('under');
  third.classList.remove('under');
  timer1 = window.setInterval(setRandomA, 50);
  timer2 = window.setInterval(setRandomB, 50);
  timer3 = window.setInterval(setRandomC, 50);
});

stopp.addEventListener('click', () => {
  stopp.classList.add('disabledbtn');
  window.clearInterval(timer1);
  first.classList.add('under');
  //setTimeout(() => {
    //first.classList.remove('show');
  //}, 500);
  setTimeout(() => {
    window.clearInterval(timer2);
    second.classList.add('under');
  }, 1000);
  setTimeout(() => {
    window.clearInterval(timer3);
    third.classList.add('under');
    //Xへの共有
    const firstFigure = document.getElementById("first").textContent;
    const secondFigure = document.getElementById("second").textContent;
    const thirdFigure = document.getElementById("third").textContent;
    const share_twitter = document.getElementById("js-share-twitter");
    const share_title = `私の今日の３文字は「${firstFigure}${secondFigure}${thirdFigure}」`
    share_twitter.setAttribute(
	    "href",
	    "https://twitter.com/share?url=" + "https://shijianzongyi-lang.github.io/wanwan/" + "&text=" + share_title + "&hashtags=今日の３文字"
    );
    start.classList.remove('disabledbtn');
    start.disabled = false;
  }, 2000);
})
