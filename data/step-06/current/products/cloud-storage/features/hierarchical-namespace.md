---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.896Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Hierarchical namespace"
feature_slug: "hierarchical-namespace"
latest_feature_date: "2024-10-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/introduction"
  - "https://docs.cloud.google.com/storage/docs/creating-buckets"
  - "https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions"
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket"
keywords:
  - "hierarchical"
  - "namespace"
  - "lets"
  - "storage"
  - "buckets"
  - "organize"
  - "in"
  - "logical"
---

# Hierarchical namespace

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Hierarchical namespace lets Cloud Storage buckets organize data in a logical file system structure; Hierarchical namespace lets Cloud Storage buckets organize data in a logical file system structure.

## Extended Definition

Hierarchical namespace lets Cloud Storage buckets organize data in a logical file system structure; Hierarchical namespace lets Cloud Storage buckets organize data in a logical file system structure.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/introduction](https://docs.cloud.google.com/storage/docs/introduction)
- [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)
- [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)

## Supporting Pages

### Cloud Storage overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/introduction](https://docs.cloud.google.com/storage/docs/introduction)
- Source ID: `site-docs-root`
- Final score: 258
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- While buckets are suitable for most data storage use cases, you can set up optional configurations and features on a bucket to make it more suitable for high-performance workloads specifically: Hierarchical namespace : Buckets can have hierarchical namespace enabled, which lets you store your data in a logical file system structure by using folders.
- When you locate buckets in zones, you get the ability to colocate your objects with your compute resources, automatic enablement of hierarchical namespace, and new APIs for streaming reads and appendable writes.
- Buckets with hierarchical namespace enabled offer up to 8 times higher initial queries per second (QPS) limits for reading and writing objects compared to buckets without hierarchical namespace enabled.
- How Cloud Storage works Cloud Storage is a scalable and managed storage service offered by Google Cloud that lets you store data as objects in containers called buckets .

### Create a bucket \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- In the Optimize storage for data-intensive workloads section, do the following: To enable hierarchical namespace , select Enable Hierarchical namespace on this bucket .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions storage.buckets.create storage.buckets.enableObjectRetention (only required if enabling object retention configurations for the bucket) storage.buckets.list (only required if creating a bucket using the Google Cloud console.) resourcemanager.projects.get (only required if creating a bucket using the Google Cloud console) You might also be able to get these permissions with custom roles or other predefined roles.
- Create new storage bucket in the US multi-region with coldline storage resource "random id" "bucket prefix" { byte length = 8 } resource "google storage bucket" "static" { name = "${random id.bucket prefix.hex}-new-bucket" location = "US" storage class = "COLDLINE" uniform bucket level access = true } REST APIs JSON API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- For more information, see Set up authentication for client libraries . using Google.Apis.Storage.v1.Data ; using Google.Cloud.Storage.V1 ; using System ; public class CreateRegionalBucketSample { /// <summary> /// Creates a storage bucket with region. /// </summary> /// <param name="projectId">The ID of the project to create the buckets in.</param> /// <param name="location">The location of the bucket.

### "Set and manage IAM policies on buckets \_|\_ Cloud Storage \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions)
- Source ID: `site-iam-reference`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . def remove bucket conditional iam binding bucket name : The ID of your GCS bucket bucket name = "your-unique-bucket-name" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new bucket = storage . bucket bucket name role = "roles/storage.objectViewer" title = "Title" description = "Description" expression = "resource.name.startsWith( \" projects/ /buckets/bucket-name/objects/prefix-a- \" )" bucket . policy requested policy version : 3 do policy policy . version = 3 binding to remove = nil policy . bindings . each do b condition = { title : title , description : description , expression : expression } if b . role == role && b . condition && b . condition . title == title && b . condition . description == description && b . condition . expression == expression binding to remove = b end end if binding to remove policy . bindings . remove binding to remove puts "Conditional Binding was removed." else puts "No matching conditional binding found." end end end REST APIs JSON Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- For more information, see Set up authentication for client libraries . def add bucket conditional iam binding bucket name : The ID of your GCS bucket bucket name = "your-unique-bucket-name" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new bucket = storage . bucket bucket name role = "roles/storage.objectViewer" member = "group:example@google.com" title = "Title" description = "Description" expression = "resource.name.startsWith( \" projects/ /buckets/bucket-name/objects/prefix-a- \" )" bucket . policy requested policy version : 3 do policy policy . version = 3 policy . bindings . insert ( role : role , members : member , condition : { title : title , description : description , expression : expression } ) end puts "Added #{ member } with role #{ role } to #{ bucket name } with condition #{ title } #{ description } #{ expression } " end REST APIs JSON Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- For more information, see Set up authentication for client libraries . / TODO(developer): Uncomment the following lines before running the sample. / // The ID of your GCS bucket // const bucketName = 'your-unique-bucket-name'; // The role to grant // const roleName = 'roles/storage.objectViewer'; // The members to grant the new role to // const members = [ // 'user:jdoe@example.com', // 'group:admins@example.com', // ]; // Create a condition // const title = 'Title'; // const description = 'Description'; // const expression = 'resource.name.startsWith(\"projects/ /buckets/bucket-name/objects/prefix-a-\")'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client const storage = new Storage (); async function removeBucketConditionalBinding () { // Get a reference to a Google Cloud Storage bucket const bucket = storage . bucket ( bucketName ); // Gets and updates the bucket's IAM policy const [ policy ] = await bucket . iam . getPolicy ({ requestedPolicyVersion : 3 }); // Set the policy's version to 3 to use condition in bindings. policy . version = 3 ; // Finds and removes the appropriate role-member group with specific condition. const index = policy . bindings . findIndex ( binding = > binding . role === roleName && binding . condition && binding . condition . title === title && binding . condition . description === description && binding . condition . expression === expression ); const binding = policy . bindings [ index ]; if ( binding ) { policy . bindings . splice ( index , 1 ); // Updates the bucket's IAM policy await bucket . iam . setPolicy ( policy ); console . log ( 'Conditional Binding was removed.' ); } else { // No matching role-member group with specific condition were found throw new Error ( 'No matching binding group found.' ); } } removeBucketConditionalBinding (). catch ( console . error ); PHP For more information, see the Cloud Storage PHP API reference documentation .
- For more information, see Set up authentication for client libraries . / TODO(developer): Uncomment the following lines before running the sample. / // The ID of your GCS bucket // const bucketName = 'your-unique-bucket-name'; // The role to grant // const roleName = 'roles/storage.objectViewer'; // The members to grant the new role to // const members = [ // 'user:jdoe@example.com', // 'group:admins@example.com', // ]; // Create a condition // const title = 'Title'; // const description = 'Description'; // const expression = 'resource.name.startsWith(\"projects/ /buckets/bucket-name/objects/prefix-a-\")'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client const storage = new Storage (); async function addBucketConditionalBinding () { // Get a reference to a Google Cloud Storage bucket const bucket = storage . bucket ( bucketName ); // Gets and updates the bucket's IAM policy const [ policy ] = await bucket . iam . getPolicy ({ requestedPolicyVersion : 3 }); // Set the policy's version to 3 to use condition in bindings. policy . version = 3 ; // Adds the new roles to the bucket's IAM policy policy . bindings . push ({ role : roleName , members : members , condition : { title : title , description : description , expression : expression , }, }); // Updates the bucket's IAM policy await bucket . iam . setPolicy ( policy ); console . log ( Added the following member(s) with role ${ roleName } to ${ bucketName } : ); members . forEach ( member = > { console . log ( ${ member } ); }); console . log ( 'with condition:' ); console . log ( Title: ${ title } ); console . log ( Description: ${ description } ); console . log ( Expression: ${ expression } ); } addBucketConditionalBinding (). catch ( console . error ); PHP For more information, see the Cloud Storage PHP API reference documentation .

### Class Bucket (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.Bucket)
- Source ID: `site-python-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- See https://cloud.google.com/storage/docs/json api/v1/buckets and https://cloud.google.com/storage/docs/locations Returns None if the property has not been set before creation, if the bucket's resource has not been loaded from the server, or if the bucket is not a dual-regions bucket. default event based hold Scalar property getter. default kms key name Retrieve / set default KMS encryption key for objects in the bucket.
- See https://cloud.google.com/storage/docs/lifecycle and https://cloud.google.com/storage/docs/json api/v1/buckets clear lifecyle rules clear lifecyle rules () Deprecated alias for clear lifecycle rules. configure website configure website ( main page suffix = None , not found page = None ) Configure website-related properties.
- Note this property is only set for soft-deleted buckets. hierarchical namespace enabled Whether hierarchical namespace is enabled for this bucket. :setter: Update whether hierarchical namespace is enabled for this bucket. :getter: Query whether hierarchical namespace is enabled for this bucket.
- See https://cloud.google.com/storage/docs/json api/v1/buckets Returns Type Description int or NoneType The project number that owns the bucket or None if the bucket's resource has not been loaded from the server. requester pays Does the requester pay for API requests for this bucket?

