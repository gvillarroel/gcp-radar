# Cloud CDN HTTP/3 support

Product: Cloud CDN
Feature slug: `cloud-cdn-http-3-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud CDN, via External HTTP(S) Load Balancing, supports HTTP/3 over QUIC for lower latency and improved throughput.

## Lifecycle

- Latest feature date: 2021-06-22
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/cdn/docs/http-https-over-same-domain](https://docs.cloud.google.com/cdn/docs/http-https-over-same-domain), [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching), [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-external-origin](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-external-origin))
- certificate (evidence: [https://docs.cloud.google.com/cdn/docs/http-https-over-same-domain](https://docs.cloud.google.com/cdn/docs/http-https-over-same-domain), [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching), [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-external-origin](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-external-origin))
- key (evidence: [https://docs.cloud.google.com/cdn/docs/http-https-over-same-domain](https://docs.cloud.google.com/cdn/docs/http-https-over-same-domain), [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching), [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-external-origin](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-external-origin))
- private (evidence: [https://docs.cloud.google.com/cdn/docs/http-https-over-same-domain](https://docs.cloud.google.com/cdn/docs/http-https-over-same-domain), [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching), [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-external-origin](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-external-origin))

## Official Evidence

- [https://docs.cloud.google.com/cdn/docs/caching](https://docs.cloud.google.com/cdn/docs/caching)
- [https://docs.cloud.google.com/cdn/docs/http-https-over-same-domain](https://docs.cloud.google.com/cdn/docs/http-https-over-same-domain)
- [https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-external-origin](https://docs.cloud.google.com/cdn/docs/setting-up-cdn-with-external-origin)
