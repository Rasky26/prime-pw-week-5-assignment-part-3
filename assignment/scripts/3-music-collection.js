console.log('***** Music Collection *****')

// Create an empty array for the `collection` variable
let collection = []

function addToCollection(title, artist, yearPublished) {
    let record = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    }
    collection.push(record)
}

console.log(collection)

addToCollection('Bob', 'John', 1912)

console.log(collection)
