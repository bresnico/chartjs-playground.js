const url = "mydfJSON.json";

getData();
  
async function getData() {
  const response = await fetch(url);
  console.log(response);
  const data = await response.json();
  console.log(data);
  length = data.length;
  console.log(length);

  labels = [];
  values = [];
  
  for (i = 0; i < length; i++) {
    labels.push(data[i].name);
    values.push(data[i].score);
  }
  
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: "Popularité auprès des mangues",
          backgroundColor: [
            "#3e95cd",
            "#8e5ea2", 
            "#3cba9f", 
            "#e8c3b9", 
            "#c45850",
            "#CD5C5C", 
            "#40E0D0"
          ],
          data: values
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Score de popularité auprès des mangues'
      }
    }
  });

}