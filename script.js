const formToken = document.getElementById("form-token");
const result = document.getElementById("result");

formToken.addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const data = {
        username,
        password,
    };

    const response = await fetch("https://busana-prod.centricsoftware.com/csi-requesthandler/api/v2/session", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (response.status === 200) {
        const token = await response.json();
        result.textContent = `Token: ${token}`;
    } else {
        const error = await response.text();
        result.textContent = `Error: ${error}`;
    }
});
