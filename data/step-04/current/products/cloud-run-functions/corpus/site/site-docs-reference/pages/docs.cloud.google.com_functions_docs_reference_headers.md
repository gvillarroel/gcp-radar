---
title: "Request Headers in Cloud Functions \_|\_ Cloud Run functions \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/functions/docs/reference/headers
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/functions/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/functions/docs/reference/headers
  title: "Request Headers in Cloud Functions \_|\_ Cloud Run functions \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

If you are creating a new function, see the Console Quickstart on Cloud Run.
Home
Documentation
Application hosting
Cloud Run
Cloud Run functions
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Request Headers in Cloud Functions
Note: Cloud Functions (2nd gen) is now Cloud Run functions. The information
on this page applies to using the Cloud Functions API, which is still
supported for performing operations on functions.
An incoming HTTP request includes the HTTP headers sent by the client. Use this
reference page for details about how these HTTP headers are processed in
Cloud Functions requests.
Headers removed from incoming requests
For security purposes, some headers are sanitized or amended by intermediate
proxies before they reach your function.
Headers with names that match the X-Google-* pattern are removed from
incoming requests if a client sends them. This name pattern is reserved for use
by Google.
In addition, the following headers are removed from incoming requests because
they relate to the transfer of HTTP data between the client and server:
Connection
Keep-Alive
Proxy-Authorization
TE
Trailer
Transfer-Encoding
Note: Entity headers (headers relating to the request body) are not sanitized or
checked, so functions should not rely on them. In particular, the Content-MD5
request header is sent unmodified to the function, so it might not match the
MD5 hash of the content. Also, the Content-Encoding request header is not
checked by the server, so if the client sends a gzipped request body, it will be
sent in compressed form to the application.
Headers added for your use
Cloud Functions adds the following headers to all requests:
X-Cloud-Trace-Context
A unique identifier for the request used for Cloud Trace
and Cloud Logging . For example: "65011637f09e0a5179677a7429456db7/1027871334010811884;o=1"
X-Forwarded-For
A comma-delimited list of IP addresses through which the client request has
been routed. The first IP in this list is generally the IP of the client that
created the request. The subsequent IPs provide information about proxy servers
that also handled the request before it reached the application server. For
example:
X-Forwarded-For: clientIp, proxy1Ip, proxy2Ip
X-Forwarded-Proto
Shows http or https based on the protocol the client used to connect to
your application.
The Google Cloud Load Balancer terminates all https connections, and then
forwards traffic to Cloud Functions over http . For example,
if the request is sent to:
https:// YOUR_PROJECT_ID .cloudfunctions.net/ YOUR_FUNCTION_NAME
the X-Forwarded-Proto header value is https .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
