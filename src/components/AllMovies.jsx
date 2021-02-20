let movieList = [
    {
        id: "447332",
        title: "A Quiet Place",
        poster:
            "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
        overview:
            "A family is forced to live in silence while hiding from creatures that hunt by sound.",
        release_date: 1522717200,
        genres: [],
    },
    {
        id: "82690",
        title: "Wreck-It Ralph",
        poster:
            "https://image.tmdb.org/t/p/w500/nsUAgWCxqbTD9wkKrv3nBGH2DVk.jpg",
        overview:
            "Wreck-It Ralph is the 9-foot-tall, 643-pound villain of an arcade video game named Fix-It Felix Jr., in which the game's titular hero fixes buildings that Ralph destroys. Wanting to prove he can be a good guy and not just a villain, Ralph escapes his game and lands in Hero's Duty, a first-person shooter where he helps the game's hero battle against alien invaders. He later enters Sugar Rush, a kart racing game set on tracks made of candies, cookies and other sweets. There, Ralph meets Vanellope von Schweetz who has learned that her game is faced with a dire threat that could affect the entire arcade, and one that Ralph may have inadvertently started.",
        release_date: 1351728000,
        genres: ["Family", "Animation", "Comedy", "Adventure"],
    },
    {
        id: "214756",
        title: "Ted 2",
        poster:
            "https://image.tmdb.org/t/p/w500/cj9gTID7b2risDJZGGTzR40jyS4.jpg",
        overview:
            "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
        release_date: 1435194000,
        genres: ["Comedy"],
    },
    {
        id: "8392",
        title: "My Neighbor Totoro",
        poster:
            "https://image.tmdb.org/t/p/w500/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg",
        overview:
            "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
        release_date: 577155600,
        genres: ["Fantasy", "Animation", "Family"],
    },
    {
        id: "150540",
        title: "Inside Out",
        poster:
            "https://image.tmdb.org/t/p/w500/lRHE0vzf3oYJrhbsHXjIkF4Tl5A.jpg",
        overview:
            "Growing up can be a bumpy road, and it's no exception for Riley, who is uprooted from her Midwest life when her father starts a new job in San Francisco. Like all of us, Riley is guided by her emotions - Joy, Fear, Anger, Disgust and Sadness. The emotions live in Headquarters, the control center inside Riley's mind, where they help advise her through everyday life. As Riley and her emotions struggle to adjust to a new life in San Francisco, turmoil ensues in Headquarters. Although Joy, Riley's main and most important emotion, tries to keep things positive, the emotions conflict on how best to navigate a new city, house and school.",
        release_date: 1433811600,
        genres: [],
    },
    {
        id: "445629",
        title: "Fighting with My Family",
        poster:
            "https://image.tmdb.org/t/p/w500/cVhe15rJLRjolunSWLBN6xQLyGU.jpg",
        overview:
            "Born into a tight-knit wrestling family, Paige and her brother Zak are ecstatic when they get the once-in-a-lifetime opportunity to try out for the WWE. But when only Paige earns a spot in the competitive training program, she must leave her loved ones behind and face this new cutthroat world alone. Paige's journey pushes her to dig deep and ultimately prove to the world that what makes her different is the very thing that can make her a star.",
        release_date: 1550102400,
        genres: ["Comedy"],
    },
    {
        id: "862",
        title: "Toy Story",
        poster:
            "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
        overview:
            "Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.",
        release_date: 815011200,
        genres: ["Animation", "Comedy", "Family", "Fantasy"],
    },
    {
        id: "260346",
        title: "Taken 3",
        poster:
            "https://image.tmdb.org/t/p/w500/vzvMXMypMq7ieDofKThsxjHj9hn.jpg",
        overview:
            "Ex-government operative Bryan Mills finds his life is shattered when he's falsely accused of a murder that hits close to home. As he's pursued by a savvy police inspector, Mills employs his particular set of skills to track the real killer and exact his unique brand of justice.",
        release_date: 1418688000,
        genres: ["Thriller", "Action"],
    },
    {
        id: "369972",
        title: "First Man",
        poster:
            "https://image.tmdb.org/t/p/w500/i91mfvFcPPlaegcbOyjGgiWfZzh.jpg",
        overview:
            "A look at the life of the astronaut, Neil Armstrong, and the legendary space mission that led him to become the first man to walk on the Moon on July 20, 1969.",
        release_date: 1539219600,
        genres: ["Documentary", "Documentary"],
    },
    {
        id: "482981",
        title: "Wild Rose",
        poster:
            "https://image.tmdb.org/t/p/w500/79THplH9WM7y3gRPYM4dcC0IRPw.jpg",
        overview:
            "A young Scottish singer, Rose-Lynn Harlan, dreams of making it as a country artist in Nashville after being released from prison.",
        release_date: 1555030800,
        genres: ["Drama"],
    },
    {
        id: "300668",
        title: "Annihilation",
        poster:
            "https://image.tmdb.org/t/p/w500/d3qcpfNwbAMCNqWDHzPQsUYiUgS.jpg",
        overview:
            "A biologist signs up for a dangerous, secret expedition into a mysterious zone where the laws of nature don't apply.",
        release_date: 1519257600,
        genres: [],
    },
    {
        id: "434555",
        title: "The Possession of Hannah Grace",
        poster:
            "https://image.tmdb.org/t/p/w500/hDDb0H0uJp2wjoJBbBHbKlYRbug.jpg",
        overview:
            "When a cop who is just out of rehab takes the graveyard shift in a city hospital morgue, she faces a series of bizarre, violent events caused by an evil entity in one of the corpses.",
        release_date: 1543449600,
        genres: ["Horror", "Drama"],
    },
    {
        id: "444090",
        title: "The Ash Lad: In the Hall of the Mountain King",
        poster:
            "https://image.tmdb.org/t/p/w500/uyJEfpAflLCkqn6PFHu9EHxmbI6.jpg",
        overview:
            "Espen “Ash Lad”, a poor farmer’s son, embarks on a dangerous quest with his brothers to save the princess from a vile troll known as the Mountain King – in order to collect a reward and save his family’s farm from ruin.",
        release_date: 1506646800,
        genres: ["Adventure", "Fantasy"],
    },
    {
        id: "8355",
        title: "Ice Age: Dawn of the Dinosaurs",
        poster:
            "https://image.tmdb.org/t/p/w500/cXOLaxcNjNAYmEx1trZxOTKhK3Q.jpg",
        overview:
            "Times are changing for Manny the moody mammoth, Sid the motor mouthed sloth and Diego the crafty saber-toothed tiger. Life heats up for our heroes when they meet some new and none-too-friendly neighbors – the mighty dinosaurs.",
        release_date: 1246237200,
        genres: ["Animation", "Comedy", "Family", "Adventure"],
    },
    {
        id: "1585",
        title: "It's a Wonderful Life",
        poster:
            "https://image.tmdb.org/t/p/w500/bSqt9rhDZx1Q7UZ86dBPKdNomp2.jpg",
        overview:
            "A holiday favourite for generations...  George Bailey has spent his entire life giving to the people of Bedford Falls.  All that prevents rich skinflint Mr. Potter from taking over the entire town is George's modest building and loan company.  But on Christmas Eve the business's $8,000 is lost and George's troubles begin.",
        release_date: -726883200,
        genres: ["Comedy"],
    },
    {
        id: "597",
        title: "Titanic",
        poster:
            "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
        overview:
            "101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. A young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi win third-class tickets aboard the ship. Rose tells the whole story from Titanic's departure through to its death—on its first and last voyage—on April 15, 1912.",
        release_date: 879811200,
        genres: ["Action", "Drama", "History"],
    },
    {
        id: "2320",
        title: "Executive Decision",
        poster:
            "https://image.tmdb.org/t/p/w500/m3CVqpSbvqvqNcY2dBjRQ44kN2l.jpg",
        overview:
            "Terrorists hijack a 747 inbound to Washington D.C., demanding the the release of their imprisoned leader. Intelligence expert David Grant (Kurt Russell) suspects another reason and he is soon the reluctant member of a special assault team that is assigned to intercept the plane and hijackers.",
        release_date: 826848000,
        genres: ["Action", "Adventure", "Drama", "Thriller"],
    },
    {
        id: "76203",
        title: "12 Years a Slave",
        poster:
            "https://image.tmdb.org/t/p/w500/xdANQijuNrJaw1HA61rDccME4Tm.jpg",
        overview:
            "In the pre-Civil War United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery. Facing cruelty as well as unexpected kindnesses Solomon struggles not only to stay alive, but to retain his dignity. In the twelfth year of his unforgettable odyssey, Solomon’s chance meeting with a Canadian abolitionist will forever alter his life.",
        release_date: 1382058000,
        genres: ["Drama", "History"],
    },
    {
        id: "419430",
        title: "Get Out",
        poster:
            "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
        overview:
            "Chris and his girlfriend Rose go upstate to visit her parents for the weekend. At first, Chris reads the family's overly accommodating behavior as nervous attempts to deal with their daughter's interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries lead him to a truth that he never could have imagined.",
        release_date: 1487894400,
        genres: ["Science Fiction"],
    },
    {
        id: "400535",
        title: "Sicario: Day of the Soldado",
        poster:
            "https://image.tmdb.org/t/p/w500/msqWSQkU403cQKjQHnWLnugv7EY.jpg",
        overview:
            "Agent Matt Graver teams up with operative Alejandro Gillick to prevent Mexican drug cartels from smuggling terrorists across the United States border.",
        release_date: 1530061200,
        genres: ["Action", "Crime", "Drama", "Thriller"],
    },
    {
        id: "228150",
        title: "Fury",
        poster:
            "https://image.tmdb.org/t/p/w500/pfte7wdMobMF4CVHuOxyu6oqeeA.jpg",
        overview:
            "Last months of World War II in April 1945. As the Allies make their final push in the European Theater, a battle-hardened U.S. Army sergeant in the 2nd Armored Division named Wardaddy commands a Sherman tank called 'Fury' and its five-man crew on a deadly mission behind enemy lines. Outnumbered and outgunned, Wardaddy and his men face overwhelming odds in their heroic attempts to strike at the heart of Nazi Germany.",
        release_date: 1413334800,
        genres: ["Crime", "Drama", "Thriller"],
    },
    {
        id: "1865",
        title: "Pirates of the Caribbean: On Stranger Tides",
        poster:
            "https://image.tmdb.org/t/p/w500/8fxendLObfOewRllxiM4X9Ey7S4.jpg",
        overview:
            "Captain Jack Sparrow crosses paths with a woman from his past, and he's not sure if it's love -- or if she's a ruthless con artist who's using him to find the fabled Fountain of Youth. When she forces him aboard the Queen Anne's Revenge, the ship of the formidable pirate Blackbeard, Jack finds himself on an unexpected adventure in which he doesn't know who to fear more: Blackbeard or the woman from his past.",
        release_date: 1305334800,
        genres: ["Adventure", "Action", "Fantasy"],
    },
    {
        id: "545377",
        title: "A Mero Hajur 3",
        poster:
            "https://image.tmdb.org/t/p/w500/aSTmvfXbjTLJO8Gevbk0KR0pkHu.jpg",
        overview: "Third installment in A Mero Hajur film series.",
        release_date: 1555030800,
        genres: ["Romance", "Drama"],
    },
    {
        id: "238",
        title: "The Godfather",
        poster:
            "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        overview:
            "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
        release_date: 69379200,
        genres: ["Thriller", "Action", "Crime", "Drama"],
    },
    {
        id: "68721",
        title: "Iron Man 3",
        poster:
            "https://image.tmdb.org/t/p/w500/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg",
        overview:
            "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
        release_date: 1366246800,
        genres: ["Documentary"],
    },
    {
        id: "76341",
        title: "Mad Max: Fury Road",
        poster:
            "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
        overview:
            "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order. There's Max, a man of action and a man of few words, who seeks peace of mind following the loss of his wife and child in the aftermath of the chaos. And Furiosa, a woman of action and a woman who believes her path to survival may be achieved if she can make it across the desert back to her childhood homeland.",
        release_date: 1431478800,
        genres: ["Action", "Adventure", "Science Fiction"],
    },
    {
        id: "269149",
        title: "Zootopia",
        poster:
            "https://image.tmdb.org/t/p/w500/hlK0e0wAQ3VLuJcsfIYPvb4JVud.jpg",
        overview:
            "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
        release_date: 1455148800,
        genres: ["Animation", "Adventure", "Family", "Comedy"],
    },
    {
        id: "156022",
        title: "The Equalizer",
        poster:
            "https://image.tmdb.org/t/p/w500/9u4yW7yPA0BQ2pv9XwiNzItwvp8.jpg",
        overview:
            "McCall believes he has put his mysterious past behind him and dedicated himself to beginning a new, quiet life. But when he meets Teri, a young girl under the control of ultra-violent Russian gangsters, he can’t stand idly by – he has to help her. Armed with hidden skills that allow him to serve vengeance against anyone who would brutalize the helpless, McCall comes out of his self-imposed retirement and finds his desire for justice reawakened. If someone has a problem, if the odds are stacked against them, if they have nowhere else to turn, McCall will help. He is The Equalizer.",
        release_date: 1411520400,
        genres: ["Action", "Thriller", "TV Movie"],
    },
    {
        id: "569104",
        title: "Madura Raja",
        poster:
            "https://image.tmdb.org/t/p/w500/1zR6dr7FXk3TPHeoS3LeaLsP30.jpg",
        overview:
            "It is the story which narrates the history of raja ,the story is about a don in madhura raja and his actions.",
        release_date: 1555030800,
        genres: ["Action", "Comedy", "Family", "Thriller"],
    },
    {
        id: "1724",
        title: "The Incredible Hulk",
        poster:
            "https://image.tmdb.org/t/p/w500/2nBpExDoInX3VreBsIm9qOTqXs8.jpg",
        overview:
            "Scientist Bruce Banner scours the planet for an antidote to the unbridled force of rage within him: the Hulk. But when the military masterminds who dream of exploiting his powers force him back to civilization, he finds himself coming face to face with a new, deadly foe.",
        release_date: 1213232400,
        genres: ["Science Fiction", "Action", "Adventure", "Drama"],
    },
    {
        id: "333339",
        title: "Ready Player One",
        poster:
            "https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg",
        overview:
            "When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.",
        release_date: 1522198800,
        genres: ["Adventure", "Science Fiction"],
    },
    {
        id: "78",
        title: "Blade Runner",
        poster:
            "https://image.tmdb.org/t/p/w500/vfzE3pjE5G7G7kcZWrA3fnbZo7V.jpg",
        overview:
            "In the smog-choked dystopian Los Angeles of 2019, blade runner Rick Deckard is called out of retirement to terminate a quartet of replicants who have escaped to Earth seeking their creator for a way to extend their short life spans.",
        release_date: 393814800,
        genres: ["Documentary"],
    },
    {
        id: "9714",
        title: "Home Alone 3",
        poster:
            "https://image.tmdb.org/t/p/w500/6uOadrCfle0n2LOOxHbgWEdnrm2.jpg",
        overview:
            "9-year-old Alex Pruitt is home alone with the chicken pox. Turns out, due to a mix-up among nefarious spies, Alex was given a toy car concealing a top-secret microchip. Now Alex must fend off the spies as they try break into his house to get it back.",
        release_date: 881884800,
        genres: ["Comedy", "Family"],
    },
    {
        id: "574370",
        title: "Lo dejo cuando quiera",
        poster:
            "https://image.tmdb.org/t/p/w500/k5LP414yqZSaRAZf9uVh1ufO2mN.jpg",
        overview: "",
        release_date: 1555030800,
    },
    {
        id: "484247",
        title: "A Simple Favor",
        poster:
            "https://image.tmdb.org/t/p/w500/5EJWZQ8dh99hfgXP9zAD5Ak5Hrn.jpg",
        overview:
            "Stephanie, a dedicated mother and popular vlogger, befriends Emily, a mysterious upper-class woman whose son Nicky attends the same school as Miles, Stephanie's son. When Emily asks her to pick Nicky up from school and then disappears, Stephanie undertakes an investigation that will dive deep into Emily's cloudy past.",
        release_date: 1535504400,
        genres: ["Thriller", "Crime", "Mystery", "Comedy", "Drama"],
    },
    {
        id: "343668",
        title: "Kingsman: The Golden Circle",
        poster:
            "https://image.tmdb.org/t/p/w500/34xBL6BXNYFqtHO9zhcgoakS4aP.jpg",
        overview:
            "When an attack on the Kingsman headquarters takes place and a new villain rises, Eggsy and Merlin are forced to work together with the American agency known as the Statesman to save the world.",
        release_date: 1505869200,
        genres: ["Action", "Adventure", "Comedy"],
    },
    {
        id: "150689",
        title: "Cinderella",
        poster:
            "https://image.tmdb.org/t/p/w500/ryKwNlAfDXu0do6SX9h4G9Si1kG.jpg",
        overview:
            "When her father unexpectedly passes away, young Ella finds herself at the mercy of her cruel stepmother and her daughters. Never one to give up hope, Ella's fortunes begin to change after meeting a dashing stranger in the woods.",
        release_date: 1426118400,
        genres: ["Animation"],
    },
    {
        id: "455207",
        title: "Crazy Rich Asians",
        poster:
            "https://image.tmdb.org/t/p/w500/1XxL4LJ5WHdrcYcihEZUCgNCpAW.jpg",
        overview:
            "An American-born Chinese economics professor accompanies her boyfriend to Singapore for his best friend's wedding, only to get thrust into the lives of Asia's rich and famous.",
        release_date: 1534294800,
        genres: ["Comedy", "Drama", "Romance"],
    },
    {
        id: "162069",
        title: "Doraemon: Nobita's Diary of the Creation of the World",
        poster:
            "https://image.tmdb.org/t/p/w500/989zACwuc4EiBUNA3Ul7bgMoh0O.jpg",
        overview:
            "Nobita was reading a picture book.In that he sees Adam and Eve disobeying god and eating the apple in the garden of Eden. Nobita comments that their descendants have to face many difficulties because of Adam and Eve's mistake. Then Doraemon reminds Nobita that he had to do his summer vacation research homework.",
        release_date: 794275200,
        genres: ["Animation"],
    },
    {
        id: "291805",
        title: "Now You See Me 2",
        poster:
            "https://image.tmdb.org/t/p/w500/A81kDB6a1K86YLlcOtZB27jriJh.jpg",
        overview:
            "One year after outwitting the FBI and winning the public’s adulation with their mind-bending spectacles, the Four Horsemen resurface only to find themselves face to face with a new enemy who enlists them to pull off their most dangerous heist yet.",
        release_date: 1464829200,
        genres: ["Action", "Comedy", "Thriller"],
    },
    {
        id: "285",
        title: "Pirates of the Caribbean: At World's End",
        poster:
            "https://image.tmdb.org/t/p/w500/cVFKkJ8Kcuf9zSUdUNB7iKOm4nh.jpg",
        overview:
            "Captain Barbossa, long believed to be dead, has come back to life and is headed to the edge of the Earth with Will Turner and Elizabeth Swann. But nothing is quite as it seems.",
        release_date: 1179536400,
        genres: ["Adventure", "Fantasy", "Action"],
    },
    {
        id: "316029",
        title: "The Greatest Showman",
        poster:
            "https://image.tmdb.org/t/p/w500/b9CeobiihCx1uG1tpw8hXmpi7nm.jpg",
        overview:
            "The story of American showman P.T. Barnum, founder of the circus that became the famous traveling Ringling Bros. and Barnum & Bailey Circus.",
        release_date: 1513728000,
        genres: ["Drama"],
    },
    {
        id: "427641",
        title: "Rampage",
        poster:
            "https://image.tmdb.org/t/p/w500/MGADip4thVSErP34FAAfzFBTZ5.jpg",
        overview:
            "Primatologist Davis Okoye shares an unshakable bond with George, the extraordinarily intelligent, silverback gorilla who has been in his care since birth.  But a rogue genetic experiment gone awry mutates this gentle ape into a raging creature of enormous size.  To make matters worse, it’s soon discovered there are other similarly altered animals.  As these newly created alpha predators tear across North America, destroying everything in their path, Okoye teams with a discredited genetic engineer to secure an antidote, fighting his way through an ever-changing battlefield, not only to halt a global catastrophe but to save the fearsome creature that was once his friend.",
        release_date: 1523494800,
        genres: ["Adventure"],
    },
    {
        id: "126889",
        title: "Alien: Covenant",
        poster:
            "https://image.tmdb.org/t/p/w500/zecMELPbU5YMQpC81Z8ImaaXuf9.jpg",
        overview:
            "Bound for a remote planet on the far side of the galaxy, the crew of the colony ship 'Covenant' discovers what is thought to be an uncharted paradise, but is actually a dark, dangerous world—which has a sole inhabitant: the 'synthetic', David, survivor of the doomed Prometheus expedition.",
        release_date: 1494291600,
        genres: ["Science Fiction"],
    },
    {
        id: "137113",
        title: "Edge of Tomorrow",
        poster:
            "https://image.tmdb.org/t/p/w500/uUHvlkLavotfGsNtosDy8ShsIYF.jpg",
        overview:
            "Major Bill Cage is an officer who has never seen a day of combat when he is unceremoniously demoted and dropped into combat. Cage is killed within minutes, managing to take an alpha alien down with him. He awakens back at the beginning of the same day and is forced to fight and die again... and again - as physical contact with the alien has thrown him into a time loop.",
        release_date: 1401152400,
        genres: ["Action", "Science Fiction"],
    },
    {
        id: "447200",
        title: "Skyscraper",
        poster:
            "https://image.tmdb.org/t/p/w500/3NL1FiTEhU4SWOuWk8lkVCbmnYm.jpg",
        overview:
            "Framed and on the run, a former FBI agent must save his family from a blazing fire in the world's tallest building.",
        release_date: 1531270800,
        genres: ["Drama"],
    },
    {
        id: "72784",
        title: "The Loft",
        poster:
            "https://image.tmdb.org/t/p/w500/6UrNb7sdolnuqxBJ4I8OxTUvTmQ.jpg",
        overview:
            "For five men, the opportunity to share a penthouse in the city -- in which to carry on extramarital affairs -- is a dream come true, until the dead body of an unknown woman turns up. Realizing that her killer must be one of their group, the men are gripped by paranoia as each one suspects another. Friendships are tested, loyalties are questioned, and marriages crumble while fear and suspicion run rampant.",
        release_date: 1413248400,
        genres: ["Drama"],
    },
    {
        id: "280",
        title: "Terminator 2: Judgment Day",
        poster:
            "https://image.tmdb.org/t/p/w500/weVXMD5QBGeQil4HEATZqAkXeEc.jpg",
        overview:
            "Nearly 10 years have passed since Sarah Connor was targeted for termination by a cyborg from the future. Now her son, John, the future leader of the resistance, is the target for a newer, more deadly terminator. Once again, the resistance has managed to send a protector back to attempt to save John and his mother Sarah.",
        release_date: 678502800,
        genres: ["Action", "Thriller", "Science Fiction"],
    },
    {
        id: "62177",
        title: "Brave",
        poster:
            "https://image.tmdb.org/t/p/w500/L6qqU6Q3k4MmPojncNbT43FSTL.jpg",
        overview:
            "Brave is set in the mystical Scottish Highlands, where Mérida is the princess of a kingdom ruled by King Fergus and Queen Elinor. An unruly daughter and an accomplished archer, Mérida one day defies a sacred custom of the land and inadvertently brings turmoil to the kingdom. In an attempt to set things right, Mérida seeks out an eccentric old Wise Woman and is granted an ill-fated wish. Also figuring into Mérida’s quest — and serving as comic relief — are the kingdom’s three lords: the enormous Lord MacGuffin, the surly Lord Macintosh, and the disagreeable Lord Dingwall.",
        release_date: 1340240400,
        genres: ["Drama", "Music"],
    },
    {
        id: "101",
        title: "Léon: The Professional",
        poster:
            "https://image.tmdb.org/t/p/w500/jtNOfwZu3zea5grnqpq4nyqXoID.jpg",
        overview:
            "Léon, the top hit man in New York, has earned a rep as an effective 'cleaner'. But when his next-door neighbors are wiped out by a loose-cannon DEA agent, he becomes the unwilling custodian of 12-year-old Mathilda. Before long, Mathilda's thoughts turn to revenge, and she considers following in Léon's footsteps.",
        release_date: 779504400,
        genres: ["Crime", "Drama", "Action"],
    },
    {
        id: "107846",
        title: "Escape Plan",
        poster:
            "https://image.tmdb.org/t/p/w500/zdnChkdppJjXl8lvwRz8vn6cs2s.jpg",
        overview:
            "Ray Breslin is the world's foremost authority on structural security. After analyzing every high security prison and learning a vast array of survival skills so he can design escape-proof prisons, his skills are put to the test. He's framed and incarcerated in a master prison he designed himself. He needs to escape and find the person who put him behind bars.",
        release_date: 1381280400,
        genres: ["Action"],
    },
    {
        id: "10184",
        title: "He's Just Not That Into You",
        poster:
            "https://image.tmdb.org/t/p/w500/ruc33YnCrmCL8PHdPQVzfa4shWX.jpg",
        overview:
            "Remember that really cute guy who said he'd call – and didn't? Maybe he lost your number. Maybe he's in the hospital. Maybe he's awed by your beauty, brains or success. Or maybe... he's just not that into you.",
        release_date: 1233878400,
        genres: ["Comedy", "Romance", "Drama"],
    },
    {
        id: "268896",
        title: "Pacific Rim: Uprising",
        poster:
            "https://image.tmdb.org/t/p/w500/v5HlmJK9bdeHxN2QhaFP1ivjX3U.jpg",
        overview:
            "It has been ten years since The Battle of the Breach and the oceans are still, but restless. Vindicated by the victory at the Breach, the Jaeger program has evolved into the most powerful global defense force in human history. The PPDC now calls upon the best and brightest to rise up and become the next generation of heroes when the Kaiju threat returns.",
        release_date: 1521590400,
        genres: ["Action", "Fantasy", "Science Fiction", "Adventure"],
    },
    {
        id: "102382",
        title: "The Amazing Spider-Man 2",
        poster:
            "https://image.tmdb.org/t/p/w500/c3e9e18SSlvFd1cQaGmUj5tqL5P.jpg",
        overview:
            "For Peter Parker, life is busy. Between taking out the bad guys as Spider-Man and spending time with the person he loves, Gwen Stacy, high school graduation cannot come quickly enough. Peter has not forgotten about the promise he made to Gwen’s father to protect her by staying away, but that is a promise he cannot keep. Things will change for Peter when a new villain, Electro, emerges, an old friend, Harry Osborn, returns, and Peter uncovers new clues about his past.",
        release_date: 1397610000,
        genres: ["Action", "Adventure", "Fantasy"],
    },
    {
        id: "2048",
        title: "I, Robot",
        poster:
            "https://image.tmdb.org/t/p/w500/dlb6JKYv25rJSk2n2hwhOeJ7Dk.jpg",
        overview:
            "In 2035, where robots are common-place and abide by the three laws of robotics, a techno-phobic cop investigates an apparent suicide. Suspecting that a robot may be responsible for the death, his investigation leads him to believe that humanity may be in danger.",
        release_date: 1089853200,
        genres: ["Drama", "Fantasy", "Science Fiction"],
    },
    {
        id: "105",
        title: "Back to the Future",
        poster:
            "https://image.tmdb.org/t/p/w500/xlBivetfrtF84Yx0zISShnNtHYe.jpg",
        overview:
            "Eighties teenager Marty McFly is accidentally sent back in time to 1955, inadvertently disrupting his parents' first meeting and attracting his mother's romantic interest. Marty must repair the damage to history by rekindling his parents' romance and - with the help of his eccentric inventor friend Doc Brown - return to 1985.",
        release_date: 489200400,
        genres: [],
    },
    {
        id: "399055",
        title: "The Shape of Water",
        poster:
            "https://image.tmdb.org/t/p/w500/9zfwPffUXpBrEP26yp0q1ckXDcj.jpg",
        overview:
            "An other-worldly story, set against the backdrop of Cold War era America circa 1962, where a mute janitor working at a lab falls in love with an amphibious man being held captive there and devises a plan to help him escape.",
        release_date: 1512086400,
        genres: ["Drama", "Fantasy", "Romance"],
    },
    {
        id: "374720",
        title: "Dunkirk",
        poster:
            "https://image.tmdb.org/t/p/w500/ebSnODDg9lbsMIaWg2uAbjn7TO5.jpg",
        overview:
            "The story of the miraculous evacuation of Allied soldiers from Belgium, Britain, Canada and France, who were cut off and surrounded by the German army from the beaches and harbour of Dunkirk between May 26th and June 4th 1940 during World War II.",
        release_date: 1500426000,
        genres: ["War", "Action", "Drama"],
    },
    {
        id: "119450",
        title: "Dawn of the Planet of the Apes",
        poster:
            "https://image.tmdb.org/t/p/w500/ie14Sm0hRI5f7Te2KIfU64NyCPr.jpg",
        overview:
            "A group of scientists in San Francisco struggle to stay alive in the aftermath of a plague that is wiping out humanity, while Caesar tries to maintain dominance over his community of intelligent apes.",
        release_date: 1403744400,
        genres: ["Science Fiction", "Action", "Drama", "Thriller"],
    },
    {
        id: "493922",
        title: "Hereditary",
        poster:
            "https://image.tmdb.org/t/p/w500/4GFPuL14eXi66V96xBWY73Y9PfR.jpg",
        overview:
            "When Ellen, the matriarch of the Graham family, passes away, her daughter’s family begins to unravel cryptic and increasingly terrifying secrets about their ancestry.",
        release_date: 1528074000,
        genres: ["Horror", "Mystery", "Thriller"],
    },
    {
        id: "449924",
        title: "Ip Man 4",
        poster:
            "https://image.tmdb.org/t/p/w500/b5cz6BoyHrgBnhfDHOW5hXRWbln.jpg",
        overview:
            "Ip Man 4 is an upcoming Hong Kong biographical martial arts film directed by Wilson Yip and produced by Raymond Wong. It is the fourth in the Ip Man film series based on the life of the Wing Chun grandmaster of the same name and features Donnie Yen reprising the role. The film began production in April 2018 and ended in July the same year.",
        release_date: 1571360400,
        genres: ["Action", "Drama", "History"],
    },
    {
        id: "401469",
        title: "Widows",
        poster:
            "https://image.tmdb.org/t/p/w500/d31SGJSaX29ba5ZUbZcesGoDE7I.jpg",
        overview:
            "A police shootout leaves four thieves dead during an explosive armed robbery attempt in Chicago. Their widows have nothing in common except a debt left behind by their spouses' criminal activities. Hoping to forge a future on their own terms, they join forces to pull off a heist.",
        release_date: 1541462400,
        genres: [],
    },
    {
        id: "381237",
        title: "Office Uprising",
        poster:
            "https://image.tmdb.org/t/p/w500/fcRAOCmDcFYivMNM5ink3OMMe0V.jpg",
        overview:
            "The compound of an arms manufacturer turns into a zombie nightmare when its workers are given the wrong formula.",
        release_date: 1529370000,
        genres: ["Action", "Comedy", "Horror"],
    },
    {
        id: "510",
        title: "One Flew Over the Cuckoo's Nest",
        poster:
            "https://image.tmdb.org/t/p/w500/3jcbDmRFiQ83drXNOvRDeKHxS0C.jpg",
        overview:
            "While serving time for insanity at a state mental hospital, implacable rabble-rouser, Randle Patrick McMurphy, inspires his fellow patients to rebel against the authoritarian rule of head nurse, Mildred Ratched.",
        release_date: 185500800,
        genres: ["Drama"],
    },
    {
        id: "500664",
        title: "Upgrade",
        poster:
            "https://image.tmdb.org/t/p/w500/8fDtXi6gVw8WUMWGT9XFz7YwkuE.jpg",
        overview:
            "A brutal mugging leaves Grey Trace paralyzed in the hospital and his beloved wife dead. A billionaire inventor soon offers Trace a cure — an artificial intelligence implant called STEM that will enhance his body. Now able to walk, Grey finds that he also has superhuman strength and agility — skills he uses to seek revenge against the thugs who destroyed his life.",
        release_date: 1527814800,
        genres: ["Action", "Thriller", "Science Fiction", "Horror"],
    },
    {
        id: "329865",
        title: "Arrival",
        poster:
            "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg",
        overview:
            "Taking place after alien crafts land around the world, an expert linguist is recruited by the military to determine whether they come in peace or are a threat.",
        release_date: 1478736000,
        genres: [],
    },
    {
        id: "491418",
        title: "Instant Family",
        poster:
            "https://image.tmdb.org/t/p/w500/dic3GdmMpxxfkCQfvZnasb5ZkSG.jpg",
        overview:
            "When Pete and Ellie decide to start a family, they stumble into the world of foster care adoption. They hope to take in one small child but when they meet three siblings, including a rebellious 15 year old girl, they find themselves speeding from zero to three kids overnight.",
        release_date: 1542326400,
        genres: ["Comedy", "Drama", "Family"],
    },
    {
        id: "244786",
        title: "Whiplash",
        poster:
            "https://image.tmdb.org/t/p/w500/9E949mB5NEq3BZu9nHQgWF2uGGN.jpg",
        overview:
            "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
        release_date: 1412902800,
        genres: ["Drama"],
    },
    {
        id: "89",
        title: "Indiana Jones and the Last Crusade",
        poster:
            "https://image.tmdb.org/t/p/w500/sizg1AU8f8JDZX4QIgE4pjUMBvx.jpg",
        overview:
            "When Dr. Henry Jones Sr. suddenly goes missing while pursuing the Holy Grail, eminent archaeologist Indiana must team up with Marcus Brody, Sallah and Elsa Schneider to follow in his father's footsteps and stop the Nazis from recovering the power of eternal life.",
        release_date: 611974800,
        genres: [],
    },
    {
        id: "389015",
        title: "I, Tonya",
        poster:
            "https://image.tmdb.org/t/p/w500/6gNXwSHxaksR1PjVZRqNapmkgj3.jpg",
        overview:
            "Competitive ice skater Tonya Harding rises amongst the ranks at the U. S. Figure Skating Championships, but her future in the sport is thrown into doubt when her ex-husband intervenes.",
        release_date: 1512691200,
        genres: ["Drama"],
    },
    {
        id: "458594",
        title: "Peppermint",
        poster:
            "https://image.tmdb.org/t/p/w500/jrzxS0vcbzIIay1sdYm0rgI2QfJ.jpg",
        overview:
            "A grieving mother transforms herself into a vigilante following the murders of her husband and daughter, eluding the authorities to deliver her own personal brand of justice.",
        release_date: 1536195600,
        genres: ["Comedy", "Drama", "Family"],
    },
    {
        id: "238636",
        title: "The Purge: Anarchy",
        poster:
            "https://image.tmdb.org/t/p/w500/f2HD5iVhJWWv72QVWThUKk09zYy.jpg",
        overview:
            "One night per year, the government sanctions a 12-hour period in which citizens can commit any crime they wish -- including murder -- without fear of punishment or imprisonment. Leo, a sergeant who lost his son, plans a vigilante mission of revenge during the mayhem. However, instead of a death-dealing avenger, he becomes the unexpected protector of four innocent strangers who desperately need his help if they are to survive the night.",
        release_date: 1405558800,
        genres: ["Horror", "Thriller"],
    },
    {
        id: "483906",
        title: "Polar",
        poster:
            "https://image.tmdb.org/t/p/w500/qOBEpKVLl8Q9CZScbOcRRVISezV.jpg",
        overview:
            "When a retiring assassin realizes that he is the target of a hit, he winds up back in the game going head to head with a gang of younger, ruthless killers.",
        release_date: 1548374400,
        genres: ["Drama"],
    },
    {
        id: "98566",
        title: "Teenage Mutant Ninja Turtles",
        poster:
            "https://image.tmdb.org/t/p/w500/azL2ThbJMIkts3ZMt3j1YgBUeDB.jpg",
        overview:
            "The city needs heroes. Darkness has settled over New York City as Shredder and his evil Foot Clan have an iron grip on everything from the police to the politicians. The future is grim until four unlikely outcast brothers rise from the sewers and discover their destiny as Teenage Mutant Ninja Turtles. The Turtles must work with fearless reporter April and her wise-cracking cameraman Vern Fenwick to save the city and unravel Shredder's diabolical plan.",
        release_date: 1407373200,
        genres: ["Animation"],
    },
    {
        id: "49017",
        title: "Dracula Untold",
        poster:
            "https://image.tmdb.org/t/p/w500/dN3D3AvOsZ60jBth9LYhZFjgAUz.jpg",
        overview:
            "Vlad Tepes is a great hero, but when he learns the Sultan is preparing for battle and needs to form an army of 1,000 boys, including Vlad's son, he vows to find a way to protect his family. Vlad turns to dark forces in order to get the power to destroy his enemies and agrees to go from hero to monster as he's turned into the mythological vampire Dracula.",
        release_date: 1412125200,
        genres: ["Horror", "Action", "Drama", "Fantasy", "War"],
    },
    {
        id: "206647",
        title: "Spectre",
        poster:
            "https://image.tmdb.org/t/p/w500/672kUEMtTHcaVYSVY4eiHEliHFa.jpg",
        overview:
            "A cryptic message from Bond’s past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.",
        release_date: 1445817600,
        genres: ["TV Movie", "Horror"],
    },
    {
        id: "411",
        title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
        poster:
            "https://image.tmdb.org/t/p/w500/kzJip9vndXYSKQHCgekrgqbnUrA.jpg",
        overview:
            "Siblings Lucy, Edmund, Susan and Peter step through a magical wardrobe and find the land of Narnia. There, the they discover a charming, once peaceful kingdom that has been plunged into eternal winter by the evil White Witch, Jadis. Aided by the wise and magnificent lion, Aslan, the children lead Narnia into a spectacular, climactic battle to be free of the Witch's glacial powers forever.",
        release_date: 1133913600,
        genres: ["Adventure", "Family", "Fantasy"],
    },
    {
        id: "375262",
        title: "The Favourite",
        poster:
            "https://image.tmdb.org/t/p/w500/cwBq0onfmeilU5xgqNNjJAMPfpw.jpg",
        overview:
            "England, early 18th century. The close relationship between Queen Anne and Sarah Churchill is threatened by the arrival of Sarah's cousin, Abigail Hill, resulting in a bitter rivalry between the two cousins to be the Queen's favourite.",
        release_date: 1542931200,
        genres: ["Documentary"],
    },
    {
        id: "675",
        title: "Harry Potter and the Order of the Phoenix",
        poster:
            "https://image.tmdb.org/t/p/w500/s836PRwHkLjrOJrfW0eo7B4NJOf.jpg",
        overview:
            "Returning for his fifth year of study at Hogwarts, Harry is stunned to find that his warnings about the return of Lord Voldemort have been ignored. Left with no choice, Harry takes matters into his own hands, training a small group of students – dubbed 'Dumbledore's Army' – to defend themselves against the dark arts.",
        release_date: 1182992400,
        genres: ["Adventure", "Fantasy", "Mystery"],
    },
    {
        id: "1893",
        title: "Star Wars: Episode I - The Phantom Menace",
        poster:
            "https://image.tmdb.org/t/p/w500/6wkfovpn7Eq8dYNKaG5PY3q2oq6.jpg",
        overview:
            "Anakin Skywalker, a young slave strong with the Force, is discovered on Tatooine. Meanwhile, the evil Sith have returned, enacting their plot for revenge against the Jedi.",
        release_date: 927075600,
        genres: ["Adventure", "Action", "Science Fiction"],
    },
    {
        id: "812",
        title: "Aladdin",
        poster:
            "https://image.tmdb.org/t/p/w500/eLFfl7vS8dkeG1hKp5mwbm37V83.jpg",
        overview:
            "Princess Jasmine grows tired of being forced to remain in the palace, so she sneaks out into the marketplace, in disguise, where she meets street-urchin Aladdin.  The couple falls in love, although Jasmine may only marry a prince.  After being thrown in jail, Aladdin becomes embroiled in a plot to find a mysterious lamp, with which the evil Jafar hopes to rule the land.",
        release_date: 722649600,
        genres: ["Adventure", "Family", "Fantasy"],
    },
    {
        id: "294254",
        title: "Maze Runner: The Scorch Trials",
        poster:
            "https://image.tmdb.org/t/p/w500/mYw7ZyejqSCPFlrT2jHZOESZDU3.jpg",
        overview:
            "Thomas and his fellow Gladers face their greatest challenge yet: searching for clues about the mysterious and powerful organization known as WCKD. Their journey takes them to the Scorch, a desolate landscape filled with unimaginable obstacles. Teaming up with resistance fighters, the Gladers take on WCKD’s vastly superior forces and uncover its shocking plans for them all.",
        release_date: 1441760400,
        genres: ["Action", "Science Fiction", "Thriller"],
    },
    {
        id: "158852",
        title: "Tomorrowland",
        poster:
            "https://image.tmdb.org/t/p/w500/iHh0nVGVODAFduF6Q6njdSSCEfX.jpg",
        overview:
            "Bound by a shared destiny, a bright, optimistic teen bursting with scientific curiosity and a former boy-genius inventor jaded by disillusionment embark on a danger-filled mission to unearth the secrets of an enigmatic place somewhere in time and space that exists in their collective memory as 'Tomorrowland.'",
        release_date: 1431997200,
        genres: ["Adventure", "Family", "Mystery", "Science Fiction"],
    },
    {
        id: "315837",
        title: "Ghost in the Shell",
        poster:
            "https://image.tmdb.org/t/p/w500/myRzRzCxdfUWjkJWgpHHZ1oGkJd.jpg",
        overview:
            "In the near future, Major is the first of her kind: a human saved from a terrible crash, then cyber-enhanced to be a perfect soldier devoted to stopping the world's most dangerous criminals.",
        release_date: 1490749200,
        genres: ["Animation", "Action", "Science Fiction"],
    },
    {
        id: "181533",
        title: "Night at the Museum: Secret of the Tomb",
        poster:
            "https://image.tmdb.org/t/p/w500/xwgy305K6qDs3D20xUO4OZu1HPY.jpg",
        overview:
            "When the magic powers of The Tablet of Ahkmenrah begin to die out, Larry Daley spans the globe, uniting favorite and new characters while embarking on an epic quest to save the magic before it is gone forever.",
        release_date: 1418774400,
        genres: ["Adventure", "Comedy", "Fantasy", "Family"],
    },
    {
        id: "293167",
        title: "Kong: Skull Island",
        poster:
            "https://image.tmdb.org/t/p/w500/r2517Vz9EhDhj88qwbDVj8DCRZN.jpg",
        overview:
            "Explore the mysterious and dangerous home of the king of the apes as a team of explorers ventures deep inside the treacherous, primordial island.",
        release_date: 1488931200,
        genres: ["Action", "Adventure", "Fantasy"],
    },
    {
        id: "452832",
        title: "Serenity",
        poster:
            "https://image.tmdb.org/t/p/w500/hgWAcic93phg4DOuQ8NrsgQWiqu.jpg",
        overview:
            "Baker Dill is a fishing boat captain leading tours off a tranquil, tropical enclave called Plymouth Island. His quiet life is shattered, however, when his ex-wife Karen tracks him down with a desperate plea for help.",
        release_date: 1548288000,
        genres: [],
    },
    {
        id: "674",
        title: "Harry Potter and the Goblet of Fire",
        poster:
            "https://image.tmdb.org/t/p/w500/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg",
        overview:
            "Harry starts his fourth year at Hogwarts, competes in the treacherous Triwizard Tournament and faces the evil Lord Voldemort. Ron and Hermione help Harry manage the pressure – but Voldemort lurks, awaiting his chance to destroy Harry and all that he stands for.",
        release_date: 1132099200,
        genres: ["Adventure", "Fantasy", "Family"],
    },
    {
        id: "537707",
        title: "Ville Neuve",
        poster:
            "https://image.tmdb.org/t/p/w500/zrgXO9fFOhqzZOxf76bEk3BjafO.jpg",
        overview:
            "Determined to stop drinking, Joseph moves into a friend's house and convinces his ex-wife Emma to join him. In the troubled times of Quebec independence referendum, this is the account of their stormy reunion.",
        release_date: 1555030800,
        genres: ["Animation", "Drama"],
    },
    {
        id: "487558",
        title: "BlacKkKlansman",
        poster:
            "https://image.tmdb.org/t/p/w500/8jxqAvSDoneSKRczaK8v9X5gqBp.jpg",
        overview:
            "Colorado Springs, late 1970s. Ron Stallworth, an African American police officer, and Flip Zimmerman, his Jewish colleague, run an undercover operation to infiltrate the Ku Klux Klan.",
        release_date: 1532912400,
        genres: ["Crime"],
    },
    {
        id: "568",
        title: "Apollo 13",
        poster:
            "https://image.tmdb.org/t/p/w500/jokiCLdNS58eJTALfNcerQRhwAo.jpg",
        overview:
            "The true story of technical troubles that scuttle the Apollo 13 lunar mission in 1971, risking the lives of astronaut Jim Lovell and his crew, with the failed journey turning into a thrilling saga of heroism. Drifting more than 200,000 miles from Earth, the astronauts work furiously with the ground crew to avert tragedy.",
        release_date: 804474000,
        genres: ["Documentary"],
    },
    {
        id: "1930",
        title: "The Amazing Spider-Man",
        poster:
            "https://image.tmdb.org/t/p/w500/dQ8TOCYgP9pzQvSb1cmaalYqdb5.jpg",
        overview:
            "Peter Parker is an outcast high schooler abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben and Aunt May. Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. As Peter discovers a mysterious briefcase that belonged to his father, he begins a quest to understand his parents' disappearance – leading him directly to Oscorp and the lab of Dr. Curt Connors, his father's former partner. As Spider-Man is set on a collision course with Connors' alter ego, The Lizard, Peter will make life-altering choices to use his powers and shape his destiny to become a hero.",
        release_date: 1340758800,
        genres: [],
    },
    {
        id: "98",
        title: "Gladiator",
        poster:
            "https://image.tmdb.org/t/p/w500/ehGpN04mLJIrSnxcZBMvHeG0eDc.jpg",
        overview:
            "In the year 180, the death of emperor Marcus Aurelius throws the Roman Empire into chaos.  Maximus is one of the Roman army's most capable and trusted generals and a key advisor to the emperor.  As Marcus' devious son Commodus ascends to the throne, Maximus is set to be executed.  He escapes, but is captured by slave traders.  Renamed Spaniard and forced to become a gladiator, Maximus must battle to the death with other men for the amusement of paying audiences.",
        release_date: 957142800,
        genres: ["Action", "Drama", "Adventure"],
    },
    {
        id: "347375",
        title: "Mile 22",
        poster:
            "https://image.tmdb.org/t/p/w500/2L8ehd95eSW9x7KINYtZmRkAlrZ.jpg",
        overview:
            "An elite group of American operatives, aided by a top-secret tactical command team, must transport an asset who holds life-threatening information to an extraction point 22 miles away through the hostile streets of an Asian city.",
        release_date: 1534381200,
        genres: ["Action", "Thriller"],
    },
    {
        id: "52371",
        title: "LelleBelle",
        poster:
            "https://image.tmdb.org/t/p/w500/5VEt6htqGEkqHEKMxfiBRsAMtJj.jpg",
        overview:
            "19-year old Belle practices playing the violin diligently, but is unable to impart her music with a sensitive undertone. Her life changes when she discovers that sexual desire stimulates passion in her music.",
        release_date: 1286586000,
        genres: ["Music", "Romance"],
    },
    {
        id: "100402",
        title: "Captain America: The Winter Soldier",
        poster:
            "https://image.tmdb.org/t/p/w500/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg",
        overview:
            "After the cataclysmic events in New York with The Avengers, Steve Rogers, aka Captain America is living quietly in Washington, D.C. and trying to adjust to the modern world. But when a S.H.I.E.L.D. colleague comes under attack, Steve becomes embroiled in a web of intrigue that threatens to put the world at risk. Joining forces with the Black Widow, Captain America struggles to expose the ever-widening conspiracy while fighting off professional assassins sent to silence him at every turn. When the full scope of the villainous plot is revealed, Captain America and the Black Widow enlist the help of a new ally, the Falcon. However, they soon find themselves up against an unexpected and formidable enemy—the Winter Soldier.",
        release_date: 1395273600,
        genres: ["Action", "Adventure", "Science Fiction"],
    },
    {
        id: "449443",
        title: "Den of Thieves",
        poster:
            "https://image.tmdb.org/t/p/w500/AfybH6GbGFw1F9bcETe2yu25mIE.jpg",
        overview:
            "A gritty crime saga which follows the lives of an elite unit of the LA County Sheriff’s Dept. and the state’s most successful bank robbery crew as the outlaws plan a seemingly impossible heist on the Federal Reserve Bank.",
        release_date: 1516233600,
        genres: ["Action", "Drama", "Crime"],
    },
    {
        id: "517093",
        title: "Balkan Line",
        poster:
            "https://image.tmdb.org/t/p/w500/2DhIJ1WuXHNFBxlB1jWfMytU22v.jpg",
        overview:
            "1999, Serbia is bombed and Kosovo region is left for plunder by bandits under command of Albanian warlord, Smuk. The removal of the human organs take place within the territories bandits have taken, the robberies, mass assassinations and genocide. Russian intelligence officer Bek Ethoev and former paratrooper turned mercenary Andrey Shatalov head a small detachment tasked with the dangerous mission to stop the terrorism, recapture the airfield used by the bandits and rescue Shatalov's love interest Yasna, who was captured to be harvested for organs, like the rest of the Serbian prisoners.",
        release_date: 1553126400,
        genres: ["Drama", "Action", "War"],
    },
    {
        id: "399360",
        title: "Alpha",
        poster:
            "https://image.tmdb.org/t/p/w500/afdZAIcAQscziqVtsEoh2PwsYTW.jpg",
        overview:
            "In the prehistoric past, Keda, a young and inexperienced hunter, struggles to return home after being separated from his tribe when bison hunting goes awry. On his way back he will find an unexpected ally.",
        release_date: 1534467600,
        genres: ["Science Fiction"],
    },
    {
        id: "608",
        title: "Men in Black II",
        poster:
            "https://image.tmdb.org/t/p/w500/enA22EPyzc2WQ1VVyY7zxresQQr.jpg",
        overview:
            "Kay and Jay reunite to provide our best, last and only line of defense against a sinister seductress who levels the toughest challenge yet to the MIB's untarnished mission statement – protecting Earth from the scum of the universe. It's been four years since the alien-seeking agents averted an intergalactic disaster of epic proportions. Now it's a race against the clock as Jay must convince Kay – who not only has absolutely no memory of his time spent with the MIB, but is also the only living person left with the expertise to save the galaxy – to reunite with the MIB before the earth submits to ultimate destruction.",
        release_date: 1025658000,
        genres: ["Action", "Adventure", "Comedy", "Science Fiction"],
    },
    {
        id: "585",
        title: "Monsters, Inc.",
        poster:
            "https://image.tmdb.org/t/p/w500/sgheSKxZkttIe8ONsf2sWXPgip3.jpg",
        overview:
            "James Sullivan and Mike Wazowski are monsters, they earn their living scaring children and are the best in the business... even though they're more afraid of the children than they are of them. When a child accidentally enters their world, James and Mike suddenly find that kids are not to be afraid of and they uncover a conspiracy that could threaten all children across the world.",
        release_date: 1004572800,
        genres: [],
    },
];

movieList.map((e) => (e.rate = Math.floor(Math.random() * (6 - 1) + 1)));
console.log(movieList);
export default movieList;
