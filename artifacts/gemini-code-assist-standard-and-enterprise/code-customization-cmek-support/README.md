# code customization CMEK support

Product: Gemini Code Assist Standard and Enterprise
Feature slug: `code-customization-cmek-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Code customization can now use customer-managed encryption keys to encrypt data at rest through Cloud Key Management Service.

## Lifecycle

- Latest feature date: 2024-12-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization), [https://docs.cloud.google.com/gemini/docs/codeassist/encrypt-data-cmek](https://docs.cloud.google.com/gemini/docs/codeassist/encrypt-data-cmek), [https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization), [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization-overview](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization-overview))
- auth (evidence: [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization), [https://docs.cloud.google.com/gemini/docs/codeassist/encrypt-data-cmek](https://docs.cloud.google.com/gemini/docs/codeassist/encrypt-data-cmek), [https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization), [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization-overview](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization-overview))
- encrypt (evidence: [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization), [https://docs.cloud.google.com/gemini/docs/codeassist/encrypt-data-cmek](https://docs.cloud.google.com/gemini/docs/codeassist/encrypt-data-cmek), [https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization), [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization-overview](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization-overview))
- iam (evidence: [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization), [https://docs.cloud.google.com/gemini/docs/codeassist/encrypt-data-cmek](https://docs.cloud.google.com/gemini/docs/codeassist/encrypt-data-cmek), [https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization), [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization-overview](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization-overview))
- identity (evidence: [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization), [https://docs.cloud.google.com/gemini/docs/codeassist/encrypt-data-cmek](https://docs.cloud.google.com/gemini/docs/codeassist/encrypt-data-cmek), [https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization), [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization-overview](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization-overview))
- key (evidence: [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization), [https://docs.cloud.google.com/gemini/docs/codeassist/encrypt-data-cmek](https://docs.cloud.google.com/gemini/docs/codeassist/encrypt-data-cmek), [https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization), [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization-overview](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization-overview))
- kms (evidence: [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization), [https://docs.cloud.google.com/gemini/docs/codeassist/encrypt-data-cmek](https://docs.cloud.google.com/gemini/docs/codeassist/encrypt-data-cmek), [https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization), [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization-overview](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization-overview))
- permission (evidence: [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization), [https://docs.cloud.google.com/gemini/docs/codeassist/encrypt-data-cmek](https://docs.cloud.google.com/gemini/docs/codeassist/encrypt-data-cmek), [https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization), [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization-overview](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization-overview))
- private (evidence: [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization), [https://docs.cloud.google.com/gemini/docs/codeassist/encrypt-data-cmek](https://docs.cloud.google.com/gemini/docs/codeassist/encrypt-data-cmek), [https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization), [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization-overview](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization-overview))

## Official Evidence

- [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization)
- [https://docs.cloud.google.com/gemini/docs/codeassist/code-customization-overview](https://docs.cloud.google.com/gemini/docs/codeassist/code-customization-overview)
- [https://docs.cloud.google.com/gemini/docs/codeassist/encrypt-data-cmek](https://docs.cloud.google.com/gemini/docs/codeassist/encrypt-data-cmek)
- [https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization](https://docs.cloud.google.com/gemini/docs/codeassist/use-code-customization)
