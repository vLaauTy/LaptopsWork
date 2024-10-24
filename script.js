function showFunction(type) {
    const gamingFunctions = document.getElementById('gaming-functions');
    const editingFunctions = document.getElementById('editing-functions');

    if (type === 'gaming') {
        gamingFunctions.style.display = gamingFunctions.style.display === 'none' ? 'block' : 'none';
    } else if (type === 'editing') {
        editingFunctions.style.display = editingFunctions.style.display === 'none' ? 'block' : 'none';
    }
}

