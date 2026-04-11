---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:52.180Z"
product_name: "reCAPTCHA"
product_slug: "recaptcha"
feature_name: "reCAPTCHA Admin console risk score threshold configuration"
feature_slug: "recaptcha-admin-console-risk-score-threshold-configuration"
latest_feature_date: "2025-08-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/recaptcha/docs/authentication"
  - "https://docs.cloud.google.com/recaptcha/docs/implementation-workflow"
  - "https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient"
keywords:
  - "recaptcha"
  - "admin"
  - "console"
  - "risk"
  - "score"
  - "threshold"
  - "configuration"
  - "the"
---

# reCAPTCHA Admin console risk score threshold configuration

Product: reCAPTCHA
Coverage: MEDIUM

## Step 02 Summary

The reCAPTCHA Admin console offers an improved interface for configuring risk score thresholds and reviewing transactions above those thresholds.

## Extended Definition

The reCAPTCHA Admin console offers an improved interface for configuring risk score thresholds and reviewing transactions above those thresholds.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/recaptcha/docs/authentication](https://docs.cloud.google.com/recaptcha/docs/authentication)
- [https://docs.cloud.google.com/recaptcha/docs/implementation-workflow](https://docs.cloud.google.com/recaptcha/docs/implementation-workflow)
- [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient)

## Supporting Pages

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

### Understand the implementation of reCAPTCHA | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/recaptcha/docs/implementation-workflow](https://docs.cloud.google.com/recaptcha/docs/implementation-workflow)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Understand the implementation of reCAPTCHA Google Cloud Documentation Source URL: https://docs.cloud.google.com/recaptcha/docs/implementation-workflow This document shows the implementation path of reCAPTCHA to protect your websites, mobile applications, APIs, or content served by a web application firewall (WAF).
- The following illustration provides a high-level overview of the implementation of reCAPTCHA on websites:

### Class RecaptchaEnterpriseServiceClient (1.29.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient)
- Source ID: `site-python-reference`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- Class RecaptchaEnterpriseServiceClient (1.29.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise v1.services.recaptcha enterprise service.RecaptchaEnterpriseServiceClient RecaptchaEnterpriseServiceClient( , credentials: typing.Optional[google.auth.credentials.Credentials] = None, transport: typing.Optional[typing.Union[str, google.cloud.recaptchaenterprise v1.services.recaptcha enterprise service.transports.base.RecaptchaEnterpriseServiceTransport, typing.Callable[[...], google.cloud.recaptchaenterprise v1.services.recaptcha enterprise service.transports.base.RecaptchaEnterpriseServiceTransport]]] = None, client options: typing.Optional[typing.Union[google.api core.client options.ClientOptions, dict]] = None, client info: google.api core.gapic v1.client info.ClientInfo = &lt;google.api core.gapic v1.client info.ClientInfo object&gt;)

