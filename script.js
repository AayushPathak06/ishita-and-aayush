const app = document.getElementById("app");

let story = {
date:"",
mood:"",
extras:[],
note:""
};

createParticles();
startFloatingMemories();
showWelcome();

/* --------------------- */
/* RENDER */
/* --------------------- */

function render(html){
app.innerHTML = html;
}

/* --------------------- */
/* WELCOME */
/* --------------------- */

function showWelcome(){

render(`

<div class="scene">

<div class="card">

<div class="envelope"
onclick="openEnvelope(this)">

<div class="envelope-flap"></div>

<div class="envelope-body"></div>

</div>

<div class="title">
Ishita & Aayush ❤️
</div>

<div class="subtitle">
For the person behind my favorite notifications ❤️
</div>

<p class="text">

You have 1 unread memory ❤️

</p>

</div>

</div>

`);

}

/* --------------------- */
/* ENVELOPE */
/* --------------------- */

function openEnvelope(el){

el.classList.add("open");

setTimeout(()=>{

showPassword();

},900);

}

/* --------------------- */
/* PASSWORD */
/* --------------------- */

function showPassword(){

render(`

<div class="scene">

<div class="card">

<div class="heading">
Tell me...
</div>

<p class="text">

When did screenshots become hand-holding? ❤️

</p>

<input
id="pwd"
type="password"
class="password-input"
placeholder="Enter Password">

<p id="error"></p>

<button
class="primary-btn"
onclick="checkPassword()">

Unlock Our Story ❤️

</button>

</div>

</div>

`);

}

function checkPassword(){

const pass =
document.getElementById("pwd").value;

if(pass !== "26092025"){

document.getElementById("error").innerHTML =
"That's not our special day 🙈";

return;

}

showLetter();

}

/* --------------------- */
/* LETTER */
/* --------------------- */

function showLetter(){

render(`

<div class="scene">

<div class="card">

<div class="heading">
Dear Ishita ❤️
</div>

<p
id="letter"
class="text">
</p>

<button
id="continueBtn"
style="display:none"
class="primary-btn"
onclick="showCounter()">

Continue ✨

</button>

</div>

</div>

`);

const fullText =

`Before we choose another adventure...

I just wanted to remind you that meeting you on 26 September 2025 remains one of my favorite moments.

❤️`;

const words =
fullText.split(" ");

let i = 0;

const target =
document.getElementById("letter");

const interval =
setInterval(()=>{

target.innerHTML +=
words[i] + " ";

i++;

if(i >= words.length){

clearInterval(interval);

document
.getElementById("continueBtn")
.style.display="inline-block";

}

},120);

}

/* --------------------- */
/* COUNTER */
/* --------------------- */

function showCounter(){

render(`

<div class="scene">

<div class="card">

<div class="heading">
Together Since ❤️
</div>

<div id="counter"></div>

<p class="text">
And counting...
</p>

<button
class="primary-btn"
onclick="showDate()">

Choose Our Next Adventure ❤️

</button>

</div>

</div>

`);

updateCounter();

window.counterInterval =
setInterval(updateCounter,1000);

}

function updateCounter(){

const start =
new Date("2025-09-26T00:00:00");

const now =
new Date();

const diff =
now - start;

const days =
Math.floor(diff/(1000*60*60*24));

const hours =
Math.floor(
(diff/(1000*60*60))%24
);

const mins =
Math.floor(
(diff/(1000*60))%60
);

const secs =
Math.floor(
(diff/1000)%60
);

const counter =
document.getElementById("counter");

if(!counter) return;

counter.innerHTML = `

<div class="counter-grid">

<div class="counter-card">
<div class="counter-number">${days}</div>
<div class="counter-label">Days ❤️</div>
</div>

<div class="counter-card">
<div class="counter-number">${hours}</div>
<div class="counter-label">Hours</div>
</div>

<div class="counter-card">
<div class="counter-number">${mins}</div>
<div class="counter-label">Minutes</div>
</div>

<div class="counter-card">
<div class="counter-number">${secs}</div>
<div class="counter-label">Seconds</div>
</div>

</div>

`;

}

/* --------------------- */
/* DATE */
/* --------------------- */

function showDate(){

render(`

<div class="scene">

<div class="card">

<div class="heading">
One Question ❤️
</div>

<p class="text">

If you could steal one day from the future,
which day would you spend with me?

</p>

<input
type="date"
id="date"
class="date-input">

<button
class="primary-btn"
onclick="saveDate()">

Continue ❤️

</button>

</div>

</div>

`);

}

function saveDate(){

const d =
document.getElementById("date").value;

if(!d){

alert("Choose a date ❤️");

return;

}

story.date = d;

showMood();

}

/* --------------------- */
/* MOOD */
/* --------------------- */

function showMood(){

render(`

<div class="scene">

<div class="card">

<div class="heading">

How should this memory feel? ❤️

</div>

<div class="option-grid">

<div class="option"
onclick="selectMood('Cozy & Slow')">

☕ Cozy & Slow

</div>

<div class="option"
onclick="selectMood('Elegant & Fancy')">

🍽️ Elegant & Fancy

</div>

<div class="option"
onclick="selectMood('Surprise Me')">

🌅 Surprise Me

</div>

</div>

</div>

</div>

`);

}

function selectMood(mood){

story.mood = mood;

showExtras();

}

/* --------------------- */
/* EXTRAS */
/* --------------------- */

function showExtras(){

render(`

<div class="scene">

<div class="card">

<div class="heading">

What would make the day perfect? ❤️

</div>

<div class="option-grid">

<div class="option"
onclick="toggleExtra(this,'Long Drive')">

🚗 Long Drive

</div>

<div class="option"
onclick="toggleExtra(this,'Deep Talks')">

💬 Deep Talks

</div>

<div class="option"
onclick="toggleExtra(this,'Music')">

🎶 Music

</div>

<div class="option"
onclick="toggleExtra(this,'Sunset')">

🌅 Sunset

</div>

<div class="option"
onclick="toggleExtra(this,'Stargazing')">

✨ Stargazing

</div>

</div>

<button
class="primary-btn"
onclick="showNote()">

Continue ❤️

</button>

</div>

</div>

`);

}

function toggleExtra(el,value){

el.classList.toggle("selected");

if(story.extras.includes(value)){

story.extras =
story.extras.filter(
x=>x!==value
);

}else{

story.extras.push(value);

}

}

/* --------------------- */
/* NOTE */
/* --------------------- */

function showNote(){

render(`

<div class="scene">

<div class="card">

<div class="heading">

Anything your heart isn't saying out loud? ❤️

</div>

<textarea
id="note"
class="note-input"></textarea>

<button
class="primary-btn"
onclick="saveNote()">

Continue ❤️

</button>

</div>

</div>

`);

}

function saveNote(){

story.note =
document.getElementById("note").value;

showFinal();

}

/* --------------------- */
/* FINAL */
/* --------------------- */

function showFinal(){

render(`

<div class="scene">

<div class="card">

<div class="success-heart">
❤️
</div>

<div class="heading">
Adventure Accepted
</div>

<p class="text">

Now it's my turn to make it unforgettable ❤️

</p>

<div class="small-note">

P.S.
I'd still choose you in every timeline ❤️

</div>

</div>

</div>

`);

}

/* --------------------- */
/* PARTICLES */
/* --------------------- */

function createParticles(){

const holder =
document.getElementById("particles");

for(let i=0;i<40;i++){

const p =
document.createElement("div");

p.className =
"particle";

p.style.left =
Math.random()*100+"%";

p.style.animationDuration =
(10+Math.random()*12)+"s";

p.style.animationDelay =
Math.random()*5+"s";

holder.appendChild(p);

}

}

/* --------------------- */
/* FLOATING MEMORIES */
/* --------------------- */

function startFloatingMemories(){

const memories = [

"26 Sept 2025 ❤️",
"Our First Meeting ❤️",
"One Unread Memory ❤️",
"Forever Starts Small ❤️",
"Ishita & Aayush ❤️"

];

setInterval(()=>{

const m =
document.createElement("div");

m.className =
"memory";

m.innerHTML =
memories[
Math.floor(
Math.random()*memories.length
)
];

m.style.left =
Math.random()*80+"%";

m.style.top =
Math.random()*80+"%";

document.body.appendChild(m);

setTimeout(()=>{

m.remove();

},8000);

},5000);

}
