function myFunction() {
    let inputVal = document.getElementById("search-setting").value.toUpperCase();
    let getItems = document.getElementById("list-items");
    let listItems = Array.prototype.slice.call(getItems.getElementsByTagName("li"));
    let a, txt;
    listItems.forEach(item => {
        txt = item.getElementsByTagName("a")[0].innerText;
        if(txt.toUpperCase().indexOf(inputVal) > -1){
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}