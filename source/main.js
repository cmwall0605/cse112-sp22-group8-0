/**
 * This file defines functions and implements the behaviors for pop-up modals
 * and other Modals for the main page.
 */

// Get the modal
const modal = document.getElementById('add-task-modal');
const playModal = document.getElementById('play-modal');
// eslint-disable-next-line no-unused-vars
const taskContent = document.getElementById('task-name');

// Get the button that opens the modal
const btns = document.getElementsByClassName('add-task-btn');
const cancelBtns = document.getElementsByClassName('cancel-btn');

// Get the <span> element that closes the modal
const spanClose = document.getElementsByClassName('close');

// add event listeners
for (let i = 0; i < spanClose.length; ++i) {
  spanClose[i].addEventListener('click', closeModal);
  cancelBtns[i].addEventListener('click', closeModal);
}
// Listener for add task modal
for (let i = 0; i < btns.length; ++i) {
  btns[i].addEventListener('click', () => {
    modal.style.display = 'block';
  });
}

/**
 * Close the Modal with X button or cancel button
 */
function closeModal() {
  modal.style.display = 'none';
  playModal.style.display = 'none';
}

/**
 * Close the modal
 * @param {event} event: Javascript events
 */
window.onclick = function closeModal2(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};