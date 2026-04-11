---
title: "Detect and prevent account takeovers \_|\_ reCAPTCHA \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/recaptcha/docs/account-takeovers
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/recaptcha/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/recaptcha/docs/account-takeovers
  title: "Detect and prevent account takeovers \_|\_ reCAPTCHA \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
reCAPTCHA
Guides
Send feedback
Detect and prevent account takeovers
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to detect and prevent account takeovers (ATOs)
using reCAPTCHA.
ATO attacks typically occur when an attacker sends requests
to log in to API endpoints using credentials obtained from a data breach, also
known as a
password dump .
This type of attack can be successful, even if the password dump is from an
unrelated site, because humans tend to reuse passwords across multiple accounts.
This type of attack does not affect users who practice proper password
hygiene, such as using a password manager.
Before you begin
Prepare your environment for reCAPTCHA .
Detect and prevent ATOs
With reCAPTCHA, you can detect and prevent ATOs by using one of the
following options:
reCAPTCHA account defender
"I'm not a robot" checkbox
Scores and custom challenges
Use the I'm not a robot checkbox
Adding the I'm not a robot checkbox to your site is the fastest
and easiest way to provide some protection against ATOs without having to
integrate additional features, such as SMS or email verification.
There is a cost for an attacker to break this protection and this option might
be sufficient for some sites.
Note: Checkbox challenges are not supported on mobile applications.
Add the "I'm not a robot" checkbox
on your web pages.
The following code is a live example of a login page protected by the checkbox:
function onSuccess(token) {
// The token is included in the POST data in the g-recaptcha-response
// parameter. The backend must create an Assessment with the token
// and verify the token is valid.
console.log(token);
}
<form id="loginForm" action="?" method="POST">
Username: <input type="text" name="username"/><br/>
Password: <input type="password" name="password"/><br/>
<div class="g-recaptcha" data-sitekey="reCATCHA_sitekey"
data-action="account_login" data-callback="onSuccess"></div>
</form>
<script src="https://www.google.com/recaptcha/enterprise.js" async defer></script>
You can experiment with this code in JSFiddle by clicking the <> icon in the
top-right corner of the code window.
<html>
<head>
<title>Account Login - Checkbox</title>
<script src="https://www.google.com/recaptcha/enterprise.js" async defer></script>
<script>
function onSuccess(token) {
// The token is included in the POST data in the g-recaptcha-response
// parameter. The backend must create an Assessment with the token
// and verify the token is valid.
console.log(token);
}
</script>
</head>
<body>
<form id="loginForm" action="?" method="POST">
Username: <input type="text" name="username"/><br/>
Password: <input type="password" name="password"/><br/>
<div class="g-recaptcha" data-sitekey="6LeAkOgUAAAAACcy3uY6N9H9SJMS27n3Zx2OOnYK"
data-action="account_login" data-callback="onSuccess"></div>
</form>
</body>
</html>
Use scores and custom challenges
To protect against ATOs, use the reCAPTCHA score-based
keys and use Multi-factor authentication (MFA) challenges, such as email
and SMS challenges in which one-time codes (OTPs) are sent to the user.
To use score-based keys and custom challenges, consider the following options:
Install score-based keys to detect automation in large-scale ATOs.
To install score-based keys on web pages, see
Install score-based keys on web pages .
To install score-based keys on mobile applications, see Integrate reCAPTCHA with Android apps .
or Integrate reCAPTCHA with iOS apps .
Use MFA to verify account ownership on login or for sensitive actions.
For more information, see Configure Multi-Factor authentication .
Depending on your use case, you can use MFA on its own or with
score-based keys. For example, you might prefer to use MFA challenges only for
scores below a certain threshold to reduce friction.
The following example shows how to integrate score-based keys in the login
scenario.
function submitForm() {
grecaptcha.enterprise.ready(function() {
grecaptcha.enterprise.execute(
'reCAPTCHA_site_key', {action: 'account_login'}).then(function(token) {
document.getElementById("token").value = token;
document.getElementByID("loginForm").submit();
});
});
}
<form id="loginForm" action="?" method="POST">
Username: <input type="text" name="username"/><br/>
Password: <input type="password" name="password"/><br/>
<input type="hidden" id="token" name="recaptcha_token"/>
<button onclick="submitForm()">Login</button>
</form>
<script src="https://www.google.com/recaptcha/enterprise.js" async defer></script>
You can experiment with this code in JSFiddle by clicking the <> icon in the
top-right corner of the code window.
<html>
<head>
<title>Account Login - Score</title>
<script src="https://www.google.com/recaptcha/enterprise.js" async defer></script>
<script>
function submitForm() {
grecaptcha.enterprise.ready(function() {
grecaptcha.enterprise.execute(
'reCAPTCHA_site_key', {action: 'account_login'}).then(function(token) {
document.getElementById("token").value = token;
document.getElementByID("loginForm").submit();
});
});
}
</script>
</head>
<body>
<form id="loginForm" action="?" method="POST">
Username: <input type="text" name="username"/><br/>
Password: <input type="password" name="password"/><br/>
<input type="hidden" id="token" name="recaptcha_token"/>
<button onclick="submitForm()">Login</button>
</form>
</body>
</html>
What's next
To learn about other account protection features, see User accounts protection features .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
