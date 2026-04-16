---
title: "Handle Action Requests \_|\_ Gmail \_|\_ Google for Developers"
url: https://developers.google.com/workspace/gmail/markup/actions/handling-action-requests
knowledge_key: corpus
source_id: site-docs-root-required-2
source_type: site
entrypoint: https://developers.google.com/workspace/gmail/markup/overview
source_metadata:
  url: https://developers.google.com/workspace/gmail/markup/actions/handling-action-requests
  title: "Handle Action Requests \_|\_ Gmail \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Gmail
Guides
Send feedback
Handle Action Requests
Stay organized with collections
Save and categorize content based on your preferences.
As described in Declaring Actions , when a user interacts with an In-App Action, Google sends an HTTP request to a URL declared in the action.
The following example adds a ConfirmAction button to an email about an expense report:
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
When the user clicks on the button, an HTTP request will be issued from Google to your service, recording the confirmation. Your service receives the following HTTP request from Google:
POST /approve?expenseId=abc123 HTTP / 1.1
Host : your-domain.com
Authorization : Bearer AbCdEf123456
Content-Type : application/x-www-form-urlencoded
User-Agent : Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/1.0 (KHTML, like Gecko; Gmail Actions)
confirmed = Approved
The rest of this page describes what the service at https://your-domain.com/approve?expenseId=abc123 needs to do to handle the action properly. This includes:
Verifying the request
Processing the payload
Returning a response code
Step 1: Verify the Request
The service at https://your-domain.com/approve?expenseId=abc123 is encouraged to check:
Limited Use Access Token - To protect against replay attacks.
User Agent - To make sure the request comes from Google.
Bearer Token - To guarantee the request coming from Google is intended to the service.
The User Agent for all Action requests is Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/1.0 (KHTML, like Gecko; Gmail Actions) .
If all checks pass, the service can proceed to the next step.
Step 2: Process the Action
The service should process the action as specified in the URL parameters as well as additional information collected from the user.
Additional information from the user resides in the request's body, and is encoded using the x-www-form-urlecoded encoding. The information is set in properties whose names correspond with the properties of Action. For example, ConfirmAction has the property confirmed .
Step 3: Return a Response Code
Once the service processed and recorded the action successfully, it should return a response code 200 (OK) . The following response codes can be used in error situations:
Response Code
Treatment
400 (Bad Request)
Google will fail the action.
401 (Unauthorized)
Google will fail the action.
404 (Not Found)
Google will fail the action.
408 (Request Timeout)
Google will retry again later.
In case of permanent failure, Google will tell the user that action has failed and that the user should follow alternative instructions inside the email.
Further Reading
Securing Actions
Note: Some of the schemas used by Google are still going through the standardization process of schema.org , and therefore, may change in the future. Learn More .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
