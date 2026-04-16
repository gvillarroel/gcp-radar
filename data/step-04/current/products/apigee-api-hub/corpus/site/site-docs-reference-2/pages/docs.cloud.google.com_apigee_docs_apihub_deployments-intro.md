---
title: "API deployments overview \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/apihub/release-notes
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/apihub/deployments-intro
  title: "API deployments overview \_|\_ Apigee \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Guides
Send feedback
API deployments overview
Stay organized with collections
Save and categorize content based on your preferences.
This page
applies to Apigee and Apigee hybrid .
A deployment is an API hub entity that describes where an API is hosted. It represents a specific runtime instance of an API, whether it's a traditional REST API, an agentic API using the Model Context Protocol (MCP), or any other style. For example,
a deployment could represent an Apigee API proxy, an API deployed to Google Cloud API
Gateway, or APIs deployed to other Google Cloud services or non-Google Cloud services.
You can associate an API version with multiple deployments to model scenarios such as dev,
staging, user acceptance testing (UAT), and production deployments corresponding to a
given version. You can also associate multiple versions with a single deployment in cases where multiple versions of an API (or potentially different APIs) are deployed together.
A deployment entity includes metadata such as name, display name, description, and associated
versions. The following three attributes are required to create a deployment in API hub and specify details about the deployed API:
Deployment type : Specifies the type of deployment, such as Apigee, Apigee hybrid, Apigee Edge Private Cloud, and others.
Resource URI : A URI to the deployment resource. For example, if the deployment resource is an Apigee API proxy, then this
field must specify the URI to the management user interface of the proxy.
Note: For Apigee deployment types, we recommend that the Resource URI conforms to the following format:
organizations/([^/]+)/environments/([^/]+)/apis/([^/]+)$
For example, the Resource URI for an Apigee API proxy deployed to the prod
environment of the myorg organization is
organizations/myorg/environments/prod/apis/iloveapis .
Endpoints : The endpoints on which the actual deployment of the API is listening to
requests. For example, this field could be a list of IP addresses or hostnames.
What's next
Learn how to manage deployments .
Learn how to manage versions .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
