const tabItems = document.querySelectorAll (".tab-item");
const tabContentItems = document.querySelectorAll (".tab-content-item");

function selectItem (e) {
    removeBorder();
    removeShow();
    this.classlist.add('tab-border')
}

consttabContentItem = document.querySelector('#$(this.id)-content');
tabContentItem.classlist.add('show');

function removeBorder (){
    tabItems.forEach(item=>item.classlist.remove('tab-border'))
}

function removeShow (){
    tabContentItems.forEach(item=>item.classlist.remove('show'))
}

tabItems.forEach(item => item.addEventListener ('click', selectItem));

