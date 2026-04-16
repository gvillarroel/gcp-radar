---
title: "License Manager API \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/licensemanager/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/licensemanager/rest
  title: "License Manager API \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
APIs & Reference
Send feedback
License Manager API
Stay organized with collections
Save and categorize content based on your preferences.
License Manager is a tool to manage and track third-party licenses on Google Cloud.
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.configurations
REST Resource: v1.projects.locations.instances
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.products
Service: licensemanager.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery document:
https://licensemanager.googleapis.com/$discovery/rest?version=v1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://licensemanager.googleapis.com
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.configurations
Methods
aggregateUsage
GET /v1/{name=projects/*/locations/*/configurations/*}:aggregateUsage
Aggregates Usage per Instance for a Configuration.
create
POST /v1/{parent=projects/*/locations/*}/configurations
Creates a new Configuration in a given project and location.
deactivate
POST /v1/{name=projects/*/locations/*/configurations/*}:deactivate
Deactivates the given configuration.
delete
DELETE /v1/{name=projects/*/locations/*/configurations/*}
Deletes a single Configuration.
get
GET /v1/{name=projects/*/locations/*/configurations/*}
Gets details of a single Configuration.
list
GET /v1/{parent=projects/*/locations/*}/configurations
Lists Configurations in a given project and location.
patch
PATCH /v1/{configuration.name=projects/*/locations/*/configurations/*}
Updates the parameters of a single Configuration.
queryLicenseUsage
GET /v1/{name=projects/*/locations/*/configurations/*}:queryLicenseUsage
License Usage information for a Configuration.
reactivate
POST /v1/{name=projects/*/locations/*/configurations/*}:reactivate
Reactivates the given configuration.
REST Resource: v1.projects.locations.instances
Methods
get
GET /v1/{name=projects/*/locations/*/instances/*}
Gets details of a single Instance.
list
GET /v1/{parent=projects/*/locations/*}/instances
Lists Instances in a given project and location.
REST Resource: v1.projects.locations.operations
Methods
cancel
POST /v1/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1.projects.locations.products
Methods
get
GET /v1/{name=projects/*/locations/*/products/*}
Gets details of a single Product.
list
GET /v1/{parent=projects/*/locations/*}/products
Lists Products in a given project and location.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-28 UTC."],[],[]]
