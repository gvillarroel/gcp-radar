---
title: "Configure custom claims on users \_|\_ Identity Platform \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/identity-platform/docs/how-to-configure-custom-claims
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/identity-platform/docs
source_metadata:
  url: https://docs.cloud.google.com/identity-platform/docs/how-to-configure-custom-claims
  title: "Configure custom claims on users \_|\_ Identity Platform \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Identity Platform
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Configure custom claims on users
This document explains how to configure custom claims on users with
Identity Platform. Custom claims are inserted into user tokens during
authentication. Your app can use these claims to handle complex authorization
scenarios, such as restricting a user's access to a resource based on their
role.
Set up custom claims
To preserve security, set custom claims using the Admin SDK on your
server:
If you haven't already, Install the Admin SDK .
Set the custom claim you want to use. In the following example, a custom
claim is set on the user to describe that they're an administrator:
Node.js
// Set admin privilege on the user corresponding to uid.
getAuth ()
. setCustomUserClaims ( uid , { admin : true })
. then (() = > {
// The new custom claims will propagate to the user's ID token the
// next time a new one is issued.
}); custom_claims . js
Java
// Set admin privilege on the user corresponding to uid.
Map<String , Object > claims = new HashMap <> ();
claims . put ( "admin" , true );
FirebaseAuth . getInstance (). setCustomUserClaims ( uid , claims );
// The new custom claims will propagate to the user's ID token the
// next time a new one is issued. FirebaseAuthSnippets.java
Python
# Set admin privilege on the user corresponding to uid.
auth . set_custom_user_claims ( uid , { 'admin' : True })
# The new custom claims will propagate to the user's ID token the
# next time a new one is issued. index.py
Go
// Get an auth client from the firebase.App
client , err := app . Auth ( ctx )
if err != nil {
log . Fatalf ( "error getting Auth client: %v\n" , err )
}
// Set admin privilege on the user corresponding to uid.
claims := map [ string ] interface {}{ "admin" : true }
err = client . SetCustomUserClaims ( ctx , uid , claims )
if err != nil {
log . Fatalf ( "error setting custom claims %v\n" , err )
}
// The new custom claims will propagate to the user's ID token the
// next time a new one is issued. auth.go
C#
// Set admin privileges on the user corresponding to uid.
var claims = new Dictionary<string , object > ()
{
{ "admin" , true },
};
await FirebaseAuth . DefaultInstance . SetCustomUserClaimsAsync ( uid , claims );
// The new custom claims will propagate to the user's ID token the
// next time a new one is issued. FirebaseAuthSnippets.cs
Validate the custom claim the next time it's sent to your server:
Node.js
// Verify the ID token first.
getAuth ()
. verifyIdToken ( idToken )
. then (( claims ) = > {
if ( claims . admin === true ) {
// Allow access to requested admin resource.
}
}); custom_claims . js
Java
// Verify the ID token first.
FirebaseToken decoded = FirebaseAuth . getInstance (). verifyIdToken ( idToken );
if ( Boolean . TRUE . equals ( decoded . getClaims (). get ( "admin" ))) {
// Allow access to requested admin resource.
} FirebaseAuthSnippets . java
Python
# Verify the ID token first.
claims = auth . verify_id_token ( id_token )
if claims [ 'admin' ] is True :
# Allow access to requested admin resource.
pass index . py
Go
// Verify the ID token first.
token , err := client . VerifyIDToken ( ctx , idToken )
if err != nil {
log . Fatal ( err )
}
claims := token . Claims
if admin , ok := claims [ "admin" ]; ok {
if admin .( bool ) {
//Allow access to requested admin resource.
}
} auth . go
C#
// Verify the ID token first.
FirebaseToken decoded = await FirebaseAuth . DefaultInstance . VerifyIdTokenAsync ( idToken );
object isAdmin ;
if ( decoded . Claims . TryGetValue ( "admin" , out isAdmin ))
{
if (( bool ) isAdmin )
{
// Allow access to requested admin resource.
}
}
FirebaseAuthSnippets . cs
To determine what custom claims are present for a user:
Node.js
// Lookup the user associated with the specified uid.
getAuth ()
. getUser ( uid )
. then (( userRecord ) = > {
// The claims can be accessed on the user record.
console . log ( userRecord . customClaims [ 'admin' ]);
}); custom_claims . js
Java
// Lookup the user associated with the specified uid.
UserRecord user = FirebaseAuth . getInstance (). getUser ( uid );
System . out . println ( user . getCustomClaims (). get ( "admin" )); FirebaseAuthSnippets . java
Python
# Lookup the user associated with the specified uid.
user = auth . get_user ( uid )
# The claims can be accessed on the user record.
print ( user . custom_claims . get ( 'admin' )) index . py
Go
// Lookup the user associated with the specified uid.
user , err := client . GetUser ( ctx , uid )
if err != nil {
log . Fatal ( err )
}
// The claims can be accessed on the user record.
if admin , ok := user . CustomClaims [ "admin" ]; ok {
if admin .( bool ) {
log . Println ( admin )
}
} auth . go
C#
// Lookup the user associated with the specified uid.
UserRecord user = await FirebaseAuth . DefaultInstance . GetUserAsync ( uid );
Console . WriteLine ( user . CustomClaims [ "admin" ]); FirebaseAuthSnippets . cs
When setting up custom claims, keep the following in mind:
Custom claims cannot exceed 1000 bytes in size. Attempting to pass claims
larger than 1000 bytes results in an error.
Custom claims are inserted into the user JWT when the token is issued. New
claims are not available until the token is refreshed. You can refresh
a token silently by calling user.getIdToken(true) .
To maintain continuity and security, only set custom claims in a secure
server environment.
What's next
Learn more about blocking functions , which can also be used to set custom claims.
Learn more about Identity Platform custom claims in the
Admin SDK reference documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
