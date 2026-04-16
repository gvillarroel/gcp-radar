---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:52:24.721Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "External HTTP(S) Load Balancing for App Engine via Serverless network endpoint groups"
feature_slug: "external-http-s-load-balancing-for-app-engine-via-serverless-network-endpoint-groups"
latest_feature_date: "2020-07-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/understanding-firewalls"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl"
  - "https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed"
keywords:
  - "external"
  - "http"
  - "load"
  - "balancing"
  - "app"
  - "engine"
  - "via"
  - "serverless"
---

# External HTTP(S) Load Balancing for App Engine via Serverless network endpoint groups

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

App Engine now supports External HTTP(S) Load Balancing through Serverless network endpoint groups, enabling Cloud CDN usage with App Engine.

## Extended Definition

App Engine now supports External HTTP(S) Load Balancing through Serverless network endpoint groups, enabling Cloud CDN usage with App Engine.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/standard/go/understanding-firewalls)
- [https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl)
- [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)

## Supporting Pages

### "Understanding the App Engine firewall \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/standard/go/understanding-firewalls)
- Source ID: `site-docs-reference-2`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Interaction with other products or services Cloud Load Balancing If you use Cloud Load Balancing and serverless NEGs , note the following: The load balancer does not interfere or interact with App Engine firewall rules.
- Service IP range for requests sent to the App Engine standard environment IP range for requests sent to the App Engine flexible environment App Engine Cron 0.1.0.1/32 or 0.1.0.2/32, bypasses the default firewall rule if set to deny 0.1.0.1/32 or 0.1.0.2/32 Compute Engine instances with external IP addresses External IP address of the instance External IP address of the instance Compute Engine instances without an external IP address 0.0.0.0/32 0.0.0.0/32 Compute Engine instances without an external IP address using Cloud NAT for outbound connections 0.0.0.0/32 0.0.0.0/32 Cloud Scheduler jobs using App Engine HTTP and App Engine tasks in Cloud Tasks (including App Engine Task Queues) 0.1.0.2/32, bypasses the default firewall rule if set to deny 0.1.0.2/32 Cloud Storage or Blobstore 0.1.0.30/32 Not applicable URL Fetch 0.1.0.40/32 0.1.0.40/32 Warming requests 0.1.0.3/32, bypasses the default firewall rule if set to deny Not applicable Depending on your use case, these additional instructions might apply when configuring App Engine firewall rules: Requests from newly created or updated App Engine Cron jobs sent to either the App Engine standard or flexible environment come from 0.1.0.2 .
- If your ingress controls are set to receive internal-and-cloud-load-balancing traffic, leave the default App Engine firewall rule as is ( allow ), and use Google Cloud Armor web application firewall (WAF) rules .
- Requests that bypass firewall rules in this way include: Warmup requests Cloud Scheduler jobs using App Engine HTTP (including App Engine Cron ) App Engine tasks in Cloud Tasks (including App Engine Task Queues) For apps that use the App Engine standard environment and services bundled with the first generation runtimes , notifications from the legacy Mail API also bypass the firewall.

### "Securing custom domains with SSL \_|\_ App Engine standard environment \_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl](https://docs.cloud.google.com/appengine/docs/standard/go/securing-custom-domains-with-ssl)
- Source ID: `site-docs-reference-2`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.
- App Engine SSL support offers globally distributed SSL endpoints and built-in load balancing to serve your app securely, reliably, and quickly to a worldwide audience.
- If you want Cloud Load Balancing to manage incoming requests to your custom domain, see Migrate App Engine custom domain to Cloud Load Balancing .
- SSL certificate types App Engine supports the following certificate types: Single Domain/Hostname Self-signed Wildcard Subject Alternative Name (SAN) / Multi Domain It requires some things of your certificates and keys: Private Key and Certificate should be uploaded in PEM format.

### "How requests are routed \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed](https://docs.cloud.google.com/appengine/docs/standard/how-requests-are-routed)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When HTTP(S) Load Balancing is enabled for serverless apps , you can: Configure your serverless app to serve from a dedicated IPv4 or IPv6 IP address that is not shared with other services.
- For example, you can create a dispatch file to route mobile requests like https://simple-sample.uc.r.appspot.com/mobile/ to a mobile frontend, and route worker requests like https://simple-sample.uc.r.appspot.com/work/ to a static backend: dispatch: Send all mobile traffic to the mobile frontend. - url: " /mobile/ " service: mobile-frontend Send all work to the one static backend. - url: " /work/ " service: static-backend Deploying the dispatch file To deploy the dispatch file using gcloud, run the following command: gcloud app deploy dispatch.yaml Routing with Cloud Load Balancing Cloud Load Balancing is a separate product that enables advanced network configurations for all of your applications running on Google Cloud.
- Requests that don't pass through Cloud Load Balancing are never intercepted and rerouted by the patterns that you have defined in your dispatch file: Sends the request to an available instance of a specific service and version: https:// VERSION -dot- SERVICE -dot- PROJECT ID .
- When routing requests that are mapped to an App Engine serverless NEG, the load balancer only consults dispatch rules if the serverless NEG doesn't specify a service or version.

