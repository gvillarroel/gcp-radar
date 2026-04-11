---
title: "Class ListBillingAccountsRequest (1.18.0) \_|\_ Python client libraries \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.types.ListBillingAccountsRequest
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/cloudbilling/latest/google.cloud.billing_v1.types.ListBillingAccountsRequest
  title: "Class ListBillingAccountsRequest (1.18.0) \_|\_ Python client libraries\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Class ListBillingAccountsRequest (1.18.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
1.18.0 (latest)
1.17.0
1.16.3
1.15.0
1.14.1
1.13.6
1.12.1
1.11.5
1.10.1
1.9.1
1.8.0
1.7.3
1.6.1
1.5.1
1.4.1
1.3.4
1.2.1
1.1.1
1.0.0
0.1.0
ListBillingAccountsRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Request message for ListBillingAccounts .
Attributes
Name
Description
page_size
int
Requested page size. The maximum page size is
100; this is also the default.
page_token
str
A token identifying a page of results to return. This should
be a next_page_token value returned from a previous
ListBillingAccounts call. If unspecified, the first page
of results is returned.
filter
str
Options for how to filter the returned billing accounts.
This only supports filtering for
subaccounts __
under a single provided parent billing account. (for
example,
master_billing_account=billingAccounts/012345-678901-ABCDEF ).
Boolean algebra and other fields are not currently
supported.
parent
str
Optional. The parent resource to list billing accounts from.
Format:
- organizations/{organization_id} , for example,
organizations/12345678
- billingAccounts/{billing_account_id} , for example,
billingAccounts/012345-567890-ABCDEF
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
