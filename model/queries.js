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
