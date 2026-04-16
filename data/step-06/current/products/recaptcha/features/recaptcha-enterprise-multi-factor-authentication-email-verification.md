---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:11.462Z"
product_name: "reCAPTCHA"
product_slug: "recaptcha"
feature_name: "reCAPTCHA Enterprise multi-factor authentication email verification"
feature_slug: "recaptcha-enterprise-multi-factor-authentication-email-verification"
latest_feature_date: "2022-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/recaptcha/docs/integrate-account-verification"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient"
  - "https://docs.cloud.google.com/recaptcha/docs/check-passwords"
  - "https://docs.cloud.google.com/recaptcha/docs/best-practices-oat"
keywords:
  - "recaptcha"
  - "enterprise"
  - "multi"
  - "factor"
  - "authentication"
  - "email"
  - "verification"
  - "adds"
---

# reCAPTCHA Enterprise multi-factor authentication email verification

Product: reCAPTCHA
Coverage: MEDIUM

## Step 02 Summary

Adds email verification as a multi-factor authentication capability.

## Extended Definition

Adds email verification as a multi-factor authentication capability.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/recaptcha/docs/integrate-account-verification](https://docs.cloud.google.com/recaptcha/docs/integrate-account-verification)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient)
- [https://docs.cloud.google.com/recaptcha/docs/check-passwords](https://docs.cloud.google.com/recaptcha/docs/check-passwords)
- [https://docs.cloud.google.com/recaptcha/docs/best-practices-oat](https://docs.cloud.google.com/recaptcha/docs/best-practices-oat)

## Supporting Pages

### "Configure multi-factor authentication \_|\_ reCAPTCHA \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/recaptcha/docs/integrate-account-verification](https://docs.cloud.google.com/recaptcha/docs/integrate-account-verification)
- Source ID: `site-docs-root`
- Final score: 283
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page describes how to configure Multi-factor authentication (MFA) that lets you verify your users' identity by sending a verification code by email.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://recaptchaenterprise.googleapis.com/v1/projects/ PROJECT ID /assessments" Select-Object -Expand Content You should receive a JSON response similar to the following: { [...], "accountVerification": { "endpoints": [{ "emailAddress": "foo@bar.com", "requestToken": "tplIUFvvJUIpLaOH0hIVj2H71t5Z9mDK2RhB1SAGSIUOgOIsBv", "lastVerificationTime": "", }], "latestVerificationResult": "RESULT UNSPECIFIED" } } The assessment contains the date and time of the latest successful verification for the given endpoints on the device that issued the token, if any.
- Contact your assigned technical specialist for the full API documentation. // Initialize verification handle. const verificationHandle = grecaptcha . enterprise . eap . initTwoFactorVerificationHandle ( KEY ID , REQUEST TOKEN FROM ASSESSMENT ); // Call the challenge API. verificationHandle . challengeAccount (). then ( ( challengeResponse ) = > { if ( challengeResponse . isSuccess ()) { // Handle success: This means displaying an input for the end user to // enter the PIN that they received and then call the verifyAccount(pin) // method. } else { // Handle API failure } }); Verify an MFA code from the web page After you get the PIN from the end user, you must validate whether the PIN is correct.
- HTTP method and URL: POST https://recaptchaenterprise.googleapis.com/v1/projects/ PROJECT ID /assessments Request JSON body: { "event": { "token": " TOKEN ", "siteKey": " KEY ID ", "userInfo": { "accountId": " ACCOUNT ID " } } "accountVerification": { "endpoints": [{ "emailAddress": " EMAIL ID ", }] } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Class RecaptchaEnterpriseServiceClient (3.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient)
- Source ID: `site-java-reference`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Request object method variants only take one parameter, a request object, which must be constructed before the call. annotateAssessment(AnnotateAssessmentRequest request) "Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method. annotateAssessment(AssessmentName name, AnnotateAssessmentRequest.Annotation annotation) annotateAssessment(String name, AnnotateAssessmentRequest.Annotation annotation) Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service. annotateAssessmentCallable() CreateKey Creates a new reCAPTCHA Enterprise key.
- Request object method variants only take one parameter, a request object, which must be constructed before the call. getMetrics(GetMetricsRequest request) "Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method. getMetrics(MetricsName name) getMetrics(String name) Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service. getMetricsCallable() CreateFirewallPolicy Creates a new FirewallPolicy, specifying conditions at which reCAPTCHA Enterprise actions can be executed.
- Request object method variants only take one parameter, a request object, which must be constructed before the call. deleteKey(DeleteKeyRequest request) "Flattened" method variants have converted the fields of the request object into function parameters to enable multiple ways to call the same method. deleteKey(KeyName name) deleteKey(String name) Callable method variants take no parameters and return an immutable API callable object, which can be used to initiate calls to the service. deleteKeyCallable() MigrateKey Migrates an existing key from reCAPTCHA to reCAPTCHA Enterprise.
- Parameter Name Description settings RecaptchaEnterpriseServiceSettings RecaptchaEnterpriseServiceClient(RecaptchaEnterpriseServiceStub stub) protected RecaptchaEnterpriseServiceClient ( RecaptchaEnterpriseServiceStub stub ) Parameter Name Description stub RecaptchaEnterpriseServiceStub Methods addIpOverride(AddIpOverrideRequest request) public final AddIpOverrideResponse addIpOverride ( AddIpOverrideRequest request ) Adds an IP override to a key.

### "Detect password leaks and breached credentials \_|\_ reCAPTCHA \_|\_ Google\

- URL: [https://docs.cloud.google.com/recaptcha/docs/check-passwords](https://docs.cloud.google.com/recaptcha/docs/check-passwords)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for a local development environment . import com.google.cloud.recaptcha.passwordcheck.PasswordCheckResult ; import com.google.cloud.recaptcha.passwordcheck.PasswordCheckVerification ; import com.google.cloud.recaptcha.passwordcheck.PasswordCheckVerifier ; import com.google.cloud.recaptchaenterprise.v1.
- What's next Learn about how to use multi-factor authentication (MFA) Learn about how to protect users accounts by using reCAPTCHA Account Defender Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://recaptchaenterprise.googleapis.com/v1/projects/ PROJECT ID /assessments" Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/698047609967/assessments/fb22000000000000", "score": 0, "reasons": [], "privatePasswordLeakVerification": { "lookupHashPrefix": "zoxZwA==", "encryptedUserCredentialsHash": "AyRihRcKaGLj/FA/r2uqQY/fzfTaDb/nEcIUMeD3Tygp", "reencryptedUserCredentialsHash": "Aw65yEbLM39ww1ridDEfx5VhkWo11tzn/R1B88Qqwr/+" "encryptedLeakMatchPrefixes": [ "n/n5fvPD6rmQPFyb4xk=", "IVQqzXsbZenaibID6OI=", ..., "INeMMndrfnlf6osCVvs=", "MkIpxt2x4mtyBnRODu0=", "AqUyAUWzi+v7Kx03e6o="] } } Verify leaked credentials from an assessment From the assessment response extract the fields reEncryptedUserCredentials and encryptedLeakMatchPrefixes , and pass them to the verifier object to determine if the credentials are leaked or not.
- PasswordCheckResult result = passwordLeak . verify ( verification , credentials . getReencryptedUserCredentialsHash (). toByteArray (), leakMatchPrefixes ) . get (); // Check if the credential is leaked. boolean isLeaked = result . areCredentialsLeaked (); System . out . printf ( "Is Credential leaked: %s" , isLeaked ); } // Create a reCAPTCHA Enterprise assessment. // Returns: PrivatePasswordLeakVerification which contains // reencryptedUserCredentialsHash and credential breach database // whose prefix matches the lookupHashPrefix. private static PrivatePasswordLeakVerification createPasswordLeakAssessment ( String projectID , byte [] lookupHashPrefix , byte [] encryptedUserCredentialsHash ) throws IOException { try ( RecaptchaEnterpriseServiceClient client = RecaptchaEnterpriseServiceClient . create ()) { // Set the hashprefix and credentials hash. // Setting this will trigger the Password leak protection.

### "Best practices for protection from automated threats \_|\_ reCAPTCHA \_\

- URL: [https://docs.cloud.google.com/recaptcha/docs/best-practices-oat](https://docs.cloud.google.com/recaptcha/docs/best-practices-oat)
- Source ID: `site-iam-reference`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example shows a sample response model: For low to intermediate score threshold (0.0-0.5), challenge the end user with multi-factor authentication through email or SMS.
- The following example shows a sample response model: For low to intermediate score threshold (0.0-0.5), challenge the end user with multi-factor authentication through email or SMS.
- The following example shows a sample response model: For low to intermediate score threshold (0.0-0.5), challenge the end user with multi-factor authentication through email or SMS.
- In your assessment, if accountDefenderAssessment does not have the PROFILE MATCH label, challenge the end user with multi-factor authentication through email or SMS.

