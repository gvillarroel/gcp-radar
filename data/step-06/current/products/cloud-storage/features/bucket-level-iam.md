---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.886Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Bucket-level IAM"
feature_slug: "bucket-level-iam"
latest_feature_date: "2016-09-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions"
  - "https://docs.cloud.google.com/storage/docs/access-control/iam"
  - "https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud"
keywords:
  - "bucket"
  - "level"
  - "iam"
  - "allows"
  - "permissions"
  - "to"
  - "be"
  - "applied"
---

# Bucket-level IAM

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

Bucket-level IAM allows IAM permissions to be applied directly to individual Cloud Storage buckets.

## Extended Definition

Bucket-level IAM allows IAM permissions to be applied directly to individual Cloud Storage buckets.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions)
- [https://docs.cloud.google.com/storage/docs/access-control/iam](https://docs.cloud.google.com/storage/docs/access-control/iam)
- [https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud](https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud)

## Supporting Pages

### "Set and manage IAM policies on buckets \_|\_ Cloud Storage \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions)
- Source ID: `site-iam-reference`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For more information, see Set up authentication for client libraries . using Google.Apis.Storage.v1.Data ; using Google.Cloud.Storage.V1 ; using System ; using System.Collections.Generic ; public class AddBucketConditionalIamBindingSample { /// <summary> /// Adds a conditional Iam policy to a bucket. /// </summary> /// <param name="bucketName">The name of the bucket.</param> /// <param name="role">The role that members may assume.</param> /// <param name="member">The identifier of the member who may assume the provided role.</param> /// <param name="title">Title for the expression.</param> /// <param name="description">Description of the expression.</param> /// <param name="expression">Describes the conditions that need to be met for the policy to be applied. /// It's represented as a string using Common Expression Language syntax.</param> public Policy AddBucketConditionalIamBinding ( string bucketName = "your-unique-bucket-name" , string role = "roles/storage.objectViewer" , string member = "serviceAccount:dev@iam.gserviceaccount.com" , string title = "title" , string description = "description" , string expression = "resource.name.startsWith(\"projects/ /buckets/bucket-name/objects/prefix-a-\")" ) { var storage = StorageClient .
- StorageOptions ; import java.util.ArrayList ; import java.util.Arrays ; import java.util.List ; public class AddBucketIamMember { / Example of adding a member to the Bucket-level IAM / public static void addBucketIamMember ( String projectId , String bucketName ) { // The ID of your GCP project // String projectId = "your-project-id"; // The ID of your GCS bucket // String bucketName = "your-unique-bucket-name"; // For more information please read: // https://cloud.google.com/storage/docs/access-control/iam Storage storage = StorageOptions . newBuilder (). setProjectId ( projectId ). build (). getService (); Policy originalPolicy = storage . getIamPolicy ( bucketName , Storage .
- For more information, see Set up authentication for client libraries . / TODO(developer): Uncomment the following lines before running the sample. / // The ID of your GCS bucket // const bucketName = 'your-unique-bucket-name'; // The role to grant // const roleName = 'roles/storage.objectViewer'; // The members to grant the new role to // const members = [ // 'user:jdoe@example.com', // 'group:admins@example.com', // ]; // Create a condition // const title = 'Title'; // const description = 'Description'; // const expression = 'resource.name.startsWith(\"projects/ /buckets/bucket-name/objects/prefix-a-\")'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client const storage = new Storage (); async function removeBucketConditionalBinding () { // Get a reference to a Google Cloud Storage bucket const bucket = storage . bucket ( bucketName ); // Gets and updates the bucket's IAM policy const [ policy ] = await bucket . iam . getPolicy ({ requestedPolicyVersion : 3 }); // Set the policy's version to 3 to use condition in bindings. policy . version = 3 ; // Finds and removes the appropriate role-member group with specific condition. const index = policy . bindings . findIndex ( binding = > binding . role === roleName && binding . condition && binding . condition . title === title && binding . condition . description === description && binding . condition . expression === expression ); const binding = policy . bindings [ index ]; if ( binding ) { policy . bindings . splice ( index , 1 ); // Updates the bucket's IAM policy await bucket . iam . setPolicy ( policy ); console . log ( 'Conditional Binding was removed.' ); } else { // No matching role-member group with specific condition were found throw new Error ( 'No matching binding group found.' ); } } removeBucketConditionalBinding (). catch ( console . error ); PHP For more information, see the Cloud Storage PHP API reference documentation .
- For more information, see Set up authentication for client libraries . / TODO(developer): Uncomment the following lines before running the sample. / // The ID of your GCS bucket // const bucketName = 'your-unique-bucket-name'; // The role to revoke // const roleName = 'roles/storage.objectViewer'; // The members to revoke the roles from // const members = [ // 'user:jdoe@example.com', // 'group:admins@example.com', // ]; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client const storage = new Storage (); async function removeBucketIamMember () { // Get a reference to a Google Cloud Storage bucket const bucket = storage . bucket ( bucketName ); // For more information please read: // https://cloud.google.com/storage/docs/access-control/iam const [ policy ] = await bucket . iam . getPolicy ({ requestedPolicyVersion : 3 }); // Finds and updates the appropriate role-member group, without a condition. const index = policy . bindings . findIndex ( binding = > binding . role === roleName && ! binding . condition ); const role = policy . bindings [ index ]; if ( role ) { role . members = role . members . filter ( member = > members . indexOf ( member ) === - 1 ); // Updates the policy object with the new (or empty) role-member group if ( role . members . length === 0 ) { policy . bindings . splice ( index , 1 ); } else { policy . bindings . index = role ; } // Updates the bucket's IAM policy await bucket . iam . setPolicy ( policy ); } else { // No matching role-member group(s) were found throw new Error ( 'No matching role-member group(s) found.' ); } console . log ( Removed the following member(s) with role ${ roleName } from ${ bucketName } : ); members . forEach ( member = > { console . log ( ${ member } ); }); } removeBucketIamMember (). catch ( console . error ); PHP For more information, see the Cloud Storage PHP API reference documentation .

### Identity and Access Management \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-control/iam](https://docs.cloud.google.com/storage/docs/access-control/iam)
- Source ID: `site-iam-reference`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you view the IAM policy for an individual bucket using the Google Cloud console , you do see project-level permissions that apply to that bucket; however, other Cloud Storage tools, such as gcloud storage and the Client Libraries only return the policy of the bucket and don't include information inherited from the project-level policy.
- Convenience values Cloud Storage supports convenience values , which are a special set of principals that can be applied specifically to your IAM bucket policies.
- The IAM roles that allow you to control IAM deny policies can only be applied at the organization level.
- Legacy Bucket role Equivalent ACL Storage Legacy Bucket Reader ( roles/storage.legacyBucketReader ) Bucket Reader Storage Legacy Bucket Writer ( roles/storage.legacyBucketWriter ) Bucket Writer Storage Legacy Bucket Owner ( roles/storage.legacyBucketOwner ) Bucket Owner All other bucket-level IAM roles, including Legacy Object IAM roles, work independently from ACLs.

### "IAM permissions for gcloud storage commands \_|\_ Cloud Storage \_|\_ Google\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud](https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud)
- Source ID: `site-docs-reference`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Command Flag Required IAM Permissions batch-operations jobs create storagebatchoperations.jobs.create batch-operations jobs cancel storagebatchoperations.jobs.cancel batch-operations jobs delete storagebatchoperations.jobs.delete batch-operations jobs get storagebatchoperations.jobs.get batch-operations jobs list storagebatchoperations.jobs.list buckets add-iam-policy-binding storage.buckets.get storage.buckets.getIamPolicy storage.buckets.setIamPolicy storage.buckets.update buckets anywhere-caches create storage.anywhereCaches.create buckets anywhere-caches describe storage.anywhereCaches.get buckets anywhere-caches list storage.anywhereCaches.list buckets anywhere-caches update storage.anywhereCaches.update buckets anywhere-caches pause storage.anywhereCaches.pause buckets anywhere-caches resume storage.anywhereCaches.resume buckets anywhere-caches disable storage.anywhereCaches.disable buckets create storage.buckets.create storage.buckets.setIpFilter 15 buckets delete storage.buckets.delete buckets describe storage.buckets.get storage.buckets.getIamPolicy 1 storage.buckets.getIpFilter 16 buckets get-iam-policy storage.buckets.get storage.buckets.getIamPolicy buckets list storage.buckets.list storage.buckets.getIamPolicy 1 buckets notifications create storage.buckets.get storage.buckets.update pubsub.topics.get (for the project containing the Pub/Sub topic) pubsub.topics.create 3 (for the project containing the Pub/Sub topic) pubsub.topics.getIamPolicy (for Pub/Sub topic receiving notifications) pubsub.topics.setIamPolicy 3 (for Pub/Sub topic receiving notifications) buckets notifications create --skip-topic-setup storage.buckets.get storage.buckets.update buckets notifications delete storage.buckets.get storage.buckets.update buckets notifications describe storage.buckets.get buckets notifications list storage.buckets.get buckets relocate storage.buckets.relocate buckets remove-iam-policy-binding storage.buckets.get storage.buckets.getIamPolicy storage.buckets.setIamPolicy storage.buckets.update buckets set-iam-policy storage.buckets.setIamPolicy storage.buckets.update buckets update storage.buckets.update storage.buckets.setIpFilter 15 buckets update --no-requester-pays storage.buckets.update resourcemanager.projects.createBillingAssignment 2 buckets update --recovery-point-objective --rpo --[no-]uniform-bucket-level-access storage.buckets.get storage.buckets.update buckets update --clear-pap --clear-public-access-prevention --[no-]pap --[no-]public-access-prevention storage.buckets.get storage.buckets.update storage.buckets.setIamPolicy cat storage.objects.get storage.objects.list 13 cp storage.objects.get (for the source objects) storage.objects.create (for the destination bucket) storage.objects.list 4 (for the destination bucket) storage.objects.delete 5 (for the destination bucket) storage.buckets.get 12 (for the destination bucket) du storage.objects.list folders create storage.folders.create folders delete storage.folders.delete folders describe storage.folders.get folders list storage.folders.list folders rename storage.folders.rename (for the source bucket) storage.folders.create (for the destination bucket) hash storage.objects.get hmac create storage.hmacKeys.create hmac delete storage.hmacKeys.delete hmac describe storage.hmacKeys.get hmac list storage.hmacKeys.list hmac update storage.hmacKeys.update insights dataset-configs create storageinsights.datasetConfigs.create insights dataset-configs create-link storageinsights.datasetConfigs.linkDataset insights dataset-configs delete storageinsights.datasetConfigs.delete insights dataset-configs delete-link storageinsights.datasetConfigs.unlinkDataset insights dataset-configs describe storageinsights.datasetConfigs.get insights dataset-configs list storageinsights.datasetConfigs.list insights dataset-configs update storageinsights.datasetConfigs.update insights inventory-reports create storageinsights.reportConfigs.create insights inventory-reports delete storageinsights.reportConfigs.delete insights inventory-reports details list storageinsights.reportDetails.list insights inventory-reports details describe storageinsights.reportDetails.get insights inventory-reports list storageinsights.reportConfigs.list insights inventory-reports update storageinsights.reportConfigs.get storageinsights.reportConfigs.update ls (for bucket listing) storage.buckets.list storage.buckets.getIamPolicy 6 ls (for object listing) storage.objects.get 7 storage.objects.list storage.objects.getIamPolicy 8 ls --buckets storage.buckets.get storage.buckets.getIamPolicy 6 storage intelligence-config enable storage.intelligenceConfigs.update storage-intelligence disable storage.intelligenceConfigs.update storage-intelligence describe storage.intelligenceConfigs.get storage-intelligence update storage.intelligenceConfigs.update mv storage.objects.get (for the source objects) storage.objects.delete (for the source bucket) storage.objects.create (for the destination bucket) storage.objects.list 4 (for the destination bucket) storage.objects.delete 5 (for the destination bucket) storage.buckets.get 12 (for the destination bucket) objects compose storage.objects.get storage.objects.create storage.objects.delete 9 objects describe storage.objects.get storage.objects.getIamPolicy 8 objects list storage.objects.list storage.objects.getIamPolicy 8 objects update storage.objects.get storage.objects.list storage.objects.update objects update --storage-class --encryption-key --clear-encryption-key storage.objects.get storage.objects.list storage.objects.create storage.objects.delete objects update --retention-mode --retain-until --clear-retention storage.objects.get storage.objects.list storage.objects.update storage.objects.setRetention storage.objects.overrideUnlockedRetention 11 operations cancel storage.bucketOperations.cancel operations describe storage.bucketOperations.get operations list storage.bucketOperations.list restore storage.objects.create storage.objects.delete 9 storage.objects.restore restore --async storage.objects.create storage.objects.delete 14 storage.objects.restore storage.buckets.restore rm storage.buckets.delete storage.objects.delete storage.objects.list rsync storage.objects.list (for the source bucket) storage.objects.get (for the source objects) storage.objects.list (for the destination bucket) storage.objects.get (for the destination bucket) storage.objects.create (for the destination bucket) storage.objects.delete 10 (for the destination bucket) storage.buckets.get 12 (for the destination bucket) rsync --dry-run storage.objects.list (for the source and destination buckets) service-agent resourceManager.projects.get sign-url None; however, the service account whose key is used as part of this command must have permission to perform the request being encoded into the signed URL.
- 8 This permission is only required if you want IAM policies included in the details, and it does not apply to buckets with uniform bucket-level access enabled.
- The --billing-project top-level flag If you use the --billing-project global flag to specify a project that should be billed for your request, you must have serviceusage.services.use permission for the project you specify.
- Home Documentation Storage Cloud Storage Reference Send feedback IAM permissions for gcloud storage commands Stay organized with collections Save and categorize content based on your preferences.

