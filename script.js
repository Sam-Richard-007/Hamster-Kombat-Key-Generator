document.addEventListener('DOMContentLoaded', () => {
    
    const MAX_KEYS_PER_GAME_PER_DAY = 12;
    //const EVENTS_DELAY = 20000;

    const games = {
        1: {
            name: 'ZooPolis',
            appToken: 'b2436c89-e0aa-4aed-8046-9b0515e1c46b',
            promoId: 'b2436c89-e0aa-4aed-8046-9b0515e1c46b',
            eventsDelay: 21000,
            attemptsNumber: 22,
        },
        2: {
            name: 'Chain Cube 2048',
            appToken: 'd1690a07-3780-4068-810f-9b5bbf2931b2',
            promoId: 'b4170868-cef0-424f-8eb9-be0622e8e8e3',
            eventsDelay: 20000,
            attemptsNumber: 15
        },
        3: {
            name: 'Snake Run',
            appToken: 'c8e017e2-8817-4d02-bce6-b951e74bb18f',
            promoId: 'c8e017e2-8817-4d02-bce6-b951e74bb18f',
            eventsDelay: 20000,
            attemptsNumber: 32,
        },
        4: {
            name: 'Train Miner',
            appToken: '82647f43-3f87-402d-88dd-09a90025313f',
            promoId: 'c4480ac7-e178-4973-8061-9ed5b2e17954',
            eventsDelay: 20000,
            attemptsNumber: 15,
        },
        5: {
            name: 'MergeAway',
            appToken: '8d1cc2ad-e097-4b86-90ef-7a27e19fb833',
            promoId: 'dc128d28-c45b-411c-98ff-ac7726fbaea4',
            eventsDelay: 20000,
            attemptsNumber: 15,
        },
        6: {
            name: 'Cooking Stories',
            appToken: 'ed526e8c-e6c8-40fd-b72a-9e78ff6a2054',
            promoId: 'ed526e8c-e6c8-40fd-b72a-9e78ff6a2054',
            eventsDelay: 20000,
            attemptsNumber: 32,
            
        },
         7 : {
            name: 'Polysphere',
            appToken: '2aaf5aee-2cbc-47ec-8a3f-0962cc14bc71',
            promoId: '2aaf5aee-2cbc-47ec-8a3f-0962cc14bc71',
            eventsDelay: 20000,
            attemptsNumber: 18,
         },
	8: {
            name: 'Snake Run',
            appToken: 'c8e017e2-8817-4d02-bce6-b951e74bb18f',
            promoId: 'c8e017e2-8817-4d02-bce6-b951e74bb18f',
            eventsDelay: 20000, // 30 seconds
            attemptsNumber: 30,
            
	},
        9: {
            name: 'Factory World',
            appToken: 'd02fc404-8985-4305-87d8-32bd4e66bb16',
            promoId: 'd02fc404-8985-4305-87d8-32bd4e66bb16',
            eventsDelay: 20000, // 30 seconds
            attemptsNumber: 30,
            
	},
	10: {
            name: 'Stone Age',
            appToken: '04ebd6de-69b7-43d1-9c4b-04a6ca3305af',
            promoId: '04ebd6de-69b7-43d1-9c4b-04a6ca3305af',
            eventsDelay: 22000,
            attemptsNumber: 25,
            
	},
	11:{
	    name: 'Bouncemasters',
            appToken: 'bc72d3b9-8e91-4884-9c33-f72482f0db37',
            promoId: 'bc72d3b9-8e91-4884-9c33-f72482f0db37',
            eventsDelay: 20000,
            attemptsNumber: 30,
	},
	12:{
	    name: 'Hide Ball',
            appToken: '4bf4966c-4d22-439b-8ff2-dc5ebca1a600',
            promoId: '4bf4966c-4d22-439b-8ff2-dc5ebca1a600',
            eventsDelay: 40000,
            attemptsNumber: 30,
	},
	13: {
            name: 'Infected Frontier',
            appToken: 'eb518c4b-e448-4065-9d33-06f3039f0fcb',
            promoId: 'eb518c4b-e448-4065-9d33-06f3039f0fcb',
            eventsDelay: 20000, // 30 seconds
            attemptsNumber: 30,
        },
        14: {
            name: 'Count Masters',
            appToken: '4bdc17da-2601-449b-948e-f8c7bd376553',
            promoId: '4bdc17da-2601-449b-948e-f8c7bd376553',
            eventsDelay: 20000, // 30 seconds
            attemptsNumber: 30,
	},
	15: {
            name: 'Infected Frontier',
            appToken: 'eb518c4b-e448-4065-9d33-06f3039f0fcb',
            promoId: 'eb518c4b-e448-4065-9d33-06f3039f0fcb',
            eventsDelay: 20000, // 30 seconds
            attemptsNumber: 30,
        },
        16: {
            name: 'Among Water',
            appToken: 'daab8f83-8ea2-4ad0-8dd5-d33363129640',
            promoId: 'daab8f83-8ea2-4ad0-8dd5-d33363129640',
            eventsDelay: 20000, // 30 seconds
            attemptsNumber: 30,
        },
        17: {
            name: 'Factory World',
            appToken: 'd02fc404-8985-4305-87d8-32bd4e66bb16',
            promoId: 'd02fc404-8985-4305-87d8-32bd4e66bb16',
            eventsDelay: 20000, // 30 seconds
            attemptsNumber: 30,
        },
	18: {
            name: 'Snake Run',
            appToken: 'c8e017e2-8817-4d02-bce6-b951e74bb18f',
            promoId: 'c8e017e2-8817-4d02-bce6-b951e74bb18f',
            eventsDelay: 20000, // 30 seconds
            attemptsNumber: 30,
        },
	19: {
            name: 'Cooking Stories',
            appToken: 'ed526e8c-e6c8-40fd-b72a-9e78ff6a2054',
            promoId: 'ed526e8c-e6c8-40fd-b72a-9e78ff6a2054',
            eventsDelay: 20000, // 30 seconds
            attemptsNumber: 30,
        }
	    
    };


    const startBtn = document.getElementById('startBtn');
    const keyCountSelect = document.getElementById('keyCountSelect');
    const keyCountLabel = document.getElementById('keyCountLabel');
    const progressContainer = document.getElementById('progressContainer');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const progressLog = document.getElementById('progressLog');
    const keyContainer = document.getElementById('keyContainer');
    const keysList = document.getElementById('keysList');
    const copyAllBtn = document.getElementById('copyAllBtn');
    const generatedKeysTitle = document.getElementById('generatedKeysTitle');
    const gameSelect = document.getElementById('gameSelect');
    const copyStatus = document.getElementById('copyStatus');
    const previousKeysContainer = document.getElementById('previousKeysContainer');
    const previousKeysList = document.getElementById('previousKeysList');
    const telegramChannelBtn = document.getElementById('telegramChannelBtn');

    //for logs
    const logMessage = (message) => {
        const logArea = document.getElementById('logArea');
        const logCheckbox = document.getElementById('logCheckbox');
    
        if (logCheckbox.checked) {
            logArea.style.display = 'block'; // Show the textarea if logs are enabled
            logArea.value += message + '\n';
            logArea.scrollTop = logArea.scrollHeight; // Auto-scroll to the bottom
        }
    };
    
    document.getElementById('logCheckbox').addEventListener('change', (event) => {
        const logArea = document.getElementById('logArea');
        if (event.target.checked) {
            logArea.style.display = 'block'; // Show the textarea when the checkbox is checked
        } else {
            logArea.style.display = 'none';  // Hide the textarea when the checkbox is unchecked
        }
    });

    const initializeLocalStorage = () => {
        const now = new Date().toISOString().split('T')[0];
        Object.values(games).forEach(game => {
            const storageKey = `keys_generated_${game.name}`;
            const storedData = JSON.parse(localStorage.getItem(storageKey));
            if (!storedData || storedData.date !== now) {
                localStorage.setItem(storageKey, JSON.stringify({ date: now, count: 0, keys: [] }));
            }
        });
    };

    const generateClientId = () => {
        const timestamp = Date.now();
        const randomNumbers = Array.from({ length: 19 }, () => Math.floor(Math.random() * 10)).join('');
        return `${timestamp}-${randomNumbers}`;
    };

    const login = async (clientId, appToken) => {
        const response = await fetch('https://api.gamepromo.io/promo/login-client', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                appToken,
                clientId,
                clientOrigin: 'deviceid'
            })
        });

        if (!response.ok) {
            throw new Error('Failed to login');
        }

        const data = await response.json();
        return data.clientToken;
    };

    const emulateProgress = async (clientToken, promoId) => {
        const response = await fetch('https://api.gamepromo.io/promo/register-event', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${clientToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                promoId,
                eventId: generateUUID(),
                eventOrigin: 'undefined'
            })
        });

        if (!response.ok) {
            return false;
        }

        const data = await response.json();
        return data.hasCode;
    };

    const generateKey = async (clientToken, promoId) => {
        const response = await fetch('https://api.gamepromo.io/promo/create-code', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${clientToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                promoId
            })
        });

        if (!response.ok) {
            throw new Error('Failed to generate key');
        }

        const data = await response.json();
        return data.promoCode;
    };

    const generateUUID = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    const delayRandom = () => Math.random() / 3 + 1;

    initializeLocalStorage();

    startBtn.addEventListener('click', async () => {
        const gameChoice = parseInt(gameSelect.value);
        const keyCount = parseInt(keyCountSelect.value);
        const game = games[gameChoice];

        const storageKey = `keys_generated_${game.name}`;
        const storedData = JSON.parse(localStorage.getItem(storageKey));

        if (storedData.count + keyCount > MAX_KEYS_PER_GAME_PER_DAY) {
            alert(`You can generate only ${MAX_KEYS_PER_GAME_PER_DAY - storedData.count} more keys for ${game.name} today.`);
            previousKeysList.innerHTML = storedData.keys.map(key =>
                `<div class="key-item">
                    <input type="text" value="${key}" readonly>
                </div>`
            ).join('');
            previousKeysContainer.classList.remove('hidden');
            return;
        }

        keyCountLabel.innerText = `Number of keys: ${keyCount}`;

        progressBar.style.width = '0%';
        progressText.innerText = '0%';
        progressLog.innerText = 'Starting... \n Please wait It may take upto 1 min to Login';
        progressContainer.classList.remove('hidden');
        keyContainer.classList.add('hidden');
        generatedKeysTitle.classList.add('hidden');
        keysList.innerHTML = '';
        keyCountSelect.classList.add('hidden');
        gameSelect.classList.add('hidden');
        startBtn.classList.add('hidden');
        copyAllBtn.classList.add('hidden');
        startBtn.disabled = true;

        let progress = 0;
        const updateProgress = (increment, message) => {
            progress += increment;
            progressBar.style.width = `${progress}%`;
            progressText.innerText = `${progress}%`;
            progressLog.innerText = message;
        };
    

    const generateKeyProcess = async () => {
    const clientId = generateClientId();
    let clientToken;
    try {
        clientToken = await login(clientId, game.appToken);
    } catch (error) {
        alert(`Failed to login: ${error.message}`);
        startBtn.disabled = false;
        return null;
    }
    for (let i = 0; i < game.attemptsNumber; i++) {
        logMessage(`Attempt ${i + 1}: Sending request...`);
    
        let countdown = game.eventsDelay / 1000;
        const countdownContainer = document.getElementById('countdownContainer');
        const countdownTimer = document.getElementById('countdownTimer');
    
        countdownContainer.style.display = 'block';
        countdownTimer.textContent = countdown;
    
        const countdownInterval = setInterval(() => {
            countdown -= 1;
            countdownTimer.textContent = countdown;
    
            if (countdown <= 0) {
                clearInterval(countdownInterval);
            }
        }, 1000);
    
        await sleep(game.eventsDelay * delayRandom());
    
        clearInterval(countdownInterval);
        countdownContainer.style.display = 'none';
    
        const hasCode = await emulateProgress(clientToken, game.promoId);
        updateProgress(((100 / game.attemptsNumber) / keyCount), 'Emulating progress...');
    
        if (hasCode) {
            logMessage(`Attempt ${i + 1}: Request success. Code received.`);
            break;
        } else {
            logMessage(`Attempt ${i + 1}: Request failed. No code received.`);
        }
    }
    
    try {
        logMessage('Generating the key...');
        const key = await generateKey(clientToken, game.promoId);
        logMessage('Key generation successful.');
        updateProgress(30 / keyCount, 'Generating key...');
        return key;
    } catch (error) {
        logMessage(`Key generation failed: ${error.message}`);
        alert(`Failed to generate key: ${error.message}`);
        return null;
    }
};


        const keys = await Promise.all(Array.from({ length: keyCount }, generateKeyProcess));

        if (keys.length > 1) {
            keysList.innerHTML = keys.filter(key => key).map(key =>
                `<div class="key-item">
                    <input type="text" value="${key}" readonly>
                    <button class="copyKeyBtn" data-key="${key}">Copy Key</button>
                </div>`
            ).join('');
            copyAllBtn.classList.remove('hidden');
        } else if (keys.length === 1) {
            keysList.innerHTML =
                `<div class="key-item">
                    <input type="text" value="${keys[0]}" readonly>
                    <button class="copyKeyBtn" data-key="${keys[0]}">Copy Key</button>
                </div>`;
        }

        storedData.count += keys.filter(key => key).length;
        storedData.keys.push(...keys.filter(key => key));
        localStorage.setItem(storageKey, JSON.stringify(storedData));

        keyContainer.classList.remove('hidden');
        generatedKeysTitle.classList.remove('hidden');
        document.querySelectorAll('.copyKeyBtn').forEach(button => {
            button.addEventListener('click', (event) => {
                const key = event.target.getAttribute('data-key');
                navigator.clipboard.writeText(key).then(() => {
                    copyStatus.innerText = `Copied ${key}`;
                    setTimeout(() => {
                        copyStatus.innerText = '';
                    }, 2000);
                }).catch(err => {
                    console.error('Could not copy text: ', err);
                });
            });
        });

        startBtn.disabled = false;
        keyCountSelect.classList.remove('hidden');
        gameSelect.classList.remove('hidden');
        startBtn.classList.remove('hidden');
    });

    copyAllBtn.addEventListener('click', () => {
        const allKeys = Array.from(document.querySelectorAll('.key-item input')).map(input => input.value).join('\n');
        navigator.clipboard.writeText(allKeys).then(() => {
            copyStatus.innerText = 'All keys copied';
            setTimeout(() => {
                copyStatus.innerText = '';
            }, 2000);
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    });

    document.getElementById('creatorChannelBtn').addEventListener('click', () => {
        (function() {
            const part1 = atob('aHR0cHM6Ly90ZWxlZ3JhbS5tZS8=');
            const part2 = atob('U2FtX0RtX2JvdA==');
            const url = part1 + part2;
            window['open'](url, '_blank');
        })();
        
    });

    telegramChannelBtn.addEventListener('click', () => {
        (function() {
            const part1 = atob('aHR0cHM6Ly90ZWxlZ3JhbS5tZS8=');
            const part2 = atob('SW5zdGFfQnV5X0ZvbGxvd2Vy');
            const url = part1 + part2;
            window['open'](url, '_blank');
        })();
        
    });

    document.getElementById('ShowKeysBtn').addEventListener('click', () => {
        const generatedCodesContainer = document.getElementById('generatedCodesContainer');
        const generatedCodesList = document.getElementById('generatedCodesList');
        generatedCodesList.innerHTML = ''; // Clear the list

        let codesGeneratedToday = [];

        Object.keys(games).forEach(key => {
            const game = games[key];
            const storageKey = `keys_generated_${game.name}`;
            const storedData = JSON.parse(localStorage.getItem(storageKey));

            if (storedData && storedData.keys && storedData.keys.length > 0) {
                codesGeneratedToday = codesGeneratedToday.concat(storedData.keys.map(code => {
                    return `<li>${game.name}: ${code}</li>`;
                }));
            }
        });

        if (codesGeneratedToday.length > 0) {
            generatedCodesList.innerHTML = codesGeneratedToday.join('');
        } else {
            generatedCodesList.innerHTML = '<li>No codes generated today.</li>';
        }

        generatedCodesContainer.style.display = 'block';
    });

    
});
