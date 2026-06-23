function unlock(){
const p=document.getElementById('pwd').value;
if(p!=='26092025'){document.getElementById('msg').innerText="That's not our special day 🙈";return;}
document.getElementById('content').innerHTML=`
<h2>Dear Ishita ❤️</h2>
<p>Meeting you on 26 September 2025 remains one of my favorite moments.</p>
<p id="counter"></p>
<button onclick="adventure()">Choose Our Next Adventure ❤️</button>`;
counter();
}
function counter(){
const start=new Date('2025-09-26');
setInterval(()=>{
const d=new Date()-start;
const days=Math.floor(d/86400000);
document.getElementById('counter').innerText=days+' days together ❤️';
},1000);
}
function adventure(){
document.getElementById('content').innerHTML=`
<h2>Adventure Accepted ❤️</h2>
<p>Now it's my turn to make it unforgettable ❤️</p>
<p><i>P.S. I'd still choose you in every timeline. ❤️</i></p>`;
}