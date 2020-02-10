// É necessario que a camada do jogo saiba reconhecer e definir sua dimensão
// Pense no jogo de forma abstrata e não de forma a pensar na execução
// Exemplo de implementação usando o design pattern Factory

export default function createGame(){
    
    console.log(screen); // sem qualquer alteração relacionada a variavel global screen, deverá aparecer um log informando que a tela disponivel é do tamanho do monitor do pc
                         // ou melhor dizendo, um log mostrando o conteudo de window.screen. Portanto, CUIDADO com variaveis globais   
    
    const state = { // não esqueça que state é um objeto
        players: {
            // 'player1':{ x: 1, y: 1 }, players declarados estaticamente
            // 'player2':{ x: 9, y: 9 },
                                
        },
    
        fruits:{
            //'fruit1':{ x: 3, y: 1 },
        
        },
        
        bombs: {
            //'bomb1':{x: 0, y: 0},
        },

        screen: { // com a adição da variavel screen e mais alguns ajustes nas regras de negócio abaixo, o problema mostrado no log acima deve ser resolvido.
            width: 10,
            height: 10

        }
    }
    function addFruit(command) {
        const fruitId = command.fruitId;
        const fruitX = command.fruitX;
        const fruitY = command.fruitY;

        state.fruits[fruitId] = {
            x: fruitX, 
            y: fruitY,
        }

    }

    function removeFruit(command) {
        const fruitId = command.fruitId;

        delete state.fruits[fruitId];

    }


    function addPlayer(command) {
        const playerId = command.playerId;
        const playerX = command.playerX;
        const playerY = command.playerY;

        state.players[playerId] = {
            x: playerX, 
            y: playerY,
        }

    }

    function removePlayer(command) {
        const playerId = command.playerId;

        delete state.players[playerId];

    }

    function movePlayer(command){ // command é um objeto
        //console.log(`Moving ${command.playerId} with ${command.keyPressed}`); // para usar JS dentro de strings use `` (Template Strings)

        const acceptedMoves = {
            ArrowUp(player){// recurso do JS para reaproveitar esse nome 'ArrowUp' e usá-lo como chave do objeto
                            // para acessar isso no console do navegador: cole todo a logica do accepted moves, e teste: const movesUp = acceptedMoves.ArrowUp e depois digite: movesUp()                            
                if(player.y - 1 >= 0) {
                    //console.log('moving player up');
                    player.y = player.y - 1;
                    // return;
                }
            
            },
            ArrowRight(player) {
                if(player.x + 1 < state.screen.width){
                    //console.log('moving player right');
                    player.x = player.x + 1; 
                    // return;
                }
            
            },
            ArrowDown(player) {
                if(player.y + 1 < state.screen.height){
                    //console.log('moving player down');
                    player.y = player.y + 1;
                    // return;
                }
                
            },
            ArrowLeft(player) {
                if(player.x - 1 >= 0){
                    //console.log('moving player left');
                    player.x = player.x - 1;
                    // return;
                }
                
                
            },
            b(bombPlayer) { //teste para o caso de eu apertar a tecla b
                console.log(`${command.playerId} had pressed B. ${command.bombId} has been planted on position: ${player.x}, ${player.y}`);
                bombPlayer.x = player.x;
                bombPlayer.y = player.y;
                
                // return;
            }

        }
        
        //const bombPlayer = state.bombs[command.bombId];
        const playerId = command.playerId;
        const player = state.players[playerId];
        const keyPressed = command.keyPressed;
        
        const moveFunction = acceptedMoves[keyPressed]; // ex: acceptedMoves[ArrowUp] === acceptedMoves.ArrowUp
        
        if(player && moveFunction){ // se uma tecla valida for pressionada, mova o quadrado, caso contrario ignore a função de movimento
            moveFunction(player); // === acceptedMoves.ArrowUp(player)
            checkForFruitCollision(playerId); // irá checar se um único jogador movido recentemente pela função acima colidiu com as demais frutas.

            //checkForFruitCollision(); // Caso o número de jogadores seja muito grande, 
                                        // o número de verificações também será, já que a cada movimento de um único jogador, 
                                        // serão feitas verificações para todos os demais e isso é muito custoso.
            //return 
        }
        

        /* As regras de negócio abaixo foram movidas para o objeto acceptedMoves
        if( keyPressed === 'ArrowUp' && player.y - 1 >= 0){
            player.y = player.y - 1;
            return;
        }

        if(keyPressed === 'ArrowRight' && player.x + 1 < screen.width){ 
            player.x = player.x + 1; 
            return;
        }
        
        if(keyPressed === 'ArrowDown' && player.y + 1 < screen.height){
            player.y = player.y + 1;
            return;
        }
        
        if(keyPressed === 'ArrowLeft' && player.x - 1 >= 0){
            player.x = player.x - 1;
            return;
        }
        */
        
        function checkForFruitCollision(playerId) {
            
            const player = state.players[playerId];

            for(const fruitId in state.fruits){
                const fruit = state.fruits[fruitId];
                
                console.log(`checking ${playerId} and ${fruitId}`);
                if(player.x === fruit.x && player.y === fruit.y){
                    console.log(`COLLISION between ${playerId} and ${fruitId}`);
                    removeFruit({fruitId: fruitId});
                }
                                
            }
        }

    }
    
    return {
        // retorno dos métodos/objetos públicos da camada do jogo
        addFruit,
        removeFruit,
        addPlayer,
        removePlayer,
        movePlayer, // retorna uma instancia 
        state, // retorna o objeto state, agora alterado pela função movePlayer
    }
}
