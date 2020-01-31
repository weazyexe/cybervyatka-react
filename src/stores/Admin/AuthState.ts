import {action, observable} from "mobx";
import { auth } from "../../repository/firebase/firebase";

export default class AuthState {

    private checkSessions = 0;

    @observable
    isSignedIn = false;

    @observable
    isLoading = false;

    @observable
    isFailure = false;

    @action
    checkAuthStatus() {
        // FIXME: check current user
        this.isLoading = true;
        if (auth.currentUser === null && this.checkSessions < 5) {
            setTimeout(() => {
                this.checkSessions++;
                this.checkAuthStatus();
            }, 200);
        } else if (auth.currentUser !== null) {
            this.isSignedIn = true;
            this.isLoading = false;
            this.checkSessions = 0;
        } else {
            this.isSignedIn = false;
            this.isLoading = false;
            this.checkSessions = 0;
        }
    }

    @action
    signIn(email: string, password: string) {

    }
}
