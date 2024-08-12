const cds = require("@sap/cds")
const logger = cds.log("employeeManagement")

module.exports = cds.service.impl(function() {
    this.after("READ", "JobTitles", (data, req) => {
        data.map(JobTitle => JobTitle.title += '!?!')
    })
})