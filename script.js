document.addEventListener('DOMContentLoaded', () => {
    const EVENTS_DELAY = 20000;
    const MAX_KEYS_PER_GAME_PER_DAY = 5;

    const games = {
        1: {
            name: 'Riding Extreme 3D',
            appToken: 'd28721be-fd2d-4b45-869e-9f253b554e50',
            promoId: '43e35910-c168-4634-ad4f-52fd764a843f',
        },
        2: {
            name: 'Chain Cube 2048',
            appToken: 'd1690a07-3780-4068-810f-9b5bbf2931b2',
            promoId: 'b4170868-cef0-424f-8eb9-be0622e8e8e3',
        },
        3: {
            name: 'My Clone Army',
            appToken: '74ee0b5b-775e-4bee-974f-63e7f4d5bacb',
            promoId: 'fe693b26-b342-4159-8808-15e3ff7f8767',
        },
        4: {
            name: 'Train Miner',
            appToken: '82647f43-3f87-402d-88dd-09a90025313f',
            promoId: 'c4480ac7-e178-4973-8061-9ed5b2e17954',
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
    const telegramChannelBtn = document.getElementById('telegramChannelBtn');

    const initializeLocalStorage = () => {
        const now = new Date().toISOString().split('T')[0];
        Object.values(games).forEach(game => {
            const storageKey = `keys_generated_${game.name}`;
            const storedData = JSON.parse(localStorage.getItem(storageKey));
            if (!storedData || storedData.date !== now) {
                localStorage.setItem(storageKey, JSON.stringify({ date: now, count: 0 }));
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
            alert(`You can generate only ${MAX_KEYS_PER_GAME_PER_DAY - storedData.count} more keys for ${game.name} today. Please contact us on Telegram for more keys.`);
            return;
        }

        keyCountLabel.innerText = `Number of keys: ${keyCount}`;

        progressBar.style.width = '0%';
        progressText.innerText = '0%';
        progressLog.innerText = 'Starting...';
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

            for (let i = 0; i < 11; i++) {
                await sleep(EVENTS_DELAY * delayRandom());
                const hasCode = await emulateProgress(clientToken, game.promoId);
                updateProgress(7 / keyCount, 'Emulating progress...');
                if (hasCode) {
                    break;
                }
            }

            try {
                const key = await generateKey(clientToken, game.promoId);
                updateProgress(30 / keyCount, 'Generating key...');
                return key;
            } catch (error) {
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

        storedData.count += keyCount;
        localStorage.setItem(storageKey, JSON.stringify(storedData));

        keyContainer.classList.remove('hidden');
        generatedKeysTitle.classList.remove('hidden');
        document.querySelectorAll('.copyKeyBtn').forEach(button => {
            button.addEventListener('click', (event) => {
                const key = event.target.getAttribute('data-key');
                navigator.clipboard.writeText(key).then(() => {
                    copyStatus.classList.remove('hidden');
                    setTimeout(() => copyStatus.classList.add('hidden'), 2000);
                });
            });
        });
        copyAllBtn.addEventListener('click', () => {
            const keysText = keys.filter(key => key).join('\n');
            navigator.clipboard.writeText(keysText).then(() => {
                copyStatus.classList.remove('hidden');
                setTimeout(() => copyStatus.classList.add('hidden'), 2000);
            });
        });

        progressBar.style.width = '100%';
        progressText.innerText = '100%';
        progressLog.innerText = 'Complete';

        startBtn.classList.remove('hidden');
        keyCountSelect.classList.remove('hidden');
        gameSelect.classList.remove('hidden');
        startBtn.disabled = false;
    });

    document.getElementById('generateMoreBtn').addEventListener('click', () => {
        progressContainer.classList.add('hidden');
        keyContainer.classList.add('hidden');
        startBtn.classList.remove('hidden');
        keyCountSelect.classList.remove('hidden');
        gameSelect.classList.remove('hidden');
        generatedKeysTitle.classList.add('hidden');
        copyAllBtn.classList.add('hidden');
        keysList.innerHTML = '';
        keyCountLabel.innerText = 'Number of keys:';
    });

    document.getElementById('creatorChannelBtn').addEventListener('click', () => {
        window.open('https://telegram.me/Insta_Buy_Follower', '_blank');
    });

    telegramChannelBtn.addEventListener('click', () => {
        window.open('https://telegram.me/Sam_Dm_bot', '_blank');
    });
});
