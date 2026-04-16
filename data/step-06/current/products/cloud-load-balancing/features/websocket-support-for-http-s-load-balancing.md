---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:54:57.801Z"
product_name: "Cloud Load Balancing"
product_slug: "cloud-load-balancing"
feature_name: "WebSocket support for HTTP(S) Load Balancing"
feature_slug: "websocket-support-for-http-s-load-balancing"
latest_feature_date: "2017-04-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/load-balancing/docs/https"
  - "https://docs.cloud.google.com/load-balancing/docs/l7-internal"
  - "https://docs.cloud.google.com/appengine/docs/flexible/java/using-websockets-and-session-affinity"
keywords:
  - "websocket"
  - "http"
  - "load"
  - "balancing"
  - "supports"
  - "connections"
  - "bidirectional"
  - "client"
---

# WebSocket support for HTTP(S) Load Balancing

Product: Cloud Load Balancing
Coverage: MEDIUM

## Step 02 Summary

HTTP(S) Load Balancing supports WebSocket connections for bidirectional client-server communication.

## Extended Definition

HTTP(S) Load Balancing supports WebSocket connections for bidirectional client-server communication.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- [https://docs.cloud.google.com/appengine/docs/flexible/java/using-websockets-and-session-affinity](https://docs.cloud.google.com/appengine/docs/flexible/java/using-websockets-and-session-affinity)

## Supporting Pages

### "External Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/https](https://docs.cloud.google.com/load-balancing/docs/https)
- Source ID: `site-docs-reference-required-3`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- Load balancer mode HTTP/3 support Global external Application Load Balancer (always Premium Tier) Classic Application Load Balancer in Premium Tier Classic Application Load Balancer in Standard Tier Regional external Application Load Balancer (Premium or Standard Tier) How HTTP/3 is negotiated When HTTP/3 is enabled, the load balancer advertises this support to clients, allowing clients that support HTTP/3 to attempt to establish HTTP/3 connections with the HTTPS load balancer.
- There are 2 modes of HTTP/2 support: HTTP/2 over TLS Cleartext HTTP/2 over TCP HTTP/2 over TLS HTTP/2 over TLS is supported for connections between clients and the external Application Load Balancer, and for connections between the load balancer and its backends.
- These include the following: When a client supports versions of HTTP/3 that aren't compatible with the HTTP/3 versions supported by the HTTPS load balancer.
- HTTP/3 is supported for connections between clients and the load balancer, not connections between the load balancer and its backends.

### "Internal Application Load Balancer overview \_|\_ Cloud Load Balancing \_\

- URL: [https://docs.cloud.google.com/load-balancing/docs/l7-internal](https://docs.cloud.google.com/load-balancing/docs/l7-internal)
- Source ID: `site-docs-root`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- Table: Supported session affinity settings Product Session affinity options Cross-region internal Application Load Balancer Regional internal Application Load Balancer None ( NONE ) Client IP ( CLIENT IP ) Generated cookie ( GENERATED COOKIE ) Header field ( HEADER FIELD ) HTTP cookie ( HTTP COOKIE ) Stateful cookie-based affinity ( STRONG COOKIE AFFINITY ) Also note: The effective default value of the load balancing locality policy ( localityLbPolicy ) changes according to your session affinity settings.
- There are 2 modes of HTTP/2 support: HTTP/2 over TLS Cleartext HTTP/2 over TCP HTTP/2 over TLS HTTP/2 over TLS is supported for connections between clients and the external Application Load Balancer, and for connections between the load balancer and its backends.
- The websocket protocol works as follows: The load balancer recognizes a websocket Upgrade request from an HTTP or HTTPS client.
- For serverless NEGs on a backend service: 60 minutes For all other backend types on a backend service: 30 seconds Client HTTP keepalive timeout The maximum amount of time that the TCP connection between a client and the load balancer's managed Envoy proxy can be idle. (The same TCP connection might be used for multiple HTTP requests.) 610 seconds Backend HTTP keepalive timeout The maximum amount of time that the TCP connection between the load balancer's managed Envoy proxy and a backend can be idle. (The same TCP connection might be used for multiple HTTP requests.) 10 minutes (600 seconds) Backend service timeout The configurable backend service timeout represents the maximum amount of time that the load balancer waits for your backend to process an HTTP request and return the corresponding HTTP response.

### "Creating persistent connections with WebSockets \_|\_ App Engine flexible\

- URL: [https://docs.cloud.google.com/appengine/docs/flexible/java/using-websockets-and-session-affinity](https://docs.cloud.google.com/appengine/docs/flexible/java/using-websockets-and-session-affinity)
- Source ID: `site-docs-reference-2`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- To work around this, many applications use libraries such as socket.io that fall back on http long polling with clients that don't support WebSockets.
- Clone the sample app Copy the sample apps to your local machine, and navigate to the websockets directory: git clone https://github.com/GoogleCloudPlatform/java-docs-samples cd java-docs-samples/flexible/java-17/websocket-jetty/ Run the sample locally To run the sample application on your local computer: Start the local Eclipse Jetty web server using the Jetty Maven plugin: mvn jetty:run-exploded In your web browser, enter the following address: http://localhost:8080 Deploy and run the sample on App Engine To deploy your application to the App Engine flexible environment, run the following command from the websocket-jetty directory: mvn package appengine:deploy -Dapp.deploy.projectId= PROJECT ID Replace PROJECT ID with the ID of your Google Cloud project.
- Home Documentation Application hosting App Engine Flexible environment Guides Send feedback Creating persistent connections with WebSockets Stay organized with collections Save and categorize content based on your preferences.
- Go Java Node.js PHP Python Ruby .NET Custom You can use WebSockets to create a persistent connection from a client (such as a mobile device or a computer) to an App Engine instance.

