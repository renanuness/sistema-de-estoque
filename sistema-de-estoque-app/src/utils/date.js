export function formatDate(dateStr){
    let dateItems = dateStr.split('-');
    return dateItems[2] + '/' + dateItems[1] + '/' + dateItems[0];
}