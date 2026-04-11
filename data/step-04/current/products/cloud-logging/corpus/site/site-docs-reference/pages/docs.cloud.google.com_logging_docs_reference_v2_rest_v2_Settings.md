---
title: "Settings \_|\_ Cloud Logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Settings
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/logging/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/Settings
  title: "Settings \_|\_ Cloud Logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Logging
Reference
Send feedback
Settings
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
DefaultSinkConfig
JSON representation
FilterWriteMode
Describes the settings associated with a project, folder, organization, or billing account.
JSON representation
{
"name" : string ,
"kmsKeyName" : string ,
"kmsServiceAccountId" : string ,
"storageLocation" : string ,
"disableDefaultSink" : boolean ,
"defaultSinkConfig" : {
object ( DefaultSinkConfig )
} ,
"loggingServiceAccountId" : string
}
Fields
name
string
Output only. The resource name of the settings.
kmsKeyName
string
Optional. The resource name for the configured Cloud KMS key.
KMS key name format:
"projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]"
For example:
"projects/my-project/locations/us-central1/keyRings/my-ring/cryptoKeys/my-key"
To enable CMEK, set this field to a valid kmsKeyName for which the associated service account has the required roles/cloudkms.cryptoKeyEncrypterDecrypter role assigned for the key.
The Cloud KMS key used by the Log Router can be updated by changing the kmsKeyName to a new valid key name.
To disable CMEK for the Log Router, set this field to an empty string.
See Configure CMEK for Cloud Logging for more information.
kmsServiceAccountId
string
Output only. The service account that will be used by the Log Router to access your Cloud KMS key.
Before enabling CMEK, you must first assign the role roles/cloudkms.cryptoKeyEncrypterDecrypter to the service account that will be used to access your Cloud KMS key. Use v2.getSettings to obtain the service account ID.
See Configure CMEK for Cloud Logging for more information.
storageLocation
string
Optional. The storage location for the _Default and _Required log buckets of newly created projects and folders, unless the storage location is explicitly provided.
Example value: europe-west1 .
Note: this setting does not affect the location of resources where a location is explicitly provided when created, such as custom log buckets.
disableDefaultSink
boolean
Optional. If set to true, the _Default sink in newly created projects and folders will created in a disabled state. This can be used to automatically disable log storage if there is already an aggregated sink configured in the hierarchy. The _Default sink can be re-enabled manually if needed.
defaultSinkConfig
object ( DefaultSinkConfig )
Optional. Overrides the built-in configuration for _Default sink.
loggingServiceAccountId
string
Output only. The service account for the given resource container, such as project or folder. Log sinks use this service account as their writerIdentity if no custom service account is provided in the request when calling the create sink method.
DefaultSinkConfig
Describes the custom _Default sink configuration that is used to override the built-in _Default sink configuration in newly created resource containers, such as projects or folders.
JSON representation
{
"filter" : string ,
"exclusions" : [
{
object ( LogExclusion )
}
] ,
"mode" : enum ( FilterWriteMode )
}
Fields
filter
string
Optional. An advanced logs filter . The only exported log entries are those that are in the resource owning the sink and that match the filter.
For example:
logName="projects/[PROJECT_ID]/logs/[LOG_ID]" AND severity>=ERROR
To match all logs, don't add exclusions and use the following line as the value of filter :
logName:*
Cannot be empty or unset when the value of mode is OVERWRITE .
exclusions[]
object ( LogExclusion )
Optional. Specifies the set of exclusions to be added to the _Default sink in newly created resource containers.
mode
enum ( FilterWriteMode )
Required. Determines the behavior to apply to the built-in _Default sink inclusion filter.
Exclusions are always appended, as built-in _Default sinks have no exclusions.
FilterWriteMode
Behavior to apply to the built-in _Default sink inclusion filter.
Enums
FILTER_WRITE_MODE_UNSPECIFIED
The filter's write mode is unspecified. This mode must not be used.
APPEND
The contents of filter will be appended to the built-in _Default sink filter. Using the append mode with an empty filter will keep the sink inclusion filter unchanged.
OVERWRITE
The contents of filter will overwrite the built-in _Default sink filter.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-01-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-27 UTC."],[],[]]
