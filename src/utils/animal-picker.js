function animalPicker(alwaysInclude = 'emu')  {
  // return [...alwaysInclude.map(animal => `* ${animal}`), 'giraffe', 'penguin', '🐶 dog']
  return [alwaysInclude, 'giraffe', 'penguin', '🐶 dog']
}

export default animalPicker;