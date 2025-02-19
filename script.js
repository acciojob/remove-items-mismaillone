function removeSelect() {
	const selectElement = document.getElementById('colorSelect');
    const selectedOptions = selectElement.querySelectorAll('option:checked');

    selectedOptions.forEach(option => option.remove());
}