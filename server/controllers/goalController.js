const Goal = require('../models/goalModel')

const getGoals = async (req, res) => {
    const goals = await Goal.find({})
    res.json(goals)
}

const getGoal = async (req, res) => {
    const id = req.params.id

    const goal = await Goal.findById(id)

    if (goal)
        res.json(goal)
    else
        res.status(404).json({ message: "Goal not found" })
}

const addGoal = async (req, res) => {

    const { title, description } = req.body

    const goal = await Goal.create({
        title,
        description
    })

    res.json(goal)
}

const deleteGoal = async (req, res) => {
    const id = req.params.id
    const goal = await Goal.findByIdAndDelete(id)
    res.json(goal)
}

const updateGoal = async (req, res) => {
    const id = req.params.id
    const { title, description } = req.body

    const goal = await Goal.findByIdAndUpdate(
        id,
        { title, description },
        { new: true }
    )

    res.json(goal)
}

const toogleFavorite = async (req, res) => {
  try {
    const goal = await Goal.findById(req.params.id);
    if (!goal) return res.status(404).json({ message: "Goal not found" });

    goal.isFavorite = !goal.isFavorite;
    const updatedGoal = await goal.save();
    res.json(updatedGoal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
    getGoals,
    getGoal,
    addGoal,
    deleteGoal,
    updateGoal,
    toogleFavorite
}