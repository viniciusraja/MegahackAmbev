 function stringOfnumbersOrError(input){
    if(!input.match(/^[0-9.,]+$/))throw("O valor contém caracteres indevidos!")
    return input
}

function euToUsCurrencyFormat(input) {
    return input.replace(/[,]/g,(x)=>".")
}
function checkIfThereIsMoreThanOneDecimalSeparator(input){
    const numberOfDecimalSeparators= (input.match(/[,.]/g)||[]).length
    if(numberOfDecimalSeparators > 1)throw("O valor apresenta formato decimal indevido")
    return input
}
const checkStringLength=min=>max=>erro=>string=>{
    const length=(string|| '').trim().length
    if(length<min||length>max)throw(erro)
    return length
}

export const forcePriceInputToValid=input=>checkIfThereIsMoreThanOneDecimalSeparator(euToUsCurrencyFormat(stringOfnumbersOrError(input)))
export const isCategoryTitleValid=checkStringLength(5)(20)("O tamanho do seu Título não é válido!")
export const isCategorySubtitleValid=checkStringLength(5)(70)("O tamanho do seu Subtítulo não é válido!")
export const isProductNameValid=checkStringLength(5)(15)("O tamanho do nome do seu produto não é válido!")
export const isProductIngredientsDetailsValid=checkStringLength(0)(75)("O texto dos detalhes  excedeu o limite!")
export const isProductAllergicInformationValid=checkStringLength(0)(20)("O texto das informações adicionais excedeu o limite!")