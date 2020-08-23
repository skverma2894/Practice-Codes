let student = {
    name: 'Sachin', 
    class:'VI', 
    section: 'D', 
    rollno: '34',
    displayInfo: function() {
        return (this.name + ' ' + this.class + '/' +this.section + ' ' +this.rollno);      

    }

};

console.log(student.name);
console.log('incrementing the rollno '+ ++student.rollno);
console.log('changing the section '+ (student.section='C'));
console.log('Displaying the list using function:  '+ student.displayInfo());


