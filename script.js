//your JS code here. If required.
function handleSubmit(event) {
      event.preventDefault(); // Prevent form submission

      const firstName = document.querySelector('input[name="First Name"]').value;
      const lastName = document.querySelector('input[name="Last Name"]').value;
      const phoneNumber = document.querySelector('input[name="Phone Number"]').value;
      const emailID = document.querySelector('input[name="Email ID"]').value;

      const message = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${emailID}`;
      alert(message);
    }