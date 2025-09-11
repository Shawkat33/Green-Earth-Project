const manageCategorySpinner = (status) => {
	const spinnerCategory = document.getElementById("spinnerCategory");

	if (status === true) {
		spinnerCategory.classList.remove("hidden");
	} else {
		spinnerCategory.classList.add("hidden");
	}
};

const manageCardSpinner = (status) => {
	const spinnerCard = document.getElementById("spinnerCard");
	const cardContainer = document.getElementById("card");

	if (status === true) {
		spinnerCard.classList.remove("hidden");
		cardContainer.classList.add("hidden");
	} else {
		spinnerCard.classList.add("hidden");
		cardContainer.classList.remove("hidden");
	}
};

const loadCategories = async () => {
	manageCategorySpinner(true);
	try {
		const url = "https://openapi.programming-hero.com/api/categories";
		const res = await fetch(url);
		const json = await res.json();
		const data = json.categories;
		displayCategories(data);
	} catch (error) {
		console.error(error);
	} finally {
		manageCategorySpinner(false);
	}
};

loadCategories();

const displayCategories = (items) => {
	const categoryList = document.getElementById("category");

	//Default All Category

	const allCategory = document.createElement("li");
	allCategory.innerHTML = `<a class="category-btn" href="#">All Trees</a>`;
	allCategory.role = "button";
	allCategory.classList.add("hover:cursor-pointer");
	allCategory.id = "category-id-all";

	categoryList.append(allCategory);

	items.forEach((data) => {
		const categoryName = document.createElement("li");

		categoryName.innerHTML = `<a class="category-btn w-full h-full" href="#">${data.category_name}</a>`;
		categoryName.role = "button";
		categoryName.classList.add("hover:cursor-pointer");
		categoryList.append(categoryName);
		categoryName.id = `category-id-${data.id}`;
	});
	// console.log(categoryList);
};

// Remove active Button state function

const removeActiveBtn = () => {
	const listParent = document.getElementById("category");
	// console.log(listParent);
	const listItems = [...listParent.children];
	// console.log(listItems);
	listItems.forEach((listItem) => {
		listItem.classList.remove("active");
	});
};

// Displaying tree Cards by Category selection & Active State Maintenance

document.getElementById("category").addEventListener("click", (e) => {
	e.preventDefault();

	const clickedCategory = e.target.closest('[id^="category-id-"]');
	if (!clickedCategory) {
		return;
	}
	// console.log(clickedCategory);

	// console.log(clickedCategory.parentElement.id);

	removeActiveBtn();

	const categoryId = clickedCategory.id.replace("category-id-", "");

	// console.log(categoryId);

	const categoryListItem = document.getElementById(clickedCategory.id);

	categoryListItem.classList.add("active");

	if (categoryId === "all") {
		loadAllTrees();
	} else {
		loadCategoricalTrees(categoryId);
	}
	document
		.getElementById("main-section")
		.scrollIntoView({ behavior: "smooth" });
});

const loadAllTrees = async () => {
	manageCardSpinner(true);

	try {
		const url = "https://openapi.programming-hero.com/api/plants";
		const res = await fetch(url);
		const json = await res.json();
		const data = json.plants;
		displayAllTrees(data);
	} catch (error) {
		console.error(error);
	} finally {
		manageCardSpinner(false);
	}
};

// loadAllTrees();

const displayAllTrees = (trees) => {
	// console.log(trees);

	const treeCards = document.getElementById("card");

	treeCards.innerHTML = "";

	trees.forEach((tree) => {
		const treeItem = document.createElement("div");

		// "id": 1,
		// "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
		// "name": "Mango Tree",
		// "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
		// "category": "Fruit Tree",
		// "price": 500

		treeItem.innerHTML = `<div id="tree-id-${tree.id}"
								class="bg-white w-full max-h-[23.375rem] p-4 flex flex-col gap-3 justify-center items-center rounded-lg"
							>
        
                                <div
									class="w-full h-[11.1875rem] bg-green-50 rounded-lg flex justify-center items-center overflow-hidden"
								>
									<img class="object-cover w-full h-full" loading="lazy" src="${tree.image}" alt="" />
								</div>

								<div
									class="product-detail flex flex-col gap-2 text-left w-full"
								>
									<h3 onclick="loadTreeDetails(${tree.id})" class="text-xl font-semibold hover:cursor-pointer">${tree.name}</h3>
									<p class="text-[#1F2937CC] text-xs overflow-y-scroll max-h-10">
										${tree.description}
									</p>
									<div class="flex justify-between">
										<span
											class="min-w-[5.375rem] h-[1.75rem] bg-[#DCFCE7] text-[#15803D] rounded-full px-3 text-xs text-center content-center"
											>${tree.category}</span
										>
										<p>
											<span
												><i class="fa-solid fa-bangladeshi-taka-sign"></i
											></span>
											${tree.price}
										</p>
									</div>
								</div>

								<button
									id="cart-btn-${tree.id}"
									class="w-full rounded-full content-center px-5 py-3 bg-[#15803D] active:bg-green-800 text-white font-medium hover:cursor-pointer"
								>
									Add to Cart
								</button>
                                </div>`;
		treeCards.append(treeItem);
	});
};

const loadCategoricalTrees = async (id) => {
	// console.log(id);

	manageCardSpinner(true);

	try {
		const url = `https://openapi.programming-hero.com/api/category/${id}`;
		const res = await fetch(url);
		const json = await res.json();
		const data = json.plants;
		displayCategoricalTrees(data);
	} catch (error) {
		console.error(error);
	} finally {
		manageCardSpinner(false);
	}
};

const displayCategoricalTrees = (trees) => {
	// console.log(trees);

	const treeCards = document.getElementById("card");

	treeCards.innerHTML = "";

	trees.forEach((tree) => {
		const treeItem = document.createElement("div");

		// "id": 1,
		// "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
		// "name": "Mango Tree",
		// "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
		// "category": "Fruit Tree",
		// "price": 500

		treeItem.innerHTML = `<div id="tree-id-${tree.id}"
								class="bg-white w-full max-h-[23.375rem] p-4 flex flex-col gap-3 justify-center items-center rounded-lg"
							>
        
                                <div
									class="w-full h-[11.1875rem] bg-green-50 rounded-lg flex justify-center items-center overflow-hidden"
								>
									<img class="w-full h-full object-cover" loading="lazy" src="${tree.image}" alt="" />
								</div>

								<div
									class="product-detail flex flex-col gap-2 text-left w-full"
								>
									<h3 onclick="loadTreeDetails(${tree.id})" class="text-xl font-semibold hover:cursor-pointer">${tree.name}</h3>
									<p class="text-[#1F2937CC] text-xs overflow-y-scroll max-h-10">
										${tree.description}
									</p>
									<div class="flex justify-between">
										<span
											class="min-w-[5.375rem] h-[1.75rem] bg-[#DCFCE7] text-[#15803D] rounded-full px-3 text-xs text-center content-center"
											>${tree.category}</span
										>
										<p>
											<span
												><i class="fa-solid fa-bangladeshi-taka-sign"></i
											></span>
											${tree.price}
										</p>
									</div>
								</div>

								<button
									id="cart-btn-${tree.id}"
									class="w-full rounded-full content-center px-5 py-3 bg-[#15803D] active:bg-green-800 text-white font-medium hover:cursor-pointer"
								>
									Add to Cart
								</button>
                                </div>`;
		treeCards.append(treeItem);
	});
};

// Tree Detail Modal

const loadTreeDetails = async (id) => {
	try {
		const url = `https://openapi.programming-hero.com/api/plant/${id}`;
		const res = await fetch(url);
		const json = await res.json();
		const details = json.plants;

		displayTreeDetails(details);
	} catch (error) {
		console.error(error);
	}
};

const displayTreeDetails = (tree) => {
	// console.log(tree);

	const modalWindow = document.getElementById("treeDetails");
	modalWindow.innerHTML = "";
	const treeDetail = document.createElement("div");
	treeDetail.classList.add("space-y-2");
	treeDetail.innerHTML = `<h2 class="text-2xl font-bold">${tree.name}</h2>

								<img
									class="aspect-square w-full object-cover my-3 rounded-xl"
									src="${tree.image}"
									alt=""
								/>

								<p class="text-sm">
									<span class="font-semibold">Category: </span>${tree.category}
								</p>
								<p class="text-sm">
									<span class="font-semibold">Description: </span>${tree.description}
								</p>
								<p class="text-sm">
									<span class="font-semibold">Price: </span
									><i class="fa-solid fa-bangladeshi-taka-sign"></i> ${tree.price}
								</p>`;

	modalWindow.append(treeDetail);
	document.getElementById("my_modal_5").showModal();
};

// Add to Cart

document.getElementById("card").addEventListener("click", async (e) => {
	if (e.target.tagName !== "BUTTON") {
		return;
	}
	const addItemId = e.target.id.replace("cart-btn-", "");

	const tree = async (id) => {
		try {
			const url = `https://openapi.programming-hero.com/api/plant/${id}`;
			const res = await fetch(url);
			const json = await res.json();
			const data = json.plants;
			return data;
		} catch (error) {
			console.error(error);
		}
	};

	// This whole event must be an asynchronus one and the returned value from an API must be awaited inside an async function unlike other cases

	const treeDetail = await tree(addItemId);

	console.log(treeDetail);

	addToCart(treeDetail);

	// console.log(addItemId);
});

function addToCart(tree) {
	const cartCard = document.getElementById("cart");

	let existingItem = document.getElementById(`cart-item-${tree.id}`);

	const newAddItem = document.createElement("div");
	newAddItem.innerHTML = ``;

	cartCard.append(newAddItem);
	const itemExists = document.getElementById(`cart-item-${tree.id}`);
	const timesAdded = document.getElementById(`timesAdded-${tree.id}`).innerText[
		-1
	];
	console.log(timesAdded);

	if (itemExists.id === tree.id) {
		timesAdded++;
	}
}
