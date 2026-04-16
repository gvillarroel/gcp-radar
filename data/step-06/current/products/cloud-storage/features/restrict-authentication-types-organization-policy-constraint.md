---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.931Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "Restrict authentication types organization policy constraint"
feature_slug: "restrict-authentication-types-organization-policy-constraint"
latest_feature_date: "2022-08-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/storage/docs/troubleshooting"
  - "https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys"
  - "https://docs.cloud.google.com/storage/docs/authentication/hmackeys"
  - "https://docs.cloud.google.com/storage/docs/access-control/iam"
keywords:
  - "restrict"
  - "authentication"
  - "types"
  - "organization"
  - "policy"
  - "constraint"
  - "this"
  - "limits"
---

# Restrict authentication types organization policy constraint

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

This organization policy constraint limits which authentication types can be used in requests to Cloud Storage resources.

## Extended Definition

This organization policy constraint limits which authentication types can be used in requests to Cloud Storage resources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)
- [https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys](https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys)
- [https://docs.cloud.google.com/storage/docs/authentication/hmackeys](https://docs.cloud.google.com/storage/docs/authentication/hmackeys)
- [https://docs.cloud.google.com/storage/docs/access-control/iam](https://docs.cloud.google.com/storage/docs/access-control/iam)

## Supporting Pages

### Troubleshooting \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- For example, the Domain Restricted Sharing constraint ( constraints/iam.allowedPolicyMemberDomains ) restricts resource sharing based on the organization's domain.
- Solution : Check with your security administrator team to see if the bucket to which you're sending requests is being affected by an organization policy that uses a custom constraint.
- If you continue to see this error after overriding the organization policy, then you might need to wait a few minutes for the change to take effect.
- Solution : Some organization policy constraints can prevent you from making your data public.

### "Manage HMAC keys for service accounts \_|\_ Cloud Storage \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys](https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys)
- Source ID: `site-iam-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Make sure the following organization policy constraints are disabled: constraints/storage.restrictAuthTypes (must be disabled for HMAC key authentication) constraints/iam.disableServiceAccountKeyCreation See Creating and managing organization policies for instructions on how to check and disable constraints.
- Overview This page shows you how to create, disable, and delete Hash-based Message Authentication Code (HMAC) keys associated with service accounts in your project.
- For more information, see Set up authentication for client libraries . / TODO(developer): Uncomment the following lines before running the sample. / // The service account email for which the new HMAC key will be created // const serviceAccountEmail = 'service-account@iam.gserviceaccount.com'; // The ID of the project to which the service account belongs // const projectId = 'project-id'; // Imports the Google Cloud client library const { Storage } = require ( ' @google-cloud/storage ' ); // Creates a client const storage = new Storage (); // Create HMAC SA Key async function createHmacKey () { const [ hmacKey , secret ] = await storage . createHmacKey ( serviceAccountEmail , { projectId , }); console . log ( The base64 encoded secret is: ${ secret } ); console . log ( 'Do not miss that secret, there is no API to recover it.' ); console . log ( 'The HMAC key metadata is:' ); for ( const [ key , value ] of Object . entries ( hmacKey . metadata )) { console . log ( ${ key } : ${ value } ); } } PHP For more information, see the Cloud Storage PHP API reference documentation .
- For more information, see Set up authentication for client libraries . def create hmac key service account email : The service account email used to generate an HMAC key service account email = "service-my-project-number@gs-project-accounts.iam.gserviceaccount.com" require "google/cloud/storage" storage = Google :: Cloud :: Storage . new By default Storage#create hmac key uses the Storage client project id hmac key = storage . create hmac key service account email puts "The base64 encoded secret is: #{ hmac key . secret } " puts "Do not miss that secret, there is no API to recover it." puts " \n The HMAC key metadata is:" puts "Key ID: #{ hmac key . id } " puts "Service Account Email: #{ hmac key . service account email } " puts "Access ID: #{ hmac key . access id } " puts "Project ID: #{ hmac key . project id } " puts "Active: #{ hmac key . active? } " puts "Created At: #{ hmac key . created at } " puts "Updated At: #{ hmac key . updated at } " puts "Etag: #{ hmac key . etag } " end Terraform You can use a Terraform resource to create an HMAC key .

### HMAC keys \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/authentication/hmackeys](https://docs.cloud.google.com/storage/docs/authentication/hmackeys)
- Source ID: `site-iam-reference`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you enable the restrictAuthTypes constraint on a resource, you can no longer create or activate HMAC keys for the specified account type in that resource.
- You can optionally enable the restrictAuthTypes constraint on a resource, which restricts access for requests signed by HMAC keys.
- You can optionally enable the restrictAuthTypes constraint on user account HMAC keys for an extra layer of security.
- Setup This page discusses hash-based message authentication code (HMAC) keys, which you can use to authenticate requests to the Cloud Storage XML API .

### Identity and Access Management \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/access-control/iam](https://docs.cloud.google.com/storage/docs/access-control/iam)
- Source ID: `site-iam-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- To achieve this, you can give the user the Storage Object Viewer ( roles/storage.objectViewer ) role for the project, which allows the user to read any object stored in any bucket within your project, and the Storage Object Creator ( roles/storage.objectCreator ) role for bucket A, which allows the user to create objects only in that bucket.
- If you view the IAM policy for an individual bucket using the Google Cloud console , you do see project-level permissions that apply to that bucket; however, other Cloud Storage tools, such as gcloud storage and the Client Libraries only return the policy of the bucket and don't include information inherited from the project-level policy.
- This permission is found in roles such as Storage Object Creator ( roles/storage.objectCreator ), which grants the permissions useful for creating objects in a bucket, and Storage Object Admin ( roles/storage.objectAdmin ), which grants a wide range of permissions for working with objects.
- For example, if you create a deny policy that denies a principal the storage.objects.get permission on a project, the principal cannot view objects in that project, even if they are granted the READER permission to individual objects.

