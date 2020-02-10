export default function renderScreen(screen, game, requestAnimationFrame) {
    
    const context = screen.getContext('2d');
    context.fillStyle = 'white';
    context.clearRect(0, 0, 10, 10);

    for(const playerId in game.state.players){
        const player = game.state.players[playerId];
        context.fillStyle = 'black';
        context.fillRect(player.x, player.y, 1, 1);

    }

    for(const fruitId in game.state.fruits){
        const fruit = game.state.fruits[fruitId];
        context.fillStyle = 'green';
        context.fillRect(fruit.x, fruit.y, 1, 1);
    }
    

    // for(bombId in game.state.bombs){
    //     const bomb = game.state.bombs[bombId];
    //     context.fillStyle = 'red';
    //     context.fillRect(bomb.x, bomb.y, 1, 1);
    // }

    requestAnimationFrame(() => { // criei uma função anonima para que pudesse passar os parametros de renderScreen e chamá-la recursivamente.
        renderScreen(screen, game, requestAnimationFrame); 
    }); 
    // O uso de requestAnimatedFrame é uma forma mais otimizada para renderizar tudo 
    // Recurso do browser
    // É chamada toda vez que for possível
    // Quando a aba que contem o jogo renderizado está inativa, a frequencia de renderização do jogo cai bastante


}