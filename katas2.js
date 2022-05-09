// comece a criar a sua função add na linha abaixo
function add(a,b){
return a+b
}
add()
// descomente a linha seguinte para testar sua função
 console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply (d,c){
    let output=0
    for(let i=0;i<c;i++){
    output+=add(d,0)
    }
return output
}
multiply()


// descomente a linha seguinte para testar sua função
 console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(x,n){
    let soma=multiply(x,1)
    let output=1
    for(let i=0;i<n;i++){
output*=soma
    }
return output
}
power()

// descomente a linha seguinte para testar sua função
 console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function sub(m){
    let outputt=[]
     for(let i=m;i>0;i--){
        outputt.push(i)
     }
     return outputt
 }
 
 function factorial(x){
     let output=1
     for(let i=0;i<x;i++){
      output*=sub(x)[i]
     }
 return output
 }
// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci

// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
