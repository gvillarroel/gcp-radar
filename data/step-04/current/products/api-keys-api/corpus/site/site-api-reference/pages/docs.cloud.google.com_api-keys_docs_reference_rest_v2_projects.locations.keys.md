---
title: "REST Resource: projects.locations.keys \_|\_ API Keys API Documentation \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/api-keys/docs/reference/rest/v2/projects.locations.keys
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/api-keys/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/api-keys/docs/reference/rest/v2/projects.locations.keys
  title: "REST Resource: projects.locations.keys \_|\_ API Keys API Documentation\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
API Keys API Documentation
Reference
Send feedback
REST Resource: projects.locations.keys
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Key
JSON representation
Restrictions
JSON representation
BrowserKeyRestrictions
JSON representation
ServerKeyRestrictions
JSON representation
AndroidKeyRestrictions
JSON representation
AndroidApplication
JSON representation
IosKeyRestrictions
JSON representation
ApiTarget
JSON representation
Methods
Resource: Key
The representation of a key managed by the API Keys API.
JSON representation
{
"name" : string ,
"uid" : string ,
"displayName" : string ,
"keyString" : string ,
"createTime" : string ,
"updateTime" : string ,
"deleteTime" : string ,
"annotations" : {
string : string ,
...
} ,
"restrictions" : {
object ( Restrictions )
} ,
"etag" : string ,
"serviceAccountEmail" : string
}
Fields
name
string
Output only. The resource name of the key. The name has the form: projects/<PROJECT_NUMBER>/locations/global/keys/<KEY_ID> . For example: projects/123456867718/locations/global/keys/b7ff1f9f-8275-410a-94dd-3855ee9b5dd2
NOTE: Key is a global resource; hence the only supported value for location is global .
uid
string
Output only. Unique id in UUID4 format.
displayName
string
Human-readable display name of this key that you can modify. The maximum length is 63 characters.
keyString
string
Output only. An encrypted and signed value held by this key. This field can be accessed only through the keys.getKeyString method.
createTime
string ( Timestamp format)
Output only. A timestamp identifying the time this key was originally created.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. A timestamp identifying the time this key was last updated.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
deleteTime
string ( Timestamp format)
Output only. A timestamp when this key was deleted. If the resource is not deleted, this must be empty.
Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
annotations
map (key: string, value: string)
Annotations is an unstructured key-value map stored with a policy that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
restrictions
object ( Restrictions )
Key restrictions.
etag
string
Output only. A checksum computed by the server based on the current value of the Key resource. This may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. See https://google.aip.dev/154 .
serviceAccountEmail
string
Optional. The email address of the service account the key is bound to.
Restrictions
Describes the restrictions on the key.
JSON representation
{
"apiTargets" : [
{
object ( ApiTarget )
}
] ,
// Union field client_restrictions can be only one of the following:
"browserKeyRestrictions" : {
object ( BrowserKeyRestrictions )
} ,
"serverKeyRestrictions" : {
object ( ServerKeyRestrictions )
} ,
"androidKeyRestrictions" : {
object ( AndroidKeyRestrictions )
} ,
"iosKeyRestrictions" : {
object ( IosKeyRestrictions )
}
// End of list of possible types for union field client_restrictions .
}
Fields
apiTargets[]
object ( ApiTarget )
A restriction for a specific service and optionally one or more specific methods. Requests are allowed if they match any of these restrictions. If no restrictions are specified, all targets are allowed.
Union field client_restrictions . The websites, IP addresses, Android apps, or iOS apps (the clients) that are allowed to use the key. You can specify only one type of client restrictions per key. client_restrictions can be only one of the following:
browserKeyRestrictions
object ( BrowserKeyRestrictions )
The HTTP referrers (websites) that are allowed to use the key.
serverKeyRestrictions
object ( ServerKeyRestrictions )
The IP addresses of callers that are allowed to use the key.
androidKeyRestrictions
object ( AndroidKeyRestrictions )
The Android apps that are allowed to use the key.
iosKeyRestrictions
object ( IosKeyRestrictions )
The iOS apps that are allowed to use the key.
BrowserKeyRestrictions
The HTTP referrers (websites) that are allowed to use the key.
JSON representation
{
"allowedReferrers" : [
string
]
}
Fields
allowedReferrers[]
string
A list of regular expressions for the referrer URLs that are allowed to make API calls with this key.
ServerKeyRestrictions
The IP addresses of callers that are allowed to use the key.
JSON representation
{
"allowedIps" : [
string
]
}
Fields
allowedIps[]
string
A list of the caller IP addresses that are allowed to make API calls with this key.
AndroidKeyRestrictions
The Android apps that are allowed to use the key.
JSON representation
{
"allowedApplications" : [
{
object ( AndroidApplication )
}
]
}
Fields
allowedApplications[]
object ( AndroidApplication )
A list of Android applications that are allowed to make API calls with this key.
AndroidApplication
Identifier of an Android application for key use.
JSON representation
{
"sha1Fingerprint" : string ,
"packageName" : string
}
Fields
sha1Fingerprint
string
The SHA1 fingerprint of the application. For example, both sha1 formats are acceptable : DA:39:A3:EE:5E:6B:4B:0D:32:55:BF:EF:95:60:18:90:AF:D8:07:09 or DA39A3EE5E6B4B0D3255BFEF95601890AFD80709. Output format is the latter.
packageName
string
The package name of the application.
IosKeyRestrictions
The iOS apps that are allowed to use the key.
JSON representation
{
"allowedBundleIds" : [
string
]
}
Fields
allowedBundleIds[]
string
A list of bundle IDs that are allowed when making API calls with this key.
ApiTarget
A restriction for a specific service and optionally one or multiple specific methods. Both fields are case insensitive.
JSON representation
{
"service" : string ,
"methods" : [
string
]
}
Fields
service
string
The service for this restriction. It should be the canonical service name, for example: translate.googleapis.com . You can use gcloud services
list to get a list of services that are enabled in the project.
methods[]
string
Optional. List of one or more methods that can be called. If empty, all methods for the service are allowed. A wildcard (*) can be used as the last symbol. Valid examples: google.cloud.translate.v2.TranslateService.GetSupportedLanguage TranslateText Get* translate.googleapis.com.Get*
Methods
create
Creates a new API key.
delete
Deletes an API key.
get
Gets the metadata for an API key.
getKeyString
Get the key string for an API key.
list
Lists the API keys owned by a project.
patch
Patches the modifiable fields of an API key.
undelete
Undeletes an API key which was deleted within 30 days.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-26 UTC."],[],[]]
