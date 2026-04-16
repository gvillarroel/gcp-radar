---
title: "Limited Use Access Tokens \_|\_ Gmail \_|\_ Google for Developers"
url: https://developers.google.com/workspace/gmail/markup/actions/limited-use-access-tokens
knowledge_key: corpus
source_id: site-docs-reference-required-10
source_type: site
entrypoint: https://developers.google.com/workspace/gmail/markup/registering-with-google
source_metadata:
  url: https://developers.google.com/workspace/gmail/markup/actions/limited-use-access-tokens
  title: "Limited Use Access Tokens \_|\_ Gmail \_|\_ Google for Developers"
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
Limited Use Access Tokens
Stay organized with collections
Save and categorize content based on your preferences.
Limited-Use Access Tokens provide protection from request spoofing and replay attacks , ensuring that the action is performed by the user the message was sent to. Protection is achieved by adding a unique token parameter to the request parameters and verifying it when the action is invoked.
The token parameter should be generated as a key that can only be used for a specific action and a specific user. Before the requested action is performed, you should check that the token is valid and matches the one you generated for the user. If the token matches then the action can be performed and the token becomes invalid for future requests.
Access tokens should be sent to the user as part of the url property of the HttpActionHandler . For instance, if your application handles approval requests at http://www.example.com/approve?requestId=123 , you should consider including an additional accessToken parameter to it and listen to requests sent to http://www.example.com/approve?requestId=123&accessToken=xyz .
The combination requestId=123 and accessToken=xyz is the one that you have to generate in advance, making sure that the accessToken cannot be deduced from the requestId . Any approval request with requestId=123 and no accessToken or with a accessToken not equal to xyz should be rejected. Once this request gets through, any future request with the same id and access token should be rejected too.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-24 UTC."],[],[]]
