---
title: "Client Libraries for Google Maps Web Services \_|\_ Places API \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/maps/documentation/places/web-service/legacy/client-library
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/maps/documentation/places/web-service/legacy/overview-legacy
source_metadata:
  url: https://developers.google.com/maps/documentation/places/web-service/legacy/client-library
  title: "Client Libraries for Google Maps Web Services \_|\_ Places API \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Google Maps Platform
Documentation
Web Services
Places API
Legacy
Send feedback
Client Libraries for Google Maps Web Services
Stay organized with collections
Save and categorize content based on your preferences.
The Java Client, Python Client, Go Client and
Node.js Client for Google Maps Services are community supported client libraries, open sourced under the
Apache 2.0 License . They are
available for download and contributions on GitHub, where you will also find installation
instructions and sample code:
Java Client for Google Maps Services
Python Client for Google Maps Services
Go Client for Google Maps Services
Node.js Client for Google Maps Services
Objective-C Client for Google Maps Services
Google API Client - Java Developer's Guide
Why use the client libraries?
The Java Client, Python Client, Go Client
and Node.js Client for Google Maps Services enable you to work with Google Maps web services on your server.
They wrap the functionality of the following APIs:
Directions API (Legacy)
Distance Matrix API (Legacy)
Elevation API
Geocoding API
Places API
Roads API
Time Zone API
In addition to the functionality provided by these APIs, the client libraries
make some common tasks a little easier.
Automatic Rate Limiting By default, requests are sent at the expected
rate limit for each web service. You can provide custom QPM limits with
new GeoApiContext().setQueryRateLimit(qpm) .
Retry on Failure The client libraries will automatically retry any
request if the API sends a 5xx error. Retries use exponential back-off,
which helps in the event of intermittent failures.
Easy Authentication The client libraries make it easy to authenticate
with your API key.
POJOs The Java libraries return native objects for each of the API
responses. The Python libraries return the structure as it is received from the API.
Asynchronous or synchronous All requests support synchronous or
asynchronous calling style.
Terms and conditions
The client libraries for the Google Maps web services are licensed under the
Apache 2.0 License .
The client libraries are wrappers for the Google Maps web services. The Google Maps
web services are governed by the Google Maps Platform Terms of Service .
Important : These libraries are not covered
by the standard Google deprecation policy or support agreement.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
