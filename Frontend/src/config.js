const env ="production";

const baseUrl = env==="locale"?"http://localhost:8000/api/ymanebot":"/api/ymanebot";

export default baseUrl;