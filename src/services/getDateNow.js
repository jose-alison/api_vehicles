const { format } = require("date-fns");

module.exports = () => {
    return format(Date.now(), "yyyy-MM-dd HH:mm:ss");
};
