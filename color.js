
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.select_color')
const panes = $$('.tab_product')

tabs.forEach((tab, index) => {
    const pane = panes[index]

    tab.onclick = function () {

        console.log(pane)
        $('.select_color.active').classList.remove('active')
        $('.tab_product.active').classList.remove('active')

        this.classList.add('active')
        pane.classList.add('active')
    }
})


function btnSearch() {
    var x = document.getElementById("search-text")
    if (x.style.display === 'block') {
        document.getElementById("container").style.backgroundColor = "white";
        x.style.animation = "1s";
        x.style.display = 'none';
    } else {
        document.getElementById("container").style.backgroundColor = "gray";
        document.getElementById("container").style.position = "absolute";
        document.getElementById("container").style.zIndex = "10";
        x.style.display = 'block';
    }
}
