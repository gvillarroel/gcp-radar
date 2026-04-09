---
title: "Package google.api.apikeys.v2 \_|\_ API Keys API Documentation \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/api-keys/docs/reference/rpc/google.api.apikeys.v2
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/api-keys/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/api-keys/docs/reference/rpc/google.api.apikeys.v2
  title: "Package google.api.apikeys.v2 \_|\_ API Keys API Documentation \_|\_ Google\
    \ Cloud Documentation"
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
Package google.api.apikeys.v2
Stay organized with collections
Save and categorize content based on your preferences.
Index
ApiKeys (interface)
AndroidApplication (message)
AndroidKeyRestrictions (message)
ApiTarget (message)
BrowserKeyRestrictions (message)
CreateKeyRequest (message)
DeleteKeyRequest (message)
GetKeyRequest (message)
GetKeyStringRequest (message)
GetKeyStringResponse (message)
IosKeyRestrictions (message)
Key (message)
ListKeysRequest (message)
ListKeysResponse (message)
LookupKeyRequest (message)
LookupKeyResponse (message)
Restrictions (message)
ServerKeyRestrictions (message)
UndeleteKeyRequest (message)
UpdateKeyRequest (message)
ApiKeys
Manages the API keys associated with projects.
CreateKey
rpc CreateKey( CreateKeyRequest ) returns ( Operation )
Creates a new API key.
NOTE: Key is a global resource; hence the only supported value for location is global .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
apikeys.keys.create
For more information, see the IAM documentation .
DeleteKey
rpc DeleteKey( DeleteKeyRequest ) returns ( Operation )
Deletes an API key. Deleted key can be retrieved within 30 days of deletion. Afterward, key will be purged from the project.
NOTE: Key is a global resource; hence the only supported value for location is global .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
apikeys.keys.delete
For more information, see the IAM documentation .
GetKey
rpc GetKey( GetKeyRequest ) returns ( Key )
Gets the metadata for an API key. The key string of the API key isn't included in the response.
NOTE: Key is a global resource; hence the only supported value for location is global .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-platform.read-only
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
apikeys.keys.get
For more information, see the IAM documentation .
GetKeyString
rpc GetKeyString( GetKeyStringRequest ) returns ( GetKeyStringResponse )
Get the key string for an API key.
NOTE: Key is a global resource; hence the only supported value for location is global .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-platform.read-only
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
apikeys.keys.getKeyString
For more information, see the IAM documentation .
ListKeys
rpc ListKeys( ListKeysRequest ) returns ( ListKeysResponse )
Lists the API keys owned by a project. The key string of the API key isn't included in the response.
NOTE: Key is a global resource; hence the only supported value for location is global .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-platform.read-only
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
apikeys.keys.list
For more information, see the IAM documentation .
LookupKey
rpc LookupKey( LookupKeyRequest ) returns ( LookupKeyResponse )
Find the parent project and resource name of the API key that matches the key string in the request. If the API key has been purged, resource name will not be set. The service account must have the apikeys.keys.lookup permission on the parent project.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-platform.read-only
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
UndeleteKey
rpc UndeleteKey( UndeleteKeyRequest ) returns ( Operation )
Undeletes an API key which was deleted within 30 days.
NOTE: Key is a global resource; hence the only supported value for location is global .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
apikeys.keys.undelete
For more information, see the IAM documentation .
UpdateKey
rpc UpdateKey( UpdateKeyRequest ) returns ( Operation )
Patches the modifiable fields of an API key. The key string of the API key isn't included in the response.
NOTE: Key is a global resource; hence the only supported value for location is global .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
apikeys.keys.update
For more information, see the IAM documentation .
AndroidApplication
Identifier of an Android application for key use.
Fields
sha1_fingerprint
string
The SHA1 fingerprint of the application. For example, both sha1 formats are acceptable : DA:39:A3:EE:5E:6B:4B:0D:32:55:BF:EF:95:60:18:90:AF:D8:07:09 or DA39A3EE5E6B4B0D3255BFEF95601890AFD80709. Output format is the latter.
package_name
string
The package name of the application.
AndroidKeyRestrictions
The Android apps that are allowed to use the key.
Fields
allowed_applications[]
AndroidApplication
A list of Android applications that are allowed to make API calls with this key.
ApiTarget
A restriction for a specific service and optionally one or multiple specific methods. Both fields are case insensitive.
Fields
service
string
The service for this restriction. It should be the canonical service name, for example: translate.googleapis.com . You can use gcloud services
list to get a list of services that are enabled in the project.
methods[]
string
Optional. List of one or more methods that can be called. If empty, all methods for the service are allowed. A wildcard (*) can be used as the last symbol. Valid examples: google.cloud.translate.v2.TranslateService.GetSupportedLanguage TranslateText Get* translate.googleapis.com.Get*
BrowserKeyRestrictions
The HTTP referrers (websites) that are allowed to use the key.
Fields
allowed_referrers[]
string
A list of regular expressions for the referrer URLs that are allowed to make API calls with this key.
CreateKeyRequest
Request message for CreateKey method.
Fields
parent
string
Required. The project in which the API key is created.
Authorization requires the following IAM permission on the specified resource parent :
apikeys.keys.create
key
Key
Required. The API key fields to set at creation time. You can configure only the display_name , restrictions , and annotations fields.
key_id
string
User specified key id (optional). If specified, it will become the final component of the key resource name.
The id must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. In another word, the id must match the regular expression: [a-z]([a-z0-9-]{0,61}[a-z0-9])? .
The id must NOT be a UUID-like string.
DeleteKeyRequest
Request message for DeleteKey method.
Fields
name
string
Required. The resource name of the API key to be deleted.
Authorization requires the following IAM permission on the specified resource name :
apikeys.keys.delete
etag
string
Optional. The etag known to the client for the expected state of the key. This is to be used for optimistic concurrency.
GetKeyRequest
Request message for GetKey method.
Fields
name
string
Required. The resource name of the API key to get.
Authorization requires the following IAM permission on the specified resource name :
apikeys.keys.get
GetKeyStringRequest
Request message for GetKeyString method.
Fields
name
string
Required. The resource name of the API key to be retrieved.
Authorization requires the following IAM permission on the specified resource name :
apikeys.keys.getKeyString
GetKeyStringResponse
Response message for GetKeyString method.
Fields
key_string
string
An encrypted and signed value of the key.
IosKeyRestrictions
The iOS apps that are allowed to use the key.
Fields
allowed_bundle_ids[]
string
A list of bundle IDs that are allowed when making API calls with this key.
Key
The representation of a key managed by the API Keys API.
Fields
name
string
Output only. The resource name of the key. The name has the form: projects/<PROJECT_NUMBER>/locations/global/keys/<KEY_ID> . For example: projects/123456867718/locations/global/keys/b7ff1f9f-8275-410a-94dd-3855ee9b5dd2
NOTE: Key is a global resource; hence the only supported value for location is global .
uid
string
Output only. Unique id in UUID4 format.
display_name
string
Human-readable display name of this key that you can modify. The maximum length is 63 characters.
key_string
string
Output only. An encrypted and signed value held by this key. This field can be accessed only through the GetKeyString method.
create_time
Timestamp
Output only. A timestamp identifying the time this key was originally created.
update_time
Timestamp
Output only. A timestamp identifying the time this key was last updated.
delete_time
Timestamp
Output only. A timestamp when this key was deleted. If the resource is not deleted, this must be empty.
annotations
map<string, string>
Annotations is an unstructured key-value map stored with a policy that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects.
restrictions
Restrictions
Key restrictions.
etag
string
Output only. A checksum computed by the server based on the current value of the Key resource. This may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. See https://google.aip.dev/154 .
service_account_email
string
Optional. The email address of the service account the key is bound to.
ListKeysRequest
Request message for ListKeys method.
Fields
parent
string
Required. Lists all API keys associated with this project.
Authorization requires the following IAM permission on the specified resource parent :
apikeys.keys.list
page_size
int32
Optional. Specifies the maximum number of results to be returned at a time.
page_token
string
Optional. Requests a specific page of results.
show_deleted
bool
Optional. Indicate that keys deleted in the past 30 days should also be returned.
ListKeysResponse
Response message for ListKeys method.
Fields
keys[]
Key
A list of API keys.
next_page_token
string
The pagination token for the next page of results.
LookupKeyRequest
Request message for LookupKey method.
Fields
key_string
string
Required. Finds the project that owns the key string value.
LookupKeyResponse
Response message for LookupKey method.
Fields
parent
string
The project that owns the key with the value specified in the request.
name
string
The resource name of the API key. If the API key has been purged, resource name is empty.
Restrictions
Describes the restrictions on the key.
Fields
api_targets[]
ApiTarget
A restriction for a specific service and optionally one or more specific methods. Requests are allowed if they match any of these restrictions. If no restrictions are specified, all targets are allowed.
Union field client_restrictions . The websites, IP addresses, Android apps, or iOS apps (the clients) that are allowed to use the key. You can specify only one type of client restrictions per key. client_restrictions can be only one of the following:
browser_key_restrictions
BrowserKeyRestrictions
The HTTP referrers (websites) that are allowed to use the key.
server_key_restrictions
ServerKeyRestrictions
The IP addresses of callers that are allowed to use the key.
android_key_restrictions
AndroidKeyRestrictions
The Android apps that are allowed to use the key.
ios_key_restrictions
IosKeyRestrictions
The iOS apps that are allowed to use the key.
ServerKeyRestrictions
The IP addresses of callers that are allowed to use the key.
Fields
allowed_ips[]
string
A list of the caller IP addresses that are allowed to make API calls with this key.
UndeleteKeyRequest
Request message for UndeleteKey method.
Fields
name
string
Required. The resource name of the API key to be undeleted.
Authorization requires the following IAM permission on the specified resource name :
apikeys.keys.undelete
UpdateKeyRequest
Request message for UpdateKey method.
Fields
key
Key
Required. Set the name field to the resource name of the API key to be updated. You can update only the display_name , restrictions , and annotations fields.
Authorization requires the following IAM permission on the specified resource key :
apikeys.keys.update
update_mask
FieldMask
The field mask specifies which fields to be updated as part of this request. All other fields are ignored. Mutable fields are: display_name , restrictions , and annotations . If an update mask is not provided, the service treats it as an implied mask equivalent to all allowed fields that are set on the wire. If the field mask has a special value "*", the service treats it equivalent to replace all allowed mutable fields.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-26 UTC."],[],[]]
