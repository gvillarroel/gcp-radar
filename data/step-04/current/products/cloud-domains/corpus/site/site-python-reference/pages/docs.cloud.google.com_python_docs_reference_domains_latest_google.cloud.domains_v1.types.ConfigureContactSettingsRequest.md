---
title: "Class ConfigureContactSettingsRequest (1.13.0) \_|\_ Python client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.types.ConfigureContactSettingsRequest
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/domains/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/domains/latest/google.cloud.domains_v1.types.ConfigureContactSettingsRequest
  title: "Class ConfigureContactSettingsRequest (1.13.0) \_|\_ Python client libraries\
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
Class ConfigureContactSettingsRequest (1.13.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.13.0 (latest)
1.12.0
1.11.0
1.10.2
1.9.0
1.8.1
1.7.5
1.6.0
1.5.2
1.4.1
1.3.0
1.2.3
1.1.3
1.0.0
0.4.3
0.3.0
0.2.3
0.1.0
ConfigureContactSettingsRequest (
mapping = None , * , ignore_unknown_fields = False , ** kwargs
)
Request for the ConfigureContactSettings method.
Attributes
Name
Description
registration
str
Required. The name of the Registration whose contact
settings are being updated, in the format
projects/*/locations/*/registrations/* .
contact_settings
google.cloud.domains_v1.types.ContactSettings
Fields of the ContactSettings to update.
update_mask
google.protobuf.field_mask_pb2.FieldMask
Required. The field mask describing which fields to update
as a comma-separated list. For example, if only the
registrant contact is being updated, the update_mask is
"registrant_contact" .
contact_notices
MutableSequence[ google.cloud.domains_v1.types.ContactNotice ]
The list of contact notices that the caller acknowledges.
The notices needed here depend on the values specified in
contact_settings .
validate_only
bool
Validate the request without actually
updating the contact settings.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
