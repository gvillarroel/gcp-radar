---
title: "AnnotateVideoResponse \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/video-intelligence/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/video-intelligence/docs/reference/rest/v1/AnnotateVideoResponse
  title: "AnnotateVideoResponse \_|\_ Video Intelligence API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Video Intelligence API
Reference
Send feedback
AnnotateVideoResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
VideoAnnotationResults
JSON representation
LabelAnnotation
JSON representation
Entity
JSON representation
LabelSegment
JSON representation
LabelFrame
JSON representation
FaceAnnotation
JSON representation
FaceSegment
JSON representation
FaceFrame
JSON representation
NormalizedBoundingBox
JSON representation
FaceDetectionAnnotation
JSON representation
Track
JSON representation
TimestampedObject
JSON representation
DetectedAttribute
JSON representation
DetectedLandmark
JSON representation
NormalizedVertex
JSON representation
ExplicitContentAnnotation
JSON representation
ExplicitContentFrame
JSON representation
SpeechTranscription
JSON representation
SpeechRecognitionAlternative
JSON representation
WordInfo
JSON representation
TextAnnotation
JSON representation
TextSegment
JSON representation
TextFrame
JSON representation
NormalizedBoundingPoly
JSON representation
ObjectTrackingAnnotation
JSON representation
ObjectTrackingFrame
JSON representation
LogoRecognitionAnnotation
JSON representation
PersonDetectionAnnotation
JSON representation
Video annotation response. Included in the response field of the Operation returned by the operations.get call of the google::longrunning::Operations service.
JSON representation
{
"annotationResults" : [
{
object ( VideoAnnotationResults )
}
]
}
Fields
annotationResults[]
object ( VideoAnnotationResults )
Annotation results for all videos specified in AnnotateVideoRequest .
VideoAnnotationResults
Annotation results for a single video.
JSON representation
{
"inputUri" : string ,
"segment" : {
object ( VideoSegment )
} ,
"segmentLabelAnnotations" : [
{
object ( LabelAnnotation )
}
] ,
"segmentPresenceLabelAnnotations" : [
{
object ( LabelAnnotation )
}
] ,
"shotLabelAnnotations" : [
{
object ( LabelAnnotation )
}
] ,
"shotPresenceLabelAnnotations" : [
{
object ( LabelAnnotation )
}
] ,
"frameLabelAnnotations" : [
{
object ( LabelAnnotation )
}
] ,
"faceAnnotations" : [
{
object ( FaceAnnotation )
}
] ,
"faceDetectionAnnotations" : [
{
object ( FaceDetectionAnnotation )
}
] ,
"shotAnnotations" : [
{
object ( VideoSegment )
}
] ,
"explicitAnnotation" : {
object ( ExplicitContentAnnotation )
} ,
"speechTranscriptions" : [
{
object ( SpeechTranscription )
}
] ,
"textAnnotations" : [
{
object ( TextAnnotation )
}
] ,
"objectAnnotations" : [
{
object ( ObjectTrackingAnnotation )
}
] ,
"logoRecognitionAnnotations" : [
{
object ( LogoRecognitionAnnotation )
}
] ,
"personDetectionAnnotations" : [
{
object ( PersonDetectionAnnotation )
}
] ,
"error" : {
object ( Status )
}
}
Fields
inputUri
string
Video file location in Cloud Storage .
segment
object ( VideoSegment )
Video segment on which the annotation is run.
segmentLabelAnnotations[]
object ( LabelAnnotation )
Topical label annotations on video level or user-specified segment level. There is exactly one element for each unique label.
segmentPresenceLabelAnnotations[]
object ( LabelAnnotation )
Presence label annotations on video level or user-specified segment level. There is exactly one element for each unique label. Compared to the existing topical segmentLabelAnnotations , this field presents more fine-grained, segment-level labels detected in video content and is made available only when the client sets LabelDetectionConfig.model to "builtin/latest" in the request.
shotLabelAnnotations[]
object ( LabelAnnotation )
Topical label annotations on shot level. There is exactly one element for each unique label.
shotPresenceLabelAnnotations[]
object ( LabelAnnotation )
Presence label annotations on shot level. There is exactly one element for each unique label. Compared to the existing topical shotLabelAnnotations , this field presents more fine-grained, shot-level labels detected in video content and is made available only when the client sets LabelDetectionConfig.model to "builtin/latest" in the request.
frameLabelAnnotations[]
object ( LabelAnnotation )
Label annotations on frame level. There is exactly one element for each unique label.
faceAnnotations[] (deprecated)
object ( FaceAnnotation )
This item is deprecated!
Deprecated. Please use faceDetectionAnnotations instead.
faceDetectionAnnotations[]
object ( FaceDetectionAnnotation )
Face detection annotations.
shotAnnotations[]
object ( VideoSegment )
Shot annotations. Each shot is represented as a video segment.
explicitAnnotation
object ( ExplicitContentAnnotation )
Explicit content annotation.
speechTranscriptions[]
object ( SpeechTranscription )
Speech transcription.
textAnnotations[]
object ( TextAnnotation )
OCR text detection and tracking. Annotations for list of detected text snippets. Each will have list of frame information associated with it.
objectAnnotations[]
object ( ObjectTrackingAnnotation )
Annotations for list of objects detected and tracked in video.
logoRecognitionAnnotations[]
object ( LogoRecognitionAnnotation )
Annotations for list of logos detected, tracked and recognized in video.
personDetectionAnnotations[]
object ( PersonDetectionAnnotation )
Person detection annotations.
error
object ( Status )
If set, indicates an error. Note that for a single AnnotateVideoRequest some videos may succeed and some may fail.
LabelAnnotation
Label annotation.
JSON representation
{
"entity" : {
object ( Entity )
} ,
"categoryEntities" : [
{
object ( Entity )
}
] ,
"segments" : [
{
object ( LabelSegment )
}
] ,
"frames" : [
{
object ( LabelFrame )
}
] ,
"version" : string
}
Fields
entity
object ( Entity )
Detected entity.
categoryEntities[]
object ( Entity )
Common categories for the detected entity. For example, when the label is Terrier , the category is likely dog . And in some cases there might be more than one categories e.g., Terrier could also be a pet .
segments[]
object ( LabelSegment )
All video segments where a label was detected.
frames[]
object ( LabelFrame )
All video frames where a label was detected.
version
string
Feature version.
Entity
Detected entity from video analysis.
JSON representation
{
"entityId" : string ,
"description" : string ,
"languageCode" : string
}
Fields
entityId
string
Opaque entity ID. Some IDs may be available in Google Knowledge Graph Search API .
description
string
Textual description, e.g., Fixed-gear bicycle .
languageCode
string
Language code for description in BCP-47 format.
LabelSegment
Video segment level annotation results for label detection.
JSON representation
{
"segment" : {
object ( VideoSegment )
} ,
"confidence" : number
}
Fields
segment
object ( VideoSegment )
Video segment where a label was detected.
confidence
number
Confidence that the label is accurate. Range: [0, 1].
LabelFrame
Video frame level annotation results for label detection.
JSON representation
{
"timeOffset" : string ,
"confidence" : number
}
Fields
timeOffset
string ( Duration format)
Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.
A duration in seconds with up to nine fractional digits, terminated by ' s '. Example: "3.5s" .
confidence
number
Confidence that the label is accurate. Range: [0, 1].
FaceAnnotation
This item is deprecated!
Deprecated. No effect.
JSON representation
{
"thumbnail" : string ,
"segments" : [
{
object ( FaceSegment )
}
] ,
"frames" : [
{
object ( FaceFrame )
}
]
}
Fields
thumbnail
string ( bytes format)
Thumbnail of a representative face view (in JPEG format).
A base64-encoded string.
segments[]
object ( FaceSegment )
All video segments where a face was detected.
frames[]
object ( FaceFrame )
All video frames where a face was detected.
FaceSegment
Video segment level annotation results for face detection.
JSON representation
{
"segment" : {
object ( VideoSegment )
}
}
Fields
segment
object ( VideoSegment )
Video segment where a face was detected.
FaceFrame
This item is deprecated!
Deprecated. No effect.
JSON representation
{
"normalizedBoundingBoxes" : [
{
object ( NormalizedBoundingBox )
}
] ,
"timeOffset" : string
}
Fields
normalizedBoundingBoxes[]
object ( NormalizedBoundingBox )
Normalized Bounding boxes in a frame. There can be more than one boxes if the same face is detected in multiple locations within the current frame.
timeOffset
string ( Duration format)
Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.
A duration in seconds with up to nine fractional digits, terminated by ' s '. Example: "3.5s" .
NormalizedBoundingBox
Normalized bounding box. The normalized vertex coordinates are relative to the original image. Range: [0, 1].
JSON representation
{
"left" : number ,
"top" : number ,
"right" : number ,
"bottom" : number
}
Fields
left
number
Left X coordinate.
top
number
Top Y coordinate.
right
number
Right X coordinate.
bottom
number
Bottom Y coordinate.
FaceDetectionAnnotation
Face detection annotation.
JSON representation
{
"tracks" : [
{
object ( Track )
}
] ,
"thumbnail" : string ,
"version" : string
}
Fields
tracks[]
object ( Track )
The face tracks with attributes.
thumbnail
string ( bytes format)
The thumbnail of a person's face.
A base64-encoded string.
version
string
Feature version.
Track
A track of an object instance.
JSON representation
{
"segment" : {
object ( VideoSegment )
} ,
"timestampedObjects" : [
{
object ( TimestampedObject )
}
] ,
"attributes" : [
{
object ( DetectedAttribute )
}
] ,
"confidence" : number
}
Fields
segment
object ( VideoSegment )
Video segment of a track.
timestampedObjects[]
object ( TimestampedObject )
The object with timestamp and attributes per frame in the track.
attributes[]
object ( DetectedAttribute )
Optional. Attributes in the track level.
confidence
number
Optional. The confidence score of the tracked object.
TimestampedObject
For tracking related features. An object at timeOffset with attributes, and located with normalizedBoundingBox.
JSON representation
{
"normalizedBoundingBox" : {
object ( NormalizedBoundingBox )
} ,
"timeOffset" : string ,
"attributes" : [
{
object ( DetectedAttribute )
}
] ,
"landmarks" : [
{
object ( DetectedLandmark )
}
]
}
Fields
normalizedBoundingBox
object ( NormalizedBoundingBox )
Normalized Bounding box in a frame, where the object is located.
timeOffset
string ( Duration format)
Time-offset, relative to the beginning of the video, corresponding to the video frame for this object.
A duration in seconds with up to nine fractional digits, terminated by ' s '. Example: "3.5s" .
attributes[]
object ( DetectedAttribute )
Optional. The attributes of the object in the bounding box.
landmarks[]
object ( DetectedLandmark )
Optional. The detected landmarks.
DetectedAttribute
A generic detected attribute represented by name in string format.
JSON representation
{
"name" : string ,
"confidence" : number ,
"value" : string
}
Fields
name
string
The name of the attribute, for example, glasses, dark_glasses, mouth_open. A full list of supported type names will be provided in the document.
confidence
number
Detected attribute confidence. Range [0, 1].
value
string
Text value of the detection result. For example, the value for "HairColor" can be "black", "blonde", etc.
DetectedLandmark
A generic detected landmark represented by name in string format and a 2D location.
JSON representation
{
"name" : string ,
"point" : {
object ( NormalizedVertex )
} ,
"confidence" : number
}
Fields
name
string
The name of this landmark, for example, left_hand, right_shoulder.
point
object ( NormalizedVertex )
The 2D point of the detected landmark using the normalized image coordindate system. The normalized coordinates have the range from 0 to 1.
confidence
number
The confidence score of the detected landmark. Range [0, 1].
NormalizedVertex
A vertex represents a 2D point in the image. NOTE: the normalized vertex coordinates are relative to the original image and range from 0 to 1.
JSON representation
{
"x" : number ,
"y" : number
}
Fields
x
number
X coordinate.
y
number
Y coordinate.
ExplicitContentAnnotation
Explicit content annotation (based on per-frame visual signals only). If no explicit content has been detected in a frame, no annotations are present for that frame.
JSON representation
{
"frames" : [
{
object ( ExplicitContentFrame )
}
] ,
"version" : string
}
Fields
frames[]
object ( ExplicitContentFrame )
All video frames where explicit content was detected.
version
string
Feature version.
ExplicitContentFrame
Video frame level annotation results for explicit content.
JSON representation
{
"timeOffset" : string ,
"pornographyLikelihood" : enum ( Likelihood )
}
Fields
timeOffset
string ( Duration format)
Time-offset, relative to the beginning of the video, corresponding to the video frame for this location.
A duration in seconds with up to nine fractional digits, terminated by ' s '. Example: "3.5s" .
pornographyLikelihood
enum ( Likelihood )
Likelihood of the pornography content..
SpeechTranscription
A speech recognition result corresponding to a portion of the audio.
JSON representation
{
"alternatives" : [
{
object ( SpeechRecognitionAlternative )
}
] ,
"languageCode" : string
}
Fields
alternatives[]
object ( SpeechRecognitionAlternative )
May contain one or more recognition hypotheses (up to the maximum specified in maxAlternatives ). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer.
languageCode
string
Output only. The BCP-47 language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio.
SpeechRecognitionAlternative
Alternative hypotheses (a.k.a. n-best list).
JSON representation
{
"transcript" : string ,
"confidence" : number ,
"words" : [
{
object ( WordInfo )
}
]
}
Fields
transcript
string
Transcript text representing the words that the user spoke.
confidence
number
Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating confidence was not set.
words[]
object ( WordInfo )
Output only. A list of word-specific information for each recognized word. Note: When enableSpeakerDiarization is set to true, you will see all the words from the beginning of the audio.
WordInfo
Word-specific information for recognized words. Word information is only included in the response when certain request parameters are set, such as enable_word_time_offsets .
JSON representation
{
"startTime" : string ,
"endTime" : string ,
"word" : string ,
"confidence" : number ,
"speakerTag" : integer
}
Fields
startTime
string ( Duration format)
Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if enable_word_time_offsets=true and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.
A duration in seconds with up to nine fractional digits, terminated by ' s '. Example: "3.5s" .
endTime
string ( Duration format)
Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if enable_word_time_offsets=true and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary.
A duration in seconds with up to nine fractional digits, terminated by ' s '. Example: "3.5s" .
word
string
The word corresponding to this set of information.
confidence
number
Output only. The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating confidence was not set.
speakerTag
integer
Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from 1 up to diarizationSpeakerCount, and is only set if speaker diarization is enabled.
TextAnnotation
Annotations related to one detected OCR text snippet. This will contain the corresponding text, confidence value, and frame level information for each detection.
JSON representation
{
"text" : string ,
"segments" : [
{
object ( TextSegment )
}
] ,
"version" : string
}
Fields
text
string
The detected text.
segments[]
object ( TextSegment )
All video segments where OCR detected text appears.
version
string
Feature version.
TextSegment
Video segment level annotation results for text detection.
JSON representation
{
"segment" : {
object ( VideoSegment )
} ,
"confidence" : number ,
"frames" : [
{
object ( TextFrame )
}
]
}
Fields
segment
object ( VideoSegment )
Video segment where a text snippet was detected.
confidence
number
Confidence for the track of detected text. It is calculated as the highest over all frames where OCR detected text appears.
frames[]
object ( TextFrame )
Information related to the frames where OCR detected text appears.
TextFrame
Video frame level annotation results for text annotation (OCR). Contains information regarding timestamp and bounding box locations for the frames containing detected OCR text snippets.
JSON representation
{
"rotatedBoundingBox" : {
object ( NormalizedBoundingPoly )
} ,
"timeOffset" : string
}
Fields
rotatedBoundingBox
object ( NormalizedBoundingPoly )
Bounding polygon of the detected text for this frame.
timeOffset
string ( Duration format)
Timestamp of this frame.
A duration in seconds with up to nine fractional digits, terminated by ' s '. Example: "3.5s" .
NormalizedBoundingPoly
Normalized bounding polygon for text (that might not be aligned with axis). Contains list of the corner points in clockwise order starting from top-left corner. For example, for a rectangular bounding box: When the text is horizontal it might look like: 0----1 | | 3----2
When it's clockwise rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0
and the vertex order will still be (0, 1, 2, 3). Note that values can be less than 0, or greater than 1 due to trignometric calculations for location of the box.
JSON representation
{
"vertices" : [
{
object ( NormalizedVertex )
}
]
}
Fields
vertices[]
object ( NormalizedVertex )
Normalized vertices of the bounding polygon.
ObjectTrackingAnnotation
Annotations corresponding to one tracked object.
JSON representation
{
"entity" : {
object ( Entity )
} ,
"confidence" : number ,
"frames" : [
{
object ( ObjectTrackingFrame )
}
] ,
"version" : string ,
// Union field track_info can be only one of the following:
"segment" : {
object ( VideoSegment )
} ,
"trackId" : string
// End of list of possible types for union field track_info .
}
Fields
entity
object ( Entity )
Entity to specify the object category that this track is labeled as.
confidence
number
Object category's labeling confidence of this track.
frames[]
object ( ObjectTrackingFrame )
Information corresponding to all frames where this object track appears. Non-streaming batch mode: it may be one or multiple ObjectTrackingFrame messages in frames. Streaming mode: it can only be one ObjectTrackingFrame message in frames.
version
string
Feature version.
Union field track_info . Different representation of tracking info in non-streaming batch and streaming modes. track_info can be only one of the following:
segment
object ( VideoSegment )
Non-streaming batch mode ONLY. Each object track corresponds to one video segment where it appears.
trackId
string ( int64 format)
Streaming mode ONLY. In streaming mode, we do not know the end time of a tracked object before it is completed. Hence, there is no VideoSegment info returned. Instead, we provide a unique identifiable integer trackId so that the customers can correlate the results of the ongoing ObjectTrackAnnotation of the same trackId over time.
ObjectTrackingFrame
Video frame level annotations for object detection and tracking. This field stores per frame location, time offset, and confidence.
JSON representation
{
"normalizedBoundingBox" : {
object ( NormalizedBoundingBox )
} ,
"timeOffset" : string
}
Fields
normalizedBoundingBox
object ( NormalizedBoundingBox )
The normalized bounding box location of this object track for the frame.
timeOffset
string ( Duration format)
The timestamp of the frame in microseconds.
A duration in seconds with up to nine fractional digits, terminated by ' s '. Example: "3.5s" .
LogoRecognitionAnnotation
Annotation corresponding to one detected, tracked and recognized logo class.
JSON representation
{
"entity" : {
object ( Entity )
} ,
"tracks" : [
{
object ( Track )
}
] ,
"segments" : [
{
object ( VideoSegment )
}
]
}
Fields
entity
object ( Entity )
Entity category information to specify the logo class that all the logo tracks within this LogoRecognitionAnnotation are recognized as.
tracks[]
object ( Track )
All logo tracks where the recognized logo appears. Each track corresponds to one logo instance appearing in consecutive frames.
segments[]
object ( VideoSegment )
All video segments where the recognized logo appears. There might be multiple instances of the same logo class appearing in one VideoSegment.
PersonDetectionAnnotation
Person detection annotation per video.
JSON representation
{
"tracks" : [
{
object ( Track )
}
] ,
"version" : string
}
Fields
tracks[]
object ( Track )
The detected tracks of a person.
version
string
Feature version.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-09 UTC."],[],[]]
