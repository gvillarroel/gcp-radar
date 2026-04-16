---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:53:45.891Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "exploreWar task copy-to-sync behavior change"
feature_slug: "explorewar-task-copy-to-sync-behavior-change"
latest_feature_date: "2017-09-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled"
  - "https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks"
keywords:
  - "explorewar"
  - "task"
  - "copy"
  - "sync"
  - "behavior"
  - "change"
  - "explodewar"
  - "now"
---

# exploreWar task copy-to-sync behavior change

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

The explodeWar task now uses sync instead of copy during execution.

## Extended Definition

The explodeWar task now uses sync instead of copy during execution.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- [https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks)

## Supporting Pages

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- It's possible to reduce request latency by configuring your application to asynchronously write HTTP session data to the Datastore: <async-session-persistence enabled="true" /> With async session persistence turned on, App Engine will submit a Task Queue task to write session data to the Datastore before writing the data to memcache.
- If your application interacts with Datastore or Task Queues operations, set up monitoring to monitor performance and behavior impacts after enabling this feature. <system-properties> <property name="appengine.use.httpconnector" value="true"/> </system-properties> Optional.
- Most applications don't need to change default behavior.
- If you'd like to use a different queue, add the queue-name attribute: <async-session-persistence enabled="true" queue-name="myqueue"/> Session data is always written synchronously to memcache.

### "How requests are handled \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-handled)
- Source ID: `site-docs-reference-2`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Requests from App Engine Cloud Tasks also share this pending queue priority behavior for compatibility reasons.
- With Cloud Tasks, HTTP requests are long-lived and return a response only after any asynchronous work ends.
- App Engine pending queue prioritization During periods of heavy traffic, App Engine might place requests in a pending queue while waiting for an available instance with the following prioritization: App Engine prioritizes other queued requests over pending queued requests from Task queue .
- You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

### "Run asynchronous tasks \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks](https://docs.cloud.google.com/appengine/docs/standard/create-appengine-tasks)
- Source ID: `site-docs-reference-2`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Application hosting App Engine Standard environment Guides Send feedback Run asynchronous tasks Stay organized with collections Save and categorize content based on your preferences.
- To run asynchronous tasks, you can: Create Cloud Tasks queues, see Create Cloud Tasks queues .
- Create App Engine tasks in the form of an HTTP request and then place them in Cloud Tasks queues, see Create App Engine tasks .
- For a more detailed overview, see Understand Cloud Tasks in the Cloud Tasks documentation.

