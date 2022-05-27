var letraA = "ai";
var letraE = "enter";
var letraI = "imes";
var letraO = "ober";
var letraU = "ufat";

var aiLetra = "a";
var enterLetra = "e";
var imesLetra = "i";
var oberLetra = "o";
var ufatLetra = "u";

var inputCapturarTexto = document.querySelector(".digiteSeuTexto");
//var texto = document.querySelector(".texto");

var cripto = function() {

    if (inputCapturarTexto.value === '') {
        alert('Favor inserir o texto para ser criptogrado!')
    } else {
        var criptografado = [];
        for (var i = 0; i < inputCapturarTexto.value.length; i++) {
            var letra = inputCapturarTexto.value[i].toLowerCase();
            if (letra === aiLetra) {
                criptografado.push(letraA);
            } else if (letra === enterLetra) {
                criptografado.push(letraE);
            } else if (letra === imesLetra) {
                criptografado.push(letraI);
            } else if (letra === oberLetra) {
                criptografado.push(letraO);
            } else if (letra === ufatLetra) {
                criptografado.push(letraU);
            } else {
                criptografado.push(letra);
            }

        }
        var fraseCriptografada = criptografado.toString().replaceAll(',', '');

        //texto.innerHTML = fraseCriptografada;
        inputCapturarTexto.value = null;

        var boneco = document.querySelector(".boneco");
        if (boneco) {
            boneco.remove();
        }
        var frame5 = document.querySelector(".frame5");
        if (boneco) {
            frame5.remove();
        }


        criarBotao();

        var textoTextArea = document.querySelector(".textoTextArea");
        if (textoTextArea !== null) {
            textoTextArea.remove();
            criarTextArea(fraseCriptografada);
        } else {
            criarTextArea(fraseCriptografada);
        }

    }
}

var desCripto = function() {

    if (inputCapturarTexto.value === '') {
        alert('Favor inserir o texto para ser desicriptogrado!')
    } else {
        var textoCriptografado = inputCapturarTexto.value.toLowerCase();
        textoCriptografado = textoCriptografado.replaceAll(letraA, aiLetra).replaceAll(letraE, enterLetra).replaceAll(letraI, imesLetra).replaceAll(letraO, oberLetra).replaceAll(letraU, ufatLetra);
        var textoTextArea = document.querySelector(".textoTextArea");
        textoTextArea.innerHTML = textoCriptografado;
        inputCapturarTexto.value = null;
    }
}

var copiar = function() {
    var textoTextArea = document.querySelector(".textoTextArea");
    textoTextArea.select();
    document.execCommand('copy');
}

var colar = function() {
    navigator.clipboard.readText().value = inputCapturarTexto.value = texto.value;
    texto.value = null;
}


function criarBotao() {
    var texto = document.getElementById("texto");
    var botaoCopiar = document.createElement("input");
    botaoCopiar.setAttribute("class", "botaoCopiar");
    botaoCopiar.setAttribute("type", "button");
    botaoCopiar.setAttribute("name", "botaoCopiar");
    botaoCopiar.setAttribute("value", "Copiar");
    botaoCopiar.setAttribute("onclick", "copiar()");
    texto.appendChild(botaoCopiar);

}

function criarTextArea(fraseCriptografada) {
    // var escrita = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci montes, sit et diam risus scelerisque vitae est. Tortor maecenas nunc ut laoreet. Eget diam mauris quam quisque ut eget fringilla sit elit. Libero, sodales duis fames id diam feugiat aliquet non egestas."
    var texto = document.getElementById("texto");
    var textarea = document.createElement("textarea");
    textarea.setAttribute("class", "textoTextArea");
    textarea.setAttribute("type", "text");
    textarea.setAttribute("name", "textoTextArea");
    textarea.innerHTML = fraseCriptografada;
    texto.appendChild(textarea);
}

var acao = function() {
    var boneco = document.querySelector(".boneco");
    var frame5 = document.querySelector(".frame5");
    boneco.remove();
    frame5.remove();

    criarBotao();
    criarTextArea();

}