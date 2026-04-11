---
title: "AnnotateImageResponse \_|\_ Vision API Product Search \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vision/product-search/docs/reference/rest/v1/AnnotateImageResponse
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vision/product-search/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/vision/product-search/docs/reference/rest/v1/AnnotateImageResponse
  title: "AnnotateImageResponse \_|\_ Vision API Product Search \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Vision API Product Search
Reference
AnnotateImageResponse
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
FaceAnnotation
JSON representation
Landmark
JSON representation
Type
Position
JSON representation
Likelihood
EntityAnnotation
JSON representation
LocationInfo
JSON representation
Property
JSON representation
LocalizedObjectAnnotation
JSON representation
TextAnnotation
JSON representation
Page
JSON representation
TextProperty
JSON representation
DetectedLanguage
JSON representation
DetectedBreak
JSON representation
BreakType
Block
JSON representation
Paragraph
JSON representation
Word
JSON representation
Symbol
JSON representation
BlockType
SafeSearchAnnotation
JSON representation
ImageProperties
JSON representation
DominantColorsAnnotation
JSON representation
ColorInfo
JSON representation
Color
JSON representation
CropHintsAnnotation
JSON representation
CropHint
JSON representation
WebDetection
JSON representation
WebEntity
JSON representation
WebImage
JSON representation
WebPage
JSON representation
WebLabel
JSON representation
ProductSearchResults
JSON representation
Result
JSON representation
GroupedResult
JSON representation
ObjectAnnotation
JSON representation
ImageAnnotationContext
JSON representation
Response to an image annotation request.
JSON representation
{
"faceAnnotations" : [
{
object ( FaceAnnotation )
}
] ,
"landmarkAnnotations" : [
{
object ( EntityAnnotation )
}
] ,
"logoAnnotations" : [
{
object ( EntityAnnotation )
}
] ,
"labelAnnotations" : [
{
object ( EntityAnnotation )
}
] ,
"localizedObjectAnnotations" : [
{
object ( LocalizedObjectAnnotation )
}
] ,
"textAnnotations" : [
{
object ( EntityAnnotation )
}
] ,
"fullTextAnnotation" : {
object ( TextAnnotation )
} ,
"safeSearchAnnotation" : {
object ( SafeSearchAnnotation )
} ,
"imagePropertiesAnnotation" : {
object ( ImageProperties )
} ,
"cropHintsAnnotation" : {
object ( CropHintsAnnotation )
} ,
"webDetection" : {
object ( WebDetection )
} ,
"productSearchResults" : {
object ( ProductSearchResults )
} ,
"error" : {
object ( Status )
} ,
"context" : {
object ( ImageAnnotationContext )
}
}
Fields
faceAnnotations[]
object ( FaceAnnotation )
If present, face detection has completed successfully.
landmarkAnnotations[]
object ( EntityAnnotation )
If present, landmark detection has completed successfully.
logoAnnotations[]
object ( EntityAnnotation )
If present, logo detection has completed successfully.
labelAnnotations[]
object ( EntityAnnotation )
If present, label detection has completed successfully.
localizedObjectAnnotations[]
object ( LocalizedObjectAnnotation )
If present, localized object detection has completed successfully. This will be sorted descending by confidence score.
textAnnotations[]
object ( EntityAnnotation )
If present, text (OCR) detection has completed successfully.
fullTextAnnotation
object ( TextAnnotation )
If present, text (OCR) detection or document (OCR) text detection has completed successfully. This annotation provides the structural hierarchy for the OCR detected text.
safeSearchAnnotation
object ( SafeSearchAnnotation )
If present, safe-search annotation has completed successfully.
imagePropertiesAnnotation
object ( ImageProperties )
If present, image properties were extracted successfully.
cropHintsAnnotation
object ( CropHintsAnnotation )
If present, crop hints have completed successfully.
webDetection
object ( WebDetection )
If present, web detection has completed successfully.
productSearchResults
object ( ProductSearchResults )
If present, product search has completed successfully.
error
object ( Status )
If set, represents the error message for the operation. Note that filled-in image annotations are guaranteed to be correct, even when error is set.
context
object ( ImageAnnotationContext )
If present, contextual information is needed to understand where this image comes from.
FaceAnnotation
A face annotation object contains the results of face detection.
JSON representation
{
"boundingPoly" : {
object ( BoundingPoly )
} ,
"fdBoundingPoly" : {
object ( BoundingPoly )
} ,
"landmarks" : [
{
object ( Landmark )
}
] ,
"rollAngle" : number ,
"panAngle" : number ,
"tiltAngle" : number ,
"detectionConfidence" : number ,
"landmarkingConfidence" : number ,
"joyLikelihood" : enum ( Likelihood ) ,
"sorrowLikelihood" : enum ( Likelihood ) ,
"angerLikelihood" : enum ( Likelihood ) ,
"surpriseLikelihood" : enum ( Likelihood ) ,
"underExposedLikelihood" : enum ( Likelihood ) ,
"blurredLikelihood" : enum ( Likelihood ) ,
"headwearLikelihood" : enum ( Likelihood )
}
Fields
boundingPoly
object ( BoundingPoly )
The bounding polygon around the face. The coordinates of the bounding box are in the original image's scale. The bounding box is computed to "frame" the face in accordance with human expectations. It is based on the landmarker results. Note that one or more x and/or y coordinates may not be generated in the BoundingPoly (the polygon will be unbounded) if only a partial face appears in the image to be annotated.
fdBoundingPoly
object ( BoundingPoly )
The fdBoundingPoly bounding polygon is tighter than the boundingPoly , and encloses only the skin part of the face. Typically, it is used to eliminate the face from any image analysis that detects the "amount of skin" visible in an image. It is not based on the landmarker results, only on the initial face detection, hence the
fd
(face detection) prefix.
landmarks[]
object ( Landmark )
Detected face landmarks.
rollAngle
number
Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180].
panAngle
number
Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180].
tiltAngle
number
Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image's horizontal plane. Range [-180,180].
detectionConfidence
number
Detection confidence. Range [0, 1].
landmarkingConfidence
number
Face landmarking confidence. Range [0, 1].
joyLikelihood
enum ( Likelihood )
Joy likelihood.
sorrowLikelihood
enum ( Likelihood )
Sorrow likelihood.
angerLikelihood
enum ( Likelihood )
Anger likelihood.
surpriseLikelihood
enum ( Likelihood )
Surprise likelihood.
underExposedLikelihood
enum ( Likelihood )
Under-exposed likelihood.
blurredLikelihood
enum ( Likelihood )
Blurred likelihood.
headwearLikelihood
enum ( Likelihood )
Headwear likelihood.
Landmark
A face-specific landmark (for example, a face feature).
JSON representation
{
"type" : enum ( Type ) ,
"position" : {
object ( Position )
}
}
Fields
type
enum ( Type )
Face landmark type.
position
object ( Position )
Face landmark position.
Type
Face landmark (feature) type. Left and right are defined from the vantage of the viewer of the image without considering mirror projections typical of photos. So, LEFT_EYE , typically, is the person's right eye.
Enums
UNKNOWN_LANDMARK
Unknown face landmark detected. Should not be filled.
LEFT_EYE
Left eye.
RIGHT_EYE
Right eye.
LEFT_OF_LEFT_EYEBROW
Left of left eyebrow.
RIGHT_OF_LEFT_EYEBROW
Right of left eyebrow.
LEFT_OF_RIGHT_EYEBROW
Left of right eyebrow.
RIGHT_OF_RIGHT_EYEBROW
Right of right eyebrow.
MIDPOINT_BETWEEN_EYES
Midpoint between eyes.
NOSE_TIP
Nose tip.
UPPER_LIP
Upper lip.
LOWER_LIP
Lower lip.
MOUTH_LEFT
Mouth left.
MOUTH_RIGHT
Mouth right.
MOUTH_CENTER
Mouth center.
NOSE_BOTTOM_RIGHT
Nose, bottom right.
NOSE_BOTTOM_LEFT
Nose, bottom left.
NOSE_BOTTOM_CENTER
Nose, bottom center.
LEFT_EYE_TOP_BOUNDARY
Left eye, top boundary.
LEFT_EYE_RIGHT_CORNER
Left eye, right corner.
LEFT_EYE_BOTTOM_BOUNDARY
Left eye, bottom boundary.
LEFT_EYE_LEFT_CORNER
Left eye, left corner.
RIGHT_EYE_TOP_BOUNDARY
Right eye, top boundary.
RIGHT_EYE_RIGHT_CORNER
Right eye, right corner.
RIGHT_EYE_BOTTOM_BOUNDARY
Right eye, bottom boundary.
RIGHT_EYE_LEFT_CORNER
Right eye, left corner.
LEFT_EYEBROW_UPPER_MIDPOINT
Left eyebrow, upper midpoint.
RIGHT_EYEBROW_UPPER_MIDPOINT
Right eyebrow, upper midpoint.
LEFT_EAR_TRAGION
Left ear tragion.
RIGHT_EAR_TRAGION
Right ear tragion.
LEFT_EYE_PUPIL
Left eye pupil.
RIGHT_EYE_PUPIL
Right eye pupil.
FOREHEAD_GLABELLA
Forehead glabella.
CHIN_GNATHION
Chin gnathion.
CHIN_LEFT_GONION
Chin left gonion.
CHIN_RIGHT_GONION
Chin right gonion.
Position
A 3D position in the image, used primarily for Face detection landmarks. A valid Position must have both x and y coordinates. The position coordinates are in the same scale as the original image.
JSON representation
{
"x" : number ,
"y" : number ,
"z" : number
}
Fields
x
number
X coordinate.
y
number
Y coordinate.
z
number
Z coordinate (or depth).
Likelihood
A bucketized representation of likelihood, which is intended to give clients highly stable results across model upgrades.
Enums
UNKNOWN
Unknown likelihood.
VERY_UNLIKELY
It is very unlikely.
UNLIKELY
It is unlikely.
POSSIBLE
It is possible.
LIKELY
It is likely.
VERY_LIKELY
It is very likely.
EntityAnnotation
Set of detected entity features.
JSON representation
{
"mid" : string ,
"locale" : string ,
"description" : string ,
"score" : number ,
"confidence" : number ,
"topicality" : number ,
"boundingPoly" : {
object ( BoundingPoly )
} ,
"locations" : [
{
object ( LocationInfo )
}
] ,
"properties" : [
{
object ( Property )
}
]
}
Fields
mid
string
Opaque entity ID. Some IDs may be available in Google Knowledge Graph Search API .
locale
string
The language code for the locale in which the entity textual description is expressed.
description
string
Entity textual description, expressed in its locale language.
score
number
Overall score of the result. Range [0, 1].
confidence (deprecated)
number
This item is deprecated!
Deprecated. Use score instead. The accuracy of the entity detection in an image. For example, for an image in which the "Eiffel Tower" entity is detected, this field represents the confidence that there is a tower in the query image. Range [0, 1].
topicality
number
The relevancy of the ICA (Image Content Annotation) label to the image. For example, the relevancy of "tower" is likely higher to an image containing the detected "Eiffel Tower" than to an image containing a detected distant towering building, even though the confidence that there is a tower in each image may be the same. Range [0, 1].
boundingPoly
object ( BoundingPoly )
Image region to which this entity belongs. Not produced for LABEL_DETECTION features.
locations[]
object ( LocationInfo )
The location information for the detected entity. Multiple LocationInfo elements can be present because one location may indicate the location of the scene in the image, and another location may indicate the location of the place where the image was taken. Location information is usually present for landmarks.
properties[]
object ( Property )
Some entities may have optional user-supplied Property (name/value) fields, such a score or string that qualifies the entity.
LocationInfo
Detected entity location information.
JSON representation
{
"latLng" : {
object ( LatLng )
}
}
Fields
latLng
object ( LatLng )
lat/long location coordinates.
Property
A Property consists of a user-supplied name/value pair.
JSON representation
{
"name" : string ,
"value" : string ,
"uint64Value" : string
}
Fields
name
string
Name of the property.
value
string
Value of the property.
uint64Value
string
Value of numeric properties.
LocalizedObjectAnnotation
Set of detected objects with bounding boxes.
JSON representation
{
"mid" : string ,
"languageCode" : string ,
"name" : string ,
"score" : number ,
"boundingPoly" : {
object ( BoundingPoly )
}
}
Fields
mid
string
Object ID that should align with EntityAnnotation mid.
languageCode
string
The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier .
name
string
Object name, expressed in its languageCode language.
score
number
Score of the result. Range [0, 1].
boundingPoly
object ( BoundingPoly )
Image region to which this object belongs. This must be populated.
TextAnnotation
TextAnnotation contains a structured representation of OCR extracted text. The hierarchy of an OCR extracted text structure is like this: TextAnnotation -> Page -> Block -> Paragraph -> Word -> Symbol Each structural component, starting from Page, may further have their own properties. Properties describe detected languages, breaks etc.. Please refer to the TextAnnotation.TextProperty message definition below for more detail.
JSON representation
{
"pages" : [
{
object ( Page )
}
] ,
"text" : string
}
Fields
pages[]
object ( Page )
List of pages detected by OCR.
text
string
UTF-8 text detected on the pages.
Page
Detected page from OCR.
JSON representation
{
"property" : {
object ( TextProperty )
} ,
"width" : number ,
"height" : number ,
"blocks" : [
{
object ( Block )
}
] ,
"confidence" : number
}
Fields
property
object ( TextProperty )
Additional information detected on the page.
width
number
Page width. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
height
number
Page height. For PDFs the unit is points. For images (including TIFFs) the unit is pixels.
blocks[]
object ( Block )
List of blocks of text, images etc on this page.
confidence
number
Confidence of the OCR results on the page. Range [0, 1].
TextProperty
Additional information detected on the structural component.
JSON representation
{
"detectedLanguages" : [
{
object ( DetectedLanguage )
}
] ,
"detectedBreak" : {
object ( DetectedBreak )
}
}
Fields
detectedLanguages[]
object ( DetectedLanguage )
A list of detected languages together with confidence.
detectedBreak
object ( DetectedBreak )
Detected start or end of a text segment.
DetectedLanguage
Detected language for a structural component.
JSON representation
{
"languageCode" : string ,
"confidence" : number
}
Fields
languageCode
string
The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier .
confidence
number
Confidence of detected language. Range [0, 1].
DetectedBreak
Detected start or end of a structural component.
JSON representation
{
"type" : enum ( BreakType ) ,
"isPrefix" : boolean
}
Fields
type
enum ( BreakType )
Detected break type.
isPrefix
boolean
True if break prepends the element.
BreakType
Enum to denote the type of break found. New line, space etc.
Enums
UNKNOWN
Unknown break label type.
SPACE
Regular space.
SURE_SPACE
Sure space (very wide).
EOL_SURE_SPACE
Line-wrapping break.
HYPHEN
End-line hyphen that is not present in text; does not co-occur with SPACE , LEADER_SPACE , or LINE_BREAK .
LINE_BREAK
Line break that ends a paragraph.
Block
Logical element on the page.
JSON representation
{
"property" : {
object ( TextProperty )
} ,
"boundingBox" : {
object ( BoundingPoly )
} ,
"paragraphs" : [
{
object ( Paragraph )
}
] ,
"blockType" : enum ( BlockType ) ,
"confidence" : number
}
Fields
property
object ( TextProperty )
Additional information detected for the block.
boundingBox
object ( BoundingPoly )
The bounding box for the block. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example:
when the text is horizontal it might look like:
0----1
| |
3----2
when it's rotated 180 degrees around the top-left corner it becomes:
2----3
| |
1----0
and the vertex order will still be (0, 1, 2, 3).
paragraphs[]
object ( Paragraph )
List of paragraphs in this block (if this blocks is of type text).
blockType
enum ( BlockType )
Detected block type (text, image etc) for this block.
confidence
number
Confidence of the OCR results on the block. Range [0, 1].
Paragraph
Structural unit of text representing a number of words in certain order.
JSON representation
{
"property" : {
object ( TextProperty )
} ,
"boundingBox" : {
object ( BoundingPoly )
} ,
"words" : [
{
object ( Word )
}
] ,
"confidence" : number
}
Fields
property
object ( TextProperty )
Additional information detected for the paragraph.
boundingBox
object ( BoundingPoly )
The bounding box for the paragraph. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3).
words[]
object ( Word )
List of all words in this paragraph.
confidence
number
Confidence of the OCR results for the paragraph. Range [0, 1].
Word
A word representation.
JSON representation
{
"property" : {
object ( TextProperty )
} ,
"boundingBox" : {
object ( BoundingPoly )
} ,
"symbols" : [
{
object ( Symbol )
}
] ,
"confidence" : number
}
Fields
property
object ( TextProperty )
Additional information detected for the word.
boundingBox
object ( BoundingPoly )
The bounding box for the word. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3).
symbols[]
object ( Symbol )
List of symbols in the word. The order of the symbols follows the natural reading order.
confidence
number
Confidence of the OCR results for the word. Range [0, 1].
Symbol
A single symbol representation.
JSON representation
{
"property" : {
object ( TextProperty )
} ,
"boundingBox" : {
object ( BoundingPoly )
} ,
"text" : string ,
"confidence" : number
}
Fields
property
object ( TextProperty )
Additional information detected for the symbol.
boundingBox
object ( BoundingPoly )
The bounding box for the symbol. The vertices are in the order of top-left, top-right, bottom-right, bottom-left. When a rotation of the bounding box is detected the rotation is represented as around the top-left corner as defined when the text is read in the 'natural' orientation. For example: * when the text is horizontal it might look like: 0----1 | | 3----2 * when it's rotated 180 degrees around the top-left corner it becomes: 2----3 | | 1----0 and the vertex order will still be (0, 1, 2, 3).
text
string
The actual UTF-8 representation of the symbol.
confidence
number
Confidence of the OCR results for the symbol. Range [0, 1].
BlockType
Type of a block (text, image etc) as identified by OCR.
Enums
UNKNOWN
Unknown block type.
TEXT
Regular text block.
TABLE
Table block.
PICTURE
Image block.
RULER
Horizontal/vertical line box.
BARCODE
Barcode block.
SafeSearchAnnotation
Set of features pertaining to the image, computed by computer vision methods over safe-search verticals (for example, adult, spoof, medical, violence).
JSON representation
{
"adult" : enum ( Likelihood ) ,
"spoof" : enum ( Likelihood ) ,
"medical" : enum ( Likelihood ) ,
"violence" : enum ( Likelihood ) ,
"racy" : enum ( Likelihood )
}
Fields
adult
enum ( Likelihood )
Represents the adult content likelihood for the image. Adult content may contain elements such as nudity, pornographic images or cartoons, or sexual activities.
spoof
enum ( Likelihood )
Spoof likelihood. The likelihood that an modification was made to the image's canonical version to make it appear funny or offensive.
medical
enum ( Likelihood )
Likelihood that this is a medical image.
violence
enum ( Likelihood )
Likelihood that this image contains violent content.
racy
enum ( Likelihood )
Likelihood that the request image contains racy content. Racy content may include (but is not limited to) skimpy or sheer clothing, strategically covered nudity, lewd or provocative poses, or close-ups of sensitive body areas.
ImageProperties
Stores image properties, such as dominant colors.
JSON representation
{
"dominantColors" : {
object ( DominantColorsAnnotation )
}
}
Fields
dominantColors
object ( DominantColorsAnnotation )
If present, dominant colors completed successfully.
DominantColorsAnnotation
Set of dominant colors and their corresponding scores.
JSON representation
{
"colors" : [
{
object ( ColorInfo )
}
]
}
Fields
colors[]
object ( ColorInfo )
RGB color values with their score and pixel fraction.
ColorInfo
Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.
JSON representation
{
"color" : {
object ( Color )
} ,
"score" : number ,
"pixelFraction" : number
}
Fields
color
object ( Color )
RGB components of the color.
score
number
Image-specific score for this color. Value in range [0, 1].
pixelFraction
number
The fraction of pixels the color occupies in the image. Value in range [0, 1].
Color
Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to/from color representations in various languages over compactness; for example, the fields of this representation can be trivially provided to the constructor of "java.awt.Color" in Java; it can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha" method in iOS; and, with just a little work, it can be easily formatted into a CSS "rgba()" string in JavaScript, as well.
Note: this proto does not carry information about the absolute color space that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB, DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color space.
Example (Java):
import com.google.type.Color;
// ...
public static java.awt.Color fromProto(Color protocolor) {
float alpha = protocolor.hasAlpha()
? protocolor.getAlpha().getValue()
: 1.0;
return new java.awt.Color(
protocolor.getRed(),
protocolor.getGreen(),
protocolor.getBlue(),
alpha);
}
public static Color toProto(java.awt.Color color) {
float red = (float) color.getRed();
float green = (float) color.getGreen();
float blue = (float) color.getBlue();
float denominator = 255.0;
Color.Builder resultBuilder =
Color
.newBuilder()
.setRed(red / denominator)
.setGreen(green / denominator)
.setBlue(blue / denominator);
int alpha = color.getAlpha();
if (alpha != 255) {
result.setAlpha(
FloatValue
.newBuilder()
.setValue(((float) alpha) / denominator)
.build());
}
return resultBuilder.build();
}
// ...
Example (iOS / Obj-C):
// ...
static UIColor* fromProto(Color* protocolor) {
float red = [protocolor red];
float green = [protocolor green];
float blue = [protocolor blue];
FloatValue* alpha_wrapper = [protocolor alpha];
float alpha = 1.0;
if (alpha_wrapper != nil) {
alpha = [alpha_wrapper value];
}
return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
}
static Color* toProto(UIColor* color) {
CGFloat red, green, blue, alpha;
if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
return nil;
}
Color* result = [[Color alloc] init];
[result setRed:red];
[result setGreen:green];
[result setBlue:blue];
if (alpha <= 0.9999) {
[result setAlpha:floatWrapperWithValue(alpha)];
}
[result autorelease];
return result;
}
// ...
Example (JavaScript):
// ...
var protoToCssColor = function(rgb_color) {
var redFrac = rgb_color.red || 0.0;
var greenFrac = rgb_color.green || 0.0;
var blueFrac = rgb_color.blue || 0.0;
var red = Math.floor(redFrac * 255);
var green = Math.floor(greenFrac * 255);
var blue = Math.floor(blueFrac * 255);
if (!('alpha' in rgb_color)) {
return rgbToCssColor_(red, green, blue);
}
var alphaFrac = rgb_color.alpha.value || 0.0;
var rgbParams = [red, green, blue].join(',');
return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
};
var rgbToCssColor_ = function(red, green, blue) {
var rgbNumber = new Number((red << 16) | (green << 8) | blue);
var hexString = rgbNumber.toString(16);
var missingZeros = 6 - hexString.length;
var resultBuilder = ['#'];
for (var i = 0; i < missingZeros; i++) {
resultBuilder.push('0');
}
resultBuilder.push(hexString);
return resultBuilder.join('');
};
// ...
JSON representation
{
"red" : number ,
"green" : number ,
"blue" : number ,
"alpha" : number
}
Fields
red
number
The amount of red in the color as a value in the interval [0, 1].
green
number
The amount of green in the color as a value in the interval [0, 1].
blue
number
The amount of blue in the color as a value in the interval [0, 1].
alpha
number
The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation:
pixel color = alpha * (this color) + (1.0 - alpha) * (background color)
This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is to be rendered as a solid color (as if the alpha value had been explicitly given with a value of 1.0).
CropHintsAnnotation
Set of crop hints that are used to generate new crops when serving images.
JSON representation
{
"cropHints" : [
{
object ( CropHint )
}
]
}
Fields
cropHints[]
object ( CropHint )
Crop hint results.
CropHint
Single crop hint that is used to generate a new crop when serving an image.
JSON representation
{
"boundingPoly" : {
object ( BoundingPoly )
} ,
"confidence" : number ,
"importanceFraction" : number
}
Fields
boundingPoly
object ( BoundingPoly )
The bounding polygon for the crop region. The coordinates of the bounding box are in the original image's scale.
confidence
number
Confidence of this being a salient region. Range [0, 1].
importanceFraction
number
Fraction of importance of this salient region with respect to the original image.
WebDetection
Relevant information for the image from the Internet.
JSON representation
{
"webEntities" : [
{
object ( WebEntity )
}
] ,
"fullMatchingImages" : [
{
object ( WebImage )
}
] ,
"partialMatchingImages" : [
{
object ( WebImage )
}
] ,
"pagesWithMatchingImages" : [
{
object ( WebPage )
}
] ,
"visuallySimilarImages" : [
{
object ( WebImage )
}
] ,
"bestGuessLabels" : [
{
object ( WebLabel )
}
]
}
Fields
webEntities[]
object ( WebEntity )
Deduced entities from similar images on the Internet.
fullMatchingImages[]
object ( WebImage )
Fully matching images from the Internet. Can include resized copies of the query image.
partialMatchingImages[]
object ( WebImage )
Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.
pagesWithMatchingImages[]
object ( WebPage )
Web pages containing the matching images from the Internet.
visuallySimilarImages[]
object ( WebImage )
The visually similar image results.
bestGuessLabels[]
object ( WebLabel )
The service's best guess as to the topic of the request image. Inferred from similar images on the open web.
WebEntity
Entity deduced from similar images on the Internet.
JSON representation
{
"entityId" : string ,
"score" : number ,
"description" : string
}
Fields
entityId
string
Opaque entity ID.
score
number
Overall relevancy score for the entity. Not normalized and not comparable across different image queries.
description
string
Canonical description of the entity, in English.
WebImage
Metadata for online images.
JSON representation
{
"url" : string ,
"score" : number
}
Fields
url
string
The result image URL.
score
number
(Deprecated) Overall relevancy score for the image.
WebPage
Metadata for web pages.
JSON representation
{
"url" : string ,
"score" : number ,
"pageTitle" : string ,
"fullMatchingImages" : [
{
object ( WebImage )
}
] ,
"partialMatchingImages" : [
{
object ( WebImage )
}
]
}
Fields
url
string
The result web page URL.
score
number
(Deprecated) Overall relevancy score for the web page.
pageTitle
string
Title for the web page, may contain HTML markups.
fullMatchingImages[]
object ( WebImage )
Fully matching images on the page. Can include resized copies of the query image.
partialMatchingImages[]
object ( WebImage )
Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.
WebLabel
Label to provide extra metadata for the web detection.
JSON representation
{
"label" : string ,
"languageCode" : string
}
Fields
label
string
Label for extra metadata.
languageCode
string
The BCP-47 language code for label , such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier .
ProductSearchResults
Results for a product search request.
JSON representation
{
"indexTime" : string ,
"results" : [
{
object ( Result )
}
] ,
"productGroupedResults" : [
{
object ( GroupedResult )
}
]
}
Fields
indexTime
string ( Timestamp format)
Timestamp of the index which provided these results. Products added to the product set and products removed from the product set after this time are not reflected in the current results.
A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z" .
results[]
object ( Result )
List of results, one for each product match.
productGroupedResults[]
object ( GroupedResult )
List of results grouped by products detected in the query image. Each entry corresponds to one bounding polygon in the query image, and contains the matching products specific to that region. There may be duplicate product matches in the union of all the per-product results.
Result
Information about a product.
JSON representation
{
"product" : {
object ( Product )
} ,
"score" : number ,
"image" : string
}
Fields
product
object ( Product )
The Product.
score
number
A confidence level on the match, ranging from 0 (no confidence) to 1 (full confidence).
image
string
The resource name of the image from the product that is the closest match to the query.
GroupedResult
Information about the products similar to a single product in a query image.
JSON representation
{
"boundingPoly" : {
object ( BoundingPoly )
} ,
"results" : [
{
object ( Result )
}
] ,
"objectAnnotations" : [
{
object ( ObjectAnnotation )
}
]
}
Fields
boundingPoly
object ( BoundingPoly )
The bounding polygon around the product detected in the query image.
results[]
object ( Result )
List of results, one for each product match.
objectAnnotations[]
object ( ObjectAnnotation )
List of generic predictions for the object in the bounding box.
ObjectAnnotation
Prediction for what the object in the bounding box is.
JSON representation
{
"mid" : string ,
"languageCode" : string ,
"name" : string ,
"score" : number
}
Fields
mid
string
Object ID that should align with EntityAnnotation mid.
languageCode
string
The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier .
name
string
Object name, expressed in its languageCode language.
score
number
Score of the result. Range [0, 1].
ImageAnnotationContext
If an image was produced from a file (e.g. a PDF), this message gives information about the source of that image.
JSON representation
{
"uri" : string ,
"pageNumber" : number
}
Fields
uri
string
The URI of the file used to produce the image.
pageNumber
number
If the file was a PDF or TIFF, this field gives the page number within the file used to produce the image.
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
