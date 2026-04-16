---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.711Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "ThreatConnect IOC V3 connector"
feature_slug: "threatconnect-ioc-v3-connector"
latest_feature_date: "2025-12-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-staxx"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream"
  - "https://docs.cloud.google.com/chronicle/docs/reference/authentication"
keywords:
  - "threatconnect"
  - "ioc"
  - "v3"
  - "connector"
  - "secops"
  - "can"
  - "ingest"
  - "indicators"
---

# ThreatConnect IOC V3 connector

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Google SecOps can ingest indicators of compromise from ThreatConnect through the v3 REST API.

## Extended Definition

Google SecOps can ingest indicators of compromise from ThreatConnect through the v3 REST API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-staxx](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-staxx)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream)
- [https://docs.cloud.google.com/chronicle/docs/reference/authentication](https://docs.cloud.google.com/chronicle/docs/reference/authentication)

## Supporting Pages

### "Integrate Anomali STAXX with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-staxx](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-staxx)
- Source ID: `site-api-reference`
- Final score: 75
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Error is {0}".format(exception.stacktrace) General Connectors To learn more about configuring connectors in Google SecOps, see Ingest your data (connectors) .
- Max Indicators To Fetch Integer 50 No How many indicators to process per one connector iteration.
- Anomali STAXX - Indicators Connector Pull indicators from Anomali STAXX.
- Connector parameters Use the following parameters to configure the connector: Parameter name Type Default value Is mandatory Description Product Field Name String Product Name Yes The name of the field where the product name is stored.

### "Authenticate to Chronicle API \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/authentication](https://docs.cloud.google.com/chronicle/docs/reference/authentication)
- Source ID: `site-iam-reference`
- Final score: 64
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can access the API in the following ways: Client libraries REST Client libraries The Google SecOps client libraries provide high-level language support for authenticating to Chronicle API programmatically.
- Before you complete these instructions, you must complete the basic setup for Chronicle API, as described in Onboard a Google SecOps instance .

### "Integrate Anomali ThreatStream with Google SecOps \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream)
- Source ID: `site-api-reference`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Reason: {0}''.format(message) General Link: https://siemplify.threatstream.com/import/review/{jobid} Entity Connectors To learn more about configuring connectors in Google SecOps, see Ingest your data (connectors) .
- Source Feed Grouping Checkbox Unchecked No If enabled, the connector groups observables from the same source under the same Google SecOps alert.
- Possible values: adware , anomalous , anonymization , apt , bot , brute , c2 , compromised , crypto , data leakage , ddos , dyn dns , exfil , exploit , fraud , hack tool , i2p , informational , malware , p2p , parked , phish , scan , sinkhole , spam , suppress , suspicious , tor , vps Trusted Circle Filter CSV N/A No Comma-separated list of trusted circle ids that should be used to ingest observables, such as 146,147 .
- Possible values: URL , domain , email , hash , ip , ipv6 Observable Status Filter CSV active No Comma-separated list of observable status that should be used to ingest new data, such as active,inactive Possible values: active , inactive , falsepos .

