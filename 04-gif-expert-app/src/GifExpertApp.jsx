import { useState } from 'react';
import { AddCategory } from './components/addCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            {/* Título */}
            <h1>GifExpertApp</h1>
            {/* Input */}
            <AddCategory
                // setCategories={setCategories} 
                onNewCategory={onAddCategory}
            />
            {/* Listado de Gifs */}
            {
                categories.map(category =>
                (
                    <GifGrid key={category} category={category} />
                ))
            }

            {/* Gif Item */}
        </>
    )
}