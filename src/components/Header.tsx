import { IoIosArrowUp } from "react-icons/io";

export type Fruit = {
    id: number;
    name: string;
    isChecked: boolean;
    price: string;
};

type HeaderProps = {
    isVisible: boolean;
    isChecked: boolean;
    fruits: Fruit[];
    setFruits: React.Dispatch<React.SetStateAction<Fruit[]>>;
    setIsChecked(isChecked: boolean): void;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

function Header({
    isVisible,
    isChecked,
    setIsChecked,
    setIsVisible,
    fruits,
    setFruits,
}: HeaderProps) {
    function onChange() {
        setIsChecked(!isChecked);
        if (isChecked) {
            const updatedList = fruits.map((item) => ({
                ...item,
                isChecked: false,
            }));
            setFruits(updatedList);
        } else {
            const updatedList = fruits.map((item) => ({
                ...item,
                isChecked: true,
            }));
            setFruits(updatedList);
        }
    }
    function onClick() {
        setIsVisible(!isVisible);
        document.getElementById("arrow-btn")?.classList.toggle("rotate");
    }
    return (
        <>
            <div className="header-container mt-5">
                <input
                    checked={isChecked}
                    onChange={onChange}
                    name="main-checkbox"
                    type="checkbox"
                />
                <label htmlFor="main-chekbox">Owoce</label>
                <button id="arrow-btn" onClick={onClick}>
                    {" "}
                    <IoIosArrowUp size={30} />
                </button>
            </div>
        </>
    );
}

export default Header;
