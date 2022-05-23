const installationSection = document.getElementById("Installation");
const quickStartSection = document.getElementById("Quick_Start");
const descrbeUiSection = document.getElementById("Describing_the_UI");
const renderingListsSection = document.getElementById("Rendering_Lists");
const managingStateSection = document.getElementById("Managing_State");
const navMobile = document.getElementById("navMobile");
const navDesktop = document.getElementById("navDesktop");

navDesktop.style.display = "block";

navMobile.addEventListener("click", function () {
	if (navDesktop.style.display == "block") {
		navDesktop.style.display = "none";
	} else {
		navDesktop.style.display = "block";
	}
});

const options = {
	threshold: 0.7,
};

function observeHandler(entries, observer) {
	entries.forEach((entry) => {
		let link = document.getElementById("nav_" + entry.target.id);
		if (entry.isIntersecting === true) {
			link.style.backgroundColor = "#283541";
			link.style.color = "#149eca";
		} else {
			link.style.color = "#fff";
			link.style.backgroundColor = "#23272f";
		}
	});
}

const observer = new IntersectionObserver(observeHandler, options);
observer.observe(installationSection);
observer.observe(quickStartSection);
observer.observe(descrbeUiSection);
observer.observe(renderingListsSection);
observer.observe(managingStateSection);

