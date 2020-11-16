let groceryList = [];
function getGroceryList(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200) {
            var table = document.getElementById("groceryTable");
            groceryList = JSON.parse(this.responseText);
            console.log(groceryList);
            let rowIndex = 1;
            for(const grocery of groceryList) {
                const row = table.insertRow(rowIndex);
                const serialNumber = row.insertCell(0);
                serialNumber.innerHTML = grocery.serialNumber;

                const name = row.insertCell(1);
                name.innerHTML = grocery.name;

                const quantity = row.insertCell(2);
                quantity.innerHTML = grocery.quantity;

                const unit = row.insertCell(3);
                unit.innerHTML = grocery.unit;

                const department = row.insertCell(4);
                department.innerHTML = grocery.department;

                const notes = row.insertCell(5);
                notes.innerHTML = grocery.notes;

                rowIndex++;
            }
        }
    }
    xhttp.open("GET","list.json",true);
    xhttp.send();
}

