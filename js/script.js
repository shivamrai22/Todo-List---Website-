let i = 0;
let clsname;
let parentItem = document.querySelector('.todoList')


let addBtn = document.getElementsByClassName('add');
addBtn[0].addEventListener('click', function () {
    i = i + 1;
    let item = document.createElement('input');
    item.type = "text";
    item.className = "text" + i;
    item.placeholder = "TO-DO List " + i;
    parentItem.appendChild(item);
})


let rmvBtn = document.getElementsByClassName('remove');
rmvBtn[0].addEventListener('click', function () {
    var lastChildItem = parentItem.lastElementChild;
    // let childern = parentItem.children;
    // console.log(children);
    
    if(lastChildItem == null){
        alert("There Is No Item To Remove");
    }
    else{
        
        parentItem.removeChild(lastChildItem);
        // console.log(lastChildItem);
        i = i - 1;

    }
    




})