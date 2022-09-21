const array =["Hello", "Good Day", "YourWelcome", "hotdog", "hamburgers"] , object = {}

array.forEach(world => world.split('').forEach(leeter => object[leeter] = (object[leeter] || 0)+1));
console.log(object)
