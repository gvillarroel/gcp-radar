---
title: "HighAvailabilityApplication \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/highavailabilityapplication
knowledge_key: corpus
source_id: site-iam-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/highavailabilityapplication
  title: "HighAvailabilityApplication \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Reference
Send feedback
HighAvailabilityApplication
Stay organized with collections
Save and categorize content based on your preferences.
Custom Resource Definition Properties
Spec
Schema
resourceSelection :
resourceKind : string
policy :
storageSettings :
requireRegionalStorage : boolean
failoverSettings :
forceDeleteStrategy : string
afterNodeUnreachable :
afterNodeUnreachableSeconds : int
Fields
resourceSelection
Optional
object
ResourceSelection specifies the resources belonging to this HighAvailabilityApplication.
The HighAvailabilityApplication will look for a resource with the same name and namespace as itself.
resourceSelection.resourceKind
Optional
string
ResourceKind specifies the kind of resources included in this component.
Possible values: ["StatefulSet"]
policy
Optional
object
Policy defines the high availability characteristics of this application
policy.storageSettings
Optional
object
StorageSettings defines the high availability characteristics of this application.
policy.storageSettings.requireRegionalStorage
Optional
string
RequireRegionalStorage enforces regional storage when using a HighAvailabilityApplication.
policy.failoverSettings
Optional
object
FailoverSettings defines the failover settings when an application pod encounters an error.
policy.failoverSettings.forceDeleteStrategy
Optional
string
forceDeleteStrategy determines how force delete is triggered on node failure.
Possible values: ["AfterNodeUnreachable"]
policy.failoverSettings.afterNodeUnreachable
Optional
object
Configuration for a force delete strategy of "AfterNodeUnreachable".
Should only be set when type is equal to AfterNodeUnreachable.
policy.failoverSettings.afterNodeUnreachable.afterNodeUnbreachableSeconds
Required*
int
AfterNodeUnreachableSeconds is the timeout to force delete a pod after the node it is running
on is marked as unreachable.
* Field is required when parent field is specified
Status
Schema
conditions :
- lastTransitionTime : string
message : string
reason : string
status : string
type : string
Fields
conditions
list (object)
Conditions represent the latest available observation of the resource's current state.
conditions[]
object
conditions[].lastTransitionTime
string
Last time the condition transitioned from one status to another.
conditions[].message
string
Human-readable message indicating details about last transition.
conditions[].reason
string
Unique, one-word, CamelCase reason for the condition's last transition.
conditions[].status
string
Status is the status of the condition. Can be True, False, Unknown.
conditions[].type
string
Type is the type of the condition.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
