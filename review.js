const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const profession = document.getElementById("profession");
const description = document.getElementById("description");
const surpriseMeBtn = document.getElementById("surpriseMeBtn");
const chicken = document.querySelector(".chicken");

let isChickenVisible;

let people = [
	{
		photo:
			'url("vinay.jpeg")',
		name: "OP  vinay ",
		profession: "SPA Owner",
		description:
			"I  had an excellent shopping experience at Hopper Shoes. The variety of options available is impressive, and the detailed product photos and descriptions made choosing the right pair easy. I opted for the Amazing Mazz 2.2, and they did not disappoint. The shoes are incredibly comfortable and offer great support for my workouts. Plus, the fast shipping and excellent customer service made the whole process hassle-free. Highly recommend!"
	},

	{
		photo:
			"url('sudeep.jpeg')",
		name: "Sudeep",
		profession: "PROFESSIONAL Runner",
		description:
			"I recently purchased a pair of Nike Air Zoom Structure 19 from Hopper Shoes, and I couldn't be happier! The website was easy to navigate, and the detailed product descriptions helped me make an informed decision. The shoes arrived promptly and were exactly as described. They offer excellent support and comfort, perfect for my daily runs. Highly recommend Hopper Shoes for anyone looking for quality footwear and a seamless shopping experience!"
	},

	{
		photo:
			"url('mp copy.jpeg')",
		name: "Mahadev prasad Cook",
		profession: "Backend developer",
		description:
			"Hopper Shoes exceeded my expectations! I bought the Nike Air Solstice and was impressed with the wide range of styles and sizes available. The checkout process was smooth, and the customer service team was incredibly responsive to my inquiries. The shoes fit perfectly and are made of high-quality materials. I'll definitely be returning for more pairs in the future!"
	},

	{
		photo:
			"url('Karthick.jpeg')",
		name: "Karthick",
		profession: "Frontend Developer",
		description:
			"Absolutely love my new Nike Huarache Utility shoes from Hopper Shoes! The website is user-friendly, and I found exactly what I was looking for within minutes. The pricing is competitive, and the free shipping offer was a great bonus. The shoes are stylish and durable, making them my go-to choice for both casual and athletic wear. Hopper Shoes has earned a loyal customer in me!"
	}
];

imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
profession.innerText = people[0].profession;
description.innerText = people[0].description;
let currentPerson = 0;

//Select the side where you want to slide
function slide(whichSide, personNumber) {
	let reviewWrapWidth = reviewWrap.offsetWidth + "px";
	let descriptionHeight = description.offsetHeight + "px";
	//(+ or -)
	let side1symbol = whichSide === "left" ? "" : "-";
	let side2symbol = whichSide === "left" ? "-" : "";

	let tl = gsap.timeline();

	if (isChickenVisible) {
		tl.to(chicken, {
			duration: 0.4,
			opacity: 0
		});
	}

	tl.to(reviewWrap, {
		duration: 0.4,
		opacity: 0,
		translateX: `${side1symbol + reviewWrapWidth}`
	});

	tl.to(reviewWrap, {
		duration: 0,
		translateX: `${side2symbol + reviewWrapWidth}`
	});

	setTimeout(() => {
		imgDiv.style.backgroundImage = people[personNumber].photo;
	}, 400);
	setTimeout(() => {
		description.style.height = descriptionHeight;
	}, 400);
	setTimeout(() => {
		personName.innerText = people[personNumber].name;
	}, 400);
	setTimeout(() => {
		profession.innerText = people[personNumber].profession;
	}, 400);
	setTimeout(() => {
		description.innerText = people[personNumber].description;
	}, 400);

	tl.to(reviewWrap, {
		duration: 0.4,
		opacity: 1,
		translateX: 0
	});

	if (isChickenVisible) {
		tl.to(chicken, {
			duration: 0.4,
			opacity: 1
		});
	}
}

function setNextCardLeft() {
	if (currentPerson === 3) {
		currentPerson = 0;
		slide("left", currentPerson);
	} else {
		currentPerson++;
	}

	slide("left", currentPerson);
}

function setNextCardRight() {
	if (currentPerson === 0) {
		currentPerson = 3;
		slide("right", currentPerson);
	} else {
		currentPerson--;
	}

	slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);

surpriseMeBtn.addEventListener("click", () => {
	if (chicken.style.opacity === "0") {
		chicken.style.opacity = "1";
		imgDiv.classList.add("move-head");
		surpriseMeBtn.innerText = "Remove the chicken";
		surpriseMeBtn.classList.remove("surprise-me-btn");
		surpriseMeBtn.classList.add("hide-chicken-btn");
		isChickenVisible = true;
	} else if (chicken.style.opacity === "1") {
		chicken.style.opacity = "0";
		imgDiv.classList.remove("move-head");
		surpriseMeBtn.innerText = "Surprise me";
		surpriseMeBtn.classList.add("surprise-me-btn");
		surpriseMeBtn.classList.remove("hide-chicken-btn");
		isChickenVisible = false;
	}
});

window.addEventListener("resize", () => {
	description.style.height = "100%";
});
