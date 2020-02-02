/*
    Jogo multiplayer feito em Java Script 

    - A principio temos 4 camadas:
        - Apresentação: apresenta resultado final da aplicação
        - Lógica e Dados(JOGO): guarda as informações/estado(Dados) e as regras do jogo(Lógica) ==> State Machine + logica
        - Input: reage aos comandos do usuário executando uma ação. Deve enviar dados para a Camada de logica+dados, pois só ela tem as informações necessárias,
                 para decidir o que será feito e, posteriormente, apresentado.
        - Networking: responsável por lidar com a parte do multiplayer, onde existem vários clients ligados sincronizadamente a um mesmo server



    - Gitpod: IDE online para github em que posso deixar um ambiente de desenvolvimento totalmente configurado para que qualquer pessoa possa usar

    - Uso do módulo 'serve': 
            - por meio dele consido rodar o .html que está no container do gitpod
            - transforma a pasta que em estou num servidor estático
            - para usá-lo: npx serve

    - Design Pattern usado:

    - Primeira regra de negócio do jogo: estabelecer regras para que o jogador não saia dos limites do canvas

    - é necessário estar atento para que uma camada não tenha responsabilidades de outras ==> Isso dificulta uma eventual manutenção, já que se eu tiver um erro na camada de 
        apresentação, ele poderá, por exemplo, estar relacionado com o funcionamento de outra camada que não tem nada a ver com essa.


    - a cada linha escrita sempre questione: ""




*/