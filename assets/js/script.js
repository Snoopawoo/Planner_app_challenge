//declaring variables
var taskwrapper = $('#taskbox');
var startOfBusiness = moment(09, 'HH');
var tasksToLoad = [];
tasksToLoad = JSON.parse(localStorage.getItem('savedTasks'));

if(tasksToLoad == null){
  tasksToLoad = [];
  for(fill = 0; fill < 9; fill ++){
  tasksToLoad[fill] = 'No Task';
  };
};

//create and fill HTML structure
while (startOfBusiness.hour() < 18) {
  taskwrapper.append(
    `<div class='row'>
        <div class='col-1'</div>
          <p class='hour'>
            ${startOfBusiness.format('ha')}
          </p>
        </div>
        <div class='col-10'>
          <textarea id='text' data-id = '${startOfBusiness.format('H')}' name="text">${tasksToLoad[(startOfBusiness.format('H')) - 9]}</textarea>
        </div>
        <div class='col-1'>
          <button class='saveBtn'>Save</button>
        </div>
    </div>`
    );
  startOfBusiness.add(1, 'hours');
}

//change line detailes based on time
// while (startOfBusiness.hour() < 18) {
//   if{

//   }

//   startOfBusiness.add(1, 'hours');
// }

//declaring variables to store data for saveTask function
var tasks= [];
var tasksToLoad= [];
var taskInput;

//function to save when save button is pressed and update local storage
function saveTasks(){
  for(i = 0; i <= 8; i++){
    taskInput = document.querySelector(`*[data-id="${i + 9}"]`).value;
    tasks[i] = taskInput;
  };
localStorage.setItem('savedTasks', JSON.stringify(tasks));
};

//event listener for button press on all buttons
var saveBtn = document.querySelectorAll('button');

for (i of saveBtn) {
  i.addEventListener('click',saveTasks);
}