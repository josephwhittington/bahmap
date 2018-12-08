const baseUrl = "https://www.military.com/benefits/veteran-state-benefits";

function getStateUrl(state) {
    stateURL = `${renameState(state)}-veteran-benefits.html`;

    url = `${baseUrl}/${stateURL}`;
    return url;
}

South - carolina;
// (str.includes("world")) -- returns true/false

function renameState(state) {
    state = state.toLowerCase();

    if (state.includes(" ")) {
        return state.replace(/\s+/, "-");
    }
    return state;
}
