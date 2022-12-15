import { GoBell } from 'react-icons/go';
import Button from "../components/Button";

const handleClick = () => {
    console.log('Click');
}

function ButtonPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <div>
                <Button onClick={handleClick} primary>
                    <GoBell />
                    Click me
                </Button>
            </div>
            <div>
                <Button secondary rounded>Buy now</Button>
            </div>
            <div>
                <Button danger outline>Transfer</Button>
            </div>
            <div>
                <Button success rounded>Disable ads</Button>
            </div>
            <div>
                <Button primary rounded>Something!</Button>
            </div>
        </div>
    )
};

export default ButtonPage;