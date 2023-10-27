const CostForm = ()=>{
    const nameChangeHandler = (event) => {
        console.log("Название изменено")
        console.log(event.target.value)
    };

    return <form>
        <label>Название</label>
        <input type="text" onchange={nameChangeHandler}/>

        <label>Сумма</label>
        <input type="number">

        <label>Название</label>
        <input type="date">

        <button type="submit">Добавить расход</button>
    </form>
}