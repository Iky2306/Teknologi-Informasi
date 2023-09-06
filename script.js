const hamburger = document.getElementById("hamburger");
const close_hamburger = document.getElementById("close-hamburger");
const nav_right = document.getElementById("nav-right");
const nav_list = document.getElementById("nav-list");
const header = document.querySelector("header");
const nav = document.querySelectorAll("header a");
const modal = document.getElementById("login-modal");
const loginBtn = document.getElementById("button-login");
const closeModal = document.getElementsByClassName("close")[0];
const body = document.getElementsByTagName("BODY")[0];

window.addEventListener("scroll", function () {
	scrollPosition = window.scrollY;
	if (scrollPosition <= 60 && !nav_list.classList.contains("show")) {
		header.classList.remove("bg-white-shadow");
	} else {
		header.classList.add("bg-white-shadow");
	}
});

function detectIsMobile(){
	return window.screen.width < 1000;
}
let isMobile = detectIsMobile()

hamburger.addEventListener("click", () => {
	header.classList.add("bg-white-shadow");
	nav_list.classList.toggle("show");
	close_hamburger.classList.toggle("show");
	hamburger.classList.toggle("show");
});
close_hamburger.addEventListener("click", () => {
	scrollPosition = window.scrollY;
	if (scrollPosition <= 60) header.classList.toggle("bg-white-shadow");
	nav_list.classList.toggle("show");
	hamburger.classList.toggle("show");
	close_hamburger.classList.toggle("show");
});

function changeDivisionFilter(division) {
	const btnPemda = document.getElementById("btn-pemda");
	const btnOrgan = document.getElementById("btn-organ");
	const btnAdvo = document.getElementById("btn-advo");
	const btnKesek = document.getElementById("btn-kesek");

	const pemda = document.getElementById("pemda");
	const organ = document.getElementById("organ");
	const advo = document.getElementById("advo");
	const kesek = document.getElementById("kesek");

	kesek.classList.add("hide");
	pemda.classList.add("hide");
	advo.classList.add("hide");
	organ.classList.add("hide");

	btnPemda.classList.remove("active");
	btnOrgan.classList.remove("active");
	btnAdvo.classList.remove("active");
	btnKesek.classList.remove("active");

	const btn = document.getElementById("btn-" + division);
	const filter = document.getElementById(division);

	btn.classList.add("active");
	filter.classList.remove("hide");
}

let btnBack = document.querySelector("#btn-before-gallery");
let btnNext = document.querySelector("#btn-next-gallery");
let nextIndex = 0;
const galleryList = document.querySelectorAll(".gallery .gallery-item");
const galleryImage = document.querySelectorAll(".gallery .gallery-item .image");
if(btnBack!=null){
	btnBack.addEventListener("click", () => {
		if (nextIndex > 0) {
			if (nextIndex == 5) {
				galleryList[0].classList.remove("gallery-item-6", "show-grid");
				galleryImage[0].classList.remove("gallery-image-6", "show-grid");
				galleryList[0].classList.add("gallery-item-5", "show-grid");
				galleryImage[0].classList.add("gallery-image-5", "show-grid");

				galleryList[1].classList.remove("gallery-item-5", "show-grid");
				galleryImage[1].classList.remove("gallery-image-5", "show-grid");
				galleryList[1].classList.add("gallery-item-4", "show-grid");
				galleryImage[1].classList.add("gallery-image-4", "show-grid");

				galleryList[2].classList.remove("gallery-item-4", "show-grid");
				galleryImage[2].classList.remove("gallery-image-4", "show-grid");
				galleryList[2].classList.add("gallery-item-3", "show-grid");
				galleryImage[2].classList.add("gallery-image-3", "show-grid");

				galleryList[3].classList.remove("gallery-item-3", "show-grid");
				galleryImage[3].classList.remove("gallery-image-3", "show-grid");
				galleryList[3].classList.add("gallery-item-2", "show-grid");
				galleryImage[3].classList.add("gallery-image-2", "show-grid");

				galleryList[4].classList.remove("gallery-item-2", "show-grid");
				galleryImage[4].classList.remove("gallery-image-2", "show-grid");

				galleryList[5].classList.add("gallery-item-6", "show-grid");
				galleryImage[5].classList.add("gallery-image-6", "show-grid");
			} else if (nextIndex == 4) {
				galleryList[0].classList.remove("gallery-item-5", "show-grid");
				galleryImage[0].classList.remove("gallery-image-5", "show-grid");
				galleryList[0].classList.add("gallery-item-4", "show-grid");
				galleryImage[0].classList.add("gallery-image-4", "show-grid");

				galleryList[1].classList.remove("gallery-item-4", "show-grid");
				galleryImage[1].classList.remove("gallery-image-4", "show-grid");
				galleryList[1].classList.add("gallery-item-3", "show-grid");
				galleryImage[1].classList.add("gallery-image-3", "show-grid");

				galleryList[2].classList.remove("gallery-item-3", "show-grid");
				galleryImage[2].classList.remove("gallery-image-3", "show-grid");
				galleryList[2].classList.add("gallery-item-2", "show-grid");
				galleryImage[2].classList.add("gallery-image-2", "show-grid");

				galleryList[3].classList.remove("gallery-item-2", "show-grid");
				galleryImage[3].classList.remove("gallery-image-2", "show-grid");

				galleryList[4].classList.add("gallery-item-5", "show-grid");
				galleryImage[4].classList.add("gallery-image-5", "show-grid");
			} else if (nextIndex == 3) {
				galleryList[0].classList.remove("gallery-item-4", "show-grid");
				galleryImage[0].classList.remove("gallery-image-4", "show-grid");
				galleryList[0].classList.add("gallery-item-3", "show-grid");
				galleryImage[0].classList.add("gallery-image-3", "show-grid");

				galleryList[1].classList.remove("gallery-item-3", "show-grid");
				galleryImage[1].classList.remove("gallery-image-3", "show-grid");
				galleryList[1].classList.add("gallery-item-2", "show-grid");
				galleryImage[1].classList.add("gallery-image-2", "show-grid");

				galleryList[2].classList.remove("gallery-item-2", "show-grid");
				galleryImage[2].classList.remove("gallery-image-2", "show-grid");

				galleryList[3].classList.add("gallery-item-4", "show-grid");
				galleryImage[3].classList.add("gallery-image-4", "show-grid");
			} else if (nextIndex == 2) {
				galleryList[0].classList.remove("gallery-item-3", "show-grid");
				galleryImage[0].classList.remove("gallery-image-3", "show-grid");
				galleryList[0].classList.add("gallery-item-2", "show-grid");
				galleryImage[0].classList.add("gallery-image-2", "show-grid");

				galleryList[1].classList.remove("gallery-item-2", "show-grid");
				galleryImage[1].classList.remove("gallery-image-2", "show-grid");

				galleryList[2].classList.add("gallery-item-3", "show-grid");
				galleryImage[2].classList.add("gallery-image-3", "show-grid");
			} else if (nextIndex == 1) {
				galleryList[1].classList.add("gallery-item-2", "show-grid");
				galleryImage[1].classList.add("gallery-image-2", "show-grid");
				galleryList[0].classList.remove("gallery-item-2", "show-grid");
				galleryImage[0].classList.remove("gallery-image-2", "show-grid");
			}
			nextIndex--;
		}
		if (nextIndex < 5) {
			btnNext.classList.remove("hide");
		}
		if (nextIndex == 0) {
			btnBack.classList.add("hide");
		}
	});
	if (nextIndex == 0) {
		btnBack.classList.add("hide");
	}
}
if(btnNext!=null){
	btnNext.addEventListener("click", () => {
		if (nextIndex < 5) {
			galleryList[nextIndex].classList.add("gallery-item-2", "show-grid");
			galleryImage[nextIndex].classList.add("gallery-image-2", "show-grid");
			galleryList[nextIndex + 1].classList.remove("gallery-item-2");
			galleryImage[nextIndex + 1].classList.remove("gallery-image-2");
			if (nextIndex == 1) {
				galleryList[2].classList.remove("gallery-item-3");
				galleryImage[2].classList.remove("gallery-image-3");
			}
			if (nextIndex >= 1 && nextIndex <= 4) {
				galleryList[nextIndex - 1].classList.remove("gallery-item-2");
				galleryImage[nextIndex - 1].classList.remove("gallery-image-2");
				galleryList[nextIndex - 1].classList.add("gallery-item-3", "show-grid");
				galleryImage[nextIndex - 1].classList.add(
					"gallery-image-3",
					"show-grid"
				);

				galleryList[nextIndex].classList.add("gallery-item-2", "show-grid");
				galleryImage[nextIndex].classList.add("gallery-image-2", "show-grid");
			}
			if (nextIndex >= 2 && nextIndex <= 4) {
				galleryList[nextIndex - 2].classList.remove("gallery-item-3");
				galleryImage[nextIndex - 2].classList.remove("gallery-image-3");
				galleryList[nextIndex - 2].classList.add("gallery-item-4", "show-grid");
				galleryImage[nextIndex - 2].classList.add(
					"gallery-image-4",
					"show-grid"
				);
			}
			if (nextIndex == 2) {
				galleryList[3].classList.remove("gallery-item-4");
				galleryImage[3].classList.remove("gallery-image-4");
			}
			if (nextIndex >= 3 && nextIndex <= 4) {
				galleryList[nextIndex - 3].classList.remove("gallery-item-4");
				galleryImage[nextIndex - 3].classList.remove("gallery-image-4");
				galleryList[nextIndex - 3].classList.add("gallery-item-5", "show-grid");
				galleryImage[nextIndex - 3].classList.add(
					"gallery-image-5",
					"show-grid"
				);
			}
			if (nextIndex == 3) {
				galleryList[4].classList.remove("gallery-item-5");
				galleryImage[4].classList.remove("gallery-image-5");
			}

			if (nextIndex == 4) {
				galleryList[0].classList.remove("gallery-item-5");
				galleryImage[0].classList.remove("gallery-image-5");
				galleryList[0].classList.add("gallery-item-6", "show-grid");
				galleryImage[0].classList.add("gallery-image-6", "show-grid");
				galleryList[5].classList.remove("gallery-item-6");
				galleryImage[5].classList.remove("gallery-image-6");
			}
			nextIndex++;
		}
		if (nextIndex > 0) {
			btnBack.classList.remove("hide");
		}
		if (nextIndex > 4) {
			btnNext.classList.add("hide");
		}
	});
}

let btnBackDocumentation = document.querySelector("#btn-back-documentation");
let btnNextDocumentaition = document.querySelector("#btn-next-documentation");
let documentationIndex = 0;
let currentDocumentationWeb = 3;
let currentDocumentationMobile = 1;
let cekBeforeSize = detectIsMobile();
const documentaionList = document.querySelectorAll(
	".documentation-wrapper .documentation-card"
);
if(btnBackDocumentation!=null && btnNextDocumentaition!=null){
	if (documentationIndex === 0) {
		btnBackDocumentation.classList.add("hide");
	}
	// TODO Perbaiki onresize
	window.onresize = () => {
		// console.log("mobile ?" + detectIsMobile())
		// console.log("cek before size mobile ?" + cekBeforeSize);
		// if (isMobile != cekBeforeSize) {
		resetIndexDocument();
		if (detectIsMobile()) {
			console.log("masuk ke mobile");
			if (!documentaionList[0].classList.contains("hide")) {
				documentaionList[0].classList.remove["hide"];
			}
			for (let i = 3; i < documentaionList.length; i++) {
				if (!documentaionList[i].classList.contains("hide")) {
					console.log("dokumentationlist ke-" + i + " disembunyikan");
					documentaionList[i].classList.add["hide"];
				}
			}
		} else {
			console.log("masuk ke web");
			if (!documentaionList[0].classList.contains("hide")) {
				documentaionList[0].classList.remove["hide"];
			}
			for (let i = 3; i < documentaionList.length; i++) {
				if (!documentaionList[i].classList.contains("hide")) {
					documentaionList[i].classList.add["hide"];
				}
			}
			if (!documentaionList[1].classList.contains("hide-mobile-only")) {
				documentaionList[1].classList.add["hide-mobile-only"];
			}
			if (!documentaionList[2].classList.contains("hide-mobile-only")) {
				documentaionList[2].classList.add["hide-mobile-only"];
			}
		}
		// }
		// } else {
		// }
	};
	function resetIndexDocument() {
		if (cekBeforeSize != isMobile) {
			documentationIndex = 0;
			currentDocumentationWeb = 3;
			currentDocumentationMobile = 1;
		}
	}
	function nextGalleryDoc() {
		isMobile = detectIsMobile();
		resetIndexDocument();
		cekBeforeSize = isMobile;
		if (!isMobile) {
			if (currentDocumentationWeb <= documentaionList.length - 1) {
				documentaionList[currentDocumentationWeb].classList.remove("hide");
				documentaionList[documentationIndex].classList.add("hide");
				documentaionList[currentDocumentationWeb].style.animationName =
					"slideNext";
				documentationIndex++;
				currentDocumentationWeb++;
			}
			if (documentationIndex > 0) {
				btnBackDocumentation.classList.remove("hide");
			}
			if (currentDocumentationWeb > documentaionList.length - 1) {
				btnNextDocumentaition.classList.add("hide");
			}
		} else {
			if (currentDocumentationMobile <= documentaionList.length - 1) {
				if (
					currentDocumentationMobile == 2 ||
					currentDocumentationMobile == 1
				) {
					documentaionList[currentDocumentationMobile].classList.remove(
						"hide-mobile-only"
					);
				} else {
					documentaionList[currentDocumentationMobile].classList.remove("hide");
				}
				if (documentationIndex == 2 || documentationIndex == 1) {
					documentaionList[documentationIndex].classList.add(
						"hide-mobile-only"
					);
				} else {
					documentaionList[documentationIndex].classList.add("hide");
				}
				documentaionList[currentDocumentationMobile].style.animationName =
					"slideNext";
				documentationIndex++;
				currentDocumentationMobile++;
			}
			if (documentationIndex > 0) {
				btnBackDocumentation.classList.remove("hide");
			}
			if (currentDocumentationMobile > documentaionList.length - 1) {
				btnNextDocumentaition.classList.add("hide");
			}
		}
	}
	function beforeGalleryDoc() {
		isMobile = detectIsMobile();
		resetIndexDocument();
		cekBeforeSize = isMobile;
		if (!isMobile) {
			if (documentationIndex > 0) {
				documentaionList[documentationIndex - 1].classList.remove("hide");
				documentaionList[documentationIndex + 2].classList.add("hide");
				documentaionList[documentationIndex - 1].style.animationName =
					"slideBefore";
				documentationIndex--;
				currentDocumentationWeb--;
			}
			if (currentDocumentationWeb <= documentaionList.length - 1) {
				btnNextDocumentaition.classList.remove("hide");
			}
			if (documentationIndex === 0) {
				btnBackDocumentation.classList.add("hide");
			}
		} else {
			if (documentationIndex > 0) {
				if (documentationIndex - 1 == 2 || documentationIndex - 1 == 1) {
					documentaionList[documentationIndex - 1].classList.remove(
						"hide-mobile-only"
					);
				} else {
					documentaionList[documentationIndex - 1].classList.remove("hide");
				}
				// documentaionList[documentationIndex - 1].classList.remove("hide");
				documentaionList[documentationIndex - 1].style.animationName =
					"slideBefore";

				if (documentationIndex == 2 || documentationIndex == 1) {
					documentaionList[documentationIndex].classList.add(
						"hide-mobile-only"
					);
				} else {
					documentaionList[documentationIndex].classList.add("hide");
				}
				documentationIndex--;
				currentDocumentationMobile--;
			}
			if (currentDocumentationMobile <= documentaionList.length - 1) {
				btnNextDocumentaition.classList.remove("hide");
			}
			if (documentationIndex === 0) {
				btnBackDocumentation.classList.add("hide");
			}
		}
	}
}

// isMobile = detectIsMobile();
// if (!isMobile) {
// 	console.log("masuk ke web" + isMobile);
// 	let currentDocumentation = 3;
// 	btnBackDocumentation.addEventListener("click", () => {
// 		documentationCard.style.animationName = "slideBefore";
// 		if (documentationIndex > 0) {
// 			documentaionList[documentationIndex - 1].classList.remove("hide");
// 			documentaionList[documentationIndex + 2].classList.add("hide");
// 			documentaionList[documentationIndex - 1].style.animationName =
// 				"slideBefore";
// 			documentationIndex--;
// 			currentDocumentation--;
// 		}
// 		if (currentDocumentation <= documentaionList.length - 1) {
// 			btnNextDocumentaition.classList.remove("hide");
// 		}
// 		if (documentationIndex === 0) {
// 			btnBackDocumentation.classList.add("hide");
// 		}
// 	});
// 	btnNextDocumentaition.addEventListener("click", () => {
// 		if (currentDocumentation <= documentaionList.length - 1) {
// 			documentaionList[currentDocumentation].classList.remove("hide");
// 			documentaionList[documentationIndex].classList.add("hide");
// 			documentaionList[currentDocumentation].style.animationName = "slideNext";

// 			documentationIndex++;
// 			currentDocumentation++;
// 		}
// 		if (documentationIndex > 0) {
// 			btnBackDocumentation.classList.remove("hide");
// 		}
// 		if (currentDocumentation > documentaionList.length - 1) {
// 			btnNextDocumentaition.classList.add("hide");
// 		}
// 	});
// } else {
// 	let currentDocumentation = 1;
// 	btnBackDocumentation.addEventListener("click", () => {
// 		if (documentationIndex > 0) {
// 			if (documentationIndex - 1 == 2 || documentationIndex - 1 == 1) {
// 				documentaionList[documentationIndex - 1].classList.remove(
// 					"hide-mobile-only"
// 				);
// 			} else {
// 				documentaionList[documentationIndex - 1].classList.remove("hide");
// 			}
// 			// documentaionList[documentationIndex - 1].classList.remove("hide");
// 			documentaionList[documentationIndex - 1].style.animationName =
// 				"slideBefore";

// 			if (documentationIndex == 2 || documentationIndex == 1) {
// 				documentaionList[documentationIndex].classList.add("hide-mobile-only");
// 			} else {
// 				documentaionList[documentationIndex].classList.add("hide");
// 			}
// 			documentationIndex--;
// 			currentDocumentation--;
// 		}
// 		if (currentDocumentation <= documentaionList.length - 1) {
// 			btnNextDocumentaition.classList.remove("hide");
// 		}
// 		if (documentationIndex === 0) {
// 			btnBackDocumentation.classList.add("hide");
// 		}
// 	});
// 	btnNextDocumentaition.addEventListener("click", () => {
// 		if (currentDocumentation <= documentaionList.length - 1) {
// 			if (currentDocumentation == 2 || currentDocumentation == 1) {
// 				documentaionList[currentDocumentation].classList.remove(
// 					"hide-mobile-only"
// 				);
// 			} else {
// 				documentaionList[currentDocumentation].classList.remove("hide");
// 			}
// 			if (documentationIndex == 2 || documentationIndex == 1) {
// 				documentaionList[documentationIndex].classList.add("hide-mobile-only");
// 			} else {
// 				documentaionList[documentationIndex].classList.add("hide");
// 			}
// 			documentaionList[currentDocumentation].style.animationName = "slideNext";
// 			documentationIndex++;
// 			currentDocumentation++;
// 		}
// 		if (documentationIndex > 0) {
// 			btnBackDocumentation.classList.remove("hide");
// 		}
// 		if (currentDocumentation > documentaionList.length - 1) {
// 			btnNextDocumentaition.classList.add("hide");
// 		}
// 	});
// }
