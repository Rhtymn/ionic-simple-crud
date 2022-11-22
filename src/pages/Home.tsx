import {
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { add } from "ionicons/icons";
import { useState } from "react";
import FormModal from "../components/FormModal";
import "./Home.css";

const Home: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const openModal = () => {
    setIsOpenModal(true);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>List Ruangan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="dark">
        <IonFab
          slot="fixed"
          vertical="bottom"
          horizontal="end"
          onClick={openModal}
        >
          <IonFabButton>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>

      <FormModal isOpenModal={isOpenModal} onCloseModal={closeModal} />
    </IonPage>
  );
};

export default Home;
