# X-Goog-Content-Length-Range header

Product: Cloud Storage
Feature slug: `x-goog-content-length-range-header`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Storage supports the X-Goog-Content-Length-Range custom header for XML and JSON requests to validate uploaded content size.

## Lifecycle

- Latest feature date: 2016-06-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage), [https://docs.cloud.google.com/storage/docs/authentication/signatures](https://docs.cloud.google.com/storage/docs/authentication/signatures), [https://docs.cloud.google.com/storage/docs/aws-simple-migration](https://docs.cloud.google.com/storage/docs/aws-simple-migration), [https://docs.cloud.google.com/storage/docs/xml-api/overview](https://docs.cloud.google.com/storage/docs/xml-api/overview))
- auth (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage), [https://docs.cloud.google.com/storage/docs/authentication/signatures](https://docs.cloud.google.com/storage/docs/authentication/signatures), [https://docs.cloud.google.com/storage/docs/aws-simple-migration](https://docs.cloud.google.com/storage/docs/aws-simple-migration), [https://docs.cloud.google.com/storage/docs/xml-api/overview](https://docs.cloud.google.com/storage/docs/xml-api/overview))
- authorization (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage), [https://docs.cloud.google.com/storage/docs/authentication/signatures](https://docs.cloud.google.com/storage/docs/authentication/signatures), [https://docs.cloud.google.com/storage/docs/aws-simple-migration](https://docs.cloud.google.com/storage/docs/aws-simple-migration), [https://docs.cloud.google.com/storage/docs/xml-api/overview](https://docs.cloud.google.com/storage/docs/xml-api/overview))
- credential (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage), [https://docs.cloud.google.com/storage/docs/authentication/signatures](https://docs.cloud.google.com/storage/docs/authentication/signatures), [https://docs.cloud.google.com/storage/docs/aws-simple-migration](https://docs.cloud.google.com/storage/docs/aws-simple-migration), [https://docs.cloud.google.com/storage/docs/xml-api/overview](https://docs.cloud.google.com/storage/docs/xml-api/overview))
- iam (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage), [https://docs.cloud.google.com/storage/docs/authentication/signatures](https://docs.cloud.google.com/storage/docs/authentication/signatures), [https://docs.cloud.google.com/storage/docs/aws-simple-migration](https://docs.cloud.google.com/storage/docs/aws-simple-migration), [https://docs.cloud.google.com/storage/docs/xml-api/overview](https://docs.cloud.google.com/storage/docs/xml-api/overview))
- key (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage), [https://docs.cloud.google.com/storage/docs/authentication/signatures](https://docs.cloud.google.com/storage/docs/authentication/signatures), [https://docs.cloud.google.com/storage/docs/aws-simple-migration](https://docs.cloud.google.com/storage/docs/aws-simple-migration), [https://docs.cloud.google.com/storage/docs/xml-api/overview](https://docs.cloud.google.com/storage/docs/xml-api/overview))
- permission (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage), [https://docs.cloud.google.com/storage/docs/authentication/signatures](https://docs.cloud.google.com/storage/docs/authentication/signatures), [https://docs.cloud.google.com/storage/docs/aws-simple-migration](https://docs.cloud.google.com/storage/docs/aws-simple-migration), [https://docs.cloud.google.com/storage/docs/xml-api/overview](https://docs.cloud.google.com/storage/docs/xml-api/overview))
- policy (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage), [https://docs.cloud.google.com/storage/docs/authentication/signatures](https://docs.cloud.google.com/storage/docs/authentication/signatures), [https://docs.cloud.google.com/storage/docs/aws-simple-migration](https://docs.cloud.google.com/storage/docs/aws-simple-migration), [https://docs.cloud.google.com/storage/docs/xml-api/overview](https://docs.cloud.google.com/storage/docs/xml-api/overview))
- private (evidence: [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage), [https://docs.cloud.google.com/storage/docs/authentication/signatures](https://docs.cloud.google.com/storage/docs/authentication/signatures), [https://docs.cloud.google.com/storage/docs/aws-simple-migration](https://docs.cloud.google.com/storage/docs/aws-simple-migration), [https://docs.cloud.google.com/storage/docs/xml-api/overview](https://docs.cloud.google.com/storage/docs/xml-api/overview))

## Official Evidence

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage)
- [https://docs.cloud.google.com/storage/docs/authentication/signatures](https://docs.cloud.google.com/storage/docs/authentication/signatures)
- [https://docs.cloud.google.com/storage/docs/aws-simple-migration](https://docs.cloud.google.com/storage/docs/aws-simple-migration)
- [https://docs.cloud.google.com/storage/docs/xml-api/overview](https://docs.cloud.google.com/storage/docs/xml-api/overview)
