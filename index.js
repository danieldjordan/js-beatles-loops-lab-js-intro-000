function theBeatlesPlay(musicians, instruments){
  var combined = [];

  for (var i = 0; i < musicians.length; i++){
    var combinedString = musicians[i] + " plays " + instruments[i]
    combined.push(combinedString)
  }
  return combined
}


function johnLennonFacts(facts){
  for(var i = 0; i < facts.length; i++){
    musicians[i] = musicians[i] + "!!!"
  }
  return facts
}
