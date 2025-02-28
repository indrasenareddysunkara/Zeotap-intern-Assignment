const puppeteer = require("puppeteer");

async function extractRelevantInfo(url, question) {
    const browser = await puppeteer.launch({ headless: false }); // ✅ Open browser for debugging
    const page = await browser.newPage();

    console.log(`🌍 Navigating to: ${url}`);
    await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 }); // ✅ Wait for network requests to complete

    // ✅ Ensure JavaScript-generated content is loaded
    try {
        await page.waitForSelector("h1, h2, p", { timeout: 20000 }); // ✅ Wait for key content
    } catch (error) {
        console.log("⚠️ Warning: Page content did not load in time.");
        await browser.close();
        return null;
    }

    // ✅ Extract Full Page Content
    const pageText = await page.evaluate(() => document.body.innerText);
    console.log("📄 Extracted Page Text Length:", pageText.length);

    await browser.close();

    if (pageText.length < 100) {
        console.log("⚠️ Warning: Page content may not have loaded properly.");
        return null;
    }

    // ✅ Improved Regex Matching
    const regex = new RegExp(question.split(" ").join("|"), "gi");
    const matchedLines = pageText.split("\n").filter(line => regex.test(line));

    if (matchedLines.length > 0) {
        console.log("✅ Found relevant text!");
        return matchedLines.join(" ");
    } else {
        console.log("❌ No relevant text found.");
        return null;
    }
}

module.exports = { extractRelevantInfo };
