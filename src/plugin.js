import BwMaterial from 'bw-material/dist';
import 'bw-material/dist/index.css';

import {
    UncleHeader
} from './components';

export default {
    install(Vue, options) {
        Vue.use(BwMaterial);
        Vue.component('UncleHeader', UncleHeader);
    }
}