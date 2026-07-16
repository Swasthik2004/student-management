const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Temporary in-memory database
let students = [
  {
    id: 1,
    name: "Rahul",
    age: 21,
    department: "CSE",
  },
  {
    id: 2,
    name: "Swasthik",
    age: 22,
    department: "ECE",
  },
];

// GET
app.get("/students", (req, res) => {
  res.json(students);
});

// POST
app.post("/students", (req, res) => {
  const student = {
    id: Date.now(),
    ...req.body,
  };

  students.push(student);
  res.json(student);
});

// PUT
app.put("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  students = students.map((s) =>
    s.id === id ? { ...s, ...req.body } : s
  );

  res.json({ message: "Updated Successfully" });
});

// DELETE
app.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  students = students.filter((s) => s.id !== id);

  res.json({ message: "Deleted Successfully" });
});

app.listen(5000, () => {
  console.log("🚀 Backend running on port 5000");
});
