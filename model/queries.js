import pool from "../config/objectConections.js";

export const addUserQuery = async (name, phone) => {
  try {
    const sql = {
      text: "INSERT INTO users (name, phone) VALUES ($1, $2) RETURNING *",
      values: [name, phone],
    };
    const response = await pool.query(sql);

    return response.rows;
  } catch (error) {
    console.log(error.message);
  }
};

export const getUsersQuery = async() => {
    try {
        const sql = {
            text: "SELECT * FROM users",
            rowMode: "array",
        }
        const response = await pool.query(sql)
        return response.rows
    } catch (error) {
        console.log(error.message)
    }
}

export const getUsersQueryById = async(id) => {
    try {
        const sql = {
            text: "SELECT * FROM users where id = $1",
            values: [id],
            
        }
        const response = await pool.query(sql)
        return response.rows
    } catch (error) {
        console.log(error.message)
    }
}
