import * as navigation  from './nav';

const reducers = {
	navigation: navigation.default
};

const actions = {
	...navigation,
	default: ''
};


export {
	reducers,
	actions
};
