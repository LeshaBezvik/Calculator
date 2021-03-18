function show (num) {
    document.form.textview.value = document.form.textview.value + num;
}

function clean () {
    let lastElem = document.form.textview.value;
    document.form.textview.value = lastElem.substring(0, lastElem.length - 1);
}

function cleanAll () {
    document.form.textview.value = "";
}

function result () {
    let res = document.form.textview.value;
    if(res){
        document.form.textview.value = eval(res);
    }
}