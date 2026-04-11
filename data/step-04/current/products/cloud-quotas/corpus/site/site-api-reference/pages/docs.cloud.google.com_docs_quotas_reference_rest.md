---
title: "Cloud Quotas API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/docs/quotas/reference/rest
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/docs/quotas/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/docs/quotas/reference/rest
  title: "Cloud Quotas API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Cloud Quotas
Reference
Send feedback
Cloud Quotas API
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Quotas API provides Google Cloud service consumers with management and observability for resource usage, quotas, and restrictions of the services they consume.
REST Resource: v1beta.folders.locations.quotaAdjusterSettings
REST Resource: v1beta.folders.locations.quotaPreferences
REST Resource: v1beta.folders.locations.services.quotaInfos
REST Resource: v1beta.organizations.locations.quotaAdjusterSettings
REST Resource: v1beta.organizations.locations.quotaPreferences
REST Resource: v1beta.organizations.locations.services.quotaInfos
REST Resource: v1beta.projects.locations.quotaAdjusterSettings
REST Resource: v1beta.projects.locations.quotaPreferences
REST Resource: v1beta.projects.locations.services.quotaInfos
REST Resource: v1.folders.locations.quotaPreferences
REST Resource: v1.folders.locations.services.quotaInfos
REST Resource: v1.organizations.locations.quotaPreferences
REST Resource: v1.organizations.locations.services.quotaInfos
REST Resource: v1.projects.locations.quotaPreferences
REST Resource: v1.projects.locations.services.quotaInfos
Service: cloudquotas.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://cloudquotas.googleapis.com/$discovery/rest?version=v1
https://cloudquotas.googleapis.com/$discovery/rest?version=v1beta
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://cloudquotas.googleapis.com
REST Resource: v1beta.folders.locations.quotaAdjusterSettings
Methods
getQuotaAdjusterSettings
GET /v1beta/{name=folders/*/locations/*/quotaAdjusterSettings}
Gets QuotaAdjusterSettings for the specified folder.
updateQuotaAdjusterSettings
PATCH /v1beta/{quotaAdjusterSettings.name=folders/*/locations/*/quotaAdjusterSettings}
Updates QuotaAdjusterSettings for the specified folder.
REST Resource: v1beta.folders.locations.quotaPreferences
Methods
create
POST /v1beta/{parent=folders/*/locations/*}/quotaPreferences
Creates a new QuotaPreference that declares the desired value for a quota.
get
GET /v1beta/{name=folders/*/locations/*/quotaPreferences/*}
Gets details of a single QuotaPreference.
list
GET /v1beta/{parent=folders/*/locations/*}/quotaPreferences
Lists QuotaPreferences in a given project, folder or organization.
patch
PATCH /v1beta/{quotaPreference.name=folders/*/locations/*/quotaPreferences/*}
Updates the parameters of a single QuotaPreference.
REST Resource: v1beta.folders.locations.services.quotaInfos
Methods
get
GET /v1beta/{name=folders/*/locations/*/services/*/quotaInfos/*}
Retrieve the QuotaInfo of a quota for a project, folder or organization.
list
GET /v1beta/{parent=folders/*/locations/*/services/*}/quotaInfos
Lists QuotaInfos of all quotas for a given project, folder or organization.
REST Resource: v1beta.organizations.locations.quotaAdjusterSettings
Methods
getQuotaAdjusterSettings
GET /v1beta/{name=organizations/*/locations/*/quotaAdjusterSettings}
Gets QuotaAdjusterSettings for the specified organization.
updateQuotaAdjusterSettings
PATCH /v1beta/{quotaAdjusterSettings.name=organizations/*/locations/*/quotaAdjusterSettings}
Updates QuotaAdjusterSettings for the specified organization.
REST Resource: v1beta.organizations.locations.quotaPreferences
Methods
create
POST /v1beta/{parent=organizations/*/locations/*}/quotaPreferences
Creates a new QuotaPreference that declares the desired value for a quota.
get
GET /v1beta/{name=organizations/*/locations/*/quotaPreferences/*}
Gets details of a single QuotaPreference.
list
GET /v1beta/{parent=organizations/*/locations/*}/quotaPreferences
Lists QuotaPreferences in a given project, folder or organization.
patch
PATCH /v1beta/{quotaPreference.name=organizations/*/locations/*/quotaPreferences/*}
Updates the parameters of a single QuotaPreference.
REST Resource: v1beta.organizations.locations.services.quotaInfos
Methods
get
GET /v1beta/{name=organizations/*/locations/*/services/*/quotaInfos/*}
Retrieve the QuotaInfo of a quota for a project, folder or organization.
list
GET /v1beta/{parent=organizations/*/locations/*/services/*}/quotaInfos
Lists QuotaInfos of all quotas for a given project, folder or organization.
REST Resource: v1beta.projects.locations.quotaAdjusterSettings
Methods
getQuotaAdjusterSettings
GET /v1beta/{name=projects/*/locations/*/quotaAdjusterSettings}
Gets QuotaAdjusterSettings for the specified project.
updateQuotaAdjusterSettings
PATCH /v1beta/{quotaAdjusterSettings.name=projects/*/locations/*/quotaAdjusterSettings}
Updates QuotaAdjusterSettings for the specified project.
REST Resource: v1beta.projects.locations.quotaPreferences
Methods
create
POST /v1beta/{parent=projects/*/locations/*}/quotaPreferences
Creates a new QuotaPreference that declares the desired value for a quota.
get
GET /v1beta/{name=projects/*/locations/*/quotaPreferences/*}
Gets details of a single QuotaPreference.
list
GET /v1beta/{parent=projects/*/locations/*}/quotaPreferences
Lists QuotaPreferences in a given project, folder or organization.
patch
PATCH /v1beta/{quotaPreference.name=projects/*/locations/*/quotaPreferences/*}
Updates the parameters of a single QuotaPreference.
REST Resource: v1beta.projects.locations.services.quotaInfos
Methods
get
GET /v1beta/{name=projects/*/locations/*/services/*/quotaInfos/*}
Retrieve the QuotaInfo of a quota for a project, folder or organization.
list
GET /v1beta/{parent=projects/*/locations/*/services/*}/quotaInfos
Lists QuotaInfos of all quotas for a given project, folder or organization.
REST Resource: v1.folders.locations.quotaPreferences
Methods
create
POST /v1/{parent=folders/*/locations/*}/quotaPreferences
Creates a new QuotaPreference that declares the desired value for a quota.
get
GET /v1/{name=folders/*/locations/*/quotaPreferences/*}
Gets details of a single QuotaPreference.
list
GET /v1/{parent=folders/*/locations/*}/quotaPreferences
Lists QuotaPreferences in a given project, folder or organization.
patch
PATCH /v1/{quotaPreference.name=folders/*/locations/*/quotaPreferences/*}
Updates the parameters of a single QuotaPreference.
REST Resource: v1.folders.locations.services.quotaInfos
Methods
get
GET /v1/{name=folders/*/locations/*/services/*/quotaInfos/*}
Retrieve the QuotaInfo of a quota for a project, folder or organization.
list
GET /v1/{parent=folders/*/locations/*/services/*}/quotaInfos
Lists QuotaInfos of all quotas for a given project, folder or organization.
REST Resource: v1.organizations.locations.quotaPreferences
Methods
create
POST /v1/{parent=organizations/*/locations/*}/quotaPreferences
Creates a new QuotaPreference that declares the desired value for a quota.
get
GET /v1/{name=organizations/*/locations/*/quotaPreferences/*}
Gets details of a single QuotaPreference.
list
GET /v1/{parent=organizations/*/locations/*}/quotaPreferences
Lists QuotaPreferences in a given project, folder or organization.
patch
PATCH /v1/{quotaPreference.name=organizations/*/locations/*/quotaPreferences/*}
Updates the parameters of a single QuotaPreference.
REST Resource: v1.organizations.locations.services.quotaInfos
Methods
get
GET /v1/{name=organizations/*/locations/*/services/*/quotaInfos/*}
Retrieve the QuotaInfo of a quota for a project, folder or organization.
list
GET /v1/{parent=organizations/*/locations/*/services/*}/quotaInfos
Lists QuotaInfos of all quotas for a given project, folder or organization.
REST Resource: v1.projects.locations.quotaPreferences
Methods
create
POST /v1/{parent=projects/*/locations/*}/quotaPreferences
Creates a new QuotaPreference that declares the desired value for a quota.
get
GET /v1/{name=projects/*/locations/*/quotaPreferences/*}
Gets details of a single QuotaPreference.
list
GET /v1/{parent=projects/*/locations/*}/quotaPreferences
Lists QuotaPreferences in a given project, folder or organization.
patch
PATCH /v1/{quotaPreference.name=projects/*/locations/*/quotaPreferences/*}
Updates the parameters of a single QuotaPreference.
REST Resource: v1.projects.locations.services.quotaInfos
Methods
get
GET /v1/{name=projects/*/locations/*/services/*/quotaInfos/*}
Retrieve the QuotaInfo of a quota for a project, folder or organization.
list
GET /v1/{parent=projects/*/locations/*/services/*}/quotaInfos
Lists QuotaInfos of all quotas for a given project, folder or organization.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-01-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-30 UTC."],[],[]]
