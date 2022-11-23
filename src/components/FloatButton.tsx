import { IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
import React from "react";

interface FButtonProps {
  onClickFButton: () => void;
}

const FloatButton: React.FC<FButtonProps> = ({ onClickFButton }) => {
  return (
    <IonFab
      slot="fixed"
      vertical="bottom"
      horizontal="end"
      onClick={onClickFButton}
    >
      <IonFabButton>
        <IonIcon icon={add}></IonIcon>
      </IonFabButton>
    </IonFab>
  );
};
export default FloatButton;
