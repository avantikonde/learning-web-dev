interface User {
    id: number;
    name: string;
    role: "Admin" | "User"; 
}

class UserManager {
    private users: User[] = []; 

    addUser(newUser: User): void {
        this.users.push(newUser);
        console.log(`User "${newUser.name}" successfully added.`);
    }

    getUserById(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }
}

const manager = new UserManager();

manager.addUser({ id: 1, name: "Avanti", role: "Admin" });
manager.addUser({ id: 2, name: "Pranav", role: "User" });

const foundUser = manager.getUserById(1);
if (foundUser) {
    console.log(`Found: ${foundUser.name} (${foundUser.role})`);
}
