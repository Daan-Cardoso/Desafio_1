(function Main() {
    var clients = [];
    const $list = document.querySelector('#list');
    let $listItem = document.getElementsByTagName('li');
    const $searchInput = document.querySelector('#input');


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

    function createItem(content) {
        let item = document.createElement('li');
        item.classList.add('list__item')
        let textContent = document.createTextNode(content);
        $list.appendChild(item)
        item.appendChild(textContent);
    }

    function Update() {
        for (i in clients) {
            createItem(clients[i].name);
        }
    }

    function clearFilter() {
        for (i in clients) {
            $listItem[i].style.display = "";
        }
    }

    function filter(word) {
        if (word !== "") {
            for (let i = 0; i < clients.length; i++) {
                (clients[i].name.toUpperCase().indexOf(word)) > -1 ? $listItem[i].style.display = "" : $listItem[i].style.display = "none";
            }
        } else {
            clearFilter();
        }
    }

    function checkItemSelect() {
        const $clientInfo = document.getElementsByClassName('selected-customer__info')[0];

        function printSelectedItem(clientName, telefone) {
            $clientInfo.innerText = ` ${clientName}, ${telefone}`
        }
        for (let i = 0; i < $listItem.length; i++) {
            $listItem[i].addEventListener('click', () => printSelectedItem(clients[i].name, clients[i].telefone));
        }
    }

    $searchInput.addEventListener('keyup', () => {
        filter($searchInput.value.trim().toUpperCase());
    })



    async function Start() {
        await FetchCliente();
        Update();
        checkItemSelect();
    }



    Start();


    window.Main = {

    }

})();