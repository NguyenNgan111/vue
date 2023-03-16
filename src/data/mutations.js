export default {
    countTodoList(state) {
        state.countWorking = state.listWorks.filter((s) => !s.done).length
    },
    countDone(state) {
        state.countdone = state.listWorks.length - state.countWorking
    }
}