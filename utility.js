
class Button {
    constructor(text, className, onClick, display) {
        this.b = document.createElement('button');
        this.b.innerText = text;
        this.b.className = className;
        this.b.setAttribute('onclick', onClick);
        if (display) this.display = display;
        else this.display = 'block';
    }

    /*------------- MAIN GET FUNCTIONS --------------------*/
    getButton() {
        return this.b;
    }

    getClass() {
        return this.b.className;
    }

    getText() {
        return this.b.innerText;
    }

    getFunction() {
        return this.b.getAttribute('onclick');
    }

    /*-----------------------------------------------------*/
    /*----------------- MAIN SET FUNCTION ------------------*/
    /*-----------------------------------------------------*/

    setText(txt) {
        this.b.innerText = txt;
    }

    setClass(cls) {
        this.b.className = cls
    }

    setFunction(fnc) {
        this.b.setAttribute('onclick', fnc);
    }

    setAttribute(att, value) {
        this.b.setAttribute(att, value);
    }


    /*-----------------------------------------------------*/
    /*-----------------------------------------------------*/
    /*-----------------------------------------------------*/

    appendIn(selector) {
        document.querySelector(selector).append(this.b);
    }

    hide() {
        this.b.style.display = 'none';
    }

    show() {
        this.b.style.display = this.display;
    }

    disable() {
        this.b.disabled = true;
    }

    enable() {
        this.b.disabled = false;
    }

    addClass(cls) {
        this.b.className += " " + cls;
    }

    deleteClass(cls) {
        this.b.className = this.b.className.split(' ').filter(it => it !== cls).join(' ');
    }

}

class headNavBar {
    constructor(theme, brand, itms, img, where = 'header') {
        if (!img) img = '';
        items = [];
        objectToArray(itms[0]['items']).forEach((item, i) => {
            if (item.type == 'item') {
                var a = document.createElement('a');
                a.className = 'nav-link';
                a.setAttribute('onclick', item.onClick);
                a.setAttribute('style', 'cursor: pointer');
                a.innerHTML = Object.keys(itms[0]['items'])[i];
                if (item.disabled == 'true') a.disabled = true;
                items.push(a);
            } else if (item.type == 'dropdown') {
                //console.log(item['items']);
                var li = document.createElement('li');
                li.className = 'nav-item dropdown';
                if (item.disabled == 'true') li.disabled = true;
                var a1 = document.createElement('a');
                a1.className = 'nav-link dropdown-toggle';
                a1.setAttribute('data-bs-toggle', 'dropdown');
                a1.setAttribute('aria-expanded', 'false');
                a1.setAttribute('role', 'button');
                a1.setAttribute('id', 'dropMenu');
                a1.innerHTML = Object.keys(itms[0]['items'])[i];
                li.append(a1)

                var ul = document.createElement('ul');
                ul.className = 'dropdown-menu';
                ul.setAttribute('aria-labelledby', 'dropMenu');
                objectToArray(item['items']).forEach((its, j) => {
                    var a = document.createElement('a');
                    a.className = 'dropdown-item';
                    a.setAttribute('onclick', its.onclick);
                    if (its.disabled == 'true') a.disabled = true;
                    a.innerHTML = Object.keys(item['items'])[j];
                    ul.append(a);
                });
                li.append(ul);
                items.push(li);
            }
        });
        var list = '';
        items.forEach((item, i) => {

            list += item.outerHTML;
        });

        var text =
            `<nav class="navbar navbar-expand-lg navbar-` + theme + ` bg-` + theme + `">
        <div class="container-fluid">
          ` + img + `
          <a class="navbar-brand" href="#">` + brand + `</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav" id="navbar">
              ` + list + `
            </ul>
          </div>
        </div>
      </nav>
      `;
        document.querySelector(where).innerHTML = text;
    }
}

class loginUI {
    constructor(loginFunction, registerFunction, where) {
        this.temp = document.createElement('div');
        this.temp.setAttribute('id', 'loginForm');
        this.where = where;
        this.temp.innerHTML = (`

    <div class="contenitoreLogin">
    <div class="cartaLogin"></div>


    <div class="cartaLogin carta1">
      <h1 class="title">Login</h1>
      <form>
        <div class="input-contenitoreLogin">
          <input type="#{type}" id="email" required="required" autocomplete="off" />
          <label for="#{label}">Email</label>
         <div class="bar"></div>
        </div>

        <div class="input-contenitoreLogin">
          <input type="password" id="password" required="required" autocomplete="off" />
          <label for="#{label}">Password</label>
         <div class="bar"></div>
       </div>

        <div class="button-contenitoreLogin">
         <button type="button" id="loginBtn" onclick="` + loginFunction + `"><span>Go</span></button>
         </div>

         <div class="footer"><a href="#" id='registerBtn1'>Ancora non registrato?</a></div>
      </form>
      <div style="height: 15vh;"></div>
    </div>

    <div class="cartaLogin carta2">
    <h1 class="title">Register</h1>
    <form>
      <div class="input-contenitoreLogin">
        <input type="#{type}" id="emailRe" required="required" autocomplete="off"/>
        <label for="#{label}">Email</label>
        <div class="bar"></div>
      </div>

      <div class="input-contenitoreLogin">
        <input type="#{type}" id="nomeEcognomeRe" required="required" autocomplete="off"/>
        <label for="#{label}">Nome e cognome</label>
        <div class="bar"></div>      
      </div>

      <div class="input-contenitoreLogin">
        <input type="password" id="passwordRe" required="required" autocomplete="off"/>
        <label for="#{label}">Password</label>
        <div class="bar"></div>
       </div>

      <div class="button-contenitoreLogin">
        <button id="registerBtn" onclick="` + registerFunction + `"><span>Avanti</span></button>
      </div>

      <div class="footer"><a href="#" id='closeBtn1'>Già registrato?</a></div>
    </form>

    <div style="height: 15vh;"></div>
    </div>
    </div>


    <script type="text/javascript">
    $(document).ready(function() {
      $('.carta1').show();

      $('#registerBtn1').on('click', function() {
        console.log('ok');
        $('.carta2').fadeIn();
        $('.carta1').hide();
      });

      $('#closeBtn1').on('click', function() {
        $('.carta2').hide();
        $('.carta1').fadeIn();
      })
    });
    </script>
    `);
        $(where).append(this.temp.outerHTML);
        document.querySelector('#loginForm').style.display = 'none';
    }

    setLoginFunction(f) {
        document.querySelector('#loginBtn').setAttribute('onclick', f);
    }
    setRegisterFunction(f) {
        document.querySelector('#registerBtn').setAttribute('onclick', f);
    }

    show() {
        document.querySelector('#loginForm').style.display = 'block';
    }
    hide() {
        document.querySelector('#loginForm').style.display = 'none';
    }
}

class confirmMessage {
    constructor(title, message, button, where) {
        this.title = title;
        this.message = message;
        this.button = button;
        this.where = where;
        this.inizialize();
    }

    setTitle(tl) {
        this.title = tl;
    }

    setMessage(mx) {
        this.message = mx;
    }

    setButton(btn) {
        this.button = btn;
    }

    remove() {
        $('#confirmForm').remove();
    }

    inizialize() {
        $('#confirmForm').remove();
        $(this.where).append(`
      <div id="confirmForm" class="modal modal-dialog modal-dialog-centered" style="position:fixed">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="cfTitle">` + this.title + `</h5>
              <button type="button" class="btn-close closeCf" data-bs-dismiss="modal" aria-label="Close" onclick="$('#confirmForm').fadeOut()"></button>
            </div>
            <div class="modal-body" id="cfMessage">` + this.message + `</div>
            <div class="modal-footer">
              <button type="button" class="closeCf btn btn-secondary" onclick="$('#confirmForm').fadeOut()">Chiudi</button>
              ` + this.button.outerHTML + `
            </div>
          </div>
        </div>
      </div>`)
    }


}
class verifyMailSent {
    constructor(mail, where) {
        $('#verifyMailSent').remove();
        $(where).append(`
      <div id="verifyMailSent" style="background-color: red;width: 100%; height: 100vh; color: white; position: fixed; top: 0">
      <img style="width: 40%; margin-left: 30%; margin-top: 20vh;" src="https://img.icons8.com/plasticine/300/000000/verified-account.png"/><br><br><br><br>
      <p style="width: 80%; margin-left: 10%;text-align: center">Abbiamo inviato una mail di conferma all'indirizzo email <b>` + mail + `</b>, clicca sul link per confermare la tua identità.</p><br>
      <button class="btn btn-warning" style="width: 80%; margin-left: 10%;" onclick="function(){location.reload()}">Fatto</button>
      <button class="btn btn-outline-light" style="width: 80%;margin-top: 1.5vh; margin-left: 10%; text-align: center" onclick="function(){location.reload()}">Indietro</button>
      </div>`)
    }
}

class message {
    constructor(message, btnText, onSubmit, where) {
        onSubmit ? onSubmit += ',$(\'#savedMessage\').remove();' : onSumit = '$(\'#savedMessage\').remove();';
        $('#savedMessage').remove();
        $(where).append(`
      <div id="savedMessage" style="background-color: red;width: 100%; height: 100vh; color: white; position: fixed; top: 0">
      <img style="width: 40%; margin-left: 30%; margin-top: 20vh;" src="https://img.icons8.com/cotton/300/000000/check-document.png"/><br><br><br><br>
      <p style="width: 80%; margin-left: 10%;text-align: center">` + message + `</p><br>
      <button class="btn btn-warning" style="width: 80%; margin-left: 10%;" onclick="` + onSubmit + `">` + btnText + `</button>
      <button class="btn btn-outline-light" style="width: 80%;margin-top: 1.5vh; margin-left: 10%; text-align: center" onclick="location.reload()">Indietro</button>
      </div>`)
    }
}

class month {

    constructor(mese) {
        this.mese = mese;
    }

    toInt() {
        switch (this.mese.toLowerCase()) {
            case 'gennaio':
                return 0;
                break;
            case 'febbraio':
                return 1;
                break;
            case 'marzo':
                return 2;
                break;
            case 'aprile':
                return 3;
                break;
            case 'maggio':
                return 4;
                break;
            case 'giugno':
                return 5;
                break;
            case 'luglio':
                return 6;
                break;
            case 'agosto':
                return 7;
                break;
            case 'settembre':
                return 8;
                break;
            case 'ottobre':
                return 9;
                break;
            case 'novembre':
                return 10;
                break;
            case 'dicembre':
                return 11;
                break;
        }
    }

    toFullName() {
        switch (+this.mese) {
            case 0:
                return 'gennaio';
            case 1:
                return 'febbraio';
            case 2:
                return 'marzo';
            case 3:
                return 'aprile';
            case 4:
                return 'maggio';
            case 5:
                return 'giugno';
            case 6:
                return 'luglio';
            case 7:
                return 'agosto';
            case 8:
                return 'settembre';
            case 9:
                return 'ottobre';
            case 10:
                return 'novembre';
            case 11:
                return 'dicembre';
        }
    }

    getAllMonths() {
        return ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']
    }
}

function getCurrentDate(format = 'dd/MM/yy', monthInLetter) {
    var d = new Date();
    if (format == 'dd/MM/yy')
        if (!monthInLetter)
            return addZeroLessTen(d.getDate()) + '/' + addZeroLessTen((d.getMonth() + 1)) + '/' + d.getFullYear();
        else
            return addZeroLessTen(d.getDate()) + '/' + new month(d.getMonth()).toFullName() + '/' + d.getFullYear();
    else if (format = 'yy/MM/dd')
        if (!monthInLetter)
            return d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + addZeroLessTen(d.getDate());
        else
            return d.getFullYear() + '/' + new month(d.getMonth()).toFullName() + '/' + addZeroLessTen(d.getDate());
}

function getCurrentTime() {
    var d = new Date();
    return addZeroLessTen(d.getHours()) + ':' + addZeroLessTen(d.getMinutes()) + ':' + addZeroLessTen(d.getSeconds()) + ':' + addZeroLessTen(d.getMilliseconds());
}

function addZeroLessTen(number) {
    return (number >= 10) ? number : '0' + number;
}


function createButton(clas, txt, onclick, id) {
    var btn = document.createElement('button');
    btn.className = clas;
    btn.innerText = txt;
    btn.style.marginRight = '1vh';
    btn.setAttribute('onclick', onclick);
    if (id) {
        btn.setAttribute('id', id);
    }
    return btn;
}

const objectToArray = obj => {
    const keys = Object.keys(obj);
    const res = [];
    for (let i = 0; i < keys.length; i++) {
        res.push(obj[keys[i]]);
    };
    return res;
}

function convertWeekDay(nDay) {
    var string;
    switch (+nDay) {
        case 0:
            string = 'Domenica';
            break;
        case 1:
            string = 'Lunedì';
            break;
        case 2:
            string = 'Martedì';
            break;
        case 3:
            string = 'Mercoledì';
            break;
        case 4:
            string = 'Giovedì';
            break;
        case 5:
            string = 'Venerdì';
            break;
        case 6:
            string = 'Sabato';
            break;
        default:
            string = '';
    }
    if (string != '') return string;

    switch (nDay) {
        case 'Domenica':
            string = 0;
            break;
        case 'Lunedì':
            string = 1;
            break;
        case 'Martedì':
            string = 2;
            break;
        case 'Mercoledì':
            string = 3;
            break;
        case 'Giovedì':
            string = 4;
            break;
        case 'Venerdì':
            string = 5;
            break;
        case 'Sabato':
            string = 6;
            break;
        default:
            string = '';
    }
    return +string;
}

function showInParent(where, what, clear = false) {
    where.parentNode.id != 'body' ? where = where.parentNode.id : where = where.id;
    if (clear) {
        $('#' + where).empty();
    }
    $('#' + where).hide();
    $('#' + where).fadeIn('slow');
    $('#' + where).append(what);
}

function scrollTo(whr) {
    $("html,body").animate({ scrollTop: whr == 'top' ? 0 : whr }, 500, function () { });
}