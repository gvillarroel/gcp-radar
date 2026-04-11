---
title: "Class Certificate (1.12.0) \_|\_ Python client libraries \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.types.Certificate
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/certificatemanager/latest/google.cloud.certificate_manager_v1.types.Certificate
  title: "Class Certificate (1.12.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Class Certificate (1.12.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
1.12.0 (latest)
1.11.0
1.10.2
1.9.0
1.8.1
1.7.2
1.6.3
1.5.0
1.4.3
1.3.1
1.2.0
1.1.1
1.0.1
0.2.1
0.1.3
Certificate ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Defines TLS certificate.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Attributes
Name
Description
name
str
A user-defined name of the certificate. Certificate names
must be unique globally and match pattern
projects/*/locations/*/certificates/* .
description
str
One or more paragraphs of text description of
a certificate.
create_time
google.protobuf.timestamp_pb2.Timestamp
Output only. The creation timestamp of a
Certificate.
update_time
google.protobuf.timestamp_pb2.Timestamp
Output only. The last update timestamp of a
Certificate.
labels
MutableMapping[str, str]
Set of labels associated with a Certificate.
self_managed
google.cloud.certificate_manager_v1.types.Certificate.SelfManagedCertificate
If set, defines data of a self-managed
certificate.
This field is a member of oneof _ type .
managed
google.cloud.certificate_manager_v1.types.Certificate.ManagedCertificate
If set, contains configuration and state of a
managed certificate.
This field is a member of oneof _ type .
san_dnsnames
MutableSequence[str]
Output only. The list of Subject Alternative
Names of dnsName type defined in the certificate
(see RFC 5280 4.2.1.6). Managed certificates
that haven't been provisioned yet have this
field populated with a value of the
managed.domains field.
pem_certificate
str
Output only. The PEM-encoded certificate
chain.
expire_time
google.protobuf.timestamp_pb2.Timestamp
Output only. The expiry timestamp of a
Certificate.
scope
google.cloud.certificate_manager_v1.types.Certificate.Scope
Immutable. The scope of the certificate.
Classes
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
ManagedCertificate
ManagedCertificate ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Configuration and state of a Managed Certificate.
Certificate Manager provisions and renews Managed Certificates
automatically, for as long as it's authorized to do so.
Scope
Scope ( value )
Certificate scope.
SelfManagedCertificate
SelfManagedCertificate ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Certificate data for a SelfManaged Certificate.
SelfManaged Certificates are uploaded by the user. Updating such
certificates before they expire remains the user's
responsibility.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
