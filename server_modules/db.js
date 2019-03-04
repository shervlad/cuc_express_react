const assert = require("assert");
const client = require("mongodb").MongoClient;
const config = require("config");

let _db;

function initDb(callback) {
  if (_db) {
            console.warn("Trying to init DB again!");
            return callback(null, _db);
  }
  client.connect(config.db.url, config.db.connectionOptions, connected);

  function connected(err, client) {
    if (err) {
        return callback(err);
    }

        _db = client.db("cuc");
        console.log("DB initialized - connected to: " + config.db.url);
        return callback(null, _db);
  }
}

function getDb() {
      assert.ok(_db, "Db has not been initialized. Please called init first.");
      return _db;

}

module.exports = {
      getDb,
      initDb
};
