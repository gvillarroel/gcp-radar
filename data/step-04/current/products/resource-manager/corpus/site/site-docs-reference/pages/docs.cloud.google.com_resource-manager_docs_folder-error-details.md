---
title: "Folder API error details \_|\_ Resource Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/resource-manager/docs/folder-error-details
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/resource-manager/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/resource-manager/docs/folder-error-details
  title: "Folder API error details \_|\_ Resource Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Resource Manager
Reference
Send feedback
Folder API error details
Stay organized with collections
Save and categorize content based on your preferences.
This topic describes the meaning of the error code strings returned when a
folder API operation fails due to a folder constraint violation. When this
occurs, a PreconditionFailure explaining the violation will be returned.
If the failure occurs synchronously, then the PreconditionFailure
will be returned using the Status.details field. If it occurs
asynchronously, then the PreconditionFailure will be returned
using the Operation.error field. These values appear as
strings in the type field of the PreconditionFailure.Violation message
returned in Status.details .
Status string
Description
ERROR_TYPE_UNSPECIFIED
The error type was unrecognized or unspecified.
ACTIVE_FOLDER_HEIGHT_VIOLATION
The attempted action would cause the folder tree to have a depth greater than the maximum of four.
MAX_CHILD_FOLDERS_VIOLATION
The attempted action would create a child folder beyond the maximum of 300.
FOLDER_NAME_UNIQUENESS_VIOLATION
The attempted action would violate the locally-unique folder display_name constraint.
RESOURCE_DELETED_VIOLATION
The resource being moved has been deleted.
PARENT_DELETED_VIOLATION
The resource a folder was being added to has been deleted.
CYCLE_INTRODUCED_VIOLATION
The attempted action would introduce cycle in resource path.
FOLDER_BEING_MOVED_VIOLATION
The attempted action would move a folder that is already being moved.
FOLDER_TO_DELETE_NON_EMPTY_VIOLATION
The folder the caller is trying to delete contains active resources or is associated with firewall policies.
DELETED_FOLDER_HEIGHT_VIOLATION
The attempted action would violate the max deleted folder depth constraint, where the full folder tree's depth (including deleted folders) can be no more than 8.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
