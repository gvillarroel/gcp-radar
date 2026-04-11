---
title: "Document AI Warehouse \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/document-warehouse/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/document-warehouse/docs/reference/rest/v1/Document
  title: "Document AI Warehouse \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Document AI Warehouse
Reference
Send feedback
Document
Stay organized with collections
Save and categorize content based on your preferences.
Defines the structure for content warehouse document proto.
JSON representation
{
"name" : string ,
"referenceId" : string ,
"displayName" : string ,
"title" : string ,
"displayUri" : string ,
"documentSchemaName" : string ,
"properties" : [
{
object ( Property )
}
] ,
"updateTime" : string ,
"createTime" : string ,
"rawDocumentFileType" : enum ( RawDocumentFileType ) ,
"contentCategory" : enum ( ContentCategory ) ,
"textExtractionDisabled" : boolean ,
"textExtractionEnabled" : boolean ,
"creator" : string ,
"updater" : string ,
"dispositionTime" : string ,
"legalHold" : boolean ,
// Union field structured_content can be only one of the following:
"plainText" : string ,
"cloudAiDocument" : {
object ( Document )
}
// End of list of possible types for union field structured_content .
// Union field raw_document can be only one of the following:
"rawDocumentPath" : string ,
"inlineRawDocument" : string
// End of list of possible types for union field raw_document .
}
Fields
name
string
The resource name of the document. Format: projects/{projectNumber}/locations/{location}/documents/{documentId}.
The name is ignored when creating a document.
referenceId
string
The reference id set by customers. Must be unique per project and location.
displayName
string
Required. Display name of the document given by the user. This name will be displayed in the UI. Customer can populate this field with the name of the document. This differs from the 'title' field as 'title' is optional and stores the top heading in the document.
title
string
title that describes the document. This can be the top heading or text that describes the document.
displayUri
string
Uri to display the document, for example, in the UI.
documentSchemaName
string
The Document schema name. Format: projects/{projectNumber}/locations/{location}/documentSchemas/{document_schema_id}.
properties[]
object ( Property )
List of values that are user supplied metadata.
updateTime
string ( Timestamp format)
Output only. The time when the document is last updated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
createTime
string ( Timestamp format)
Output only. The time when the document is created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
rawDocumentFileType
enum ( RawDocumentFileType )
This is used when DocAI was not used to load the document and parsing/ extracting is needed for the inlineRawDocument. For example, if inlineRawDocument is the byte representation of a PDF file, then this should be set to: RAW_DOCUMENT_FILE_TYPE_PDF.
contentCategory
enum ( ContentCategory )
Indicates the category (image, audio, video etc.) of the original content.
textExtractionDisabled (deprecated)
boolean
This item is deprecated!
If true, text extraction will not be performed.
textExtractionEnabled
boolean
If true, text extraction will be performed.
creator
string
The user who creates the document.
updater
string
The user who lastly updates the document.
dispositionTime
string ( Timestamp format)
Output only. If linked to a Collection with RetentionPolicy, the date when the document becomes mutable.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
legalHold
boolean
Output only. Indicates if the document has a legal hold on it.
Union field structured_content .
structured_content can be only one of the following:
plainText
string
Other document format, such as PPTX, XLXS
cloudAiDocument
object ( Document )
Document AI format to save the structured content, including OCR.
Union field raw_document . Raw document file. raw_document can be only one of the following:
rawDocumentPath
string
Raw document file in Cloud Storage path.
inlineRawDocument
string ( bytes format)
Raw document content.
A base64-encoded string.
Document
Document represents the canonical document resource in Document AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document AI to iterate and optimize for quality.
JSON representation
{
"mimeType" : string ,
"text" : string ,
"textStyles" : [
{
object ( Style )
}
] ,
"pages" : [
{
object ( Page )
}
] ,
"entities" : [
{
object ( Entity )
}
] ,
"entityRelations" : [
{
object ( EntityRelation )
}
] ,
"textChanges" : [
{
object ( TextChange )
}
] ,
"shardInfo" : {
object ( ShardInfo )
} ,
"error" : {
object ( Status )
} ,
"revisions" : [
{
object ( Revision )
}
] ,
// Union field source can be only one of the following:
"uri" : string ,
"content" : string
// End of list of possible types for union field source .
}
Fields
mimeType
string
An IANA published media type (MIME type) .
text
string
Optional. UTF-8 encoded text in reading order from the document.
textStyles[] (deprecated)
object ( Style )
This item is deprecated!
Styles for the Document.text .
pages[]
object ( Page )
Visual page layout for the Document .
entities[]
object ( Entity )
A list of entities detected on Document.text . For document shards, entities in this list may cross shard boundaries.
entityRelations[]
object ( EntityRelation )
Placeholder. Relationship among Document.entities .
textChanges[]
object ( TextChange )
Placeholder. A list of text corrections made to Document.text . This is usually used for annotating corrections to OCR mistakes. text changes for a given revision may not overlap with each other.
shardInfo
object ( ShardInfo )
Information about the sharding if this document is sharded part of a larger document. If the document is not sharded, this message is not specified.
error
object ( Status )
Any error that occurred while processing this document.
revisions[]
object ( Revision )
Placeholder. Revision history of this document.
Union field source . Original source document from the user. source can be only one of the following:
uri
string
Optional. Currently supports Google Cloud Storage URI of the form gs://bucketName/objectName . Object versioning is not supported. For more information, refer to Google Cloud Storage Request URIs .
content
string ( bytes format)
Optional. Inline document content, represented as a stream of bytes. note: As with all bytes fields, protobuffers use a pure binary representation, whereas JSON representations use base64.
A base64-encoded string.
Style
Annotation for common text style attributes. This adheres to CSS conventions as much as possible.
JSON representation
{
"textAnchor" : {
object ( TextAnchor )
} ,
"color" : {
object ( Color )
} ,
"backgroundColor" : {
object ( Color )
} ,
"fontWeight" : string ,
"textStyle" : string ,
"textDecoration" : string ,
"fontSize" : {
object ( FontSize )
} ,
"fontFamily" : string
}
Fields
textAnchor
object ( TextAnchor )
text anchor indexing into the Document.text .
color
object ( Color )
text color.
backgroundColor
object ( Color )
text background color.
fontWeight
string
Font weight . Possible values are normal , bold , bolder , and lighter .
textStyle
string
text style . Possible values are normal , italic , and oblique .
textDecoration
string
text decoration . Follows CSS standard.
fontSize
object ( FontSize )
Font size.
fontFamily
string
Font family such as Arial , Times New Roman . https://www.w3schools.com/cssref/pr_font_font-family.asp
TextAnchor
text reference indexing into the Document.text .
JSON representation
{
"textSegments" : [
{
object ( TextSegment )
}
] ,
"content" : string
}
Fields
textSegments[]
object ( TextSegment )
The text segments from the Document.text .
content
string
Contains the content of the text span so that users do not have to look it up in the textSegments. It is always populated for formFields.
TextSegment
A text segment in the Document.text . The indices may be out of bounds which indicate that the text extends into another document shard for large sharded documents. See ShardInfo.text_offset
JSON representation
{
"startIndex" : string ,
"endIndex" : string
}
Fields
startIndex
string ( int64 format)
TextSegment start UTF-8 char index in the Document.text .
endIndex
string ( int64 format)
TextSegment half open end UTF-8 char index in the Document.text .
Color
Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of java.awt.Color in Java; it can also be trivially provided to UIColor's +colorWithRed:green:blue:alpha method in iOS; and, with just a little work, it can be easily formatted into a CSS rgba() string in JavaScript.
This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space.
When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most 1e-5 .
Example (Java):
import com.google.type.Color;
// ...
public static java.awt.Color fromProto(color protocolor) {
float alpha = protocolor.hasAlpha()
? protocolor.getAlpha().getValue()
: 1.0;
return new java.awt.Color(
protocolor.getRed(),
protocolor.getGreen(),
protocolor.getBlue(),
alpha);
}
public static color toProto(java.awt.Color color) {
float red = (float) color.getRed();
float green = (float) color.getGreen();
float blue = (float) color.getBlue();
float denominator = 255.0;
color.Builder resultBuilder =
color
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
static UIColor* fromProto(color* protocolor) {
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
static color* toProto(UIColor* color) {
CGFloat red, green, blue, alpha;
if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
return nil;
}
color* result = [[color alloc] init];
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
return rgbToCssColor(red, green, blue);
}
var alphaFrac = rgb_color.alpha.value || 0.0;
var rgbParams = [red, green, blue].join(',');
return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
};
var rgbToCssColor = function(red, green, blue) {
var rgbNumber = new number((red << 16) | (green << 8) | blue);
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
This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0).
FontSize
Font size with unit.
JSON representation
{
"size" : number ,
"unit" : string
}
Fields
size
number
Font size for the text.
unit
string
Unit for the font size. Follows CSS naming (such as in , px , and pt ).
Page
A page in a Document .
JSON representation
{
"pageNumber" : integer ,
"image" : {
object ( Image )
} ,
"transforms" : [
{
object ( Matrix )
}
] ,
"dimension" : {
object ( Dimension )
} ,
"layout" : {
object ( Layout )
} ,
"detectedLanguages" : [
{
object ( DetectedLanguage )
}
] ,
"blocks" : [
{
object ( Block )
}
] ,
"paragraphs" : [
{
object ( Paragraph )
}
] ,
"lines" : [
{
object ( Line )
}
] ,
"tokens" : [
{
object ( Token )
}
] ,
"visualElements" : [
{
object ( VisualElement )
}
] ,
"tables" : [
{
object ( Table )
}
] ,
"formFields" : [
{
object ( FormField )
}
] ,
"symbols" : [
{
object ( Symbol )
}
] ,
"detectedBarcodes" : [
{
object ( DetectedBarcode )
}
] ,
"imageQualityScores" : {
object ( ImageQualityScores )
} ,
"provenance" : {
object ( Provenance )
}
}
Fields
pageNumber
integer
1-based index for current page in a parent Document . Useful when a page is taken out of a Document for individual processing.
image
object ( Image )
Rendered image for this page. This image is preprocessed to remove any skew, rotation, and distortions such that the annotation bounding boxes can be upright and axis-aligned.
transforms[]
object ( Matrix )
Transformation matrices that were applied to the original document image to produce page.image .
dimension
object ( Dimension )
Physical dimension of the page.
layout
object ( Layout )
Layout for the page.
detectedLanguages[]
object ( DetectedLanguage )
A list of detected languages together with confidence.
blocks[]
object ( Block )
A list of visually detected text blocks on the page. A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.
paragraphs[]
object ( Paragraph )
A list of visually detected text paragraphs on the page. A collection of lines that a human would perceive as a paragraph.
lines[]
object ( Line )
A list of visually detected text lines on the page. A collection of tokens that a human would perceive as a line.
tokens[]
object ( Token )
A list of visually detected tokens on the page.
visualElements[]
object ( VisualElement )
A list of detected non-text visual elements e.g. checkbox, signature etc. on the page.
tables[]
object ( Table )
A list of visually detected tables on the page.
formFields[]
object ( FormField )
A list of visually detected form fields on the page.
symbols[]
object ( Symbol )
A list of visually detected symbols on the page.
detectedBarcodes[]
object ( DetectedBarcode )
A list of detected barcodes.
imageQualityScores
object ( ImageQualityScores )
Image quality scores.
provenance (deprecated)
object ( Provenance )
This item is deprecated!
The history of this page.
Image
Rendered image contents for this page.
JSON representation
{
"content" : string ,
"mimeType" : string ,
"width" : integer ,
"height" : integer
}
Fields
content
string ( bytes format)
Raw byte content of the image.
A base64-encoded string.
mimeType
string
encoding media type (MIME type) for the image.
width
integer
width of the image in pixels.
height
integer
height of the image in pixels.
Matrix
representation for transformation matrix, intended to be compatible and used with OpenCV format for image manipulation.
JSON representation
{
"rows" : integer ,
"cols" : integer ,
"type" : integer ,
"data" : string
}
Fields
rows
integer
number of rows in the matrix.
cols
integer
number of columns in the matrix.
type
integer
This encodes information about what data type the matrix uses. For example, 0 (CV_8U) is an unsigned 8-bit image. For the full list of OpenCV primitive data types, please refer to https://docs.opencv.org/4.3.0/d1/d1b/group__core__hal__interface.html
data
string ( bytes format)
The matrix data.
A base64-encoded string.
Dimension
Dimension for the page.
JSON representation
{
"width" : number ,
"height" : number ,
"unit" : string
}
Fields
width
number
page width.
height
number
page height.
unit
string
Dimension unit.
Layout
Visual element describing a layout unit on a page.
JSON representation
{
"textAnchor" : {
object ( TextAnchor )
} ,
"confidence" : number ,
"boundingPoly" : {
object ( BoundingPoly )
} ,
"orientation" : enum ( Orientation )
}
Fields
textAnchor
object ( TextAnchor )
text anchor indexing into the Document.text .
confidence
number
confidence of the current Layout within context of the object this layout is for. e.g. confidence can be for a single token, a table, a visual element, etc. depending on context. Range [0, 1] .
boundingPoly
object ( BoundingPoly )
The bounding polygon for the Layout .
orientation
enum ( Orientation )
Detected orientation for the Layout .
BoundingPoly
A bounding polygon for the detected image annotation.
JSON representation
{
"vertices" : [
{
object ( Vertex )
}
] ,
"normalizedVertices" : [
{
object ( NormalizedVertex )
}
]
}
Fields
vertices[]
object ( Vertex )
The bounding polygon vertices.
normalizedVertices[]
object ( NormalizedVertex )
The bounding polygon normalized vertices.
Vertex
A vertex represents a 2D point in the image. NOTE: the vertex coordinates are in the same scale as the original image.
JSON representation
{
"x" : integer ,
"y" : integer
}
Fields
x
integer
X coordinate.
y
integer
Y coordinate (starts from the top of the image).
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
Y coordinate (starts from the top of the image).
Orientation
Detected human reading orientation.
Enums
ORIENTATION_UNSPECIFIED
Unspecified orientation.
PAGE_UP
Orientation is aligned with page up.
PAGE_RIGHT
Orientation is aligned with page right. Turn the head 90 degrees clockwise from upright to read.
PAGE_DOWN
Orientation is aligned with page down. Turn the head 180 degrees from upright to read.
PAGE_LEFT
Orientation is aligned with page left. Turn the head 90 degrees counterclockwise from upright to read.
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
The BCP-47 language code , such as en-US or sr-Latn .
confidence
number
confidence of detected language. Range [0, 1] .
Block
A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.
JSON representation
{
"layout" : {
object ( Layout )
} ,
"detectedLanguages" : [
{
object ( DetectedLanguage )
}
] ,
"provenance" : {
object ( Provenance )
}
}
Fields
layout
object ( Layout )
Layout for Block .
detectedLanguages[]
object ( DetectedLanguage )
A list of detected languages together with confidence.
provenance (deprecated)
object ( Provenance )
This item is deprecated!
The history of this annotation.
Provenance
Structure to identify provenance relationships between annotations in different revisions.
JSON representation
{
"revision" : integer ,
"id" : integer ,
"parents" : [
{
object ( Parent )
}
] ,
"type" : enum ( OperationType )
}
Fields
revision (deprecated)
integer
This item is deprecated!
The index of the revision that produced this element.
id (deprecated)
integer
This item is deprecated!
The Id of this operation. Needs to be unique within the scope of the revision.
parents[]
object ( Parent )
References to the original elements that are replaced.
type
enum ( OperationType )
The type of provenance operation.
Parent
The parent element the current element is based on. Used for referencing/aligning, removal and replacement operations.
JSON representation
{
"revision" : integer ,
"index" : integer ,
"id" : integer
}
Fields
revision
integer
The index of the index into current revision's parentIds list.
index
integer
The index of the parent item in the corresponding item list (eg. list of entities, properties within entities, etc.) in the parent revision.
id (deprecated)
integer
This item is deprecated!
The id of the parent provenance.
OperationType
If a processor or agent does an explicit operation on existing elements.
Enums
OPERATION_TYPE_UNSPECIFIED
Operation type unspecified. If no operation is specified a provenance entry is simply used to match against a parent .
ADD
Add an element.
REMOVE
Remove an element identified by parent .
UPDATE
Updates any fields within the given provenance scope of the message. It overwrites the fields rather than replacing them. Use this when you want to update a field value of an entity without also updating all the child properties.
REPLACE
Currently unused. Replace an element identified by parent .
EVAL_REQUESTED
Deprecated. Request human review for the element identified by parent .
This item is deprecated!
EVAL_APPROVED
Deprecated. Element is reviewed and approved at human review, confidence will be set to 1.0.
This item is deprecated!
EVAL_SKIPPED
Deprecated. Element is skipped in the validation process.
This item is deprecated!
Paragraph
A collection of lines that a human would perceive as a paragraph.
JSON representation
{
"layout" : {
object ( Layout )
} ,
"detectedLanguages" : [
{
object ( DetectedLanguage )
}
] ,
"provenance" : {
object ( Provenance )
}
}
Fields
layout
object ( Layout )
Layout for paragraph .
detectedLanguages[]
object ( DetectedLanguage )
A list of detected languages together with confidence.
provenance (deprecated)
object ( Provenance )
This item is deprecated!
The history of this annotation.
Line
A collection of tokens that a human would perceive as a line. Does not cross column boundaries, can be horizontal, vertical, etc.
JSON representation
{
"layout" : {
object ( Layout )
} ,
"detectedLanguages" : [
{
object ( DetectedLanguage )
}
] ,
"provenance" : {
object ( Provenance )
}
}
Fields
layout
object ( Layout )
Layout for Line .
detectedLanguages[]
object ( DetectedLanguage )
A list of detected languages together with confidence.
provenance (deprecated)
object ( Provenance )
This item is deprecated!
The history of this annotation.
Token
A detected token.
JSON representation
{
"layout" : {
object ( Layout )
} ,
"detectedBreak" : {
object ( DetectedBreak )
} ,
"detectedLanguages" : [
{
object ( DetectedLanguage )
}
] ,
"provenance" : {
object ( Provenance )
} ,
"styleInfo" : {
object ( StyleInfo )
}
}
Fields
layout
object ( Layout )
Layout for token .
detectedBreak
object ( DetectedBreak )
Detected break at the end of a token .
detectedLanguages[]
object ( DetectedLanguage )
A list of detected languages together with confidence.
provenance (deprecated)
object ( Provenance )
This item is deprecated!
The history of this annotation.
styleInfo
object ( StyleInfo )
text style attributes.
DetectedBreak
Detected break at the end of a token .
JSON representation
{
"type" : enum ( Type )
}
Fields
type
enum ( Type )
Detected break type.
Type
Enum to denote the type of break found.
Enums
TYPE_UNSPECIFIED
Unspecified break type.
SPACE
A single whitespace.
WIDE_SPACE
A wider whitespace.
HYPHEN
A hyphen that indicates that a token has been split across lines.
StyleInfo
Font and other text style attributes.
JSON representation
{
"fontSize" : integer ,
"pixelFontSize" : number ,
"letterSpacing" : number ,
"fontType" : string ,
"bold" : boolean ,
"italic" : boolean ,
"underlined" : boolean ,
"strikeout" : boolean ,
"subscript" : boolean ,
"superscript" : boolean ,
"smallcaps" : boolean ,
"fontWeight" : integer ,
"handwritten" : boolean ,
"textColor" : {
object ( Color )
} ,
"backgroundColor" : {
object ( Color )
}
}
Fields
fontSize
integer
Font size in points ( 1 point is ¹⁄₇₂ inches).
pixelFontSize
number
Font size in pixels, equal to unrounded fontSize * resolution ÷ 72.0 .
letterSpacing
number
Letter spacing in points.
fontType
string
name or style of the font.
bold
boolean
Whether the text is bold (equivalent to fontWeight is at least 700 ).
italic
boolean
Whether the text is italic.
underlined
boolean
Whether the text is underlined.
strikeout
boolean
Whether the text is strikethrough.
subscript
boolean
Whether the text is a subscript.
superscript
boolean
Whether the text is a superscript.
smallcaps
boolean
Whether the text is in small caps.
fontWeight
integer
TrueType weight on a scale 100 (thin) to 1000 (ultra-heavy). Normal is 400 , bold is 700 .
handwritten
boolean
Whether the text is handwritten.
textColor
object ( Color )
color of the text.
backgroundColor
object ( Color )
color of the background.
VisualElement
Detected non-text visual elements e.g. checkbox, signature etc. on the page.
JSON representation
{
"layout" : {
object ( Layout )
} ,
"type" : string ,
"detectedLanguages" : [
{
object ( DetectedLanguage )
}
]
}
Fields
layout
object ( Layout )
Layout for VisualElement .
type
string
type of the VisualElement .
detectedLanguages[]
object ( DetectedLanguage )
A list of detected languages together with confidence.
Table
A table representation similar to HTML table structure.
JSON representation
{
"layout" : {
object ( Layout )
} ,
"headerRows" : [
{
object ( TableRow )
}
] ,
"bodyRows" : [
{
object ( TableRow )
}
] ,
"detectedLanguages" : [
{
object ( DetectedLanguage )
}
] ,
"provenance" : {
object ( Provenance )
}
}
Fields
layout
object ( Layout )
Layout for Table .
headerRows[]
object ( TableRow )
Header rows of the table.
bodyRows[]
object ( TableRow )
body rows of the table.
detectedLanguages[]
object ( DetectedLanguage )
A list of detected languages together with confidence.
provenance (deprecated)
object ( Provenance )
This item is deprecated!
The history of this table.
TableRow
A row of table cells.
JSON representation
{
"cells" : [
{
object ( TableCell )
}
]
}
Fields
cells[]
object ( TableCell )
Cells that make up this row.
TableCell
A cell representation inside the table.
JSON representation
{
"layout" : {
object ( Layout )
} ,
"rowSpan" : integer ,
"colSpan" : integer ,
"detectedLanguages" : [
{
object ( DetectedLanguage )
}
]
}
Fields
layout
object ( Layout )
Layout for TableCell .
rowSpan
integer
How many rows this cell spans.
colSpan
integer
How many columns this cell spans.
detectedLanguages[]
object ( DetectedLanguage )
A list of detected languages together with confidence.
FormField
A form field detected on the page.
JSON representation
{
"fieldName" : {
object ( Layout )
} ,
"fieldValue" : {
object ( Layout )
} ,
"nameDetectedLanguages" : [
{
object ( DetectedLanguage )
}
] ,
"valueDetectedLanguages" : [
{
object ( DetectedLanguage )
}
] ,
"valueType" : string ,
"correctedKeyText" : string ,
"correctedValueText" : string ,
"provenance" : {
object ( Provenance )
}
}
Fields
fieldName
object ( Layout )
Layout for the FormField name. e.g. Address , email , Grand total , Phone number , etc.
fieldValue
object ( Layout )
Layout for the FormField value.
nameDetectedLanguages[]
object ( DetectedLanguage )
A list of detected languages for name together with confidence.
valueDetectedLanguages[]
object ( DetectedLanguage )
A list of detected languages for value together with confidence.
valueType
string
If the value is non-textual, this field represents the type. Current valid values are:
blank (this indicates the fieldValue is normal text)
unfilled_checkbox
filled_checkbox
correctedKeyText
string
Created for Labeling UI to export key text. If corrections were made to the text identified by the fieldName.text_anchor , this field will contain the correction.
correctedValueText
string
Created for Labeling UI to export value text. If corrections were made to the text identified by the fieldValue.text_anchor , this field will contain the correction.
provenance
object ( Provenance )
The history of this annotation.
Symbol
A detected symbol.
JSON representation
{
"layout" : {
object ( Layout )
} ,
"detectedLanguages" : [
{
object ( DetectedLanguage )
}
]
}
Fields
layout
object ( Layout )
Layout for symbol .
detectedLanguages[]
object ( DetectedLanguage )
A list of detected languages together with confidence.
DetectedBarcode
A detected barcode.
JSON representation
{
"layout" : {
object ( Layout )
} ,
"barcode" : {
object ( Barcode )
}
}
Fields
layout
object ( Layout )
Layout for DetectedBarcode .
barcode
object ( Barcode )
Detailed barcode information of the DetectedBarcode .
Barcode
Encodes the detailed information of a barcode.
JSON representation
{
"format" : string ,
"valueFormat" : string ,
"rawValue" : string
}
Fields
format
string
Format of a barcode. The supported formats are:
CODE_128 : code 128 type.
CODE_39 : code 39 type.
CODE_93 : code 93 type.
CODABAR : Codabar type.
DATA_MATRIX : 2D data Matrix type.
ITF : ITF type.
EAN_13 : EAN-13 type.
EAN_8 : EAN-8 type.
QR_CODE : 2D QR code type.
UPC_A : UPC-A type.
UPC_E : UPC-E type.
PDF417 : PDF417 type.
AZTEC : 2D Aztec code type.
DATABAR : GS1 DataBar code type.
valueFormat
string
value format describes the format of the value that a barcode encodes. The supported formats are:
CONTACT_INFO : Contact information.
EMAIL : email address.
isbn : isbn identifier.
PHONE : Phone number.
PRODUCT : Product.
SMS : SMS message.
TEXT : text string.
url : url address.
WIFI : Wifi information.
GEO : Geo-localization.
CALENDAR_EVENT : Calendar event.
DRIVER_LICENSE : Driver's license.
rawValue
string
Raw value encoded in the barcode. For example: 'MEBKM:TITLE:Google;url:https://www.google.com;;' .
ImageQualityScores
Image quality scores for the page image.
JSON representation
{
"qualityScore" : number ,
"detectedDefects" : [
{
object ( DetectedDefect )
}
]
}
Fields
qualityScore
number
The overall quality score. Range [0, 1] where 1 is perfect quality.
detectedDefects[]
object ( DetectedDefect )
A list of detected defects.
DetectedDefect
Image Quality Defects
JSON representation
{
"type" : string ,
"confidence" : number
}
Fields
type
string
name of the defect type. Supported values are:
quality/defect_blurry
quality/defect_noisy
quality/defect_dark
quality/defect_faint
quality/defect_text_too_small
quality/defect_document_cutoff
quality/defect_text_cutoff
quality/defect_glare
confidence
number
confidence of detected defect. Range [0, 1] where 1 indicates strong confidence that the defect exists.
Entity
An entity that could be a phrase in the text or a property that belongs to the document. It is a known entity type, such as a person, an organization, or location.
JSON representation
{
"textAnchor" : {
object ( TextAnchor )
} ,
"type" : string ,
"mentionText" : string ,
"mentionId" : string ,
"confidence" : number ,
"pageAnchor" : {
object ( PageAnchor )
} ,
"id" : string ,
"normalizedValue" : {
object ( NormalizedValue )
} ,
"properties" : [
{
object ( Entity )
}
] ,
"provenance" : {
object ( Provenance )
} ,
"redacted" : boolean
}
Fields
textAnchor
object ( TextAnchor )
Optional. Provenance of the entity. text anchor indexing into the Document.text .
type
string
Required. Entity type from a schema e.g. Address .
mentionText
string
Optional. text value of the entity e.g. 1600 Amphitheatre Pkwy .
mentionId
string
Optional. Deprecated. Use id field instead.
confidence
number
Optional. confidence of detected Schema entity. Range [0, 1] .
pageAnchor
object ( PageAnchor )
Optional. Represents the provenance of this entity wrt. the location on the page where it was found.
id
string
Optional. Canonical id. This will be a unique value in the entity list for this document.
normalizedValue
object ( NormalizedValue )
Optional. normalized entity value. Absent if the extracted value could not be converted or the type (e.g. address) is not supported for certain parsers. This field is also only populated for certain supported document types.
properties[]
object ( Entity )
Optional. Entities can be nested to form a hierarchical data structure representing the content in the document.
provenance
object ( Provenance )
Optional. The history of this annotation.
redacted
boolean
Optional. Whether the entity will be redacted for de-identification purposes.
PageAnchor
Referencing the visual context of the entity in the Document.pages . page anchors can be cross-page, consist of multiple bounding polygons and optionally reference specific layout element types.
JSON representation
{
"pageRefs" : [
{
object ( PageRef )
}
]
}
Fields
pageRefs[]
object ( PageRef )
One or more references to visual page elements
PageRef
Represents a weak reference to a page element within a document.
JSON representation
{
"page" : string ,
"layoutType" : enum ( LayoutType ) ,
"layoutId" : string ,
"boundingPoly" : {
object ( BoundingPoly )
} ,
"confidence" : number
}
Fields
page
string ( int64 format)
Required. Index into the Document.pages element, for example using [Document.pages][pageRefs.page] to locate the related page element. This field is skipped when its value is the default 0 . See https://developers.google.com/protocol-buffers/docs/proto3#json .
layoutType
enum ( LayoutType )
Optional. The type of the layout element that is being referenced if any.
layoutId (deprecated)
string
This item is deprecated!
Optional. Deprecated. Use PageRef.bounding_poly instead.
boundingPoly
object ( BoundingPoly )
Optional. Identifies the bounding polygon of a layout element on the page.
confidence
number
Optional. confidence of detected page element, if applicable. Range [0, 1] .
LayoutType
The type of layout that is being referenced.
Enums
LAYOUT_TYPE_UNSPECIFIED
Layout Unspecified.
BLOCK
References a page.blocks element.
PARAGRAPH
References a page.paragraphs element.
LINE
References a page.lines element.
TOKEN
References a page.tokens element.
VISUAL_ELEMENT
References a page.visual_elements element.
TABLE
Refrrences a page.tables element.
FORM_FIELD
References a page.form_fields element.
NormalizedValue
Parsed and normalized entity value.
JSON representation
{
"text" : string ,
// Union field structured_value can be only one of the following:
"moneyValue" : {
object ( Money )
} ,
"dateValue" : {
object ( Date )
} ,
"datetimeValue" : {
object ( DateTime )
} ,
"addressValue" : {
object ( PostalAddress )
} ,
"booleanValue" : boolean ,
"integerValue" : integer ,
"floatValue" : number
// End of list of possible types for union field structured_value .
}
Fields
text
string
Optional. An optional field to store a normalized string. For some entity types, one of respective structured_value fields may also be populated. Also not all the types of structured_value will be normalized. For example, some processors may not generate float or integer normalized text by default.
Below are sample formats mapped to structured values.
Money/currency type ( moneyValue ) is in the ISO 4217 text format.
date type ( dateValue ) is in the ISO 8601 text format.
Datetime type ( datetimeValue ) is in the ISO 8601 text format.
Union field structured_value . An optional structured entity value. Must match entity type defined in schema if known. If this field is present, the text field could also be populated. structured_value can be only one of the following:
moneyValue
object ( Money )
Money value. See also: https://github.com/googleapis/googleapis/blob/master/google/type/money.proto
dateValue
object ( Date )
date value. Includes year, month, day. See also: https://github.com/googleapis/googleapis/blob/master/google/type/date.proto
datetimeValue
object ( DateTime )
DateTime value. Includes date, time, and timezone. See also: https://github.com/googleapis/googleapis/blob/master/google/type/datetime.proto
addressValue
object ( PostalAddress )
Postal address. See also: https://github.com/googleapis/googleapis/blob/master/google/type/postal_address.proto
booleanValue
boolean
Boolean value. Can be used for entities with binary values, or for checkboxes.
integerValue
integer
Integer value.
floatValue
number
Float value.
Money
Represents an amount of money with its currency type.
JSON representation
{
"currencyCode" : string ,
"units" : string ,
"nanos" : integer
}
Fields
currencyCode
string
The three-letter currency code defined in ISO 4217.
units
string ( int64 format)
The whole units of the amount. For example if currencyCode is "USD" , then 1 unit is one US dollar.
nanos
integer
number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If units is positive, nanos must be positive or zero. If units is zero, nanos can be positive, zero, or negative. If units is negative, nanos must be negative or zero. For example $-1.75 is represented as units =-1 and nanos =-750,000,000.
Date
Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following:
A full date, with non-zero year, month, and day values.
A month and day, with a zero year (for example, an anniversary).
A year on its own, with a zero month and a zero day.
A year and month, with a zero day (for example, a credit card expiration date).
Related types:
google.type.TimeOfDay
google.type.DateTime
google.protobuf.Timestamp
JSON representation
{
"year" : integer ,
"month" : integer ,
"day" : integer
}
Fields
year
integer
year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
month
integer
month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
day
integer
day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
DateTime
Represents civil time (or occasionally physical time).
This type can represent a civil time in one of a few possible ways:
When utcOffset is set and timeZone is unset: a civil time on a calendar day with a particular offset from UTC.
When timeZone is set and utcOffset is unset: a civil time on a calendar day in a particular time zone.
When neither timeZone nor utcOffset is set: a civil time on a calendar day in local time.
The date is relative to the Proleptic Gregorian Calendar.
If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively.
This type may also be used to represent a physical time if all the date and time fields are set and either case of the time_offset oneof is set. Consider using timestamp message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field.
This type is more flexible than some applications may want. Make sure to document and validate your application's limitations.
JSON representation
{
"year" : integer ,
"month" : integer ,
"day" : integer ,
"hours" : integer ,
"minutes" : integer ,
"seconds" : integer ,
"nanos" : integer ,
// Union field time_offset can be only one of the following:
"utcOffset" : string ,
"timeZone" : {
object ( TimeZone )
}
// End of list of possible types for union field time_offset .
}
Fields
year
integer
Optional. year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year.
month
integer
Optional. month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month.
day
integer
Optional. day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day.
hours
integer
Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time.
minutes
integer
Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0.
seconds
integer
Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds.
nanos
integer
Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0.
Union field time_offset . Optional. Specifies either the UTC offset or the time zone of the DateTime. Choose carefully between them, considering that time zone data may change in the future (for example, a country modifies their DST start/end dates, and future DateTimes in the affected range had already been stored). If omitted, the DateTime is considered to be in local time. time_offset can be only one of the following:
utcOffset
string ( Duration format)
UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
timeZone
object ( TimeZone )
time zone.
TimeZone
Represents a time zone from the IANA time Zone Database .
JSON representation
{
"id" : string ,
"version" : string
}
Fields
id
string
IANA time Zone Database time zone, e.g. "America/New_York".
version
string
Optional. IANA time Zone Database version number, e.g. "2019a".
PostalAddress
Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. box or similar. It is not intended to model geographical locations (roads, towns, mountains).
In typical usage an address would be created via user input or from importing existing data, depending on the type of process.
Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput ) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used.
For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478
JSON representation
{
"revision" : integer ,
"regionCode" : string ,
"languageCode" : string ,
"postalCode" : string ,
"sortingCode" : string ,
"administrativeArea" : string ,
"locality" : string ,
"sublocality" : string ,
"addressLines" : [
string
] ,
"recipients" : [
string
] ,
"organization" : string
}
Fields
revision
integer
The schema revision of the PostalAddress . This must be set to 0, which is the latest revision.
All new revisions must be backward compatible with old revisions.
regionCode
string
Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.
languageCode
string
Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations.
If this value is not known, it should be omitted (rather than specifying a possibly incorrect default).
Examples: "zh-Hant", "ja", "ja-Latn", "en".
postalCode
string
Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).
sortingCode
string
Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (e.g. Côte d'Ivoire).
administrativeArea
string
Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community (e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland this should be left unpopulated.
locality
string
Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines.
sublocality
string
Optional. Sublocality of the address. For example, this can be neighborhoods, boroughs, districts.
addressLines[]
string
Unstructured address lines describing the lower levels of an address.
Because values in addressLines do not have type information and may sometimes contain multiple values in a single field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way, the most specific line of an address can be selected based on the language.
The minimum permitted structural representation of an address consists of a regionCode with all remaining information placed in the addressLines. It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved.
Creating an address only containing a regionCode and addressLines, and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas).
recipients[]
string
Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain "care of" information.
organization
string
Optional. The name of the organization at the address.
EntityRelation
Relationship between Entities .
JSON representation
{
"subjectId" : string ,
"objectId" : string ,
"relation" : string
}
Fields
subjectId
string
subject entity id.
objectId
string
Object entity id.
relation
string
Relationship description.
TextChange
This message is used for text changes aka. OCR corrections.
JSON representation
{
"textAnchor" : {
object ( TextAnchor )
} ,
"changedText" : string ,
"provenance" : [
{
object ( Provenance )
}
]
}
Fields
textAnchor
object ( TextAnchor )
Provenance of the correction. text anchor indexing into the Document.text . There can only be a single TextAnchor.text_segments element. If the start and end index of the text segment are the same, the text change is inserted before that index.
changedText
string
The text that replaces the text identified in the textAnchor .
provenance[] (deprecated)
object ( Provenance )
This item is deprecated!
The history of this annotation.
ShardInfo
For a large document, sharding may be performed to produce several document shards. Each document shard contains this field to detail which shard it is.
JSON representation
{
"shardIndex" : string ,
"shardCount" : string ,
"textOffset" : string
}
Fields
shardIndex
string ( int64 format)
The 0-based index of this shard.
shardCount
string ( int64 format)
Total number of shards.
textOffset
string ( int64 format)
The index of the first character in Document.text in the overall document global text.
Revision
Contains past or forward revisions of this document.
JSON representation
{
"id" : string ,
"parent" : [
integer
] ,
"parentIds" : [
string
] ,
"createTime" : string ,
"humanReview" : {
object ( HumanReview )
} ,
// Union field source can be only one of the following:
"agent" : string ,
"processor" : string
// End of list of possible types for union field source .
}
Fields
id
string
Id of the revision, internally generated by doc proto storage. Unique within the context of the document.
parent[] (deprecated)
integer
This item is deprecated!
The revisions that this revision is based on. This can include one or more parent (when documents are merged.) This field represents the index into the revisions field.
parentIds[]
string
The revisions that this revision is based on. Must include all the ids that have anything to do with this revision - eg. there are provenance.parent.revision fields that index into this field.
createTime
string ( Timestamp format)
The time that the revision was created, internally generated by doc proto storage at the time of create.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
humanReview
object ( HumanReview )
Human Review information of this revision.
Union field source . Who/what made the change source can be only one of the following:
agent
string
If the change was made by a person specify the name or id of that person.
processor
string
If the annotation was made by processor identify the processor by its resource name.
HumanReview
Human Review information of the document.
JSON representation
{
"state" : string ,
"stateMessage" : string
}
Fields
state
string
Human review state. e.g. requested , succeeded , rejected .
stateMessage
string
A message providing more details about the current state of processing. For example, the rejection reason when the state is rejected .
Property
Property of a document.
JSON representation
{
"name" : string ,
// Union field values can be only one of the following:
"integerValues" : {
object ( IntegerArray )
} ,
"floatValues" : {
object ( FloatArray )
} ,
"textValues" : {
object ( TextArray )
} ,
"enumValues" : {
object ( EnumArray )
} ,
"propertyValues" : {
object ( PropertyArray )
} ,
"dateTimeValues" : {
object ( DateTimeArray )
} ,
"mapProperty" : {
object ( MapProperty )
} ,
"timestampValues" : {
object ( TimestampArray )
}
// End of list of possible types for union field values .
}
Fields
name
string
Required. Must match the name of a PropertyDefinition in the DocumentSchema.
Union field values . Type of the property. Must match the property_options type of the matching PropertyDefinition. Value of the Property parsed into a specific data type. Specific type value(s) obtained from Document AIs Property.mention_text field. values can be only one of the following:
integerValues
object ( IntegerArray )
Integer property values.
floatValues
object ( FloatArray )
Float property values.
textValues
object ( TextArray )
String/text property values.
enumValues
object ( EnumArray )
Enum property values.
propertyValues
object ( PropertyArray )
Nested structured data property values.
dateTimeValues
object ( DateTimeArray )
date time property values. It is not supported by CMEK compliant deployment.
mapProperty
object ( MapProperty )
Map property values.
timestampValues
object ( TimestampArray )
timestamp property values. It is not supported by CMEK compliant deployment.
IntegerArray
Integer values.
JSON representation
{
"values" : [
integer
]
}
Fields
values[]
integer
List of integer values.
FloatArray
Float values.
JSON representation
{
"values" : [
number
]
}
Fields
values[]
number
List of float values.
TextArray
String/text values.
JSON representation
{
"values" : [
string
]
}
Fields
values[]
string
List of text values.
EnumArray
Enum values.
JSON representation
{
"values" : [
string
]
}
Fields
values[]
string
List of enum values.
PropertyArray
Property values.
JSON representation
{
"properties" : [
{
object ( Property )
}
]
}
Fields
properties[]
object ( Property )
List of property values.
DateTimeArray
DateTime values.
JSON representation
{
"values" : [
{
object ( DateTime )
}
]
}
Fields
values[]
object ( DateTime )
List of datetime values. Both OffsetDateTime and ZonedDateTime are supported.
MapProperty
Map property value. Represents a structured entries of key value pairs, consisting of field names which map to dynamically typed values.
JSON representation
{
"fields" : {
string : {
object ( Value )
} ,
...
}
}
Fields
fields
map (key: string, value: object ( Value ))
Unordered map of dynamically typed values.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
Value
value represents a dynamically typed value which can be either be a float, a integer, a string, or a datetime value. A producer of value is expected to set one of these variants. Absence of any variant indicates an error.
JSON representation
{
// Union field kind can be only one of the following:
"floatValue" : number ,
"intValue" : integer ,
"stringValue" : string ,
"enumValue" : {
object ( EnumValue )
} ,
"datetimeValue" : {
object ( DateTime )
} ,
"timestampValue" : {
object ( TimestampValue )
} ,
"booleanValue" : boolean
// End of list of possible types for union field kind .
}
Fields
Union field kind . The kind of value. kind can be only one of the following:
floatValue
number
Represents a float value.
intValue
integer
Represents a integer value.
stringValue
string
Represents a string value.
enumValue
object ( EnumValue )
Represents an enum value.
datetimeValue
object ( DateTime )
Represents a datetime value.
timestampValue
object ( TimestampValue )
Represents a timestamp value.
booleanValue
boolean
Represents a boolean value.
EnumValue
Represents the string value of the enum field.
JSON representation
{
"value" : string
}
Fields
value
string
String value of the enum field. This must match defined set of enums in document schema using EnumTypeOptions.
TimestampValue
timestamp value type.
JSON representation
{
// Union field value can be only one of the following:
"timestampValue" : string ,
"textValue" : string
// End of list of possible types for union field value .
}
Fields
Union field value .
value can be only one of the following:
timestampValue
string ( Timestamp format)
timestamp value
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
textValue
string
The string must represent a valid instant in UTC and is parsed using java.time.format.DateTimeFormatter.ISO_INSTANT. e.g. "2013-09-29T18:46:19Z"
TimestampArray
timestamp values.
JSON representation
{
"values" : [
{
object ( TimestampValue )
}
]
}
Fields
values[]
object ( TimestampValue )
List of timestamp values.
RawDocumentFileType
When a raw document is supplied, this indicates the file format
Enums
RAW_DOCUMENT_FILE_TYPE_UNSPECIFIED
No raw document specified or it is non-parsable
RAW_DOCUMENT_FILE_TYPE_PDF
Adobe PDF format
RAW_DOCUMENT_FILE_TYPE_DOCX
Microsoft word format
RAW_DOCUMENT_FILE_TYPE_XLSX
Microsoft Excel format
RAW_DOCUMENT_FILE_TYPE_PPTX
Microsoft Powerpoint format
RAW_DOCUMENT_FILE_TYPE_TEXT
UTF-8 encoded text format
RAW_DOCUMENT_FILE_TYPE_TIFF
TIFF or TIF image file format
ContentCategory
When a raw document or structured content is supplied, this stores the content category.
Enums
CONTENT_CATEGORY_UNSPECIFIED
No category is specified.
CONTENT_CATEGORY_IMAGE
Content is of image type.
CONTENT_CATEGORY_AUDIO
Content is of audio type.
CONTENT_CATEGORY_VIDEO
Content is of video type.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-08 UTC."],[],[]]
