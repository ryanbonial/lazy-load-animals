function animalPicker(alwaysInclude = ['emu', 'eagle'])  {
  return [...alwaysInclude.map(animal => `* ${animal}`), 'giraffe', 'penguin', '🐶 dog']
}

export default animalPicker;