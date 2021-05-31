// --- --- --- PRODUCTS --- --- --- //

let products = [
	{
		id: 1,
		title: "Preorder - Analog Starter Kit",
		description: "",
		category: ["objects", "final stock"],
		oldPrice: 98.00,
		newPrice: 79.00,
		fixedPrice: "",
		image: ["../images/products/prod-1.jpg", "../images/products/prod-1-1.jpg"]
	}, {
		id: 2,
		title: "Preorder - Analog Cards",
		description: "(3-Pack)",
		category: ["objects", "best sellers"],
		oldPrice: "",
		newPrice: "",
		fixedPrice: 39.00,
		image: ["../images/products/prod-2.jpg", "../images/products/prod-2-1.jpg"]
	}, {
		id: 3,
		title: "Preorder - Analog Travel Case",
		description: "(Gray)",
		category: ["objects"],
		oldPrice: "",
		newPrice: "",
		fixedPrice: 32.00,
		image: ["../images/products/prod-3.jpg", "../images/products/prod-3-1.jpg"]
	}, {
		id: 4,
		title: "Preorder - Analog Wood Card Holder",
		description: "",
		category: ["objects"],
		oldPrice: "",
		newPrice: "",
		fixedPrice: 59.00,
		image: ["../images/products/prod-4.jpg", "../images/products/prod-4-1.jpg"]
	}, {
		id: 5,
		title: "Modus Operandi - Artist Collab",
		description: "(3-Pack)",
		category: ["clothing", "final stock"],
		oldPrice: 126.00,
		newPrice: 120.00,
		fixedPrice: "",
		image: ["../images/products/prod-5.jpg", "../images/products/prod-5-1.jpg"]
	}, {
		id: 6,
		title: "Modus Operandi 01 - Artist Collab",
		description: "(White)",
		category: ["clothing"],
		oldPrice: "",
		newPrice: "",
		fixedPrice: 42.00,
		image: ["../images/products/prod-6.jpg", "../images/products/prod-6-1.jpg"]
	}, {
		id: 7,
		title: "Modus Operandi 03 - Artist Collab",
		description: "(Navy)",
		category: ["clothing"],
		oldPrice: "",
		newPrice: "",
		fixedPrice: 42.00,
		image: ["../images/products/prod-7.jpg", "../images/products/prod-7-1.jpg"]
	}, {
		id: 8,
		title: "Modus Operandi 02 - Artist Collab",
		description: "(Charcoal)",
		category: ["clothing"],
		oldPrice: "",
		newPrice: "",
		fixedPrice: 42.00,
		image: ["../images/products/prod-8.jpg", "../images/products/prod-8-1.jpg"]
	}, {
		id: 9,
		title: "Kinto Travel Tumbler",
		description: "(Black)",
		category: ["objects", "best sellers"],
		oldPrice: "",
		newPrice: "",
		fixedPrice: 35.00,
		image: ["../images/products/prod-9.jpg", "../images/products/prod-9-1.jpg"]
	}, {
		id: 10,
		title: "Circular",
		description: "(Sienna)",
		category: ["clothing"],
		oldPrice: "",
		newPrice: "",
		fixedPrice: 36.00,
		image: ["../images/products/prod-10.jpg", "../images/products/prod-10-1.jpg"]
	}, {
		id: 11,
		title: "Facet",
		description: "(Black)",
		category: ["clothing", "best sellers"],
		oldPrice: "",
		newPrice: "",
		fixedPrice: 36.00,
		image: ["../images/products/prod-11.jpg", "../images/products/prod-11-1.jpg"]
	}, {
		id: 12,
		title: "Rain",
		description: "(Deep Forest)",
		category: ["clothing"],
		oldPrice: "",
		newPrice: "",
		fixedPrice: 36.00,
		image: ["../images/products/prod-12.jpg", "../images/products/prod-12-1.jpg"]
	}, {
		id: 13,
		title: "Hollow",
		description: "(Port)",
		category: ["clothing"],
		oldPrice: "",
		newPrice: "",
		fixedPrice: 36.00,
		image: ["../images/products/prod-13.jpg", "../images/products/prod-13-1.jpg"]
	}, {
		id: 14,
		title: "Face Mask",
		description: "(Black)",
		category: ["face masks"],
		oldPrice: "",
		newPrice: "",
		fixedPrice: 10.00,
		image: ["../images/products/prod-14.jpg", "../images/products/prod-14-1.jpg"]
	}, {
		id: 15,
		title: "Ripple Effect",
		description: "(Charcoal Triblend)",
		category: ["clothing"],
		oldPrice: "",
		newPrice: "",
		fixedPrice: 36.00,
		image: ["../images/products/prod-15.jpg", "../images/products/prod-15-1.jpg"]
	}, {
		id: 16,
		title: "Premium Leather Mousepad XL",
		description: "(Ugmonk Logo - Natural)",
		category: ["objects"],
		oldPrice: "",
		newPrice: "",
		fixedPrice: 52.00,
		image: ["../images/products/prod-16.jpg", "../images/products/prod-16-1.jpg"]
	}, {
		id: 17,
		title: "Shoes Like Pottery",
		description: "(High Top - Natural)",
		category: ["clothing"],
		oldPrice: "",
		newPrice: "",
		fixedPrice: 165.00,
		image: ["../images/products/prod-17.jpg", "../images/products/prod-17-1.jpg"]
	}, {
		id: 18,
		title: "Men's Essential Tee",
		description: "(Starter Kit - 3-Pack)",
		category: ["clothing", "final stock"],
		oldPrice: 96.00,
		newPrice: 89.00,
		fixedPrice: "",
		image: ["../images/products/prod-18.jpg", "../images/products/prod-18-1.jpg"]
	}, {
		id: 19,
		title: "Leather Coasters",
		description: "(Enjoy the Journey - Set of 2 - Natural)",
		category: ["objects"],
		oldPrice: "",
		newPrice: "",
		fixedPrice: 18.00,
		image: ["../images/products/prod-19.jpg", "../images/products/prod-19-1.jpg"]
	}, {
		id: 20,
		title: "Gather Basic Set",
		description: "(Walnut)",
		category: ["objects"],
		oldPrice: "",
		newPrice: "",
		fixedPrice: 39.00,
		soldOut: true,
		image: ["../images/products/prod-20.jpg", "../images/products/prod-20-1.jpg"]
	}
];

function li(product) {
	return(
		`<li class="products__item product-card">
			<div class="product-card__image-box">
				<img class="product-card__image" src="${product.image[0]}" alt="${product.title}" >
			</div>
			<h3 class="product-card__title">
				${product.title}
				<span class="product-card__description">${product.description}</span>
			</h3>
			<p class="produc-card__price">
				${product.oldPrice ? `<span class="old-price">$${product.oldPrice}</span> <span class="new-price">$${product.newPrice}</span>` : `<span class="fixed-price">$${product.fixedPrice}</span>`}
			</p>
		</li>`
	)
}

let productsItemsBlock = document.querySelector(".products__items");

let template = `
	<li class="products__item product-card">
		<div class="product-card__image-box">
			<img class="product-card__image" src="./images/products/prod-1.jpg" alt="product-1" >
		</div>
		<h3 class="product-card__title">
			Preorder - Analog Starter Kit 
			<span class="product-card__description"></span>
		</h3>
		<p class="produc-card__price">$300</p>
	</li>`


products.forEach(product => {
	productsItemsBlock.innerHTML += li(product)
})

document.querySelectorAll(".product-card__image").forEach(element => {
	element.addEventListener("mouseover", () => {
		products.forEach(e => e.title === element.alt ? element.src = e.image[1] : null )
	})
	element.addEventListener("mouseout", () => {
		products.forEach(e => e.title === element.alt ? element.src = e.image[0] : null )
	})
})

document.querySelectorAll(".products-list__item").forEach(item => {
	item.addEventListener("click", () => {

		document.querySelectorAll(".products-list__item").forEach(e => e.classList.remove("products-list__item--active"))
		item.classList.add("products-list__item--active")

		let tabName = item.textContent;
		productsItemsBlock.innerHTML = "";

		products.forEach(product => {
			if(product.category.includes(tabName.toLocaleLowerCase())) {
				productsItemsBlock.innerHTML += li(product)
			} else if (tabName.toLocaleLowerCase() === "new arrivals") {
				productsItemsBlock.innerHTML += li(product)
			}
		})
	})
})