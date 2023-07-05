interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two student objects
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York",
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "London",
  };
  
// Create an array of students
const studentsList: Student[] = [student1, student2];
  
// Render a table with student data
const table: HTMLElement = document.createElement("table");

// Create table headers
const headers = ["First Name", "Location"];
const headerRow: HTMLElement = document.createElement("tr");
headers.forEach((header) => {
  const th: HTMLElement = document.createElement("th");
  th.textContent = header;
  headerRow.appendChild(th);
});
table.appendChild(headerRow);

// Create table rows for each student
studentsList.forEach((student) => {
  const row: HTMLElement = document.createElement("tr");

  // Create table cells for student data
  const firstNameCell: HTMLElement = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  const locationCell: HTMLElement = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  table.appendChild(row);
});

// Append the table to the document body
document.body.appendChild(table);