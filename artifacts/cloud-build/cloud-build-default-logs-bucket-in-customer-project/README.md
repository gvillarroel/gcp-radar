# Cloud Build default logs bucket in customer project

Product: Cloud Build
Feature slug: `cloud-build-default-logs-bucket-in-customer-project`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Build supports using default build logs buckets in a user project’s same-region location through the defaultLogsBucketBehavior setting.

## Lifecycle

- Latest feature date: 2023-03-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python), [https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts](https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts), [https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run](https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run))
- allow (evidence: [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python), [https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts](https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts), [https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run](https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run))
- auth (evidence: [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python), [https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts](https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts), [https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run](https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run))
- iam (evidence: [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python), [https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts](https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts), [https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run](https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run))
- identity (evidence: [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python), [https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts](https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts), [https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run](https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run))
- logging (evidence: [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python), [https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts](https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts), [https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run](https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run))
- permission (evidence: [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python), [https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts](https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts), [https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run](https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run))
- role (evidence: [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python), [https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts](https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts), [https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run](https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run))

## Official Evidence

- [https://docs.cloud.google.com/build/docs/building/build-containerize-python](https://docs.cloud.google.com/build/docs/building/build-containerize-python)
- [https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts](https://docs.cloud.google.com/build/docs/configuring-builds/build-test-deploy-artifacts)
- [https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run](https://docs.cloud.google.com/build/docs/deploying-builds/deploy-cloud-run)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
