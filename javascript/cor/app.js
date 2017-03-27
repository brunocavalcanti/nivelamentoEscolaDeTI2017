angular
	.module('app', [])
	.controller('IndexController', IndexController)

	function IndexController($scope){
		$scope.cor={};
		$scope.cores=[];

		$scope.salvaCor = function (cor){
			var copiaCor = angular.copy(cor);

			coresRepetidas = $scope.cores.filter(c => c.id == cor.id);

			if(coresRepetidas.length == 0){
				$scope.cores.push(copiaCor);
			}else{
				alert("Cor com id repetido!");
			}

			console.log(cor.id, cor.nome);

			$scope.cor={};

		}

		$scope.excluirCor = function (cor){

			var pos = $scope.cores.indexOf(cor);
			
			$scope.cores.splice(pos, 1);

		}

		$scope.alterarCor = function (cor){

			cor.nome = prompt("Insira o novo nome da cor:", cor.nome);

		}
		
	}

