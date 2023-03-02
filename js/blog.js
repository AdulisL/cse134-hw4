

var form = `<div>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" aria-describedby="titleHelp" 
        placeholder="Enter professor's name">
      </div>
      
      <div class="form-group mt-4">
        <label for="name">Course</label>
        <input type="text" class="form-control" id="course" aria-describedby="titleHelp" 
        placeholder="Enter the course">
      </div>
      
      <div class="form-group mt-4">
        <label for="year">Quarter In</label>
        <input type="text" class="form-control" id="quarter" placeholder="Enter the quarter & year">
      </div>
      
      <div class="form-group mt-5">
        <label for="rate">Rate</label>
        <select id="rate" name="Rating">
            <option selected></option>
            <option value="*">*</option>
            <option value="**">**</option>
            <option value="***">***</option>
            <option value="****">****</option>
            <option value="*****">*****</option>  
        </select>
      </div>
      
      <button type="submit" class="btn btn-primary mt-3" onclick="save()">Create</button>
      <button type="reset" class="btn btn btn-danger mt-3" onclick="cancelData()">Cancel</button>
  </div>`;

function table() {
    let table = `<table class="table">
  <thead>
    <tr>
      <th id="col-1">#</th>
      <th id="col-2">Professor</th>
      <th id="col-3">Course</th>
      <th id="col-4">Quarter In</th>
      <th id="col-5">Rated</th>
    </tr>
  </thead>
  <tbody>`;

    for (let i = 0; i < details.length; i++){
        table = table + `<tr>
      <td>${i + 1}</td>
      <td>${details[i].name}</td>
      <td>${details[i].course}</td>
      <td>${details[i].quarter}</td>
      <td>${details[i].rate}</td>
      <td><button type="button" class="btn btn-warning" onclick="edit(${i})">Edit</button></td>
      <td><button type="button" class="btn btn-danger" onclick="deleteData(${i})">Delete</button></td>
    </tr> `;
    }

    table = table+`</tbody></table>`;
    document.getElementById("table").innerHTML = table;
}

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
    }
}
function setData() { localStorage.setItem("details", JSON.stringify(details)); }

function cancelData(){ document.getElementById("form").innerHTML = form; }

function save() {
    let name = document.getElementById("name");
    let course = document.getElementById("course");
    let quarter = document.getElementById("quarter");
    let rate = document.getElementById("rate");

    if (name.value === "") {
        alert(" Name input is Empty");
        return
    }
    else if (course.value === ""){
        alert(" Course input is Empty");
        return
    }
    else if (quarter.value === ""){
        alert(" Quarter & Year input is Empty");
        return
    }
    else if (rate.value === ""){
        alert(" Rate input is Empty");
        return
    }
    let data = {
        name: name.value,
        course: course.value,
        quarter: quarter.value,
        rate: rate.value
    };
    details.push(data);
    setData();

    table();
    name.value = "";
    course.value = "";
    quarter.value = "";
    rate.value = "";
}
function deleteData(index) {
    details.splice(index, 1);
    setData();
    table();
}

function edit(index) {
    let editForm = `<div>
    
    <div class="form-group">
        <label for="title">Update Name</label>
        <input type="text" value="${details[index].name}" class="form-control" id="newName" 
        aria-describedby="titleHelp" placeholder="Update the name of the professor">
    </div>
    
    <div class="form-group mt-4">
        <label for="title">Update Department</label>
        <input type="text" value="${details[index].course}" class="form-control" id="newCourse" 
        aria-describedby="titleHelp" placeholder="Update the department">
    </div>
    <div class="form-group mt-4">
        <label for="title">Update Quarter</label>
        <input type="text" value="${details[index].quarter}" class="form-control" id="newQuarter" 
        aria-describedby="titleHelp" placeholder="Update the quarter & year">
    </div>
  
    <div class="form-group mt-5">
        <label for="rate">Rate</label>
        <select id="newRate" name="Rating">
            <option value="*">*</option>
            <option value="**">**</option>
            <option value="***">***</option>
            <option value="****">****</option>
            <option value="*****">*****</option>  
        </select>
    </div>
    
    <button type="submit" class="btn btn-primary mt-3" onclick="update(${index})">Update</button>
    <button type="reset" class="btn btn btn-danger mt-3" onclick="cancelData()">Cancel</button>
</div>`;
    document.getElementById("form").innerHTML = editForm;
}
function update(index) {
    let newName = document.getElementById('newName');
    let newCourse = document.getElementById('newCourse');
    let newQuarter = document.getElementById('newQuarter');
    let newRate = document.getElementById('newRate');

    details[index] = {
        name: newName.value,
        course: newCourse.value,
        quarter: newQuarter.value,
        rate: newRate.value
    };
    setData();
    table();
    document.getElementById("form").innerHTML = form;

}



