// backend/models/Pump.js
const db = require('../db');

class Pump {
  static create(data, callback) {
    db.run(`INSERT INTO pumps (name, oil_company, location, district, state, dealer, manager) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [data.name, data.oil_company, data.location, data.district, data.state, data.dealer, data.manager], callback);
  }
  static getAll(callback) {
    db.all(`SELECT * FROM pumps`, [], callback);
  }
}
module.exports = Pump;
