import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCategory} from "../../redux/action/Action";

const Categories = () => {

    const dispatch = useDispatch()
    const {categories} = useSelector(s => s)


    useEffect(() => {
        dispatch(getCategory())
    }, [dispatch])

    return (
        <section id='categories'>
            <div className="container">
                {categories.map(el => (
                    <div className='categories'>
                        <img className='categories__image' src={el.image} alt=""/>
                        <h3 className='categories__title'>{el.title}</h3>
                    </div>

                ))
                }
            </div>
        </section>
    );
};

export default Categories;