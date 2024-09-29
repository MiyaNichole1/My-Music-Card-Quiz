const questions = {
    Pop: [
        {
            question: 'This Pop Artist is known for the hit "Umbrella"', 
            answers: [
                { text: "Beyonce", correct: false }, 
                { text: "Katy Perry", correct: false }, 
                { text: "Rihanna", correct: true }, 
                { text: "Willow Smith", correct: false }
            ] 
        },
        { 
            question: `This Pop Artist was Spotify's most streamed artist in 2023 with over 76 billion streams -`, 
            answers: [
                { text: "The Weeknd", correct: false }, 
                { text: "Taylor Swift", correct: true }, 
                { text: "Justin Bieber", correct: false }, 
                { text: "Dua Lipa", correct: false }
            ] 
        },
        {
            question: 'In 2009, this All American Girl released her hit single "Party In The USA"',
            answers: [
                {text: "Miley Cyrus", correct: true },
                {text: "SZA", correct: false },
                {text: "Ariana Grande", correct: false },
                {text: "Sabrina Carpenter", correct: false}
            ]
        },
        {
            question: '"Dark Horse" was released by this Decorated Pop Artist in 2013',
            answers: [
                {text: "Karol G", correct: false},
                {text: "Flo", correct: false},
                {text: "Shakira", correct: false},
                {text: "Katy Perry", correct: true}
            ]
        },
        {
            question: `This Pop Artist is still "Jenny From The Block"`,
            answers: [
                {text: "Jennifer Lopez", correct: true},
                {text: "Selena Gomez", correct: false},
                {text: "Pink", correct: false},
                {text: "Madonna", correct: false}
            ]
        },
        {
            question: `This Pop Star Mogul released his hit single "Hold On, We're Going Home" from his album, Nothing ` +
            `Was The Same`,
            answers: [
                {text: "The Weeknd", correct: false},
                {text: "Ed Sheeran", correct: false},
                {text: "Drake", correct: true},
                {text: "Eminem", correct: false}
            ]
        },
        {
            question: `This Pop Star won the first season of American Idol in 2002`,
            answers: [
                {text: "Pink", correct: false},
                {text: "Christina Camp", correct: false},
                {text: "Madonna", correct: false},
                {text: "Kelly Clarkson", correct: true}
            ]
        },
        {
            question: `This Pop Artist was born on October 8, 1985 in Honolulu Hawaii`,
            answers: [
                {text: "Usher", correct: false},
                {text: "Bruno Mars", correct: true},
                {text: "Ed Sheeran", correct: false},
                {text: "Selena Gomez", correct: false}
            ]
        },
        {
            question: `Billboard declared this Pop Star's song " Another Night" as the greatest pop song of all time`,
            answers: [
                {text: "Lifehouse", correct: false},
                {text: "Real McCoy", correct: true},
                {text: "Nickelback", correct: false},
                {text:"Donna Lewis", correct: false}
            ]
        },
        {
            question: `In the late year of 2014, this Pop Star released the summer jam "Time of Our Lives`,
            answers: [
                {text: "Usher", correct: false},
                {text: "Bad Bunny", correct: false},
                {text: "Pitbull", correct: true},
                {text: "Watts", correct: false}
            ]
        },
        
        
    ],
    Rock: [
        { 
            question: 'This Rock band was formed in London in 1962. They are known for many popular hits, such as " Paint it black"', 
            answers: [
                { text: "The Rolling Stones", correct: true }, 
                { text: "The Who", correct: false }, 
                { text: "The Beatles", correct: false }, 
                { text: "Nirvana", correct: false }
            ] 
        },
        {
            question: 'This English Rock band became arguably the most successful act of the 20th century',
            answers: [
                { text: "The Who", correct: false},
                { text: "The Beatles", correct: true},
                { text: "Led Zeppelin", correct: false},
                { text: "Pink Floyd", correct: false}
            ]
        },
        {
            question: 'In 1973 this Australian Rock band Sensation was formed',
            answers: [
                {text: "Pink Floyd", correct: false},
                {text: "Fleetwood Mac", correct: false},
                {text: "Eagles", correct: false},
                {text: "AC/DC", correct: true}
            ]
        },
        {
            question: 'This Rock Star was the lead vocalist in the Britsh Rock band "Queen"',
            answers: [
                {text: "David Bowie", correct: false},
                {text: "Paul McCartney", correct: false},
                {text: "Freddie Mercury", correct: true},
                {text: "Bob Dylan", correct: false}
            ]
        },
        {
            question: 'This Rock Mogul nicknamed "the Boss", has released 21 studio albums',
            answers: [
                {text: "Bruce Springsteen", correct: true},
                {text: "Van Halen", correct: false},
                {text: "Elvis Presley", correct: false},
                {text: "Stevie Nicks", correct: false},
            ]
        },
        {
            question: 'This Rock Mogul is often referred to as "King of Rock and Roll',
            answers: [
                {text: "Paul McCartney", correct: false},
                {text: "David Bowie", correct: false},
                {text: "Elvis Presley", correct: true},
                {text: "John Lennon", correct: false}
            ]
        },
        {
            question: ' He was the founder and leader of "The Beatles", and won seven Grammy Awards',
            answers: [
                {text: "John Lennon", correct: true},
                {text: "Cream", correct: false},
                {text: "Tom Peetty", correct: false},
                {text: "Neil Young", correct: false}
            ]
        },
        {
            question: 'Released the Pop-Metal classic "Slippery When Wet" in 1986 ',
            answers: [
                {text: "Bon Jovi", correct: true},
                {text: "Iron Maiden", correct: false},
                {text: "Deep Purple", correct: false},
                {text: "Rush", correct: false}
            ]
        },
        {
            question: 'The Rock Star was the lead vocalist of "The Red Hot Chili Peppers"',
            answers: [
                {text: "Eric Clapton", correct: false},
                {text: "Anthony Kiedis", correct: true},
                {text: "Rod Stewart", correct: false},
                {text: "Iron Maiden", correct: false}
            ]
        },
        {
            question: 'This well decorated Rock Sensation released the hit "Tears In Heaven" in 1992',
            answers: [
                {text: "Rod Stewart", correct: false},
                {text: "Jon Bon Jovi", correct: false},
                {text: "Eric Clapton", correct: true},
                {text: "Stevie Nicks", correct: false}
            ]
        }
        
    ],
    Country: [
        {
            question: 'On the day of January 21, 2006, this Country Music Star earned her first No. 1 hit, "Jesus Takes The Wheel"',
            answers: [
                { text: "Hilary Duff", correct: false },
                { text: "Dolly Parton", correct: false },
                { text: "Miley Cyrus", correct: false },
                { text: "Carrie Underwood", correct: true }
            ]
        },
        {
            question: 'This Country Music Artist released the song "Dirt Cheap" from his third studio album Leather!',
            answers: [
                { text: "Toby Keith", correct: false },
                { text: "Jelly Roll", correct: false },
                { text: "Chris Stapleton", correct: false },
                { text: "Cody Johnson", correct: true }
            ]
        },
        {
            question: `This Country Music Star's hit single "White Horse" was nominated for Single Of the Year at The 58th annual CMA awards`,
            answers: [
                { text: "Chris Stapleton", correct: true },
                { text: "Lainey Wilson", correct: false },
                { text: "Shaboozey", correct: false },
                { text: "Post Malone", correct: false }
              ]
        
        },
       {
            question: 'This Country Music Artist had the longest number one hit single on The Billboard Hot 100 in 2024',
            answers: [
                { text: "Keith Urban", correct: false},
                { text: "Shaboozey", correct: true},
                { text: "Morgan Wallen", correct: false},
                { text: "Hillary Lindsey", correct: false}
            ]
       },
       {
            question : 'This Country Mogul released their debut EP, The Way She Rides, in 2014',
            answers: [
                { text: "Luke Combs", correct: true},
                { text: "Zach Bryan", correct: false},
                { text: "Lainey Wilson", correct: false},
                { text: "Luke Rolls", correct: false}
            ]
       },
       {
           question : 'In August 1994 the single "Livin On Love" was dropped by this Country Music Legend',
           answers: [
                {text: "Keith Urban", correct: false},
                {text: "Alan Jackson", correct: true},
                {text: "Jenee Fleenor", correct: false},
                {text: "Brothers Osborne", correct: false}
           ]
       },
       {
           question: 'This Country Music Star show, "Reba" was hit series from 2001 - 2007',
           answers: [
                {text: "Lainey Wilson", correct: false},
                {text: "Christopher Rich", correct: false},
                {text: "Reba", correct: true},
                {text: "JoAnna Garcia", correct: false}
           ]
       },
       {
          question: 'This band released their 4th album, "Time, Tequilla, & Therapy"',
          answers: [
            {text: "One Direction", correct: false},
            {text: "BackStreet", correct: false},
            {text: "Nsync", correct: false},
            {text: "Old Dominion", correct: true}
           ]
       },
       {
        question: 'This Country Music Artist is known for her distinctive voice in the song "Tennessee Orange"',
        answers: [
            {text: "Megan Ann Moroney", correct: true},
            {text: "Jordan Davis", correct: false},
            {text: "Kourtney Woods", correct: false},
            {text: "Reba", correct: false}
        ]
       },
       {
        question: 'This Country Music Artist holds the record of the most CMA awards won ',
        answers: [
            {text: "Dolly Parton", correct: false},
            {text: "Loretta Lynn", correct: false},
            {text: "Alison Krauss", correct: false},
            {text: "Miranda Lambert", correct: true}
        ]
       }
     ]
};