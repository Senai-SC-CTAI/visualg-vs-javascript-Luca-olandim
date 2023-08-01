function comorbidade(){
    var idade = Number(document.getElementById("idade").value)
    var comorbidade = Text(document.getElementById("comorbidade"))
    if (idade >= 60 || comorbidade == "S"){
        document.getElementById("resposta").innerHTML = "Pode se vacinar!"
    }
    else {
        document.getElementById("resposta").innerHTML = "Não pode se vacinar!"
    }
}