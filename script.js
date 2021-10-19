const data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const montnly = document.querySelector(".montnly");
const text = document.querySelectorAll(".text");
const timeFra = document.querySelectorAll(".timeframe");

daily.addEventListener('click', function() {

  timeFra.forEach((e) => e.classList.remove("active"));
  daily.classList.add("active");

  for (let i=0; i < 6 ; i++) {
    text[i].children[0].textContent = data[i].timeframes.daily.current + `${data[i].timeframes.daily.current == "0" || data[i].timeframes.daily.current == "1" ? "hr" : "hrs"}`;
    text[i].children[1].textContent = "Last Week - " + data[i].timeframes.daily.previous + `${data[i].timeframes.daily.previous == "0" || data[i].timeframes.daily.previous == "1" ? "hr" : "hrs"}`;
  }
})

weekly.addEventListener('click', function() {

  timeFra.forEach((e) => e.classList.remove("active"));
  weekly.classList.add("active");
  
  for (let i=0; i < 6 ; i++) {
    text[i].children[0].textContent = data[i].timeframes.weekly.current + `${data[i].timeframes.weekly.current == "0" || data[i].timeframes.weekly.current == "1" ? "hr" : "hrs"}`;
    text[i].children[1].textContent = "Last Week - " + data[i].timeframes.weekly.previous + `${data[i].timeframes.weekly.previous == "0" || data[i].timeframes.weekly.previous == "1" ? "hr" : "hrs"}`;
  }
})

montnly.addEventListener('click', function() {

  timeFra.forEach((e) => e.classList.remove("active"));
  montnly.classList.add("active");
  
  for (let i=0; i < 6 ; i++) {
    text[i].children[0].textContent = data[i].timeframes.monthly.current + `${data[i].timeframes.monthly.current == "0" || data[i].timeframes.monthly.current == "1" ? "hr" : "hrs"}`;
    text[i].children[1].textContent = "Last Week - " + data[i].timeframes.monthly.previous + `${data[i].timeframes.monthly.previous == "0" || data[i].timeframes.monthly.previous == "1" ? "hr" : "hrs"}`;
  }
})