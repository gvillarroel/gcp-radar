---
title: "Class AccessApprovalSettings (1.19.0) \_|\_ Python client libraries \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.AccessApprovalSettings
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/accessapproval/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.AccessApprovalSettings
  title: "Class AccessApprovalSettings (1.19.0) \_|\_ Python client libraries \_|\_\
    \ Google Cloud Documentation"
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
Class AccessApprovalSettings (1.19.0)
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
AccessApprovalSettings ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Settings on a Project/Folder/Organization related to Access
Approval.
Attributes
Name
Description
name
str
The resource name of the settings. Format is one of:
- "projects/{project}/accessApprovalSettings"
- "folders/{folder}/accessApprovalSettings"
- "organizations/{organization}/accessApprovalSettings".
notification_emails
MutableSequence[str]
A list of email addresses to which
notifications relating to approval requests
should be sent. Notifications relating to a
resource will be sent to all emails in the
settings of ancestor resources of that resource.
A maximum of 50 email addresses are allowed.
enrolled_services
MutableSequence[ google.cloud.accessapproval_v1.types.EnrolledService ]
A list of Google Cloud Services for which the given resource
has Access Approval enrolled. Access requests for the
resource given by name against any of these services
contained here will be required to have explicit approval.
If name refers to an organization, enrollment can be done
for individual services. If name refers to a folder or
project, enrollment can only be done on an all or nothing
basis.
If a cloud_product is repeated in this list, the first entry
will be honored and all following entries will be discarded.
A maximum of 10 enrolled services will be enforced, to be
expanded as the set of supported services is expanded.
enrolled_ancestor
bool
Output only. This field is read only (not
settable via UpdateAccessApprovalSettings
method). If the field is true, that indicates
that at least one service is enrolled for Access
Approval in one or more ancestors of the Project
or Folder (this field will always be unset for
the organization since organizations do not have
ancestors).
active_key_version
str
The asymmetric crypto key version to use for signing
approval requests. Empty active_key_version indicates that a
Google-managed key should be used for signing. This property
will be ignored if set by an ancestor of this resource, and
new non-empty values may not be set.
ancestor_has_active_key_version
bool
Output only. This field is read only (not settable via
UpdateAccessApprovalSettings method). If the field is true,
that indicates that an ancestor of this Project or Folder
has set active_key_version (this field will always be unset
for the organization since organizations do not have
ancestors).
invalid_key_version
bool
Output only. This field is read only (not settable via
UpdateAccessApprovalSettings method). If the field is true,
that indicates that there is some configuration issue with
the active_key_version configured at this level in the
resource hierarchy (e.g. it doesn't exist or the Access
Approval service account doesn't have the correct
permissions on it, etc.) This key version is not necessarily
the effective key version at this level, as key versions are
inherited top-down.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
