---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:37:19.173Z"
product_name: "Cloud Run functions"
product_slug: "cloud-run-functions"
feature_name: "Access control"
feature_slug: "access-control"
latest_feature_date: "2017-03-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/functions/docs/concepts/iam"
  - "https://docs.cloud.google.com/functions/docs/securing/managing-access-iam"
  - "https://docs.cloud.google.com/functions/docs/reference/iam/permissions"
keywords:
  - "access"
  - "control"
  - "run"
  - "functions"
  - "supports"
  - "managing"
  - "permissions"
---

# Access control

Product: Cloud Run functions
Coverage: LOW

## Step 02 Summary

Cloud Run functions supports access control for managing permissions.

## Extended Definition

Cloud Run functions supports access control for managing permissions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam)
- [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam)
- [https://docs.cloud.google.com/functions/docs/reference/iam/permissions](https://docs.cloud.google.com/functions/docs/reference/iam/permissions)

## Supporting Pages

### "Cloud Functions IAM Permissions \_|\_ Cloud Run functions \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/functions/docs/reference/iam/permissions](https://docs.cloud.google.com/functions/docs/reference/iam/permissions)
- Source ID: `site-docs-reference-2`
- Final score: 29
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following tables list the Identity and Access Management (IAM) permissions that are associated with Cloud Functions.
- For a reference of which IAM permissions are contained in each IAM role, see Cloud Functions IAM Roles .
- Cloud Functions IAM Permissions Note: Cloud Functions (2nd gen) is now Cloud Run functions.
- Functions Permission Description cloudfunctions.functions.call Call the callFunction API. cloudfunctions.functions.invoke Invoke an HTTP function via its public URL. cloudfunctions.functions.create Create new functions. cloudfunctions.functions.delete Delete functions. cloudfunctions.functions.get View functions, excluding IAM policies. cloudfunctions.functions.list List functions. cloudfunctions.functions.update Update existing functions. cloudfunctions.functions.sourceCodeGet View function source code. cloudfunctions.functions.sourceCodeSet Update function source code. cloudfunctions.functions.getIamPolicy View IAM policies associated with a function. cloudfunctions.functions.setIamPolicy Update IAM policies associated with a function.

### Access control with IAM \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/concepts/iam](https://docs.cloud.google.com/functions/docs/concepts/iam)
- Source ID: `site-iam-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Here's a few of the notable permissions that the cloudfunctions.serviceAgent uses: Permission Description roles/artifactregistry.admin Manage repositories and store build images in Artifact Registry. roles/cloudbuild.builds.editor Required to use Cloud Build to perform builds in user project. roles/cloudbuild.customworkers.builder Create builds in Cloud Build custom workers. compute.globalOperations.get , compute.networks.access , vpcaccess.connectors.{get, use} Provision functions with access to the consumer projects VPC. roles/eventarc.developer Manage Eventarc triggers for functions. firebasedatabase.instances.{get, update} Create functions triggered by the Firebase Realtime Database. iam.serviceAccounts.{actAs, getAccessToken, signBlob} Ability to get runtime service account credentials. iam.serviceAccounts.getOpenIdToken Needed for the agent to get an OpenID token on a user-specified authority.
- If you've created or deployed functions using Cloud Run, see Access control with IAM and Cloud Run roles for a detailed description of Cloud Run predefined roles, controlling access to individual services, making a service public, or configuring organization policy for the Cloud Run invoker IAM.
- This page provides supplemental information for using Identity and Access Management (IAM) roles to set access controls at a project level, to determine the level of access to your Google Cloud project and functions created using gcloud functions commands or the Cloud Functions v2 API .
- If you get an ”insufficient permissions” error, or have other authentication problems when you run your functions, make sure that the runtime service account has the correct permissions to access the resources your functions need.

### Authorize access with IAM \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/functions/docs/securing/managing-access-iam](https://docs.cloud.google.com/functions/docs/securing/managing-access-iam)
- Source ID: `site-iam-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin To get the permission that you need to control access for a specific function or all functions in a project, ask your administrator to grant you the Cloud Functions Admin ( roles/roles/cloudfunctions.admin ) IAM role on the function or the project.
- This predefined role contains the cloudfunctions.functions.setIamPolicy permission, which is required to control access for a specific function or all functions in a project.
- For information about IAM access for functions created with Cloud Run, see Access control with IAM .
- Viewing principals To view principals, use the gcloud functions get-iam-policy command: gcloud functions get-iam-policy FUNCTION NAME Allowing unauthenticated HTTP function invocation Note: If you created functions using the Cloud Run Admin API, see the Allowing public (unauthenticated) access guide instead.

