export default {
    add(state, work) {
        if (work !== "") {
            var formatted_date = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
            this.state.listWorks.push({ todo: work, time: formatted_date, done: false })
        }
    }
}