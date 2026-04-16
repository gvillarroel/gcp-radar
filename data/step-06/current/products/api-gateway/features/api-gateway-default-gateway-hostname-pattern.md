---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:11:52.469Z"
product_name: "API Gateway"
product_slug: "api-gateway"
feature_name: "API Gateway default gateway hostname pattern"
feature_slug: "api-gateway-default-gateway-hostname-pattern"
latest_feature_date: "2020-09-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud"
  - "https://docs.cloud.google.com/api-gateway/docs/creating-api-config"
  - "https://docs.cloud.google.com/api-gateway/docs/quickstart"
keywords:
  - "hostname"
  - "default"
  - "pattern"
  - "newly"
  - "created"
  - "gateways"
---

# API Gateway default gateway hostname pattern

Product: API Gateway
Coverage: MEDIUM

## Step 02 Summary

Newly created gateways now use the default hostname format with GATEWAY_ID and HASH; Newly created gateways now use the default hostname format with GATEWAY_ID and HASH.

## Extended Definition

Newly created gateways now use the default hostname format with GATEWAY_ID and HASH; Newly created gateways now use the default hostname format with GATEWAY_ID and HASH.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud](https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud)
- [https://docs.cloud.google.com/api-gateway/docs/creating-api-config](https://docs.cloud.google.com/api-gateway/docs/creating-api-config)
- [https://docs.cloud.google.com/api-gateway/docs/quickstart](https://docs.cloud.google.com/api-gateway/docs/quickstart)

## Supporting Pages

### "Quickstart: Secure traffic to a service with the gcloud CLI \_|\_ API Gateway\

- URL: [https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud](https://docs.cloud.google.com/api-gateway/docs/secure-traffic-gcloud)
- Source ID: `site-docs-reference`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: gcloud api-gateway gateways create my-gateway \ --api= my-api --api-config= my-config \ --location= us-central1 On successful completion, use the following command to view details about the gateway: gcloud api-gateway gateways describe GATEWAY ID \ --location= GCP REGION For example: gcloud api-gateway gateways describe my-gateway \ --location= us-central1 This command returns the following: apiConfig: projects/my-project/locations/global/apis/my-api/configs/my-config createTime: '2020-02-05T13:44:12.997862831Z' defaultHostname: my-gateway-a12bcd345e67f89g0h.uc.gateway.dev displayName: my-gateway name: projects/my-project/locations/us-central1/gateways/my-gateway serviceAccount: email: 0000000000000-compute@developer.gserviceaccount.com state: ACTIVE updateTime: '2020-02-05T13:45:00.844705087Z' Note the value of the defaultHostname property.
- API KEY specifies the API key you created in the previous step. curl https:// DEFAULT HOSTNAME /hello?key= API KEY Now you should see Hello World! in the response from your API.
- Create a new API config with the modified OpenAPI spec using the following command: gcloud api-gateway api-configs create NEW CONFIG ID \ --api= API ID --openapi-spec= NEW API DEFINITION \ --backend-auth-service-account= SERVICE ACCOUNT EMAIL For example: gcloud api-gateway api-configs create my-config-key \ --api= my-api --openapi-spec= openapi2-functions.yaml \ --project= my-project --backend-auth-service-account= 0000000000000compute@developer.gserviceaccount.com Run the following command to update your existing gateway with the new API config: gcloud api-gateway gateways update GATEWAY ID \ --api= API ID --api-config= NEW CONFIG ID \ --location= GCP REGION For example: gcloud api-gateway gateways update my-gateway \ --api= my-api --api-config= my-config-key \ --location= us-central1 Test your API key Once you have created and deployed the modified API, try making a request to it.
- Enter the following curl command, where: DEFAULT HOSTNAME specifies the hostname portion of your deployed gateway URL, copied in a previous step. hello is the path specified in your API config. curl https:// DEFAULT HOSTNAME /hello For example: curl https:// my-gateway-a12bcd345e67f89g0h.uc.gateway.dev /hello This should result in the following error: UNAUTHENTICATED: Method doesn ' t allow unregistered callers ( callers without established identity ).

### Create an API config \_|\_ API Gateway \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/api-gateway/docs/creating-api-config](https://docs.cloud.google.com/api-gateway/docs/creating-api-config)
- Source ID: `site-docs-reference-required-2`
- Final score: 135
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Validate the project ID returned from the following command to make sure that the service isn't created in the wrong project. gcloud config list project If you need to change the default project, run the following command and replace PROJECT ID with the Google Cloud project ID in which you want to create the service: gcloud config set project PROJECT ID View help for the api-configs create command: gcloud api-gateway api-configs create --help Run the following command to create the API config: gcloud api-gateway api-configs create CONFIG ID \ --api= API ID --openapi-spec= API DEFINITION \ --project= PROJECT ID --backend-auth-service-account= SERVICE ACCOUNT EMAIL where: CONFIG ID specifies the ID of the new API config.
- For example: gcloud api-gateway api-configs create CONFIG ID \ --api= API ID --openapi-spec= API DEFINITION \ --backend-auth-service-account= SERVICE ACCOUNT EMAIL \ --async --display-name=MyConfig --labels=a=1,b=2 You can see the labels in the output of the describe command shown, or in the list command by including the --format option: gcloud api-gateway api-configs list \ --api= API ID --format="table(name, labels)" List API configs List all of the API Gateways deployed in your Google Cloud project.
- The default value is CONFIG ID . --labels= KEY1 = VALUE1 , KEY2 = VALUE2 ,... : Specifies labels associated with the API config.
- Note : When using the Google Cloud console, the API and API config are created when deploying the API to a gateway .

### "Quickstart: Secure traffic to a service with the gcloud CLI \_|\_ API Gateway\

- URL: [https://docs.cloud.google.com/api-gateway/docs/quickstart](https://docs.cloud.google.com/api-gateway/docs/quickstart)
- Source ID: `site-docs-reference-required-2`
- Final score: 118
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: gcloud api-gateway gateways create my-gateway \ --api= my-api --api-config= my-config \ --location= us-central1 On successful completion, use the following command to view details about the gateway: gcloud api-gateway gateways describe GATEWAY ID \ --location= GCP REGION For example: gcloud api-gateway gateways describe my-gateway \ --location= us-central1 This command returns the following: apiConfig: projects/my-project/locations/global/apis/my-api/configs/my-config createTime: '2020-02-05T13:44:12.997862831Z' defaultHostname: my-gateway-a12bcd345e67f89g0h.uc.gateway.dev displayName: my-gateway name: projects/my-project/locations/us-central1/gateways/my-gateway serviceAccount: email: 0000000000000-compute@developer.gserviceaccount.com state: ACTIVE updateTime: '2020-02-05T13:45:00.844705087Z' Note the value of the defaultHostname property.
- API KEY specifies the API key you created in the previous step. curl https:// DEFAULT HOSTNAME /hello?key= API KEY Now you should see Hello World! in the response from your API.
- Create a new API config with the modified OpenAPI spec using the following command: gcloud api-gateway api-configs create NEW CONFIG ID \ --api= API ID --openapi-spec= NEW API DEFINITION \ --backend-auth-service-account= SERVICE ACCOUNT EMAIL For example: gcloud api-gateway api-configs create my-config-key \ --api= my-api --openapi-spec= openapi2-functions.yaml \ --project= my-project --backend-auth-service-account= 0000000000000compute@developer.gserviceaccount.com Run the following command to update your existing gateway with the new API config: gcloud api-gateway gateways update GATEWAY ID \ --api= API ID --api-config= NEW CONFIG ID \ --location= GCP REGION For example: gcloud api-gateway gateways update my-gateway \ --api= my-api --api-config= my-config-key \ --location= us-central1 Test your API key Once you have created and deployed the modified API, try making a request to it.
- Enter the following curl command, where: DEFAULT HOSTNAME specifies the hostname portion of your deployed gateway URL, copied in a previous step. hello is the path specified in your API config. curl https:// DEFAULT HOSTNAME /hello For example: curl https:// my-gateway-a12bcd345e67f89g0h.uc.gateway.dev /hello This should result in the following error: UNAUTHENTICATED: Method doesn ' t allow unregistered callers ( callers without established identity ).

