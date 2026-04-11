---
title: "REST Resource: projects.locations.channels \_|\_ Live Stream API \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/livestream/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/livestream/docs/reference/rest/v1/projects.locations.channels
  title: "REST Resource: projects.locations.channels \_|\_ Live Stream API \_|\_ Google\
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
REST Resource: projects.locations.channels
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Channel
JSON representation
InputAttachment
JSON representation
AutomaticFailover
JSON representation
Output
JSON representation
ElementaryStream
JSON representation
VideoStream
JSON representation
H264CodecSettings
JSON representation
H265CodecSettings
JSON representation
AudioStream
JSON representation
AudioMapping
JSON representation
TextStream
JSON representation
TextMapping
JSON representation
MuxStream
JSON representation
SegmentSettings
JSON representation
Manifest
JSON representation
ManifestType
DistributionStream
JSON representation
Distribution
JSON representation
State
SrtPushOutputEndpoint
JSON representation
RtmpPushOutputEndpoint
JSON representation
SpriteSheet
JSON representation
StreamingState
LogConfig
JSON representation
LogSeverity
TimecodeConfig
JSON representation
TimecodeSource
TimeZone
JSON representation
Encryption
JSON representation
DrmSystems
JSON representation
Widevine
Fairplay
Playready
Clearkey
Aes128Encryption
SampleAesEncryption
MpegCommonEncryption
JSON representation
InputConfig
JSON representation
InputSwitchMode
RetentionConfig
JSON representation
StaticOverlay
JSON representation
NormalizedResolution
JSON representation
NormalizedCoordinate
JSON representation
AutoTranscriptionConfig
JSON representation
DisplayTiming
QualityPreset
Methods
Resource: Channel
Channel resource represents the processor that does a user-defined "streaming" operation, which includes getting an input stream through an input, transcoding it to multiple renditions, and publishing output live streams in certain formats (for example, HLS or DASH) to the specified location.
JSON representation
{
"name" : string ,
"createTime" : string ,
"updateTime" : string ,
"labels" : {
string : string ,
...
} ,
"inputAttachments" : [
{
object ( InputAttachment )
}
] ,
"activeInput" : string ,
"output" : {
object ( Output )
} ,
"elementaryStreams" : [
{
object ( ElementaryStream )
}
] ,
"muxStreams" : [
{
object ( MuxStream )
}
] ,
"manifests" : [
{
object ( Manifest )
}
] ,
"distributionStreams" : [
{
object ( DistributionStream )
}
] ,
"distributions" : [
{
object ( Distribution )
}
] ,
"spriteSheets" : [
{
object ( SpriteSheet )
}
] ,
"streamingState" : enum ( StreamingState ) ,
"streamingError" : {
object ( Status )
} ,
"logConfig" : {
object ( LogConfig )
} ,
"timecodeConfig" : {
object ( TimecodeConfig )
} ,
"encryptions" : [
{
object ( Encryption )
}
] ,
"inputConfig" : {
object ( InputConfig )
} ,
"retentionConfig" : {
object ( RetentionConfig )
} ,
"staticOverlays" : [
{
object ( StaticOverlay )
}
] ,
"autoTranscriptionConfig" : {
object ( AutoTranscriptionConfig )
}
}
Fields
name
string
The resource name of the channel, in the form of: projects/{project}/locations/{location}/channels/{channelId} .
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
inputAttachments[]
object ( InputAttachment )
A list of input attachments that this channel uses. One channel can have multiple inputs as the input sources. Only one input can be selected as the input source at one time.
activeInput
string
Output only. The InputAttachment.key that serves as the current input source. The first input in the inputAttachments is the initial input source.
output
object ( Output )
Required. Information about the output (that is, the Cloud Storage bucket to store the generated live stream).
elementaryStreams[]
object ( ElementaryStream )
List of elementary streams.
muxStreams[]
object ( MuxStream )
List of multiplexing settings for output streams.
manifests[]
object ( Manifest )
List of output manifests.
distributionStreams[]
object ( DistributionStream )
Optional. List of multiplexing settings of streams for distributions.
distributions[]
object ( Distribution )
Optional. List of distributions.
spriteSheets[]
object ( SpriteSheet )
List of output sprite sheets.
streamingState
enum ( StreamingState )
Output only. State of the streaming operation.
streamingError
object ( Status )
Output only. A description of the reason for the streaming error. This property is always present when streamingState is STREAMING_ERROR .
logConfig
object ( LogConfig )
Configuration of platform logs for this channel.
timecodeConfig
object ( TimecodeConfig )
Configuration of timecode for this channel.
encryptions[]
object ( Encryption )
Optional. Encryption configurations for this channel. Each configuration has an ID which is referred to by each MuxStream to indicate which configuration is used for that output.
inputConfig
object ( InputConfig )
The configuration for input sources defined in inputAttachments .
retentionConfig
object ( RetentionConfig )
Optional. Configuration for retention of output files for this channel.
staticOverlays[]
object ( StaticOverlay )
Optional. List of static overlay images. Those images display over the output content for the whole duration of the live stream.
autoTranscriptionConfig
object ( AutoTranscriptionConfig )
Optional. Advanced configurations for auto-generated text streams.
InputAttachment
A group of information for attaching an input resource to this channel.
JSON representation
{
"key" : string ,
"input" : string ,
"automaticFailover" : {
object ( AutomaticFailover )
}
}
Fields
key
string
A unique key for this input attachment. The key must be 1-63 characters in length. The key must begin and end with a letter (regardless of case) or a number, but can contain dashes or underscores in between.
input
string
The resource name of an existing input, in the form of: projects/{project}/locations/{location}/inputs/{inputId} .
automaticFailover
object ( AutomaticFailover )
Automatic failover configurations.
AutomaticFailover
Configurations to follow when automatic failover happens.
JSON representation
{
"inputKeys" : [
string
]
}
Fields
inputKeys[]
string
The InputAttachment.key s of inputs to failover to when this input is disconnected. Currently, only up to one backup input is supported.
Output
Location of output file(s) in a Google Cloud Storage bucket.
JSON representation
{
"uri" : string
}
Fields
uri
string
URI for the output file(s). For example, gs://my-bucket/outputs/ .
ElementaryStream
Encoding of an input element such as an audio, video, or text track. Elementary streams must be packaged before mapping and sharing between different output formats.
JSON representation
{
"key" : string ,
// Union field elementary_stream can be only one of the following:
"videoStream" : {
object ( VideoStream )
} ,
"audioStream" : {
object ( AudioStream )
} ,
"textStream" : {
object ( TextStream )
}
// End of list of possible types for union field elementary_stream .
}
Fields
key
string
A unique key for this elementary stream. The key must be 1-63 characters in length. The key must begin and end with a letter (regardless of case) or a number, but can contain dashes or underscores in between.
Union field elementary_stream . Required. Encoding of an audio, video, or text track. elementary_stream can be only one of the following:
videoStream
object ( VideoStream )
Encoding of a video stream.
audioStream
object ( AudioStream )
Encoding of an audio stream.
textStream
object ( TextStream )
Encoding of a text stream. For example, closed captions or subtitles.
VideoStream
Video stream resource.
JSON representation
{
// Union field codec_settings can be only one of the following:
"h264" : {
object ( H264CodecSettings )
} ,
"h265" : {
object ( H265CodecSettings )
}
// End of list of possible types for union field codec_settings .
}
Fields
Union field codec_settings . Codec settings. codec_settings can be only one of the following:
h264
object ( H264CodecSettings )
H264 codec settings.
h265
object ( H265CodecSettings )
H265 codec settings.
H264CodecSettings
H264 codec settings.
JSON representation
{
"widthPixels" : integer ,
"heightPixels" : integer ,
"frameRate" : number ,
"bitrateBps" : integer ,
"allowOpenGop" : boolean ,
"vbvSizeBits" : integer ,
"vbvFullnessBits" : integer ,
"entropyCoder" : string ,
"bPyramid" : boolean ,
"bFrameCount" : integer ,
"aqStrength" : number ,
"profile" : string ,
"tune" : string ,
// Union field gop_mode can be only one of the following:
"gopFrameCount" : integer ,
"gopDuration" : string
// End of list of possible types for union field gop_mode .
}
Fields
widthPixels
integer
Required. The width of the video in pixels. Must be an even integer. Valid range is [320, 4096].
heightPixels
integer
Required. The height of the video in pixels. Must be an even integer. Valid range is [180, 2160].
frameRate
number
Required. The target video frame rate in frames per second (FPS). Must be less than or equal to 60. Will default to the input frame rate if larger than the input frame rate. The API will generate an output FPS that is divisible by the input FPS, and smaller or equal to the target FPS. See Calculating frame rate for more information.
bitrateBps
integer
Required. The video bitrate in bits per second. Minimum value is 10,000.
For SD resolution (< 720p), must be <= 3,000,000 (3 Mbps).
For HD resolution (<= 1080p), must be <= 15,000,000 (15 Mbps).
For UHD resolution (<= 2160p), must be <= 25,000,000 (25 Mbps).
allowOpenGop
boolean
Specifies whether an open Group of Pictures (GOP) structure should be allowed or not. The default is false .
vbvSizeBits
integer
Size of the Video Buffering Verifier (VBV) buffer in bits. Must be greater than zero. The default is equal to bitrateBps .
vbvFullnessBits
integer
Initial fullness of the Video Buffering Verifier (VBV) buffer in bits. Must be greater than zero. The default is equal to 90% of vbvSizeBits .
entropyCoder
string
The entropy coder to use. The default is cabac .
Supported entropy coders:
cavlc
cabac
bPyramid
boolean
Allow B-pyramid for reference frame selection. This may not be supported on all decoders. The default is false .
bFrameCount
integer
The number of consecutive B-frames. Must be greater than or equal to zero. Must be less than gopFrameCount if set. The default is 0.
aqStrength
number
Specify the intensity of the adaptive quantizer (AQ). Must be between 0 and 1, where 0 disables the quantizer and 1 maximizes the quantizer. A higher value equals a lower bitrate but smoother image. The default is 0.
profile
string
Enforces the specified codec profile. The following profiles are supported:
baseline
main (default)
high
The available options are FFmpeg-compatible Profile Options . Note that certain values for this field may cause the transcoder to override other fields you set in the H264CodecSettings message.
tune
string
Enforces the specified codec tune. The available options are FFmpeg-compatible Encode Options Note that certain values for this field may cause the transcoder to override other fields you set in the H264CodecSettings message.
Union field gop_mode . GOP mode can be either by frame count or duration. gop_mode can be only one of the following:
gopFrameCount
integer
Select the GOP size based on the specified frame count. If GOP frame count is set instead of GOP duration, GOP duration will be calculated by gopFrameCount / frameRate . The calculated GOP duration must satisfy the limitations on gopDuration as well. Valid range is [60, 600].
gopDuration
string ( Duration format)
Select the GOP size based on the specified duration. The default is 2s . Note that gopDuration must be less than or equal to segmentDuration , and segmentDuration must be divisible by gopDuration . Valid range is [2s, 20s].
All video streams in the same channel must have the same GOP size.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
H265CodecSettings
H265 codec settings.
JSON representation
{
"widthPixels" : integer ,
"heightPixels" : integer ,
"frameRate" : number ,
"bitrateBps" : integer ,
"vbvSizeBits" : integer ,
"vbvFullnessBits" : integer ,
"bPyramid" : boolean ,
"bFrameCount" : integer ,
"aqStrength" : number ,
// Union field gop_mode can be only one of the following:
"gopFrameCount" : integer ,
"gopDuration" : string
// End of list of possible types for union field gop_mode .
}
Fields
widthPixels
integer
Optional. The width of the video in pixels. Must be an even integer. When not specified, the width is adjusted to match the specified height and input aspect ratio. If both are omitted, the input width is used. Valid range is [320, 4096].
heightPixels
integer
Optional. The height of the video in pixels. Must be an even integer. When not specified, the height is adjusted to match the specified width and input aspect ratio. If both are omitted, the input height is used. Valid range is [180, 2160].
frameRate
number
Required. The target video frame rate in frames per second (FPS). Must be less than or equal to 120. Will default to the input frame rate if larger than the input frame rate. The API will generate an output FPS that is divisible by the input FPS, and smaller or equal to the target FPS. See Calculating frame rate for more information.
bitrateBps
integer
Required. The video bitrate in bits per second. Minimum value is 10,000.
For SD resolution (< 720p), must be <= 3,000,000 (3 Mbps).
For HD resolution (<= 1080p), must be <= 15,000,000 (15 Mbps).
For UHD resolution (<= 2160p), must be <= 25,000,000 (25 Mbps).
vbvSizeBits
integer
Optional. Size of the Video Buffering Verifier (VBV) buffer in bits. Must be greater than zero. The default is equal to bitrateBps .
vbvFullnessBits
integer
Optional. Initial fullness of the Video Buffering Verifier (VBV) buffer in bits. Must be greater than zero. The default is equal to 90% of vbvSizeBits .
bPyramid
boolean
Optional. Allow B-pyramid for reference frame selection. This may not be supported on all decoders. The default is false .
bFrameCount
integer
Optional. The number of consecutive B-frames. Must be greater than or equal to zero. Must be less than gopFrameCount if set. The default is 0.
aqStrength
number
Optional. Specify the intensity of the adaptive quantizer (AQ). Must be between 0 and 1, where 0 disables the quantizer and 1 maximizes the quantizer. A higher value equals a lower bitrate but smoother image. The default is 0.
Union field gop_mode . GOP mode can be either by frame count or duration. gop_mode can be only one of the following:
gopFrameCount
integer
Optional. Select the GOP size based on the specified frame count. If GOP frame count is set instead of GOP duration, GOP duration will be calculated by gopFrameCount / frameRate . The calculated GOP duration must satisfy the limitations on gopDuration as well. Valid range is [60, 600].
gopDuration
string ( Duration format)
Optional. Select the GOP size based on the specified duration. The default is 2s . Note that gopDuration must be less than or equal to segmentDuration , and segmentDuration must be divisible by gopDuration . Valid range is [2s, 20s].
All video streams in the same channel must have the same GOP size.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
AudioStream
Audio stream resource.
JSON representation
{
"transmux" : boolean ,
"codec" : string ,
"bitrateBps" : integer ,
"channelCount" : integer ,
"channelLayout" : [
string
] ,
"mapping" : [
{
object ( AudioMapping )
}
] ,
"sampleRateHertz" : integer
}
Fields
transmux
boolean
Specifies whether pass through (transmuxing) is enabled or not. If set to true , the rest of the settings, other than mapping , will be ignored. The default is false .
codec
string
The codec for this audio stream. The default is aac .
Supported audio codecs:
aac
bitrateBps
integer
Required. Audio bitrate in bits per second. Must be between 1 and 10,000,000.
channelCount
integer
Number of audio channels. Must be between 1 and 6. The default is 2.
channelLayout[]
string
A list of channel names specifying layout of the audio channels. This only affects the metadata embedded in the container headers, if supported by the specified format. The default is [fl, fr] .
Supported channel names:
fl - Front left channel
fr - Front right channel
sl - Side left channel
sr - Side right channel
fc - Front center channel
lfe - Low frequency
mapping[]
object ( AudioMapping )
The mapping for the input streams and audio channels.
sampleRateHertz
integer
The audio sample rate in Hertz. The default is 48000 Hertz.
AudioMapping
The mapping for the input streams and audio channels.
JSON representation
{
"inputKey" : string ,
"inputTrack" : integer ,
"inputChannel" : integer ,
"outputChannel" : integer ,
"gainDb" : number
}
Fields
inputKey
string
Required. The Channel InputAttachment.key that identifies the input that this audio mapping applies to. If an active input doesn't have an audio mapping, the primary audio track in the input stream will be selected.
inputTrack
integer
Required. The zero-based index of the track in the input stream. All mapping s in the same AudioStream must have the same input track.
inputChannel
integer
Required. The zero-based index of the channel in the input stream.
outputChannel
integer
Required. The zero-based index of the channel in the output audio stream. Must be consistent with the inputChannel .
gainDb
number
Audio volume control in dB. Negative values decrease volume, positive values increase. The default is 0.
TextStream
Encoding of a text stream. For example, closed captions or subtitles.
JSON representation
{
"codec" : string ,
"languageCode" : string ,
"displayName" : string ,
"outputCeaChannel" : string ,
"mapping" : [
{
object ( TextMapping )
}
]
}
Fields
codec
string
Required. The codec for this text stream.
Supported text codecs:
cea608
cea708
webvtt
languageCode
string
Optional. The BCP-47 language code, such as en-US or sr-Latn . For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier .
displayName
string
Optional. The name for this particular text stream that will be added to the HLS/DASH manifest.
outputCeaChannel
string
Optional. The channel of the closed caption in the output stream. This field should only be set when textstream is used for partner distribution. Must be one of CC1 , CC2 , CC3 , and CC4 , if the codec is cea608 ; Must be one between SERVICE1 and SERVICE63 , if the codec is cea708 .
mapping[]
object ( TextMapping )
Optional. The mapping for the input streams and text tracks.
TextMapping
The mapping for the input streams and text tracks.
JSON representation
{
"inputKey" : string ,
"inputTrack" : integer ,
"inputCeaChannel" : string ,
"fromLanguageCode" : string
}
Fields
inputKey
string
Optional. The Channel InputAttachment.key that identifies the input that this text mapping applies to.
inputTrack
integer
Optional. The zero-based index of the track in the input stream.
inputCeaChannel
string
Optional. The channel of the closed caption in the input stream. If this field is set, the output codec must be webvtt . Must be one of CC1 , CC2 , CC3 , and CC4 , if the codec of the input closed caption is cea608 ; Must be one between SERVICE1 and SERVICE64 , if the codec of the input closed caption is cea708 .
fromLanguageCode
string
Optional. The BCP-47 source language code, such as en-US or sr-Latn . If differ from the textStream's language code, enable translation. For more information on BCP-47 language codes, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier .
MuxStream
Multiplexing settings for output stream.
JSON representation
{
"key" : string ,
"container" : string ,
"elementaryStreams" : [
string
] ,
"segmentSettings" : {
object ( SegmentSettings )
} ,
"encryptionId" : string
}
Fields
key
string
A unique key for this multiplexed stream. The key must be 1-63 characters in length. The key must begin and end with a letter (regardless of case) or a number, but can contain dashes or underscores in between.
container
string
The container format. The default is fmp4 .
Supported container formats:
fmp4 - the corresponding file extension is .m4s
ts - the corresponding file extension is .ts
elementaryStreams[]
string
List of ElementaryStream key s multiplexed in this stream.
For fmp4 container, must contain either one video or one audio stream.
For ts container, must contain exactly one audio stream and up to one video stream.
segmentSettings
object ( SegmentSettings )
Segment settings for fmp4 and ts .
encryptionId
string
Identifier of the encryption configuration to use. If omitted, output will be unencrypted.
SegmentSettings
Segment settings for fmp4 and ts .
JSON representation
{
"segmentDuration" : string
}
Fields
segmentDuration
string ( Duration format)
Duration of the segments in seconds. The default is 6s . Note that segmentDuration must be greater than or equal to gopDuration , and segmentDuration must be divisible by gopDuration . Valid range is [2s, 20s].
All muxStreams in the same manifest must have the same segment duration.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
Manifest
Manifest configuration.
JSON representation
{
"fileName" : string ,
"type" : enum ( ManifestType ) ,
"muxStreams" : [
string
] ,
"maxSegmentCount" : integer ,
"segmentKeepDuration" : string ,
"useTimecodeAsTimeline" : boolean ,
"key" : string
}
Fields
fileName
string
The name of the generated file. The default is manifest with the extension suffix corresponding to the Manifest type . If multiple manifests are added to the channel, each must have a unique file name.
type
enum ( ManifestType )
Required. Type of the manifest, can be HLS or DASH .
muxStreams[]
string
Required. List of MuxStream key s that should appear in this manifest.
For HLS, either fmp4 or ts mux streams can be specified but not mixed.
For DASH, only fmp4 mux streams can be specified.
maxSegmentCount
integer
Maximum number of segments that this manifest holds. Once the manifest reaches this maximum number of segments, whenever a new segment is added to the manifest, the oldest segment will be removed from the manifest. The minimum value is 3 and the default value is 5.
segmentKeepDuration
string ( Duration format)
How long to keep a segment on the output Google Cloud Storage bucket after it is removed from the manifest. This field should be large enough to cover the manifest propagation delay. Otherwise, a player could receive 404 errors while accessing segments which are listed in the manifest that the player has, but were already deleted from the output Google Cloud Storage bucket. Default value is 60s .
If both segmentKeepDuration and RetentionConfig.retention_window_duration are set, RetentionConfig.retention_window_duration is used and segmentKeepDuration is ignored.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
useTimecodeAsTimeline
boolean
Whether to use the timecode, as specified in timecode config, when setting:
availabilityStartTime attribute in DASH manifests.
#EXT-X-PROGRAM-DATE-TIME tag in HLS manifests.
If false, ignore the input timecode and use the time from system clock when the manifest is first generated. This is the default behavior.
key
string
Optional. A unique key for this manifest.
ManifestType
The manifest type can be either HLS or DASH .
Enums
MANIFEST_TYPE_UNSPECIFIED
The manifest type is not specified.
HLS
Create an HLS manifest. The corresponding file extension is .m3u8 .
DASH
Create a DASH manifest. The corresponding file extension is .mpd .
DistributionStream
Multiplexing settings for output streams used in Distribution .
JSON representation
{
"key" : string ,
"container" : string ,
"elementaryStreams" : [
string
]
}
Fields
key
string
Required. A unique key for this distribution stream. The key must be 1-63 characters in length. The key must begin and end with a letter (regardless of case) or a number, but can contain dashes or underscores in between.
container
string
Required. The container format.
Supported container formats:
ts , must contain exactly one audio stream and up to one video stream.
flv , must contain at most one audio stream and at most one video stream.
elementaryStreams[]
string
Required. List of ElementaryStream key s multiplexed in this stream. Must contain at least one audio stream and up to one video stream.
Distribution
Distribution configuration.
JSON representation
{
"key" : string ,
"distributionStream" : string ,
"state" : enum ( State ) ,
"error" : {
object ( Status )
} ,
// Union field endpoint can be only one of the following:
"srtPush" : {
object ( SrtPushOutputEndpoint )
} ,
"rtmpPush" : {
object ( RtmpPushOutputEndpoint )
}
// End of list of possible types for union field endpoint .
}
Fields
key
string
Required. A unique key for this distribution. The key must be 1-63 characters in length. The key must begin and end with a letter (regardless of case) or a number, but can contain dashes or underscores in between.
distributionStream
string
Required. DistributionStream key s that should appear in this distribution output.
For SRT protocol, only ts distribution streams can be specified.
For RTMP protocol, only flv distribution streams can be specified.
state
enum ( State )
Output only. State of the distribution.
error
object ( Status )
Output only. Only present when the state is ERROR . The reason for the error state of the distribution.
Union field endpoint . Configurations for the output endpoint by streaming protocols. endpoint can be only one of the following:
srtPush
object ( SrtPushOutputEndpoint )
Output endpoint using SRT_PUSH.
rtmpPush
object ( RtmpPushOutputEndpoint )
Output endpoint using RTMP_PUSH.
State
State of this distribution.
Enums
STATE_UNSPECIFIED
State is not specified.
ERROR
Distribution has trouble to produce or deliver the output.
NOT_READY
Distribution is not ready to be started.
READY
Distribution is ready to be started.
AWAITING_INPUT
Distribution is already started and is waiting for input.
DISTRIBUTING
Distribution is already started and is generating output.
SrtPushOutputEndpoint
Configurations for an output endpoint using SRT_PUSH as the streaming protocol.
JSON representation
{
"uri" : string ,
// Union field passphrase_source can be only one of the following:
"passphraseSecretVersion" : string
// End of list of possible types for union field passphrase_source .
}
Fields
uri
string
Required. The full URI of the remote SRT server.
Union field passphrase_source . Defines where SRT encryption passphrase are stored. passphrase_source can be only one of the following:
passphraseSecretVersion
string
The name of the Secret Version containing the SRT encryption passphrase, which is stored in Google Secret Manager. It should be in the format of projects/{project}/secrets/{secret_id}/versions/{version_number} .
RtmpPushOutputEndpoint
Configurations for an output endpoint using RTMP_PUSH as the streaming protocol.
JSON representation
{
"uri" : string ,
"streamKey" : string
}
Fields
uri
string
Required. The full URI of the remote RTMP server. For example: rtmp://192.168.123.321/live/my-stream or rtmp://somedomain.com/someapp .
streamKey
string
Required. Stream key for RTMP protocol.
SpriteSheet
Sprite sheet configuration.
JSON representation
{
"format" : string ,
"filePrefix" : string ,
"spriteWidthPixels" : integer ,
"spriteHeightPixels" : integer ,
"columnCount" : integer ,
"rowCount" : integer ,
"interval" : string ,
"quality" : integer
}
Fields
format
string
Format type. The default is jpeg .
Supported formats:
jpeg
filePrefix
string
Required. File name prefix for the generated sprite sheets. If multiple sprite sheets are added to the channel, each must have a unique file prefix. Each sprite sheet has an incremental 10-digit zero-padded suffix starting from 0 before the extension, such as sprite_sheet0000000123.jpeg .
spriteWidthPixels
integer
Required. The width of the sprite in pixels. Must be an even integer.
spriteHeightPixels
integer
Required. The height of the sprite in pixels. Must be an even integer.
columnCount
integer
The maximum number of sprites per row in a sprite sheet. Valid range is [1, 10] and the default value is 1.
rowCount
integer
The maximum number of rows per sprite sheet. When the sprite sheet is full, a new sprite sheet is created. Valid range is [1, 10] and the default value is 1.
interval
string ( Duration format)
Create sprites at regular intervals. Valid range is [1 second, 1 hour] and the default value is 10s .
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
quality
integer
The quality of the generated sprite sheet. Enter a value between 1 and 100, where 1 is the lowest quality and 100 is the highest quality. The default is 100. A high quality value corresponds to a low image data compression ratio.
StreamingState
State of streaming operation that the channel is running.
Enums
STREAMING_STATE_UNSPECIFIED
Streaming state is not specified.
STREAMING
Channel is getting the input stream, generating the live streams to the specified output location.
AWAITING_INPUT
Channel is waiting for the input stream through the input.
STREAMING_ERROR
Channel is running, but has trouble publishing the live streams onto the specified output location (for example, the specified Cloud Storage bucket is not writable).
STREAMING_NO_INPUT
Channel is generating live streams with no input stream. Live streams are filled out with black screen, while input stream is missing. Not supported yet.
STOPPED
Channel is stopped, finishing live streams.
STARTING
Channel is starting.
STOPPING
Channel is stopping.
LogConfig
Configuration of platform logs. See Using and managing platform logs for more information about how to view platform logs through Cloud Logging.
JSON representation
{
"logSeverity" : enum ( LogSeverity )
}
Fields
logSeverity
enum ( LogSeverity )
The severity level of platform logging for this resource.
LogSeverity
The severity level of platform logging for this channel. Logs with a severity level higher than or equal to the chosen severity level will be logged and can be viewed through Cloud Logging. The severity level of a log is ranked as followed from low to high: DEBUG < INFO < NOTICE < WARNING < ERROR < CRITICAL < ALERT < EMERGENCY. See LogSeverity for more information.
Enums
LOG_SEVERITY_UNSPECIFIED
Log severity is not specified. This is the same as log severity is OFF.
OFF
Log is turned off.
DEBUG
Log with severity higher than or equal to DEBUG are logged.
INFO
Logs with severity higher than or equal to INFO are logged.
WARNING
Logs with severity higher than or equal to WARNING are logged.
ERROR
Logs with severity higher than or equal to ERROR are logged.
TimecodeConfig
Timecode configuration.
JSON representation
{
"source" : enum ( TimecodeSource ) ,
// Union field time_offset can be only one of the following:
"utcOffset" : string ,
"timeZone" : {
object ( TimeZone )
}
// End of list of possible types for union field time_offset .
}
Fields
source
enum ( TimecodeSource )
The source of the timecode that will later be used in outputs/manifests. It determines the initial timecode/timestamp (first frame) of output streams.
Union field time_offset . For EMBEDDED_TIMECODE source only. Used to interpret the embedded timecode (which contains only the time part and no date). We assume all inputs are live. time_offset can be only one of the following:
utcOffset
string ( Duration format)
UTC offset. Must be whole seconds, between -18 hours and +18 hours.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
timeZone
object ( TimeZone )
Time zone e.g. "America/Los_Angeles".
TimecodeSource
The source of timecode.
Enums
TIMECODE_SOURCE_UNSPECIFIED
The timecode source is not specified.
MEDIA_TIMESTAMP
Use input media timestamp.
EMBEDDED_TIMECODE
Use input embedded timecode e.g. picture timing SEI message.
TimeZone
Represents a time zone from the IANA Time Zone Database .
JSON representation
{
"id" : string ,
"version" : string
}
Fields
id
string
IANA Time Zone Database time zone. For example "America/New_York".
version
string
Optional. IANA Time Zone Database version number. For example "2019a".
Encryption
Encryption settings.
JSON representation
{
"id" : string ,
"drmSystems" : {
object ( DrmSystems )
} ,
// Union field secret_source can be only one of the following:
"secretManagerKeySource" : {
object ( SecretManagerSource )
}
// End of list of possible types for union field secret_source .
// Union field encryption_mode can be only one of the following:
"aes128" : {
object ( Aes128Encryption )
} ,
"sampleAes" : {
object ( SampleAesEncryption )
} ,
"mpegCenc" : {
object ( MpegCommonEncryption )
}
// End of list of possible types for union field encryption_mode .
}
Fields
id
string
Required. Identifier for this set of encryption options. The ID must be 1-63 characters in length. The ID must begin and end with a letter (regardless of case) or a number, but can contain dashes or underscores in between.
drmSystems
object ( DrmSystems )
Required. Configuration for DRM systems.
Union field secret_source . Defines where content keys are stored. secret_source can be only one of the following:
secretManagerKeySource
object ( SecretManagerSource )
For keys stored in Google Secret Manager.
Union field encryption_mode . Encryption modes for HLS and MPEG-Dash. encryption_mode can be only one of the following:
aes128
object ( Aes128Encryption )
Configuration for HLS AES-128 encryption.
sampleAes
object ( SampleAesEncryption )
Configuration for HLS SAMPLE-AES encryption.
mpegCenc
object ( MpegCommonEncryption )
Configuration for MPEG-Dash Common Encryption (MPEG-CENC).
DrmSystems
Defines configuration for DRM systems in use. If a field is omitted, that DRM system will be considered to be disabled.
JSON representation
{
"widevine" : {
object ( Widevine )
} ,
"fairplay" : {
object ( Fairplay )
} ,
"playready" : {
object ( Playready )
} ,
"clearkey" : {
object ( Clearkey )
}
}
Fields
widevine
object ( Widevine )
Optional. Widevine configuration.
fairplay
object ( Fairplay )
Optional. Fairplay configuration.
playready
object ( Playready )
Optional. Playready configuration.
clearkey
object ( Clearkey )
Optional. Clearkey configuration.
Widevine
This type has no fields.
Widevine configuration.
Fairplay
This type has no fields.
Fairplay configuration.
Playready
This type has no fields.
Playready configuration.
Clearkey
This type has no fields.
Clearkey configuration.
Aes128Encryption
This type has no fields.
Configuration for HLS AES-128 encryption.
SampleAesEncryption
This type has no fields.
Configuration for HLS SAMPLE-AES encryption.
MpegCommonEncryption
Configuration for MPEG-Dash Common Encryption (MPEG-CENC).
JSON representation
{
"scheme" : string
}
Fields
scheme
string
Required. Specify the encryption scheme, supported schemes: - cenc - AES-CTR subsample - cbcs - AES-CBC subsample pattern
InputConfig
Configuration for the input sources of a channel.
JSON representation
{
"inputSwitchMode" : enum ( InputSwitchMode )
}
Fields
inputSwitchMode
enum ( InputSwitchMode )
Input switch mode. Default mode is FAILOVER_PREFER_PRIMARY .
InputSwitchMode
Input switch mode.
Enums
INPUT_SWITCH_MODE_UNSPECIFIED
The input switch mode is not specified.
FAILOVER_PREFER_PRIMARY
Automatic failover is enabled. The primary input stream is always preferred over its backup input streams configured using the AutomaticFailover field.
MANUAL
Automatic failover is disabled. You must use the inputSwitch event to switch the active input source for the channel to stream from. When this mode is chosen, the AutomaticFailover field is ignored.
RetentionConfig
Configuration for retention of output files.
JSON representation
{
"retentionWindowDuration" : string
}
Fields
retentionWindowDuration
string ( Duration format)
The minimum duration for which the output files from the channel will remain in the output bucket. After this duration, output files are deleted asynchronously.
When the channel is deleted, all output files are deleted from the output bucket asynchronously.
If omitted or set to zero, output files will remain in the output bucket based on Manifest.segment_keep_duration , which defaults to 60s.
If both retentionWindowDuration and Manifest.segment_keep_duration are set, retentionWindowDuration is used and Manifest.segment_keep_duration is ignored.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
StaticOverlay
Configuration for the static overlay.
JSON representation
{
"asset" : string ,
"resolution" : {
object ( NormalizedResolution )
} ,
"position" : {
object ( NormalizedCoordinate )
} ,
"opacity" : number
}
Fields
asset
string
Required. Asset to use for the overlaid image. The asset must be represented in the form of: projects/{project}/locations/{location}/assets/{assetId} . The asset's resource type must be image.
resolution
object ( NormalizedResolution )
Optional. Normalized image resolution, based on output video resolution. Valid values are [0.0, 1.0]. To respect the original image aspect ratio, set either w or h to 0. To use the original image resolution, set both w and h to 0. The default is {0, 0}.
position
object ( NormalizedCoordinate )
Optional. Position of the image in terms of normalized coordinates of the upper-left corner of the image, based on output video resolution. For example, use the x and y coordinates {0, 0} to position the top-left corner of the overlay animation in the top-left corner of the output video.
opacity
number
Optional. Target image opacity. Valid values are from 1.0 (solid, default) to 0.0 (transparent), exclusive. Set this to a value greater than 0.0 .
NormalizedResolution
Normalized resolution.
JSON representation
{
"w" : number ,
"h" : number
}
Fields
w
number
Optional. Normalized width. Valid range is [0.0, 1.0]. Default is 0.
h
number
Optional. Normalized height. Valid range is [0.0, 1.0]. Default is 0.
NormalizedCoordinate
2D normalized coordinates.
JSON representation
{
"x" : number ,
"y" : number
}
Fields
x
number
Optional. Normalized x coordinate. Valid range is [0.0, 1.0]. Default is 0.
y
number
Optional. Normalized y coordinate. Valid range is [0.0, 1.0]. Default is 0.
AutoTranscriptionConfig
Advanced configurations for auto-generated text streams.
JSON representation
{
"displayTiming" : enum ( DisplayTiming ) ,
"qualityPreset" : enum ( QualityPreset )
}
Fields
displayTiming
enum ( DisplayTiming )
Optional. Whether auto-generated text streams are displayed synchronously or asynchronously with the original audio.
qualityPreset
enum ( QualityPreset )
Optional. Tunes the latency and quality of auto-generated captions.
DisplayTiming
Whether auto-generated text streams are displayed synchronously or asynchronously with the original audio.
Enums
DISPLAY_TIMING_UNSPECIFIED
Display timing is not specified. Caption display will be asynchronous by default.
ASYNC
Caption will be displayed asynchronous with audio.
SYNC
Caption will be displayed synchronous with audio. This option increases overall media output latency, and reduces viewing latency between audio and auto-generated captions.
QualityPreset
Presets to tune the latency and quality of auto-generated captions.
Enums
QUALITY_PRESET_UNSPECIFIED
Quality Preset is not specified. By default, BALANCED_QUALITY will be used.
LOW_LATENCY
Reduce the latency of auto-generated captions. This may reduce the quality of the captions.
BALANCED_QUALITY
Default behavior when QualityPreset is not specified.
IMPROVED_QUALITY
Increases the quality of the auto-generated captions at the cost of higher latency.
Methods
create
Creates a channel with the provided unique ID in the specified region.
delete
Deletes the specified channel.
get
Returns the specified channel.
list
Returns a list of all channels in the specified region.
patch
Updates the specified channel.
start
Starts the specified channel.
startdistribution
Starts distribution which delivers outputs to the destination indicated by the Distribution configuration.
stop
Stops the specified channel.
stopdistribution
Stops the specified distribution.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-16 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-16 UTC."],[],[]]
