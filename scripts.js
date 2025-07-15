function chooseAmount(amount) {
    const chosenAmountDiv = document.getElementById("chosen-amount");
    chosenAmountDiv.innerHTML = `
        <h2>Chosen Amount: ₦${amount}</h2>
        <p>Kindly transfer the exact amount to the account number below👇👇👇</p>
        <p>9162141283 CHISOM NNONYELU FAVOUR Opay</p>
        <p>And then drop receipt below:</p>
        <div class="image-upload">
            <input type="file" id="receipt-upload" accept="image/*">
        </div>
        <div class="submit-container">
            <button class="submit-button" onclick="submitForm()">Submit</button>
            <button class="cancel-button" onclick="window.location.href='index.html'">Cancel</button>
        </div>
    `;
}

function submitForm() {
    const fileInput = document.getElementById("receipt-upload");
    if (fileInput.files.length > 0) {
        alert("Submission Successful!");
    } else {
        alert("Please upload a receipt before submitting.");
    }
}