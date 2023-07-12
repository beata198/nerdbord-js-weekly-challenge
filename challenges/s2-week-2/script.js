const data = [
  {
    id: "01",
    name: "interiors",
    position: {
      right: "-415px",
      top: "-213px",
    },
  },
  {
    id: "02",
    name: "brand identity",
    position: {
      right: "-442px",
      top: "-72px",
    },
  },
  {
    id: "03",
    name: "visual",
    position: {
      left: "-511px",
      bottom: "-136px",
    },
  },
  {
    id: "04",
    name: "animation",
    position: {
      right: "-438px",
      top: "-148px",
    },
  },
  {
    id: "05",
    name: "bunch",
    position: {
      right: "-439px",
      bottom: "-82px",
    },
  },
  {
    id: "06",
    name: "rumors",
    position: {
      left: "-384px",
      top: "-126px",
    },
  },
];

const style = document.createElement("style");
let contentCSS = "";

const list = document.getElementById("list");
let i = 1;

data.forEach((el) => {
  let styleCSS = `
    .listItem${i}:hover::after {
      content: url("./assets/img/${el.name.replace(" ", "_")}.webp");
      position: absolute;
      z-index: 2;
      top: ${el.position && el.position.top ? el.position.top : "unset"};
      right: ${el.position && el.position.right ? el.position.right : "unset"};
      bottom: ${
        el.position && el.position.bottom ? el.position.bottom : "unset"
      };
      left: ${el.position && el.position.left ? el.position.left : "unset"};
    }
  `;

  const listItem = document.createElement("li");
  listItem.classList.add(`listItem${i}`);
  listItem.innerHTML = `<span>${el.id}</span>${el.name}`;
  contentCSS += styleCSS;
  list.appendChild(listItem);
  i++;
});

style.innerHTML = contentCSS;
document.head.appendChild(style);
