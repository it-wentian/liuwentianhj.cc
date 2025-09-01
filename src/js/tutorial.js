// 移动端菜单切换
document.getElementById('mobile-menu-toggle').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
// 动态加载数据的函数
async function loadData(url) {
    const response = await fetch(url);
    return await response.json();
}

// 加载模式数据
loadData('../json/DTAModes.json').then(modes => {
    const modesList = document.querySelector('.game-modes');
    const fragment = document.createDocumentFragment();

    for (const key in modes) {
        const li = document.createElement('li');

        li.classList.add('flex', 'justify-between', 'items-center', 'py-2', 'px-4', 'border-b', 'border-militaryLight/20');
        const span1 = document.createElement('span');
        span1.classList.add('font-semibold', 'text-secondary');
        span1.textContent = key;
        const span2 = document.createElement('span');
        span2.textContent = modes[key];
        span2.classList.add('text-light', 'ml-2');
        li.appendChild(span1);
        li.appendChild(span2);

        fragment.appendChild(li);
    }

    modesList.appendChild(fragment);
});