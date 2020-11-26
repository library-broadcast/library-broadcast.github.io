const booksList = document.getElementById('booksList');
const searchBar = document.getElementById('searchBar');
let databaseBooks = [];
console.log(searchBar);

// Search Data
searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredBooks = databaseBooks.filter((book) => {
  return (
    book.judul.toLowerCase().includes(searchString) ||
    book.penulis.toLowerCase().includes(searchString) ||
    book.pembaca.toLowerCase().includes(searchString)
    );
  
  });
  displayBooks(filteredBooks);
});

const loadBooks = async () => {
    try {
        const res = await fetch('/json/database.json');
        databaseBooks = await res.json();
        displayBooks(databaseBooks);
    } catch (err) {
        console.error(err);
    }
};

// Display Data
const displayBooks = (books) => {
    const htmlString = books
        .map((book) => {
            return `
            <li class="book">
                <h2>Judul: ${book.judul}</h2>
                <p>Penulis: ${book.penulis}</p>
                <p>Pembaca: ${book.pembaca}</p>
                <button class="btn btn-second shop-item-button" type="button">Detail</button>
                <button class="btn btn-primary shop-item-button" type="button">Pesan</button>
            </li>
        `;
        })
        .join('');
    booksList.innerHTML = htmlString;
};

loadBooks();

function switcher(){
  const mvr = document.getElementById('mover');
  const btn = document.getElementById('button');
  const body = document.getElementsByTagName("BODY")[0];
  
  if(btn.className == "button day"){
    mvr.style.transform = "translateY(-42px)";
    btn.className = "button night";
    btn.style.boxShadow = "0px 0px 16px rgba(255, 255, 255, 0.25)";
    body.style.backgroundColor = "#0E0E0E";
    body.style.color = "white";
  } else{
    mvr.style.transform = "translateY(0)";
    btn.className = "button day";
    btn.style.boxShadow = "0px 0px 16px rgba(0, 0, 0, 0.25)";
    body.style.backgroundColor = "white";
    body.style.color = "Black";
  }
}
