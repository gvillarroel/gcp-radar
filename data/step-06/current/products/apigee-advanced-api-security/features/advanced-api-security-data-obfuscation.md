---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:05:29.885Z"
product_name: "Apigee Advanced API Security"
product_slug: "apigee-advanced-api-security"
feature_name: "Advanced API Security data obfuscation"
feature_slug: "advanced-api-security-data-obfuscation"
latest_feature_date: "2025-03-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide"
keywords:
  - "obfuscation for analytics payloads"
  - "sensitive data redaction"
  - "payload redaction"
  - "PII masking"
  - "API Analytics obfuscation"
  - "data obfuscation"
  - "data masking"
---

# Advanced API Security data obfuscation

Product: Apigee Advanced API Security
Coverage: LOW

## Step 02 Summary

Data obfuscation support is now available for Advanced API Security use cases, including Apigee API Analytics-related protection.

## Extended Definition

Apigee data masking, in the documented PCI configuration context, is a feature that prevents sensitive data from being displayed during a Debug session in both the Apigee UI Debug tool and backend Debug (API). The documentation also states that this masking is not applied to places like log files, cache, or analytics, so it is a debug-facing obfuscation mechanism rather than end-to-end redaction across all data stores.

## Evidence Summary

The referenced page documents debug-session-only data masking behavior and explicitly limits its scope, but does not confirm broader Advanced API Security data obfuscation use cases beyond this context.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide](https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide)

## Supporting Pages

### PCI Configuration Guide for Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide](https://docs.cloud.google.com/apigee/docs/api-platform/reference/pci-configuration-guide)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- PCI Requirement Section Requirement 3: Protect stored account data Data masking Requirement 3: Protect stored account data Data storage Requirement 4: Protect cardholder data with strong cryptography during transmission over open, public networks TLS configuration Requirement 4: Protect cardholder data with strong cryptography during transmission over open, public networks Data encryption Requirement 7: Restrict access to system components and cardholder data by business need to know Use/Authorizations Requirement 8: Identify users and authenticate access to system components Complex password requirements or SAML Requirement 10: Log and monitor all access to system components and cardholder data Audit trail Requirement 11: Test security of systems and networks regularly Endpoint scanning To obtain a PCI Data Security Standard Attestation of Compliance (AOC), please visit Google Compliance Report Manager or contact your Apigee sales team.
- Data masking Data masking prevents the display of sensitive data during a Debug session only, both in the Debug tool (Apigee UI) and in the backend by Debug (Apigee API).
- Data masking does NOT prevent the data from being visible in places such as log files, the cache, and analytics.
- Details of how to set up masking are available at Data masking and hiding .

