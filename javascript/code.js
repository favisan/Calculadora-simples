const limpar=()=>{
    document.getElementById("visor").value="";
}
const preencher=valor=>{
    document.getElementById("visor").value+=valor;
}
const calcular=()=>{
    let resultado = 0;
    resultado = document.getElementById("visor").value;
    document.getElementById("visor").value = "";
    document.getElementById("visor").value= eval(resultado);
}