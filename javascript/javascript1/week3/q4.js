const notes = [];

    function saveNote(content, id) {
        let obj={
            'content':content,
            'id':id,
            
        }
        notes.push(arr);
    }
    function getNote(id) {
        for( let i = 0; i < notes.length; i++){
            if ( notes[i]['id'] === id) {
                return notes[i]['content'];
            }
        }
    }
    function logOutNotesFormatted() {
        for( let i = 0; i < notes.length; i++){
            let str='The note with id: '+notes[i]['id']+', has the following note text: '+notes[i]['content'];
            console.log(str);
        }
    } 


    saveNote("Pick up groceries", 1);
    saveNote("Do laundry", 2);
    const firstNote = getNote(1);
    logOutNotesFormatted();

    //console.log(firstNote); // {content: 'Pick up groceries', id: 1}
    console.log(notes);