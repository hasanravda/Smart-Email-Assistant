console.log("Email Writer Extension - Content Script Loaded");

function createAIButton() {
    const button = document.createElement('div');
    button.className = 'T-I J-J5-Ji aoO v7 T-I-atl L3 dC btA';
    button.style.marginRight = '8px';

    button.innerHTML = 'AI reply';
    button.setAttribute('role', 'button');
    button.setAttribute('data-tooltip', 'Generate AI Reply');
    return button;
}

function getEmailContent() {
    // a3s ail
    const selectors = [
        '.h7',
        '.a3s.aiL',
        '.gmail_quote',
        '[role="presentation"]',
    ];

    for (const selector of selectors) {
        const content = document.querySelector(selector);
        if (content) {
            console.log(`Found email content using selector: ${selector}`);
            return content.innerText.trim();
        }
    }
    return null;

}

function findComposeToolbar() {
    const selectors = [
        '.btC',
        '.aDh',
        '[role="dialog"]',
        '.gU.Up',
    ]
    for (const selector of selectors) {
        const toolbar = document.querySelector(selector);
        if (toolbar) {
            console.log(`Found compose toolbar using selector: ${selector}`);
            return toolbar;
        }
    }
    return null;
}


// Will inject a button next to reply in Gmail compose window
function injectButton() {
    const existingButton = document.querySelector('.ai-reply-button');
    if (existingButton) existingButton.remove();

    const toolbar = findComposeToolbar();
    if (!toolbar) {
        console.log('Toolbar not found');
        return;
    }
    console.log('Toolbar not found! Creating AI button');
    const button = createAIButton();
    button.classList.add('ai-reply-button');
    button.textContent = 'AI Reply';


    // Will be having all the logic to handle click events
    button.addEventListener('click', async () => {
        try {
            button.innerHTML = 'Generating...';
            button.disabled = true;

            const emailContent = getEmailContent();
            // TODO : need to change the api after deploying
            // http://localhost:8081/api/email/generate
            const response = await fetch('https://smart-email-assistant-of06.onrender.com/api/email/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    emailContent: emailContent,
                    tone: 'professional', // You can change this to any tone you want 
                })
            });

            if (!response.ok) {
                throw new Error('API Request Failed');
            }
            const generatedReply = await response.text();
            const composeBox = document.querySelector('[role="textbox"][g_editable="true"]');

            if (composeBox) {
                composeBox.focus();
                // document.execCommand('insertText', false,generatedReply);
                composeBox.innerHTML += generatedReply;

            } else {
                console.error('Compose Box was not found');
            }
        } catch (error) {
            console.error(error);
            alert('Error generating AI reply:');
        } finally {
            button.innerHTML = 'AI reply';
            button.disabled = false;
        }
    });

    toolbar.insertBefore(button, toolbar.firstChild);
    console.log("AI Reply Button Injected");
}

const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        const addedNodes = Array.from(mutation.addedNodes);
        const hasComposeElements = addedNodes.some(node => {
            if (node instanceof Element) {
                return node.matches('.aDh,.btC,[role="dialog"]') ||
                    node.querySelector('.aDh,.btC,[role="dialog"]');
            }
            return false;
        }

        );

        if (hasComposeElements) {
            console.log("Compose Window Detected");
            setTimeout(injectButton, 500);
        }

    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});