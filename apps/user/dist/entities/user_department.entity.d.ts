import { User } from './user.entity';
import { Department } from './department.entity';
export declare class UserDepartment {
    id: number;
    user: User;
    department: Department;
    assigned_at: Date;
}
