function createAppTitle(title){
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = title;

    return appTitle;
}

function createProductsItem(){
    let form = document.createElement('form');
    let input = document.createElement('input');
    let buttonWrapper = document.createElement('div');
    let button = document.createElement('button');

    form.classList.add('input-group', 'mb-3');
    input.classList.add('form-control');
    input.placeholder = 'Enter your product';
    buttonWrapper.classList.add('input-group-append');
    button.classList.add('btn', 'btn-primary');
    button.innerHTML = 'Add'

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    return {
        form,
        input,
        button
    }
}

function createProductsList(){
    let list = document.createElement('ul');
    list.classList.add('list-group');

    return list;
}

function createProductsListItem(name, status){
    let item = document.createElement('li');
    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    item.classList.add('list-group-item', 'd-flex', 'justify-contetnt-between', 'align-items-center');
    if (status == 'true'){
        item.classList.add('list-group-item-success')
    }
    item.textContent = name;

    buttonGroup.classList.add('btn-group', 'btn-group-sm');
    doneButton.classList.add('btn', 'btn-success');
    doneButton.textContent = 'Done';
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'Delete';

    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    return {
        item,
        doneButton,
        deleteButton
    }
}

let tasks = [];
if (localStorage.getItem('products')){
    tasks = JSON.parse(localStorage.getItem('products'));
}

function draw(){
    let container = document.getElementById('products');
    let title = createAppTitle('Product List');
    let productsItem = createProductsItem();
    let productsList = createProductsList();

    container.append(title);
    container.append(productsItem.form);
    container.append(productsList);

    if (tasks.length > 0){
        for (let i in tasks){
            let task = createProductsListItem(tasks[i].value, tasks[i].status);
            task.doneButton.addEventListener('click', function(){
                let classItems = [...task.item.classList];
                if (classItems.includes('list-group-item-success')){
                    tasks[i].status = 'false';
                } else {
                    tasks[i].status = 'true';
                }
                task.item.classList.toggle('list-group-item-success');
            })

            task.deleteButton.addEventListener('click', function(){
                if(confirm('Are you sure?')){
                    tasks.splice(i, 1);
                    task.item.remove();

                    localStorage.setItem('products', JSON.stringify(tasks));
                }
            })
            
            productsList.append(task.item);
        }
    }

    productsItem.form.addEventListener('submit', function(event){
        event.preventDefault();

        if(!productsItem.input.value){
            return;
        }

        tasks.push({value: productsItem.input.value, status: false});
        let taskId = tasks.length - 1;
        let task = createProductsListItem(productsItem.input.value, false);


        task.doneButton.addEventListener('click', function(){            
            let classItems = [...task.item.classList];
            if (classItems.includes('list-group-item-success')){
                tasks[taskId].status = 'false';
            } else {
                tasks[taskId].status = 'true';
            }
            task.item.classList.toggle('list-group-item-success');
            localStorage.setItem('products', JSON.stringify(tasks));
        })
        task.deleteButton.addEventListener('click', function(){
            if(confirm('Are you sure?')){
                task.item.remove();
                tasks.splice(taskId, 1);

                localStorage.setItem('products', JSON.stringify(tasks));
            }
        })

        productsList.append(task.item);
        localStorage.setItem('products', JSON.stringify(tasks));
        productsItem.input.value = '';
    })
}


draw();