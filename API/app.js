const URL = "https://cat-fact.herokuapp.com/facts";

const getFacts = async () => {
    console.log("loading data.......");
    let response = await fetch(URL);
    console.log(response);
    let receivedData = await response.json();
    console.log(receivedData);
}