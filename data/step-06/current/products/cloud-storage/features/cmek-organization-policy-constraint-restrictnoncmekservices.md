---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.932Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "CMEK organization policy constraint: restrictNonCmekServices"
feature_slug: "cmek-organization-policy-constraint-restrictnoncmekservices"
latest_feature_date: "2022-08-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/troubleshooting"
  - "https://docs.cloud.google.com/storage/docs/access-control/iam"
  - "https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys"
  - "https://docs.cloud.google.com/storage/docs/creating-buckets"
keywords:
  - "cmek"
  - "organization"
  - "policy"
  - "constraint"
  - "restrictnoncmekservices"
  - "this"
  - "controls"
  - "which"
---

# CMEK organization policy constraint: restrictNonCmekServices

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

This organization policy constraint controls which Cloud Storage resources must use customer-managed encryption keys.

## Extended Definition

This organization policy constraint controls which Cloud Storage resources must use customer-managed encryption keys.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)
- [https://docs.cloud.google.com/storage/docs/access-control/iam](https://docs.cloud.google.com/storage/docs/access-control/iam)
- [https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys](https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys)
- [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)

## Supporting Pages

### Troubleshooting \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- Solution : Check with your security administrator team to see if the bucket to which you're sending requests is being affected by an organization policy that uses a custom constraint.
- For example, the Domain Restricted Sharing constraint ( constraints/iam.allowedPolicyMemberDomains ) restricts resource sharing based on the organization's domain.
- If you continue to see this error after overriding the organization policy, then you might need to wait a few minutes for the change to take effect.
- Solution : Some organization policy constraints can prevent you from making your data public.

### Identity and Access Management \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-control/iam](https://docs.cloud.google.com/storage/docs/access-control/iam)
- Source ID: `site-iam-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- To achieve this, you can give the user the Storage Object Viewer ( roles/storage.objectViewer ) role for the project, which allows the user to read any object stored in any bucket within your project, and the Storage Object Creator ( roles/storage.objectCreator ) role for bucket A, which allows the user to create objects only in that bucket.
- This permission is found in roles such as Storage Object Creator ( roles/storage.objectCreator ), which grants the permissions useful for creating objects in a bucket, and Storage Object Admin ( roles/storage.objectAdmin ), which grants a wide range of permissions for working with objects.
- The access granted by these roles apply to both the resource on which the policy is set and any resources contained within that resource.
- If you view the IAM policy for an individual bucket using the Google Cloud console , you do see project-level permissions that apply to that bucket; however, other Cloud Storage tools, such as gcloud storage and the Client Libraries only return the policy of the bucket and don't include information inherited from the project-level policy.

### "Manage HMAC keys for service accounts \_|\_ Cloud Storage \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys](https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys)
- Source ID: `site-iam-reference`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Make sure the following organization policy constraints are disabled: constraints/storage.restrictAuthTypes (must be disabled for HMAC key authentication) constraints/iam.disableServiceAccountKeyCreation See Creating and managing organization policies for instructions on how to check and disable constraints.
- The following sample deactivates an HMAC key: / TODO(developer): Uncomment the following lines before running the sample. / // The access ID of the HMAC key // const hmacKeyAccessId = 'GOOG0234230X00'; // The ID of the project to which the service account belongs // const projectId = 'project-id'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client const storage = new Storage (); // Deactivate HMAC SA Key async function deactivateHmacKey () { const hmacKey = storage . hmacKey ( hmacKeyAccessId , { projectId }); const [ hmacKeyMetadata ] = await hmacKey . setMetadata ({ state : 'INACTIVE' }); console . log ( 'The HMAC key is now inactive.' ); console . log ( 'The HMAC key metadata is:' ); for ( const [ key , value ] of Object . entries ( hmacKeyMetadata )) { console . log ( ${ key } : ${ value } ); } } The following sample activates an HMAC key: / TODO(developer): Uncomment the following lines before running the sample. / // The access ID of the HMAC key // const hmacKeyAccessId = 'GOOG0234230X00'; // The ID of the project to which the service account belongs // const projectId = 'project-id'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client const storage = new Storage (); // Activate HMAC SA Key async function activateHmacKey () { const hmacKey = storage . hmacKey ( hmacKeyAccessId , { projectId }); const [ hmacKeyMetadata ] = await hmacKey . setMetadata ({ state : 'ACTIVE' }); console . log ( 'The HMAC key is now active.' ); console . log ( 'The HMAC key metadata is:' ); for ( const [ key , value ] of Object . entries ( hmacKeyMetadata )) { console . log ( ${ key } : ${ value } ); } } PHP For more information, see the Cloud Storage PHP API reference documentation .
- The following sample retrieves a list of HMAC keys associated with a project: / TODO(developer): Uncomment the following lines before running the sample. / // The ID of the project to which the service account belongs // const projectId = 'project-id'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client const storage = new Storage (); // List HMAC SA Keys' Metadata async function listHmacKeys () { const [ hmacKeys ] = await storage . getHmacKeys ({ projectId }); // hmacKeys is an array of HmacKey objects. for ( const hmacKey of hmacKeys ) { console . log ( Service Account Email: ${ hmacKey . metadata . serviceAccountEmail } ); console . log ( Access Id: ${ hmacKey . metadata . accessId } ); } } The following sample retrieves information for a specific HMAC key: / TODO(developer): Uncomment the following lines before running the sample. / // The access ID of the HMAC key // const hmacKeyAccessId = 'GOOG0234230X00'; // The ID of the project to which the service account belongs // const projectId = 'project-id'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client const storage = new Storage (); // Get HMAC SA Key Metadata async function getHmacKey () { const hmacKey = storage . hmacKey ( hmacKeyAccessId , { projectId }); // Populate the hmacKey object with metadata from server. await hmacKey . getMetadata (); console . log ( 'The HMAC key metadata is:' ); for ( const [ key , value ] of Object . entries ( hmacKey . metadata )) { console . log ( ${ key } : ${ value } ); } } PHP For more information, see the Cloud Storage PHP API reference documentation .
- The following sample deactivates an HMAC key: def deactivate hmac key access id : The access ID of the HMAC key access id = "GOOG0234230X00" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new By default Storage#hmac keys uses the Storage client project id hmac key = storage . hmac key access id hmac key . inactive! puts "The HMAC key is now inactive." puts "The HMAC key metadata is:" puts "Key ID: #{ hmac key . id } " puts "Service Account Email: #{ hmac key . service account email } " puts "Access ID: #{ hmac key . access id } " puts "Project ID: #{ hmac key . project id } " puts "Active: #{ hmac key . active? } " puts "Created At: #{ hmac key . created at } " puts "Updated At: #{ hmac key . updated at } " puts "Etag: #{ hmac key . etag } " end The following sample activates an HMAC key: def activate hmac key access id : The access ID of the HMAC key access id = "GOOG0234230X00" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new By default Storage#hmac keys uses the Storage client project id hmac key = storage . hmac key access id hmac key . active! puts "The HMAC key is now active." puts "The HMAC key metadata is:" puts "Key ID: #{ hmac key . id } " puts "Service Account Email: #{ hmac key . service account email } " puts "Access ID: #{ hmac key . access id } " puts "Project ID: #{ hmac key . project id } " puts "Active: #{ hmac key . active? } " puts "Created At: #{ hmac key . created at } " puts "Updated At: #{ hmac key . updated at } " puts "Etag: #{ hmac key . etag } " end REST APIs JSON API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.

### Create a bucket \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)
- Source ID: `site-docs-root`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Note: If public access prevention is already enforced by your project's organization policy , the Prevent public access checkbox is locked.
- For more information, see Set up authentication for client libraries . / TODO(developer): Uncomment the following lines before running the sample. / // The ID of your GCS bucket // const bucketName = 'your-unique-bucket-name'; // The name of a storage class // See the StorageClass documentation for other valid storage classes: // https://googleapis.dev/java/google-cloud-clients/latest/com/google/cloud/storage/StorageClass.html // const storageClass = 'coldline'; // The name of a location // See this documentation for other valid locations: // http://g.co/cloud/storage/docs/locations#location-mr // const location = 'ASIA'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client // The bucket in the sample below will be created in the project associated with this client. // For more information, please see https://cloud.google.com/docs/authentication/production or https://googleapis.dev/nodejs/storage/latest/Storage.html const storage = new Storage (); async function createBucketWithStorageClassAndLocation () { // For default values see: https://cloud.google.com/storage/docs/locations and // https://cloud.google.com/storage/docs/storage-classes const [ bucket ] = await storage . createBucket ( bucketName , { location , [ storageClass ] : true , }); console . log ( ${ bucket . name } created with ${ storageClass } class in ${ location } ); } createBucketWithStorageClassAndLocation (). catch ( console . error ); PHP For more information, see the Cloud Storage PHP API reference documentation .
- COLDLINE ; // See this documentation for other valid locations: // http://g.co/cloud/storage/docs/bucket-locations#location-mr String location = "ASIA" ; Bucket bucket = storage . create ( BucketInfo . newBuilder ( bucketName ) . setStorageClass ( storageClass ) . setLocation ( location ) . build ()); System . out . println ( "Created bucket " + bucket . getName () + " in " + bucket . getLocation () + " with storage class " + bucket . getStorageClass ()); } } Node.js For more information, see the Cloud Storage Node.js API reference documentation .
- Values include MULTI REGIONAL, /// REGIONAL, STANDARD, NEARLINE, COLDLINE, ARCHIVE, and DURABLE REDUCED AVAILABILITY. /// If this value is not specified when the bucket is created, it will default to /// STANDARD.</param> public Bucket CreateRegionalBucket ( string projectId = "your-project-id" , string bucketName = "your-unique-bucket-name" , string location = "us-west1" , string storageClass = "REGIONAL" ) { var storage = StorageClient .

