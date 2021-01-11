const puppeteer = require('puppeteer');

/*(async () => {
    // this should display "helhelhelhel"
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('http://localhost:4000');
    await page.waitForTimeout(2000);
    await page.click('canvas');
    await page.waitForTimeout(200);
    await page.type('canvas', 'help');
    await page.keyboard.press('Backspace');
    await page.type('canvas', 'help');
    await page.keyboard.press('Backspace');
    await page.type('canvas', 'help');
    await page.keyboard.press('Backspace');
    await page.type('canvas', 'help');
    await page.keyboard.press('Backspace');
})();*/

(async () => {
    const browser = await puppeteer.launch({headless: false, defaultViewport: null});
    const page = await browser.newPage();
    page.on('console', async msg => console[msg._type](
        ...await Promise.all(msg.args().map(arg => arg.jsonValue()))
    ));
    await page.goto('http://localhost:4000');
    await page.waitForTimeout(2000);
    await page.click('canvas');
    await page.waitForTimeout(200);

    // not about to dive into why dashes aren't working here, but the game happily accepts underscores instead
    const words = [
        "akaibo_ru",
        "tamago",
        "kasa",
        "toukyou",
        "karaoke",
        "sanndoicchi",
        "takushi_",
        "kare_raisu",
        "hyakupa_sennto",
        "furannsu",
        "hiragana",
        "mirukuko_hi_",
        "meronnpann",
        "hitotsu",
        "itsutsu",
        "muttsu",
        "nanatsu",
        "yattsu",
        "kokonotsu",
        "sennenn",
        "mainichi",
        "kannji",
        "kokonatsu",
        "gannbatte",
        "mamonaku",
        "arigatou",
        "gozaimasu",
        "nichiyoubi",
        "getsuyoubi",
        "kayoubi",
        "suiyoubi",
        "mokuyoubi",
        "kinnyoubi",
        "katakana",
        "mittsu",
        "yottsu",
        "doyoubi",
        "sanngatsu",
        "shigatsu",
        "gogatsu",
        "rokugatsu",
        "shichigatsu",
        "hachigatsu",
        "kugatsu",
        "juugatsu",
        "juuichigatsu",
        "juunigatsu",
        "hidarite",
        "migite",
        "ashikubi",
        "kutsushita",
        "ichimannenn",
    ];

    for (let i = 0; i < words.length; i++) {
        await page.type('canvas', words[i], { delay: 211 });
        await page.waitForTimeout(200);
        await page.keyboard.press('Enter');
        await page.waitForTimeout(900);
        await page.keyboard.press('Backspace');
    }
})();
