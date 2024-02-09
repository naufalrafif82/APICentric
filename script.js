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

    try {
        const response = await axios.post("https://busana-prod.centricsoftware.com/csi-requesthandler/api/v2/session", data);
        const token = response.data.token;
        result.textContent = `Token: ${token}`;
    } catch (error) {
        result.textContent = `Error: ${error.message}`;
    }
});
