let btnDropdown = document.querySelectorAll(".btn_dropdown");
console.log(btnDropdown);
btnDropdown.forEach((item) => {
	item.addEventListener("click", (e) => {
		document.querySelectorAll(".dropdown_el").forEach((item) => {
			item.classList.toggle("active");
		});
	});
});
