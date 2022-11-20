import {  IonCol ,IonRow ,IonButtons ,IonButton, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonModal, IonPage, IonTitle, IonToolbar, IonGrid } from '@ionic/react';
import {add, closeOutline} from 'ionicons/icons'
import { useRef, useState } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const modal = useRef<HTMLIonModalElement>(null);

  const closeModal = () => {
    setIsOpenModal(false);
  }

  const openModal = () => {
    setIsOpenModal(true);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>List Ruangan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="dark">
        <IonFab slot="fixed" vertical="bottom" horizontal="end" onClick={openModal}>
          <IonFabButton>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>

        <IonModal ref={modal} isOpen={isOpenModal}>
          <IonHeader>
            <IonToolbar color="primary">
              <IonCol>
                <IonTitle>Modal</IonTitle>  
              </IonCol>
              <IonButtons slot='end'>
                <IonButton onClick={closeModal}>Cancel</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>

          <IonContent color="dark">
            
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Home;
