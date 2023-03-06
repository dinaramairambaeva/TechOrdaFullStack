let openBtn = document.getElementById('open-btn');
let closeBtn = document.getElementById('close-btn');
let modal = document.getElementById('modal-window')

openBtn.onclick = function() {
    modal.style.display = 'flex';   
}

closeBtn.onclick = function() {
    modal.style.display = 'none'; 
}