---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:11.462Z"
product_name: "reCAPTCHA"
product_slug: "recaptcha"
feature_name: "reCAPTCHA Enterprise recommended score threshold system"
feature_slug: "recaptcha-enterprise-recommended-score-threshold-system"
latest_feature_date: "2022-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/recaptcha/docs/account-defender-mobile"
  - "https://docs.cloud.google.com/recaptcha/docs/account-defender"
  - "https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient"
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

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/recaptcha/docs/account-defender-mobile](https://docs.cloud.google.com/recaptcha/docs/account-defender-mobile)
- [https://docs.cloud.google.com/recaptcha/docs/account-defender](https://docs.cloud.google.com/recaptcha/docs/account-defender)
- [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient)

## Supporting Pages

### "Detect and prevent account-related fraudulent activities on mobile applications\

- URL: [https://docs.cloud.google.com/recaptcha/docs/account-defender-mobile](https://docs.cloud.google.com/recaptcha/docs/account-defender-mobile)
- Source ID: `site-iam-reference`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- List<AccountDefenderLabel> defenderResult = response . getAccountDefenderAssessment (). getLabelsList (); // Based on the result, can you choose next steps. // If the 'defenderResult' field is empty, it indicates that Account Defender did not have // anything to add to the score. // Few result labels: ACCOUNT DEFENDER LABEL UNSPECIFIED, PROFILE MATCH, // SUSPICIOUS LOGIN ACTIVITY, SUSPICIOUS ACCOUNT CREATION, RELATED ACCOUNTS NUMBER HIGH. // For more information on interpreting the assessment, see: // https://cloud.google.com/recaptcha-enterprise/docs/account-defender#interpret-assessment-details System . out . println ( "Account Defender Assessment Result: " + defenderResult ); } } private static boolean checkTokenIntegrity ( TokenProperties tokenProperties , String recaptchaAction ) { // Check if the token is valid. if ( ! tokenProperties . getValid ()) { System . out . println ( "The Account Defender Assessment call failed because the token was: " + tokenProperties . getInvalidReason (). name ()); return false ; } // Check if the expected action was executed. if ( ! tokenProperties . getAction (). equals ( recaptchaAction )) { System . out . printf ( "The action attribute in the reCAPTCHA tag '%s' does not match " + "the action '%s' you are expecting to score" , tokenProperties . getAction (), recaptchaAction ); return false ; } return true ; } } Interpret the risk verdict of the critical user events When you create an assessment with Account defense enabled, Account defense returns accountDefenderAssessment as part of the assessment response.
- CreateAssessmentRequest createAssessmentRequest = CreateAssessmentRequest . newBuilder () . setParent ( ProjectName . of ( projectId ). toString ()) . setAssessment ( Assessment . newBuilder (). setEvent ( event ). build ()) . build (); Assessment response = client . createAssessment ( createAssessmentRequest ); // Check integrity of the response token. if ( ! checkTokenIntegrity ( response . getTokenProperties (), recaptchaAction )) { return ; } // Get the reason(s) and the reCAPTCHA risk score. // For more information on interpreting the assessment, // see: https://cloud.google.com/recaptcha-enterprise/docs/interpret-assessment for ( ClassificationReason reason : response . getRiskAnalysis (). getReasonsList ()) { System . out . println ( reason ); } float recaptchaScore = response . getRiskAnalysis (). getScore (); System . out . println ( "The reCAPTCHA score is: " + recaptchaScore ); String assessmentName = response . getName (); System . out . println ( "Assessment name: " + assessmentName . substring ( assessmentName . lastIndexOf ( "/" ) + 1 )); // Get the Account Defender result. com . google . recaptchaenterprise . v1 .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://recaptchaenterprise.googleapis.com/v1/projects/ PROJECT ID /assessments" Select-Object -Expand Content You should receive a JSON response similar to the following: { "tokenProperties": { "valid": true, "androidPackageName": "com.example.app" or "iosBundleId": "com.example.app", "action": "login", "createTime": "2019-03-28T12:24:17.894Z" }, "riskAnalysis": { "score": 0.6, }, "event": { "token": "TOKEN", "siteKey": "KEY", "userInfo": { "accountId": "ACCOUNT ID" } }, "name": "projects/PROJECT NUMBER/assessments/b6ac310000000000", "accountDefenderAssessment": { "labels": ["SUSPICIOUS LOGIN ACTIVITY"] } } Note: If you are already using the legacy hashedAccountId parameter to provide a stable account identifier to the projects.assessments.create method, you can keep doing so.
- See, // https://cloud.google.com/recaptcha-enterprise/docs/instrument-web-pages#frontend integration score String token = "recaptcha-token" ; // recaptchaAction: The action name corresponding to the token.

### "Detect and prevent account-related fraudulent activities on websites \_\

- URL: [https://docs.cloud.google.com/recaptcha/docs/account-defender](https://docs.cloud.google.com/recaptcha/docs/account-defender)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- List<AccountDefenderLabel> defenderResult = response . getAccountDefenderAssessment (). getLabelsList (); // Based on the result, can you choose next steps. // If the 'defenderResult' field is empty, it indicates that Account Defender did not have // anything to add to the score. // Few result labels: ACCOUNT DEFENDER LABEL UNSPECIFIED, PROFILE MATCH, // SUSPICIOUS LOGIN ACTIVITY, SUSPICIOUS ACCOUNT CREATION, RELATED ACCOUNTS NUMBER HIGH. // For more information on interpreting the assessment, see: // https://cloud.google.com/recaptcha-enterprise/docs/account-defender#interpret-assessment-details System . out . println ( "Account Defender Assessment Result: " + defenderResult ); } } private static boolean checkTokenIntegrity ( TokenProperties tokenProperties , String recaptchaAction ) { // Check if the token is valid. if ( ! tokenProperties . getValid ()) { System . out . println ( "The Account Defender Assessment call failed because the token was: " + tokenProperties . getInvalidReason (). name ()); return false ; } // Check if the expected action was executed. if ( ! tokenProperties . getAction (). equals ( recaptchaAction )) { System . out . printf ( "The action attribute in the reCAPTCHA tag '%s' does not match " + "the action '%s' you are expecting to score" , tokenProperties . getAction (), recaptchaAction ); return false ; } return true ; } } Interpret the risk verdict of the critical user events When you create an assessment with Account defense enabled, Account defense returns accountDefenderAssessment as part of the assessment response.
- CreateAssessmentRequest createAssessmentRequest = CreateAssessmentRequest . newBuilder () . setParent ( ProjectName . of ( projectId ). toString ()) . setAssessment ( Assessment . newBuilder (). setEvent ( event ). build ()) . build (); Assessment response = client . createAssessment ( createAssessmentRequest ); // Check integrity of the response token. if ( ! checkTokenIntegrity ( response . getTokenProperties (), recaptchaAction )) { return ; } // Get the reason(s) and the reCAPTCHA risk score. // For more information on interpreting the assessment, // see: https://cloud.google.com/recaptcha-enterprise/docs/interpret-assessment for ( ClassificationReason reason : response . getRiskAnalysis (). getReasonsList ()) { System . out . println ( reason ); } float recaptchaScore = response . getRiskAnalysis (). getScore (); System . out . println ( "The reCAPTCHA score is: " + recaptchaScore ); String assessmentName = response . getName (); System . out . println ( "Assessment name: " + assessmentName . substring ( assessmentName . lastIndexOf ( "/" ) + 1 )); // Get the Account Defender result. com . google . recaptchaenterprise . v1 .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://recaptchaenterprise.googleapis.com/v1/projects/ PROJECT ID /assessments" Select-Object -Expand Content You should receive a JSON response similar to the following: { "tokenProperties": { "valid": true, "hostname": "www.google.com", "action": "login", "createTime": "2019-03-28T12:24:17.894Z" }, "riskAnalysis": { "score": 0.6, }, "event": { "token": "TOKEN", "siteKey": "KEY", "userInfo": { "accountId": "ACCOUNT ID" } }, "name": "projects/PROJECT NUMBER/assessments/b6ac310000000000", "accountDefenderAssessment": { "labels": ["SUSPICIOUS LOGIN ACTIVITY"] } } Note: If you are already using the legacy hashedAccountId parameter to provide a stable account identifier to the projects.assessments.create method, you can keep doing so.
- See, // https://cloud.google.com/recaptcha-enterprise/docs/instrument-web-pages#frontend integration score String token = "recaptcha-token" ; // recaptchaAction: The action name corresponding to the token.

### "Class RecaptchaEnterpriseServiceAsyncClient (1.29.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.recaptchaenterprise v1.types.AnnotateAssessmentResponse Empty response for AnnotateAssessment. assessment path assessment path ( project : str , assessment : str ) - > str Returns a fully-qualified assessment string. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create assessment create assessment ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import recaptchaenterprise v1 async def sample search related account group memberships(): Create a client client = recaptchaenterprise v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import recaptchaenterprise v1 async def sample list related account group memberships(): Create a client client = recaptchaenterprise v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import recaptchaenterprise v1 async def sample list related account groups(): Create a client client = recaptchaenterprise v1 .

### "Class RecaptchaEnterpriseServiceClient (1.29.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient)
- Source ID: `site-python-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description google.cloud.recaptchaenterprise v1.types.AnnotateAssessmentResponse Empty response for AnnotateAssessment. assessment path assessment path ( project : str , assessment : str ) - > str Returns a fully-qualified assessment string. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create assessment create assessment ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import recaptchaenterprise v1 def sample search related account group memberships(): Create a client client = recaptchaenterprise v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import recaptchaenterprise v1 def sample list related account group memberships(): Create a client client = recaptchaenterprise v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import recaptchaenterprise v1 def sample list related account groups(): Create a client client = recaptchaenterprise v1 .

