class loginUI {
    constructor(where, dati) {
        /*
        
        let dati = {
            'linkCondizioniUso': '',
            'linkCondizioniGenerali': '',
            'linkPrivacy': '',
            'function_login': '',
            'function_register': '',
            'show_register': true,
            'show_passwordDimenticata': false,
            'function_confermaPasswordDimenticata': '',
            'show_accediSocial': false,
            'extra_input_registrazione': [],
            'linkLoginGoogle': '',
            'linkLoginFacebook': '',
        }

        let lg = new loginUI(dati);

        username = $('#email')[0].value;
        password = $('#password')[0].value;

        nome = $('#nome')[0].value;
        cognome = $('#cognome')[0].value;
        email = $('#email_rg')[0].value;
        sesso = lg.sessoRegistrazione(); (m, f, a)
        password1 = $('#password_rg')[0].value;
        password1 = $('#password2_rg')[0].value;

        */

        this.temp = document.createElement('div');
        this.temp.setAttribute('id', 'loginForm');
        this.where = where;
        this.temp.innerHTML = (`
        <div class="contenitoreLogin">
            <div class="cartaLogin"></div>
            <div class="cartaLogin carta1">
                <div id="login" class="centered">
                    <div id="login_subDiv">
                        <div class="header_container">
                            <div class="header_title header_title_active" onclick="mostraAccedi()">
                            Accedi
                            </div>` + (dati.show_register ? `
                        <div class="header_title" onclick="mostraRegistrati()">
                        Registrati
                        </div>` : '') + `
                    </div>
                <div id="accedi_div">
                    <div class="top_container">
                        <h2 class="top_title">Accedi</h2>
                        ` + (dati.show_accediSocial ? `
                    <label class="top_label">con il social che preferisci</label>
                    <div class="imgs_container">
                        <img onclick="`+ dati.linkLoginGoogle + `" src="https://img.icons8.com/color/64/000000/google-logo.png" />
                        <img onclick="`+ dati.linkLoginFacebook + `" src="https://img.icons8.com/fluency/64/000000/facebook-new.png" />
                    </div>
                    <label class="top_label">oppure con la tue email e password</label>
                `: `<label class="top_label">Con la tue email e password</label>`) + `
                </div>
                <div class="dati_container">
                    <input type="text" id="email" placeholder="Email" />
                    <input type="password" id="password" placeholder="Password" />
                    `+ (dati.show_passwordDimenticata ? `
                    <div class="bottom_dati_container">
                        <a href="#" onclick="show_recupera_password()">Hai dimenticato la password?</a>
                    </div>` : '') + `
                    <button class="accedi_btn" onclick="`+ dati.function_login + `">Accedi</button>
                </div>
            </div>

            <div id="registrati_div">
                <div class="top_container">
                    <h2 class="top_title">Sei nuovo? Registrati</h2>
                </div>
                <div class="dati_container">
                <input type="text" id="email_rg" placeholder="Email" />
                <input type="text" id="nome" placeholder="Nome" />
                <input type="text" id="cognome" placeholder="Cognome" />
                <div class="middle">
                    <label>
                    <input type="radio" name="sesso" id="maschio" checked />
                    <div class="front-end box">
                        <span>Uomo</span>
                    </div>
                    </label>

                    <label>
                    <input type="radio" name="sesso" id="femmina" />
                    <div class="back-end box">
                        <span>Donna</span>
                    </div>
                    </label>

                    <label>
                    <input type="radio" name="sesso" id="altro" />
                    <div class="back-end other box">
                        <span>Altro</span>
                    </div>
                    </label>
                </div>
                <div id="extra_input"></div>

                <input type="password" id="password_rg" placeholder="Password" />
                <input type="password" id="password2_rg" placeholder="Ripeti password" />


                `+ ((dati.linkCondizioniUso != undefined && dati.linkCondizioniGenerali != undefined && dati.linkPrivacy != undefined) ? `
                <p class="disclamers">
                    Con la presente registrazione dichiaro di aver letto e accettato
                    le <a href="`+ dati.linkCondizioniUso + `">condizioni d’uso</a>,
                    <a href="`+ dati.linkCondizioniGenerali + `">le condizioni generali</a> e
                    <a href="`+ dati.linkPrivacy + `">l'informativa privacy</a>. In mancanza, non è
                    possibile attivare un account e/o ricevere i servizi offerti.
                </p>` : '') + `
                <button class="register_btn" onclick="`+ dati.function_register + `">
                    Registrati
                </button >
                    <div class="bottomForDevice"></div>
                </div >
            </div >
        </div >

        <div id="recupero_mail">
                <div class="header_container">
                    <div class="header_title">Recupero</div>
                </div>
                <h2 class="rm_titolo">Recupera password</h2>
                <label>Ti sarà inviata una nuova password su telegram nella chat di Frasco
                    Disco Service.</label>
                <input type="email" id="email_recupero" placeholder="Indirizzo email" />
                <button class="btn btn-outline-primary" style="margin-top: 3vh; width: 100%; border-radius: 0.5vh"
                    id="btn_recupero" onclick=" $('#recupero_mail').hide();
                    $('#login_subDiv').fadeIn();">
                    Annulla
                </button>
                <button class="btn btn-primary btn_big_mobile" style="margin-top: 2vh; width: 100%; border-radius: 0.5vh"
                    id="btn_recupero" onclick="`+ dati.function_confermaPasswordDimenticata + `()">
                    Conferma
                </button>
            </div>
  </div >
  </div>
    </div >


<script type="text/javascript">

function show_recupera_password() {
    $('#recupero_mail').fadeIn();
    $('#login_subDiv').hide();
}

    
function mostraAccedi() {
    $('#registrati_div').hide();
    $('#accedi_div').fadeIn();
    $('.header_title')[0].className = 'header_title header_title_active';
    $('.header_title')[1].className = 'header_title';
}

function mostraRegistrati() {
    $('#accedi_div').hide();
    $('#registrati_div').fadeIn();
    $('.header_title')[0].className = 'header_title';
    $('.header_title')[1].className = 'header_title header_title_active';
}

function viewInfo() {
    if ($('.info')[0].style.display == 'block') {
        $('.info').fadeOut();
    } else {
        $('.info').fadeIn();
    }
}

function erroriRegistrazione(email, nome, cognome, password, password2, codeTelegram) {
    let errori = [];

    if (!validateEmail(email)) errori.push('La mail non è correttamente formattata');
    if (nome.length == 0) errori.push('Inserire un nome');
    if (cognome.length == 0) errori.push('Inserire un cognome');
    if (password.length == 0) errori.push('Inserire una password');
    if (password != password2) errori.push('Le due password non coincidono');
    if (codeTelegram.length == 0) errori.push('Inserire il codice di telegram');


    if (errori.length == 0) return false;

    let txt = 'Risolvi prima questi errori: ';
    errori.forEach(err => {
        txt += err + '<br>';
    })
    return txt;
}

function validateEmail(email) {
    let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return res.test(email);
}

    </script>

    

    <style>

    :root{
        --primary: #03a9f4;
    }
    #login{
        width: 40vw;
        height: auto;
        z-index: 10;
        background-color: white;
        border: 1px solid grey;
        padding: 4vh;
        border-radius: 0.5vh;
        overflow-y: auto;
        max-height: 100vh;
    }

    #login #login_subDiv{
        padding: 5%;
    }

    #login input{
        color: black!important;
    }
    
    .centered{
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%)
    }
    
    
    
    .dati_container input, #email_recupero, select{
        width: 90%;
        margin: auto;
        border: 1px solid grey;
        border-radius: 0.5vh;
        padding: 1.5vh 2vh;
        margin-top: 2vh;
    }
    .header_container{
        width: 100%;
        text-align: center;
        padding: 2vh 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    #registrati_div{
        display: none;
    }
    
    .header_title{
        color: #9e9e9e;
        font-weight: bold;
        border-bottom: 1px solid transparent;
        width: 32%;
        margin: 10px;
        font-size: 20px;
        opacity: 0.7;
        cursor: pointer;
    }
    
    .header_title_active{
        border-bottom: 1px solid #148ad2;
        color: #148ad2;
        opacity: 1;
    }
    
    .top_container{
        text-align: center;
    padding: 4vh 0
    }
    
    #registrati_div{
        height: 85vh;
    }
    
    
    #registrati_div .top_title{
        font-size: 24px;
    }
    
    #registrati_div h6{
        font-size: 15px;
        font-weight: bold;
        width: 90%;
        margin: 20px auto;
    }
    
    #sesso{
        margin: 20px 5%;
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;
        flex-wrap: nowrap;
        flex-direction: row;
    }
    
    #sesso input{
        margin: 0;
    }
    
    .bottom_label{
        margin: 30px auto;
    }
    
    .input_w_image input{
        margin: 0;
    }
    
    .input_w_image{
        display: flex;
        width: 90%;
        margin-left: 5%;
        align-items: center;
    }
    .input_w_image img{
    width: 50px;
    object-fit: contain;
    opacity: 0.6;
    transition: 0.3s;
    }
    
    .input_w_image img:hover{
        opacity: 1;
    }
    
    .info{
        text-align: center;
        width: 90%;
        margin-left: 5%;
        margin-top: 15px;
        font-size: 15px;
        display: none;
    }
    
    .disclamers{
        font-size: 12px;
        text-align: justify;
        margin: 20px 5%;
        font-family: 'Poppins', sans-serif;
    }
    
    
    .top_title{
        font-weight: bold;
    }
    
    .top_label{
        font-size: 15px
    }
    
    .dati_container{
        text-align:center;
    }
    
    
    
    .imgs_container{
        margin: 2vh 0;
    }
    
    .imgs_container img{
        border-radius: 50%;
        width: 40px;
        padding: 1vh;
        margin-right: 2vw;
        box-shadow: rgb(0 0 0 / 10%) 0px 4px 12px;
        cursor: pointer;
    }
    
    .bottom_dati_container{
        width: 90%;
        display: flex;
        margin: auto;
        margin-top: 2vh;
        font-size: 14px;
    }
    
    
    .bottom_dati_container a{
        text-align: right;
    width: 100%;
    color: black;
    text-decoration: underline;
    }
    
    .accedi_btn, .register_btn{
        width: 90%;
        margin-top: 3vh;
        background: var(--primary);
        color: white;
        border: 1px solid transparent;
        padding: 1vh;
        border-radius: 0.5vh;
        margin-bottom: 5vh;
        transition: 0.3s;
        cursor: pointer;
    }
    
    
    .accedi_btn:hover, .register_btn:hover{
        color: var(--primary);
        background: white;
        border: 1px solid var(--primary);
    }
    
    .rm_titolo{
        width: 100%;
        font-size: 24px;
        font-weight: bold;
    }
    
    #recupero_mail{
        display: none;
    }
    #recupero_mail .header_title{
        width: 34%
    }
    
    #recupero_mail label{
        font-size: 14px;
        margin-top: 2vh;
    }
    
    
    #email_recupero{
        width: 100%;
    }
    
    @media(max-width: 900px){
    
        #login{
            position: fixed;
            width: 100%;
            height: 100vh;
            background-color: white;
            border: none;
            max-height: none;
        }
    }
    </style>
        `);

        $(where).append(this.temp.outerHTML);

        if (dati.extra_input_registrazione.length != 0) {
            dati.extra_input_registrazione.forEach(addinput => {
                $('#extra_input').append(addinput);
            })
        }

        document.querySelector('#loginForm').style.display = 'none';
    }

    setLoginFunction(f) {
        document.querySelector('#accedi_btn').setAttribute('onclick', f);
    }
    setRegisterFunction(f) {
        document.querySelector('#register_btn').setAttribute('onclick', f);
    }

    sessoRegistrazione() {
        let sesso;
        if ($('#maschio')[0].checked) sesso = 'm';
        else if ($('#femmina')[0].checked) sesso = 'f';
        else if ($('#altro')[0].checked) sesso = 'a';
        return sesso;
    }

    show() {
        document.querySelector('#loginForm').style.display = 'block';
    }
    hide() {
        document.querySelector('#loginForm').style.display = 'none';
    }
}

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
        let items = [];
        if (itms.length != 0) {
            //
            itms.forEach((item_m, i) => {
                let item = objectToArray(item_m)[0];
                if (item.type == 'item') {
                    let a = document.createElement('a');
                    a.className = 'nav-link';
                    a.setAttribute('onclick', item.onClick);
                    a.setAttribute('style', 'cursor: pointer');
                    a.innerHTML = Object.keys(item_m)[0];
                    if (item.disabled == 'true') a.disabled = true;
                    items.push(a);
                } else if (item.type == 'dropdown') {//da rivedere 
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
        }
        var list = '';
        items.forEach((item, i) => {
            list += item.outerHTML;
        });

        //console.log(list);

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
        console.log(where);
        document.querySelector(where).innerHTML = text;
    }
}

class confirm_message {
    //new confirmMessage('Conferma', 'messagess', createButton('btn-message','Click','',''), 'body')
    constructor(title, message, buttons, where) {
        this.title = title;
        this.message = message;
        this.buttons = buttons;
        this.where = where;
        this.inizialize();
    }

    setTitle(tl) {
        this.title = tl;
    }

    setMessage(mx) {
        this.message = mx;
    }

    setButtons(btn) {
        this.buttons = btn;
    }

    hide() {
        $('#confirmForm').fadeOut();
        $('#scurisci_div').fadeOut();
    }

    show() {
        $('#confirmForm').fadeIn();
        $('#scurisci_div').fadeIn();
    }

    remove() {
        $('#confirmForm').remove();
        $('#scurisci_div').remove();
    }

    inizialize() {
        $('#confirmForm').remove();
        $('#scurisci_div').remove();
        $(this.where).append(`<div id="scurisci_div"></div>`);
        let bottoni = '';
        this.buttons.forEach(button => {
            bottoni += button.outerHTML;
        })
        $('#scurisci_div').append(`
            <div id="confirmForm" class="modal modal-dialog modal-dialog-centered" style = "position:fixed" >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="cfTitle">` + this.title + `</h5>
                        </div>
                        <div class="modal-body" id="cfMessage">` + this.message + `</div>
                        <div class="modal-footer">
                            <button type="button" class="closeCf btn btn-secondary" onclick="$('#confirmForm').fadeOut();$('#scurisci_div').remove();">Chiudi</button>
                            ` + bottoni + `
                        </div>
                    </div>
                </div>
      </div> `)
    }


}

class scripts {

    bootstrapRemove() {
        $('#bootstrapLink').remove();
    }

    bootstrapInsert() {
        var s = document.createElement("link");
        s.rel = "stylesheet";
        s.id = "bootstrapLink";
        s.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        s.integrity = "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk";
        s.crossOrigin = 'anonymous';
        document.querySelector("head").append(s);
    }

    jQueryInsert() {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "http://code.jquery.com/jquery-3.5.1.min.js";
        s.className = 'jqueryLink';
        document.querySelector("head").append(s);

        var q = document.createElement("script");
        q.type = "text/javascript";
        q.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js";
        q.className = 'jqueryLink';
        document.querySelector("head").append(s);
    } s

    jQueryRemove() {
        $('.jqueryLink').remove();
    }
}

class searchBar {
    constructor(div) {
        this.div = div;
    }

    place() {
        $(this.div).append(`
        <input type="text" id="input-search" class="input-search" onkeyup="new searchBar(null).search()" placeholder="Search..">

        <ul id="list-result-search">
        </ul>`)
        if (this.listOptions != null) this.popolate(this.listOptions);
    }


    popolate(array) {
        this.listOptions = array;
        $('#list-result-search').empty();
        objectToArray(array).forEach(el => {
            let li = document.createElement('li');
            li.innerHTML = el.html;
            li.className = "search-list-item";
            li.setAttribute('onclick', el.onclick);
            $('#list-result-search').append(li);
        })
    }

    search() {
        let input, filter, ul, li, a;
        input = document.getElementById("input-search");
        filter = input.value.toUpperCase();
        ul = document.getElementById("list-result-search");
        li = ul.getElementsByTagName("li");

        // Loop through all list items, and hide those who don't match the search query
        $('#list-result-search').show();
        for (let i = 0; i < li.length; i++) {
            a = li[i];
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                if (input.value != '') {
                    li[i].style.display = "";
                }
                else {
                    li[i].style.display = "none";
                }
            } else {
                li[i].style.display = "none";

            }
        }
    }
}

//todo: docu da qua
function month_toFullName(mese) {
    switch (+mese) {
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
function month_toInt(mese) {
    switch (mese) {
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
function month_list() {
    return ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']
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
function getCurrentDate(format = 'dd/MM/yy', monthInLetter, separator = '/') {
    var d = new Date();
    if (format == 'dd/MM/yy')
        if (!monthInLetter)
            return addZeroLessTen(d.getDate()) + separator + addZeroLessTen((d.getMonth() + 1)) + separator + d.getFullYear();
        else
            return addZeroLessTen(d.getDate()) + separator + new month(d.getMonth()).toFullName() + separator + d.getFullYear();
    else if (format = 'yy/MM/dd')
        if (!monthInLetter)
            return d.getFullYear() + separator + (d.getMonth() + 1) + separator + addZeroLessTen(d.getDate());
        else
            return d.getFullYear() + separator + new month(d.getMonth()).toFullName() + separator + addZeroLessTen(d.getDate());

}
function getCurrentTime(full, separator = ':') {
    var d = new Date();
    return addZeroLessTen(d.getHours()) + separator + addZeroLessTen(d.getMinutes()) + (full ? separator + addZeroLessTen(d.getSeconds()) + separator + addZeroLessTen(d.getMilliseconds()) : '');
}
function addZeroLessTen(number) {
    return (number >= 10) ? number : '0' + number;
}
function objectToArray(obj) {
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

    switch (nDay.toLowerCase()) {
        case 'domenica':
            string = 0;
            break;
        case 'lunedì':
            string = 1;
            break;
        case 'martedì':
            string = 2;
            break;
        case 'mercoledì':
            string = 3;
            break;
        case 'giovedì':
            string = 4;
            break;
        case 'venerdì':
            string = 5;
            break;
        case 'sabato':
            string = 6;
            break;
        default:
            string = '';
    }
    return +string;
}
function checkNotEmpty(list) {
    var x = true;
    list.forEach((item, i) => {
        if (item == '' || item == null || item.toString().toLowerCase() == 'seleziona*' || item.toString().toLowerCase() == 'seleziona') {
            x = false;
            return 0;
        }
    })
    return x;
}
function scrollTo(whr) {
    $("html,body").animate({ scrollTop: whr == 'top' ? 0 : whr }, 500, function () { });
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

Date.prototype.toDateInputValue = (function () {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
})