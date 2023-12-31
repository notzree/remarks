import { BaseClassifier } from "./base-classsifier";


enum InstagramClassifierLabels {
    Benign = "Benign",
    Malicious = "Malicious"
}


//Instagram classifier class that extends the base classifier
export class InstagramClassifier extends BaseClassifier<InstagramClassifierLabels> {
    classify(text: string): InstagramClassifierLabels {
        //TODO: Implement
        return InstagramClassifierLabels.Benign;

    }
}