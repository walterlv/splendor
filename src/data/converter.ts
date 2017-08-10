import * as color from 'Color';

function tokenToName(tag: string): string {
    switch (tag) {
    case 'w':
        return 'Diamond';
    case 'b':
        return 'Sapphire';
    case 'g':
        return 'Emerald';
    case 'r':
        return 'Ruby';
    case 'k':
        return 'Onyx';
    case 'y':
        return 'Gold';
    default:
        throw tag;
    }
}

function tokenToLocalizedName(tag: string): string {
    switch (tag) {
    case 'w':
        return '钻石';
    case 'b':
        return '蓝宝石';
    case 'g':
        return '翡翠';
    case 'r':
        return '红宝石';
    case 'k':
        return '玛瑙';
    case 'y':
        return '黄金';
    default:
        throw tag;
    }
}

function tokenToColor(tag: string): color {
    switch (tag) {
    case 'w':
        return color('white');
    case 'b':
        return color('#082567');
    case 'g':
        return color('#50C878');
    case 'r':
        return color('#CC0080');
    case 'k':
        return color('black');
    case 'y':
        return color('yellow');
    default:
        throw tag;
    }
}

export { tokenToName, tokenToLocalizedName, tokenToColor };
