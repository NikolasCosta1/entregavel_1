function calculadora(num1, num2, operador){
    num1 = Number(prompt('digite um numero'))
    num2 = Number(prompt('digite outro numero'))
    operador = prompt('escolha a operacao que deseja (+, -, *, /, e)')
    let resultado
    switch(operador){
        case '+':
            resultado = num1 + num2
            break;
        case '-':
            resultado = num1 - num2
            break;
        case '*':
            resultado = num1 * num2
            break;
        case '/':
            resultado = num1 / num2 
            break;
        case 'e':
            let operacao = 1
            resultado = num1 * num1
            while(operacao < num2 - 1){
                resultado = resultado * num1
                operacao++
            }
            break;
        default:
            console.log('nao tem essa operação')
    }
    if(resultado == undefined || resultado > 1000000)
        resultado = 'ERRO'
    
    return resultado
}