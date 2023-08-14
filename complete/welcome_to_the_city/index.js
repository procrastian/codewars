const welcome = (name, city, state) => {
  const splitName = name.join(' ')
  return `Hello, ${splitName}! Welcome to ${city}, ${state}!`
}

console.log(welcome(['Laszlo', 'Cravensworth'], 'Pheonyix', 'Arizonya'))