// Fazer um CRUD de Item

const BOX = {}; let count = 0

function Create() {
    const textField = document.getElementById('field')

    if(textField.value.length <= 0){
        alert('Não tem nada')
        return;
    }else{
        BOX[count] = textField.value
        count++
        console.log(BOX)
        Read(BOX)
        textField.value = ''
    }
}

function Read(DICT){
    const item = document.createElement('div')
    item.className = 'mini-card'
    item.id = `#${count-1}`

    item.innerHTML = `
        <input type="text" value="${DICT[count-1]}">
        <div>
            <button onclick="Update(${count-1})">U</button>
            <button onclick="Delete(${count-1})">D</button>
        </div>
    `
    document.getElementById('group').appendChild(item)
}

function Delete(i){
    delete BOX[i];
    const element = document.getElementById(`#${i}`);
    
    element.remove();
    console.log(BOX);
}

function Update(i){
    const card = document.getElementById(`#${i}`);

    BOX[i] = card.querySelector('input').value;
    console.log(BOX)
}