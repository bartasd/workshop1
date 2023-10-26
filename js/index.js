let res = "INITIAL NUMBER"

const sub = document.getElementById('s');
const r = document.getElementById('r');
const add = document.getElementById('a');
const result = document.getElementById("res");

sub.addEventListener('click', function onClick() {
    if(res === "INITIAL NUMBER")
        res = 0;
    res--;
    result.innerHTML = res;
});

r.addEventListener('click', function onClick() {
    res = "INITIAL NUMBER";
    result.innerHTML = res;
});

add.addEventListener('click', function onClick() {
    if(res === "INITIAL NUMBER")
        res = 0;
    res++
    result.innerHTML = res;
});