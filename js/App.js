function ios() {
  alert("Website uji coba");
  // body...
  const Name = prompt(" Hello, Siapa Kamu :")
  const h1 = document.getElementById('h1');
  if (Name === null || Name === "") {
    h1.innerText = "HI, Anonymous user"
  }else {
    
  h1.innerText = `HI, ${Name}`
  }
};
const Dates = () => {
  const d = new Date(),
  hour = d.getHours(),
  minute = d.getMinutes(),
  second = d.getSeconds(),
  year = d.getFullYear();
  const Dataday = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jum'at'",
    "Sabtu"
  ];
  const Datamonth = [
    "Jan",
    "Feb",
    "Marc",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Des"
  ];
  const day = Dataday[d.getDay()];
  const month = Datamonth[d.getMonth()];
  const zero = ((x)=> {
    return ((parseInt(x, 10) < 10 ? "0": "")) + x
  })
  const ampm = hour > 12 ? "PM": "AM"
  const h = document.getElementById('h');
  const m = document.getElementById('m');
  const s = document.getElementById('s');
  const am = document.getElementById("am")
  const date = document.querySelector(".date");
  date.innerHTML = `${day}, ${d.getDate()} ${month} ${d.getFullYear()}`
  h.innerHTML = `${zero(hour)}`;
  m.innerHTML = `${zero(minute)}`;
  s.innerHTML = `${zero(second)}`;
  am.innerHTML = ampm

  const Time = setTimeout(Dates, 1000);

};


const open = document.querySelector("#clock");
const model = document.querySelector(".Model");
model.addEventListener("click", none)
open.addEventListener("click", opens);
function opens() {
  model.style.display = "block";
}
function none() {
  model.style.display="none"

}
// Run function //
Dates();
ios()
