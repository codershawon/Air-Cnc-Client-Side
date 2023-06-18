import React from 'react';
import Container from '../Shared/Container';
import { categories } from './categoriesData';
import CategoryBox from './CategoryBox';

const Categories = () => {
    return (
        <Container>
            <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
            {
                categories.map(category=><CategoryBox label={category.label} icon={category.icon} key={category.label}></CategoryBox>)
            }
        </div>
        </Container>
    );
};

export default Categories;