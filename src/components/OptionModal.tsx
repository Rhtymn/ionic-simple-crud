import React from "react";
import { IonModal, IonList, IonItem, IonLabel } from "@ionic/react";

interface OptionModalProps {
  isOpenModal: boolean;
  onOpenModal: (arg: boolean) => void;
  onDeleteRuang: () => void;
}

const OptionModal: React.FC<OptionModalProps> = ({
  isOpenModal,
  onOpenModal,
  onDeleteRuang,
}) => {
  return (
    <IonModal
      id="option-modal"
      isOpen={isOpenModal}
      onIonModalDidDismiss={() => onOpenModal(false)}
    >
      <div className="wrapper">
        <h1>Option</h1>

        <IonList lines="none">
          <IonItem onClick={onDeleteRuang}>
            <IonLabel>Delete Ruang</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Update Ruang</IonLabel>
          </IonItem>
        </IonList>
      </div>
    </IonModal>
  );
};
export default OptionModal;
