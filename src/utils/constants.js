export const LOGO_URL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1280px-IMDB_Logo_2016.svg.png'

export const WATCHLIST_URL = 'https://cdn-icons-png.flaticon.com/128/6748/6748737.png'

export const USER_URL = 'https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg'

export const SEARCH_URL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vector_search_icon.svg/945px-Vector_search_icon.svg.png'

export const OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_APP_TMDB_KEY
    }
};

export const SEARCH_ALL_URL = 'https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&page=1&query=';
export const SEARCH_MOVIE_URL = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=';
export const SEARCH_TV_URL = 'https://api.themoviedb.org/3/search/tv?include_adult=false&language=en-US&page=1&query=';
export const SEARCH_CELEB_URL = 'https://api.themoviedb.org/3/search/person?include_adult=false&language=en-US&page=1&query=';

export const data = [
    {
      "backdrop_path": "/fY3lD0jM5AoHJMunjGWqJ0hRteI.jpg",
      "id": 940721,
      "original_title": "ゴジラ-1.0",
      "overview": "Postwar Japan is at its lowest point when a new crisis emerges in the form of a giant monster, baptized in the horrific power of the atomic bomb.",
      "poster_path": "/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "Godzilla Minus One",
      "original_language": "ja",
      "genre_ids": [
        878,
        27,
        28
      ],
      "popularity": 519.198,
      "release_date": "2023-11-03",
      "video": false,
      "vote_average": 7.933,
      "vote_count": 593
    },
    {
      "backdrop_path": "/sI6uCeF8mUlZx22mFfHSi9W3XQ9.jpg",
      "id": 843527,
      "original_title": "The Idea of You",
      "overview": "40-year-old single mom Solène begins an unexpected romance with 24-year-old Hayes Campbell, the lead singer of August Moon, the hottest boy band on the planet.",
      "poster_path": "/Y5P4Q3q8nrruZ9aD3wXeJS2Plg.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "The Idea of You",
      "original_language": "en",
      "genre_ids": [
        10749,
        35,
        10402
      ],
      "popularity": 223.906,
      "release_date": "2024-03-16",
      "video": false,
      "vote_average": 7.4,
      "vote_count": 49
    },
    {
      "backdrop_path": "/9s9o9RT9Yj6nDuRJjnJm78WFoFl.jpg",
      "id": 1051896,
      "original_title": "Arcadian",
      "overview": "In a near future, normal life on Earth has been decimated. Paul and his two sons, Thomas and Joseph, have been living a half-life – tranquility by day and torment by night. Every night, after the sun sets, they face the unrelenting attacks of a mysterious and violent evil. One day, when Thomas doesn't return home before sundown, Paul must leave the safety of their fortified farm to find him. A nightmarish battle ensues that forces the family to execute a desperate plan to survive.",
      "poster_path": "/spWV1eRzlDxvai8LbxwAWR0Vst4.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "Arcadian",
      "original_language": "hr",
      "genre_ids": [
        878,
        53,
        27
      ],
      "popularity": 93.99,
      "release_date": "2024-04-12",
      "video": false,
      "vote_average": 6.702,
      "vote_count": 47
    },
    {
      "backdrop_path": "/hl7Z68n9MeTHYpFRmoKy5I8FPCq.jpg",
      "id": 225120,
      "original_name": "A Man in Full",
      "overview": "Facing relentless foes and sudden bankruptcy, an Atlanta real estate tycoon must claw his way back to the top when his empire begins to crumble.",
      "poster_path": "/o6iM2JDs15CwEGEcNMUU8HtLivE.jpg",
      "media_type": "tv",
      "adult": false,
      "name": "A Man in Full",
      "original_language": "en",
      "genre_ids": [
        18
      ],
      "popularity": 223.357,
      "first_air_date": "2024-05-02",
      "vote_average": 7.2,
      "vote_count": 6,
      "origin_country": [
        "US"
      ]
    },
    {
      "backdrop_path": "/t3QB1Bq9o0NG4GZkD8MZOZLlOIR.jpg",
      "id": 223599,
      "original_name": "Shardlake",
      "overview": "The year is 1536. Lawyer Matthew Shardlake finds his life turned upside down when Thomas Cromwell sends him to investigate a suspicious death at the remote monastery of Scarnsea. Deception, deceit, and corruption are rife as it soon becomes clear that the murder is not the first. Shardlake is drawn into a web of lies that threatens not only his integrity but his life.",
      "poster_path": "/2sGolleKPiX4gCAuFWR2Yp7KZ1L.jpg",
      "media_type": "tv",
      "adult": false,
      "name": "Shardlake",
      "original_language": "en",
      "genre_ids": [
        18,
        80
      ],
      "popularity": 167.804,
      "first_air_date": "2024-05-01",
      "vote_average": 7.9,
      "vote_count": 9,
      "origin_country": [
        "GB"
      ]
    },
    {
      "backdrop_path": "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
      "id": 693134,
      "original_title": "Dune: Part Two",
      "overview": "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
      "poster_path": "/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "Dune: Part Two",
      "original_language": "en",
      "genre_ids": [
        878,
        12
      ],
      "popularity": 1523.958,
      "release_date": "2024-02-27",
      "video": false,
      "vote_average": 8.24,
      "vote_count": 3551
    },
    {
      "backdrop_path": "/bxmiZSQhQ581Y3vbEgpTtmEjt67.jpg",
      "id": 937287,
      "original_title": "Challengers",
      "overview": "Tennis player turned coach Tashi has taken her husband, Art, and transformed him into a world-famous Grand Slam champion. To jolt him out of his recent losing streak, she signs him up for a \"Challenger\" event — close to the lowest level of pro tournament — where he finds himself standing across the net from his former best friend and Tashi's former boyfriend.",
      "poster_path": "/H6vke7zGiuLsz4v4RPeReb9rsv.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "Challengers",
      "original_language": "en",
      "genre_ids": [
        18,
        10749
      ],
      "popularity": 483.935,
      "release_date": "2024-04-18",
      "video": false,
      "vote_average": 7.435,
      "vote_count": 300
    },
    {
      "backdrop_path": "/4d0tMAk49gqbVwgvtQjCriBwyb8.jpg",
      "id": 106379,
      "original_name": "Fallout",
      "overview": "The story of haves and have-nots in a world in which there’s almost nothing left to have. 200 years after the apocalypse, the gentle denizens of luxury fallout shelters are forced to return to the irradiated hellscape their ancestors left behind — and are shocked to discover an incredibly complex, gleefully weird, and highly violent universe waiting for them.",
      "poster_path": "/AnsSKR9LuK0T9bAOcPVA3PUvyWj.jpg",
      "media_type": "tv",
      "adult": false,
      "name": "Fallout",
      "original_language": "en",
      "genre_ids": [
        10759,
        10765,
        9648
      ],
      "popularity": 1277.487,
      "first_air_date": "2024-04-10",
      "vote_average": 8.434,
      "vote_count": 811,
      "origin_country": [
        "US"
      ]
    },
    {
      "backdrop_path": "/yt5LbZJkZdnSQiLo3t892l7Rhr7.jpg",
      "id": 574451,
      "original_title": "Turtles All the Way Down",
      "overview": "Aza confronts her potential for love, happiness, friendship, and hope while navigating an endless barrage of invasive, obsessive thoughts.",
      "poster_path": "/tDKlFXWCvIkP2Xl2nMdI49kzwZx.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "Turtles All the Way Down",
      "original_language": "en",
      "genre_ids": [
        18,
        10749
      ],
      "popularity": 35.496,
      "release_date": "2024-04-27",
      "video": false,
      "vote_average": 6.8,
      "vote_count": 2
    },
    {
      "backdrop_path": "/im2F02rDRz9CcMrlKuroeNBVyPu.jpg",
      "id": 207334,
      "original_name": "The Veil",
      "overview": "Two women play a deadly game of truth and lies on the road from Istanbul to Paris and London. One woman has a secret, the other a mission to reveal it before thousands of lives are lost. In the shadows, mission controllers at the CIA and French DGSE must put differences aside and work together to avert potential disaster.",
      "poster_path": "/6aM5Lyp3zUtPyc0WVofES6UrV06.jpg",
      "media_type": "tv",
      "adult": false,
      "name": "The Veil",
      "original_language": "en",
      "genre_ids": [
        18
      ],
      "popularity": 248.416,
      "first_air_date": "2024-04-30",
      "vote_average": 7.5,
      "vote_count": 13,
      "origin_country": [
        "US"
      ]
    },
    {
      "backdrop_path": "/5zmiBoMzeeVdQ62no55JOJMY498.jpg",
      "id": 126308,
      "original_name": "Shōgun",
      "overview": "In Japan in the year 1600, at the dawn of a century-defining civil war, Lord Yoshii Toranaga is fighting for his life as his enemies on the Council of Regents unite against him, when a mysterious European ship is found marooned in a nearby fishing village.",
      "poster_path": "/7O4iVfOMQmdCSxhOg1WnzG1AgYT.jpg",
      "media_type": "tv",
      "adult": false,
      "name": "Shōgun",
      "original_language": "en",
      "genre_ids": [
        18,
        10768
      ],
      "popularity": 1250.052,
      "first_air_date": "2024-02-27",
      "vote_average": 8.585,
      "vote_count": 642,
      "origin_country": [
        "US"
      ]
    },
    {
      "backdrop_path": "/fypydCipcWDKDTTCoPucBsdGYXW.jpg",
      "id": 653346,
      "original_title": "Kingdom of the Planet of the Apes",
      "overview": "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
      "poster_path": "/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "Kingdom of the Planet of the Apes",
      "original_language": "en",
      "genre_ids": [
        878,
        12,
        28
      ],
      "popularity": 667.893,
      "release_date": "2024-05-08",
      "video": false,
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "backdrop_path": "/tTGhI7lqd4frPS6XzR0d5gcXTMc.jpg",
      "id": 241259,
      "original_name": "Baby Reindeer",
      "overview": "When a struggling comedian shows one act of kindness to a vulnerable woman, it sparks a suffocating obsession which threatens to wreck both their lives.",
      "poster_path": "/f4Yg5yKoDTNdYScm01SC0TQE9ar.jpg",
      "media_type": "tv",
      "adult": false,
      "name": "Baby Reindeer",
      "original_language": "en",
      "genre_ids": [
        18
      ],
      "popularity": 790.065,
      "first_air_date": "2024-04-11",
      "vote_average": 7.925,
      "vote_count": 199,
      "origin_country": [
        "GB"
      ]
    },
    {
      "backdrop_path": "/aMpNvgWjPimLldhKgwtCt5NjLen.jpg",
      "id": 158300,
      "original_name": "Knuckles",
      "overview": "Knuckles embarks on a hilarious and action-packed journey of self-discovery as he agrees to train Wade as his protégé and teach him the ways of the Echidna warrior.",
      "poster_path": "/sK6Nr6KNUA4WlAHyNBTioz9FK87.jpg",
      "media_type": "tv",
      "adult": false,
      "name": "Knuckles",
      "original_language": "en",
      "genre_ids": [
        10759,
        10751,
        35
      ],
      "popularity": 945.042,
      "first_air_date": "2024-04-26",
      "vote_average": 7.732,
      "vote_count": 114,
      "origin_country": [
        "US"
      ]
    },
    {
      "backdrop_path": "/lA6KdSkCTxwzvqzPqxch997RabQ.jpg",
      "id": 560016,
      "original_title": "Monkey Man",
      "overview": "Kid is an anonymous young man who ekes out a meager living in an underground fight club where, night after night, wearing a gorilla mask, he is beaten bloody by more popular fighters for cash. After years of suppressed rage, Kid discovers a way to infiltrate the enclave of the city’s sinister elite. As his childhood trauma boils over, his mysteriously scarred hands unleash an explosive campaign of retribution to settle the score with the men who took everything from him.",
      "poster_path": "/4lhR4L2vzzjl68P1zJyCH755Oz4.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "Monkey Man",
      "original_language": "en",
      "genre_ids": [
        28,
        53,
        80
      ],
      "popularity": 244.827,
      "release_date": "2024-04-03",
      "video": false,
      "vote_average": 7.186,
      "vote_count": 287
    },
    {
      "backdrop_path": "/v5XyXZe8FADw8iHupB4L7QOAwH9.jpg",
      "id": 748783,
      "original_title": "The Garfield Movie",
      "overview": "Garfield, the world-famous, Monday-hating, lasagna-loving indoor cat, is about to have a wild outdoor adventure! After an unexpected reunion with his long-lost father – scruffy street cat Vic – Garfield and his canine friend Odie are forced from their perfectly pampered life into joining Vic in a hilarious, high-stakes heist.",
      "poster_path": "/zK2sFxZcelHJRPVr242rxy5VK4T.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "The Garfield Movie",
      "original_language": "en",
      "genre_ids": [
        16,
        35,
        10751
      ],
      "popularity": 541.244,
      "release_date": "2024-04-30",
      "video": false,
      "vote_average": 6.893,
      "vote_count": 14
    },
    {
      "backdrop_path": "/vmLiR6z8Jtd75hzI0W7aYoNsBjd.jpg",
      "id": 1155605,
      "original_title": "Fiesta en la Madriguera",
      "overview": "Raised in opulence and culture, 10-year-old Tochtli's lavish life contrasts with the darkness that seeps in from his father's criminal activities.",
      "poster_path": "/h5HdtvogDClJjNdtdIxGgOfaZjK.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "Down the Rabbit Hole",
      "original_language": "es",
      "genre_ids": [
        35,
        18
      ],
      "popularity": 58.869,
      "release_date": "2024-04-30",
      "video": false,
      "vote_average": 8,
      "vote_count": 1
    },
    {
      "backdrop_path": "/oMiKHO3H5RixfLsiU5Vumhlp5sj.jpg",
      "id": 948549,
      "original_title": "Love Lies Bleeding",
      "overview": "Reclusive gym manager Lou falls hard for Jackie, an ambitious bodybuilder headed through town to Las Vegas in pursuit of her dream. But their love ignites violence, pulling them deep into the web of Lou’s criminal family.",
      "poster_path": "/p7jyFWiLyHPttqYBFAlLJwtYTYH.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "Love Lies Bleeding",
      "original_language": "en",
      "genre_ids": [
        80,
        10749,
        53
      ],
      "popularity": 653.291,
      "release_date": "2024-03-08",
      "video": false,
      "vote_average": 6.982,
      "vote_count": 110
    },
    {
      "backdrop_path": "/aINel9503ompOlGKn4sIVMg09Un.jpg",
      "id": 838209,
      "original_title": "파묘",
      "overview": "After tracing the origin of a disturbing supernatural affliction to a wealthy family's ancestral gravesite, a team of paranormal experts relocates the remains—and soon discovers what happens to those who dare to mess with the wrong grave.",
      "poster_path": "/pQYHouPsDw32FhDLr7E3jmw0WTk.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "Exhuma",
      "original_language": "ko",
      "genre_ids": [
        9648,
        27,
        53
      ],
      "popularity": 220.468,
      "release_date": "2024-02-22",
      "video": false,
      "vote_average": 7.6,
      "vote_count": 69
    },
    {
      "backdrop_path": "/2GBiTa071pLSfPND1Iu7Pfk3fhy.jpg",
      "id": 1156966,
      "original_title": "Sei nell'anima",
      "overview": "The origin story of one of Italy's greatest rock stars, Gianna Nannini, who chased her dream despite obstacles from her family and the music industry.",
      "poster_path": "/tSrviCSaHBc0c8MHEydgr1eKXyB.jpg",
      "media_type": "movie",
      "adult": false,
      "title": "Beautiful Rebel",
      "original_language": "it",
      "genre_ids": [
        36,
        10402,
        18
      ],
      "popularity": 36.627,
      "release_date": "2024-05-02",
      "video": false,
      "vote_average": 6.1,
      "vote_count": 5
    }
  ]