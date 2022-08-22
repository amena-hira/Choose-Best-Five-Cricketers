var listCount = 0;

function listNameAdd(nameField) {
    let nameValue = document.getElementById(nameField).innerText;
    console.log(nameValue);
    console.log(listCount);
    if (listCount <5) {
        let li = document.createElement('li');
        li.innerText = nameValue;
        document.getElementById("list").appendChild(li);
        listCount++ ;
    } else {
        alert('Selected list More than 5 not allow');
    } 
    console.log(listCount);
}

document.getElementById("tamim").addEventListener('click', function(){
    listNameAdd("tamim-name");
}) 
document.getElementById("sakib").addEventListener('click', function(){
    listNameAdd("sakib-name");
}) 
document.getElementById("mushfiq").addEventListener('click', function(){
    listNameAdd("mushfiq-name");
}) 
document.getElementById("sabbir").addEventListener('click', function(){
    listNameAdd("sabbir-name");
}) 
document.getElementById("mustafiz").addEventListener('click', function(){
    listNameAdd("mustafiz-name");
}) 
document.getElementById("ashraful").addEventListener('click', function(){
    listNameAdd("ashraful-name");
}) 

document.getElementById('calc-player-budget').addEventListener('click',function () {
    const perPlayerField = document.getElementById('player-budget');
    const perPlayerValue = parseInt(perPlayerField.value);
    let totalPlayerExpenses = listCount * perPlayerValue;
    document.getElementById('player-expenses').innerText = totalPlayerExpenses;
    const managerField = document.getElementById('manager-input'); 
    const managerValue = parseInt(managerField.value);
    const coachField = document.getElementById('coach-input'); 
    const coachValue = parseInt(coachField.value);
    
    
})