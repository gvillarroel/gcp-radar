---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:26:36.719Z"
product_name: "Cloud Vision"
product_slug: "cloud-vision"
feature_name: "PDF/TIFF document text detection"
feature_slug: "pdf-tiff-document-text-detection"
latest_feature_date: "2018-07-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/vision/docs/pdf"
  - "https://docs.cloud.google.com/vision/docs/release-notes"
  - "https://docs.cloud.google.com/vision/docs/ocr"
keywords:
  - "pdf"
  - "tiff"
  - "document"
  - "text"
  - "detection"
  - "supports"
  - "and"
  - "files"
---

# PDF/TIFF document text detection

Product: Cloud Vision
Coverage: LOW

## Step 02 Summary

Document text detection supports PDF and TIFF files; Document text detection supports PDF and TIFF files.

## Extended Definition

Document text detection supports PDF and TIFF files; Document text detection supports PDF and TIFF files.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/vision/docs/pdf](https://docs.cloud.google.com/vision/docs/pdf)
- [https://docs.cloud.google.com/vision/docs/release-notes](https://docs.cloud.google.com/vision/docs/release-notes)
- [https://docs.cloud.google.com/vision/docs/ocr](https://docs.cloud.google.com/vision/docs/ocr)

## Supporting Pages

### "Detect text in files (PDF/TIFF) \_|\_ Cloud Vision API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vision/docs/pdf](https://docs.cloud.google.com/vision/docs/pdf)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To retrieve your Vision annotation response, send a GET request to the v1.operations endpoint, passing the operation ID in the URL: GET https://vision.googleapis.com/v1/operations/ operation-id For example: curl -X GET -H "Authorization: Bearer $( gcloud auth application-default print-access-token ) " \ -H "Content-Type: application/json" \ https://vision.googleapis.com/v1/projects/ project-id /locations/ location-id /operations/ 1efec2285bd442df If the operation is in progress: { "name" : "operations/ 1efec2285bd442df " , "metadata" : { "@type" : "type.googleapis.com/google.cloud.vision.v1.OperationMetadata" , "state" : "RUNNING" , "createTime" : "2019-05-15T21:10:08.401917049Z" , "updateTime" : "2019-05-15T21:10:33.700763554Z" } } Once the operation has completed, the state shows as DONE and your results are written to the Google Cloud Storage file you specified: { "name" : "operations/ 1efec2285bd442df " , "metadata" : { "@type" : "type.googleapis.com/google.cloud.vision.v1.OperationMetadata" , "state" : "DONE" , "createTime" : "2019-05-15T20:56:30.622473785Z" , "updateTime" : "2019-05-15T20:56:41.666379749Z" }, "done" : true , "response" : { "@type" : "type.googleapis.com/google.cloud.vision.v1.AsyncBatchAnnotateFilesResponse" , "responses" : [ { "outputConfig" : { "gcsDestination" : { "uri" : "gs:// your-bucket-name / folder /" }, "batchSize" : 1 } } ] } } The JSON in your output file is similar to that of an image's document text detection request, with the addition of a context field showing the location of the PDF or TIFF that was specified and the number of pages in the file: output-1-to-1.json Full file Note: Zero coordinate values omitted.
- ImageAnnotatorClient (); / TODO(developer): Uncomment the following lines before running the sample. / // Bucket where the file resides // const bucketName = 'my-bucket'; // Path to PDF file within bucket // const fileName = 'path/to/document.pdf'; // The folder to store the results // const outputPrefix = 'results' const gcsSourceUri = gs:// ${ bucketName } / ${ fileName } ; const gcsDestinationUri = gs:// ${ bucketName } / ${ outputPrefix } / ; const inputConfig = { // Supported mime types are: 'application/pdf' and 'image/tiff' mimeType : 'application/pdf' , gcsSource : { uri : gcsSourceUri , }, }; const outputConfig = { gcsDestination : { uri : gcsDestinationUri , }, }; const features = [{ type : 'DOCUMENT TEXT DETECTION' }]; const request = { requests : [ { inputConfig : inputConfig , features : features , outputConfig : outputConfig , }, ], }; const [ operation ] = await client . asyncBatchAnnotateFiles ( request ); const [ filesResponse ] = await operation . promise (); const destinationUri = filesResponse . responses [ 0 ]. outputConfig . gcsDestination . uri ; console . log ( 'Json saved to: ' + destinationUri ); Python Before trying this sample, follow the Python setup instructions in the Vision quickstart using client libraries .
- Document text detection from PDF and TIFF must be requested using the files:asyncBatchAnnotate function, which performs an offline (asynchronous) request and provides its status using the operations resources.
- Note: For Java Spring framework users, Spring Cloud Google Cloud offers a way to automatically configure authentication settings and client objects to use Vision API. / Performs document text OCR with PDF/TIFF as source files on Google Cloud Storage. @param gcsSourcePath The path to the remote file on Google Cloud Storage to detect document text on. @param gcsDestinationPath The path to the remote file on Google Cloud Storage to store the results on. @throws Exception on errors while closing the client. / public static void detectDocumentsGcs ( String gcsSourcePath , String gcsDestinationPath ) throws Exception { // Initialize client that will be used to send requests.

### Vision release notes \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/release-notes](https://docs.cloud.google.com/vision/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- April 06, 2018 Feature Beta features The following beta features are available in API version v1p2beta1 : Support for PDF and TIFF files in document text detection.
- July 24, 2018 Feature Support for PDF and TIFF files in document text detection has been released as GA.
- For more infomation, see the OCR how-to pages: Detect text in images Detect handwriting in images Detect text in files (PDF/TIFF) August 29, 2019 Change Improved detection models are now default for the following features: Logo Detection Landmark Detection Crop hints Object Localization The legacy model can still be accessed for 90 days by specifying "builtin/legacy" in the model field of a Feature object.
- Performs synchronous image detection and annotation for a batch of files (currently "application/pdf", "image/tiff" and "image/gif").

### "Detect and extract text from images \_|\_ Cloud Vision API \_|\_ Google\

- URL: [https://docs.cloud.google.com/vision/docs/ocr](https://docs.cloud.google.com/vision/docs/ocr)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Learn more about DOCUMENT TEXT DETECTION for handwriting extraction and text extraction from files (PDF or TIFF) .
- Image () image . source . image uri = uri response = client . text detection ( image = image ) texts = response . text annotations print ( "Texts:" ) for text in texts : print ( f ' \n " { text . description } "' ) vertices = [ f "( { vertex . x } , { vertex . y } )" for vertex in text . bounding poly . vertices ] print ( "bounds: {} " . format ( "," . join ( vertices ))) if response . error . message : raise Exception ( " {} \n For more info on error messages, check: " "https://cloud.google.com/apis/design/errors" . format ( response . error . message ) ) Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Vision reference documentation for .NET.
- Image ( content = content ) response = client . text detection ( image = image ) texts = response . text annotations print ( "Texts:" ) for text in texts : print ( f ' \n " { text . description } "' ) vertices = [ f "( { vertex . x } , { vertex . y } )" for vertex in text . bounding poly . vertices ] print ( "bounds: {} " . format ( "," . join ( vertices ))) if response . error . message : raise Exception ( " {} \n For more info on error messages, check: " "https://cloud.google.com/apis/design/errors" . format ( response . error . message ) ) Additional languages C# : Please follow the C# setup instructions on the client libraries page and then visit the Vision reference documentation for .NET.
- If you choose to provide a language hint, modify the body of your request ( request.json file) to provide the string of one of the supported languages in the imageContext.languageHints field as shown in the following sample: { "requests" : [ { "image" : { "source" : { "imageUri" : " IMAGE URL " } } , "features" : [ { "type" : "DOCUMENT TEXT DETECTION" } ] , "imageContext" : { "languageHints" : [ "en-t-i0-handwrit" ] } } ] } How do language hints work?

