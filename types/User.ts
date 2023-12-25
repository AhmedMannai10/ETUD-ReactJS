export default interface User {
  username: string;
  password: string; // Note: In real applications, passwords should be securely hashed and not stored in plain text.
  email: string;
  firstName: string;
  lastName: string;
  profilePicture?: string; // Optional profile picture
}
