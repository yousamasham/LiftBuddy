function gotonext(){
    document.getElementById('excercises').style.display='none'
    document.getElementById('goals').style.display='block'
}

function load1(){
    if(localStorage.keep == "1"){
        document.getElementById('excercise-input').value = localStorage.excercise
    }
    else{
        localStorage.excercise = ""
        localStorage.goal_sets = ""
        localStorage.goal_reps = ""
        localStorage.goal_weight = ""
    }
}

function filter(){
    document.getElementById("myDropdown").style.display='block';
    var input, filter, a, i;
    input = document.getElementById("excercise-input");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("button");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1){
        a[i].style.display = "";
      }
      else{
        a[i].style.display = "none";
      }
    }
}

function hideDropBox(){
    document.getElementById("myDropdown").style.display='none';
}

function fillInput(exercise){
    document.getElementById("excercise-input").value = exercise;
    hideDropBox();
}

function next1(){
    const elem = document.getElementById('excercise-input');
    if(elem.value == ""){
        document.getElementById('error-message1').style.display='block'
    }
    else{
        if(localStorage.excercise != elem.value){
            localStorage.goal_sets = ""
            localStorage.goal_reps = ""
            localStorage.goal_weight = ""
        }
        localStorage.excercise = elem.value
        location.href='new-records-2.html'
    }
    localStorage.keep = false
}

function load2(){
    document.getElementById("excercise-value").innerHTML = localStorage.excercise;
    document.getElementById('goal-sets').value = localStorage.goal_sets
    document.getElementById('goal-reps').value = localStorage.goal_reps
    document.getElementById('goal-weight').value = localStorage.goal_weight
}

function back2(){
    location.href='new-records-1.html'
    localStorage.keep = "1"
}

function next2(){
    const sets = document.getElementById('goal-sets');
    const reps = document.getElementById('goal-reps');
    const weight = document.getElementById('goal-weight');
    if(sets.value == "" || reps.value == "" || weight.value == ""){
        document.getElementById('error-message2').style.display='block'
    }
    else{
        localStorage.goal_sets = sets.value
        localStorage.goal_reps = reps.value
        localStorage.goal_weight = weight.value
        location.href='new-records-3.html'
    }
}

function load3(){
    document.getElementById("excercise-value").innerHTML = localStorage.excercise;
}

function back3(){
    location.href='new-records-2.html'
}

function add2(){
    document.getElementById('set1-button').style.display='none'
    document.getElementById('set2title').style.display='block'
    document.getElementById('reps-title2').style.display='block'
    document.getElementById('reps2').style.display='block'
    document.getElementById('weight-title2').style.display='block'
    document.getElementById('weight2').style.display='block'
    document.getElementById('set2-button').style.display='block'
}

function add3(){
    document.getElementById('set2-button').style.display='none'
    document.getElementById('set3title').style.display='block'
    document.getElementById('reps-title3').style.display='block'
    document.getElementById('reps3').style.display='block'
    document.getElementById('weight-title3').style.display='block'
    document.getElementById('weight3').style.display='block'
    document.getElementById('set3-button').style.display='block'
}

function save(){
    const reps1 = document.getElementById('reps1');
    const weight1 = document.getElementById('weight1');
    if(reps1.value == "" || weight1.value == ""){
        document.getElementById('error-message3').style.display='block'
    }
    else{
        localStorage.excercise = ""
        localStorage.goal_sets = ""
        localStorage.goal_reps = ""
        localStorage.goal_weight = ""
        location.href='new-records-1.html'
    }
}