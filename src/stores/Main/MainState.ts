import React from "react";
import {action, observable} from "mobx";
import TournamentSettings from '../../model/TournamentSettings'
import Repository from "../../repository/Repository";

export default class MainState {

    private repository = new Repository();

    @observable
    isLoading = false;

    @observable
    settings: TournamentSettings = {
        isAnnounced: false,
        isRegistrationOpen: false
    };

    @action
    async getTournamentSettings() {
        this.isLoading = true;
        this.settings = await this.repository.getTournamentSettings();
        this.isLoading = false;
    }
}
