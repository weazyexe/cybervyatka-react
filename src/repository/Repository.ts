import TournamentSettings from "../model/TournamentSettings";
import {firestore, storage} from "./firebase/firebase";
import Partner from "../model/Partner";

export default class Repository {
    async getTournamentSettings(): Promise<TournamentSettings> {
        const response = await firestore.doc('cybervyatka/tournament').get();

        return {
            isAnnounced: response.get("is_announced"),
            isRegistrationOpen: response.get("is_registration_open")
        };
    }

    async getPartners(): Promise<Partner[]> {
        const docs = (await firestore.collection('cybervyatka/tournament/partners').get()).docs;
        const partners: Partner[] = [];

        for (const doc of docs) {
            const docData = doc.data();
            const logoLink = await storage.ref(docData.logo).getDownloadURL();
            partners.push({
                id: docData.id,
                title: docData.title,
                logo: logoLink
            });
        }

        return partners;
    }
}