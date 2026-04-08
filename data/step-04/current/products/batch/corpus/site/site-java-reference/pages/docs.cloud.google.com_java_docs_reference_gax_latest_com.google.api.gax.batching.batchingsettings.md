---
title: "Class BatchingSettings (2.72.2) | Java client libraries | Google Cloud Documentation"
url: "https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.batching.BatchingSettings"
knowledge_key: "corpus"
source_id: "site-java-reference"
source_type: "site"
content_origin: "bx_web_fallback"
---
# Class BatchingSettings (2.72.2) | Java client libraries | Google Cloud Documentation

Source URL: https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.batching.BatchingSettings

When batching is turned on for an API method, a call to that method will result in the request being queued up with other requests. When any of the set thresholds are reached, the queued up requests are packaged together in a batch and set to the service as a single RPC.
