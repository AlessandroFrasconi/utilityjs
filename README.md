# Utility Js
A group of utilty fro JavaScript Programmers

## Button
**Constructor**
> new Button ([text of button], [classes style], [onClick function], [display mode]) 

[display mode] = 'block', 'inline', ...

| Method  | Description | Return |
| ------------- | ------------- | ------------- |
| .getButton()  | Return the button  | HTML Element |
| .getClass()  | Return the button's class  | string |
| .getText() | Return the button's text | string |
|.getFunction() |	Return the function of the button |	string
|.setText([text]) |	Set the text ([text]) of the button |	null
|.setClass([class]) |	Set the classes ([class]) of the button	| null
|.setFunction([function]) |	Set the function on click ([function]) of the button | null
|.setAttribute([attribute], [value]) |	Set an attribute in the button |	null
|.appendIn([selector]) |	Append the button in [selector] (must be a string ex: 'body' or '.divClass') |	null
|.hide() |	Hide the button |	null
|.show() |	Show the button |	null
|.enable() |	Set the button enable |	null
|.disable()	| Show the button disabled |	null
|.addClass([class]) |	Add class [class] in the classList of the button |	null
|.deleteClass([class]) |	Delete class [class] in the classList of the button |	null

## headNavBar
**Constructor**
> new headNavBar ([theme], [brand], [items], [img], [where]*)

[theme] = 'light', 'dark'.
[items] = ex: 'bho'.
[img] = link of an image.
[where] = 'header', '#homepage'.

## loginUI
**Constructor**
>new loginUI ([loginFunction], [registerFunction], [where])

[loginFunction] = function to login
[registerFunction] = function for registation
[where] = 'body', '#loginDiv', ...

| Method  | Description | Return |
| ------------- | ------------- | ------------- |
|.setLoginFunction() |	Set the login function	null |
|.setRegisterFunction() |	Set the register function	null |
|.show() |	Show the login UI	null |
|.hide() |	Hide the login UI	null |

## verifyMailSent
**Constructor**
> new verifyMailSent ([mail],[where])

[mail] = e-mail sent mail
[where] = 'body', '#loginDiv', ...

## message
**Constructor**
> new message ([message], [btnText],[onSubmit],[where])

[message] = message to show
[btnText] = text of the button
[onSubmit] = function on click the button
[where] = 'body', '#loginDiv', ...

## month
**Constructor**
> new month ([month])

[month] = '0', 'gennaio'

| Method  | Description | Return |
| ------------- | ------------- | ------------- |
|.toInt() |	Get number [0-11] of the month from a text ('febbraio' -> return 1) |	number |
|.toFullName() |	Get month in letter from a number (1 -> return 'febbraio') |	string |
|.getAllMonths() |	Return all month as Array	| string array |

createButton([classes], [text], [onclick], [id])
objectToArray([array])
convertWeekDay([day])
showInParent([where], [what], [clear*])
scrollTo([where])
