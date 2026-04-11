---
title: "Cloud Identity-Aware Proxy API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iap/docs/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iap/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/iap/docs/reference/rest
  title: "Cloud Identity-Aware Proxy API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Identity-Aware Proxy
Reference
Send feedback
Cloud Identity-Aware Proxy API
Stay organized with collections
Save and categorize content based on your preferences.
Controls access to cloud applications running on Google Cloud Platform.
REST Resource: v1beta1
REST Resource: v1
REST Resource: v1.projects.brands
REST Resource: v1.projects.brands.identityAwareProxyClients
REST Resource: v1.projects.iap_tunnel.locations.destGroups
Service: iap.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://iap.googleapis.com/$discovery/rest?version=v1
https://iap.googleapis.com/$discovery/rest?version=v1beta1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://iap.googleapis.com
REST Resource: v1beta1
Methods
getIamPolicy
POST /v1beta1/{resource=**}:getIamPolicy
Gets the access control policy for an Identity-Aware Proxy protected resource.
setIamPolicy
POST /v1beta1/{resource=**}:setIamPolicy
Sets the access control policy for an Identity-Aware Proxy protected resource.
testIamPermissions
POST /v1beta1/{resource=**}:testIamPermissions
Returns permissions that a caller has on the Identity-Aware Proxy protected resource.
REST Resource: v1
Methods
getIamPolicy
POST /v1/{resource=**}:getIamPolicy
Gets the access control policy for an Identity-Aware Proxy protected resource.
getIapSettings
GET /v1/{name=**}:iapSettings
Gets the IAP settings on a particular IAP protected resource.
setIamPolicy
POST /v1/{resource=**}:setIamPolicy
Sets the access control policy for an Identity-Aware Proxy protected resource.
testIamPermissions
POST /v1/{resource=**}:testIamPermissions
Returns permissions that a caller has on the Identity-Aware Proxy protected resource.
updateIapSettings
PATCH /v1/{iapSettings.name=**}:iapSettings
Updates the IAP settings on a particular IAP protected resource.
validateAttributeExpression
POST /v1/{name=**}:validateAttributeExpression
Validates that a given CEL expression conforms to IAP restrictions.
REST Resource: v1.projects.brands
Methods
create
POST /v1/{parent=projects/*}/brands
Constructs a new OAuth brand for the project if one does not exist.
get
GET /v1/{name=projects/*/brands/*}
Retrieves the OAuth brand of the project.
list
GET /v1/{parent=projects/*}/brands
Lists the existing brands for the project.
REST Resource: v1.projects.brands.identityAwareProxyClients
Methods
create
POST /v1/{parent=projects/*/brands/*}/identityAwareProxyClients
Creates an Identity Aware Proxy (IAP) OAuth client.
delete
DELETE /v1/{name=projects/*/brands/*/identityAwareProxyClients/*}
Deletes an Identity Aware Proxy (IAP) OAuth client.
get
GET /v1/{name=projects/*/brands/*/identityAwareProxyClients/*}
Retrieves an Identity Aware Proxy (IAP) OAuth client.
list
GET /v1/{parent=projects/*/brands/*}/identityAwareProxyClients
Lists the existing clients for the brand.
resetSecret
POST /v1/{name=projects/*/brands/*/identityAwareProxyClients/*}:resetSecret
Resets an Identity Aware Proxy (IAP) OAuth client secret.
REST Resource: v1.projects.iap_tunnel.locations.destGroups
Methods
create
POST /v1/{parent=projects/*/iap_tunnel/locations/*}/destGroups
Creates a new TunnelDestGroup.
delete
DELETE /v1/{name=projects/*/iap_tunnel/locations/*/destGroups/*}
Deletes a TunnelDestGroup.
get
GET /v1/{name=projects/*/iap_tunnel/locations/*/destGroups/*}
Retrieves an existing TunnelDestGroup.
list
GET /v1/{parent=projects/*/iap_tunnel/locations/*}/destGroups
Lists the existing TunnelDestGroups.
patch
PATCH /v1/{tunnelDestGroup.name=projects/*/iap_tunnel/locations/*/destGroups/*}
Updates a TunnelDestGroup.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-17 UTC."],[],[]]
