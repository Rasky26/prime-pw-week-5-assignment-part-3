console.log('***** Music Collection *****')

// Create an empty array for the `collection` variable
let collection = []

let thing = 'apple'

// Function that takes in an album title, the artist name, and the year
// published, creates an object containing that specific information,
// and adds it to the `collection` array.
function addToCollection(title, artist, yearPublished, tracksArray) {
    
    // Set a blank array to contain the track objects
    let tracks = []

    // Check if information exists in the `tracksArray` before
    // processing the informatioun into objects
    if (tracksArray) {

        // Loop through the array of track inforamtion
        for (let trackInfo of tracksArray) {

            // Define a new variable to store the track information
            // as an object
            let track = {
                number: trackInfo[0],
                name: trackInfo[1],
                length: trackInfo[2],
            }

            // Add that track object to the `tracks` array
            tracks.push(track)
        }
    
    }


    // Using the imput, create a `record` object
    let record = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: tracks,
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
        console.log(`\n\n${album.title} by ${album.artist}, published in`, album.yearPublished)

        // Loop through the tracks in the album
        for (let track of album.tracks) {

            // Log out the tracks to the console
            console.log(`${track.number}. ${track.name}: ${track.length}`)
        }
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

// Function that searches the collection array based on an input object's fields
function search(searchTerms=null) {

    // { artist: 'Ray Charles', year: 1957 }
    if (!searchTerms) {

        // Check that blank searches return the full collection
        return collection
    }

    // Set a blank array to contain valid search results
    let searchResults = []

    // Check the input for testing purposes
    console.log('The entered search terms are:', searchTerms)

    // Verify that the collection array can be accessed here
    console.log('Here is the collection:', collection)

    // If search terms are provided, loop over the whole collection to
    // look for matches
    for (let album of collection) {

        // For testing, log out the current album's artist and yearPublished
        console.log('The current artist is:', album.artist, 'with year:', album.yearPublished)

        // Use an AND statement to check if BOTH search terms exist
        // in the current album object
        if (
            (searchTerms.artist === album.artist) &&
            (searchTerms.year === album.yearPublished)) {

            // If not track's `name` search is passed, just add the full album
            if (!searchTerms.trackName) {

                // If a valid match is found, add that object to the `searchResult`
                // output array
                searchResults.push(album)
            }

            // Otherwise, if a track name is passed in, find that specific track's index
            // and add the artist and that specific track to the `searchRetults` array
            else {

                // Loop through the track names to see if the track
                // search term matches
                for (let track of album.tracks) {

                    // Use an `if` statement to check if the track name matches
                    if (searchTerms.trackName === track.name) {

                        // Restructure the album object to only return the specific
                        // track that was searched
                        let filteredTrackResult = {
                            title: album.title,
                            artist: album.artist,
                            yearPublished: album.yearPublished,
                            tracks: track,
                        }

                        // Add that object to the `searchResults` array
                        searchResults.push(filteredTrackResult)
                    }
                }
            }

            // Check if ANY valid results exist in the `searchResult` array.
            // If there are none, that means the `trackName` search returned
            // nothing. Default to returning the full album.
            if (!searchResults.length) {

                // Push the album to the `searchResults` array
                searchResults.push(album)
            }
        }
    }

    return searchResults
}

// Check that the collection array is empty
console.log('Starting with an empty `collection` array:', collection)

// Add music to the collection - six in total
console.log('Album added:', addToCollection(
    'An Awesome Wave',
    'Alt J',
    2012,
    [ // Track information
        [1, "Intro", '2:37'],
        [2, '"❦" (The Ripe & Ruin)', '1:12'],
        [3, "Tessellate", '3:02'],
        [4,	"Breezeblocks",	'3:47'],
        [5,	'"❦" (Guitar)', '1:17'],
        [6,	"Something Good", '3:38'],
        [7,	"Dissolve Me", '4:00'],
        [8,	"Matilda", '3:48'],
        [9,	"Ms", '3:58'],
        [10, "Fitzpleasure", '3:39'],
        [11, '"❦" (Piano)', '0:53'],
        [12, "Bloodflood", '4:09']
    ])
)
console.log('Album added:', addToCollection(
    'Life in Cartoon Motion',
    'Mika',
    2007,
    [ // Track information
        [1, "Grace Kelly", '3:07'],
        [2, "Lollipop", '3:03'],
        [3, "My Interpretation", '3:35'],
        [4, "Love Today", '3:55'],
        [5, "Relax, Take It Easy", '3:45'],
        [6, '"Ring Ring" (contains a prelude to "Any Other World" at the end)', '3:37'],
        [7,	"Any Other World", '4:19'],
        [8,	"Billy Brown", '3:14'],
        [9,	"Big Girl (You Are Beautiful)", '4:08'],
        [10, "Stuck in the Middle", '4:08'],
        [11, "Erase", '3:38'],
        [12, "Happy Ending", '4:45'],
        [13, '"Over My Shoulder" (hidden track)', '4:45']
    ])
)
console.log('Album added:', addToCollection(
    'Stadium Arcadium',
    'Red Hot Chili Peppers',
    2006,
    [ // Track information
        [1, "Dani California", '4:42'],
        [2, "Snow (Hey Oh)", '5:34'],
        [3, "Charlie", '4:37'],
        [4, "Stadium Arcadium", '5:15'],
        [5,	"Hump de Bump",	'3:33'],
        [6,	"She's Only 18", '3:25'],
        [7,	"Slow Cheetah",	'5:19'],
        [8,	"Torture Me", '3:44'],
        [9,	"Strip My Mind", '4:19'],
        [10, "Especially in Michigan", '4:00'],
        [11, "Warlocks", '3:25'],
        [12, "C'mon Girl", '3:48'],
        [13, "Wet Sand", '5:09'],
        [14, "Hey", '5:39'],
        [15, "Desecration Smile", '5:01'],
        [16, "Tell Me Baby", '4:07'],
        [17, "Hard to Concentrate", '4:01'],
        [18, "21st Century", '4:22'],
        [19, "She Looks to Me", '4:06'],
        [20, "Readymade", '4:30'],
        [21, "If", '2:52'],
        [22, "Make You Feel Better", '3:52'],
        [23, "Animal Bar", '5:24'],
        [24, "So Much I", '3:44'],
        [25, "Storm in a Teacup", '3:45'],
        [26, "We Believe", '3:36'],
        [27, "Turn It Again", '6:06'],
        [28, "Death of a Martian", '4:24']
    ])
)
console.log('Album added:', addToCollection(
    'Californication',
    'Red Hot Chili Peppers',
    1999,
    [ // Track information
        [1, "Around the World", '3:58'],
        [2, "Parallel Universe", '4:30'],
        [3, "Scar Tissue", '3:37'],
        [4, "Otherside", '4:15'],
        [5, "Get on Top", '3:18'],
        [6,	"Californication", '5:21'],
        [7, "Easily", '3:51'],
        [8, "Porcelain", '2:43'],
        [9, "Emit Remmus", '4:00'],
        [10, "I Like Dirt", '2:37'],
        [11, "This Velvet Glove", '3:45'],
        [12, "Savior", '4:52'],
        [13, "Purple Stain", '4:13'],
        [14, "Right on Time", '1:52'],
        [15, "Road Trippin'", '3:25']
    ])
)
console.log('Album added:', addToCollection(
    'Ga Ga Ga Ga Ga',
    'Spoon',
    2007,
    [ // Track information
        [1, "Don't Make Me a Target", '3:55'],
        [2, "The Ghost of You Lingers", '3:34'],
        [3, "You Got Yr. Cherry Bomb", '3:08'],
        [4, "Don't You Evah", '3:36'],
        [5, "Rhthm [sic] & Soul", '3:30'],
        [6, "Eddie's Ragga", '3:39'],
        [7, "The Underdog", '3:42'],
        [8, "My Little Japanese Cigarette Case", '3:03'],
        [9, "Finer Feelings", '4:54'],
        [10, "Black Like Me", '3:25']
    ])
)
console.log('Album added:', addToCollection(
    'Plans',
    'Death Cab for Cutie',
    2005,
    [ // Track information
        [1, "Marching Bands of Manhattan", '4:13'],
        [2, "Soul Meets Body", '3:51'],
        [3, "Summer Skin", '3:14'],
        [4, "Different Names for the Same Thing", '5:09'],
        [5, "I Will Follow You into the Dark", '3:09'],
        [6, "Your Heart Is an Empty Room", '3:39'],
        [7, "Someday You Will Be Loved", '3:11'],
        [8, "Crooked Teeth", '3:24'],
        [9, "What Sarah Said", '6:21'],
        [10, "Brothers on a Hotel Bed", '4:31'],
        [11, "Stable Song", '3:42']
    ])
)

// Verify that all six albums were successfully added to the array
console.log('Should contain 6-total albums:', collection)

// Call the `showCollection` function to log out the albums
showCollection(collection)

// Test that a search of 'Red Hot Chili Peppers' successfully
// returns an array of length two with both their albums
console.log(`Search for 'Red Hot Chili Peppers' returned:`, findByArtist('Red Hot Chili Peppers'))

// Test that a blank array is returned when an artist that
// is not in the `collections` array is searched
console.log(`Search for 'White Stripes' should return blank array:`, findByArtist('White Stripes'))

// Test that a blank search returns the full collection of albums
console.log('Return complete collection:', search())

// Test that a valid search returns the expected album
console.log('Should return one RHCP album:', search(
    {artist: 'Red Hot Chili Peppers',
    year: 1999,}
    )
)

// Test the updated `search` function to see if it provides the
// valid artist information and ONLY the specific track
// specified in the search
console.log('This should give the artist and JUST ONE track', search(
    {artist: 'Red Hot Chili Peppers',
    year: 1999,
    trackName: "Road Trippin'",}
    )
)

// Test that the full album is added if an invalid `trackName` search
// term is supplied
console.log('The wrong track name will return the full album information', search(
    {artist: 'Red Hot Chili Peppers',
    year: 1999,
    trackName: "Road Trippin?",}
    )
)