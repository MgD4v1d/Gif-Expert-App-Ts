import { useState } from 'react';
import { AddCategory, GifGrid, } from './components';


const INITIAL_STATE:string[] = ['One punch', 'Pokemon'];

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(INITIAL_STATE);

    const onAddCategory = (newCategory:string) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }
    
    return (
        <>
            <h1>Gif expert App</h1>

            <AddCategory 
                onAddNewCategory={ onAddCategory } 
            />

            {
                categories.map(category => (
                    <GifGrid key={category}  category={category} />
                ))
            }

        </>
    )
}
