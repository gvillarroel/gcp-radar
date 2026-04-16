---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.949Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Custom time metadata"
feature_slug: "custom-time-metadata"
latest_feature_date: "2020-09-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/hosting-static-website"
  - "https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists"
  - "https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders"
  - "https://docs.cloud.google.com/storage/docs/access-control/lists"
keywords:
  - "custom"
  - "time"
  - "metadata"
  - "lets"
  - "users"
  - "assign"
  - "an"
  - "arbitrary"
---

# Custom time metadata

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

Custom time metadata lets users assign an arbitrary date and time to Cloud Storage objects.

## Extended Definition

Custom time metadata lets users assign an arbitrary date and time to Cloud Storage objects.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/hosting-static-website](https://docs.cloud.google.com/storage/docs/hosting-static-website)
- [https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists](https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists)
- [https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders](https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders)
- [https://docs.cloud.google.com/storage/docs/access-control/lists](https://docs.cloud.google.com/storage/docs/access-control/lists)

## Supporting Pages

### Host a static website \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/hosting-static-website](https://docs.cloud.google.com/storage/docs/hosting-static-website)
- Source ID: `site-docs-root`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . def set bucket public iam bucket name : The ID of your GCS bucket bucket name = "your-unique-bucket-name" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new bucket = storage . bucket bucket name bucket . policy do p p . add "roles/storage.objectViewer" , "allUsers" end puts "Bucket #{ bucket name } is now publicly readable" end Terraform Make bucket public by granting allUsers storage.objectViewer access resource "google storage bucket iam member" "public rule" { bucket = google storage bucket.static website.name role = "roles/storage.objectViewer" member = "allUsers" } REST APIs JSON API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- Assigning either is optional, but if you don't assign an index page suffix and upload the corresponding index page, users who access your top-level site are served an XML document tree containing a list of the public objects in your bucket.
- Recommended: assign specialty pages You can assign an index page suffix and a custom error page, which are known as specialty pages.
- For more information, see Set up authentication for client libraries . def upload file bucket name :, local file path :, file name : nil The ID of your GCS bucket bucket name = "your-unique-bucket-name" The path to your file to upload local file path = "/local/path/to/file.txt" The ID of your GCS object file name = "your-file-name" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new bucket = storage . bucket bucket name , skip lookup : true file = bucket . create file local file path , file name puts "Uploaded #{ local file path } as #{ file . name } in bucket #{ bucket name } " end Terraform Upload a simple index.html page to the bucket resource "google storage bucket object" "indexpage" { name = "index.html" content = "<html><body>Hello World!</body></html>" content type = "text/html" bucket = google storage bucket.static website.id } Upload a simple 404 / error page to the bucket resource "google storage bucket object" "errorpage" { name = "404.html" content = "<html><body>404!</body></html>" content type = "text/html" bucket = google storage bucket.static website.id } REST APIs JSON API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.

### "Create and manage access control lists (ACLs) \_|\_ Cloud Storage \_|\_\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists](https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists)
- Source ID: `site-iam-reference`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Apply a predefined ACL Rather than specifying the entire ACL one entry at a time as shown previously, you can use a predefined ACL , which will automatically apply a number of entries customized to a specific scenario.
- The following example shows different bucket ACL entries: <?xml version="1.0" encoding="UTF-8"?> <AccessControlList> <Owner> <ID>00b4903a9721...</ID> </Owner> <Entries> <Entry> <Scope type="GroupById"> <ID>00b4903a9722...</ID> </Scope> <Permission>FULL CONTROL</Permission> </Entry> <Entry> <Scope type="GroupByDomain"> <Domain>example.com</Domain> </Scope> <Permission>READ</Permission> </Entry> <Entry> <Scope type="GroupByEmail"> <EmailAddress>gs-announce@googlegroups.com</EmailAddress> </Scope> <Permission>READ</Permission> </Entry> <Entry> <Scope type="UserByEmail"> <EmailAddress>jeffersonloveshiking@gmail.com</EmailAddress> <Name>Jefferson</Name> </Scope> <Permission>FULL CONTROL</Permission> </Entry> <Entry> <Scope type="AllUsers"/> <Permission>READ</Permission> </Entry> <Entry> <Scope type="AllAuthenticatedUsers"/> <Permission>READ</Permission> </Entry> </Entries> </AccessControlList> Set the Name element in ACL XML When you retrieve an ACL from a bucket or object, you might notice an additional <Name> element appended to some of your entries.
- You can use // addAllUsers(), addDomain(), addProject(), addGroup(), and // addAllAuthenticatedUsers() to grant access to different types of entities. // You can also use "readers" and "writers" to grant different roles. await storage . bucket ( bucketName ). acl . default . owners . addUser ( userEmail ); console . log ( Added user ${ userEmail } as an owner on bucket ${ bucketName } . ); } addBucketDefaultOwner (). catch ( console . error ); The following sample deletes a default object ACL from a bucket: / TODO(developer): Uncomment the following lines before running the sample. / // The ID of your GCS bucket // const bucketName = 'your-unique-bucket-name'; // The email address of the user to remove // const userEmail = 'user-email-to-remove'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client const storage = new Storage (); async function removeBucketDefaultOwner () { // Removes the user from the access control list of the bucket.
- CreateObjectAcl ( bucket name , object name , entity , gcs :: ObjectAccessControl :: ROLE OWNER ()); if ( ! patched acl ) throw std :: move ( patched acl ). status (); std :: cout << "ACL entry for " << patched acl - > entity () << " in object " << patched acl - > object () << " in bucket " << patched acl - > bucket () << " is now " << patched acl << " \n " ; } The following sample removes an ACL from an object: namespace gcs = :: google :: cloud :: storage ; using :: google :: cloud :: StatusOr ; []( gcs :: Client client , std :: string const & bucket name , std :: string const & object name , std :: string const & entity ) { StatusOr<gcs :: ObjectMetadata > original metadata = client .

### "Set and manage IAM policies on managed folders \_|\_ Cloud Storage \_|\_\

- URL: [https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders](https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders)
- Source ID: `site-iam-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Use the gcloud storage managed-folders set-iam-policy command to set the modified IAM policy on the managed folder. gcloud storage managed-folders set-iam-policy gs:// BUCKET NAME / MANAGED FOLDER NAME tmp-policy.json REST APIs JSON Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- This role contain the following permissions, which are required to set and manage IAM policies for managed folders: storage.managedFolders.getIamPolicy storage.managedFolders.setIamPolicy You can also get these permissions with custom roles .
- REST APIs JSON Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.
- REST APIs JSON Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.

### Access control lists (ACLs) \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-control/lists](https://docs.cloud.google.com/storage/docs/access-control/lists)
- Source ID: `site-iam-reference`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Storage lets you assign the following concentric permissions for your buckets and objects, as shown in the following table: Buckets Objects READER Allows a user to list a bucket's contents.
- A scope (sometimes referred to as a grantee ), which defines who can perform the specified actions (for example, a specific user or group of users).
- You can specify an ACL scope using any of the following entities: Scope ("grantee") Entity Type(s) Example Special identifier for all entities User allUsers Special identifier for all valid accounts User allAuthenticatedUsers User account email address User jeffersonloveshiking@gmail.com Service account email address User my-service-account@my-project.iam.gserviceaccount.com Google group email address Group work-group@googlegroups.com Convenience values for projects Project owners-123456789012 Google Workspace domain Domain dana@example.com Cloud Identity domain Domain dana@example.com Special identifier for all entities : The special scope identifier allUsers represents any entity on the Internet.
- This is also the default ACL for newly created objects unless the default object ACL for that bucket has been changed. authenticatedRead authenticated-read Gives the bucket or object owner OWNER permission, and gives all authenticated user account holders READER permission. publicRead public-read Gives the bucket or object owner OWNER permission, and gives all users, both authenticated and anonymous, READER permission.

