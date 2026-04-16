---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:50:31.507Z"
product_name: "App Engine flexible environment Ruby"
product_slug: "app-engine-flexible-environment-ruby"
feature_name: "Updated App Engine health checks"
feature_slug: "updated-app-engine-health-checks"
latest_feature_date: "2017-09-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/ruby/understanding-firewalls"
  - "https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed"
  - "https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app"
keywords:
  - "updated"
  - "app"
  - "engine"
  - "health"
  - "checks"
  - "became"
  - "default"
  - "projects"
---

# Updated App Engine health checks

Product: App Engine flexible environment Ruby
Coverage: MEDIUM

## Step 02 Summary

Updated health checks became the default for new App Engine projects, with migration performed via `gcloud app update --split-health-checks`.

## Extended Definition

Updated health checks became the default for new App Engine projects, with migration performed via `gcloud app update --split-health-checks`.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/ruby/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/ruby/understanding-firewalls)
- [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
- [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)

## Supporting Pages

### "Understanding the App Engine firewall \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/ruby/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/flexible/ruby/understanding-firewalls)
- Source ID: `site-docs-reference-2`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If your App Engine flexible environment app is not configured to use Shared VPC , the App Engine flexible environment creates up to two hidden VPC firewall rules, depending on whether your app uses split health checks (default) or legacy health checks.
- Service IP range for requests sent to the App Engine standard environment IP range for requests sent to the App Engine flexible environment App Engine Cron 0.1.0.1/32 or 0.1.0.2/32, bypasses the default firewall rule if set to deny 0.1.0.1/32 or 0.1.0.2/32 Compute Engine instances with external IP addresses External IP address of the instance External IP address of the instance Compute Engine instances without an external IP address 0.0.0.0/32 0.0.0.0/32 Compute Engine instances without an external IP address using Cloud NAT for outbound connections 0.0.0.0/32 0.0.0.0/32 Cloud Scheduler jobs using App Engine HTTP and App Engine tasks in Cloud Tasks (including App Engine Task Queues) 0.1.0.2/32, bypasses the default firewall rule if set to deny 0.1.0.2/32 Cloud Storage or Blobstore 0.1.0.30/32 Not applicable URL Fetch 0.1.0.40/32 0.1.0.40/32 Warming requests 0.1.0.3/32, bypasses the default firewall rule if set to deny Not applicable Depending on your use case, these additional instructions might apply when configuring App Engine firewall rules: Requests from newly created or updated App Engine Cron jobs sent to either the App Engine standard or flexible environment come from 0.1.0.2 .
- Direction of traffic : Ingress Action on match : Allow Source IP ranges : 35.191.0.0/16 and 130.211.0.0/22 Protocols and ports : tcp : 8443 (for legacy health checks) or 10402 (for split health checks) Priority : 1000 Preventing access to cached content The App Engine firewall sits behind mechanisms that cache content, for example web proxies and browsers.
- App Engine flexible example Your app running in the flexible environment has two services: frontend service and backend service , and has a firewall configured to deny traffic by default. frontend service uses Cloud Tasks with App Engine HTTP to send messages to backend service .

### "How instances are managed \_|\_ App Engine flexible environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed](https://docs.cloud.google.com/appengine/docs/flexible/how-instances-are-managed)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you need to extend the default behavior of split health checks to your application, you can customize the app.yaml file to configure two types of health checks: Liveness checks detect that a VM instance and its container are running.
- App Engine continues to send health check requests and restarts the instance if an unhealthy instance continues to fail to respond to a predetermined number of consecutive health checks.
- As the instance goes through these health checks, the App Engine logs can indicate that the instance is in any of the following states: Healthy .
- By default, these health checks are enabled and are known as split health checks .

### "Quickstart: Create a custom runtime app in the App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app](https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/create-app)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable billing in your new Google Cloud project by creating a new billing account or setting an existing one: Go to Billing Download and install the Google Cloud CLI and then initialize the gcloud CLI: Download the SDK Run the following gcloud command to create an App Engine application and specify in which geographical region that you want your app to run: gcloud app create Due to changes in the default behavior for how Cloud Build uses service accounts in new projects, and secure-by-default organization policy changes , you might need to grant additional roles to your deploying service account.
- COPY nginx.conf /etc/nginx/nginx.conf create log dir configured in nginx.conf RUN mkdir -p /var/log/app engine Create a simple file to handle health checks.
- Before you begin Before running the sample app in this quickstart, you need to set up your environment and create a new Google Cloud project for App Engine: Create a new Google Cloud project by using the Google Cloud console: Open the Google Cloud console: Go to Projects Click Create Project and then name your new Google Cloud project.
- Google App Engine will send an HTTP request to / ah/health and any 2xx or 404 response is considered healthy.

