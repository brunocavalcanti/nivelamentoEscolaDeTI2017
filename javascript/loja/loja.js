(function() {

	var produtos = [];
	var vendas = [];
	var compras = [];
	

	function criarProduto(codigo, nome, preco, estoque){
		return { codigo : codigo, nome : nome, preco : preco, estoque : estoque };
	}

	function criarCompra(codigo, quantidade, precoUnidade){
		return { codigo : codigo, quantidade : quantidade, precoUnidade : precoUnidade, total : precoUnidade * quantidade};
	}

	function criarVenda(codigo, quantidade, precoUnidade){
		return { codigo : codigo, quantidade : quantidade, precoUnidade : precoUnidade, total : precoUnidade * quantidade };
	}

	function buscaProdutoPorNome(nome){

		for( i in produtos){
			if(produtos[i].nome == nome){
				return produtos[i];
			}
		}

		return null;
	}

	function cadastrarProduto(){
		var codigo  = prompt("Informe o código do produto:");
		var nome 	= prompt("Informe o nome do produto:");
		var preco 	= parseFloat( prompt("Informe o preço do produto:"));
		var estoque = parseInt( prompt("Informe o estoque inicial do produto:"));

		produtos.push( criarProduto( codigo, nome, preco, estoque)); 
	}

	function efetuarCompra(){
		var nome  	   = prompt("Informe o código ou nome do produto:");
		var produto = buscaProdutoPorNome(nome);

		if(produto != null){
			var quantidade = parseInt(prompt("Informe a quantidade comprada:"));
			
			if( quantidade > 0 ){
				produto.estoque += quantidade;
				compras.push(criarCompra(produto.codigo, quantidade, produto.preco));
				alert(quantidade + " unidades adicionadas ao estoque, totalizando: " + produto.estoque + " em estoque");
			} else {
				alert("Quantidade comprada deve ser positiva.");
			}

		} else {
			alert("Produto inválido");
		}			
	}

	function efetuarVenda(){
		var nome  	= prompt("Informe o código ou nome do produto:");
		var produto = buscaProdutoPorNome(nome);

		if(produto != null){
			var quantidade = parseInt( prompt("Informe a quantidade vendida:"));
			
			if( quantidade > 0 ){
				if (quantidade <= produto.estoque) {
					produto.estoque -= quantidade;
					vendas.push(criarVenda(produto.codigo, quantidade, produto.preco));
					alert(quantidade + " unidades vendidas ao estoque, estoque restante: " + produto.estoque);	

				} else {
					alert("Estoque insuficiente.");	
				}

			} else {
				alert("Quantidade vendida deve ser positiva.");
			}

		} else {
			alert("Produto inválido");
		}			
	}

	function apresentarRelatorioDeProduto(){
		for ( i in produtos) {
			console.log("\n---------------INCIO-----------------\n" + (i+1) + " - " + "Codigo: " + produtos[i].codigo +
						    	 "\n       Nome: "    + produtos[i].nome    	+
						    	 "\n       Preço: "   + produtos[i].preco   	+
						    	 "\n       Estoque: " + produtos[i].estoque 	+
					        	 "\n----------------FIM----------------");
		}
	}

	function apresentarRelatorioDeCompras(){
		var tuto;
		for ( i in compras) {
			tuto =+ compras[i].total;
			console.log((i+1) + " - " + "Codigo: " + compras[i].codigo +
					               "\n     Quantidade: " + compras[i].quantidade +
						    	   "\n     Total da compra: " + compras[i].total +
					        	   "\n---------------FIM-----------------");
		}

		console.log("\n\n   Total da porra toda: " + tuto + "\n-----------------------------------");

	}

	function apresentarRelatorioDeVendas(){
		var tuto;
		for ( i in vendas) {
			tuto =+ vendas[i].total;
			console.log((i+1) + " - " + "Codigo: " + vendas[i].codigo +
						     	   "\n   Quantidade: " + vendas[i].quantidade +
						     	   "\n   Vendas: " + vendas[i].preco +
						     	   "\n   Total: " + vendas[i].total +
						     	   "\n-----------------------------------");
		}

		console.log("\n\n   Total da porra toda: " + tuto + "\n-----------------------------------");

	}

	function menuRelatorios(){
		var opcao;
		do{
			opcao = parseInt( prompt("1 - Relatório de produto\n2 - Relatório de compras\n3 - Relatório de vendas\n0 - Sair"));

			if(opcao == 1){
				apresentarRelatorioDeProduto();
			} else if (opcao == 2) {
				apresentarRelatorioDeCompras();
			} else if (opcao == 3) {
				apresentarRelatorioDeVendas();
			}

		}while(opcao != 0 );

	}

	function menu(){
		var opcao;
		do{
			opcao = parseInt( prompt("1 - Produto\n2 - Compra\n3 - Venda\n4 - Relatório\n0 - Sair"));

			if(opcao == 1){
				cadastrarProduto();
			} else if (opcao == 2) {
				efetuarCompra();
			} else if (opcao == 3) {
				efetuarVenda();
			} else if (opcao == 4) {
				menuRelatorios();
			};

		}while(opcao != 0 );
	}

	menu();

})();