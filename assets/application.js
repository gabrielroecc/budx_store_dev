// Put your application javascript here
const iconUser = document.querySelector(".icon_user");
const loginWrapper = document.querySelector(".login_register_option");

document.addEventListener("DOMContentLoaded", function () {
	const cartSide = document.querySelector(".cart_side");
	const openCart = document.querySelector(".open_cart");

	// Função para verificar a URL
	function checkCartURL() {
		if (window.location.pathname.includes("/cart")) {
			cartSide.classList.add("active");
		}
	}

	openCart.addEventListener("click", function (e) {
		e.stopPropagation(); // Impede que o clique se propague para o documento
		cartSide.classList.add("active");
	});

	// Adicione um ouvinte de clique no documento
	document.addEventListener("click", function (e) {
		// Verifique se o clique não foi dentro do carrinho ou no botão de abertura
		if (e.target !== cartSide && e.target !== openCart) {
			cartSide.classList.remove("active");
		}
	});

	// Impedir que o clique dentro do carrinho feche o carrinho
	cartSide.addEventListener("click", function (e) {
		e.stopPropagation(); // Impede que o clique se propague para o documento
	});

	// Verifique a URL quando a página carregar
	checkCartURL();

	// Verifique a URL sempre que a janela for redimensionada
	window.addEventListener("resize", checkCartURL);

	// Verifique a URL sempre que a localização da página mudar
	window.addEventListener("popstate", checkCartURL);
});
