
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.select_product_image')
const panes = $$('.view')

tabs.forEach((tab, index) => {
    const pane = panes[index]

    tab.onclick = function () {

        console.log(pane)
        $('.select_product_image.active').classList.remove('active')
        $('.view.active').classList.remove('active')

        this.classList.add('active')
        pane.classList.add('active')
    }
})
