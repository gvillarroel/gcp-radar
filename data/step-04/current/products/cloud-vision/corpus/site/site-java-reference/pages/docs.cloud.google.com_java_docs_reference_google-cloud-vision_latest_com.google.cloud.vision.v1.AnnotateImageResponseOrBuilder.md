---
title: "Interface AnnotateImageResponseOrBuilder (3.86.0) \_|\_ Java client libraries\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/com.google.cloud.vision.v1.AnnotateImageResponseOrBuilder
knowledge_key: corpus
source_id: site-java-reference
source_type: site
entrypoint: https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/overview
source_metadata:
  url: https://docs.cloud.google.com/java/docs/reference/google-cloud-vision/latest/com.google.cloud.vision.v1.AnnotateImageResponseOrBuilder
  title: "Interface AnnotateImageResponseOrBuilder (3.86.0) \_|\_ Java client libraries\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Java
Client libraries
Send feedback
Interface AnnotateImageResponseOrBuilder (3.86.0)
Stay organized with collections
Save and categorize content based on your preferences.
3.86.0 (latest)
3.85.0
3.83.0
3.81.0
3.80.0
3.78.0
3.76.0
3.74.0
3.73.0
3.72.0
3.71.0
3.70.0
3.68.0
3.66.0
3.65.0
3.62.0
3.61.0
3.60.0
3.58.0
3.57.0
3.56.0
3.55.0
3.54.0
3.53.0
3.52.0
3.51.0
3.50.0
3.49.0
3.47.0
3.46.0
3.45.0
3.44.0
3.43.0
3.42.0
3.41.0
3.40.0
3.39.0
3.38.0
3.37.0
3.35.0
3.34.0
3.33.0
3.32.0
3.31.0
3.30.0
3.29.0
3.28.0
3.27.0
3.26.0
3.25.0
3.22.0
3.21.0
3.20.0
3.19.0
3.18.0
3.17.0
3.16.0
3.15.0
3.14.0
3.13.0
3.12.0
3.11.0
3.10.0
3.9.0
3.7.0
3.6.0
3.5.0
3.4.0
3.3.0
3.2.0
3.1.3
2.1.4
2.0.29
public interface AnnotateImageResponseOrBuilder extends MessageOrBuilder
Implements
MessageOrBuilder
Methods
getContext()
public abstract ImageAnnotationContext getContext ()
If present, contextual information is needed to understand where this image
comes from.
.google.cloud.vision.v1.ImageAnnotationContext context = 21;
Returns
Type
Description
ImageAnnotationContext
The context.
getContextOrBuilder()
public abstract ImageAnnotationContextOrBuilder getContextOrBuilder ()
If present, contextual information is needed to understand where this image
comes from.
.google.cloud.vision.v1.ImageAnnotationContext context = 21;
Returns
Type
Description
ImageAnnotationContextOrBuilder
getCropHintsAnnotation()
public abstract CropHintsAnnotation getCropHintsAnnotation ()
If present, crop hints have completed successfully.
.google.cloud.vision.v1.CropHintsAnnotation crop_hints_annotation = 11;
Returns
Type
Description
CropHintsAnnotation
The cropHintsAnnotation.
getCropHintsAnnotationOrBuilder()
public abstract CropHintsAnnotationOrBuilder getCropHintsAnnotationOrBuilder ()
If present, crop hints have completed successfully.
.google.cloud.vision.v1.CropHintsAnnotation crop_hints_annotation = 11;
Returns
Type
Description
CropHintsAnnotationOrBuilder
getError()
public abstract Status getError ()
If set, represents the error message for the operation.
Note that filled-in image annotations are guaranteed to be
correct, even when error is set.
.google.rpc.Status error = 9;
Returns
Type
Description
com.google.rpc.Status
The error.
getErrorOrBuilder()
public abstract StatusOrBuilder getErrorOrBuilder ()
If set, represents the error message for the operation.
Note that filled-in image annotations are guaranteed to be
correct, even when error is set.
.google.rpc.Status error = 9;
Returns
Type
Description
com.google.rpc.StatusOrBuilder
getFaceAnnotations(int index)
public abstract FaceAnnotation getFaceAnnotations ( int index )
If present, face detection has completed successfully.
repeated .google.cloud.vision.v1.FaceAnnotation face_annotations = 1;
Parameter
Name
Description
index
int
Returns
Type
Description
FaceAnnotation
getFaceAnnotationsCount()
public abstract int getFaceAnnotationsCount ()
If present, face detection has completed successfully.
repeated .google.cloud.vision.v1.FaceAnnotation face_annotations = 1;
Returns
Type
Description
int
getFaceAnnotationsList()
public abstract List<FaceAnnotation> getFaceAnnotationsList ()
If present, face detection has completed successfully.
repeated .google.cloud.vision.v1.FaceAnnotation face_annotations = 1;
Returns
Type
Description
List < FaceAnnotation >
getFaceAnnotationsOrBuilder(int index)
public abstract FaceAnnotationOrBuilder getFaceAnnotationsOrBuilder ( int index )
If present, face detection has completed successfully.
repeated .google.cloud.vision.v1.FaceAnnotation face_annotations = 1;
Parameter
Name
Description
index
int
Returns
Type
Description
FaceAnnotationOrBuilder
getFaceAnnotationsOrBuilderList()
public abstract List < ? extends FaceAnnotationOrBuilder > getFaceAnnotationsOrBuilderList ()
If present, face detection has completed successfully.
repeated .google.cloud.vision.v1.FaceAnnotation face_annotations = 1;
Returns
Type
Description
List < ? extends com.google.cloud.vision.v1.FaceAnnotationOrBuilder >
getFullTextAnnotation()
public abstract TextAnnotation getFullTextAnnotation ()
If present, text (OCR) detection or document (OCR) text detection has
completed successfully.
This annotation provides the structural hierarchy for the OCR detected
text.
.google.cloud.vision.v1.TextAnnotation full_text_annotation = 12;
Returns
Type
Description
TextAnnotation
The fullTextAnnotation.
getFullTextAnnotationOrBuilder()
public abstract TextAnnotationOrBuilder getFullTextAnnotationOrBuilder ()
If present, text (OCR) detection or document (OCR) text detection has
completed successfully.
This annotation provides the structural hierarchy for the OCR detected
text.
.google.cloud.vision.v1.TextAnnotation full_text_annotation = 12;
Returns
Type
Description
TextAnnotationOrBuilder
getImagePropertiesAnnotation()
public abstract ImageProperties getImagePropertiesAnnotation ()
If present, image properties were extracted successfully.
.google.cloud.vision.v1.ImageProperties image_properties_annotation = 8;
Returns
Type
Description
ImageProperties
The imagePropertiesAnnotation.
getImagePropertiesAnnotationOrBuilder()
public abstract ImagePropertiesOrBuilder getImagePropertiesAnnotationOrBuilder ()
If present, image properties were extracted successfully.
.google.cloud.vision.v1.ImageProperties image_properties_annotation = 8;
Returns
Type
Description
ImagePropertiesOrBuilder
getLabelAnnotations(int index)
public abstract EntityAnnotation getLabelAnnotations ( int index )
If present, label detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation label_annotations = 4;
Parameter
Name
Description
index
int
Returns
Type
Description
EntityAnnotation
getLabelAnnotationsCount()
public abstract int getLabelAnnotationsCount ()
If present, label detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation label_annotations = 4;
Returns
Type
Description
int
getLabelAnnotationsList()
public abstract List<EntityAnnotation> getLabelAnnotationsList ()
If present, label detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation label_annotations = 4;
Returns
Type
Description
List < EntityAnnotation >
getLabelAnnotationsOrBuilder(int index)
public abstract EntityAnnotationOrBuilder getLabelAnnotationsOrBuilder ( int index )
If present, label detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation label_annotations = 4;
Parameter
Name
Description
index
int
Returns
Type
Description
EntityAnnotationOrBuilder
getLabelAnnotationsOrBuilderList()
public abstract List < ? extends EntityAnnotationOrBuilder > getLabelAnnotationsOrBuilderList ()
If present, label detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation label_annotations = 4;
Returns
Type
Description
List < ? extends com.google.cloud.vision.v1.EntityAnnotationOrBuilder >
getLandmarkAnnotations(int index)
public abstract EntityAnnotation getLandmarkAnnotations ( int index )
If present, landmark detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation landmark_annotations = 2;
Parameter
Name
Description
index
int
Returns
Type
Description
EntityAnnotation
getLandmarkAnnotationsCount()
public abstract int getLandmarkAnnotationsCount ()
If present, landmark detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation landmark_annotations = 2;
Returns
Type
Description
int
getLandmarkAnnotationsList()
public abstract List<EntityAnnotation> getLandmarkAnnotationsList ()
If present, landmark detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation landmark_annotations = 2;
Returns
Type
Description
List < EntityAnnotation >
getLandmarkAnnotationsOrBuilder(int index)
public abstract EntityAnnotationOrBuilder getLandmarkAnnotationsOrBuilder ( int index )
If present, landmark detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation landmark_annotations = 2;
Parameter
Name
Description
index
int
Returns
Type
Description
EntityAnnotationOrBuilder
getLandmarkAnnotationsOrBuilderList()
public abstract List < ? extends EntityAnnotationOrBuilder > getLandmarkAnnotationsOrBuilderList ()
If present, landmark detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation landmark_annotations = 2;
Returns
Type
Description
List < ? extends com.google.cloud.vision.v1.EntityAnnotationOrBuilder >
getLocalizedObjectAnnotations(int index)
public abstract LocalizedObjectAnnotation getLocalizedObjectAnnotations ( int index )
If present, localized object detection has completed successfully.
This will be sorted descending by confidence score.
repeated .google.cloud.vision.v1.LocalizedObjectAnnotation localized_object_annotations = 22;
Parameter
Name
Description
index
int
Returns
Type
Description
LocalizedObjectAnnotation
getLocalizedObjectAnnotationsCount()
public abstract int getLocalizedObjectAnnotationsCount ()
If present, localized object detection has completed successfully.
This will be sorted descending by confidence score.
repeated .google.cloud.vision.v1.LocalizedObjectAnnotation localized_object_annotations = 22;
Returns
Type
Description
int
getLocalizedObjectAnnotationsList()
public abstract List<LocalizedObjectAnnotation> getLocalizedObjectAnnotationsList ()
If present, localized object detection has completed successfully.
This will be sorted descending by confidence score.
repeated .google.cloud.vision.v1.LocalizedObjectAnnotation localized_object_annotations = 22;
Returns
Type
Description
List < LocalizedObjectAnnotation >
getLocalizedObjectAnnotationsOrBuilder(int index)
public abstract LocalizedObjectAnnotationOrBuilder getLocalizedObjectAnnotationsOrBuilder ( int index )
If present, localized object detection has completed successfully.
This will be sorted descending by confidence score.
repeated .google.cloud.vision.v1.LocalizedObjectAnnotation localized_object_annotations = 22;
Parameter
Name
Description
index
int
Returns
Type
Description
LocalizedObjectAnnotationOrBuilder
getLocalizedObjectAnnotationsOrBuilderList()
public abstract List < ? extends LocalizedObjectAnnotationOrBuilder > getLocalizedObjectAnnotationsOrBuilderList ()
If present, localized object detection has completed successfully.
This will be sorted descending by confidence score.
repeated .google.cloud.vision.v1.LocalizedObjectAnnotation localized_object_annotations = 22;
Returns
Type
Description
List < ? extends com.google.cloud.vision.v1.LocalizedObjectAnnotationOrBuilder >
getLogoAnnotations(int index)
public abstract EntityAnnotation getLogoAnnotations ( int index )
If present, logo detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation logo_annotations = 3;
Parameter
Name
Description
index
int
Returns
Type
Description
EntityAnnotation
getLogoAnnotationsCount()
public abstract int getLogoAnnotationsCount ()
If present, logo detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation logo_annotations = 3;
Returns
Type
Description
int
getLogoAnnotationsList()
public abstract List<EntityAnnotation> getLogoAnnotationsList ()
If present, logo detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation logo_annotations = 3;
Returns
Type
Description
List < EntityAnnotation >
getLogoAnnotationsOrBuilder(int index)
public abstract EntityAnnotationOrBuilder getLogoAnnotationsOrBuilder ( int index )
If present, logo detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation logo_annotations = 3;
Parameter
Name
Description
index
int
Returns
Type
Description
EntityAnnotationOrBuilder
getLogoAnnotationsOrBuilderList()
public abstract List < ? extends EntityAnnotationOrBuilder > getLogoAnnotationsOrBuilderList ()
If present, logo detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation logo_annotations = 3;
Returns
Type
Description
List < ? extends com.google.cloud.vision.v1.EntityAnnotationOrBuilder >
getProductSearchResults()
public abstract ProductSearchResults getProductSearchResults ()
If present, product search has completed successfully.
.google.cloud.vision.v1.ProductSearchResults product_search_results = 14;
Returns
Type
Description
ProductSearchResults
The productSearchResults.
getProductSearchResultsOrBuilder()
public abstract ProductSearchResultsOrBuilder getProductSearchResultsOrBuilder ()
If present, product search has completed successfully.
.google.cloud.vision.v1.ProductSearchResults product_search_results = 14;
Returns
Type
Description
ProductSearchResultsOrBuilder
getSafeSearchAnnotation()
public abstract SafeSearchAnnotation getSafeSearchAnnotation ()
If present, safe-search annotation has completed successfully.
.google.cloud.vision.v1.SafeSearchAnnotation safe_search_annotation = 6;
Returns
Type
Description
SafeSearchAnnotation
The safeSearchAnnotation.
getSafeSearchAnnotationOrBuilder()
public abstract SafeSearchAnnotationOrBuilder getSafeSearchAnnotationOrBuilder ()
If present, safe-search annotation has completed successfully.
.google.cloud.vision.v1.SafeSearchAnnotation safe_search_annotation = 6;
Returns
Type
Description
SafeSearchAnnotationOrBuilder
getTextAnnotations(int index)
public abstract EntityAnnotation getTextAnnotations ( int index )
If present, text (OCR) detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation text_annotations = 5;
Parameter
Name
Description
index
int
Returns
Type
Description
EntityAnnotation
getTextAnnotationsCount()
public abstract int getTextAnnotationsCount ()
If present, text (OCR) detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation text_annotations = 5;
Returns
Type
Description
int
getTextAnnotationsList()
public abstract List<EntityAnnotation> getTextAnnotationsList ()
If present, text (OCR) detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation text_annotations = 5;
Returns
Type
Description
List < EntityAnnotation >
getTextAnnotationsOrBuilder(int index)
public abstract EntityAnnotationOrBuilder getTextAnnotationsOrBuilder ( int index )
If present, text (OCR) detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation text_annotations = 5;
Parameter
Name
Description
index
int
Returns
Type
Description
EntityAnnotationOrBuilder
getTextAnnotationsOrBuilderList()
public abstract List < ? extends EntityAnnotationOrBuilder > getTextAnnotationsOrBuilderList ()
If present, text (OCR) detection has completed successfully.
repeated .google.cloud.vision.v1.EntityAnnotation text_annotations = 5;
Returns
Type
Description
List < ? extends com.google.cloud.vision.v1.EntityAnnotationOrBuilder >
getWebDetection()
public abstract WebDetection getWebDetection ()
If present, web detection has completed successfully.
.google.cloud.vision.v1.WebDetection web_detection = 13;
Returns
Type
Description
WebDetection
The webDetection.
getWebDetectionOrBuilder()
public abstract WebDetectionOrBuilder getWebDetectionOrBuilder ()
If present, web detection has completed successfully.
.google.cloud.vision.v1.WebDetection web_detection = 13;
Returns
Type
Description
WebDetectionOrBuilder
hasContext()
public abstract boolean hasContext ()
If present, contextual information is needed to understand where this image
comes from.
.google.cloud.vision.v1.ImageAnnotationContext context = 21;
Returns
Type
Description
boolean
Whether the context field is set.
hasCropHintsAnnotation()
public abstract boolean hasCropHintsAnnotation ()
If present, crop hints have completed successfully.
.google.cloud.vision.v1.CropHintsAnnotation crop_hints_annotation = 11;
Returns
Type
Description
boolean
Whether the cropHintsAnnotation field is set.
hasError()
public abstract boolean hasError ()
If set, represents the error message for the operation.
Note that filled-in image annotations are guaranteed to be
correct, even when error is set.
.google.rpc.Status error = 9;
Returns
Type
Description
boolean
Whether the error field is set.
hasFullTextAnnotation()
public abstract boolean hasFullTextAnnotation ()
If present, text (OCR) detection or document (OCR) text detection has
completed successfully.
This annotation provides the structural hierarchy for the OCR detected
text.
.google.cloud.vision.v1.TextAnnotation full_text_annotation = 12;
Returns
Type
Description
boolean
Whether the fullTextAnnotation field is set.
hasImagePropertiesAnnotation()
public abstract boolean hasImagePropertiesAnnotation ()
If present, image properties were extracted successfully.
.google.cloud.vision.v1.ImageProperties image_properties_annotation = 8;
Returns
Type
Description
boolean
Whether the imagePropertiesAnnotation field is set.
hasProductSearchResults()
public abstract boolean hasProductSearchResults ()
If present, product search has completed successfully.
.google.cloud.vision.v1.ProductSearchResults product_search_results = 14;
Returns
Type
Description
boolean
Whether the productSearchResults field is set.
hasSafeSearchAnnotation()
public abstract boolean hasSafeSearchAnnotation ()
If present, safe-search annotation has completed successfully.
.google.cloud.vision.v1.SafeSearchAnnotation safe_search_annotation = 6;
Returns
Type
Description
boolean
Whether the safeSearchAnnotation field is set.
hasWebDetection()
public abstract boolean hasWebDetection ()
If present, web detection has completed successfully.
.google.cloud.vision.v1.WebDetection web_detection = 13;
Returns
Type
Description
boolean
Whether the webDetection field is set.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-30 UTC."],[],[]]
