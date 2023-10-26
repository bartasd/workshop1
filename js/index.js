let res = "INITIAL NUMBER"

const sub = document.getElementById('s');
const r = document.getElementById('r');
const add = document.getElementById('a');
const resul = document.getElementById("res");

function change(res)
{
    if (res == "INITIAL NUMBER")
    {
        if(result.classList.contains('minus'))
            resul.classList.remove('minus');
        if(result.classList.contains('plus'))
            resul.classList.remove('plus');
    }
    else if(res > 0)
        resul.classList.add('plus');
    else if(res < 0)
        resul.classList.add('minus');
}

sub.addEventListener('click', function onClick() {
    if(res === "INITIAL NUMBER")
        res = 0;
    res--;
    change(res);
    resul.innerHTML = res;
});

r.addEventListener('click', function onClick() {
    res = "INITIAL NUMBER";
    change(res);
    resul.innerHTML = res;
});

add.addEventListener('click', function onClick() {
    if(res === "INITIAL NUMBER")
        res = 0;
    res++
    change(res);
    resul.innerHTML = res;
});