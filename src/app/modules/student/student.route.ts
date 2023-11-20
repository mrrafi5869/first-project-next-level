import express from 'express';
import { studentControllers } from './student.crontroller';

const router = express.Router();

//will call controller function
router.post('/create-student', studentControllers.createStudent);
router.get('/', studentControllers.getAllDatas);
router.get('/:studentId', studentControllers.getSingleStudent);

export const StudentRoutes = router;
