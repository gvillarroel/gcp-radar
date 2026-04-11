---
title: "Service Health API \_|\_ Personalized Service Health \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-health/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-health/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/service-health/docs/reference/rest
  title: "Service Health API \_|\_ Personalized Service Health \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Personalized Service Health
Reference
Send feedback
Service Health API
Stay organized with collections
Save and categorize content based on your preferences.
Personalized Service Health helps you gain visibility into disruptive events impacting Google Cloud products.
REST Resource: v1beta.organizations.locations
REST Resource: v1beta.organizations.locations.organizationEvents
REST Resource: v1beta.organizations.locations.organizationImpacts
REST Resource: v1beta.projects.locations
REST Resource: v1beta.projects.locations.artifacts
REST Resource: v1beta.projects.locations.events
REST Resource: v1.organizations.locations.organizationEvents
REST Resource: v1.organizations.locations.organizationImpacts
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.events
Service: servicehealth.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://servicehealth.googleapis.com/$discovery/rest?version=v1
https://servicehealth.googleapis.com/$discovery/rest?version=v1beta
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://servicehealth.googleapis.com
REST Resource: v1beta.organizations.locations
Methods
getStatus
GET /v1beta/{name=organizations/*/locations/*/status}
Retrieves health status of Service Health using an organization resource.
REST Resource: v1beta.organizations.locations.organizationEvents
Methods
get
GET /v1beta/{name=organizations/*/locations/*/organizationEvents/*}
Retrieves a resource containing information about an event affecting an organization .
list
GET /v1beta/{parent=organizations/*/locations/*}/organizationEvents
Lists organization events under a given organization and location.
REST Resource: v1beta.organizations.locations.organizationImpacts
Methods
get
GET /v1beta/{name=organizations/*/locations/*/organizationImpacts/*}
Retrieves a resource containing information about impact to an asset under an organization affected by a service health event.
list
GET /v1beta/{parent=organizations/*/locations/*}/organizationImpacts
Lists assets impacted by organization events under a given organization and location.
REST Resource: v1beta.projects.locations
Methods
get
GET /v1beta/{name=projects/*/locations/*}
Gets information about a location.
getStatus
GET /v1beta/{name=projects/*/locations/*/status}
Retrieves health status of Service Health.
list
GET /v1beta/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1beta.projects.locations.artifacts
Methods
get
GET /v1beta/{name=projects/*/locations/*/artifacts/*}
Retrieves a resource containing information about an artifact, such as an incident report.
REST Resource: v1beta.projects.locations.events
Methods
get
GET /v1beta/{name=projects/*/locations/*/events/*}
Retrieves a resource containing information about an event.
list
GET /v1beta/{parent=projects/*/locations/*}/events
Lists events under a given project and location.
REST Resource: v1.organizations.locations.organizationEvents
Methods
get
GET /v1/{name=organizations/*/locations/*/organizationEvents/*}
Retrieves a resource containing information about an event affecting an organization .
list
GET /v1/{parent=organizations/*/locations/*}/organizationEvents
Lists organization events under a given organization and location.
REST Resource: v1.organizations.locations.organizationImpacts
Methods
get
GET /v1/{name=organizations/*/locations/*/organizationImpacts/*}
Retrieves a resource containing information about impact to an asset under an organization affected by a service health event.
list
GET /v1/{parent=organizations/*/locations/*}/organizationImpacts
Lists assets impacted by organization events under a given organization and location.
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.events
Methods
get
GET /v1/{name=projects/*/locations/*/events/*}
Retrieves a resource containing information about an event.
list
GET /v1/{parent=projects/*/locations/*}/events
Lists events under a given project and location.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-06 UTC."],[],[]]
