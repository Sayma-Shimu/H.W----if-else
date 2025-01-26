/*
let month = prompt();

if(month==='January'){
    document.write(1);
}

else if(month==='February'){
    document.write(2);
}

else if(month==='March'){
    document.write(3);
}

else if(month==='April'){
    document.write(4);
}

else if(month==='May'){
    document.write(5);
}

else if(month==='June'){
    document.write(6);
}

else if(month==='July'){
    document.write(7);
}

else if(month==='August'){
    document.write(8);
}

else if(month==='September'){
    document.write(9);
}

else if(month==='October'){
    document.write(10);
}

else if(month==='November'){
    document.write(11);
}

else if(month==='December'){
    document.write(12);
}  
  
else{
    document.write('Invalid')

}   */



    /*---------------switch--------------*/

    let days = +prompt()

    switch (days){

        case 1:
            document.write('Sunday');
            break;

        case 2:
            document.write('Monday');
            break;

        case 3:
            document.write('Tuesday');
            break;

        case 4:
            document.write('Wednesday');
            break;

        case 5:
            document.write('Thursday');
            break;

        case 6:
            document.write('Friday');
            break;

        case 7:
            document.write('Saturday');
            break;

            default :
            document.write('Invalid Number');

    } 



