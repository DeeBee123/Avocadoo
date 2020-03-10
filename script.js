const menuIcon = document.querySelector("header nav ul .menu");
const menuElement = document.querySelector(".navMenu");
const closeMobileMenuButton = document.querySelector(".navMenu .exit");
const notification = document.querySelector(".notification");
const closeNotificationButton = document.querySelector(
  ".notification div span"
);
const allButtons = document.querySelectorAll(
  ".purchase .container .third button, .notification div form button, header nav ul li:last-child, .navMenu ul li:last-child"
);
const specie = document.querySelectorAll("#variety .container .specie");
const prev = document.querySelector("#reviews .comments .container img");
const next = document.querySelector(
  "#reviews .comments .container img:last-child"
);
const review = document.querySelector("#reviews .comments .container  .wrap");
const freeAvo = document.querySelector("footer .container .right li:last-child");
const input = document.querySelector(".notification div form input")

closeMobileMenuButton.addEventListener("click", toggleMobileMenu);
menuIcon.addEventListener("click", toggleMobileMenu);
closeNotificationButton.addEventListener("click", toggleNotification);
freeAvo.addEventListener("click", toggleNotification);
prev.addEventListener("click", prevReview);
next.addEventListener("click", nextReview);

var reviews = [{
    review: "One of my favorite vegetables, the texture that this vegetable has is unlike any other, it's almost like butter, the nice, fresh and smooth flavor it has makes it good to combine with many flavors, you can eat it in many foods.",
    name: "Jonas Jonaitis",
    city: " Kėdainiai"
  },
  {
    review: "Avocados are eaten multiple times a week in our house. We eat guacamole, chop them with veggies, eat them on burgers and mixed with tuna. They are good for you and taste good too. We will keep buying them from Avocadoo and enjoying them.",
    name: "Marija Doe",
    city: " Vilnius"
  },
  {
    review: "I absolutely love avocados !! they taste delicious and they are great for beauty !! avocados literally taste good on anything !! love to put avocados on toast, on the side of my eggs, sandwiches, etc. I also use avocados for diy face masks or hair masks !!",
    name: "Julija Lurnytė",
    city: " Kaunas"
  },
  {
    review: "Best place to get avocados. The quality is always great and the delivery is fast. My favourite is Haas. Lemon and salt is the best way to eat them, in my opinion.",
    name: "Petras Petraitis",
    city: " Rokiškis"
  }
];
let counter = 1;
let space = [];

for (i = 0; i < reviews.length; i++) {
  space.push(
    `<p class="fade">${reviews[i].review}</p><p class="fade"><span>${reviews[i].name}</span>${reviews[i].city}</p>`
  );
}

function prevReview() {
  if (counter !== 0) {
    counter -= 1;
  } else {
    counter = reviews.length - 1;
  }
  review.innerHTML = space[counter];

}

function nextReview() {
  if (counter !== reviews.length - 1) {
    counter += 1;
  } else {
    counter = 0;
  }
  review.innerHTML = space[counter];

}

for (i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", toggleNotification);
}

function toggleMobileMenu() {
  if (menuElement.style.right === "0px") menuElement.style.right = "-51%";
  else menuElement.style.right = "0px";
}

function toggleNotification() {
  if (notification.style.display === "flex") {
    notification.style.display = "none"
    input.value = ""
  } else notification.style.display = "flex";

}

AOS.init();