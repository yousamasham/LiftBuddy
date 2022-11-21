const submit = document.querySelector(".enter");

let check = document.getElementById('enter');
if (check) {
    submit.addEventListener("click", imageAdd());
}

function imageAdd() {
    var img = document.createElement("img");
    img.src = 'assets/img/weight_plot.png';
    img.width = auto;
    img.height = auto;
    img.alt = 'Weight versus Time Plot';
    document.body.appendChild(img);
}
