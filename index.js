function theBeatlesPlay(musicians, instruments){
  var combined = [];

  for (var i = 0; i < musicians.length; i++){
    var combinedString = musicians[i] + " plays " + instruments[i]
    combined.push(combinedString)
  }
  return combined
}
