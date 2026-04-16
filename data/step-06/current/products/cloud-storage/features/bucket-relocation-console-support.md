---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.875Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Bucket relocation console support"
feature_slug: "bucket-relocation-console-support"
latest_feature_date: "2025-11-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/access-control/iam-console"
  - "https://docs.cloud.google.com/storage/docs/discover-object-storage-console"
  - "https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions"
  - "https://docs.cloud.google.com/storage/docs/cloud-console"
keywords:
  - "bucket"
  - "relocation"
  - "console"
  - "the"
  - "supports"
  - "relocating"
  - "storage"
  - "buckets"
---

# Bucket relocation console support

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

The Google Cloud console supports relocating Cloud Storage buckets between locations without changing bucket names.

## Extended Definition

The Google Cloud console supports relocating Cloud Storage buckets between locations without changing bucket names.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/access-control/iam-console](https://docs.cloud.google.com/storage/docs/access-control/iam-console)
- [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console)
- [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions)
- [https://docs.cloud.google.com/storage/docs/cloud-console](https://docs.cloud.google.com/storage/docs/cloud-console)

## Supporting Pages

### "IAM permissions for the Google Cloud console \_|\_ Cloud Storage \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/iam-console](https://docs.cloud.google.com/storage/docs/access-control/iam-console)
- Source ID: `site-docs-reference`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Common permissions required for using the Google Cloud console Certain permissions are broadly necessary in order to use the Google Cloud console: All actions involving buckets should include resourcemanager.projects.get and storage.buckets.list permissions at the project level.
- Permissions required for specific actions Action Required IAM Permissions (in addition to those listed above) Create a bucket storage.buckets.create storage.buckets.enableObjectRetention 1 Attach a tag to a bucket storage.buckets.createTagBinding List or filter buckets No additional permissions List tags directly attached to a bucket storage.buckets.listTagBindings List both inherited tags and tags directly attached to a bucket storage.buckets.listEffectiveTags View the following bucket information: Location, replication status, and default storage class Protection settings Bucket labels Object lifecycle policies Public access prevention status Uniform bucket-level access status Autoclass status Website configuration storage.buckets.get Change the following bucket settings: Protection settings Default storage class Bucket labels Object lifecycle policies Uniform bucket-level access status Autoclass status Website configuration Object retention configurations storage.buckets.get storage.buckets.update storage.buckets.enableObjectRetention 1 Enable the Requester Pays feature storage.buckets.get storage.buckets.update Disable the Requester Pays feature storage.buckets.get storage.buckets.update resourcemanager.projects.createBillingAssignment 3 Change the public access prevention setting storage.buckets.get storage.buckets.setIamPolicy storage.buckets.update Change bucket permissions storage.buckets.get storage.buckets.getIamPolicy storage.buckets.setIamPolicy storage.buckets.update Delete an empty bucket storage.buckets.delete storage.objects.list Delete a non-empty bucket storage.buckets.delete storage.objects.delete storage.objects.list Detach a tag from a bucket storage.buckets.deleteTagBinding Create a folder storage.folders.create Get the metadata of a folder storage.folders.get List folders storage.folders.list Rename folders storage.folders.rename (for the source bucket) storage.folders.create (for the destination bucket) Delete folders storage.folders.delete Upload an object or folder of objects storage.objects.create storage.objects.delete 2 storage.objects.setRetention 4 View the details for an object 5 storage.objects.get storage.objects.list View the version history of an object storage.objects.get storage.objects.list Download an object 5 or folder of objects storage.objects.get storage.objects.list List objects in a bucket, including noncurrent objects and soft-deleted objects storage.objects.list Determine if an object is publicly accessible 5 storage.buckets.getIamPolicy storage.objects.list storage.objects.getIamPolicy 7 Rename an object or restore a noncurrent version of an object storage.objects.create storage.objects.delete storage.objects.get storage.objects.list storage.objects.getIamPolicy 7 storage.objects.setIamPolicy 7 Copy an object storage.objects.create (for the destination bucket) storage.objects.delete 2 (for the destination bucket) storage.objects.get (for the source object) storage.objects.list (for the source bucket and destination bucket) storage.objects.getIamPolicy 7,8 (for the source object) storage.objects.setIamPolicy 7,8 (for the destination bucket) Move an object storage.objects.create (for the destination bucket) storage.objects.delete 2 (for the destination bucket) storage.objects.delete (for the source bucket) storage.objects.get (for the source object) storage.objects.list (for the source bucket and destination bucket) storage.objects.getIamPolicy 7,8 (for the source object) storage.objects.setIamPolicy 7,8 (for the destination bucket) View an object's access permissions 5,6 storage.objects.get storage.objects.list storage.objects.getIamPolicy Edit an object's access permissions 5,6 storage.objects.get storage.objects.list storage.objects.getIamPolicy storage.objects.setIamPolicy storage.objects.update Edit an object's metadata 5 storage.objects.get storage.objects.list storage.objects.update Add, change, or remove a retention configuration on an object 5 storage.objects.get storage.objects.list storage.objects.update storage.objects.setRetention storage.objects.overrideUnlockedRetention 9 Add or remove a hold on an object 5 storage.objects.get storage.objects.list storage.objects.update Delete an object 5 , a noncurrent version of an object, or a folder of objects storage.objects.delete storage.objects.list Restore a deleted object storage.objects.create storage.objects.delete 2 storage.objects.list storage.objects.restore Bulk restore deleted objects storage.objects.create storage.objects.delete 10 storage.objects.restore storage.buckets.restore storage.objects.setIamPolicy 7 ,11 View the name of a project's Cloud Storage service agent resourcemanager.projects.get View the service account HMAC keys for a project resourcemanager.projects.get storage.hmacKeys.list Create an HMAC key for a service account resourcemanager.projects.get storage.hmacKeys.list storage.hmacKeys.create Disable or re-enable an HMAC key for a service account resourcemanager.projects.get storage.hmacKeys.list storage.hmacKeys.update Delete an HMAC key for a service account resourcemanager.projects.get storage.hmacKeys.list storage.hmacKeys.delete Create, view, or delete an HMAC key for the user account you are logged in as resourcemanager.projects.get Configure, update or disable the Storage Intelligence configuration on a project, a folder or an organization storage.intelligenceConfigs.update View the Storage Intelligence configuration on a project, a folder or an organization storage.intelligenceConfigs.get Create a cache using Rapid Cache storage.anywhereCaches.create List a cache using Rapid Cache storage.anywhereCaches.list Update a cache using Rapid Cache storage.anywhereCaches.update Pause a cache using Rapid Cache storage.anywhereCaches.pause Resume a cache using Rapid Cache storage.anywhereCaches.resume Get the metadata of a cache using Rapid Cache storage.anywhereCaches.get Disable a cache using Rapid Cache storage.anywhereCaches.disable 1 This permission is only required when enabling a bucket to support object retention configurations .
- 5 This action does not require storage.objects.list if it's performed on the details page for the relevant object and you don't access the details page from the overall list of objects for the bucket.
- Home Documentation Storage Cloud Storage Reference Send feedback IAM permissions for the Google Cloud console Stay organized with collections Save and categorize content based on your preferences.

### "Quickstart: Discover object storage with the Google Cloud console \_|\_\

- URL: [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console)
- Source ID: `site-docs-reference`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- To create a bucket: In the Google Cloud console, go to the Cloud Storage Buckets page.
- In the Google Cloud console, go to the Cloud Storage Buckets page.
- Create a bucket Buckets are the basic containers that hold your data in Cloud Storage.
- The Copy URL button provides a shareable URL similar to the following: https://storage.googleapis.com/ YOUR BUCKET NAME /kitten.png To remove public access from the bucket and stop sharing the image publicly: Click the Permissions tab.

### "Set and manage IAM policies on buckets \_|\_ Cloud Storage \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions)
- Source ID: `site-iam-reference`
- Final score: 205
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . / TODO(developer): Uncomment the following lines before running the sample. / // The ID of your GCS bucket // const bucketName = 'your-unique-bucket-name'; // The role to grant // const roleName = 'roles/storage.objectViewer'; // The members to grant the new role to // const members = [ // 'user:jdoe@example.com', // 'group:admins@example.com', // ]; // Create a condition // const title = 'Title'; // const description = 'Description'; // const expression = 'resource.name.startsWith(\"projects/ /buckets/bucket-name/objects/prefix-a-\")'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client const storage = new Storage (); async function removeBucketConditionalBinding () { // Get a reference to a Google Cloud Storage bucket const bucket = storage . bucket ( bucketName ); // Gets and updates the bucket's IAM policy const [ policy ] = await bucket . iam . getPolicy ({ requestedPolicyVersion : 3 }); // Set the policy's version to 3 to use condition in bindings. policy . version = 3 ; // Finds and removes the appropriate role-member group with specific condition. const index = policy . bindings . findIndex ( binding = > binding . role === roleName && binding . condition && binding . condition . title === title && binding . condition . description === description && binding . condition . expression === expression ); const binding = policy . bindings [ index ]; if ( binding ) { policy . bindings . splice ( index , 1 ); // Updates the bucket's IAM policy await bucket . iam . setPolicy ( policy ); console . log ( 'Conditional Binding was removed.' ); } else { // No matching role-member group with specific condition were found throw new Error ( 'No matching binding group found.' ); } } removeBucketConditionalBinding (). catch ( console . error ); PHP For more information, see the Cloud Storage PHP API reference documentation .
- For more information, see Set up authentication for client libraries . / TODO(developer): Uncomment the following lines before running the sample. / // The ID of your GCS bucket // const bucketName = 'your-unique-bucket-name'; // The role to grant // const roleName = 'roles/storage.objectViewer'; // The members to grant the new role to // const members = [ // 'user:jdoe@example.com', // 'group:admins@example.com', // ]; // Create a condition // const title = 'Title'; // const description = 'Description'; // const expression = 'resource.name.startsWith(\"projects/ /buckets/bucket-name/objects/prefix-a-\")'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client const storage = new Storage (); async function addBucketConditionalBinding () { // Get a reference to a Google Cloud Storage bucket const bucket = storage . bucket ( bucketName ); // Gets and updates the bucket's IAM policy const [ policy ] = await bucket . iam . getPolicy ({ requestedPolicyVersion : 3 }); // Set the policy's version to 3 to use condition in bindings. policy . version = 3 ; // Adds the new roles to the bucket's IAM policy policy . bindings . push ({ role : roleName , members : members , condition : { title : title , description : description , expression : expression , }, }); // Updates the bucket's IAM policy await bucket . iam . setPolicy ( policy ); console . log ( Added the following member(s) with role ${ roleName } to ${ bucketName } : ); members . forEach ( member = > { console . log ( ${ member } ); }); console . log ( 'with condition:' ); console . log ( Title: ${ title } ); console . log ( Description: ${ description } ); console . log ( Expression: ${ expression } ); } addBucketConditionalBinding (). catch ( console . error ); PHP For more information, see the Cloud Storage PHP API reference documentation .
- This role contains the following permissions, which are required to set and manage IAM policies for buckets: storage.buckets.get storage.buckets.getIamPolicy storage.buckets.setIamPolicy storage.buckets.update storage.buckets.list This permission is only required if you plan on using the Google Cloud console to perform the tasks on this page.
- Remove a principal from a bucket-level policy Console In the Google Cloud console, go to the Cloud Storage Buckets page.

### Google Cloud console \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/cloud-console](https://docs.cloud.google.com/storage/docs/cloud-console)
- Source ID: `site-docs-reference`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Console features The Google Cloud console provides the following features: Access to all your Google Cloud projects Access to the Cloud Shell A customizable project dashboard, with an overview of Google Cloud resources, billing, and a filterable activity listing Access to all Google Cloud APIs, with a dashboard specific to each API, and access to manage your resources Links to Google Cloud starting points, news, and documentation The Google Cloud console is used to perform a variety of tasks in Cloud Storage, such as the following: Creating buckets Uploading objects to buckets and downloading objects from buckets Filtering and sorting lists of buckets and objects Deleting objects Creating and managing folders Controlling access to your data and resources by using Identity and Access Management (IAM) and ACLs Monitoring buckets and bandwidth usage Using Cloud Storage features like Rapid Cache , soft delete , and Object Versioning Try it for yourself If you're new to Google Cloud, create an account to evaluate how Cloud Storage performs in real-world scenarios.
- Cross-product integrations The following integrations with other Google Cloud products are available in the Objects tab of a bucket: Large scale data transfers to and from the bucket using Storage Transfer Service Storage Transfer Service is a service that lets you transfer large volumes of data between your bucket and other storage options, such as your on-premises file system, other buckets, or other cloud providers.
- If you are: A user granted access to a project Use: https://console.cloud.google.com/ Go to the Google Cloud console A current project owner can give you access to the entire project , which applies equally to all buckets and objects defined in the project.
- A user granted access to an object Use: https://console.cloud.google.com/storage/browser/ details/ BUCKET NAME / OBJECT NAME In this use case, a project owner gives you access to single objects within a bucket and sends you the URL to access the objects.

