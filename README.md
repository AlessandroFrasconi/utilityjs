# Utility Js

A group of utilty for JavaScript Programmers

- [Button](#Button)
- [Login IU](#loginIU)
- [Confirm message](#confirm_message)
- [Message](#message)
- [Bootstrap](#Bootstrap)
- [Navigation bar](#headNavBar)
- [JQuery](#jQuery)
- [Other Functions](#Methods)

<details open><summary>Button</summary>

## Button

**Constructor**

```javascript
var btn = new Button("Press", "btn", () => {}, "block");
```

> new Button ([text of button], [classes style], [onClick function], [display mode])

[display mode] = 'block', 'inline', ...

**Implementation**
```javascript
var btn = new Button("Press", "btn", () => {}, "block");

btn.appendIn('body');

//or
document.querySelector('body').appendChild(btn);

//or (require jQuery library)
$('body').append(btn);
```

| Method                              | Description                                                                  | Return       |
| ----------------------------------- | ---------------------------------------------------------------------------- | ------------ |
| .getButton()                        | Return the button                                                            | HTML Element |
| .getClass()                         | Return the button's class                                                    | string       |
| .getText()                          | Return the button's text                                                     | string       |
| .getFunction()                      | Return the function of the button                                            | string       |
| .setText([text])                    | Set the text ([text]) of the button                                          | null         |
| .setClass([class])                  | Set the classes ([class]) of the button                                      | null         |
| .setFunction([function])            | Set the function on click ([function]) of the button                         | null         |
| .setAttribute([attribute], [value]) | Set an attribute in the button                                               | null         |
| .appendIn([selector])               | Append the button in [selector] (must be a string ex: 'body' or '.divClass') | null         |
| .hide()                             | Hide the button                                                              | null         |
| .show()                             | Show the button                                                              | null         |
| .enable()                           | Set the button enable                                                        | null         |
| .disable()                          | Show the button disabled                                                     | null         |
| .addClass([class])                  | Add class [class] in the classList of the button                             | null         |
| .deleteClass([class])               | Delete class [class] in the classList of the button                          | null         |

</details>



<details open><summary>Login UI</summary>

## loginUI

**Constructor**

```javascript
let lgn = new loginUI ([where], [options])
```

> new loginUI ([where], [options])

[options] = options for login (see implementation)
[where] = 'body', '#loginDiv', ...

**Implementation**

```javascript
let options = {
  'linkCondizioniUso': 'https://www.google.com',
  'linkCondizioniGenerali': 'https://www.google.com',
  'linkPrivacy': 'https://www.google.com',
  'function_login': 'login()',
  'function_register': 'register()',
  'show_register': true,
  'show_passwordDimenticata': true,
  'function_confermaPasswordDimenticata': 'confirmMiss()',
  'show_accediSocial': false,
  'extra_input_registrazione': [`<input type="text" id="course">`],
  'linkLoginGoogle': '',
  'linkLoginFacebook': ''
}
let lgn = new loginUI ('body', options);

let username = $('#email')[0].value;
let password = $('#password')[0].value;

let nome = $('#nome')[0].value;
let cognome = $('#cognome')[0].value;
let email = $('#email_rg')[0].value;
let sesso = lg.sessoRegistrazione(); //(m, f, a)
let password1 = $('#password_rg')[0].value;
let password1 = $('#password2_rg')[0].value;
```

<img
  src="https://github.com/AlessandroFrasconi/utilityjs/blob/main/images/login.png?raw=true"
  alt="Login"
  title="LoginUI"
  style="display: inline-block; margin: 0 auto; max-width: 100px">



| Method                 | Description                    | Return |
| ---------------------- | ------------------------------ | ------ |
| .setLoginFunction()    | Set the login function | null    |
| .setRegisterFunction() | Set the register function | null |
| .show()                | Show the login UI | null         |
| .hide()                | Hide the login UI | null         |

</details>

<details open><summary>Confirm Message</summary>

## confirm_message

**Constructor**

```javascript
let cm = new confirm_message([title], [message], [array of buttons], [where]);
```

> new confirm_message ([title], [message],[buttons],[where])

[title] = message's title 
[message] = message to show
[buttons] = array of buttons buttons (see implementation)
[where] = 'body', '#loginDiv', ...



**Implementation**

```javascript
let cm = new confirm_message(
  'Confirm', 
  `Are you sure to continue?`,
  [
    createButton('btn-message', 'Continue', 'cm.hide()', ''), 
    createButton('btn-message', 'Send', '', '')
  ],
  'body');
cm.show();
```


| Method                 | Description                    | Return |
| ---------------------- | ------------------------------ | ------ |
| .setTitle([title])    | Set title of confirm message | null    |
| .setMessage([message]) | Set message of confirm message | null |
| .setButtons([buttons])                | Set buttons of confirm message | null         |
| .hide()                | Hide confirm message | null         |
| .show()                | Show confirm message        |
| .remove()                | Remove confirm message | null         |

</details>
<details open><summary>Message</summary>

## message

**Constructor**

```javascript
new message ([message], [btnText],[onSubmit],[where])
```

> new message ([message], [btnText],[onSubmit],[where])

[message] = message to show
[btnText] = text of the button
[onSubmit] = function on click the button
[where] = 'body', '#loginDiv', ...

**Implementation**

```javascript
new message (`Changes applied`, "OK", "window.reload()",'body')
```
</details>
<details open><summary>Month</summary>

## month

**Constructor**

```javascript
var m = new month([month]);
```
> new month ([month])

[month] = '0', 'gennaio'

**Implementation**

```javascript
var m = new month("agosto");
m.toInt(); // return 7
```

```javascript
var m = new month(7);
m.toFullName(); // return 'Agosto'
```

| Method          | Description                                                         | Return       |
| --------------- | ------------------------------------------------------------------- | ------------ |
| .toInt()        | Get number [0-11] of the month from a text ('febbraio' -> return 1) | number       |
| .toFullName()   | Get month in letter from a number (1 -> return 'febbraio')          | string       |
| .getAllMonths() | Return all month as Array                                           | string array |

</details>

<details open><summary>Bootstrap</summary>

## Bootstrap integration

```Javascript
new Utility().bootstrapRemove() //for remove
new Utility().bootstrapInsert() //for add
```

</details>

<details open><summary>Navigation Bar</summary>

## headNavBar

**Constructor**

```javascript
var hnb = new headNavBar("light", "uJs", "item1", "", "body");
hnb.show();
```

> new headNavBar ([theme], [brand], [items], [img], [where]\*)

[theme] = 'light', 'dark'.
[items] = ex: 'bho'.
[img] = link of an image.
[where] = 'header', '#homepage'.

</details>

<details open><summary>jQuery</summary>

## jQuery integration

```Javascript
new Utility().jQueryRemove() //for remove
new Utility().jQueryInsert() //for add
```

</details>

<details open><summary>Methods</summary>

## Methods

| Method                                           | Description                            | Return                  |
| ------------------------------------------------ | -------------------------------------- | ----------------------- |
| createButton([classes], [text], [onclick], [id]) | Make a button                          | HTML Button element     |
| getCurrentDate([format], [monthInLetter])        | Return current data                    | String ('dd/MM/yy')     |
| getCurrentTime()                                 | Return current time                    | String ('01:10:31:42')  |
| addZeroLessTen([number])                         | Add 0 in numbers less then 10          | String ('01' / '13')    |
| objectToArray([array])                           | Convert an object to an Array          | Array                   |
| convertWeekDay([day])                            | Convert days in numbers and vice versa | String ('Lunedì' / '1') |
| showInParent([where], [what], [clear*])          | Append in parent node                  | --                      |
| scrollTo([where])                                | Scroll screen at a specific position   | --                      |
| checkNotEmpty([array])                           | Check each obj is not Empty            | bool (true or false)    |
| loading([bool], [theme])                         | Show white/black screen for loading    | -                       |
| isElementInViewport([element])                   | Return true if element is in viewport  | bool (true or false)    |

</details>
