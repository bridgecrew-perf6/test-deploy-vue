(function(t){function e(e){for(var i,a,c=e[0],l=e[1],u=e[2],d=0,h=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&h.push(s[a][0]),s[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);r&&r(e);while(h.length)h.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,c=1;c<n.length;c++){var l=n[c];0!==s[l]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},s={app:0},o=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var r=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"09d3":function(t,e,n){t.exports=n.p+"img/exhibits-banner.0d4c5b11.jpg"},1945:function(t,e,n){t.exports=n.p+"img/exhibit-icon.315eb135.png"},"22ee":function(t,e,n){t.exports=n.p+"img/search.7712eab6.svg"},"2b90":function(t,e,n){"use strict";n("a597")},"3b88":function(t,e,n){},"3c44":function(t,e,n){t.exports=n.p+"img/souls-banner.e78a89de.jpg"},"3d88":function(t,e,n){t.exports=n.p+"img/find_clue.df7145ec.png"},"3dea":function(t,e,n){t.exports=n.p+"img/soul-icon.fbabf297.png"},"3e92":function(t,e,n){"use strict";n("7aa3")},"458f":function(t,e,n){},5498:function(t,e,n){t.exports=n.p+"img/time-icon.568c7ac7.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("a026"),s=n("289d"),o=(n("5abe"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)}),a=[],c=(n("5c0b"),n("2877")),l={},u=Object(c["a"])(l,o,a,!1,null,null,null),r=u.exports,d=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("LandingPage")],1)},f=[],p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Pluto")])])}],m={},_=Object(c["a"])(m,p,g,!1,null,null,null),v=_.exports,b={components:{LandingPage:v}},x=b,w=Object(c["a"])(x,h,f,!1,null,null,null),C=w.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Game")],1)},j=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Nav",{attrs:{judge:t.judge},on:{"change-judge":t.changeJudge}}),"relateds"==t.judge?n("Relateds"):t._e(),"exhibits"==t.judge?n("Exhibits"):t._e(),"souls"==t.judge?n("Souls"):t._e(),"times"==t.judge?n("Times"):t._e()],1)},k=[],R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav"},[i("nav",[i("a",{class:{active:"relateds"===t.judge},on:{click:function(e){return t.changeJudge("relateds")}}},[i("img",{attrs:{src:n("95a4")}})]),i("a",{class:{active:"exhibits"===t.judge},on:{click:function(e){return t.changeJudge("exhibits")}}},[i("img",{attrs:{src:n("1945")}})]),i("a",{class:{active:"souls"===t.judge},on:{click:function(e){return t.changeJudge("souls")}}},[i("img",{attrs:{src:n("3dea")}})]),i("a",{class:{active:"times"===t.judge},on:{click:function(e){return t.changeJudge("times")}}},[i("img",{attrs:{src:n("5498")}})])])])},P=[],$={props:["judge"],methods:{changeJudge:function(t){this.$emit("change-judge",t)}}},T=$,S=(n("6db7"),Object(c["a"])(T,R,P,!1,null,null,null)),O=S.exports,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"related-2"}},[i("div",{staticClass:"banner"},[i("img",{attrs:{src:n("6d77")}}),i("div",{staticClass:"banner-content"},[i("p",[t._v(t._s(t.content))])])]),i("main",{staticClass:"content"},[i("section",{staticClass:"content"},[i("div",{staticClass:"search-block"},[i("form",[i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchRelatedText,expression:"searchRelatedText"}],staticClass:"related-name",attrs:{type:"text",placeholder:"測試名稱","aria-label":"Recipient's username","aria-describedby":"button-addon2"},domProps:{value:t.searchRelatedText},on:{input:function(e){e.target.composing||(t.searchRelatedText=e.target.value)}}}),i("button",{staticClass:"search-btn",on:{click:function(e){return e.preventDefault(),t.searchRelated()}}},[t._v("尋找關係人")])])])]),i("div",{staticClass:"related-list"},[i("ul",{attrs:{id:"related-list"}},t._l(t.allRelateds,(function(e,n){return i("li",{key:n,class:{active:e.name===t.selectRelated.name,"no-found":!e.found}},[e.found?i("a",{on:{click:function(e){return t.changeRelated(n)}}},[t._m(0,!0),i("p",[t._v(" "+t._s(e.name)+" ")])]):i("a")])})),0)]),t.found&&t.selectRelated?i("div",{staticClass:"detail"},t._l(t.selectRelated.testimonies,(function(e,n){return i("div",{key:n,class:{block:!e.show}},[e.show?i("h4",[t._v(" Q: "+t._s(e.title))]):t._e(),e.show?i("p",{staticClass:"detail-list",domProps:{innerHTML:t._s(e.content)}}):t._e(),e.show?t._e():i("p",[t._v(" 找到關鍵證物解鎖證詞 ")])])})),0):i("div",[t._v(" 查無此人 ")])])])])},N=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("img",{attrs:{src:n("ba97")}})])}],J=(n("7db0"),n("b0c0"),n("bc3a")),D=n.n(J),q={data:function(){return{judge:this.$route.params.judge,content:this.sampleContnet(),allRelateds:"",group_id:this.$route.query.group_id,story_id:"",line_id:"",victim:"",selectRelated:null,searchRelatedText:"",newRelated:!1,found:!0}},beforeMount:function(){var t=this;D.a.get("https://judicial-intern.dmmt.design/api/v1/line/relateds?group_id="+this.group_id).then((function(e){t.init(e.data)})).catch((function(t){console.log(t)}))},mounted:function(){console.log(this.$route.params.judge),console.log(this.$route.query.group_id)},methods:{init:function(t){this.group_id=t.group.id,this.line_id=t.group.line_id,this.victim=t.relateds.victim.name,this.allRelateds=t.relateds.all,this.story_id=t.group.story_id,this.selectRelated=this.allRelateds[0]},searchRelated:function(){var t=this;D.a.get("https://judicial-intern.dmmt.design/api/v1/line/related/"+this.searchRelatedText,{params:{group_id:this.group_id,story_id:this.story_id}}).then((function(e){t.setSearchResult(e.data)})).catch((function(t){console.log(t)}))},setSearchResult:function(t){this.found=t.found,this.allRelateds=t.relateds.all,this.found&&(this.selectRelated=this.allRelateds.find((function(e){return e.name==t.relateds.related.name})))},sampleContnet:function(){var t=["呵欠……你不覺得調查工作很無聊嗎？不如跟我一起去摸魚吧。","這種簡單的小情報，花兩分鐘就調查出來了，剩下的就交給你囉。","你問我怎麼從別人口中套話？嗯，多多去跟那些鬼吏大媽串門子吧。"];return t[Math.floor(3*Math.random())]},setRelateds:function(){var t=[{name:"黃祥搏",tag:"shang_haideadr1",id:99,status:"default",found:!0,testimonies:[{content:"四十五歲，福州人，姚季桓的胞弟，前調查局第三處組長，因為賄賂案被解職，無業游民一個。一頭地中海禿頭，鬼點子特別多，愛叼一根金馬菸大聲說話，深怕別人忘記他以前的身份。",title:"相關描述",show:!0},{content:"我是他胞弟，同父異母的弟弟。我哥當晚相當難過，原以為跟黃家合作是一樁看似美好的合作計畫，卻被黃家兩夫婦跟帳房陰險狡詐偽造文書，害自己現在血本無歸，身敗名裂。他還說自己長年漂泊於異鄉，因為受了蔣總統的感召財返國投資。只是這裡終究不是他熟悉的中國大陸，人生地不熟，語言也不通，最後居然被黃家這群人騙了。\u2028\u2028你知道黃家夫婦多貪錢嗎？除了把我哥投資的十萬全部獨吞，還在法院門口威脅我哥說，他以前是幹警察的，現在雖然退休了，但是警界人脈還是遍佈全台，勸自己不要再浪費時間跟體力，再怎麼上訴都沒有用。有天還無意間聽到黃祥博跟陳建華說，『這個姓姚得太可惡了，要找機會把他殺了。』胞兄流著眼淚哭泣說，他真的不知道該怎麼辦？\n 胞兄嘆氣說暫時不想再從商，想先回菲律賓與妻小休息一陣子再出發。臨走前還跟自己借了一千菲律賓幣旅費，誰知道就收到她上吊自殺的消息。一個想回家陪妻小的人，怎麼可能會上吊自殺，絕對是黃家這口子的殺人計畫，好讓胞兄閉嘴。\n 對了，我聽說以前調查局的同事有接到『檢舉信』，你們去看看檢舉信內容，就知道我在說什麼......。之前那個葉法醫一定跟黃家有一腿！",title:"討論跟死者的關係",show:!0},{content:"我大概十一點多來旅社的，跟胞兄一直聊到兩點多才離開。你看大廳的出入紀錄也可以知道，不然問問那個呆子吳國全，哪不睡睡在大廳櫃檯，我還叫醒他把門打開。......你說有可能是我殺的？別開玩笑了，他是我哥也，殺親兄弟，我都借一千菲律賓幣讓胞兄回家，如果要殺他，我還借錢給他幹嘛？",title:"案發時間",show:!0},{content:"我的皮包怎麼會出現在帳房？一定是那天跟林聖組吵架時掉的！難怪我一直找不到。裡面有五百塊菲律賓幣？對啊，我要借錢給胞兄，我有多兌換一點。",title:"皮包",show:!1},{content:"我怎麼可能行賄范毅副處長，拜託！這只是傳票而已，又還沒有判刑，隨便一個人檢舉，我也會被約談啊！......一碼歸一碼，兩個有什麼關係！總之我是清白的。",title:"訴訟傳票",show:!1}]},{name:"陳建華",tag:"shang_haideadr2",id:100,status:"found",found:!0,testimonies:[{content:"四十五歲，福州人，姚季桓的胞弟，前調查局第三處組長，因為賄賂案被解職，無業游民一個。一頭地中海禿頭，鬼點子特別多，愛叼一根金馬菸大聲說話，深怕別人忘記他以前的身份。",title:"相關描述",show:!1},{content:"我是他胞弟，同父異母的弟弟。我哥當晚相當難過，原以為跟黃家合作是一樁看似美好的合作計畫，卻被黃家兩夫婦跟帳房陰險狡詐偽造文書，害自己現在血本無歸，身敗名裂。他還說自己長年漂泊於異鄉，因為受了蔣總統的感召財返國投資。只是這裡終究不是他熟悉的中國大陸，人生地不熟，語言也不通，最後居然被黃家這群人騙了。\u2028\u2028你知道黃家夫婦多貪錢嗎？除了把我哥投資的十萬全部獨吞，還在法院門口威脅我哥說，他以前是幹警察的，現在雖然退休了，但是警界人脈還是遍佈全台，勸自己不要再浪費時間跟體力，再怎麼上訴都沒有用。有天還無意間聽到黃祥博跟陳建華說，『這個姓姚得太可惡了，要找機會把他殺了。』胞兄流著眼淚哭泣說，他真的不知道該怎麼辦？\n 胞兄嘆氣說暫時不想再從商，想先回菲律賓與妻小休息一陣子再出發。臨走前還跟自己借了一千菲律賓幣旅費，誰知道就收到她上吊自殺的消息。一個想回家陪妻小的人，怎麼可能會上吊自殺，絕對是黃家這口子的殺人計畫，好讓胞兄閉嘴。\n 對了，我聽說以前調查局的同事有接到『檢舉信』，你們去看看檢舉信內容，就知道我在說什麼......。之前那個葉法醫一定跟黃家有一腿！",title:"討論跟死者的關係",show:!0},{content:"我大概十一點多來旅社的，跟胞兄一直聊到兩點多才離開。你看大廳的出入紀錄也可以知道，不然問問那個呆子吳國全，哪不睡睡在大廳櫃檯，我還叫醒他把門打開。......你說有可能是我殺的？別開玩笑了，他是我哥也，殺親兄弟，我都借一千菲律賓幣讓胞兄回家，如果要殺他，我還借錢給他幹嘛？",title:"案發時間",show:!0},{content:"我的皮包怎麼會出現在帳房？一定是那天跟林聖組吵架時掉的！難怪我一直找不到。裡面有五百塊菲律賓幣？對啊，我要借錢給胞兄，我有多兌換一點。",title:"皮包",show:!1},{content:"我怎麼可能行賄范毅副處長，拜託！這只是傳票而已，又還沒有判刑，隨便一個人檢舉，我也會被約談啊！......一碼歸一碼，兩個有什麼關係！總之我是清白的。",title:"訴訟傳票",show:!1}]},{name:"林聖祖",tag:"shang_haideadr3",id:101,status:"found",found:!1,testimonies:[{content:"四十五歲，福州人，姚季桓的胞弟，前調查局第三處組長，因為賄賂案被解職，無業游民一個。一頭地中海禿頭，鬼點子特別多，愛叼一根金馬菸大聲說話，深怕別人忘記他以前的身份。",title:"相關描述",show:!0},{content:"我是他胞弟，同父異母的弟弟。我哥當晚相當難過，原以為跟黃家合作是一樁看似美好的合作計畫，卻被黃家兩夫婦跟帳房陰險狡詐偽造文書，害自己現在血本無歸，身敗名裂。他還說自己長年漂泊於異鄉，因為受了蔣總統的感召財返國投資。只是這裡終究不是他熟悉的中國大陸，人生地不熟，語言也不通，最後居然被黃家這群人騙了。\u2028\u2028你知道黃家夫婦多貪錢嗎？除了把我哥投資的十萬全部獨吞，還在法院門口威脅我哥說，他以前是幹警察的，現在雖然退休了，但是警界人脈還是遍佈全台，勸自己不要再浪費時間跟體力，再怎麼上訴都沒有用。有天還無意間聽到黃祥博跟陳建華說，『這個姓姚得太可惡了，要找機會把他殺了。』胞兄流著眼淚哭泣說，他真的不知道該怎麼辦？\n 胞兄嘆氣說暫時不想再從商，想先回菲律賓與妻小休息一陣子再出發。臨走前還跟自己借了一千菲律賓幣旅費，誰知道就收到她上吊自殺的消息。一個想回家陪妻小的人，怎麼可能會上吊自殺，絕對是黃家這口子的殺人計畫，好讓胞兄閉嘴。\n 對了，我聽說以前調查局的同事有接到『檢舉信』，你們去看看檢舉信內容，就知道我在說什麼......。之前那個葉法醫一定跟黃家有一腿！",title:"討論跟死者的關係",show:!0},{content:"我大概十一點多來旅社的，跟胞兄一直聊到兩點多才離開。你看大廳的出入紀錄也可以知道，不然問問那個呆子吳國全，哪不睡睡在大廳櫃檯，我還叫醒他把門打開。......你說有可能是我殺的？別開玩笑了，他是我哥也，殺親兄弟，我都借一千菲律賓幣讓胞兄回家，如果要殺他，我還借錢給他幹嘛？",title:"案發時間",show:!0},{content:"我的皮包怎麼會出現在帳房？一定是那天跟林聖組吵架時掉的！難怪我一直找不到。裡面有五百塊菲律賓幣？對啊，我要借錢給胞兄，我有多兌換一點。",title:"皮包",show:!1},{content:"我怎麼可能行賄范毅副處長，拜託！這只是傳票而已，又還沒有判刑，隨便一個人檢舉，我也會被約談啊！......一碼歸一碼，兩個有什麼關係！總之我是清白的。",title:"訴訟傳票",show:!1}]},{name:"吳國全",tag:"shang_haideadr4",id:102,status:"found",found:!1,testimonies:[{content:"四十五歲，福州人，姚季桓的胞弟，前調查局第三處組長，因為賄賂案被解職，無業游民一個。一頭地中海禿頭，鬼點子特別多，愛叼一根金馬菸大聲說話，深怕別人忘記他以前的身份。",title:"相關描述",show:!0},{content:"我是他胞弟，同父異母的弟弟。我哥當晚相當難過，原以為跟黃家合作是一樁看似美好的合作計畫，卻被黃家兩夫婦跟帳房陰險狡詐偽造文書，害自己現在血本無歸，身敗名裂。他還說自己長年漂泊於異鄉，因為受了蔣總統的感召財返國投資。只是這裡終究不是他熟悉的中國大陸，人生地不熟，語言也不通，最後居然被黃家這群人騙了。\u2028\u2028你知道黃家夫婦多貪錢嗎？除了把我哥投資的十萬全部獨吞，還在法院門口威脅我哥說，他以前是幹警察的，現在雖然退休了，但是警界人脈還是遍佈全台，勸自己不要再浪費時間跟體力，再怎麼上訴都沒有用。有天還無意間聽到黃祥博跟陳建華說，『這個姓姚得太可惡了，要找機會把他殺了。』胞兄流著眼淚哭泣說，他真的不知道該怎麼辦？\n 胞兄嘆氣說暫時不想再從商，想先回菲律賓與妻小休息一陣子再出發。臨走前還跟自己借了一千菲律賓幣旅費，誰知道就收到她上吊自殺的消息。一個想回家陪妻小的人，怎麼可能會上吊自殺，絕對是黃家這口子的殺人計畫，好讓胞兄閉嘴。\n 對了，我聽說以前調查局的同事有接到『檢舉信』，你們去看看檢舉信內容，就知道我在說什麼......。之前那個葉法醫一定跟黃家有一腿！",title:"討論跟死者的關係",show:!0},{content:"我大概十一點多來旅社的，跟胞兄一直聊到兩點多才離開。你看大廳的出入紀錄也可以知道，不然問問那個呆子吳國全，哪不睡睡在大廳櫃檯，我還叫醒他把門打開。......你說有可能是我殺的？別開玩笑了，他是我哥也，殺親兄弟，我都借一千菲律賓幣讓胞兄回家，如果要殺他，我還借錢給他幹嘛？",title:"案發時間",show:!0},{content:"我的皮包怎麼會出現在帳房？一定是那天跟林聖組吵架時掉的！難怪我一直找不到。裡面有五百塊菲律賓幣？對啊，我要借錢給胞兄，我有多兌換一點。",title:"皮包",show:!1},{content:"我怎麼可能行賄范毅副處長，拜託！這只是傳票而已，又還沒有判刑，隨便一個人檢舉，我也會被約談啊！......一碼歸一碼，兩個有什麼關係！總之我是清白的。",title:"訴訟傳票",show:!1}]},{name:"楊寶旭",tag:"shang_haideadr5",id:103,status:"found",found:!1,testimonies:[{content:"四十五歲，福州人，姚季桓的胞弟，前調查局第三處組長，因為賄賂案被解職，無業游民一個。一頭地中海禿頭，鬼點子特別多，愛叼一根金馬菸大聲說話，深怕別人忘記他以前的身份。",title:"相關描述",show:!0},{content:"我是他胞弟，同父異母的弟弟。我哥當晚相當難過，原以為跟黃家合作是一樁看似美好的合作計畫，卻被黃家兩夫婦跟帳房陰險狡詐偽造文書，害自己現在血本無歸，身敗名裂。他還說自己長年漂泊於異鄉，因為受了蔣總統的感召財返國投資。只是這裡終究不是他熟悉的中國大陸，人生地不熟，語言也不通，最後居然被黃家這群人騙了。\u2028\u2028你知道黃家夫婦多貪錢嗎？除了把我哥投資的十萬全部獨吞，還在法院門口威脅我哥說，他以前是幹警察的，現在雖然退休了，但是警界人脈還是遍佈全台，勸自己不要再浪費時間跟體力，再怎麼上訴都沒有用。有天還無意間聽到黃祥博跟陳建華說，『這個姓姚得太可惡了，要找機會把他殺了。』胞兄流著眼淚哭泣說，他真的不知道該怎麼辦？\n 胞兄嘆氣說暫時不想再從商，想先回菲律賓與妻小休息一陣子再出發。臨走前還跟自己借了一千菲律賓幣旅費，誰知道就收到她上吊自殺的消息。一個想回家陪妻小的人，怎麼可能會上吊自殺，絕對是黃家這口子的殺人計畫，好讓胞兄閉嘴。\n 對了，我聽說以前調查局的同事有接到『檢舉信』，你們去看看檢舉信內容，就知道我在說什麼......。之前那個葉法醫一定跟黃家有一腿！",title:"討論跟死者的關係",show:!0},{content:"我大概十一點多來旅社的，跟胞兄一直聊到兩點多才離開。你看大廳的出入紀錄也可以知道，不然問問那個呆子吳國全，哪不睡睡在大廳櫃檯，我還叫醒他把門打開。......你說有可能是我殺的？別開玩笑了，他是我哥也，殺親兄弟，我都借一千菲律賓幣讓胞兄回家，如果要殺他，我還借錢給他幹嘛？",title:"案發時間",show:!0},{content:"我的皮包怎麼會出現在帳房？一定是那天跟林聖組吵架時掉的！難怪我一直找不到。裡面有五百塊菲律賓幣？對啊，我要借錢給胞兄，我有多兌換一點。",title:"皮包",show:!1},{content:"我怎麼可能行賄范毅副處長，拜託！這只是傳票而已，又還沒有判刑，隨便一個人檢舉，我也會被約談啊！......一碼歸一碼，兩個有什麼關係！總之我是清白的。",title:"訴訟傳票",show:!1}]},{name:"吳碩",tag:"shang_haideadr6",id:104,status:"found",found:!0,testimonies:[{content:"四十五歲，福州人，姚季桓的胞弟，前調查局第三處組長，因為賄賂案被解職，無業游民一個。一頭地中海禿頭，鬼點子特別多，愛叼一根金馬菸大聲說話，深怕別人忘記他以前的身份。",title:"相關描述",show:!0},{content:"我是他胞弟，同父異母的弟弟。我哥當晚相當難過，原以為跟黃家合作是一樁看似美好的合作計畫，卻被黃家兩夫婦跟帳房陰險狡詐偽造文書，害自己現在血本無歸，身敗名裂。他還說自己長年漂泊於異鄉，因為受了蔣總統的感召財返國投資。只是這裡終究不是他熟悉的中國大陸，人生地不熟，語言也不通，最後居然被黃家這群人騙了。\u2028\u2028你知道黃家夫婦多貪錢嗎？除了把我哥投資的十萬全部獨吞，還在法院門口威脅我哥說，他以前是幹警察的，現在雖然退休了，但是警界人脈還是遍佈全台，勸自己不要再浪費時間跟體力，再怎麼上訴都沒有用。有天還無意間聽到黃祥博跟陳建華說，『這個姓姚得太可惡了，要找機會把他殺了。』胞兄流著眼淚哭泣說，他真的不知道該怎麼辦？\n 胞兄嘆氣說暫時不想再從商，想先回菲律賓與妻小休息一陣子再出發。臨走前還跟自己借了一千菲律賓幣旅費，誰知道就收到她上吊自殺的消息。一個想回家陪妻小的人，怎麼可能會上吊自殺，絕對是黃家這口子的殺人計畫，好讓胞兄閉嘴。\n 對了，我聽說以前調查局的同事有接到『檢舉信』，你們去看看檢舉信內容，就知道我在說什麼......。之前那個葉法醫一定跟黃家有一腿！",title:"討論跟死者的關係",show:!0},{content:"我大概十一點多來旅社的，跟胞兄一直聊到兩點多才離開。你看大廳的出入紀錄也可以知道，不然問問那個呆子吳國全，哪不睡睡在大廳櫃檯，我還叫醒他把門打開。......你說有可能是我殺的？別開玩笑了，他是我哥也，殺親兄弟，我都借一千菲律賓幣讓胞兄回家，如果要殺他，我還借錢給他幹嘛？",title:"案發時間",show:!0},{content:"我的皮包怎麼會出現在帳房？一定是那天跟林聖組吵架時掉的！難怪我一直找不到。裡面有五百塊菲律賓幣？對啊，我要借錢給胞兄，我有多兌換一點。",title:"皮包",show:!1},{content:"我怎麼可能行賄范毅副處長，拜託！這只是傳票而已，又還沒有判刑，隨便一個人檢舉，我也會被約談啊！......一碼歸一碼，兩個有什麼關係！總之我是清白的。",title:"訴訟傳票",show:!1}]}];return t},changeRelated:function(t){this.found=!0,this.selectRelated=this.allRelateds[t],this.searchRelatedText=this.selectRelated.name}}},L=q,G=(n("2b90"),Object(c["a"])(L,M,N,!1,null,null,null)),I=G.exports,Q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"exhibit-2"}},[i("div",{staticClass:"banner"},[i("img",{attrs:{src:n("09d3")}}),i("div",{staticClass:"banner-content"},[i("p",[t._v(t._s(t.content))])])]),i("main",{staticClass:"content"},[i("section",{staticClass:"content"},[i("div",{staticClass:"search-block"},[i("form",{attrs:{action:"/api/v1/related",method:"post"}},[i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchExhibitText,expression:"searchExhibitText"}],staticClass:"related-name",attrs:{type:"text",placeholder:"證物鑑定","aria-label":"Recipient's username","aria-describedby":"button-addon2"},domProps:{value:t.searchExhibitText},on:{input:function(e){e.target.composing||(t.searchExhibitText=e.target.value)}}}),i("button",{staticClass:"search-btn",on:{click:function(e){return e.preventDefault(),t.searchExhibit()}}},[t._v("證物鑑定")])])])]),i("div",{staticClass:"exhibit-list",class:{reverse:"found"==t.selectExhibitCate}},[i("ul",{class:{active:"default"==t.selectExhibitCate,have_found:t.foundExhibits.length>0},attrs:{id:"default-exhibit-list"}},t._l(t.defaultExhibits,(function(e){return i("li",{key:e.tag,class:{active:e.tag===t.selectExhibit.tag}},[i("a",{on:{click:function(n){return t.setSelectExhibit("default",e.tag)}}},[t._v(" "+t._s(e.name)+" ")])])})),0),i("ul",{class:{active:"found"==t.selectExhibitCate},attrs:{id:"found-exhibit-list"}},t._l(t.foundExhibits,(function(e){return i("li",{key:e.tag,class:{active:e.tag===t.selectExhibit.tag}},[i("a",{on:{click:function(n){return t.setSelectExhibit("found",e.tag)}}},[t._v(" "+t._s(e.name)+" ")])])})),0)]),i("div",{staticClass:"detail",class:t.selectExhibitCate},[t.found?i("p",{attrs:{id:"detail"}},[t._v(" "+t._s(t.selectExhibit.report)+" ")]):i("p",{attrs:{id:"detail"}},[t._v(" 查無此物 ")]),i("div",{staticClass:"process"},[i("img",{attrs:{src:n("22ee")}}),i("span",[i("b",[t._v(t._s(t.foundTotalExhibitNum))]),t._v("/"+t._s(t.totalExhibitNum))])])])])])])},F=[],H={data:function(){return{judge:this.$route.params.judge,content:this.sampleContnet(),defaultExhibits:"",foundExhibits:"",selectExhibit:"",group_id:this.$route.query.group_id,story_id:"",line_id:"",selectExhibitCate:"default",searchExhibitText:"",found:!0,totalExhibitNum:"",foundTotalExhibitNum:""}},beforeMount:function(){var t=this;D.a.get("https://judicial-intern.dmmt.design/api/v1/line/exhibits?group_id="+this.group_id).then((function(e){t.init(e.data)})).catch((function(t){console.log(t)}))},mounted:function(){console.log(this.$route.params.judge)},methods:{init:function(t){this.group_id=t.group.id,this.line_id=t.group.line_id,this.defaultExhibits=t.exhibits.default_exhibits,this.foundExhibits=t.exhibits.found_exhibits,this.story_id=t.group.story_id,this.selectExhibit=this.defaultExhibits[0],this.totalExhibitNum=t.exhibits.total_num,this.foundTotalExhibitNum=t.exhibits.found_total_num},searchExhibit:function(){var t=this;D.a.get("https://judicial-intern.dmmt.design/api/v1/line/exhibit/"+this.searchExhibitText,{params:{group_id:this.group_id,story_id:this.story_id}}).then((function(e){t.setSearchResult(e.data)})).catch((function(t){console.log(t)}))},setSearchResult:function(t){this.foundExhibits=t.exhibits.found_exhibits,this.found=t.found,this.found&&(this.selectExhibit=t.exhibits.exhibit,this.foundTotalExhibitNum=t.exhibits.found_total_num,this.selectExhibitCate=this.selectExhibit.status)},sampleContnet:function(){var t=["呵欠……你不覺得調查工作很無聊嗎？不如跟我一起去摸魚吧。","這種簡單的小情報，花兩分鐘就調查出來了，剩下的就交給你囉。","你問我怎麼從別人口中套話？嗯，多多去跟那些鬼吏大媽串門子吧。"];return t[Math.floor(3*Math.random())]},setDefaultExhibits:function(){var t=[{tag:"shang_haiex1",name:"命案現場",status:"default",report:"命案現場位在上海旅社二樓樓梯右側二一四號房，旁邊就是大廳，大廳有個櫃檯，晚上過了十點就會把樓下的鐵門拉上，值班人員也就去休息了。但那天吳國全被姚經理叫醒弄份宵夜後，就一直趴在值班台睡覺。\u2028\u2028房間內，死者被麻繩吊死在樑上，木椅橫躺在腳下。桌上有兩瓶空的高粱酒、兩個指紋挺殘留的酒杯、散落一桌的花生殼、四道空盤、還有一份當天的早報。\u2028\u2028房間沒有任何打鬥痕跡，除吳碩所說一千菲律賓幣不見外，無任何金錢遺失。\u2028死者口袋裡找到一張一千塊台幣的借條。"},{tag:"shang_haiex2",name:"檢驗報告",status:"default",report:"死者姓名：姚季桓\r\n    性別：男\r\n    年齡：65歲\r\n    法醫：蕭修平\r\n    屍體之心臟血液內、肝、腎、脾、腦、腹部肌肉、尿水等，化驗出有巴拉松毒物存在。左上腹部有疑似針孔的傷口，推測生前被針管插入左上腹部血管，注入巴拉松毒液進入進體內。"},{tag:"shang_haiex3",name:"借條",status:"default",report:"一張一千塊台幣借條，經手人是林聖組。"}];return t},setSelectExhibit:function(t,e){this.found=!0,this.selectExhibitCate=t,this.selectExhibit="default"==t?this.defaultExhibits.find((function(t){return t.tag==e})):this.foundExhibits.find((function(t){return t.tag==e}))},setFoundExhibits:function(){var t=[{tag:"shang_haiex4",name:"早報",status:"found",report:"報紙斗大標題寫著『華僑姚季桓提告上海旅社老闆黃祥博財務訴訟案敗訴。』"},{tag:"shang_haiex5",name:"指紋",status:"found",report:"酒杯上的指紋，除了死者與吳碩外，還有一枚吳國全的指紋。"},{tag:"shang_haiex6",name:"檢舉信",status:"found",report:"這是一封匿名信，信上寫著『法醫葉奕丞收取上海旅社黃祥博五萬塊現金，希望對姚季桓的驗屍報告作假，把死亡因素偽造成上吊自殺。』仔細看這是一封左撇子寫得檢舉信。"},{tag:"shang_haiex7",name:"驗屍報告",status:"found",report:"死者姓名：姚季桓\r\n    性別：男\r\n    年齡：65歲\r\n    法醫：葉奕丞\r\n    死者身體除脖子勒痕，以及脖子因為求生本能所造成的指甲割痕外，無其他外傷。舌頭也因上吊自殺，舌頭吐在外頭，嘴裡仍然殘留高粱的味道。體內血液檢測出大量酒精，依照命案現場推測死前有大量飲酒。身體無任何打鬥痕跡、推測死因應為自殺。"},{tag:"shang_haiex8",name:"麻繩",status:"found",report:"在倉庫內找到與死者上吊相同的麻繩。"},{tag:"shang_haiex9",name:"手套",status:"found",report:"在死者的麻繩上找到與手套一樣的纖維。"},{tag:"shang_haiex10",name:"五百元菲律賓幣",status:"found",report:"在吳國全的枕頭裡底找到這五百元。"},{tag:"shang_haiex11",name:"遺書",status:"found",report:"在吳國全的衣櫥裡找到一封死者的遺書。信上寫著『姚某無能無才，跟江東父老借了這麼多錢來台投資，最後卻投資失利，已無臉回鄉，希望大家能原諒的話。仔細看這是一封左手字跡的遺書。"},{tag:"shang_haiex12",name:"針管",status:"found",report:"根據驗屍報告推測集體內殘留的巴拉松劑量，猜測應該是5ML的玻璃針管。"},{tag:"shang_haiex13",name:"瓶子",status:"found",report:"在林聖祖家院子裡挖到一個標示『灰錳氧』的瓶子，裡面檢驗出有巴拉松的成分。瓶子外有台灣大學的標誌。"},{tag:"shang_haiex14",name:"保險庫",status:"found",report:"保險庫內被撬開，裡面空無一物。"},{tag:"shang_haiex15",name:"帳本",status:"found",report:"清查帳本發現保險庫裡遺失了台幣現金二十五萬、美金十萬、三塊十兩標示中央造幣廠製的金條三塊、金戒指五個、所有權狀一只。"},{tag:"shang_haiex16",name:"借條",status:"found",report:"一二十張的借條，每張借條大概都是一兩百台幣，借款人都是姚季桓。"},{tag:"shang_haiex17",name:"皮夾",status:"found",report:"皮夾內有五百塊菲律賓幣、三百塊台幣、一張身分證、傳票。"}];return t}}},z=H,A=(n("9d1e"),Object(c["a"])(z,Q,F,!1,null,null,null)),B=A.exports,K=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"souls-2"}},[i("div",{staticClass:"banner"},[i("img",{attrs:{src:n("3c44")}}),i("div",{staticClass:"banner-content"},[i("p",[t._v(t._s(t.content))])])]),i("main",{staticClass:"content"},[i("div",{staticClass:"soul-list",style:{"background-image":"url("+n("7525")+")"}},[i("ul",t._l(t.defaultPositions,(function(e,n){return i("li",{key:n,style:{left:e.left+"px",bottom:e.bottom+"px"}},[i("a",{class:{lock:!e.show,active:e.tag===t.selectPositoin.tag},on:{click:function(n){return t.setSelectPosition(e.tag)}}},[t._v(" "+t._s(e.name)+" ")])])})),0)]),i("div",{staticClass:"detail"},[t.selectPositoin.tag?i("div",{staticClass:"show"},[t._m(0),i("p",{staticClass:"name"},[t._v(t._s(t.victim))]),t.selectPositoin.show?i("p",{attrs:{id:"detail"}},[t._v(" "+t._s(t.selectConversation.title)+" ")]):i("p",{attrs:{id:"detail"}},[t._v("我以前好像來過這裡，但是不知道為什麼我什麼都想不起來了（缺少關鍵證物）")])]):t._e(),t.selectPositoin.show?i("div",{attrs:{id:"options"}},[t._l(t.selectConversation.options,(function(e,n){return i("a",{key:n,on:{click:function(n){return t.setSelectConversation(e.con)}}},[t._v(" "+t._s(e.title)+" ")])})),100===t.selectConversation.pre_con?i("a",{on:{click:function(e){return t.resetSelectConversation()}}},[t._v(" 重新跟亡魂對話 ")]):t._e()],2):t._e(),t.selectPositoin.name?t._e():i("p",{attrs:{id:"detail"}},[t._v(" 選擇亡魂有記憶的地點 ")])])])])},U=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("img",{attrs:{src:n("ba97")}})])}],V={data:function(){return{judge:this.$route.params.judge,victim:"",content:this.sampleContnet(),defaultPositions:"",selectPositoin:{},group_id:this.$route.query.group_id,selectConversation:{}}},beforeMount:function(){var t=this;D.a.get("https://judicial-intern.dmmt.design/api/v1/line/souls?group_id="+this.group_id).then((function(e){t.init(e.data)})).catch((function(t){console.log(t)}))},mounted:function(){console.log(this.$route.params.judge)},methods:{sampleContnet:function(){var t=["我昨天很餓，想喝點孟婆湯，可是孟婆不讓我喝……","石獅寺有四十四隻石獅子，四十四隻石獅子吃四十四枝芋仔冰芋仔冰好好吃我也好想吃喔端湯上塔？","每次偷看亡魂的夢，都覺得很害羞，為什麼當鬼還在想色色的事情呢……"];return t[Math.floor(3*Math.random())]},init:function(t){this.defaultPositions=t.positions.all,this.victim=t.victim_name},setDefaultPositions:function(){var t=[{name:"倉庫",tag:"shang_haipo1",status:"default",show:!0,left:250,bottom:85,conversations:[{title:"吳國全就住在倉庫，也不懂倉庫這麼熱，他怎麼有辦法住下去？",options:[{title:"不是要先看命案現場嗎？",con:1},{title:"要去倉庫，就跟在我後面。",con:2},{title:"有聽到小孩子又在樓上吵鬧嗎？",con:3}],pre_con:null},{title:"要先看看倉庫是嗎？是覺得有什麼新發現嗎？",options:[{title:"進入倉庫",con:100}],pre_con:1},{title:"旅社很漂亮吧，我當初會想投資，也因為這個原因。",options:[{title:"進入倉庫",con:100}],pre_con:2},{title:"黃老闆生了六個小孩，每天吵死人，真不懂這些人生這麼多小孩幹什麼。",options:[{title:"進入倉庫",con:100}],pre_con:3},{title:"亡魂走進倉庫就隨手想拿一個罐頭來吃，但發現他無法拿起食物。突然一群調查局的人衝進來，在倉庫東翻西翻，把原本整齊的倉庫搞得亂七八糟。亡魂在一邊喃喃自語，『我就是不懂這個老粗住在這麼髒的地方做什麼？後來才知道，黃老闆每個月補貼他五十塊。居然可以為了五十塊住在這麼髒的地方，真是貪小便宜。』最後范毅在衣櫥跟枕頭裡找到死者遺書跟五百塊菲律賓幣。『我說這人貪小便宜沒錯吧～』",options:[],pre_con:100}]},{name:"鍋爐室",tag:"shang_haipo2",status:"default",left:23,bottom:63,show:!1,conversations:[{title:"這麼熱，有什麼好看的？",options:[{title:"你們怎麼都不先去看命案現場？難道沒找到其他線索嗎？",con:1},{title:"你們有看到吳國全拿著一雙手套進去嗎？",con:2},{title:"調查局的人有跟在後面嗎？",con:3}],pre_con:null},{title:"你們都找到線索了嗎？有去倉庫看看嗎？這都是吳國全在管的地方。",options:[{title:"進入倉庫",con:100}],pre_con:1},{title:"鍋爐室很熱，要帶手套，不然會燙到。",options:[{title:"進入倉庫",con:100}],pre_con:2},{title:"有把范副處長找上嗎？不然跟他說，鍋爐室就在走廊的另外一端。",options:[{title:"進入倉庫",con:100}],pre_con:3},{title:"亡魂站在最外頭，裡面高溫讓他很不舒服。他看到吳國全帶著麻布手套，不停將乾柴丟入鍋爐裡。但奇怪的是放火種的盒子裡還有一副乾淨麻手套以及兩副膠質手套。才一個人而已，幹嘛放了三副手套在這，而且每個手套都跟新的一樣。",options:null,pre_con:100}]},{name:"林聖祖家",tag:"shang_haipo3",status:"found",left:180,bottom:17,show:!0,conversations:[{title:"這麼熱，有什麼好看的？",options:[{title:"你們怎麼都不先去看命案現場？難道沒找到其他線索嗎？",con:1},{title:"你們有看到吳國全拿著一雙手套進去嗎？",con:2},{title:"調查局的人有跟在後面嗎？",con:3}],pre_con:null},{title:"你們都找到線索了嗎？有去倉庫看看嗎？這都是吳國全在管的地方。",options:[{title:"進入倉庫",con:100}],pre_con:1},{title:"鍋爐室很熱，要帶手套，不然會燙到。",options:[{title:"進入倉庫",con:100}],pre_con:2},{title:"有把范副處長找上嗎？不然跟他說，鍋爐室就在走廊的另外一端。",options:[{title:"進入倉庫",con:100}],pre_con:3},{title:"亡魂站在最外頭，裡面高溫讓他很不舒服。他看到吳國全帶著麻布手套，不停將乾柴丟入鍋爐裡。但奇怪的是放火種的盒子裡還有一副乾淨麻手套以及兩副膠質手套。才一個人而已，幹嘛放了三副手套在這，而且每個手套都跟新的一樣。",options:null,pre_con:100}]},{name:"帳房",tag:"shang_haipo4",status:"found",left:100,bottom:17,show:!1,conversations:[{title:"這麼熱，有什麼好看的？",options:[{title:"你們怎麼都不先去看命案現場？難道沒找到其他線索嗎？",con:1},{title:"你們有看到吳國全拿著一雙手套進去嗎？",con:2},{title:"調查局的人有跟在後面嗎？",con:3}],pre_con:null},{title:"你們都找到線索了嗎？有去倉庫看看嗎？這都是吳國全在管的地方。",options:[{title:"進入倉庫",con:100}],pre_con:1},{title:"鍋爐室很熱，要帶手套，不然會燙到。",options:[{title:"進入倉庫",con:100}],pre_con:2},{title:"有把范副處長找上嗎？不然跟他說，鍋爐室就在走廊的另外一端。",options:[{title:"進入倉庫",con:100}],pre_con:3},{title:"亡魂站在最外頭，裡面高溫讓他很不舒服。他看到吳國全帶著麻布手套，不停將乾柴丟入鍋爐裡。但奇怪的是放火種的盒子裡還有一副乾淨麻手套以及兩副膠質手套。才一個人而已，幹嘛放了三副手套在這，而且每個手套都跟新的一樣。",options:null,pre_con:100}]}];return t},setSelectPosition:function(t){this.selectPositoin=this.defaultPositions.find((function(e){return e.tag==t})),this.selectConversation=this.selectPositoin.conversations[0]},setSelectConversation:function(t){this.selectConversation=this.selectPositoin.conversations.find((function(e){return e.pre_con==t}))},resetSelectConversation:function(){this.selectConversation=this.selectPositoin.conversations[0]}}},W=V,X=(n("3e92"),Object(c["a"])(W,K,U,!1,null,null,null)),Y=X.exports,Z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"times-2"}},[i("div",{staticClass:"banner"},[i("img",{attrs:{src:n("bf8a")}}),i("div",{staticClass:"banner-content"},[i("p",[t._v(t._s(t.content))])])]),i("main",{staticClass:"content"},[i("ul",{staticClass:"times"},t._l(t.defaultTimes,(function(e,s){return i("li",{key:s,staticClass:"time-block"},[i("div",{staticClass:"line-block"},[i("div",{staticClass:"circle",class:{found:"not_found"===e.status}}),i("div",{staticClass:"line"})]),e.show?i("div",{staticClass:"content-time"},[i("h3",{class:{found:"not_found"===e.status}},[t._v(t._s(e.time))]),i("p",{class:{found:"not_found"===e.status}},[t._v(" "+t._s(e.content)+" ")]),"not_found"===e.status?i("div",{staticClass:"clue",on:{click:function(e){return t.findClue(s)}}},[i("img",{attrs:{src:n("3d88")}})]):t._e()]):i("div",[i("img",{staticClass:"lock-image",attrs:{src:n("c494")}})])])})),0)])])},tt=[],et={data:function(){return{judge:this.$route.params.judge,content:this.sampleContnet(),defaultTimes:this.setDefaultTimes()}},mounted:function(){console.log(this.$route.params.judge)},methods:{sampleContnet:function(){var t=["我昨天很餓，想喝點孟婆湯，可是孟婆不讓我喝……","石獅寺有四十四隻石獅子，四十四隻石獅子吃四十四枝芋仔冰芋仔冰好好吃我也好想吃喔端湯上塔？","每次偷看亡魂的夢，都覺得很害羞，為什麼當鬼還在想色色的事情呢……"];return t[Math.floor(3*Math.random())]},setDefaultTimes:function(){var t=[{time:"1990/10/23 21:36",tag:"shang_haipo1",status:"not_found",show:!1,content:"今早清晨6時許，一名晨運許姓阿嬤發現一名女子倒在茉莉公園涼亭邊草堆內，靠近時發現該女衣衫不整並且無呼吸心跳，嚇得阿嬤趕緊報警，並拉起??（道具）做準備"},{time:"1990/10/24 06:26",tag:"shang_haipo2",status:"found",show:!0,content:"今早清晨6時許，一名晨運許姓阿嬤發現一名女子"},{time:"1990/10/24 21:54",tag:"shang_haipo3",status:"not_found",show:!0,content:"今早清晨6時許，一名晨運許姓阿嬤發現一名女子???（人名）倒在茉莉公園涼亭邊草堆內"},{time:"1990/10/25 13:31",tag:"shang_haipo4",status:"not_found",show:!1,content:"今早清晨6時許，一名晨運許姓阿嬤發現一名女子???（人名）倒在茉莉公園涼亭邊草堆內"}];return t},findClue:function(t){var e=this.defaultTimes[t];window.liff.sendMessages([{type:"text",text:e.content}])}}},nt=et,it=(n("73c4"),Object(c["a"])(nt,Z,tt,!1,null,null,null)),st=it.exports,ot={components:{Nav:O,Relateds:I,Exhibits:B,Souls:Y,Times:st},data:function(){return{judge:this.$route.params.judge}},beforeCreate:function(){},mounted:function(){var t=this;window.liff.init({liffId:"1653951718-27bRkDQG"}).then((function(){t.getProfile()})).catch((function(t){console.log(t)})),console.log(this.$route.params.judge)},methods:{changeJudge:function(t){this.judge=t},getProfile:function(){}}},at=ot,ct=Object(c["a"])(at,y,k,!1,null,null,null),lt=ct.exports,ut={components:{Game:lt}},rt=ut,dt=Object(c["a"])(rt,E,j,!1,null,null,null),ht=dt.exports;i["a"].use(d["a"]),i["a"].use(d["a"]);var ft=[{path:"/",name:"LandingPage",component:C},{path:"/game/:judge",name:"Game",component:ht}],pt=new d["a"]({mode:"hash",routes:ft}),gt=pt,mt=n("2f62");i["a"].use(mt["a"]);var _t=new mt["a"].Store({state:{token:localStorage.getItem("user-token")||""},mutations:{auth_request:function(t){t.status="loading"},auth_success:function(t,e,n){t.status="success",t.token=e,t.user=n},auth_error:function(t){t.status="error"},logout:function(t){t.status="",t.token=""}},actions:{},modules:{}});i["a"].use(s["a"],{defaultIconComponent:"font-awesome-icon",defaultIconPack:"fas"}),i["a"].config.productionTip=!1,i["a"].config.devtools=!0,new i["a"]({router:gt,store:_t,render:function(t){return t(r)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("458f")},"6d77":function(t,e,n){t.exports=n.p+"img/relateds-banner.9d604b6b.jpg"},"6db7":function(t,e,n){"use strict";n("6e44")},"6e44":function(t,e,n){},"73c4":function(t,e,n){"use strict";n("c6ec")},7525:function(t,e,n){t.exports=n.p+"img/death_knell_map.1843ad2c.png"},"7aa3":function(t,e,n){},"95a4":function(t,e,n){t.exports=n.p+"img/related-icon.babd563d.png"},"9d1e":function(t,e,n){"use strict";n("3b88")},a597:function(t,e,n){},ba97:function(t,e,n){t.exports=n.p+"img/user.29479ba0.png"},bf8a:function(t,e,n){t.exports=n.p+"img/times-banner.169e5dab.jpg"},c494:function(t,e,n){t.exports=n.p+"img/lock-time.ad02c1f2.png"},c6ec:function(t,e,n){}});
//# sourceMappingURL=app.187f3efb.js.map