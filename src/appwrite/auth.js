import { Account, Client, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteEndpoint)
      .setProject(conf.appwriteProjectId);
    // .setDevKey(conf.appwriteDevKey);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password }); // auto-login
      }
      return userAccount;
    } catch (err) {
      console.log("APPWRITE :: CREATE ACCOUNT ERROR :: ", err);
      throw err;
    }
  }

  async login({ email, password }) {
    try {
      const emailPassSession = await this.account.createEmailPasswordSession(
        email,
        password
      );
      return emailPassSession;
    } catch (err) {
      console.log("LOGIN ERROR :: ", err);
      throw err;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (err) {
      console.log("APPWRITE :: USER INFO ERROR :: ", err);
      return null;
    }
  }

  async logout() {
    try {
      await this.account.deleteSession("current"); // ✅ correct way
    } catch (err) {
      console.log("APPWRITE :: LOGOUT ERROR :: ", err);
      throw err;
    }
  }
}

const authService = new AuthService();
export default authService;
