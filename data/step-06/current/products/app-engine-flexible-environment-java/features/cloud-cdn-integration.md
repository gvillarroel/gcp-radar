---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:05:03.278Z"
product_name: "App Engine flexible environment Java"
product_slug: "app-engine-flexible-environment-java"
feature_name: "Cloud CDN integration"
feature_slug: "cloud-cdn-integration"
latest_feature_date: "2020-07-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/using-websockets-and-session-affinity"
  - "https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip"
  - "https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml"
keywords:
  - "cdn"
  - "integration"
  - "app"
  - "engine"
  - "can"
  - "used"
  - "through"
  - "external"
---

# Cloud CDN integration

Product: App Engine flexible environment Java
Coverage: MEDIUM

## Step 02 Summary

App Engine can be used with Cloud CDN through External HTTP(S) Load Balancing and Serverless network endpoint groups.

## Extended Definition

App Engine can be used with Cloud CDN through External HTTP(S) Load Balancing and Serverless network endpoint groups.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/flexible/java/using-websockets-and-session-affinity](https://docs.cloud.google.com/appengine/docs/flexible/java/using-websockets-and-session-affinity)
- [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip)
- [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml)

## Supporting Pages

### "Creating persistent connections with WebSockets \_|\_ App Engine flexible\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/using-websockets-and-session-affinity](https://docs.cloud.google.com/appengine/docs/flexible/java/using-websockets-and-session-affinity)
- Source ID: `site-docs-reference-2`
- Final score: 70
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Clone the sample app Copy the sample apps to your local machine, and navigate to the websockets directory: git clone https://github.com/GoogleCloudPlatform/java-docs-samples cd java-docs-samples/flexible/java-17/websocket-jetty/ Run the sample locally To run the sample application on your local computer: Start the local Eclipse Jetty web server using the Jetty Maven plugin: mvn jetty:run-exploded In your web browser, enter the following address: http://localhost:8080 Deploy and run the sample on App Engine To deploy your application to the App Engine flexible environment, run the following command from the websocket-jetty directory: mvn package appengine:deploy -Dapp.deploy.projectId= PROJECT ID Replace PROJECT ID with the ID of your Google Cloud project.
- To enable session affinity for your App Engine version, add the following entry to your app.yaml file: network: session affinity: true Once the version is deployed with the updated app.yaml, new requests will start serving from the same instance as long as that instance is available.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Creating persistent connections with WebSockets Stay organized with collections Save and categorize content based on your preferences.
- Go Java Node.js PHP Python Ruby .NET Custom You can use WebSockets to create a persistent connection from a client (such as a mobile device or a computer) to an App Engine instance.

### "Configuring your app with app.yaml \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml](https://docs.cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see: https://cloud.google.com/appengine/docs/flexible/dotnet/configuring-your-app-with-app-yaml manual scaling : instances : 1 resources : cpu : 1 memory gb : 0.5 disk size gb : 10 env variables : The in My Greeting will be translated to a : by ASP.NET.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Configuring your app with app.yaml Stay organized with collections Save and categorize content based on your preferences.
- For more information, see .NET runtime . runtime : aspnetcore env : flex runtime config : operating system : ubuntu22 This sample incurs costs to run on the App Engine flexible environment.
- An App Engine app is configured using an app.yaml file, that contains CPU, memory, network and disk resources, scaling, and other general settings including environment variables.

### "Configure private internal-only services \_|\_ App Engine flexible environment\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip](https://docs.cloud.google.com/appengine/docs/flexible/disable-external-ip)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This does not prevent your service from receiving requests from the internet or App Engine services with custom domains, because the fully qualified domain name of your service is still externally visible.
- Limitations Disabling ephemeral external IP addresses has the following limitations: Services with custom domains: To send requests to App Engine services with custom domains you must configure Cloud NAT .
- The ephemeral external IP address allows your service to send requests to App Engine services with custom domains, and resources on the internet.
- Your service can send external requests through the Cloud NAT gateway without using the default ephemeral external IP addresses.

