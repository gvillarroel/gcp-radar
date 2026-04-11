---
title: "CSS package for Editor add-ons \_|\_ Google Workspace add-ons \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/workspace/add-ons/guides/css
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/add-ons/overview
source_metadata:
  url: https://developers.google.com/workspace/add-ons/guides/css
  title: "CSS package for Editor add-ons \_|\_ Google Workspace add-ons \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Add-ons
Send feedback
CSS package for Editor add-ons
Stay organized with collections
Save and categorize content based on your preferences.
To help your Editor add-on
look and feel like Google Sheets, Docs, Slides,
or Forms, link in the CSS package following to apply Google
styling to fonts, buttons, and form elements. For a sample of the CSS package in
use, see the Docs add-on
quickstart . To use the
CSS package, include the following at the top of each HTML file:
< link rel = "stylesheet" href = "https://ssl.gstatic.com/docs/script/css/add-ons1.css" >
Note that the style for form elements cannot be completely controlled in all
browsers. In particular, <select> elements display some visual artifacts in
Firefox and Internet Explorer, although they still work properly. To see what
the styles look like in a given browser, load this page in that browser.
Typography
Use Arial font for all text, in the following styles depending on use:
Use and appearance
Markup with CSS package
< h1>Titles and headers < / h1 >
< b>Bold text < / b >
Normal text
< a href = "" > Links < / a >
< span class = "current" > Current navigation selection < / span >
< span class = "error" > Form input errors < / span >
< span class = "gray" > Gray text < / span >
< span class = "secondary" > Secondary text < / span >
Buttons
You can use any of the standard types of buttons— <button> ,
<input type="button"> , or <input type="submit"> , as well as
<a class="button"> . Buttons that are horizontally adjacent space
themselves out automatically. There are several colors available, for various
uses:
Use
Appearance
Markup with CSS package
Primary action
< button class = "action" > Translate < / button >
Secondary action(s)
< button>Close < / button >
Create action
< button class = "create" > Create < / button >
Share action
< button class = "share" > Share < / button >
Checkboxes
Example
Markup with CSS package
< div >
< input type = "checkbox" id = "checkbox1" checked >
< label for = "checkbox1" > Checked < / label >
< / div >
< div >
< input type = "checkbox" id = "checkbox2" >
< label for = "checkbox2" > Unchecked < / label >
< / div >
< div >
< input type = "checkbox" id = "checkbox3" checked disabled >
< label for = "checkbox3" > Checked , disabled < / label >
< / div >
< div >
< input type = "checkbox" id = "checkbox4" disabled >
< label for = "checkbox4" > Unchecked , disabled < / label >
< / div >
Radio buttons
Example
Markup with CSS package
< div >
< input type = "radio" name = "radio-a" id = "radio1" checked >
< label for = "radio1" > Checked < / label >
< / div >
< div >
< input type = "radio" name = "radio-a" id = "radio2" >
< label for = "radio2" > Unchecked < / label >
< / div >
< div >
< input type = "radio" name = "radio-b" id = "radio3"
checked disabled >
< label for = "radio3" > Checked , disabled < / label >
< / div >
< div >
< input type = "radio" name = "radio-b" id = "radio4" disabled >
< label for = "radio4" > Unchecked , disabled < / label >
< / div >
Select menus
Example
Markup with CSS package
< div class = "block form-group" >
< label for = "select" > Select < / label >
< select id = "select" >
< option selected>Google Docs < / option >
< option>Google Forms < / option >
< option>Google Sheets < / option >
< / select >
< / div >
< div class = "block form-group" >
< label for = "disabled-select" > Disabled select < / label >
< select id = "disabled-select" disabled >
< option selected>Google Docs < / option >
< option>Google Forms < / option >
< option>Google Sheets < / option >
< / select >
< / div >
Text areas
Example
Markup with CSS package
< div class = "form-group" >
< label for = "sampleTextArea" > Label < / label >
< textarea id = "sampleTextArea" rows = "3" >< / textarea >
< / div >
Text fields
Example
Markup with CSS package
< div class = "inline form-group" >
< label for = "city" > City < / label >
< input type = "text" id = "city" style = "width: 150px;" >
< / div >
< div class = "inline form-group" >
< label for = "state" > State < / label >
< input type = "text" id = "state" style = "width: 40px;" >
< / div >
< div class = "inline form-group" >
< label for = "zip-code" > Zip code < / label >
< input type = "text" id = "zip-code" style = "width: 65px;" >
< / div >
Sidebars
Sidebars can be tricky to style because while the height is variable, many
add-ons need to include a branding area that does not scroll.
The following is a copy of the sidebar from the
Google Docs add-on quickstart .
If you drag the bottom-right corner of the text area to make the content taller
than the sidebar, the content area automatically scrolls but the branding at
the bottom does not.
The example uses the sidebar class to apply the correct padding and the
bottom class to force the branding area to the bottom. A local class,
branding-below , then defines the area that the main area of the sidebar should
leave clear from the bottom.
Example
Markup with CSS package
< style >
. branding-below {
bottom : 56 px ;
top : 0 ;
}
< / style >
< div class = "sidebar branding-below" >
< div class = "block form-group" >
< label for = "translated-text" >
< b>Translation < / b >< / label >
< textarea id = "translated-text" rows = "15" >
< / textarea >
< / div >
< div class = "block" >
< input type = "checkbox" id = "save-prefs" >
< label for = "save-prefs" >
Use these languages by default < / label >
< / div >
< div class = "block" >
< button class = "blue" > Translate < / button >
< button>Insert < / button >
< / div >
< / div >
< div class = "sidebar bottom" >
< span class = "gray" >
Translate sample by Google < / span >
< / div >
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],[]]
