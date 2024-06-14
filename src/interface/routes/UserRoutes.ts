import express from 'express';
import { getAllUsers, getUserById, createUser } from '../../domain/service/UserService';

const router = express.Router();

router.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await getUserById(Number(id));
    if (user) {
    /*
        #swagger.tags = ['User']
        #swagger.summary = 'List user by id'
        #swagger.description = 'This endpoint will list the user account by id'
    */
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.post('/user', async (req, res) => {
  const { name, email, password } = req.body;       
    /*
        #swagger.tags = ['User']
        #swagger.summary = 'Create a new user'
        #swagger.description = 'This endpoint will create a new customer account'
    */
  try {
    const user = await createUser(name, email, password);
    res.status(201).json(user);
    /*  #swagger.responses[201] = {
                        description: "Cliente cadastrado com sucesso",
                    }   
            */
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

export default router;
