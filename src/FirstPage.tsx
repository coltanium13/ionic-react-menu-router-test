import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenuToggle, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from 'react'


const FirstPage: React.FC = () => (

  <IonPage className="ion-page" id="main-content-must-be-same">
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuToggle>
            <IonButton>
              <IonIcon slot="icon-only" name='menu'></IonIcon>
            </IonButton>
          </IonMenuToggle>
        </IonButtons>
        <IonTitle>Header</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <h1>Main Content</h1>
      <p>Click the icon in the top left to toggle the menu.</p>
    </IonContent>
  </IonPage>
);

export default FirstPage;