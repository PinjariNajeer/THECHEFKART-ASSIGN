const request = require('supertest');
const app = require('../app');
const { sequelize, User } = require('../models');

beforeAll(async () => {
  await sequelize.sync({ force: true });
  await User.create({ name: 'John', mobileNumber: 1234567890, address: 'Address' });
});

test('should create a post for a user', async () => {
  const res = await request(app).post('/api/posts/1').send({
    title: 'New Post',
    description: 'Post description',
    images: ['image1.jpg', 'image2.jpg'],
  });
  expect(res.statusCode).toEqual(201);
});
