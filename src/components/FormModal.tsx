import React, { useEffect, useState } from "react";
import { Storage } from "@ionic/storage";
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonCol,
  IonButton,
  IonButtons,
  IonContent,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonItem,
} from "@ionic/react";

interface ModalProps {
  isOpenModal: boolean;
  onCloseModal: () => void;
}

const FormModal: React.FC<ModalProps> = (props) => {
  const [noRuang, setNoRuang] = useState("");
  const [kapasitas, setKapasitas] = useState("");
  const [gedung, setGedung] = useState("");
  const store: Storage = new Storage();

  useEffect(() => {
    const createStore = async () => {
      await store.create();
    };
    createStore();
  }, [store]);

  const noRuangChangeHandler = (e: any) => {
    setNoRuang(e.target.value);
  };
  const kapasitasChangeHandler = (e: any) => {
    setKapasitas(e.target.value);
  };
  const gedungChangeHandler = (e: any) => {
    setGedung(e.target.value);
  };

  const resetInput = () => {
    setNoRuang("");
    setKapasitas("");
    setGedung("");
  };

  const createRuang = async (newRuang: any, storage: Storage) => {
    let dataRuang = await storage.get("data-ruang");
    if (!dataRuang) {
      await storage.set("data-ruang", []);
      dataRuang = await storage.get("data-ruang");
    }
    await storage.set("data-ruang", [...dataRuang, newRuang]);
  };

  const addRuangHandler = async (e: any) => {
    if (noRuang && kapasitas && gedung) {
      const newRuang = { noRuang, kapasitas, gedung };
      createRuang(newRuang, store);
      const allRuang = await store.get("data-ruang");
      await console.log(allRuang);
      resetInput();
    }
  };

  return (
    <IonModal isOpen={props.isOpenModal}>
      <IonHeader>
        <IonToolbar color="primary">
          <IonCol>
            <IonTitle>Form Ruangan</IonTitle>
          </IonCol>
          <IonButtons slot="end">
            <IonButton onClick={props.onCloseModal}>Cancel</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent color="dark" class="ion-padding">
        <div className="mb">
          <IonItem color="dark">
            <IonLabel>Gedung</IonLabel>
            <IonSelect
              value={gedung}
              onIonChange={gedungChangeHandler}
              slot="end"
              interface="action-sheet"
              placeholder="Pilih Gedung"
            >
              <IonSelectOption value="A">A</IonSelectOption>
              <IonSelectOption value="B">B</IonSelectOption>
              <IonSelectOption value="E">E</IonSelectOption>
            </IonSelect>
          </IonItem>
        </div>
        <div className="mb">
          <IonItem color="dark">
            <IonLabel position="floating">No Ruang</IonLabel>
            <IonInput
              value={noRuang}
              onIonChange={noRuangChangeHandler}
              type="number"
              placeholder="Masukkan no ruang"
            />
          </IonItem>
        </div>
        <div className="mb">
          <IonItem color="dark">
            <IonLabel position="floating">Kapasitas</IonLabel>
            <IonInput
              value={kapasitas}
              onIonChange={kapasitasChangeHandler}
              type="number"
              placeholder="Masukkan kapasitas ruang"
            />
          </IonItem>
        </div>
        <IonButton onClick={addRuangHandler} expand="full">
          Add
        </IonButton>
      </IonContent>
    </IonModal>
  );
};

export default FormModal;
