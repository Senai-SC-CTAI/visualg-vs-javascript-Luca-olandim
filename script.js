function comorbidade(){
    var idade = Number(document.getElementById("idade").value)
    var comorbidade = (document.getElementById("comorbidade").value)
    if (idade >= 60 || comorbidade == "S"){
        document.getElementById("resposta").innerHTML = "Pode se vacinar!"
    }
    else {
        document.getElementById("resposta").innerHTML = "Não pode se vacinar!"
    }
}
function copyToClipboard() {
    const codeSnippet = document.getElementById('code-snippet');
    const range = document.createRange();
    range.selectNode(codeSnippet);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Código copiado para a área de transferência!');
}
function copyToClipboard2() {
    const codeSnippet = document.getElementById('code-snippet2');
    const range = document.createRange();
    range.selectNode(codeSnippet);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Código copiado para a área de transferência!');
}