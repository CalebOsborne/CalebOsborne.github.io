function setupPage(pageId) {
    function saveState() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
            const task = checkbox.nextElementSibling;
            const isChecked = checkbox.checked;
            localStorage.setItem(`${pageId}-${checkbox.id}`, isChecked);

            // Add or remove the line-through class based on checked state
            if (isChecked) {
                task.classList.add('checked');
            } else {
                task.classList.remove('checked');
            }
        });
    }

    function restoreState() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
            const task = checkbox.nextElementSibling;
            const checked = localStorage.getItem(`${pageId}-${checkbox.id}`) === 'true';
            checkbox.checked = checked;

            // Apply line-through effect if it was checked
            if (checked) {
                task.classList.add('checked');
            } else {
                task.classList.remove('checked');
            }
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        restoreState(); // Restore state when the page loads
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener('change', saveState); // Save state on checkbox change
        });
    });
}