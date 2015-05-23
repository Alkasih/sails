/**
 * Connections
 * (sails.config.connections)
 */

module.exports.connections = {

  localDiskDb: {
    adapter: 'sails-disk'
  },

  // npm install sails-mongo --save

  sailsTraveler: {
    adapter: 'sails-mongo',
    host: 'localhost',
    port: 27017,
    // user: 'username',
    // password: 'password',
    // database: 'your_mongo_db_name_here'
  }

};
