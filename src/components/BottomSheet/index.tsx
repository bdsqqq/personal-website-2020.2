import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FiMessageCircle } from "react-icons/fi";

import { Overlay, Button, Sheet } from "./styles";

import ContactInfo from "../ContactInfo";
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
  const template = ({ y }: { y: string }) => {
    return `translateY(${y})`;
  };

  const variants = {
    closed: { y: "calc(100% + 200px)" },
    open: { y: 0 },
  };

  return (
    <AnimatePresence>
      {isExpanded ? (
        <React.Fragment key="fragment">
          <Overlay
            key="overlay"
            onClick={hide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            exit={{ opacity: 0 }}
          />
          <Sheet
            key="Sheet"
            drag="y"
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
            onDragEnd={(event, info) => {
              if (
                info.offset.y < -300 ||
                info.offset.y > 300 ||
                info.velocity.y < -400 ||
                info.velocity.y > 400
              ) {
                hide();
              }
            }}
            initial="closed"
            animate="open"
            exit="closed"
            transformTemplate={template}
            variants={variants}
          >
            <ContactInfo hide={hide} />
          </Sheet>
        </React.Fragment>
      ) : (
        <Button
          key="button"
          onTap={expand}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <FiMessageCircle />
        </Button>
      )}
    </AnimatePresence>
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
