---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:26:36.719Z"
product_name: "Cloud Vision"
product_slug: "cloud-vision"
feature_name: "Handwriting OCR"
feature_slug: "handwriting-ocr"
latest_feature_date: "2018-12-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/vision/docs/fulltext-annotations"
  - "https://docs.cloud.google.com/vision/docs/handwriting"
  - "https://docs.cloud.google.com/vision/docs/tutorials"
keywords:
  - "handwriting"
  - "ocr"
  - "adds"
  - "to"
  - "document"
  - "text"
  - "detection"
---

# Handwriting OCR

Product: Cloud Vision
Coverage: LOW

## Step 02 Summary

Handwriting OCR adds handwriting support to document text detection.

## Extended Definition

Handwriting OCR adds handwriting support to document text detection.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/vision/docs/fulltext-annotations](https://docs.cloud.google.com/vision/docs/fulltext-annotations)
- [https://docs.cloud.google.com/vision/docs/handwriting](https://docs.cloud.google.com/vision/docs/handwriting)
- [https://docs.cloud.google.com/vision/docs/tutorials](https://docs.cloud.google.com/vision/docs/tutorials)

## Supporting Pages

### "Dense document text detection tutorial \_|\_ Cloud Vision API \_|\_ Google\

- URL: [https://docs.cloud.google.com/vision/docs/fulltext-annotations](https://docs.cloud.google.com/vision/docs/fulltext-annotations)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Annotating an image using Document Text OCR This tutorial walks you through a basic Vision API application that makes a DOCUMENT TEXT DETECTION request , then processes the fullTextAnnotation response .
- Making the API request and reading text bounds from the response Now that our Vision API service is ready, we can access the service by calling the document text detection method of the ImageAnnotatorClient instance.
- Home Documentation AI and ML Cloud Vision API Guides Send feedback Dense document text detection tutorial Stay organized with collections Save and categorize content based on your preferences.
- Audience The goal of this tutorial is to help you develop applications using Google Cloud Vision API Document Text Detection.

### Detect handwriting in images \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/handwriting](https://docs.cloud.google.com/vision/docs/handwriting)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Image () image . source . image uri = uri response = client . document text detection ( image = image ) for page in response . full text annotation . pages : for block in page . blocks : print ( f " \n Block confidence: { block . confidence } \n " ) for paragraph in block . paragraphs : print ( "Paragraph confidence: {} " . format ( paragraph . confidence )) for word in paragraph . words : word text = "" . join ([ symbol . text for symbol in word . symbols ]) print ( "Word text: {} (confidence: {} )" . format ( word text , word . confidence ) ) for symbol in word . symbols : print ( " \t Symbol: {} (confidence: {} )" . format ( symbol . text , symbol . confidence ) ) if response . error . message : raise Exception ( " {} \n For more info on error messages, check: " "https://cloud.google.com/apis/design/errors" . format ( response . error . message ) ) gcloud To perform handwriting detection, use the gcloud ml vision detect-document command as shown in the following example: gcloud ml vision detect-document gs://cloud-samples-data/vision/handwriting image.png Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Vision reference documentation for .NET.
- Handwriting detection with Optical Character Recognition (OCR) The Vision API can detect and extract text from images: DOCUMENT TEXT DETECTION extracts text from an image (or file ); the response is optimized for dense text and documents .
- Multi-regional support This functionality currently only applies to the OCR feature (types TEXT DETECTION or DOCUMENT TEXT DETECTION ).
- One specific use of DOCUMENT TEXT DETECTION is to detect handwriting in an image.

### Tutorials \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/tutorials](https://docs.cloud.google.com/vision/docs/tutorials)
- Source ID: `site-iam-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Dense document text detection (OCR) tutorial Return text annotations from a dense text document.
- Codelab: Use the Vision API with Python (label, text/OCR, landmark, and face detection) Learn how to set up your environment, authenticate, install the Python client library, and send requests for the following features: label detection, text detection (OCR), landmark detection, and face detection (external link).
- Codelab: Use the Vision API with C# (label, text/OCR, landmark, and face detection) Learn how to set up your environment, authenticate, install the C# client library, and send requests for the following features: label detection, text detection (OCR), landmark detection, and face detection (external link).
- Multiple-feature / multiple-product tutorials Detect and translate image text with Cloud Storage, Vision, Translation, Cloud Run functions, and Pub/Sub Read Cloud Run functions documentation to learn how to use Cloud Storage, Cloud Vision, Cloud Translation, Cloud Run functions, and Pub/Sub to upload images, extract text from the images, translate the text, and save the translations.

