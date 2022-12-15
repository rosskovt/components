import Accordion from './components/Accordion';

function Accordionpage() {
    const items = [
        {
            id: "sdgfr",
            label: "label1",
            content: "some content goes here"
        },
        {
            id: "sdgfhkjhjkjr",
            label: "label2",
            content: "some content2 goes here"
        },
        {
            id: "sdgdwefwffr",
            label: "label3",
            content: "some content3 goes here"
        }
    ];
    return (
        <Accordion items={items} />
    )
};

export default Accordionpage;