---
title: "gcloud configuration field behavior \_|\_ Config Sync \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/gcloud-configuration-field-behavior
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/gcloud-configuration-field-behavior
  title: "gcloud configuration field behavior \_|\_ Config Sync \_|\_ Google Cloud\
    \ Documentation"
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
gcloud configuration field behavior
Stay organized with collections
Save and categorize content based on your preferences.
The --config flag on the
update
command accepts fields to configure the behavior of Config Sync on
membership clusters. The --fleet-default-member-config flag on the update
and
enable
commands accepts the same set of fields to configure the
fleet-default
Config Sync behavior.
Unlike the --config flag on the
apply
command, which defines a Google Cloud CLI
representation
of the underlying configuration API fields, the --config and
--fleet-default-member-config flags on the update command directly adopt the
schema of the
Spec API field
and
MembershipSpec API field ,
respectively. The --fleet-default-member-config flag on the
enable command has likewise migrated from the Google Cloud CLI
representation
to the MembershipSpec API field schema in the
alpha
release track, but the previous representation is supported for backward
compatibility.
This page documents the additional gcloud CLI-specific handling of
the configuration fields in the API field schema before the --config and
--fleet-default-member-config flags send them to the API.
Note: These flags support configuration fields in both camelCase and
snake_case .
Default field values
Field
Description
configSync.enabled
If the user specifies the configSync field,
configSync.enabled defaults to true .
version
For the --config flag, the Config Sync version defaults
to its existing value in the membership configuration, or if it's not
configured, the version of Config Sync installed on the membership
cluster. Use the
describe
command to view these values. If Config Sync is not installed on the
membership cluster, gcloud CLI leaves the version unset in the
API request.
For --config and --fleet-default-member-config ,
see the description of the version sub-field in the
Spec API field
and
MembershipSpec API field ,
respectively, to determine the API's default Config Sync
version behavior.
Unsupported fields
The --config and --fleet-default-member-config flags on the
update
and
enable
commands error if any of the following legacy fields are set:
configSync.metricsGcpServiceAccountEmail
policyController
hierarchyController
binauthz
management
Example configuration files
This section provides examples of configurations which can be passed to the
--config and --fleet-default-member-config flags on the
update
and
enable
commands.
Compared to the
examples on the apply command page ,
the following configurations don't contain applySpecVersion and spec fields.
The configSync.deploymentOverrides[].deploymentName field is
spec.configSync.deploymentOverrides[].name for the apply command.
Other fields, including ones not in the following examples, are named
differently as well.
The following example shows a basic configuration:
configSync :
enabled : true
sourceFormat : unstructured
git :
syncRepo : https://github.com/GoogleCloudPlatform/anthos-config-management-samples
syncBranch : main
secretType : none
policyDir : config-sync-quickstart/multirepo/root
The following example shows a more complex configuration:
configSync :
enabled : true
stopSyncing : true
sourceFormat : unstructured
git :
syncRepo : https://github.com/GoogleCloudPlatform/anthos-config-management-samples
syncBranch : main
secretType : none
policyDir : config-sync-quickstart/multirepo/root
deploymentOverrides :
- deploymentName : reconciler-manager
deploymentNamespace : config-management-system
containers :
- containerName : reconciler-manager
cpuRequest : 50m
cpuLimit : 100m
memoryRequest : 256Mi
memoryLimit : 512Mi
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
