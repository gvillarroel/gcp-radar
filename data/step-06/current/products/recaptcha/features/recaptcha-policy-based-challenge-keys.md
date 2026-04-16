---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:11.454Z"
product_name: "reCAPTCHA"
product_slug: "recaptcha"
feature_name: "reCAPTCHA policy-based challenge keys"
feature_slug: "recaptcha-policy-based-challenge-keys"
latest_feature_date: "2025-10-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/recaptcha/docs/choose-key-type"
  - "https://docs.cloud.google.com/recaptcha/docs/faq"
  - "https://docs.cloud.google.com/recaptcha/docs/integrate-account-verification"
  - "https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient"
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

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/recaptcha/docs/choose-key-type](https://docs.cloud.google.com/recaptcha/docs/choose-key-type)
- [https://docs.cloud.google.com/recaptcha/docs/faq](https://docs.cloud.google.com/recaptcha/docs/faq)
- [https://docs.cloud.google.com/recaptcha/docs/integrate-account-verification](https://docs.cloud.google.com/recaptcha/docs/integrate-account-verification)
- [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient)

## Supporting Pages

### Choose the appropriate key type \_|\_ reCAPTCHA \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/recaptcha/docs/choose-key-type](https://docs.cloud.google.com/recaptcha/docs/choose-key-type)
- Source ID: `site-iam-reference`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table summarizes the differences between score-based keys, checkbox keys, and policy-based challenge keys: Comparison category Score-based key (Recommended) Checkbox key Policy-based challenge key Description Score-based keys let you verify whether an interaction is legitimate without any user interaction.
- Score-based keys SCORE Checkbox keys CHECKBOX Policy-based challenge keys POLICY BASED CHALLENGE mobile For integration with Android and iOS apps. reCAPTCHA keys for Android SCORE reCAPTCHA keys for iOS SCORE WAF For web pages and APIs served through WAF or Edge compute servers. action-token keys SCORE and CHECKBOX session-token keys SCORE challenge-page keys INVISIBLE API For integration with APIs or clients like IoT devices that do not support the reCAPTCHA JavaScript or mobile SDKs. express keys SCORE Choose a reCAPTCHA key type for web To verify user interactions on websites, reCAPTCHA provides score-based keys , which don't trigger CAPTCHA challenges, checkbox keys, which trigger non-deterministic CAPTCHA challenges, and policy-based challenge keys, which trigger deterministic CAPTCHA challenges.
- Supported reCAPTCHA version reCAPTCHA score-based and checkbox keys reCAPTCHA score-based keys reCAPTCHA challenge-based keys embedded in an interstitial page Choose reCAPTCHA express keys for APIs Use reCAPTCHA express when your environment does not support a reCAPTCHA client integration like the JavaScript API or the mobile SDKs. reCAPTCHA express is suitable for APIs, websites, mobile applications, and IoT devices such as TVs and gaming consoles, but can also be used to protect websites or mobile applications when a client-side integration is infeasible.
- Home Documentation Security reCAPTCHA Guides Send feedback Choose the appropriate key type Stay organized with collections Save and categorize content based on your preferences. reCAPTCHA keys (also known as keys ) , let you protect your endpoints by verifying user interactions on your web pages and mobile applications.

### Frequently Asked Questions \_|\_ reCAPTCHA \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/recaptcha/docs/faq](https://docs.cloud.google.com/recaptcha/docs/faq)
- Source ID: `site-docs-root`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Examples Creating a checkbox site key that always returns "No CAPTCHA" (no challenge) and 1.0 (change --domains and --display-name below). gcloud recaptcha keys create -- testing - challenge = nocaptcha -- testing - score = 1.0 -- web -- domains = "domain1.com,domain2.com" -- display - name = "Always No CAPTCHA" -- integration - type = checkbox Creating a checkbox site key that always returns an unsolvable challenge (change --domains and --display-name below). gcloud recaptcha keys create -- testing - score = 0.0 -- testing - challenge = challenge -- web -- domains = "domain1.com,domain2.com" -- display - name = "Unsolvable Challenge" -- integration - type = checkbox Creating a score-based site key that always returns a set score (change --domains , --display-name , and --testing-score below). gcloud recaptcha keys create -- testing - score = 1.0 -- web -- domains = "domain1.com,domain2.com" -- display - name = "Always 1" -- integration - type = score I'd like to communicate with the reCAPTCHA REST API.
- For more comprehensive protection, integrate with reCAPTCHA Fraud Prevention , which allows you to send more complete transaction information and receive assessments for fraud such as card testing and stolen instrument usage.
- Home Documentation Security reCAPTCHA Resources Send feedback Frequently Asked Questions Stay organized with collections Save and categorize content based on your preferences.
- For more information, see the --testing-challenge and --testing-score options in the recaptcha keys create reference page.

### "Configure multi-factor authentication \_|\_ reCAPTCHA \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/recaptcha/docs/integrate-account-verification](https://docs.cloud.google.com/recaptcha/docs/integrate-account-verification)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Set up reCAPTCHA on your website by using score-based keys .
- Contact your assigned technical specialist for the full API documentation. // Initialize verification handle. const verificationHandle = grecaptcha . enterprise . eap . initTwoFactorVerificationHandle ( KEY ID , REQUEST TOKEN FROM ASSESSMENT ); // Call the challenge API. verificationHandle . challengeAccount (). then ( ( challengeResponse ) = > { if ( challengeResponse . isSuccess ()) { // Handle success: This means displaying an input for the end user to // enter the PIN that they received and then call the verifyAccount(pin) // method. } else { // Handle API failure } }); Verify an MFA code from the web page After you get the PIN from the end user, you must validate whether the PIN is correct.
- Append an additional twofactor parameter to your execute() function as shown in the following sample code: grecaptcha . enterprise . execute ( KEY ID , { action : 'login' , twofactor : true }). then ( token = > { // Handle the generated token. }); Replace KEY ID with the score-based key that you created for your website.
- When you provide such cross-site identifiers (identifiers that can be reused across sites), reCAPTCHA uses this information to improve protection for your user accounts based on cross-site models by flagging abusive account identifiers and using knowledge of cross-site abuse patterns related to these identifiers.

### "Class RecaptchaEnterpriseServiceAsyncClient (1.29.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 208
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import recaptchaenterprise v1 async def sample delete firewall policy(): Create a client client = recaptchaenterprise v1 .
- DeleteFirewallPolicyRequest ( name="name value", ) Make the request await client. delete firewall policy (request=request) Parameters Name Description request Optional[Union[ google.cloud.recaptchaenterprise v1.types.DeleteFirewallPolicyRequest , dict]] The request object.
- Returns Type Description google.cloud.recaptchaenterprise v1.types.Key A key used to identify and configure applications (web and/or mobile) that use reCAPTCHA Enterprise. delete firewall policy delete firewall policy ( request : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class RecaptchaEnterpriseServiceAsyncClient (1.29.0) Stay organized with collections Save and categorize content based on your preferences.

