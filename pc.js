var span = document.getElementsByTagName('span1');
var div = document.getElementsByTagName('nav');
var l = 0;
span[1].onclick = () => {
    l++;
    for (var i of div) {
        if (l == 0) { i.style.left = "0px"; }
        if (l == 1) { i.style.left = "-200px"; }
        if (l == 2) { i.style.left = "-400px"; }
        if (l == 3) { i.style.left = "-600px"; }
        if (l > 4) { l = 4; }
        setInterval(2000);
    }
    span[0].onclick = () => {
        l--;
        for (var i of div) {
            if (l == 0) { i.style.left = "0px"; }
            if (l == 1) { i.style.left = "-200px"; }
            if (l == 2) { i.style.left = "-400px"; }
            if (l == 3) { i.style.left = "-600px"; }
            if (l < 0) { l = 0; }
        }
    }
}

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

function btnFilterSize() {
    var filterSize = document.getElementById("filter_size")
    if (filterSize.style.display == "block") {
        filterSize.style.display = "none";
        document.getElementById("icon_filter_size").innerHTML = "<i class='fas fa-plus' aria-hidden='true'></i>";
    }
    else {
        filterSize.style.display = "block";
        document.getElementById("icon_filter_size").innerHTML = "<i class='fas fa-minus' aria-hidden='true'></i>";
    }
}
function btnFilterList() {
    var filterList = document.getElementById("filter_list")
    if (filterList.style.display == "block") {
        filterList.style.display = "none";
        document.getElementById("icon_filter_list").innerHTML = "<i class='fas fa-plus' aria-hidden='true'></i>";
    }
    else {
        document.getElementById("icon_filter_list").innerHTML = "<i class='fas fa-minus' aria-hidden='true'></i>";
        filterList.style.display = "block";
    }
}
function btnFilterResolution() {
    var filterResolution = document.getElementById("filter_resolution")
    if (filterResolution.style.display == "block") {
        filterResolution.style.display = "none";
        document.getElementById("icon_filter_resolution").innerHTML = "<i class='fas fa-plus' aria-hidden='true'></i>";
    }
    else {
        filterResolution.style.display = "block";
        document.getElementById("icon_filter_resolution").innerHTML = "<i class='fas fa-minus' aria-hidden='true'></i>";
    }
}
function btnFilterRate() {
    var filterResolution = document.getElementById("filter_rate")
    if (filterResolution.style.display == "block") {
        filterResolution.style.display = "none";
        document.getElementById("icon_filter_rate").innerHTML = "<i class='fas fa-plus' aria-hidden='true'></i>";
    }
    else {
        filterResolution.style.display = "block";
        document.getElementById("icon_filter_rate").innerHTML = "<i class='fas fa-minus' aria-hidden='true'></i>";
    }
}