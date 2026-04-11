---
title: "Network Security API \_|\_ Secure Web Proxy \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secure-web-proxy/docs/reference/network-security/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/secure-web-proxy/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/secure-web-proxy/docs/reference/network-security/rest
  title: "Network Security API \_|\_ Secure Web Proxy \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Secure Web Proxy
Reference
Send feedback
Network Security API
Stay organized with collections
Save and categorize content based on your preferences.
REST Resource: v1beta1.organizations.locations.operations
REST Resource: v1beta1.projects.locations
REST Resource: v1beta1.projects.locations.gatewaySecurityPolicies
REST Resource: v1beta1.projects.locations.gatewaySecurityPolicies.rules
REST Resource: v1beta1.projects.locations.operations
REST Resource: v1beta1.projects.locations.tlsInspectionPolicies
REST Resource: v1beta1.projects.locations.urlLists
REST Resource: v1alpha1.organizations.locations.operations
REST Resource: v1alpha1.projects.locations
REST Resource: v1alpha1.projects.locations.gatewaySecurityPolicies
REST Resource: v1alpha1.projects.locations.gatewaySecurityPolicies.rules
REST Resource: v1alpha1.projects.locations.operations
REST Resource: v1alpha1.projects.locations.tlsInspectionPolicies
REST Resource: v1alpha1.projects.locations.urlLists
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.gatewaySecurityPolicies
REST Resource: v1.projects.locations.gatewaySecurityPolicies.rules
REST Resource: v1.projects.locations.operations
REST Resource: v1.projects.locations.tlsInspectionPolicies
REST Resource: v1.projects.locations.urlLists
Service: networksecurity.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://networksecurity.googleapis.com/$discovery/rest?version=v1
https://networksecurity.googleapis.com/$discovery/rest?version=v1beta1
https://networksecurity.googleapis.com/$discovery/rest?version=v1alpha1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://networksecurity.googleapis.com
REST Resource: v1beta1.organizations.locations.operations
Methods
cancel
POST /v1beta1/{name=organizations/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1beta1/{name=organizations/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1beta1/{name=organizations/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1beta1/{name=organizations/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1beta1.projects.locations
Methods
get
GET /v1beta1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1beta1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1beta1.projects.locations.gatewaySecurityPolicies
Methods
create
POST /v1beta1/{parent=projects/*/locations/*}/gatewaySecurityPolicies
Creates a new GatewaySecurityPolicy in a given project and location.
delete
DELETE /v1beta1/{name=projects/*/locations/*/gatewaySecurityPolicies/*}
Deletes a single GatewaySecurityPolicy.
get
GET /v1beta1/{name=projects/*/locations/*/gatewaySecurityPolicies/*}
Gets details of a single GatewaySecurityPolicy.
list
GET /v1beta1/{parent=projects/*/locations/*}/gatewaySecurityPolicies
Lists GatewaySecurityPolicies in a given project and location.
patch
PATCH /v1beta1/{gatewaySecurityPolicy.name=projects/*/locations/*/gatewaySecurityPolicies/*}
Updates the parameters of a single GatewaySecurityPolicy.
REST Resource: v1beta1.projects.locations.gatewaySecurityPolicies.rules
Methods
create
POST /v1beta1/{parent=projects/*/locations/*/gatewaySecurityPolicies/*}/rules
Creates a new GatewaySecurityPolicy in a given project and location.
delete
DELETE /v1beta1/{name=projects/*/locations/*/gatewaySecurityPolicies/*/rules/*}
Deletes a single GatewaySecurityPolicyRule.
get
GET /v1beta1/{name=projects/*/locations/*/gatewaySecurityPolicies/*/rules/*}
Gets details of a single GatewaySecurityPolicyRule.
list
GET /v1beta1/{parent=projects/*/locations/*/gatewaySecurityPolicies/*}/rules
Lists GatewaySecurityPolicyRules in a given project and location.
patch
PATCH /v1beta1/{gatewaySecurityPolicyRule.name=projects/*/locations/*/gatewaySecurityPolicies/*/rules/*}
Updates the parameters of a single GatewaySecurityPolicyRule.
REST Resource: v1beta1.projects.locations.operations
Methods
cancel
POST /v1beta1/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1beta1/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1beta1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1beta1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1beta1.projects.locations.tlsInspectionPolicies
Methods
create
POST /v1beta1/{parent=projects/*/locations/*}/tlsInspectionPolicies
Creates a new TlsInspectionPolicy in a given project and location.
delete
DELETE /v1beta1/{name=projects/*/locations/*/tlsInspectionPolicies/*}
Deletes a single TlsInspectionPolicy.
get
GET /v1beta1/{name=projects/*/locations/*/tlsInspectionPolicies/*}
Gets details of a single TlsInspectionPolicy.
list
GET /v1beta1/{parent=projects/*/locations/*}/tlsInspectionPolicies
Lists TlsInspectionPolicies in a given project and location.
patch
PATCH /v1beta1/{tlsInspectionPolicy.name=projects/*/locations/*/tlsInspectionPolicies/*}
Updates the parameters of a single TlsInspectionPolicy.
REST Resource: v1beta1.projects.locations.urlLists
Methods
create
POST /v1beta1/{parent=projects/*/locations/*}/urlLists
Creates a new UrlList in a given project and location.
delete
DELETE /v1beta1/{name=projects/*/locations/*/urlLists/*}
Deletes a single UrlList.
get
GET /v1beta1/{name=projects/*/locations/*/urlLists/*}
Gets details of a single UrlList.
list
GET /v1beta1/{parent=projects/*/locations/*}/urlLists
Lists UrlLists in a given project and location.
patch
PATCH /v1beta1/{urlList.name=projects/*/locations/*/urlLists/*}
Updates the parameters of a single UrlList.
REST Resource: v1alpha1.organizations.locations.operations
Methods
cancel
POST /v1alpha1/{name=organizations/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1alpha1/{name=organizations/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1alpha1/{name=organizations/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1alpha1/{name=organizations/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1alpha1.projects.locations
Methods
get
GET /v1alpha1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1alpha1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1alpha1.projects.locations.gatewaySecurityPolicies
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*}/gatewaySecurityPolicies
Creates a new GatewaySecurityPolicy in a given project and location.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/gatewaySecurityPolicies/*}
Deletes a single GatewaySecurityPolicy.
get
GET /v1alpha1/{name=projects/*/locations/*/gatewaySecurityPolicies/*}
Gets details of a single GatewaySecurityPolicy.
list
GET /v1alpha1/{parent=projects/*/locations/*}/gatewaySecurityPolicies
Lists GatewaySecurityPolicies in a given project and location.
patch
PATCH /v1alpha1/{gatewaySecurityPolicy.name=projects/*/locations/*/gatewaySecurityPolicies/*}
Updates the parameters of a single GatewaySecurityPolicy.
REST Resource: v1alpha1.projects.locations.gatewaySecurityPolicies.rules
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*/gatewaySecurityPolicies/*}/rules
Creates a new GatewaySecurityPolicy in a given project and location.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/gatewaySecurityPolicies/*/rules/*}
Deletes a single GatewaySecurityPolicyRule.
get
GET /v1alpha1/{name=projects/*/locations/*/gatewaySecurityPolicies/*/rules/*}
Gets details of a single GatewaySecurityPolicyRule.
list
GET /v1alpha1/{parent=projects/*/locations/*/gatewaySecurityPolicies/*}/rules
Lists GatewaySecurityPolicyRules in a given project and location.
patch
PATCH /v1alpha1/{gatewaySecurityPolicyRule.name=projects/*/locations/*/gatewaySecurityPolicies/*/rules/*}
Updates the parameters of a single GatewaySecurityPolicyRule.
REST Resource: v1alpha1.projects.locations.operations
Methods
cancel
POST /v1alpha1/{name=projects/*/locations/*/operations/*}:cancel
Starts asynchronous cancellation on a long-running operation.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/operations/*}
Deletes a long-running operation.
get
GET /v1alpha1/{name=projects/*/locations/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1alpha1/{name=projects/*/locations/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1alpha1.projects.locations.tlsInspectionPolicies
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*}/tlsInspectionPolicies
Creates a new TlsInspectionPolicy in a given project and location.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/tlsInspectionPolicies/*}
Deletes a single TlsInspectionPolicy.
get
GET /v1alpha1/{name=projects/*/locations/*/tlsInspectionPolicies/*}
Gets details of a single TlsInspectionPolicy.
list
GET /v1alpha1/{parent=projects/*/locations/*}/tlsInspectionPolicies
Lists TlsInspectionPolicies in a given project and location.
patch
PATCH /v1alpha1/{tlsInspectionPolicy.name=projects/*/locations/*/tlsInspectionPolicies/*}
Updates the parameters of a single TlsInspectionPolicy.
REST Resource: v1alpha1.projects.locations.urlLists
Methods
create
POST /v1alpha1/{parent=projects/*/locations/*}/urlLists
Creates a new UrlList in a given project and location.
delete
DELETE /v1alpha1/{name=projects/*/locations/*/urlLists/*}
Deletes a single UrlList.
get
GET /v1alpha1/{name=projects/*/locations/*/urlLists/*}
Gets details of a single UrlList.
list
GET /v1alpha1/{parent=projects/*/locations/*}/urlLists
Lists UrlLists in a given project and location.
patch
PATCH /v1alpha1/{urlList.name=projects/*/locations/*/urlLists/*}
Updates the parameters of a single UrlList.
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.gatewaySecurityPolicies
Methods
create
POST /v1/{parent=projects/*/locations/*}/gatewaySecurityPolicies
Creates a new GatewaySecurityPolicy in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/gatewaySecurityPolicies/*}
Deletes a single GatewaySecurityPolicy.
get
GET /v1/{name=projects/*/locations/*/gatewaySecurityPolicies/*}
Gets details of a single GatewaySecurityPolicy.
list
GET /v1/{parent=projects/*/locations/*}/gatewaySecurityPolicies
Lists GatewaySecurityPolicies in a given project and location.
patch
PATCH /v1/{gatewaySecurityPolicy.name=projects/*/locations/*/gatewaySecurityPolicies/*}
Updates the parameters of a single GatewaySecurityPolicy.
REST Resource: v1.projects.locations.gatewaySecurityPolicies.rules
Methods
create
POST /v1/{parent=projects/*/locations/*/gatewaySecurityPolicies/*}/rules
Creates a new GatewaySecurityPolicy in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/gatewaySecurityPolicies/*/rules/*}
Deletes a single GatewaySecurityPolicyRule.
get
GET /v1/{name=projects/*/locations/*/gatewaySecurityPolicies/*/rules/*}
Gets details of a single GatewaySecurityPolicyRule.
list
GET /v1/{parent=projects/*/locations/*/gatewaySecurityPolicies/*}/rules
Lists GatewaySecurityPolicyRules in a given project and location.
patch
PATCH /v1/{gatewaySecurityPolicyRule.name=projects/*/locations/*/gatewaySecurityPolicies/*/rules/*}
Updates the parameters of a single GatewaySecurityPolicyRule.
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
REST Resource: v1.projects.locations.tlsInspectionPolicies
Methods
create
POST /v1/{parent=projects/*/locations/*}/tlsInspectionPolicies
Creates a new TlsInspectionPolicy in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/tlsInspectionPolicies/*}
Deletes a single TlsInspectionPolicy.
get
GET /v1/{name=projects/*/locations/*/tlsInspectionPolicies/*}
Gets details of a single TlsInspectionPolicy.
list
GET /v1/{parent=projects/*/locations/*}/tlsInspectionPolicies
Lists TlsInspectionPolicies in a given project and location.
patch
PATCH /v1/{tlsInspectionPolicy.name=projects/*/locations/*/tlsInspectionPolicies/*}
Updates the parameters of a single TlsInspectionPolicy.
REST Resource: v1.projects.locations.urlLists
Methods
create
POST /v1/{parent=projects/*/locations/*}/urlLists
Creates a new UrlList in a given project and location.
delete
DELETE /v1/{name=projects/*/locations/*/urlLists/*}
Deletes a single UrlList.
get
GET /v1/{name=projects/*/locations/*/urlLists/*}
Gets details of a single UrlList.
list
GET /v1/{parent=projects/*/locations/*}/urlLists
Lists UrlLists in a given project and location.
patch
PATCH /v1/{urlList.name=projects/*/locations/*/urlLists/*}
Updates the parameters of a single UrlList.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
