class Api_response {
    constructor(status_code, message, data) {
        this.status_code = status_code;
        this.message = message;
        this.data = data
    }
}

export default Api_response;