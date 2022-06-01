async function getAllHabits(){
    try {
        const response = await fetch('');
        const data = await response.json();
        return data;
    } catch (err) {
        console.warn(err);
    }

}
