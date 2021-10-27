rdoPersonalityType.onchange=function(){
  let userChoice = $("input[name=rdoPersonalityType]:checked").prop("value")
  if (rdoPersonalityType.value == 0)
    lblPrompt2.value = (`I would agree that you are a ${userChoice} person too!`)
  else if (rdoPersonalityType.value == 1)
    lblPrompt2.value = (`I would agree that you are a ${userChoice} person too!`)
  else if (rdoPersonalityType.value == 2)
    lblPrompt2.value = (`I would agree that you are a ${userChoice} person too!`)
  else (rdoPersonalityType.value == 3)
    lblPrompt2.value = (`I would agree that you are a ${userChoice} person too!`)
}

btnFavExercises.onclick = function() {
  ChangeForm(favExercises)
}




