import { take, put, call, takeEvery } from 'redux-saga/effects';
import imagesSaga from './imagesSaga';
// import { IMAGES } from '../constants/index';

// function* rootSaga() {
//     yield takeEvery(IMAGES.LOAD, handleImagesLoad);

// yield takeEvery('Login', workerSaga);
// yield take('Login');
// yield call(login);
// yield take('Logout');
// yield call(logout);
// }
// function* handleImagesLoad() {
//     console.log('fetching images from unsplash');

//     // console.log('Logged in');
// }

export default imagesSaga;
