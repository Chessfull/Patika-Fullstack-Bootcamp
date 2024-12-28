// Menu Data
const menu = [
    {
        id: 1,
        title: "Sushi",
        category: "Japan",
        price: 12.99,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUIIiKw69UJadWn0XcaAKL1A7bntgSgbJFag&s",
        desc: "Fresh sushi with salmon, rice, and seaweed.",
    },
    {
        id: 2,
        title: "Pad Thai",
        category: "Thailand",
        price: 10.99,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6hpj1ljkUGT2nSzP04qrNvu-kVbP60xBd2Q&s",
        desc: "Traditional Pad Thai with noodles and peanuts.",
    },
    {
        id: 3,
        title: "Kung Pao Chicken",
        category: "China",
        price: 9.99,
        img: "https://b.zmtcdn.com/data/pictures/chains/4/19515274/56ec37abeebcbf3c758457a41d9936b4.jpg?fit=around|960:500&crop=960:500;*,*",
        desc: "Spicy stir-fried chicken with peanuts.",
    },
    {
        id: 4,
        title: "Ramen",
        category: "Japan",
        price: 11.99,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3jCwWvTs2zZ1Qm9cD_EtsNoO9v-89fUKIMg&s",
        desc: "Rich ramen noodles with pork and egg.",
    },
    {
        id: 5,
        title: "Spring Rolls",
        category: "China",
        price: 5.99,
        img: "https://s3-media0.fl.yelpcdn.com/bphoto/RbLL_jkquMLkMrq-CvICZQ/348s.jpg",
        desc: "Crispy rolls stuffed with vegetables.",
    },
];

// DOM Elements
const buttonContainer = document.getElementById("buttonContainer");
const menuContainer = document.getElementById("menuContainer");

// Load Buttons and Menu
window.addEventListener("DOMContentLoaded", () => {
    displayButtons();
    displayMenuItems(menu);
});

// Display Menu Items
function displayMenuItems(menuItems) {
    const menuHTML = menuItems.map(item => `
        <div class="col-lg-4 col-md-6">
            <div class="card">
                <img src="${item.img}" class="card-img-top" alt="${item.title}">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.desc}</p>
                    <p class="text-primary">$${item.price.toFixed(2)}</p>
                </div>
            </div>
        </div>
    `).join("");
    menuContainer.innerHTML = menuHTML;
}

// Display Category Buttons
function displayButtons() {
    const categories = ["All", ...new Set(menu.map(item => item.category))];
    const buttonsHTML = categories.map(category => `
        <button class="btn btn-outline-primary mx-2" data-category="${category}">
            ${category}
        </button>
    `).join("");
    buttonContainer.innerHTML = buttonsHTML;

    // Add Event Listeners to Buttons
    const buttons = buttonContainer.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");
            const filteredMenu = category === "All" ? menu : menu.filter(item => item.category === category);
            displayMenuItems(filteredMenu);
        });
    });
}
