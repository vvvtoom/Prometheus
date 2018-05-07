window.addEventListener("keydown", onKeyDown, false);
window.addEventListener("keyup", onKeyUp, false);

function onKeyDown(e) {
    e.returnValue = false;
    if(myCharDie == false){
    switch (e.keyCode) {
        case 27:
            summonSmoke();
            break;
        case 37: // 왼쪽
            if (char[0].charging == false) {
                char[0].state = 5;
                char[0].mvFlag = true;
                char[0].state_temp = 1;
                char[0].mvLeft = true;
            }
            if(char[0].mvFlag == false) char[0].beh = 0;
            break;
        case 38: // 위
            if (char[0].charging == false) {
                char[0].state = 6;
                char[0].mvFlag = true;
                char[0].state_temp = 2;
                char[0].mvUp = true;
            }
            if(char[0].mvFlag == false) char[0].beh = 0;
            break;
        case 39: // 오른쪽
            if (char[0].charging == false) {
                char[0].state = 7;
                char[0].mvFlag = true;
                char[0].state_temp = 3;
                char[0].mvRight = true;
            }
            if(char[0].mvFlag == false) char[0].beh = 0;
            break;
        case 40: // 아래
            if (char[0].charging == false) {
                char[0].state = 4;
                char[0].mvFlag = true;
                char[0].state_temp = 0;
                char[0].mvDown = true;
            }
            if(char[0].mvFlag == false) char[0].beh = 0;
            break;
        case 32: // space
            if (char[0].attackFlag) {
            switch (char[0].state) {
                case 1:
                case 5:
                    PBulletArr.push({
                        x: char[0].x + 10,
                        y: char[0].y + 55,
                      width: 16,
                      height: 17,
                        goX: -1,
                        goY: 0,
                        damage: 0,
                      name: null,
                      speed:10
                    });
                    break;
                case 0:
                case 4:
                    PBulletArr.push({
                        x: char[0].x + 48,
                        y: char[0].y + 120,
                      width: 16,
                      height: 17,
                        goX: 0,
                        goY: 1,
                        damage: 0,
                      name: null,
                      speed:10
                    });
                    break;
                case 3:
                case 7:
                    PBulletArr.push({
                        x: char[0].x + 90,
                        y: char[0].y + 55,
                      width: 16,
                      height: 17,
                        goX: 1,
                        goY: 0,
                        damage: 0,
                      name: null,
                      speed:10
                    });
                    break;
                case 2:
                case 6:
                    PBulletArr.push({
                        x: char[0].x + 48,
                        y: char[0].y + 20,
                      width: 16,
                      height: 17,
                        goX: 0,
                        goY: -1,
                        damage: 0,
                      name: null,
                      speed:10
                    });
                    break;
            }
              PBulletArr[PBulletArr.length-1].damage = attackDamage();
              char[0].speed += dash_up();
              setTimeout(function(){char[0].speed -= dash_up();}, 700);
              char[0].attackFlag = false;
              char[0].stack++;
              setTimeout(function() {
                  char[0].attackFlag = true;
              }, 1000 / char[0].ASpeed);
            }
            break;
        case 65: // 'a' button
            if (!char[0].ACool && !char[0].silence) {
              char[0].charging = true;
              char[0].silence = true;
              char[0].beh = 0;
              char[0].mvUp = false;
              char[0].mvDown = false;
              char[0].mvLeft = false;
              char[0].mvRight = false;
              char[0].ACool += 5000;
              switch (char[0].state) {
                    case 5:
                        char[0].state = 1;
                        break;
                    case 4:
                        char[0].state = 0;
                        break;
                    case 7:
                        char[0].state = 3;
                        break;
                    case 6:
                        char[0].state = 2;
                        break;
                    default:
                        char[0].state = char[0].state;
                        break;
                }
              var temp = 0;
              switch (char[0].state) {
                case 1:
                case 5:
                    arrowInterval = setInterval(function() {PBulletArr.push({
                        x: char[0].x + 10,
                        y: char[0].y + 55,
                      width: 16,
                      height: 17,
                        goX: -1,
                        goY: 0,
                        damage: 0,
                      name: null,
                      speed:10,
                      lifetime:20
                    }); temp++;

              PBulletArr[PBulletArr.length-1].damage = attackDamage() * arrow_damage();
                                                            if(temp == 7){
                                                              clearInterval(arrowInterval);
                                                              setTimeout(function(){
                                                                char[0].charging = false;
                                                                char[0].silence = false;
                                                              }, 2000);
                                                            }
                                                           }, 1000/7);
                    break;
                case 0:
                case 4:
                    arrowInterval = setInterval(function() {PBulletArr.push({
                        x: char[0].x + 48,
                        y: char[0].y + 120,
                      width: 16,
                      height: 17,
                        goX: 0,
                        goY: 1,
                        damage: 0,
                      name: null,
                      speed:10,
                      lifetime:20
                    });temp++;

              PBulletArr[PBulletArr.length-1].damage = attackDamage() * arrow_damage();
                                                            if(temp == 7){
                                                              clearInterval(arrowInterval);
                                                              setTimeout(function(){
                                                                char[0].charging = false;
                                                                char[0].silence = false;
                                                              }, 2000);
                                                            }
                                                           }, 1000/7);
                    break;
                case 3:
                case 7:
                    arrowInterval = setInterval(function() {PBulletArr.push({
                        x: char[0].x + 90,
                        y: char[0].y + 55,
                      width: 16,
                      height: 17,
                        goX: 1,
                        goY: 0,
                        damage: 0,
                      name: null,
                      speed:10,
                      lifetime:20
                    });temp++;

              PBulletArr[PBulletArr.length-1].damage = attackDamage() * arrow_damage();
                                                            if(temp == 7){
                                                              clearInterval(arrowInterval);
                                                              setTimeout(function(){
                                                                char[0].charging = false;
                                                                char[0].silence = false;
                                                              }, 2000);
                                                            }
                                                           }, 1000/7);
                    break;
                case 2:
                case 6:
                    arrowInterval = setInterval(function() {PBulletArr.push({
                        x: char[0].x + 48,
                        y: char[0].y + 20,
                      width: 16,
                      height: 17,
                        goX: 0,
                        goY: -1,
                        damage: 0,
                      name: null,
                      speed:10,
                      lifetime:20
                    });temp++;

              PBulletArr[PBulletArr.length-1].damage = attackDamage() * arrow_damage();
                                                            if(temp == 7){
                                                              clearInterval(arrowInterval);
                                                              setTimeout(function(){
                                                                char[0].charging = false;
                                                                char[0].silence = false;
                                                              }, 2000);
                                                            }
                                                           }, 1000/7);
                    break;
            }
            }
            break;
        case 68: // 'd' button
            if (!char[0].DCool && !char[0].silence && char[0].stack >= dash_req()) {
              char[0].stack -= dash_req();
              char[0].charging = true;
              char[0].silence = true;
              char[0].dashing = true;
              char[0].beh = 0;
              char[0].mvUp = false;
              char[0].mvDown = false;
              char[0].mvLeft = false;
              char[0].mvRight = false;
              char[0].DCool += 5000;
              switch (char[0].state) {
                  case 5:
                      char[0].state = 1;
                      break;
                  case 4:
                      char[0].state = 0;
                      break;
                  case 7:
                      char[0].state = 3;
                      break;
                  case 6:
                      char[0].state = 2;
                      break;
                  default:
                      char[0].state = char[0].state;
                      break;
              }
              switch (char[0].state) {
                  case 1:
                      dash.image.src = "./res/dash.png";
                      dash.width = 86;
                      dash.height = 50;
                      dash.way = 1;
                      effect.push(dash);
                      char[0].speed = 30;
                      char[0].mvLeft = true;
                      setTimeout(function(){
                        char[0].mvLeft = false;
                        char[0].charging = false;
                        char[0].silence = false;
                        char[0].dashing = false;
                        char[0].speed = 4;
                      }, 70 * 4);
                      break;
                  case 0:
                      dash.image.src = "./res/dashD.png";
                      dash.width = 50;
                      dash.height = 86;
                      dash.way = 2;
                      effect.push(dash);
                      char[0].speed = 30;
                      char[0].mvDown = true;
                      setTimeout(function(){
                        char[0].mvDown = false;
                        char[0].charging = false;
                        char[0].silence = false;
                        char[0].dashing = false;
                        char[0].speed = 4;
                      }, 70 * 4);
                      break;
                  case 3:
                      dash.image.src = "./res/dashR.png";
                      dash.width = 86;
                      dash.height = 50;
                      dash.way = 3;
                      effect.push(dash);
                      char[0].speed = 30;
                      char[0].mvRight = true;
                      setTimeout(function(){
                        char[0].mvRight = false;
                        char[0].charging = false;
                        char[0].silence = false;
                        char[0].dashing = false;
                        char[0].speed = 4;
                      }, 70 * 4);
                      break;
                  case 2:
                      dash.image.src = "./res/dashU.png";
                      dash.width = 50;
                      dash.height = 86;
                      dash.way = 4;
                      effect.push(dash);
                      char[0].speed = 30;
                      char[0].mvUp = true;
                      setTimeout(function(){
                        char[0].mvUp = false;
                        char[0].charging = false;
                        char[0].silence = false;
                        char[0].dashing = false;
                        char[0].speed = 4;
                      }, 70 * 4);
                      break;
              }
            }
            break;
        case 70: // 'f' button
            if (!char[0].FCool && !char[0].silence && char[0].stack >= aHeal_require()) {
              switch (char[0].state) {
                            case 1:
                            case 5:
                                effect.push(aHeal);
                                break;
                            case 0:
                            case 4:
                                effect.push(aHeal);
                                break;
                                break;
                            case 3:
                            case 7:
                                effect.push(aHeal);
                                break;
                            case 2:
                            case 6:
                                effect.push(aHeal);
                                break;
                        }
                        char[0].FCool = 5000;
                        char[0].stack -= aHeal_use();
                        if(char[0].SLevel == 7) char[0].hp += char[0].fhp * 0.1;
                        else char[0].hp += char[0].fhp * 0.07;
                        if(char[0].hp > char[0].fhp) char[0].hp = char[0].fhp;
            }
            break;
        case 83: // 's' button
            if (!char[0].SCool && !char[0].silence) {
                char[0].beh = 0;
                switch (char[0].state) {
                    case 5:
                        char[0].state = 1;
                        break;
                    case 4:
                        char[0].state = 0;
                        break;
                    case 7:
                        char[0].state = 3;
                        break;
                    case 6:
                        char[0].state = 2;
                        break;
                    default:
                        char[0].state = char[0].state;
                        break;
                }
                char[0].charging = true;
                char[0].silence = true;
                char[0].mvUp = false;
                char[0].mvDown = false;
                char[0].mvLeft = false;
                char[0].mvRight = false;
                char[0].SCool += 5000;
                chargeArr.push(wind);
                windcharge = setInterval(function() {
                    char[0].charge++;
                    if (char[0].charge == 100) {
                        clearInterval(windcharge);
                        char[0].charge = 0;
                        boss.windhit = false;
                        shooting = true;
                      for(var i=0;i<Monsters.length;i++)
                        Monsters[i].windhit = false;
                        switch (char[0].state) {
                        case 1:
                            wind_effect.way = 1;
                            wind_effect.width = 104;
                            wind_effect.height = 117;
                            wind_effect.image.src = "./res/windshot.png";
                            windBullet.src = "./res/windBullet.png";
                            wind_hit.image.src = "./res/wind_hit.png";
                            wind_hit.width = 91;
                            wind_hit.height = 110;
                            break;
                        case 0:
                            wind_effect.way = 2;
                            wind_effect.width = 117;
                            wind_effect.height = 104;
                            wind_effect.image.src = "./res/windshotD.png";
                            windBullet.src = "./res/windBulletD.png";
                            wind_hit.image.src = "./res/wind_hitD.png";
                            wind_hit.width = 110;
                            wind_hit.height = 91;
                            break;
                        case 3:
                            wind_effect.way = 3;
                            wind_effect.width = 104;
                            wind_effect.height = 117;
                            wind_effect.image.src = "./res/windshotR.png";
                            windBullet.src = "./res/windBulletR.png";
                            wind_hit.image.src = "./res/wind_hitR.png";
                            wind_hit.width = 91;
                            wind_hit.height = 110;
                            break;
                        case 2:
                            wind_effect.way = 4;
                            wind_effect.width = 117;
                            wind_effect.height = 104;
                            wind_effect.image.src = "./res/windshotU.png";
                            windBullet.src = "./res/windBulletU.png";
                            wind_hit.image.src = "./res/wind_hitU.png";
                            wind_hit.width = 110;
                            wind_hit.height = 91;
                            break;
                        }
                        effect.push(wind_effect);
                        setTimeout(function(){
                          switch (char[0].state) {
                            case 1:
                            case 5:
                                PBulletArr.push({
                                    x: char[0].x - 10,
                                    y: char[0].y + 50,
                                    goX: -1,
                                    goY: 0,
                                    width: 82,
                                    height: 24,
                                    damage: 0,
                                    speed: 20,
                                    name: "wind",
                      lifetime:12
                                });
                                break;
                            case 0:
                            case 4:
                                PBulletArr.push({
                                    x: char[0].x + 40,
                                    y: char[0].y + 80,
                                    goX: 0,
                                    goY: 1,
                                    width: 82,
                                    height: 24,
                                    damage: 0,
                                    speed: 20,
                                    name: "wind",
                      lifetime:12
                                });
                                break;
                            case 3:
                            case 7:
                                PBulletArr.push({
                                    x: char[0].x + 20,
                                    y: char[0].y + 50,
                                    goX: 1,
                                    goY: 0,
                                    width: 82,
                                    height: 24,
                                    damage: 0,
                                    speed: 20,
                                    name: "wind",
                      lifetime:12
                                });
                                break;
                            case 2:
                            case 6:
                                PBulletArr.push({
                                    x: char[0].x + 40,
                                    y: char[0].y,
                                    goX: 0,
                                    goY: -1,
                                    width: 82,
                                    height: 24,
                                    damage: 0,
                                    speed: 20,
                                    name: "wind",
                      lifetime:12
                                });
                                break;
                        }
                        PBulletArr[PBulletArr.length - 1].damage =
                            wind_damage() * attackDamage();
                        }, 70*8);
                      setTimeout(function(){
                          char[0].charging = false;
                          char[0].silence = false;
                          shooting = false;
                      }, 600);

                    }
                }, 10);
            }
            break;

    }
    }
}

function onKeyUp(e) {
    if(myCharDie == false){
    switch (e.keyCode) {
        case 27:
            stop();
            break;
        case 37: // 왼쪽
            char[0].beh = 0;
            char[0].mvLeft = false;
            switch (mvCheck()) {
                case 'Up':
                    char[0].state = 6;
                    break;
                case 'Down':
                    char[0].state = 4;
                    break;
                case 'Left':
                    char[0].state = 5;
                    break;
                case 'Right':
                    char[0].state = 7;
                    break;
            }
            break;
        case 38: // 위
            char[0].beh = 0;
            char[0].mvUp = false;
            switch (mvCheck()) {
                case 'Up':
                    char[0].state = 6;
                    break;
                case 'Down':
                    char[0].state = 4;
                    break;
                case 'Left':
                    char[0].state = 5;
                    break;
                case 'Right':
                    char[0].state = 7;
                    break;
            }
            break;
        case 39: // 오른쪽
            char[0].beh = 0;
            char[0].mvRight = false;
            switch (mvCheck()) {
                case 'Up':
                    char[0].state = 6;
                    break;
                case 'Down':
                    char[0].state = 4;
                    break;
                case 'Left':
                    char[0].state = 5;
                    break;
                case 'Right':
                    char[0].state = 7;
                    break;
            }
            break;
        case 40: // 아래
            char[0].beh = 0;
            char[0].mvDown = false;
            switch (mvCheck()) {
                case 'Up':
                    char[0].state = 6;
                    break;
                case 'Down':
                    char[0].state = 4;
                    break;
                case 'Left':
                    char[0].state = 5;
                    break;
                case 'Right':
                    char[0].state = 7;
                    break;
            }
            break;
      case 83: // 's' button
          if(char[0].charging == true && !shooting){
            remove_wind();
          }
    }
    if (!char[0].mvUp && !char[0].mvLeft &&
        !char[0].mvRight && !char[0].mvDown) char[0].state = char[0].state_temp;
}
}
