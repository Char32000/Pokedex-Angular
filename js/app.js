(function() {

	//aplicaciones
    var app = angular.module('ejemplosApp', []);

    app.controller('mainCtrl', ['$scope', '$http', function($scope, $http) {

        $scope.pokedex = {};
        $scope.infromacionI = {};
        $scope.mostrar = false;

        /*
        	Parte encargada de extraer el json de los datos y almacenarlos para utilizar
        	en una tabla 
        */
        $http.get('https://pokeapi.co/api/v2/pokedex/2').
        success(function(data) {
            console.info("Datos extraidos correctamente" + data);

            //copiamos el json obtenido en pokedex
            $scope.pokedex = data;

        });

        /*
        	Al momento de que el usuario de click, toma el valor poara regresar ujn json en el numero de la info y copiarla en el valor
        */
        $scope.unPokemon = function(valor) {

            var url = 'http://pokeapi.co/api/v2/pokemon/';
            url += valor;

            //tomamos el valor del id para hacer una llamada al api y rgresar un json
            $http.get(url).
            success(function(datos) {

                //copiamos el json obtenido en pokdex
                //el tiempo de carga es hasta que copia los datos al array de informacionI
                $scope.informacionI = datos;
                $scope.mostrar = true;
                console.info("datos cargados exitosamente");
            });

        }


    }]);

})();
