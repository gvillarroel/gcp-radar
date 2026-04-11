---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:04:48.141Z"
product_name: "API Gateway"
product_slug: "api-gateway"
feature_name: "API Gateway gcloud CLI API lifecycle management"
feature_slug: "api-gateway-gcloud-cli-api-lifecycle-management"
latest_feature_date: "2020-04-01"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/api-gateway/docs/creating-api"
  - "https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud"
keywords:
  - "gcloud api-gateway apis create"
  - "gcloud api-gateway apis delete"
  - "gcloud api-gateway apis list"
  - "API CRUD commands"
  - "API lifecycle management"
  - "gcloud api-gateway apis update"
  - "API CRUD"
  - "API lifecycle CLI"
---

# API Gateway gcloud CLI API lifecycle management

Product: API Gateway
Coverage: HIGH

## Step 02 Summary

The gcloud CLI gained support for creating, listing, updating, and deleting APIs.

## Extended Definition

API Gateway API lifecycle management via gcloud is the set of `gcloud api-gateway apis` commands used to create, list, update, and delete API resources. The official CLI examples show `apis create`, `apis list`, `apis update` (with options such as `--display-name` and label updates), and `apis delete`, and also show `apis describe` for inspecting an API.

## Evidence Summary

The cited API Gateway pages provide direct gcloud command references for API creation, listing, updating, describing, and deletion, including the documented effect of deletion on traffic for gateways using deployed API configs.

## Source Links

- [https://docs.cloud.google.com/api-gateway/docs/creating-api](https://docs.cloud.google.com/api-gateway/docs/creating-api)
- [https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud](https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud)

## Supporting Pages

### Create an API \_|\_ API Gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/api-gateway/docs/creating-api](https://docs.cloud.google.com/api-gateway/docs/creating-api)
- Source ID: `site-docs-root`
- Final score: 36
- Re-rank relevance: MODERATE
- Re-rank rationale: The page provides CLI-based API creation and description behavior for `gcloud api-gateway apis`, but does not document full lifecycle coverage such as listing, updating, or deleting APIs.

Evidence snippets:
- Google Cloud CLI Determine the list of API Gateways associated with the API: gcloud api-gateway gateways list --filter='apiConfig:"projects/ PROJECT ID /locations/global/apis/ API ID "' Delete each API config associated with the API: gcloud api-gateway api-configs delete CONFIG ID --api= API ID Delete the API: gcloud api-gateway apis delete API ID What's next Create an API config Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Google Cloud CLI Use the following gcloud options to update an existing API: --display-name --update-labels --clear-labels --remove-labels For example: gcloud api-gateway apis update API ID \ --update-labels=a=1,b=2 Use the following command to view all update options: gcloud api-gateway apis update --help Delete an API Note: If you deployed an API config to a gateway, then deleting the API causes the gateway to stop serving traffic.
- Go to API Gateway Google Cloud CLI gcloud api-gateway apis list This command returns output in the form: NAME DISPLAY NAME MANAGED SERVICE STATE projects/ PROJECT ID /locations/global/apis/ API ID API ID MANAGED SERVICE NAME .apigateway.
- View help for the apis create command: gcloud api-gateway apis create --help Run the following command to create the API: gcloud api-gateway apis create API ID where: API ID specifies the ID of the new API.

### "Quickstart: Secure traffic to a service with the gcloud CLI \_|\_ API Gateway\

- URL: [https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud](https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud)
- Source ID: `site-api-reference`
- Final score: 26
- Re-rank relevance: MODERATE
- Re-rank rationale: It includes commands for enabling services and creating/deploying an API via gcloud, but it does not focus on full CRUD API lifecycle coverage (list/update/delete).

Evidence snippets:
- See API ID requirements for API naming guidelines. gcloud api-gateway apis create API ID For example: gcloud api-gateway apis create my-api On successful completion, you can use the following command to view details about the new API: gcloud api-gateway apis describe API ID For example: gcloud api-gateway apis describe my-api This command returns the following: createTime: '2020-02-29T21:52:20.297426875Z' displayName: my-api managedService: my-api-123abc456def1.apigateway.my-project.cloud.goog name: projects/ my-project /locations/global/apis/ my-api state: ACTIVE updateTime: '2020-02-29T21:52:20.647923711Z' Copy the value of the managedService property.

