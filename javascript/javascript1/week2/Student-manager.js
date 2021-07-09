
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
    console.log(addStudentToClass('student1'));
    console.log(addStudentToClass('student2'));
    console.log(addStudentToClass('student3'));
    console.log(addStudentToClass('student2'));
    console.log(addStudentToClass('Queen in Denmark'));
    console.log(addStudentToClass('student4'));
    console.log(addStudentToClass('student5'));
    console.log(addStudentToClass('student6'));
    console.log(addStudentToClass('student7'));
    console.log(addStudentToClass('Queen in Denmark'));
    console.log(addStudentToClass('student9'));
    console.log('there is '+getNumberOfStudents()+ ' students in the class.');
    console.log(class07Students);
