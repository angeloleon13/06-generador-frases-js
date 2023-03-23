
const columnaA = [
    "La vida es lo que hacemos de ella. Los viajes son los viajeros. Lo que vemos no es lo que vemos, sino lo que somos.",
			"No se puede impedir que los pájaros de la tristeza vuelen sobre nuestras cabezas, pero sí que aniden en ellas.",
			"Lo que no te mata te hace más fuerte.",
			"No hay nada más poderoso en el mundo que la idea a la que ha llegado su tiempo.",
			"Un hombre que no se alimenta de sus sueños envejece pronto.",
			"La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
			"El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que haces, tendrás éxito.",
			"La verdadera medida de un hombre no está en cómo se comporta en momentos de comodidad y conveniencia, sino en cómo se mantiene en tiempos de controversia y desafío.",
            "La vida es como una cámara. Enfoca en lo importante, captura los buenos momentos, saca lecciones de los negativos y si algo no funciona, toma otra foto.",
            "El pesimista se queja del viento, el optimista espera que cambie, el realista ajusta las velas.",
];



function generaFrase() {
  
    const posicionA = Math.floor(Math.random()*columnaA.length);

    
  
    const frase = `${columnaA[posicionA]}`
    
   
    return frase;
}

console.log(generaFrase());


function colocaFrase() {
    document.getElementById("frase").innerHTML = generaFrase();
}


colocaFrase();