---
title: "REST Resource: projects.locations.cdnKeys \_|\_ Video Stitcher API \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/video-stitcher/docs/reference/rest/v1/projects.locations.cdnKeys
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/video-stitcher/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/video-stitcher/docs/reference/rest/v1/projects.locations.cdnKeys
  title: "REST Resource: projects.locations.cdnKeys \_|\_ Video Stitcher API \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To enable the Video Stitcher API for your project, please reach out to your Account Representative or contact Sales to learn more.
Home
Documentation
AI and ML
Video Stitcher API
Reference
Send feedback
REST Resource: projects.locations.cdnKeys
Stay organized with collections
Save and categorize content based on your preferences.
Resource: CdnKey
JSON representation
GoogleCdnKey
JSON representation
AkamaiCdnKey
JSON representation
MediaCdnKey
JSON representation
TokenConfig
JSON representation
Methods
Resource: CdnKey
Configuration for a CDN key. Used by the Video Stitcher to sign URIs for fetching video manifests and signing media segments for playback.
JSON representation
{
"name" : string ,
"hostname" : string ,
// Union field cdn_key_config can be only one of the following:
"googleCdnKey" : {
object ( GoogleCdnKey )
} ,
"akamaiCdnKey" : {
object ( AkamaiCdnKey )
} ,
"mediaCdnKey" : {
object ( MediaCdnKey )
}
// End of list of possible types for union field cdn_key_config .
}
Fields
name
string
The resource name of the CDN key, in the form of projects/{project}/locations/{location}/cdnKeys/{id} . The name is ignored when creating a CDN key.
hostname
string
The hostname this key applies to.
Union field cdn_key_config . Configuration associated with the CDN key. cdn_key_config can be only one of the following:
googleCdnKey
object ( GoogleCdnKey )
The configuration for a Google Cloud CDN key.
akamaiCdnKey
object ( AkamaiCdnKey )
The configuration for an Akamai CDN key.
mediaCdnKey
object ( MediaCdnKey )
The configuration for a Media CDN key.
GoogleCdnKey
Configuration for a Google Cloud CDN key.
JSON representation
{
"privateKey" : string ,
"keyName" : string
}
Fields
privateKey
string ( bytes format)
Input only. Secret for this Google Cloud CDN key.
A base64-encoded string.
keyName
string
The public name of the Google Cloud CDN key.
AkamaiCdnKey
Configuration for an Akamai CDN key.
JSON representation
{
"tokenKey" : string
}
Fields
tokenKey
string ( bytes format)
Input only. Token key for the Akamai CDN edge configuration.
A base64-encoded string.
MediaCdnKey
Configuration for a Media CDN key.
JSON representation
{
"privateKey" : string ,
"keyName" : string ,
"tokenConfig" : {
object ( TokenConfig )
}
}
Fields
privateKey
string ( bytes format)
Input only. 64-byte ed25519 private key for this Media CDN key.
A base64-encoded string.
keyName
string
The keyset name of the Media CDN key.
tokenConfig
object ( TokenConfig )
Optional. If set, the URL will be signed using the Media CDN token. Otherwise, the URL would be signed using the standard Media CDN signature.
TokenConfig
Configuration for a Media CDN token.
JSON representation
{
"queryParameter" : string
}
Fields
queryParameter
string
Optional. The query parameter in which to find the token.
The name must be 1-64 characters long and match the regular expression [a-zA-Z]([a-zA-Z0-9_-])* which means the first character must be a letter, and all following characters must be a dash, underscore, letter or digit.
Defaults to edge-cache-token .
Methods
create
Creates a new CDN key.
delete
Deletes the specified CDN key.
get
Returns the specified CDN key.
list
Lists all CDN keys in the specified project and location.
patch
Updates the specified CDN key.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-14 UTC."],[],[]]
