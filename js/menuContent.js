var contentMenu = `
<div class="openbtn"><span></span><span></span><span></span></div>
<nav id="g-nav">
    <div id="g-nav-list"><!--ナビの数が増えた場合縦スクロールするためのdiv※不要なら削除-->
        <ul>
            <li><a href="#"><h1>Top</h1></a></li>
            <br><hr><br>
            <li><a href="chara_role/"><h1>chara</h1></a></li>
            <li><a href="order_list/"><h1>order</h1></a></li>
            <li><a href="memoria_list/"><h1>memoria</h1></a></li>
            <li><a href="gacha/"><h1>gacha</h1></a></li>
            <li><a href="charm_list/"><h1>charm</h1></a></li>
        </ul>
    </div>
</nav>
`;
document.getElementById('menu').innerHTML = contentMenu;