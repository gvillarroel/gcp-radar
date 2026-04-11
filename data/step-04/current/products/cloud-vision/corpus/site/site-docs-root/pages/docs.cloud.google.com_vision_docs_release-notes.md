---
title: "Vision release notes \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vision/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vision/docs
source_metadata:
  url: https://docs.cloud.google.com/vision/docs/release-notes
  title: "Vision release notes \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud Vision API
Resources
Send feedback
Vision release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to the Vision API. We recommend
that Vision developers periodically check this list for any
new announcements.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
December 19, 2024
Change
Safe Search model update
We will be updating the SAFE_SEARCH_DETECTION feature model to improve quality.
We'll support both the current model and the new model for the next 90 days. After 90 days, the new model will become the default. The current model can still be accessed by specifying "builtin/legacy" for an additional 90 days before it's deprecated.
To use the new model, specify "builtin/latest" in the model field of a Feature object.
August 23, 2024
Change
New label detection model
An improved model is now available for Label Detection. Along with the improved model, the topicality field is now populated correctly.
Specify " builtin/latest " in the model field of a Feature object to use the new model.
We'll support both the current model and the new model the next 90 days. After 90 days, the new models will become the default. The current models can still be accessed by specifying " builtin/legacy " for an additional 90 days before they are deprecated.
December 05, 2023
Change
Updated feature models
Improved models are now available for the following features:
Text detection and documentation text detection (OCR)
Web detection
Logo detection
Object localization
Specify "builtin/latest" in the model field of a Feature object to use the new models.
We'll support both the current model and the new model the next 90 days. After 90 days, the new models will become the default. The current models can still be accessed by specifying "builtin/legacy" for an additional 90 days before they are deprecated.
Change
Change in OCR model behavior when detecting line break hyphens
Soft hyphens are used for the purpose of breaking words across lines. The previous ( "builtin/legacy" ) version used the BreakType HYPHEN to represent a soft hyphen. The new stable ( "builtin/latest" ) version represents it as a new symbol with literal text "-" and BreakType EOL_SURE_SPACE .
Consider the following example text and OCR model output:
Sample text
" Mr. White has had considerable experience as a Veteri-
nary surgeon, and will attend practice in that line. "
Output ( "builtin/legacy" model) :
[...]
{
"property" : {
"detectedBreak" : {
"type" : "HYPHEN"
}
},
"boundingBox" : {
"vertices" : [
[...]
]
},
"text" : "i"
}
[...]
Output ( "builtin/latest" model) :
{
"boundingBox" : {
"vertices" : [
[ ... ]
]
},
"text" : "i"
},
{
"property" : {
"detectedBreak" : {
"type" : "EOL_SURE_SPACE"
}
},
"boundingBox" : {
"vertices" : [
[ ... ]
]
},
"text" : "-"
}
December 16, 2022
Change
Landmark Detection Upgrade
Specify "builtin/latest" in the model field of a Feature object to use the new model.
We'll support both the current model and the new model the next 90 days. After 90 days the current model will be deprecated and only the new model will be used for all landmark detection requests.
Change
Face Detection Upgrade
Specify "builtin/latest" in the model field of a Feature object to use the new model.
We'll support both the current model and the new model the next 90 days. After 90 days the latest model will become the default model. The old model will be available for another 90 days by specifying "builtin/legacy" .
May 20, 2022
Change
OCR model migration
The TEXT_DETECTION and DOCUMENT_TEXT_DETECTION models have been upgraded to newer versions. The API interface and client library will be the same as the previous version. The API follows the same Service Level Agreement.
The legacy models can still be accessed until August 20 2022. Specify "builtin/legacy" in the model field of a Feature object to get the old model results. After August 20, 2022 the legacy models will no longer be offered .
May 05, 2022
Change
OCR model migration reverted
We have switched the "builtin/stable" model back to the original version temporarily while we fix a bug resulting from this migration. The week of May 16th, we will update the "builtin/stable" model used for OCR again with the model from "builtin/latest" and create a new release note.
You will be able to use the original model as "builtin/legacy" for 90 more days after we upgrade "builtin/stable".
May 02, 2022
Change
OCR model migration
The TEXT_DETECTION and DOCUMENT_TEXT_DETECTION models have been upgraded to newer versions. The API interface and client library will be the same as the previous version. The API follows the same Service Level Agreement.
The legacy models can still be accessed until August 02 2022. Specify "builtin/legacy" in the model field of a Feature object to get the old model results. After August 02, 2022 the legacy models will no longer be offered .
January 21, 2022
Change
OCR model update
We have updated the "builtin/latest" OCR model with quality improvements. Consequently, customers can continue to test this model for 90 additional days.
Please note that you have 90 days from today to test the new model by specifying "builtin/latest" in the model field of the Feature object. At the end of that period, it will be promoted to the default model accessible as "builtin/stable". After that event, the original models will still be available for another 90 days using "builtin/legacy". If you encounter problems with this upgrade, please contact Vision API engineering team by submitting a ticket in the private issue tracker .
For the original announcement of this change, see the October 1, 2021 release note.
Region forwarding from the global to the regional endpoint has been deprecated. For more information, see the October 1, 2021 release note.
October 01, 2021
Change
OCR Model Update
An improved model is now available for Text Detection (OCR) . The new model can be used with TEXT_DETECTION and DOCUMENT_TEXT_DETECTION features. The same model is used for requests sent to both features.
With the new model, the distribution of confidence scores of responses will change. For more information, see Service announcements .
Please note that you have 90 days from today to test the new model by specifying "builtin/latest" in the model field of the Feature object. At the end of that period, it will be promoted to the default model accessible as "builtin/stable". After that event, the original models will still be available for another 90 days using "builtin/legacy".
If you encounter problems with this upgrade, please contact Vision API engineering team by submitting a ticket in the private issue tracker .
Change
Deprecate region forwarding
In 90 days, specifying the location "us" or "eu" in the request to the global endpoint vision.googleapis.com will no longer be supported. Instead you should directly call the "us" or "eu" region endpoints (us-vision.googleapis.com or eu-vision.googleapis.com). You can find more information in the Multi-regional support section of the feature pages.
Feature
New multi-regional support for features
The Vision API now offers multi-regional support ( us and eu ) for the LABEL_DETECTION and SAFE_SEARCH features.
March 22, 2021
Fixed
EXIF rotation featured fixed
EXIF rotation is now disabled.
For more information, see the March 8, 2021 release note.
March 08, 2021
Issue
EXIF rotation feature fix
This fix will disable EXIF rotation, a feature activated by the model update mentioned in the November 11, 2020 release note. This feature affects the DOCUMENT_TEXT_DETECTION and TEXT_DETECTION features.
EXIF rotation will be turned down on March 22, 2021 . If your usage relies on this specific behavior, please file a feature request to us.
December 14, 2020
Feature
OCR On-Prem General Availability (GA) release
OCR On-Prem is now generally available for approved customers. OCR On-Prem enables easy integration of Google image text recognition technologies into your on-premises solution.
For more information, refer to the product documentation . Approved customers can also view the marketplace entry .
December 07, 2020
Feature
Confidence score field addition for TEXT_DETECTION
You can now provide the flag TextDetectionParams.enable_text_detection_confidence_score to a TEXT_DETECTION request to get a confidence score for response information.
December 04, 2020
Change
LABEL_DETECTION model upgrade
The latest LABEL_DETECTION model announced on October 16, 2020 has been promoted to the default model. The original model will still be available for another 60 days using "builtin/legacy" .
November 15, 2020
Change
OCR legacy model access discontinued
Extended support of the legacy TEXT_DETECTION and DOCUMENT_TEXT_DETECTION models ("builtin/legacy_20190601") is now discontinued.
See the June 11, 2020 release note for more information.
October 16, 2020
Change
LABEL_DETECTION model upgrade
The LABEL_DETECTION model will undergo an upgrade over the next 90 days to a newer version. The API interface and client library will be the same as with the previous version. The API follows the same Service Level Agreement .
Please note that you have 30 days from today to test the new model by specifying "builtin/latest" in the model field of the Feature object while requesting image annotation. At the end of that period, it will be promoted to the default model accessible as "builtin/stable" . After that event, the original model will still be available for another 60 days using "builtin/legacy" .
If you encounter problems with this upgrade, please contact Vision API engineering team by submitting a ticket in the private issue tracker .
June 11, 2020
Change
OCR legacy model access extension
Based on customer feedback, we have decided to extend support of the legacy TEXT_DETECTION and DOCUMENT_TEXT_DETECTION models. These legacy models are accessed by specifying "builtin/legacy_20190601" in the model of a Feature object.
These models will now be accessible until November 15, 2020 (6 months from launch date) to give customers more time to adapt and migrate to the new model.
See the May 15, 2020 release note for the original update announcement.
June 04, 2020
Feature
Access Transparency GA
Access Transparency logging is now Generally Available. If you want to enable
Access Transparency logs, see Enabling Access
Transparency .
May 15, 2020
Change
OCR model upgrades
Note : As per the June 11, 2020 release note, the legacy models are accessible through November 15, 2020.
The TEXT_DETECTION and DOCUMENT_TEXT_DETECTION models have been upgraded to newer versions. The API interface and client library will be the same as previous version. The API follows the same Service Level Agreement .
The legacy models can still be accessed until June 30, 2020. Specify
"builtin/legacy_20190601" in the model field of a
Feature object to get the old model results. After June 30, 2020 the old models will not longer be offered.
For more information, see the product documentation .
April 11, 2020
Feature
CMEK compliance
Vision API is now compliant with customer-managed encryption keys (CMEK). To learn more, vist the CMEK compliance page . Please note that Product Search is not CMEK compliant at this time.
February 24, 2020
Change
SafeSearch Detection update
The SafeSearch model has been upgraded to a newer version. The API interface and client library will be the same as previous version. The API follows the same Service Level Agreement .
For more information, see the product documentation .
February 19, 2020
Change
Cloud Vision API will not return gendered labels such as 'man' and 'woman' after February 19, 2020
Detecting labels in an image containing humans will result in non-gendered label such as 'person' being returned. Our prior approach was to return gendered terms, like 'man' or 'woman'.
Given that a person's gender cannot be inferred by appearance, we have decided to remove these labels in order to align with the Artificial Intelligence Principles at Google , specifically Principle #2: Avoid creating or reinforcing unfair bias.
December 13, 2019
Feature
Regional endpoints available for OCR
The Vision API now offers multi-regional support ( us and eu ) for the OCR feature.
Using a multi-region endpoint enables you to configure the Vision API to
store and perform machine learning (OCR) on your data in the United States or European Union.
October 30, 2019
Feature
Beta feature
The following beta features are available in API version v1p4beta1 :
Celebrity recognition. For more information, see Celebrity recognition .
September 12, 2019
Feature
OCR regional support
You can now specify a continent-level region for data processing of OCR requests. For more infomation, see the OCR how-to pages:
Detect text in images
Detect handwriting in images
Detect text in files (PDF/TIFF)
August 29, 2019
Change
Improved detection models are now default for the following features:
Logo Detection
Landmark Detection
Crop hints
Object Localization
The legacy model can still be accessed for 90 days by specifying
"builtin/legacy" in the model field of a
Feature object.
August 16, 2019
Change
Spring framework integration
If you write your applications in Java with the Spring Framework , we now provide a guide to help you add Spring Cloud Vision API to your application . Spring Cloud Vision can make it easier and more efficient to work with Cloud Vision.
June 07, 2019
Feature
General Availability (GA) release . Support for online small batch file annotation has been released as GA. For more information, see Online small batch file annotation .
Feature
General Availability (GA) release . Support for offline batch image annotation has been released as GA. For more information, see Offline batch image annotation .
Change
Model updates
Improved detection models are now available for the following features:
Logo detection
Landmark detection
Crop hints
Specify "builtin/latest" in the model field of a Feature object to use the new models.
We'll support both the current model and the new model the next 90 days. After 90 days the current detection models will be deprecated and only the new detection models will be used for all logo, landmark, and crop hint detection requests.
Change
Languages update
More languages (with associated languageHint codes) have been added to the list of languages supported by TEXT_DETECTION and DOCUMENT_TEXT_DETECTION . Experimentally supported languages and mapped languages lists have also been added.
May 13, 2019
Change
OCR Model Updates
An improved OCR model is now the default for Text detection (OCR) .
The legacy model can still be accessed for 90 days by specifying "builtin/legacy" in the model field of a Feature object.
April 10, 2019
Feature
Beta features
The following beta features are available in API version v1p4beta1 :
Online small batch file annotation . Performs synchronous image detection and annotation for a batch of files (currently "application/pdf", "image/tiff" and "image/gif"). The API will extract at most 5 frames (gif) or pages (pdf or tiff) of your choosing from each file provided and perform detection and annotation for each image extracted. Learn more .
Offline batch image annotation . Allows users to call any Cloud Vision API feature type on a batch of images and perform asynchronous image detection and annotation on the list of images. Learn more .
December 12, 2018
Feature
Handwriting OCR feature General Availability (GA) release
Support for handwriting OCR in document text detection has been released as GA. For more information, see Detect handwriting in an image .
September 28, 2018
Change
Logo and OCR model updates
Improved detection models are now available for the following features:
Logo Detection
Text Detection (OCR)
Specify "builtin/latest" in the model field of a Feature object to use the new models.
We'll support both the current model and the new model the next 90 days. After 90 days the current detection models will be deprecated and only the new detection models will be used for all logo and text (OCR) detection requests.
Feature
Support for object localization has been released as GA. For more information, see Detect multiple objects .
July 24, 2018
Feature
Support for PDF and TIFF files in document text detection has been released as GA. For more information, see PDF/TIFF Document Text Detection .
Feature
The following beta features are available in API version v1p3beta1 :
Object localizer. For more information, see Detect multiple objects .
Change
The Vision API can now detect handwriting in an image. To detect handwriting in an image, specify the DOCUMENT_TEXT_DETECTION feature and include a language hint of "en-t-i0-handwrit". For more information, see Detect handwriting in images .
April 06, 2018
Feature
Beta features
The following beta features are available in API version v1p2beta1 :
Support for PDF and TIFF files in document text detection.
Feature
New features
The beta features from December 4, 2017 are now available in the v1 API (GA). These include:
Document text detection: confidence scores for all levels of results, auto language detection, support for multiple languages, and faster and more accurate results.
Web entities detection: accepts geotag input as detection hint, and returns best guess labels describing the contents of the image.
Safe Search detection: includes additional racy category to enhance adult content moderation.
December 04, 2017
Feature
The following beta features are available in API version v1p1beta1 :
Document text detection: confidence scores for all levels of results, auto language detection, support for multiple languages, and faster and more accurate results. Learn more .
Web entities detection: accepts geotag input as detection hint, and returns best guess labels describing the contents of the image. Learn more .
Safe Search detection: includes additional racy category to enhance adult content moderation. Learn more .
November 06, 2017
Change
Document text detection language update :
Additional languages supported.
Automatic language detection ( languageHint is no longer required in your requests).
Multiple languages supported per image.
Faster and more accurate text detection results.
June 21, 2017
Change
Text detection model update : The text detection model has been updated to improve quality. There is no change in response structure.
Change
Label detection model update : The label detection model has been updated to improve quality. Label detection, which names objects inside an image, now recognizes more than 10,000 entities.
May 18, 2017
Feature
Cloud Vision API General Availability (GA) release
Feature
Crop hints : Find the optimal crop for your images. Code samples .
Feature
Web entities and similar pages : Return image-related information, including web entities, matching pages, and fully- and partially matching image URLs. Code samples and tutorial .
Feature
HTTP/HTTPS image URIs : Process images from publicly-accessible HTTP and HTTPS URLs.
Feature
Document text detection : Return full text annotations for dense OCR text. How-to , code samples , and tutorial .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
