let grade = 51;
let gradeLetter;

switch(true){
    case grade >= 90:
        gradeLetter = "A"
        break;
    case grade >= 80:
        gradeLetter = "B"
        break;
    case grade >= 70:
        gradeLetter = "C"
        break;
    case grade >= 60:
        gradeLetter = "D"
        break;
    default:
        gradeLetter = "F";
}

console.log(gradeLetter)