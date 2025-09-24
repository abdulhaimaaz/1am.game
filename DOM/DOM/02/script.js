// 5 columnns 1-10
// 1-100
// 10 rows
let table = document.getElementById('my-table');

let value = 1;

for(let rows = 1; rows<=10;rows++){
    let tr = document.createElement('tr');
    table.append(tr);

    for(let cols = 1; cols <=10;cols++){
        let td = document.createElement('td');
        tr.append(td);
        td.innerText = value;
        value++;
    }
    
}

let h1 = document.getElementById('title')
h1.style.color = 'blue';
table.style.border = '1px solid grey';


/**
 * 
 * Read about Event Listeners
 */

