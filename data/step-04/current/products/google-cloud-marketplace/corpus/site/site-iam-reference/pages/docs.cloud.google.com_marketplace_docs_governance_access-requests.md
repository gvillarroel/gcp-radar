---
title: "Manage requests to add products to your private marketplace \_|\_ Google Cloud\
  \ Marketplace \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/marketplace/docs/governance/access-requests
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/marketplace/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/marketplace/docs/governance/access-requests
  title: "Manage requests to add products to your private marketplace \_|\_ Google\
    \ Cloud Marketplace \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Google Cloud Marketplace
Guides
Send feedback
Manage requests to add products to your private marketplace
Stay organized with collections
Save and categorize content based on your preferences.
Your users can request to add Cloud Marketplace products to your
organization's private marketplace, if the following are true:
You're using
Google Cloud Private Marketplace to manage
which products your users can view and use.
You've
turned on Product Requests .
These requests are called access requests . When a user creates an access
request, your organization's Commerce Organization Governance Administrators get
a notification, and they can review and authorize the request.
When you approve an access request, you must also select which collection to add
the product to.
When you approve or deny a request, Cloud Marketplace sends an email to the
requester with the status of their request and any message that you included.
This email doesn't include your contact information and can't be used to message
you, and replies to the notification aren't forwarded to administrators.
Multiple people can request the same product. If you see multiple requests for
the same product in your Pending tab, you must approve or deny each request
to move it to the corresponding relevant tab.
Review an access request
Accounts with the required roles for an organization can view
all of that organization's access requests, and can complete or deny requests.
Access requests are associated with both a user and a project, so you can
receive multiple requests for the same product.
To review a request, complete the following steps:
Open the access request. You can access this from the email, or view all
access requests by opening the Marketplace governance page and then
clicking Manage access requests .
Review the details of the access request.
Approve an access request
To approve an access request, follow the preceding steps to
review the request, and then complete the following additional steps:
Click Accept request .
From the drop-down, select which Google Cloud Private Marketplace collection you want to add the
product to.
In the access request, enter a message to the requester, including any
information that they need to access the product or to contact an
administrator.
Click Send and finish .
Deny an access request
To deny an access request, follow the preceding steps to
review the request, and then complete the following additional steps:
Click Deny request .
In the access request, enter a message to the requester.
Click Deny .
After you've denied an access request, users can request access to the product
again.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
