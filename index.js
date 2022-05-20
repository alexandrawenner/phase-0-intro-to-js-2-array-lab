// Write your solution here!

const cats = ['Milo','Otis','Garfield']



function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const appCats = [...cats, name];
    return appCats
}

function prependCat(name) {
    const prepCats = [name, ...cats];
    return prepCats
}

function removeLastCat() {
    const byeLastCat = cats.slice(0,2)
    return byeLastCat
}

function removeFirstCat() {
    const byeFirstCat = cats.slice(1)
    return byeFirstCat
}

