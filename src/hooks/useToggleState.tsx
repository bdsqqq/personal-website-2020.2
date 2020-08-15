const useToggleIsOpen = (
  state: boolean,
  stateUpdater: React.Dispatch<React.SetStateAction<boolean>>
) => {
  console.log(state);
  return stateUpdater(!state);
};

export default useToggleIsOpen;
