export const getAllUsers = async (req, res) => {
  app.post("/api/signUp", async (req, res) => {
    const data = await sql`SELECT * FROM users`;
    console.log(data);
    res.send(data);
  });
};
