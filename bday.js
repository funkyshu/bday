const name = process.argv[2];
const birthdate = process.argv[3];

const bday = new Date(birthdate);
const today = new Date();

if (bday.getMonth() === today.getMonth() && bday.getDate() === today.getDate()) {
    console.log("Happy Birthday, " + name);
    if (today.getFullYear() - bday.getFullYear() > 50) {
        console.log("You're over the hill now so just enjoy the ride!");
    } else {
        console.log("Quit lying about you're age!");
    }
} else {
    console.log("It's not your birthday. :/");
}
