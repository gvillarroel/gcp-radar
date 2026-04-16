---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T06:49:48.305Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "App Engine firewall"
feature_slug: "app-engine-firewall"
latest_feature_date: "2017-10-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/understanding-firewalls"
  - "https://docs.cloud.google.com/appengine/docs/standard/application-security"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/application-security"
keywords:
  - "firewall"
  - "controls"
  - "traffic"
  - "filtering"
  - "applications"
  - "provides"
---

# App Engine firewall

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

App Engine firewall provides traffic filtering controls for App Engine applications; App Engine firewall lets you control access to applications with firewall rules.

## Extended Definition

App Engine firewall provides traffic filtering controls for App Engine applications; App Engine firewall lets you control access to applications with firewall rules.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/standard/go/understanding-firewalls)
- [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)
- [https://docs.cloud.google.com/appengine/docs/standard/go/application-security](https://docs.cloud.google.com/appengine/docs/standard/go/application-security)

## Supporting Pages

### "Understanding the App Engine firewall \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/understanding-firewalls](https://docs.cloud.google.com/appengine/docs/standard/go/understanding-firewalls)
- Source ID: `site-docs-reference-4`
- Final score: 149
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If your ingress controls are set to receive internal-and-cloud-load-balancing traffic, leave the default App Engine firewall rule as is ( allow ), and use Google Cloud Armor web application firewall (WAF) rules .
- App Engine flexible example Your app running in the flexible environment has two services: frontend service and backend service , and has a firewall configured to deny traffic by default. frontend service uses Cloud Tasks with App Engine HTTP to send messages to backend service .
- In cases where your app is configured to use other networking services or products, you might need to create rules for controlling incoming traffic in both the App Engine firewall and the firewall or security settings of other products.
- Overview The App Engine firewall is checked for all types of requests to your app, including: Regular web traffic routed to the app's appspot.com address or custom domain.

### "Overview of app security \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/application-security](https://docs.cloud.google.com/appengine/docs/standard/application-security)
- Source ID: `site-docs-reference`
- Final score: 115
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Block abusive IP addresses While Google Cloud has many mechanisms in place to prevent attacks, you can use the App Engine firewall to block traffic to your app from IP addresses that present malicious intent or shield your app from denial of service attacks and similar forms of abuse.
- Create a firewall to: Allow only traffic from within a specific network Ensure that only a certain range of IP addresses from specific networks can access your app.
- Ingress controls You can use Ingress controls to restrict inbound traffic to your App Engine app.
- Egress controls Egress controls determine what traffic is sent over Serverless VPC connectors .

### "Overview of app security \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/application-security](https://docs.cloud.google.com/appengine/docs/standard/go/application-security)
- Source ID: `site-docs-reference-4`
- Final score: 115
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Block abusive IP addresses While Google Cloud has many mechanisms in place to prevent attacks, you can use the App Engine firewall to block traffic to your app from IP addresses that present malicious intent or shield your app from denial of service attacks and similar forms of abuse.
- Create a firewall to: Allow only traffic from within a specific network Ensure that only a certain range of IP addresses from specific networks can access your app.
- Ingress controls You can use Ingress controls to restrict inbound traffic to your App Engine app.
- Egress controls Egress controls determine what traffic is sent over Serverless VPC connectors .

