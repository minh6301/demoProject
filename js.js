
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.dropdown-value')
const panes = $$('.dropdown-item')

tabs.forEach((tab, index) => {
    const pane = panes[index]

    tab.onclick = function () {

        console.log(pane)
        $('.dropdown-value.active').classList.remove('active')
        $('.dropdown-item.active').classList.remove('active')

        this.classList.add('active')
        pane.classList.add('active')
    }
})

function btnSearch() {
    var x = document.getElementById("search-text")
    var y = document.getElementById("block_container")
    if (x.style.display === 'block' && y.style.display == "block") {
        x.style.display = 'none';
        y.style.display = 'none';
    } else {
        x.style.display = 'block';
        y.style.display = 'block';
    }

}

function outSearch() {
    var x = document.getElementById("search-text")
    var y = document.getElementById("block_container")
    if (x.style.display === 'none' && y.style.display == "none") {
        x.style.display = 'block';
        y.style.display = 'block';
    } else {
        x.style.display = 'none';
        y.style.display = 'none';
    }

}

const showNavbar = document.querySelector(".btn_show-menu");
const closeNavbar = document.querySelector(".icon-close");
const navbar = document.querySelector(".header_link_list_item");

showNavbar.addEventListener("click", () => {
    navbar.classList.add("active");
});
closeNavbar.addEventListener("click", () => {
    navbar.classList.remove("active");
});

