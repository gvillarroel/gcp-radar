---
title: "Class UpdateAccessApprovalSettingsMessage (1.19.0) \_|\_ Python client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.UpdateAccessApprovalSettingsMessage
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/accessapproval/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.UpdateAccessApprovalSettingsMessage
  title: "Class UpdateAccessApprovalSettingsMessage (1.19.0) \_|\_ Python client libraries\
    \ \_|\_ Google Cloud Documentation"
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
Class UpdateAccessApprovalSettingsMessage (1.19.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.19.0 (latest)
1.18.0
1.17.0
1.16.2
1.15.0
1.14.1
1.13.5
1.12.0
1.11.3
1.10.1
1.9.1
1.8.0
1.7.5
1.6.1
1.5.1
1.4.1
1.3.5
1.2.0
1.1.1
1.0.0
0.2.2
0.1.0
UpdateAccessApprovalSettingsMessage (
mapping = None , * , ignore_unknown_fields = False , ** kwargs
)
Request to update access approval settings.
Attributes
Name
Description
settings
google.cloud.accessapproval_v1.types.AccessApprovalSettings
The new AccessApprovalSettings.
update_mask
google.protobuf.field_mask_pb2.FieldMask
The update mask applies to the settings. Only the top level
fields of AccessApprovalSettings (notification_emails &
enrolled_services) are supported. For each field, if it is
included, the currently stored value will be entirely
overwritten with the value of the field passed in this
request.
For the FieldMask definition, see
https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
If this field is left unset, only the notification_emails
field will be updated.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
