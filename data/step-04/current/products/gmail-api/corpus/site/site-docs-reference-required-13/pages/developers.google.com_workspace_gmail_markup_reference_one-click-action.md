---
title: "One Click Actions \_|\_ Gmail \_|\_ Google for Developers"
url: https://developers.google.com/workspace/gmail/markup/reference/one-click-action
knowledge_key: corpus
source_id: site-docs-reference-required-13
source_type: site
entrypoint: https://developers.google.com/workspace/gmail/markup/reference/event-reservation
source_metadata:
  url: https://developers.google.com/workspace/gmail/markup/reference/one-click-action
  title: "One Click Actions \_|\_ Gmail \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Gmail
Reference
Send feedback
One Click Actions
Stay organized with collections
Save and categorize content based on your preferences.
One-click actions allow users to perform operations directly from the inbox without having to leave Gmail. One-click actions are performed by declaring an HttpActionHandler with your service URL. For more details, refer to Handling Action Requests .
One-click actions in Gmail.
Use Cases
One Click actions currently supported in Gmail are:
ConfirmAction
SaveAction
Note: Before you start, make sure you understand how to embed schemas in emails and you are familiar with testing schemas .
Confirm Action
You may add a one-click confirm button to emails requiring users to approve, confirm and acknowledge something. Once the user clicks on the button, an http request will be issued from Google to your service, recording the confirmation. ConfirmAction can only be interacted with once .
The following declaration adds a ConfirmAction button to an email about an expense report:
JSON-LD
< scrip t t ype= "application/ld+json" >
{
"@context" : "http://schema.org" ,
"@type" : "EmailMessage" ,
"potentialAction" : {
"@type" : "ConfirmAction" ,
"name" : "Approve Expense" ,
"handler" : {
"@type" : "HttpActionHandler" ,
"url" : "https://myexpenses.com/approve?expenseId=abc123"
}
},
"description" : "Approval request for John's $10.13 expense for office supplies"
}
< /scrip t >
Microdata
< div itemscope itemtype = "http://schema.org/EmailMessage" >
< div itemprop = "potentialAction" itemscope itemtype = "http://schema.org/ConfirmAction" >
< meta itemprop = "name" content = "Approve Expense" / >
< div itemprop = "handler" itemscope itemtype = "http://schema.org/HttpActionHandler" >
< link itemprop = "url" href = "https://myexpenses.com/approve?expenseId=abc123" / >
< / div >
< / div >
< meta itemprop = "description" content = "Approval request for John's $10.13 expense for office supplies" / >
< / div >
Save Action
SaveAction can be used to describe interactions like saving a coupon or adding songs to the listen queue. SaveAction can only be interacted with once .
The following declaration adds a SaveAction button to an email about an offer:
JSON-LD
< scrip t t ype= "application/ld+json" >
{
"@context" : "http://schema.org" ,
"@type" : "EmailMessage" ,
"potentialAction" : {
"@type" : "SaveAction" ,
"name" : "Save Offer" ,
"handler" : {
"@type" : "HttpActionHandler" ,
"url" : "https://offers-everywhere.com/save?offerId=xyz789"
}
},
"description" : "$5 meal at Joe's Diner"
}
< /scrip t >
Microdata
< div itemscope itemtype = "http://schema.org/EmailMessage" >
< div itemprop = "potentialAction" itemscope itemtype = "http://schema.org/SaveAction" >
< meta itemprop = "name" content = "Save Offer" / >
< div itemprop = "handler" itemscope itemtype = "http://schema.org/HttpActionHandler" >
< link itemprop = "url" href = "https://offers-everywhere.com/save?offerId=xyz789" / >
< / div >
< / div >
< meta itemprop = "description" content = "$5 meal at Joe's Diner" / >
< / div >
Test your markup
You can validate your markup using the Email Markup Tester Tool . Paste in your markup code and click the Validate button to scan the content and receive a report on any errors present.
Specification
For properties available to these actions, refer to the documentation for the
specific types ConfirmAction and
SaveAction .
Note: Some of the schemas used by Google are still going through the standardization process of schema.org , and therefore, may change in the future. Learn More .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
