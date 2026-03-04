let selectedFood = [];

window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    if (params.has('msg')) {
        // RECEPIENT MODE: Load the data from the link
        document.getElementById('letter-to').innerText = `Dear ${params.get('to')}`;
        document.getElementById('letter-body').innerText = params.get('msg');
        document.getElementById('letter-from').innerText = `Sincerely, ${params.get('from')}`;
        document.getElementById('food-box-display').innerText = params.get('food');
        
        // Hide the builder tools
        document.getElementById('editor-controls').style.display = 'none';
    }
};

function syncLetter() {
    document.getElementById('letter-to').innerText = `Dear ${document.getElementById('input-to').value || '...'}`;
    document.getElementById('letter-body').innerText = document.getElementById('input-msg').value || '...';
    document.getElementById('letter-from').innerText = `Sincerely, ${document.getElementById('input-from').value || '...'}`;
}

function addItem(emoji) {
    selectedFood.push(emoji);
    document.getElementById('food-box-display').innerText = selectedFood.join(' ');
}

function generateLink() {
    const to = encodeURIComponent(document.getElementById('input-to').value);
    const from = encodeURIComponent(document.getElementById('input-from').value);
    const msg = encodeURIComponent(document.getElementById('input-msg').value);
    const food = encodeURIComponent(selectedFood.join(','));

    // Create the unique link with all the data inside it
    const link = `${window.location.origin}${window.location.pathname}?to=${to}&from=${from}&msg=${msg}&food=${food}`;
    
    document.getElementById('link-output').value = link;
    document.getElementById('share-overlay').style.display = 'block';
}

function copyLink() {
    const copyText = document.getElementById("link-output");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert("Link copied! Send it to your friend.");
}

function callGirlfriend() {
    // Custom logic as per your instructions
    alert("You don't have a girlfriend. Go find a girlfriend!");
}
