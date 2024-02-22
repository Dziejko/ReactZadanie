import { FormEvent, useState } from "react"
import { Button, Form } from "react-bootstrap"

type Fruit={
    id:number,
    name:string,
    isChecked:boolean,
    price:string
}

type ItemProps={
    id:number
    name:string,
    fruits:Fruit[]
    setFruits(fruits:Fruit[]):void
    toggleFruit(id:number):void
}

function Item({id,name,fruits,setFruits,toggleFruit}:ItemProps) {
    const [value,setValue]=useState("")

    function handleSubmit(e:FormEvent){
        e.preventDefault()
        if(value!==""){
            addPrice()
        }
    }
    function addPrice(){
        const item = fruits.find((item) => item.id === id);
        if (item) {
            item.price=value
        }
        setFruits([...fruits]);
        toggleFruit(id)
    }
  return (
    <Form onSubmit={handleSubmit} className="mt-1">
    <Form.Label htmlFor={name}>{name}</Form.Label>
    <Form.Control value={value} onChange={e=>setValue(e.target.value)} placeholder="Cena" name={name} />
    <Button className="mt-2" variant="dark" type="submit">
        Dodaj cenę
    </Button>
</Form>
  )
}

export default Item