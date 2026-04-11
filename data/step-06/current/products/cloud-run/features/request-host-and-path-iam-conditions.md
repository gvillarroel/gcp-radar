---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.900Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Request host and path IAM Conditions"
feature_slug: "request-host-and-path-iam-conditions"
latest_feature_date: "2025-06-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/securing/managing-access"
  - "https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/GetIamPolicyRequest"
keywords:
  - "request"
  - "host"
  - "and"
  - "path"
  - "iam"
  - "conditions"
  - "run"
  - "supports"
---

# Request host and path IAM Conditions

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports using request host and request path attributes in IAM Conditions for service invocation access control.

## Extended Definition

Cloud Run supports using request host and request path attributes in IAM Conditions for service invocation access control.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/securing/managing-access](https://docs.cloud.google.com/run/docs/securing/managing-access)
- [https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/GetIamPolicyRequest](https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/GetIamPolicyRequest)

## Supporting Pages

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- June 09, 2025 Feature You can use request host and request path in IAM Conditions when defining access control for invoking Cloud Run services.
- This execution environment provides better performance and the ability to use network file systems. (Available in public preview.) Feature Cloud Run now supports network file systems such as NFS, NDB, 9P, CIFS/Samba, and Ceph , as well as Cloud Filestore and Cloud Storage FUSE . (Available in public preview.) September 28, 2021 Feature Binary Authorization for Cloud Run is now at generally availability (GA).
- Feature A Cloud Run service revision will now accept requests from the Shared VPC network that it is connected to , including when Ingress is configured as "Internal" or "Internal and Cloud Load Balancing." (Preview) April 13, 2023 Feature Startup CPU boost for Cloud Run services is now at general availability (GA).
- January 24, 2025 Feature You can now use dual-stack subnets with internal IPv6 to let your Cloud Run services and jobs send IPv4 and internal IPv6 traffic to a VPC network with Direct VPC egress. (Preview) January 22, 2025 Feature The Cloud Run Builder ( roles/run.builder ) IAM role is now available in preview.

### Access control with IAM \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/securing/managing-access](https://docs.cloud.google.com/run/docs/securing/managing-access)
- Source ID: `site-iam-reference`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To grant conditional access with the request.host and request.path attributes when invoking Cloud Run services, add the condition field when running the following command: gcloud run services add-iam-policy-binding SERVICE NAME \ --member= PRINCIPAL \ --role= ROLE \ --region= REGION \ --condition=[ KEY = VALUE ,...] Replace: SERVICE NAME with the service name (for example, my-service ).
- Cloud Run supports the ( request.host ) and ( request.path ) condition attributes to grant conditional access when invoking Cloud Run services.
- Home Documentation Application hosting Cloud Run Guides Send feedback Access control with IAM Stay organized with collections Save and categorize content based on your preferences.
- Use IAM Conditions on a service You use IAM Conditions to define and enforce conditional, attribute-based access control for Cloud Run resources.

### GetIamPolicyRequest \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/GetIamPolicyRequest](https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/GetIamPolicyRequest)
- Source ID: `site-api-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting Cloud Run Reference Send feedback GetIamPolicyRequest Stay organized with collections Save and categorize content based on your preferences.
- JSON representation GetPolicyOptions JSON representation Request message for GetIamPolicy method.
- To learn which resources support conditions in their IAM policies, see the IAM documentation .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-09 UTC."],[],[]]

