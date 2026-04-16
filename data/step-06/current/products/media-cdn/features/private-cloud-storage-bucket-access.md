---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:51.029Z"
product_name: "Media CDN"
product_slug: "media-cdn"
feature_name: "Private Cloud Storage bucket access"
feature_slug: "private-cloud-storage-bucket-access"
latest_feature_date: "2021-06-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/media-cdn/docs/origins"
  - "https://docs.cloud.google.com/media-cdn/docs/routing"
  - "https://docs.cloud.google.com/media-cdn/docs/overview"
  - "https://docs.cloud.google.com/media-cdn/docs/quickstart"
keywords:
  - "private"
  - "storage"
  - "bucket"
  - "access"
  - "media"
  - "cdn"
  - "can"
  - "connect"
---

# Private Cloud Storage bucket access

Product: Media CDN
Coverage: MEDIUM

## Step 02 Summary

Media CDN can connect to private Cloud Storage buckets so content is served only through Media CDN instead of direct public access.

## Extended Definition

Media CDN can connect to private Cloud Storage buckets so content is served only through Media CDN instead of direct public access.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins)
- [https://docs.cloud.google.com/media-cdn/docs/routing](https://docs.cloud.google.com/media-cdn/docs/routing)
- [https://docs.cloud.google.com/media-cdn/docs/overview](https://docs.cloud.google.com/media-cdn/docs/overview)
- [https://docs.cloud.google.com/media-cdn/docs/quickstart](https://docs.cloud.google.com/media-cdn/docs/quickstart)

## Supporting Pages

### Origins overview \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/origins](https://docs.cloud.google.com/media-cdn/docs/origins)
- Source ID: `site-docs-root`
- Final score: 277
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported origins and protocols Media CDN directly supports any publicly reachable HTTP endpoint as an origin, including the following: Cloud Storage buckets, including private buckets through Identity and Access Management service accounts External Application Load Balancers Amazon S3-compatible buckets, including private buckets that use AWS Signature Version 4 Other publicly available object storage, such as Azure Blob Storage Publicly available web servers, such as public VMs or on-premises hosts Connectivity to origins is over secure tunnels and Google's global backbone network.
- Use the following URL to access the JSON file that contains the updated Google-assigned IP address ranges. https://www.gstatic.com/ipranges/mediacdn.json Failover and timeouts The following sections describe these configuration options: Timeouts: Determine how long Media CDN waits to connect to your origin or for it to respond to a request.
- The following table describes the timeout fields: Field Default Description connectTimeout 5 seconds The maximum amount of time Media CDN can take from starting the request to the origin until Media CDN determines whether the response is usable.
- Origin connectivity The following sections describe how Media CDN connects to origins, how HTTP requests are made, and how you can authenticate requests.

### Configure service routes \_|\_ Media CDN \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/routing](https://docs.cloud.google.com/media-cdn/docs/routing)
- Source ID: `site-docs-root`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use third-party storage backends Media CDN supports connecting to publicly reachable HTTP endpoints outside of Google Cloud, including AWS S3 storage buckets, Azure Blob Storage, and other storage providers.
- To configure support for a set of methods for a route rule, specify a routeMethods section that has an allowed methods value for each method. routeRules : - priority : 5 description : "Video uploads" routeMethods : allowedMethods : [ "PUT" , "POST" , "OPTIONS" ] matchRules : - pathTemplateMatch : "/uploads/ .ts" origin : prod-video-storage - priority : 10 description : "Video serving" routeMethods : allowedMethods : [ "GET" , "HEAD" ] matchRules : - pathTemplateMatch : "/videos/ .ts" origin : prod-video-storage Path normalization Path normalization describes how Media CDN combines multiple representations of a URL into a single, canonical representation under specific scenarios.
- To rewrite a hostname (for example, rewriting cdn.example.com to my-bucket.s3.us-west-2.amazonaws.com ), you can configure the following: name : prod-service routing : hostRules : - hosts : - cdn.example.com pathMatcher : example routes pathMatchers : - name : example routes routeRules : - priority : 1 origin : my-origin matchRules : - prefixMatch : "/videos/" routeAction : urlRewrite : hostRewrite : "my-bucket.s3.us-west-2.amazonaws.com" In this case, the origin request URL would change from cdn.example.com/videos/ to my-bucket.s3.us-west-2.amazonaws.com/videos/ .
- For example, to map all requests with a path prefix of /legacy/ to your external bucket, you can configure both a hostRewrite and a pathPrefixRewrite to strip this prefix from the origin request: routeRules : - description : legacy backend matchRules : - prefixMatch : "/legacy/" routeAction : urlRewrite : hostRewrite : BUCKET-NAME.s3.REGION.amazonaws.com pathPrefixRewrite : / cdnPolicy : cacheMode : CACHE ALL STATIC defaultTtl : 3600s For more information about how the host header is set on origin requests, see the origin request headers documentation.

### Media CDN overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/overview](https://docs.cloud.google.com/media-cdn/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can grant Media CDN access to your private Cloud Storage buckets and authenticate requests to ensure that only valid Media CDN requests are granted.
- Origin authentication Media CDN supports private Cloud Storage buckets as an origin through origin authentication .
- You can use Media CDN with your existing origin infrastructure, whether the content is hosted within Cloud Storage, in another cloud, or within your on-premises infrastructure.
- Media CDN supports the following ways of invalidating content: By host and URL path By URL prefix and wildcard By cache tags, including built-in tags for status, origin, and media type You can combine the invalidation parameters to target specific cached responses and to minimize origin load on the subsequent cache fill.

### Set up a Media CDN service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/media-cdn/docs/quickstart](https://docs.cloud.google.com/media-cdn/docs/quickstart)
- Source ID: `site-docs-root`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: Media CDN can take up to 10 minutes to create the origin Terraform resource "google network services edge cache origin" "default" { name = "cloud-storage-origin" origin address = "gs://my-bucket-${random id.unique suffix.hex}" } Create an EdgeCacheService resource Your EdgeCacheService resource configures routing, certificate, and caching settings, and can point to EdgeCacheOrigin resources.
- Create a Cloud Storage bucket Media CDN content can originate from locations such as a Cloud Storage bucket, a third-party storage location, or a load balancer.
- If you prefer not to make your Cloud Storage bucket publicly accessible, you must give Media CDN permissions to access the bucket.
- After you've set up your domain, access your content with the following curl command: curl -svo /dev/null "http://DOMAIN NAME/FILE NAME" If you did not configure DNS to point to your provisioned IP addresses, use the resolve option to override the address that curl uses. curl -svo /dev/null --resolve DOMAIN NAME :80: IP ADDRESS "http:// DOMAIN NAME/FILE NAME " Replace the following: DOMAIN NAME : the host domain you specified while creating the service IP ADDRESS : the IP address of the service as visible in the Addresses column in the list of services FILE NAME : the name of the file you uploaded to the bucket Example: curl -svo /dev/null --resolve web.example.com:80:34.104.37.129 "http://web.example.com/file.mp4" The command initially produces output similar to the following, with the status miss , because Media CDN doesn't have the requested data already retrieved from the origin: < HTTP/2 200 OK ... < x-cache-status: den;miss ...

