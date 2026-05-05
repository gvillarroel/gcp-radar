# Custom Document Extractor public APIs

Product: Document AI
Feature slug: `custom-document-extractor-public-apis`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Custom Document Extractor adds public APIs for creating and managing models and datasets.

## Lifecycle

- Latest feature date: 2023-02-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/document-ai/docs/custom-org-policies](https://docs.cloud.google.com/document-ai/docs/custom-org-policies), [https://docs.cloud.google.com/document-ai/docs/manage-processor-versions](https://docs.cloud.google.com/document-ai/docs/manage-processor-versions), [https://docs.cloud.google.com/document-ai/docs/create-processor](https://docs.cloud.google.com/document-ai/docs/create-processor), [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms))
- allow (evidence: [https://docs.cloud.google.com/document-ai/docs/custom-org-policies](https://docs.cloud.google.com/document-ai/docs/custom-org-policies), [https://docs.cloud.google.com/document-ai/docs/manage-processor-versions](https://docs.cloud.google.com/document-ai/docs/manage-processor-versions), [https://docs.cloud.google.com/document-ai/docs/create-processor](https://docs.cloud.google.com/document-ai/docs/create-processor), [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms))
- constraint (evidence: [https://docs.cloud.google.com/document-ai/docs/custom-org-policies](https://docs.cloud.google.com/document-ai/docs/custom-org-policies), [https://docs.cloud.google.com/document-ai/docs/manage-processor-versions](https://docs.cloud.google.com/document-ai/docs/manage-processor-versions), [https://docs.cloud.google.com/document-ai/docs/create-processor](https://docs.cloud.google.com/document-ai/docs/create-processor), [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms))
- encrypt (evidence: [https://docs.cloud.google.com/document-ai/docs/custom-org-policies](https://docs.cloud.google.com/document-ai/docs/custom-org-policies), [https://docs.cloud.google.com/document-ai/docs/manage-processor-versions](https://docs.cloud.google.com/document-ai/docs/manage-processor-versions), [https://docs.cloud.google.com/document-ai/docs/create-processor](https://docs.cloud.google.com/document-ai/docs/create-processor), [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms))
- iam (evidence: [https://docs.cloud.google.com/document-ai/docs/custom-org-policies](https://docs.cloud.google.com/document-ai/docs/custom-org-policies), [https://docs.cloud.google.com/document-ai/docs/manage-processor-versions](https://docs.cloud.google.com/document-ai/docs/manage-processor-versions), [https://docs.cloud.google.com/document-ai/docs/create-processor](https://docs.cloud.google.com/document-ai/docs/create-processor), [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms))
- identity (evidence: [https://docs.cloud.google.com/document-ai/docs/custom-org-policies](https://docs.cloud.google.com/document-ai/docs/custom-org-policies), [https://docs.cloud.google.com/document-ai/docs/manage-processor-versions](https://docs.cloud.google.com/document-ai/docs/manage-processor-versions), [https://docs.cloud.google.com/document-ai/docs/create-processor](https://docs.cloud.google.com/document-ai/docs/create-processor), [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms))
- key (evidence: [https://docs.cloud.google.com/document-ai/docs/custom-org-policies](https://docs.cloud.google.com/document-ai/docs/custom-org-policies), [https://docs.cloud.google.com/document-ai/docs/manage-processor-versions](https://docs.cloud.google.com/document-ai/docs/manage-processor-versions), [https://docs.cloud.google.com/document-ai/docs/create-processor](https://docs.cloud.google.com/document-ai/docs/create-processor), [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms))
- kms (evidence: [https://docs.cloud.google.com/document-ai/docs/custom-org-policies](https://docs.cloud.google.com/document-ai/docs/custom-org-policies), [https://docs.cloud.google.com/document-ai/docs/manage-processor-versions](https://docs.cloud.google.com/document-ai/docs/manage-processor-versions), [https://docs.cloud.google.com/document-ai/docs/create-processor](https://docs.cloud.google.com/document-ai/docs/create-processor), [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms))
- permission (evidence: [https://docs.cloud.google.com/document-ai/docs/custom-org-policies](https://docs.cloud.google.com/document-ai/docs/custom-org-policies), [https://docs.cloud.google.com/document-ai/docs/manage-processor-versions](https://docs.cloud.google.com/document-ai/docs/manage-processor-versions), [https://docs.cloud.google.com/document-ai/docs/create-processor](https://docs.cloud.google.com/document-ai/docs/create-processor), [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms))
- policy (evidence: [https://docs.cloud.google.com/document-ai/docs/custom-org-policies](https://docs.cloud.google.com/document-ai/docs/custom-org-policies), [https://docs.cloud.google.com/document-ai/docs/manage-processor-versions](https://docs.cloud.google.com/document-ai/docs/manage-processor-versions), [https://docs.cloud.google.com/document-ai/docs/create-processor](https://docs.cloud.google.com/document-ai/docs/create-processor), [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms))
- role (evidence: [https://docs.cloud.google.com/document-ai/docs/custom-org-policies](https://docs.cloud.google.com/document-ai/docs/custom-org-policies), [https://docs.cloud.google.com/document-ai/docs/manage-processor-versions](https://docs.cloud.google.com/document-ai/docs/manage-processor-versions), [https://docs.cloud.google.com/document-ai/docs/create-processor](https://docs.cloud.google.com/document-ai/docs/create-processor), [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms))
- token (evidence: [https://docs.cloud.google.com/document-ai/docs/custom-org-policies](https://docs.cloud.google.com/document-ai/docs/custom-org-policies), [https://docs.cloud.google.com/document-ai/docs/manage-processor-versions](https://docs.cloud.google.com/document-ai/docs/manage-processor-versions), [https://docs.cloud.google.com/document-ai/docs/create-processor](https://docs.cloud.google.com/document-ai/docs/create-processor), [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms))

## Official Evidence

- [https://docs.cloud.google.com/document-ai/docs/ce-mechanisms](https://docs.cloud.google.com/document-ai/docs/ce-mechanisms)
- [https://docs.cloud.google.com/document-ai/docs/create-processor](https://docs.cloud.google.com/document-ai/docs/create-processor)
- [https://docs.cloud.google.com/document-ai/docs/custom-org-policies](https://docs.cloud.google.com/document-ai/docs/custom-org-policies)
- [https://docs.cloud.google.com/document-ai/docs/manage-processor-versions](https://docs.cloud.google.com/document-ai/docs/manage-processor-versions)
