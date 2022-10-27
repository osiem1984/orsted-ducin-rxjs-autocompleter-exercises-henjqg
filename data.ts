export const names = [
  "Ruthie Schowalter",
  "Brody Hintz",
  "Sophia Yost",
  "Junior Williamson",
  "Denis Champlin",
  "Mason Dibbert",
  "Parker Tillman",
  "Gerard Gutkowski",
  "Joan Ankunding",
  "Kirk Welch",
  "Ford Erdman",
  "Mr. Berry Hayes",
  "Colten Schaefer",
  "Lorenza Nienow",
  "Brando Rodriguez",
  "Milo Block",
  "Katheryn Block",
  "Rollin Wehner",
  "Elaina Bogisich",
  "Roger Gerhold",
  "Elroy McKenzie",
  "Kiana Hoeger",
  "Moshe Wisozk",
  "Rosalyn Bogan Mrs.",
  "Tatyana Hyatt Ms.",
  "Kenyon Koss",
  "Reta Corwin",
  "Mr. Trey Goldner",
  "Bernard Ebert Miss",
  "Benjamin McGlynn",
  "Rowena Ortiz",
  "Jeanie Cummerata",
  "Merl Murazik",
  "Kristina Windler",
  "Anabelle Bartoletti",
  "Doug Metz",
  "Rosemarie Schiller",
  "Bethany Ortiz Dr.",
  "Geovanny Osinski",
  "Leon West",
  "Emanuel Ziemann",
  "Maryjane Doyle",
  "Margaretta Waelchi",
  "Wilson Rohan",
  "Lillian Boehm",
  "Dr. Seth Mitchell",
  "Alex Jacobi",
  "Darwin Waelchi",
  "Claudia Conn Mr.",
  "Donnell Dickens Ms.",
  "Gage Mueller",
  "Pietro Lebsack",
  "Chadd Dietrich",
  "Giovanni Parker Miss",
  "Kellie Friesen",
  "Eryn Beier",
  "Bernice Labadie",
  "Oda Hamill",
  "Antonietta Herman",
  "Clara Powlowski",
  "Mathias Breitenberg",
  "Terrell Hackett",
  "Natalia MacGyver",
  "Filiberto Roberts",
  "Roselyn Beer",
  "Bettie Rowe",
  "Mac Boyer",
  "Davonte Lind",
  "Herbert Jaskolski",
  "Zola Muller Ms.",
  "Libby Von",
  "Chelsie Johnston",
  "Braeden Ritchie",
  "Casimer Stoltenberg",
  "Crystal Effertz",
  "Lucinda Kessler",
  "Mrs. Pansy Crist",
  "Alice Kuhlman",
  "Bennett Jacobson",
  "Gage Ebert",
  "Imelda Ledner",
  "Jayde Witting",
  "Hermann Smith",
  "Malinda Stamm",
  "Miss Margret Rau",
  "Adaline Jerde",
  "Mr. Gina Greenholt",
  "Orlo Feil",
  "Zola Osinski",
  "Carleton McDermott",
  "Jacques Raynor Ms.",
  "Mrs. Turner Ankunding",
  "Clifford Quigley",
  "Della Stoltenberg",
  "Richard Gutmann",
  "Sibyl Haley",
  "Miss Deron Welch",
  "Remington Wintheiser",
  "George Yundt",
  "Gianni Nitzsche",
  "Bonnie Ziemann Dr.",
  "Dr. Lempi Dickens",
  "Winfield Cole",
  "Mariano D'Amore",
  "Jamarcus Williamson",
  "Adelbert Veum",
  "Virgil Kovacek",
  "Ian Hamill",
  "Nigel Dach",
  "Tierra Fahey",
  "Michale Kirlin Dr.",
  "Jermaine Walsh",
  "Vada Conroy",
  "Brant Considine",
  "Milo Keeling",
  "Seth Willms",
  "Beverly Bednar",
  "Casper Bashirian Mrs.",
  "Abdul Hane Miss",
  "Herta Jones",
  "Arnaldo Ratke",
  "Larry Sauer"
];

const filterData = (data: string[]) => 
	(phrase: string) => {
    let lcPhrase = phrase.toLowerCase();
    return data.filter(s => s.toLowerCase().indexOf(phrase) >= 0);
  }

export const getNames = filterData(names);
