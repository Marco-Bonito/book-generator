class Functions {
    constructor() {
        this.baseApiUrl = "http://localhost:8080";
    }
    async httpPost(params = {}, apiString = "") {
        try {
            const response = await fetch(`${this.baseApiUrl}${apiString}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(params)
            });
            return await response.json();
        } catch (error) {
            console.error("Error:", error);
        }
    }
}

export default Functions;