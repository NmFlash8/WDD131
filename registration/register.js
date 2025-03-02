document.addEventListener('DOMContentLoaded', () => {
    let participantCount = 1;

    const addButton = document.getElementById('add-participant');
    const form = document.getElementById('registration-form');
    const summary = document.getElementById('summary');

    // Add Participant functionality
    addButton.addEventListener('click', () => {
        participantCount++;
        const participantHTML = participantTemplate(participantCount);
        const participantSection = document.querySelector('.participant1');
        
        // Insert new participant section before the "Add Participant" button
        participantSection.insertAdjacentHTML('beforebegin', participantHTML);
    });

    // Submit Form functionality
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from reloading page

        const totalFee = totalFees();
        const adultName = form.querySelector('input[name="name1"]').value;
        const participantTotal = participantCount;

        const info = {
            adultName: adultName,
            participantTotal: participantTotal,
            totalFee: totalFee
        };

        // Hide the form and show the summary
        form.style.display = 'none';
        summary.style.display = 'block';
        summary.innerHTML = successTemplate(info);
    });

    // Function to create participant template
    function participantTemplate(count) {
        return `
            <section class="participant${count}">
                <label for="name${count}">Name:</label>
                <input type="text" id="name${count}" name="name${count}" required>
                <label for="age${count}">Age:</label>
                <input type="number" id="age${count}" name="age${count}" required>
                <label for="fee${count}">Fee:</label>
                <input type="number" id="fee${count}" name="fee${count}" required>
            </section>
        `;
    }

    // Function to calculate total fees
    function totalFees() {
        let feeElements = document.querySelectorAll("[id^=fee]");
        feeElements = [...feeElements];
        return feeElements.reduce((total, element) => total + parseFloat(element.value), 0);
    }

    // Function to generate success message
    function successTemplate(info) {
        return `Thank you ${info.adultName} for registering. You have registered ${info.participantTotal} participants and owe $${info.totalFee}.`;
    }
});
