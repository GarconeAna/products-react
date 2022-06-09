import './Category.css';

const Category = ({name}) => {
    return <>
    <div className='category-text'>
        <h2>{name}</h2>
    </div>
    </>
}

export default Category;