console.log("secret console messege");

let usersName = prompt("What's Your Name")

let input = prompt("Is Today Your Birthday");
    
if (input == "yes") {
      document.write("Happy Birthday ");
      document.write(usersName);
      document.write("!! If you sign up to our news letter you can recive Yearly Birthday Discounts");
    }
     else if (input == "Yes") {
        document.write("Happy Birthday ");
        document.write(usersName);
        document.write("!! If you sign up to our news letter you can recive Yearly Birthday Discounts");
    } 
     else if (input == "YES") {
        document.write("Happy Birthday ");
        document.write(usersName);
        document.write("!! If you sign up to our news letter you can recive Yearly Birthday Discounts");
    }
     
    else if (input == "no"){
        document.write("That's to bad ");
        document.write(usersName);
        document.write(", come back on your birthday for a special surprise");
    } 
     else if (input == "No"){
        document.write("That's to bad ");
        document.write(usersName);
        document.write(", come back on your birthday for a special surprise");
    }    
     else if (input == "NO"){
        document.write("That's to bad ");
        document.write(usersName);
        document.write(", come back on your birthday for a special surprise");
    }    
     else if (input == "potato"){confirm("yummy");}
     else if (input == "Potato"){confirm("Yummy");}
     
     else if (input == ""){
        document.write("Please submit an answer ");
        document.write(usersName);
    }

     else {document.write("Answer not in database, please try again");
    }

