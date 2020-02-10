// funcao implementada seguindo o design pattern Factory(retorna uma variavel, objeto, função,)
// A função abaixo deve funcionar como módulo tanto no navegador quanto no node.js(tudo isso pela adição do "export default")
export default function createKeyboardListener(document) { // Essa função está ligada a camada de input, mas não na de jogo
    const state = {
        observers: [],

    }
    
    function subscribe(observerFunction){ // forma de registrar um observer dentro de um subject.
        //console.log(`Subscribed`);
        state.observers.push(observerFunction);
    }

    function notifyAll( command ){ // notifica os observers quando o for necessário
        //console.log(`Notifying ${state.observers.length} observers`);

        for(const observerFunction of state.observers){ // qualquer função pode ser passada aqui
            observerFunction(command); // pega a função e introduz o parametro command
        }


    }

    document.addEventListener('keydown', handleKeydown);

    function handleKeydown(event) {
        const keyPressed = event.key;
        const command = {
            playerId: 'player1', 
            bombId: 'bomb1',
            keyPressed
        }
        notifyAll(command); // toda vez que uma tecla for pressionada os observers serão notificados

    }

    return {
        subscribe

    }

}

// Estagio 2 de desacoplamento.
// document.addEventListener('keydown', handleKeydown);
// function handleKeydown(event) {
//     console.log(event.key);
//     const keyPressed = event.key; // De quem é esse código? R: aparentemente essa linha é uma das responsabilidades da camada de input.
//    
//     // OBS.: ao fazer da forma abaixo estou misturando responsabilidades(NÃO FAÇA ISSO) das camadas
//     /* NÃO FAZER DESSA FORMA 
//  
//     const player = game.players[currentPlayerId];
//
//     // Abaixo, a camada de input está misturada com a de jogo, que é quem contem as regras de negócio dele.
//     // E aí nessas linhas fica muito difícil responder a pergunta: De quem é esse código? 
//     if(keyPressed === 'ArrowUp' && player.y - 1 >= 0){ // ao definir condições para que o jogador nao saia dos limites da tela estou criando uma regra de negócio para o jogo
//         player.y = player.y - 1;
//         return;
//     }
//    
//     if(keyPressed === 'ArrowRight' && player.x + 1 < screen.width){ // responsabilidades da camada de input e da camada do jogo, respectivamente
//         player.x = player.x + 1; // responsabilidade da camada do jogo.
//         return;
//     }
//    
//     if(keyPressed === 'ArrowDown' && player.y + 1 < screen.height){
//         player.y = player.y + 1;
//         return;
//     }
//    
//     if(keyPressed === 'ArrowLeft' && player.x - 1 >= 0){
//         player.x = player.x - 1;
//         return;
//     }
//
//     */
//    
//     // A forma abaixo está mais organizada
//     const command = {
//         playerId: 'player1',
//         keyPressed
//     }
//     game.movePlayer(command); // de quem é esse código? R: camada do jogo
// }