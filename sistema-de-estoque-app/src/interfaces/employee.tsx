interface Employee {
  id: number;
  name: string;
  position: string;
  salary: number;
  hireDate: string;
  email: string;
}

interface EmployeeValidation {
  name: string;
  position: string;
  salary: number;
  hireDate: Date;
  email: string;
}