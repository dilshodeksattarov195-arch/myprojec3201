const uploaderSenderConfig = { serverId: 1283, active: true };

const uploaderSenderHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_1283() {
    return uploaderSenderConfig.active ? "OK" : "ERR";
}

console.log("Module uploaderSender loaded successfully.");