const db = require("../config/db");


const Habit = {



    async create(data){


        const result = await db.query(

        `
        INSERT INTO habits
        (
            user_id,
            name,
            description,
            frequency
        )

        VALUES($1,$2,$3,$4)

        RETURNING *

        `,

        [

            data.user_id,

            data.name,

            data.description,

            data.frequency

        ]

        );


        return result.rows[0];


    },






    async getAll(user_id){


        const result = await db.query(

        `
        SELECT *

        FROM habits

        WHERE user_id=$1

        ORDER BY created_at DESC

        `,

        [

            user_id

        ]

        );


        return result.rows;


    },







    async complete(id){


        const result = await db.query(

        `
        UPDATE habits

        SET completed = NOT completed

        WHERE id=$1

        RETURNING *

        `,

        [

            id

        ]

        );


        return result.rows[0];


    },







    async delete(id){


        const result = await db.query(

        `
        DELETE FROM habits

        WHERE id=$1

        RETURNING *

        `,

        [

            id

        ]

        );


        return result.rows[0];


    }


};



module.exports = Habit;