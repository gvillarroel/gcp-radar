---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.739Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Storage Object User IAM role"
feature_slug: "storage-object-user-iam-role"
latest_feature_date: "2023-08-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/access-control/iam-roles"
  - "https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud"
  - "https://docs.cloud.google.com/storage/docs/discover-object-storage-console"
keywords:
  - "storage"
  - "object"
  - "user"
  - "iam"
  - "role"
  - "the"
  - "grants"
  - "and"
---

# Storage Object User IAM role

Product: Cloud Storage
Coverage: LOW

## Step 02 Summary

The Storage Object User role grants object and metadata access without granting access to object ACLs.

## Extended Definition

The Storage Object User role grants object and metadata access without granting access to object ACLs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles)
- [https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud](https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud)
- [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console)

## Supporting Pages

### IAM roles for Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles)
- Source ID: `site-docs-reference`
- Final score: 238
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Lowest-level resources where you can grant this role: Bucket cloudkms.keyHandles. cloudkms.keyHandles.create cloudkms.keyHandles.get cloudkms.keyHandles.list cloudkms.operations.get cloudkms. projects. showEffectiveAutokeyConfig firebase.projects.get monitoring.timeSeries.create orgpolicy.policy.get recommender. iamPolicyInsights. recommender. iamPolicyInsights. get recommender. iamPolicyInsights. list recommender. iamPolicyInsights. update recommender. iamPolicyRecommendations. recommender. iamPolicyRecommendations. get recommender. iamPolicyRecommendations. list recommender. iamPolicyRecommendations. update recommender. storageBucketSoftDeleteInsights. recommender. storageBucketSoftDeleteInsights. get recommender. storageBucketSoftDeleteInsights. list recommender. storageBucketSoftDeleteInsights. update recommender. storageBucketSoftDeleteRecommendations. recommender. storageBucketSoftDeleteRecommendations. get recommender. storageBucketSoftDeleteRecommendations. list recommender. storageBucketSoftDeleteRecommendations. update resourcemanager. hierarchyNodes. listEffectiveTags resourcemanager.projects.get resourcemanager.projects.list storage.anywhereCaches. storage.anywhereCaches.create storage.anywhereCaches.disable storage.anywhereCaches.get storage.anywhereCaches.list storage.anywhereCaches.pause storage.anywhereCaches.resume storage.anywhereCaches.update storage.bucketOperations. storage. bucketOperations. cancel storage.bucketOperations.get storage.bucketOperations.list storage.buckets. storage.buckets.create storage. buckets. createTagBinding storage.buckets.delete storage. buckets. deleteTagBinding storage. buckets. enableObjectRetention storage.buckets.get storage.buckets.getIamPolicy storage.buckets.getIpFilter storage. buckets. getObjectInsights storage.buckets.list storage. buckets. listEffectiveTags storage. buckets. listTagBindings storage.buckets.relocate storage.buckets.restore storage.buckets.setIamPolicy storage.buckets.setIpFilter storage.buckets.update storage. buckets. viewIntelligenceDetails storage.folders. storage.folders.create storage.folders.delete storage.folders.get storage.folders.list storage.folders.rename storage.intelligenceConfigs. storage. intelligenceConfigs. get storage. intelligenceConfigs. update storage.managedFolders. storage.managedFolders.create storage.managedFolders.delete storage.managedFolders.get storage. managedFolders. getIamPolicy storage.managedFolders.list storage. managedFolders. setIamPolicy storage.multipartUploads. storage.multipartUploads.abort storage. multipartUploads. create storage.multipartUploads.list storage. multipartUploads. listParts storage.objects. storage.objects.create storage.objects.createContext storage.objects.delete storage.objects.deleteContext storage.objects.get storage.objects.getIamPolicy storage.objects.list storage.objects.move storage. objects. overrideUnlockedRetention storage.objects.restore storage.objects.setIamPolicy storage.objects.setRetention storage.objects.update storage.objects.updateContext storagebatchoperations. storagebatchoperations. bucketOperations. get storagebatchoperations. bucketOperations. list storagebatchoperations. jobs. cancel storagebatchoperations. jobs. create storagebatchoperations. jobs. delete storagebatchoperations. jobs. get storagebatchoperations. jobs. list storagebatchoperations. locations. get storagebatchoperations. locations. list storagebatchoperations. operations. cancel storagebatchoperations. operations. delete storagebatchoperations. operations. get storagebatchoperations. operations. list Storage Bucket Viewer Beta ( roles/ storage.bucketViewer ) Grants permission to view buckets and their metadata, excluding IAM policies. storage.buckets.get storage.buckets.list Storage Editor ( roles/ storage.editor ) Editor role for storage resourcemanager.projects.get resourcemanager.projects.list storage.buckets.create storage.buckets.delete storage.buckets.list storage. buckets. listEffectiveTags storage. buckets. listTagBindings storage. buckets. viewIntelligenceDetails storage.folders. storage.folders.create storage.folders.delete storage.folders.get storage.folders.list storage.folders.rename storage.hmacKeys. storage.hmacKeys.create storage.hmacKeys.delete storage.hmacKeys.get storage.hmacKeys.list storage.hmacKeys.update storage. intelligenceConfigs. get Storage Folder Admin ( roles/ storage.folderAdmin ) Grants full control over folders and objects, including listing, creating, viewing, and deleting objects. orgpolicy.policy.get resourcemanager.projects.get resourcemanager.projects.list storage.folders. storage.folders.create storage.folders.delete storage.folders.get storage.folders.list storage.folders.rename storage.managedFolders. storage.managedFolders.create storage.managedFolders.delete storage.managedFolders.get storage. managedFolders. getIamPolicy storage.managedFolders.list storage. managedFolders. setIamPolicy storage.multipartUploads. storage.multipartUploads.abort storage. multipartUploads. create storage.multipartUploads.list storage. multipartUploads. listParts storage.objects. storage.objects.create storage.objects.createContext storage.objects.delete storage.objects.deleteContext storage.objects.get storage.objects.getIamPolicy storage.objects.list storage.objects.move storage. objects. overrideUnlockedRetention storage.objects.restore storage.objects.setIamPolicy storage.objects.setRetention storage.objects.update storage.objects.updateContext Storage Legacy Bucket Owner ( roles/ storage.legacyBucketOwner ) Grants permission to create, overwrite, and delete objects; list objects in a bucket and read object metadata, excluding allow policies, when listing; and read and edit bucket metadata, including allow policies.
- Lowest-level resources where you can grant this role: Bucket resourcemanager.projects.get resourcemanager.projects.list storage.folders.get storage.folders.list storage.managedFolders.get storage.managedFolders.list storage.objects.get storage.objects.list Storage Viewer ( roles/ storage.viewer ) Viewer role for storage resourcemanager.projects.get resourcemanager.projects.list storage.buckets.list storage. buckets. listEffectiveTags storage. buckets. listTagBindings storage. buckets. viewIntelligenceDetails storage.folders.get storage.folders.list storage.hmacKeys.get storage.hmacKeys.list storage. intelligenceConfigs. get Storage Annotation Generator Service Beta ( roles/ storage.annotationGeneratorService ) Grants all permissions needed to generate annotations for objects in a bucket. storage.objects.createContext storage.objects.deleteContext storage.objects.get storage.objects.list storage.objects.update storage.objects.updateContext Storage Express Mode Service Input Beta ( roles/ storage.expressModeServiceInput ) Grants permission to Express Mode service accounts at a managed folder so they can create objects but not read them on input folders. storage.objects.create storage.objects.delete storage.objects.list storage.objects.update Storage Express Mode Service Output Beta ( roles/ storage.expressModeServiceOutput ) Grants permission to EasyGCP service accounts at a managed folder so they can read objects but not write them on output folders. storage.objects.delete storage.objects.get storage.objects.list Storage Express Mode User Access Beta ( roles/ storage.expressModeUserAccess ) Grants permission to Express Mode accounts at the project level so they can read, list, create and delete any object in any of their buckets in Express Mode. orgpolicy.policy.get storage.buckets.get storage.buckets.list storage.multipartUploads. storage.multipartUploads.abort storage. multipartUploads. create storage.multipartUploads.list storage. multipartUploads. listParts storage.objects.create storage.objects.delete storage.objects.get storage.objects.list storage.objects.restore storage.objects.update Storage HMAC Key Admin ( roles/ storage.hmacKeyAdmin ) Full control of Cloud Storage HMAC keys. firebase.projects.get orgpolicy.policy.get resourcemanager.projects.get resourcemanager.projects.list storage.hmacKeys. storage.hmacKeys.create storage.hmacKeys.delete storage.hmacKeys.get storage.hmacKeys.list storage.hmacKeys.update Storage Insights Collector Service ( roles/ storage.insightsCollectorService ) Read-only access to Cloud Storage Inventory metadata for Storage Insights. resourcemanager.projects.get resourcemanager.projects.list storage.buckets.get storage. buckets. getObjectInsights Note: Consider the following for permissions: The orgpolicy.policy.get permission allows principals to know the organization policy constraints that a project is subject to.
- Lowest-level resources where you can grant this role: Bucket orgpolicy.policy.get resourcemanager.projects.get resourcemanager.projects.list storage.folders.create storage.managedFolders.create storage.multipartUploads.abort storage. multipartUploads. create storage. multipartUploads. listParts storage.objects.create storage.objects.createContext Storage Object User ( roles/ storage.objectUser ) Access to create, read, update and delete objects and multipart uploads in GCS. monitoring.timeSeries.create orgpolicy.policy.get resourcemanager.projects.get resourcemanager.projects.list storage.folders. storage.folders.create storage.folders.delete storage.folders.get storage.folders.list storage.folders.rename storage.managedFolders.create storage.managedFolders.delete storage.managedFolders.get storage.managedFolders.list storage.multipartUploads. storage.multipartUploads.abort storage. multipartUploads. create storage.multipartUploads.list storage. multipartUploads. listParts storage.objects.create storage.objects.createContext storage.objects.delete storage.objects.deleteContext storage.objects.get storage.objects.list storage.objects.move storage.objects.restore storage.objects.update storage.objects.updateContext Storage Object Viewer ( roles/ storage.objectViewer ) Grants access to view objects and their metadata, excluding ACLs.
- Lowest-level resources where you can grant this role: Bucket storage.objects.createContext storage.objects.deleteContext storage.objects.get storage.objects.getIamPolicy storage. objects. overrideUnlockedRetention storage.objects.setIamPolicy storage.objects.setRetention storage.objects.update storage.objects.updateContext Storage Legacy Object Reader ( roles/ storage.legacyObjectReader ) Grants permission to view objects and their metadata, excluding ACLs.

### "Quickstart: Discover object storage with the Google Cloud CLI \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud](https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Give someone access to your bucket Use the gcloud storage buckets add-iam-policy-binding command to give a specific email address permission to add objects to your bucket: gcloud storage buckets add-iam-policy-binding gs:// BUCKET NAME --member=user:jeffersonloveshiking@gmail.com --role=roles/storage.objectCreator The command is successful if your response contains the following: bindings: - members: - user:jeffersonloveshiking@gmail.com role: roles/storage.objectCreator Now this user can add items to your bucket.
- Make the objects publicly accessible Use the gcloud storage buckets add-iam-policy-binding command to grant all users permission to read the images stored in your bucket: gcloud storage buckets add-iam-policy-binding gs:// BUCKET NAME --member=allUsers --role=roles/storage.objectViewer The command is successful if your response contains the following: bindings: - members: - allUsers role: roles/storage.objectViewer Now anyone can get your images.
- To remove this permission, use the following command: gcloud storage buckets remove-iam-policy-binding gs:// BUCKET NAME --member=user:jeffersonloveshiking@gmail.com --role=roles/storage.objectCreator The command is successful if no error is returned.
- To remove this access, use the following command: gcloud storage buckets remove-iam-policy-binding gs:// BUCKET NAME --member=allUsers --role=roles/storage.objectViewer The command is successful if no error is returned.

### "Quickstart: Discover object storage with the Google Cloud console \_|\_\

- URL: [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console)
- Source ID: `site-docs-reference`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Make sure that you have the following role or roles on the project: Storage Admin Check for the roles In the Google Cloud console, go to the IAM page.
- Make sure that you have the following role or roles on the project: Storage Admin Check for the roles In the Google Cloud console, go to the IAM page.
- The Copy URL button provides a shareable URL similar to the following: https://storage.googleapis.com/ YOUR BUCKET NAME /kitten.png To remove public access from the bucket and stop sharing the image publicly: Click the Permissions tab.
- Share the object To allow public access to the bucket and create a publicly accessible URL for the image: Click the Permissions tab.

