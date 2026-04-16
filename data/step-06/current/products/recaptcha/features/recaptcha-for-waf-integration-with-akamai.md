---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:11.457Z"
product_name: "reCAPTCHA"
product_slug: "recaptcha"
feature_name: "reCAPTCHA for WAF integration with Akamai"
feature_slug: "recaptcha-for-waf-integration-with-akamai"
latest_feature_date: "2024-07-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/recaptcha/docs/best-practices-oat"
  - "https://docs.cloud.google.com/recaptcha/docs/choose-key-type"
  - "https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient"
keywords:
  - "recaptcha"
  - "for"
  - "waf"
  - "integration"
  - "with"
  - "akamai"
  - "this"
  - "connects"
---

# reCAPTCHA for WAF integration with Akamai

Product: reCAPTCHA
Coverage: MEDIUM

## Step 02 Summary

This integration connects reCAPTCHA for WAF with Akamai.

## Extended Definition

This integration connects reCAPTCHA for WAF with Akamai.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/recaptcha/docs/best-practices-oat](https://docs.cloud.google.com/recaptcha/docs/best-practices-oat)
- [https://docs.cloud.google.com/recaptcha/docs/choose-key-type](https://docs.cloud.google.com/recaptcha/docs/choose-key-type)
- [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient)

## Supporting Pages

### "Best practices for protection from automated threats \_|\_ reCAPTCHA \_\

- URL: [https://docs.cloud.google.com/recaptcha/docs/best-practices-oat](https://docs.cloud.google.com/recaptcha/docs/best-practices-oat)
- Source ID: `site-iam-reference`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, you can use reCAPTCHA for WAF and Google Cloud Armor integration If scraping involves APIs, use the Apigee Management APIs for additional mitigation.
- This implementation is designed with the relevant features of reCAPTCHA for the best fraud protection.
- For example, you can use reCAPTCHA for WAF and Google Cloud Armor integration .
- For example, you can use reCAPTCHA for WAF and Google Cloud Armor integration .

### Choose the appropriate key type \_|\_ reCAPTCHA \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/recaptcha/docs/choose-key-type](https://docs.cloud.google.com/recaptcha/docs/choose-key-type)
- Source ID: `site-iam-reference`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Score-based keys SCORE Checkbox keys CHECKBOX Policy-based challenge keys POLICY BASED CHALLENGE mobile For integration with Android and iOS apps. reCAPTCHA keys for Android SCORE reCAPTCHA keys for iOS SCORE WAF For web pages and APIs served through WAF or Edge compute servers. action-token keys SCORE and CHECKBOX session-token keys SCORE challenge-page keys INVISIBLE API For integration with APIs or clients like IoT devices that do not support the reCAPTCHA JavaScript or mobile SDKs. express keys SCORE Choose a reCAPTCHA key type for web To verify user interactions on websites, reCAPTCHA provides score-based keys , which don't trigger CAPTCHA challenges, checkbox keys, which trigger non-deterministic CAPTCHA challenges, and policy-based challenge keys, which trigger deterministic CAPTCHA challenges.
- The following table shows a brief comparison of the available reCAPTCHA for Google Cloud Armor features: Note: Only reCAPTCHA action-tokens are supported for the integration of mobile applications with Google Cloud Armor.
- Choose reCAPTCHA key types for WAF reCAPTCHA for Google Cloud Armor integrations support action-tokens, session-tokens and challenge page.
- Supported reCAPTCHA version reCAPTCHA score-based and checkbox keys reCAPTCHA score-based keys reCAPTCHA challenge-based keys embedded in an interstitial page Choose reCAPTCHA express keys for APIs Use reCAPTCHA express when your environment does not support a reCAPTCHA client integration like the JavaScript API or the mobile SDKs. reCAPTCHA express is suitable for APIs, websites, mobile applications, and IoT devices such as TVs and gaming consoles, but can also be used to protect websites or mobile applications when a client-side integration is infeasible.

### "Class RecaptchaEnterpriseServiceAsyncClient (1.29.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . firewall policy path firewall policy path ( project : str , firewallpolicy : str ) - > str Returns a fully-qualified firewall policy string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- This corresponds to the hashed account id field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the ip override data field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the ip override data field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

### "Class RecaptchaEnterpriseServiceClient (1.29.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient)
- Source ID: `site-python-reference`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- Normally, each value must be of type str , but for metadata keys ending with the suffix -bin , the corresponding values must be of type bytes . firewall policy path firewall policy path ( project : str , firewallpolicy : str ) - > str Returns a fully-qualified firewall policy string. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- This corresponds to the hashed account id field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the ip override data field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- This corresponds to the ip override data field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.

