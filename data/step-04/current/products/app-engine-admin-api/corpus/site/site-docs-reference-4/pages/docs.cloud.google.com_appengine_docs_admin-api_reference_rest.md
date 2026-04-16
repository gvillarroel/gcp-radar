---
title: "App Engine Admin API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest
knowledge_key: corpus
source_id: site-docs-reference-4
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/admin-api/reference/rest
  title: "App Engine Admin API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
App Engine
Admin API
Reference
Send feedback
App Engine Admin API
Stay organized with collections
Save and categorize content based on your preferences.
Provisions and manages developers' App Engine applications.
REST Resource: v1.apps
REST Resource: v1.apps.authorizedCertificates
REST Resource: v1.apps.authorizedDomains
REST Resource: v1.apps.domainMappings
REST Resource: v1.apps.firewall.ingressRules
REST Resource: v1.apps.locations
REST Resource: v1.apps.operations
REST Resource: v1.apps.services
REST Resource: v1.apps.services.versions
REST Resource: v1.apps.services.versions.instances
REST Resource: v1beta.apps
REST Resource: v1beta.apps.authorizedCertificates
REST Resource: v1beta.apps.authorizedDomains
REST Resource: v1beta.apps.domainMappings
REST Resource: v1beta.apps.firewall.ingressRules
REST Resource: v1beta.apps.locations
REST Resource: v1beta.apps.operations
REST Resource: v1beta.apps.services
REST Resource: v1beta.apps.services.versions
REST Resource: v1beta.apps.services.versions.instances
Service: appengine.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://appengine.googleapis.com/$discovery/rest?version=v1
https://appengine.googleapis.com/$discovery/rest?version=v1beta
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://appengine.googleapis.com
REST Resource: v1.apps
Methods
create
POST /v1/apps
Creates an App Engine application for a Google Cloud Platform project.
get
GET /v1/{name=apps/*}
Gets information about an application.
patch
PATCH /v1/{name=apps/*}
Updates the specified Application resource.
repair
POST /v1/{name=apps/*}:repair
Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account.
REST Resource: v1.apps.authorizedCertificates
Methods
create
POST /v1/{parent=apps/*}/authorizedCertificates
Uploads the specified SSL certificate.
delete
DELETE /v1/{name=apps/*/authorizedCertificates/*}
Deletes the specified SSL certificate.
get
GET /v1/{name=apps/*/authorizedCertificates/*}
Gets the specified SSL certificate.
list
GET /v1/{parent=apps/*}/authorizedCertificates
Lists all SSL certificates the user is authorized to administer.
patch
PATCH /v1/{name=apps/*/authorizedCertificates/*}
Updates the specified SSL certificate.
REST Resource: v1.apps.authorizedDomains
Methods
list
GET /v1/{parent=apps/*}/authorizedDomains
Lists all domains the user is authorized to administer.
REST Resource: v1.apps.domainMappings
Methods
create
POST /v1/{parent=apps/*}/domainMappings
Maps a domain to an application.
delete
DELETE /v1/{name=apps/*/domainMappings/*}
Deletes the specified domain mapping.
get
GET /v1/{name=apps/*/domainMappings/*}
Gets the specified domain mapping.
list
GET /v1/{parent=apps/*}/domainMappings
Lists the domain mappings on an application.
patch
PATCH /v1/{name=apps/*/domainMappings/*}
Updates the specified domain mapping.
REST Resource: v1.apps.firewall.ingressRules
Methods
batchUpdate
POST /v1/{name=apps/*/firewall/ingressRules}:batchUpdate
Replaces the entire firewall ruleset in one bulk operation.
create
POST /v1/{parent=apps/*}/firewall/ingressRules
Creates a firewall rule for the application.
delete
DELETE /v1/{name=apps/*/firewall/ingressRules/*}
Deletes the specified firewall rule.
get
GET /v1/{name=apps/*/firewall/ingressRules/*}
Gets the specified firewall rule.
list
GET /v1/{parent=apps/*}/firewall/ingressRules
Lists the firewall rules of an application.
patch
PATCH /v1/{name=apps/*/firewall/ingressRules/*}
Updates the specified firewall rule.
REST Resource: v1.apps.locations
Methods
get
GET /v1/{name=apps/*/locations/*}
Gets information about a location.
list
GET /v1/{name=apps/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.apps.operations
Methods
get
GET /v1/{name=apps/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1/{name=apps/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1.apps.services
Methods
delete
DELETE /v1/{name=apps/*/services/*}
Deletes the specified service and all enclosed versions.
get
GET /v1/{name=apps/*/services/*}
Gets the current configuration of the specified service.
list
GET /v1/{parent=apps/*}/services
Lists all the services in the application.
patch
PATCH /v1/{name=apps/*/services/*}
Updates the configuration of the specified service.
REST Resource: v1.apps.services.versions
Methods
create
POST /v1/{parent=apps/*/services/*}/versions
Deploys code and resource files to a new version.
delete
DELETE /v1/{name=apps/*/services/*/versions/*}
Deletes an existing Version resource.
get
GET /v1/{name=apps/*/services/*/versions/*}
Gets the specified Version resource.
list
GET /v1/{parent=apps/*/services/*}/versions
Lists the versions of a service.
patch
PATCH /v1/{name=apps/*/services/*/versions/*}
Updates the specified Version resource.
REST Resource: v1.apps.services.versions.instances
Methods
debug
POST /v1/{name=apps/*/services/*/versions/*/instances/*}:debug
Enables debugging on a VM instance.
delete
DELETE /v1/{name=apps/*/services/*/versions/*/instances/*}
Stops a running instance.
get
GET /v1/{name=apps/*/services/*/versions/*/instances/*}
Gets instance information.
list
GET /v1/{parent=apps/*/services/*/versions/*}/instances
Lists the instances of a version.
REST Resource: v1beta.apps
Methods
create
POST /v1beta/apps
Creates an App Engine application for a Google Cloud Platform project.
get
GET /v1beta/{name=apps/*}
Gets information about an application.
patch
PATCH /v1beta/{name=apps/*}
Updates the specified Application resource.
repair
POST /v1beta/{name=apps/*}:repair
Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account.
REST Resource: v1beta.apps.authorizedCertificates
Methods
create
POST /v1beta/{parent=apps/*}/authorizedCertificates
Uploads the specified SSL certificate.
delete
DELETE /v1beta/{name=apps/*/authorizedCertificates/*}
Deletes the specified SSL certificate.
get
GET /v1beta/{name=apps/*/authorizedCertificates/*}
Gets the specified SSL certificate.
list
GET /v1beta/{parent=apps/*}/authorizedCertificates
Lists all SSL certificates the user is authorized to administer.
patch
PATCH /v1beta/{name=apps/*/authorizedCertificates/*}
Updates the specified SSL certificate.
REST Resource: v1beta.apps.authorizedDomains
Methods
list
GET /v1beta/{parent=apps/*}/authorizedDomains
Lists all domains the user is authorized to administer.
REST Resource: v1beta.apps.domainMappings
Methods
create
POST /v1beta/{parent=apps/*}/domainMappings
Maps a domain to an application.
delete
DELETE /v1beta/{name=apps/*/domainMappings/*}
Deletes the specified domain mapping.
get
GET /v1beta/{name=apps/*/domainMappings/*}
Gets the specified domain mapping.
list
GET /v1beta/{parent=apps/*}/domainMappings
Lists the domain mappings on an application.
patch
PATCH /v1beta/{name=apps/*/domainMappings/*}
Updates the specified domain mapping.
REST Resource: v1beta.apps.firewall.ingressRules
Methods
batchUpdate
POST /v1beta/{name=apps/*/firewall/ingressRules}:batchUpdate
Replaces the entire firewall ruleset in one bulk operation.
create
POST /v1beta/{parent=apps/*}/firewall/ingressRules
Creates a firewall rule for the application.
delete
DELETE /v1beta/{name=apps/*/firewall/ingressRules/*}
Deletes the specified firewall rule.
get
GET /v1beta/{name=apps/*/firewall/ingressRules/*}
Gets the specified firewall rule.
list
GET /v1beta/{parent=apps/*}/firewall/ingressRules
Lists the firewall rules of an application.
patch
PATCH /v1beta/{name=apps/*/firewall/ingressRules/*}
Updates the specified firewall rule.
REST Resource: v1beta.apps.locations
Methods
get
GET /v1beta/{name=apps/*/locations/*}
Gets information about a location.
list
GET /v1beta/{name=apps/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1beta.apps.operations
Methods
get
GET /v1beta/{name=apps/*/operations/*}
Gets the latest state of a long-running operation.
list
GET /v1beta/{name=apps/*}/operations
Lists operations that match the specified filter in the request.
REST Resource: v1beta.apps.services
Methods
delete
DELETE /v1beta/{name=apps/*/services/*}
Deletes the specified service and all enclosed versions.
get
GET /v1beta/{name=apps/*/services/*}
Gets the current configuration of the specified service.
list
GET /v1beta/{parent=apps/*}/services
Lists all the services in the application.
patch
PATCH /v1beta/{name=apps/*/services/*}
Updates the configuration of the specified service.
REST Resource: v1beta.apps.services.versions
Methods
create
POST /v1beta/{parent=apps/*/services/*}/versions
Deploys code and resource files to a new version.
delete
DELETE /v1beta/{name=apps/*/services/*/versions/*}
Deletes an existing Version resource.
get
GET /v1beta/{name=apps/*/services/*/versions/*}
Gets the specified Version resource.
list
GET /v1beta/{parent=apps/*/services/*}/versions
Lists the versions of a service.
patch
PATCH /v1beta/{name=apps/*/services/*/versions/*}
Updates the specified Version resource.
REST Resource: v1beta.apps.services.versions.instances
Methods
debug
POST /v1beta/{name=apps/*/services/*/versions/*/instances/*}:debug
Enables debugging on a VM instance.
delete
DELETE /v1beta/{name=apps/*/services/*/versions/*/instances/*}
Stops a running instance.
get
GET /v1beta/{name=apps/*/services/*/versions/*/instances/*}
Gets instance information.
list
GET /v1beta/{parent=apps/*/services/*/versions/*}/instances
Lists the instances of a version.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-16 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-16 UTC."],[],[]]
