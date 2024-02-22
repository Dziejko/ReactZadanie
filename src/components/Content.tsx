import { ListGroup, ListGroupItem } from "react-bootstrap";
import Item from "./Item";
import { Fruit } from "./Header";



type ContentProps = {
    isVisible: boolean;
    fruits:Fruit[],
    setFruits:  React.Dispatch<React.SetStateAction<Fruit[]>>
    setIsChecked(isChecked: boolean): void;
};

function Content({fruits,setFruits, isVisible, setIsChecked }: ContentProps) {
  



    function isAllChecked() {
        const isCheckedAll = fruits.every((item) => item.isChecked);
        if (isCheckedAll) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    }

    function toggleFruit(id: number) {
        const item = fruits.find((item) => item.id === id);
        if (item) {
            item.isChecked = !item.isChecked;
        }
        isAllChecked();
        setFruits([...fruits]);
    }
    return (
        <>
            {isVisible && (
                <>
                    <ListGroup className="list-group-flush mt-3">
                        {fruits.map((fruit) => (
                            <ListGroupItem className="fruit" key={fruit.id}>
                                <input
                                    type="checkbox"
                                    checked={fruit.isChecked}
                                    onChange={() => toggleFruit(fruit.id)}
                                />
                                <span>{fruit.name}</span>
                                <span className="ms-auto me-5">
                                    {fruit.price}
                                </span>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                    {fruits
                        .filter((item) => item.isChecked == true)
                        .map((item) => (
                            <Item
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                fruits={fruits}
                                setFruits={setFruits}
                                toggleFruit={toggleFruit}
                            />
                        ))}
                </>
            )}
        </>
    );
}

export default Content;
