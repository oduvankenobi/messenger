import Block from '../../utils/Block';
// import UnauthPageType from './unauthPageType';
import tmpl from './index.tpml';

export default class UnauthPageLayout extends Block {
    constructor(ctx) {
        super('div', {
            ctx,
            tmpl,
        });
    }
}
