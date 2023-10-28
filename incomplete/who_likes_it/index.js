function likes(names) {
  if (names.length === 0) return "no one likes this"
  if (names.length === 1) return `${names[0]} likes this`
  if (names.length === 2) return `${names[0]} and ${names[1]} like this`
  if (names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`
  const others = names.length - 2
  if (names.length >= 4) return `${names[0]}, ${names[1]} and ${others} others like this`
}

console.log(likes(["Alex", "Jacob", "Mark", "Max", "Peter"]))