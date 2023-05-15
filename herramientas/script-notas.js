function saveNote() {
    var noteInput = document.getElementById('note-input');
    var note = noteInput.value.trim();

    if (note !== '') {
        var noteList = document.getElementById('note-list');
        var listItem = document.createElement('li');
        listItem.textContent = note;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', function () {
            deleteNoteItem(listItem);
        });

        listItem.appendChild(deleteButton);
        noteList.appendChild(listItem);
        noteInput.value = '';
    }
}

function deleteNoteItem(item) {
    var noteList = document.getElementById('note-list');
    noteList.removeChild(item);
}
