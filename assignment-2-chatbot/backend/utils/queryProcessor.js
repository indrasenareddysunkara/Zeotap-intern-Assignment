const axios = require("axios");
const { extractRelevantInfo } = require("./scraper");

const CDP_DOCS = {
    segment: "https://segment.com/docs/",
    mparticle: "https://docs.mparticle.com/",
    lytics: "https://docs.lytics.com/",
    zeotap: "https://docs.zeotap.com/home/en-us/"
};

async function fetchAnswer(question) {
    console.log("🧐 Received Question:", question); // ✅ Debugging log

    let foundCdp = Object.keys(CDP_DOCS).find(cdp => 
        question.toLowerCase().includes(cdp)
    );

    console.log("🔍 Detected CDP:", foundCdp); // ✅ Log which CDP is detected

    if (!foundCdp) {
        return "I'm only trained to answer questions related to Segment, mParticle, Lytics, and Zeotap.";
    }

    const docUrl = CDP_DOCS[foundCdp];
    console.log(`🔗 Fetching documentation from: ${docUrl}`);

    const relevantInfo = await extractRelevantInfo(docUrl, question);
    console.log("📄 Extracted Information:", relevantInfo);

    return relevantInfo || "Couldn't find a direct answer, please check the official documentation.";
}

module.exports = { fetchAnswer };
