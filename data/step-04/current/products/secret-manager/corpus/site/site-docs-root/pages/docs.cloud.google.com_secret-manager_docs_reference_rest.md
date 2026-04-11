---
title: "Secret Manager API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secret-manager/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/secret-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/secret-manager/docs/reference/rest
  title: "Secret Manager API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Secret Manager
Reference
Send feedback
Secret Manager API
Stay organized with collections
Save and categorize content based on your preferences.
Stores sensitive data such as API keys, passwords, and certificates. Provides convenience while improving security.
REST Resource: v1beta1.projects.locations
REST Resource: v1beta1.projects.secrets
REST Resource: v1beta1.projects.secrets.versions
REST Resource: v1.projects.locations
REST Resource: v1.projects.locations.secrets
REST Resource: v1.projects.locations.secrets.versions
REST Resource: v1.projects.secrets
REST Resource: v1.projects.secrets.versions
Service: secretmanager.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://secretmanager.googleapis.com/$discovery/rest?version=v1
https://secretmanager.googleapis.com/$discovery/rest?version=v1beta1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://secretmanager.googleapis.com
Regional service endpoint
A regional service endpoint is a base URL that specifies the network address of an API service in a single region. A service that is available in multiple regions might have multiple regional endpoints. Select a location to see its regional service endpoint for this service. me-central2 me-west1 us-central1 us-east1 us-central2 us-west1 us-west2 us-west3 us-west4 us-east4 us-east5 us-south1 europe-west3 europe-west8 europe-west9 europe-west6
REST Resource: v1beta1.projects.locations
Methods
get
GET /v1beta1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1beta1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1beta1.projects.secrets
Methods
addVersion
POST /v1beta1/{parent=projects/*/secrets/*}:addVersion
Creates a new SecretVersion containing secret data and attaches it to an existing Secret .
create
POST /v1beta1/{parent=projects/*}/secrets
Creates a new Secret containing no SecretVersions .
delete
DELETE /v1beta1/{name=projects/*/secrets/*}
Deletes a Secret .
get
GET /v1beta1/{name=projects/*/secrets/*}
Gets metadata for a given Secret .
getIamPolicy
GET /v1beta1/{resource=projects/*/secrets/*}:getIamPolicy
Gets the access control policy for a secret.
list
GET /v1beta1/{parent=projects/*}/secrets
Lists Secrets .
patch
PATCH /v1beta1/{secret.name=projects/*/secrets/*}
Updates metadata of an existing Secret .
setIamPolicy
POST /v1beta1/{resource=projects/*/secrets/*}:setIamPolicy
Sets the access control policy on the specified secret.
testIamPermissions
POST /v1beta1/{resource=projects/*/secrets/*}:testIamPermissions
Returns permissions that a caller has for the specified secret.
REST Resource: v1beta1.projects.secrets.versions
Methods
access
GET /v1beta1/{name=projects/*/secrets/*/versions/*}:access
Accesses a SecretVersion .
destroy
POST /v1beta1/{name=projects/*/secrets/*/versions/*}:destroy
Destroys a SecretVersion .
disable
POST /v1beta1/{name=projects/*/secrets/*/versions/*}:disable
Disables a SecretVersion .
enable
POST /v1beta1/{name=projects/*/secrets/*/versions/*}:enable
Enables a SecretVersion .
get
GET /v1beta1/{name=projects/*/secrets/*/versions/*}
Gets metadata for a SecretVersion .
list
GET /v1beta1/{parent=projects/*/secrets/*}/versions
Lists SecretVersions .
REST Resource: v1.projects.locations
Methods
get
GET /v1/{name=projects/*/locations/*}
Gets information about a location.
list
GET /v1/{name=projects/*}/locations
Lists information about the supported locations for this service.
REST Resource: v1.projects.locations.secrets
Methods
addVersion
POST /v1/{parent=projects/*/locations/*/secrets/*}:addVersion
Creates a new SecretVersion containing secret data and attaches it to an existing Secret .
create
POST /v1/{parent=projects/*/locations/*}/secrets
Creates a new Secret containing no SecretVersions .
delete
DELETE /v1/{name=projects/*/locations/*/secrets/*}
Deletes a Secret .
get
GET /v1/{name=projects/*/locations/*/secrets/*}
Gets metadata for a given Secret .
getIamPolicy
GET /v1/{resource=projects/*/locations/*/secrets/*}:getIamPolicy
Gets the access control policy for a secret.
list
GET /v1/{parent=projects/*/locations/*}/secrets
Lists Secrets .
patch
PATCH /v1/{secret.name=projects/*/locations/*/secrets/*}
Updates metadata of an existing Secret .
setIamPolicy
POST /v1/{resource=projects/*/locations/*/secrets/*}:setIamPolicy
Sets the access control policy on the specified secret.
testIamPermissions
POST /v1/{resource=projects/*/locations/*/secrets/*}:testIamPermissions
Returns permissions that a caller has for the specified secret.
REST Resource: v1.projects.locations.secrets.versions
Methods
access
GET /v1/{name=projects/*/locations/*/secrets/*/versions/*}:access
Accesses a SecretVersion .
destroy
POST /v1/{name=projects/*/locations/*/secrets/*/versions/*}:destroy
Destroys a SecretVersion .
disable
POST /v1/{name=projects/*/locations/*/secrets/*/versions/*}:disable
Disables a SecretVersion .
enable
POST /v1/{name=projects/*/locations/*/secrets/*/versions/*}:enable
Enables a SecretVersion .
get
GET /v1/{name=projects/*/locations/*/secrets/*/versions/*}
Gets metadata for a SecretVersion .
list
GET /v1/{parent=projects/*/locations/*/secrets/*}/versions
Lists SecretVersions .
REST Resource: v1.projects.secrets
Methods
addVersion
POST /v1/{parent=projects/*/secrets/*}:addVersion
Creates a new SecretVersion containing secret data and attaches it to an existing Secret .
create
POST /v1/{parent=projects/*}/secrets
Creates a new Secret containing no SecretVersions .
delete
DELETE /v1/{name=projects/*/secrets/*}
Deletes a Secret .
get
GET /v1/{name=projects/*/secrets/*}
Gets metadata for a given Secret .
getIamPolicy
GET /v1/{resource=projects/*/secrets/*}:getIamPolicy
Gets the access control policy for a secret.
list
GET /v1/{parent=projects/*}/secrets
Lists Secrets .
patch
PATCH /v1/{secret.name=projects/*/secrets/*}
Updates metadata of an existing Secret .
setIamPolicy
POST /v1/{resource=projects/*/secrets/*}:setIamPolicy
Sets the access control policy on the specified secret.
testIamPermissions
POST /v1/{resource=projects/*/secrets/*}:testIamPermissions
Returns permissions that a caller has for the specified secret.
REST Resource: v1.projects.secrets.versions
Methods
access
GET /v1/{name=projects/*/secrets/*/versions/*}:access
Accesses a SecretVersion .
destroy
POST /v1/{name=projects/*/secrets/*/versions/*}:destroy
Destroys a SecretVersion .
disable
POST /v1/{name=projects/*/secrets/*/versions/*}:disable
Disables a SecretVersion .
enable
POST /v1/{name=projects/*/secrets/*/versions/*}:enable
Enables a SecretVersion .
get
GET /v1/{name=projects/*/secrets/*/versions/*}
Gets metadata for a SecretVersion .
list
GET /v1/{parent=projects/*/secrets/*}/versions
Lists SecretVersions .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
