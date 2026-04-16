---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.635Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Image findings redaction"
feature_slug: "image-findings-redaction"
latest_feature_date: "2017-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-image-redaction"
keywords:
  - "fills"
  - "bounding"
  - "automatically"
  - "redaction"
  - "finding"
  - "image"
  - "findings"
---

# Image findings redaction

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Automatically fills a finding's bounding box in an image with a solid color using content.redact.

## Extended Definition

Automatically fills a finding's bounding box in an image with a solid color using content.redact.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-image-redaction](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-image-redaction)

## Supporting Pages

### "Image inspection and redaction \_|\_ Sensitive Data Protection \_|\_ Google\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-image-redaction](https://docs.cloud.google.com/sensitive-data-protection/docs/concepts-image-redaction)
- Source ID: `site-api-reference-required-2`
- Final score: 95
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The request contains the base64-encoded image and the image redaction configuration, which contains your detection criteria.
- Sensitive Data Protection scans the image using the image redaction configuration and identifies any matches.
- About image redaction Image redaction is similar to image inspection, with one additional step.
- The image redaction process is as follows: You send an image.redact request to the DLP API.

### "Classification, redaction, and de-identification \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/classification-redaction](https://docs.cloud.google.com/sensitive-data-protection/docs/classification-redaction)
- Source ID: `site-api-reference-required-2`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- InfoType Likelihood Offset US HEALTHCARE NPI VERY LIKELY 122 EMAIL ADDRESS LIKELY 72 US DRIVERS LICENSE NUMBER LIKELY 155 CANADA BC PHN VERY UNLIKELY 122 UK TAXPAYER REFERENCE VERY UNLIKELY 122 CANADA PASSPORT VERY UNLIKELY 155 Automatic text redaction Automatic redaction produces an output with sensitive data matches removed instead of giving you a list of findings.
- Similar to text classification, it returns findings, but it also adds a bounding box where the text was found.
- Example automation redaction input: Please update my records with the following information: Email address: foo@example.com National Provider Identifier: 1245319599 Driver's license: AC333991 Example output using a placeholder of " ": Please update my records with the following information: Email address: National Provider Identifier: Driver's license: Image classification Sensitive Data Protection uses Optical Character Recognition (OCR) technology to recognize text prior to classification.
- Text classification Given the following text input: Please update my records with the following information: Email address: foo@example.com National Provider Identifier: 1245319599 Driver's license: AC333991 The output is a list of findings, organized into the following categories: InfoType Likelihood Offset (Where in the string the potential InfoType was found) Example output is shown in the table below.

### "Inspect images for sensitive data \_|\_ Sensitive Data Protection \_|\_\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-images](https://docs.cloud.google.com/sensitive-data-protection/docs/inspecting-images)
- Source ID: `site-docs-reference-3`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To encode an image file: Linux: base64 input.jpg > output.txt macOS: base64 -i input.jpg -o output.txt PowerShell: [Convert]::ToBase64String([IO.File]::ReadAllBytes("./input.jpg")) > output.txt To inspect this image for default infoTypes, send the following JSON to the content.inspect method: { "item" : { "byteItem" : { "data" : " BASE64 ENCODED IMAGE " , "type" : "IMAGE PNG" } } } The output is similar to the following: { "result" : { "findings" : [ { "infoType" : { "name" : "PERSON NAME" , "sensitivityScore" : { "score" : "SENSITIVITY MODERATE" } }, "likelihood" : "LIKELY" , "location" : { "contentLocations" : [ { "imageLocation" : { "boundingBoxes" : [ { "top" : 383 , "left" : 419 , "width" : 82 , "height" : 38 }, { "top" : 383 , "left" : 494 , "width" : 91 , "height" : 37 } ] } } ] }, "createTime" : "2025-05-22T20:27:03.730Z" , "findingId" : "2025-05-22T20:27:03.731510Z4997664074931396457" }, { "infoType" : { "name" : "EMAIL ADDRESS" , "sensitivityScore" : { "score" : "SENSITIVITY MODERATE" } }, "likelihood" : "VERY LIKELY" , "location" : { "contentLocations" : [ { "imageLocation" : { "boundingBoxes" : [ { "top" : 445 , "left" : 390 , "width" : 357 , "height" : 48 } ] } } ] }, "createTime" : "2025-05-22T20:27:03.728Z" , "findingId" : "2025-05-22T20:27:03.731538Z284444825812417100" }, { "infoType" : { "name" : "PHONE NUMBER" , "sensitivityScore" : { "score" : "SENSITIVITY MODERATE" } }, "likelihood" : "VERY LIKELY" , "location" : { "contentLocations" : [ { "imageLocation" : { "boundingBoxes" : [ { "top" : 515 , "left" : 404 , "width" : 223 , "height" : 34 } ] } } ] }, "createTime" : "2025-05-22T20:27:03.729Z" , "findingId" : "2025-05-22T20:27:03.731544Z7910624062018243126" }, { "infoType" : { "name" : "PERSON NAME" , "sensitivityScore" : { "score" : "SENSITIVITY MODERATE" } }, "likelihood" : "UNLIKELY" , "location" : { "contentLocations" : [ { "imageLocation" : { "boundingBoxes" : [ { "top" : 798 , "left" : 473 , "width" : 81 , "height" : 45 } ] } } ] }, "createTime" : "2025-05-22T20:27:03.730Z" , "findingId" : "2025-05-22T20:27:03.731551Z2345136870450870227" }, { "infoType" : { "name" : "PERSON NAME" , "sensitivityScore" : { "score" : "SENSITIVITY MODERATE" } }, "likelihood" : "UNLIKELY" , "location" : { "contentLocations" : [ { "imageLocation" : { "boundingBoxes" : [ { "top" : 837 , "left" : 1166 , "width" : 46 , "height" : 45 } ] } } ] }, "createTime" : "2025-05-22T20:27:03.730Z" , "findingId" : "2025-05-22T20:27:03.731557Z6725780456697828166" }, { "infoType" : { "name" : "PERSON NAME" , "sensitivityScore" : { "score" : "SENSITIVITY MODERATE" } }, "likelihood" : "UNLIKELY" , "location" : { "contentLocations" : [ { "imageLocation" : { "boundingBoxes" : [ { "top" : 915 , "left" : 453 , "width" : 141 , "height" : 43 } ] } } ] }, "createTime" : "2025-05-22T20:27:03.730Z" , "findingId" : "2025-05-22T20:27:03.731562Z7328853308213386463" }, { "infoType" : { "name" : "PERSON NAME" , "sensitivityScore" : { "score" : "SENSITIVITY MODERATE" } }, "likelihood" : "UNLIKELY" , "location" : { "contentLocations" : [ { "imageLocation" : { "boundingBoxes" : [ { "top" : 915 , "left" : 1180 , "width" : 105 , "height" : 43 } ] } } ] }, "createTime" : "2025-05-22T20:27:03.730Z" , "findingId" : "2025-05-22T20:27:03.731569Z5618332947461439057" } ] } } In this example, Sensitive Data Protection found the following infoTypes, though its match confidence for each one varies: PERSON NAME EMAIL ADDRESS PHONE NUMBER See the JSON quickstart for more information about using the DLP API with JSON.
- To encode an image file: Linux: base64 input.jpg > output.txt macOS: base64 -i input.jpg -o output.txt PowerShell: [Convert]::ToBase64String([IO.File]::ReadAllBytes("./input.jpg")) > output.txt To inspect this image for specific object infoTypes, send the following JSON to the content.inspect method: { "item" : { "byteItem" : { "data" : " BASE64 ENCODED IMAGE " , "type" : "IMAGE PNG" } }, "inspectConfig" : { "infoTypes" : [ { "name" : "OBJECT TYPE/BARCODE" }, { "name" : "OBJECT TYPE/LICENSE PLATE" }, { "name" : "OBJECT TYPE/WHITEBOARD" } ] } } The output is similar to the following: { "result" : { "findings" : [ { "infoType" : { "name" : "OBJECT TYPE/WHITEBOARD" , "sensitivityScore" : { "score" : "SENSITIVITY LOW" } }, "likelihood" : "LIKELY" , "location" : { "contentLocations" : [ { "imageLocation" : { "boundingBoxes" : [ { "left" : 427 , "width" : 561 , "height" : 678 } ] } } ] }, "createTime" : "2025-05-22T22:25:09.564718Z" , "findingId" : "2025-05-22T22:25:09.564721Z3400818180961962648" }, { "infoType" : { "name" : "OBJECT TYPE/LICENSE PLATE" , "sensitivityScore" : { "score" : "SENSITIVITY MODERATE" } }, "likelihood" : "LIKELY" , "location" : { "contentLocations" : [ { "imageLocation" : { "boundingBoxes" : [ { "top" : 554 , "left" : 137 , "width" : 187 , "height" : 70 } ] } } ] }, "createTime" : "2025-05-22T22:25:09.564752Z" , "findingId" : "2025-05-22T22:25:09.564753Z2359274424382836782" }, { "infoType" : { "name" : "OBJECT TYPE/BARCODE" , "sensitivityScore" : { "score" : "SENSITIVITY LOW" } }, "likelihood" : "LIKELY" , "location" : { "contentLocations" : [ { "imageLocation" : { "boundingBoxes" : [ { "top" : 569 , "left" : 666 , "width" : 306 , "height" : 274 } ] } } ] }, "createTime" : "2025-05-22T22:25:09.564762Z" , "findingId" : "2025-05-22T22:25:09.564762Z1655085669963455621" } ] } } See the JSON quickstart for more information about using the DLP API with JSON.
- To inspect for only email addresses and telephone numbers, send the following JSON to the content.inspect method. { "item" : { "byteItem" : { "data" : " BASE64 ENCODED IMAGE " , "type" : "IMAGE PNG" } }, "inspectConfig" : { "infoTypes" : [ { "name" : "PHONE NUMBER" }, { "name" : "EMAIL ADDRESS" } ] } } The output is similar to the following: { "result" : { "findings" : [ { "infoType" : { "name" : "EMAIL ADDRESS" , "sensitivityScore" : { "score" : "SENSITIVITY MODERATE" } }, "likelihood" : "VERY LIKELY" , "location" : { "contentLocations" : [ { "imageLocation" : { "boundingBoxes" : [ { "top" : 445 , "left" : 390 , "width" : 357 , "height" : 48 } ] } } ] }, "createTime" : "2025-05-22T20:59:48.653Z" , "findingId" : "2025-05-22T20:59:48.654873Z3907900286477341146" }, { "infoType" : { "name" : "PHONE NUMBER" , "sensitivityScore" : { "score" : "SENSITIVITY MODERATE" } }, "likelihood" : "VERY LIKELY" , "location" : { "contentLocations" : [ { "imageLocation" : { "boundingBoxes" : [ { "top" : 515 , "left" : 404 , "width" : 223 , "height" : 34 } ] } } ] }, "createTime" : "2025-05-22T20:59:48.653Z" , "findingId" : "2025-05-22T20:59:48.654914Z7486984971818202511" } ] } } See the JSON quickstart for more information about using the DLP API with JSON.
- DlpServiceClient (); // The project ID to run the API call under // const imagePath = './test.pdf'; // InfoTypes const infoTypes = [ { name : 'PHONE NUMBER' }, { name : 'EMAIL ADDRESS' }, { name : 'US SOCIAL SECURITY NUMBER' }, ]; async function inspectImageFileListedInfoTypes () { let fileBytes = null ; let fileTypeConstant = null ; try { // Load Image fileTypeConstant = [ 'image/jpeg' , 'image/bmp' , 'image/png' , 'image/svg' ]. indexOf ( mime . getType ( imagePath ) ) + 1 ; fileBytes = Buffer . from ( fs . readFileSync ( imagePath )). toString ( 'base64' ); } catch ( error ) { console . log ( error ); return ; } // Specify item to inspect const item = { byteItem : { type : fileTypeConstant , data : fileBytes , }, }; // Specify inspect configuration to match information with mentioned infotypes. const inspectConfig = { infoTypes : infoTypes , includeQuote : true , }; // Combine configurations into a request for the service. const request = { parent : projects/ ${ projectId } /locations/global , inspectConfig : inspectConfig , item : item , }; // Use the client to send the request. const [ response ] = await dlp . inspectContent ( request ); // Print Findings const findings = response . result . findings ; if ( findings . length > 0 ) { console . log ( Findings: ${ findings . length } \n ); findings . forEach ( finding = > { console . log ( InfoType: ${ finding . infoType . name } ); console . log ( \tQuote: ${ finding . quote } ); console . log ( \tLikelihood: ${ finding . likelihood } \n ); }); } else { console . log ( 'No findings.' ); } } inspectImageFileListedInfoTypes (); PHP To learn how to install and use the client library for Sensitive Data Protection, see Sensitive Data Protection client libraries .

