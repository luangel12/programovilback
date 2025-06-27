'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        user_id: 1,
        username: "JavierTrujillo",
        email: "javiertrujillo@example.com",
        password: "123456",
        college_id: 1,
        image_url: "https://i.pravatar.cc/150?img=1"
      },
      {
        user_id: 2,
        username: "LuciaMendoza",
        email: "luciamendoza@example.com",
        password: "123456",
        college_id: 1,
        image_url: "https://i.pravatar.cc/150?img=2"
      },
      {
        user_id: 3,
        username: "CarlosPerez",
        email: "carlosperez@example.com",
        password: "123456",
        college_id: 2,
        image_url: "https://i.pravatar.cc/150?img=3"
      },
      {
        user_id: 4,
        username: "AnaRamirez",
        email: "anaramirez@example.com",
        password: "123456",
        college_id: 2,
        image_url: "https://i.pravatar.cc/150?img=4"
      },
      {
        user_id: 5,
        username: "MiguelLopez",
        email: "miguellopez@example.com",
        password: "123456",
        college_id: 3,
        image_url: "https://i.pravatar.cc/150?img=5"
      },
      {
        user_id: 6,
        username: "LauraTorres",
        email: "lauratorres@example.com",
        password: "123456",
        college_id: 3,
        image_url: "https://i.pravatar.cc/150?img=6"
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
