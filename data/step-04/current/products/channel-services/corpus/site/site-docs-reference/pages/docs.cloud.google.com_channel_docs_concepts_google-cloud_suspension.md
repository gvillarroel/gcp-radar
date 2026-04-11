---
title: "Google Cloud suspensions overview \_|\_ Channel Services \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/channel/docs/concepts/google-cloud/suspension
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/channel/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/channel/docs/concepts/google-cloud/suspension
  title: "Google Cloud suspensions overview \_|\_ Channel Services \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Channel Services
Guides
Send feedback
Google Cloud suspensions overview
Stay organized with collections
Save and categorize content based on your preferences.
You can use either the Google Cloud console or the Cloud Channel API
to issue suspensions for Google Cloud (formerly Google Cloud Platform) entitlements.
For example, you can suspend a customer's entitlement for deliquency.
In rare cases, Google may issue suspensions due to potential violations of the
Google Cloud terms of service .
Billing administrators
on the sub billing account will receive an email informing them of the suspension
along with details on why their account was suspended. You define the terms of
use for a customer and are responsible for providing an acceptable explanation
for the suspension. Your customers must work with you to remove the
suspension.
Understanding suspended accounts
You can suspend a customer's entitlements using the Google Cloud console. To do
so, select the resource you want to suspend and click Suspend . If you want
to use the Cloud Channel API, use the
account.customers.entitlements.suspend method .
You need to provide the entitlement's resource name to suspend its use for the
customer.
When you suspend a sub billing account, you limit a customer's options
without completely interrupting their active services.
While suspended, the customer:
Can't create new virtual machines on Google Cloud projects associated with the
suspended subaccount.
Can access and modify existing Google Cloud projects.
Can access and modify existing virtual machines on an active project.
Understanding reactivated accounts
When you're ready to remove a suspension, you can either reactivate the
entitlement through the Google Cloud console, or use the Cloud Channel API's
accounts.customers.entitlements.activate method .
Like suspensions, you need to provide the entitlement's resource name to
activate it.
Lifting a suspension will remove any existing limitations on owned
Google Cloud projects.
If you can't remove the suspension, or have trouble doing so,
contact Customer Support
for help.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
