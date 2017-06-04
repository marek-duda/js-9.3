var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.'
var dinosaur = 'triceratops'

var name = 'triceratops';
var nameUpperCased = name.toUpperCase();

var textCharsAfter = text.replace('Velociraptor', name.toUpperCase());

var partOfTextCharsAfter = textCharsAfter.slice(0,72);

console.log(partOfTextCharsAfter);