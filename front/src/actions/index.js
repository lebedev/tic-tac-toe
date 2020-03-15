import { bindActionCreators } from 'redux';

import store from '../store';
import * as actionCreators from './all';

export default bindActionCreators(actionCreators, store.dispatch);
