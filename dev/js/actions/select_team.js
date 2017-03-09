export const selectTeam = (team) => {
    console.log("Team selected: " + team.name);
    return {
        type: "TEAM_SELECTED",
        team: team,
        id: team.id,
    }
}

export const deselectTeam = (team) => {
    return {
        type: "TEAM_DESELECT",
        value: false
    }
}


