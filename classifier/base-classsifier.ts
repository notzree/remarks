

//Base classifier class that all other classifiers will extend Generic type incase we move on to moderating more than text
export abstract class BaseClassifier<T> {
    //TODO: Add other methods that are common to all classifiers 
    abstract classify(text: string): T;
}




