import { SET_LOCATION, SET_OTP, SET_PHONENUMBER } from './actions';

const initialState = {
	number: '',
	otp: '',
	location: null
};

function loginReducer(state = initialState, action) {
	switch (action.type) {
		case SET_PHONENUMBER:
			return { ...state, number: action.payload };
		case SET_OTP:
			return { ...state, otp: action.payload };
		case SET_LOCATION:
			return { ...state, location: action.payload };
		default:
			return state;
	}
}

export default loginReducer;
