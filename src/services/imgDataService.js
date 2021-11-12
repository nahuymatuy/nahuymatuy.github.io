import firebase from "../firebase";

const db = firebase.ref("/imgs");

class imgDataService {
  getAll() {
    return db;
  }

  create(img) {
    return db.push(img);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new imgDataService();
