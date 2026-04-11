---
title: "Configuring Cloud Endpoints \_|\_ Cloud Endpoints with OpenAPI \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/endpoints/docs/openapi/configure-endpoints
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/endpoints/docs/openapi/openapi-overview
source_metadata:
  url: https://docs.cloud.google.com/endpoints/docs/openapi/configure-endpoints
  title: "Configuring Cloud Endpoints \_|\_ Cloud Endpoints with OpenAPI \_|\_ Google\
    \ Cloud Documentation"
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
Configuring Cloud Endpoints
Stay organized with collections
Save and categorize content based on your preferences.
OpenAPI
| gRPC
Cloud Endpoints supports APIs that are described using version 2.0 of
the OpenAPI specification .
You describe the API surface and
configure Endpoints features such as
authentication rules or
quotas in an
OpenAPI document .
Endpoints makes special use of the following required fields in
your OpenAPI document:
host
info.title
info.version
operationId
This page provides information about how Endpoints uses the
preceding fields. With this information, you can finish preparing your OpenAPI
document for deployment .
Prerequisites
As a starting point, this page assumes that you have:
A Google Cloud project .
Basic knowledge of OpenAPI .
An OpenAPI document in the format described in the
Swagger basic structure
documentation.
host
Cloud Endpoints uses the name you configure in the host field of your
OpenAPI document as the name of your service.
The name of your API service must be unique on Google Cloud. Because
Endpoints uses DNS-compatible names to identify services, we
recommend that you use your API's domain name or subdomain name as the service
name. With this approach, the service name that appears on the Endpoints
Services page matches the name used in requests to your API.
Endpoints has the following requirements for the service name:
The maximum length of the domain name is 253 characters.
The domain name must start with a lowercase letter.
Each section in the domain name, which is delimited by dots, has the following
requirements:
Must start with a lowercase letter.
Must not end with a dash.
The remaining characters can be lowercase letters, numbers, or dashes.
The maximum length is 63 characters.
You can either register your own custom domain (such as example.com ), or
you can use a domain managed by Google.
Use a domain managed by Google
Google owns and manages the cloud.goog and the appspot.com domains.
If you want to use a domain managed by Google, you must use your
Google Cloud project ID as part of the service name. Because
Google Cloud projects have a globally unique project
ID, this requirement ensures that you have a unique service name.
The domain name that you use depends on the backend that hosts your API:
For APIs that are hosted on the App Engine flexible environment, you must
use the appspot.com domain, and the service name must be in the following
format, where YOUR_PROJECT_ID is your
Google Cloud project ID:
YOUR_PROJECT_ID .appspot.com
When you deploy your API to App Engine, a DNS entry with a name in
the format YOUR_PROJECT_ID .appspot.com is created
automatically.
For APIs that are hosted on Compute Engine, Google Kubernetes Engine, or
Kubernetes, you must use the cloud.goog domain, and the service name must
be in the following format, where YOUR_API_NAME is
the name of your API:
YOUR_API_NAME .endpoints. YOUR_PROJECT_ID .cloud.goog
To use this domain as the API's domain name, read
Configuring DNS on the cloud.goog domain .
Use a custom domain
If you don't want to use a domain managed by Google, you can use a custom domain
(for example, myapi.mycompany.com ) that you are authorized to use.
Before you deploy the API configuration, follow the steps in
Verify ownership of the domain .
info.title
The info.title field is a user-friendly name for your API. The
Endpoints > Services page in the Google Cloud console displays the
text that you configure in the info.title field. If you have more than
one API per Google Cloud project, the API name is displayed in a list when you
first open the page. You can click on the API name to open another page
that displays the API's metrics, deployment history, and other information.
info.version
The Endpoints > Services page in the Google Cloud console displays the
version number for your API. Before deploying your API configuration for the
first time:
Set the version number in the info.version field to the applicable
API version,for example, 1.0 .
Set the basePath field to the major version number, for example, /v1 .
For additional information on versioning your API, see
API lifecycle management .
operationId
Although the operationId is an optional field in the OpenAPI Specification,
Endpoints requires this field because it is used for internal
identification of the operation. The string that you use for the operationId
must be unique within your API. See the description for
operationId
in the OpenAPI Specification for guidance on naming.
What's next
Deploying the Endpoints configuration
Deploying the API backend
Configuring authentication
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
