window.addEventListener('load', function() {
    document.getElementById("printers").style.visibility='hidden';
    document.getElementById("upload").style.visibility='hidden';
})

function test(hide, show){
    document.getElementById(hide).style.visibility='hidden'
    document.getElementById(show).style.visibility='visible'
    eel.test_eel(hide);
}
function SwapDivsWithClick(div1,div2)
{
    document.getElementById("inner_block").innerHTML=
    document.getElementById(div1).style.visibility = "hidden";
    document.getElementById(div2).style.visibility = "visible";
}

