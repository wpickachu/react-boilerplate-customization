import { takeLatest, put, call } from "redux-saga/effects";
import * as actions from "./actions";
import * as types from "./types";

const serverURL = "http://127.0.0.1:8000"

const submitLogIn = function*({ payload }) {
    try {
		// const resp = yield axios.post(serverURL + "/log-in", payload);
		yield put(actions.setToken("token"));
	} catch (e) {
	}
};

export default function* rootSaga() {
    yield takeLatest(types.SET_USER_INFO, submitLogIn);
}
