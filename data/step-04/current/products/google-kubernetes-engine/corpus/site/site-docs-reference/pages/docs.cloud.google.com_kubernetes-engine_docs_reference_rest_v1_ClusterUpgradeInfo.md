---
title: "ClusterUpgradeInfo \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ClusterUpgradeInfo
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/rest/v1/ClusterUpgradeInfo
  title: "ClusterUpgradeInfo \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\
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
Reference
Send feedback
ClusterUpgradeInfo
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
AutoUpgradeStatus
AutoUpgradePausedReason
ClusterUpgradeInfo contains the upgrade information of a cluster.
JSON representation
{
"autoUpgradeStatus" : [
enum ( AutoUpgradeStatus )
] ,
"pausedReason" : [
enum ( AutoUpgradePausedReason )
] ,
"upgradeDetails" : [
{
object ( UpgradeDetails )
}
] ,
"minorTargetVersion" : string ,
"patchTargetVersion" : string ,
"endOfStandardSupportTimestamp" : string ,
"endOfExtendedSupportTimestamp" : string
}
Fields
autoUpgradeStatus[]
enum ( AutoUpgradeStatus )
The auto upgrade status.
pausedReason[]
enum ( AutoUpgradePausedReason )
The auto upgrade paused reason.
upgradeDetails[]
object ( UpgradeDetails )
The list of past auto upgrades.
minorTargetVersion
string
minorTargetVersion indicates the target version for minor upgrade.
patchTargetVersion
string
patchTargetVersion indicates the target version for patch upgrade.
endOfStandardSupportTimestamp
string
The cluster's current minor version's end of standard support timestamp.
endOfExtendedSupportTimestamp
string
The cluster's current minor version's end of extended support timestamp.
AutoUpgradeStatus
AutoUpgradeStatus indicates the status of auto upgrade.
Enums
UNKNOWN
UNKNOWN indicates an unknown status.
ACTIVE
ACTIVE indicates an active status.
MINOR_UPGRADE_PAUSED
MINOR_UPGRADE_PAUSED indicates the minor version upgrade is paused.
UPGRADE_PAUSED
UPGRADE_PAUSED indicates the upgrade is paused.
AutoUpgradePausedReason
AutoUpgradePausedReason indicates the reason for auto upgrade paused status.
Enums
AUTO_UPGRADE_PAUSED_REASON_UNSPECIFIED
AUTO_UPGRADE_PAUSED_REASON_UNSPECIFIED indicates an unspecified reason.
MAINTENANCE_WINDOW
MAINTENANCE_WINDOW indicates the cluster is outside customer maintenance window.
MAINTENANCE_EXCLUSION_NO_UPGRADES
MAINTENANCE_EXCLUSION_NO_UPGRADES indicates the cluster is in a maintenance exclusion with scope NO_UPGRADES.
MAINTENANCE_EXCLUSION_NO_MINOR_UPGRADES
MAINTENANCE_EXCLUSION_NO_MINOR_UPGRADES indicates the cluster is in a maintenance exclusion with scope NO_MINOR_UPGRADES.
CLUSTER_DISRUPTION_BUDGET
CLUSTER_DISRUPTION_BUDGET indicates the cluster is outside the cluster disruption budget.
CLUSTER_DISRUPTION_BUDGET_MINOR_UPGRADE
CLUSTER_DISRUPTION_BUDGET_MINOR_UPGRADE indicates the cluster is outside the cluster disruption budget for minor version upgrade.
SYSTEM_CONFIG
SYSTEM_CONFIG indicates the cluster upgrade is paused by system config.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-21 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-21 UTC."],[],[]]
