---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.891Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Bucket relocation"
feature_slug: "bucket-relocation"
latest_feature_date: "2025-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/autoclass"
  - "https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions"
  - "https://docs.cloud.google.com/storage/docs/locations"
  - "https://docs.cloud.google.com/storage/docs/creating-buckets"
keywords:
  - "bucket"
  - "relocation"
  - "lets"
  - "you"
  - "move"
  - "storage"
  - "buckets"
  - "between"
---

# Bucket relocation

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Bucket relocation lets you move Cloud Storage buckets between geographic locations.

## Extended Definition

Bucket relocation lets you move Cloud Storage buckets between geographic locations.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/autoclass](https://docs.cloud.google.com/storage/docs/autoclass)
- [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions)
- [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)
- [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)

## Supporting Pages

### Autoclass \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/autoclass](https://docs.cloud.google.com/storage/docs/autoclass)
- Source ID: `site-iam-reference`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When relocating a bucket, if you frequently access objects in buckets in a storage class other than Standard storage, such as Nearline storage, Coldline storage, or Archive storage, the objects don't automatically transition to a warmer storage class.
- Additionally, you can monitor the number of bytes stored in each storage class over time for your Autoclass-enabled buckets by going to the bucket's Configuration tab in the Google Cloud console and clicking See Performance .
- You can subsequently change an object's storage class as you would for non-Autoclass buckets.
- When you disable Autoclass on an existing bucket, the following occurs: Each object remains stored in whichever storage class it has at the time Autoclass is disabled.

### "Set and manage IAM policies on buckets \_|\_ Cloud Storage \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions)
- Source ID: `site-iam-reference`
- Final score: 209
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . def remove bucket conditional iam binding bucket name : The ID of your GCS bucket bucket name = "your-unique-bucket-name" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new bucket = storage . bucket bucket name role = "roles/storage.objectViewer" title = "Title" description = "Description" expression = "resource.name.startsWith( \" projects/ /buckets/bucket-name/objects/prefix-a- \" )" bucket . policy requested policy version : 3 do policy policy . version = 3 binding to remove = nil policy . bindings . each do b condition = { title : title , description : description , expression : expression } if b . role == role && b . condition && b . condition . title == title && b . condition . description == description && b . condition . expression == expression binding to remove = b end end if binding to remove policy . bindings . remove binding to remove puts "Conditional Binding was removed." else puts "No matching conditional binding found." end end end REST APIs JSON Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- For more information, see Set up authentication for client libraries . / TODO(developer): Uncomment the following lines before running the sample. / // The ID of your GCS bucket // const bucketName = 'your-unique-bucket-name'; // The role to grant // const roleName = 'roles/storage.objectViewer'; // The members to grant the new role to // const members = [ // 'user:jdoe@example.com', // 'group:admins@example.com', // ]; // Create a condition // const title = 'Title'; // const description = 'Description'; // const expression = 'resource.name.startsWith(\"projects/ /buckets/bucket-name/objects/prefix-a-\")'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client const storage = new Storage (); async function removeBucketConditionalBinding () { // Get a reference to a Google Cloud Storage bucket const bucket = storage . bucket ( bucketName ); // Gets and updates the bucket's IAM policy const [ policy ] = await bucket . iam . getPolicy ({ requestedPolicyVersion : 3 }); // Set the policy's version to 3 to use condition in bindings. policy . version = 3 ; // Finds and removes the appropriate role-member group with specific condition. const index = policy . bindings . findIndex ( binding = > binding . role === roleName && binding . condition && binding . condition . title === title && binding . condition . description === description && binding . condition . expression === expression ); const binding = policy . bindings [ index ]; if ( binding ) { policy . bindings . splice ( index , 1 ); // Updates the bucket's IAM policy await bucket . iam . setPolicy ( policy ); console . log ( 'Conditional Binding was removed.' ); } else { // No matching role-member group with specific condition were found throw new Error ( 'No matching binding group found.' ); } } removeBucketConditionalBinding (). catch ( console . error ); PHP For more information, see the Cloud Storage PHP API reference documentation .
- To see how to express a condition in CEL, visit: @see https://cloud.google.com/storage/docs/access-control/iam#conditions. @param string $bucketName The name of your Cloud Storage bucket. (e.g. 'my-bucket') @param string $role the role that will be given to members in this binding. (e.g. 'roles/storage.objectViewer') @param string $title The title of the condition. (e.g. 'Title') @param string $description The description of the condition. (e.g. 'Condition Description') @param string $expression Te condition specified in CEL expression language. (e.g. 'resource.name.startsWith("projects/ /buckets/bucket-name/objects/prefix-a-")') / function remove bucket conditional iam binding(string $bucketName, string $role, string $title, string $description, string $expression): void { $storage = new StorageClient(); $bucket = $storage->bucket($bucketName); $policy = $bucket->iam()->policy(['requestedPolicyVersion' => 3]); $policy['version'] = 3; $key of conditional binding = null; foreach ($policy['bindings'] as $key => $binding) { if ($binding['role'] == $role && isset($binding['condition'])) { $condition = $binding['condition']; if ($condition['title'] == $title && $condition['description'] == $description && $condition['expression'] == $expression) { $key of conditional binding = $key; break; } } } if ($key of conditional binding != null) { unset($policy['bindings'][$key of conditional binding]); // Ensure array keys are sequential, otherwise JSON encodes // the array as an object, which fails when calling the API. $policy['bindings'] = array values($policy['bindings']); $bucket->iam()->setPolicy($policy); print('Conditional Binding was removed.' .
- For more information, see Set up authentication for client libraries . def add bucket conditional iam binding bucket name : The ID of your GCS bucket bucket name = "your-unique-bucket-name" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new bucket = storage . bucket bucket name role = "roles/storage.objectViewer" member = "group:example@google.com" title = "Title" description = "Description" expression = "resource.name.startsWith( \" projects/ /buckets/bucket-name/objects/prefix-a- \" )" bucket . policy requested policy version : 3 do policy policy . version = 3 policy . bindings . insert ( role : role , members : member , condition : { title : title , description : description , expression : expression } ) end puts "Added #{ member } with role #{ role } to #{ bucket name } with condition #{ title } #{ description } #{ expression } " end REST APIs JSON Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.

### Bucket locations \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/locations](https://docs.cloud.google.com/storage/docs/locations)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- If the regions you want to pair are not available as a dual-region, consider creating a separate bucket in each region and using Storage Transfer Service Event-driven transfers to keep the buckets in sync.
- Note that bucket relocation is available only if you've configured Storage Intelligence .
- Lowest storage price No replication charges No outbound data transfer charges when reading data inside the same region Highest storage price Replication charges apply on write No outbound data transfer charges when reading data within either region Higher storage price than regions, but lower than dual-regions Replication charges apply on write Outbound data transfer charges always apply when reading data Location recommendations Requirements Recommended bucket location Workload examples Ultra-low latency Ultra-high bandwidth and I/O High performance Zone 1 Artificial Intelligence (AI) and Machine Learning (ML) High-performance computing Data-intensive analytics Optimized latency and bandwidth Lowest data storage cost Cross-zone redundancy Region 2 Analytics Backup and archive Optimized latency and bandwidth Cross-region redundancy, with precise control of the locations where copies of data are stored Dual-region 3 Analytics Backup and archive Disaster recovery Cross-geography data access Cross-region redundancy Multi-region Content serving Zonal locations for buckets are only available through Rapid Bucket .
- The following options are available when creating a bucket in a predefined dual-region: Predefined dual-region name Region Name Region Description ASIA1 ASIA-NORTHEAST1 + ASIA-NORTHEAST2 Tokyo + Osaka EUR4 EUROPE-NORTH1 + EUROPE-WEST4 Finland + Netherlands EUR5 EUROPE-WEST1 + EUROPE-WEST2 Belgium + London EUR7 EUROPE-WEST2 + EUROPE-WEST3 London + Frankfurt EUR8 EUROPE-WEST3 + EUROPE-WEST6 Frankfurt + Zürich NAM4 US-CENTRAL1 + US-EAST1 Iowa + South Carolina Request routing for dual-region buckets When you access data in a dual-region bucket from a resource that's located in one of the regions of the dual-region, the request is routed to that same region to provide the best performance.

### Create a bucket \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)
- Source ID: `site-docs-root`
- Final score: 193
- Re-rank relevance: N/A

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions storage.buckets.create storage.buckets.enableObjectRetention (only required if enabling object retention configurations for the bucket) storage.buckets.list (only required if creating a bucket using the Google Cloud console.) resourcemanager.projects.get (only required if creating a bucket using the Google Cloud console) You might also be able to get these permissions with custom roles or other predefined roles.
- Create new storage bucket in the US multi-region with coldline storage resource "random id" "bucket prefix" { byte length = 8 } resource "google storage bucket" "static" { name = "${random id.bucket prefix.hex}-new-bucket" location = "US" storage class = "COLDLINE" uniform bucket level access = true } REST APIs JSON API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- In your development environment, run the gcloud storage buckets create command: gcloud storage buckets create gs:// BUCKET NAME --location= BUCKET LOCATION Where: BUCKET NAME is the name you want to give your bucket, subject to naming requirements .
- If not otherwise specified in your request, buckets are created in the US multi-region with a default storage class of Standard storage and have a seven-day soft delete retention duration.

