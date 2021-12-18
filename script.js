const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const mins = document.querySelector(".mins");
const secs = document.querySelector(".secs");

const newYearTxt = document.querySelector(".new__year");
const loading = document.querySelector(".loading");
const overlay = document.querySelector(".overlay");

const currentYear = new Date().getFullYear();
newYearTxt.innerHTML = currentYear+1;

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
const happyNewYearTxt = document.querySelector(".happy__new__year h1");


setTimeout(()=>{
    loading.style.display = "none";
    overlay.style.display = "none";
}, 1000);


const updateCountDown = ()=>{
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    if(diff == "0")
    {
        setTimeout(()=>{
            happyNewYearTxt.innerHTML = `Happy New Year ${currentYear}`;
        },60000);
    }


    const d = Math.floor(diff / 1000 /60 /60 /24);
    const h = Math.floor(diff / 1000 /60 /60) % 24;
    const m = Math.floor(diff / 1000 /60) % 60;
    const s = Math.floor(diff / 1000) %60;

    days.innerHTML = d;
    hours.innerHTML = h < 10? '0'+ h : h;
    mins.innerHTML = m < 10? '0'+ m : m;;
    secs.innerHTML = s < 10? '0'+ s : s;;
}

setInterval(updateCountDown,1000);


