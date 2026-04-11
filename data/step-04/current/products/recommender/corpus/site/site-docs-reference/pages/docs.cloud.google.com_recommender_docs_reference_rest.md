---
title: "Recommender API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/recommender/docs/reference/rest
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/recommender/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/recommender/docs/reference/rest
  title: "Recommender API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Recommender
Reference
Send feedback
Recommender API
Stay organized with collections
Save and categorize content based on your preferences.
REST Resource: v1beta1.billingAccounts.locations
REST Resource: v1beta1.billingAccounts.locations.insightTypes
REST Resource: v1beta1.billingAccounts.locations.insightTypes.insights
REST Resource: v1beta1.billingAccounts.locations.recommenders
REST Resource:
v1beta1.billingAccounts.locations.recommenders.recommendations
REST Resource: v1beta1.folders.locations
REST Resource: v1beta1.folders.locations.insightTypes.insights
REST Resource: v1beta1.folders.locations.recommenders.recommendations
REST Resource: v1beta1.insightTypes
REST Resource: v1beta1.organizations.locations
REST Resource: v1beta1.organizations.locations.insightTypes
REST Resource: v1beta1.organizations.locations.insightTypes.insights
REST Resource: v1beta1.organizations.locations.recommenders
REST Resource: v1beta1.organizations.locations.recommenders.recommendations
REST Resource: v1beta1.projects.locations
REST Resource: v1beta1.projects.locations.insightTypes
REST Resource: v1beta1.projects.locations.insightTypes.insights
REST Resource: v1beta1.projects.locations.recommenders
REST Resource: v1beta1.projects.locations.recommenders.recommendations
REST Resource: v1beta1.recommenders
REST Resource: v1.billingAccounts.locations.insightTypes
REST Resource: v1.billingAccounts.locations.insightTypes.insights
REST Resource: v1.billingAccounts.locations.recommenders
REST Resource: v1.billingAccounts.locations.recommenders.recommendations
REST Resource: v1.folders.locations.insightTypes.insights
REST Resource: v1.folders.locations.recommenders.recommendations
REST Resource: v1.organizations.locations.insightTypes
REST Resource: v1.organizations.locations.insightTypes.insights
REST Resource: v1.organizations.locations.recommenders
REST Resource: v1.organizations.locations.recommenders.recommendations
REST Resource: v1.projects.locations.insightTypes
REST Resource: v1.projects.locations.insightTypes.insights
REST Resource: v1.projects.locations.recommenders
REST Resource: v1.projects.locations.recommenders.recommendations
Service: recommender.googleapis.com
To call this service, we recommend that you use the Google-provided client libraries . If your application needs to use your own libraries to call this service, use the following information when you make the API requests.
Discovery document
A Discovery Document is a machine-readable specification for describing and consuming REST APIs. It is used to build client libraries, IDE plugins, and other tools that interact with Google APIs. One service may provide multiple discovery documents. This service provides the following discovery documents:
https://recommender.googleapis.com/$discovery/rest?version=v1
https://recommender.googleapis.com/$discovery/rest?version=v1beta1
Service endpoint
A service endpoint is a base URL that specifies the network address of an API service. One service might have multiple service endpoints. This service has the following service endpoint and all URIs below are relative to this service endpoint:
https://recommender.googleapis.com
REST Resource: v1beta1.billingAccounts.locations
Methods
list
GET /v1beta1/{name=billingAccounts/*}/locations
Lists locations with recommendations or insights.
REST Resource: v1beta1.billingAccounts.locations.insightTypes
Methods
getConfig
GET /v1beta1/{name=billingAccounts/*/locations/*/insightTypes/*/config}
Gets the requested InsightTypeConfig.
updateConfig
PATCH /v1beta1/{insightTypeConfig.name=billingAccounts/*/locations/*/insightTypes/*/config}
Updates an InsightTypeConfig change.
REST Resource: v1beta1.billingAccounts.locations.insightTypes.insights
Methods
get
GET /v1beta1/{name=billingAccounts/*/locations/*/insightTypes/*/insights/*}
Gets the requested insight.
list
GET /v1beta1/{parent=billingAccounts/*/locations/*/insightTypes/*}/insights
Lists insights for the specified Cloud Resource.
markAccepted
POST /v1beta1/{name=billingAccounts/*/locations/*/insightTypes/*/insights/*}:markAccepted
Marks the Insight State as Accepted.
REST Resource: v1beta1.billingAccounts.locations.recommenders
Methods
getConfig
GET /v1beta1/{name=billingAccounts/*/locations/*/recommenders/*/config}
Gets the requested Recommender Config.
updateConfig
PATCH /v1beta1/{recommenderConfig.name=billingAccounts/*/locations/*/recommenders/*/config}
Updates a Recommender Config.
REST Resource: v1beta1.billingAccounts.locations.recommenders.recommendations
Methods
get
GET /v1beta1/{name=billingAccounts/*/locations/*/recommenders/*/recommendations/*}
Gets the requested recommendation.
list
GET /v1beta1/{parent=billingAccounts/*/locations/*/recommenders/*}/recommendations
Lists recommendations for the specified Cloud Resource.
markClaimed
POST /v1beta1/{name=billingAccounts/*/locations/*/recommenders/*/recommendations/*}:markClaimed
Marks the Recommendation State as Claimed.
markDismissed
POST /v1beta1/{name=billingAccounts/*/locations/*/recommenders/*/recommendations/*}:markDismissed
Mark the Recommendation State as Dismissed.
markFailed
POST /v1beta1/{name=billingAccounts/*/locations/*/recommenders/*/recommendations/*}:markFailed
Marks the Recommendation State as Failed.
markSucceeded
POST /v1beta1/{name=billingAccounts/*/locations/*/recommenders/*/recommendations/*}:markSucceeded
Marks the Recommendation State as Succeeded.
REST Resource: v1beta1.folders.locations
Methods
list
GET /v1beta1/{name=folders/*}/locations
Lists locations with recommendations or insights.
REST Resource: v1beta1.folders.locations.insightTypes.insights
Methods
get
GET /v1beta1/{name=folders/*/locations/*/insightTypes/*/insights/*}
Gets the requested insight.
list
GET /v1beta1/{parent=folders/*/locations/*/insightTypes/*}/insights
Lists insights for the specified Cloud Resource.
markAccepted
POST /v1beta1/{name=folders/*/locations/*/insightTypes/*/insights/*}:markAccepted
Marks the Insight State as Accepted.
REST Resource: v1beta1.folders.locations.recommenders.recommendations
Methods
get
GET /v1beta1/{name=folders/*/locations/*/recommenders/*/recommendations/*}
Gets the requested recommendation.
list
GET /v1beta1/{parent=folders/*/locations/*/recommenders/*}/recommendations
Lists recommendations for the specified Cloud Resource.
markClaimed
POST /v1beta1/{name=folders/*/locations/*/recommenders/*/recommendations/*}:markClaimed
Marks the Recommendation State as Claimed.
markDismissed
POST /v1beta1/{name=folders/*/locations/*/recommenders/*/recommendations/*}:markDismissed
Mark the Recommendation State as Dismissed.
markFailed
POST /v1beta1/{name=folders/*/locations/*/recommenders/*/recommendations/*}:markFailed
Marks the Recommendation State as Failed.
markSucceeded
POST /v1beta1/{name=folders/*/locations/*/recommenders/*/recommendations/*}:markSucceeded
Marks the Recommendation State as Succeeded.
REST Resource: v1beta1.insightTypes
Methods
list
GET /v1beta1/insightTypes
Lists available InsightTypes.
REST Resource: v1beta1.organizations.locations
Methods
list
GET /v1beta1/{name=organizations/*}/locations
Lists locations with recommendations or insights.
REST Resource: v1beta1.organizations.locations.insightTypes
Methods
getConfig
GET /v1beta1/{name=organizations/*/locations/*/insightTypes/*/config}
Gets the requested InsightTypeConfig.
updateConfig
PATCH /v1beta1/{insightTypeConfig.name=organizations/*/locations/*/insightTypes/*/config}
Updates an InsightTypeConfig change.
REST Resource: v1beta1.organizations.locations.insightTypes.insights
Methods
get
GET /v1beta1/{name=organizations/*/locations/*/insightTypes/*/insights/*}
Gets the requested insight.
list
GET /v1beta1/{parent=organizations/*/locations/*/insightTypes/*}/insights
Lists insights for the specified Cloud Resource.
markAccepted
POST /v1beta1/{name=organizations/*/locations/*/insightTypes/*/insights/*}:markAccepted
Marks the Insight State as Accepted.
REST Resource: v1beta1.organizations.locations.recommenders
Methods
getConfig
GET /v1beta1/{name=organizations/*/locations/*/recommenders/*/config}
Gets the requested Recommender Config.
updateConfig
PATCH /v1beta1/{recommenderConfig.name=organizations/*/locations/*/recommenders/*/config}
Updates a Recommender Config.
REST Resource: v1beta1.organizations.locations.recommenders.recommendations
Methods
get
GET /v1beta1/{name=organizations/*/locations/*/recommenders/*/recommendations/*}
Gets the requested recommendation.
list
GET /v1beta1/{parent=organizations/*/locations/*/recommenders/*}/recommendations
Lists recommendations for the specified Cloud Resource.
markClaimed
POST /v1beta1/{name=organizations/*/locations/*/recommenders/*/recommendations/*}:markClaimed
Marks the Recommendation State as Claimed.
markDismissed
POST /v1beta1/{name=organizations/*/locations/*/recommenders/*/recommendations/*}:markDismissed
Mark the Recommendation State as Dismissed.
markFailed
POST /v1beta1/{name=organizations/*/locations/*/recommenders/*/recommendations/*}:markFailed
Marks the Recommendation State as Failed.
markSucceeded
POST /v1beta1/{name=organizations/*/locations/*/recommenders/*/recommendations/*}:markSucceeded
Marks the Recommendation State as Succeeded.
REST Resource: v1beta1.projects.locations
Methods
list
GET /v1beta1/{name=projects/*}/locations
Lists locations with recommendations or insights.
REST Resource: v1beta1.projects.locations.insightTypes
Methods
getConfig
GET /v1beta1/{name=projects/*/locations/*/insightTypes/*/config}
Gets the requested InsightTypeConfig.
updateConfig
PATCH /v1beta1/{insightTypeConfig.name=projects/*/locations/*/insightTypes/*/config}
Updates an InsightTypeConfig change.
REST Resource: v1beta1.projects.locations.insightTypes.insights
Methods
get
GET /v1beta1/{name=projects/*/locations/*/insightTypes/*/insights/*}
Gets the requested insight.
list
GET /v1beta1/{parent=projects/*/locations/*/insightTypes/*}/insights
Lists insights for the specified Cloud Resource.
markAccepted
POST /v1beta1/{name=projects/*/locations/*/insightTypes/*/insights/*}:markAccepted
Marks the Insight State as Accepted.
REST Resource: v1beta1.projects.locations.recommenders
Methods
getConfig
GET /v1beta1/{name=projects/*/locations/*/recommenders/*/config}
Gets the requested Recommender Config.
updateConfig
PATCH /v1beta1/{recommenderConfig.name=projects/*/locations/*/recommenders/*/config}
Updates a Recommender Config.
REST Resource: v1beta1.projects.locations.recommenders.recommendations
Methods
get
GET /v1beta1/{name=projects/*/locations/*/recommenders/*/recommendations/*}
Gets the requested recommendation.
list
GET /v1beta1/{parent=projects/*/locations/*/recommenders/*}/recommendations
Lists recommendations for the specified Cloud Resource.
markClaimed
POST /v1beta1/{name=projects/*/locations/*/recommenders/*/recommendations/*}:markClaimed
Marks the Recommendation State as Claimed.
markDismissed
POST /v1beta1/{name=projects/*/locations/*/recommenders/*/recommendations/*}:markDismissed
Mark the Recommendation State as Dismissed.
markFailed
POST /v1beta1/{name=projects/*/locations/*/recommenders/*/recommendations/*}:markFailed
Marks the Recommendation State as Failed.
markSucceeded
POST /v1beta1/{name=projects/*/locations/*/recommenders/*/recommendations/*}:markSucceeded
Marks the Recommendation State as Succeeded.
REST Resource: v1beta1.recommenders
Methods
list
GET /v1beta1/recommenders
Lists all available Recommenders.
REST Resource: v1.billingAccounts.locations.insightTypes
Methods
getConfig
GET /v1/{name=billingAccounts/*/locations/*/insightTypes/*/config}
Gets the requested InsightTypeConfig.
updateConfig
PATCH /v1/{insightTypeConfig.name=billingAccounts/*/locations/*/insightTypes/*/config}
Updates an InsightTypeConfig change.
REST Resource: v1.billingAccounts.locations.insightTypes.insights
Methods
get
GET /v1/{name=billingAccounts/*/locations/*/insightTypes/*/insights/*}
Gets the requested insight.
list
GET /v1/{parent=billingAccounts/*/locations/*/insightTypes/*}/insights
Lists insights for the specified Cloud Resource.
markAccepted
POST /v1/{name=billingAccounts/*/locations/*/insightTypes/*/insights/*}:markAccepted
Marks the Insight State as Accepted.
REST Resource: v1.billingAccounts.locations.recommenders
Methods
getConfig
GET /v1/{name=billingAccounts/*/locations/*/recommenders/*/config}
Gets the requested Recommender Config.
updateConfig
PATCH /v1/{recommenderConfig.name=billingAccounts/*/locations/*/recommenders/*/config}
Updates a Recommender Config.
REST Resource: v1.billingAccounts.locations.recommenders.recommendations
Methods
get
GET /v1/{name=billingAccounts/*/locations/*/recommenders/*/recommendations/*}
Gets the requested recommendation.
list
GET /v1/{parent=billingAccounts/*/locations/*/recommenders/*}/recommendations
Lists recommendations for the specified Cloud Resource.
markClaimed
POST /v1/{name=billingAccounts/*/locations/*/recommenders/*/recommendations/*}:markClaimed
Marks the Recommendation State as Claimed.
markDismissed
POST /v1/{name=billingAccounts/*/locations/*/recommenders/*/recommendations/*}:markDismissed
Mark the Recommendation State as Dismissed.
markFailed
POST /v1/{name=billingAccounts/*/locations/*/recommenders/*/recommendations/*}:markFailed
Marks the Recommendation State as Failed.
markSucceeded
POST /v1/{name=billingAccounts/*/locations/*/recommenders/*/recommendations/*}:markSucceeded
Marks the Recommendation State as Succeeded.
REST Resource: v1.folders.locations.insightTypes.insights
Methods
get
GET /v1/{name=folders/*/locations/*/insightTypes/*/insights/*}
Gets the requested insight.
list
GET /v1/{parent=folders/*/locations/*/insightTypes/*}/insights
Lists insights for the specified Cloud Resource.
markAccepted
POST /v1/{name=folders/*/locations/*/insightTypes/*/insights/*}:markAccepted
Marks the Insight State as Accepted.
REST Resource: v1.folders.locations.recommenders.recommendations
Methods
get
GET /v1/{name=folders/*/locations/*/recommenders/*/recommendations/*}
Gets the requested recommendation.
list
GET /v1/{parent=folders/*/locations/*/recommenders/*}/recommendations
Lists recommendations for the specified Cloud Resource.
markClaimed
POST /v1/{name=folders/*/locations/*/recommenders/*/recommendations/*}:markClaimed
Marks the Recommendation State as Claimed.
markDismissed
POST /v1/{name=folders/*/locations/*/recommenders/*/recommendations/*}:markDismissed
Mark the Recommendation State as Dismissed.
markFailed
POST /v1/{name=folders/*/locations/*/recommenders/*/recommendations/*}:markFailed
Marks the Recommendation State as Failed.
markSucceeded
POST /v1/{name=folders/*/locations/*/recommenders/*/recommendations/*}:markSucceeded
Marks the Recommendation State as Succeeded.
REST Resource: v1.organizations.locations.insightTypes
Methods
getConfig
GET /v1/{name=organizations/*/locations/*/insightTypes/*/config}
Gets the requested InsightTypeConfig.
updateConfig
PATCH /v1/{insightTypeConfig.name=organizations/*/locations/*/insightTypes/*/config}
Updates an InsightTypeConfig change.
REST Resource: v1.organizations.locations.insightTypes.insights
Methods
get
GET /v1/{name=organizations/*/locations/*/insightTypes/*/insights/*}
Gets the requested insight.
list
GET /v1/{parent=organizations/*/locations/*/insightTypes/*}/insights
Lists insights for the specified Cloud Resource.
markAccepted
POST /v1/{name=organizations/*/locations/*/insightTypes/*/insights/*}:markAccepted
Marks the Insight State as Accepted.
REST Resource: v1.organizations.locations.recommenders
Methods
getConfig
GET /v1/{name=organizations/*/locations/*/recommenders/*/config}
Gets the requested Recommender Config.
updateConfig
PATCH /v1/{recommenderConfig.name=organizations/*/locations/*/recommenders/*/config}
Updates a Recommender Config.
REST Resource: v1.organizations.locations.recommenders.recommendations
Methods
get
GET /v1/{name=organizations/*/locations/*/recommenders/*/recommendations/*}
Gets the requested recommendation.
list
GET /v1/{parent=organizations/*/locations/*/recommenders/*}/recommendations
Lists recommendations for the specified Cloud Resource.
markClaimed
POST /v1/{name=organizations/*/locations/*/recommenders/*/recommendations/*}:markClaimed
Marks the Recommendation State as Claimed.
markDismissed
POST /v1/{name=organizations/*/locations/*/recommenders/*/recommendations/*}:markDismissed
Mark the Recommendation State as Dismissed.
markFailed
POST /v1/{name=organizations/*/locations/*/recommenders/*/recommendations/*}:markFailed
Marks the Recommendation State as Failed.
markSucceeded
POST /v1/{name=organizations/*/locations/*/recommenders/*/recommendations/*}:markSucceeded
Marks the Recommendation State as Succeeded.
REST Resource: v1.projects.locations.insightTypes
Methods
getConfig
GET /v1/{name=projects/*/locations/*/insightTypes/*/config}
Gets the requested InsightTypeConfig.
updateConfig
PATCH /v1/{insightTypeConfig.name=projects/*/locations/*/insightTypes/*/config}
Updates an InsightTypeConfig change.
REST Resource: v1.projects.locations.insightTypes.insights
Methods
get
GET /v1/{name=projects/*/locations/*/insightTypes/*/insights/*}
Gets the requested insight.
list
GET /v1/{parent=projects/*/locations/*/insightTypes/*}/insights
Lists insights for the specified Cloud Resource.
markAccepted
POST /v1/{name=projects/*/locations/*/insightTypes/*/insights/*}:markAccepted
Marks the Insight State as Accepted.
REST Resource: v1.projects.locations.recommenders
Methods
getConfig
GET /v1/{name=projects/*/locations/*/recommenders/*/config}
Gets the requested Recommender Config.
updateConfig
PATCH /v1/{recommenderConfig.name=projects/*/locations/*/recommenders/*/config}
Updates a Recommender Config.
REST Resource: v1.projects.locations.recommenders.recommendations
Methods
get
GET /v1/{name=projects/*/locations/*/recommenders/*/recommendations/*}
Gets the requested recommendation.
list
GET /v1/{parent=projects/*/locations/*/recommenders/*}/recommendations
Lists recommendations for the specified Cloud Resource.
markClaimed
POST /v1/{name=projects/*/locations/*/recommenders/*/recommendations/*}:markClaimed
Marks the Recommendation State as Claimed.
markDismissed
POST /v1/{name=projects/*/locations/*/recommenders/*/recommendations/*}:markDismissed
Mark the Recommendation State as Dismissed.
markFailed
POST /v1/{name=projects/*/locations/*/recommenders/*/recommendations/*}:markFailed
Marks the Recommendation State as Failed.
markSucceeded
POST /v1/{name=projects/*/locations/*/recommenders/*/recommendations/*}:markSucceeded
Marks the Recommendation State as Succeeded.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
