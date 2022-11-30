
let correct_things = () => {
    burger_icon.removeAttribute("clicked");
}



// ((1)) sidebar for mobile
// burger_icon
let clicks = 0;
document.body.onclick = () => (clicks > 1 ? correct_things() : clicks++);

let burger_icon = document.querySelector('.burger_icon');
burger_icon.addEventListener("click", () => {
    burger_icon.toggleAttribute("clicked");
    clicks = 0;
});
let nav = document.querySelector('nav');
nav.addEventListener('click', () => clicks = 0);
window.onscroll = () => correct_things();


// ((2))
// product photos
let big_img = document.querySelector(".mainImg_div img");
let prod_pics = document.querySelectorAll(".prod_imgs_list li");
let selected_img_src;
// func that puts 'active' class on selected.
let change_prod_img = (li) => {
    prod_pics.forEach((ele) => ele.classList.remove('active'));
    li.classList.add('active');
    selected_img_src = li.children.item(0).getAttribute('src');
    big_img.src = selected_img_src;
    correct_things();
}
prod_pics
    .forEach((ele) =>
        ele.addEventListener('click', () => change_prod_img(ele)));
        // end section

// ((3))
// prod details: add to cart items
let subtrac_item = document.getElementById("subtrac_item");
let add_item = document.getElementById("add_item");
let prodAmount_span = document.getElementById("prodAmount_span");
let change_cart_item = (x) => {
    x == '+'
    ? prodAmount_span.textContent++ : prodAmount_span.textContent--; 
    if (prodAmount_span.textContent < 1) {
        prodAmount_span.textContent = 1;
    }
}
add_item.addEventListener('click',()=>change_cart_item('+'))
subtrac_item.addEventListener('click', () => change_cart_item('-'));


// the add_to_cart btn
let add_to_cart_btn = document.getElementById("add_to_cart");
let prodAmount_in_cartDetails = document.querySelector('.items_in_cart');
let cart_items = document.querySelector(".cart_items");
let cart_items_div = document.querySelector(
  "body > header > div.user > div.cart_content > div"
);
let items_to_add;
let add_to_cart_func = () => {
    items_to_add = prodAmount_span.textContent;
    cart_items.textContent = +cart_items.textContent + +items_to_add;
    prodAmount_in_cartDetails.textContent = cart_items.textContent;
    prodAmount_span.textContent = 1;
    cart_items.textContent > 0 ? showCart() : hideCart();
    calc_items_cart();
}
add_to_cart_btn.addEventListener('click', () => add_to_cart_func());


let showCart = () =>cart_items_div.classList.remove('hidden');
let hideCart = () =>cart_items_div.classList.add("hidden");

let cart_total_span = document.querySelector('.cart_total');
let prod_price = document.querySelector('.prod_price_in_cart');
let calc_items_cart = () => {
    let total_items = +prodAmount_in_cartDetails.textContent * prod_price.textContent.slice(1);
    cart_total_span.textContent = `$${total_items}`;
}

let delete_cart_btn = document.querySelector('.delete_cart_items');
delete_cart_btn.addEventListener('click', () => delete_cart());
let delete_cart = () => {
    cart_items.textContent = 0;
    hideCart();
}

let check_out_btn = document.querySelector('.check_out_btn');
check_out_btn.addEventListener('click', () => showMsg());

let counter;
let showMsg = () => {
    document.body.setAttribute('style', '--animations:show_msg;');
    counter = 0;
}

setInterval(() => {
    if (counter == 4) document.body.setAttribute('style', '--animations:without;');
    counter++
}, 1000);