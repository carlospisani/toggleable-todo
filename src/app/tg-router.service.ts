/*
  author:       Carlos Pisani
  date:         april, 21, 2017
  description:  service to determine the toggle state.
*/

import { Injectable } from '@angular/core';
import toggles from './toggles.json';

@Injectable()
export class TgRouterService {

  /* constructors */
  constructor() {  }

  /* methods */
  resolve(name, user){
    
    var compare = (text1:string,text2:string) => {
      return text1.trim().toLocaleLowerCase()==text2.trim().toLocaleLowerCase();
    }
    
    for(let tg of toggles){
      if (compare(tg.name,name)){
        
        var allow = !(tg.users.length>0 || (tg.users[0].trim()!="" && tg.users[0].trim()!=undefined));
        for (let us of tg.users){
          allow = allow || compare(us,user);
        }

        return (tg.enable && allow);
      }
    }

    return false;
  }
}
