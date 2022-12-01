function gravar(){
    var data = document.getElementById("data").value;
    var subtiitulo = document.getElementById("txtsubtitulo").value;
    var div = document.getElementById("divResultado");

    div.innerText = "<h1>" + titulo +"</h1>"+ "\n" + subtitulo;
    return titulo
}
if (data < 15){
    res.innerText("Pagamento adiantado")
}
    else if (mensalidade > 15 || mensalidade <20){
        res.innerText("Pagamento em dia ")
    }
    else if (mensalidade > 20){
        res.innerText("Pagamento atrasado")
    }
