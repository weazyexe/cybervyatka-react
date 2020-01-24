import TournamentSettings from "../model/TournamentSettings";
import {firestore} from "./firebase/firebase";

export default class Repository {
    async getTournamentSettings(): Promise<TournamentSettings> {
        const response = await firestore.doc('cybervyatka/tournament').get();

        return {
            isAnnounced: response.get("is_announced"),
            isRegistrationOpen: response.get("is_registration_open")
        };
    }
}