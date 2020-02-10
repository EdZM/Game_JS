/*
    Jogo multiplayer feito em Java Script 

    - Pense no jogo de forma abstrata(com propriedades) e não de forma aplicada a uma tela ou canvas!

    - A ideia do jogo é simples:

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

    - Design Patterns usados: - Observer: 
                                -> define uma dependência um-para-muitos entre objetos de modo que 
                                   quando um objeto(subject) muda o estado, todos seus dependentes(observer) são notificados e 
                                   atualizados automaticamente. Basicamente, quando o subject acha necessário ele envia as informações
                                   para os observers que estiverem "interessados" em manipulá-las.
                                
                                -> O design pattern observer pode não ser muito aconselhável quando houver apenas 1 observer
                                
                                -> Acrescentar mais observers basicamente não causa impacto no código existente



                            - Factory: nele tenho uma função que quando executada retorna um objeto/instancia pronto para ser manipulado/usado.
                                       Será usado para isolar a camada do jogo.

    - Primeira regra de negócio(do jogo): estabelecer regras para que o jogador não saia dos limites do canvas

    - é necessário estar atento para que uma camada não tenha responsabilidades de outras ==> Isso dificulta uma eventual manutenção, já que se eu tiver um erro na camada de 
        apresentação, ele poderá, por exemplo, estar relacionado com o funcionamento de outra camada que não tem nada a ver com essa.
        Isso também dificulta eventuais testes, envio de informações para o backend, ...
        Portanto, sempre pense em modelagem, arquitetura de software na hora de codar um projeto, para que ele não fique um código ameba.

    - na implementação do jogo há o conceito de desacoplamento. E 3 estágios são visíveis aqui: (detalhe: nenhum é melhor que o outro)
        - Estágio 1: nele, há vários códigos de vários componentes misturados ao mesmo tempo. Usa-se esse estágio para apenas implementar um protótipo. 
                     Ele também é mais rapidamente implementado, e dá um panorama mais geral sobre a ideia do projeto, me permitindo perceber até coisas que eu não sei sobre ele.
                            
        - Estágio 2: aqui, apesar de os componentes estarem isolados, um conhece/chama estaticamente o outro. Esse é o que será usado no jogo    
        - Estágio 3: aqui, os componentes não se conhecem, porque não existe a declaração/chamada dentro dele


    - a cada linha escrita sempre questione: "de quem é esse código?" .Isso tem o intuito de me fazer perceber as divisórias do meu sistema ou os limites dos componentes e se um está acoplado ao outro ou quando isso acontece
        - Se a resposta a essa pergunta for sempre que o código/linha pertence sempre a uma mesma camada, estou gerando um código ameba
        - Caso eu não saiba a resposta a essa pergunta, então não tenho total compreensão da modelagem do meu código.

    
    - OBS.: Na checagem de colisão, pode-se fazer uma otimização usando QuadTree. Nela a checagem ocorre de colisão de um jogador com frutas que estiverem no mesmo quadrante(região) que ele

    ==> modularização do jogo e anotações sobre o backend e front end
    - JS + módulos === backend (não tem tela ou representação visual, mas sim estruturas, dados e informações ABSTRATAS, por isso deve-se pensar de forma abstrata)

    - ECMA script modules (ESM) 
            ==> disponivel por padrao nas ultimas versoes dos navegadores e do node.js
            - (sistema de módulos) forma de padronizar os sistemas de módulos dentro da linguagem
            - pesquisar bundlers (existem alguns que podem ser usados até para reduzir o numero de requisicoes http)

    *********CUIDADO com variáveis globais na hora de modularizar o código.
*/