---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:52.188Z"
product_name: "reCAPTCHA"
product_slug: "recaptcha"
feature_name: "reCAPTCHA Enterprise recommended score threshold system"
feature_slug: "recaptcha-enterprise-recommended-score-threshold-system"
latest_feature_date: "2022-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceSettings"
keywords:
  - "recaptcha"
  - "enterprise"
  - "recommended"
  - "score"
  - "threshold"
  - "system"
  - "calculates"
  - "suggested"
---

# reCAPTCHA Enterprise recommended score threshold system

Product: reCAPTCHA
Coverage: MEDIUM

## Step 02 Summary

Calculates a suggested action threshold from a key's score history.

## Extended Definition

Calculates a suggested action threshold from a key's score history.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceSettings](https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceSettings)

## Supporting Pages

### Class RecaptchaEnterpriseServiceClient (1.29.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient)
- Source ID: `site-python-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Class RecaptchaEnterpriseServiceClient (1.29.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise v1.services.recaptcha enterprise service.RecaptchaEnterpriseServiceClient RecaptchaEnterpriseServiceClient( , credentials: typing.Optional[google.auth.credentials.Credentials] = None, transport: typing.Optional[typing.Union[str, google.cloud.recaptchaenterprise v1.services.recaptcha enterprise service.transports.base.RecaptchaEnterpriseServiceTransport, typing.Callable[[...], google.cloud.recaptchaenterprise v1.services.recaptcha enterprise service.transports.base.RecaptchaEnterpriseServiceTransport]]] = None, client options: typing.Optional[typing.Union[google.api core.client options.ClientOptions, dict]] = None, client info: google.api core.gapic v1.client info.ClientInfo = &lt;google.api core.gapic v1.client info.ClientInfo object&gt;)

### Class RecaptchaEnterpriseServiceClient (3.75.0) | Java client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient)
- Source ID: `site-java-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Class RecaptchaEnterpriseServiceClient (3.75.0) Java client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try (RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient = RecaptchaEnterpriseServiceClient.create()) { ProjectName parent = ProjectName.of(&quot;[PROJECT]&quot;); Assessment assessment = Assessment.newBuilder().build(); Assessment response = recaptchaEnterpriseServiceClient.createAssessment(parent, assessment); }

### Class RecaptchaEnterpriseServiceSettings (3.75.0) | Java client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceSettings](https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceSettings)
- Source ID: `site-java-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Class RecaptchaEnterpriseServiceSettings (3.75.0) Java client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceSettings Settings class to configure an instance of RecaptchaEnterpriseServiceClient.

