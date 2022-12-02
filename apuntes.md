# inico del curso de videojuegos con JavaScript.
## Primer modulo:
### canvas:
Lo primero que necesitamos es el elemento de HTML donde vamos a renderizar el canvas, canvas nos sirve para renderizar gráficos 2D.

Como condición también tenemos que crear un contexto que es donde le decimos a canvas que queremos renderizar gráficos en 2d lo hacemos así
```js
const game = canvas.getContext('2d');
```
Ahora la variable game ya tiene las propiedades para que usemos canvas, es recomendable usar canvas una vez el HTML se ha renderizado, por eso podemos usar un escuchador de eventos en el HTML para saber cuando se cargo y poder desde ese punto usar canvas.
### fillRect()
Con este definimos el lugar donde va a iniciar nuestro trazo o figura geométrica, recibe 4 parámetros
```js
game.fillRect(0,0,0,0);
```
El primer parámetro es el eje X donde inicia nuestro trazo.
El segundo parámetro es el eje Y.
El tercer parámetro es la medida de nuestro trazo o figura, es decir hasta dónde va a llegar y esta medida en en WITH o ancho.
El tercer parámetro también nos sirve para añadir medidas al trazo y esta medida es en HEIGTH o alto.
### clearRect()
Este nos sirve especialmente para borrar, esta función también recibe 4 parámetros y son los mismos antes mencionados, en este caso tenemos un borrado de la posición en Y y en X que le demos y los últimos 2 parámetros el grosor del borrado.
```js
game.clearRect(0,0,50,50);
```
### fillText()
Este nos permite insertar texto, cuando usemos esta propiedad es necesario que no solo le pasemos el texto sino también las propiedades para poderlo alinear.
```js
game.fillText('setso', 100,100);
```
### Dando estilos a nuestro texto
Para dar estilos tenemos algunas propiedades como
font y fillStyle
Su sintaxis es así, es un poco diferente a las otras por qué no son un método.
Con la propiedad font podemos añadir todos los estilos correspondientes a un texto como el tamaño o su tipografía.
```js
game.font = '25px verdana';
```
Con fillStyle ya podemos darle otros estilos como el color
```js
game.fillStyle = 'purple';
```
### textAling()
Cómo su nombre lo dice es para poder alinear el texto, tenemos diferentes propiedades como:
Center, start, end, right, left
```js
game.textAling = 'rigth';
```
### tamaño del canvas 
En este caso medimos el tamaño del canvas debe tener y debe ser responsive, usando un metodo de Math.min, hace un calculo busca el equilibrio mientras ancho y altura crescan hace lo mismo, pero si ancho por ejemplo sigue creciendo y altura no, conserva el valor de altura y hace que ancho no cresca mas, y asi al reves, si ancho es muy menor ajusta la altura, siempre se mantiene el cuadrado en este caso.
```js
Math.min(window.innerHeight, window.innerWidth) * 0.75;
```
esta forma mejor explicada hace lo mismo que el Math.min pero usando el if.
```js
if (window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth * 0.75;
    } else {
        canvasSize = window.innerHeight * 0.75;
    }
```
en esta parte asi termina la función:
```js
function startGame() {
    let canvasSize;

    if (window.innerHeight >= window.innerWidth) {
        canvasSize = window.innerWidth * 0.8;
    } else {
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('Width', canvasSize);
    canvas.setAttribute('height', canvasSize);

    let elementsSize = (canvasSize / 10) - 1;

    game.font = (elementsSize - 12) + 'px Vendana';
    game.textAlign = "end";

    for (let i = 1; i <= 10; i++) {
        game.fillText(emojis['X'], elementsSize * i, elementsSize);
    }
}
```
recuerda que le tienes que tienes que crear una variable canvas, le das un atributo de ancho y alto, luego le das el condicional de si alto es mayor que el ancho su tamaño lo va tomar del ancho y si no es asi pues al revez el ancho toma el tamaño del alto, luego el tamaño del elemento en este caso del elemento debe ser una decima parte del canvas y le haces lo mismo el .font necesita el tamaño mas el px y el tipo de letra y la alineación al final, por ultimo un ciclo for que acomode los elementos en lo ancho y largo del canvas.
```js
window.addEventListener('resize', setCanvasSize);
```
este evento hace referencia a cuando se cambia el tamaño de la pantalla.
## Segundo modulo:
### trabajar con arreglos bidimencionales
por ejemplo puedes anidar dos ciclos for solo tienes que ponerle nombre a la variable diferente por ejemplo "i" y "j".
```js
for (let row = 1; row <= 10; row++) {
        for (let col = 1; col <= 10; col++) {
            game.fillText(emojis['X'], (elementsSize * row ), elementsSize * col);   
        }
    }
```
hay otras funciones (metodos) de los strings que nos ayudan a trabajar con los arrays de arrays como son los .trim .split y el .map
```js
    const map = maps[0];
    const mapRows = maps[0].trim().split('\n');
    const mapRowCols = mapRows.map(row => row.trim().split(''));
```
La funcion .trim hace desaparecer los espacios vacios en un arreglo del principio y al final.
el .split separa en arrays deferentes segun le digas, primero por cada salto de linea por eso el "\n" y luego hace un array por cada elemento.
y el .map nos ayuda a crear arreglos de otros arreglos.
El metodo forEach es para recorer un arreglo (array).
```js
mapRowCols.forEach( (row, rowI) => {
        row.forEach((col, colI) => {
            const emoji = emojis[col];
            const posX = elementsSize * (colI + 1);
            const posY = elementsSize * (rowI + 1);
            game.fillText(emoji, posX, posY);
        });
    });
```
un nuevo metodo de los Array es este con un fill.
```js
const heartArray = Array(lives).fill(emojis['HEART']);
spanLives.innerHTML = "";
heartArray.forEach(heart => spanLives.append(heart));
```
### Funciones para intervalos de tiempo.
setInterval es una funcion que como argumento resive otra funcion y ademas el intervalo de tiempo que quieres que se realice dicha funcion. ejemplo:
```js
const intervalo = setInterval(() => console.log('Hola'), 1000)
clearInterval(intervalo)
```
se ejecutara cada segundo. se debe guardar en una variable y con el clear se puede detener la ejecución.
por otro lado setTimeout se ejecuta una sola vez segun el tiempo establecido.
```js
setTimeout(() => console.log('Hola'), 1000)
```