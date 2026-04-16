---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:19:51.809Z"
product_name: "Binary Authorization"
product_slug: "binary-authorization"
feature_name: "Binary Authorization legacy continuous validation"
feature_slug: "binary-authorization-legacy-continuous-validation"
latest_feature_date: "2024-04-15"
deprecation_date: "2025-05-01"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/binary-authorization/docs/reference/rpc"
  - "https://docs.cloud.google.com/binary-authorization/docs/quickstart-cv"
  - "https://docs.cloud.google.com/python/docs/reference/binaryauthorization/latest/google.cloud.binaryauthorization_v1.services.validation_helper_v1.ValidationHelperV1Client"
keywords:
  - "continuous"
  - "validation"
  - "capability"
  - "legacy"
  - "deprecated"
---

# Binary Authorization legacy continuous validation

Product: Binary Authorization
Coverage: MEDIUM

## Step 02 Summary

The legacy continuous validation (CV) capability in Binary Authorization is deprecated and replaced by continuous validation with check-based platform policies; deprecated on 2025-05-01.

## Extended Definition

The legacy continuous validation (CV) capability in Binary Authorization is deprecated and replaced by continuous validation with check-based platform policies; deprecated on 2025-05-01.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/binary-authorization/docs/reference/rpc](https://docs.cloud.google.com/binary-authorization/docs/reference/rpc)
- [https://docs.cloud.google.com/binary-authorization/docs/quickstart-cv](https://docs.cloud.google.com/binary-authorization/docs/quickstart-cv)
- [https://docs.cloud.google.com/python/docs/reference/binaryauthorization/latest/google.cloud.binaryauthorization_v1.services.validation_helper_v1.ValidationHelperV1Client](https://docs.cloud.google.com/python/docs/reference/binaryauthorization/latest/google.cloud.binaryauthorization_v1.services.validation_helper_v1.ValidationHelperV1Client)

## Supporting Pages

### Binary Authorization API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/binary-authorization/docs/reference/rpc](https://docs.cloud.google.com/binary-authorization/docs/reference/rpc)
- Source ID: `site-docs-root`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- ReplacePlatformPolicy Replaces a platform policy . google.cloud.binaryauthorization.v1.SystemPolicyV1 Methods GetSystemPolicy Gets the current system policy in the specified location. google.cloud.binaryauthorization.v1.ValidationHelperV1 Methods ValidateAttestationOccurrence Returns whether the given Attestation for the given image URI was signed by the given Attestor google.cloud.binaryauthorization.v1alpha2.ContinuousValidationManagementServiceV1Alpha2 Deprecated: For more information, see Legacy continuous validation deprecation and shutdown .
- UpdateContinuousValidationConfig (deprecated) Updates a project's continuous validation config , and returns a copy of the new config. google.cloud.binaryauthorization.v1beta1.BinauthzManagementServiceV1Beta1 Methods CreateAttestor Creates an attestor , and returns a copy of the new attestor .
- Methods GetContinuousValidationConfig (deprecated) Gets the continuous validation config for the project.
- The management interface for Binary Authorization, a service that provides policy-based deployment validation and control for images deployed to Google Kubernetes Engine (GKE), Anthos Service Mesh, Anthos Clusters, and Cloud Run.

### "Monitor Pod security with continuous validation \_|\_ Binary Authorization\

- URL: [https://docs.cloud.google.com/binary-authorization/docs/quickstart-cv](https://docs.cloud.google.com/binary-authorization/docs/quickstart-cv)
- Source ID: `site-iam-reference`
- Final score: 94
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Image is not in a trusted directory" , "checkSetName" : "Default check set" , "checkSetIndex" : "0" , "checkName" : "My trusted directory check" , "verdict" : "NON CONFORMANT" , "checkType" : "TrustedDirectoryCheck" , "checkIndex" : "0" } ], "image" : "us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0" } ], "verdict" : "VIOLATES POLICY" , "podNamespace" : "default" , "deployTime" : "2022-11-22T01:06:53Z" , "pod" : "hello-app" }, "@type" : "type.googleapis.com/google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent" }, "resource" : { "type" : "k8s cluster" , "labels" : { "project id" : "my-project" , "location" : "us-central1-a" , "cluster name" : "my-cluster" } }, "timestamp" : "2022-11-22T01:44:28.729881832Z" , "severity" : "WARNING" , "logName" : "projects/my-project/logs/binaryauthorization.googleapis.com%2Fcontinuous validation" , "receiveTimestamp" : "2022-11-22T03:35:47.171905337Z" } The log entry shows information about the policy violation, including the following fields: policyName : a platform policy that CV was using when it identified the violation checkResults : a block of results that includes the following fields: explanation : an error message checkSetName : the displayName value for the check set checkSetIndex : the index of the check set in the policy checkName : the name of the check checkIndex : the index of the check in the check set verdict : the verdict that resulted in the log entry, in this case NOT CONFORMANT because the check wasn't satisfied.
- To view the log in Cloud Logging, use the following filter: logName:"binaryauthorization.googleapis.com%2Fcontinuous validation" "policyName" The log for the hello-app Pod is similar to the one below.
- Quickstart: Monitor Pod security with continuous validation Learn how to get started with Binary Authorization continuous validation (CV) with check-based policies .
- In this quickstart, you use the following CV checks to continuously validate running Pods for the following conditions: Trusted directory : Checks that the images associated with the Pod reside in one or more trusted directories that you specify in the policy.

### "Class ValidationHelperV1Client (1.15.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/binaryauthorization/latest/google.cloud.binaryauthorization_v1.services.validation_helper_v1.ValidationHelperV1Client](https://docs.cloud.google.com/python/docs/reference/binaryauthorization/latest/google.cloud.binaryauthorization_v1.services.validation_helper_v1.ValidationHelperV1Client)
- Source ID: `site-python-reference`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment. transport Optional[Union[str,ValidationHelperV1Transport,Callable[..., ValidationHelperV1Transport]]] The transport to use, or a Callable that constructs and returns a new transport.
- Request message for ValidationHelperV1.ValidateAttestationOccurrence . retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- Version latest keyboard arrow down 1.15.0 (latest) 1.14.0 1.13.2 1.12.0 1.11.1 1.10.5 1.9.0 1.8.0 1.7.0 1.6.2 1.5.1 1.4.0 1.3.3 1.2.3 1.1.0 1.0.1 0.6.0 0.5.0 0.4.1 0.3.1 0.2.2 0.1.1 ValidationHelperV1Client ( , credentials : typing .
- Returns Type Description ValidationHelperV1Client The constructed client. from service account json from service account json ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.

