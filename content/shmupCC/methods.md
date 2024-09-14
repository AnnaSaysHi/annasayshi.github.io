## ShmupCC methods list

[html]
Select version:
<select class='ecl-table-game-select'>
    <option value="110">1.1.0 (Bullet Hell Artistry 8)</option>
</select>


<button class="ecl-table-btt">Get table</button>
<div class='ecl-table-wrapper'></div>
[/html]

[script]
onContentLoad(async function() {
    function initTableNavigation() {
        document.querySelector(".ins-navigation")
        .addEventListener("click", e => {
            if (e.target.dataset.target) {
                const targ = document.querySelector("[data-insnavigation='"+e.target.dataset.target+"']");
                targ.scrollIntoView();
                window.scrollBy(0, -110);
            }
        });
    }
    const select = document.querySelector(".ecl-table-game-select");
    const target = document.querySelector(".ecl-table-wrapper");
    const input = document.querySelector("#eclmap-file");
    document.querySelector(".ecl-table-btt")
        .addEventListener("click", async () => {
            let game = parseFloat(select.value);
            let radios = document.getElementsByName("eclmap-radio");
            let val;
            target.innerHTML = generateOpcodeTable(game);
            initTableNavigation();
            const query = parseQuery();
            query.table = game;
            location.hash = buildQuery(query);
        });
    const query = parseQuery();
    if (typeof query.table != "undefined" && !isNaN(query.table)) {
        const game = parseFloat(query.table);
        target.innerHTML = generateOpcodeTable(game);
        initTableNavigation();
    } else {
        target.innerHTML = generateOpcodeTable(110);
        initTableNavigation();
    }
});
[/script]
