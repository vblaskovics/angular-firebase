import { Injectable } from '@angular/core';
import { Firestore, collectionData, addDoc, collection, CollectionReference } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AwesomeService {
  awesomeCollection: CollectionReference;

  constructor(private firestore: Firestore) {
    this.awesomeCollection = collection(this.firestore, 'awesomes');
  }

  getAwesomes() {
    return collectionData(this.awesomeCollection);
  }

  addAwesome(title: string, url: string) {
    return addDoc(this.awesomeCollection, { title, url });
  }

}
