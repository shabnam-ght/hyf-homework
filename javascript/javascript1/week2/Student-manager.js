
    const class07Students = [];
    function addStudentToClass(studentName) {
        let str='';
        let number=getNumberOfStudents();
        if(studentName===''){
            str='studentName can not be empty';
        }else{
            for(let i=0;i<number;i++){
                if(class07Students[i]===studentName){
                    str=studentName + " is added";
                }
            }
            if(class07Students.includes(studentName)){
                str='same person cannot be added';
            }else{
                if(studentName==='Queen in Denmark'){
                    class07Students.push('Queen in Denmark');
                    str='Queen in Denmark added succesfully';
                }else{
                    if(number<6){
                        class07Students.push(studentName);
                        str=studentName + ' added succesfully';
                    }else{
                        str='There can be only 6 students in a class';
                    }
                }
            }
        }
        return str;
    }

    function getNumberOfStudents() {
        return class07Students.length;
    }
    console.log(trim(addStudentToClass('shabnam')));
    console.log(trim(addStudentToClass('ali')));
    console.logtrim((addStudentToClass('marie')));
    console.log(trim(addStudentToClass('ali')));
    console.log(trim(addStudentToClass('Queen in Denmark')));
    console.log(trim(addStudentToClass('jeff')));
    console.log(trim(addStudentToClass('jens')));
    console.log(trim(addStudentToClass('clarck')));
    console.log(trim(addStudentToClass('sara')));
    console.log(trim(addStudentToClass('Queen in Denmark')));
    console.log(trim(addStudentToClass('mads')));
    console.log(trim('there is '+getNumberOfStudents()+ ' students in the class.'));
    console.log(trim(class07Students));
