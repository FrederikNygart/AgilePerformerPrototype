

var initialState = [
        {
            name: "Team Blue",
            id: 1,
            selected: false
        },
        {
            name: "Team Green",
            id: 2,
            selected: false

        },
        {
            name: "Team Red",
            id: 3,
            selected: false

        }
    ];

export default function teamReducer(state = initialState, action) {

    console.log("Reducer called!")
    switch (action.type) {
        case 'TEAM_SELECTED':
            return state.map(team => {
                if (team.id !== action.id) {
                    return team;
                }
                return {
                    ...team,
                    selected: !team.selected
                };
            });

        default:
            return state;
    }
}
