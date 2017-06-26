window.onload = function () {
    //рисуем игровое поле
    for (var i = 0; i<9; i++) {
        document.getElementById('game').innerHTML+='<div class="block"></div>';
    }
    
    var move = 0;
    //отображаем Х и 0
    document.getElementById('game').onclick = function (event) {
        if (event.target.className == 'block') {
            if (move % 2 == 0) {
                event.target.innerHTML = 'X';
            }
            else {
                event.target.innerHTML = '0';
            }
            move++;
            checkWinner();        
        }
    }
    
    //проверяем на победу Х или 0
    function checkWinner() {
        var allblocks = document.getElementsByClassName('block');
        
        //проверяем победу крестиков
        if (allblocks[0].innerHTML == 'X' && allblocks[1].innerHTML == 'X' && allblocks[2].innerHTML == 'X') {
            alert('Победили крестики');
            location.reload();
        }
        if (allblocks[3].innerHTML == 'X' && allblocks[4].innerHTML == 'X' && allblocks[5].innerHTML == 'X') {
            alert('Победили крестики');
            location.reload();
        }
        if (allblocks[6].innerHTML == 'X' && allblocks[7].innerHTML == 'X' && allblocks[8].innerHTML == 'X') {
            alert('Победили крестики');
            location.reload();
        }
        if (allblocks[0].innerHTML == 'X' && allblocks[3].innerHTML == 'X' && allblocks[6].innerHTML == 'X') {
            alert('Победили крестики');
            location.reload();
        }
        if (allblocks[1].innerHTML == 'X' && allblocks[4].innerHTML == 'X' && allblocks[7].innerHTML == 'X') {
            alert('Победили крестики');
            location.reload();
        }
        if (allblocks[2].innerHTML == 'X' && allblocks[5].innerHTML == 'X' && allblocks[8].innerHTML == 'X') {
            alert('Победили крестики');
            location.reload();
        }
        if (allblocks[0].innerHTML == 'X' && allblocks[4].innerHTML == 'X' && allblocks[8].innerHTML == 'X') {
            alert('Победили крестики');
            location.reload();
        }
        if (allblocks[2].innerHTML == 'X' && allblocks[4].innerHTML == 'X' && allblocks[6].innerHTML == 'X') {
            alert('Победили крестики');
            location.reload();
        }
        
        //проверяем победу нолики
        if (allblocks[0].innerHTML == '0' && allblocks[1].innerHTML == '0' && allblocks[2].innerHTML == '0') {
            alert('Победили нолики');
            location.reload();
        }
        if (allblocks[3].innerHTML == '0' && allblocks[4].innerHTML == '0' && allblocks[5].innerHTML == '0') {
            alert('Победили нолики');
            location.reload();
        }
        if (allblocks[6].innerHTML == '0' && allblocks[7].innerHTML == '0' && allblocks[8].innerHTML == '0') {
            alert('Победили нолики');
            location.reload();
        }
        if (allblocks[0].innerHTML == '0' && allblocks[3].innerHTML == '0' && allblocks[6].innerHTML == '0') {
            alert('Победили нолики');
            location.reload();
        }
        if (allblocks[1].innerHTML == '0' && allblocks[4].innerHTML == '0' && allblocks[7].innerHTML == '0') {
            alert('Победили нолики');
            location.reload();
        }
        if (allblocks[2].innerHTML == '0' && allblocks[5].innerHTML == '0' && allblocks[8].innerHTML == '0') {
            alert('Победили нолики');
            location.reload();
        }
        if (allblocks[0].innerHTML == '0' && allblocks[4].innerHTML == '0' && allblocks[8].innerHTML == '0') {
            alert('Победили нолики');
            location.reload();
        }
        if (allblocks[2].innerHTML == '0' && allblocks[4].innerHTML == '0' && allblocks[6].innerHTML == '0') {
            alert('Победили нолики');
            location.reload();
        }
        
        
    }
}