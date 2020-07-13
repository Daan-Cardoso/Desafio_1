(function Main() {
    var clients = [];
    var filter;

    async function FetchCliente() {
        clients = [{
                name: "Kauan Pereira Rocha",
                telefone: "(81) 9479-5548"
            },
            {
                name: "Antônio Oliveira Cunha",
                telefone: "(73) 3626-4953"
            },
            {
                name: "Paulo Ferreira Sousa",
                telefone: "(61) 5620-5278"
            },
            {
                name: "Beatrice Silva Gomes",
                telefone: "(81) 9362-3427"
            },
            {
                name: "Gabriela Oliveira Sousa",
                telefone: "(19) 6770-3263"
            },
            {
                name: "Alex Oliveira Correia",
                telefone: "(32) 6974-7896"
            },
            {
                name: "Breno Azevedo Martins",
                telefone: "(91) 7167-8651"
            },
            {
                name: "Giovanna Rocha Barros",
                telefone: "(21) 6495-8033"
            },
            {
                name: "Daniel Sousa Carvalho",
                telefone: "(81) 9852-4166"
            },
            {
                name: "Luis Rodrigues Barros",
                telefone: "(85) 8946-9329"
            },
            {
                name: "Felipe Fernandes Almeida",
                telefone: "(21) 7167-9927"
            },
            {
                name: "Lavinia Ribeiro Ferreira",
                telefone: "(35) 6497-5127"
            },
            {
                name: "Danilo Araujo Costa",
                telefone: "(91) 5514-7876"
            },
            {
                name: "Leila Fernandes Cunha",
                telefone: "(11) 5356-3574"
            },
            {
                name: "Livia Silva Ribeiro",
                telefone: "(47) 4241-8712"
            }
        ]
    }

    function Update() {
        var $list = document.getElementById('list');
        var aux = "";
        for (var i = 0; i < clients.length; i++) {
            aux += `<li>${clients[i].name}</li>`;
        }
        $list.innerHTML = aux;
    }

    function enableFilter(state) {
        if (state !== true) {
            return false
        }
        const $list = document.getElementById('list');
        const $searchInput = document.getElementById('input');
    
        function clearFilter() {
            $list.innerHTML = "";
        }
    
        function createItem(content) {
            let item = document.createElement('li');
            let textContent = document.createTextNode(content);
            $list.appendChild(item)
            item.appendChild(textContent);
        }
    
        function filterUpdate(word) {
            clearFilter();
    
            word = word.toUpperCase();
            if ($searchInput.value !== "") {
                const wordSize = word.length;
                let wordSliced;
                for (let i in clients) {
                    for (let j = 0; j < clients[i].name.length; j++) {
                        wordSliced = clients[i].name.slice(j, j + wordSize);
                        wordSliced = wordSliced.toUpperCase();
                        if (wordSliced === word) {
                            createItem(clients[i].name);
                            break;
                        }
                    }
                }
            } else {
                Update();
            }
        }
    
        function checkItemSelect() {
            const $listItem = document.getElementsByTagName('li');
            const listItemText = [];
    
    
            for (let i = 0; i < $listItem.length; i++) {
                listItemText.push($listItem[i].innerHTML);
            }
    
            function printSelectedItem(clientName) {
                const printText = document.getElementsByTagName('p')[0];
                printText.innerHTML = "Nome selecionado: " + clientName;
            }
    
            for (let i = 0; i < $listItem.length; i++) {
                $listItem[i].addEventListener('click', () => printSelectedItem(listItemText[i]))
            }
        }
    
        $searchInput.addEventListener('keyup', () => {
            filterUpdate($searchInput.value);
            checkItemSelect();
        })
        checkItemSelect();
    }

    async function Start() {
        await FetchCliente();
        Update();
        enableFilter(true);
    }



    Start();


    window.Main = {

    }

})();