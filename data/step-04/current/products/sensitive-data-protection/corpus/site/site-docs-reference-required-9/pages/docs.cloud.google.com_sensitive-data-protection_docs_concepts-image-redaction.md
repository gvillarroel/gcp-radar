---
title: "Image inspection and redaction \_|\_ Sensitive Data Protection \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-image-redaction
knowledge_key: corpus
source_id: site-docs-reference-required-9
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/create-inspection-template
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-image-redaction
  title: "Image inspection and redaction \_|\_ Sensitive Data Protection \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Data Loss Prevention (Cloud DLP) is now a part of Sensitive Data Protection. The API name remains the same: Cloud Data Loss Prevention API (DLP API). For information about the services that make up Sensitive Data Protection, see Sensitive Data Protection overview .
Home
Documentation
Security
Sensitive Data Protection
Guides
Send feedback
Image inspection and redaction
Stay organized with collections
Save and categorize content based on your preferences.
This document describes the image inspection and redaction capabilities of
Sensitive Data Protection.
Using infoType detectors , Sensitive Data Protection inspects
a base64-encoded image and detects sensitive data within
the image. Sensitive Data Protection can then return information about the location
of sensitive data within the image or redact the sensitive data by masking it
with an opaque rectangle.
Inspection and redaction are two distinct operations:
Inspection : Sensitive Data Protection inspects the submitted
base64-encoded image for the specified infoTypes. It returns the detected
InfoTypes, along with one or more set of pixel coordinates and dimensions.
Each set of pixel coordinate and dimension values indicate the bottom-left
corner and the dimensions of bounding boxes, respectively. Each bounding
box corresponds to all or part of a Sensitive Data Protection finding.
Redaction : Sensitive Data Protection inspects the submitted
base64-encoded image for the specified infoTypes. Sensitive Data Protection
redacts any sensitive data findings by masking them with opaque rectangles.
It returns the redacted base64-encoded image in the same image format as the
original image. You can also configure the color of the redaction boxes in
the request.
About image inspection
The Sensitive Data Protection inspection service accepts a base64-encoded image
and then searches the image for any data that
matches its inspection criteria. Sensitive Data Protection returns the
locations of any sensitive data that it detects.
Consider the following image.
Original image (click to enlarge).
The image inspection process is as follows:
You send a
content.inspect
request to the DLP API. The request contains the base64-encoded
image and the inspection configuration, which contains your detection
criteria.
Sensitive Data Protection scans the image using the
inspection configuration and identifies any matches.
Sensitive Data Protection returns the coordinates and dimensions of the
regions within the image where it found sensitive data according to your
detection criteria.
The returned coordinates indicate where to find the sensitive data. Be aware
that Sensitive Data Protection often uses multiple boxes to indicate where a single
instance of sensitive data is in the image.
If Sensitive Data Protection doesn't find any data in the image that corresponds
to your detection criteria, it returns an empty, successful HTTP 200 response.
About image redaction
Image redaction is similar to image inspection, with one additional step. After
Sensitive Data Protection identifies the locations of sensitive data within
the image, instead of returning the coordinates of the areas that contain the
data, it places opaque rectangles on those areas, returning a redacted,
base64-encoded image.
Redacted image (click to enlarge).
The image redaction process is as follows:
You send an
image.redact request
to the DLP API. The request contains the base64-encoded image
and the image redaction configuration, which contains your detection
criteria.
Sensitive Data Protection scans the image using the
image redaction configuration and identifies any matches.
Sensitive Data Protection redacts all detected sensitive data by
covering it with an opaque rectangle. It then encodes the image in base64
and returns the redacted image in the request response.
If Sensitive Data Protection doesn't find any data in the image that corresponds
to your detection criteria, it returns the base64-encoded image unchanged.
Image detection features
This section describes the image detection features that you can apply to your
inspection and redaction operations. For all these features, you need to perform
the scan in a location that supports image
scanning .
Recognize text in images
Sensitive Data Protection uses optical character recognition (OCR) to
detect text within images. Sensitive Data Protection analyzes the
detected text similarly to how it analyzes a body of text.
To detect text in images, specify any text-based infoType, such as PERSON_NAME
and CREDIT_CARD_NUMBER in your inspection or redaction configuration.
Recognize objects and themes in images
Sensitive Data Protection can analyze the pixels and features of images that
aren't primarily text-based. Sensitive Data Protection uses this technique
for the following features.
Object detection
Sensitive Data Protection can classify and redact objects in images.
For example, you can configure your scans to detect photo ID cards, persons, and
license plates in images.
To detect objects in images, specify object
infoTypes in your
inspection or redaction configuration.
For more information, see the following:
Inspect an image for sensitive
objects
Object
redaction
Image safety classification
Sensitive Data Protection can classify and redact images based on their
thematic content. This feature helps you identify images that contain
sensitive or harmful subject matter according to predefined safety categories.
Sensitive Data Protection analyzes an image's overall context and
meaning to determine if it belongs to categories such as sexually explicit or
violent content. You can use this feature to support content
moderation and enforce acceptable use policies.
When performing image safety classification, Sensitive Data Protection
analyzes the entire image. Unlike object detection, which identifies specific
items within an image, this feature assesses the image's subject matter as a
whole. If you configure redaction based on image safety, this feature redacts
the entire image.
To perform image safety classification, specify image context
infoTypes in your
inspection or redaction configuration.
What's next
Learn how to inspect images for sensitive data using
Sensitive Data Protection .
Learn how to redact sensitive data from images using
Sensitive Data Protection .
Learn more about creating a de-identified copy of data in
storage .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
