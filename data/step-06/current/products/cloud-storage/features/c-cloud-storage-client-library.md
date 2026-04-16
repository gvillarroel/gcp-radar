---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:45.962Z"
product_name: "Cloud Storage"
product_slug: "cloud-storage"
feature_name: "C++ Cloud Storage Client Library"
feature_slug: "c-cloud-storage-client-library"
latest_feature_date: "2018-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage"
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest"
  - "https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage"
  - "https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.client.Client"
keywords:
  - "storage"
  - "client"
  - "library"
  - "the"
  - "provides"
  - "for"
  - "interacting"
  - "with"
---

# C++ Cloud Storage Client Library

Product: Cloud Storage
Coverage: MEDIUM

## Step 02 Summary

The C++ Cloud Storage Client Library provides a client library for interacting with Cloud Storage.

## Extended Definition

The C++ Cloud Storage Client Library provides a client library for interacting with Cloud Storage.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest](https://docs.cloud.google.com/python/docs/reference/storage/latest)
- [https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage](https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.client.Client](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.client.Client)

## Supporting Pages

### "Package com.google.cloud.storage (2.64.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage](https://docs.cloud.google.com/java/docs/reference/google-cloud-storage/latest/com.google.cloud.storage)
- Source ID: `site-java-reference`
- Final score: 250
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Multipart Upload Client A client for interacting with Google Cloud Storage's Multipart Upload API.
- Storage Channel Utils Set of utility methods for working with non-blocking channels returned by this library. com. google. cloud. storage.
- This class provides factories which allow you to select the appropriate strategy for com. google. cloud. storage.
- Versions 1.50.0-1.111.2 of this library don’t support the CustomTimeBefore, com. google. cloud. storage.

### "Python Client for Google Cloud Storage \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest](https://docs.cloud.google.com/python/docs/reference/storage/latest)
- Source ID: `site-python-reference`
- Final score: 248
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Client () The name for the new bucket bucket name = "my-new-bucket" Creates the new bucket bucket = storage client. create bucket (bucket name) print(f"Bucket {bucket.name} created.") Tracing With OpenTelemetry This is a PREVIEW FEATURE: Coverage and functionality are still in development and subject to change.
- Product Documentation Client Library Documentation github.com/googleapis/python-storage Certain control plane and long-running operations for Cloud Storage (including Folder and Managed Folder operations) are supported via the Storage Control Client .
- Read the Client Library Documentation for Google Cloud Storage API to see other available methods on the client.
- To enable OpenTelemetry tracing in the Cloud Storage client, first install OpenTelemetry: pip install google-cloud-storage[tracing] Set the ENABLE GCS PYTHON CLIENT OTEL TRACES environment variable to selectively opt-in tracing for the Cloud Storage client: export ENABLE GCS PYTHON CLIENT OTEL TRACES=True You will also need to tell OpenTelemetry which exporter to use.

### Shim for Running gcloud storage \_|\_ Cloud Storage \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage](https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage)
- Source ID: `site-docs-reference`
- Final score: 231
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Boto Configuration Configuration found in the boto file is mapped 1:1 to gcloud environment variables where appropriate. [Credentials] aws access key id: AWS ACCESS KEY ID aws secret access key: AWS SECRET ACCESS KEY use client certificate: CLOUDSDK CONTEXT AWARE USE CLIENT CERTIFICATE [Boto] proxy: CLOUDSDK PROXY ADDRESS proxy type: CLOUDSDK PROXY TYPE proxy port: CLOUDSDK PROXY PORT proxy user: CLOUDSDK PROXY USERNAME proxy pass: CLOUDSDK PROXY PASSWORD proxy rdns: CLOUDSDK PROXY RDNS http socket timeout: CLOUDSDK CORE HTTP TIMEOUT ca certificates file: CLOUDSDK CORE CUSTOM CA CERTS FILE max retry delay: CLOUDSDK STORAGE BASE RETRY DELAY num retries: CLOUDSDK STORAGE MAX RETRIES [GSUtil] check hashes: CLOUDSDK STORAGE CHECK HASHES default project id: CLOUDSDK CORE PROJECT disable analytics prompt: CLOUDSDK CORE DISABLE USAGE REPORTING use magicfile: CLOUDSDK STORAGE USE MAGICFILE parallel composite upload threshold: CLOUDSDK STORAGE PARALLEL COMPOSITE UPLOAD THRESHOLD resumable threshold: CLOUDSDK STORAGE RESUMABLE THRESHOLD [OAuth2] client id: CLOUDSDK AUTH CLIENT ID client secret: CLOUDSDK AUTH CLIENT SECRET provider authorization uri: CLOUDSDK AUTH AUTH HOST provider token uri: CLOUDSDK AUTH TOKEN HOST General Compatibility Notes Due to its compatibility across all major platforms, multiprocessing is enabled for all commands by default (equivalent to the -m option always being included in gsutil).
- What follows is a list of commands supported by the shim with any differences in behavior noted. acl The ch subcommand is not supported. autoclass Works as expected. bucketpolicyonly Works as expected. cat Prints object data for a second object even if the first object is invalid. compose Works as expected. cors get subcommand prints "[]" instead of "gs://[bucket name] has no CORS configuration". cp Copies a second object even if the first object is invalid.
- In both the shim and unshimmed cases, the old key is maintained. rm $folder$ delete markers are not supported. rpo Works as expected. setmeta Does not throw an error if no headers are changed. stat Includes a field "Storage class update time:" which may throw off tabbing. ubla Works as expected. versioning Works as expected. web The get subcommand has different JSON spacing and doesn't print an informational message if no configuration is found.
- To Enable Set use gcloud storage=True in the .boto config file under the [GSUtil] section: [GSUtil] use gcloud storage=True You can also set the flag for individual commands using the top-level -o flag: gsutil -o "GSUtil:use gcloud storage=True" -m cp -p file gs://bucket/obj Available Commands The gcloud storage CLI only supports a subset of gsutil commands.

### Class Client (3.10.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.client.Client](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.client.Client)
- Source ID: `site-python-reference`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See https://cloud.google.com/storage/docs/downloading-objects Parameters Name Description blob or uri Union[ Blob , str, ] The blob resource to pass or URI to download. file obj file A file handle to which to write the blob's data. start int (Optional) The first byte in a range to be downloaded. end int (Optional) The last byte in a range to be downloaded. raw download bool (Optional) If true, download the object without any expansion. if etag match Union[str, Set[str]] (Optional) See :ref: using-if-etag-match if etag not match Union[str, Set[str]] (Optional) See :ref: using-if-etag-not-match if generation match long (Optional) See :ref: using-if-generation-match if generation not match long (Optional) See :ref: using-if-generation-not-match if metageneration match long (Optional) See :ref: using-if-metageneration-match if metageneration not match long (Optional) See :ref: using-if-metageneration-not-match timeout [Union[float, Tuple[float, float]]] (Optional) The amount of time, in seconds, to wait for the server response.
- See the retry.py source code and docstrings in this package ( google.cloud.storage.retry ) for information on retry types and how to configure them. single shot download bool (Optional) If true, download the object in a single request. generate signed post policy v4 generate signed post policy v4 ( bucket name , blob name , expiration , conditions = None , fields = None , credentials = None , virtual hosted style = False , bucket bound hostname = None , scheme = "http" , service account email = None , access token = None , ) Generate a V4 signed policy object.
- See requests.Session.request documentation for details. if metageneration match Optional[int] Make the operation conditional on whether the bucket's current metageneration matches the given value. if metageneration not match Optional[int] Make the operation conditional on whether the bucket's current metageneration does not match the given value. retry Optional[Union[google.api core.retry.Retry, google.cloud.storage.retry.ConditionalRetryPolicy ]] How to retry the RPC.
- See: https://cloud.google.com/storage/docs/soft-delete Exceptions Type Description google.cloud.exceptions.NotFound If the bucket is not found. get hmac key metadata get hmac key metadata ( access id , project id = None , user project = None , timeout = 60 ) Return a metadata instance for the given HMAC key.

