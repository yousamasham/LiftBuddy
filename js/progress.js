const submit = document.querySelector(".enter");
const imgList = document.querySelector(".images-list");

let metric = document.getElementById("metric");
let selection = metric.options[metric.selectedIndex].text;

let date = document.getElementById("metric");
date.max = new Date().toISOString().split("T")[0];
let dateRegex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;

submit.addEventListener("click", function () {
    if (selection === "bench press: weight" && dateRegex.test(date)) 
    {
        $('#imagesList').append('<li><img src="assets/img/weight_plot.png"/></li>');
    }
} )


