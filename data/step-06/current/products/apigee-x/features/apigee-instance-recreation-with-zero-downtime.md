---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.186Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Apigee instance recreation with zero downtime"
feature_slug: "apigee-instance-recreation-with-zero-downtime"
latest_feature_date: "2022-09-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies"
keywords:
  - "recreation"
  - "recreating"
  - "downtime"
  - "older"
  - "zero"
  - "instance"
  - "supports"
---

# Apigee instance recreation with zero downtime

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee supports recreating older instances with zero downtime to avoid scaling and environment-limit issues.

## Extended Definition

Apigee supports recreating older instances with zero downtime to avoid scaling and environment-limit issues.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)

## Supporting Pages

### Get started with Apigee and MCP \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/apigee-mcp/apigee-mcp-quickstart)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- Enable the API Set environment variables In the Google Cloud project that contains your Apigee instance, use the following command to set environment variables: export PROJECT ID = PROJECT ID export REGION = REGION export RUNTIME HOSTNAME = RUNTIME HOSTNAME Where: PROJECT ID is the ID of the project with your Apigee instance.
- MCP in Apigee supports the following OpenAPI versions: 3.0.0 3.0.1 3.0.2 3.0.3 This quickstart uses a sample OpenAPI 3.0.x specification with three API operations: GET /artists : Returns a list of artists.
- See Protocol version header in the MCP specification for more information. (Optional) TOKEN : OAuth 2.0 access token The method returns all the tools that the MCP endpoint supports.
- The MCP Discovery proxy is not supported for use with Apigee Edge for Public cloud or Apigee Edge for Private Cloud plugin instances in API hub.

### Get started with Apigee Model Armor policies \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-model-armor-policies)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- This region name can be used to identify the correct Model Armor template to use for that instance For example: <SanitizeModelResponse async="false" continueOnError="false" enabled="true" name="sanitize-response"> <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables> <DisplayName>Sanitize-Response-sample</DisplayName> <ModelArmor> <TemplateName>projects/$PROJECT/locations/ {system.region.name} /templates/$TEMPLATE NAME</TemplateName> </ModelArmor> <UserPromptSource>{jsonPath('$.contents[-1].parts[-1].text',request.content,true)}</UserPromptSource> <LLMResponseSource>{jsonPath('$.candidates[-1].content.parts[-1].text',response.content,true)}</LLMResponseSource> </SanitizeModelResponse> Model Armor response processing You can add additional processing logic after the Model Armor policy processes the LLM response.
- Required roles To get the permissions that you need to create and use the Apigee Model Armor policies, ask your administrator to grant you the following IAM roles on the service account you use to deploy Apigee proxies: Model Armor User ( roles/modelarmor.user ) Model Armor Viewer ( roles/modelarmor.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Set environment variables In the Google Cloud project that contains your Apigee instance, use the following command to set environment variables: export PROJECT = PROJECT ID export LOCATION = REGION export RUNTIME HOSTNAME = RUNTIME HOSTNAME Where: PROJECT ID is the ID of the project with your Apigee instance.
- Use regional templates across multiple Apigee instances You can customize the Model Armor template to use regional templates across multiple Apigee instances.

### "Get started with semantic caching policies \_|\_ Apigee \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies](https://docs.cloud.google.com/apigee/docs/api-platform/tutorials/using-semantic-caching-policies)
- Source ID: `site-docs-reference`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- Set environment variables In the Google Cloud project that contains your Apigee instance, use the following command to set environment variables: export PROJECT ID = PROJECT ID export REGION = REGION export RUNTIME HOSTNAME = RUNTIME HOSTNAME Where: PROJECT ID is the ID of the project with your Apigee instance.
- For more information about granting roles, see Manage access to projects, folders, and organizations .
- To add the Google access token: In the Develop tab, click default under the Target endpoints folder.
- Confirm that you have a Comprehensive environment available in your Apigee instance.

