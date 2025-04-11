document.addEventListener('DOMContentLoaded', function() {
    // Page elements
    // Removed unused variable 'pages'
    const openBtn1 = document.getElementById('openBtn1');
    const openBtn2 = document.getElementById('openBtn2');
    const openBtn3 = document.getElementById('openBtn3');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    
    // Show the second page after clicking the first button
    openBtn1.addEventListener('click', function() {
        switchPage('page1', 'page2');
        
        // Show the continue button after 15 seconds
        setTimeout(function() {
            openBtn2.classList.remove('hidden');
        }, 50);
    });
    
    // Show the third page after clicking the second button
    openBtn2.addEventListener('click', function() { 
        switchPage('page2', 'page3');
    });
    
    // Show the proposal page after clicking the third button
    openBtn3.addEventListener('click', function() {
        switchPage('page3', 'page4');
    });
    
    // Handle yes button click
    yesBtn.addEventListener('click', function () {
        sendResponse('YES');
        switchPage('page3', 'page4'); // Move to the next page (adjust IDs as needed)

        // Ensure the GIF is displayed on the new page
        const nextPage = document.getElementById('page4'); // Ensure 'page4' is the ID of the next page
        if (nextPage) {
            nextPage.innerHTML = ''; // Clear any existing content on the page
            const gifContainer = document.createElement('div');
            gifContainer.style.textAlign = 'center'; // Center the GIF
            gifContainer.innerHTML = `
                <img src="s.gif" alt="Celebration GIF" style="max-width: 100%; height: 100%; display: block; margin: 0 auto;">
            `;
            gifContainer.style.width = '100vw';
            gifContainer.style.height = '100vh';
            gifContainer.style.display = 'flex';
            gifContainer.style.justifyContent = 'center';
            gifContainer.style.alignItems = 'center';
            gifContainer.style.backgroundColor = '#000'; // Optional: Add a background color
            nextPage.appendChild(gifContainer);
        } else {
            console.error('Page4 element not found!');
        }

        // Wait for 6 seconds, then open the specified HTML file
        setTimeout(() => {
            window.location.href = "function-heart.html";
        }, 2000); // Wait for 6 seconds
    });
    
    // Handle no button click
    noBtn.addEventListener('click', function(e) {
        e.preventDefault();
        sendResponse('NO');
        switchPage('page3', 'page4'); // Move to the next page (adjust IDs as needed)

        // Ensure the GIF is displayed on the new page
        const nextPage = document.getElementById('page4'); // Ensure 'page4' is the ID of the next page
        if (nextPage) {
            nextPage.innerHTML = ''; // Clear any existing content on the page
            const gifContainer = document.createElement('div');
            gifContainer.style.textAlign = 'center'; // Center the GIF
            gifContainer.innerHTML = `
                <img src="n.gif" alt="Celebration GIF" style="max-width: 100%; height: 100%; display: block; margin: 0 auto;">
            `;
            gifContainer.style.width = '100vw';
            gifContainer.style.height = '100vh';
            gifContainer.style.display = 'flex';
            gifContainer.style.justifyContent = 'center';
            gifContainer.style.alignItems = 'center';
            gifContainer.style.backgroundColor = '#000'; // Optional: Add a background color
            nextPage.appendChild(gifContainer);
        } else {
            console.error('Page4 element not found!');
        }

        // Wait for 6 seconds, then open the specified HTML file
        setTimeout(() => {
            window.location.href = "function-heart - Copy.html";
        }, 2000); // Wait for 6 seconds
    });
    
    // Function to switch between pages
    function switchPage(currentId, nextId) {
        const currentPage = document.getElementById(currentId);
        const nextPage = document.getElementById(nextId);
        
        currentPage.classList.remove('active');
        nextPage.classList.add('active');
    }
    
    // Function to send response using Formspree
    function sendResponse(response) {
        const formData = new FormData();
        formData.append('response', response);

        fetch("https://formspree.io/f/meoavqbn", {
            method: 'POST',
            body: formData,
            headers: {
                Accept: 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) {
                    console.log(`Your response "${response}" has been sent successfully.`);
                } else {
                    console.error('There was an error sending your response. Please try again.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    
    // Create balloon burst effect on the birthday card
    createBalloons();
});

function createBalloons() {
    const container = document.querySelector('.birthday-card .balloons');
    // Removed unused variable 'colors'
    
    for (let i = 0; i < 15; i++) {
        const balloon = document.createElement('div');
        balloon.innerHTML = '🎈';
        balloon.style.position = 'absolute';
        balloon.style.left = Math.random() * 100 + '%';
        balloon.style.top = Math.random() * 100 + 'px';
        balloon.style.fontSize = (Math.random() * 20 + 20) + 'px';
        balloon.style.animation = `float ${Math.random() * 3 + 2}s ease-in-out infinite`;
        balloon.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(balloon);
        
        // Make some balloons burst after a delay
        if (Math.random() > 0.7) {
            setTimeout(() => {
                balloon.innerHTML = '💥';
                balloon.style.animation = 'none';
                setTimeout(() => {
                    balloon.style.display = 'none';
                }, 500);
            }, Math.random() * 10000 + 5000);
        }
    }
}
