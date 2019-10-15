import Constants from '../constants';

class ApiRequestHandler {
    async apiGetCo2Value() {
       const url = `${Constants.BASE_URL}/getCo2NewValue`;
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'Get',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    if (responseJson.statusMessage === "Success") {
                         resolve(responseJson.data);
                    } else {
                        resolve(responseJson.statusMessage);
                    }
                })
                .catch((error) => {
                    console.log('error', error);
                    reject(error)
                });
        })
    }
}

export default ApiRequestHandler;