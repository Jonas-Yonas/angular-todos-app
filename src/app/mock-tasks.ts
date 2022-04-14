import { Task } from './models/Task';

export const MockTasks: Task[] = [
  {
    id: 1,
    text: 'Elasbi Meeting',
    day: 'April 15th at 10:00am',
    reminder: true,
  },
  {
    id: 2,
    text: 'Meeting Vice',
    day: 'April 16th at 2:30pm',
    reminder: false,
  },
  {
    id: 3,
    text: 'Doctors Appointment',
    day: 'May 5th at 2:30pm',
    reminder: true,
  },
  {
    id: 4,
    text: 'Meeting at School',
    day: 'May 6th at 1:30pm',
    reminder: true,
  },
  {
    id: 5,
    text: 'Food Shopping',
    day: 'May 7th at 12:30pm',
    reminder: false,
  },
];
