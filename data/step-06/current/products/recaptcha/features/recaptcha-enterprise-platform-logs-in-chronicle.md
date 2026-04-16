---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:11.457Z"
product_name: "reCAPTCHA"
product_slug: "recaptcha"
feature_name: "reCAPTCHA Enterprise platform logs in Chronicle"
feature_slug: "recaptcha-enterprise-platform-logs-in-chronicle"
latest_feature_date: "2024-03-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient"
  - "https://docs.cloud.google.com/recaptcha/docs/audit-logging"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient"
keywords:
  - "recaptcha"
  - "enterprise"
  - "platform"
  - "logs"
  - "in"
  - "chronicle"
  - "make"
  - "assessment"
---

# reCAPTCHA Enterprise platform logs in Chronicle

Product: reCAPTCHA
Coverage: MEDIUM

## Step 02 Summary

Platform logs make reCAPTCHA assessment and annotation data available in a structured, searchable format in Chronicle.

## Extended Definition

Platform logs make reCAPTCHA assessment and annotation data available in a structured, searchable format in Chronicle.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient)
- [https://docs.cloud.google.com/recaptcha/docs/audit-logging](https://docs.cloud.google.com/recaptcha/docs/audit-logging)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient)

## Supporting Pages

### "Class RecaptchaEnterpriseServiceAsyncClient (1.29.0) \_|\_ Python client\

- URL: [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceAsyncClient)
- Source ID: `site-python-reference`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AnnotateAssessmentRequest ( name="name value", ) Make the request response = await client. annotate assessment (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.recaptchaenterprise v1.types.AnnotateAssessmentRequest , dict]] The request object.
- CreateAssessmentRequest ( parent="parent value", ) Make the request response = await client. create assessment (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.recaptchaenterprise v1.types.CreateAssessmentRequest , dict]] The request object.
- Returns Type Description google.cloud.recaptchaenterprise v1.types.AnnotateAssessmentResponse Empty response for AnnotateAssessment. assessment path assessment path ( project : str , assessment : str ) - > str Returns a fully-qualified assessment string. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create assessment create assessment ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import recaptchaenterprise v1 async def sample annotate assessment(): Create a client client = recaptchaenterprise v1 .

### "Class RecaptchaEnterpriseServiceClient (1.29.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/python/docs/reference/recaptchaenterprise/latest/google.cloud.recaptchaenterprise_v1.services.recaptcha_enterprise_service.RecaptchaEnterpriseServiceClient)
- Source ID: `site-python-reference`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AnnotateAssessmentRequest ( name="name value", ) Make the request response = client. annotate assessment (request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.recaptchaenterprise v1.types.AnnotateAssessmentRequest , dict] The request object.
- CreateAssessmentRequest ( parent="parent value", ) Make the request response = client. create assessment (request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.recaptchaenterprise v1.types.CreateAssessmentRequest , dict] The request object.
- Returns Type Description google.cloud.recaptchaenterprise v1.types.AnnotateAssessmentResponse Empty response for AnnotateAssessment. assessment path assessment path ( project : str , assessment : str ) - > str Returns a fully-qualified assessment string. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create assessment create assessment ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import recaptchaenterprise v1 def sample annotate assessment(): Create a client client = recaptchaenterprise v1 .

### reCAPTCHA audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/recaptcha/docs/audit-logging](https://docs.cloud.google.com/recaptcha/docs/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 225
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.GetFirewallPolicy google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.GetKey google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.GetMetrics google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.ListFirewallPolicies google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.ListIpOverrides google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.ListKeys google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.ListRelatedAccountGroupMemberships google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.ListRelatedAccountGroups google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.RetrieveLegacySecretKey google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.SearchRelatedAccountGroupMemberships ADMIN WRITE google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.AddIpOverride google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.CreateFirewallPolicy google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.CreateKey google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.DeleteFirewallPolicy google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.DeleteKey google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.MigrateKey google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.RemoveIpOverride google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.ReorderFirewallPolicies google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.UpdateFirewallPolicy google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.UpdateKey DATA WRITE google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.CreateAssessment API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for reCAPTCHA. google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService The following audit logs are associated with methods belonging to google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService .
- Filter for this method : protoPayload.methodName="google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1.CreateAssessment" Methods that don't produce audit logs A method might not produce audit logs for one or more of the following reasons: It is a high volume method involving significant log generation and storage costs.
- The following methods don't produce audit logs: google.cloud.recaptchaenterprise.v1beta1.RecaptchaEnterpriseServiceV1Beta1.AnnotateAssessment Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Filter for this method : protoPayload.methodName="google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.AddIpOverride" AnnotateAssessment Method : google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseService.AnnotateAssessment Audit log type : Data access Permissions : recaptchaenterprise.assessments.annotate - DATA WRITE Method is a long-running or streaming operation : No.

### "Class RecaptchaEnterpriseServiceClient (3.85.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient](https://docs.cloud.google.com/java/docs/reference/google-cloud-recaptchaenterprise/latest/com.google.cloud.recaptchaenterprise.v1.RecaptchaEnterpriseServiceClient)
- Source ID: `site-java-reference`
- Final score: 217
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient = RecaptchaEnterpriseServiceClient . create ()) { CreateAssessmentRequest request = CreateAssessmentRequest . newBuilder () . setParent ( ProjectName . of ( "[PROJECT]" ). toString ()) . setAssessment ( Assessment . newBuilder (). build ()) . build (); Assessment response = recaptchaEnterpriseServiceClient . createAssessment ( request ); } Parameter Name Description request CreateAssessmentRequest The request object containing all of the parameters for the API call.
- Sample code to get started: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient = RecaptchaEnterpriseServiceClient . create ()) { ProjectName parent = ProjectName . of ( "[PROJECT]" ); Assessment assessment = Assessment . newBuilder (). build (); Assessment response = recaptchaEnterpriseServiceClient . createAssessment ( parent , assessment ); } Note: close() needs to be called on the RecaptchaEnterpriseServiceClient object to clean up resources such as threads.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient = RecaptchaEnterpriseServiceClient . create ()) { CreateAssessmentRequest request = CreateAssessmentRequest . newBuilder () . setParent ( ProjectName . of ( "[PROJECT]" ). toString ()) . setAssessment ( Assessment . newBuilder (). build ()) . build (); ApiFuture<Assessment> future = recaptchaEnterpriseServiceClient . createAssessmentCallable (). futureCall ( request ); // Do something.
- Sample code: // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( RecaptchaEnterpriseServiceClient recaptchaEnterpriseServiceClient = RecaptchaEnterpriseServiceClient . create ()) { String parent = ProjectName . of ( "[PROJECT]" ). toString (); Assessment assessment = Assessment . newBuilder (). build (); Assessment response = recaptchaEnterpriseServiceClient . createAssessment ( parent , assessment ); } Parameters Name Description parent String Required.

