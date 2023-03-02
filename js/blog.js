

var form = `<div>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="titleHelp" placeholder="Enter the movie title">
      </div>
      
      <div class="form-group mt-3">
        <label for="year">Year Released</label>
        <input type="number" class="form-control" id="year" placeholder="Enter the year released">
      </div>
      
      <div class="form-group mt-3">
        <label for="rate">Rate</label>
        <select id="rate" name="Rating">
            <option value="R">R</option>
            <option value="PG-13">PG-13</option>
            <option value="NC-17">NC-17</option>
            <option value="G" selected>G</option>
        </select>
<!--        <input type="submit" class="form-control" id="list" placeholder="Rate the movie">-->
      </div>
      
      <button type="submit" class="btn btn-primary mt-3" onclick="save()">Save</button>
  </div>`;

function table() {
    let table = `<table class="table">
  <thead>
    <tr>
      <th clsaa="col-1">NO</th>
      <th clsaa="col-3">Title</th>
      <th clsaa="col-4">Year</th>
      <th clsaa="col-3">Rate</th>
      <th clsaa="col-2">Edit</th>
      <th clsaa="col-2">Delete</th>
    </tr>
  </thead>
  <tbody>`;
    for (let i = 0; i < details.length; i++){
        table = table + `<tr>
      <td>${i + 1}</td>
      <td>${details[i].title}</td>
      <td>${details[i].year}</td>
      <td>${details[i].rate}</td>
      <td><button type="button" class="btn btn-warning" onclick="edit(${i})">Edit</button></td>
      <td><button type="button" class="btn btn-danger" onclick="deleteData(${i})">Delete</button></td>
    </tr> `;
    };
    table = table+`</tbody>
    </table>`;
    document.getElementById("table").innerHTML = table;
};

document.getElementById("form").innerHTML = form;
details = [];
getData();
table();
function getData(){
    let Data = localStorage.getItem("details");
    if (Data) {
        details = JSON.parse(Data);
    } else {
        setData();
    };
};
function setData() {
    localStorage.setItem("details", JSON.stringify(details));
};
function save() {
    let title = document.getElementById("title");
    let year = document.getElementById("year");
    let rate = document.getElementById("rate");

    if (name.value == 0) {
        alert("Input is Empty");
        return
    }
    let data = {
        title: title.value,
        year: year.value,
        rate: rate.value
    };
    details.push(data);
    setData();

    table();
    title.value = "";
    year.value = "";
    rate.value = "";
};
function deleteData(index) {
    details.splice(index, 1);
    setData();
    table();
};

function edit(index) {
    let editForm = `<div>
    <div class="form-group">
    <label for="title">Update Title</label>
    <input type="text" value="${details[index].title}" class="form-control" id="newTitle" 
    aria-describedby="titleHelp" placeholder="Update the title">
    </div>
  
    <div class="form-group mt-3">
    <label for="newYear">Update Year</label>
    <input type="number" value="${details[index].year}" class="form-control" id="newYear"
    placeholder="Update the release year">
    </div>
    
    <div class="form-group mt-3">
        <label for="newRate">Update Rate</label>
        <select id="newRate" name="Rating">
            <option value="R">R</option>
            <option value="PG-13">PG-13</option>
            <option value="NC-17">NC-17</option>
            <option value="G" selected>G</option>
        </select>
      </div>
    
    <button type="submit" class="btn btn-primary mt-3" onclick="update(${index})">Update</button>
</div>`;
    document.getElementById("form").innerHTML = editForm;
};
function update(index) {
    let newTitle = document.getElementById('newTitle');
    let newYear = document.getElementById('newYear');
    let newRate = document.getElementById('newRate');

    details[index] = {
        title: newTitle.value,
        year: newYear.value,
        rate: newRate.value
    };
    setData();
    table();
    document.getElementById("form").innerHTML = form;

}



