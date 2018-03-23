export const wait = (state={visible: false}, action) => {
    switch(action.type) {
    case "SHOW_WAIT":
        return { visible: true };
    case "HIDE_WAIT":
        return {visible: false};
    }
    return state;
}
