const app = document.getElementById("app");

let story = {
date: "",
mood: "",
choice: "",
extras: [],
note: ""
};

createParticles();
showWelcome();

function render(html){
app.innerHTML = html;
}

function showWelcome(){

render(`
<div class="scene">
<div class="card">

<div class="title">
Ishita & Aayush ❤️
</div>

<div class="subtitle">
For the person behind my favorite notifications ❤️
</div>

<p class="text">
💌 You have 1 unread memory
</p>

<button
class="primary-btn"
onclick="showPassword()">
Open
</button>

</div>
</div>
`);
}

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
class="password-input"
type="password"
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

function showLetter(){

render(`
<div class="scene">
<div class="card">

<div class="heading">
Dear Ishita ❤️
</div>

<p
class="text"
id="letterText">
</p>

<button
style="display:none"
id="continueBtn"
class="primary-btn"
onclick="showCounter()">

Continue ✨

</button>

</div>
</div>
`);

const text =
`Before we choose another adventure...

I just wanted to remind you that meeting you on 26 September 2025 remains one of my favorite moments. ❤️`;

let i = 0;

const target =
document.getElementById("letterText");

const interval =
setInterval(()=>{

target.innerHTML += text.charAt(i);

i++;

if(i >= text.length){

clearInterval(interval);

document
.getElementById("continueBtn")
.style.display = "inline-block";

}

},30);
}

function showCounter(){

render(`
<div class="scene">
<div class="card">

<div class="heading">
Together Since ❤️
</div>

<div
id="counter"
class="counter">
</div>

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

setInterval(
updateCounter,
1000
);
}

function updateCounter(){

const start =
new Date("2025-09-26");

const now =
new Date();

const diff =
now - start;

const days =
Math.floor(
diff/86400000
);

const counter =
document.getElementById("counter");

if(counter){

counter.innerHTML =
`${days}<br>Days`;

}
}

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

const date =
document.getElementById("date").value;

if(!date){

alert("Choose a date ❤️");

return;
}

story.date = date;

showMood();
}

function showMood(){

render(`
<div class="scene">
<div class="card">

<div class="heading">
Choose The Mood ❤️
</div>

<div class="option-grid">

<div
class="option"
onclick="chooseMood('Cozy Café')">

☕ Cozy Café

</div>

<div
class="option"
onclick="chooseMood('Romantic Restaurant')">

🍽️ Romantic Restaurant

</div>

<div
class="option"
onclick="chooseMood('Surprise Me')">

🌅 Surprise Me

</div>

</div>

</div>
</div>
`);
}

function chooseMood(mood){

story.mood = mood;

showExtras();
}

function showExtras(){

render(`
<div class="scene">
<div class="card">

<div class="heading">
Little Things ❤️
</div>

<div class="option-grid">

<div class="option" onclick="toggleExtra(this,'Long Drive')">🚗 Long Drive</div>

<div class="option" onclick="toggleExtra(this,'Deep Talks')">💬 Deep Talks</div>

<div class="option" onclick="toggleExtra(this,'Sunset')">🌅 Sunset</div>

<div class="option" onclick="toggleExtra(this,'Music')">🎶 Music</div>

<div class="option" onclick="toggleExtra(this,'Stargazing')">✨ Stargazing</div>

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

function showNote(){

render(`
<div class="scene">
<div class="card">

<div class="heading">
Secret Note ❤️
</div>

<textarea
id="note"
class="note-input"
placeholder="Anything your heart isn't saying out loud?">
</textarea>

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

P.S. I'd still choose you in every timeline ❤️

</div>

<button
class="primary-btn"
onclick="downloadMemory()">

Save Memory ❤️

</button>

</div>
</div>
`);
}

function downloadMemory(){

const content =

`Ishita & Aayush ❤️

Date:
${story.date}

Mood:
${story.mood}

Extras:
${story.extras.join(", ")}

Secret Note:
${story.note}

Now it's my turn to make it unforgettable ❤️`;

const blob =
new Blob(
[content],
{type:"text/plain"}
);

const url =
URL.createObjectURL(blob);

const a =
document.createElement("a");

a.href = url;

a.download =
"our-memory.txt";

a.click();

URL.revokeObjectURL(url);
}

function createParticles(){

const container =
document.getElementById("particles");

for(let i=0;i<25;i++){

const p =
document.createElement("div");

p.className =
"particle";

p.style.left =
Math.random()*100+"%";

p.style.animationDuration =
(8 + Math.random()*10)+"s";

p.style.animationDelay =
Math.random()*5+"s";

container.appendChild(p);
}
}
