const Book = ({image, title, descr, names, print}) => {
    return (
        <div className="book"> 
            <img src={image} alt={title}></img>
            <h1>{title}</h1>
            <div className="descr">
                {descr}
            </div>
            <p>Main characters: {names}</p>
            <button onClick={()=> print(title, names)}>print</button>
        </div>
    );
}

export default Book;