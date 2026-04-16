---
title: "Apps API \_|\_ Google Cloud Contact Center as a Service \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api
source_metadata:
  url: https://docs.cloud.google.com/contact-center/ccai-platform/docs/apps-api
  title: "Apps API \_|\_ Google Cloud Contact Center as a Service \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Google Cloud CCaaS
User Guides
Send feedback
Apps API
Stay organized with collections
Save and categorize content based on your preferences.
The Contact Center AI Platform (CCAI Platform) provides API endpoints to support integration with the
platform. The Apps API extends features of the channels that the platform
supports, including calls, chats and SMS. The endpoints are grouped into the
following categories:
Agent status
Bulk user management
Calls
Campaigns
Chats
Co-browse
Company Do Not Call list
Contact data
End users
Force agent logout
SMS
Wait times
Basic authentication
Requests use basic authentication. To create API credentials follow these steps:
Go to the CCAI Platform portal.
Go to Settings > Developer Settings > API Credentials .
Add a new APi credentials and provide a name.
Note: The API key that you provide can't be retrieved later. Be sure to store it
securely.
The credentials for API calls are as follows:
The subdomain is used as the {username} variable.
The token is used as the {​password} variable.
Every installation has its own subdomain. To find the subdomain, locate
the URL in your browser. It should look similar to the following:
https://customer.uc1.ccaiplatform.com
Substitute the subdomain ( customer , in this example) for the {subdomain}
variable. Substitute the remainder of the URL ( rest.of.url.com , in this
example) for the {domain} variable.
Base URL
The API uses the following base URL for all of its API requests
https://{subdomain}.{domain​}/apps/api/v1
where a mention to /calls means https://{subdomain​}.​{domain​}/apps/api/v1/calls
Rate Limits
The system limits requests to a rate of 10 request per second per customer.
Expect unrecognized JSON keys in API responses
All API updates are backward compatible. We reserve the right to introduce new
JSON keys in existing API responses at any time. We recommend handling responses
defensively by disregarding any unrecognized keys to maintain continued
functionality.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
