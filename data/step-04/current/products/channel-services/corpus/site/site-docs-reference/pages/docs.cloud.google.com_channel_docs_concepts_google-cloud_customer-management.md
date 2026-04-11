---
title: "Create and manage your customer accounts using the Cloud Channel API \_|\_\
  \ Channel Services \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/channel/docs/concepts/google-cloud/customer-management
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/channel/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/channel/docs/concepts/google-cloud/customer-management
  title: "Create and manage your customer accounts using the Cloud Channel API \_\
    |\_ Channel Services \_|\_ Google Cloud Documentation"
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
Create and manage your customer accounts using the Cloud Channel API
Stay organized with collections
Save and categorize content based on your preferences.
As of January 2021, you can use the Cloud Channel API to create customers,
entitlements, and Cloud Billing subaccounts. If you currently use the
Cloud Billing API to handle these tasks, we recommend that you use the Cloud Channel API instead.
This guide introduces the basics of customer and entitlement creation
using the Cloud Channel API.
Before you begin
Complete the Cloud Channel API codelab
before you continue. This will make sure your development
environment is set up to follow code samples and other codelabs.
Summary of changes
If you currently use the Cloud Billing API
billingAccounts.create
endpoint to create a customer's Cloud Billing subaccount, you must
start using the
customers.create()
endpoint, followed by the
entitlements.create()
endpoint, to create a new Cloud Billing subaccount for a customer.
To manage IAM roles , you must use
existing Cloud Billing API endpoints.
Creating a customer
When you're ready to create a new customer with the Cloud Channel API, use the
customers.create()
endpoint. Make sure to have the following customer information before you start.
Primary domain
Organization name
Address
Postal code (if applicable)
Country code
After you create a customer, you need to keep the response's name
field secure as it is a unique identifier for your customer.
Creating an entitlement
After you create a customer, you can provision entitlements for them by
specifying an offer with the entitlements.create() and operations.get()
endpoints. The Cloud Billing subaccount's name, returned as
provisionedService.provisioningId , can be used with Cloud Billing API
and BigQuery export.
Creating an entitlement with a Google Cloud offer will also create a Cloud Billing subaccount.
For more detailed instructions on customer and entitlement creation, including
code samples in multiple languages, complete the Google Cloud
end-to-end-provisioning codelab .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
