let modalBtn = document.getElementById("delete-btn");
let modal = document.getElementById("popup-delete");

document.getElementById('delete-btn').onclick = function(){
    document.getElementById('popup-delete').style.display='block';
}

document.getElementById('confirm-btn').onclick = function(){
    deleteform();
    modal.style.display = "none";
}

document.getElementById('cancel-btn').onclick = function(){
    modal.style.display = "none";
}

function deleteform(){
    var item = document.getElementById('todos-item');
    item.parentNode.removeChild(item);
}

