---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:11.458Z"
product_name: "reCAPTCHA"
product_slug: "recaptcha"
feature_name: "reCAPTCHA Enterprise mobile SDK score levels and reason codes"
feature_slug: "recaptcha-enterprise-mobile-sdk-score-levels-and-reason-codes"
latest_feature_date: "2024-02-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient"
  - "https://docs.cloud.google.com/recaptcha/docs/account-defender-mobile"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient"
keywords:
  - "recaptcha"
  - "enterprise"
  - "mobile"
  - "sdk"
  - "score"
  - "levels"
  - "and"
  - "reason"
---

# reCAPTCHA Enterprise mobile SDK score levels and reason codes

Product: reCAPTCHA
Coverage: MEDIUM

## Step 02 Summary

The mobile SDKs support 11 score levels and reason codes.

## Extended Definition

The mobile SDKs support 11 score levels and reason codes.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient)
- [https://docs.cloud.google.com/recaptcha/docs/account-defender-mobile](https://docs.cloud.google.com/recaptcha/docs/account-defender-mobile)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient)

## Supporting Pages

### "Class RecaptchaEnterpriseServiceAsyncClient (1.29.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description google.cloud.recaptchaenterprise v1.types.Key A key used to identify and configure applications (web and/or mobile) that use reCAPTCHA Enterprise. parse assessment path parse assessment path ( path : str ) - > typing .
- Returns Type Description google.cloud.recaptchaenterprise v1.types.Key A key used to identify and configure applications (web and/or mobile) that use reCAPTCHA Enterprise. delete firewall policy delete firewall policy ( request : typing .
- Returns Type Description google.cloud.recaptchaenterprise v1.types.Key A key used to identify and configure applications (web and/or mobile) that use reCAPTCHA Enterprise. get metrics get metrics ( request : typing .
- Returns Type Description google.cloud.recaptchaenterprise v1.types.Key A key used to identify and configure applications (web and/or mobile) that use reCAPTCHA Enterprise.

### "Class RecaptchaEnterpriseServiceClient (1.29.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient)
- Source ID: `site-python-reference`
- Final score: 233
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Returns Type Description google.cloud.recaptchaenterprise v1.types.Key A key used to identify and configure applications (web and/or mobile) that use reCAPTCHA Enterprise. parse assessment path parse assessment path ( path : str ) - > typing .
- Returns Type Description google.cloud.recaptchaenterprise v1.types.Key A key used to identify and configure applications (web and/or mobile) that use reCAPTCHA Enterprise. delete firewall policy delete firewall policy ( request : typing .
- Returns Type Description google.cloud.recaptchaenterprise v1.types.Key A key used to identify and configure applications (web and/or mobile) that use reCAPTCHA Enterprise. get metrics get metrics ( request : typing .
- Returns Type Description google.cloud.recaptchaenterprise v1.types.Key A key used to identify and configure applications (web and/or mobile) that use reCAPTCHA Enterprise.

### "Detect and prevent account-related fraudulent activities on mobile applications\

- URL: [https://docs.cloud.google.com/recaptcha/docs/account-defender-mobile](https://docs.cloud.google.com/recaptcha/docs/account-defender-mobile)
- Source ID: `site-iam-reference`
- Final score: 224
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CreateAssessmentRequest createAssessmentRequest = CreateAssessmentRequest . newBuilder () . setParent ( ProjectName . of ( projectId ). toString ()) . setAssessment ( Assessment . newBuilder (). setEvent ( event ). build ()) . build (); Assessment response = client . createAssessment ( createAssessmentRequest ); // Check integrity of the response token. if ( ! checkTokenIntegrity ( response . getTokenProperties (), recaptchaAction )) { return ; } // Get the reason(s) and the reCAPTCHA risk score. // For more information on interpreting the assessment, // see: https://cloud.google.com/recaptcha-enterprise/docs/interpret-assessment for ( ClassificationReason reason : response . getRiskAnalysis (). getReasonsList ()) { System . out . println ( reason ); } float recaptchaScore = response . getRiskAnalysis (). getScore (); System . out . println ( "The reCAPTCHA score is: " + recaptchaScore ); String assessmentName = response . getName (); System . out . println ( "Assessment name: " + assessmentName . substring ( assessmentName . lastIndexOf ( "/" ) + 1 )); // Get the Account Defender result. com . google . recaptchaenterprise . v1 .
- List<AccountDefenderLabel> defenderResult = response . getAccountDefenderAssessment (). getLabelsList (); // Based on the result, can you choose next steps. // If the 'defenderResult' field is empty, it indicates that Account Defender did not have // anything to add to the score. // Few result labels: ACCOUNT DEFENDER LABEL UNSPECIFIED, PROFILE MATCH, // SUSPICIOUS LOGIN ACTIVITY, SUSPICIOUS ACCOUNT CREATION, RELATED ACCOUNTS NUMBER HIGH. // For more information on interpreting the assessment, see: // https://cloud.google.com/recaptcha-enterprise/docs/account-defender#interpret-assessment-details System . out . println ( "Account Defender Assessment Result: " + defenderResult ); } } private static boolean checkTokenIntegrity ( TokenProperties tokenProperties , String recaptchaAction ) { // Check if the token is valid. if ( ! tokenProperties . getValid ()) { System . out . println ( "The Account Defender Assessment call failed because the token was: " + tokenProperties . getInvalidReason (). name ()); return false ; } // Check if the expected action was executed. if ( ! tokenProperties . getAction (). equals ( recaptchaAction )) { System . out . printf ( "The action attribute in the reCAPTCHA tag '%s' does not match " + "the action '%s' you are expecting to score" , tokenProperties . getAction (), recaptchaAction ); return false ; } return true ; } } Interpret the risk verdict of the critical user events When you create an assessment with Account defense enabled, Account defense returns accountDefenderAssessment as part of the assessment response.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://recaptchaenterprise.googleapis.com/v1/projects/ PROJECT ID /assessments" Select-Object -Expand Content You should receive a JSON response similar to the following: { "tokenProperties": { "valid": true, "androidPackageName": "com.example.app" or "iosBundleId": "com.example.app", "action": "login", "createTime": "2019-03-28T12:24:17.894Z" }, "riskAnalysis": { "score": 0.6, }, "event": { "token": "TOKEN", "siteKey": "KEY", "userInfo": { "accountId": "ACCOUNT ID" } }, "name": "projects/PROJECT NUMBER/assessments/b6ac310000000000", "accountDefenderAssessment": { "labels": ["SUSPICIOUS LOGIN ACTIVITY"] } } Note: If you are already using the legacy hashedAccountId parameter to provide a stable account identifier to the projects.assessments.create method, you can keep doing so.
- HTTP method and URL: POST https://recaptchaenterprise.googleapis.com/v1/ ASSESSMENT ID :annotate Request JSON body: { "annotation": ANNOTATION , "reasons": REASONS , "accountId": ACCOUNT ID } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Class RecaptchaEnterpriseServiceClient (3.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient)
- Source ID: `site-java-reference`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient = RecaptchaEnterpriseServiceClient . create ()) { AnnotateAssessmentRequest request = AnnotateAssessmentRequest . newBuilder () . setName ( AssessmentName . of ( "[PROJECT]" , "[ASSESSMENT]" ). toString ()) . addAllReasons ( new ArrayList<AnnotateAssessmentRequest .
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient = RecaptchaEnterpriseServiceClient . create ()) { AnnotateAssessmentRequest request = AnnotateAssessmentRequest . newBuilder () . setName ( AssessmentName . of ( "[PROJECT]" , "[ASSESSMENT]" ). toString ()) . addAllReasons ( new ArrayList<AnnotateAssessmentRequest .
- For example: To customize credentials: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library RecaptchaEnterpriseServiceSettings recaptchaEnterpriseServiceSettings = RecaptchaEnterpriseServiceSettings . newBuilder () . setCredentialsProvider ( FixedCredentialsProvider . create ( myCredentials )) . build (); RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient = RecaptchaEnterpriseServiceClient . create ( recaptchaEnterpriseServiceSettings ); To customize the endpoint: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library RecaptchaEnterpriseServiceSettings recaptchaEnterpriseServiceSettings = RecaptchaEnterpriseServiceSettings . newBuilder (). setEndpoint ( myEndpoint ). build (); RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient = RecaptchaEnterpriseServiceClient . create ( recaptchaEnterpriseServiceSettings ); Please refer to the GitHub repository's samples for more quickstart code snippets.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient = RecaptchaEnterpriseServiceClient . create ()) { ListRelatedAccountGroupMembershipsRequest request = ListRelatedAccountGroupMembershipsRequest . newBuilder () . setParent ( RelatedAccountGroupName . of ( "[PROJECT]" , "[RELATEDACCOUNTGROUP]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); ApiFuture<RelatedAccountGroupMembership> future = recaptchaEnterpriseServiceClient . listRelatedAccountGroupMembershipsPagedCallable () . futureCall ( request ); // Do something. for ( RelatedAccountGroupMembership element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListRelatedAccountGroupMembershipsRequest , ListRelatedAccountGroupMembershipsPagedResponse > listRelatedAccountGroups(ListRelatedAccountGroupsRequest request) public final RecaptchaEnterpriseServiceClient .

