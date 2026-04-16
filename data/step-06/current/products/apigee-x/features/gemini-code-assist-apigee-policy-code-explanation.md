---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.168Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Gemini Code Assist Apigee policy code explanation"
feature_slug: "gemini-code-assist-apigee-policy-code-explanation"
latest_feature_date: "2024-05-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/decode-jwt-policy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/decode-jws-policy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/what-you-need-know-about-policy-errors"
keywords:
  - "explanation"
  - "explain"
  - "gemini"
  - "assist"
  - "policy"
  - "code"
---

# Gemini Code Assist Apigee policy code explanation

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Gemini Code Assist can explain selected Apigee policy XML code while editing proxy policies.

## Extended Definition

Gemini Code Assist can explain selected Apigee policy XML code while editing proxy policies.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/decode-jwt-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/decode-jwt-policy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/decode-jws-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/decode-jws-policy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/what-you-need-know-about-policy-errors](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/what-you-need-know-about-policy-errors)

## Supporting Pages

### DecodeJWS policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/decode-jws-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/decode-jws-policy)
- Source ID: `site-api-reference`
- Final score: 108
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Presence Optional Type String Valid values An Apigee flow variable name Flow variables Upon success, the Verify JWS and Decode JWS policies set context variables according to this pattern: jws . { policy name } . { variable name } For example, if the policy name is verify-jws , then the policy will store the algorithm specified in the JWS to this context variable: jws.verify-jws.header.algorithm Variable name Description decoded.header. name The JSON-parsable value of a header in the payload.
- Example fault rule <FaultRules> <FaultRule name="JWS Policy Errors"> <Step> <Name>JavaScript-1</Name> <Condition>(fault.name Matches "TokenExpired")</Condition> </Step> <Condition>JWS.failed=true</Condition> </FaultRule> </FaultRules> Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The fault name is the last part of the fault code. fault.name Matches "TokenExpired" JWS.failed All JWS policies set the same variable in the case of a failure. jws.JWS-Policy.failed = true Example error response For error handling, the best practice is to trap the errorcode part of the error response.
- A JWS can have an attached payload, as in the form: header . payload . signature Or, the JWS can omit the payload, called a detached payload, and be in the form: header..signature The DecodeJWS policy works with both forms because it only decodes the header portion of the JWS.

### DecodeJWT policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/decode-jwt-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/decode-jwt-policy)
- Source ID: `site-api-reference`
- Final score: 108
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Presence Optional Type String Valid values An Apigee flow variable name Flow variables Upon success, the Verify JWT and Decode JWT policies set context variables according to this pattern: jwt . { policy name } . { variable name } For example, if the policy name is jwt-parse-token , then the policy will store the subject specified in the JWT to the context variable named jwt.jwt-parse-token.decoded.claim.sub . (For backward compatibility, it will also be available in jwt.jwt-parse-token.claim.subject ) Variable name Description claim.audience The JWT audience claim.
- Example fault rule <FaultRules> <FaultRule name="JWT Policy Errors"> <Step> <Name>JavaScript-1</Name> <Condition>(fault.name Matches "InvalidToken")</Condition> </Step> <Condition>JWT.failed=true</Condition> </FaultRule> </FaultRules> Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The policy can obtain the JWT from any flow variable. < DecodeJWT name = "JWT-Decode-HS256" > < DisplayName>JWT Verify HS256 < / DisplayName > < Source>var . jwt < / Source > < / DecodeJWT > The policy writes its output to context variables so that subsequent policies or conditions in the API proxy can examine those values.
- Error name Cause Fix InvalidEmptyElement Occurs when the flow variable containing the JWT to be decoded is not specified in the <Source> element of the policy. build Fault variables These variables are set when a runtime error occurs.

### "What you need to know about policy errors \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/what-you-need-know-about-policy-errors](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/what-you-need-know-about-policy-errors)
- Source ID: `site-docs-reference-required-3`
- Final score: 92
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- As explained in Handling faults , it's a common practice to trap the system-generated policy errors and perform a subsequent action such as to create a custom error response.
- The fault.name variable When a policy throws an error, it sets the flow variable fault.name to the error name part of the errorcode (as described in the previous section).
- A prefix that is specific to the type of policy you are checking. (We'll explain how to find the prefix below.) To illustrate, here's another fault rule example.
- Note: When you're developing your fault handling code, just look in the Policy error reference to learn what the error name is for every policy error.

