---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:11.455Z"
product_name: "reCAPTCHA"
product_slug: "recaptcha"
feature_name: "Transaction Defense Reasons"
feature_slug: "transaction-defense-reasons"
latest_feature_date: "2025-08-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/recaptcha/docs/fraud-prevention"
  - "https://docs.cloud.google.com/recaptcha/docs/account-defender-mobile"
  - "https://docs.cloud.google.com/recaptcha/docs/account-defender"
  - "https://docs.cloud.google.com/recaptcha/docs/annotate-assessment-fp"
keywords:
  - "transaction"
  - "defense"
  - "reasons"
  - "provides"
  - "human"
  - "readable"
  - "explanations"
  - "for"
---

# Transaction Defense Reasons

Product: reCAPTCHA
Coverage: MEDIUM

## Step 02 Summary

Transaction Defense Reasons provides human-readable explanations for why a transaction receives a high risk score.

## Extended Definition

Transaction Defense Reasons provides human-readable explanations for why a transaction receives a high risk score.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/recaptcha/docs/fraud-prevention](https://docs.cloud.google.com/recaptcha/docs/fraud-prevention)
- [https://docs.cloud.google.com/recaptcha/docs/account-defender-mobile](https://docs.cloud.google.com/recaptcha/docs/account-defender-mobile)
- [https://docs.cloud.google.com/recaptcha/docs/account-defender](https://docs.cloud.google.com/recaptcha/docs/account-defender)
- [https://docs.cloud.google.com/recaptcha/docs/annotate-assessment-fp](https://docs.cloud.google.com/recaptcha/docs/annotate-assessment-fp)

## Supporting Pages

### "Protect payment transactions with Transaction defense \_|\_ reCAPTCHA \_\

- URL: [https://docs.cloud.google.com/recaptcha/docs/fraud-prevention](https://docs.cloud.google.com/recaptcha/docs/fraud-prevention)
- Source ID: `site-docs-root`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the response of the create assessment API request, reCAPTCHA provides a score for transaction risk and additional Explainability reasons (for example, HIGH TRANSACTION VELOCITY ), if applicable.
- The following example shows how to integrate a score-based key on a credit card transaction event: function submitForm() { grecaptcha.enterprise.ready(function() { grecaptcha.enterprise.execute( 'reCAPTCHA site key', {action: 'purchase'}).then(function(token) { document.getElementById("token").value = token; document.getElementByID("paymentForm").submit(); }); }); } <form id="paymentForm" action="?" method="POST"> Total: $1.99 Credit Card Number: <input name="cc-number" id="cc-number" autocomplete="cc-number"><br/> <input type="hidden" id="token" name="recaptcha token"/> <button onclick="submitForm()">Purchase</button> </form> <script src="https://www.google.com/recaptcha/enterprise.js" async defer></script> You can experiment with this code in JSFiddle by clicking the <> icon in the top-right corner of the code window. <html> <head> <title>Protected Payment</title> <script src="https://www.google.com/recaptcha/enterprise.js" async defer></script> <script> function submitForm() { grecaptcha.enterprise.ready(function() { grecaptcha.enterprise.execute( 'reCAPTCHA site key', {action: 'purchase'}).then(function(token) { document.getElementById("token").value = token; document.getElementByID("paymentForm").submit(); }); }); } </script> </head> <body> <form id="paymentForm" action="?" method="POST"> Total: $1.99 Credit Card Number: <input name="cc-number" id="cc-number" autocomplete="cc-number"><br/> <input type="hidden" id="token" name="recaptcha token"/> <button onclick="submitForm()">Purchase</button> </form> </body> </html> Frontend Integration - Create assessments with transaction data To receive payment fraud verdicts, create assessments with Transaction Data by using the additional fields in the projects.assessments.create method.
- User accountId User email User phoneNumber Important: Without this minimum set of data, your Assessment response won't contain a Transaction defense Assessment. { "event" : { "token" : " YOUR TOKEN " , "site key" : " KEY ID " , "expected action" : " YOUR CHECKOUT ACTION NAME " , "transaction data" : { "transaction id" : "txid-1234567890" , "payment method" : "credit-card" , "card bin" : "411111" , "card last four" : "1234" , "currency code" : "USD" , "value" : 39.98 , "user" : { "email" : "someEmailAddress@example.com" }, "billing address" : { "recipient" : "name1 name2" , "address" : [ "123 Street Name" , "Apt 1" ], "locality" : "Sunnyvale" , "administrative area" : "CA" , "region code" : "USA" , "postal code" : "123456" } } } } To improve the quality of scores, we recommend that you also send additional signals .
- The following are some examples of how you can use the transactionRisk score: Risk tolerance Recommended threshold Maximum false positive rate Example usage Low 0.5 5% Require additional verification, such as 2FA, before accepting transaction Medium 0.7 1% Send transaction to manual review High 0.9 0.1% Reject transaction What's next To improve the quality of fraud detection, learn about additional signals .

### "Detect and prevent account-related fraudulent activities on mobile applications\

- URL: [https://docs.cloud.google.com/recaptcha/docs/account-defender-mobile](https://docs.cloud.google.com/recaptcha/docs/account-defender-mobile)
- Source ID: `site-iam-reference`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Account Takeover (ATO) risk score feature adds a numerical risk score and human-readable explanations to the Account defense assessment.
- List<AccountDefenderLabel> defenderResult = response . getAccountDefenderAssessment (). getLabelsList (); // Based on the result, can you choose next steps. // If the 'defenderResult' field is empty, it indicates that Account Defender did not have // anything to add to the score. // Few result labels: ACCOUNT DEFENDER LABEL UNSPECIFIED, PROFILE MATCH, // SUSPICIOUS LOGIN ACTIVITY, SUSPICIOUS ACCOUNT CREATION, RELATED ACCOUNTS NUMBER HIGH. // For more information on interpreting the assessment, see: // https://cloud.google.com/recaptcha-enterprise/docs/account-defender#interpret-assessment-details System . out . println ( "Account Defender Assessment Result: " + defenderResult ); } } private static boolean checkTokenIntegrity ( TokenProperties tokenProperties , String recaptchaAction ) { // Check if the token is valid. if ( ! tokenProperties . getValid ()) { System . out . println ( "The Account Defender Assessment call failed because the token was: " + tokenProperties . getInvalidReason (). name ()); return false ; } // Check if the expected action was executed. if ( ! tokenProperties . getAction (). equals ( recaptchaAction )) { System . out . printf ( "The action attribute in the reCAPTCHA tag '%s' does not match " + "the action '%s' you are expecting to score" , tokenProperties . getAction (), recaptchaAction ); return false ; } return true ; } } Interpret the risk verdict of the critical user events When you create an assessment with Account defense enabled, Account defense returns accountDefenderAssessment as part of the assessment response.
- CreateAssessmentRequest createAssessmentRequest = CreateAssessmentRequest . newBuilder () . setParent ( ProjectName . of ( projectId ). toString ()) . setAssessment ( Assessment . newBuilder (). setEvent ( event ). build ()) . build (); Assessment response = client . createAssessment ( createAssessmentRequest ); // Check integrity of the response token. if ( ! checkTokenIntegrity ( response . getTokenProperties (), recaptchaAction )) { return ; } // Get the reason(s) and the reCAPTCHA risk score. // For more information on interpreting the assessment, // see: https://cloud.google.com/recaptcha-enterprise/docs/interpret-assessment for ( ClassificationReason reason : response . getRiskAnalysis (). getReasonsList ()) { System . out . println ( reason ); } float recaptchaScore = response . getRiskAnalysis (). getScore (); System . out . println ( "The reCAPTCHA score is: " + recaptchaScore ); String assessmentName = response . getName (); System . out . println ( "Assessment name: " + assessmentName . substring ( assessmentName . lastIndexOf ( "/" ) + 1 )); // Get the Account Defender result. com . google . recaptchaenterprise . v1 .
- By using the site-specific model, reCAPTCHA Account defense helps you detect the following: Suspicious activities Accounts with similar behaviors Requests coming from devices that were marked as trusted for specific users Based on the analysis of reCAPTCHA Account defense and the site-specific model, you can take the following actions: Restrict or disable fraudulent accounts.

### "Detect and prevent account-related fraudulent activities on websites \_\

- URL: [https://docs.cloud.google.com/recaptcha/docs/account-defender](https://docs.cloud.google.com/recaptcha/docs/account-defender)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Account Takeover (ATO) risk score feature adds a numerical risk score and human-readable explanations to the Account defense assessment.
- List<AccountDefenderLabel> defenderResult = response . getAccountDefenderAssessment (). getLabelsList (); // Based on the result, can you choose next steps. // If the 'defenderResult' field is empty, it indicates that Account Defender did not have // anything to add to the score. // Few result labels: ACCOUNT DEFENDER LABEL UNSPECIFIED, PROFILE MATCH, // SUSPICIOUS LOGIN ACTIVITY, SUSPICIOUS ACCOUNT CREATION, RELATED ACCOUNTS NUMBER HIGH. // For more information on interpreting the assessment, see: // https://cloud.google.com/recaptcha-enterprise/docs/account-defender#interpret-assessment-details System . out . println ( "Account Defender Assessment Result: " + defenderResult ); } } private static boolean checkTokenIntegrity ( TokenProperties tokenProperties , String recaptchaAction ) { // Check if the token is valid. if ( ! tokenProperties . getValid ()) { System . out . println ( "The Account Defender Assessment call failed because the token was: " + tokenProperties . getInvalidReason (). name ()); return false ; } // Check if the expected action was executed. if ( ! tokenProperties . getAction (). equals ( recaptchaAction )) { System . out . printf ( "The action attribute in the reCAPTCHA tag '%s' does not match " + "the action '%s' you are expecting to score" , tokenProperties . getAction (), recaptchaAction ); return false ; } return true ; } } Interpret the risk verdict of the critical user events When you create an assessment with Account defense enabled, Account defense returns accountDefenderAssessment as part of the assessment response.
- CreateAssessmentRequest createAssessmentRequest = CreateAssessmentRequest . newBuilder () . setParent ( ProjectName . of ( projectId ). toString ()) . setAssessment ( Assessment . newBuilder (). setEvent ( event ). build ()) . build (); Assessment response = client . createAssessment ( createAssessmentRequest ); // Check integrity of the response token. if ( ! checkTokenIntegrity ( response . getTokenProperties (), recaptchaAction )) { return ; } // Get the reason(s) and the reCAPTCHA risk score. // For more information on interpreting the assessment, // see: https://cloud.google.com/recaptcha-enterprise/docs/interpret-assessment for ( ClassificationReason reason : response . getRiskAnalysis (). getReasonsList ()) { System . out . println ( reason ); } float recaptchaScore = response . getRiskAnalysis (). getScore (); System . out . println ( "The reCAPTCHA score is: " + recaptchaScore ); String assessmentName = response . getName (); System . out . println ( "Assessment name: " + assessmentName . substring ( assessmentName . lastIndexOf ( "/" ) + 1 )); // Get the Account Defender result. com . google . recaptchaenterprise . v1 .
- The following example shows how to load the reCAPTCHA JavaScript script in a web page. <head> <script src="https://www.google.com/recaptcha/enterprise.js?render= KEY ID "></script> .... </head> Report on critical user actions To detect suspicious activity patterns and build a better model of typical activity patterns on your site, reCAPTCHA account defense needs the information about critical user actions.

### "Annotate assessments with transaction events \_|\_ reCAPTCHA \_|\_ Google\

- URL: [https://docs.cloud.google.com/recaptcha/docs/annotate-assessment-fp](https://docs.cloud.google.com/recaptcha/docs/annotate-assessment-fp)
- Source ID: `site-iam-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- For example, you can provide the transaction information to Transaction defense as a transaction event in the following scenarios: The payment provider accepts or declines the transaction.
- For best performance, Transaction defense needs visibility into payment lifecycle events for transactions.
- CHARGEBACK INQUIRY Indicates that the merchant has received a chargeback inquiry due to fraud for the transaction, requesting additional information before a fraud chargeback is officially issued and a formal chargeback notification is sent.
- In the transaction event reason field, either include clarifying terms to provide more context on the reason for the event, or provide reason codes that are obtained directly from the payment network or card issuer.

