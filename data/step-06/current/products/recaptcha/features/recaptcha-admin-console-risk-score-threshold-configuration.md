---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:11.455Z"
product_name: "reCAPTCHA"
product_slug: "recaptcha"
feature_name: "reCAPTCHA Admin console risk score threshold configuration"
feature_slug: "recaptcha-admin-console-risk-score-threshold-configuration"
latest_feature_date: "2025-08-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/recaptcha/docs/fraud-prevention"
  - "https://docs.cloud.google.com/recaptcha/docs/choose-key-type"
  - "https://docs.cloud.google.com/recaptcha/docs/integrate-account-verification"
  - "https://docs.cloud.google.com/recaptcha/docs/migrate-recaptcha"
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

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/recaptcha/docs/fraud-prevention](https://docs.cloud.google.com/recaptcha/docs/fraud-prevention)
- [https://docs.cloud.google.com/recaptcha/docs/choose-key-type](https://docs.cloud.google.com/recaptcha/docs/choose-key-type)
- [https://docs.cloud.google.com/recaptcha/docs/integrate-account-verification](https://docs.cloud.google.com/recaptcha/docs/integrate-account-verification)
- [https://docs.cloud.google.com/recaptcha/docs/migrate-recaptcha](https://docs.cloud.google.com/recaptcha/docs/migrate-recaptcha)

## Supporting Pages

### "Protect payment transactions with Transaction defense \_|\_ reCAPTCHA \_\

- URL: [https://docs.cloud.google.com/recaptcha/docs/fraud-prevention](https://docs.cloud.google.com/recaptcha/docs/fraud-prevention)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following are some examples of how you can use the transactionRisk score: Risk tolerance Recommended threshold Maximum false positive rate Example usage Low 0.5 5% Require additional verification, such as 2FA, before accepting transaction Medium 0.7 1% Send transaction to manual review High 0.9 0.1% Reject transaction What's next To improve the quality of fraud detection, learn about additional signals .
- In the response of the create assessment API request, reCAPTCHA provides a score for transaction risk and additional Explainability reasons (for example, HIGH TRANSACTION VELOCITY ), if applicable.
- The following example shows how to integrate a score-based key on a credit card transaction event: function submitForm() { grecaptcha.enterprise.ready(function() { grecaptcha.enterprise.execute( 'reCAPTCHA site key', {action: 'purchase'}).then(function(token) { document.getElementById("token").value = token; document.getElementByID("paymentForm").submit(); }); }); } <form id="paymentForm" action="?" method="POST"> Total: $1.99 Credit Card Number: <input name="cc-number" id="cc-number" autocomplete="cc-number"><br/> <input type="hidden" id="token" name="recaptcha token"/> <button onclick="submitForm()">Purchase</button> </form> <script src="https://www.google.com/recaptcha/enterprise.js" async defer></script> You can experiment with this code in JSFiddle by clicking the <> icon in the top-right corner of the code window. <html> <head> <title>Protected Payment</title> <script src="https://www.google.com/recaptcha/enterprise.js" async defer></script> <script> function submitForm() { grecaptcha.enterprise.ready(function() { grecaptcha.enterprise.execute( 'reCAPTCHA site key', {action: 'purchase'}).then(function(token) { document.getElementById("token").value = token; document.getElementByID("paymentForm").submit(); }); }); } </script> </head> <body> <form id="paymentForm" action="?" method="POST"> Total: $1.99 Credit Card Number: <input name="cc-number" id="cc-number" autocomplete="cc-number"><br/> <input type="hidden" id="token" name="recaptcha token"/> <button onclick="submitForm()">Purchase</button> </form> </body> </html> Frontend Integration - Create assessments with transaction data To receive payment fraud verdicts, create assessments with Transaction Data by using the additional fields in the projects.assessments.create method.
- User accountId User email User phoneNumber Important: Without this minimum set of data, your Assessment response won't contain a Transaction defense Assessment. { "event" : { "token" : " YOUR TOKEN " , "site key" : " KEY ID " , "expected action" : " YOUR CHECKOUT ACTION NAME " , "transaction data" : { "transaction id" : "txid-1234567890" , "payment method" : "credit-card" , "card bin" : "411111" , "card last four" : "1234" , "currency code" : "USD" , "value" : 39.98 , "user" : { "email" : "someEmailAddress@example.com" }, "billing address" : { "recipient" : "name1 name2" , "address" : [ "123 Street Name" , "Apt 1" ], "locality" : "Sunnyvale" , "administrative area" : "CA" , "region code" : "USA" , "postal code" : "123456" } } } } To improve the quality of scores, we recommend that you also send additional signals .

### Choose the appropriate key type \_|\_ reCAPTCHA \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/recaptcha/docs/choose-key-type](https://docs.cloud.google.com/recaptcha/docs/choose-key-type)
- Source ID: `site-iam-reference`
- Final score: 167
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported reCAPTCHA version reCAPTCHA score-based and checkbox keys reCAPTCHA score-based keys reCAPTCHA challenge-based keys embedded in an interstitial page Choose reCAPTCHA express keys for APIs Use reCAPTCHA express when your environment does not support a reCAPTCHA client integration like the JavaScript API or the mobile SDKs. reCAPTCHA express is suitable for APIs, websites, mobile applications, and IoT devices such as TVs and gaming consoles, but can also be used to protect websites or mobile applications when a client-side integration is infeasible.
- With policy-based challenge keys, CAPTCHA challenges are triggered if the initial score that is computed by reCAPTCHA is below the configured score threshold.
- Score-based keys SCORE Checkbox keys CHECKBOX Policy-based challenge keys POLICY BASED CHALLENGE mobile For integration with Android and iOS apps. reCAPTCHA keys for Android SCORE reCAPTCHA keys for iOS SCORE WAF For web pages and APIs served through WAF or Edge compute servers. action-token keys SCORE and CHECKBOX session-token keys SCORE challenge-page keys INVISIBLE API For integration with APIs or clients like IoT devices that do not support the reCAPTCHA JavaScript or mobile SDKs. express keys SCORE Choose a reCAPTCHA key type for web To verify user interactions on websites, reCAPTCHA provides score-based keys , which don't trigger CAPTCHA challenges, checkbox keys, which trigger non-deterministic CAPTCHA challenges, and policy-based challenge keys, which trigger deterministic CAPTCHA challenges.
- For example, you can choose to apply a session-token for all pages, and based on the session-token's score, you can redirect suspicious requests to the reCAPTCHA challenge page.

### "Configure multi-factor authentication \_|\_ reCAPTCHA \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/recaptcha/docs/integrate-account-verification](https://docs.cloud.google.com/recaptcha/docs/integrate-account-verification)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Append an additional twofactor parameter to your execute() function as shown in the following sample code: grecaptcha . enterprise . execute ( KEY ID , { action : 'login' , twofactor : true }). then ( token = > { // Handle the generated token. }); Replace KEY ID with the score-based key that you created for your website.
- Instrument the critical workflow on your website Pass the necessary information to reCAPTCHA through the execute() function for the risk assessment.
- Understand the configuration process of MFA The MFA feature of reCAPTCHA is implemented on top of the regular reCAPTCHA workflow.
- In the Google Cloud console, go to the reCAPTCHA page.

### Migrate from reCAPTCHA Classic \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/recaptcha/docs/migrate-recaptcha](https://docs.cloud.google.com/recaptcha/docs/migrate-recaptcha)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers ` -Uri "https://recaptchaenterprise.googleapis.com/v1/projects/ PROJECT ID /keys/ SITE KEY :migrate" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT-ID /keys/6Ldqgs0UAAAAAIn4k7YxEB-LwEh5S9-Gv6IIWB8m", "displayName": "My site key", "webSettings": { "allowAllDomains": false, "allowedDomains": [ recaptcha.net ], "allowAmpTraffic": false, "integrationType": "SCORE", "challengeSecurityPreference": "CHALLENGE SECURITY PREFERENCE UNSPECIFIED" } } To verify that the site key is migrated, do the following: Google Cloud console Go to the reCAPTCHA page and find the migrated site key in the reCAPTCHA keys section.
- Use the gcloud recaptcha keys migrate command as shown in the following example: gcloud recaptcha keys migrate SITE KEY --project PROJECT-ID Provide the following values: SITE KEY : the active site key that you copied from the reCAPTCHA Admin console.
- To execute the migration process, you must have a reCAPTCHA user account that satisfies the following requirements: In the reCAPTCHA Admin console, the user account is listed as an owner for the site key you want to migrate.
- After a site key is migrated to reCAPTCHA, its usage starts being recorded for display in the Google Cloud console within one hour , including usage and score-related dashboards.

