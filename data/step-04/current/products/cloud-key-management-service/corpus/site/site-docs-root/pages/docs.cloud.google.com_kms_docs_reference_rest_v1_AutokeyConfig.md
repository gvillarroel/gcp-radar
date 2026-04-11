---
title: "AutokeyConfig \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/rest/v1/AutokeyConfig
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/rest/v1/AutokeyConfig
  title: "AutokeyConfig \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
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
AutokeyConfig
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
State
KeyProjectResolutionMode
Cloud KMS Autokey configuration for a folder.
JSON representation
{
"name" : string ,
"keyProject" : string ,
"state" : enum ( State ) ,
"etag" : string ,
"keyProjectResolutionMode" : enum ( KeyProjectResolutionMode )
}
Fields
name
string
Identifier. Name of the AutokeyConfig resource, e.g. folders/{FOLDER_NUMBER}/autokeyConfig or projects/{PROJECT_NUMBER}/autokeyConfig .
keyProject
string
Optional. Name of the key project, e.g. projects/{PROJECT_ID} or projects/{PROJECT_NUMBER} , where Cloud KMS Autokey will provision a new CryptoKey when a KeyHandle is created. On folders.updateAutokeyConfig , the caller will require cloudkms.cryptoKeys.setIamPolicy permission on this key project. Once configured, for Cloud KMS Autokey to function properly, this key project must have the Cloud KMS API activated and the Cloud KMS Service Agent for this key project must be granted the cloudkms.admin role (or pertinent permissions). A request with an empty key project field will clear the configuration.
state
enum ( State )
Output only. The state for the AutokeyConfig.
etag
string
Optional. A checksum computed by the server based on the value of other fields. This may be sent on update requests to ensure that the client has an up-to-date value before proceeding. The request will be rejected with an ABORTED error on a mismatched etag.
keyProjectResolutionMode
enum ( KeyProjectResolutionMode )
Optional. KeyProjectResolutionMode for the AutokeyConfig. Valid values are DEDICATED_KEY_PROJECT , RESOURCE_PROJECT , or DISABLED .
State
The states AutokeyConfig can be in.
Enums
STATE_UNSPECIFIED
The state of the AutokeyConfig is unspecified.
ACTIVE
The AutokeyConfig is currently active.
KEY_PROJECT_DELETED
A previously configured key project has been deleted and the current AutokeyConfig is unusable.
UNINITIALIZED
The AutokeyConfig is not yet initialized or has been reset to its default uninitialized state.
KeyProjectResolutionMode
Defines the resolution mode enum for the key project. The KeyProjectResolutionMode determines the mechanism by which AutokeyConfig identifies a keyProject at its specific configuration node. This parameter also determines if Autokey can be used within this project or folder.
Enums
KEY_PROJECT_RESOLUTION_MODE_UNSPECIFIED
Default value. KeyProjectResolutionMode when not specified will act as DEDICATED_KEY_PROJECT .
DEDICATED_KEY_PROJECT
Keys are created in a dedicated project specified by keyProject .
RESOURCE_PROJECT
Keys are created in the same project as the resource requesting the key. The keyProject must not be set when this mode is used.
DISABLED
Disables the AutokeyConfig. When this mode is set, any AutokeyConfig from higher levels in the resource hierarchy are ignored for this resource and its descendants. This setting can be overridden by a more specific configuration at a lower level. For example, if Autokey is disabled on a folder, it can be re-enabled on a sub-folder or project within that folder by setting a different mode (e.g., DEDICATED_KEY_PROJECT or RESOURCE_PROJECT).
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-11 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-11 UTC."],[],[]]
