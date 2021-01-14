import { Router } from 'express';
import { getTodos, addTodo, updateTodo, deleteTodo } from '../controllers/todos';

const router: Router = Router();

// router.get(
//     '/',
//     async (req, res): Promise<void> => {
//         console.log('Got a hit');
//         res.send('Yoo, Your Server running with TS');
//     },
// );

router.get('/todos', getTodos);

router.post('/add-todo', addTodo);

router.put('/edit-todo/:id', updateTodo);

router.delete('/delete-todo/:id', deleteTodo);

export default router;
