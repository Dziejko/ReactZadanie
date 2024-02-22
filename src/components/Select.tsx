import { Button, Form } from "react-bootstrap";
import ReactSelect from "react-select";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const OPTIONS = [
    {
        value: 1,
        label: "Warzywa",
    },
    {
        value: 2,
        label: "Owoce",
    },
];

const schema = yup.object().shape({
    category: yup.object().required().typeError("Category is required"),
});

function Select() {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data: object) => {
        console.log(data);
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Label htmlFor="select">Jedzenie</Form.Label>
            <Controller
                name="category"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <ReactSelect
                        {...field}
                        className="w-50"
                        options={OPTIONS}
                        placeholder="Select Category"
                    />
                )}
            />
            {errors.category && (
                <p className="text-danger">{errors.category.message}</p>
            )}
            <Button type="submit" className="mt-1" variant="dark">
                Wyślij
            </Button>
        </Form>
    );
}

export default Select;
