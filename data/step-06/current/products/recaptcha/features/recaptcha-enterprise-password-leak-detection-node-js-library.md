---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:11.461Z"
product_name: "reCAPTCHA"
product_slug: "recaptcha"
feature_name: "reCAPTCHA Enterprise password leak detection Node.js library"
feature_slug: "recaptcha-enterprise-password-leak-detection-node-js-library"
latest_feature_date: "2023-02-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/recaptcha/docs/check-passwords"
  - "https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient"
keywords:
  - "recaptcha"
  - "enterprise"
  - "password"
  - "leak"
  - "detection"
  - "node"
  - "js"
  - "library"
---

# reCAPTCHA Enterprise password leak detection Node.js library

Product: reCAPTCHA
Coverage: MEDIUM

## Step 02 Summary

Provides a Node.js library for password leak detection in reCAPTCHA Enterprise.

## Extended Definition

Provides a Node.js library for password leak detection in reCAPTCHA Enterprise.

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
- Final score: 256
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://recaptchaenterprise.googleapis.com/v1/projects/ PROJECT ID /assessments" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/698047609967/assessments/fb22000000000000", "score": 0, "reasons": [], "privatePasswordLeakVerification": { "lookupHashPrefix": "zoxZwA==", "encryptedUserCredentialsHash": "AyRihRcKaGLj/FA/r2uqQY/fzfTaDb/nEcIUMeD3Tygp", "reencryptedUserCredentialsHash": "Aw65yEbLM39ww1ridDEfx5VhkWo11tzn/R1B88Qqwr/+" "encryptedLeakMatchPrefixes": [ "n/n5fvPD6rmQPFyb4xk=", "IVQqzXsbZenaibID6OI=", ..., "INeMMndrfnlf6osCVvs=", "MkIpxt2x4mtyBnRODu0=", "AqUyAUWzi+v7Kx03e6o="] } } Verify leaked credentials from an assessment From the assessment response extract the fields reEncryptedUserCredentials and encryptedLeakMatchPrefixes , and pass them to the verifier object to determine if the credentials are leaked or not.
- Before using any of the request data, make the following replacements: PROJECT ID : your Google Cloud project ID LOOKUP HASH PREFIX : prefix of the username SHA-256 hash prefix ENCRYPTED USER CREDENTIALS HASH : encrypted user credentials Scrypt hash HTTP method and URL: POST https://recaptchaenterprise.googleapis.com/v1/projects/ PROJECT ID /assessments Request JSON body: { "private password leak verification": { "lookup hash prefix": " LOOKUP HASH PREFIX ", "encrypted user credentials hash": " ENCRYPTED USER CREDENTIALS HASH " } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- PasswordCheckResult result = verifier . verify ( verification , result . getReEncryptedUserCredentials (), result . getEncryptedLeakMatchPrefixes () ). get (); System . out . println ( "Credentials leaked: " + result . areCredentialsLeaked ()); Code sample Node.js (TypeScript) To learn about how to implement password leak detection by using Node.js (TypeScript), see the TypeScript code sample on GitHub .
- PasswordCheckResult result = passwordLeak . verify ( verification , credentials . getReencryptedUserCredentialsHash (). toByteArray (), leakMatchPrefixes ) . get (); // Check if the credential is leaked. boolean isLeaked = result . areCredentialsLeaked (); System . out . printf ( "Is Credential leaked: %s" , isLeaked ); } // Create a reCAPTCHA Enterprise assessment. // Returns: PrivatePasswordLeakVerification which contains // reencryptedUserCredentialsHash and credential breach database // whose prefix matches the lookupHashPrefix. private static PrivatePasswordLeakVerification createPasswordLeakAssessment ( String projectID , byte [] lookupHashPrefix , byte [] encryptedUserCredentialsHash ) throws IOException { try ( RecaptchaEnterpriseServiceClient client = RecaptchaEnterpriseServiceClient . create ()) { // Set the hashprefix and credentials hash. // Setting this will trigger the Password leak protection.

### "Class RecaptchaEnterpriseServiceAsyncClient (1.29.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description RecaptchaEnterpriseServiceAsyncClient The constructed client. from service account json from service account json ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- Returns Type Description google.cloud.recaptchaenterprise v1.types.AnnotateAssessmentResponse Empty response for AnnotateAssessment. assessment path assessment path ( project : str , assessment : str ) - > str Returns a fully-qualified assessment string. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create assessment create assessment ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import recaptchaenterprise v1 async def sample search related account group memberships(): Create a client client = recaptchaenterprise v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import recaptchaenterprise v1 async def sample list related account group memberships(): Create a client client = recaptchaenterprise v1 .

### "Class RecaptchaEnterpriseServiceClient (1.29.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient)
- Source ID: `site-python-reference`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Returns Type Description RecaptchaEnterpriseServiceClient The constructed client. from service account json from service account json ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- Returns Type Description google.cloud.recaptchaenterprise v1.types.AnnotateAssessmentResponse Empty response for AnnotateAssessment. assessment path assessment path ( project : str , assessment : str ) - > str Returns a fully-qualified assessment string. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create assessment create assessment ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import recaptchaenterprise v1 def sample search related account group memberships(): Create a client client = recaptchaenterprise v1 .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import recaptchaenterprise v1 def sample list related account group memberships(): Create a client client = recaptchaenterprise v1 .

### "Class RecaptchaEnterpriseServiceClient (3.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient)
- Source ID: `site-java-reference`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- For example: To customize credentials: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library RecaptchaEnterpriseServiceSettings recaptchaEnterpriseServiceSettings = RecaptchaEnterpriseServiceSettings . newBuilder () . setCredentialsProvider ( FixedCredentialsProvider . create ( myCredentials )) . build (); RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient = RecaptchaEnterpriseServiceClient . create ( recaptchaEnterpriseServiceSettings ); To customize the endpoint: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library RecaptchaEnterpriseServiceSettings recaptchaEnterpriseServiceSettings = RecaptchaEnterpriseServiceSettings . newBuilder (). setEndpoint ( myEndpoint ). build (); RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient = RecaptchaEnterpriseServiceClient . create ( recaptchaEnterpriseServiceSettings ); Please refer to the GitHub repository's samples for more quickstart code snippets.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient = RecaptchaEnterpriseServiceClient . create ()) { ListRelatedAccountGroupMembershipsRequest request = ListRelatedAccountGroupMembershipsRequest . newBuilder () . setParent ( RelatedAccountGroupName . of ( "[PROJECT]" , "[RELATEDACCOUNTGROUP]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); ApiFuture<RelatedAccountGroupMembership> future = recaptchaEnterpriseServiceClient . listRelatedAccountGroupMembershipsPagedCallable () . futureCall ( request ); // Do something. for ( RelatedAccountGroupMembership element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListRelatedAccountGroupMembershipsRequest , ListRelatedAccountGroupMembershipsPagedResponse > listRelatedAccountGroups(ListRelatedAccountGroupsRequest request) public final RecaptchaEnterpriseServiceClient .
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient = RecaptchaEnterpriseServiceClient . create ()) { ListRelatedAccountGroupsRequest request = ListRelatedAccountGroupsRequest . newBuilder () . setParent ( ProjectName . of ( "[PROJECT]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); ApiFuture<RelatedAccountGroup> future = recaptchaEnterpriseServiceClient . listRelatedAccountGroupsPagedCallable () . futureCall ( request ); // Do something. for ( RelatedAccountGroup element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListRelatedAccountGroupsRequest , ListRelatedAccountGroupsPagedResponse > migrateKey(MigrateKeyRequest request) public final Key migrateKey ( MigrateKeyRequest request ) Migrates an existing key from reCAPTCHA to reCAPTCHA Enterprise.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient = RecaptchaEnterpriseServiceClient . create ()) { ListFirewallPoliciesRequest request = ListFirewallPoliciesRequest . newBuilder () . setParent ( ProjectName . of ( "[PROJECT]" ). toString ()) . setPageSize ( 883849137 ) . setPageToken ( "pageToken873572522" ) . build (); ApiFuture<FirewallPolicy> future = recaptchaEnterpriseServiceClient . listFirewallPoliciesPagedCallable (). futureCall ( request ); // Do something. for ( FirewallPolicy element : future . get (). iterateAll ()) { // doThingsWith(element); } } Returns Type Description UnaryCallable < ListFirewallPoliciesRequest , ListFirewallPoliciesPagedResponse > listIpOverrides(KeyName parent) public final RecaptchaEnterpriseServiceClient .

