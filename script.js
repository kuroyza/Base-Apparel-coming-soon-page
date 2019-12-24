(function () {
   const form = document.querySelector('form');
   const inputFieldContainer = document.querySelector('.hero__details--form-input-container');

   function validateEmail(emailField) {
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

      return reg.test(emailField);
   }

   form.addEventListener('submit', e => {
      
      let goodToGo = true;
      // Check Email Validation

      const currentField = inputFieldContainer.querySelector('input');
      const currentErrorLabel = inputFieldContainer.querySelector('label');
      const currentErrorIcon = inputFieldContainer.querySelector('.hero__details--form-error-icon');

      if (currentField.value.trim() == '') {

         goodToGo = false;
         currentField.classList.add('worning');
         currentErrorIcon.style.display = "inline-block";
         currentErrorLabel.textContent = `The email cannot be empty`;
         currentErrorLabel.style.display = "inline-block";
      } else if (!validateEmail(currentField.value)) {

         goodToGo = false;
         currentField.classList.add('worning');
         currentErrorLabel.textContent = 'Looks like this is not an email';
         currentErrorIcon.style.display = "inline-block";
         currentErrorLabel.style.display = "inline-block";
      } else {
         currentField.classList.remove('worning');
         currentErrorLabel.textContent = ``;
         currentErrorIcon.style.display = "none";
         currentErrorLabel.style.display = "none";
      }

      if (!goodToGo) {
         e.preventDefault();
      }
   });
})();