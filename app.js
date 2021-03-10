




const addBook =document.querySelector("#add-book");
addBook.addEventListener('click',function(e){
    e.preventDefault();

    const title =document.getElementById('title');
const author =document.getElementById('author');
const year =document.getElementById('year');
const bookList =document.getElementById('book-list');
    
    if( title.value =='' && author.value =='' && year.value==''){
        alert('Please Write somethings!!');
    }
    else{
        
        const newRow =document.createElement('tr');

        const newTItle =document.createElement('th');
        newTItle.innerHTML =title.value;
        newRow.appendChild(newTItle);

        const newAuthor =document.createElement('th');
        newAuthor.innerHTML =author.value;
        newRow.appendChild(newAuthor);

        const newYear =document.createElement('th');
        newYear.innerHTML =year.value;
        newRow.appendChild(newYear);

        const bookList =document.getElementById("book-list");
        bookList.appendChild(newRow);
       
    }

});
