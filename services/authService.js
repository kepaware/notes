import { ID } from "react-native-appwrite";
import { account } from "./appwrite";

const authService = {
  //Register a User:
  async register(email, password) {
    try {
      const response = await account.create(ID.unique(), email, password);
      return response;
    } catch (error) {
      console.error("Error: ", error.message);
      return {
        error: error.message || "Registration failed.  Please try again",
      };
    }
  },

  //Login
  async login(email, password) {
    try {
      const response = await account.createEmailPasswordSession(
        email,
        password
      );
      return response;
    } catch (error) {
      console.error("Error: ", error.message);
      return {
        error: error.message || "Login failed.  Please check your credentials.",
      };
    }
  },

  //Get Current User:
  async getUser() {
    try {
      return await account.get();
    } catch {
      return null;
    }
  },

  //Logout:
  async logout() {
    try {
      await account.deleteSession("current");
    } catch (error) {
      console.error("Error: ", error.message);
      return {
        error: error.message || "Logout failed.  Please try again",
      };
    }
  },
};

export default authService;
