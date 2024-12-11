const storyElement = document.getElementById('story');
const option1Button = document.getElementById('option1');
const option2Button = document.getElementById('option2');
const storyImage = document.getElementById('storyImage');

function resetButtons() {
    option1Button.style.display = "inline-block";
    option2Button.style.display = "inline-block";
}

function updateStory(text, imageUrl, option1Text, option2Text, option1Handler, option2Handler) {
    console.log("Atualizando história:", text); // Log para depuração
    storyElement.innerHTML = text; // Atualiza o texto da história
    storyImage.src = imageUrl; // Atualiza a imagem
    option1Button.textContent = option1Text; // Texto do botão 1
    option2Button.textContent = option2Text; // Texto do botão 2

    // Define ações para os botões
    option1Button.onclick = option1Handler || (() => {});
    option2Button.onclick = option2Handler || (() => {});
}

function updateTheme(theme) {
    document.body.className = ""; // Remove temas antigos
    document.body.classList.add(theme); // Adiciona o novo tema
}

function startGame() {
    document.body.className = ""; // Remove temas aplicados
    resetButtons();
    updateStory(
        "Escolha um dos dois caminhos:",
        "caminhos.webp",
        "Lago",
        "Casa Abandonada",
        chooseLake,
        chooseHouse
    );
}

function chooseLake() {
    updateTheme("lake-theme");
    updateStory(
        "Encontras uma chave no lago. Pegar a chave ou não pegar?",
        "chave.jpg",
        "Pegar a chave",
        "Não pegar",
        pickKey,
        skipKey
    );
}

function chooseHouse() {
    updateTheme("house-theme");
    updateStory(
        "Chegas a uma casa abandonada. Queres entrar ou seguir em frente?",
        "Casa_abandonada.jpg",
        "Entrar",
        "Seguir em frente",
        exploreHouse,
        startGame
    );
}

function pickKey() {
    updateStory(
        "Decides voltar para a casa abandonada. A chave pertence a lá.",
        "Casa_abandonada.jpg",
        "Abrir a porta",
        "Voltar",
        openDoor,
        startGame
    );
}

function skipKey() {
    updateStory(
        "Segues caminho pela floresta e encontras um grupo num culto.",
        "culto_clan.jpg",
        "Juntar-se ao culto",
        "Fugir",
        joinCult,
        fleeToHouse
    );
}

function openDoor() {
    updateStory(
        "Na casa, encontras um baú fechado. Abrir o baú ou subir ao primeiro andar da casa?",
        "bau.jpg",
        "Abrir o baú",
        "Subir ao primeiro andar",
        openChest,
        goUpstairs
    );
}

function openChest() {
    updateStory(
        "Encontras um bilhete falando sobre um culto. Procurar ou ignorar?",
        "bilhete_do_culto.jpg",
        "Procurar o culto",
        "Ignorar",
        searchCult,
        ignoreAndRest
    );
}

function goUpstairs() {
    updateStory(
        "No primeiro andar, encontras um quarto com uma cama e um bilhete sobre um culto. Procurar o culto ou descansar?",
        "bilhete_do_culto.jpg",
        "Procurar o culto",
        "Descansar",
        searchCult,
        ignoreAndRest
    );
}

function searchCult() {
    updateStory(
        "Segues as pistas e acabas no culto, onde és obrigado a juntar-te a eles.",
        "culto_clan.jpg",
        "Reiniciar",
        "",
        startGame,
        null
    );
}

function ignoreAndRest() {
    updateStory(
        "Ignoras e procuras um lugar para descansar.",
        "descanso.jpg",
        "Reiniciar",
        "",
        startGame,
        null
    );
}

function joinCult() {
    updateStory(
        "Agora estás preso ao culto para sempre.",
        "culto_clan.jpg",
        "Reiniciar",
        "",
        startGame,
        null
    );
}

function fleeToHouse() {
    updateStory(
        "Fojes para a casa abandonada que encontraste antes.",
        "Casa_abandonada.jpg",
        "Explorar a casa",
        "Seguir em frente",
        exploreHouse,
        startGame
    );
}

function exploreHouse() {
    updateStory(
        "Começas pelos quartos ou pela cozinha?",
        "qt ou cz.webp",
        "Quartos",
        "Cozinha",
        goToBedrooms,
        goToKitchen
    );
}

function goToBedrooms() {
    updateStory(
        "No andar de cima, encontras dois quartos. Vais entrar no quarto da porta vermelha ou no da porta azul?",
        "portas.jpg",
        "Porta Vermelha",
        "Porta Azul",
        exploreRedRoom,
        exploreBlueRoom
    );
}

function goToKitchen() {
    updateStory(
        "Na cozinha, encontras velas e vinho na mesa. Investigas ou vais para os quartos?",
        "mesa.avif",
        "Investigar",
        "Ir para os quartos",
        investigateKitchen,
        goToBedrooms
    );
}

function exploreRedRoom() {
    updateStory(
        "Sentes um cherio a enxofre muito forme e acabas por desmaiar.",
        "fim.jpg",
        "Reiniciar",
        "",
        startGame,
        null
    );
}

function exploreBlueRoom() {
    updateStory(
        "No quarto das paredes azuis, encontras apenas um beliche. Queres descansar em cima ou em baixo?",
        "beliche.webp",
        "Descansar em cima",
        "Descansar em baixo",
        sleepOnTop,
        sleepOnBottom
    );
}

function sleepOnTop() {
    updateStory(
        "Tens uma boa noite de sono e acordas revigorado.",
        "dormir-para-poder-vivir.jpeg",
        "Reiniciar",
        "",
        startGame,
        null
    );
}

function sleepOnBottom() {
    updateStory(
        "Uma aranha pica-te o dedo mindinho do pé, e morres de forma inesperada.",
        "aranha.jpg",
        "Reiniciar",
        "",
        startGame,
        null
    );
}

function investigateKitchen() {
    updateStory(
        "Descobres pistas que ligam a casa ao culto. Vais investigar mais ou sair?",
        "bilhete_do_culto.jpg",
        "Investigar Mais",
        "Sair",
        searchCult,
        startGame
    );
}

// Inicializar o jogo ao carregar a página
startGame();