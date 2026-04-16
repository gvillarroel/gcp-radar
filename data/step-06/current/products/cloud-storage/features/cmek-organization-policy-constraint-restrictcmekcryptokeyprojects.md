---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.932Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "CMEK organization policy constraint: restrictCmekCryptoKeyProjects"
feature_slug: "cmek-organization-policy-constraint-restrictcmekcryptokeyprojects"
latest_feature_date: "2022-08-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/troubleshooting"
  - "https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys"
  - "https://docs.cloud.google.com/storage/docs/access-control/iam"
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy"
keywords:
  - "cmek"
  - "organization"
  - "policy"
  - "constraint"
  - "restrictcmekcryptokeyprojects"
  - "this"
  - "controls"
  - "which"
---

# CMEK organization policy constraint: restrictCmekCryptoKeyProjects

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

This organization policy constraint controls which projects can provide Cloud KMS keys for Cloud Storage requests.

## Extended Definition

This organization policy constraint controls which projects can provide Cloud KMS keys for Cloud Storage requests.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)
- [https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys](https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys)
- [https://docs.cloud.google.com/storage/docs/access-control/iam](https://docs.cloud.google.com/storage/docs/access-control/iam)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy)

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

### "Manage HMAC keys for service accounts \_|\_ Cloud Storage \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys](https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys)
- Source ID: `site-iam-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Make sure the following organization policy constraints are disabled: constraints/storage.restrictAuthTypes (must be disabled for HMAC key authentication) constraints/iam.disableServiceAccountKeyCreation See Creating and managing organization policies for instructions on how to check and disable constraints.
- The following sample deactivates an HMAC key: / TODO(developer): Uncomment the following lines before running the sample. / // The access ID of the HMAC key // const hmacKeyAccessId = 'GOOG0234230X00'; // The ID of the project to which the service account belongs // const projectId = 'project-id'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client const storage = new Storage (); // Deactivate HMAC SA Key async function deactivateHmacKey () { const hmacKey = storage . hmacKey ( hmacKeyAccessId , { projectId }); const [ hmacKeyMetadata ] = await hmacKey . setMetadata ({ state : 'INACTIVE' }); console . log ( 'The HMAC key is now inactive.' ); console . log ( 'The HMAC key metadata is:' ); for ( const [ key , value ] of Object . entries ( hmacKeyMetadata )) { console . log ( ${ key } : ${ value } ); } } The following sample activates an HMAC key: / TODO(developer): Uncomment the following lines before running the sample. / // The access ID of the HMAC key // const hmacKeyAccessId = 'GOOG0234230X00'; // The ID of the project to which the service account belongs // const projectId = 'project-id'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client const storage = new Storage (); // Activate HMAC SA Key async function activateHmacKey () { const hmacKey = storage . hmacKey ( hmacKeyAccessId , { projectId }); const [ hmacKeyMetadata ] = await hmacKey . setMetadata ({ state : 'ACTIVE' }); console . log ( 'The HMAC key is now active.' ); console . log ( 'The HMAC key metadata is:' ); for ( const [ key , value ] of Object . entries ( hmacKeyMetadata )) { console . log ( ${ key } : ${ value } ); } } PHP For more information, see the Cloud Storage PHP API reference documentation .
- The following sample retrieves a list of HMAC keys associated with a project: / TODO(developer): Uncomment the following lines before running the sample. / // The ID of the project to which the service account belongs // const projectId = 'project-id'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client const storage = new Storage (); // List HMAC SA Keys' Metadata async function listHmacKeys () { const [ hmacKeys ] = await storage . getHmacKeys ({ projectId }); // hmacKeys is an array of HmacKey objects. for ( const hmacKey of hmacKeys ) { console . log ( Service Account Email: ${ hmacKey . metadata . serviceAccountEmail } ); console . log ( Access Id: ${ hmacKey . metadata . accessId } ); } } The following sample retrieves information for a specific HMAC key: / TODO(developer): Uncomment the following lines before running the sample. / // The access ID of the HMAC key // const hmacKeyAccessId = 'GOOG0234230X00'; // The ID of the project to which the service account belongs // const projectId = 'project-id'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client const storage = new Storage (); // Get HMAC SA Key Metadata async function getHmacKey () { const hmacKey = storage . hmacKey ( hmacKeyAccessId , { projectId }); // Populate the hmacKey object with metadata from server. await hmacKey . getMetadata (); console . log ( 'The HMAC key metadata is:' ); for ( const [ key , value ] of Object . entries ( hmacKey . metadata )) { console . log ( ${ key } : ${ value } ); } } PHP For more information, see the Cloud Storage PHP API reference documentation .
- The following sample deactivates an HMAC key: def deactivate hmac key access id : The access ID of the HMAC key access id = "GOOG0234230X00" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new By default Storage#hmac keys uses the Storage client project id hmac key = storage . hmac key access id hmac key . inactive! puts "The HMAC key is now inactive." puts "The HMAC key metadata is:" puts "Key ID: #{ hmac key . id } " puts "Service Account Email: #{ hmac key . service account email } " puts "Access ID: #{ hmac key . access id } " puts "Project ID: #{ hmac key . project id } " puts "Active: #{ hmac key . active? } " puts "Created At: #{ hmac key . created at } " puts "Updated At: #{ hmac key . updated at } " puts "Etag: #{ hmac key . etag } " end The following sample activates an HMAC key: def activate hmac key access id : The access ID of the HMAC key access id = "GOOG0234230X00" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new By default Storage#hmac keys uses the Storage client project id hmac key = storage . hmac key access id hmac key . active! puts "The HMAC key is now active." puts "The HMAC key metadata is:" puts "Key ID: #{ hmac key . id } " puts "Service Account Email: #{ hmac key . service account email } " puts "Access ID: #{ hmac key . access id } " puts "Project ID: #{ hmac key . project id } " puts "Active: #{ hmac key . active? } " puts "Created At: #{ hmac key . created at } " puts "Updated At: #{ hmac key . updated at } " puts "Etag: #{ hmac key . etag } " end REST APIs JSON API Have gcloud CLI installed and initialized , which lets you generate an access token for the Authorization header.

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

### "Class SoftDeletePolicy (3.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.SoftDeletePolicy)
- Source ID: `site-python-reference`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See https://cloud.google.com/storage/docs/soft-delete Parameters Name Description bucket Bucket Bucket for which this instance is the policy. retention duration seconds int (Optional) The period of time in seconds that soft-deleted objects in the bucket will be retained and cannot be permanently deleted. effective time datetime.datetime (Optional) When the bucket's soft delete policy is effective.
- Properties bucket Bucket for which this instance is the policy.
- Return the value for key if key is in the dictionary, else default. update update ([ E , ] F ) If E is present and has a .keys() method, then does: for k in E: D[k] = E[k] If E is present and lacks a .keys() method, then does: for k, v in E: D[k] = v In either case, this is followed by: for k in F: D[k] = F[k] values values () API documentation for storage.bucket.SoftDeletePolicy.values method.
- Returns Type Description datetime.datetime or NoneType point-in time at which the bucket's soft delte policy is effective, or None if the property is not set. retention duration seconds Get the retention duration of the bucket's soft delete policy.

