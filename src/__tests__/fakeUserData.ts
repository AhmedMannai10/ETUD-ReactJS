
import User from '../../types/User';

// Sample User Data
const sampleUser: User = {
  username: 'johnDoe123',
  password: 'securePassword123', // For demonstration purposes; in a real application, you'd hash this.
  email: 'john.doe@example.com',
  firstName: 'John',
  lastName: 'Doe',
  profilePicture: 'john-doe-profile.jpg'
};

// Export sample user data
export const users: User[] = [sampleUser];
