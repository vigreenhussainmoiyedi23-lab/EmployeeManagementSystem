const employees = [
  {
    "id": 1,
    "username": "Alice",
    "email": "alice.dev@example.com",
    "password": "Alice@123",
    "task": [],
    "taskCounter": {
      "failed": 0,
      "completed": 0,
      "new": 0,
      "active": 0
    }
  },
  {
    "id": 2,
    "username": "Michael",
    "email": "michael.dev@example.com",
    "password": "Michael@456",
    "task": [    ],
    "taskCounter": {
      "failed": 0,
      "completed": 0,
      "new": 0,
      "active": 0
    }
  },
  {
    "id": 3,
    "username": "Sophia",
    "email": "sophia.dev@example.com",
    "password": "Sophia@789",
    "task": [],
    "taskCounter": {
      "failed": 0,
      "completed": 0,
      "new": 0,
      "active": 0
    }
  }
];
const admin = [{
    "username":"Hussain",
    "role":"admin",
    "email": "admin@company.com",
    "password": "Admin@123"
},
]
export const SetlocalStorage = () => {
    localStorage.setItem(`employees`, JSON.stringify(employees))
    localStorage.setItem(`admin`, JSON.stringify(admin))
}
export const GetlocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem(`employees`))
    const admin = JSON.parse(localStorage.getItem(`admin`))
   return {admin,employees}
}