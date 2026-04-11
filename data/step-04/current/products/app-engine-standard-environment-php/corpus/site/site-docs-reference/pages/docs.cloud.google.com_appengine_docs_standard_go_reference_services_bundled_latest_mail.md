---
title: "Package google.golang.org/appengine/v2/mail (v2.0.6) \_|\_ App Engine standard\
  \ environment \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/mail
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/apis
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/mail
  title: "Package google.golang.org/appengine/v2/mail (v2.0.6) \_|\_ App Engine standard\
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
Package google.golang.org/appengine/v2/mail (v2.0.6)
Stay organized with collections
Save and categorize content based on your preferences.
Note: To get more information about this package, such as access to older versions, view this package on pkg.go.dev .
Package mail provides the means of sending email from an
App Engine application.
Example:
msg := & mail . Message {
Sender : "romeo@montague.com" ,
To : [] string { "Juliet <juliet@capulet.org>" },
Subject : "See you tonight" ,
Body : "Don't forget our plans. Hark, 'til later." ,
}
if err := mail . Send ( c , msg ); err != nil {
log . Errorf ( c , "Alas, my user, the email failed to sendeth: %v" , err )
}
Functions
func Send
func Send ( c context . Context , msg * Message ) error
Send sends an email message.
func SendToAdmins
func SendToAdmins ( c context . Context , msg * Message ) error
SendToAdmins sends an email message to the application's administrators.
Attachment
type Attachment struct {
// Name must be set to a valid file name.
Name string
Data [] byte
ContentID string
}
An Attachment represents an email attachment.
Message
type Message struct {
// Sender must be set, and must be either an application admin
// or the currently signed-in user.
Sender string
ReplyTo string // may be empty
// At least one of these slices must have a non-zero length,
// except when calling SendToAdmins.
To , Cc , Bcc [] string
Subject string
// At least one of Body or HTMLBody must be non-empty.
Body string
HTMLBody string
Attachments [] Attachment
// Extra mail headers.
// See https://cloud.google.com/appengine/docs/standard/go/mail/
// for permissible headers.
Headers mail . Header
}
A Message represents an email message.
Addresses may be of any form permitted by RFC 822.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-30 UTC."],[],[]]
