const selected = document.querySelector('.select-selected');
    const items = document.querySelector('.select-items');
    
    selected.addEventListener('click', () => {
        items.classList.toggle('select-hide');
    });

    items.addEventListener('click', (event) => {
        if (event.target.tagName === 'DIV') {
            selected.textContent = event.target.textContent;
            items.classList.add('select-hide');
        }
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.custom-select')) {
            items.classList.add('select-hide');
        }
    });