# TC3005B.102 React Frontend

## Run locally

```bash
npm install
npm start
```

## Deploy

https://tc-3004-b-m4-a1.vercel.app/

## Repository link

https://github.com/Oscar-gg/TC3004B-M4A1

## M4 - Práctica React URL+Hooks+LifeCycle

- Dynamic URL: See `TaskInfo` when clicking on a task in the `TasksPage`. `TaskInfo` uses the `useParams` hook to get the task ID from the URL.
- Custom hooks:
  - `useItems`: Provides utilities to create, delete, and fetch tasks from the API.
  - `useAuth`: Manages authentication state and provides login/logout functionality.
- LifeCycle component (`Lifecycle.jsx`): logs messages to the console when mounted, unmounted, and updated. This is done in the `useEffect`.
