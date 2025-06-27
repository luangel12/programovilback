'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('colleges', [
      {
        college_id: 1,
        name: 'Universidad de Lima',
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLV7QKUXe0yNPpaBBv7c2YO-w45tYVIfdKKw&s',
        teachers_amount: 120
      },
      {
        college_id: 2,
        name: 'Universidad Autonoma Metropolitana',
        image_url: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/012011/untitled-1_6.png?itok=kAcHD1tL',
        teachers_amount: 120
      },
      {
        college_id: 3,
        name: 'Pontificia Universidad Católica del Perú',
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxPWMnGYOZ0ZwhAzmtDxon-JMjnr3sDRkCqQ&s',
        teachers_amount: 120
      },
      {
        college_id: 4,
        name: 'UTEC',
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/UTEC-Logo.jpg/960px-UTEC-Logo.jpg',
        teachers_amount: 120
      },
      {
        college_id: 5,
        name: 'Universidad Nacional de San Agustín de Arequipa',
        image_url: 'https://xxvicongresoperuanoquimica2012.wordpress.com/wp-content/uploads/2012/07/unsa.png',
        teachers_amount: 120
      },
      {
        college_id: 6,
        name: 'Universidad Nacional de Trujillo',
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo-teRUlBUWINfwycZRLFvwmxrGxVnnsrqbg&s',
        teachers_amount: 120
      },
      {
        college_id: 7,
        name: 'Universidad Nacional Mayor de San Marcos',
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxf49uTNFrTn-j01GqhHYJBd0XIc5IgNKAtg&s',
        teachers_amount: 120
      },
      {
        college_id: 8,
        name: 'Universidad ESAN',
        image_url: 'https://carrerasuniversitarias.pe/logos/original/logo-universidad-esan.webp',
        teachers_amount: 120
      },
      {
        college_id: 9,
        name: 'Universidad del Pacífico',
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIC0AeNPiyXIht6eyDqTTRFL1gMNWC0GnGlQ&s',
        teachers_amount: 120
      },
      {
        college_id: 10,
        name: 'Universidad Nacional ',
        image_url: 'https://dondeestudiar.pe/wp-content/uploads/2023/01/Unsaac.jpg',
        teachers_amount: 120
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('colleges', null, {});
  }
};
