import Theme from "./Components/Theme";
import Modal from "./Components/Modal";
import ModalOverlay from "./Components/ModalOverlay";
import MainGame from "./Components/MainGame";

import { useState } from "react";

const DARK_MODE = true;

function App() {
  const [isModal, setIsModal] = useState(true);
  return (
    <Theme darkMode={DARK_MODE}>
      {isModal && <Modal setIsModal={setIsModal} />}
      <ModalOverlay isModal={isModal}>
        <MainGame />
      </ModalOverlay>
    </Theme>
  );
}

export default App;
