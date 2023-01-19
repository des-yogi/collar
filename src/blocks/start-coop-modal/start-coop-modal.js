(function(){
  const orderModal = document.getElementById('startCoopModal');
  orderModal.addEventListener('show.bs.modal', function (event) {
    // Button that triggered the modal
    const button = event.relatedTarget;
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever');
    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.
    const modalTitle = orderModal.querySelector('.modal-title');
    const categoryInput = orderModal.querySelector('input[name="category"]');

    modalTitle.textContent = recipient;
    if (categoryInput) {
      let inputValue = recipient.split(': ').pop().trim();
      categoryInput.value = inputValue;
    }
  })
}());
