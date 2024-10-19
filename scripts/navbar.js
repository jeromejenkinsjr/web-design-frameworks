document.querySelectorAll(".nav-item.dropdown").forEach((item) => {
	item.addEventListener("mouseenter", () => {
		closeOtherDropdowns(item);
	});
	item.querySelector(".nav-link").addEventListener("click", (e) => {
		e.preventDefault();
		closeOtherDropdowns(item);
		toggleDropdown(item);
	});
});

function closeOtherDropdowns(currentItem) {
	document.querySelectorAll(".nav-item.dropdown").forEach((item) => {
		if (item !== currentItem) {
			item.querySelector(".dropdown-menu").classList.remove("show");
		}
	});
}

function toggleDropdown(item) {
	const menu = item.querySelector(".dropdown-menu");
	menu.classList.toggle("show");
}

// Close dropdowns when clicking outside the navbar
window.addEventListener("click", (e) => {
	if (!e.target.closest(".navbar")) {
		document
			.querySelectorAll(".nav-item.dropdown .dropdown-menu")
			.forEach((menu) => {
				menu.classList.remove("show");
			});
	}
});
