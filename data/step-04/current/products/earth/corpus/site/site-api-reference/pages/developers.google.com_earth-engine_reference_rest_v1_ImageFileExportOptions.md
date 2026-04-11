---
title: "ImageFileExportOptions \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/reference/rest/v1/ImageFileExportOptions
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/earth-engine/reference/rest
source_metadata:
  url: https://developers.google.com/earth-engine/reference/rest/v1/ImageFileExportOptions
  title: "ImageFileExportOptions \_|\_ Google Earth Engine \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone. All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default. Tier quotas will take effect for all projects (regardless of tier selection date) on April 27, 2026 . Learn more.
Home
Products
Google Earth Engine
Reference
Send feedback
ImageFileExportOptions
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Images can be exported from Earth Engine as files in various formats, including GeoTIFF and TFRecord.
Export destinations for images include Google Drive and Google Cloud Storage.
GeoTIFF export options allow for generating cloud-optimized files, specifying tile dimensions, skipping empty files, setting tile size, and defining a no data value.
TFRecord export options include defining tile and margin dimensions, compressing files, setting maximum file size, specifying a default value for masked pixels, defining tensor depths for array bands, outputting sequence data, collapsing bands into a single tensor, and setting a maximum masked ratio.
Options for exporting images as files outside Earth Engine.
JSON representation
{
"fileFormat" : enum ( ImageFileFormat ) ,
// Union field destination can be only one of the following:
"driveDestination" : {
object ( DriveDestination )
} ,
"cloudStorageDestination" : {
object ( CloudStorageDestination )
}
// End of list of possible types for union field destination .
// Union field format_options can be only one of the following:
"geoTiffOptions" : {
object ( GeoTiffImageExportOptions )
} ,
"tfRecordOptions" : {
object ( TfRecordImageExportOptions )
}
// End of list of possible types for union field format_options .
}
Fields
fileFormat
enum ( ImageFileFormat )
The file format in which to export the image(s).
Union field destination . Where to write the results. destination can be only one of the following:
driveDestination
object ( DriveDestination )
If specified, configures export to Google Drive.
cloudStorageDestination
object ( CloudStorageDestination )
If specified, configures export to Google Cloud Storage.
Union field format_options . File-format-specific options. format_options can be only one of the following:
geoTiffOptions
object ( GeoTiffImageExportOptions )
File-format-specific options for GEO_TIFF exports.
tfRecordOptions
object ( TfRecordImageExportOptions )
File-format-specific options for TF_RECORD_IMAGE exports.
GeoTiffImageExportOptions
Options for encoding images as GeoTIFF files.
JSON representation
{
"cloudOptimized" : boolean ,
"tileDimensions" : {
object ( GridDimensions )
} ,
"skipEmptyFiles" : boolean ,
"tileSize" : integer ,
"noData" : {
object ( Number )
}
}
Fields
cloudOptimized
boolean
If true, generates 'cloud optimized' GeoTIFF files for more efficient access in cloud environments (see www.cogeo.org).
tileDimensions
object ( GridDimensions )
Optional explicit dimensions in pixels into which to split the image if it is too large to fit in a single file. This must be set to a multiple of the tile size, by default is 256.
skipEmptyFiles
boolean
If true, skip writing empty (i.e. fully-masked) image files.
tileSize
integer
Optional. Optional parameter setting the output tile size. This parameter is the side dimension in pixels of intermediate output tiles. The default tile size is 256, which corresponds to a 256x256 tile.
noData
object ( Number )
Optional. Optional no data value. Only noData.float_value is currently supported.
Number
A number.
JSON representation
{
// Union field value can be only one of the following:
"floatValue" : number ,
"integerValue" : string
// End of list of possible types for union field value .
}
Fields
Union field value . The value. value can be only one of the following:
floatValue
number
A double-precision floating point value.
integerValue
string ( int64 format)
An 64-bit integer value.
TfRecordImageExportOptions
Options for encoding images as TFRecord files.
JSON representation
{
"tileDimensions" : {
object ( GridDimensions )
} ,
"marginDimensions" : {
object ( GridDimensions )
} ,
"compress" : boolean ,
"maxSizeBytes" : string ,
"defaultValue" : number ,
"tensorDepths" : {
string : integer ,
...
} ,
"sequenceData" : boolean ,
"collapseBands" : boolean ,
"maxMaskedRatio" : number
}
Fields
tileDimensions
object ( GridDimensions )
Dimensions tiled over the export area, covering every pixel in the bounding box exactly once (except when the patch dimensions do not evenly divide the bounding box in which case border tiles along the greatest x/y edges will be dropped). Dimensions must be > 0.
marginDimensions
object ( GridDimensions )
If specified, tiles will be buffered by the margin dimensions both positively and negatively, resulting in overlap between neighboring patches.
compress
boolean
If true, compresses the .tfrecord files with gzip and appends the ".gz" suffix.
maxSizeBytes
string ( Int64Value format)
Maximum size, in bytes, for an exported .tfrecord (before compression). A smaller file size will result in greater sharding (and, thus, more output files). Defaults to 1GiB.
defaultValue
number
The value set in each band of a pixel that is partially or completely masked, and, the value set at each value in an output 3D feature made from an array band where the array length at the source pixel was less than the depth of the feature value. The fractional part is dropped for integer type bands, and clamped to the range of the band type. Defaults to 0.
tensorDepths
map (key: string, value: integer)
Mapping from the names of input array bands to the depth of the 3D tensors they create. Arrays will be truncated, or padded with default values to fit the shape specified. For each array band, this must have a corresponding entry.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
sequenceData
boolean
If true, each pixel is output as a SequenceExample mapping scalar bands to the context and array bands to the example’s sequences. The SequenceExamples are output in row-major order of pixels in each patch, and then by row-major order of area patches in the file sequence.
collapseBands
boolean
If true, all bands will be combined into a single 3D tensor, taking on the name of the first band in the image. All bands are promoted to bytes, int64s, then floats in that order depending on the type furthest in that sequence within all bands. Array bands are allowed as long as tensorDepths is specified.
maxMaskedRatio
number
Maximum allowed proportion of masked pixels in a patch. Patches which exceed this allowance will be dropped rather than written to files. If this field is set to anything but 1, the JSON sidecar will not be produced. Defaults to 1.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-06 UTC."],[],[]]
