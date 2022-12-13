//declaring variables
var taskwrapper = $('#taskbox');
var currentDay = $('#currentDay');
var startOfBusiness = moment(09, 'HH');
var currentTime = moment().format('HH');
var currentDate = moment().format('DD/MMM/YYYY');
console.log(currentTime);
var tasksToLoad = [];
tasksToLoad = JSON.parse(localStorage.getItem('savedTasks'));
var popup = document.querySelector('#popup');

if(tasksToLoad == null){
  tasksToLoad = [];
  for(fill = 0; fill < 9; fill ++){
  tasksToLoad[fill] = 'No Task';
  };
};
//display current day
currentDay.append(
  `<div class='row current'>
      <p>${currentDate}</p>
  </div>`
  );

//create and fill HTML structure
while (startOfBusiness.hour() < 18) {
  taskwrapper.append(
    `<div class='row time-block'>
        <div class='col-1 row'</div>
          <p class='hour '>
            ${startOfBusiness.format('ha')}
          </p>
        </div>
        <div class='col-10 row' >
          <textarea id = 'Line${startOfBusiness.format('H')}' cols="120" data-id = '${startOfBusiness.format('H')}' name="text">${tasksToLoad[(startOfBusiness.format('H')) - 9]}</textarea>
        </div>
        <div class='col-1 row'>
          <button class='saveBtn'>   <i class="fa-regular fa-floppy-disk">    </i></button>
        </div>
    </div>`
    );
  startOfBusiness.add(1, 'hours');
}

//change line detailes based on time
for(hourCount = 9; hourCount < 18; hourCount ++) {
  var timeA = currentTime;
  if( timeA > hourCount){
    console.log(timeA);
    var line = document.querySelector(`#Line${hourCount}`);
    line.classList.add('past');
  }

  else if( timeA < hourCount)
      {console.log(timeA);
      var line = document.querySelector(`#Line${hourCount}`);
      line.classList.add('future');}

  else {console.log(timeA);
    var line = document.querySelector(`#Line${hourCount}`);
    line.classList.add('present');
  }

}

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

//timeout to show save progress
popup.classList.remove('hide');
var reset = setInterval(function (){
  clearTimeout(reset);
  popup.classList.add('hide');
}, 600);
};

//event listener for button press on all buttons
var saveBtn = document.querySelectorAll('button');

for (i of saveBtn) {
  i.addEventListener('click',saveTasks);
}