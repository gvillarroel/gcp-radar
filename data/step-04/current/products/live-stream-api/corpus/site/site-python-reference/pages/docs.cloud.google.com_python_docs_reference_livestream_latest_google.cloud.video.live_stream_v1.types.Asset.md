---
title: "Class Asset (1.16.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.types.Asset
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/livestream/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.types.Asset
  title: "Class Asset (1.16.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
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
Class Asset (1.16.0)
Stay organized with collections
Save and categorize content based on your preferences.
1.16.0 (latest)
1.15.0
1.14.0
1.13.0
1.12.0
1.11.0
1.10.0
1.9.1
1.8.1
1.7.4
1.6.0
1.5.2
1.4.1
1.3.0
1.2.1
1.1.0
1.0.4
0.2.0
0.1.5
Asset ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
An asset represents a video or an image.
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
The resource name of the asset, in the form of:
projects/{project}/locations/{location}/assets/{assetId} .
create_time
google.protobuf.timestamp_pb2.Timestamp
Output only. The creation time.
update_time
google.protobuf.timestamp_pb2.Timestamp
Output only. The update time.
labels
MutableMapping[str, str]
User-defined key/value metadata.
video
google.cloud.video.live_stream_v1.types.Asset.VideoAsset
VideoAsset represents a video.
This field is a member of oneof _ resource .
image
google.cloud.video.live_stream_v1.types.Asset.ImageAsset
ImageAsset represents an image.
This field is a member of oneof _ resource .
crc32c
str
Based64-encoded CRC32c checksum of the asset file. For more
information, see the crc32c checksum of the `Cloud Storage
Objects
resource
state
google.cloud.video.live_stream_v1.types.Asset.State
Output only. The state of the asset resource.
error
google.rpc.status_pb2.Status
Output only. Only present when state is ERROR . The
reason for the error state of the asset.
Classes
ImageAsset
ImageAsset ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Image represents an image. The supported formats are JPEG,
PNG.
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
State
State ( value )
State of the asset resource.
VideoAsset
VideoAsset ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
VideoAsset represents a video. The supported formats are MP4,
MPEG-TS, and FLV. The supported video codec is H264. The
supported audio codecs are AAC, AC3, MP2, and MP3.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
