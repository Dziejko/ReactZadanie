import { useState } from "react";
import Content from "./Content";
import Header, { Fruit } from "./Header";
const LIST = [
    {
        id: 1,
        name: "Jabłka",
        isChecked: false,
        price: "",
    },
    {
        id: 2,
        name: "Banany",
        isChecked: false,
        price: "",
    },
    {
        id: 3,
        name: "Pomarańcze",
        isChecked: false,
        price: "",
    },
    {
        id: 4,
        name: "Wiśnie",
        isChecked: false,
        price: "",
    },
    {
        id: 5,
        name: "Winogrono",
        isChecked: false,
        price: "",
    },
];
function ListContainer() {
    const [isChecked, setIsChecked] = useState(false);
    const [isVisible, setIsVisible] = useState<boolean>(false);
      const [fruits, setFruits] = useState<Fruit[]>(LIST);
    return (
        <>
            <Header
            setFruits={setFruits}
            fruits={fruits}
                isVisible={isVisible}
                setIsVisible={setIsVisible}
                isChecked={isChecked}
                setIsChecked={setIsChecked}
            />
            <Content
                fruits={fruits}
                setFruits={setFruits}
                isVisible={isVisible}

                setIsChecked={setIsChecked}
            />
        </>
    );
}

export default ListContainer;
