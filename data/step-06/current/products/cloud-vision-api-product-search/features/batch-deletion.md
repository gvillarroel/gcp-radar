---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:50.389Z"
product_name: "Cloud Vision API Product Search"
product_slug: "cloud-vision-api-product-search"
feature_name: "batch deletion"
feature_slug: "batch-deletion"
latest_feature_date: "2019-09-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vision/product-search/docs/delete-resources"
  - "https://docs.cloud.google.com/vision/product-search/docs/create-reference-images"
  - "https://docs.cloud.google.com/vision/product-search/docs/searching"
  - "https://docs.cloud.google.com/vision/product-search/docs/create-product-set-search-products"
keywords:
  - "batch"
  - "deletion"
  - "lets"
  - "users"
  - "delete"
  - "all"
  - "products"
  - "in"
---

# batch deletion

Product: Cloud Vision API Product Search
Coverage: MEDIUM

## Step 02 Summary

Batch deletion lets users delete all products in a specific product set or all products not in any product set.

## Extended Definition

Batch deletion lets users delete all products in a specific product set or all products not in any product set.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vision/product-search/docs/delete-resources](https://docs.cloud.google.com/vision/product-search/docs/delete-resources)
- [https://docs.cloud.google.com/vision/product-search/docs/create-reference-images](https://docs.cloud.google.com/vision/product-search/docs/create-reference-images)
- [https://docs.cloud.google.com/vision/product-search/docs/searching](https://docs.cloud.google.com/vision/product-search/docs/searching)
- [https://docs.cloud.google.com/vision/product-search/docs/create-product-set-search-products](https://docs.cloud.google.com/vision/product-search/docs/create-product-set-search-products)

## Supporting Pages

### Deleting resources \_|\_ Vision API Product Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vision/product-search/docs/delete-resources](https://docs.cloud.google.com/vision/product-search/docs/delete-resources)
- Source ID: `site-docs-root`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Product batch deletion is available for the following product types: All products in a specific product set All products that belong to no product set To avoid concurrent operation errors, wait to delete the product set after this batch product delete operation has completed.
- Empty ; import java.util.concurrent.TimeUnit ; public class PurgeProductsInProductSet { // Delete all products in a product set. public static void purgeProductsInProductSet ( String projectId , String location , String productSetId ) throws Exception { // String projectId = "YOUR PROJECT ID"; // String location = "us-central1"; // String productSetId = "YOUR PRODUCT SET ID"; // boolean force = true; try ( ProductSearchClient client = ProductSearchClient . create ()) { String parent = LocationName . format ( projectId , location ); ProductSetPurgeConfig productSetPurgeConfig = ProductSetPurgeConfig . newBuilder (). setProductSetId ( productSetId ). build (); PurgeProductsRequest request = PurgeProductsRequest . newBuilder () . setParent ( parent ) . setProductSetPurgeConfig ( productSetPurgeConfig ) // The operation is irreversible and removes multiple products. // The user is required to pass in force=True to actually perform the // purge. // If force is not set to True, the service raises an exception. . setForce ( true ) . build (); OperationFuture<Empty , BatchOperationMetadata > response = client . purgeProductsAsync ( request ); response . getPollingFuture (). get ( 180 , TimeUnit .
- PurgeProductsRequest request = PurgeProductsRequest . newBuilder () . setDeleteOrphanProducts ( true ) // The operation is irreversible and removes multiple products. // The user is required to pass in force=True to actually perform the // purge. // If force is not set to True, the service raises an exception. . setForce ( true ) . setParent ( parent ) . build (); OperationFuture<Empty , BatchOperationMetadata > response = client . purgeProductsAsync ( request ); response . getPollingFuture (). get ( 180 , TimeUnit .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " project-id " } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://vision.googleapis.com/v1/locations/ location-id /operations/ operation-id " Select-Object -Expand Content You should see output similar to the following for a completed product set purge operation : { "name": "locations/ location-id /operations/ operation-id ", "metadata": { "@type": "type.googleapis.com/google.cloud.vision.v1.BatchOperationMetadata", "state": "SUCCESSFUL", "submitTime": "2019-09-04T15:58:39.131591882Z", "endTime": "2019-09-04T15:58:43.099020580Z" }, "done": true, "response": { "@type": "type.googleapis.com/google.cloud.vision.v1.PurgeProductsRequest", "parent": "projects/ project-id /locations/ location-id ", "productSetPurgeConfig": { "productSetId": " project-set-id " }, "force": true } } You should see output similar to the following for a completed purge orphaned products operation : { "name": "locations/ location-id /operations/ operation-id ", "metadata": { "@type": "type.googleapis.com/google.cloud.vision.v1.BatchOperationMetadata", "state": "SUCCESSFUL", "submitTime": "2019-09-04T16:08:38.278197397Z", "endTime": "2019-09-04T16:08:45.075778639Z" }, "done": true, "response": { "@type": "type.googleapis.com/google.cloud.vision.v1.PurgeProductsRequest", "parent": "projects/ project-id /locations/ location-id ", "deleteOrphanProducts": true, "force": true } } Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Creating your reference images & indexing \_|\_ Vision API Product Search\

- URL: [https://docs.cloud.google.com/vision/product-search/docs/create-reference-images](https://docs.cloud.google.com/vision/product-search/docs/create-reference-images)
- Source ID: `site-docs-root`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The response should look similar to the following: { "name": "locations/ location-id /operations/f10f34e32c40a710", "metadata": { "@type": "type.googleapis.com/google.cloud.vision.v1.BatchOperationMetadata", "state": "SUCCESSFUL", "submitTime": "2019-12-06T21:16:04.476466873Z", "endTime": "2019-12-06T21:16:40.594258084Z" }, "done": true, "response": { "@type": "type.googleapis.com/google.cloud.vision.v1.ImportProductSetsResponse", "referenceImages": [ { "name": "projects/ project-id /locations/ location-id /products/product id0/referenceImages/image0", "uri": "gs:// my-storage-bucket /img 039.jpg" }, { "name": "projects/ project-id /locations/ location-id /products/product id1/referenceImages/image1", "uri": "gs:// my-storage-bucket /img 105.jpg" }, { "name": "projects/ project-id /locations/ location-id /products/product id2/referenceImages/image2", "uri": "gs:// my-storage-bucket /img 224.jpg" }, { "name": "projects/ project-id /locations/ location-id /products/product id3/referenceImages/image3", "uri": "gs:// my-storage-bucket /img 385.jpg" } ], "statuses": [ {}, {}, {}, {} ] } } Go To learn how to install and use the client library for Vision API Product Search, see Vision API Product Search client libraries .
- OperationFuture<ImportProductSetsResponse , BatchOperationMetadata > response = client . importProductSetsAsync ( formattedParent , inputConfig ); System . out . println ( String . format ( "Processing operation name: %s" , response . getName ())); ImportProductSetsResponse results = response . get (); System . out . println ( "Processing done." ); System . out . println ( "Results of the processing:" ); for ( int i = 0 ; i < results . getStatusesCount (); i ++ ) { System . out . println ( String . format ( "Status of processing line %s of the csv: %s" , i , results . getStatuses ( i ))); // Check the status of reference image. if ( results . getStatuses ( i ). getCode () == 0 ) { ReferenceImage referenceImage = results . getReferenceImages ( i ); System . out . println ( referenceImage ); } else { System . out . println ( "No reference image." ); } } } } Node.js To learn how to install and use the client library for Vision API Product Search, see Vision API Product Search client libraries .
- Target files must be in Product Search CSV format'; // A resource that represents Google Cloud Platform location. const projectLocation = client . locationPath ( projectId , location ); // Set the input configuration along with Google Cloud Storage URI const inputConfig = { gcsSource : { csvFileUri : gcsUri , }, }; // Import the product sets from the input URI. const [ response , operation ] = await client . importProductSets ({ parent : projectLocation , inputConfig : inputConfig , }); console . log ( 'Processing operation name: ' , operation . name ); // synchronous check of operation status const [ result ] = await response . promise (); console . log ( 'Processing done.' ); console . log ( 'Results of the processing:' ); for ( const i in result . statuses ) { console . log ( 'Status of processing ' , i , 'of the csv:' , result . statuses [ i ] ); // Check the status of reference image if ( result . statuses [ i ]. code === 0 ) { console . log ( result . referenceImages [ i ]); } else { console . log ( 'No reference image.' ); } } } importProductSets (); Python To learn how to install and use the client library for Vision API Product Search, see Vision API Product Search client libraries .
- ProductSearchClient (); async function createReferenceImage () { / TODO(developer): Uncomment the following line before running the sample. / // const projectId = 'Your Google Cloud project Id'; // const location = 'A compute region name'; // const productId = 'Id of the product'; // const referenceImageId = 'Id of the reference image'; // const gcsUri = 'Google Cloud Storage path of the input image'; const formattedParent = client . productPath ( projectId , location , productId ); const referenceImage = { uri : gcsUri , }; const request = { parent : formattedParent , referenceImage : referenceImage , referenceImageId : referenceImageId , }; const [ response ] = await client . createReferenceImage ( request ); console . log ( response.name: ${ response . name } ); console . log ( response.uri: ${ response . uri } ); } createReferenceImage (); Python To learn how to install and use the client library for Vision API Product Search, see Vision API Product Search client libraries .

### "Searching for Products \_|\_ Vision API Product Search \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vision/product-search/docs/searching](https://docs.cloud.google.com/vision/product-search/docs/searching)
- Source ID: `site-docs-root`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ImageAnnotatorClient (); async function getSimilarProductsGcs ( projectId , location , productSetId , productCategory , filePath , filter ) { / TODO(developer): Uncomment the following line before running the sample. / // const projectId = 'Your Google Cloud project Id'; // const location = 'A compute region name'; // const productSetId = 'Id of the product set'; // const productCategory = 'Category of the product'; // const filePath = 'Local file path of the image to be searched'; // const filter = 'Condition to be applied on the labels'; const productSetPath = productSearchClient . productSetPath ( projectId , location , productSetId ); const request = { // The input image can be a GCS link or HTTPS link or Raw image bytes. // Example: // To use GCS link replace with below code // image: {source: {gcsImageUri: filePath}} // To use HTTP link replace with below code // image: {source: {imageUri: filePath}} image : { source : { gcsImageUri : filePath }}, features : [{ type : 'PRODUCT SEARCH' }], imageContext : { productSearchParams : { productSet : productSetPath , productCategories : [ productCategory ], filter : filter , }, }, }; console . log ( request . image ); const [ response ] = await imageAnnotatorClient . batchAnnotateImages ({ requests : [ request ], }); console . log ( 'Search Image:' , filePath ); console . log ( '\nSimilar product information:' ); const results = response [ 'responses' ][ 0 ][ 'productSearchResults' ][ 'results' ]; results . forEach ( result = > { console . log ( 'Product id:' , result [ 'product' ]. name . split ( '/' ). pop ( - 1 )); console . log ( 'Product display name:' , result [ 'product' ]. displayName ); console . log ( 'Product description:' , result [ 'product' ]. description ); console . log ( 'Product category:' , result [ 'product' ]. productCategory ); }); } getSimilarProductsGcs (); Python To learn how to install and use the client library for Vision API Product Search, see Vision API Product Search client libraries .
- ImageAnnotatorClient (); async function getSimilarProductsFile () { / TODO(developer): Uncomment the following line before running the sample. / // const projectId = 'nodejs-docs-samples'; // const location = 'us-west1'; // const productSetId = 'indexed product set id for testing'; // const productCategory = 'apparel'; // const filePath = './resources/shoes 1.jpg'; // const filter = ''; const productSetPath = productSearchClient . productSetPath ( projectId , location , productSetId ); const content = fs . readFileSync ( filePath , 'base64' ); const request = { // The input image can be a GCS link or HTTPS link or Raw image bytes. // Example: // To use GCS link replace with below code // image: {source: {gcsImageUri: filePath}} // To use HTTP link replace with below code // image: {source: {imageUri: filePath}} image : { content : content }, features : [{ type : 'PRODUCT SEARCH' }], imageContext : { productSearchParams : { productSet : productSetPath , productCategories : [ productCategory ], filter : filter , }, }, }; const [ response ] = await imageAnnotatorClient . batchAnnotateImages ({ requests : [ request ], }); console . log ( 'Search Image:' , filePath ); const results = response [ 'responses' ][ 0 ][ 'productSearchResults' ][ 'results' ]; console . log ( '\nSimilar product information:' ); results . forEach ( result = > { console . log ( 'Product id:' , result [ 'product' ]. name . split ( '/' ). pop ( - 1 )); console . log ( 'Product display name:' , result [ 'product' ]. displayName ); console . log ( 'Product description:' , result [ 'product' ]. description ); console . log ( 'Product category:' , result [ 'product' ]. productCategory ); }); } getSimilarProductsFile (); Python To learn how to install and use the client library for Vision API Product Search, see Vision API Product Search client libraries .
- BatchAnnotateImagesResponse response = queryImageClient . batchAnnotateImages ( requests ); List<Result> similarProducts = response . getResponses ( 0 ). getProductSearchResults (). getResultsList (); System . out . println ( "Similar Products: " ); for ( Result product : similarProducts ) { System . out . println ( String . format ( "\nProduct name: %s" , product . getProduct (). getName ())); System . out . println ( String . format ( "Product display name: %s" , product . getProduct (). getDisplayName ())); System . out . println ( String . format ( "Product description: %s" , product . getProduct (). getDescription ())); System . out . println ( String . format ( "Score(Confidence): %s" , product . getScore ())); System . out . println ( String . format ( "Image name: %s" , product . getImage ())); } } } Node.js To learn how to install and use the client library for Vision API Product Search, see Vision API Product Search client libraries .
- BatchAnnotateImagesResponse response = queryImageClient . batchAnnotateImages ( requests ); List<Result> similarProducts = response . getResponses ( 0 ). getProductSearchResults (). getResultsList (); System . out . println ( "Similar Products: " ); for ( Result product : similarProducts ) { System . out . println ( String . format ( "\nProduct name: %s" , product . getProduct (). getName ())); System . out . println ( String . format ( "Product display name: %s" , product . getProduct (). getDisplayName ())); System . out . println ( String . format ( "Product description: %s" , product . getProduct (). getDescription ())); System . out . println ( String . format ( "Score(Confidence): %s" , product . getScore ())); System . out . println ( String . format ( "Image name: %s" , product . getImage ())); } } } Node.js To learn how to install and use the client library for Vision API Product Search, see Vision API Product Search client libraries .

### "Quickstart: Create a product set and search for products \_|\_ Vision API\

- URL: [https://docs.cloud.google.com/vision/product-search/docs/create-product-set-search-products](https://docs.cloud.google.com/vision/product-search/docs/create-product-set-search-products)
- Source ID: `site-docs-root`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Get import operation status You can use the OPERATION ID returned from the import operation to check the status of the bulk import operation: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: PROJECT ID " \ -H "Content-Type: application/json" \ https://vision.googleapis.com/v1/locations/ LOCATION ID /operations/ OPERATION ID A successful response looks like: { "name" : "locations/ LOCATION ID /operations/0a0aec86192599fb" , "metadata" : { "@type" : "type.googleapis.com/google.cloud.vision.v1.BatchOperationMetadata" , "state" : "SUCCESSFUL" , "submitTime" : "2018-11-30T03:11:04.808114024Z" , "endTime" : "2018-11-30T03:11:38.624444324Z" }, "done" : true , "response" : { "@type" : "type.googleapis.com/google.cloud.vision.v1.ImportProductSetsResponse" , "referenceImages" : [ { "name" : "projects/ PROJECT ID /locations/ LOCATION ID /products/product id0/referenceImages/image0" , "uri" : "gs://cloud-ai-vision-data/product-search-tutorial/images/46a0cbcf70ba11e89399d20059124800.jpg" }, { "name" : "projects/ PROJECT ID /locations/ LOCATION ID /products/product id1/referenceImages/image1" , "uri" : "gs://cloud-ai-vision-data/product-search-tutorial/images/46a1aea370ba11e888d4d20059124800.jpg" }, ... { "name" : "projects/ PROJECT ID /locations/ LOCATION ID /products/product id93/referenceImages/image93" , "uri" : "gs://cloud-ai-vision-data/product-search-tutorial/images/4697319970ba11e8a7bfd20059124800.jpg" }, { "name" : "projects/ PROJECT ID /locations/ LOCATION ID /products/product id94/referenceImages/image94" , "uri" : "gs://cloud-ai-vision-data/product-search-tutorial/images/4698596370ba11e8bf6ad20059124800.jpg" } ], "statuses" : [ {}, {}, [ ... ] {}, {} ] } } Indexing The Product Search index of products is updated approximately every day.
- List product sets and check indexing You can list all your product sets and use the indexTime field to verify that indexing has completed successfully: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: PROJECT ID " \ -H "Content-Type: application/json" \ https://vision.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /productSets A successful response lists all your product sets, including a product set ID (for example, product set0 ) as well as the indexTime field indicating when indexing completed: { "productSets": [ { "name": "projects/ PROJECT ID /locations/ LOCATION ID /productSets/ product set0 ", "displayName": " ", " indexTime ": "2019-11-30T18:33:40.093508652Z", "indexError": {} } ] } List products You can use the PRODUCT SET ID returned from the list of product sets to list all products in your product set: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: PROJECT ID " \ -H "Content-Type: application/json" \ https://vision.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /productSets/ PRODUCT SET ID /products?pageSize=15 A successful response lists product details.
- First create a request JSON file called import request.json and save it in your current working directory: import request.json { "inputConfig": { "gcsSource": { "csvFileUri": "gs://cloud-samples-data/vision/product search/product catalog.csv" } } } After creating the request JSON file, send the request: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: PROJECT ID " \ -H "Content-Type: application/json; charset=utf-8" \ -d @import request.json \ https://vision.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /productSets:import Replace the following: LOCATION ID : The location that will run your tutorial, for example, us-east1 .
- In this quickstart you will create a product set, products, and their reference images in a single step by batch import.

