const actionMovies = [
        {
            id: 634649,
            title: "Spider-Man: No Way Home",
            posterPath: "/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg",
            backdropPath: "/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
            genres: ["Action", "Adventure", "Science Fiction"],
            overview: "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
            tagline: "The Multiverse unleashed.",
            releaseDate: "2021-12-15"
        },
        {
            id: 283995,
            title: "Guardians of the Galaxy Vol. 2",
            posterPath: "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
            backdropPath: "/aJn9XeesqsrSLKcHfHP4u5985hn.jpg",
            genres: ["Action","Adventure","Science Fiction", "Comedy"],
            overview: "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
            tagline: "Obviously.",
            releaseDate: "2017-04-19"
        },
        {
            id: 675353,
            title: "Sonic the Hedgehog 2",
            posterPath: "/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
            backdropPath: "/yEQqrW61rwNuVRHTjgHOAU4dXNE.jpg",
            genres: ["Action", "Adventure", "Family", "Comedy"],
            overview:  "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
            tagline: "Welcome to the next level.",
            releaseDate: "2022-04-08"
        },
        {
            id: 458156,
            title: "John Wick: Chapter 3 - Parabellum",
            posterPath: "/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
            backdropPath: "/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg",
            genres: ["Action", "Thriller", "Crime"],
            overview: "Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin's guild, the High Table, John Wick is excommunicado, but the world's most ruthless hit men and women await his every turn.",
            tagline: "Every action has consequences.",
            releaseDate: "2019-05-15"
        },
        {
            id: 19995,
            title: "Avatar",
            posterPath: "/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
            backdropPath: "/vL5LR6WdxWPjLPFRLe133jXWsh5.jpg",
            genres: ["Action", "Adventure", "Fantasy", "Science Fiction"],
            overview: "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
            tagline: "Enter the world of Pandora.",
            releaseDate: "2009-12-15"
        },
        {
            id: 324552,
            title: "John Wick: Chapter 2",
            posterPath: "/hXWBc0ioZP3cN4zCu6SN3YHXZVO.jpg",
            backdropPath: "/r17jFHAemzcWPPtoO0UxjIX0xas.jpg",
            genres: ["Action", "Thriller", "Crime"],
            overview: "John Wick is forced out of retirement by a former associate looking to seize control of a shadowy international assassins' guild. Bound by a blood oath to aid him, Wick travels to Rome and does battle against some of the world's most dangerous killers.",
            tagline: "Never stab the devil in the back.",
            releaseDate: "2017-02-08"
        },
        {
            id: 299536,
            title: "Avengers: Infinity War",
            posterPath: "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
            backdropPath: "/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg",
            genres: ["Action", "Adventure", "Science Fiction"],
            overview: "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
            tagline: "An entire universe. Once and for all.",
            releaseDate: "2018-04-25"
        },
        {
            id: 718930,
            title: "Bullet Train",
            posterPath: "/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg",
            backdropPath: "/y2Ca1neKke2mGPMaHzlCNDVZqsK.jpg",
            genres: ["Action", "Comedy", "Thriller"],
            overview: "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.",
            tagline: "The end of the line is just the beginning.",
            releaseDate: "2022-07-03"
        },
        {
            id: 335787,
            title: "Uncharted",
            posterPath: "/rJHC1RUORuUhtfNb4Npclx0xnOf.jpg",
            backdropPath: "/fwrqW8Lp5VQuppFrODd4iJ8LySE.jpg",
            genres: ["Action", "Adventure"],
            overview: "A young street-smart, Nathan Drake and his wisecracking partner Victor “Sully” Sullivan embark on a dangerous pursuit of “the greatest treasure never found” while also tracking clues that may lead to Nathan's long-lost brother.",
            tagline: "Fortune favors the bold.",
            releaseDate: "2022-02-10"
        },
        {
            id: 324857,
            title: "Spider-Man: Into the Spider-Verse",
            posterPath: "/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
            backdropPath: "/qGQf2OHIkoh89K8XeKQzhxczf96.jpg",
            genres: ["Action", "Adventure", "Animation"],
            overview: "Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson \"Kingpin\" Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.",
            tagline: "More than one wears the mask.",
            releaseDate: "2018-12-14"
        }
]

export default actionMovies;