---
title: "Package types (1.16.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.types
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/livestream/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/livestream/latest/google.cloud.video.live_stream_v1.types
  title: "Package types (1.16.0) \_|\_ Python client libraries \_|\_ Google Cloud\
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
Package types (1.16.0)
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
API documentation for video.live_stream_v1.types package.
Classes
Asset
An asset represents a video or an image.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
AudioFormat
Properties of the audio format.
AudioStream
Audio stream resource.
AudioStreamProperty
Properties of the audio stream.
AutoTranscriptionConfig
Advanced configurations for auto-generated text streams.
Channel
Channel resource represents the processor that does a
user-defined "streaming" operation, which includes getting an
input stream through an input, transcoding it to multiple
renditions, and publishing output live streams in certain
formats (for example, HLS or DASH) to the specified location.
ChannelOperationResponse
Response message for Start/Stop Channel long-running
operations.
Clip
Clip is a sub-resource under channel. Each clip represents a
clipping operation that generates a VOD playlist from its
channel given a set of timestamp ranges.
CreateAssetRequest
Request message for "LivestreamService.CreateAsset".
CreateChannelRequest
Request message for "LivestreamService.CreateChannel".
CreateClipRequest
Request message for "LivestreamService.CreateClip".
CreateDvrSessionRequest
Request message for "LivestreamService.CreateDvrSession".
CreateEventRequest
Request message for "LivestreamService.CreateEvent".
CreateInputRequest
Request message for "LivestreamService.CreateInput".
DeleteAssetRequest
Request message for "LivestreamService.DeleteAsset".
DeleteChannelRequest
Request message for "LivestreamService.DeleteChannel".
DeleteClipRequest
Request message for "LivestreamService.DeleteClip".
DeleteDvrSessionRequest
Request message for "LivestreamService.DeleteDvrSession".
DeleteEventRequest
Request message for "LivestreamService.DeleteEvent".
DeleteInputRequest
Request message for "LivestreamService.DeleteInput".
Distribution
Distribution configuration.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
DistributionStream
Multiplexing settings for output streams used in
Distribution .
DvrSession
DvrSession is a sub-resource under channel. Each DvrSession
represents a DVR recording of the live stream for a specific
time range.
ElementaryStream
Encoding of an input element such as an audio, video, or text
track. Elementary streams must be packaged before mapping and
sharing between different output formats.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Encryption
Encryption settings.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
EncryptionUpdate
Encryption setting when updating encryption.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
Event
Event is a sub-resource of a channel, which can be scheduled
by the user to execute operations on a channel resource without
having to stop the channel.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
GetAssetRequest
Request message for "LivestreamService.GetAsset".
GetChannelRequest
Request message for "LivestreamService.GetChannel".
GetClipRequest
Request message for "LivestreamService.GetClip".
GetDvrSessionRequest
Request message for "LivestreamService.GetDvrSession".
GetEventRequest
Request message for "LivestreamService.GetEvent".
GetInputRequest
Request message for "LivestreamService.GetInput".
GetPoolRequest
Request message for "LivestreamService.GetPool".
Input
Input resource represents the endpoint from which the channel
ingests the input stream.
InputAttachment
A group of information for attaching an input resource to
this channel.
InputConfig
Configuration for the input sources of a channel.
InputStreamProperty
Properties of the input stream.
ListAssetsRequest
Request message for "LivestreamService.ListAssets".
ListAssetsResponse
Response message for "LivestreamService.ListAssets".
ListChannelsRequest
Request message for "LivestreamService.ListChannels".
ListChannelsResponse
Response message for "LivestreamService.ListChannels".
ListClipsRequest
Request message for "LivestreamService.ListClips".
ListClipsResponse
Response message for "LivestreamService.ListClips".
ListDvrSessionsRequest
Request message for "LivestreamService.ListDvrSessions".
ListDvrSessionsResponse
Response message for "LivestreamService.ListDvrSessions".
ListEventsRequest
Request message for "LivestreamService.ListEvents".
ListEventsResponse
Response message for "LivestreamService.ListEvents".
ListInputsRequest
Request message for "LivestreamService.ListInputs".
ListInputsResponse
Response message for "LivestreamService.ListInputs".
LogConfig
Configuration of platform logs. See Using and managing platform
logs <https://cloud.google.com/logging/docs/api/platform-logs#managing-logs> __
for more information about how to view platform logs through Cloud
Logging.
Manifest
Manifest configuration.
MuxStream
Multiplexing settings for output stream.
NormalizedCoordinate
2D normalized coordinates.
NormalizedResolution
Normalized resolution.
OperationMetadata
Represents the metadata of the long-running operation.
Pool
Pool resource defines the configuration of Live Stream pools
for a specific location. Currently we support only one pool
resource per project per location. After the creation of the
first input, a default pool is created automatically at
"projects/{project}/locations/{location}/pools/default".
PreprocessingConfig
Preprocessing configurations.
PreviewInputRequest
Request message for "LivestreamService.PreviewInput".
PreviewInputResponse
Response message for "LivestreamService.PreviewInput".
RetentionConfig
Configuration for retention of output files.
RtmpPushOutputEndpoint
Configurations for an output endpoint using RTMP_PUSH as the
streaming protocol.
SegmentSettings
Segment settings for fmp4 and ts .
SpriteSheet
Sprite sheet configuration.
SrtPushOutputEndpoint
Configurations for an output endpoint using SRT_PUSH as the
streaming protocol.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
StartChannelRequest
Request message for "LivestreamService.StartChannel".
StartDistributionRequest
Request message for "LivestreamService.StartDistribution".
StaticOverlay
Configuration for the static overlay.
StopChannelRequest
Request message for "LivestreamService.StopChannel".
StopDistributionRequest
Request message for "LivestreamService.StopDistribution".
TextStream
Encoding of a text stream. For example, closed captions or
subtitles.
TimeInterval
TimeInterval represents a time interval.
TimecodeConfig
Timecode configuration.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
UpdateChannelRequest
Request message for "LivestreamService.UpdateChannel".
UpdateDvrSessionRequest
Request message for "LivestreamService.UpdateDvrSession".
UpdateInputRequest
Request message for "LivestreamService.UpdateInput".
UpdatePoolRequest
Request message for "LivestreamService.UpdatePool".
VideoFormat
Properties of the video format.
VideoStream
Video stream resource.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
VideoStreamProperty
Properties of the video stream.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
