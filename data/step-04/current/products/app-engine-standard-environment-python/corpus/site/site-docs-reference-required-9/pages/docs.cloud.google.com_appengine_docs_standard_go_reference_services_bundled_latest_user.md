---
title: "Package google.golang.org/appengine/v2/user (v2.0.6) \_|\_ App Engine standard\
  \ environment \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/user
knowledge_key: corpus
source_id: site-docs-reference-required-9
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/legacy/standard/python/apis
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/user
  title: "Package google.golang.org/appengine/v2/user (v2.0.6) \_|\_ App Engine standard\
    \ environment \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Standard environment
Reference
Send feedback
Package google.golang.org/appengine/v2/user (v2.0.6)
Stay organized with collections
Save and categorize content based on your preferences.
Note: To get more information about this package, such as access to older versions, view this package on pkg.go.dev .
Package user provides a client for App Engine's user authentication service.
Functions
func IsAdmin
func IsAdmin ( c context . Context ) bool
IsAdmin returns true if the current user is signed in and
is currently registered as an administrator of the application.
func LoginURL
func LoginURL ( c context . Context , dest string ) ( string , error )
LoginURL returns a URL that, when visited, prompts the user to sign in,
then redirects the user to the URL specified by dest.
func LoginURLFederated
func LoginURLFederated ( c context . Context , dest , identity string ) ( string , error )
LoginURLFederated is like LoginURL but accepts a user's OpenID identifier.
func LogoutURL
func LogoutURL ( c context . Context , dest string ) ( string , error )
LogoutURL returns a URL that, when visited, signs the user out,
then redirects the user to the URL specified by dest.
func OAuthConsumerKey
func OAuthConsumerKey ( c context . Context ) ( string , error )
OAuthConsumerKey returns the OAuth consumer key provided with the current
request. This method will return an error if the OAuth request was invalid.
User
type User struct {
Email string
AuthDomain string
Admin bool
// ID is the unique permanent ID of the user.
// It is populated if the Email is associated
// with a Google account, or empty otherwise.
ID string
// ClientID is the ID of the pre-registered client so its identity can be verified.
// See https://developers.google.com/console/help/#generatingoauth2 for more information.
ClientID string
FederatedIdentity string
FederatedProvider string
}
User represents a user of the application.
func Current
func Current ( c context . Context ) * User
Current returns the currently logged-in user,
or nil if the user is not signed in.
func CurrentOAuth
func CurrentOAuth ( c context . Context , scopes string ) ( * User , error )
CurrentOAuth returns the user associated with the OAuth consumer making this
request. If the OAuth consumer did not make a valid OAuth request, or the
scopes is non-empty and the current user does not have at least one of the
scopes, this method will return an error.
func (*User) String
func ( u * User ) String () string
String returns a displayable name for the user.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-30 UTC."],[],[]]
