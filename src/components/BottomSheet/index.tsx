import React, { useState } from "react";
import ReactDOM from "react-dom";
import { FiMessageCircle } from "react-icons/fi";

import { Overlay, Button, Sheet } from "./styles";

interface BottomSheetProps {
  isExpanded: boolean;
  expand: () => void;
  hide: () => void;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  isExpanded,
  expand,
  hide,
}) => {
  return isExpanded ? (
    ReactDOM.createPortal(
      <>
        <Overlay onClick={hide} />
        <Sheet>
          <div>Lalala</div>
        </Sheet>
      </>,
      document.body
    )
  ) : (
    <Button onClick={expand}>
      <FiMessageCircle /> <span>contato</span>
    </Button>
  );
};

export default BottomSheet;

export const useBottomSheet = (): [boolean, () => void, () => void] => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const expandBottomSheet = () => {
    setIsExpanded(true);
  };
  const hideBottomSheet = () => {
    setIsExpanded(false);
  };
  return [isExpanded, expandBottomSheet, hideBottomSheet];
};
