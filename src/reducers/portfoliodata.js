var testData = {
  skills : {
    languages : 
      [{
        name : "Javascript (ES6)"
      },
      {
        name : "Typescript"
      },
      {
        name : "Java"
      },
      {
        name : "C++"
      },
      {
        name : "C#"
      },
      {
        name : "Unreal Engine Blueprints"
      },
      {
        name : "Actionscript (RIP)"
      }
    ],

    technologies : [
      {
        name : "Node / Express"
      },
      {
        name : "Blender"
      },
      {
        name : "Gulp"
      },
      {
        name : "Webpack"
      },
      {
        name : "Vue / Angular / React + Redux"
      },
      {
        name : "Git"
      },
      {
        name : "Ionic"
      },
      {
        name : "Unreal Engine 4"
      },
    ],
    interests : [
      {
        name : "Project Management",
      },
      {
        name : "UX & Interaction Design",
      },
      {
        name : "Game Design & Dev",
      },
      {
        name : "3D Modelling",
      },
      {
        name : "Graphic Design",
      },
      {
        name : "Theater & Acting",
      },
      {
        name : "Skateboarding",
      },
      {
        name : "Learning Korean",
      },
      {
        name : "Hackathons",
      },
      {
        name : "Improv Comedy",
      },
      {
        name : "Podcasts",
      }
    ]
   
  },
  experiences : [
      {
        company : "Elementrat Games",
        title : "Freelance Game Developer (High School)",
        description : "Designed, developed, and released multiple flash-based games",
        start : "",
        logo : "elementrat",
        images : ["intensub2menu"],
        bullets : ["4 released titles, innumerable prototypes developed", "Combined, 6.5 million plays online", "Played across 300+ websites", "Sold in-game branding licenses to web portals"]
      },
      {
        company : "Adams Friendship PC",
        title : "Project Manager",
        description : "Overhauled the company's technology, brand, and internal processes",
        start : "",
        logo : "afpc",
        images : ["afpcsite_testimonial"],
        bullets : ["Designed company's visual identity", "Designed and wrote promotional material", "Reformed work processes to improve org. efficiency", "Designed and developed company site", ]
      },
      {
        company : "Door-6",
        title : "Game Developer Intern",
        description : "Developed player profile API and assisted in game design",
        bullets : ["Analyzed requirements and produced actionable plan", "Independently developed player profile server stack", "Contributed gameplay concepts and feedback during team meetings"],
        start : "",
        images : ["atmo"],
        logo : "door6"
      },
      {
        company : "Microsoft - Office",
        title : "Program Manager Intern",
        description : "Worked on features for browser-based PowerPoint presenters",
        bullets : ["Gathered requirements from stakeholders", "Worked with developers to build plan", "Developed and communicated product vision to leadership", "Wrote detailed technical specifications"],
        start : "",
        logo : "office"
      },
      {
        company : "Microsoft - Skype",
        title : "Program Manager Intern",
        description : "Worked on features to improve large meeting scenario experience",
        bullets : ["Gathered requirements from stakeholders", "Developed and communicated product vision to leadership", "Wrote detailed technical specifications", "Developed and demo'd proof of concept feature prototype"],
        start : "",
        logo : "skype"
      },
      {
        company : "Microsoft - Xbox One",
        title : "Program Manager Intern",
        description : "Led the team responsible for the new Messages experience on Xbox One through design, implementation, and release",
        bullets : ["Worked with designers and developers to build plan", "Presented product vision to leadership", "Drove daily product development standup", "Managed team's work item backlog", "Kept team unblocked by following up on any and all issues"],
        start : "",
        logo : "xbox",
        video : "https://youtu.be/rC7gUspzS9o"
      },
      {
        company : "Microsoft - Xbox",
        title : "Program Manager",
        description : "Organized and led teams on a wide range of initiatives, notably including integration of Xbox Live Accounts with Minecraft on iOS/Android, and a new Xbox Live Signup experience on Windows 10",
        start : "",
        logo : "xbox",
        images : ["minecraft"],
        bullets : ["Responsible for a number of feature areas: Xbox App Notifications, Settings, Localization, Live Tile, XBL Signup/Sign-In + More ", "Drove daily product development standups", "Gathered + synthesized requirements from stakeholders" , "Developed and communicated product vision", "Communicated project status and risks to leadership", "Wrote tools to improve internal proccesses"],
      }
    ]
}

//create reducer
const portfoliodata = (state = 
  {...testData}
    
    , action) =>{
        return state
    }

export default portfoliodata