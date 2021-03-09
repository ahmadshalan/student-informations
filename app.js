'use strcit';


let newStudent=[];

let total=0;

let id= 1;




function Student(id,email,mobile,age,tuition){
    this.id=id;
    this.email=email;
    this.mobile=mobile;
    this.age= getRandomAge();
    this.tuition=tuition;

    Student.prototype.newStudent.push(this);

};

function getRandomAge(){

    return Math.floor(Math.random() * (24 - 18 + 1) + 18);
}
;


Student.prototype.getAge =function (){

    this.age=getRandomAge();
}
;


if (localStorage.getItem('object')){

let array= JSON.parse(localStorage.getItem('object'));

let output;
for (let i =0 ; i< array.length ; i++);

output= (array[i].email, array[i].mobile, array[i].tuition)

output.render();

}



function makeTable (){

        let table = document.getElementById('students-table');

        let headerRaw= document.createElement('tr');

        table.appendChild(headerRaw);


        let idData=document.createElement('th');
        headerRaw.appendChild(idData);
        idData.textContent='id';

        let nameData=document.createElement('th');
        headerRaw.appendChild(nameData);
        nameData.textContent='name';

        let emailData=document.createElement('th');
        headerRaw.appendChild(emailData);
        emailData.textContent='email';

        let mobileData=document.createElement('th');
        headerRaw.appendChild(mobileData);
        mobileData.textContent='mobile';

        let tuitionData=document.createElement('th');
        headerRaw.appendChild(tuitionData);
        tuitionData.textContent='tuition';


}


Student.prototype.render = function(){
    
    let studentRaw=document.createElement('tr');
    table.appendChild(studentRaw);
    
    let email2 = document.createElement('td');
    studentRaw.appendChild(email2)
    email2.textContent=this.email;

    
    let mobile2 = document.createElement('td');
    studentRaw.appendChild(mobile2)
    email2.textContent=this.mobile;

    let age2= document.createElement('td')
    studentRaw.appendChild(age2);
    age2.textContent=this.age;
    
    let tuition2 = document.createElement('td');
    studentRaw.appendChild(tuition2)
    email2.textContent=this.tuition;
    
}

makeTable();



let studentsForm=document.getElementById('form');
studentsForm.addEventListener('submit', addStudent);

function addStudent(event){


    event.preventDefault();

    let email1=event.target.email.value;
    let mobile1= event.target.mobile.value;
    let tuition1 = event.target.tuition.value;
    age.push

    let newStudent1=new Student(id,email1,mobile1,age1,tuition1);

    localStorage.setItem('object',JSON.stringify(Student.prototype.newStudent));

    newStudent1.render();
    newStudent1.getAge();
}










