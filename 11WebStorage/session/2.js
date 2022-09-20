const footballPlayer = [
  {
    name: "Christiano Ronaldo",
    team: "Juventus",
  },
  {
    name: "Aubameyang",
    team: "Arsenal",
  },
];

const koreanDrama = [
  {
    title: "Reply 1988",
    year: 2015,
  },
  {
    title: "Itaewon Class",
    year: 2020,
  },
];

// Tulis kodemu di bawah ini
function saveFootballer() {
  var footBaller = JSON.stringify(footballPlayer);
  sessionStorage.setItem("footballPlayer", footBaller);
}

function saveKDrama() {
  var kDrama = JSON.stringify(koreanDrama);
  sessionStorage.setItem("kDrama", kDrama);
}

function clearAll() {
  sessionStorage.clear();
  console.log("all clear!");
}
