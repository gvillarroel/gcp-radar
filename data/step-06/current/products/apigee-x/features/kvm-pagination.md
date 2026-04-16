---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.190Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "KVM pagination"
feature_slug: "kvm-pagination"
latest_feature_date: "2022-03-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/data-capture-policy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference"
keywords:
  - "pagination"
  - "maps"
  - "value"
  - "through"
---

# KVM pagination

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Key value maps support pagination through the API.

## Extended Definition

Key value maps support pagination through the API.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/data-capture-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/data-capture-policy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference)

## Supporting Pages

### Building a simple API proxy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy)
- Source ID: `site-docs-reference-required-3`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- Note that the URL map http1 backend is default. defaultService : projects /$ PROJECT ID / global / backendServices / YOUR BACKEND 1 name : matcher1 routeRules : - matchRules : - headerMatches : - headerName : Content - Type prefixMatch : application / grpc prefixMatch : / priority : 100 routeAction : weightedBackendServices : - backendService : projects /$ PROJECT ID / global / backendServices / YOUR BACKEND 2 weight : 100 Validate the URL map: gcloud compute url-maps validate --source /tmp/apigee-map.yaml --project $PROJECT ID Create the url map with header-based routing: gcloud compute url - maps import apigee - http1 - http2 \ -- source / tmp / apigee - map . yaml \ -- global -- project $ PROJECT ID Create a load balancing target HTTPS proxy gcloud compute target-https-proxies create apigee-envoy-https-proxy \ --project $PROJECT ID --url-map apigee-envoy-proxy-map \ --ssl-certificates $CERTIFICATE NAME Reserve an IPV4 External IP and create firewall rules for the load balancer gcloud compute addresses create lb - ipv4 - vip - 1 \ -- project $ PROJECT ID \ -- network - tier = PREMIUM \ -- ip - version = IPV4 \ -- global gcloud compute addresses describe lb - ipv4 - vip - 1 \ -- project $ PROJECT ID -- format = "get(address)" -- global gcloud compute forwarding - rules create apigee - envoy - https - lb - rule \ -- project $ PROJECT ID -- address lb - ipv4 - vip - 1 -- global \ -- target - https - proxy apigee - envoy - https - proxy -- ports 443 Create a firewall rule gcloud compute firewall-rules create k8s-allow-lb-to-apigee-envoy \ --description "Allow incoming from GLB on TCP port 443 to Apigee Proxy" \ --project $PROJECT ID --network $VPC NAME --allow=tcp:443 \ --source-ranges=130.211.0.0/22,35.191.0.0/16 --target-tags=gke-apigee-proxy Example gcloud CLI commands for creating routing for gRPC proxies for existing load balancers This section shows example commands for creating gRPC proxies using the gcloud CLI and an existing load balancer.
- Create another backend service for http2 Create backend service for http2 gcloud compute backend - services create YOUR BACKEND 2 \ -- project $ PROJECT ID \ -- protocol HTTP2 \ -- health - checks hc - apigee - envoy - 443 \ -- port - name https \ -- timeout 302 s \ -- connection - draining - timeout 300 s \ -- global Attach the second backend service to the MIG gcloud compute backend - services add - backend YOUR BACKEND 2 \ -- project $PROJECT ID -- instance - group $MIG NAME \ -- instance - group - region $REGION \ -- balancing - mode UTILIZATION -- max - utilization 0.8 -- global List the URL map for the existing Apigee GCLB gcloud compute url-maps list -project $PROJECT ID Pick up the correct URL map name used for Apigee load balancing gcloud compute url - maps export APIGEE URL MAP NAME - project $ PROJECT ID Create a load balancing URL map YAML file If you already have an existing URL map, merge this configuration into that.
- Otherwise, create a YAML file at /tmp/apigee-map.yaml with this configuration. defaultService : projects / dg - runtime - test1 / global / backendServices / YOUR BACKEND 1 name : matcher1 routeRules : - matchRules : - headerMatches : - headerName : Content - Type prefixMatch : application / grpc prefixMatch : / priority : 100 routeAction : weightedBackendServices : - backendService : projects / dg - runtime - test1 / global / backendServices / YOUR BACKEND 2 weight : 100 Apply the new YAML for gRPC routing gcloud compute url - maps import APIGEE URL MAP NAME \ -- source / tmp / apigee - map . yaml \ -- global - project $ PROJECT ID Adding security Proxy security is achieved by adding a policy to your proxy.
- See Quotas . (Not available if Pass-through authorization is selected.) Using OpenAPI Specifications to generate proxies This section discusses the Use OpenAPI option that is available for generating from an OpenAPI Specification the following types of API proxies: reverse or no target.

### DataCapture policy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/data-capture-policy](https://docs.cloud.google.com/apigee/docs/api-platform/reference/policies/data-capture-policy)
- Source ID: `site-api-reference`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- An example. < Collect > < XMLPayload > < Namespaces > < Namespace prefix = "maps" > http : // maps . example . com < / Namespace > < Namespace prefix = "places" > http : // places . example . com < / Namespace > < / Namespaces > < XPath > / maps : Directions / maps : route / maps : leg / maps : endpoint / places : name < / XPath > < / XMLPayload > < / Collect > If you are not using namespaces in your XPath expressions, you can omit or comment out the <Namespaces> element, as the following example shows: < Collect > < XMLPayload > < !-- < Namespaces / > -- > < XPath > / Directions / route / leg / name < / XPath > < / XMLPayload > < / Collect > <Namespace> Specifies one namespace and a corresponding prefix for use within the XPath expression.
- Description <Source> Optional Specifies the variable to be parsed. <URIPath> Optional Extracts a value from the proxy.pathsuffix of a request source message. <QueryParam> Optional Extracts a value from the specified query parameter of a request source message. <Header> Optional Extracts a value from the specified HTTP header of the specified request or response message. <FormParam> Optional Extracts a value from the specified form parameter of the specified request or response message. <JSONPayload> Optional Specifies the JSON-formatted message from which the value of the variable will be extracted.
- N/A Required String <Collect> <Header name="my header"> <Pattern ignoreCase="false">Bearer {$}</Pattern> </Header> </Collect> If multiple headers have the same name, use indices to reference individual headers in the array: <Collect> <Header name="my header.2"> <Pattern ignoreCase="true">{$}</Pattern> </Header> </Collect> Or the following to list all the headers in the array: <Collect> <Header name="my header.values"> <Pattern ignoreCase="true">{$}</Pattern> </Header> </Collect> Note: You must specify a single variable named {$} .
- Capturing data inline The next example shows how to capture data inline using <JSONPayload> , a child element of the <Collect> element. < DataCapture name = "DC-Currency" > < Capture > < DataCollector>dc data collector<DataCollector> < Collect > < JSONPayload > < JSONPath > $. results [ 0 ] . currency < / JSONPath > < / JSONPayload > < / Collect > < / Capture > < / DataCapture > In the code above: The <JSONPayload> element specifies the JSON-formatted message from which the value of the variable is extracted.

### "Analytics metrics, dimensions, and filters reference \_|\_ Apigee \_|\_\

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference](https://docs.cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference)
- Source ID: `site-docs-reference-required-3`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- To determine the original client IP Address, accessed through the ax resolved client ip dimension, Apigee uses the values in the x forwarded for ip dimension.
- Examples: A Pixel XL making a call through Chrome: Mozilla/5.0 (Linux; Android 7.1.2; Pixel XL Build/NHG47N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.92 Mobile Safari/537.36 An iPad making a call through Chrome: Mozilla/5.0 (iPad; CPU OS 10 2 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/54.0.2840.91 Mobile/14C92 Safari/602.1 cURL from a terminal: curl/7.51.0 User Agent Family ax ua agent family Family of the useragent, such as Chrome Mobile or curl .
- The rate charged for a transaction is calculated using the following formula: x apigee mintng rate = (consumption-based pricing rate) perUnitPriceMultiplier value The value of the consumption-based pricing rate is fetched from your rate plan and the perUnitPriceMultiplier value is multiplied only if the variable is captured by the DataCapture policy.
- With the default behavior, the value of the ax resolved client ip dimension is calculated from the values in the x forwarded for ip dimension in the following manner: Set ax resolved client ip to the first non-local IP address in x forwarded for ip .

