import axios from "axios";

export default async function fetchJson(method, path, data, token = "") {
  try {
    let headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Accept-Language": "id-ID",
    };

    const response = await fetch(path, {
      method,
      headers,
      body: data ? JSON.stringify(data) : null,
    });

    const result = await response.json();

    if (result.success == false) {
      throw result;
    }
    if (result.error != null) {
      throw result.error;
    }

    return result;
  } catch (error) {
    throw error;
  }
}

export async function fetchFormData(path, imageFile) {
  const url = path;
  try {
    const formData = new FormData();
    if (imageFile instanceof Array) {
      await imageFile.map((item) => {
        formData.append("image", item);
      });
    } else {
      formData.append("image", imageFile);
    }

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const response = await axios.post(url, formData, config);
    const result = await response.data;
    return result;
  } catch (error) {
    throw error;
  }
}
