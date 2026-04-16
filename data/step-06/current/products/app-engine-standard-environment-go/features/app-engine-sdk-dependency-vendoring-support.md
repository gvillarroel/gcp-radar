---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:52:24.757Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "App Engine SDK dependency vendoring support"
feature_slug: "app-engine-sdk-dependency-vendoring-support"
latest_feature_date: "2016-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/specifying-dependencies"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/understanding-firewalls"
  - "https://docs.cloud.google.com/appengine/docs/standard/ingress-settings"
keywords:
  - "app"
  - "engine"
  - "sdk"
  - "dependency"
  - "vendoring"
  - "now"
  - "supports"
  - "external"
---

# App Engine SDK dependency vendoring support

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

The App Engine SDK now supports vendoring external dependencies.

## Extended Definition

The App Engine SDK now supports vendoring external dependencies.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/go/specifying-dependencies)
- [https://docs.cloud.google.com/appengine/docs/standard/go/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/standard/go/understanding-firewalls)
- [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings)

## Supporting Pages

### "Specify dependencies \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/specifying-dependencies](https://docs.cloud.google.com/appengine/docs/standard/go/specifying-dependencies)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- One approach is by creating a symlink: mkdir private / private . example . com ln - s / path / to / private . example . com / foo private / private . example . com / foo Update your go.mod file to use the replace directive to use the private directory for your dependency: go mod edit - replace = private . example . com / foo =. / private / private . example . com / foo Your go.mod file should now look like: Final go.mod file module private . example . com / myapp require private . example . com / foo v1 .2.3 replace private . example . com / foo = > . / private / private . example . com / foo Original go.mod file module private . example . com / myapp require private . example . com / foo v1 .2.3 Don't modify how you import and use your private package.
- Your import statement should look like this: import "private.example.com/foo" Include your private dependency in your deployment by deploying your app: gcloud app deploy Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following example assumes your app is in the /myapp/ directory: Change to your app directory: cd / myapp Create a directory containing your private dependencies: mkdir private Make sure your private dependency is in the private directory.
- In Go 1.14 and later, if your app's root directory contains a directory named vendor , the go build command and the App Engine deployment process use the packages in the vendor directory instead of downloading modules.

### "Understanding the App Engine firewall \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/standard/go/understanding-firewalls)
- Source ID: `site-docs-reference-2`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Service IP range for requests sent to the App Engine standard environment IP range for requests sent to the App Engine flexible environment App Engine Cron 0.1.0.1/32 or 0.1.0.2/32, bypasses the default firewall rule if set to deny 0.1.0.1/32 or 0.1.0.2/32 Compute Engine instances with external IP addresses External IP address of the instance External IP address of the instance Compute Engine instances without an external IP address 0.0.0.0/32 0.0.0.0/32 Compute Engine instances without an external IP address using Cloud NAT for outbound connections 0.0.0.0/32 0.0.0.0/32 Cloud Scheduler jobs using App Engine HTTP and App Engine tasks in Cloud Tasks (including App Engine Task Queues) 0.1.0.2/32, bypasses the default firewall rule if set to deny 0.1.0.2/32 Cloud Storage or Blobstore 0.1.0.30/32 Not applicable URL Fetch 0.1.0.40/32 0.1.0.40/32 Warming requests 0.1.0.3/32, bypasses the default firewall rule if set to deny Not applicable Depending on your use case, these additional instructions might apply when configuring App Engine firewall rules: Requests from newly created or updated App Engine Cron jobs sent to either the App Engine standard or flexible environment come from 0.1.0.2 .
- Requests that bypass firewall rules in this way include: Warmup requests Cloud Scheduler jobs using App Engine HTTP (including App Engine Cron ) App Engine tasks in Cloud Tasks (including App Engine Task Queues) For apps that use the App Engine standard environment and services bundled with the first generation runtimes , notifications from the legacy Mail API also bypass the firewall.
- App Engine flexible example Your app running in the flexible environment has two services: frontend service and backend service , and has a firewall configured to deny traffic by default. frontend service uses Cloud Tasks with App Engine HTTP to send messages to backend service .
- In cases where your app is configured to use other networking services or products, you might need to create rules for controlling incoming traffic in both the App Engine firewall and the firewall or security settings of other products.

### "Ingress settings \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/ingress-settings](https://docs.cloud.google.com/appengine/docs/standard/ingress-settings)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: To update the default service of an App Engine app to accept traffic only from Cloud Load Balancing and VPC networks that are in the same project: gcloud app services update default --ingress = internal-and-cloud-load-balancing To update a service named "internal-requests" to accept traffic only from VPC networks that are in the same project: gcloud app services update internal-requests --ingress = internal-only Egress settings Note: Egress settings are not available for the PHP runtimes.
- To configure the egress behavior of your App Engine service: Add the egress setting attribute to the vpc access connector field of your service's app.yaml file: vpc access connector : name : projects/ PROJECT ID /locations/ REGION /connectors/ CONNECTOR NAME egress setting : EGRESS SETTING Replace: PROJECT ID with your Google Cloud project ID REGION with the region your connector is in CONNECTOR NAME with the name of your connector EGRESS SETTING with one of the following: private-ranges-only Default.
- Internal and Cloud Load Balancing Allows requests from the following resources: Resources allowed by the more restrictive Internal setting External Application Load Balancer Use the Internal and Cloud Load Balancing setting to accept requests from an external Application Load Balancer but not directly from the internet.
- For requests from other App Engine services or from Cloud Run or Cloud Run functions in the same project, connect the service or function to a VPC network and route all egress through the connector, as described in Connecting to a Shared VPC network .

