const screens = document.querySelectorAll(".screen");

let selectedDate = "";
let selectedVenue = "";
let selectedType = "";

function showScreen(id){

screens.forEach(screen=>{
screen.classList.remove("active");
});

document
.getElementById(id)
.classList.add("active");

}

function goToPassword(){
showScreen("passwordScreen");
}

function checkPassword(){

const password =
document
.getElementById("passwordInput")
.value;

if(password==="26092025"){

document
.getElementById("passwordError")
.innerText="";

showScreen("dearScreen");

}else{

document
.getElementById("passwordError")
.innerText=
"That's not our special day 🙈";

}

}

function goToCounter(){
showScreen("counterScreen");
}

function goToDate(){
showScreen("dateScreen");
}

function goToVenue(){

selectedDate =
document
.getElementById("dateChoice")
.value;

if(!selectedDate){

alert(
"Choose a date first ❤️"
);

return;

}

showScreen("venueScreen");
}

function selectVenue(venue){

selectedVenue = venue;

showScreen("typeScreen");

const heading =
document
.getElementById("typeHeading");

const options =
document
.getElementById("typeOptions");

if(
venue==="Cafe"
){

heading.innerHTML=
"☕ Choose Your Coffee Date";

options.innerHTML=`

<button onclick="chooseType('Cappuccino')">
Cappuccino ❤️
</button>

<button onclick="chooseType('Latte')">
Latte ❤️
</button>

<button onclick="chooseType('Mocha')">
Mocha ❤️
</button>

<button onclick="chooseType('Cold Coffee')">
Cold Coffee ❤️
</button>

<button onclick="chooseType('Dessert Date')">
Dessert Date ❤️
</button>

`;

}
else{

heading.innerHTML=
"🍽️ Choose Your Food Date";

options.innerHTML=`

<button onclick="chooseType('Pizza')">
Pizza ❤️
</button>

<button onclick="chooseType('Italian')">
Italian ❤️
</button>

<button onclick="chooseType('North Indian')">
North Indian ❤️
</button>

<button onclick="chooseType('Asian')">
Asian ❤️
</button>

<button onclick="chooseType('Chef Surprise')">
Chef's Surprise ❤️
</button>

`;

}

}

function chooseType(type){

selectedType = type;

showScreen("extrasScreen");

}

function goToNote(){
showScreen("noteScreen");
}

function goToLoveQuestion(){
showScreen("loveQuestionScreen");
}

function showFinalScreen(){

alert(
"Correct ❤️"
);

showScreen("finalScreen");

}

function downloadPlan(){

const activities =
[];

document
.querySelectorAll(
"#extrasScreen input[type='checkbox']:checked"
)
.forEach(item=>{
activities.push(item.value);
});

const note =
document
.getElementById("secretNote")
.value;

const content =

`ISHITA & AAYUSH ❤️

Date:
${selectedDate}

Venue:
${selectedVenue}

Choice:
${selectedType}

Activities:
${activities.join(", ")}

Secret Note:
${note}

Now it's my turn to make it unforgettable ❤️

P.S. I'd still choose you in every timeline ❤️`;

const blob =
new Blob(
[content],
{
type:"text/plain"
}
);

const url =
URL.createObjectURL(blob);

const a =
document.createElement("a");

a.href=url;

a.download=
"our_next_adventure.txt";

a.click();

URL.revokeObjectURL(url);

}

function updateCounter(){

const startDate =
new Date(
"2025-09-26T00:00:00"
);

const now =
new Date();

const diff =
now-startDate;

const days =
Math.floor(
diff/
(1000*60*60*24)
);

const hours =
Math.floor(
(diff/
(1000*60*60))
%24
);

const mins =
Math.floor(
(diff/
(1000*60))
%60
);

const secs =
Math.floor(
(diff/1000)
%60
);

const counter =
document.getElementById(
"loveCounter"
);

if(counter){

counter.innerHTML=
`
${days} Days ❤️
<br>
${hours} Hours ❤️
<br>
${mins} Minutes ❤️
<br>
${secs} Seconds ❤️
`;

}

}

setInterval(
updateCounter,
1000
);

updateCounter();
