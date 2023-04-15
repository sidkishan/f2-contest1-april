/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((a) => {
    if (a.profession == "developer") console.log(a);
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  for (var a of arr) {
    if (a.profession == "developer") console.log(a);
  }
}

function addData() {
  //Write your code here, just console.log
  var emp1 = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(emp1);
  for (var ele of arr) console.log(ele);
}

function removeAdmin() {
  //Write your code here, just console.log
  for (var idx in arr) {
    if (arr[idx].profession == "admin") {
      arr.splice(idx, 1);
    }
  }
  for (var ele of arr) {
    console.log(ele);
  }
}

function concatenateArray() {
  //Write your code here, just console.log
  var newArr = [
    { id: 4, name: "Sid", age: "22", profession: "intern" },
    { id: 5, name: "rahul", age: "21", profession: "student" },
    { id: 6, name: "kishan", age: "30", profession: "manager" },
  ];
  var concatenatedArray = arr.concat(newArr);
  console.log(concatenatedArray);
}

//FUNCTION CALL TO TEST THE METHODS
//PrintDeveloperbyMap();
//PrintDeveloperbyForEach();
//addData();
//removeAdmin();
//concatenateArray();
