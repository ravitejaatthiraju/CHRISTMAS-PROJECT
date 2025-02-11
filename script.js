const snowContainer = document.querySelector('.snow');
const sparklesContainer = document.querySelector('.sparkles');
const giftBox = document.getElementById('giftBox');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const tree = document.querySelector('.tree .wire');

// Function to create snowflakes
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    snowflake.style.left = `${Math.random() * window.innerWidth}px`;
    snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;
    snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
    snowflake.style.animationDelay = `${Math.random() * 5}s`;
    snowflake.style.animationTimingFunction = 'linear';

    snowContainer.appendChild(snowflake);

    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}

setInterval(createSnowflake, 200);

// Function to create sparkles
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = `${Math.random() * 50}px`;
    sparkle.style.top = `${Math.random() * 20}px`;

    sparklesContainer.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 2000); // Remove sparkle after animation
}

setInterval(createSparkle, 100);

// Gift Box Logic
giftBox.addEventListener('click', () => {
    giftBox.style.display = 'none';
    modal.classList.add('active');
    modalContent.innerHTML = `
        <div id="cardContainer" style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
    <div class="card" data-id="1" style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; width: 120px; height: 140px; border: 1.5px solid black; cursor: pointer;">
        <div class="card-content"></div>
        <div class="card-number">1</div>
    </div>
    <div class="card" data-id="2" style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; width: 120px; height: 140px; border: 1.5px solid black; cursor: pointer;">
        <div class="card-content"></div>
        <div class="card-number">2</div>
    </div>
    <div class="card" data-id="3" style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; width: 120px; height: 140px; border: 1.5px solid black; cursor: pointer;">
        <div class="card-content"></div>
        <div class="card-number">3</div>
    </div>
    <div class="card" data-id="4" style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; width: 120px; height: 140px; border: 1.5px solid black; cursor: pointer;">
        <div class="card-content"></div>
        <div class="card-number">4</div>
    </div>
    <div class="card" data-id="5" style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; width: 120px; height: 140px; border: 1.5px solid black; cursor: pointer;">
        <div class="card-content"></div>
        <div class="card-number">5</div>
    </div>
</div>

    `;

    // Add event listener to each card
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            const messages = [
                "May this season find you among those you love, sharing in the twin glories of generosity and gratitude.    —Oprah Winfrey✨",
                "I 𝚆𝚒𝚜𝚑 we could put up some of the Christmas spirit in jars and open a jar of it every month. —Harlan Miller🥰.",
                "Christmas will always be as long as we stand heart to heart and hand in hand. —Dr. Seuss 🍷.",
                "One of the most glorious messes in the world is the mess created in the living room on Christmas Day. Don't clean it up too quickly. —Andy Rooney👍🏻",
                "A lovely thing about Christmas is that it's compulsory, like a thunderstorm, and we all go through it together.   —Garrison Keillor🤩.",
                "Christmas will always be as long as we stand heart to heart and hand in hand. —Dr. Seuss🎁",
                "Christmas is built upon a beautiful and intentional paradox; that the birth of the homeless should be celebrated in every home. — G.K. Chesterton☃",
                "Santa Claus is anyone who loves another and seeks to make them happy; who gives himself by thought or word or deed in every gift that he bestows. — Edwin Osgood Grover🎅",
                "Mankind is a great, an immense family. This is proved by what we feel in our hearts at Christmas. — Pope John XXIII 🎄"
            ];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            modalContent.innerHTML = `<p>${randomMessage}</p><button id='closeModal'>Close</button>`;

            // Close the modal
            document.getElementById('closeModal').addEventListener('click', () => {
                modal.classList.remove('active');
                giftBox.style.display = 'block';
            });
        });
    });
});


// Function to create bulbs in tree-like structure
function createBulbs() {
    const layers = 7; // Number of layers in the tree
    const bulbsPerLayer = 5; // Bulbs per layer incrementally increases

    for (let i = 0; i < layers; i++) {
        const layer = document.createElement('div');
        layer.style.display = 'flex';
        layer.style.justifyContent = 'center';
        layer.style.gap = '10px';
        layer.style.marginBottom = `${20 - i * 2}px`;

        // Add bulbs to each layer
        for (let j = 0; j < bulbsPerLayer + i; j++) {
            const bulb = document.createElement('div');
            bulb.classList.add('bulb');
            bulb.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            bulb.style.animationDelay = `${Math.random()}s`; // Random animation delay
            layer.appendChild(bulb);
        }

        tree.appendChild(layer);
    }
}

// Define bulb colors
const colors = ['red', 'green', 'yellow', 'blue', 'orange','brown','pink','violet','purple'];

// Create the bulbs
createBulbs();

