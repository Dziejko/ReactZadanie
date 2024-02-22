import { FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import ReactSelect from "react-select";

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
type SelectedOptionProps = {
    label: string;
    value: number;
};

function Select() {
    const [selectedOption, setSelectedOption] = useState<
        SelectedOptionProps | undefined
    >();
    const [errorMessage, setErrorMessage] = useState(false);
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (selectedOption == undefined) {
            setErrorMessage(true);
        }
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Label htmlFor="select">Jedzenie</Form.Label>
            <ReactSelect
                value={selectedOption}
                onChange={(e) => {
                    setSelectedOption({
                        label: e!.label,
                        value: e!.value,
                    });
                    setErrorMessage(false);
                }}
                className="w-50"
                name="select"
                placeholder="Wybierz"
                options={OPTIONS}
            />
            {errorMessage && <p className="text-danger">Select something</p>}
            <Button type="submit" className="mt-1" variant="dark">
                Wyślij
            </Button>
        </Form>
    );
}

export default Select;
