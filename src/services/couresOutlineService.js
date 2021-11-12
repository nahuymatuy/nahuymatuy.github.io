import firebase from "../firebase";

const db = firebase.ref("/crsoutlines");

class couresOutlineService {
  getAll() {
    return db;
  }

  create(crsoutline) {
    return db.push(crsoutline);
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

export default new couresOutlineService();
