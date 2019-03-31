const {Command, flags} = require('@oclif/command')
const chalk = require('chalk')
const {Todo} = require('../db')

class ShowCommand extends Command {
  async run() {
    const res = await Todo.sortBy('id').value()
    res.forEach(({id, task, done}) => {
      this.log(
        `${chalk.magenta(id)} ${
          done ? chalk.green('DONE') : chalk.yellowBright('NOT DONE')
        } : ${task}`
      )
    })
  }
}

ShowCommand.description = `Shows existing tasks
...
Shows all the tasks sorted by their ids
`

module.exports = ShowCommand
