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
        name : "Affinity Designer / Photoshop"
      },
      {
        name : "Balsamiq"
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
        title : "Freelance Game Developer",
        description : "During High School, I designed, developed, and released several flash-based games.",
        start : "",
        logo : "elementrat",
        images : ["intensub2menu"],
        bullets : ["Released 4 titles", "Developed innumerable prototypes", "Combined, 6.5 million plays online", "Played across 300+ websites", "Sold in-game branding licenses to web portals"]
      },
      {
        company : "Adams Friendship PC",
        title : "Project Manager",
        description : "Overhauled the company's technology, brand, and internal processes",
        start : "",
        logo : "afpc",
        images : ["afpcsite_testimonial"],
        bullets : ["Designed company's visual identity", "Designed and wrote promotional material", "Improved org. efficiency", "Designed + developed company site", "Designed + developed apps and services"]
      },
      {
        company : "Door-6",
        title : "Game Developer Intern",
        description : "Developed player profile API and assisted in game design",
        bullets : ["Analyzed requirements and produced dev plan", "Developed profile server API", "Contributed gameplay concepts and feedback"],
        start : "",
        images : ["atmo"],
        logo : "door6"
      },
      {
        company : "Microsoft - Office",
        title : "Program Manager Intern",
        description : "Worked on features for browser-based PowerPoint presenters",
        bullets : ["Gathered requirements from stakeholders", "Worked with developers to build plan", "Presented product vision to leadership", "Wrote detailed technical specifications"],
        start : "",
        images : ["office_full"],
        logo : "office"
      },
      {
        company : "Microsoft - Skype",
        title : "Program Manager Intern",
        description : "Worked on features to improve large meeting scenario experience",
        bullets : ["Gathered requirements from stakeholders", "Presented product vision to leadership", "Wrote detailed technical specifications", "Developed proof of concept feature prototype"],
        images : ["skype_full"],
        start : "",
        logo : "skype"
      },
      {
        company : "Microsoft - Xbox One",
        title : "Program Manager Intern",
        description : "Led the team responsible for the new Messages experience on Xbox One through design, implementation, and release",
        bullets : ["Worked with design+devs to build plan", "Presented product vision to leadership", "Drove daily product development standup", "Managed team's work item backlog", "Kept team unblocked and on-schedule", "Communicated project status with partners"],
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
        bullets : [ "Gathered + synthesized partner requirements" , "Developed and communicated product vision", "Drove daily product development standups","Communicated project status to leadership", "Wrote tools to improve internal proccesses"],
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