var listCount = 0;

function listNameAdd(nameField,buttonField) {
    let nameValue = document.getElementById(nameField).innerText;
    console.log(nameValue);
    console.log(listCount);
    if (listCount <5) {
        let li = document.createElement('li');
        li.innerText = nameValue;
        document.getElementById("list").appendChild(li);
        const button = document.getElementById(buttonField);
        button.setAttribute('disabled', '');
        listCount++ ;
    } else {
        alert('Selected list More than 5 not allow');
    } 
    console.log(listCount);
}

document.getElementById("tamim").addEventListener('click', function(){
    listNameAdd("tamim-name","tamim");   
}) 
document.getElementById("sakib").addEventListener('click', function(){
    listNameAdd("sakib-name","sakib");
}) 
document.getElementById("mushfiq").addEventListener('click', function(){
    listNameAdd("mushfiq-name","mushfiq");
}) 
document.getElementById("sabbir").addEventListener('click', function(){
    listNameAdd("sabbir-name","sabbir");
}) 
document.getElementById("mustafiz").addEventListener('click', function(){
    listNameAdd("mustafiz-name","mustafiz");
}) 
document.getElementById("ashraful").addEventListener('click', function(){
    listNameAdd("ashraful-name","ashraful");
}) 

document.getElementById('calc-player-budget').addEventListener('click',function () {
    const perPlayerField = document.getElementById('player-budget');
    const perPlayerValue = parseInt(perPlayerField.value);
    let totalPlayerExpenses = listCount * perPlayerValue;
    document.getElementById('player-expenses').innerText = totalPlayerExpenses;
})
document.getElementById('calculate-total').addEventListener('click',function () {
    let totalPlayerExpenses = parseInt(document.getElementById('player-expenses').innerText);
    const managerField = document.getElementById('manager-input'); 
    const managerValue = parseInt(managerField.value);
    const coachField = document.getElementById('coach-input'); 
    const coachValue = parseInt(coachField.value);
    const totalBudget = totalPlayerExpenses + managerValue + coachValue;
    document.getElementById('total-budget').innerText = totalBudget;
})