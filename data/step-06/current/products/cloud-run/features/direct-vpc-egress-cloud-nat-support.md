---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.509Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Direct VPC egress Cloud NAT support"
feature_slug: "direct-vpc-egress-cloud-nat-support"
latest_feature_date: "2024-03-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/tutorials/secure-services"
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
keywords:
  - "public"
  - "direct"
  - "egress"
---

# Direct VPC egress Cloud NAT support

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Direct VPC egress can use Cloud NAT with public NAT IP addresses.

## Extended Definition

Direct VPC egress can use Cloud NAT with public NAT IP addresses.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services)
- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)

## Supporting Pages

### Secure Cloud Run services tutorial \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services)
- Source ID: `site-docs-root`
- Final score: 62
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Empty ; var renderedHtml = await GetAuthenticatedPostResponse ( editorUpstreamRenderUrl , markdown ); return Content ( renderedHtml ); } Ship the public editor service To build and deploy your code: Change to the editor directory: Node.js cd ../editor Python cd ../editor Go cd ../editor Java cd ../editor C# cd ../Samples.Run.MarkdownPreview.Editor/ Run the following command to build your container and publish on Artifact Registry.
- Builder () . url ( url ) . addHeader ( "Authorization" , "Bearer " + token ) . post ( body ) . build (); Response response = ok . newCall ( request ). execute (); html = response . body (). string (); } catch ( IOException e ) { logger . error ( "Unable to get rendered data" , e ); } return html ; } Parse the markdown from JSON and send it to the Renderer service to be transformed into HTML. // '/render' expects a JSON body payload with a 'data' property holding plain text // for rendering. @PostMapping ( value = "/render" , consumes = "application/json" ) public String render ( @RequestBody Data data ) { String markdown = data . getData (); String url = System . getenv ( "EDITOR UPSTREAM RENDER URL" ); if ( url == null ) { String msg = "No configuration for upstream render service: " + "add EDITOR UPSTREAM RENDER URL environment variable" ; logger . error ( msg ); throw new IllegalStateException ( msg ); } String html = makeAuthenticatedRequest ( url , markdown ); return html ; } C# GetAuthenticatedPostResponse creates authenticated requests to private services.
- In other environments, makeAuthenticatedRequest requests an identity token from Google's servers by authenticating with Application Default Credentials . // makeAuthenticatedRequest creates a new HTTP request authenticated by a JSON Web Tokens (JWT) // retrievd from Application Default Credentials. public String makeAuthenticatedRequest ( String url , String markdown ) { String html = "" ; try { // Retrieve Application Default Credentials GoogleCredentials credentials = GoogleCredentials . getApplicationDefault (); IdTokenCredentials tokenCredentials = IdTokenCredentials . newBuilder () . setIdTokenProvider (( IdTokenProvider ) credentials ) . setTargetAudience ( url ) . build (); // Create an ID token String token = tokenCredentials . refreshAccessToken (). getTokenValue (); // Instantiate HTTP request MediaType contentType = MediaType . get ( "text/plain; charset=utf-8" ); okhttp3 .
- Change to the directory that contains the Cloud Run sample code: Node.js cd nodejs-docs-samples/run/markdown-preview/ Python cd python-docs-samples/run/markdown-preview/ Go cd golang-samples/run/markdown-preview/ Java cd java-docs-samples/run/markdown-preview/ C# cd dotnet-docs-samples/run/markdown-preview/ Review the private Markdown rendering service From the perspective of the frontend there is a simple API specification for the Markdown service: One endpoint at / Expects POST requests The body of the POST request is Markdown text You may want to review all of the code for any security concerns or just to learn more about it by exploring the ./renderer/ directory.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Run worker pools support both Direct VPC egress and Direct VPC ingress .
- Cloud Run services and jobs support Direct VPC egress .
- For Cloud Run worker pools with Direct VPC ingress, such as database connections or any other custom TCP-based protocol, the container must listen for TCP connections on the port exposed in your container image through the Dockerfile or specified by the PORT environment variable.
- Make sure you create your instance under a dual-stack subnet . /computeMetadata/v1/instance/network-interfaces/ /computeMetadata/v1/instance/network-interfaces/0/ Network interface directory path for worker pools.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Run worker pools support both Direct VPC egress and Direct VPC ingress .
- Cloud Run services and jobs support Direct VPC egress .
- For Cloud Run worker pools with Direct VPC ingress, such as database connections or any other custom TCP-based protocol, the container must listen for TCP connections on the port exposed in your container image through the Dockerfile or specified by the PORT environment variable.
- Make sure you create your instance under a dual-stack subnet . /computeMetadata/v1/instance/network-interfaces/ /computeMetadata/v1/instance/network-interfaces/0/ Network interface directory path for worker pools.

