---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:11.456Z"
product_name: "reCAPTCHA"
product_slug: "recaptcha"
feature_name: "reCAPTCHA password leak detection Docker container"
feature_slug: "recaptcha-password-leak-detection-docker-container"
latest_feature_date: "2024-07-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/recaptcha/docs/check-passwords"
  - "https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient"
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

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/recaptcha/docs/check-passwords](https://docs.cloud.google.com/recaptcha/docs/check-passwords)
- [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient)

## Supporting Pages

### "Detect password leaks and breached credentials \_|\_ reCAPTCHA \_|\_ Google\

- URL: [https://docs.cloud.google.com/recaptcha/docs/check-passwords](https://docs.cloud.google.com/recaptcha/docs/check-passwords)
- Source ID: `site-docs-root`
- Final score: 278
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Docker container is an open-source client that implements the secure multi-party computation that is needed to preserve end-user privacy and securely look up password leaks.
- PasswordCheckResult result = passwordLeak . verify ( verification , credentials . getReencryptedUserCredentialsHash (). toByteArray (), leakMatchPrefixes ) . get (); // Check if the credential is leaked. boolean isLeaked = result . areCredentialsLeaked (); System . out . printf ( "Is Credential leaked: %s" , isLeaked ); } // Create a reCAPTCHA Enterprise assessment. // Returns: PrivatePasswordLeakVerification which contains // reencryptedUserCredentialsHash and credential breach database // whose prefix matches the lookupHashPrefix. private static PrivatePasswordLeakVerification createPasswordLeakAssessment ( String projectID , byte [] lookupHashPrefix , byte [] encryptedUserCredentialsHash ) throws IOException { try ( RecaptchaEnterpriseServiceClient client = RecaptchaEnterpriseServiceClient . create ()) { // Set the hashprefix and credentials hash. // Setting this will trigger the Password leak protection.
- String assessmentName = response . getName (); System . out . println ( "Assessment name: " + assessmentName . substring ( assessmentName . lastIndexOf ( "/" ) + 1 )); return response . getPrivatePasswordLeakVerification (); } } } Docker container This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://recaptchaenterprise.googleapis.com/v1/projects/ PROJECT ID /assessments" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/698047609967/assessments/fb22000000000000", "score": 0, "reasons": [], "privatePasswordLeakVerification": { "lookupHashPrefix": "zoxZwA==", "encryptedUserCredentialsHash": "AyRihRcKaGLj/FA/r2uqQY/fzfTaDb/nEcIUMeD3Tygp", "reencryptedUserCredentialsHash": "Aw65yEbLM39ww1ridDEfx5VhkWo11tzn/R1B88Qqwr/+" "encryptedLeakMatchPrefixes": [ "n/n5fvPD6rmQPFyb4xk=", "IVQqzXsbZenaibID6OI=", ..., "INeMMndrfnlf6osCVvs=", "MkIpxt2x4mtyBnRODu0=", "AqUyAUWzi+v7Kx03e6o="] } } Verify leaked credentials from an assessment From the assessment response extract the fields reEncryptedUserCredentials and encryptedLeakMatchPrefixes , and pass them to the verifier object to determine if the credentials are leaked or not.

### "Class RecaptchaEnterpriseServiceAsyncClient (1.29.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import recaptchaenterprise v1 async def sample search related account group memberships(): Create a client client = recaptchaenterprise v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import recaptchaenterprise v1 async def sample list related account group memberships(): Create a client client = recaptchaenterprise v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import recaptchaenterprise v1 async def sample list related account groups(): Create a client client = recaptchaenterprise v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import recaptchaenterprise v1 async def sample retrieve legacy secret key(): Create a client client = recaptchaenterprise v1 .

### "Class RecaptchaEnterpriseServiceClient (1.29.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient)
- Source ID: `site-python-reference`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import recaptchaenterprise v1 def sample search related account group memberships(): Create a client client = recaptchaenterprise v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import recaptchaenterprise v1 def sample list related account group memberships(): Create a client client = recaptchaenterprise v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import recaptchaenterprise v1 def sample list related account groups(): Create a client client = recaptchaenterprise v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import recaptchaenterprise v1 def sample retrieve legacy secret key(): Create a client client = recaptchaenterprise v1 .

### "Class RecaptchaEnterpriseServiceClient (3.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient)
- Source ID: `site-java-reference`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- For example: To customize credentials: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library RecaptchaEnterpriseServiceSettings recaptchaEnterpriseServiceSettings = RecaptchaEnterpriseServiceSettings . newBuilder () . setCredentialsProvider ( FixedCredentialsProvider . create ( myCredentials )) . build (); RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient = RecaptchaEnterpriseServiceClient . create ( recaptchaEnterpriseServiceSettings ); To customize the endpoint: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library RecaptchaEnterpriseServiceSettings recaptchaEnterpriseServiceSettings = RecaptchaEnterpriseServiceSettings . newBuilder (). setEndpoint ( myEndpoint ). build (); RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient = RecaptchaEnterpriseServiceClient . create ( recaptchaEnterpriseServiceSettings ); Please refer to the GitHub repository's samples for more quickstart code snippets.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient = RecaptchaEnterpriseServiceClient . create ()) { ListRelatedAccountGroupMembershipsRequest request = ListRelatedAccountGroupMembershipsRequest . newBuilder () . setParent ( RelatedAccountGroupName . of ( "[PROJECT]" , "[RELATEDACCOUNTGROUP]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); ApiFuture<RelatedAccountGroupMembership> future = recaptchaEnterpriseServiceClient . listRelatedAccountGroupMembershipsPagedCallable () . futureCall ( request ); // Do something. for ( RelatedAccountGroupMembership element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListRelatedAccountGroupMembershipsRequest , ListRelatedAccountGroupMembershipsPagedResponse > listRelatedAccountGroups(ListRelatedAccountGroupsRequest request) public final RecaptchaEnterpriseServiceClient .
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient = RecaptchaEnterpriseServiceClient . create ()) { ListRelatedAccountGroupsRequest request = ListRelatedAccountGroupsRequest . newBuilder () . setParent ( ProjectName . of ( "[PROJECT]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); ApiFuture<RelatedAccountGroup> future = recaptchaEnterpriseServiceClient . listRelatedAccountGroupsPagedCallable () . futureCall ( request ); // Do something. for ( RelatedAccountGroup element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListRelatedAccountGroupsRequest , ListRelatedAccountGroupsPagedResponse > migrateKey(MigrateKeyRequest request) public final Key migrateKey ( MigrateKeyRequest request ) Migrates an existing key from reCAPTCHA to reCAPTCHA Enterprise.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient = RecaptchaEnterpriseServiceClient . create ()) { ListFirewallPoliciesRequest request = ListFirewallPoliciesRequest . newBuilder () . setParent ( ProjectName . of ( "[PROJECT]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); ApiFuture<FirewallPolicy> future = recaptchaEnterpriseServiceClient . listFirewallPoliciesPagedCallable (). futureCall ( request ); // Do something. for ( FirewallPolicy element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListFirewallPoliciesRequest , ListFirewallPoliciesPagedResponse > listIpOverrides(KeyName parent) public final RecaptchaEnterpriseServiceClient .

