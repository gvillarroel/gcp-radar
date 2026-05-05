# Dialogflow CX customer-managed encryption keys

Product: Dialogflow
Feature slug: `dialogflow-cx-customer-managed-encryption-keys`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Customer-managed encryption keys (CMEK) is now generally available; Dialogflow CX supports Customer-Managed Encryption Keys for encrypting customer data.

## Lifecycle

- Latest feature date: 2025-03-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek](https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek), [https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls](https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls), [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2))
- auth (evidence: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek](https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek), [https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls](https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls), [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2))
- authorization (evidence: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek](https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek), [https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls](https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls), [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2))
- encrypt (evidence: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek](https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek), [https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls](https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls), [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2))
- iam (evidence: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek](https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek), [https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls](https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls), [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2))
- key (evidence: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek](https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek), [https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls](https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls), [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2))
- kms (evidence: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek](https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek), [https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls](https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls), [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2))
- logging (evidence: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek](https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek), [https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls](https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls), [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2))
- permission (evidence: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek](https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek), [https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls](https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls), [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2))
- policy (evidence: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek](https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek), [https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls](https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls), [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2))
- role (evidence: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek](https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek), [https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls](https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls), [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2))
- security (evidence: [https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek](https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek), [https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls](https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls), [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2))

## Official Evidence

- [https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek](https://docs.cloud.google.com/dialogflow/cx/docs/concept/cmek)
- [https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls](https://docs.cloud.google.com/dialogflow/docs/compliance-security-controls)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2)
