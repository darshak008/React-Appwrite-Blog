import { Account, Client, ID } from "appwrite";
import { conf } from "../conf/conf.js";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(`${conf.appwriteUrl}`)
      .setProject(conf.appwriteProjectId);
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
        return this.login({ email, password });
      }
    } catch (err) {
      throw err;
    }
  }

  async login({ email, password }) {
    try {
      const emailPassSession = this.account.createEmailPasswordSession(
        email,
        password
      );
      console.log(emailPassSession);
      return emailPassSession;
    } catch (err) {
      throw err;
    }
  }

  async getCurrentUser() {
    try {
      const res = await this.account.get();
      return res;
    } catch (err) {
      return null;
    }
  }
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (err) {
      throw err;
    }
  }
}

const authService = new AuthService();

export default authService;
