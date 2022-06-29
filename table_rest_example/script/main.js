function createTable() {
    const div_element = document.getElementById('table_head');
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    thead.innerHTML = '<tr><th>Vorname</th><th>Nachname</th><th>Position</th>';
    const tbody = document.createElement('tbody');
        tbody.id = "table_body"
    table.appendChild(thead);
    table.appendChild(tbody);
    div_element.appendChild(table);
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
		// call REST server:
		var server_address = 'http://127.0.0.1:5000'
    var persons_endpoint = "".concat(server_address,'/persons_endpoint');
		var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        alert(this.responseText);
      }
    };
    xhttp.open("GET", persons_endpoint, false); // false for synchronous request
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(null);
 		// wait for response
		json_response = xhttp.responseText;
		json_persons = JSON.parse(json_response);
    form = document.form1;
		for(var i = 0;i<json_persons.length;i++){
        let firstName = json_persons[i].firstName;
        let lastName  = json_persons[i].lastName;
        let position  = json_persons[i].profession;
        console.log(firstName);
        addToTable(firstName,lastName,position);
    }
}

// Registrierung des Eventlisteners
document.addEventListener('DOMContentLoaded', (event) => {
    createTable();
});
