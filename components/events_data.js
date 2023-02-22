const events_data = [
  {
    id: 0,
    name: 'Slime Mould',
    cat: 'tech',
    link: 'https://i.ibb.co/5rYkHr3/BEA.jpg',
    poster:
      'https://i.ibb.co/k0rPJGS/Blue-Header-Modern-Scientific-Poster-Instagram-Post-Square-1.png',
    descr:
      'The fungi selected have the capability to travel through the shortest path and we ask the participants to draw the path. If they match with the fungi path they are considered winners.',
    red_link: 'https://bit.ly/3xDdKXU',
  },
  {
    id: 1,
    name: 'Eschewal',
    cat: 'tech',
    link: 'https://i.ibb.co/5rYkHr3/BEA.jpg',
    poster: 'https://i.ibb.co/h9w40bz/ESCHEWAL-1080-1350-px-1080-1080-px.png',
    descr:
      'The cursed spirit of Fiametta prowls the night in hunt of a savior. Be the one to free her from this grim, dark dungeon with all its traps and secrets? This experience challenges your intellect with traps and puzzles that hint at mystery. The dead shall riseth, and thee shalt repent.',
    red_link: 'https://bit.ly/3xDdKXU',
  },
  {
    id: 2,
    name: 'CANTILEVER TOWER',
    cat: 'tech',
    link: 'https://i.ibb.co/tPfnVhj/CEA-logo.png',
    poster: 'https://i.ibb.co/fQ4FjnK/CEA.png',
    descr:
      'Participants will be given certain credits with which they can procure materials available to construct a cantilever tower of min given dimensions with a suitable footing which will be tested in coarse grained soil placed in a wooden box for settlement and load bearing.',
    red_link: 'https://bit.ly/3End4tc',
  },
  {
    id: 44,
    name: 'Model Making',
    cat: 'tech',
    link: 'https://i.ibb.co/tPfnVhj/CEA-logo.png',
    poster: 'https://i.ibb.co/kqQMhxL/35b07bac-c3ac-4e5a-a4ff-5f4e953c92ea.jpg',
    descr:
      ' Bring out your skill and interest to make a model of any civil engineering aspect.You will be provided with the required materials(for eg. steel wires, foam boards, quick setting cement, pliers, various types of glue, mini bricks etc.)',
    red_link: 'https://bit.ly/3End4tc',
  },
  {
    id: 3,
    name: 'SoLiquid',
    cat: 'tech',
    link: 'https://i.ibb.co/QX3ryxw/Ch-EA-New-Logo.png',
    poster: 'https://i.ibb.co/j6P275r/CHEA-SOLIQUID-INSTAGRAM.png',
    descr:
      'This event aims at demonstrating the properties of fluidized air bed through using sand in a very unique way. Intrigued? Find out how by participating..',
    red_link: 'https://bit.ly/3xDdKXU',
  },
  {
    id: 4,
    name: 'Alignment',
    cat: 'tech',
    link: 'https://i.ibb.co/QX3ryxw/Ch-EA-New-Logo.png',
    poster: 'https://i.ibb.co/KyPcJ17/CHEA-ALIGNMENT-INSTAGRAM.png',
    descr:
      'The event conducted by ChEA aims to bring the talent out of the participants where they have to compete among themselves to get an optimized solution for a certain task which involves pipes and fittings. Pre-registration is required.',
    red_link: 'https://bit.ly/3xDdKXU',
  },
  {
    id: 5,
    name: 'CSS Battle ',
    cat: 'tech',
    link: 'https://i.ibb.co/rG8hpKL/CSEA.jpg',
    poster: 'https://i.ibb.co/023Y3Mk/css-battle.png',
    descr:
      " Players need to visually replicate 'Targets' in smallest possible CSS code and battle it out to get to the top of the leader board",
    red_link: 'https://bit.ly/3xDdKXU',
  },
  {
    id: 6,
    name: 'Tech Expo',
    cat: 'tech',
    link: 'https://i.ibb.co/rG8hpKL/CSEA.jpg',
    poster: 'https://i.ibb.co/mCKZ7qQ/expo-square.png',
    descr:
      'Will be Demonstrating OpenCV projects , Multiplayer games(Based on Al ) , Projects and Experiencing the new emerging technologies etc 5-6 stalls will be kept to accommodate each project in a stall',
    red_link: 'https://bit.ly/3xDdKXU',
  },
  {
    id: 7,
    name: 'Innovator',
    cat: 'tech',
    link: 'https://i.ibb.co/rG8hpKL/CSEA.jpg',
    poster: 'https://i.ibb.co/Gp3vHVM/innovator.png',
    descr: 'Presentation of Technical Innovative idea using Graphical means',
    red_link: 'https://bit.ly/3xDdKXU',
  },
  {
    id: 8,
    name: 'The Maze Runner',
    cat: 'tech',
    link: 'https://i.ibb.co/L6t0Drn/ECEA.jpg',
    poster: 'https://i.ibb.co/GC2R2HL/maze-runner-2.png',
    descr:
      'Participants have to make walkie-talkie by the given components in the demonstration. One half of the team will be inside the maze with a walkie-talkie. Other half of the team will be guiding the first half by just looking into a map',
    red_link: 'https://bit.ly/3xDdKXU',
  },
  {
    id: 9,
    name: 'Spooky House',
    cat: 'cult',
    link: 'https://i.ibb.co/L6t0Drn/ECEA.jpg',
    poster: 'https://i.ibb.co/2sv0Tk4/4-20230218-203341-0003.png',
    descr:
      'Participants are sent into a dark room which will be full of surprises. Their task is to get out of dark room by figuring out the small traps which were set and come out in least possible time',
    red_link: 'https://bit.ly/3End4tc',
  },
  {
    id: 10,
    name: 'Circuit saga',
    cat: 'tech',
    link: 'https://i.ibb.co/L6t0Drn/ECEA.jpg',
    poster: 'https://i.ibb.co/JnKcHDM/1-20230218-203341-0000.png',
    descr:
      ' Participants will be given an incorrect code and they are required to debug the code and successfully execute it. Each round has a time limit and points are awarded for both design and speed of completion.',
    red_link: 'https://forms.gle/fv7tgoQW6JXVmY1k6',
  },
  {
    id: 11,
    name: 'Laser Tag',
    cat: 'tech',
    link: 'https://i.ibb.co/L6t0Drn/ECEA.jpg',
    poster: 'https://i.ibb.co/mGLPp1v/5-20230218-203341-0004.png',
    descr: null,
    red_link: 'https://bit.ly/3End4tc',
  },
  {
    id: 12,
    name: 'Project Presentation',
    cat: 'tech',
    link: 'https://i.ibb.co/L6t0Drn/ECEA.jpg',
    poster: 'https://i.ibb.co/pRzxxmv/png-20230217-185659-0000.png',
    descr:
      'Participants are provided with a list of topics from which they can choose one and design and implement a project on their own and must present it on the day of evaluation in front of a Panel.The best three presentations will get Prize Money',
    red_link:
      'https://docs.google.com/forms/d/e/1FAIpQLSdxOf8kmCHzuxdl6DAgqv1tzLf7_LY5fMp2OxvhhPdluVQ2kQ/viewform',
  },
  {
    id: 13,
    name: 'Paper Presentation',
    cat: 'tech',
    link: 'https://i.ibb.co/L6t0Drn/ECEA.jpg',
    poster: 'https://i.ibb.co/D4MJpzk/20230218-165613-0000.png',
    descr:
      'The participants will have to give a paper presentation of their research papers in front of a panel. The best three presentations will get Prize money .',
    red_link: 'https://forms.gle/PJHDGVXcktqjg6tm8',
  },
  {
    id: 14,
    name: 'Prison Breakout',
    cat: 'tech',
    link: 'https://i.ibb.co/hWLZJBd/EEA.jpg',
    poster: 'https://i.ibb.co/RCGhLgL/Prison-Breakout-Instapost.jpg',
    descr:
      'A game  based on accuracy where people are tickled with the basics of Electrical Components.Here participants are asked to solve the puzzles & riddles.',
    red_link: 'https://bit.ly/3End4tc',
  },
  {
    id: 15,
    name: 'Kaboom',
    cat: 'tech',
    link: 'https://i.ibb.co/hWLZJBd/EEA.jpg',
    poster: 'https://i.ibb.co/72RGDRK/Kaboom-Instapost.jpg',
    descr:
      "For all the thrill-seeking circuit whizzes out there we've got the right thing to get your brains working! A race against time, 'disarm a mine' is not for the faint of heart. Fire up the neurons and solve complex logic gate circuits to diffuse the bomb before the time runs out or else..........KABOOM",
    red_link: 'https://bit.ly/3End4tc',
  },
  {
    id: 16,
    name: 'RACE-CHASE-AND-ACE',
    cat: 'tech',
    link: 'https://i.ibb.co/Fsj6HCL/MEA-logo.jpg',
    poster: 'https://i.ibb.co/2k5RwvK/MEA-Race-Chase-and-Ace.png',
    descr:
      'It is basically a hurdle race where the contestants have to cross a series of challenges with the help of a remote controlled vehicle by operating a remote and the person who completed the whole track within a minimum amount of time is declared as the winner',
    red_link: 'https://bit.ly/3End4tc',
  },
  {
    id: 17,
    name: 'Mechanical Gala',
    cat: 'tech',
    link: 'https://i.ibb.co/Fsj6HCL/MEA-logo.jpg',
    poster: 'https://i.ibb.co/jRLjhpy/MECHANICAL-GALA-INSTA-POST.png',
    descr:
      'In this event different types of mechanisms like Geneva mechanism, crank and slider mechanisms will be taken into application and we will plan one interesting game with all such kind of mechanisms.',
    red_link: 'https://forms.gle/MF4uR6XFD4h3hGhN9',
  },
  {
    id: 18,
    name: 'Scary House',
    cat: 'cult',
    link: 'https://i.ibb.co/0n1JCrW/MMEA-LOGO-B-BG.png',
    poster: 'https://i.ibb.co/2kQdRyJ/MMEA-CULTURAL-POSTER-11.png',
    descr:
      ' where a monster role(player) will be blindfolded armed with a gun(nerf gun) has to shoot down the participants by taking sound inputs.',
    red_link: 'https://bit.ly/3End4tc',
  },
  {
    id: 19,
    name: 'Epic materials',
    cat: 'tech',
    link: 'https://i.ibb.co/0n1JCrW/MMEA-LOGO-B-BG.png',
    poster: 'https://i.ibb.co/fF6vCSD/20230217-154034-0000.png',
    descr:
      'A dispay of important elements and also alloys with their compositions. Al/Ga casting by participants with puzzle solving.',
    red_link: 'https://bit.ly/3End4tc',
  },
  {
    id: 20,
    name: 'Dirt Car Race',
    cat: 'tech',
    link: 'https://i.ibb.co/z6mMmdd/AIR.jpg',
    poster: 'https://i.ibb.co/cvWYpLX/GEAR-insta-mtg.png',
    descr:
      'An enthralling RC Car race,where the participants get to operate the RC cars modelled by the club.The participants have to navigate the car through the designed track with obstacles .The cars will be raced two at a time against each other.',
    red_link: 'https://bit.ly/3xDdKXU',
  },
  {
    id: 21,
    name: 'Project Expo',
    cat: 'tech',
    link: 'https://i.ibb.co/z6mMmdd/AIR.jpg',
    poster: 'https://i.ibb.co/BTKJY4P/vision-X-insta-mtg.png',
    descr:
      'An extravagant display of AI and robotics project,a display of AI and robotics projects designed by the club members. The main attraction includes Augmented Reality posters,robotic arm and various other projects.',
    red_link: 'https://bit.ly/3xDdKXU',
  },
  {
    id: 22,
    name: 'Hydroponic System & Vertical Farming',
    cat: 'cult',
    link: 'https://i.ibb.co/c3Tf8KT/Screenshot-20221227-141939-Instagram.jpg',
    poster: 'https://i.ibb.co/k4YtngF/Brindavanam.jpg',
    descr:
      'Hydroponics is the cultivation of plants without using soil. The project is aimed to build the working model of Hydroponics System and grow leafy vegetables. Aim of this event is to demonstrate a vertical Farming model to grow leafy vegetables by utilizing plastic waste.',
    red_link: 'https://bit.ly/3xDdKXU',
  },
  // {
  //   id: 23,
  //   name: 'Vertical Farming',
  //   cat: 'cult',
  //   link: 'https://i.ibb.co/c3Tf8KT/Screenshot-20221227-141939-Instagram.jpg',
  //   poster: 'https://i.ibb.co/k4YtngF/Brindavanam.jpg',
  //   descr:
  //     'Aim of this event is to demonstrate a vertical Farming model to grow leafy vegetables by utilizing plastic waste.',
  //   red_link: 'https://bit.ly/3xDdKXU',
  // },
  // {
  //   id: 24,
  //   name: 'Talent Hunt ',
  //   cat: 'cult',
  //   link: 'https://i.ibb.co/DpTGtkp/CHITRAM-Logo.png',
  //   poster: 'https://i.ibb.co/QFxTCMb/Chitram.jpg',
  //   descr: 'Cover song / shortfilm contest',
  //   red_link: '1',
  // },
  {
    id: 25,
    name: 'Movie screening',
    cat: 'cult',
    link: 'https://i.ibb.co/DpTGtkp/CHITRAM-Logo.png',
    poster: null,
    descr: 'Movie screening in Auditorium',
    red_link: 'https://bit.ly/3xDdKXU',
  },
  {
    id: 27,
    name: 'Classido',
    cat: 'cult',
    link: 'https://i.ibb.co/Z6CPd8c/DND.jpg',
    poster: 'https://i.ibb.co/VHmzj7p/classido-DND.jpg',
    descr: 'Jumble the riddle-Recreate-change of emotion',
    red_link: 'https://bit.ly/3xDdKXU',
  },
  {
    id: 28,
    name: 'Nacho Nacho',
    cat: 'cult',
    link: 'https://i.ibb.co/Z6CPd8c/DND.jpg',
    poster: 'https://i.ibb.co/86ckH39/D-D.jpg',
    descr:
      'Catch the beat-make the move-signature step challenge-zig zag the genre-property dance-face off',
    red_link: 'https://bit.ly/3xDdKXU',
  },
  {
    id: 29,
    name: 'Music Mania 2023',
    cat: 'cult',
    link: 'https://i.ibb.co/bBptSTh/Dhwani-Music-Club.png',
    poster: 'https://i.ibb.co/X3my6pB/20230217-160046-0000.png',
    descr:
      'The event for a group of participants to rediscover the ways of recognising the beauty of music through a series of competitive events with increasing difficulty. The sequence of the events are as follows',
    red_link: 'https://bit.ly/3xDdKXU',
  },
  {
    id: 30,
    name: 'Noraebang 2023',
    cat: 'cult',
    link: 'https://i.ibb.co/bBptSTh/Dhwani-Music-Club.png',
    poster: 'https://i.ibb.co/1ZHVrQc/Noraebang-Square.png',
    descr:
      'The fun Event for the attendees to Channelize the Singer in them through a Jam Session. For each person, ten minutes is allotted to choose and sing their favourite songs. Lyrics and Karaoke will be displayed via the Television or Projector mounted on the room, for the attendees to sing with ease. ',
    red_link: 'https://bit.ly/3xDdKXU',
  },
  {
    id: 31,
    name: 'Anthashkari Blitz',
    cat: 'cult',
    link: 'https://i.ibb.co/bBptSTh/Dhwani-Music-Club.png',
    poster: 'https://i.ibb.co/XYFRB4h/20230217-160046-0001.png',
    descr:
      'A letter will be provided to the first person from which the person should sing a song. Next person will sing a song with the ending letter of the previous song. Each person will have a time limit to start(5s) and a time limit to sing (20s).',
    red_link: 'https://bit.ly/3xDdKXU',
  },
  {
    id: 32,
    name: 'Robo War',
    cat: 'tech',
    link: 'https://i.ibb.co/GRtWMg0/Eyantra-club.jpg',
    poster: 'https://i.ibb.co/5vMq0dR/eyc-square-1.png',
    descr:
      'Strongest team survives, the remote-controlled vehicles fight each other till one of them survives. The winning can be based on survival or based on other criterion too based on the condition on ground.',
    red_link: 'https://bit.ly/3End4tc',
  },
  {
    id: 33,
    name: 'Solution Challenge',
    cat: 'tech',
    link: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/small-logo.png',
    poster: 'https://i.ibb.co/dkfXTkh/GDSC.png',
    descr:
      'For the 2023 Solution Challenge, your mission is to create a project that contributes to solving one or more of the 17 Sustainable Development Goals using Google technologies.',
    red_link: 'https://bit.ly/3End4tc',
  },
  {
    id: 34,
    name: 'Startup Expo',
    cat: 'tech',
    link: 'https://i.ibb.co/N3m6SRm/E-I-cell-dark-theme-logo.jpg',
    poster: 'https://i.ibb.co/dgBxtJm/Startup-Expo-2.png',
    descr:
      'The event is a student startup showcase, aimed at providing students with an opportunity to learn about the process of starting business/Startup. This will feature student startups from our Institute as well as other nearby colleges. The main motto of this event is to educate students about entrepreneurship and Innovation by providing an environment to speak out their experiences.',
    red_link: 'https://bit.ly/3End4tc',
  },
  {
    id: 35,
    name: 'Arz Kiya Hai',
    cat: 'cult',
    link: 'https://i.ibb.co/fpPccG3/lnd.jpg',
    poster:
      'https://i.ibb.co/th396mL/Copy-of-Brown-Vintage-Stand-up-Poster-Portrait-Instagram-Post-Square-1.png',
    descr:
      'Arz Kiya Hai is a unique shayari competition that celebrates the beauty and depth of this ancient art form. This event brings together talented poets from all over the campus to compete in a friendly and supportive atmosphere.',
    red_link: 'https://bit.ly/3xDdKXU',
  },
  {
    id: 36,
    name: 'Ludo-ver and Over Again',
    cat: 'cult',
    link: 'https://i.ibb.co/fpPccG3/lnd.jpg',
    poster: 'https://i.ibb.co/T2wY1zP/LUDO-VER-Instagram-Post-Square-2.png',
    descr:
      'A life size game of ludo with a twist. The participants would have to answer questions or perform tasks in order to advance on the board.',
    red_link: 'https://bit.ly/3xDdKXU',
  },
  {
    id: 37,
    name: 'Baby Shark Tank',
    cat: 'cult',
    link: 'https://i.ibb.co/fpPccG3/lnd.jpg',
    poster:
      'https://i.ibb.co/SKFzMjW/Children-Pirate-Shark-Poster-Instagram-Post-Square-4.png',
    descr:
      'participants pitch their product ideas to investors(sharks) except we have a preselected list of weird items for the participants to choose from when they register',
    red_link: 'https://bit.ly/3End4tc',
  },
  {
    id: 38,
    name: 'Lock And Key',
    cat: 'cult',
    link: 'https://i.ibb.co/w40cg4N/nve.jpg',
    poster: 'https://i.ibb.co/711x5Q5/NVE.jpg',
    descr:
      'A surival team game in search for the ultimate prize with various stages.',
    red_link: 'https://bit.ly/3End4tc',
  },
  {
    id: 39,
    name: 'Capture to correct',
    cat: 'cult',
    link: 'https://i.ibb.co/w40cg4N/nve.jpg',
    poster: 'https://i.ibb.co/hLQ5jp0/capture-to-correct-Divya-Doddaboina.png',
    descr:
      'To correct and enhance the college surroundings and ambiance for exemplary beauty.',
    red_link: 'https://bit.ly/3End4tc',
  },
  {
    id: 40,
    name: 'Phrases to make over',
    cat: 'cult',
    link: 'https://i.ibb.co/w40cg4N/nve.jpg',
    poster:
      'https://i.ibb.co/yFr892S/phrases-to-make-over-Divya-Doddaboina.png',
    descr:
      " To advise pupils about the do and don't around the campus premises",
    red_link: '1',
  },
  {
    id: 41,
    name: 'Solve Me',
    cat: 'cult',
    link: 'https://i.ibb.co/w40cg4N/nve.jpg',
    poster: 'https://i.ibb.co/WkS9KkS/solve-me-Divya-Doddaboina.jpg',
    descr:
      'Basic mathematical/physics based riddles given to student. The Team which solves all the riddles in time with the correct logic will be the winner.',
    red_link: 'https://bit.ly/3End4tc',
  },
  // {
  //   id: 42,
  //   name: 'Drama',
  //   cat: 'cult',
  //   link: 'https://i.ibb.co/w40cg4N/nve.jpg',
  //   poster: null,
  //   descr:
  //     'Performing a drama on stage about human values with masks and tshirts',
  //   red_link: '1',
  // },
  {
    id: 43,
    name: 'Pot painting',
    cat: 'cult',
    link: 'https://i.ibb.co/L6kyhWw/pnp-club-Logo.jpg',
    poster: 'https://i.ibb.co/YRp0L4G/PNP-1.png',
    descr:
      'As the name suggests, it is a hobby in which a person decorates clay pots and vases in various ways. It is a very interesting hobby as the results are often quite diverse (from what you expected!) and creative. One does not even need to learn it from any one nor are there any hard and fast rules to be followed.',
    red_link: 'https://bit.ly/3End4tc',
  },
  {
    id: 45,
    name: 'Success Quadrants',
    cat: 'cult',
    link: 'https://i.ibb.co/C5ck2n5/Shreshtha-club.jpg',
    poster: 'https://i.ibb.co/thjyb94/shrestha.jpg',
    descr:
      'A team of four in four rounds with points given on  Emotional Quadrant (EQ), Intelligence Quadrant (IQ), Spiritual Quadrant (SQ), and Physical Quadrant (PQ).The score for all the teams is calculated and the team with highest points wins.',
    red_link: 'https://bit.ly/3End4tc',
  },
];
export default events_data;
