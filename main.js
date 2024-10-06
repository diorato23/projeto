// const quoteStart = 'Don´t judge each day by the harvest you reap ';





// const quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am'
// const substring = 'green eggs and ham';

// const section = document.querySelector('section');
// const para1 = document.createElement('p');
// para1.textContent = quoteStart;
// section.appendChild(para1);

// section.innerHTML = ''

// Criando uma função com evento click no botão
// const button = document.querySelector('button');
// button.addEventListener('click', updateName);

// function updateName() {
//     const name = prompt("Enter a new name");
//     button.textContent = `Player 1: ${name}`

// }

// function createParagraph() {
//     const p = document.createElement('p');
//     p.textContent = 'You clicked the button!';
//     document.body.appendChild(p)

// }

// const buttons = document.querySelectorAll('button');

// for (const button of buttons) {
//     button.addEventListener('click', createParagraph)
// }

// let myString = 'Ryu+ken+Chun+Li+Cammy+Guile+Sakura+Sagat+Juri';

// let para1 = document.createElement('p')
// para1.textContent = `Array: ${myString}.`

// let para2 = document.createElement('p')
// para2.textContent = `The length of the array is ${myString.length}.`



// const section = document.querySelector('.preview');

// const quoteStart = "Don't judge each day by the harvest you reap ";
// const quoteEnd = " Don't edit the code below here";



// // section.innerHTML = ' ';
// const para1 = document.createElement('p');
// const para2 = document.createElement('p');
// para1.textContent = quoteStart;
// para2.textContent = quoteEnd;

// section.appendChild(para1);
// section.appendChild(para2);
// const checkBox = document.querySelector('input');
// const para = document.querySelector('p');
// let shoppingDone = false;

// checkBox.addEventListener('change', () => {
//     checkBox.disabled = true;
//     shoppingDone = true;
//     updateAllowance();
// });

// function updateAllowance() {
//     let childsAllowance;
//     if (shoppingDone === true) {
//         childsAllowance = 10;
//     } else {
//         childsAllowance = 5;
//     }

//     para.textContent = `Child has earned \$${childsAllowance} this week.`;
// }

// updateAllowance();

// const select = document.querySelector("select");
// const para = document.querySelector("p");

// select.addEventListener("change", setWeather);
// const div = document.querySelector('#div');
// const para1 = document.createElement('p');
// para1.textContent = quoteStart;
// section.appendChild(para1);

const tagDiv = document.querySelector('#div')

const select = ["russia", "brasil", "bélgica", "colômbia", 'China']

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)

}




function storyCoutry() {
    let select = document.querySelector('#country')
    const pContent = document.createElement('p');
    const pTitulo = document.createElement('p');
    div.appendChild(pTitulo)
    div.appendChild(pContent)



    for (let i = 0; i < select.length; i++) {
        const element = select[i];
    }

    let numPais = aleatorio(1, select.length + 1);



    if ( numPais === 1 ) {
        pTitulo.textContent = 'RUSSIA';
        pContent.textContent =
            "A cultura da Rússia, cujas raízes remontam aos primeiros eslavos orientais, é produto de uma sociedade multiétnica, embora dominada pelo idioma russo e pelo povo russo, que constitui a maioria da população. Há mais de 160 diferentes grupos étnicos e povos indígenas na Rússia.";
    } else if (numPais === 2) {
        pTitulo.textContent = 'BRASIL';
        pContent.textContent =
            "A Cultura Brasileira é resultado da miscigenação de diversos grupos étnicos que participaram da formação da população brasileira. A diversidade cultural predominante no Brasil é consequência também da grande extensão territorial e das características geradas em cada região do país. A cultura brasileira é representada pelo conjunto de tradições, manifestações culturais, costumes, culinária e religião dos povos que viveram no país. Embora não haja um consenso sobre a cultura brasileira, ela revela debates importantes sobre desigualdades sociais e criatividade cultural.";
    } else if ( numPais === 3) {
        pTitulo.textContent = 'BÉLGICA';
        pContent.textContent =
            "Cultura da Bélgica Cultura da Bélgica é muito rica em museus, prédios históricos e arte. Uma vez por ano tem um concurso de música chamado 'Koningin Elisabeth Wedstrijd', onde todos os anos um tipo de instrumento clássico é escolhido. Durante o verão, têm lugares muito festivais. Os mais conhecidos são: Werchter, Sfinks, Dour e Pukkelpop.";
    } else if ( numPais === 4) {
        pTitulo.textContent = 'COLÔMBIA';
        pContent.textContent =
            "La cultura de Colombia es rica y diversa, con características que incluyen12:Lenguas: Colombia es el segundo país más rico en biodiversidad del mundo y tiene una cultura majestuosa.Gastronomía: La comida colombiana es una fusión de varias culturas, incluyendo la española, la indígena y la africana.Artes: Cada región tiene su propia creatividad, música y tradiciones, con festivales y eventos culturales como el Carnaval de Barranquilla y el Festival de Flores de Medellín3.";
    } else if ( numPais === 5) {
        console.log('CHINA');
        console.log("NOT FOUND COD-404");
    } else {
        console.log("O random saiu da contagem do array");
    }

}
storyCoutry()