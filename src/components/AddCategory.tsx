import { ChangeEvent, FormEvent, useState } from 'react';

interface Props{
    onAddNewCategory: (x:string) => void;
}

export const AddCategory = ({ onAddNewCategory }:Props) => {

    const [inputValue, setInputValue] = useState<string>('');

    const onChangeValue = ({ target }:ChangeEvent<HTMLInputElement>) => {
        setInputValue( target.value );
    }
    const onSubmitInput = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newInputValues = inputValue.trim();
        if(newInputValues.length <= 1) return;
        onAddNewCategory(newInputValues);
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmitInput }>
            <input
                type="text"
                name="category"
                placeholder="Buscar Gifs ..."
                value={inputValue}
                onChange={ onChangeValue }
            />
        </form>
    )
}
