---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:52.182Z"
product_name: "reCAPTCHA"
product_slug: "recaptcha"
feature_name: "reCAPTCHA password leak detection Docker container"
feature_slug: "recaptcha-password-leak-detection-docker-container"
latest_feature_date: "2024-07-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient"
  - "https://docs.cloud.google.com/recaptcha/docs/authentication"
keywords:
  - "recaptcha"
  - "password"
  - "leak"
  - "detection"
  - "docker"
  - "container"
  - "the"
  - "client"
---

# reCAPTCHA password leak detection Docker container

Product: reCAPTCHA
Coverage: MEDIUM

## Step 02 Summary

The Docker container client detects password leaks and breached credentials to help prevent account takeovers and credential stuffing attacks.

## Extended Definition

The Docker container client detects password leaks and breached credentials to help prevent account takeovers and credential stuffing attacks.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient)
- [https://docs.cloud.google.com/recaptcha/docs/authentication](https://docs.cloud.google.com/recaptcha/docs/authentication)

## Supporting Pages

### Class RecaptchaEnterpriseServiceClient (1.29.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient)
- Source ID: `site-python-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Class RecaptchaEnterpriseServiceClient (1.29.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise v1.services.recaptcha enterprise service.RecaptchaEnterpriseServiceClient RecaptchaEnterpriseServiceClient( , credentials: typing.Optional[google.auth.credentials.Credentials] = None, transport: typing.Optional[typing.Union[str, google.cloud.recaptchaenterprise v1.services.recaptcha enterprise service.transports.base.RecaptchaEnterpriseServiceTransport, typing.Callable[[...], google.cloud.recaptchaenterprise v1.services.recaptcha enterprise service.transports.base.RecaptchaEnterpriseServiceTransport]]] = None, client options: typing.Optional[typing.Union[google.api core.client options.ClientOptions, dict]] = None, client info: google.api core.gapic v1.client info.ClientInfo = &lt;google.api core.gapic v1.client info.ClientInfo object&gt;)

### Class RecaptchaEnterpriseServiceClient (3.75.0) | Java client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient)
- Source ID: `site-java-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Class RecaptchaEnterpriseServiceClient (3.75.0) Java client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try (RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient = RecaptchaEnterpriseServiceClient.create()) { ProjectName parent = ProjectName.of(&quot;[PROJECT]&quot;); Assessment assessment = Assessment.newBuilder().build(); Assessment response = recaptchaEnterpriseServiceClient.createAssessment(parent, assessment); }

### Authenticate to reCAPTCHA | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/recaptcha/docs/authentication](https://docs.cloud.google.com/recaptcha/docs/authentication)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Authenticate to reCAPTCHA Google Cloud Documentation Source URL: https://docs.cloud.google.com/recaptcha/docs/authentication This document describes how to authenticate to reCAPTCHA programmatically.
- How you authenticate to reCAPTCHA depends on the interface you use to access the API and the environment where your code is running.
- For more information about Google Cloud authentication, see the Authentication methods.

