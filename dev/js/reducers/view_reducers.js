export default function viewReducer(state = "stats", action) {
    switch (action.type) {
        case "SELECT_STATISTICS":
            return action.view
        case "SELECT_PRACTICES":
            return action.view
        default:
            return state;
    }
}