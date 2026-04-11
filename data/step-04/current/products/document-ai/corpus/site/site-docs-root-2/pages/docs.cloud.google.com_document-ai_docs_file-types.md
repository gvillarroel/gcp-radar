---
title: "Supported Files \_|\_ Document AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/document-ai/docs/file-types
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/document-ai/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/document-ai/docs/file-types
  title: "Supported Files \_|\_ Document AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Document AI
Guides
Send feedback
Supported Files
Stay organized with collections
Save and categorize content based on your preferences.
File Types
Document AI supports the following image types.
For information about file size and page limits, refer to the Quotas and
Limits page.
Note: Document AI includes some supported file types in Preview .
These will be charged when they are released to General Availability (GA).
Name
File Extension(s)
MIME Type
Portable Document Format (PDF)
.pdf
application/pdf
Graphics Interchange Format (GIF)
.gif
image/gif
Tag Image File Format (TIFF)
.tiff , .tif
image/tiff
Joint Photographic Experts Group (JPEG)
.jpg , .jpeg
image/jpeg
Portable Network Graphics (PNG)
.png
image/png
Bitmap (BMP)
.bmp
image/bmp
WebP
.webp
image/webp
HyperText Markup Language (HTML)
.html
text/html
Microsoft Word Office Open XML (OOXML)
.docx
application/vnd.openxmlformats-officedocument.wordprocessingml.document
Microsoft PowerPoint OOXML
.pptx
application/vnd.openxmlformats-officedocument.presentationml.presentation
Microsoft Excel OOXML
.xlsx
application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
Note that some of these image formats are "lossy" (for example, JPEG). Reducing
file sizes for lossy formats may result in a degradation of image quality and
accuracy of results from Document AI.
Note: Prior JPEG compressions for TIFF are unsupported. Type of JPEG encapsulation
defined by the TIFF version 6.0
specification . Note: HTML and OOXML support are only available with layout
parser . Custom
splitter only supports PDF, TIFF, TIF, and
GIF file types.
Document scan resolution
For most accurate OCR results from Document AI, document scans should be
a minimum of 200 dpi (dots per inch) .
300 dpi and higher generally produce the best results. OCR accuracy is dependent
on both the resolution and the minimum font size, along with other factors like
document (and if handwritten, handwriting) quality, so testing is recommended.
The image quality analysis
feature can help evaluate resolution concerns.
NOTE: 2k x 3k pixels are required for the US driver's license back side image in
order to read the barcode.
Previous
arrow_back
Processor list
Next
Regional and multi-regional support
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
