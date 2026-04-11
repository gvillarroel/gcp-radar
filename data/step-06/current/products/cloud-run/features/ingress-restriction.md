---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.924Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Ingress restriction"
feature_slug: "ingress-restriction"
latest_feature_date: "2020-12-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient"
keywords:
  - "ingress"
  - "restriction"
  - "run"
  - "services"
  - "can"
  - "restrict"
  - "which"
  - "inbound"
---

# Ingress restriction

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run services can restrict which inbound traffic is allowed to reach them.

## Extended Definition

Cloud Run services can restrict which inbound traffic is allowed to reach them.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient)

## Supporting Pages

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- 1 Environment variables for worker pools Cloud Run sets the following environment variables for worker pools: Name Description Example CLOUD RUN WORKER POOL The name of the running Cloud Run worker pool. hello-world CLOUD RUN WORKER POOL REVISION The name of the running Cloud Run worker pool revision. hello-world.1 Request and response header requirements (services) For services, Cloud Run restricts header names to printable non-whitespace ASCII, and cannot contain colons.
- Concurrency (services) For Cloud Run services, each Cloud Run instance by default is set to multiple concurrency , where the ingress container can receive more than one request at the same time.
- For a Cloud Run service consisting of multi-container instances, you can specify the sequence in which the containers are started within the instance by configuring the container startup order .
- Shutdown For Cloud Run services, an idle instance can be shut down at any time, including instances kept warm due to a configured minimum number of instances .

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- 1 Environment variables for worker pools Cloud Run sets the following environment variables for worker pools: Name Description Example CLOUD RUN WORKER POOL The name of the running Cloud Run worker pool. hello-world CLOUD RUN WORKER POOL REVISION The name of the running Cloud Run worker pool revision. hello-world.1 Request and response header requirements (services) For services, Cloud Run restricts header names to printable non-whitespace ASCII, and cannot contain colons.
- Concurrency (services) For Cloud Run services, each Cloud Run instance by default is set to multiple concurrency , where the ingress container can receive more than one request at the same time.
- For a Cloud Run service consisting of multi-container instances, you can specify the sequence in which the containers are started within the instance by configuring the container startup order .
- Shutdown For Cloud Run services, an idle instance can be shut down at any time, including instances kept warm due to a configured minimum number of instances .

### "Class ServicesAsyncClient (0.16.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient)
- Source ID: `site-python-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership. crypto key path crypto key path ( project : str , location : str , key ring : str , crypto key : str ) - > str Returns a fully-qualified crypto key string. delete operation delete operation ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import run v2 async def sample list services(): Create a client client = run v2 .
- Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership. from service account file from service account file ( filename : str , args , kwargs ) Creates an instance of this client using the provided credentials file.
- ListServicesRequest ( parent="parent value", ) Make the request page result = client. list services (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.run v2.types.ListServicesRequest , dict]] The request object.

