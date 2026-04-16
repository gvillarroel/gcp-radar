---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.914Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Regional endpoints"
feature_slug: "regional-endpoints"
latest_feature_date: "2023-11-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/bandwidth-usage"
  - "https://docs.cloud.google.com/storage/docs/authentication/canonical-requests"
  - "https://docs.cloud.google.com/storage/docs/troubleshooting"
  - "https://docs.cloud.google.com/storage/docs/xml-api/overview"
keywords:
  - "regional"
  - "endpoints"
  - "route"
  - "storage"
  - "request"
  - "traffic"
  - "directly"
  - "to"
---

# Regional endpoints

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Regional endpoints route Cloud Storage request traffic directly to a specified region to support data residency and sovereignty requirements.

## Extended Definition

Regional endpoints route Cloud Storage request traffic directly to a specified region to support data residency and sovereignty requirements.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)
- [https://docs.cloud.google.com/storage/docs/authentication/canonical-requests](https://docs.cloud.google.com/storage/docs/authentication/canonical-requests)
- [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)
- [https://docs.cloud.google.com/storage/docs/xml-api/overview](https://docs.cloud.google.com/storage/docs/xml-api/overview)

## Supporting Pages

### "Overview of bandwidth and storage usage in Cloud Storage \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)
- Source ID: `site-iam-reference`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Go to Browser In the Filter search bar, select the Metric property, then search for the metric for which you are requesting an increase: Use storage.googleapis.com/google egress bandwidth to increase Google egress for your buckets located in regions.
- Go to Browser In the Filter search bar, select the Metric property, then search for the metric for which you are requesting an increase: Use storage.googleapis.com/rapid zonal bytes to increase storage for your buckets located in zones.
- For the storage.googleapis.com/dualregion google egress bandwidth and storage.googleapis.com/dualregion internet egress bandwidth metrics, there must be non-zero historical usage of the metric before you can request an increase.
- This page discusses metrics used to monitor data usage for your Cloud Storage buckets, as well as how to request additional egress bandwidth for different quotas if you need more than the default quota .

### Canonical requests \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/authentication/canonical-requests](https://docs.cloud.google.com/storage/docs/authentication/canonical-requests)
- Source ID: `site-iam-reference`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- An example of a hashed payload (in this case an empty payload) is: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855 Example The following is an example of a properly formed canonical request, with newlines shown as actual new lines and not \n : GET /example-bucket/tabby.jpeg host:storage.googleapis.com x-amz-content-sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855 x-amz-date:20190301T190859Z host;x-amz-content-sha256;x-amz-date e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855 What's next Learn about signatures and how they use canonical requests.
- Example If you have the following set of headers: host: storage.googleapis.com content-type: text/plain x-goog-meta-reviewer: jane x-goog-meta-reviewer: john The construction of the canonical headers in the canonical request would be: content-type:text/plain host:storage.googleapis.com x-goog-meta-reviewer:jane,john Note: In these examples, newlines are shown as actual new lines and not \n .
- Example If you have the following set of headers: host: storage.googleapis.com content-type: text/plain x-goog-meta-reviewer: jane x-goog-meta-reviewer: john The construction of the signed headers in the canonical request would be: content-type;host;x-goog-meta-reviewer Payload If your canonical request will be used to create a signed URL , this value should be the string UNSIGNED-PAYLOAD .
- Required canonical headers Most headers, such as content-type , are added as needed, but the following headers must always be defined in the canonical headers if you intend to use them in the signed request: host : The URI used to access Cloud Storage.

### Troubleshooting \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- StorageOptions ; import java.io.IOException ; import java.nio.ByteBuffer ; import static java.nio.charset.StandardCharsets.UTF 8 ; public class Example { public void main ( String args [] ) throws IOException { HeaderProvider headerProvider = FixedHeaderProvider . create ( "custom-header" , "custom-value" ); Storage storage = StorageOptions . getDefaultInstance () . toBuilder () . setHeaderProvider ( headerProvider ) . build (). getService (); String bucketName = "example-bucket" ; String blobName = "test-custom-header" ; // Use client with custom header BlobInfo blob = BlobInfo . newBuilder ( bucketName , blobName ). build (); byte [] stringBytes ; try ( WriteChannel writer = storage . writer ( blob )) { stringBytes = "hello world" . getBytes ( UTF 8 ); writer . write ( ByteBuffer . wrap ( stringBytes )); } } } Node.js const storage = new Storage (); storage . interceptors . push ({ request : requestConfig = > { Object . assign ( requestConfig . headers , { 'X-Custom-Header' : 'value' , }); return requestConfig ; }, }); PHP All method calls which trigger http requests accept an optional $restOptions argument as the last argument.
- The following is an example of a valid URL: curl -X PATCH -H "Content-Type: application/json" -d '{"edition config": "STANDARD" }' -H "Authorization: Bearer $(gcloud auth print-access-token)" "https://storage.googleapis.com/v2/projects/my-project/locations/global/storageIntelligence?updateMask=edition config" 400: Invalid Argument - Empty Update Mask Issue : When you configure or manage Storage Intelligence for a resource, you might receive this error and the message Empty UPDATE MASK in the request.
- Solution : To access Cloud Storage through a proxy server, you must allow access to these domains: accounts.google.com for creating OAuth2 authentication tokens oauth2.googleapis.com for performing OAuth2 token exchanges .googleapis.com for storage requests If your proxy server or security policy doesn't support allowlisting by domain and instead only supports allowlisting by IP network block, we strongly recommend that you configure your proxy server for all Google IP address ranges.
- Client ( extra headers = { "x-custom-header" : "value" } ) Ruby require "google/cloud/storage" storage = Google :: Cloud :: Storage . new storage . add custom headers { 'X-Custom-Header' = > 'value' } Accessing buckets with a CORS configuration If you have set a CORS configuration on your bucket and notice that incoming requests from client browsers are failing, try the following troubleshooting steps: Review the CORS configuration on the target bucket.

### XML API overview \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/xml-api/overview](https://docs.cloud.google.com/storage/docs/xml-api/overview)
- Source ID: `site-docs-root`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The resulting URL can take two forms: BUCKET NAME .storage.googleapis.com/ OBJECT NAME storage.googleapis.com/ BUCKET NAME / OBJECT NAME You can use the Cloud Storage URI with unsecured requests (HTTP) and secured requests (HTTPS) that use secure sockets layer (SSL) encryption.
- Most Cloud Storage XML API requests use the following URI for accessing buckets and objects: storage.googleapis.com You can scope this further by adding a bucket and object to the URI.
- Endpoints Important: If you intend to serve content through a browser, note that the XML API serves content from the same origin as the request endpoint.
- Authentication All requests to Cloud Storage must be authenticated, with the exception of requests made to anonymously accessible objects or buckets.

