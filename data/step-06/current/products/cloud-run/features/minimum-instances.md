---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.922Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Minimum instances"
feature_slug: "minimum-instances"
latest_feature_date: "2021-03-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesClient"
  - "https://docs.cloud.google.com/run/docs/container-contract"
keywords:
  - "minimum"
  - "instances"
  - "let"
  - "you"
  - "keep"
  - "specified"
  - "number"
  - "of"
---

# Minimum instances

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Minimum instances let you keep a specified number of Cloud Run container instances warm and ready to serve requests; Cloud Run services can keep a minimum number of container instances warm to reduce latency and cold starts.

## Extended Definition

Minimum instances let you keep a specified number of Cloud Run container instances warm and ready to serve requests; Cloud Run services can keep a minimum number of container instances warm to reduce latency and cold starts.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesClient)
- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)

## Supporting Pages

### "Class InstancesAsyncClient (0.16.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesAsyncClient)
- Source ID: `site-python-reference`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- CreateInstanceRequest ( parent="parent value", instance=instance, instance id="instance id value", ) Make the request operation = client. create instance (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.run v2.types.CreateInstanceRequest , dict]] The request object. parent str This corresponds to the parent field on the request instance; if request is provided, this should not be set. instance Instance This corresponds to the instance field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- DeleteInstanceRequest ( name="name value", ) Make the request operation = client. delete instance (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.run v2.types.DeleteInstanceRequest , dict]] The request object. name str This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry async.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The result type for the operation will be Instance A Cloud Run Instance represents a single group of containers running in a region. crypto key path crypto key path ( project : str , location : str , key ring : str , crypto key : str ) - > str Returns a fully-qualified crypto key string. delete instance delete instance ( request : typing .
- These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment. transport Optional[Union[str,InstancesTransport,Callable[..., InstancesTransport]]] The transport to use, or a Callable that constructs and returns a new transport to use.

### "Class InstancesClient (0.16.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesClient)
- Source ID: `site-python-reference`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- CreateInstanceRequest ( parent="parent value", instance=instance, instance id="instance id value", ) Make the request operation = client. create instance (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.run v2.types.CreateInstanceRequest , dict] The request object. parent str This corresponds to the parent field on the request instance; if request is provided, this should not be set. instance google.cloud.run v2.types.Instance This corresponds to the instance field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- DeleteInstanceRequest ( name="name value", ) Make the request operation = client. delete instance (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.run v2.types.DeleteInstanceRequest , dict] The request object. name str This corresponds to the name field on the request instance; if request is provided, this should not be set. retry google.api core.retry.Retry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- The result type for the operation will be Instance A Cloud Run Instance represents a single group of containers running in a region. crypto key path crypto key path ( project : str , location : str , key ring : str , crypto key : str ) - > str Returns a fully-qualified crypto key string. delete instance delete instance ( request : typing .
- These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment. transport Optional[Union[str,InstancesTransport,Callable[..., InstancesTransport]]] The transport to use, or a Callable that constructs and returns a new transport.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- If you have configured a number of minimum instances , you must use instance-based billing so that CPU is allocated outside of requests .
- Shutdown For Cloud Run services, an idle instance can be shut down at any time, including instances kept warm due to a configured minimum number of instances .
- Unless an instance must be kept idle due to the minimum number of instances configuration setting, it won't be kept idle for longer than 15 minutes.
- When a revision does not receive any traffic, it is scaled in to the minimum number of instances configured (zero by default).

