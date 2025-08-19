const express = require("express");
const { signup, verifyEmail, login } = require("../controllers/authController");

const router = express.Router();

// User signup with email verification

/**
* @swagger
* /api/auth/signup:
*   post:
*     summary: create User
*     tags:
*       - Auth
*     produces:
*       - application/json
*     parameters:
 *      - in: body
 *        name: Add User
 *        description: Add User in MongoDB.
 *        schema:
 *          type: object
 *          required:
 *            - name
 *            - email
 *            - password
 *            - bio
 *          properties:
 *            name:
 *              type: string
 *            email:
 *              type: string
 *            password:
 *              type: string
 *            bio:
 *              type: string
*     responses:
*        200:
*          description: Success
*        400:
*          description: Bad Request
*        500:
*          description: Server Error
*/
router.post("/signup", signup);



// Email verification
/**
 * @swagger
 * /api/auth/verify:
 *  get:
 *    summary: Email verification successfull
 *    tags:
 *       - Auth
 *    produces:
 *      - application/json
 *    responses:
 *      '200':
 *        description: Email verification successfully.
 */
router.get("/verify", verifyEmail);




// Login
/**
* @swagger
* /api/auth/login:
*   post:
*     summary: Login Success
*     tags:
*       - Auth
*     produces:
*       - application/json
*     parameters:
 *      - in: body
 *        name: Login
 *        description: Login Successfull.
 *        schema:
 *          type: object
 *          required:
 *            - email
 *            - password
 *          properties:
 *            email:
 *              type: string
 *            password:
 *              type: string
*     responses:
*        200:
*          description: Success
*        400:
*          description: Bad Request
*        500:
*          description: Server Error
*/
router.post("/login", login);

module.exports = router;
