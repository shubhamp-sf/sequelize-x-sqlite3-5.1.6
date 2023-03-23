import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");
const User = sequelize.define("User", {
  username: DataTypes.STRING,
  someIds: DataTypes.ARRAY(DataTypes.INTEGER),
});

await sequelize.sync({ force: true });

let janedoe = await User.create({
  username: "janedoe",
  someIds: [1, 2, 3],
});

const users = await User.findAll();

console.log(users);

/*
Sample Logs

Executing (default): DROP TABLE IF EXISTS `Users`;
Executing (default): PRAGMA foreign_keys = OFF
Executing (default): DROP TABLE IF EXISTS `Users`;
Executing (default): PRAGMA foreign_keys = ON
Executing (default): DROP TABLE IF EXISTS `Users`;
Executing (default): CREATE TABLE IF NOT EXISTS `Users` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `username` VARCHAR(255), `someIds` INTEGER[], `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);
Executing (default): PRAGMA INDEX_LIST(`Users`)
Executing (default): INSERT INTO `Users` (`id`,`username`,`someIds`,`createdAt`,`updatedAt`) VALUES (NULL,$1,$2,$3,$4);
Executing (default): SELECT `id`, `username`, `someIds`, `createdAt`, `updatedAt` FROM `Users` AS `User`;
[
  User {
    dataValues: {
      id: 1,
      username: 'janedoe',
      someIds: '[object Object]', 👈🏻
      createdAt: 2023-03-23T07:31:10.481Z,
      updatedAt: 2023-03-23T07:31:10.481Z
    },
    _previousDataValues: {
      id: 1,
      username: 'janedoe',
      someIds: '[object Object]', 👈🏻
      createdAt: 2023-03-23T07:31:10.481Z,
      updatedAt: 2023-03-23T07:31:10.481Z
    },
    uniqno: 1,
    _changed: Set(0) {},
    _options: {
      isNewRecord: false,
      _schema: null,
      _schemaDelimiter: '',
      raw: true,
      attributes: [Array]
    },
    isNewRecord: false
  }
]
*/
