# PROGMasters, Angular - Firebase tutorial

## Init dependencies
```sh
npm i firebase@9.23.0
npm i @angular/fire@7.6.1
npm i firebaseui@6.1.0
npm i firebaseui-angular
npm install rxfire@6.0.3 (különben nem fog futni: npm run build)
```


## Init firebase
```sh
npx firebase login
```

## Create Firebase project
- Login: https://firebase.google.com
- Console / New project
- Create Firestore app
- Create Firestore db in web, in test mode

## Setup Angular project to use Firebase

- Generate environments:

```sh
ng generate environments
```

- modify environment.ts and environment.evelopment.ts:

```js
export const environment = {
    firebase: {
        apiKey: "xxxxxxxxxxxxxxxxxx",
        authDomain: "xxxxx.firebaseapp.com",
        projectId: "xxxxxx",
        storageBucket: "xxxx.appspot.com",
        messagingSenderId: "xxxxxxx",
        appId: "1:xxxxxxxx:web:xxxxxxxxx"
    }
};
```

- Modify app.module.ts, to use firebase libraries:

```js
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [],
  imports: [
    ...
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ]
})
export class AppModule { }
```

- Init firebase inside Angular project, to generate Firebase specific files ( default public directory in angular: dist/project_name)

```sh
npx firebase init
```

- Build project
```sh
npm run build
```

- Deploy project
```sh
npx firebase deploy
```

# Feladatok

- Navigáció befejezése
- Kattintható awesome-ok
- Awesome-ok szerkesztése
- Awesome counter megjelenítése
- Kijelentkezés


