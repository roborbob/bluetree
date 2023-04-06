/** @format */
// import styles from "./booking.css";

const styles = `.booking-calendar {
  container-type: inline-size;
  container-name: calendar;
  width: 100%;
}

.months-container {
  display: grid;
  /* width: 100%; */
  gap: 2rem;
  grid-template-columns: 1fr;
  transition: transform 0.3s ease;
}

@container calendar (min-width: 420px) {
  .months-container {
    grid-template-columns: 1fr 1fr;
  }
}

@container calendar (min-width: 768px) {
  .months-container {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@container calendar (min-width: 1024px) {
  .months-container {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
* {
  font-family: Helvetica;
}
h2 {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 300;
  font-size: 24px;
}

table {
  width: 340px;
  display: table;
  table-layout: auto;
}

caption {
  font-family: Helvetica;
  text-align: left;
  padding-left: 10px;
  margin-bottom: 10px;
  font-weight: 100;
  font-size: 18px;
}

th {
  color: slategrey;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  /* width: calc(100% / 7); */
}

td {
  text-align: center;
  line-height: 1;
  font-size: 14px;
  color: rgb(92, 105, 119);
  width: 40px;
  height: 40px;
  font-weight: 100;
  /* width: calc(100% / 7); */
  transition: 0.2s;
  border-radius: 50%;
  border: 2px solid white;
}

td:nth-child(6),
td:nth-child(7) {
  /* background-color: rgb(255, 246, 118); */
}

td:nth-child(6):hover,
td:nth-child(7):hover {
  /* background-color: rgb(71, 255, 77); */
}

td:hover {
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid rgb(0, 26, 52);
}

.increment,
.decrement {
  padding: 20px;
  width: fit-content;
  margin: auto;
  font-size: 30px;
  font-weight: bold;
}
`;
const WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const html = (year, date) => {
  return `
  <h2 data-year="2023">${year}</h2>
    <section class="months-container bg-slate-900">
    <div class="months">
   ${date
     .map(
       (e, i) =>
         `<div class="">${e.month}<div class="days">${e.week
           .map(
             (a, i) => `
           <div>${WEEK[i]}</div></div>`
           )
           .join("")}`
     )
     .join("")} 
   </div>
    </section>`;
};
// ${date
//   .map((e, t) =>
//     t < 12
//       ? `<table class="months"><caption class="months-title">${
//           e.month
//         }</caption><thead><tr><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th></tr></thead><tbody>
//     <tr>
//     ${e.week
//       .map(
//         (a, i) =>
//           `<td class="days" data-time="${new Date(
//             year,
//             t,
//             i >= e.startDay && i - e.startDay + 1
//           )}" data-scroll="5" >${
//             i >= e.startDay ? `${i - e.startDay + 1}` : ``
//           }</td>`
//       )
//       .join("")}
//     </tr>
//     <tr>
//     ${e.week
//       .map(
//         (a, i) =>
//           `<td class="days" data-time="${new Date(
//             year,
//             t,
//             e.days[i + 7 - e.startDay] + 1
//           )}">${e.days[i + 7 - e.startDay] + 1}</td>`
//       )
//       .join("")}
//     </tr>
//     <tr>
//     ${e.week
//       .map(
//         (a, i) =>
//           `<td class="days" data-time="${new Date(
//             year,
//             t,
//             e.days[i + 14 - e.startDay] + 1
//           )}">${e.days[i + 14 - e.startDay] + 1}</td>`
//       )
//       .join("")}
//     </tr>
//     <tr>
//     ${e.week
//       .map(
//         (a, i) =>
//           `<td class="days" data-time="${new Date(
//             year,
//             t,
//             e.days[i + 21 - e.startDay] + 1
//           )}">${e.days[i + 21 - e.startDay] + 1}</td>`
//       )
//       .join("")}
//     </tr>
//     <tr>
//     ${e.week
//       .map(
//         (a, i) =>
//           `<td class="days" data-time="${new Date(
//             year,
//             t,
//             e.days[i + 28 - e.startDay] + 1
//           )}">${
//             e.days[i + 28 - e.startDay]
//               ? `${e.days[i + 28 - e.startDay] + 1}`
//               : ``
//           }</td>`
//       )
//       .join("")}
//     </tr>
//     ${
//       e.days[35 - e.startDay]
//         ? `<tr>
//     ${e.week
//       .map(
//         (a, i) =>
//           `<td class="days" data-time="${new Date(
//             year,
//             t,
//             e.days[i + 35 - e.startDay] + 1
//           )}">${
//             e.days[i + 35 - e.startDay]
//               ? `${e.days[i + 35 - e.startDay] + 1}`
//               : ``
//           }</td>`
//       )
//       .join("")}
//     </tr>  `
//         : ``
//     }
// </tbody></table>`
//       : ``
//   )
//   .join("")}

class BookingCalendar extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    function ToggleSelction(e) {
      e.target.toggleAttribute("aria-selected");
      let selected = e.target.getAttribute("aria-selected");
      if (selected === null) {
        e.target.style.background = "white";
        e.target.style.borderRadius = "0px";
      } else {
        e.target.style.background = "coral";
        e.target.style.borderRadius = "5px";
      }
    }

    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "booking-calendar");

    const date = this.getAttribute("data-date");
    let currentDate = new Date(date);
    this.year = currentDate.getFullYear();

    const SetData = (year) => {
      let data = [];
      let week = new Array(7).fill(1);
      for (let i = 0; i < 12; i++) {
        let totalDays = new Date(year, i + 1, 0).getDate();
        let day = new Date(year, i, 0).getDay();
        let month = new Date(year, i, 1).toLocaleString("en", {
          month: "long",
        });
        data.push({
          month: month,
          days: [...new Array(totalDays).keys()],
          startDay: day,
          week: week,
        });
      }
      return data;
    };

    wrapper.innerHTML = html(this.year, SetData(this.year));
    const controls = document.createElement("div");
    controls.setAttribute("class", "controls");
    controls.innerHTML = `<span class="increment"> +</span><span class="decrement">-</span>`;
    let increment = controls.querySelector(".increment");
    let decrement = controls.querySelector(".decrement");
    const title = wrapper.querySelector("h2");

    function SetEventListeners() {
      let days = wrapper.querySelectorAll(".days");
      let currentDate = new Date(date);
      for (let i = 0; i < days.length; i++) {
        let currentDateIndex = 0;
        let itemDate = new Date(days[i].dataset.time);
        if (itemDate < currentDate) {
          days[i].style.background = "lightgray";
        }
        currentDate.setHours(0, 0, 0, 0);
        itemDate == currentDate ? (currentDateIndex = i) : null;
        // days[currentDateIndex].style.background = "lightblue";

        days[i].addEventListener("click", (e) => ToggleSelction(e));
      }
    }

    SetEventListeners();
    // Initialise new style sheet
    const sheet = new CSSStyleSheet();

    // Pass in external style sheet
    sheet.replaceSync(styles);

    // Attach style sheet to shadowdom
    shadow.adoptedStyleSheets = [sheet];

    // Attach the created elements to the shadow dom
    shadow.appendChild(wrapper);
    shadow.insertBefore(controls, wrapper);

    increment.addEventListener("click", () => {
      title.dataset.year = Number(title.dataset.year) + 1;
      let currentYear = title.dataset.year;
      wrapper.innerHTML = html(currentYear, SetData(currentYear));
      SetEventListeners();
    });
    decrement.addEventListener("click", () => {
      title.dataset.year = Number(title.dataset.year) - 1;
      let currentYear = title.dataset.year;
      wrapper.innerHTML = html(currentYear, SetData(currentYear));
      SetEventListeners();
    });
  }
}

customElements.define("booking-calendar", BookingCalendar);
