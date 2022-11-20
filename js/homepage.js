let goalNum = 1
let goalPrefix = "goal-"
let goalsDeleted = []

function addGoal(){
    let goalIdString = goalPrefix.concat(goalNum)
    console.log(goalIdString)
    let goalElement = document.getElementById(goalIdString)
    goalNum++
    goalElement.style.display = "block"   
    if (goalNum == 9){
        document.getElementById("addGoalButton").style.display = "none"
    } 
    else{
        document.getElementById("addGoalButton").style.display = "block"
    }
}