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
import { useEffect, useState } from "react";
import { Storage } from "@ionic/storage";
import FormModal from "../components/FormModal";
import "./Home.css";

const Home: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [dataRuang, setDataRuang] = useState([]);
  const store = new Storage();

  useEffect(() => {
    const getAllRuang = async () => {
      await store.create();
      const data = await store.get("data-ruang");
      setDataRuang(data);
    };
    getAllRuang();
  }, []);

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const openModal = () => {
    setIsOpenModal(true);
  };

  console.log(dataRuang);
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
