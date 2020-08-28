import { useContext } from "react";
import { MeasureContext } from "../MeasureContext";

const useViewport = () => {
  /* We can use the "useContext" Hook to acccess a context from within
     another Hook, remember, Hooks are composable! */
  const { width, height } = useContext(MeasureContext);
  return { width, height };
};

export default useViewport;
