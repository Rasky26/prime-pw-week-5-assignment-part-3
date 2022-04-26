console.log('***** Music Collection *****')

// Create an empty array for the `collection` variable
let collection = []

function addToCollection(title, artist, yearPublished) {
    
    // Using the imput, create a `record` object
    let record = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    }

    // Add the object to the `collection` array
    collection.push(record)

    // Return the newly created object
    return record
}

// Check that the collection array is empty
console.log('Starting with an empty `collection` array:', collection)

// Add music to the collection - six in total
console.log('Album added:', addToCollection('An Awesome Wave', 'Alt J', 2012))
console.log('Album added:', addToCollection('Life in Cartoon Motion', 'Mika', 2007))
console.log('Album added:', addToCollection('Stadium Arcadium', 'Red Hot Chili Peppers', 2006))
console.log('Album added:', addToCollection('Californication', 'Red Hot Chili Peppers', 1999))
console.log('Album added:', addToCollection('Ga Ga Ga Ga Ga', 'Spoon', 2007))
console.log('Album added:', addToCollection('Plans', 'Death Cab for Cutie', 2005))

// Verify that all six albums were successfully added to the array
console.log('Should contain 6-total albums:', collection)