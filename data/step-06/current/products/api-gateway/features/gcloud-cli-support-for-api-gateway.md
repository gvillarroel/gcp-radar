---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:04:48.107Z"
product_name: "API Gateway"
product_slug: "api-gateway"
feature_name: "gcloud CLI support for API Gateway"
feature_slug: "gcloud-cli-support-for-api-gateway"
latest_feature_date: "2021-01-21"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/api-gateway/docs/creating-api"
  - "https://docs.cloud.google.com/api-gateway/docs/creating-api-config"
  - "https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud"
keywords:
  - "Cloud SDK commands"
  - "manage gateways with gcloud"
  - "gcloud api-gateway commands"
  - "gcloud command group"
  - "Cloud SDK"
  - "Google Cloud CLI"
  - "gcloud API Gateway"
  - "gcloud api-gateway"
---

# gcloud CLI support for API Gateway

Product: API Gateway
Coverage: HIGH

## Step 02 Summary

API Gateway has been added to the gcloud command group so it can be managed through the Google Cloud CLI.

## Extended Definition

API Gateway supports management through the Google Cloud CLI via the `gcloud api-gateway` command group. The provided documentation shows CLI workflows for creating, listing, describing, updating, and deleting gateway resources, including API resources, API configurations, and gateways, with related options such as label/display-name updates and project scoping.

## Evidence Summary

These official API Gateway pages provide direct examples of `gcloud api-gateway` commands, confirming that API creation, API config operations, and gateway deployment/update tasks are performed through Google Cloud CLI.

## Source Links

- [https://docs.cloud.google.com/api-gateway/docs/creating-api](https://docs.cloud.google.com/api-gateway/docs/creating-api)
- [https://docs.cloud.google.com/api-gateway/docs/creating-api-config](https://docs.cloud.google.com/api-gateway/docs/creating-api-config)
- [https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud](https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud)

## Supporting Pages

### Create an API \_|\_ API Gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/api-gateway/docs/creating-api](https://docs.cloud.google.com/api-gateway/docs/creating-api)
- Source ID: `site-docs-root`
- Final score: 66
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly documents creating APIs with `gcloud api-gateway apis create`, including command help, required parameters, and output, showing direct CLI support for API Gateway operations.

Evidence snippets:
- Google Cloud CLI Determine the list of API Gateways associated with the API: gcloud api-gateway gateways list --filter='apiConfig:"projects/ PROJECT ID /locations/global/apis/ API ID "' Delete each API config associated with the API: gcloud api-gateway api-configs delete CONFIG ID --api= API ID Delete the API: gcloud api-gateway apis delete API ID What's next Create an API config Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Google Cloud CLI Use the following gcloud options to update an existing API: --display-name --update-labels --clear-labels --remove-labels For example: gcloud api-gateway apis update API ID \ --update-labels=a=1,b=2 Use the following command to view all update options: gcloud api-gateway apis update --help Delete an API Note: If you deployed an API config to a gateway, then deleting the API causes the gateway to stop serving traffic.
- Go to API Gateway Google Cloud CLI gcloud api-gateway apis list This command returns output in the form: NAME DISPLAY NAME MANAGED SERVICE STATE projects/ PROJECT ID /locations/global/apis/ API ID API ID MANAGED SERVICE NAME .apigateway.
- Google Cloud CLI To create an API, review the following sections: Steps to create an API Google Cloud CLI options Domain-scoped projects Steps to create an API Validate the project ID returned from the following command to make sure that the service isn't created in the wrong project. gcloud config list project If you need to change the default project, run the following command and replace PROJECT ID with the Google Cloud project ID in which you want to create the service: gcloud config set project PROJECT ID If your project ID contains a colon ( : ), see Domain-scoped projects for additional details about creating an API in your project.

### Create an API config \_|\_ API Gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/api-gateway/docs/creating-api-config](https://docs.cloud.google.com/api-gateway/docs/creating-api-config)
- Source ID: `site-docs-root`
- Final score: 66
- Re-rank relevance: STRONG
- Re-rank rationale: The page provides concrete gcloud CLI instructions for creating API configs and notes CLI prerequisites, showing direct support for managing API Gateway via the Cloud CLI.

Evidence snippets:
- Google Cloud CLI To list API configs for a specific project: gcloud api-gateway api-configs list This command returns the following: NAME DISPLAY NAME ROLLOUT ID STATE CREATE TIME projects/ PROJECT ID /locations/global/apis/ API ID /configs/ CONFIG ID CONFIG ID 2020-02-04r0 ACTIVE 2020-02-04T16:18:02.369859863Z To list API configs for a specific API in a project: gcloud api-gateway api-configs list --api= API ID Use the API and config IDs to obtain detailed information about the API config: gcloud api-gateway api-configs describe CONFIG ID \ --api= API ID Update an API config You cannot modify an existing API config other than to update its labels and its display name.
- Google Cloud CLI Use the following gcloud to update an existing API config: --display-name --update-labels --clear-labels --remove-labels For example: gcloud api-gateway api-configs update CONFIG ID \ --api= API ID \ --update-labels=a=1,b=2 Use the following command to view all update options: gcloud api-gateway api-configs update --help Delete an API config Warning: If you deployed the API config to a gateway, the API config may not be deleted until the gateway is no longer using that API config.
- Google Cloud CLI Use the following gcloud CLIcommand to delete an existing API config: gcloud api-gateway api-configs delete CONFIG ID --api= API ID --project= PROJECT ID What's next Deploy an API to a gateway Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Validate the project ID returned from the following command to make sure that the service isn't created in the wrong project. gcloud config list project If you need to change the default project, run the following command and replace PROJECT ID with the Google Cloud project ID in which you want to create the service: gcloud config set project PROJECT ID View help for the api-configs create command: gcloud api-gateway api-configs create --help Run the following command to create the API config: gcloud api-gateway api-configs create CONFIG ID \ --api= API ID --openapi-spec= API DEFINITION \ --project= PROJECT ID --backend-auth-service-account= SERVICE ACCOUNT EMAIL where: CONFIG ID specifies the ID of the new API config.

### "Quickstart: Secure traffic to a service with the gcloud CLI \_|\_ API Gateway\

- URL: [https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud](https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud)
- Source ID: `site-api-reference`
- Final score: 64
- Re-rank relevance: STRONG
- Re-rank rationale: The page is a quickstart that walks through deploying and securing an API using gcloud, directly confirming CLI-based management for API Gateway.

Evidence snippets:
- For example: gcloud api-gateway gateways create my-gateway \ --api= my-api --api-config= my-config \ --location= us-central1 On successful completion, use the following command to view details about the gateway: gcloud api-gateway gateways describe GATEWAY ID \ --location= GCP REGION For example: gcloud api-gateway gateways describe my-gateway \ --location= us-central1 This command returns the following: apiConfig : projects /my-project/locations/global/apis/my-api/configs/ my - config createTime : '2020-02-05T13:44:12.997862831Z' defaultHostname : my - gateway - a12bcd345e67f89g0h . uc . gateway . dev displayName : my - gateway name : projects /my-project/locations/us-central1/gateways/ my - gateway serviceAccount : email : 0000000000000 - compute @ developer.gserviceaccount.com state : ACTIVE updateTime : '2020-02-05T13:45:00.844705087Z' Note the value of the defaultHostname property.
- Create a new API config with the modified OpenAPI spec using the following command: gcloud api-gateway api-configs create NEW CONFIG ID \ --api= API ID --openapi-spec= NEW API DEFINITION \ --backend-auth-service-account= SERVICE ACCOUNT EMAIL For example: gcloud api-gateway api-configs create my-config-key \ --api= my-api --openapi-spec= openapi2-functions.yaml \ --project= my-project --backend-auth-service-account= 0000000000000compute@developer.gserviceaccount.com Run the following command to update your existing gateway with the new API config: gcloud api-gateway gateways update GATEWAY ID \ --api= API ID --api-config= NEW CONFIG ID \ --location= GCP REGION For example: gcloud api-gateway gateways update my-gateway \ --api= my-api --api-config= my-config-key \ --location= us-central1 Test your API key Once you have created and deployed the modified API, try making a request to it.
- After the API config is created, you can view its details by running this command: gcloud api-gateway api-configs describe CONFIG ID \ --api= API ID For example: gcloud api-gateway api-configs describe my-config \ --api= my-api The output shows your API config details, including name and state, as shown in the following example: createTime: '2020-02-07T18:17:01.839180746Z' displayName: my-config gatewayConfig: backendConfig: googleServiceAccount: 0000000000000-compute@developer.gserviceaccount.com name: projects/my-project/locations/global/apis/my-api/configs/my-config serviceRollout: rolloutId: 2020-02-07r0 state: ACTIVE updateTime: '2020-02-07T18:17:02.173778118Z' Create a gateway Now deploy the API config on a gateway.
- See API ID requirements for API naming guidelines. gcloud api-gateway apis create API ID For example: gcloud api-gateway apis create my-api On successful completion, you can use the following command to view details about the new API: gcloud api-gateway apis describe API ID For example: gcloud api-gateway apis describe my-api This command returns the following: createTime: '2020-02-29T21:52:20.297426875Z' displayName: my-api managedService: my-api-123abc456def1.apigateway.my-project.cloud.goog name: projects/ my-project /locations/global/apis/ my-api state: ACTIVE updateTime: '2020-02-29T21:52:20.647923711Z' Copy the value of the managedService property.

