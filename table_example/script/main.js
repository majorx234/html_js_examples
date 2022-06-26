const persons = [
    {
        firstName: 'Max',
        lastName: 'Mustermann',
        position: 'CTO'
    },
    {
        firstName: 'Moritz',
        lastName: 'Mustermann',
        position: 'CEO'
    },
    {
        firstName: 'Peter',
        lastName: 'Mustermann',
        position: 'Software Developer'
    }
];  

function createTable(persoons) {
    const div_element = document.getElementById('table_head');
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    thead.innerHTML = '<tr><th>Vorname</th><th>Nachname</th><th>Position</th>';
    const tbody = document.createElement('tbody');
        tbody.id = "table_body"
    table.appendChild(thead);
    table.appendChild(tbody);
    div_element.appendChild(table);

    for(let i=0; i<persons.length;i++) {
        const person = persons[i];
        addToTable( person.firstName,
                    person.lastName,
                    person.position);
    }
}

function addToTable(firstName,lastName,position) 
{
    const table_body = document.getElementById('table_body');
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>
        ${firstName}
      </td>
      <td>
        ${lastName}
      </td>
      <td>
        ${position}
      </td>`
    table_body.appendChild(tr);
}

function addEntry() {
    form = document.form1;
    let firstName = form.firstName.value;
    let lastName  = form.lastName.value;
    let position  = form.position.value;
    console.log(firstName);
    addToTable(firstName,lastName,position);
}

// Registrierung des Eventlisteners
document.addEventListener('DOMContentLoaded', (event) => {
    createTable(persons);
});
