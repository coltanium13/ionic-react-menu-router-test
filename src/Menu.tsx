import React from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonMenu,
  IonList,
  IonListHeader,
  IonMenuToggle,
  IonIcon,
  IonLabel,
  IonItem,
} from '@ionic/react';

const Menu: React.FC = () => (
  <IonMenu contentId="main-content">
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>Menu</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent>
      <IonList>
        <IonListHeader>Navigate</IonListHeader>
        <IonMenuToggle auto-hide="false">
          <IonItem button>
            <IonIcon slot="start" name="home"></IonIcon>
            <IonLabel>Home</IonLabel>
          </IonItem>
        </IonMenuToggle>
      </IonList>
    </IonContent>
  </IonMenu>
);

export default Menu;
