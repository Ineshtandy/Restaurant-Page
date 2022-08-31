console.log("seems like npx ran");

const container = document.querySelector('#content');

let headerelm = document.createElement('h1');
headerelm.textContent = "Tandy's";

let imgelm = document.createElement('img');
imgelm.src = "../pizza_img.jpg";

let second_header_elm = document.createElement('h3');
second_header_elm.textContent = "Hungry? Delighful,let us server you!";

let description_elm = document.createElement('div');
description_elm.textContent = "Come home to a mouth watering selection of authentic italian delicacies";

let reviews_elm = document.createElement('div');
reviews_elm.textContent = "REVIEWS";

let footer_elm = document.createElement('footer');
footer_elm.textContent = "Thank You";

container.appendChild(headerelm);
container.appendChild(imgelm);
container.appendChild(second_header_elm);
container.appendChild(description_elm);
container.appendChild(reviews_elm);
container.appendChild(footer_elm);