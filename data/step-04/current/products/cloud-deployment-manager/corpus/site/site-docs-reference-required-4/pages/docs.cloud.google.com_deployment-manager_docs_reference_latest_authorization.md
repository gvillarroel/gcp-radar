---
title: "Authorizing Requests \_|\_ Cloud Deployment Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deployment-manager/docs/reference/latest/authorization
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/deployment-manager/docs/configuration/supported-resource-types
source_metadata:
  url: https://docs.cloud.google.com/deployment-manager/docs/reference/latest/authorization
  title: "Authorizing Requests \_|\_ Cloud Deployment Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Deployment Manager will reach end of support on March 31, 2026 . If you currently use Deployment Manager, please migrate to Infrastructure Manager or an alternative deployment technology by March 31, 2026 to ensure your services continue without interruption.
For more information on the deprecation and shutdown, see Deployment Manager deprecation .
Home
Documentation
Infrastructure as code
Cloud Deployment Manager
Reference
Send feedback
Authorizing Requests
Stay organized with collections
Save and categorize content based on your preferences.
About authorization protocols
Your application must use OAuth 2.0 to authorize requests. No other authorization protocols are supported. If your application uses Sign In With Google , some aspects of authorization are handled for you.
Authorizing requests with OAuth 2.0
The details of the authorization process, or "flow," for OAuth 2.0 vary somewhat depending on what kind of application you're writing. The following general process applies to all application types:
When you create your application, you register it using the Google Cloud console . Google then provides information you'll need later, such as a client ID and a
client secret.
Activate the Google Cloud Deployment Manager V2 API in the Google Cloud console. (If the API isn't listed in the Google Cloud console, then skip this step.)
When your application needs access to user data, it asks Google for a particular scope of access.
Google displays a consent screen to the user, asking them to authorize your application to request some of their data.
If the user approves, then Google gives your application a short-lived access token .
Your application requests user data, attaching the access token to the request.
If Google determines that your request and the token are valid, it returns the requested data.
Some flows include additional steps, such as using refresh tokens to acquire new access tokens. For detailed information about flows for various types of applications, see Google's OAuth 2.0 documentation .
Here's the OAuth 2.0 scope information for the Google Cloud Deployment Manager V2 API:
Scope
Meaning
https://www.googleapis.com/auth/cloud-platform
View, manage, and create Google Cloud Platform resources.
https://www.googleapis.com/auth/cloud-platform.read-only
View and get Google Cloud Platform resources.
To request access using OAuth 2.0, your application needs the scope information, as well as
information that Google supplies when you register your application (such as the client ID and the
client secret).
Tip: The Google APIs client libraries can handle some of the authorization process for you. They are available for a variety of programming languages; check the page with libraries and samples for more details.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
