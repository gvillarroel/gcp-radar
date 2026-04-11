---
title: "Resolving configuration issues \_|\_ Cloud Service Mesh v1.21 \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/service-mesh/v1.21/docs/troubleshooting/troubleshoot-configuration
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/v1.21/docs/troubleshooting/troubleshoot-managed-service-mesh
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/v1.21/docs/troubleshooting/troubleshoot-configuration
  title: "Resolving configuration issues \_|\_ Cloud Service Mesh v1.21 \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

You are viewing archived v1.21 Service Mesh documentation.
Available versions
Cloud Service Mesh latest Cloud Service Mesh 1.26 archive Cloud Service Mesh 1.24 archive Cloud Service Mesh 1.24 archive Cloud Service Mesh 1.23 archive Cloud Service Mesh 1.22 archive Cloud Service Mesh 1.21 archive Cloud Service Mesh 1.20 archive Anthos Service Mesh 1.19 archive
Home
Documentation
Networking
Cloud Service Mesh
v1.21
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Resolving configuration issues
This section explains common Cloud Service Mesh problems and how to resolve them.
If you need additional assistance, see Getting support .
Checking MembershipState
At any time you can check the most recent status of the mesh by running the following command:
gcloud container fleet mesh describe
The output is similar to:
...
membershipSpecs:
projects/project_id/locations/global/memberships/cluster:
mesh:
management: MANAGEMENT_AUTOMATIC
membershipStates:
projects/project_id/locations/global/memberships/cluster:
servicemesh:
...
conditions:
- code: CONFIG_VALIDATION_WARNING
documentationLink: https://cloud.google.com/...
details: Application of one or more configs has failed. Error details are shown on individual config resources. See documentation link for more detail.
severity: WARNING
...
MembershipState Error Codes
If Cloud Service Mesh reports conditions to the MembershipState for a cluster, it could mean Mesh configurations (such as Istio Custom Resources) were not able to be applied. The following error code descriptions give more information on how to address them.
Error Code
Cause
Resolution
CONFIG_APPLY_INTERNAL_ERROR
One or more configs failed to be applied due to an internal error.
Please contact customer support.
QUOTA_EXCEEDED_*
One or more configs failed to be applied due to resources reaching a quota limit.
See Quotas for information on the specific quotas and how to raise them.
CONFIG_VALIDATION_ERROR
One or more configs failed to be applied due to invalid configuration.
Specific errors are written to the configs that caused them. More information on how to diagnose these is described in the section: Configuration Validation errors .
CONFIG_VALIDATION_WARNING
We encountered potential problems in one or more configs. These may not have been applied, and if they have been applied, there may be unintended behavior.
More information on how to diagnose these is described in the section: Configuration Validation errors .
Configuration Validation Errors
CONFIG_VALIDATION_WARNING and CONFIG_VALIDATION_ERROR codes indicate problems were found on mesh configs (Istio or Kubernetes Custom Resources) and that a subset of configs may not have been properly applied.
Many per-resource error details are written to the applicable resource. The following command can be used to locate the invalid configs and view the specific error messages. (Note: these are specifically for Istio resources, and not all validation errors may be displayed here).
for resource in serviceentries destinationrules virtualservices gateways peerauthentications authorizationpolicies requestauthentications sidecars telemetries envoyfilters ;
do kubectl get $ resource -- all - namespaces -- output = json | \
jq ' . items [] | select (. status . conditions != null and any (. status . conditions []; . type == "Accepted" and . status == "False" )) | { "name" : . metadata . name , "namespace" : . metadata . namespace , "kind" : . kind , "conditions" : . status . conditions } ' ;
done
The output is similar to:
{
"name" : "demo-envoy-filter" ,
"namespace" : "default" ,
"kind" : "EnvoyFilter" ,
"conditions" : [
{
"lastTransitionTime" : "2024-04-04T21:10:18.046975988Z" ,
"message" : "This API is not supported" ,
"reason" : "Invalid" ,
"status" : "False" ,
"type" : "Accepted"
}
]
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
