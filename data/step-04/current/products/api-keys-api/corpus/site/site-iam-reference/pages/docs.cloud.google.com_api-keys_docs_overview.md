---
title: "API Keys Overview \_|\_ API Keys API Documentation \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/api-keys/docs/overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/api-keys/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/api-keys/docs/overview
  title: "API Keys Overview \_|\_ API Keys API Documentation \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
API Keys API Documentation
Guides
Send feedback
API Keys Overview
Stay organized with collections
Save and categorize content based on your preferences.
An API key is a simple encrypted string that you can use when calling
Google Cloud APIs. A typical use of an API key is to pass the key into a REST
API call as a query parameter with the following format:
http://example-library.googleapis.com/v1/publishers/mypublisher/books?key= API_KEY
API keys are useful for accessing public data anonymously, and are used to
associate API requests with the consumer Google Cloud project for
quotas and billing .
API Keys provides you a programmatic interface to create and manage API
keys for your project. It provides you more control over API keys
than the API key-related tasks that you can do
in the Google Cloud console .
To learn more about authenticating to Google Cloud APIs and to determine
the best authentication strategy for common scenarios, see
Authentication overview .
To learn more about using
API keys for Google Maps Platform APIs and SDKs, see the Google Maps Platform documentation .
Securing an API key
When you use API keys in your applications, ensure that they are kept secure
during both storage and transmission.
Publicly exposing your credentials can result in your account being compromised,
which could lead to unexpected charges on your account.
To help keep your API keys secure, follow these best practices:
Do not embed API keys directly in code. API keys that are embedded in code
can be accidentally exposed to the public. For example, you may forget to
remove the keys from code that you share. Instead of embedding your API keys
in your applications, store them in environment variables or in files outside
of your application's source tree.
Add restrictions on the API key .
By adding restrictions, you can reduce the impact of a compromised API key.
Delete unneeded API keys to minimize exposure to attacks.
Rotate your API keys periodically. To rotate your API keys, call
the CreateKey method . After
the replacement keys are created, update your applications to use the
newly-generated keys and delete the old keys.
Review your code before publicly releasing it. Ensure that your code does not
contain API keys or any other private information before you make your code
publicly available.
What's next
Why and when to use API keys
Get started using the API Keys
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
