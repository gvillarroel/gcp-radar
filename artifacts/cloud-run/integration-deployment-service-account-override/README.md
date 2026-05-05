# Integration deployment service account override

Product: Cloud Run
Feature slug: `integration-deployment-service-account-override`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Integration deployment service account override lets you set and override the deployment service account for Cloud Run integrations through the Google Cloud CLI.

## Lifecycle

- Latest feature date: 2024-02-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring), [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildConfig.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildConfig.Builder), [https://docs.cloud.google.com/run/docs/quickstarts/frameworks/deploy-angular-ssr-service](https://docs.cloud.google.com/run/docs/quickstarts/frameworks/deploy-angular-ssr-service))
- auth (evidence: [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring), [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildConfig.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildConfig.Builder), [https://docs.cloud.google.com/run/docs/quickstarts/frameworks/deploy-angular-ssr-service](https://docs.cloud.google.com/run/docs/quickstarts/frameworks/deploy-angular-ssr-service))
- iam (evidence: [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring), [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildConfig.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildConfig.Builder), [https://docs.cloud.google.com/run/docs/quickstarts/frameworks/deploy-angular-ssr-service](https://docs.cloud.google.com/run/docs/quickstarts/frameworks/deploy-angular-ssr-service))
- identity (evidence: [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring), [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildConfig.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildConfig.Builder), [https://docs.cloud.google.com/run/docs/quickstarts/frameworks/deploy-angular-ssr-service](https://docs.cloud.google.com/run/docs/quickstarts/frameworks/deploy-angular-ssr-service))
- logging (evidence: [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring), [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildConfig.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildConfig.Builder), [https://docs.cloud.google.com/run/docs/quickstarts/frameworks/deploy-angular-ssr-service](https://docs.cloud.google.com/run/docs/quickstarts/frameworks/deploy-angular-ssr-service))
- permission (evidence: [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring), [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildConfig.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildConfig.Builder), [https://docs.cloud.google.com/run/docs/quickstarts/frameworks/deploy-angular-ssr-service](https://docs.cloud.google.com/run/docs/quickstarts/frameworks/deploy-angular-ssr-service))
- role (evidence: [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring), [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildConfig.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildConfig.Builder), [https://docs.cloud.google.com/run/docs/quickstarts/frameworks/deploy-angular-ssr-service](https://docs.cloud.google.com/run/docs/quickstarts/frameworks/deploy-angular-ssr-service))
- security (evidence: [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring), [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildConfig.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildConfig.Builder), [https://docs.cloud.google.com/run/docs/quickstarts/frameworks/deploy-angular-ssr-service](https://docs.cloud.google.com/run/docs/quickstarts/frameworks/deploy-angular-ssr-service))

## Official Evidence

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildConfig.Builder](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.BuildConfig.Builder)
- [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring)
- [https://docs.cloud.google.com/run/docs/quickstarts/frameworks/deploy-angular-ssr-service](https://docs.cloud.google.com/run/docs/quickstarts/frameworks/deploy-angular-ssr-service)
