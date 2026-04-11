---
title: "REST Resource: projects.locations.assets \_|\_ Live Stream API \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.assets
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/livestream/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.assets
  title: "REST Resource: projects.locations.assets \_|\_ Live Stream API \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Live Stream API
Reference
Send feedback
REST Resource: projects.locations.assets
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Asset
JSON representation
VideoAsset
JSON representation
ImageAsset
JSON representation
State
Methods
Resource: Asset
An asset represents a video or an image.
JSON representation
{
"name" : string ,
"createTime" : string ,
"updateTime" : string ,
"labels" : {
string : string ,
...
} ,
"crc32c" : string ,
"state" : enum ( State ) ,
"error" : {
object ( Status )
} ,
// Union field resource can be only one of the following:
"video" : {
object ( VideoAsset )
} ,
"image" : {
object ( ImageAsset )
}
// End of list of possible types for union field resource .
}
Fields
name
string
The resource name of the asset, in the form of: projects/{project}/locations/{location}/assets/{assetId} .
createTime
string ( Timestamp format)
Output only. The creation time.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. The update time.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
labels
map (key: string, value: string)
User-defined key/value metadata.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
crc32c
string
Based64-encoded CRC32c checksum of the asset file. For more information, see the crc32c checksum of the Cloud Storage Objects resource . If crc32c is omitted or left empty when the asset is created, this field is filled by the crc32c checksum of the Cloud Storage object indicated by VideoAsset.uri or ImageAsset.uri . If crc32c is set, the asset can't be created if the crc32c value does not match with the crc32c checksum of the Cloud Storage object indicated by VideoAsset.uri or ImageAsset.uri .
state
enum ( State )
Output only. The state of the asset resource.
error
object ( Status )
Output only. Only present when state is ERROR . The reason for the error state of the asset.
Union field resource . The reference to the asset. The maximum size of the resource is 250 MB. resource can be only one of the following:
video
object ( VideoAsset )
VideoAsset represents a video.
image
object ( ImageAsset )
ImageAsset represents an image.
VideoAsset
VideoAsset represents a video. The supported formats are MP4, MPEG-TS, and FLV. The supported video codec is H264. The supported audio codecs are AAC, AC3, MP2, and MP3.
JSON representation
{
"uri" : string
}
Fields
uri
string
Cloud Storage URI of the video. The format is gs://my-bucket/my-object .
ImageAsset
Image represents an image. The supported formats are JPEG, PNG.
JSON representation
{
"uri" : string
}
Fields
uri
string
Cloud Storage URI of the image. The format is gs://my-bucket/my-object .
State
State of the asset resource.
Enums
STATE_UNSPECIFIED
State is not specified.
CREATING
The asset is being created.
ACTIVE
The asset is ready for use.
DELETING
The asset is being deleted.
ERROR
The asset has an error.
Methods
create
Creates a Asset with the provided unique ID in the specified region.
delete
Deletes the specified asset if it is not used.
get
Returns the specified asset.
list
Returns a list of all assets in the specified region.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-10 UTC."],[],[]]
