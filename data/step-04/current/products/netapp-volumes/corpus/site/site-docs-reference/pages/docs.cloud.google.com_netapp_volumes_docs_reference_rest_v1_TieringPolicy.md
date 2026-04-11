---
title: "TieringPolicy \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/netapp/volumes/docs/reference/rest/v1/TieringPolicy
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/netapp/volumes/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/netapp/volumes/docs/reference/rest/v1/TieringPolicy
  title: "TieringPolicy \_|\_ NetApp Volumes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
NetApp Volumes
Reference
Send feedback
TieringPolicy
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
TierAction
Defines tiering policy for the volume.
JSON representation
{
"tierAction" : enum ( TierAction ) ,
"coolingThresholdDays" : integer ,
"hotTierBypassModeEnabled" : boolean
}
Fields
tierAction
enum ( TierAction )
Optional. Flag indicating if the volume has tiering policy enable/pause. Default is PAUSED.
coolingThresholdDays
integer
Optional. Time in days to mark the volume's data block as cold and make it eligible for tiering, can be range from 2-183. Default is 31.
hotTierBypassModeEnabled
boolean
Optional. Flag indicating that the hot tier bypass mode is enabled. Default is false. This is only applicable to Flex service level.
TierAction
Tier action for the volume.
Enums
TIER_ACTION_UNSPECIFIED
Unspecified.
ENABLED
When tiering is enabled, new cold data will be tiered.
PAUSED
When paused, tiering won't be performed on new data. Existing data stays tiered until accessed.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-04 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-04 UTC."],[],[]]
