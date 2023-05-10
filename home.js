var invoices = [{
    "id": 1,
    "chemicalName": "Chem 1",
    "vendor": "Vendor a",
    "density": 1.4,
    "viscosity": 10,
    "packaging": "Capsule",
    "packSize": 250,
    "unit": "ml",
    "quantity": 50
}, {
    "id": 2,
    "chemicalName": "Chem 2",
    "vendor": "Vendor b",
    "density": 1.5,
    "viscosity": 9,
    "packaging": "Can",
    "packSize": 300,
    "unit": "g",
    "quantity": 100
},
{
    "id": 3,
    "chemicalName": "Chem 3",
    "vendor": "Vendor c",
    "density": 1.5,
    "viscosity": 15,
    "packaging": "Packet",
    "packSize": 100,
    "unit": "l",
    "quantity": 10
},
{
    "id": 4,
    "chemicalName": "Chem 4",
    "vendor": "Vendor d",
    "density": 1.5,
    "viscosity": 16,
    "packaging": "Can",
    "packSize": 600,
    "unit": "ml",
    "quantity": 200
},
{
    "id": 5,
    "chemicalName": "Chem 5",
    "vendor": "Vendor e",
    "density": 1.5,
    "viscosity": 10,
    "packaging": "Bottle",
    "packSize": 200,
    "unit": "mg",
    "quantity": 60
},
{
    "id": 6,
    "chemicalName": "Chem 6",
    "vendor": "Vendor f",
    "density": 1.5,
    "viscosity": 12,
    "packaging": "Packet",
    "packSize": 100,
    "unit": "ml",
    "quantity": 70
},
{
    "id": 7,
    "chemicalName": "Chem 7",
    "vendor": "Vendor P",
    "density": 1.5,
    "viscosity": 7,
    "packaging": "Can",
    "packSize": 300,
    "unit": "l",
    "quantity": 30
},
{
    "id": 8,
    "chemicalName": "Chem 8",
    "vendor": "Vendor Q",
    "density": 1.5,
    "viscosity": 5,
    "packaging": "Packet",
    "packSize": 200,
    "unit": "ml",
    "quantity": 20
},
{
    "id": 9,
    "chemicalName": "Chem 9",
    "vendor": "Vendor R",
    "density": 1.5,
    "viscosity": 19,
    "packaging": "Bottle",
    "packSize": 100,
    "unit": "ml",
    "quantity": 80
},
{
    "id": 10,
    "chemicalName": "Chem 10",
    "vendor": "Vendor S",
    "density": 1.5,
    "viscosity": 18,
    "packaging": "Can",
    "packSize": 600,
    "unit": "mg",
    "quantity": 90
},
{
    "id": 11,
    "chemicalName": "Chem 11",
    "vendor": "Vendor T",
    "density": 1.5,
    "viscosity": 25,
    "packaging": "Packet",
    "packSize": 200,
    "unit": "g",
    "quantity": 120
},
{
    "id": 12,
    "chemicalName": "Chem 12",
    "vendor": "Vendor U",
    "density": 1.5,
    "viscosity": 14,
    "packaging": "Bottle",
    "packSize": 700,
    "unit": "mg",
    "quantity": 110
},
{
    "id": 13,
    "chemicalName": "Chem 13",
    "vendor": "Vendor G",
    "density": 1.5,
    "viscosity": 11,
    "packaging": "Can",
    "packSize": 100,
    "unit": "l",
    "quantity": 50
},
{
    "id": 14,
    "chemicalName": "Chem 14",
    "vendor": "Vendor D",
    "density": 1.5,
    "viscosity": 25,
    "packaging": "Can",
    "packSize": 400,
    "unit": "g",
    "quantity": 40
},
{
    "id": 15,
    "chemicalName": "Chem 15",
    "vendor": "Vendor K",
    "density": 1.6,
    "viscosity": 15,
    "packaging": "Packet",
    "packSize": 200,
    "unit": "mg",
    "quantity": 60
}
];
// Function to handle the "Add Row" button click event
var selectedRow = null;
function selectRow(row) {
    if (selectedRow !== null) {
        selectedRow.classList.remove("selected-row");
    }
    selectedRow = row;
    selectedRow.classList.add("selected-row");
}

function deleteRow() {
    if (selectedRow !== null) {
        selectedRow.remove();
        selectedRow = null;
    }
}
function addRow() {
    var table = document.getElementById("datatable");
    var newRow = table.insertRow(); // Insert a new row at the end of the table
    if (invoices.length === 0) {
        console.log("No more invoices to add.");
        return;
    }

    var newRow = table.insertRow();

    var invoice = invoices.shift();
    // Create cells for the new row
    var cell1 = newRow.insertCell();
    var cell2 = newRow.insertCell();
    var cell3 = newRow.insertCell();
    var cell4 = newRow.insertCell();
    var cell5 = newRow.insertCell();
    var cell6 = newRow.insertCell();
    var cell7 = newRow.insertCell();
    var cell8 = newRow.insertCell();
    var cell9 = newRow.insertCell();

    var id = invoice.id;
    var chemicalName = invoice.chemicalName;
    var vendor = invoice.vendor;
    var density = invoice.density;
    var viscosity = invoice.viscosity;
    var packaging = invoice.packaging;
    var packSize = invoice.packSize;
    var unit = invoice.unit;
    var quantity = invoice.quantity;

    // // Set the content of each cell
    cell1.textContent = id;
    cell2.textContent = chemicalName;
    cell3.textContent = vendor;
    cell4.textContent = density;
    cell5.textContent = viscosity;
    cell6.textContent = packaging;
    cell7.textContent = packSize;
    cell8.textContent = unit;
    cell9.textContent = quantity;



    console.log("New invoice added:");
    console.log(invoice);
}



function moveRowUp() {
    var table = document.getElementById("datatable");
    var selectedRow = table.getElementsByClassName("selected")[0];
    if (selectedRow && selectedRow.previousElementSibling) {
        table.insertBefore(selectedRow, selectedRow.previousElementSibling);
    }
}
function selectRow(row) {
    row.classList.toggle("selected");
}

function moveRowDown() {
    var table = document.getElementById("datatable");
    var selectedRow = table.getElementsByClassName("selected")[0];

    if (!selectedRow || !selectedRow.nextElementSibling) {
        console.log("No row selected or the selected row is already at the bottom.");
        return;
    }

    var nextRow = selectedRow.nextElementSibling;
    table.insertBefore(nextRow, selectedRow);
}
function deleteRow() {
    var table = document.getElementById("datatable");
    var rows = table.getElementsByTagName("tr");
    var selectedRow = table.getElementsByClassName("selected")[0];

    if (!selectedRow) {
        console.log("No row selected.");
        return;
    }

    table.removeChild(selectedRow);
}


function deleteRow(row) {
    table.deleteRow(row.rowIndex);
}

function deleteSelectedRows() {
    var table = document.getElementById("datatable");
    var selectedRows = table.getElementsByClassName("selected");

    // Iterate over the selected rows in reverse order and delete them
    for (var i = selectedRows.length - 1; i >= 0; i--) {
        table.deleteRow(selectedRows[i].rowIndex);
    }

    console.log("Selected rows deleted successfully.");
}
function addDeleteButtonEvent() {
    var deleteBtn = document.getElementById("deleteBtn");
    deleteBtn.onclick = deleteSelectedRows;
}
document.addEventListener("DOMContentLoaded", addDeleteButtonEvent);

function refreshData() {
    // Simulating data refresh by generating new random data
    var table = document.getElementById("datatable");

    // Clear existing rows
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    // Generate new random data
    var invoices = generateRandomData(15);

    // Create new rows and append to the table
    invoices.forEach(function (invoice) {
        var newRow = table.insertRow();
        newRow.innerHTML = `
        <td>${invoice.id}</td>
        <td>${invoice.chemicalName}</td>
        <td>${invoice.vendor}</td>
        <td>${invoice.density}</td>
        <td>${invoice.viscosity}</td>
        <td>${invoice.packaging}</td>
        <td>${invoice.packSize}</td>
        <td>${invoice.unit}</td>
        <td>${invoice.quantity}</td>
      `;
    });

    console.log("Data refreshed successfully.");
}


// Helper function to generate random data
function generateRandomData(count) {
    var data = [];
    for (var i = 1; i <= count; i++) {
        var invoice = {
            id: i,
            chemicalName: "Chemical " + i,
            vendor: "Vendor " + i,
            density: Math.random().toFixed(2),
            viscosity: Math.floor(Math.random() * 100),
            packaging: "Packaging " + i,
            packSize: Math.floor(Math.random() * 1000),
            unit: "Unit " + i,
            quantity: Math.floor(Math.random() * 100),
        };
        data.push(invoice);
    }
    return data;
}


function saveData() {
    var table = document.getElementById("datatable");
    var rows = table.getElementsByTagName("tr");
    var data = [];
    // Skip the first row (header)
    for (var i = 1; i < rows.length; i++) {
        var row = rows[i];
        var rowData = {};

        // Retrieve the data from each cell
        rowData.id = row.cells[0].textContent;
        rowData.chemicalName = row.cells[1].textContent;
        rowData.vendor = row.cells[2].textContent;
        rowData.density = parseFloat(row.cells[3].textContent);
        rowData.viscosity = parseInt(row.cells[4].textContent);
        rowData.packaging = row.cells[5].textContent;
        rowData.packSize = parseInt(row.cells[6].textContent);
        rowData.unit = row.cells[7].textContent;
        rowData.quantity = parseInt(row.cells[8].textContent);

        data.push(rowData);
    }
    // Perform the logic to save the data (e.g., send it to a server or update a database)
    console.log("Saving data:", data);
    var messageElement = document.getElementById("saveMessage");
    messageElement.textContent = "Data saved successfully!";
}
function addSaveButtonEvent() {
    var saveButton = document.getElementById("saveButton");
    saveButton.onclick = saveData;
}
document.addEventListener("DOMContentLoaded", addSaveButtonEvent);


// Add event listener to the "Add Row" button
var addRowBtn = document.getElementById("addRowBtn");
addRowBtn.addEventListener("click", addRow);

var moveRowUpBtn = document.getElementById("moveRowUpBtn");
moveRowUpBtn.addEventListener("click", moveRowUp);

var moveRowDownBtn = document.getElementById("moveRowDownBtn");
moveRowDownBtn.addEventListener("click", moveRowDown);




var refreshDataBtn = document.getElementById("refreshDataBtn");
refreshDataBtn.addEventListener("click", refreshData);

