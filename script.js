console.log("secret console messege");

function birthdaySurprise(){
    let usersName = prompt("What's Your Name");
    
    let input = prompt("Is Today Your Birthday");
       
    if (input == "yes") {
      let age = prompt("What age are you today?");
      document.write("Happy Birthday ");
      document.write(usersName);
      document.write("!! If you sign up to our news letter you can recive a " + age + "% Discount on your next purchase");
      
    }
     else if (input == "Yes") {
      let age = prompt("What age are you today?");
      document.write("Happy Birthday ");
      document.write(usersName);
      document.write("!! If you sign up to our news letter you can recive a " + age + "% Discount on your next purchase");;
    } 
     else if (input == "no"){
        let age = prompt("How old will you be on your next birthday?");
        document.write("That's to bad ");
        document.write(usersName);
        document.write(", come back on your "  + age + " birthday for a special surprise");
    }    
     else if (input == "No"){
        let age = prompt("How old will you be on your next birthday?");
        document.write("That's to bad ");
        document.write(usersName);
        document.write(", come back on your "  + age + " birthday for a special surprise");
    }    
     else if (input == "NO"){
        let age = prompt("How old will you be on your next birthday?");
        document.write("That's to bad ");
        document.write(usersName);
        document.write(", come back on your "  + age + " birthday for a special surprise");
    }    
     else if (input == "potato"){confirm("yummy");}
     else if (input == "Potato"){confirm("Yummy");}
     
     else if (input == ""){
        alert("Please submit an answer " +usersName);
        birthdaySurprise()
    }

    else if (input == null){
        alert("Please submit an answer " +usersName);
        birthdaySurprise()
    }
    else {document.write("Answer not in database, please try again");
    }
}
