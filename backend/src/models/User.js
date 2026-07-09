const db = require("../config/db");


const User = {


    create: async (

        name,

        email,

        password,

        phone,

        country,

        avatar

    ) => {


        const result = await db.query(

            `
            INSERT INTO users
            (
                name,
                email,
                password,
                phone,
                country,
                avatar
            )

            VALUES($1,$2,$3,$4,$5,$6)

            RETURNING *
            `,

            [

                name,

                email,

                password,

                phone,

                country,

                avatar

            ]

        );


        return result.rows[0];


    },


    findByEmail: async(email)=>{


        const result = await db.query(

            `
            SELECT *

            FROM users

            WHERE email=$1
            `,

            [

                email

            ]

        );


        return result.rows[0];


    }


};


module.exports = User;