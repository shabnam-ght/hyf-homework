
    const class07Students = [];
    function addStudentToClass(studentName) {
        let str='';
        let number=getNumberOfStudents();
        if(studentName.trim()===''){
            str='studentName can not be empty';
        }else{
            for(let i=0;i<number;i++){
                if(class07Students[i].trim()===studentName){
                    str=studentName + " is added";
                }
            }
            if(class07Students.includes(studentName)){
                str='same person cannot be added';
            }else{
                if(studentName.trim()==='Queen in Denmark'){
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
    console.log(addStudentToClass('shabnam'));
    console.log(addStudentToClass('ali'));
    console.log(addStudentToClass('marie'));
    console.log(addStudentToClass('ali'));
    console.log(addStudentToClass('Queen in Denmark'));
    console.log(addStudentToClass('jeff'));
    console.log(addStudentToClass('jens'));
    console.log(addStudentToClass('clarck'));
    console.log(addStudentToClass('sara'));
    console.log(addStudentToClass('Queen in Denmark'));
    console.log(addStudentToClass('mads'));
    console.log('there is '+getNumberOfStudents()+ ' students in the class.');
    console.log(class07Students);
