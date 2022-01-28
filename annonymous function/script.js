let a = function(str) { 
   str = str.split(" ").map(([firstChar, ...rest]) => firstChar.toUpperCase() + rest.join("").toLowerCase()).join(" ");
    console.log(str);
  }
  a("john smith");