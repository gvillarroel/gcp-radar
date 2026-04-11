---
title: "RuntimeConfig \_|\_ Developer Connect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/developer-connect/docs/api/reference/rest/v1/RuntimeConfig
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/developer-connect/docs/api/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/developer-connect/docs/api/reference/rest/v1/RuntimeConfig
  title: "RuntimeConfig \_|\_ Developer Connect \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Developer Connect
Reference
Send feedback
RuntimeConfig
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
GKEWorkload
JSON representation
GoogleCloudRun
JSON representation
AppHubWorkload
JSON representation
AppHubService
JSON representation
State
RuntimeConfig represents the runtimes where the application is deployed.
JSON representation
{
"uri" : string ,
"state" : enum ( State ) ,
// Union field runtime can be only one of the following:
"gkeWorkload" : {
object ( GKEWorkload )
} ,
"googleCloudRun" : {
object ( GoogleCloudRun )
}
// End of list of possible types for union field runtime .
// Union field derived_from can be only one of the following:
"appHubWorkload" : {
object ( AppHubWorkload )
} ,
"appHubService" : {
object ( AppHubService )
}
// End of list of possible types for union field derived_from .
}
Fields
uri
string
Required. Immutable. The URI of the runtime configuration. For GKE, this is the cluster name. For Cloud Run, this is the service name.
state
enum ( State )
Output only. The state of the Runtime.
Union field runtime . The type of the runtime. runtime can be only one of the following:
gkeWorkload
object ( GKEWorkload )
Output only. Google Kubernetes Engine runtime.
googleCloudRun
object ( GoogleCloudRun )
Output only. Cloud Run runtime.
Union field derived_from . Where the runtime is derived from. derived_from can be only one of the following:
appHubWorkload
object ( AppHubWorkload )
Output only. App Hub Workload.
appHubService
object ( AppHubService )
Output only. App Hub Service.
GKEWorkload
GKEWorkload represents the Google Kubernetes Engine runtime.
JSON representation
{
"cluster" : string ,
"deployment" : string
}
Fields
cluster
string
Required. Immutable. The name of the GKE cluster. Format: projects/{project}/locations/{location}/clusters/{cluster} .
deployment
string
Output only. The name of the GKE deployment. Format: projects/{project}/locations/{location}/clusters/{cluster}/namespaces/{namespace}/deployments/{deployment} .
GoogleCloudRun
GoogleCloudRun represents the Cloud Run runtime.
JSON representation
{
"serviceUri" : string
}
Fields
serviceUri
string
Required. Immutable. The name of the Cloud Run service. Format: projects/{project}/locations/{location}/services/{service} .
AppHubWorkload
AppHubWorkload represents the App Hub Workload.
JSON representation
{
"workload" : string ,
"criticality" : string ,
"environment" : string
}
Fields
workload
string
Required. Output only. Immutable. The name of the App Hub Workload. Format: projects/{project}/locations/{location}/applications/{application}/workloads/{workload} .
criticality
string
Output only. The criticality of the App Hub Workload.
environment
string
Output only. The environment of the App Hub Workload.
AppHubService
AppHubService represents the App Hub Service.
JSON representation
{
"apphubService" : string ,
"criticality" : string ,
"environment" : string
}
Fields
apphubService
string
Required. Output only. Immutable. The name of the App Hub Service. Format: projects/{project}/locations/{location}/applications/{application}/services/{service} .
criticality
string
Output only. The criticality of the App Hub Service.
environment
string
Output only. The environment of the App Hub Service.
State
The state of the runtime in the InsightsConfig. Whether the runtime is linked to the InsightsConfig.
Enums
STATE_UNSPECIFIED
No state specified.
LINKED
The runtime configuration has been linked to the InsightsConfig.
UNLINKED
The runtime configuration has been unlinked to the InsightsConfig.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-18 UTC."],[],[]]
