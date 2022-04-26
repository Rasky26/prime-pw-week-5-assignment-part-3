console.log('***** Music Collection *****')

// Create an empty array for the `collection` variable
let collection = []

let thing = 'apple'

// Function that takes in an album title, the artist name, and the year
// published, creates an object containing that specific information,
// and adds it to the `collection` array.
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

// Function that takes in an array of albums and logs out each object
function showCollection(albums) {

    // Logs out the length of the current array
    console.log('The current array contains', albums.length, 'items.')

    // Loop through the array
    for (let album of albums) {

        // Log out the albums within that array
        console.log(`${album.title} by ${album.artist}, published in`, album.yearPublished)
    }
}

// Function that searches for an artist within the `collections` array
function findByArtist(artist) {
    
    // Initialize a blank array
    let filteredCollection = []

    // Loop through the collection array
    for (let ablum of collection) {

        // Check if the current album artist matches the search term
        if (ablum.artist === artist) {

            // If a match for the artist is found, add it to the output array
            filteredCollection.push(ablum)
        }
    }

    // Return the result
    return filteredCollection
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

// Call the `showCollection` function to log out the albums
showCollection(collection)

// Test that a search of 'Red Hot Chili Peppers' successfully
// returns an array of length two with both their albums
console.log(`Search for 'Red Hot Chili Peppers' returned:`, findByArtist('Red Hot Chili Peppers'))