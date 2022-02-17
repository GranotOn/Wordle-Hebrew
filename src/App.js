import { useEffect, useState } from "react";
import Theme from "./Components/Theme";
import Modal from "./Components/Modal";
import Popup from "./Components/Popup";
import ModalOverlay from "./Components/ModalOverlay";
import MainGame from "./Components/MainGame";
import { getWord } from "./utils/wordManager";
import { useStore } from "./store";

function App() {
  const darkMode = useStore((state) => state.darkMode);
  const setWord = useStore((state) => state.setWord);
  const popup = useStore((state) => state.popup);
  const popupMessage = useStore((state) => state.popupMessage);
  const togglePopup = useStore((state) => state.togglePopup);

  useEffect(() => {
    setWord(getWord());
  }, []);

  const [isModal, setIsModal] = useState(true);
  return (
    <Theme darkMode={darkMode}>
      {isModal && <Modal setIsModal={setIsModal} />}
      <Popup state={popup} message={popupMessage} toggleState={togglePopup} />
      <ModalOverlay isModal={isModal}>
        <MainGame />
      </ModalOverlay>
    </Theme>
  );
}

export default App;
