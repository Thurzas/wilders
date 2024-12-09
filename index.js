import chalk from 'chalk';

const wilders = ["Arthur", "Bruno", "Cedric", "Emilien", "Erwan", "Grégoire", "Lucie", "Luigi", "Mariama","Mattia", "Maxime", "Mohamed .B", "Mohamed .K", "Roméo", "Thomas", "William", "Mathieu"];
const colors =["red", "green", "blue", "yellow", "whiteBright", "cyan", "white", "magenta","gray","bgGreen","redBright", "bgRed","bgYellow", "bgBlue", "bgCyan","bgGray","bgMagenta"];

console.log(wilders.length);
console.log(colors.length);

function select(participants)
{
    for(let i=0;i<participants;i++)
    {    
        let randomIndex = Math.floor(Math.random() * (wilders.length)); 
        try{
            console.log(chalk[colors[randomIndex]](`Joueur ${i+1}: ${wilders[randomIndex]}`));
        }
        catch(error)
        {
            console.log("chalk n'a pas cette couleur dans ses fonctions :",colors[randomIndex], randomIndex);
        }
        wilders.splice(randomIndex, 1); // on retire le nom du tableau pour éviter les doublons
        colors.splice(randomIndex, 1); // idem pour les couleurs
    }
}

select(17);