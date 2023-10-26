let res = "INITIAL NUMBER"

const sub = document.getElementById('s');
const r = document.getElementById('r');
const add = document.getElementById('a');
const resul = document.getElementById("res");

function change(res)
{
    if(res > 0)
    {
        if(!(resul.classList.contains('plus')))
        {
            resul.classList.remove('minus');
            resul.classList.add('plus');
        }
    }
        
    else
    {
        if(!(resul.classList.contains('minus')))
        {
            resul.classList.remove('plus');
            resul.classList.add('minus');
        }
    }
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
    if(resul.classList.contains('minus'))
        resul.classList.remove('minus');
    if(resul.classList.contains('plus'))
        resul.classList.remove('plus');
    resul.innerHTML = res;
});

add.addEventListener('click', function onClick() {
    if(res === "INITIAL NUMBER")
        res = 0;
    res++
    change(res);
    resul.innerHTML = res;
});