// ej 8
// Crea un bucle  que imprima por consola números del 1 al 100
// pero que los múltiplos de 3 imprima GEEKS en lugar del numero
// y los múltiplos de 5 imprima HUBS.
// Además los múltiplos de 3 y 5 ha de imprimir GEEKSHUBS


let resultado = "";

for (var i = 1; i<=100; i++){
    if ( i%3 == 0){
        resultado = console.log("GEEKS") + i;
    }
        if(i%5 == 0){
            resultado = console.log("HUBS") ;
        }
            if(i%3 == 0 && i%5 == 0){
                resultado =  console.log("GEEKSHUBS") + i;
            }else{
                console.log(i);
            }
        
    
}
console.log(resultado);


// var n = 0;
// 	while ( n<100 ){
// 		n=n+1;

// 		if ( n%3                                                                                                                                                                                                                                                         ==0 ){
// 			console.log("fizz");

// 		}else{
// 			if( n%5==0 ){
// 				console.log("buzz");
// 			}
// 			else{
// 				if(n%7==0){
// 					console.log("pumchacalaca");
// 				}else{

// 					if(n%15==0){
// 					console.log("fizz-buzz");

// 				}
// 				else{
// 					console.log(n);
// 				}

// 				}
				
// 			}

// 		}
		
// 	}