export default function viewReducer(state = true, action) {
    switch (action.type) {
        case "SELECT_USER":
            if (state === true) {
                return false;
            } else{
                return true;
            }
        default:
            return state;
    }
}