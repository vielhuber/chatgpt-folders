chrome.runtime.onMessage.addListener(function (message, sender, senderResponse) {
    if (message.action === 'fetch') {
        fetch(message.data.url, message.data.args)
            .then(response => {
                let data = response.json(),
                    status = response.status;
                if (status == 200 || status == 304) {
                    return data;
                }
                return { success: false, message: status };
            })
            .catch(error => {
                return { success: false, message: error };
            })
            .then(response => {
                senderResponse(response);
            });
        return true;
    }
});
