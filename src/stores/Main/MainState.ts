import {action, observable} from "mobx";
import TournamentSettings from '../../model/TournamentSettings'
import Repository from "../../repository/Repository";
import Partner from "../../model/Partner";

export default class MainState {

    private repository = new Repository();

    @observable
    isLoading = false;

    @observable
    isPartnersLoading = false;

    @observable
    settings: TournamentSettings = {
        isAnnounced: false,
        isRegistrationOpen: false
    };

    @observable
    partners: Partner[] = [];

    @action
    async getTournamentSettings() {
        this.isLoading = true;
        this.settings = await this.repository.getTournamentSettings();
        this.isLoading = false;
    }

    @action
    async getPartners() {
        this.isPartnersLoading = true;
        this.partners = await this.repository.getPartners();
        this.isPartnersLoading = false;
    }
}
