---
title: "RolloutStrategy \_|\_ Config Sync \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/RolloutStrategy
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/rest/v1alpha/RolloutStrategy
  title: "RolloutStrategy \_|\_ Config Sync \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Config Sync
Reference
Send feedback
RolloutStrategy
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
AllAtOnceStrategy
RollingStrategy
JSON representation
RolloutStrategy defines different ways to rollout a resource bundle across a set of clusters.
JSON representation
{
// Union field strategy can be only one of the following:
"allAtOnce" : {
object ( AllAtOnceStrategy )
} ,
"rolling" : {
object ( RollingStrategy )
}
// End of list of possible types for union field strategy .
}
Fields
Union field strategy . Strategy defines how updates to a resource bundle should be rolled out across clusters. strategy can be only one of the following:
allAtOnce
object ( AllAtOnceStrategy )
AllAtOnceStrategy causes all clusters to be updated concurrently.
rolling
object ( RollingStrategy )
RollingStrategy causes a specified number of clusters to be updated concurrently until all clusters are updated.
AllAtOnceStrategy
This type has no fields.
AllAtOnceStrategy causes all clusters to be updated concurrently.
RollingStrategy
RollingStrategy causes a specified number of clusters to be updated concurrently until all clusters are updated.
JSON representation
{
"maxConcurrent" : integer
}
Fields
maxConcurrent
integer
Optional. Maximum number of clusters to update the resource bundle on concurrently.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-28 UTC."],[],[]]
