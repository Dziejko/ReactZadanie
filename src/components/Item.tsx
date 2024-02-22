import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type Fruit = {
    id: number;
    name: string;
    isChecked: boolean;
    price: string;
};

type ItemProps = {
    id: number;
    name: string;
    fruits: Fruit[];
    setFruits(fruits: Fruit[]): void;
    toggleFruit(id: number): void;
};

function Item({ id, name, fruits, setFruits, toggleFruit }: ItemProps) {
    const schema = yup.object().shape({
        price: yup
            .number()
            .required()
            .positive("Price must be a positive number")
            .typeError("Please enter a number")
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    function onSubmit(data: any) {
        addPrice(data.price);
    }
    function addPrice(price: string) {
        const item = fruits.find((item) => item.id === id);
        if (item) {
            item.price = price;
        }
        setFruits([...fruits]);
        toggleFruit(id);
    }
    return (
        <Form onSubmit={handleSubmit(onSubmit)} className="mt-1">
            <Form.Label htmlFor="price">{name}</Form.Label>
            <Form.Control placeholder="Cena" {...register("price")} />
            {errors.price && (
                <p className="text-danger">{errors.price?.message}</p>
            )}
            <Button className="mt-2" variant="dark" type="submit">
                Dodaj cenę
            </Button>
        </Form>
    );
}

export default Item;
