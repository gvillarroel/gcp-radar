---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:52.178Z"
product_name: "reCAPTCHA"
product_slug: "recaptcha"
feature_name: "reCAPTCHA policy-based challenge keys"
feature_slug: "recaptcha-policy-based-challenge-keys"
latest_feature_date: "2025-10-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/recaptcha/docs/create-key-website"
  - "https://docs.cloud.google.com/recaptcha/docs/keys"
  - "https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient"
keywords:
  - "recaptcha"
  - "policy"
  - "based"
  - "challenge"
  - "keys"
  - "let"
  - "you"
  - "deterministically"
---

# reCAPTCHA policy-based challenge keys

Product: reCAPTCHA
Coverage: MEDIUM

## Step 02 Summary

Policy-based challenge keys let you deterministically trigger CAPTCHA challenges based on a score threshold and challenge difficulty; Policy-based challenge keys let you deterministically trigger CAPTCHA challenges based on a score threshold and challenge difficulty.

## Extended Definition

Policy-based challenge keys let you deterministically trigger CAPTCHA challenges based on a score threshold and challenge difficulty; Policy-based challenge keys let you deterministically trigger CAPTCHA challenges based on a score threshold and challenge difficulty.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/recaptcha/docs/create-key-website](https://docs.cloud.google.com/recaptcha/docs/create-key-website)
- [https://docs.cloud.google.com/recaptcha/docs/keys](https://docs.cloud.google.com/recaptcha/docs/keys)
- [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient)

## Supporting Pages

### Create reCAPTCHA keys for websites | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/recaptcha/docs/create-key-website](https://docs.cloud.google.com/recaptcha/docs/create-key-website)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create reCAPTCHA keys for websites Google Cloud Documentation Source URL: https://docs.cloud.google.com/recaptcha/docs/create-key-website Go to the reCAPTCHA Admin console. ...
- If you want to create a score-based key, select Score based (v3).
- If you want to create a checkbox key, select Challenge (v2).
- In the Label field, enter a name that you can use to identify your site.

### reCAPTCHA keys overview | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/recaptcha/docs/keys](https://docs.cloud.google.com/recaptcha/docs/keys)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- reCAPTCHA keys overview Google Cloud Documentation Source URL: https://docs.cloud.google.com/recaptcha/docs/keys This document provides an overview of reCAPTCHA keys (also known as keys).

### Class RecaptchaEnterpriseServiceClient (1.29.0) | Python client libraries | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient)
- Source ID: `site-python-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Class RecaptchaEnterpriseServiceClient (1.29.0) Python client libraries Google Cloud Documentation Source URL: https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise v1.services.recaptcha enterprise service.RecaptchaEnterpriseServiceClient RecaptchaEnterpriseServiceClient( , credentials: typing.Optional[google.auth.credentials.Credentials] = None, transport: typing.Optional[typing.Union[str, google.cloud.recaptchaenterprise v1.services.recaptcha enterprise service.transports.base.RecaptchaEnterpriseServiceTransport, typing.Callable[[...], google.cloud.recaptchaenterprise v1.services.recaptcha enterprise service.transports.base.RecaptchaEnterpriseServiceTransport]]] = None, client options: typing.Optional[typing.Union[google.api core.client options.ClientOptions, dict]] = None, client info: google.api core.gapic v1.client info.ClientInfo = &lt;google.api core.gapic v1.client info.ClientInfo object&gt;)

