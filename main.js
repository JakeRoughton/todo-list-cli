const prompt = require('prompt-sync')({sigint: true});

console.log('Welcome to the To-Do List Manager Application!\n')

let option = selectOption();
let toDoList = [];
let statusArray = [];

while(option !== 5){
    if(option === 1){
        console.log('\n~ Creating a new to-do item ~');
        console.log('What is this to-do item called?');
    let addItem = prompt('> ')
    while(addItem.length === 0){
        console.log('Invalid: Input cannot be empty')
        addItem = prompt('> ');
}
    toDoList.push(addItem);
    statusArray.push(false);

    displayList();

    option = selectOption();



}   else if (option === 2){
        if(toDoList.length !== 0){
        console.log('~ Completing a to-do item ~');
        console.log('Which to-do item would you like to complete?');

        displayList();

        let newStatus = Number(prompt('> '));


        while(isNaN(newStatus) || newStatus > statusArray.length || newStatus < 1){
            console.log('Please input a number that corresponds with item in list: ')
            newStatus = Number(prompt('> '));
}
        statusArray[newStatus-1]= true;
}       else{
        console.log("\n***Please add task before completing item***\n")
            displayList();

        option = selectOption();
}

}   else  {
        console.log('Error!!! Invalid operation')
        option = selectOption();

}   if (option === 3){
    if(toDoList.length !== 0){
    console.log('~ Unchecking a to-do item ~');
    console.log('Which to-do item would you like to uncheck?');
    
    displayList();

    newStatus = Number(prompt('> '));

    while(isNaN(newStatus) || newStatus > statusArray.length || newStatus < 1){
        console.log('Please input a number that corresponds with item in list: ')
        newStatus = Number(prompt('> '));
    }
    statusArray[newStatus-1]= false;
}   else{
    console.log("\n***Please add task before unchecking item***\n")
        displayList();

    option = selectOption();
}
    displayList();

    option = selectOption();

    displayList();

} else {
    console.log('Error!!! Invalid operation')
    option = selectOption();
}

// }   if (option === 4){
//     if(toDoList.length !== 0){
//     console.log('~ Deleting a to-do item ~');
//     console.log('Which to-do item would you like to Delete?');

//     displayList();

//     newStatus = Number(prompt('> '));


//     while(isNaN(newStatus) || newStatus > statusArray.length || newStatus < 1){
//         console.log('Please input a number that corresponds with item in list: ')
//         newStatus = Number(prompt('> '));
// }
//     statusArray[newStatus.splice(Number(prompt))];
// }   else{
//     console.log("\n***Please add task before deleting item***\n")
//         displayList();

//     option = selectOption();
// }

// }   else  {
//     console.log('Error!!! Invalid operation')
//     option = selectOption();

//Exiting Application
}

function selectOption(){
console.log('\n~ Select an action ~');
console.log('[1] Create a to-do item');
console.log('[2] Complete a to-do item');
console.log('[3] Uncheck to-do item');
console.log('[4] Delete to-do item')
console.log('[5] Exit To-Do-List');
return Number(prompt('> '));
}

function displayList(){

    if(toDoList.length === 0){
        console.log("Your To-Do list is empty");
    }   else {
        console.log(`You have ${toDoList.length} to do item(s) `)

}
    for(let i = 0; i < toDoList.length; i++){
        let status = "";

          if(statusArray[i] === false){
            status = "[incomplete]";
        } else if(statusArray[i] === true){
            status = "[complete]";
        }


        console.log(`${i+1}. ${status} ${toDoList[i]}`)
        

        
        }

}


/*
1. Figure out the UI
console.log()
    -Welcome message
    -Different options (add task, complete task, exit program)
    -Error messages for invalid options
Prompts
    - Numbers to decide which options using if statements
    1 Adding task/create item - prompt user which item to complete
    2 Mark task as complete - prompt user for which task is complete
    3 Exit

While loop    
    -Program has no known ending so we want to be able to prompt them indefinitely until they decide to exit

Display list to user
    -Completion of status (complete or incomplete)
    -The name of the item
    -The number associated with the item
    -Loop to display each item in the To-Do-List

2. Add To-Do-Items (Choice === 1)
-Prompt for the to-do-item
-Save the item by storing it in an array ---with .push()
-an array to keep track of To-Do items


2.5 - How do we set items to be incomplete
//Any item in the list is [incomplete] until we mark it [complete]

- Whenever we add an item to the ToDo List it's [incomplete] by default

let completeStatus = [incomplete]
array of booleans
[true, false, true]                   Status Array
['Walk Dog', 'Get Food', 'Run Mile']  toDoList Array
  0              1           2        Shared index

let status = [];
by default, when we add a new item, we want to add a false boolean to our status array.









3. Complete To-Do items (Choice === 2)
- Display current items in ToDo list with their status

- Pick which ToDo item to mark as complete - swap its status from false to true

- Make sure we display the updated list right after








*/