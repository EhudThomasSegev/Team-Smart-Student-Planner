const express = require('express');
const app = express();
const PORT = 5000;

// נקודת קצה (Endpoint) לבדיקה שהשרת חי
app.get('/', (req, res) => {
  res.send('Student Planner Server is Up and Running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});