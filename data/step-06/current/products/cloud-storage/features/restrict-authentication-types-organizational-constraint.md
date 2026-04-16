---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.940Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Restrict authentication types organizational constraint"
feature_slug: "restrict-authentication-types-organizational-constraint"
latest_feature_date: "2022-02-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/authentication/hmackeys"
  - "https://docs.cloud.google.com/storage/docs/troubleshooting"
  - "https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys"
  - "https://docs.cloud.google.com/storage/docs/aws-simple-migration"
keywords:
  - "restrict"
  - "authentication"
  - "types"
  - "organizational"
  - "constraint"
  - "this"
  - "restricts"
  - "which"
---

# Restrict authentication types organizational constraint

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

This organizational constraint restricts which authentication types can be used in requests for Cloud Storage resources.

## Extended Definition

This organizational constraint restricts which authentication types can be used in requests for Cloud Storage resources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/authentication/hmackeys](https://docs.cloud.google.com/storage/docs/authentication/hmackeys)
- [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)
- [https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys](https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys)
- [https://docs.cloud.google.com/storage/docs/aws-simple-migration](https://docs.cloud.google.com/storage/docs/aws-simple-migration)

## Supporting Pages

### HMAC keys \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/authentication/hmackeys](https://docs.cloud.google.com/storage/docs/authentication/hmackeys)
- Source ID: `site-iam-reference`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can optionally enable the restrictAuthTypes constraint on a resource, which restricts access for requests signed by HMAC keys.
- If you enable the restrictAuthTypes constraint on a resource, you can no longer create or activate HMAC keys for the specified account type in that resource.
- Setup This page discusses hash-based message authentication code (HMAC) keys, which you can use to authenticate requests to the Cloud Storage XML API .
- You can optionally enable the restrictAuthTypes constraint on user account HMAC keys for an extra layer of security.

### Troubleshooting \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- For example, the Domain Restricted Sharing constraint ( constraints/iam.allowedPolicyMemberDomains ) restricts resource sharing based on the organization's domain.
- This portion of the bulk delete action requires the storage.objects.list permission, which might be surprising, given that the goal is object deletion, which normally requires only the storage.objects.delete permission.
- Solution : Check with your security administrator team to see if the bucket to which you're sending requests is being affected by an organization policy that uses a custom constraint.
- This performs a new preflight request, which fetches the new CORS configuration and purges the cache entries.

### "Manage HMAC keys for service accounts \_|\_ Cloud Storage \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys](https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys)
- Source ID: `site-iam-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Make sure the following organization policy constraints are disabled: constraints/storage.restrictAuthTypes (must be disabled for HMAC key authentication) constraints/iam.disableServiceAccountKeyCreation See Creating and managing organization policies for instructions on how to check and disable constraints.
- For more information, see Set up authentication for client libraries . / TODO(developer): Uncomment the following lines before running the sample. / // The service account email for which the new HMAC key will be created // const serviceAccountEmail = 'service-account@iam.gserviceaccount.com'; // The ID of the project to which the service account belongs // const projectId = 'project-id'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client const storage = new Storage (); // Create HMAC SA Key async function createHmacKey () { const [ hmacKey , secret ] = await storage . createHmacKey ( serviceAccountEmail , { projectId , }); console . log ( The base64 encoded secret is: ${ secret } ); console . log ( 'Do not miss that secret, there is no API to recover it.' ); console . log ( 'The HMAC key metadata is:' ); for ( const [ key , value ] of Object . entries ( hmacKey . metadata )) { console . log ( ${ key } : ${ value } ); } } PHP For more information, see the Cloud Storage PHP API reference documentation .
- For more information, see Set up authentication for client libraries . / TODO(developer): Uncomment the following lines before running the sample. / // The access ID of the HMAC key // const hmacKeyAccessId = 'GOOG0234230X00'; // The ID of the project to which the service account belongs // const projectId = 'project-id'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client const storage = new Storage (); // Delete HMAC SA Key async function deleteHmacKey () { const hmacKey = storage . hmacKey ( hmacKeyAccessId , { projectId }); await hmacKey . delete (); console . log ( 'The key is deleted, though it may still appear in getHmacKeys() results.' ); } PHP For more information, see the Cloud Storage PHP API reference documentation .
- For more information, see Set up authentication for client libraries . def delete hmac key access id : The access ID of the HMAC key access id = "GOOG0234230X00" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new By default Storage#hmac keys uses the Storage client project id hmac key = storage . hmac key access id hmac key . delete! puts "The key is deleted, though it may still appear in Client#hmac keys results." end REST APIs JSON API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.

### Simple migration from Amazon S3 to Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/aws-simple-migration](https://docs.cloud.google.com/storage/docs/aws-simple-migration)
- Source ID: `site-iam-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Important: Because the simple migration scenario uses HMAC keys, make sure that the project you migrate to isn't subject to the restrictAuthTypes constraint for the account type you intend to use.
- To learn more about HMAC: https://cloud.google.com/storage/docs/authentication/hmackeys#overview """ client = boto3 . client ( "s3" , region name = "auto" , endpoint url = "https://storage.googleapis.com" , aws access key id = google access key id , aws secret access key = google access key secret , ) Call GCS to list current buckets response = client . list buckets () Return list of bucket names results = [] for bucket in response [ "Buckets" ]: results . append ( bucket [ "Name" ]) print ( bucket [ "Name" ]) # Can remove if not needed after development return results Set a default project To use Cloud Storage in a simple migration scenario, it's recommended that you set a default project , which Cloud Storage uses to perform certain operations , such as GET service or PUT bucket.
- Here is the request to a bucket in Amazon S3: PUT europe/france/paris.jpg HTTP/1.1 Host: my-travel-maps.s3.amazonaws.com Date: Mon, 11 Mar 2019 23:46:19 GMT Content-Length: 888814 Content-Type: image/jpg x-amz-acl: public-read x-amz-date:20190311T192918Z x-amz-meta-reviewer: joe,jane Authorization: AWS4-HMAC-SHA256 Credential= AWS-ACCESS-KEY /20190311/us-east-1/s3/aws4 request, SignedHeaders=content-length;content-type;host;x-amz-acl;x-amz-date;x-amz-meta-reviewer, Signature= SIGNATURE Here is the request for a bucket in Cloud Storage: PUT europe/france/paris.jpg HTTP/1.1 Host: my-travel-maps.storage.googleapis.com Date: Mon, 11 Mar 2019 23:46:19 GMT Content-Length: 888814 Content-Type: image/jpg x-amz-acl: public-read x-amz-date:20190311T192918Z x-amz-meta-reviewer: joe,jane Authorization: AWS4-HMAC-SHA256 Credential= GOOG-ACCESS-ID /20190311/us-east-1/s3/aws4 request, SignedHeaders=content-length;content-type;host;x-amz-acl;x-amz-date;x-amz-meta-reviewer, Signature= SIGNATURE Here is the corresponding canonical request that was created for this request: PUT /europe/france/paris.jpg content-length:888814 content-type:image/jpg host:my-travel-maps.storage.googleapis.com x-amz-acl:public-read x-amz-date:20190311T192918Z x-amz-meta-reviewer:joe,jane content-length,content-type,host,x-amz-acl,x-amz-date,x-amz-meta-reviewer 82e3da8b3f35989512e8d428add7eca73ab0e5f36586e66fbad8e1051343cbd2 Here is the corresponding string-to-sign that was created for this request: AWS4-HMAC-SHA256 20190311T192918Z 20190311/us-east-1/s3/aws4 request 73918a5ff373d7a03e406fbf9ea35675396b06fca2af76c27a5c451fa783ef65 This request did not provide a Content-MD5 header, so an empty string is shown in the second line of the message.
- For more information, see Set up authentication for client libraries . import com.amazonaws.auth.AWSStaticCredentialsProvider ; import com.amazonaws.auth.BasicAWSCredentials ; import com.amazonaws.client.builder.AwsClientBuilder ; import com.amazonaws.services.s3.AmazonS3 ; import com.amazonaws.services.s3.AmazonS3ClientBuilder ; import com.amazonaws.services.s3.model.Bucket ; import java.util.List ; public class ListGcsBuckets { public static void listGcsBuckets ( String googleAccessKeyId , String googleAccessKeySecret ) { // String googleAccessKeyId = "your-google-access-key-id"; // String googleAccessKeySecret = "your-google-access-key-secret"; // Create a BasicAWSCredentials using Cloud Storage HMAC credentials.

