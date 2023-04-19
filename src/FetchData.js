async function fetchData(data) {
  try {
    const response = await fetch();
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

export { fetchData };
