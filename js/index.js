const menu = document.getElementById('menu');
const categoryArr = JSON.parse(localStorage.getItem('categoryArr')) || [];

(function() {
  if(categoryArr.length == 0)
    fetch('https://papajson.vercel.app/category')
    .then(res => res.json())
    .then(data => {
        categoryArr.length = 0        
        categoryArr.push(...data)
        localStorage.setItem("categoryArr", JSON.stringify(categoryArr))
        handleCategory()
      })
    })()

function handleCategory() {
  categoryArr.map(item => {
    const url = item.id == 222 ? '/index.htm' : `/pages/category.htm?category=${item.slug}`
    menu.innerHTML += `
      <li><a href="${url}">${item.category}</a></li>
    `
  })
}
handleCategory()