const User = require('./User');
const Item = require('./Item');

User.hasMany(Item, {
  foreignKey: 'item_id',
});

Item.belongsTo(User, {
  foreignKey: 'item_id',
});

module.exports = { User };
