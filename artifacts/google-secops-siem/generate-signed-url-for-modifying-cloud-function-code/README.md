# Generate Signed URL for Modifying Cloud Function Code

Product: Google SecOps SIEM
Feature slug: `generate-signed-url-for-modifying-cloud-function-code`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

This Cloud Hacktool rule detects persistence via generation of a signed URL to modify Cloud Function code.

## Lifecycle

- Latest feature date: 2025-03-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category), [https://docs.cloud.google.com/chronicle/docs/detection/generate-yara-l-with-gemini](https://docs.cloud.google.com/chronicle/docs/detection/generate-yara-l-with-gemini), [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search))
- policy (evidence: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category), [https://docs.cloud.google.com/chronicle/docs/detection/generate-yara-l-with-gemini](https://docs.cloud.google.com/chronicle/docs/detection/generate-yara-l-with-gemini), [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search))
- security (evidence: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category), [https://docs.cloud.google.com/chronicle/docs/detection/generate-yara-l-with-gemini](https://docs.cloud.google.com/chronicle/docs/detection/generate-yara-l-with-gemini), [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search))
- threat (evidence: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category), [https://docs.cloud.google.com/chronicle/docs/detection/generate-yara-l-with-gemini](https://docs.cloud.google.com/chronicle/docs/detection/generate-yara-l-with-gemini), [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search))

## Official Evidence

- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/detection/generate-yara-l-with-gemini](https://docs.cloud.google.com/chronicle/docs/detection/generate-yara-l-with-gemini)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
