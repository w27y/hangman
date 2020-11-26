function createTable() {
    let table = document.createElement('table');
    for (let i = 1; i < 4; i++){
        let tr = document.createElement('tr');   
    
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
    
        let text1 = document.createTextNode('Text1');
        let text2 = document.createTextNode('Text2');
    
        td1.appendChild(text1);
        td2.appendChild(text2);
        tr.appendChild(td1);
        tr.appendChild(td2);
    
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}

