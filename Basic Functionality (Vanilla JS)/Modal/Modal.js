let openModal = document.querySelector('.open-modal');
let closeModal = document.querySelector('.close-modal');
let modalOverlay = document.querySelector('.modal-overlay');

//button click evenrt listeners:
//open
openModal.addEventListener('click', () => {
 modalOverlay.classList.toggle('display-modal');
});
//close
closeModal.addEventListener('click', () => {
  modalOverlay.classList.toggle('display-modal');
});