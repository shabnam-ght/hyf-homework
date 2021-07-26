
    const class07Students = [];
    function addStudentToClass(studentName) {
        let str='';
        let number=getNumberOfStudents();
        if(studentName===''){
            str='studentName can not be empty';
        }else{
            let flag=0;
            for(let i=0;i<number;i++){
                if(class07Students[i]===studentName){
                    flag=1;
                }
            }
            if(flag===1){
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
    console.log(trim(addStudentToClass('student1')));
    console.log(trim(addStudentToClass('student2')));
    console.logtrim((addStudentToClass('student3')));
    console.log(trim(addStudentToClass('student2')));
    console.log(trim(addStudentToClass('Queen in Denmark')));
    console.log(trim(addStudentToClass('student4')));
    console.log(trim(addStudentToClass('student5')));
    console.log(trim(addStudentToClass('student6')));
    console.log(trim(addStudentToClass('student7')));
    console.log(trim(addStudentToClass('Queen in Denmark')));
    console.log(trim(addStudentToClass('student9')));
    console.log(trim('there is '+getNumberOfStudents()+ ' students in the class.'));
    console.log(trim(class07Students));
