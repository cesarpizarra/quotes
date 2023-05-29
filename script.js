const p = document.querySelector('p');
const button = document.querySelector('button');
const API = 'https://type.fit/api/quotes';

button.addEventListener('click', () =>{
    p.innerHTML = `
    <div class="newtons-cradle">
      <div class="newtons-cradle__dot"></div>
      <div class="newtons-cradle__dot"></div>
      <div class="newtons-cradle__dot"></div>
      <div class="newtons-cradle__dot"></div>
    </div>`;

    setTimeout(() => {
        fetch(API)
        .then(res => res.json())
        .then(data =>{
            const randomIndex = Math.floor(Math.random() * data.length);
            const quote = data[randomIndex].text;
            p.textContent = quote;
        }).catch(() =>{
            alert('Error fetching quotes');
        })
    }, 2000);
})