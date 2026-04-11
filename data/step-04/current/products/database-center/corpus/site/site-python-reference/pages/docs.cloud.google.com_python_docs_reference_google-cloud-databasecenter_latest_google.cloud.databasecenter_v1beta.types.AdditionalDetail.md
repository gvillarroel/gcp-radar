---
title: "Class AdditionalDetail (0.7.0) \_|\_ Python client libraries \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.types.AdditionalDetail
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/google-cloud-databasecenter/latest/google.cloud.databasecenter_v1beta.types.AdditionalDetail
  title: "Class AdditionalDetail (0.7.0) \_|\_ Python client libraries \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Class AdditionalDetail (0.7.0)
Stay organized with collections
Save and categorize content based on your preferences.
0.7.0 (latest)
0.6.0
0.5.0
0.4.0
0.3.0
0.2.0
0.1.0
AdditionalDetail ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Details related to signal.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Attributes
Name
Description
short_backup_retention_info
google.cloud.databasecenter_v1beta.types.RetentionSettingsInfo
Short backup retention information applies to signals with
type SIGNAL_TYPE_SHORT_BACKUP_RETENTION.
This field is a member of oneof _ detail .
backup_run_info
google.cloud.databasecenter_v1beta.types.BackupRunInfo
Backup run information applies to signals with types
SIGNAL_TYPE_LAST_BACKUP_FAILED and
SIGNAL_TYPE_LAST_BACKUP_OLD.
This field is a member of oneof _ detail .
scc_info
google.cloud.databasecenter_v1beta.types.SCCInfo
SCC information applies to SCC signals.
This field is a member of oneof _ detail .
recommendation_info
google.cloud.databasecenter_v1beta.types.RecommendationInfo
Recommendation information applies to
recommendations.
This field is a member of oneof _ detail .
automated_backup_policy_info
google.cloud.databasecenter_v1beta.types.AutomatedBackupPolicyInfo
Automated backup policy information applies to signals with
type SIGNAL_TYPE_NO_AUTOMATED_BACKUP_POLICY.
This field is a member of oneof _ detail .
deletion_protection_info
google.cloud.databasecenter_v1beta.types.DeletionProtectionInfo
Deletion protection information applies to signals with type
SIGNAL_TYPE_NO_DELETION_PROTECTION
This field is a member of oneof _ detail .
resource_suspension_info
google.cloud.databasecenter_v1beta.types.ResourceSuspensionInfo
Resource suspension information applies to signals with type
SIGNAL_TYPE_RESOURCE_SUSPENDED .
This field is a member of oneof _ detail .
inefficient_query_info
google.cloud.databasecenter_v1beta.types.InefficientQueryInfo
Inefficient query information applies to signals with type
SIGNAL_TYPE_INEFFICIENT_QUERY .
This field is a member of oneof _ detail .
outdated_minor_version_info
google.cloud.databasecenter_v1beta.types.OutdatedMinorVersionInfo
Outdated minor version information applies to signals with
type SIGNAL_TYPE_OUTDATED_MINOR_VERSION.
This field is a member of oneof _ detail .
maintenance_recommendation_info
google.cloud.databasecenter_v1beta.types.MaintenanceRecommendationInfo
Maintenance recommendation information applies to signals
with type SIGNAL_TYPE_RECOMMENDED_MAINTENANCE_POLICIES.
This field is a member of oneof _ detail .
signal_source
google.cloud.databasecenter_v1beta.types.SignalSource
Where the signal is coming from.
signal_type
google.cloud.databasecenter_v1beta.types.SignalType
Type of the signal.
signal_event_time
google.protobuf.timestamp_pb2.Timestamp
Event time when signal was recorded by source
service.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
