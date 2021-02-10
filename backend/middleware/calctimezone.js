module.exports = (offset) => { //offset will be in hours (e.g. UTC-5)
    const d = new Date();
    const utc = d.getTime() + (d.getTimezoneOffset() * 60000); //in msec
    const nd = new Date(utc + (3600000*offset)); //in msec still.

    return nd.toLocaleString() //e.g. 2/5/2021, 12:04:02 PM for Eastern Standard Time (GMT-5)
}