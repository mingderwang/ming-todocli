import {JSONFile, Low} from 'lowdb'
import { join } from 'path'

type Data = { todos: string[] }
const file = join(__dirname, 'db.json')
const adapter = new JSONFile<Data>(file)

export const db = new Low(adapter)
db.data ||= { todos: [] }
db.write()
export const Todo =db.data.todos

