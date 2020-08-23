
//If else statement

//var age=prompt('Enter your age.'); //Prompt works only with var and not with let.

let age=34;

if (age>=60 || age < 23){
    status='No need to work. Enjoy your day.';
    console.log(status);
}
else{
    status='Work hard and make your dreams come true.';
    console.log(status);
}


//Switch case 

switch(9){
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    default: 
    console.log('Not a weekday');
}
