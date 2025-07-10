import db from '../models/index.js';

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users (JWT required)
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of users
 *       401:
 *         description: Unauthorized
 */
export const getUsers = async (req, res) => {
  try {
    const users = await db.User.findAll({ attributes: ['id', 'name', 'email'] });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch users.' });
  }
};
