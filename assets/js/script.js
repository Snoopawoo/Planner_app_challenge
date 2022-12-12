var taskwrapper = $('#taskbox');
var startOfBusiness = moment(09, 'HH');


//create and fill HTML structure
while (startOfBusiness.hour() < 18) {
  console.log(startOfBusiness.format('ha'));
  taskwrapper.append(
    `<div class='row'>
        <div class='col-1'</div>
          <p class='hour'>
            ${startOfBusiness.format('ha')}
          </p>
        </div>
        <div class='col-10'>
          <textarea id='#text'></textarea>
        </div>
        <div class='col-1'>
          <button class='saveBtn'>Save</button>
        </div>
    </div>`
    );
  startOfBusiness.add(1, 'hours');
}

//change line detailes based on time

//set variables to store
var tasks= [];
var tasksToLoad= [];
var taskInput;
var saveBtn = document.querySelector('.saveBtn');

//save when save button is pressed and update local storage
function saveTasks(){
for(i = 0; i <= 8; i++){
  tasksToLoad = JSON.parse(tasksToLoad.getItem('savedTasks'));
  taskInput = $('#text').value;
  tasks[i] = taskInput;
} 
Array.prototype.push.apply(tasks,tasksToLoad);
localStorage.setItem('savedTasks', JSON.stringify(tasks));
console.log(tasks);
};

//event listener for button press
saveBtn.addEventListener('click',saveTasks);