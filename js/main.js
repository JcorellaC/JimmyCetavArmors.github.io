
$(document).ready(function(){

		$('#llamar-lista').click(function(){

		$.ajax({

			type: "GET",
			url: "js/invent.json",
			dataType: "json",
			success:function(data){
					
					listaProd(data.armaduras);

			},

			error:function(jqXHR, textStatus, errorThrown) {

				console.log("Text Status:" +textStatus+"\nError:"+errorThrown);
				
			},
			complete:function(){
						
			},
 
		});

		function listaProd(armaduras){
			var venta = new Array;
			for(var i = 0; i < armaduras.length; i++){


				venta[i] = 
				//<html--
					'<div class="list">' +
						'<img class=img1 src="img/' + armaduras[i].imagenCaballero + '.jpg">' + 
						'<img class=img2 src="img/' + armaduras[i].imagen + '.jpg">' + 
						'<span class="nombre">' + 'Armor of '+armaduras[i].nombre+'</span>'+
						'<span class="precio">' + 'Special attack :' + armaduras[i].precio+'</span>'+
						'<input class="codigo" type="hidden" value="'+ armaduras[i].codigo + '">'+
						'<input class="id" type="hidden" value="'+ armaduras[i].ID + '">'+
						'<input class="info" type="hidden" value="'+ armaduras[i].descripcion + '">'+
					'</div>';
				//--html>
				
			}
			
			var datos = '';
			$('#lista').on('click', '.list', function(){
				var	imagen = $(this).children('img.img1').attr('src');
				var articulo = $(this).children('span.nombre').text();
				var costo = $(this).children('span.precio').text();
				var Ubicacion = $(this).children('input.codigo').val();
				var Usuario = $(this).children('input.id').val();
				var Representacion = $(this).children('input.info').val();

				datos =
				//<html--
					'<div>' + 
						'<img src="' + imagen + '" class="detalles">' +
						'<div class="row">' +
							'<div class="col-md-6 izq">' +
								'<h2>' + articulo + '</h2>' +
								'<h3>' + costo + '</h3>' + '</br>' +
								'<p class="right">' + 'User: ' + Usuario + '</p>' + '</br>' +
								'<p class="right">' + 'Location: ' + Ubicacion + '</p>' +
							'</div>' +
						'</div>' +
						'<h2 id="type">' + 'Represent: ' + Representacion + '</h2>'+
					'</div>';
				//--html>

				$('#muestra').html(datos);
			});

			$('#lista').append(venta);
			


		}


	});

});
