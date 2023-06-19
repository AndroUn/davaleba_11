import React from 'react'
import Book from './book'
import readyImg from '../assets/ready.jpg'
import ringsImg from '../assets/rings.jpg' 
import witcherImg from '../assets/witcher.jpeg'  

const data = [
    { id:1, image: readyImg, title: "Ready Player One", descr: "Ready Player One is a 2011 science fiction novel, and the debut novel of American author Ernest Cline.", names: "Wade Watts/Parzival,  Aech, Samantha Cook/Art3mis"},
    { id:2, image: ringsImg, title: "Lord of the Rings: Fellowship of the Ring", descr: "Set in Middle-earth, the story tells of the Dark Lord Sauron, who seeks the One Ring, which contains part of his might, to return to power.", names: "Aragorn, Legolas, Gimli, Gandalf"},
    { id:3, image: witcherImg, title: "The Witcher: Lat Wish", descr: "A collection of interlinked stories, The Last Wish details the life of Geralt of Rivia.", names: "Geralt of Rivia, Yeneffer,  Jaskier"}
]

const BookList = ()=> {
    function print(title,names){
        console.log(title)
        console.log(names)
    }
    return(
    <div className = 'book-list'>
        {data.map((book)=> <Book key={book.id} image={book.image} title={book.title} descr={book.descr} names={book.names} print = {print}/>)}
    </div>
    )
}

export default BookList;