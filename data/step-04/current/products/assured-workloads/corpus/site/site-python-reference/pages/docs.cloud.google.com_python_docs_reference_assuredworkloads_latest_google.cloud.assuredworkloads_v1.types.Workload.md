---
title: "Class Workload (2.2.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/assuredworkloads/latest/google.cloud.assuredworkloads_v1.types.Workload
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/assuredworkloads/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/assuredworkloads/latest/google.cloud.assuredworkloads_v1.types.Workload
  title: "Class Workload (2.2.0) \_|\_ Python client libraries \_|\_ Google Cloud\
    \ Documentation"
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
Class Workload (2.2.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
2.2.0 (latest)
2.1.0
2.0.0
1.15.2
1.14.0
1.13.1
1.12.5
1.11.0
1.10.3
1.9.1
1.8.1
1.7.0
1.6.1
1.5.0
1.4.2
1.3.0
1.2.3
1.1.0
1.0.0
0.8.0
0.7.2
0.6.0
0.5.0
0.4.2
0.3.1
0.2.1
0.1.0
Workload ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
A Workload object for managing highly regulated workloads of
cloud customers.
Attributes
Name
Description
name
str
Optional. The resource name of the workload.
Format:
organizations/{organization}/locations/{location}/workloads/{workload}
Read-only.
display_name
str
Required. The user-assigned display name of
the Workload. When present it must be between 4
to 30 characters. Allowed characters are:
lowercase and uppercase letters, numbers,
hyphen, and spaces.
Example: My Workload
resources
MutableSequence[ google.cloud.assuredworkloads_v1.types.Workload.ResourceInfo ]
Output only. The resources associated with
this workload. These resources will be created
when creating the workload. If any of the
projects already exist, the workload creation
will fail. Always read only.
compliance_regime
google.cloud.assuredworkloads_v1.types.Workload.ComplianceRegime
Required. Immutable. Compliance Regime
associated with this workload.
create_time
google.protobuf.timestamp_pb2.Timestamp
Output only. Immutable. The Workload creation
timestamp.
billing_account
str
Optional. The billing account used for the resources which
are direct children of workload. This billing account is
initially associated with the resources created as part of
Workload creation. After the initial creation of these
resources, the customer can change the assigned billing
account. The resource name has the form
billingAccounts/{billing_account_id} . For example,
billingAccounts/012345-567890-ABCDEF .
etag
str
Optional. ETag of the workload, it is
calculated on the basis of the Workload
contents. It will be used in Update & Delete
operations.
labels
MutableMapping[str, str]
Optional. Labels applied to the workload.
provisioned_resources_parent
str
Input only. The parent resource for the resources managed by
this Assured Workload. May be either empty or a folder
resource which is a child of the Workload parent. If not
specified all resources are created under the parent
organization. Format: folders/{folder_id}
kms_settings
google.cloud.assuredworkloads_v1.types.Workload.KMSSettings
Input only. Settings used to create a CMEK crypto key. When
set, a project with a KMS CMEK key is provisioned. This
field is deprecated as of Feb 28, 2022. In order to create a
Keyring, callers should specify, ENCRYPTION_KEYS_PROJECT or
KEYRING in ResourceSettings.resource_type field.
resource_settings
MutableSequence[ google.cloud.assuredworkloads_v1.types.Workload.ResourceSettings ]
Input only. Resource properties that are used
to customize workload resources. These
properties (such as custom project id) will be
used to create workload resources if possible.
This field is optional.
kaj_enrollment_state
google.cloud.assuredworkloads_v1.types.Workload.KajEnrollmentState
Output only. Represents the KAJ enrollment
state of the given workload.
enable_sovereign_controls
bool
Optional. Indicates the sovereignty status of
the given workload. Currently meant to be used
by Europe/Canada customers.
saa_enrollment_response
google.cloud.assuredworkloads_v1.types.Workload.SaaEnrollmentResponse
Output only. Represents the SAA enrollment
response of the given workload. SAA enrollment
response is queried during GetWorkload call. In
failure cases, user friendly error message is
shown in SAA details page.
compliant_but_disallowed_services
MutableSequence[str]
Output only. Urls for services which are
compliant for this Assured Workload, but which
are currently disallowed by the
ResourceUsageRestriction org policy. Invoke
RestrictAllowedResources endpoint to allow your
project developers to use these services in
their environment.".
partner
google.cloud.assuredworkloads_v1.types.Workload.Partner
Optional. Compliance Regime associated with
this workload.
Classes
ComplianceRegime
ComplianceRegime ( value )
Supported Compliance Regimes.
KMSSettings
KMSSettings ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Settings specific to the Key Management Service. This message is
deprecated. In order to create a Keyring, callers should specify,
ENCRYPTION_KEYS_PROJECT or KEYRING in ResourceSettings.resource_type
field.
KajEnrollmentState
KajEnrollmentState ( value )
Key Access Justifications(KAJ) Enrollment State.
LabelsEntry
LabelsEntry ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
The abstract base class for a message.
Parameters
Name
Description
kwargs
dict
Keys and values corresponding to the fields of the message.
mapping
Union[dict, .Message ]
A dictionary or message to be used to determine the values for this message.
ignore_unknown_fields
Optional(bool)
If True, do not raise errors for unknown fields. Only applied if mapping is a mapping type or there are keyword parameters.
Partner
Partner ( value )
Supported Assured Workloads Partners.
ResourceInfo
ResourceInfo ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Represent the resources that are children of this Workload.
ResourceSettings
ResourceSettings ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Represent the custom settings for the resources to be
created.
SaaEnrollmentResponse
SaaEnrollmentResponse ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Signed Access Approvals (SAA) enrollment response.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
