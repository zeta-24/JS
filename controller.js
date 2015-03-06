var app = angular.module("MyFirstApp", []);

app.controller("firstController", function($scope){
	$scope.nombre = "Kevin";
	$scope.nuevoComentario = {};
	$scope.comentarios = [
		{
			comentario: "GJ", username: "CF"
		},
		{
			comentario: "BJ", username: "Chito"
		}
	];
	$scope.addComment = function(){
		$scope.comentarios.push($scope.nuevoComentario);
		$scope.nuevoComentario = {};
	};
});
