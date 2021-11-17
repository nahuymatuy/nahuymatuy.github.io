import firebase from "../firebase";

const db = firebase.ref("/blogs");

class blogService {
  getAll() {
    return db;
  }

  create(blog) {
    return db.push(blog);
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

export default new blogService();
