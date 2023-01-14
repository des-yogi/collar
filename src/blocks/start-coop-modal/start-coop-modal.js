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
    //var modalBodyInput = exampleModal.querySelector('.modal-body input');

    modalTitle.textContent = recipient;
    //modalBodyInput.value = recipient
  })
}());
