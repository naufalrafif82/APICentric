const axios = require("axios");

const username = "Administrator";
const password = "Bu$An@Pr0dUct!On";
const token = "SecurityTokenURL=centric://_CS_SecurityToken/0992375b-3741-4fda-a379-6c2dd77669ed";

const url = "https://busana-prod.centricsoftware.com/csi-requesthandler/api/v2/styles/C8922755";

const headers = {
    Authorization: `Bearer ${token}`,
};

axios
    .get(url, {
        headers,
    })
    .then((response) => {
        const data = response.data;
        // Parsing data XML
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "text/xml");
        // Menampilkan hasil
        const resultElement = document.getElementById("result");
        resultElement.innerHTML = xmlDoc.outerHTML;
    })
    .catch((error) => {
        console.error(error);
    });
