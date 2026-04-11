---
title: "Creating a Custom nginx.conf to Support CORS \_|\_ Cloud Endpoints with OpenAPI\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/endpoints/docs/openapi/custom-cors-nginx
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/endpoints/docs/openapi
source_metadata:
  url: https://docs.cloud.google.com/endpoints/docs/openapi/custom-cors-nginx
  title: "Creating a Custom nginx.conf to Support CORS \_|\_ Cloud Endpoints with\
    \ OpenAPI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Endpoints
OpenAPI
Send feedback
Creating a Custom nginx.conf to Support CORS
Stay organized with collections
Save and categorize content based on your preferences.
OpenAPI
| gRPC
As described in Adding CORS support to
ESP ,
you can configure the Extensible Service Proxy
(ESP) to support CORS.
If the ESP options don't provide the CORS support that your
application requires, you can add the CORS options to ESP's configuration file,
nginx.conf .
Adding the CORS options to nginx.conf
To add the CORS options:
Start with a nginx.conf file that contains the configuration required by
Cloud Endpoints. You can start with the sample
nginx.conf ,
or if you have already deployed ESP, you can SSH to the ESP container and
copy the nginx.conf file from the /etc/nginx/endpoints/ directory.
Add the CORS options that your application requires to nginx.conf . You can
use the CORS on NGINX example
as a starting point.
Start ESP with the --nginx_config option with the path to the custom
nginx.conf file.
What's next
Learn about ESP's startup options .
Learn how to SSH to ESP's container on GKE .
Learn about using a custom nginx.conf on GKE .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
