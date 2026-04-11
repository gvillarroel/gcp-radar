---
title: "LoggingConfig \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/LoggingConfig
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage-transfer/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/LoggingConfig
  title: "LoggingConfig \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Storage Transfer Service
Reference
Send feedback
LoggingConfig
Stay organized with collections
Save and categorize content based on your preferences.
Specifies the logging behavior for transfer operations.
Logs can be sent to Cloud Logging for all transfer types. See Read transfer logs for details.
JSON representation
{
"logActions" : [
enum ( LoggableAction )
] ,
"logActionStates" : [
enum ( LoggableActionState )
] ,
"enableOnpremGcsTransferLogs" : boolean
}
Fields
logActions[]
enum ( LoggableAction )
Specifies the actions to be logged. If empty, no logs are generated.
logActionStates[]
enum ( LoggableActionState )
States in which logActions are logged. If empty, no logs are generated.
enableOnpremGcsTransferLogs
boolean
For PosixFilesystem transfers, enables file system transfer logs instead of, or in addition to, Cloud Logging.
This option ignores [LoggableAction] and [LoggableActionState]. If these are set, Cloud Logging will also be enabled for this transfer.
LoggableAction
Loggable actions.
Enums
LOGGABLE_ACTION_UNSPECIFIED
Default value. This value is unused.
FIND
Listing objects in a bucket.
DELETE
Deleting objects at the source or the destination.
COPY
Copying objects to the destination.
LoggableActionState
Loggable action states.
Enums
LOGGABLE_ACTION_STATE_UNSPECIFIED
Default value. This value is unused.
SUCCEEDED
LoggableAction completed successfully. SUCCEEDED actions are logged as INFO .
FAILED
LoggableAction terminated in an error state. FAILED actions are logged as ERROR .
SKIPPED
The COPY action was skipped for this file. Only supported for agent-based transfers. SKIPPED actions are logged as INFO .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-09 UTC."],[],[]]
