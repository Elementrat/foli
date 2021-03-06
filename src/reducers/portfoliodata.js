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
        name : "PM Tools (JIRA, TFS, Trello) "
      },
      {
        name : "Vue / Angular / React + Redux"
      },
      {
        name : "Express"
      },
      {
        name : "Meteor"
      },
      {
        name : "MongoDB"
      },
      {
        name : "NEO4J"
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
        name : "Blender"
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
        name : "Educational Tools",
      },
      {
        name : "Data Visualization"
      },
      {
        name : "Game Design & Dev",
      },
      {
        name : "Augmented Reality",
      },
      {
        name : "Virtual Reality",
      },
      {
        name : "Hackathons",
      },
      {
        name : "Emerging Web Standards",
      },
      {
        name : "Learning Korean",
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
        description : "Designed, developed, and released several flash based games, and sold licenses, as well as in-game advertising and branding rights to web portals.",
        start : "",
        logo : "elementrat",
        images : ["intensub2menu"],
        bullets : ["Released 4 titles", "Combined, 6.5 million plays online", "Played across 300+ websites", "Sold in-game branding licenses to web portals"]
      },
      {
        company : "Adams Friendship PC",
        title : "Project Manager & Software Developer",
        description : "Designed and implemented their website, which included a PC hardware customization experience, and Windows app, which provided customers easy access to tech support.",
        start : "",
        logo : "afpc",
        images : ["afpcsite_testimonial"],
        bullets : ["Designed company's visual identity", "Designed and wrote promotional material", "Improved organizational efficiency", "Designed + developed company site", "Designed + developed apps and services"]
      },
      {
        company : "Door-6",
        title : "Game Developer Intern",
        description : "Contributed to the iOS / Android game \"Atmosphere\"  by building the player profile API service, and participating in the design process",
        bullets : ["Analyzed requirements and produced development plan","Contributed gameplay concepts and feedback"],
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
        description : "Designed a solution for a gap within the existing feature set of Microsoft Office",
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
        description : "Planned and shipped new Xbox gaming experiences on Windows 10, iOS , and Android that increased monthly and daily active users, including UX enabling Microsoft / Xbox Live accounts to be used in Minecraft, and an all-new Xbox Live Sign-Up / Sign in experience on Windows 10. Was promoted in my first year, left to build passion projects.",
        start : "",
        logo : "xbox",
        images : ["minecraft"],
        bullets : [ "Developed, presented, and received sign-off on product vision" , "Created experience mockups & storyboards", "Managed work items & unblocked development teams during execution","Communicated project status with leadership", "Drove relationships & dependencies with partner teams ", "Wrote tools to improve internal proccesses"],
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