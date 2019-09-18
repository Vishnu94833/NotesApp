import { HomepageModel } from "../homepage.model";

export class HomepageViewModel{
    attendance : Array<HomepageModel> = new Array<HomepageModel>();
    avgWrk : HomepageModel = new HomepageModel();
}