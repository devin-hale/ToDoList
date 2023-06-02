const renderPrioSelect = (expDetails, projTask) => {

    let taskPrioSelect = document.createElement('div');
    taskPrioSelect.classList = 'taskPrioSelect';

    let prioSelectText = document.createElement('p');
    prioSelectText.classList = 'prioSelectText';
    prioSelectText.innerHTML = 'Priority:'
    taskPrioSelect.appendChild(prioSelectText);

    let prioSelectLow = document.createElement('button');
    prioSelectLow.classList = 'prioSelectButton lowPrio'
    prioSelectLow.type = 'button';
    taskPrioSelect.appendChild(prioSelectLow);

        prioSelectLow.addEventListener('click', () => {
            projTask.priority = 'Low';
            document.getElementById(`task=${projTask.tID}`).style.color = '#a3e635';
        })

    let prioSelectMid = document.createElement('button');
    prioSelectMid.classList = 'prioSelectButton midPrio'
    prioSelectMid.type = 'button';
    taskPrioSelect.appendChild(prioSelectMid);

        prioSelectMid.addEventListener('click', () => {
            projTask.priority = 'Mid';
            document.getElementById(`task=${projTask.tID}`).style.color = '#fcd34d';
        })

    let prioSelectHigh = document.createElement('button');
    prioSelectHigh.classList = 'prioSelectButton highPrio'
    prioSelectHigh.type = 'button';
    taskPrioSelect.appendChild(prioSelectHigh);

        prioSelectHigh.addEventListener('click', () => {
            projTask.priority = 'High';
            document.getElementById(`task=${projTask.tID}`).style.color = '#ef4444';
        })



    expDetails.appendChild(taskPrioSelect);
}

export default renderPrioSelect;