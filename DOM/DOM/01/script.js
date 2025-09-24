function createElementH2(){
    let h2 = document.createElement('h2');
    h2.innerText = "I'm H2 Element created by you!";

    let div = document.getElementById('my-container');
    div.append(h2);

    console.log(h2);
}