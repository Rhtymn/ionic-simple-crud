import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { Storage } from "@ionic/storage";
import FormModal from "../components/FormModal";
import "./Home.css";
import FloatButton from "../components/FloatButton";
import OptionModal from "../components/OptionModal";

const Home: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenOptionModal, setIsOpenOptionModal] = useState(false);
  const [dataRuang, setDataRuang] = useState([]);
  const [selectedRuang, setSelectedRuang] = useState({});
  const store = new Storage();

  useEffect(() => {
    const getAllRuang = async () => {
      await store.create();
      const data = await store.get("data-ruang");
      setDataRuang(data);
    };
    getAllRuang();
  }, [isOpenModal, isOpenOptionModal]);

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const openModal = () => {
    setIsOpenModal(true);
  };

  const clickRuangItemHandler = (e: any) => {
    const selectedItem = e.target.closest("ion-item");
    const gedung = selectedItem.children[0].innerText[0];
    const noRuang = selectedItem.children[0].innerText.substring(1);
    const kapasitas = selectedItem.children[1].innerText;
    setSelectedRuang({ gedung, noRuang, kapasitas });
    setIsOpenOptionModal(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>List Ruangan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="dark">
        <FloatButton onClickFButton={openModal} />
        {dataRuang.map((data: any, idx: Number) => {
          return (
            <IonItem
              onClick={clickRuangItemHandler}
              key={`${idx}`}
              color="dark"
            >
              <IonLabel>{`${data.gedung}${data.noRuang}`}</IonLabel>
              <IonText>{`${data.kapasitas}`}</IonText>
            </IonItem>
          );
        })}
      </IonContent>
      <FormModal isOpenModal={isOpenModal} onCloseModal={closeModal} />
      <OptionModal
        selectedRuang={selectedRuang}
        isOpenModal={isOpenOptionModal}
        onOpenModal={setIsOpenOptionModal}
      />
    </IonPage>
  );
};

export default Home;
