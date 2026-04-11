---
title: "Managing sessions with external identities \_|\_ Identity-Aware Proxy \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/iap/docs/external-identity-sessions
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/iap/docs
source_metadata:
  url: https://docs.cloud.google.com/iap/docs/external-identity-sessions
  title: "Managing sessions with external identities \_|\_ Identity-Aware Proxy \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Identity-Aware Proxy
Guides
Send feedback
Managing sessions with external identities
Stay organized with collections
Save and categorize content based on your preferences.
This article explains how to manage sessions with Identity-Aware Proxy
(IAP) if you're using external identities for authentication.
Refreshing sessions
Identity Platform sessions are valid for one hour. When a session expires,
your app needs to redirect to the authentication page. The authentication
page contains the Identity Platform refresh token. As long as the user's
credential is still valid, you can use it for reauthentication without showing
any UI.
If the user recently changed their email or password, or some other action
that revoked their token occurred, they'll need to complete the authentication
flow again.
Handling non-AJAX requests
Non-AJAX requests are handled automatically using an application redirect,
assuming the authentication page is configured correctly.
Handling AJAX requests
Chrome and other browsers are phasing out
third-party cookies. The recommendations for making AJAX requests in this page
won't work if third-party cookies
are disabled. However, the provided recommendations will remain functional if
both the source and target of the AJAX requests are from the same site .
For instructions on managing third-party cookies in Chrome, see Delete, allow
and manage cookies in Chrome .
If you send an AJAX request with an expired token, the request will return a
401: Unauthorized status code. Implement one of the following solutions to
handle this:
Modify your application code to handle HTTP 401 status codes.
Add an iframe to your application to point to the session refresher.
Instruct your users to manually load the session refresher in a separate tab.
If you're receiving a 302 status code instead of 401 in response to AJAX
requests, add an X-Requested-With header with a value of XMLHttpRequest .
This informs IAP that the request originates from JavaScript.
Programmatically handling HTTP 401
Programmatically handling HTTP 401 status codes is the recommended way to
refresh an AJAX session. To do this:
Update your application code to handle the error.
if ( response . status === 401 ) {
statusElm . innerHTML = 'Login stale. <input type="button" value="Refresh" onclick="sessionRefreshClicked();"/>' ;
}
Add a handler that opens a window to reauthenticate the user, then closes
it when the process completes.
var iapSessionRefreshWindow = null ;
function sessionRefreshClicked () {
if ( iapSessionRefreshWindow == null ) {
iapSessionRefreshWindow = window . open ( "/?gcp-iap-mode=DO_SESSION_REFRESH" );
window . setTimeout ( checkSessionRefresh , 500 );
}
return false ;
}
function checkSessionRefresh () {
if ( iapSessionRefreshWindow != null && ! iapSessionRefreshWindow . closed ) {
// Attempting to start a new session.
// XMLHttpRequests is used by the server to identify AJAX requests
fetch ( '/favicon.ico' , {
method : "GET" ,
credentials : 'include' ,
headers : {
'X-Requested-With' : 'XMLHttpRequest'
}
. then (( response ) = > {
// Checking if browser has a session for the requested app
if ( response . status === 401 ) {
// No new session detected. Try to get a session again
window . setTimeout ( checkSessionRefresh , 500 );
} else {
// Session retrieved.
iapSessionRefreshWindow . close ();
iapSessionRefreshWindow = null ;
}
})
});
} else {
iapSessionRefreshWindow = null ;
}
}
Using an iframe
If you aren't able to handle HTTP 401 programmatically, the next best solution
is to add an iframe to your application that points to the session refresher.
Using an iframe requires you to configure a custom sign-in page on the same
domain as the IAP-secured web app. Otherwise,
users will encounter cross-origin errors. For more information on sign-in page configuration, see
creating a custom sign-in page .
Example usage of an iframe:
< iframe src = "https://example.com/some/path?gcp-iap-mode=SESSION_REFRESHER" style = "width:0;height:0;border:0; border:none;" >< / iframe >
Loading the session refresher
As a last resort, you can instruct your users to
manually load the session refresher. Add guidance to your application or its
documentation directing users to open the following URL in a separate
tab:
https://example.com/some/path?gcp-iap-mode=SESSION_REFRESHER
Signing users out
To sign out a user from a IAP resource, use the query parameter
?gcp-iap-mode=GCIP_SIGNOUT . For example, in an App Engine app, the
URL looks like this:
https://example.com/some/path?gcp-iap-mode=GCIP_SIGNOUT
Users will be redirected back to the sign-in page after they're logged out.
To sign out a user from all resources and sessions, redirect them to your
authentication URL with your API key and mode=signout appended as parameters. For example:
https://auth.example.com/?apiKey= API-KEY &mode=signout
Users will remain on the page after sign-out completes. Consider implementing
the completeSignOut() callback on the AuthenticationHandler object to
provide feedback to the user that they've signed out successfully.
Switching between tenants
In some cases, a user might want to authenticate with several tenants for the
same IAP resource. For example, they might belong
to multiple tenants that grant different levels of access, and want to change to
a tenant with fewer or greater privileges.
To force the tenant selection process to restart, use
?gcp-iap-mode=CLEAR_LOGIN_COOKIE . For example, in a App Engine app,
the URL might look like this:
https:// PROJECT-ID .appspot.com/some/path?gcp-iap-mode=CLEAR_LOGIN_COOKIE
What's next
Create an authentication UI with FirebaseUI
Create a custom authentication UI
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
