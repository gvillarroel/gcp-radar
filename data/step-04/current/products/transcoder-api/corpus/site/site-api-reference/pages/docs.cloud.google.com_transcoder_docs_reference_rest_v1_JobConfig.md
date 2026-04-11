---
title: "JobConfig \_|\_ Transcoder API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/transcoder/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/transcoder/docs/reference/rest/v1/JobConfig
  title: "JobConfig \_|\_ Transcoder API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Transcoder API
Reference
Send feedback
JobConfig
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Input
JSON representation
PreprocessingConfig
JSON representation
Color
JSON representation
Denoise
JSON representation
Deblock
JSON representation
Audio
JSON representation
Crop
JSON representation
Pad
JSON representation
Deinterlace
JSON representation
YadifConfig
JSON representation
BwdifConfig
JSON representation
InputAttributes
JSON representation
TrackDefinition
JSON representation
EditAtom
JSON representation
ElementaryStream
JSON representation
VideoStream
JSON representation
H264CodecSettings
JSON representation
FrameRateConversionStrategy
H264ColorFormatSDR
H264ColorFormatHLG
H265CodecSettings
JSON representation
H265ColorFormatSDR
H265ColorFormatHLG
H265ColorFormatHDR10
Vp9CodecSettings
JSON representation
Vp9ColorFormatSDR
Vp9ColorFormatHLG
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
Fmp4Config
JSON representation
Manifest
JSON representation
ManifestType
DashConfig
JSON representation
SegmentReferenceScheme
Output
JSON representation
AdBreak
JSON representation
PubsubDestination
JSON representation
SpriteSheet
JSON representation
Overlay
JSON representation
Image
JSON representation
NormalizedCoordinate
JSON representation
Animation
JSON representation
AnimationStatic
JSON representation
AnimationFade
JSON representation
FadeType
AnimationEnd
JSON representation
Encryption
JSON representation
Aes128Encryption
SampleAesEncryption
MpegCommonEncryption
JSON representation
SecretManagerSource
JSON representation
DrmSystems
JSON representation
Widevine
Fairplay
Playready
Clearkey
Job configuration
JSON representation
{
"inputs" : [
{
object ( Input )
}
] ,
"editList" : [
{
object ( EditAtom )
}
] ,
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
"output" : {
object ( Output )
} ,
"adBreaks" : [
{
object ( AdBreak )
}
] ,
"pubsubDestination" : {
object ( PubsubDestination )
} ,
"spriteSheets" : [
{
object ( SpriteSheet )
}
] ,
"overlays" : [
{
object ( Overlay )
}
] ,
"encryptions" : [
{
object ( Encryption )
}
]
}
Fields
inputs[]
object ( Input )
List of input assets stored in Cloud Storage.
editList[]
object ( EditAtom )
List of edit atoms. Defines the ultimate timeline of the resulting file or manifest.
elementaryStreams[]
object ( ElementaryStream )
List of elementary streams.
muxStreams[]
object ( MuxStream )
List of multiplexing settings for output streams.
manifests[]
object ( Manifest )
List of output manifests.
output
object ( Output )
Output configuration.
adBreaks[]
object ( AdBreak )
List of ad breaks. Specifies where to insert ad break tags in the output manifests.
pubsubDestination
object ( PubsubDestination )
Destination on Pub/Sub.
spriteSheets[]
object ( SpriteSheet )
List of output sprite sheets. Spritesheets require at least one VideoStream in the Jobconfig.
overlays[]
object ( Overlay )
List of overlays on the output video, in descending Z-order.
encryptions[]
object ( Encryption )
List of encryption configurations for the content. Each configuration has an ID. Specify this ID in the MuxStream.encryption_id field to indicate the configuration to use for that MuxStream output.
Input
Input asset.
JSON representation
{
"key" : string ,
"uri" : string ,
"preprocessingConfig" : {
object ( PreprocessingConfig )
} ,
"attributes" : {
object ( InputAttributes )
}
}
Fields
key
string
A unique key for this input. Must be specified when using advanced mapping and edit lists.
uri
string
URI of the media. Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, gs://bucket/inputs/file.mp4 ). If empty, the value is populated from Job.input_uri . See Supported input and output formats .
preprocessingConfig
object ( PreprocessingConfig )
Preprocessing configurations.
attributes
object ( InputAttributes )
Optional. Input Attributes.
PreprocessingConfig
Preprocessing configurations.
JSON representation
{
"color" : {
object ( Color )
} ,
"denoise" : {
object ( Denoise )
} ,
"deblock" : {
object ( Deblock )
} ,
"audio" : {
object ( Audio )
} ,
"crop" : {
object ( Crop )
} ,
"pad" : {
object ( Pad )
} ,
"deinterlace" : {
object ( Deinterlace )
}
}
Fields
color
object ( Color )
Color preprocessing configuration.
denoise
object ( Denoise )
Denoise preprocessing configuration.
deblock
object ( Deblock )
Deblock preprocessing configuration.
audio
object ( Audio )
Audio preprocessing configuration.
crop
object ( Crop )
Specify the video cropping configuration.
pad
object ( Pad )
Specify the video pad filter configuration.
deinterlace
object ( Deinterlace )
Specify the video deinterlace configuration.
Color
Color preprocessing configuration.
Note: This configuration is not supported.
JSON representation
{
"saturation" : number ,
"contrast" : number ,
"brightness" : number
}
Fields
saturation
number
Control color saturation of the video. Enter a value between -1 and 1, where -1 is fully desaturated and 1 is maximum saturation. 0 is no change. The default is 0.
contrast
number
Control black and white contrast of the video. Enter a value between -1 and 1, where -1 is minimum contrast and 1 is maximum contrast. 0 is no change. The default is 0.
brightness
number
Control brightness of the video. Enter a value between -1 and 1, where -1 is minimum brightness and 1 is maximum brightness. 0 is no change. The default is 0.
Denoise
Denoise preprocessing configuration.
Note: This configuration is not supported.
JSON representation
{
"strength" : number ,
"tune" : string
}
Fields
strength
number
Set strength of the denoise. Enter a value between 0 and 1. The higher the value, the smoother the image. 0 is no denoising. The default is 0.
tune
string
Set the denoiser mode. The default is standard .
Supported denoiser modes:
standard
grain
Deblock
Deblock preprocessing configuration.
Note: This configuration is not supported.
JSON representation
{
"strength" : number ,
"enabled" : boolean
}
Fields
strength
number
Set strength of the deblocker. Enter a value between 0 and 1. The higher the value, the stronger the block removal. 0 is no deblocking. The default is 0.
enabled
boolean
Enable deblocker. The default is false .
Audio
Audio preprocessing configuration.
JSON representation
{
"lufs" : number ,
"highBoost" : boolean ,
"lowBoost" : boolean
}
Fields
lufs
number
Specify audio loudness normalization in loudness units relative to full scale (LUFS). Enter a value between -24 and 0 (the default), where:
-24 is the Advanced Television Systems Committee (ATSC A/85) standard
-23 is the EU R128 broadcast standard
-19 is the prior standard for online mono audio
-18 is the ReplayGain standard
-16 is the prior standard for stereo audio
-14 is the new online audio standard recommended by Spotify, as well as Amazon Echo
0 disables normalization
highBoost
boolean
Enable boosting high frequency components. The default is false .
Note: This field is not supported.
lowBoost
boolean
Enable boosting low frequency components. The default is false .
Note: This field is not supported.
Crop
Video cropping configuration for the input video. The cropped input video is scaled to match the output resolution.
JSON representation
{
"topPixels" : integer ,
"bottomPixels" : integer ,
"leftPixels" : integer ,
"rightPixels" : integer
}
Fields
topPixels
integer
The number of pixels to crop from the top. The default is 0.
bottomPixels
integer
The number of pixels to crop from the bottom. The default is 0.
leftPixels
integer
The number of pixels to crop from the left. The default is 0.
rightPixels
integer
The number of pixels to crop from the right. The default is 0.
Pad
Pad filter configuration for the input video. The padded input video is scaled after padding with black to match the output resolution.
JSON representation
{
"topPixels" : integer ,
"bottomPixels" : integer ,
"leftPixels" : integer ,
"rightPixels" : integer
}
Fields
topPixels
integer
The number of pixels to add to the top. The default is 0.
bottomPixels
integer
The number of pixels to add to the bottom. The default is 0.
leftPixels
integer
The number of pixels to add to the left. The default is 0.
rightPixels
integer
The number of pixels to add to the right. The default is 0.
Deinterlace
Deinterlace configuration for input video.
JSON representation
{
// Union field deinterlacing_filter can be only one of the following:
"yadif" : {
object ( YadifConfig )
} ,
"bwdif" : {
object ( BwdifConfig )
}
// End of list of possible types for union field deinterlacing_filter .
}
Fields
Union field deinterlacing_filter . Specify the video deinterlacing filter. The default is yadif . deinterlacing_filter can be only one of the following:
yadif
object ( YadifConfig )
Specifies the Yet Another Deinterlacing Filter Configuration.
bwdif
object ( BwdifConfig )
Specifies the Bob Weaver Deinterlacing Filter Configuration.
YadifConfig
Yet Another Deinterlacing Filter Configuration.
JSON representation
{
"mode" : string ,
"disableSpatialInterlacing" : boolean ,
"parity" : string ,
"deinterlaceAllFrames" : boolean
}
Fields
mode
string
Specifies the deinterlacing mode to adopt. The default is send_frame . Supported values:
send_frame : Output one frame for each frame
send_field : Output one frame for each field
disableSpatialInterlacing
boolean
Disable spacial interlacing. The default is false .
parity
string
The picture field parity assumed for the input interlaced video. The default is auto . Supported values:
tff : Assume the top field is first
bff : Assume the bottom field is first
auto : Enable automatic detection of field parity
deinterlaceAllFrames
boolean
Deinterlace all frames rather than just the frames identified as interlaced. The default is false .
BwdifConfig
Bob Weaver Deinterlacing Filter Configuration.
JSON representation
{
"mode" : string ,
"parity" : string ,
"deinterlaceAllFrames" : boolean
}
Fields
mode
string
Specifies the deinterlacing mode to adopt. The default is send_frame . Supported values:
send_frame : Output one frame for each frame
send_field : Output one frame for each field
parity
string
The picture field parity assumed for the input interlaced video. The default is auto . Supported values:
tff : Assume the top field is first
bff : Assume the bottom field is first
auto : Enable automatic detection of field parity
deinterlaceAllFrames
boolean
Deinterlace all frames rather than just the frames identified as interlaced. The default is false .
InputAttributes
Input attributes that provide additional information about the input asset.
JSON representation
{
"trackDefinitions" : [
{
object ( TrackDefinition )
}
]
}
Fields
trackDefinitions[]
object ( TrackDefinition )
Optional. A list of track definitions for the input asset.
TrackDefinition
Track definition for the input asset.
JSON representation
{
"languages" : [
string
] ,
"detectLanguages" : boolean ,
"detectedLanguages" : [
string
] ,
"inputTrack" : integer
}
Fields
languages[]
string
Optional. A list of languages spoken in the input asset, represented by a BCP 47 language code, such as "en-US" or "sr-Latn". For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier .
detectLanguages
boolean
Optional. Whether to automatically detect the languages present in the track. If true, the system will attempt to identify all the languages present in the track and populate the languages field.
detectedLanguages[]
string
Output only. A list of languages detected in the input asset, represented by a BCP 47 language code, such as "en-US" or "sr-Latn". For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier . This field is only populated if the detectLanguages field is set to true.
inputTrack
integer
The input track.
EditAtom
Edit atom.
JSON representation
{
"key" : string ,
"inputs" : [
string
] ,
"endTimeOffset" : string ,
"startTimeOffset" : string
}
Fields
key
string
A unique key for this atom. Must be specified when using advanced mapping.
inputs[]
string
List of Input.key values identifying files that should be used in this atom. The listed inputs must have the same timeline.
endTimeOffset
string ( Duration format)
End time in seconds for the atom, relative to the input file timeline. When endTimeOffset is not specified, the inputs are used until the end of the atom.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
startTimeOffset
string ( Duration format)
Start time in seconds for the atom, relative to the input file timeline. The default is 0s .
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
ElementaryStream
Encoding of an input file such as an audio, video, or text track. Elementary streams must be packaged before mapping and sharing between different output formats.
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
A unique key for this elementary stream.
Union field elementary_stream . Encoding of an audio, video, or text track. elementary_stream can be only one of the following:
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
} ,
"vp9" : {
object ( Vp9CodecSettings )
}
// End of list of possible types for union field codec_settings .
}
Fields
Union field codec_settings . Codec settings can be h264, h265, or vp9. codec_settings can be only one of the following:
h264
object ( H264CodecSettings )
H264 codec settings.
h265
object ( H265CodecSettings )
H265 codec settings.
vp9
object ( Vp9CodecSettings )
VP9 codec settings.
H264CodecSettings
H264 codec settings.
JSON representation
{
"widthPixels" : integer ,
"heightPixels" : integer ,
"frameRate" : number ,
"frameRateConversionStrategy" : enum ( FrameRateConversionStrategy ) ,
"bitrateBps" : integer ,
"pixelFormat" : string ,
"rateControlMode" : string ,
"crfLevel" : integer ,
"allowOpenGop" : boolean ,
"enableTwoPass" : boolean ,
"vbvSizeBits" : integer ,
"vbvFullnessBits" : integer ,
"entropyCoder" : string ,
"bPyramid" : boolean ,
"bFrameCount" : integer ,
"aqStrength" : number ,
"profile" : string ,
"tune" : string ,
"preset" : string ,
// Union field gop_mode can be only one of the following:
"gopFrameCount" : integer ,
"gopDuration" : string
// End of list of possible types for union field gop_mode .
// Union field color_format can be only one of the following:
"sdr" : {
object ( H264ColorFormatSDR )
} ,
"hlg" : {
object ( H264ColorFormatHLG )
}
// End of list of possible types for union field color_format .
}
Fields
widthPixels
integer
The width of the video in pixels. Must be an even integer. When not specified, the width is adjusted to match the specified height and input aspect ratio. If both are omitted, the input width is used.
For portrait videos that contain horizontal ASR and rotation metadata, provide the width, in pixels, per the horizontal ASR. The API calculates the height per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output.
heightPixels
integer
The height of the video in pixels. Must be an even integer. When not specified, the height is adjusted to match the specified width and input aspect ratio. If both are omitted, the input height is used.
For portrait videos that contain horizontal ASR and rotation metadata, provide the height, in pixels, per the horizontal ASR. The API calculates the width per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output.
frameRate
number
Required. The target video frame rate in frames per second (FPS). Must be less than or equal to 120.
frameRateConversionStrategy
enum ( FrameRateConversionStrategy )
Optional. Frame rate conversion strategy for desired frame rate. The default is DOWNSAMPLE .
bitrateBps
integer
Required. The video bitrate in bits per second. The minimum value is 1,000. The maximum value is 800,000,000.
pixelFormat
string
Pixel format to use. The default is yuv420p .
Supported pixel formats:
yuv420p pixel format
yuv422p pixel format
yuv444p pixel format
yuv420p10 10-bit HDR pixel format
yuv422p10 10-bit HDR pixel format
yuv444p10 10-bit HDR pixel format
yuv420p12 12-bit HDR pixel format
yuv422p12 12-bit HDR pixel format
yuv444p12 12-bit HDR pixel format
rateControlMode
string
Specify the mode. The default is vbr .
Supported rate control modes:
vbr - variable bitrate
crf - constant rate factor
crfLevel
integer
Target CRF level. Must be between 10 and 36, where 10 is the highest quality and 36 is the most efficient compression. The default is 21.
allowOpenGop
boolean
Specifies whether an open Group of Pictures (GOP) structure should be allowed or not. The default is false .
enableTwoPass
boolean
Use two-pass encoding strategy to achieve better video quality. H264CodecSettings.rate_control_mode must be vbr . The default is false .
vbvSizeBits
integer
Size of the Video Buffering Verifier (VBV) buffer in bits. Must be greater than zero. The default is equal to H264CodecSettings.bitrate_bps .
vbvFullnessBits
integer
Initial fullness of the Video Buffering Verifier (VBV) buffer in bits. Must be greater than zero. The default is equal to 90% of H264CodecSettings.vbv_size_bits .
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
The number of consecutive B-frames. Must be greater than or equal to zero. Must be less than H264CodecSettings.gop_frame_count if set. The default is 0.
aqStrength
number
Specify the intensity of the adaptive quantizer (AQ). Must be between 0 and 1, where 0 disables the quantizer and 1 maximizes the quantizer. A higher value equals a lower bitrate but smoother image. The default is 0.
profile
string
Enforces the specified codec profile. The following profiles are supported:
baseline
main
high (default)
The available options are FFmpeg-compatible . Note that certain values for this field may cause the transcoder to override other fields you set in the H264CodecSettings message.
tune
string
Enforces the specified codec tune. The available options are FFmpeg-compatible . Note that certain values for this field may cause the transcoder to override other fields you set in the H264CodecSettings message.
preset
string
Enforces the specified codec preset. The default is veryfast . The available options are FFmpeg-compatible . Note that certain values for this field may cause the transcoder to override other fields you set in the H264CodecSettings message.
Union field gop_mode . GOP mode can be either by frame count or duration. gop_mode can be only one of the following:
gopFrameCount
integer
Select the GOP size based on the specified frame count. Must be greater than zero.
gopDuration
string ( Duration format)
Select the GOP size based on the specified duration. The default is 3s . Note that gopDuration must be less than or equal to segmentDuration , and segmentDuration must be divisible by gopDuration .
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
Union field color_format . Color format can be sdr or hlg. color_format can be only one of the following:
sdr
object ( H264ColorFormatSDR )
Optional. SDR color format setting for H264.
hlg
object ( H264ColorFormatHLG )
Optional. HLG color format setting for H264.
FrameRateConversionStrategy
The conversion strategy for desired frame rate.
Enums
FRAME_RATE_CONVERSION_STRATEGY_UNSPECIFIED
Unspecified frame rate conversion strategy.
DOWNSAMPLE
Selectively retain frames to reduce the output frame rate. Every n th frame is kept, where n = ceil(input frame rate / target
frame rate) . When n = 1 (that is, the target frame rate is greater than the input frame rate), the output frame rate matches the input frame rate. When n > 1, frames are dropped and the output frame rate is equal to (input frame rate / n) . For more information, see Calculate frame rate .
DROP_DUPLICATE
Drop or duplicate frames to match the specified frame rate.
H264ColorFormatSDR
This type has no fields.
Convert the input video to a Standard Dynamic Range (SDR) video.
H264ColorFormatHLG
This type has no fields.
Convert the input video to a Hybrid Log Gamma (HLG) video.
H265CodecSettings
H265 codec settings.
JSON representation
{
"widthPixels" : integer ,
"heightPixels" : integer ,
"frameRate" : number ,
"frameRateConversionStrategy" : enum ( FrameRateConversionStrategy ) ,
"bitrateBps" : integer ,
"pixelFormat" : string ,
"rateControlMode" : string ,
"crfLevel" : integer ,
"allowOpenGop" : boolean ,
"enableTwoPass" : boolean ,
"vbvSizeBits" : integer ,
"vbvFullnessBits" : integer ,
"bPyramid" : boolean ,
"bFrameCount" : integer ,
"aqStrength" : number ,
"profile" : string ,
"tune" : string ,
"preset" : string ,
// Union field gop_mode can be only one of the following:
"gopFrameCount" : integer ,
"gopDuration" : string
// End of list of possible types for union field gop_mode .
// Union field color_format can be only one of the following:
"sdr" : {
object ( H265ColorFormatSDR )
} ,
"hlg" : {
object ( H265ColorFormatHLG )
} ,
"hdr10" : {
object ( H265ColorFormatHDR10 )
}
// End of list of possible types for union field color_format .
}
Fields
widthPixels
integer
The width of the video in pixels. Must be an even integer. When not specified, the width is adjusted to match the specified height and input aspect ratio. If both are omitted, the input width is used.
For portrait videos that contain horizontal ASR and rotation metadata, provide the width, in pixels, per the horizontal ASR. The API calculates the height per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output.
heightPixels
integer
The height of the video in pixels. Must be an even integer. When not specified, the height is adjusted to match the specified width and input aspect ratio. If both are omitted, the input height is used.
For portrait videos that contain horizontal ASR and rotation metadata, provide the height, in pixels, per the horizontal ASR. The API calculates the width per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output.
frameRate
number
Required. The target video frame rate in frames per second (FPS). Must be less than or equal to 120.
frameRateConversionStrategy
enum ( FrameRateConversionStrategy )
Optional. Frame rate conversion strategy for desired frame rate. The default is DOWNSAMPLE .
bitrateBps
integer
Required. The video bitrate in bits per second. The minimum value is 1,000. The maximum value is 800,000,000.
pixelFormat
string
Pixel format to use. The default is yuv420p .
Supported pixel formats:
yuv420p pixel format
yuv422p pixel format
yuv444p pixel format
yuv420p10 10-bit HDR pixel format
yuv422p10 10-bit HDR pixel format
yuv444p10 10-bit HDR pixel format
yuv420p12 12-bit HDR pixel format
yuv422p12 12-bit HDR pixel format
yuv444p12 12-bit HDR pixel format
rateControlMode
string
Specify the mode. The default is vbr .
Supported rate control modes:
vbr - variable bitrate
crf - constant rate factor
crfLevel
integer
Target CRF level. Must be between 10 and 36, where 10 is the highest quality and 36 is the most efficient compression. The default is 21.
allowOpenGop
boolean
Specifies whether an open Group of Pictures (GOP) structure should be allowed or not. The default is false .
enableTwoPass
boolean
Use two-pass encoding strategy to achieve better video quality. H265CodecSettings.rate_control_mode must be vbr . The default is false .
vbvSizeBits
integer
Size of the Video Buffering Verifier (VBV) buffer in bits. Must be greater than zero. The default is equal to VideoStream.bitrate_bps .
vbvFullnessBits
integer
Initial fullness of the Video Buffering Verifier (VBV) buffer in bits. Must be greater than zero. The default is equal to 90% of H265CodecSettings.vbv_size_bits .
bPyramid
boolean
Allow B-pyramid for reference frame selection. This may not be supported on all decoders. The default is false .
bFrameCount
integer
The number of consecutive B-frames. Must be greater than or equal to zero. Must be less than H265CodecSettings.gop_frame_count if set. The default is 0.
aqStrength
number
Specify the intensity of the adaptive quantizer (AQ). Must be between 0 and 1, where 0 disables the quantizer and 1 maximizes the quantizer. A higher value equals a lower bitrate but smoother image. The default is 0.
profile
string
Enforces the specified codec profile. The following profiles are supported:
8-bit profiles
main (default)
main-intra
mainstillpicture
10-bit profiles
main10 (default)
main10-intra
main422-10
main422-10-intra
main444-10
main444-10-intra
12-bit profiles
main12 (default)
main12-intra
main422-12
main422-12-intra
main444-12
main444-12-intra
The available options are FFmpeg-compatible . Note that certain values for this field may cause the transcoder to override other fields you set in the H265CodecSettings message.
tune
string
Enforces the specified codec tune. The available options are FFmpeg-compatible . Note that certain values for this field may cause the transcoder to override other fields you set in the H265CodecSettings message.
preset
string
Enforces the specified codec preset. The default is veryfast . The available options are FFmpeg-compatible . Note that certain values for this field may cause the transcoder to override other fields you set in the H265CodecSettings message.
Union field gop_mode . GOP mode can be either by frame count or duration. gop_mode can be only one of the following:
gopFrameCount
integer
Select the GOP size based on the specified frame count. Must be greater than zero.
gopDuration
string ( Duration format)
Select the GOP size based on the specified duration. The default is 3s . Note that gopDuration must be less than or equal to segmentDuration , and segmentDuration must be divisible by gopDuration .
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
Union field color_format . Color format can be sdr, hlg, hdr10. color_format can be only one of the following:
sdr
object ( H265ColorFormatSDR )
Optional. SDR color format setting for H265.
hlg
object ( H265ColorFormatHLG )
Optional. HLG color format setting for H265.
hdr10
object ( H265ColorFormatHDR10 )
Optional. HDR10 color format setting for H265.
H265ColorFormatSDR
This type has no fields.
Convert the input video to a Standard Dynamic Range (SDR) video.
H265ColorFormatHLG
This type has no fields.
Convert the input video to a Hybrid Log Gamma (HLG) video.
H265ColorFormatHDR10
This type has no fields.
Convert the input video to a High Dynamic Range 10 (HDR10) video.
Vp9CodecSettings
VP9 codec settings.
JSON representation
{
"widthPixels" : integer ,
"heightPixels" : integer ,
"frameRate" : number ,
"frameRateConversionStrategy" : enum ( FrameRateConversionStrategy ) ,
"bitrateBps" : integer ,
"pixelFormat" : string ,
"rateControlMode" : string ,
"crfLevel" : integer ,
"profile" : string ,
// Union field gop_mode can be only one of the following:
"gopFrameCount" : integer ,
"gopDuration" : string
// End of list of possible types for union field gop_mode .
// Union field color_format can be only one of the following:
"sdr" : {
object ( Vp9ColorFormatSDR )
} ,
"hlg" : {
object ( Vp9ColorFormatHLG )
}
// End of list of possible types for union field color_format .
}
Fields
widthPixels
integer
The width of the video in pixels. Must be an even integer. When not specified, the width is adjusted to match the specified height and input aspect ratio. If both are omitted, the input width is used.
For portrait videos that contain horizontal ASR and rotation metadata, provide the width, in pixels, per the horizontal ASR. The API calculates the height per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output.
heightPixels
integer
The height of the video in pixels. Must be an even integer. When not specified, the height is adjusted to match the specified width and input aspect ratio. If both are omitted, the input height is used.
For portrait videos that contain horizontal ASR and rotation metadata, provide the height, in pixels, per the horizontal ASR. The API calculates the width per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output.
frameRate
number
Required. The target video frame rate in frames per second (FPS). Must be less than or equal to 120.
frameRateConversionStrategy
enum ( FrameRateConversionStrategy )
Optional. Frame rate conversion strategy for desired frame rate. The default is DOWNSAMPLE .
bitrateBps
integer
Required. The video bitrate in bits per second. The minimum value is 1,000. The maximum value is 480,000,000.
pixelFormat
string
Pixel format to use. The default is yuv420p .
Supported pixel formats:
yuv420p pixel format
yuv422p pixel format
yuv444p pixel format
yuv420p10 10-bit HDR pixel format
yuv422p10 10-bit HDR pixel format
yuv444p10 10-bit HDR pixel format
yuv420p12 12-bit HDR pixel format
yuv422p12 12-bit HDR pixel format
yuv444p12 12-bit HDR pixel format
rateControlMode
string
Specify the mode. The default is vbr .
Supported rate control modes:
vbr - variable bitrate
crfLevel
integer
Target CRF level. Must be between 10 and 36, where 10 is the highest quality and 36 is the most efficient compression. The default is 21.
Note: This field is not supported.
profile
string
Enforces the specified codec profile. The following profiles are supported:
profile0 (default)
profile1
profile2
profile3
The available options are WebM-compatible . Note that certain values for this field may cause the transcoder to override other fields you set in the Vp9CodecSettings message.
Union field gop_mode . GOP mode can be either by frame count or duration. gop_mode can be only one of the following:
gopFrameCount
integer
Select the GOP size based on the specified frame count. Must be greater than zero.
gopDuration
string ( Duration format)
Select the GOP size based on the specified duration. The default is 3s . Note that gopDuration must be less than or equal to segmentDuration , and segmentDuration must be divisible by gopDuration .
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
Union field color_format . Color format can be sdr or hlg. color_format can be only one of the following:
sdr
object ( Vp9ColorFormatSDR )
Optional. SDR color format setting for VP9.
hlg
object ( Vp9ColorFormatHLG )
Optional. HLG color format setting for VP9.
Vp9ColorFormatSDR
This type has no fields.
Convert the input video to a Standard Dynamic Range (SDR) video.
Vp9ColorFormatHLG
This type has no fields.
Convert the input video to a Hybrid Log Gamma (HLG) video.
AudioStream
Audio stream resource.
JSON representation
{
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
"sampleRateHertz" : integer ,
"languageCode" : string ,
"displayName" : string
}
Fields
codec
string
The codec for this audio stream. The default is aac .
Supported audio codecs:
aac
aac-he
aac-he-v2
mp3
ac3
eac3
vorbis
bitrateBps
integer
Required. Audio bitrate in bits per second. Must be between 1 and 10,000,000.
channelCount
integer
Number of audio channels. Must be between 1 and 6. The default is 2.
channelLayout[]
string
A list of channel names specifying layout of the audio channels. This only affects the metadata embedded in the container headers, if supported by the specified format. The default is ["fl", "fr"] .
Supported channel names:
fl - Front left channel
fr - Front right channel
sl - Side left channel
sr - Side right channel
fc - Front center channel
lfe - Low frequency
mapping[]
object ( AudioMapping )
The mapping for the JobConfig.edit_list atoms with audio EditAtom.inputs .
sampleRateHertz
integer
The audio sample rate in Hertz. The default is 48000 Hertz.
languageCode
string
The BCP-47 language code, such as en-US or sr-Latn . For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier . Not supported in MP4 files.
displayName
string
The name for this particular audio stream that will be added to the HLS/DASH manifest. Not supported in MP4 files.
AudioMapping
The mapping for the JobConfig.edit_list atoms with audio EditAtom.inputs .
JSON representation
{
"atomKey" : string ,
"inputKey" : string ,
"inputTrack" : integer ,
"inputChannel" : integer ,
"outputChannel" : integer ,
"gainDb" : number
}
Fields
atomKey
string
Required. The EditAtom.key that references the atom with audio inputs in the JobConfig.edit_list .
inputKey
string
Required. The Input.key that identifies the input file.
inputTrack
integer
Required. The zero-based index of the track in the input file.
inputChannel
integer
Required. The zero-based index of the channel in the input audio stream.
outputChannel
integer
Required. The zero-based index of the channel in the output audio stream.
gainDb
number
Audio volume control in dB. Negative values decrease volume, positive values increase. The default is 0.
TextStream
Encoding of a text stream. For example, closed captions or subtitles.
JSON representation
{
"codec" : string ,
"languageCode" : string ,
"mapping" : [
{
object ( TextMapping )
}
] ,
"displayName" : string
}
Fields
codec
string
The codec for this text stream. The default is webvtt .
Supported text codecs:
srt
ttml
cea608
cea708
webvtt
languageCode
string
The BCP-47 language code, such as en-US or sr-Latn . For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier . Not supported in MP4 files.
mapping[]
object ( TextMapping )
The mapping for the JobConfig.edit_list atoms with text EditAtom.inputs .
displayName
string
The name for this particular text stream that will be added to the HLS/DASH manifest. Not supported in MP4 files.
TextMapping
The mapping for the JobConfig.edit_list atoms with text EditAtom.inputs .
JSON representation
{
"atomKey" : string ,
"inputKey" : string ,
"inputTrack" : integer
}
Fields
atomKey
string
Required. The EditAtom.key that references atom with text inputs in the JobConfig.edit_list .
inputKey
string
Required. The Input.key that identifies the input file.
inputTrack
integer
Required. The zero-based index of the track in the input file.
MuxStream
Multiplexing settings for output stream.
JSON representation
{
"key" : string ,
"fileName" : string ,
"container" : string ,
"elementaryStreams" : [
string
] ,
"segmentSettings" : {
object ( SegmentSettings )
} ,
"encryptionId" : string ,
// Union field container_config can be only one of the following:
"fmp4" : {
object ( Fmp4Config )
}
// End of list of possible types for union field container_config .
}
Fields
key
string
A unique key for this multiplexed stream.
fileName
string
The name of the generated file. The default is MuxStream.key with the extension suffix corresponding to the MuxStream.container .
Individual segments also have an incremental 10-digit zero-padded suffix starting from 0 before the extension, such as mux_stream0000000123.ts .
container
string
The container format. The default is mp4
Supported streaming formats:
ts
fmp4 - the corresponding file extension is .m4s
Supported standalone file formats:
mp4
mp3
ogg
vtt
See also: Supported input and output formats
elementaryStreams[]
string
List of ElementaryStream.key values multiplexed in this stream.
segmentSettings
object ( SegmentSettings )
Segment settings for ts , fmp4 and vtt .
encryptionId
string
Identifier of the encryption configuration to use. If omitted, output will be unencrypted.
Union field container_config . Specifies the container configuration. container_config can be only one of the following:
fmp4
object ( Fmp4Config )
Optional. fmp4 container configuration.
SegmentSettings
Segment settings for ts , fmp4 and vtt .
JSON representation
{
"segmentDuration" : string ,
"individualSegments" : boolean
}
Fields
segmentDuration
string ( Duration format)
Duration of the segments in seconds. The default is 6.0s . Note that segmentDuration must be greater than or equal to gopDuration , and segmentDuration must be divisible by gopDuration .
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
individualSegments
boolean
Required. Create an individual segment file. The default is false .
Fmp4Config
fmp4 container configuration.
JSON representation
{
"codecTag" : string
}
Fields
codecTag
string
Optional. Specify the codec tag string that will be used in the media bitstream. When not specified, the codec appropriate value is used.
Supported H265 codec tags:
hvc1 (default)
hev1
Manifest
Manifest configuration.
JSON representation
{
"fileName" : string ,
"type" : enum ( ManifestType ) ,
"muxStreams" : [
string
] ,
// Union field manifest_config can be only one of the following:
"dash" : {
object ( DashConfig )
}
// End of list of possible types for union field manifest_config .
}
Fields
fileName
string
The name of the generated file. The default is manifest with the extension suffix corresponding to the Manifest.type .
type
enum ( ManifestType )
Required. Type of the manifest.
muxStreams[]
string
Required. List of user supplied MuxStream.key values that should appear in this manifest.
When Manifest.type is HLS , a media manifest with name MuxStream.key and .m3u8 extension is generated for each element in this list.
Union field manifest_config . Specifies the manifest configuration. manifest_config can be only one of the following:
dash
object ( DashConfig )
DASH manifest configuration.
ManifestType
The manifest type, which corresponds to the adaptive streaming format used.
Enums
MANIFEST_TYPE_UNSPECIFIED
The manifest type is not specified.
HLS
Create an HLS manifest. The corresponding file extension is .m3u8 .
DASH
Create an MPEG-DASH manifest. The corresponding file extension is .mpd .
DashConfig
DASH manifest configuration.
JSON representation
{
"segmentReferenceScheme" : enum ( SegmentReferenceScheme )
}
Fields
segmentReferenceScheme
enum ( SegmentReferenceScheme )
The segment reference scheme for a DASH manifest. The default is SEGMENT_LIST .
SegmentReferenceScheme
The segment reference scheme for a DASH manifest.
Enums
SEGMENT_REFERENCE_SCHEME_UNSPECIFIED
The segment reference scheme is not specified.
SEGMENT_LIST
Explicitly lists the URLs of media files for each segment. For example, if SegmentSettings.individual_segments is true , then the manifest contains fields similar to the following:
<Initialization sourceURL="my-hd-stream-init.m4s"/>
<SegmentList presentationTimeOffset="0" duration="1000"
timescale="10000">
<SegmentURL media="hd-stream0000000000.m4s"/>
<SegmentURL media="hd-stream0000000001.m4s"/>
...
SEGMENT_TEMPLATE_NUMBER
SegmentSettings.individual_segments must be set to true to use this segment reference scheme. Uses the DASH specification <SegmentTemplate> tag to determine the URLs of media files for each segment. For example:
<SegmentTemplate presentationTimeOffset="0" timescale="10000"
initialization="my-hd-stream-init.m4s"
media="hd-stream$Number%010d$.m4s" startNumber="0">
...
Output
Location of output file(s) in a Cloud Storage bucket.
JSON representation
{
"uri" : string
}
Fields
uri
string
URI for the output file(s). For example, gs://my-bucket/outputs/ . Must be a directory and not a top-level bucket. If empty, the value is populated from Job.output_uri . See Supported input and output formats .
AdBreak
Ad break.
JSON representation
{
"startTimeOffset" : string
}
Fields
startTimeOffset
string ( Duration format)
Start time in seconds for the ad break, relative to the output file timeline. The default is 0s .
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
PubsubDestination
A Pub/Sub destination.
JSON representation
{
"topic" : string
}
Fields
topic
string
The name of the Pub/Sub topic to publish job completion notification to. For example: projects/{project}/topics/{topic} .
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
"startTimeOffset" : string ,
"endTimeOffset" : string ,
"quality" : integer ,
// Union field extraction_strategy can be only one of the following:
"totalCount" : integer ,
"interval" : string
// End of list of possible types for union field extraction_strategy .
}
Fields
format
string
Format type. The default is jpeg .
Supported formats:
jpeg
filePrefix
string
Required. File name prefix for the generated sprite sheets.
Each sprite sheet has an incremental 10-digit zero-padded suffix starting from 0 before the extension, such as sprite_sheet0000000123.jpeg .
spriteWidthPixels
integer
Required. The width of sprite in pixels. Must be an even integer. To preserve the source aspect ratio, set the SpriteSheet.sprite_width_pixels field or the SpriteSheet.sprite_height_pixels field, but not both (the API will automatically calculate the missing field).
For portrait videos that contain horizontal ASR and rotation metadata, provide the width, in pixels, per the horizontal ASR. The API calculates the height per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output.
spriteHeightPixels
integer
Required. The height of sprite in pixels. Must be an even integer. To preserve the source aspect ratio, set the SpriteSheet.sprite_height_pixels field or the SpriteSheet.sprite_width_pixels field, but not both (the API will automatically calculate the missing field).
For portrait videos that contain horizontal ASR and rotation metadata, provide the height, in pixels, per the horizontal ASR. The API calculates the width per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output.
columnCount
integer
The maximum number of sprites per row in a sprite sheet. The default is 0, which indicates no maximum limit.
rowCount
integer
The maximum number of rows per sprite sheet. When the sprite sheet is full, a new sprite sheet is created. The default is 0, which indicates no maximum limit.
startTimeOffset
string ( Duration format)
Start time in seconds, relative to the output file timeline. Determines the first sprite to pick. The default is 0s .
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
endTimeOffset
string ( Duration format)
End time in seconds, relative to the output file timeline. When endTimeOffset is not specified, the sprites are generated until the end of the output file.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
quality
integer
The quality of the generated sprite sheet. Enter a value between 1 and 100, where 1 is the lowest quality and 100 is the highest quality. The default is 100. A high quality value corresponds to a low image data compression ratio.
Union field extraction_strategy . Specify either total number of sprites or interval to create sprites. extraction_strategy can be only one of the following:
totalCount
integer
Total number of sprites. Create the specified number of sprites distributed evenly across the timeline of the output media. The default is 100.
interval
string ( Duration format)
Starting from 0s , create sprites at regular intervals. Specify the interval value in seconds.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
Overlay
Overlay configuration.
JSON representation
{
"image" : {
object ( Image )
} ,
"animations" : [
{
object ( Animation )
}
]
}
Fields
image
object ( Image )
Image overlay.
animations[]
object ( Animation )
List of animations. The list should be chronological, without any time overlap.
Image
Overlaid image.
JSON representation
{
"uri" : string ,
"resolution" : {
object ( NormalizedCoordinate )
} ,
"alpha" : number
}
Fields
uri
string
Required. URI of the image in Cloud Storage. For example, gs://bucket/inputs/image.png . Only PNG and JPEG images are supported.
resolution
object ( NormalizedCoordinate )
Normalized image resolution, based on output video resolution. Valid values: 0.0 – 1.0 . To respect the original image aspect ratio, set either x or y to 0.0 . To use the original image resolution, set both x and y to 0.0 .
alpha
number
Target image opacity. Valid values are from 1.0 (solid, default) to 0.0 (transparent), exclusive. Set this to a value greater than 0.0 .
NormalizedCoordinate
2D normalized coordinates. Default: {0.0, 0.0}
JSON representation
{
"x" : number ,
"y" : number
}
Fields
x
number
Normalized x coordinate.
y
number
Normalized y coordinate.
Animation
Animation types.
JSON representation
{
// Union field animation_type can be only one of the following:
"animationStatic" : {
object ( AnimationStatic )
} ,
"animationFade" : {
object ( AnimationFade )
} ,
"animationEnd" : {
object ( AnimationEnd )
}
// End of list of possible types for union field animation_type .
}
Fields
Union field animation_type . Animations can be static or fade, or they can end the previous animation. animation_type can be only one of the following:
animationStatic
object ( AnimationStatic )
Display static overlay object.
animationFade
object ( AnimationFade )
Display overlay object with fade animation.
animationEnd
object ( AnimationEnd )
End previous animation.
AnimationStatic
Display static overlay object.
JSON representation
{
"xy" : {
object ( NormalizedCoordinate )
} ,
"startTimeOffset" : string
}
Fields
xy
object ( NormalizedCoordinate )
Normalized coordinates based on output video resolution. Valid values: 0.0 – 1.0 . xy is the upper-left coordinate of the overlay object. For example, use the x and y coordinates {0,0} to position the top-left corner of the overlay animation in the top-left corner of the output video.
startTimeOffset
string ( Duration format)
The time to start displaying the overlay object, in seconds. Default: 0
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
AnimationFade
Display overlay object with fade animation.
JSON representation
{
"fadeType" : enum ( FadeType ) ,
"xy" : {
object ( NormalizedCoordinate )
} ,
"startTimeOffset" : string ,
"endTimeOffset" : string
}
Fields
fadeType
enum ( FadeType )
Required. Type of fade animation: FADE_IN or FADE_OUT .
xy
object ( NormalizedCoordinate )
Normalized coordinates based on output video resolution. Valid values: 0.0 – 1.0 . xy is the upper-left coordinate of the overlay object. For example, use the x and y coordinates {0,0} to position the top-left corner of the overlay animation in the top-left corner of the output video.
startTimeOffset
string ( Duration format)
The time to start the fade animation, in seconds. Default: 0
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
endTimeOffset
string ( Duration format)
The time to end the fade animation, in seconds. Default: startTimeOffset + 1s
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
FadeType
Fade type for the overlay: FADE_IN or FADE_OUT .
Enums
FADE_TYPE_UNSPECIFIED
The fade type is not specified.
FADE_IN
Fade the overlay object into view.
FADE_OUT
Fade the overlay object out of view.
AnimationEnd
End previous overlay animation from the video. Without AnimationEnd , the overlay object will keep the state of previous animation until the end of the video.
JSON representation
{
"startTimeOffset" : string
}
Fields
startTimeOffset
string ( Duration format)
The time to end overlay object, in seconds. Default: 0
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
Encryption
Encryption settings.
JSON representation
{
"id" : string ,
"drmSystems" : {
object ( DrmSystems )
} ,
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
// Union field secret_source can be only one of the following:
"secretManagerKeySource" : {
object ( SecretManagerSource )
}
// End of list of possible types for union field secret_source .
}
Fields
id
string
Required. Identifier for this set of encryption options.
drmSystems
object ( DrmSystems )
Required. DRM system(s) to use; at least one must be specified. If a DRM system is omitted, it is considered disabled.
Union field encryption_mode . Encryption mode can be either aes or cenc . encryption_mode can be only one of the following:
aes128
object ( Aes128Encryption )
Configuration for AES-128 encryption.
sampleAes
object ( SampleAesEncryption )
Configuration for SAMPLE-AES encryption.
mpegCenc
object ( MpegCommonEncryption )
Configuration for MPEG Common Encryption (MPEG-CENC).
Union field secret_source . Defines where content keys are stored. secret_source can be only one of the following:
secretManagerKeySource
object ( SecretManagerSource )
Keys are stored in Google Secret Manager.
Aes128Encryption
This type has no fields.
Configuration for AES-128 encryption.
SampleAesEncryption
This type has no fields.
Configuration for SAMPLE-AES encryption.
MpegCommonEncryption
Configuration for MPEG Common Encryption (MPEG-CENC).
JSON representation
{
"scheme" : string
}
Fields
scheme
string
Required. Specify the encryption scheme.
Supported encryption schemes:
cenc
cbcs
SecretManagerSource
Configuration for secrets stored in Google Secret Manager.
JSON representation
{
"secretVersion" : string
}
Fields
secretVersion
string
Required. The name of the Secret Version containing the encryption key in the following format: projects/{project}/secrets/{secret_id}/versions/{version_number}
Note that only numbered versions are supported. Aliases like "latest" are not supported.
DrmSystems
Defines configuration for DRM systems in use.
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
Widevine configuration.
fairplay
object ( Fairplay )
Fairplay configuration.
playready
object ( Playready )
Playready configuration.
clearkey
object ( Clearkey )
Clearkey configuration.
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
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-20 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-20 UTC."],[],[]]
