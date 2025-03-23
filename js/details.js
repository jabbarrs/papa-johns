const details = document.getElementById('details');
let params = new URLSearchParams(location.search);
let detailCat = params.get('category');
let detailID = params.get('id');

fetch(`https://papajson.vercel.app/${detailCat}/${detailID}`)
.then(res => res.json())
.then(data => {
    showDetails(data);
})

function showDetails(detailed) {
    details.innerHTML = `
        <div class="max-w-[1350px] m-auto bg-white min-h-[75vh] flex flex-col lg:flex-row items-center gap-10 p-6">
            <div class="p-6 space-y-2 lg:w-[50%]">
                <h3 class="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">${detailed.title}</h3>
                <p class="text-xl"><b>Tərkibi</b>: ${detailed.composition}</p>
                <p class="text-lg"><b>Qiyməti</b>: ${detailed.price}₼</p>
                <div class="flex items-center sm:text-[20px] text-white">
                    <button class="w-[50px] bg-gray-400 font-black">-</button>
                    <span class="w-[50px] flex justify-center text-black font-semibold">1</span>
                    <button class="w-[50px] bg-green-600 font-black">+</button>
                </div>
                <button class="dark:bg-[#15803d] dark:hover:bg-[#0e5a2b] transition ease-in-out duration-300 text-white w-[150px] p-2 my-5 rounded-md">Səbətə At</button>
            </div>
            <img src="${detailed.img}" alt="${detailed.title}" class="w-full max-w-[500px] h-auto lg:h-[400px] object-cover rounded-2xl shadow-lg" />
        </div>
    `;
}


