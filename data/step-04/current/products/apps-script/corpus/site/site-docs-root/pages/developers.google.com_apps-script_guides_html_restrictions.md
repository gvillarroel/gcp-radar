---
title: "HTML Service: Restrictions \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/guides/html/restrictions
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/apps-script
source_metadata:
  url: https://developers.google.com/apps-script/guides/html/restrictions
  title: "HTML Service: Restrictions \_|\_ Apps Script \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Guides
Send feedback
HTML Service: Restrictions
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Apps Script uses iframes to sandbox HTML-service web apps and custom user interfaces for security.
The only remaining sandbox mode is IFRAME ; older modes are automatically migrated to this mode.
The IFRAME sandbox mode restricts certain actions, such as top-level navigation, by using specific HTML5 iframe sandboxing attributes.
In IFRAME mode, link targets must be set to _top or _blank .
Active content in IFRAME mode, such as scripts and external stylesheets, must be loaded over HTTPS.
To protect users from malicious HTML or JavaScript, the HTML service uses
iframes to sandbox web apps or custom user interfaces for Google Docs,
Google Sheets, and Forms. The HTML service doesn't use a
sandbox in other situations, such as generating the body of an email. The
sandbox imposes limitations on client-side code.
Sandbox Mode
With the exception of IFRAME , all sandbox modes are sunset. Apps that
previously used NATIVE or EMULATED modes now automatically use IFRAME
mode. If your script was developed with an older mode, follow the
migration instructions to ensure it functions
properly.
The setSandboxMode
method now has no effect when called.
Restrictions in IFRAME mode
The IFRAME sandbox mode is based on the
iframe sandboxing feature
in HTML5, using the following keywords:
allow-same-origin
allow-forms
allow-scripts
allow-popups
allow-downloads
allow-modals
allow-popups-to-escape-sandbox
allow-top-navigation-by-user-activation - This attribute is only set for
stand-alone script projects .
The allow-top-navigation keyword, which allows the content to navigate its
top-level browsing context, is restricted and not set as an attribute in the
sandbox. If you need to redirect your script, add a link or a button for the
user to take action on instead.
Set the link target attribute
In the IFRAME mode you need to set the link target attribute to either
_top or _blank :
Code.js
function doGet () {
var template = HtmlService . createTemplateFromFile ( 'top' );
return template . evaluate (). setSandboxMode ( HtmlService . SandboxMode . IFRAME );
}
top.html
<!DOCTYPE html>
<html>
<body>
<div>
<a href="http://google.com" target="_top">Click Me!</a>
</div>
</body>
</html>
You can also override this attribute using the <base> tag within the head
section of the enclosing web page:
<!DOCTYPE html>
<html>
<head>
<base target="_top">
</head>
<body>
<div>
<a href="http://google.com">Click Me!</a>
</div>
</body>
</html>
HTTPS required for active content
"Active"
content
like scripts, external stylesheets, and XmlHttpRequests must be loaded over
HTTPS, not HTTP.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
