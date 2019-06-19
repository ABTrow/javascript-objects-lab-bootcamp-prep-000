var recipes = {eggs: "2 large", flour: "3 cups", butter: "4 pats"}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}
function 