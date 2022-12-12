var taskwrapper = $('#taskbox');
var startOfBusiness = moment(09, 'HH');

while (startOfBusiness.hour() < 18) {
  console.log(startOfBusiness.format('ha'));
  taskwrapper.append(
    `<div class='row'>
    <div class='col-sm'>
    ${startOfBusiness.format('ha')}
    </div>
    <div class='col-sm'>
      One of three columns
    </div>
    <div class='col-sm'>
      One of three columns
    </div>
    </div>`
    );
  startOfBusiness.add(1, 'hours');
}