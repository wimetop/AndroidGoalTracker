const express = require("express")
const {
    getGoals,
    getGoal,
    addGoal,
    deleteGoal,
    updateGoal,
    toogleFavorite
} = require("../controllers/goalController")

const goalRouter = express.Router()

goalRouter.get('/', getGoals)
goalRouter.get('/:id', getGoal)
goalRouter.post('/', addGoal)
goalRouter.delete('/:id', deleteGoal)
goalRouter.put('/:id', updateGoal)
goalRouter.put('/:id', updateGoal);
goalRouter.put('/:id/toggleFavorite', toogleFavorite);
module.exports = goalRouter