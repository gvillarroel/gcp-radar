---
title: "Package types (2.27.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.types
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/secretmanager/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.types
  title: "Package types (2.27.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Package types (2.27.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.27.0 (latest)
2.26.0
2.25.0
2.23.3
2.22.1
2.21.1
2.20.2
2.19.0
2.18.3
2.17.0
2.16.3
2.15.1
2.14.0
2.13.0
2.12.6
2.11.1
2.10.0
2.9.2
2.8.0
2.7.3
2.6.0
2.5.0
2.4.0
2.3.0
2.2.0
2.1.0
2.0.0
1.0.2
0.2.0
0.1.1
API documentation for secretmanager_v1.types package.
Classes
AccessSecretVersionRequest
Request message for
SecretManagerService.AccessSecretVersion .
AccessSecretVersionResponse
Response message for
SecretManagerService.AccessSecretVersion .
AddSecretVersionRequest
Request message for
SecretManagerService.AddSecretVersion .
CreateSecretRequest
Request message for
SecretManagerService.CreateSecret .
CustomerManagedEncryption
Configuration for encrypting secret payloads using
customer-managed encryption keys (CMEK).
CustomerManagedEncryptionStatus
Describes the status of customer-managed encryption.
DeleteSecretRequest
Request message for
SecretManagerService.DeleteSecret .
DestroySecretVersionRequest
Request message for
SecretManagerService.DestroySecretVersion .
DisableSecretVersionRequest
Request message for
SecretManagerService.DisableSecretVersion .
EnableSecretVersionRequest
Request message for
SecretManagerService.EnableSecretVersion .
GetSecretRequest
Request message for
SecretManagerService.GetSecret .
GetSecretVersionRequest
Request message for
SecretManagerService.GetSecretVersion .
ListSecretVersionsRequest
Request message for
SecretManagerService.ListSecretVersions .
ListSecretVersionsResponse
Response message for
SecretManagerService.ListSecretVersions .
ListSecretsRequest
Request message for
SecretManagerService.ListSecrets .
ListSecretsResponse
Response message for
SecretManagerService.ListSecrets .
Replication
A policy that defines the replication and encryption
configuration of data.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
ReplicationStatus
The replication status of a
SecretVersion .
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Rotation
The rotation time and period for a
Secret . At
next_rotation_time, Secret Manager will send a Pub/Sub notification
to the topics configured on the Secret.
Secret.topics must be
set to configure rotation.
Secret
A Secret is a logical secret
whose value and versions can be accessed.
A Secret is made up of zero
or more
SecretVersions that
represent the secret data.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
SecretPayload
A secret payload resource in the Secret Manager API. This contains
the sensitive secret payload that is associated with a
SecretVersion .
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
SecretVersion
A secret version resource in the Secret Manager API.
Topic
A Pub/Sub topic which Secret Manager will publish to when
control plane events occur on this secret.
UpdateSecretRequest
Request message for
SecretManagerService.UpdateSecret .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
