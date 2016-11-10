'use strict';

(function(){

	var app={

		init: function(){

			this.recupInput();
			this.listeners();

		},
		listeners: function(){

			$('#allInput').on('change',function(){
				app.recupInput();
			});

		},
		recupInput: function(value){

			var red = $('#red').val();
			var green = $('#green').val();
			var blue = $('#blue').val();
			var alpha = $('#alpha').val();
			var changeColor = 'rgba('+red+','+green+','+blue+','+alpha+')';
			$('body').css("background-color",''+changeColor+'')

		}
	}
app.init();
})();
