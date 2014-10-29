/*

  Requisitos: 

  La nave del usuario disparará 2 misiles si está pulsada la tecla de
  espacio y ha pasado el tiempo de recarga del arma.

  El arma tendrá un tiempo de recarga de 0,25s, no pudiéndose enviar
  dos nuevos misiles antes de que pasen 0,25s desde que se enviaron
  los anteriores



  Especificación:

  - Hay que añadir a la variable sprites la especificación del sprite
    missile

  - Cada vez que el usuario presione la tecla de espacio se añadirán
    misiles al tablero de juego en la posición en la que esté la nave
    del usuario. En el código de la clase PlayerSip es donde tienen
    que añadirse los misiles

  - La clase PlayerMissile es la que implementa los misiles. Es
    importante que la creación de los misiles sea poco costosa pues va
    a haber muchos disparos, para lo cual se declararán los métodos de
    la clase en el prototipo

*/

describe("PlayerMissile", function(){
   
   var canvas, ctx;
	var board;
	
   beforeEach(function(){
       
       loadFixtures('index.html');

       canvas = $('#game')[0];
       expect(canvas).toExist();

       ctx = canvas.getContext('2d');
       expect(ctx).toBeDefined();
       board = new GameBoard();
       //var oldSpriteSheet = SpriteSheet;
   });
   
   //afterEach(function(){
   	//SpriteSheet = oldSpriteSheet;
   //});

	it("Prueba PlayerMissile", function() {
		SpriteSheet.map = {missile: {h:10, w:2}};
		disparo = new PlayerMissile(1, 1);
		
		expect(disparo.w).toBe(SpriteSheet.map['missile'].w);
		expect(disparo.h).toBe(SpriteSheet.map['missile'].h);
		expect(disparo.x).toEqual(0);
		expect(disparo.y).toEqual(-9);
		expect(disparo.vy).toEqual(-700);
	});

	it("Draw PlayerMissile", function() {
		SpriteSheet = {draw: function(){}, map: {missile: {sx: 0, sy: 30, w: 2, h: 10, frames: 1}}};
		var aux = {};
		disparo = new PlayerMissile(1,1);
		
		spyOn(SpriteSheet, 'draw');
		disparo.draw(aux);
		
		expect(SpriteSheet.draw).toHaveBeenCalled();
	};


});
