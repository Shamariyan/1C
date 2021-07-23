export const SET_PHONENUMBER = 'SET_PHONENUMBER';
export const SET_OTP = 'SET_OTP';

export const setPhoneNumber = number => dispatch => {
	dispatch({
		type: SET_PHONENUMBER,
		payload: number
	});
};
export const setOtp = otp => dispatch => {
	dispatch({
		type: SET_OTP,
		payload: otp
	});
};
