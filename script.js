function htmlOption() {
    var man = document.querySelector("#man-list");

  students.forEach((stu) => {
    let option = document.createElement("option");
    option.value = stu.name;
    option.textContent = `${stu.name}`;
    man.appendChild(option);})

}

function allDo(){
    var manOne = document.querySelector("#man-list").value.trim();
    var showResult = document.querySelector("#result");

    var studentList = students.find((s) => s.name === manOne);
    if(studentList) {
        showResult.innerHTML = `
        <h2> PannaCollege List</h2>
        <p>Name : ${studentList.name}</p>
         <p>Job: ${studentList.job}</p>
         <p>Address : ${studentList.address}</p>
        <p>Email : ${studentList.email}</p>`
    }else {
        showResult.innerHTML = "Not found";
    }


}

document.addEventListener("DOMContentLoaded", () => {
    htmlOption();
   
    document.querySelector("#checkStatus").addEventListener("click", allDo);
  });

