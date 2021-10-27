


hmbMenu.onclick=function(s){
  if (typeof(s) == "object"){
    return
  /* add a switch here to take the user to the form
     they chose. 
  */
  } else {
      switch(s) {
        case "Dessert Voting":
          ChangeForm(dessertVoting)
          break
        case "Describe You":
          ChangeForm(describeYou)
          break
        case "Fav Exercises":
          ChangeForm(favExercises)
          break
        case "Mobile Nav":
          ChangeForm(mobileNav)
          break
  }
}
}