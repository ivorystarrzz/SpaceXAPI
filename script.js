const dataArea = document.getElementById('history_container');
const dataNumber = 21;
const fetchHistoryEvents = async()=> {
    for(let i=1; i<dataNumber; i++){
        await getHistory(i);
    }
}
const getHistory = async id => {
    const url = `https://api.spacexdata.com/v3/history/${id}`;
    const res = await fetch(url);
    const history = await res.json();
    createHistoryCard(history);
}
function createHistoryCard(history){
    const historyEl = document.createElement('div');
    historyEl.classList.add('history');
    const historyInnerHTML= `
    <div class="title">${history.title}</div>
     <div class="event_date_utc">${history.event_date_utc}</div>
     <div class="flight_number">${history.flight_number}</div>
     <div class="detail">${history.details}</div>`
      ;
    historyEl.innerHTML = historyInnerHTML;
    history_container.appendChild(historyEl)
}
fetchHistoryEvents();