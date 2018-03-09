export const SELECT_RESUME_ITEM = "SELECT_RESUME_ITEM"
export const ENTER_SITE = "ENTER_SITE"


const ui = (state = {
    
    showEntryCard : true,
    selectedResumeItemIndex : 0
    
    }, action) =>{

        if(action.type == "SELECT_RESUME_ITEM"){
            return Object.assign({}, state, {
                selectedResumeItemIndex : action.index
            })
        } 

        if(action.type == "ENTER_SITE"){
            return Object.assign({}, state, {showEntryCard : false})
        }
        return state
}

export default ui