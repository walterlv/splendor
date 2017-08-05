function cardTagToKey(tag) {
    switch (tag) {
        case 'w':
            return "White";
        case 'r':
            return "Red";
        case 'g':
            return "Green";
        case 'b':
            return "Blue";
        case 'k':
            return "Black";
    }
}

function cardTagToName(tag) {
    switch (tag) {
        case 'w':
            return "白";
        case 'r':
            return "红";
        case 'g':
            return "绿";
        case 'b':
            return "蓝";
        case 'k':
            return "黑";
    }
}

export { cardTagToKey, cardTagToName }
