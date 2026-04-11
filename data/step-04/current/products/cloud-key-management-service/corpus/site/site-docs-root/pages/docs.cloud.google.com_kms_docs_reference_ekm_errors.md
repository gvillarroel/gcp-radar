---
title: "Cloud EKM error reference \_|\_ Cloud Key Management Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/ekm_errors
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/ekm_errors
  title: "Cloud EKM error reference \_|\_ Cloud Key Management Service \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud KMS
Reference
Send feedback
Cloud EKM error reference
Stay organized with collections
Save and categorize content based on your preferences.
This topic helps you interpret and troubleshoot errors that might occur when
using Cloud External Key Manager (Cloud EKM) .
Structure of an error
The structure of the error messages provides as much granularity as possible to
help you diagnose and troubleshoot the problem. Errors are
returned in a google.rpc.Status structure. Within that structure:
The google.rpc.Status.code field shows the broad category of the error.
The google.rpc.Status.message field shows a human-readable message, including
details about the specific action that was attempted and context-dependent
suggestions for troubleshooting the error.
If the google.rpc.Status.code is FAILED_PRECONDITION , the
google.rpc.PreconditionFailure structure is machine-readable. It
contains two violation structures.
violation[0] contains information about the state of the Cloud EKM
key.
violation[1] contains information about the attempt to contact the
external key management partner system.
The violation[1].type contains information about the type of error.
Cloud EKM refers to this information as the "error domain".
If these errors persist, contact support for the external key management partner.
In this reference, the messages in the google.rpc.Status.message are truncated
for readability. The truncated portion includes information such as the external
key URI or key path.
Troubleshooting
Errors that occur when using Cloud EKM may be caused by problems with
input errors, Cloud EKM, the external key management partner system, communications
between them, or other factors. You can read specific troubleshooting
information in the section for each type of error.
Depending on the type of error, you may need to contact Cloud EKM
support or support for the external key management partner system.
If your error isn't listed in the tables below, see Troubleshoot EKM via VPC
errors .
Input errors
Follow the troubleshooting advice in the google.rpc.Status.message field of
the error. If the problem persists, contact Google Cloud support .
Unless otherwise noted, the errors in this section have google.rpc.Status.code of
FAILED_PRECONDITION .
google.rpc.Status.message
violation[1].type (Error domain)
Troubleshooting
Permission was denied when accessing the EKM_ELEMENT .
EXTERNAL_PERMISSION_DENIED
When EKM_ELEMENT is key , Cloud EKM also disables the key
version. Grant the appropriate permissions in your external key manager, and then try again by rotating the Cloud EKM key. When EKM_ELEMENT is crypto space or EKM host , grant the appropriate role or permissions to the service account, and then try again.
Could not find a EKM_ELEMENT or Could not query EKM host.
EXTERNAL_NOT_FOUND
When EKM_ELEMENT is key , check that the external key URI or the key path is correct.
When EKM_ELEMENT is crypto space , check that the crypto space path is correct.
When an EKM host cannot be queried, check that the EKM hostname is correct. If they are spelled correctly, contact support for the external key management partner system.
Key URI has invalid format.
EXTERNAL_KEY_URI_INVALID
Check that the key URI in this request is correct and try again by rotating the Cloud EKM key.
Key URI host is not supported.
EXTERNAL_KEY_HOST_NOT_WHITELISTED
Check that the key URI is correct. If you are operating your own
deployment of the external key management partner system, contact Google Cloud support.
Otherwise, contact support for the external key management partner system.
Could not resolve the domain name for EKM_ELEMENT .
DNS
Check that the key URI, key path, crypto space, or EKM hostname is correct. If it is, contact support for the external key management partner system.
Retriable errors
Follow the troubleshooting advice in the google.rpc.Status.message field of
the error. If you observe frequent timeouts or network errors, ensure that the
geographic location of your Cloud EKM keys as near as possible to the
region you use for the external keys. If the problem persists, contact support
for the external key management partner.
Unless otherwise noted, the errors in this section have google.rpc.Status.code
of FAILED_PRECONDITION . EKM_ELEMENT can be one of these value: key , crypto space , or EKM host .
google.rpc.Status.message
violation[1].type (Error domain)
Throttled when trying to access key URI.
EXTERNAL_RESOURCE_EXHAUSTED
Could not reach the EKM_ELEMENT due to an external networking error.
UNREACHABLE_NETWORK
Could not reach the EKM_ELEMENT because the external key manager reports that it is overloaded.
OVERLOADED_EKM
Timed out when trying to access the EKM_ELEMENT .
TIMEOUT
This error typically happens when the EKM is too slow to respond. Slowness can be caused by the EKM receiving more requests than it can handle or by network latency that is too high.
REQUEST_CANCELLED
External key management system errors
If you encounter these errors and they persist, contact support for the
external key management partner.
Unless otherwise noted, the errors in this section have google.rpc.Status.code
of FAILED_PRECONDITION . EKM_ELEMENT can be one of these value: key , crypto space , or EKM host .
google.rpc.Status.message
violation[1].type (Error domain)
Could not validate the TLS server certificate for the EKM_ELEMENT .
TLS_CERT
Got garbled or unusable response when trying to access the EKM_ELEMENT .
UNEXPECTED_RESPONSE
External server error when trying to access the EKM_ELEMENT .
EXTERNAL_SERVER_ERROR
The external key manager indicated they have not implemented the appropriate method to support Cloud KMS's EKM_API .
EKM_API can be one of AsymmetricSign , CheckCryptoSpacePermissions , CreateKey , Decrypt , DestroyKey , Encrypt , GetInfo , or GetPublicKey
EXTERNAL_NOT_IMPLEMENTED
Got unexpected error when trying to access the EKM_ELEMENT .
UNEXPECTED_ERROR
Decryption failed: The EKM reports that decryption failed.
This means key URI is valid, but the external key management partner system
failed to decrypt wrapped blob or additional authenticated data (AAD).
google.rpc.Status.code is INVALID_ARGUMENT .
DECRYPTION_FAILED
Getting support
If you experience an error not listed in this reference, contact
Google Cloud support .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
