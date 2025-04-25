let studentId = 1; // Start ID from 1

document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const dob = document.getElementById('dob').value;
  const address = document.getElementById('address').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;

  const output = `
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>DOB:</strong> ${dob}</p>
    <p><strong>Address:</strong> ${address}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>ID:</strong> WMA-32198${studentId}</p>
  `;

  document.getElementById('output').innerHTML = output;
  studentId++; // Increment the ID for next student
});