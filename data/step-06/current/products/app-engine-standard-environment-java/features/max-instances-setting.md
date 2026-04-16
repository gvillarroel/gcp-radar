---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:50:21.235Z"
product_name: "App Engine standard environment Java"
product_slug: "app-engine-standard-environment-java"
feature_name: "max instances setting"
feature_slug: "max-instances-setting"
latest_feature_date: "2018-05-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/managing-costs"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml"
keywords:
  - "total"
  - "number"
  - "instances"
  - "setting"
  - "lets"
---

# max instances setting

Product: App Engine standard environment Java
Coverage: MEDIUM

## Step 02 Summary

The max instances setting lets you cap the total number of instances scheduled for an app.

## Extended Definition

The max instances setting lets you cap the total number of instances scheduled for an app.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/managing-costs](https://docs.cloud.google.com/appengine/docs/managing-costs)
- [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)

## Supporting Pages

### "Manage App Engine costs \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/managing-costs](https://docs.cloud.google.com/appengine/docs/managing-costs)
- Source ID: `site-docs-reference-4`
- Final score: 131
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To specify the maximum number of instances, use the max instances setting in your app's app.yaml file.
- To limit the costs of your App Engine app, you can use any of the following mechanisms: Specify the maximum number of instances Create budget alerts Disable your app manually Disable your app programmatically Specify the maximum number of instances Since App Engine costs usually scale based on the amount of traffic your app receives, you can limit your costs by limiting the number of instances App Engine can create.
- When you receive a notification, you can limit costs by lowering the value of the max instances setting or disabling your app .
- However, setting the maximum too low may prevent your app from having enough instances to adequately serve incoming requests .

### "appengine-web.xml reference \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml](https://docs.cloud.google.com/appengine/docs/standard/java-gen2/config/appref-xml)
- Source ID: `site-docs-reference-4`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- A high maximum means users might wait longer for their requests to be served, if there are pending requests and no idle instances to serve them, but your application will cost less to run. <min-idle-instances> The number of instances to be kept running and ready to serve traffic.This setting only applies to the version that receives most of the traffic.
- You will need to test your application and expected traffic volume to determine the ideal number of instances to keep in reserve. <min-pending-latency> The minimum amount of time in seconds that App Engine should allow a request to wait in the pending queue before starting a new instance to handle it.
- However, you won't be charged for more instances than the maximum number you've specified. <max-pending-latency> The maximum amount of time that App Engine should allow a request to wait in the pending queue before starting additional instances to handle requests so that pending latency is reduced.
- To find the optimal value, gradually increase it and monitor the performance of your application. <max-idle-instances> The maximum number of idle instances that App Engine should maintain for this version.

### "How instances are managed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/standard/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Setting an appropriate number of idle instances for your application based on request volume allows your application to serve every request with little latency, unless you are experiencing abnormally high request volume.
- A service with basic scaling is configured by setting the maximum number of instances in the max instances parameter of the basic scaling setting.
- One of the benefits App Engine standard environment's "pay for only what you need" platform as described earlier in Scaling Down is that the system autoscales the number of instances down to zero when there is no traffic.
- Automatic scaling settings Description Target CPU utilization Sets the CPU utilization ratio threshold to specify the CPU usage threshold at which more instances will be started to handle traffic.

