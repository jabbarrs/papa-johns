const category = new URLSearchParams(location.search).get('category');
const content = document.getElementById('content');
const DATA = []
let count = 8

fetch(`https://papajson.vercel.app/${category}`)
.then(res => res.json())
.then(data => {
    DATA.push(...data)
    show()
})

function show() {
    content.innerHTML = ""
    DATA
    .slice(0, count)
    .forEach(item => {
        const {id, title, composition, img} = item
        content.innerHTML += `
            <a target="_blank" href="/pages/details.htm?category=${category}&id=${id}" class="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-black-800 mb-[40px]">
                <img src="${img}" alt="papadias_image" class="max-h-[200px] w-full rounded-t-md h-full dark:bg-gray-500">
                <div class="flex flex-col justify-between p-6 space-y-8">
                    <div class="space-y-2">
                        <div class"flex justify-between items-center">
                        <h2 class="text-[15px] font-semibold tracking-wide">${title}</h2>
                        <button type="button" class="w-[100px] p-2 my-2 font-semibold tracking-wide rounded-md dark:bg-[#15803d] dark:hover:bg-[#0e5a2b] transition ease-in-out duration-300 dark:text-white">Bunu Seç</button>
                        </div>
                        <p class="dark:text-gray-800">${composition}</p>
                    </div>
                </div>
            </a>
        `
    })
}

function elaveEt() {
    count += 8
    show()
}
