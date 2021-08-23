function introduction(name){
    return `Hi, my name is ${name}.`;
}

console.log(introduction(`Zack`));

// console.log('Hello');

function introductionWithLanguage(name,language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional(name,language = 'JavaScript'){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

console.log(introductionWithLanguage(`Josh`,`Ember.js`));
console.log(introductionWithLanguageOptional('Zack'));
console.log(introductionWithLanguageOptional('Gracie','Python'));

