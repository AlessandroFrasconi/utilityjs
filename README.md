# Utility Js

A group of utilty fro JavaScript Programmers

<details><summary>Button</summary>

## Button

**Constructor**

```javascript
var btn = new Button("Press", "btn", () => {}, "block");
```

> new Button ([text of button], [classes style], [onClick function], [display mode])

[display mode] = 'block', 'inline', ...

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

<details><summary>Navigation Bar</summary>

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

<details><summary>Login UI</summary>

## loginUI

**Constructor**

```javascript
var lgn = new loginUI(
  () => {},
  () => {},
  "body"
);
lgn.show();
```

> new loginUI ([loginFunction], [registerFunction], [where])

[loginFunction] = function to login
[registerFunction] = function for registation
[where] = 'body', '#loginDiv', ...

| Method                 | Description                    | Return |
| ---------------------- | ------------------------------ | ------ |
| .setLoginFunction()    | Set the login function null    |
| .setRegisterFunction() | Set the register function null |
| .show()                | Show the login UI null         |
| .hide()                | Hide the login UI null         |

</details>

<details><summary>Verify Mail Sent UI</summary>

## verifyMailSent

**Constructor**

```javascript
var vms = new verifiyMailSent("mail@gmail.com", "body");
vms.show();
```

> new verifyMailSent ([mail],[where])

[mail] = e-mail sent mail
[where] = 'body', '#loginDiv', ...

</details>

<details><summary>Message</summary>

## message

**Constructor**

```javascript
var mex = new message("Hello Word", "OK", () => {}, "body");
```

> new message ([message], [btnText],[onSubmit],[where])

[message] = message to show
[btnText] = text of the button
[onSubmit] = function on click the button
[where] = 'body', '#loginDiv', ...

</details>

<details><summary>Month</summary>

## month

**Constructor**

```javascript
var m = new month("agosto");
m.toInt(); // return 7
```

```javascript
var m = new month(7);
m.toFullName(); // return 'Agosto'
```

> new month ([month])

[month] = '0', 'gennaio'

| Method          | Description                                                         | Return       |
| --------------- | ------------------------------------------------------------------- | ------------ |
| .toInt()        | Get number [0-11] of the month from a text ('febbraio' -> return 1) | number       |
| .toFullName()   | Get month in letter from a number (1 -> return 'febbraio')          | string       |
| .getAllMonths() | Return all month as Array                                           | string array |

</details>
<details><summary>Bootstrap</summary>

## Bootstrap integration

```Javascript
new Utility().bootstrapRemove() //for remove
new Utility().bootstrapInsert() //for add
```

</details>

<details><summary>jQuery</summary>

## jQuery integration

```Javascript
new Utility().jQueryRemove() //for remove
new Utility().jQueryInsert() //for add
```

</details>

<details><summary>Methods</summary>

## Methods

**Class "Utility"**

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
| checkNotEmpty([array])                           | Check each obj is not Empty            | bool (true)             |

</details>
