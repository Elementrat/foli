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
        name : "3D Modelling",
      },
      {
        name : "Project Management",
      },
      {
        name : "Game Design & Dev",
      },
      {
        name : "UX & Interaction Design",
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
        description : "Designed, developed, and released flash based games. Sold in-game branding / advertising  licenses to game portals. 6.5 million plays online across over 300 websites",
        start : "",
        logo : "elementrat"
      },
      {
        company : "Adams Friendship PC",
        title : "Project Manager",
        description : "Developed company's brand and technology, including logo, promotions, product line, and website",
        start : "",
        logo : "afpc"
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
        description : "Designed a feature for browser-based PowerPoint presenters",
        start : "",
        logo : "office"
      },
      {
        company : "Microsoft",
        title : "Program Manager Intern - Skype",
        description : "Designed and implemented a prototype feature to improve large meeting scenario experience",
        start : "",
        logo : "skype"
      },
      {
        company : "Microsoft",
        title : "Program Manager Intern - Xbox One",
        description : "Led the team responsible for the new Messages experience on Xbox One through design, implementation, and release",
        start : "",
        logo : "xbox"
      },
      {
        company : "Microsoft",
        title : "Program Manager - Xbox on Windows",
        description : "Organized and led teams on a wide range of initiatives, notably including integration of Xbox Live with Minecraft on iOS/Android",
        start : "",
        logo : "xbox"
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