---
title: "Test vs. Production \_|\_ Ad Manager SOAP API \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/environments
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/authentication
source_metadata:
  url: https://developers.google.com/ad-manager/api/environments
  title: "Test vs. Production \_|\_ Ad Manager SOAP API \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Looking for a REST API? The Ad Manager API (Beta) is now available.
Home
Products
Ad Manager
SOAP API
Send feedback
Test vs. Production
Stay organized with collections
Save and categorize content based on your preferences.
Test networks help you test your code by providing a completely isolated
data environment from your production Google Ad Manager account.
You should build and test code using test networks before you start using it
against your production account. If you need additional features added to your
test network, please speak to your account manager.
To create a test network, call NetworkService.makeTestNetwork .
A MakeTestNetwork example is included in each of the client libraries . You can create only one test network for
your Google account.
Important: If you create a test network using a Service Account,
you must also add an additional Administrator ( roleId -1 ) to
access the network's UI. To do so, call UserService.createUsers .
Test networks are limited in the following ways:
Test networks are limited to 10,000 objects per entity type.
Test networks cannot serve ads.
Because test networks cannot serve ads, reports will always come back
without data.
Since forecasting requires serving history, forecast service results will
be faked. See ForecastService for more
information.
Test networks are, by default, not Ad Manager 360 networks, meaning that
they do not have the premium features found in Ad Manager 360 networks.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-25 UTC."],[],["Test networks offer isolated environments for testing code without affecting production accounts. Create one test network per Google account using `NetworkService.makeTestNetwork`, referencing client library examples. Service accounts require an added Administrator via `UserService.createUsers` for UI access. Test networks have limitations: 10,000 objects per entity, no ad serving, empty reports, faked forecasts, and lack of Ad Manager 360 premium features. Use these isolated test environments prior to using your production account.\n"]]
