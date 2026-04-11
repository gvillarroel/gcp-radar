---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:26:36.719Z"
product_name: "Cloud Vision"
product_slug: "cloud-vision"
feature_name: "Object localization"
feature_slug: "object-localization"
latest_feature_date: "2018-09-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/vision/docs/handwriting"
  - "https://docs.cloud.google.com/vision/docs/batch"
  - "https://docs.cloud.google.com/vision/docs/ocr"
keywords:
  - "object"
  - "localization"
  - "detects"
  - "and"
  - "localizes"
  - "multiple"
  - "objects"
  - "within"
---

# Object localization

Product: Cloud Vision
Coverage: LOW

## Step 02 Summary

Object localization detects and localizes multiple objects within an image; Object localization detects and localizes multiple objects within an image.

## Extended Definition

Object localization detects and localizes multiple objects within an image; Object localization detects and localizes multiple objects within an image.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/vision/docs/handwriting](https://docs.cloud.google.com/vision/docs/handwriting)
- [https://docs.cloud.google.com/vision/docs/batch](https://docs.cloud.google.com/vision/docs/batch)
- [https://docs.cloud.google.com/vision/docs/ocr](https://docs.cloud.google.com/vision/docs/ocr)

## Supporting Pages

### Detect handwriting in images \_|\_ Cloud Vision API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/docs/handwriting](https://docs.cloud.google.com/vision/docs/handwriting)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Note: For Java Spring framework users, Spring Cloud Google Cloud offers a way to automatically configure authentication settings and client objects to use Vision API. public static void detectDocumentTextGcs ( String gcsPath ) throws IOException { List<AnnotateImageRequest> requests = new ArrayList <> (); ImageSource imgSource = ImageSource . newBuilder (). setGcsImageUri ( gcsPath ). build (); Image img = Image . newBuilder (). setSource ( imgSource ). build (); Feature feat = Feature . newBuilder (). setType ( Type .
- Note: For Java Spring framework users, Spring Cloud Google Cloud offers a way to automatically configure authentication settings and client objects to use Vision API. public static void detectDocumentText ( String filePath ) throws IOException { List<AnnotateImageRequest> requests = new ArrayList <> (); ByteString imgBytes = ByteString . readFrom ( new FileInputStream ( filePath )); Image img = Image . newBuilder (). setContent ( imgBytes ). build (); Feature feat = Feature . newBuilder (). setType ( Type .
- Note: For Java Spring framework users, Spring Cloud Google Cloud offers a way to automatically configure authentication settings and client objects to use Vision API.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// REGION ID -vision.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION ID /images:annotate" Select-Object -Expand Content If the request is successful, the server returns a 200 OK HTTP status code and the response in JSON format.

### "Batch image annotation offline \_|\_ Cloud Vision API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vision/docs/batch](https://docs.cloud.google.com/vision/docs/batch)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- OBJECT LOCALIZATION Detect and extract multiple objects in an image.
- Note: for additional images you have to create // additional image request objects and store them in a list to be used below. const imageRequest = { image : { source : { imageUri : inputImageUri , }, }, features : features , }; // Set where to store the results for the images that will be annotated. const outputConfig = { gcsDestination : { uri : outputUri , }, batchSize : 2 , // The max number of responses to output in each JSON file }; // Add each image request object to the batch request and add the output config. const request = { requests : [ imageRequest , // add additional request objects here ], outputConfig , }; // Make the asynchronous batch request. const [ operation ] = await client . asyncBatchAnnotateImages ( request ); // Wait for the operation to complete const [ filesResponse ] = await operation . promise (); // The output is written to GCS with the provided output uri as prefix const destinationUri = filesResponse . outputConfig . gcsDestination . uri ; console . log ( Output written to GCS with prefix: ${ destinationUri } ); } asyncBatchAnnotateImages (); Python Before trying this sample, follow the Python setup instructions in the Vision quickstart using client libraries .
- Note: For Java Spring framework users, Spring Cloud Google Cloud offers a way to automatically configure authentication settings and client objects to use Vision API. import com.google.cloud.vision.v1.
- The following responses show LABEL DETECTION and TEXT DETECTION annotations for image1.png , IMAGE PROPERTIES annotations for image2.jpg , and OBJECT LOCALIZATION annotations for image3.jpg .

### "Detect and extract text from images \_|\_ Cloud Vision API \_|\_ Google\

- URL: [https://docs.cloud.google.com/vision/docs/ocr](https://docs.cloud.google.com/vision/docs/ocr)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Note: For Java Spring framework users, Spring Cloud Google Cloud offers a way to automatically configure authentication settings and client objects to use Vision API. import com.google.cloud.vision.v1.
- Note: For Java Spring framework users, Spring Cloud Google Cloud offers a way to automatically configure authentication settings and client objects to use Vision API. import com.google.cloud.vision.v1.
- Note: For Java Spring framework users, Spring Cloud Google Cloud offers a way to automatically configure authentication settings and client objects to use Vision API.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " PROJECT ID " } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// REGION ID -vision.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION ID /images:annotate" Select-Object -Expand Content If the request is successful, the server returns a 200 OK HTTP status code and the response in JSON format.

