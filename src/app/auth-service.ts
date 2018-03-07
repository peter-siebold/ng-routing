export class AuthService {
  loggedIn = false;
  isAuthenticated() {
    const promse = new Promise((resolve, rejectr) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });
    return promse;
  }
  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }
}
