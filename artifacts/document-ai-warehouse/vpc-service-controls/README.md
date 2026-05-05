# VPC Service Controls

Product: Document AI Warehouse
Feature slug: `vpc-service-controls`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Adds public support for VPC Service Controls in Document AI Warehouse.

## Lifecycle

- Latest feature date: 2022-12-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/document-ai/docs/process-documents-client-libraries](https://docs.cloud.google.com/document-ai/docs/process-documents-client-libraries), [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages), [https://docs.cloud.google.com/document-ai/docs/libraries](https://docs.cloud.google.com/document-ai/docs/libraries))
- auth (evidence: [https://docs.cloud.google.com/document-ai/docs/process-documents-client-libraries](https://docs.cloud.google.com/document-ai/docs/process-documents-client-libraries), [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages), [https://docs.cloud.google.com/document-ai/docs/libraries](https://docs.cloud.google.com/document-ai/docs/libraries))
- key (evidence: [https://docs.cloud.google.com/document-ai/docs/process-documents-client-libraries](https://docs.cloud.google.com/document-ai/docs/process-documents-client-libraries), [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages), [https://docs.cloud.google.com/document-ai/docs/libraries](https://docs.cloud.google.com/document-ai/docs/libraries))

## Official Evidence

- [https://docs.cloud.google.com/document-ai/docs/languages](https://docs.cloud.google.com/document-ai/docs/languages)
- [https://docs.cloud.google.com/document-ai/docs/libraries](https://docs.cloud.google.com/document-ai/docs/libraries)
- [https://docs.cloud.google.com/document-ai/docs/process-documents-client-libraries](https://docs.cloud.google.com/document-ai/docs/process-documents-client-libraries)

## Validation Findings

- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
