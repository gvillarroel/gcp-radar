---
title: "Interface Batcher<ElementT,ElementResultT> (2.74.0) | Java client libraries | Google Cloud Documentation"
url: "https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.batching.Batcher"
knowledge_key: "corpus"
source_id: "site-java-reference"
source_type: "site"
content_origin: "bx_web_fallback"
---
# Interface Batcher<ElementT,ElementResultT> (2.74.0) | Java client libraries | Google Cloud Documentation

Source URL: https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.batching.Batcher

Closes this Batcher by preventing new elements from being added, then flushing the existing elements and waiting for all the outstanding work to be resolved. If all of the outstanding work has not been resolved, then a BatchingException will be thrown with details of the remaining work.
