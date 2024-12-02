const API_URL = "http://104.237.10.198:8090/v1/umr";
const API_TOKEN = "NnVHZ1c1THJAOlBVQkxJQzoyLjYuOTpwdWJsaWM6MTczMTQwNjA5MDYwMQ==";
async function request(endpoint, method = "GET", data, isFormData = false) {
  const options = {
    method,
    headers: {
      // 'Authorization': `Bearer ${testTOken}`,
      "Content-Type": "application/json",
      "token": API_TOKEN
    }
  };
  if (data && !isFormData) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  } else if (data && isFormData) {
    options.body = data;
  }
  const response = await fetch(`${API_URL}/${endpoint}`, options);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Network response was not ok.");
  }
  return response.json();
}
async function generateCaptcha() {
  return request("captcha-generate");
}
async function validateCaptcha(sessionId, captcha) {
  const response = await request(`captcha-validate?session_id=${sessionId}&captcha=${captcha}`, "POST");
  return response.valid === true;
}
const apiClient = {
  get: (endpoint) => request(endpoint),
  post: (endpoint, data, isFormData = false) => request(endpoint, "POST", data, isFormData),
  generateCaptcha,
  validateCaptcha
};
const jobService = () => {
  const getJobOpenings = async () => {
    try {
      const response = await apiClient.get("job-openings");
      console.log("job openings", response);
      return response;
    } catch (error) {
      console.error("Error fetching job openings:", error);
      throw error;
    }
  };
  const getJobOpeningById = async (id) => {
    const response = await apiClient.get(`job-openings/${id}`);
    console.log("job opening", response);
    return response;
  };
  const getCategories = async () => {
    const response = await apiClient.get("job-categories");
    console.log("categories", response);
    return response;
  };
  return {
    getJobOpenings,
    getJobOpeningById,
    getCategories
  };
};
export {
  jobService as j
};
