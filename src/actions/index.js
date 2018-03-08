export const enterSite = () => {
    return {
        type : 'ENTER_SITE'
    }
}

export const selectResumeItem = (indexIn) => {
    return {
        type : 'SELECT_RESUME_ITEM',
        index : indexIn
    }
}