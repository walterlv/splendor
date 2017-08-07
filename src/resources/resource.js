import w from './w.png';
import b from './b.png';
import g from './g.png';
import r from './r.png';
import k from './k.png';
import d from './d.png';

function cardTagToStoneImage(tag) {
    switch (tag) {
    case 'w':
        return w;
    case 'b':
        return b;
    case 'g':
        return g;
    case 'r':
        return r;
    case 'k':
        return k;
    case 'd':
        return d;
    default:
        throw tag;
    }
}

export { cardTagToStoneImage };
