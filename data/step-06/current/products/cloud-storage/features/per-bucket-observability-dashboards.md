---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.768Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Per-bucket observability dashboards"
feature_slug: "per-bucket-observability-dashboards"
latest_feature_date: "2022-11-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/workspace/drive/api/guides/long-running-operations"
  - "https://docs.cloud.google.com/storage/docs/bandwidth-usage"
  - "https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions"
keywords:
  - "per"
  - "bucket"
  - "observability"
  - "dashboards"
  - "are"
  - "available"
  - "in"
  - "an"
---

# Per-bucket observability dashboards

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

Per-bucket dashboards are available in an Observability tab within each bucket's details page.

## Extended Definition

Per-bucket dashboards are available in an Observability tab within each bucket's details page.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/workspace/drive/api/guides/long-running-operations](https://developers.google.com/workspace/drive/api/guides/long-running-operations)
- [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)
- [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions)

## Supporting Pages

### Manage long-running operations \_|\_ Google Drive \_|\_ Google for Developers

- URL: [https://developers.google.com/workspace/drive/api/guides/long-running-operations](https://developers.google.com/workspace/drive/api/guides/long-running-operations)
- Source ID: `site-docs-root-2`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- You can check the active account by running gcloud auth list . curl -i -H \ 'Authorization: Bearer $(gcloud auth print-access-token)" \ 'https://googleapis.com/drive/v3/operations/ NAME ?alt=json' Replace NAME with the operation's server-assigned name as shown in the response to the download method request.
- Get the details about a long-running operation Long-running operations are method calls that might take a substantial amount of time to complete.
- Poll a long-running operation To poll an available LRO, repeatedly call the get method until the operation finishes.
- An LRO remains available for a minimum of 12 hours but in some cases can persist longer.

### "Overview of bandwidth and storage usage in Cloud Storage \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/bandwidth-usage](https://docs.cloud.google.com/storage/docs/bandwidth-usage)
- Source ID: `site-iam-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Bandwidth monitoring metrics The following bandwidth usage data is available for monitoring: Google egress bandwidth per second per region: monitors Google egress bandwidth usage for buckets in your project that are located in regions.
- Go to Browser In the Filter search bar, select the Metric property, then search for the metric for which you are requesting an increase: Use storage.googleapis.com/google egress bandwidth to increase Google egress for your buckets located in regions.
- Go to Browser In the Filter search bar, select the Metric property, then search for the metric for which you are requesting an increase: Use storage.googleapis.com/rapid zonal bytes to increase storage for your buckets located in zones.
- Dual-region internet egress bandwidth per second per region per dual-region location: monitors Internet egress bandwidth usage for buckets in your project that are located in dual-regions.

### "Set and manage IAM policies on buckets \_|\_ Cloud Storage \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions)
- Source ID: `site-iam-reference`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This role contains the following permissions, which are required to set and manage IAM policies for buckets: storage.buckets.get storage.buckets.getIamPolicy storage.buckets.setIamPolicy storage.buckets.update storage.buckets.list This permission is only required if you plan on using the Google Cloud console to perform the tasks on this page.
- For more information, see Set up authentication for client libraries . / TODO(developer): Uncomment the following lines before running the sample. / // The ID of your GCS bucket // const bucketName = 'your-unique-bucket-name'; // The role to grant // const roleName = 'roles/storage.objectViewer'; // The members to grant the new role to // const members = [ // 'user:jdoe@example.com', // 'group:admins@example.com', // ]; // Create a condition // const title = 'Title'; // const description = 'Description'; // const expression = 'resource.name.startsWith(\"projects/ /buckets/bucket-name/objects/prefix-a-\")'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client const storage = new Storage (); async function removeBucketConditionalBinding () { // Get a reference to a Google Cloud Storage bucket const bucket = storage . bucket ( bucketName ); // Gets and updates the bucket's IAM policy const [ policy ] = await bucket . iam . getPolicy ({ requestedPolicyVersion : 3 }); // Set the policy's version to 3 to use condition in bindings. policy . version = 3 ; // Finds and removes the appropriate role-member group with specific condition. const index = policy . bindings . findIndex ( binding = > binding . role === roleName && binding . condition && binding . condition . title === title && binding . condition . description === description && binding . condition . expression === expression ); const binding = policy . bindings [ index ]; if ( binding ) { policy . bindings . splice ( index , 1 ); // Updates the bucket's IAM policy await bucket . iam . setPolicy ( policy ); console . log ( 'Conditional Binding was removed.' ); } else { // No matching role-member group with specific condition were found throw new Error ( 'No matching binding group found.' ); } } removeBucketConditionalBinding (). catch ( console . error ); PHP For more information, see the Cloud Storage PHP API reference documentation .
- For more information, see Set up authentication for client libraries . / TODO(developer): Uncomment the following lines before running the sample. / // The ID of your GCS bucket // const bucketName = 'your-unique-bucket-name'; // The role to revoke // const roleName = 'roles/storage.objectViewer'; // The members to revoke the roles from // const members = [ // 'user:jdoe@example.com', // 'group:admins@example.com', // ]; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client const storage = new Storage (); async function removeBucketIamMember () { // Get a reference to a Google Cloud Storage bucket const bucket = storage . bucket ( bucketName ); // For more information please read: // https://cloud.google.com/storage/docs/access-control/iam const [ policy ] = await bucket . iam . getPolicy ({ requestedPolicyVersion : 3 }); // Finds and updates the appropriate role-member group, without a condition. const index = policy . bindings . findIndex ( binding = > binding . role === roleName && ! binding . condition ); const role = policy . bindings [ index ]; if ( role ) { role . members = role . members . filter ( member = > members . indexOf ( member ) === - 1 ); // Updates the policy object with the new (or empty) role-member group if ( role . members . length === 0 ) { policy . bindings . splice ( index , 1 ); } else { policy . bindings . index = role ; } // Updates the bucket's IAM policy await bucket . iam . setPolicy ( policy ); } else { // No matching role-member group(s) were found throw new Error ( 'No matching role-member group(s) found.' ); } console . log ( Removed the following member(s) with role ${ roleName } from ${ bucketName } : ); members . forEach ( member = > { console . log ( ${ member } ); }); } removeBucketIamMember (). catch ( console . error ); PHP For more information, see the Cloud Storage PHP API reference documentation .
- For more information, see Set up authentication for client libraries . / TODO(developer): Uncomment the following lines before running the sample. / // The ID of your GCS bucket // const bucketName = 'your-unique-bucket-name'; // The role to grant // const roleName = 'roles/storage.objectViewer'; // The members to grant the new role to // const members = [ // 'user:jdoe@example.com', // 'group:admins@example.com', // ]; // Create a condition // const title = 'Title'; // const description = 'Description'; // const expression = 'resource.name.startsWith(\"projects/ /buckets/bucket-name/objects/prefix-a-\")'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client const storage = new Storage (); async function addBucketConditionalBinding () { // Get a reference to a Google Cloud Storage bucket const bucket = storage . bucket ( bucketName ); // Gets and updates the bucket's IAM policy const [ policy ] = await bucket . iam . getPolicy ({ requestedPolicyVersion : 3 }); // Set the policy's version to 3 to use condition in bindings. policy . version = 3 ; // Adds the new roles to the bucket's IAM policy policy . bindings . push ({ role : roleName , members : members , condition : { title : title , description : description , expression : expression , }, }); // Updates the bucket's IAM policy await bucket . iam . setPolicy ( policy ); console . log ( Added the following member(s) with role ${ roleName } to ${ bucketName } : ); members . forEach ( member = > { console . log ( ${ member } ); }); console . log ( 'with condition:' ); console . log ( Title: ${ title } ); console . log ( Description: ${ description } ); console . log ( Expression: ${ expression } ); } addBucketConditionalBinding (). catch ( console . error ); PHP For more information, see the Cloud Storage PHP API reference documentation .

