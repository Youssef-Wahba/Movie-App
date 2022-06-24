let trendingApi = `https://api.themoviedb.org/3/trending/all/day?api_key=6c9c150f9202eb23850c288f19e22c12&language=en-US&page=1`;
let nowPlayingApi = `https://api.themoviedb.org/3/movie/now_playing?api_key=6c9c150f9202eb23850c288f19e22c12&language=en-US&page=1`;
let popularApi = `https://api.themoviedb.org/3/movie/popular?api_key=6c9c150f9202eb23850c288f19e22c12&language=en-US&page=1`;
let topRatedApi = `https://api.themoviedb.org/3/movie/top_rated?api_key=6c9c150f9202eb23850c288f19e22c12&language=en-US&page=1`;
let upcomingApi = `https://api.themoviedb.org/3/movie/upcoming?api_key=6c9c150f9202eb23850c288f19e22c12&language=en-US&page=1`;

async function fetchData(api) {
	currentFilms = [];
	let response = await fetch(api);
	let data = await response.json();
	let cartona = ``;
	for (var i = 0; i < data.results.length; i++) {
		let o = {
			name: data.results[i].title,
			htmlElement: `<div class="col-md-6 col-lg-4">
                    <div class="film-container position-relative">
                        <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt="img" class="rounded-3 w-100 h-100">
                        <div
                            class="film-details fw-bolder rounded-3 text-center  position-absolute d-flex flex-column justify-content-center align-items-center w-100 h-100">
                            <h3 class="film-name">${data.results[i].title}</h3>
                            <p class="film-desc p-3">${data.results[i].overview}</p>
                            <p>rate : <span class="film-rate">${data.results[i].vote_average}</span>
                            </p>
                            <p class="film-release-date">${data.results[i].release_date}</p>
                        </div>
                    </div>
                </div>`,
		};
		currentFilms.push(o);
		cartona += `<div class="col-md-6 col-lg-4">
                    <div class="film-container position-relative">
                        <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt="img" class="rounded-3 w-100 h-100">
                        <div
                            class="film-details fw-bolder rounded-3 text-center  position-absolute d-flex flex-column justify-content-center align-items-center w-100 h-100">
                            <h3 class="film-name">${data.results[i].title}</h3>
                            <p class="film-desc p-3">${data.results[i].overview}</p>
                            <p>rate : <span class="film-rate">${data.results[i].vote_average}</span>
                            </p>
                            <p class="film-release-date">${data.results[i].release_date}</p>
                        </div>
                    </div>
                </div>`;
	}
	$(".films .container .row").append(cartona);
}
let allfilms = [];
let currentFilms = [];
(function () {
	fetchData(nowPlayingApi);
	getAllFilmsData();
	console.log(allfilms);
})();

$(".side-nav ul .list1").click(function () {
	$(".films .container .row .col-md-6").remove();
	fetchData(nowPlayingApi);
});
$(".side-nav ul .list2").click(function () {
	$(".films .container .row .col-md-6").remove();
	fetchData(popularApi);
});
$(".side-nav ul .list3").click(function () {
	$(".films .container .row .col-md-6").remove();
	fetchData(topRatedApi);
});
$(".side-nav ul .list4").click(function () {
	$(".films .container .row .col-md-6").remove();
	fetchData(trendingApi);
});
$(".side-nav ul .list5").click(function () {
	$(".films .container .row .col-md-6").remove();
	fetchData(upcomingApi);
});
$(".side-nav ul .list6").click(function () {
	$("html,body").scrollTop($(".contact-us").offset().top)
});

async function getAllFilmsData() {
	let apisArray = [
		trendingApi,
		nowPlayingApi,
		popularApi,
		topRatedApi,
		upcomingApi,
	];
	(async function () {
		for (let i = 0; i < 5; i++) {
			let response = await fetch(apisArray[i]);
			let data = await response.json();
			for (let j = 0; j < data.results.length; j++) {
				let filmDetails = {
					name: data.results[j].title,
					desc: data.results[j].overview,
					rate: data.results[j].vote_average,
					releaseDate: data.results[j].release_date,
					htmlElement: `<div class="col-md-6 col-lg-4">
                    <div class="film-container position-relative">
                        <img src="https://image.tmdb.org/t/p/w500/${data.results[j].poster_path}" alt="img" class="rounded-3 w-100 h-100">
                        <div
                            class="film-details fw-bolder rounded-3 text-center  position-absolute d-flex flex-column justify-content-center align-items-center w-100 h-100">
                            <h3 class="film-name">${data.results[j].title}</h3>
                            <p class="film-desc p-3">${data.results[j].overview}</p>
                            <p>rate : <span class="film-rate">${data.results[j].vote_average}</span>
                            </p>
                            <p class="film-release-date">${data.results[j].release_date}</p>
                        </div>
                    </div>
                </div>`,
				};
				allfilms.push(filmDetails);
			}
		}
	})();
}

$(".side-nav .slider .menu").click(function () {
	$(".side-nav .slider").toggleClass("active");
	$(".nav-list .list1").animate({ top: "0" }, 1000);
	$(".nav-list .list2").animate({ top: "50px" }, 1000);
	$(".nav-list .list3").animate({ top: "100px" }, 1000);
	$(".nav-list .list4").animate({ top: "150px" }, 1000);
	$(".nav-list .list5").animate({ top: "200px" }, 1000);
	$(".nav-list .list6").animate({ top: "250px" }, 1000);
	if (
		document.querySelector(".side-nav .slider").classList.contains("active")
	) {
		$(".side-nav .slider .menu").html(`<i class="fa-solid fa-xmark"></i>`);
		$(".nav-content").css("left", "0");
	} else {
		$(".side-nav .slider .menu").html(` <i
                    class="fa fa-align-justify"></i>`);
		$(".nav-content").css("left", "-220px");
	}
});

							/*SEARCH*/
document
	.querySelector(".search .whole-search")
	.addEventListener("input", function (e) {
		$(".films .container .row .col-md-6").remove();
		for (let i = 0; i < allfilms.length; i++) {
			if (
				allfilms[i].name.toLowerCase().includes(e.target.value.toLowerCase())
			) {
				$(".films .container .row").append(allfilms[i].htmlElement);
			}
		}
	});

document
	.querySelector(".search .current-search")
	.addEventListener("input", function (e) {
		$(".films .container .row .col-md-6").remove();
		for (let i = 0; i < currentFilms.length; i++) {
			if (
				currentFilms[i].name
					.toLowerCase()
					.includes(e.target.value.toLowerCase())
			) {
				$(".films .container .row").append(currentFilms[i].htmlElement);
			}
		}
	});

							/*VALIDATOIN */

document.getElementById("name").addEventListener("input", function (e) {
	if (validateName()) {
		$(".name .error").addClass("d-none");
	} else $(".name .error").removeClass("d-none");
});

document.getElementById("phone").addEventListener("input", function (e) {
	if (validatePhone()) {
		$(".phone .error").addClass("d-none");
	} else $(".phone .error").removeClass("d-none");
});

document.getElementById("pass").addEventListener("input", function (e) {
	if (validatePass()) {
		$(".pass .error").addClass("d-none");
	} else $(".pass .error").removeClass("d-none");
});

document.getElementById("email").addEventListener("input", function (e) {
	if (validateEmail()) {
		$(".email .error").addClass("d-none");
	} else $(".email .error").removeClass("d-none");
});

document.getElementById("age").addEventListener("input", function (e) {
	if (validateAge()) {
		$(".error").addClass("d-none");
	} else $(".contact-us .age .error").removeClass("d-none");
});

document.getElementById("repass").addEventListener("input", function (e) {
	if ($("#pass").val() == e) {
		$(".repass .error").addClass("d-none");
	} else $(".repass .error").removeClass("d-none");
});

function validateName() {
	let reGex = "/^[a-zA-Z]{1,}$/";
	if (reGex.test($("#name").val())) return true;
	return false;
}

function validatePhone() {
	let reGex = /^[0-9]{10,12}$/;
	if (reGex.test($("#phone").val())) return true;
	return false;
}

function validatePass() {
	let reGex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
	if (reGex.test($("#pass").val())) return true;
	return false;
}

function validateEmail() {
	let reGex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (reGex.test($("#email").val())) return true;
	return false;
}

function validateAge() {
	let reGex = /^(100|[1-9]{1,2})$/;
	if (reGex.test($("#age").val())) return true;
	return false;
}