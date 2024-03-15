export async function getTodo(todoId = 1) {
    return fetch("https://jsonplaceholder.typicode.com/todos/" + todoId).then(res => res.json());
}

export function getValueFromEvent(event = new Event("default")) {
    if(event.target == null) return;

    return event.target.value;
}
