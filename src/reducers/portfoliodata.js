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
        name : "Unreal Engine Blueprints#"
      },
      {
        name : "Actionscript (RIP)"
      }
    ],

    technologies : [
      {
        name : "Node/Express"
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
        title : "Freelance Game Developer",
        description : "Designed, developed, and released multiple flash-based games",
        start : "",
        logo : "elementrat",
        bullets : ["6.5 million plays", "Played on 300+ websites", "Branding licenses sold to web portals"]
      },
      {
        company : "Adams Friendship PC",
        title : "Project Manager",
        description : "Overhauled the technology and brand of a small local business",
        start : "",
        logo : "afpc",
        bullets : ["Designed Logo", "Designed and wrote promotional material", "Designed new internal forms and processes", "Designed and developed website"]
      },
      {
        company : "Door-6",
        title : "Game Developer Intern",
        description : "Developed player profile API and assisted in game design process",
        start : "",
        logo : "door6"
      },
      {
        company : "Microsoft",
        title : "Program Manager Intern - Office",
        description : "Worked on features for browser-based PowerPoint presenters",
        bullets : ["Gathered requirements from stakeholders", "Developed and communicated product vision", "Wrote detailed technical specifications"],
        start : "",
        logo : "office"
      },
      {
        company : "Microsoft",
        title : "Program Manager Intern - Skype",
        description : "Worked on features to improve large meeting scenario experience",
        bullets : ["Gathered requirements from stakeholders", "Developed and communicated product vision", "Wrote detailed technical specifications", "Developed feature prototype"],
        start : "",
        logo : "skype"
      },
      {
        company : "Microsoft",
        title : "Program Manager Intern - Xbox One",
        description : "Led the team responsible for the new Messages experience on Xbox One through design, implementation, and release",
        start : "",
        logo : "xbox",
        video : "https://youtu.be/rC7gUspzS9o"
      },
      {
        company : "Microsoft",
        title : "Program Manager - Xbox on Windows",
        description : "Organized and led teams on a wide range of initiatives, notably including integration of Xbox Live Signup/Signin with Minecraft on iOS/Android",
        start : "",
        logo : "xbox",
        images : ["minecraft"]

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