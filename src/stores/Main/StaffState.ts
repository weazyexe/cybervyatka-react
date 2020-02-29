import {action, observable} from "mobx";
import Person from "../../model/Person";
import Repository from "../../repository/Repository";

export default class StaffState {

    private repository = new Repository();

    @observable
    isLoading = false;

    @observable
    staff: Person[] = [];

    @action
    async getStaff() {
        this.isLoading = true;
        this.staff = await this.repository.getStaff();
        this.isLoading = false;
    }
}