---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.827Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Sensitive Data Protection-based resource value assignment"
feature_slug: "sensitive-data-protection-based-resource-value-assignment"
latest_feature_date: "2024-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/control-access-based-on-data-sensitivity"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/redacting-sensitive-data-images"
  - "https://docs.cloud.google.com/security-command-center/docs/attack-exposure-define-high-value-resource-set"
keywords:
  - "sensitive"
  - "protection"
  - "based"
  - "resource"
  - "value"
  - "assignment"
  - "values"
  - "can"
---

# Sensitive Data Protection-based resource value assignment

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Resource values can be assigned automatically from Sensitive Data Protection classifications.

## Extended Definition

Resource values can be assigned automatically from Sensitive Data Protection classifications.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/control-access-based-on-data-sensitivity](https://docs.cloud.google.com/sensitive-data-protection/docs/control-access-based-on-data-sensitivity)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/redacting-sensitive-data-images](https://docs.cloud.google.com/sensitive-data-protection/docs/redacting-sensitive-data-images)
- [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-define-high-value-resource-set](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-define-high-value-resource-set)

## Supporting Pages

### "Control IAM access based on data sensitivity \_|\_ Sensitive Data Protection\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/control-access-based-on-data-sensitivity](https://docs.cloud.google.com/sensitive-data-protection/docs/control-access-based-on-data-sensitivity)
- Source ID: `site-docs-reference-3`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note that there is an OR operator between the two conditions. resource.matchTagId("tagKeys/ SENSITIVITY LEVEL TAG KEY ", "tagValues/ TAG VALUE FOR LOW SENSITIVITY ") resource.matchTagId("tagKeys/ SENSITIVITY LEVEL TAG KEY ", "tagValues/ TAG VALUE FOR MODERATE SENSITIVITY ") Replace the following: SENSITIVITY LEVEL TAG KEY : the numeric ID of the sensitivity level tag key that you created TAG VALUE FOR LOW SENSITIVITY : the numeric ID of the tag value that you created for low-sensitivity data TAG VALUE FOR MODERATE SENSITIVITY : the numeric ID of the tag value that you created for moderate-sensitivity data Grant principals access only if the sensitivity level tag is present This is useful, for example, if you want to define an organization policy that requires all IAM access to be conditional based on the presence of a sensitivity level tag.
- You can also use this example to restrict all access to the resource until sensitive data discovery has run on that resource. resource.matchTagId("tagKeys/ SENSITIVITY LEVEL TAG KEY ", "tagValues/ TAG VALUE FOR LOW SENSITIVITY ") Replace the following: SENSITIVITY LEVEL TAG KEY : the numeric ID of the sensitivity level tag key that you created TAG VALUE FOR LOW SENSITIVITY : the numeric ID of the tag value that you created for low-sensitivity data Grant principals access to only moderate-sensitivity and low-sensitivity data In this example, you grant access to a resource if the resource contains only moderate-sensitivity or low-sensitivity data.
- A tag value was deleted or renamed and discovery attempted to attach it to a resource If a tag value for the sensitivity level tag is deleted or renamed and Sensitive Data Protection attempts to attach that tag value to a profiled resource, you get the following error: Tag value TAG VALUE not found, it has possibly been either deleted or renamed.
- Supported resources With this feature, Sensitive Data Protection automatically tags data at following levels: BigQuery tables Cloud SQL instances Cloud Storage buckets How it works The following is a high-level workflow for controlling access to resources based on data sensitivity.

### "Redact sensitive data from images \_|\_ Sensitive Data Protection \_|\_\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/redacting-sensitive-data-images](https://docs.cloud.google.com/sensitive-data-protection/docs/redacting-sensitive-data-images)
- Source ID: `site-docs-reference-3`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Sensitive Data Protection Guides Send feedback Redact sensitive data from images Stay organized with collections Save and categorize content based on your preferences.
- MimeTypes () . guess type ( filename ) mime type = mime guess [ 0 ] or "application/octet-stream" Select the content type index from the list of supported types. https://github.com/googleapis/googleapis/blob/master/google/privacy/dlp/v2/dlp.proto / message ByteContentItem supported content types = { None : 0 , # "Unspecified" or BYTES TYPE UNSPECIFIED "image/jpeg" : 1 , # IMAGE JPEG "image/bmp" : 2 , # IMAGE BMP "image/png" : 3 , # IMAGE PNG "image/svg" : 4 , # IMAGE SVG - Adjusted to "image/svg+xml" for correct MIME type "text/plain" : 5 , # TEXT UTF8 Note: No specific MIME type for general "image", mapping to IMAGE for any image type not specified "image" : 6 , # IMAGE - Any image type "application/msword" : 7 , # WORD DOCUMENT "application/pdf" : 8 , # PDF "application/powerpoint" : 9 , # POWERPOINT DOCUMENT "application/msexcel" : 10 , # EXCEL DOCUMENT "application/avro" : 11 , # AVRO "text/csv" : 12 , # CSV "text/tsv" : 13 , # TSV } content type index = supported content types . get ( mime type , 0 ) Construct the byte item, containing the file's byte data. with open ( filename , mode = "rb" ) as f : byte item = { "type " : content type index , "data" : f . read ()} Convert the project id into a full resource id. parent = f "projects/ { project } " Call the API. response = dlp . redact image ( request = { "parent" : parent , "inspect config" : inspect config , "image redaction configs" : image redaction configs , "byte item" : byte item , } ) Write out the results. with open ( output filename , mode = "wb" ) as f : f . write ( response . redacted image ) print ( "Wrote {byte count} to {filename} " . format ( byte count = len ( response . redacted image ), filename = output filename ) ) Try it out You can try out each of the examples on this page yourself—or experiment with your own images—in the APIs Explorer on the reference page for image.redact : Go to APIs Explorer Tip: For experiments with non-sensitive materials, it's sufficient to clear Google OAuth 2.0 and enter projects/testff in the parent field.
- Can be a JPG or PNG image file. // const filepath = 'path/to/image.png'; // The local path to save the resulting image to. // const outputPath = 'result.png'; async function redactImageColoredInfoType () { // Define types of info to redact associate each one with a different color. const imageRedactionConfigs = [ { infoType : { name : 'US SOCIAL SECURITY NUMBER' }, redactionColor : { red : 0.3 , green : 0.1 , blue : 0.6 }, }, { infoType : { name : 'EMAIL ADDRESS' }, redactionColor : { red : 0.5 , green : 0.5 , blue : 1 }, }, { infoType : { name : 'PHONE NUMBER' }, redactionColor : { red : 1 , green : 0 , blue : 0.6 }, }, ]; // Load image const fileTypeConstant = [ 'image/jpeg' , 'image/bmp' , 'image/png' , 'image/svg' ]. indexOf ( mime . getType ( filepath ) ) + 1 ; const fileBytes = Buffer . from ( fs . readFileSync ( filepath )). toString ( 'base64' ); // Construct the Redact request to be sent by the client. const request = { parent : projects/ ${ projectId } /locations/global , byteItem : { type : fileTypeConstant , data : fileBytes , }, imageRedactionConfigs : imageRedactionConfigs , }; // Send the request and receive response from the service. const [ response ] = await dlp . redactImage ( request ); const image = response . redactedImage ; fs . writeFileSync ( outputPath , image ); console . log ( Saved image redaction results to path: ${ outputPath } ); } redactImageColoredInfoType (); PHP To learn how to install and use the client library for Sensitive Data Protection, see Sensitive Data Protection client libraries .
- Can be a JPG or PNG image file. // const filepath = 'path/to/image.png'; // The minimum likelihood required before redacting a match // const minLikelihood = 'LIKELIHOOD UNSPECIFIED'; // The infoTypes of information to redact // const infoTypes = [{ name: 'EMAIL ADDRESS' }, { name: 'PHONE NUMBER' }]; // The local path to save the resulting image to. // const outputPath = 'result.png'; async function redactImage () { const imageRedactionConfigs = infoTypes . map ( infoType = > { return { infoType : infoType }; }); // Load image const fileTypeConstant = [ 'image/jpeg' , 'image/bmp' , 'image/png' , 'image/svg' ]. indexOf ( mime . getType ( filepath ) ) + 1 ; const fileBytes = Buffer . from ( fs . readFileSync ( filepath )). toString ( 'base64' ); // Construct image redaction request const request = { parent : projects/ ${ projectId } /locations/global , byteItem : { type : fileTypeConstant , data : fileBytes , }, inspectConfig : { minLikelihood : minLikelihood , infoTypes : infoTypes , }, imageRedactionConfigs : imageRedactionConfigs , }; // Run image redaction request const [ response ] = await dlp . redactImage ( request ); const image = response . redactedImage ; fs . writeFileSync ( outputPath , image ); console . log ( Saved image redaction results to path: ${ outputPath } ); } redactImage (); PHP To learn how to install and use the client library for Sensitive Data Protection, see Sensitive Data Protection client libraries .

### "Define and manage your high-value resource set \_|\_ Security Command Center\

- URL: [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-define-high-value-resource-set](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-define-high-value-resource-set)
- Source ID: `site-docs-reference`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: If you select Any and enable the Include discovery insights from Sensitive Data Protection option, then for all supported AWS resources , the system automatically sets resource values based on data sensitivity classifications from Sensitive Data Protection.
- Note: If you select Any and enable the Include discovery insights from Sensitive Data Protection option, then for all supported resources , the system automatically sets resource values based on data sensitivity classifications from Sensitive Data Protection.
- In the Assign resource value field, select a priority value for the matching resources by specifying one of the following options: Optional: If you use the Sensitive Data Protection discovery service , enable Security Command Center to automatically set the priority value of supported AWS data resources based on data-sensitivity classifications from Sensitive Data Protection: Click the slider next to Include discovery insights from Sensitive Data Protection .
- Set the priority value for the matching resources by specifying one of the following options: Optional: If you use the Sensitive Data Protection discovery service , enable Security Command Center to automatically set the priority value of supported data resources based on data-sensitivity classifications from Sensitive Data Protection: Click the slider next to Include discovery insights from Sensitive Data Protection .

