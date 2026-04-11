---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T01:16:26.809Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Object Versioning in Cloud Console"
feature_slug: "object-versioning-in-cloud-console"
latest_feature_date: "2021-09-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders"
  - "https://docs.cloud.google.com/storage/docs/discover-object-storage-console"
  - "https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists"
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
Coverage: LOW

## Step 02 Summary

The Cloud Console can manage Object Versioning and perform actions on versioned objects.

## Extended Definition

The Cloud Console can manage Object Versioning and perform actions on versioned objects.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders](https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders)
- [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console)
- [https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists](https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists)

## Supporting Pages

### "Set and manage IAM policies on managed folders \_|\_ Cloud Storage \_|\_\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders](https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders)
- Source ID: `site-iam-reference`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This role contain the following permissions, which are required to set and manage IAM policies for managed folders: storage.managedFolders.getIamPolicy storage.managedFolders.setIamPolicy You can also get these permissions with custom roles .
- If you're looking for other methods of access control, see the following resources: To learn about how to control access to whole buckets and the objects within them, see Set and manage IAM policies on buckets .
- This page describes how to set Identity and Access Management (IAM) policies on managed folders , so you can get fine-grained access control over specific groups of objects within a bucket.
- Use the gcloud storage managed-folders add-iam-policy-binding command with the --condition-from-file flag: gcloud storage managed-folders add-iam-policy-binding gs:// BUCKET NAME / MANAGED FOLDER NAME --member= PRINCIPAL IDENTIFIER --role= IAM ROLE --condition-from-file= CONDITION FILE Where: BUCKET NAME is the name of the bucket that contains the managed folder to which you are granting the principal access.

### "Quickstart: Discover object storage with the Google Cloud console \_|\_\

- URL: [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console)
- Source ID: `site-docs-reference`
- Final score: 204
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Discover object storage with the Google Cloud console Learn how to get started with Cloud Storage using the Google Cloud console.
- The simulated folder and all objects in it are deleted.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- The Copy URL button provides a shareable URL similar to the following: https://storage.googleapis.com/ YOUR BUCKET NAME /kitten.png To remove public access from the bucket and stop sharing the image publicly: Click the Permissions tab.

### "Create and manage access control lists (ACLs) \_|\_ Cloud Storage \_|\_\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists](https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists)
- Source ID: `site-iam-reference`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can use // addAllUsers(), addDomain(), addProject(), addGroup(), and // addAllAuthenticatedUsers() to grant access to different types of entities. // You can also use "readers" and "writers" to grant different roles. await storage . bucket ( bucketName ). acl . default . owners . addUser ( userEmail ); console . log ( Added user ${ userEmail } as an owner on bucket ${ bucketName } . ); } addBucketDefaultOwner (). catch ( console . error ); The following sample deletes a default object ACL from a bucket: / TODO(developer): Uncomment the following lines before running the sample. / // The ID of your GCS bucket // const bucketName = 'your-unique-bucket-name'; // The email address of the user to remove // const userEmail = 'user-email-to-remove'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client const storage = new Storage (); async function removeBucketDefaultOwner () { // Removes the user from the access control list of the bucket.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions storage.buckets.get storage.buckets.list This permission is only required for using the Google Cloud console to perform the tasks on this page. storage.buckets.setIamPolicy storage.buckets.update storage.objects.get storage.objects.getIamPolicy storage.objects.setIamPolicy storage.objects.update You can also get these permissions with custom roles .
- To view and change the default object ACL for a bucket: Console You cannot set default object ACLs using the Google Cloud console.
- Client () bucket = storage client . bucket ( bucket name ) Reload fetches the current ACL from Cloud Storage. bucket . acl . reload () You can also use group, domain, all authenticated and all to remove access for different types of entities. bucket . default object acl . user ( user email ) . revoke read () bucket . default object acl . user ( user email ) . revoke write () bucket . default object acl . user ( user email ) . revoke owner () bucket . default object acl . save () print ( f "Removed user { user email } from the default acl of bucket { bucket name } ." ) Ruby For more information, see the Cloud Storage Ruby API reference documentation .

