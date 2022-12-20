import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleModalClick = () => {
        setShowModal(!showModal)
    };

    const handleClose = () => {
        setShowModal(!showModal);
    }

    const actionBar = <div><Button onClick={handleClose} primary>I Accept</Button></div>

    const modal = <Modal onClose={handleClose} showModal={showModal} actionBar={actionBar}>
        <p>Here is an important agreement for you to accept</p>
    </Modal>

    return (
        <div>
            <Button onClick={handleModalClick} primary>Open Modal</Button>
            {showModal && modal}
        </div>
    )
};

export default ModalPage;