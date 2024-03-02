document.addEventListener("DOMContentLoaded", function() {
    const infiList = document.getElementById('infi-list');
    function addItems(num) {
        for (let i = 0; i < num; i++) {
            const li = document.createElement('li');
            li.textContent = 'Item ' + (infiList.children.length + 1);
            infiList.appendChild(li);
        }
    }
    addItems(10);
    infiList.addEventListener('scroll', function() {
        if (infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight) {
            addItems(2);
        }
    });
});
