---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.939Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Organization policy constraint gcp.restrictNonCmekServices"
feature_slug: "organization-policy-constraint-gcp-restrictnoncmekservices"
latest_feature_date: "2022-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/troubleshooting"
  - "https://docs.cloud.google.com/storage/docs/access-control/iam-roles"
  - "https://docs.cloud.google.com/storage/docs/creating-buckets"
  - "https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys"
keywords:
  - "organization"
  - "policy"
  - "constraint"
  - "gcp"
  - "restrictnoncmekservices"
  - "this"
  - "requires"
  - "selected"
---

# Organization policy constraint gcp.restrictNonCmekServices

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

This organization policy constraint requires selected resources to use customer-managed encryption keys.

## Extended Definition

This organization policy constraint requires selected resources to use customer-managed encryption keys.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)
- [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles)
- [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)
- [https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys](https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys)

## Supporting Pages

### Troubleshooting \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Solution : Check with your security administrator team to see if the bucket to which you're sending requests is being affected by an organization policy that uses a custom constraint.
- For example, the Domain Restricted Sharing constraint ( constraints/iam.allowedPolicyMemberDomains ) restricts resource sharing based on the organization's domain.
- If you continue to see this error after overriding the organization policy, then you might need to wait a few minutes for the change to take effect.
- Solution : Some organization policy constraints can prevent you from making your data public.

### IAM roles for Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Lowest-level resources where you can grant this role: Bucket resourcemanager.projects.get resourcemanager.projects.list storage.folders.get storage.folders.list storage.managedFolders.get storage.managedFolders.list storage.objects.get storage.objects.list Storage Viewer ( roles/ storage.viewer ) Viewer role for storage resourcemanager.projects.get resourcemanager.projects.list storage.buckets.list storage. buckets. listEffectiveTags storage. buckets. listTagBindings storage. buckets. viewIntelligenceDetails storage.folders.get storage.folders.list storage.hmacKeys.get storage.hmacKeys.list storage. intelligenceConfigs. get Storage Annotation Generator Service Beta ( roles/ storage.annotationGeneratorService ) Grants all permissions needed to generate annotations for objects in a bucket. storage.objects.createContext storage.objects.deleteContext storage.objects.get storage.objects.list storage.objects.update storage.objects.updateContext Storage Express Mode Service Input Beta ( roles/ storage.expressModeServiceInput ) Grants permission to Express Mode service accounts at a managed folder so they can create objects but not read them on input folders. storage.objects.create storage.objects.delete storage.objects.list storage.objects.update Storage Express Mode Service Output Beta ( roles/ storage.expressModeServiceOutput ) Grants permission to EasyGCP service accounts at a managed folder so they can read objects but not write them on output folders. storage.objects.delete storage.objects.get storage.objects.list Storage Express Mode User Access Beta ( roles/ storage.expressModeUserAccess ) Grants permission to Express Mode accounts at the project level so they can read, list, create and delete any object in any of their buckets in Express Mode. orgpolicy.policy.get storage.buckets.get storage.buckets.list storage.multipartUploads. storage.multipartUploads.abort storage. multipartUploads. create storage.multipartUploads.list storage. multipartUploads. listParts storage.objects.create storage.objects.delete storage.objects.get storage.objects.list storage.objects.restore storage.objects.update Storage HMAC Key Admin ( roles/ storage.hmacKeyAdmin ) Full control of Cloud Storage HMAC keys. firebase.projects.get orgpolicy.policy.get resourcemanager.projects.get resourcemanager.projects.list storage.hmacKeys. storage.hmacKeys.create storage.hmacKeys.delete storage.hmacKeys.get storage.hmacKeys.list storage.hmacKeys.update Storage Insights Collector Service ( roles/ storage.insightsCollectorService ) Read-only access to Cloud Storage Inventory metadata for Storage Insights. resourcemanager.projects.get resourcemanager.projects.list storage.buckets.get storage. buckets. getObjectInsights Note: Consider the following for permissions: The orgpolicy.policy.get permission allows principals to know the organization policy constraints that a project is subject to.
- Lowest-level resources where you can grant this role: Bucket cloudkms.keyHandles. cloudkms.keyHandles.create cloudkms.keyHandles.get cloudkms.keyHandles.list cloudkms.operations.get cloudkms. projects. showEffectiveAutokeyConfig firebase.projects.get monitoring.timeSeries.create orgpolicy.policy.get recommender. iamPolicyInsights. recommender. iamPolicyInsights. get recommender. iamPolicyInsights. list recommender. iamPolicyInsights. update recommender. iamPolicyRecommendations. recommender. iamPolicyRecommendations. get recommender. iamPolicyRecommendations. list recommender. iamPolicyRecommendations. update recommender. storageBucketSoftDeleteInsights. recommender. storageBucketSoftDeleteInsights. get recommender. storageBucketSoftDeleteInsights. list recommender. storageBucketSoftDeleteInsights. update recommender. storageBucketSoftDeleteRecommendations. recommender. storageBucketSoftDeleteRecommendations. get recommender. storageBucketSoftDeleteRecommendations. list recommender. storageBucketSoftDeleteRecommendations. update resourcemanager. hierarchyNodes. listEffectiveTags resourcemanager.projects.get resourcemanager.projects.list storage.anywhereCaches. storage.anywhereCaches.create storage.anywhereCaches.disable storage.anywhereCaches.get storage.anywhereCaches.list storage.anywhereCaches.pause storage.anywhereCaches.resume storage.anywhereCaches.update storage.bucketOperations. storage. bucketOperations. cancel storage.bucketOperations.get storage.bucketOperations.list storage.buckets. storage.buckets.create storage. buckets. createTagBinding storage.buckets.delete storage. buckets. deleteTagBinding storage. buckets. enableObjectRetention storage.buckets.get storage.buckets.getIamPolicy storage.buckets.getIpFilter storage. buckets. getObjectInsights storage.buckets.list storage. buckets. listEffectiveTags storage. buckets. listTagBindings storage.buckets.relocate storage.buckets.restore storage.buckets.setIamPolicy storage.buckets.setIpFilter storage.buckets.update storage. buckets. viewIntelligenceDetails storage.folders. storage.folders.create storage.folders.delete storage.folders.get storage.folders.list storage.folders.rename storage.intelligenceConfigs. storage. intelligenceConfigs. get storage. intelligenceConfigs. update storage.managedFolders. storage.managedFolders.create storage.managedFolders.delete storage.managedFolders.get storage. managedFolders. getIamPolicy storage.managedFolders.list storage. managedFolders. setIamPolicy storage.multipartUploads. storage.multipartUploads.abort storage. multipartUploads. create storage.multipartUploads.list storage. multipartUploads. listParts storage.objects. storage.objects.create storage.objects.createContext storage.objects.delete storage.objects.deleteContext storage.objects.get storage.objects.getIamPolicy storage.objects.list storage.objects.move storage. objects. overrideUnlockedRetention storage.objects.restore storage.objects.setIamPolicy storage.objects.setRetention storage.objects.update storage.objects.updateContext storagebatchoperations. storagebatchoperations. bucketOperations. get storagebatchoperations. bucketOperations. list storagebatchoperations. jobs. cancel storagebatchoperations. jobs. create storagebatchoperations. jobs. delete storagebatchoperations. jobs. get storagebatchoperations. jobs. list storagebatchoperations. locations. get storagebatchoperations. locations. list storagebatchoperations. operations. cancel storagebatchoperations. operations. delete storagebatchoperations. operations. get storagebatchoperations. operations. list Storage Bucket Viewer Beta ( roles/ storage.bucketViewer ) Grants permission to view buckets and their metadata, excluding IAM policies. storage.buckets.get storage.buckets.list Storage Editor ( roles/ storage.editor ) Editor role for storage resourcemanager.projects.get resourcemanager.projects.list storage.buckets.create storage.buckets.delete storage.buckets.list storage. buckets. listEffectiveTags storage. buckets. listTagBindings storage. buckets. viewIntelligenceDetails storage.folders. storage.folders.create storage.folders.delete storage.folders.get storage.folders.list storage.folders.rename storage.hmacKeys. storage.hmacKeys.create storage.hmacKeys.delete storage.hmacKeys.get storage.hmacKeys.list storage.hmacKeys.update storage. intelligenceConfigs. get Storage Folder Admin ( roles/ storage.folderAdmin ) Grants full control over folders and objects, including listing, creating, viewing, and deleting objects. orgpolicy.policy.get resourcemanager.projects.get resourcemanager.projects.list storage.folders. storage.folders.create storage.folders.delete storage.folders.get storage.folders.list storage.folders.rename storage.managedFolders. storage.managedFolders.create storage.managedFolders.delete storage.managedFolders.get storage. managedFolders. getIamPolicy storage.managedFolders.list storage. managedFolders. setIamPolicy storage.multipartUploads. storage.multipartUploads.abort storage. multipartUploads. create storage.multipartUploads.list storage. multipartUploads. listParts storage.objects. storage.objects.create storage.objects.createContext storage.objects.delete storage.objects.deleteContext storage.objects.get storage.objects.getIamPolicy storage.objects.list storage.objects.move storage. objects. overrideUnlockedRetention storage.objects.restore storage.objects.setIamPolicy storage.objects.setRetention storage.objects.update storage.objects.updateContext Storage Legacy Bucket Owner ( roles/ storage.legacyBucketOwner ) Grants permission to create, overwrite, and delete objects; list objects in a bucket and read object metadata, excluding allow policies, when listing; and read and edit bucket metadata, including allow policies.
- Lowest-level resources where you can grant this role: Bucket storage.anywhereCaches. storage.anywhereCaches.create storage.anywhereCaches.disable storage.anywhereCaches.get storage.anywhereCaches.list storage.anywhereCaches.pause storage.anywhereCaches.resume storage.anywhereCaches.update storage.bucketOperations. storage. bucketOperations. cancel storage.bucketOperations.get storage.bucketOperations.list storage. buckets. createTagBinding storage. buckets. deleteTagBinding storage. buckets. enableObjectRetention storage.buckets.get storage.buckets.getIamPolicy storage.buckets.getIpFilter storage. buckets. listEffectiveTags storage. buckets. listTagBindings storage.buckets.relocate storage.buckets.restore storage.buckets.setIamPolicy storage.buckets.setIpFilter storage.buckets.update storage.folders. storage.folders.create storage.folders.delete storage.folders.get storage.folders.list storage.folders.rename storage.managedFolders. storage.managedFolders.create storage.managedFolders.delete storage.managedFolders.get storage. managedFolders. getIamPolicy storage.managedFolders.list storage. managedFolders. setIamPolicy storage.multipartUploads. storage.multipartUploads.abort storage. multipartUploads. create storage.multipartUploads.list storage. multipartUploads. listParts storage.objects.create storage.objects.createContext storage.objects.delete storage.objects.deleteContext storage.objects.list storage.objects.restore storage.objects.setRetention storage.objects.updateContext Storage Legacy Bucket Reader ( roles/ storage.legacyBucketReader ) Grants permission to list a bucket's contents and read bucket metadata, excluding allow policies.
- Lowest-level resources where you can grant this role: Bucket orgpolicy.policy.get resourcemanager.projects.get resourcemanager.projects.list storage.folders.create storage.managedFolders.create storage.multipartUploads.abort storage. multipartUploads. create storage. multipartUploads. listParts storage.objects.create storage.objects.createContext Storage Object User ( roles/ storage.objectUser ) Access to create, read, update and delete objects and multipart uploads in GCS. monitoring.timeSeries.create orgpolicy.policy.get resourcemanager.projects.get resourcemanager.projects.list storage.folders. storage.folders.create storage.folders.delete storage.folders.get storage.folders.list storage.folders.rename storage.managedFolders.create storage.managedFolders.delete storage.managedFolders.get storage.managedFolders.list storage.multipartUploads. storage.multipartUploads.abort storage. multipartUploads. create storage.multipartUploads.list storage. multipartUploads. listParts storage.objects.create storage.objects.createContext storage.objects.delete storage.objects.deleteContext storage.objects.get storage.objects.list storage.objects.move storage.objects.restore storage.objects.update storage.objects.updateContext Storage Object Viewer ( roles/ storage.objectViewer ) Grants access to view objects and their metadata, excluding ACLs.

### Create a bucket \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Note: If public access prevention is already enforced by your project's organization policy , the Prevent public access checkbox is locked.
- For more information, see Set up authentication for client libraries . / TODO(developer): Uncomment the following lines before running the sample. / // The ID of your GCS bucket // const bucketName = 'your-unique-bucket-name'; // The name of a storage class // See the StorageClass documentation for other valid storage classes: // https://googleapis.dev/java/google-cloud-clients/latest/com/google/cloud/storage/StorageClass.html // const storageClass = 'coldline'; // The name of a location // See this documentation for other valid locations: // http://g.co/cloud/storage/docs/locations#location-mr // const location = 'ASIA'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client // The bucket in the sample below will be created in the project associated with this client. // For more information, please see https://cloud.google.com/docs/authentication/production or https://googleapis.dev/nodejs/storage/latest/Storage.html const storage = new Storage (); async function createBucketWithStorageClassAndLocation () { // For default values see: https://cloud.google.com/storage/docs/locations and // https://cloud.google.com/storage/docs/storage-classes const [ bucket ] = await storage . createBucket ( bucketName , { location , [ storageClass ] : true , }); console . log ( ${ bucket . name } created with ${ storageClass } class in ${ location } ); } createBucketWithStorageClassAndLocation (). catch ( console . error ); PHP For more information, see the Cloud Storage PHP API reference documentation .
- StorageOptions ; public class CreateBucketWithStorageClassAndLocation { public static void createBucketWithStorageClassAndLocation ( String projectId , String bucketName ) { // The ID of your GCP project // String projectId = "your-project-id"; // The ID to give your GCS bucket // String bucketName = "your-unique-bucket-name"; Storage storage = StorageOptions . newBuilder (). setProjectId ( projectId ). build (). getService (); // See the StorageClass documentation for other valid storage classes: // https://googleapis.dev/java/google-cloud-clients/latest/com/google/cloud/storage/StorageClass.html StorageClass storageClass = StorageClass .
- COLDLINE ; // See this documentation for other valid locations: // http://g.co/cloud/storage/docs/bucket-locations#location-mr String location = "ASIA" ; Bucket bucket = storage . create ( BucketInfo . newBuilder ( bucketName ) . setStorageClass ( storageClass ) . setLocation ( location ) . build ()); System . out . println ( "Created bucket " + bucket . getName () + " in " + bucket . getLocation () + " with storage class " + bucket . getStorageClass ()); } } Node.js For more information, see the Cloud Storage Node.js API reference documentation .

### "Manage HMAC keys for service accounts \_|\_ Cloud Storage \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys](https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys)
- Source ID: `site-iam-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Make sure the following organization policy constraints are disabled: constraints/storage.restrictAuthTypes (must be disabled for HMAC key authentication) constraints/iam.disableServiceAccountKeyCreation See Creating and managing organization policies for instructions on how to check and disable constraints.
- Before you begin Before using this feature in Cloud Storage, you must meet the following requirements: Have sufficient permission to work with HMAC keys in the selected project: If you own the project, you most likely have the necessary permissions.
- UpdateHmacKey ( access id , gcs :: HmacKeyMetadata (). set state ( gcs :: HmacKeyMetadata :: state inactive ())); if ( ! updated ) throw std :: move ( updated ). status (); if ( updated - > state () != gcs :: HmacKeyMetadata :: state inactive ()) { throw std :: runtime error ( "The HMAC key is active, this is unexpected" ); } std :: cout << "The HMAC key is now inactive \n Full metadata: " << updated << " \n " ; } The following sample activates an HMAC key: namespace gcs = :: google :: cloud :: storage ; using :: google :: cloud :: StatusOr ; []( gcs :: Client client , std :: string const & access id ) { StatusOr<gcs :: HmacKeyMetadata > updated = client .
- UpdateHmacKey ( access id , gcs :: HmacKeyMetadata (). set state ( gcs :: HmacKeyMetadata :: state active ())); if ( ! updated ) throw std :: move ( updated ). status (); if ( updated - > state () != gcs :: HmacKeyMetadata :: state active ()) { throw std :: runtime error ( "The HMAC key is NOT active, this is unexpected" ); } std :: cout << "The HMAC key is now active \n Full metadata: " << updated << " \n " ; } C# For more information, see the Cloud Storage C# API reference documentation .

