const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");


// ======================
// Signup
// ======================

exports.signup = async (req, res) => {

    try {

        const {
            name,
            email,
            phone,
            country,
            password
        } = req.body;

        const avatar = req.file ? req.file.path : null;

        const existingUser = await User.findByEmail(email);

        if (existingUser) {

            return res.status(400).json({
                message: "Email already exists"
            });

        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create(
            name,
            email,
            hashedPassword,
            phone,
            country,
            avatar
        );

        res.status(201).json({

            message: "Signup successful",

            user

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            message: "Signup failed"

        });

    }

};


// ======================
// Login
// ======================

exports.login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findByEmail(email);

        if (!user) {

            return res.status(400).json({

                message: "Invalid email or password"

            });

        }

        const match = await bcrypt.compare(
            password,
            user.password
        );

        if (!match) {

            return res.status(400).json({

                message: "Invalid email or password"

            });

        }

        const token = jwt.sign(

            {

                id: user.id,

                email: user.email

            },

            process.env.JWT_SECRET,

            {

                expiresIn: "7d"

            }

        );

        res.json({

            message: "Login successful",

            token,

            user: {

                id: user.id,

                name: user.name,

                email: user.email,

                phone: user.phone,

                country: user.country,

                avatar: user.avatar

            }

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            message: "Server error"

        });

    }

};