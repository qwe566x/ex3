init.view.createInsurance = {
    home: function () {
      const saveBtn = document.forms['insurance'].commit;
  
      saveBtn.addEventListener('click', init.view.createInsurance.handleSaveButtonClick);
    },
    handleSaveButtonClick: function () {
      const formElement = document.forms['insurance'];
      const newInsurance = {
        insurance_number: formElement.insurance_number.value,
        first_name: formElement.first_name.value,
        last_name: formElement.last_name.value,
        vehicle_number: formElement.vehicle_number.value,
      };
  
     Insurance.create(newInsurance);
      formElement.reset();
    },
  };
  