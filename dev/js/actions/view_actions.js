export const selectPractices = (team) => {
    return {
        type: "SELECT_PRACTICES",
        view: "practices"
    }
}

export const selectStats = (team) => {
    console.log("Stats selected");
    return {
        type: "SELECT_STATISTICS",
        view: "stats"
    }
}