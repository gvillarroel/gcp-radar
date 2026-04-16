---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:45.734Z"
product_name: "Dataform"
product_slug: "dataform"
feature_name: "Custom organization policy constraints"
feature_slug: "custom-organization-policy-constraints"
latest_feature_date: "2025-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataform/docs/create-custom-constraints"
  - "https://docs.cloud.google.com/dataform/docs/cmek"
  - "https://docs.cloud.google.com/dataform/docs/access-control"
  - "https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient"
keywords:
  - "custom"
  - "organization"
  - "policy"
  - "constraints"
  - "provide"
  - "granular"
  - "control"
  - "over"
---

# Custom organization policy constraints

Product: Dataform
Coverage: MEDIUM

## Step 02 Summary

Custom organization policy constraints provide granular control over specific fields for CompilationResult, ReleaseConfig, WorkflowConfig, WorkflowInvocation, and Workspace resources; Custom organization policy constraints provide more granular control over specific fields for Dataform resources.

## Extended Definition

Custom organization policy constraints provide granular control over specific fields for CompilationResult, ReleaseConfig, WorkflowConfig, WorkflowInvocation, and Workspace resources; Custom organization policy constraints provide more granular control over specific fields for Dataform resources.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataform/docs/create-custom-constraints](https://docs.cloud.google.com/dataform/docs/create-custom-constraints)
- [https://docs.cloud.google.com/dataform/docs/cmek](https://docs.cloud.google.com/dataform/docs/cmek)
- [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)
- [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)

## Supporting Pages

### "Create custom organization policy constraints \_|\_ Dataform \_|\_ Google\

- URL: [https://docs.cloud.google.com/dataform/docs/create-custom-constraints](https://docs.cloud.google.com/dataform/docs/create-custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 318
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- However, if you want more granular, customizable control over the specific fields that are restricted in your organization policies, you can also create custom constraints and use those custom constraints in an organization policy.
- About organization policies and constraints The Google Cloud Organization Policy Service gives you centralized, programmatic control over your organization's resources.
- This page shows you how to use Organization Policy Service custom constraints to restrict specific operations on the following Google Cloud resources: dataform.googleapis.com/CompilationResult dataform.googleapis.com/ReleaseConfig dataform.googleapis.com/Repository dataform.googleapis.com/WorkflowConfig dataform.googleapis.com/WorkflowInvocation dataform.googleapis.com/Workspace To learn more about Organization Policy, see Custom organization policies .
- The output is the following: Operation denied by custom org policies: ["customConstraints/custom.restrictRepositoryLocation": "All resources must be created in the us-central1 region."] Example custom organization policies for common use cases This table provides syntax examples for some common custom constraints.

### Use customer-managed encryption keys \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/cmek](https://docs.cloud.google.com/dataform/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Save to apply the role to the service account. gcloud You can use the Google Cloud CLI to assign the role: gcloud kms keys add-iam-policy-binding \ --project= KMS PROJECT ID \ --member serviceAccount: SERVICE AGENT \ --role roles/cloudkms.cryptoKeyEncrypterDecrypter \ --location= KMS KEY LOCATION \ --keyring= KMS KEY RING \ KMS KEY Replace the following: KMS PROJECT ID : the ID of your Google Cloud project that is running Cloud KMS SERVICE AGENT : the email address of your default Dataform service agent KMS KEY LOCATION : the location name of your Cloud KMS key KMS KEY RING : the key ring name of your Cloud KMS key KMS KEY : the key name of your Cloud KMS key Apply a CMEK organization policy Dataform is integrated with two organization policy constraints to help ensure CMEK usage across an organization: constraints/gcp.restrictNonCmekServices is used to require CMEK protection. constraints/gcp.restrictCmekCryptoKeyProjects is used to limit which Cloud KMS keys are used for CMEK protection.
- In the Custom values field, enter the following: is:dataform.googleapis.com Click Done , and then click Set policy . gcloud Create a temporary file /tmp/policy.yaml to store the policy: name : projects/ PROJECT ID /policies/gcp.restrictNonCmekServices spec : rules : - values : deniedValues : - is:dataform.googleapis.com Replace PROJECT ID with the ID of the project where you are applying this constraint.
- Go to Organization policies Using the Filter , search for the following constraint: constraints/gcp.restrictCmekCryptoKeyProjects In the Name column, click Restrict which projects may supply KMS CryptoKeys for CMEK .
- Go to Organization policies Using the Filter , search for the following constraint: constraints/gcp.restrictNonCmekServices In the Name column, click Restrict which services may create resources without CMEK .

### Control access with IAM \_|\_ Dataform \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataform/docs/access-control](https://docs.cloud.google.com/dataform/docs/access-control)
- Source ID: `site-docs-root-2`
- Final score: 179
- Re-rank relevance: N/A

Evidence snippets:
- Control access to an individual repository To control access to Dataform with granular permissions, you can set Dataform IAM roles on individual repositories by using the Dataform API repositories.setIamPolicy request.
- Security considerations Granting the roles required by Dataform to a Dataform service agent, custom service account, or a user's Google Account ( Preview ) comes with the following security considerations: Any service agent or service account granted the required roles might gain access to BigQuery or Secret Manager in the project that the service agent or service account belongs to, regardless of VPC Service Controls.
- To learn more about granting granular permissions to BigQuery datasets, see Controlling access to datasets .
- BigQuery roles for column-level access control if you want to use BigQuery policy tags .

### "Class DataformAsyncClient (0.10.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient](https://docs.cloud.google.com/python/docs/reference/dataform/latest/google.cloud.dataform_v1.services.dataform.DataformAsyncClient)
- Source ID: `site-python-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- This is a resource that is used to organize Files and other Folders and provide hierarchical access controls. get iam policy get iam policy ( request : typing .
- Iterating over this object will yield results and resolve additional pages automatically. folder path folder path ( project : str , location : str , folder : str ) - > str Returns a fully-qualified folder string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- Iterating over this object will yield results and resolve additional pages automatically. secret version path secret version path ( project : str , secret : str , version : str ) - > str Returns a fully-qualified secret version string. set iam policy set iam policy ( request : typing .
- This is a resource that is used to organize Files and other Folders and provide hierarchical access controls. create release config create release config ( request : typing .

