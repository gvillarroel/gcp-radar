---
title: "Authorize requests \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/postgres/admin-api/how-tos/authorizing
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/postgres/admin-api/how-tos/authorizing
  title: "Authorize requests \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
PostgreSQL
Reference
Send feedback
Authorize requests
Stay organized with collections
Save and categorize content based on your preferences.
Your application needs to identify itself every time it sends a request to
the Cloud SQL Admin API, by including an API key with each
request.
Acquiring and using an API key
To acquire an API key:
Open the Credentials page in the Google Cloud console.
This API supports two types of credentials.
Create whichever credentials are appropriate for your project:
OAuth 2.0: Whenever your application requests private user
data, it must send an OAuth 2.0 token along with the request. Your
application first sends a client ID and, possibly, a client secret to
obtain a token. You can generate OAuth 2.0 credentials for web
applications, service accounts, or installed applications.
Note: Since this API doesn't have any methods
that require OAuth 2.0 authorization, you might only need to obtain
API keys , which are described
below. However, if your application calls other APIs that require user
authorization, then you still need OAuth 2.0 credentials.
For more information, see the OAuth 2.0 documentation .
API keys:
A request that does not provide an OAuth 2.0 token must send an API
key.
The key identifies your project and provides API access, quota, and
reports.
The API supports several types of restrictions on API keys. If the API key that you
need doesn't already exist, then create an API key in the Console by
clicking Create credentials
> API key . You can restrict the key before using it
in production by clicking Restrict key and selecting one of the
Restrictions .
To keep your API keys secure, follow the best practices for
securely using API keys .
After you have an API key, your application can append the query parameter
key= yourAPIKey to all request URLs.
The API key is safe for embedding in URLs; it doesn't need any encoding.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
