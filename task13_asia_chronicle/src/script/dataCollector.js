export class DataCollector {
    async getData () {
        let data;
        try {
            const res = await fetch('https://api.publicapis.org/entries');
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            data = await res.json();
        } catch ({message}) {
            throw new Error(message)
        }
        return data;
    }
}
//
// fetch('http://example.com/’)
//     .then(response => response.json())
//     .then(data)=> {
//     console.log(data);
// });
