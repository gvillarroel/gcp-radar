---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.908Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Managed folders in Cloud Console"
feature_slug: "managed-folders-in-cloud-console"
latest_feature_date: "2024-04-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders"
  - "https://docs.cloud.google.com/storage/docs/troubleshooting"
  - "https://docs.cloud.google.com/storage/docs/access-control/making-data-public"
  - "https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions"
keywords:
  - "managed"
  - "folders"
  - "in"
  - "console"
  - "can"
  - "be"
  - "created"
  - "listed"
---

# Managed folders in Cloud Console

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Managed folders can be created, listed, moved, deleted, and assigned IAM policies in the Google Cloud Console.

## Extended Definition

Managed folders can be created, listed, moved, deleted, and assigned IAM policies in the Google Cloud Console.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders](https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders)
- [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)
- [https://docs.cloud.google.com/storage/docs/access-control/making-data-public](https://docs.cloud.google.com/storage/docs/access-control/making-data-public)
- [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions)

## Supporting Pages

### "Set and manage IAM policies on managed folders \_|\_ Cloud Storage \_|\_\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders](https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders)
- Source ID: `site-iam-reference`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use cURL to call the JSON API with a PUT setIamPolicy request: curl -X PUT --data-binary @ POLICY FILE \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://storage.googleapis.com/storage/v1/b/ BUCKET NAME /managedFolders/ MANAGED FOLDER NAME /iam" Where: POLICY FILE is the path to the JSON policy file that you created in the previous step.
- Use cURL to call the JSON API with a PUT setIamPolicy request: curl -X PUT --data-binary @ JSON FILE NAME \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://storage.googleapis.com/storage/v1/b/ BUCKET NAME /managedFolders/ MANAGED FOLDER NAME /iam" Where: JSON FILE NAME is the path for the file that you created in Step 3.
- This page describes how to set Identity and Access Management (IAM) policies on managed folders , so you can get fine-grained access control over specific groups of objects within a bucket.
- Edit the tmp-policy.json file in a text editor to add new conditions to the bindings in the IAM policy: { "version": VERSION , "bindings": [ { "role": " IAM ROLE ", "members": [ " PRINCIPAL IDENTIFIER " ], "condition": { "title": " TITLE ", "description": " DESCRIPTION ", "expression": " EXPRESSION " } } ], "etag": " ETAG " } Where: VERSION is the IAM policy version , which is required to be 3 for managed folders with IAM Conditions.

### Troubleshooting \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If any bucket within a project has an IAM Condition that uses either of these resource types, managed folders can't be created in any of the buckets within that project, even if the condition is later removed.
- Solution : Uniform bucket-level access can't be disabled if there are managed folders in the bucket.
- Issue : I can't disable uniform bucket-level access because there are managed folders in my bucket.
- Simulated folders and managed folders Issue : I deleted some objects in my bucket, and now the folder that contained them doesn't appear in the Google Cloud console.

### Make data public \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-control/making-data-public](https://docs.cloud.google.com/storage/docs/access-control/making-data-public)
- Source ID: `site-iam-reference`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a JSON file that contains the following information: { "bindings" :[ { "role" : "roles/storage.objectViewer" , "members" :[ "allUsers" ] } ] } Use cURL to call the JSON API with a setIamPolicy ManagedFolder request: curl -X PUT --data-binary @ JSON FILE NAME \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://storage.googleapis.com/storage/v1/b/ BUCKET NAME /managedFolders/ MANAGED FOLDER NAME /iam" Where: JSON FILE NAME is the path for the file that you created in the previous step.
- Use cURL to call the JSON API with a Insert ManagedFolder request: curl -X POST --data-binary @ JSON FILE NAME \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://storage.googleapis.com/storage/v1/b/ BUCKET NAME /managedFolders" Where: JSON FILE NAME is the path for the file that you created in the previous step.
- In your development environment, add allUsers to the managed folder's IAM policy using the gcloud storage managed-folders add-iam-policy-binding command : gcloud storage managed-folders add-iam-policy-binding gs:// BUCKET NAME / MANAGED FOLDER NAME --member=allUsers --role=roles/storage.objectViewer Where: BUCKET NAME is the name of the bucket containing the managed folder you're adding the IAM policy to.
- For more information, see Set up authentication for client libraries . / TODO(developer): Uncomment the following lines before running the sample. / // The ID of your GCS bucket // const bucketName = 'your-unique-bucket-name'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client const storage = new Storage (); async function makeBucketPublic () { await storage . bucket ( bucketName ). makePublic (); console . log ( Bucket ${ bucketName } is now publicly readable ); } makeBucketPublic (). catch ( console . error ); PHP For more information, see the Cloud Storage PHP API reference documentation .

### "Set and manage IAM policies on buckets \_|\_ Cloud Storage \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions)
- Source ID: `site-iam-reference`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- Overview This page describes how to set Identity and Access Management (IAM) policies on buckets, so you can control access to objects and managed folders within those buckets.
- Note: IAM policies cannot be managed using the XML API.
- For more information, see Set up authentication for client libraries . / TODO(developer): Uncomment the following lines before running the sample. / // The ID of your GCS bucket // const bucketName = 'your-unique-bucket-name'; // The role to grant // const roleName = 'roles/storage.objectViewer'; // The members to grant the new role to // const members = [ // 'user:jdoe@example.com', // 'group:admins@example.com', // ]; // Create a condition // const title = 'Title'; // const description = 'Description'; // const expression = 'resource.name.startsWith(\"projects/ /buckets/bucket-name/objects/prefix-a-\")'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client const storage = new Storage (); async function removeBucketConditionalBinding () { // Get a reference to a Google Cloud Storage bucket const bucket = storage . bucket ( bucketName ); // Gets and updates the bucket's IAM policy const [ policy ] = await bucket . iam . getPolicy ({ requestedPolicyVersion : 3 }); // Set the policy's version to 3 to use condition in bindings. policy . version = 3 ; // Finds and removes the appropriate role-member group with specific condition. const index = policy . bindings . findIndex ( binding = > binding . role === roleName && binding . condition && binding . condition . title === title && binding . condition . description === description && binding . condition . expression === expression ); const binding = policy . bindings [ index ]; if ( binding ) { policy . bindings . splice ( index , 1 ); // Updates the bucket's IAM policy await bucket . iam . setPolicy ( policy ); console . log ( 'Conditional Binding was removed.' ); } else { // No matching role-member group with specific condition were found throw new Error ( 'No matching binding group found.' ); } } removeBucketConditionalBinding (). catch ( console . error ); PHP For more information, see the Cloud Storage PHP API reference documentation .
- For more information, see Set up authentication for client libraries . / TODO(developer): Uncomment the following lines before running the sample. / // The ID of your GCS bucket // const bucketName = 'your-unique-bucket-name'; // The role to revoke // const roleName = 'roles/storage.objectViewer'; // The members to revoke the roles from // const members = [ // 'user:jdoe@example.com', // 'group:admins@example.com', // ]; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client const storage = new Storage (); async function removeBucketIamMember () { // Get a reference to a Google Cloud Storage bucket const bucket = storage . bucket ( bucketName ); // For more information please read: // https://cloud.google.com/storage/docs/access-control/iam const [ policy ] = await bucket . iam . getPolicy ({ requestedPolicyVersion : 3 }); // Finds and updates the appropriate role-member group, without a condition. const index = policy . bindings . findIndex ( binding = > binding . role === roleName && ! binding . condition ); const role = policy . bindings [ index ]; if ( role ) { role . members = role . members . filter ( member = > members . indexOf ( member ) === - 1 ); // Updates the policy object with the new (or empty) role-member group if ( role . members . length === 0 ) { policy . bindings . splice ( index , 1 ); } else { policy . bindings . index = role ; } // Updates the bucket's IAM policy await bucket . iam . setPolicy ( policy ); } else { // No matching role-member group(s) were found throw new Error ( 'No matching role-member group(s) found.' ); } console . log ( Removed the following member(s) with role ${ roleName } from ${ bucketName } : ); members . forEach ( member = > { console . log ( ${ member } ); }); } removeBucketIamMember (). catch ( console . error ); PHP For more information, see the Cloud Storage PHP API reference documentation .

