---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.943Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Object Versioning in Cloud Console"
feature_slug: "object-versioning-in-cloud-console"
latest_feature_date: "2021-09-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/discover-object-storage-console"
  - "https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders"
  - "https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists"
  - "https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions"
keywords:
  - "object"
  - "versioning"
  - "in"
  - "console"
  - "the"
  - "can"
  - "manage"
  - "and"
---

# Object Versioning in Cloud Console

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

The Cloud Console can manage Object Versioning and perform actions on versioned objects.

## Extended Definition

The Cloud Console can manage Object Versioning and perform actions on versioned objects.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console)
- [https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders](https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders)
- [https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists](https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists)
- [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions)

## Supporting Pages

### "Quickstart: Discover object storage with the Google Cloud console \_|\_\

- URL: [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console)
- Source ID: `site-docs-reference`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Discover object storage with the Google Cloud console Learn how to get started with Cloud Storage using the Google Cloud console.
- The simulated folder and all objects in it are deleted.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- The Copy URL button provides a shareable URL similar to the following: https://storage.googleapis.com/ YOUR BUCKET NAME /kitten.png To remove public access from the bucket and stop sharing the image publicly: Click the Permissions tab.

### "Set and manage IAM policies on managed folders \_|\_ Cloud Storage \_|\_\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders](https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders)
- Source ID: `site-iam-reference`
- Final score: 264
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This role contain the following permissions, which are required to set and manage IAM policies for managed folders: storage.managedFolders.getIamPolicy storage.managedFolders.setIamPolicy You can also get these permissions with custom roles .
- If you're looking for other methods of access control, see the following resources: To learn about how to control access to whole buckets and the objects within them, see Set and manage IAM policies on buckets .
- This page describes how to set Identity and Access Management (IAM) policies on managed folders , so you can get fine-grained access control over specific groups of objects within a bucket.
- Use the gcloud storage managed-folders add-iam-policy-binding command with the --condition-from-file flag: gcloud storage managed-folders add-iam-policy-binding gs:// BUCKET NAME / MANAGED FOLDER NAME --member= PRINCIPAL IDENTIFIER --role= IAM ROLE --condition-from-file= CONDITION FILE Where: BUCKET NAME is the name of the bucket that contains the managed folder to which you are granting the principal access.

### "Create and manage access control lists (ACLs) \_|\_ Cloud Storage \_|\_\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists](https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists)
- Source ID: `site-iam-reference`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use // addAllUsers(), addDomain(), addProject(), addGroup(), and // addAllAuthenticatedUsers() to grant access to different types of entities. // You can also use "readers" and "writers" to grant different roles. await storage . bucket ( bucketName ). acl . default . owners . addUser ( userEmail ); console . log ( Added user ${ userEmail } as an owner on bucket ${ bucketName } . ); } addBucketDefaultOwner (). catch ( console . error ); The following sample deletes a default object ACL from a bucket: / TODO(developer): Uncomment the following lines before running the sample. / // The ID of your GCS bucket // const bucketName = 'your-unique-bucket-name'; // The email address of the user to remove // const userEmail = 'user-email-to-remove'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client const storage = new Storage (); async function removeBucketDefaultOwner () { // Removes the user from the access control list of the bucket.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions storage.buckets.get storage.buckets.list This permission is only required for using the Google Cloud console to perform the tasks on this page. storage.buckets.setIamPolicy storage.buckets.update storage.objects.get storage.objects.getIamPolicy storage.objects.setIamPolicy storage.objects.update You can also get these permissions with custom roles .
- To view and change the default object ACL for a bucket: Console You cannot set default object ACLs using the Google Cloud console.
- Client () bucket = storage client . bucket ( bucket name ) Reload fetches the current ACL from Cloud Storage. bucket . acl . reload () You can also use group, domain, all authenticated and all to remove access for different types of entities. bucket . default object acl . user ( user email ) . revoke read () bucket . default object acl . user ( user email ) . revoke write () bucket . default object acl . user ( user email ) . revoke owner () bucket . default object acl . save () print ( f "Removed user { user email } from the default acl of bucket { bucket name } ." ) Ruby For more information, see the Cloud Storage Ruby API reference documentation .

### "Set and manage IAM policies on buckets \_|\_ Cloud Storage \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions)
- Source ID: `site-iam-reference`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . / TODO(developer): Uncomment the following lines before running the sample. / // The ID of your GCS bucket // const bucketName = 'your-unique-bucket-name'; // The role to grant // const roleName = 'roles/storage.objectViewer'; // The members to grant the new role to // const members = [ // 'user:jdoe@example.com', // 'group:admins@example.com', // ]; // Create a condition // const title = 'Title'; // const description = 'Description'; // const expression = 'resource.name.startsWith(\"projects/ /buckets/bucket-name/objects/prefix-a-\")'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client const storage = new Storage (); async function removeBucketConditionalBinding () { // Get a reference to a Google Cloud Storage bucket const bucket = storage . bucket ( bucketName ); // Gets and updates the bucket's IAM policy const [ policy ] = await bucket . iam . getPolicy ({ requestedPolicyVersion : 3 }); // Set the policy's version to 3 to use condition in bindings. policy . version = 3 ; // Finds and removes the appropriate role-member group with specific condition. const index = policy . bindings . findIndex ( binding = > binding . role === roleName && binding . condition && binding . condition . title === title && binding . condition . description === description && binding . condition . expression === expression ); const binding = policy . bindings [ index ]; if ( binding ) { policy . bindings . splice ( index , 1 ); // Updates the bucket's IAM policy await bucket . iam . setPolicy ( policy ); console . log ( 'Conditional Binding was removed.' ); } else { // No matching role-member group with specific condition were found throw new Error ( 'No matching binding group found.' ); } } removeBucketConditionalBinding (). catch ( console . error ); PHP For more information, see the Cloud Storage PHP API reference documentation .
- For more information, see Set up authentication for client libraries . / TODO(developer): Uncomment the following lines before running the sample. / // The ID of your GCS bucket // const bucketName = 'your-unique-bucket-name'; // The role to revoke // const roleName = 'roles/storage.objectViewer'; // The members to revoke the roles from // const members = [ // 'user:jdoe@example.com', // 'group:admins@example.com', // ]; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client const storage = new Storage (); async function removeBucketIamMember () { // Get a reference to a Google Cloud Storage bucket const bucket = storage . bucket ( bucketName ); // For more information please read: // https://cloud.google.com/storage/docs/access-control/iam const [ policy ] = await bucket . iam . getPolicy ({ requestedPolicyVersion : 3 }); // Finds and updates the appropriate role-member group, without a condition. const index = policy . bindings . findIndex ( binding = > binding . role === roleName && ! binding . condition ); const role = policy . bindings [ index ]; if ( role ) { role . members = role . members . filter ( member = > members . indexOf ( member ) === - 1 ); // Updates the policy object with the new (or empty) role-member group if ( role . members . length === 0 ) { policy . bindings . splice ( index , 1 ); } else { policy . bindings . index = role ; } // Updates the bucket's IAM policy await bucket . iam . setPolicy ( policy ); } else { // No matching role-member group(s) were found throw new Error ( 'No matching role-member group(s) found.' ); } console . log ( Removed the following member(s) with role ${ roleName } from ${ bucketName } : ); members . forEach ( member = > { console . log ( ${ member } ); }); } removeBucketIamMember (). catch ( console . error ); PHP For more information, see the Cloud Storage PHP API reference documentation .
- For more information, see Set up authentication for client libraries . / TODO(developer): Uncomment the following lines before running the sample. / // The ID of your GCS bucket // const bucketName = 'your-unique-bucket-name'; // The role to grant // const roleName = 'roles/storage.objectViewer'; // The members to grant the new role to // const members = [ // 'user:jdoe@example.com', // 'group:admins@example.com', // ]; // Create a condition // const title = 'Title'; // const description = 'Description'; // const expression = 'resource.name.startsWith(\"projects/ /buckets/bucket-name/objects/prefix-a-\")'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client const storage = new Storage (); async function addBucketConditionalBinding () { // Get a reference to a Google Cloud Storage bucket const bucket = storage . bucket ( bucketName ); // Gets and updates the bucket's IAM policy const [ policy ] = await bucket . iam . getPolicy ({ requestedPolicyVersion : 3 }); // Set the policy's version to 3 to use condition in bindings. policy . version = 3 ; // Adds the new roles to the bucket's IAM policy policy . bindings . push ({ role : roleName , members : members , condition : { title : title , description : description , expression : expression , }, }); // Updates the bucket's IAM policy await bucket . iam . setPolicy ( policy ); console . log ( Added the following member(s) with role ${ roleName } to ${ bucketName } : ); members . forEach ( member = > { console . log ( ${ member } ); }); console . log ( 'with condition:' ); console . log ( Title: ${ title } ); console . log ( Description: ${ description } ); console . log ( Expression: ${ expression } ); } addBucketConditionalBinding (). catch ( console . error ); PHP For more information, see the Cloud Storage PHP API reference documentation .
- This role contains the following permissions, which are required to set and manage IAM policies for buckets: storage.buckets.get storage.buckets.getIamPolicy storage.buckets.setIamPolicy storage.buckets.update storage.buckets.list This permission is only required if you plan on using the Google Cloud console to perform the tasks on this page.

