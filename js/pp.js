const products = document.getElementById('products');
const main = document.getElementById('main');
const content = document.getElementById('content');

let DATA = []

fetch('https://papajson.vercel.app/papadias')
.then(res => res.json())
.then(info => {
  DATA.push(...info)
  show()
})

function show() {
    content.innerHTML = ''
    DATA.forEach(item => {
      const {id, title, composition, price} = item
      
      content.innerHTML += `
        <div class="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-black-800 mb-[40px]">
            <img src="https://www.papajohns.az/images/Pepperoni-x%C4%B1r%C3%A7%C4%B1lt%C4%B1l%C4%B1.jpeg" alt="papadias_image" class="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500">
            <div class="flex flex-col justify-between p-6 space-y-8">
              <div class="space-y-2">
                <div class"flex justify-between items-center">
                <h2 class="text-[15px] font-semibold tracking-wide">${item.title}</h2>
                <button onclick="openProducts('${id}', '${title}', '${composition}', '${price}')" type="button" class="w-[100px] p-2 my-2 font-semibold tracking-wide rounded-md dark:bg-[#15803d] dark:hover:bg-[#0e5a2b] transition ease-in-out duration-300 dark:text-white">Bunu Seç</button>
                </div>
                <p class="dark:text-gray-800">${item.composition}</p>
              </div>
            </div>
        </div>
      `
    })
  }

  
  
  function openProducts(id, title, composition, price) {
    
    main.innerHTML = `
      <div class="max-w-[1350px] m-auto bg-white min-h-[75vh]">
            <div rel="noopener noreferrer" href="#" class="block my-10 max-w-sm gap-3 mx-auto sm:max-w-full group lg:grid lg:grid-cols-12 dark:bg-white">
                <div class="p-6 space-y-2 lg:col-span-5">
                    <h3 class="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">${title}</h3>
                    <p class="text-xl"><b>Tərkibi</b>: ${composition}</p>
                    <p class="text-lg"><b>Qiyməti</b>: ${price}₼</p>
                    <div class="flex items-center sm:text-[20px] text-white">
                        <button class="w-[50px] bg-gray-400 font-black">-</button>
                        <span class="w-[50px] flex justify-center text-black font-semibold">1</span>
                        <button class="w-[50px] bg-green-600 font-black">+</button>
                    </div>
                    <button class="dark:bg-[#15803d] dark:hover:bg-[#0e5a2b] transition ease-in-out duration-300 text-white w-[150px] p-2 my-5 rounded-md">Səbətə At</button>
                </div>
                <img src="https://www.papajohns.az/images/Pepperoni-x%C4%B1r%C3%A7%C4%B1lt%C4%B1l%C4%B1.jpeg" alt="" class="object-cover w-full h-64  rounded sm:h-96 lg:col-span-7 dark:bg-gray-500">
            </div>
      </div>
    `
  }