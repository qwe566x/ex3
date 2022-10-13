class Insurance {
    constructor(insurance_number, first_name, last_name, vehicle_number) {
      this.insurance_number = insurance_number;
      this.first_name = first_name;
      this.last_name = last_name;
      this.vehicle_number = vehicle_number;
    }
  
    static create({ insurance_number, first_name, last_name, vehicle_number }) {
        if (insurance_number === '') {
            return alert('Please enter insurance number');
        } else {
            const regex = new RegExp('^[0-9]+$', 'g');
            if (regex.test(insurance_number) === false) {
                return alert('Please enter valid insurance number')
            }
        }
        if (first_name === '') {
            return alert('Please enter first name');
        } else {
            const regex = new RegExp('^[a-zA-Z\s]+$', 'g');
            if (regex.test(first_name) === false) {
                return alert('Please enter valid first name')
            }
        }
        if (last_name === '') {
            return alert('Please enter insurance number');
        } else {
            const regex = new RegExp('^[a-zA-Z\s]+$', 'g');
            if (regex.test(last_name) === false) {
                return alert('Please enter valid last name')
            }
        }
        if (vehicle_number === '') {
            return alert('Please enter vehicle number');
        } else {
            const regex = new RegExp('^[a-zA-Z0-9\s]+$', 'g');
            if (regex.test(vehicle_number) === false) {
                return alert('Please enter valid vehicle number')
            }
        }

      new Insurance(insurance_number, first_name, last_name, vehicle_number);

      const dataPreview = "Insurance Record Created! \nInsurance Number: " + insurance_number
                            + "\nFirst Name: " + first_name
                            + "\nLast Name: " + last_name
                            + "\nVehicle Number:" + vehicle_number;

      alert(dataPreview);
    }
  }
  