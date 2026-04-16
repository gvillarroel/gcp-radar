---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:27:18.175Z"
product_name: "Apigee X"
product_slug: "apigee-x"
feature_name: "Control plane CMEK"
feature_slug: "control-plane-cmek"
latest_feature_date: "2023-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts"
  - "https://docs.cloud.google.com/apigee/docs/locations"
  - "https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines"
keywords:
  - "encryption"
  - "customer"
  - "plane"
  - "cmek"
  - "managed"
  - "control"
  - "supports"
---

# Control plane CMEK

Product: Apigee X
Coverage: MEDIUM

## Step 02 Summary

Apigee supports customer-managed encryption keys for protecting control plane data.

## Extended Definition

Apigee supports customer-managed encryption keys for protecting control plane data.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts)
- [https://docs.cloud.google.com/apigee/docs/locations](https://docs.cloud.google.com/apigee/docs/locations)
- [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)

## Supporting Pages

### Introduction to data residency \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts](https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts)
- Source ID: `site-docs-root-2`
- Final score: 107
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, if you select us for the CONTROL PLANE LOCATION , the other Apigee resources, such as the runtime instance, referencing CMEK, endpoint attachment, etc., must also be within the us region.
- With data residency, selecting the control plane location ensures that all customer content is stored within the specified region.
- If you have a Google Cloud organization policy that uses a resource location constraint ( constraints/gcp.resourceLocations ), the constraint will apply to the following Apigee resources that are created when Apigee is provisioned: Control plane Consumer data Runtime Endpoints attachment Analytics If you are provisioning a new Apigee organization within a Google Cloud project with a resource location constraint applied, you must ensure that the location constraint is compatible with the control plane location specified for your Apigee organization: If you provision an Apigee organization without data residency, the resource location constraint in your Google Cloud organization policy must be set to global .
- If you choose to enable data residency when provisioning an Apigee Subscription or Pay-as-you-go organization, the following services are in scope under Apigee's FedRAMP Authority To Operate (ATO): The regionalized Apigee organization's control plane, runtime plane, and analytics .

### Apigee locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/locations](https://docs.cloud.google.com/apigee/docs/locations)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following resources outline the steps required to select a control plane hosting jurisdiction, based on your organization type: Organization type Provisioning method Documentation Subscription organization Apigee UI in Cloud console Command line interface Step 3: Configure hosting and encryption Provision a paid org with VPC peering Provision a paid org without VPC peering science Pay-as-you-go organization Apigee UI in Cloud console Command line interface Step 3: Configure hosting and encryption Provision a paid org with VPC peering Provision a paid org without VPC peering science Available Apigee API control plane hosting jurisdictions The Apigee control plane directly binds to the API host name. apigee.googleapis.com has a global control plane; if you want to use a regionalized control plane, the API host name is CONTROL PLANE LOCATION -apigee.googleapis.com .
- Americas Control plane hosting jurisdiction description Control plane hosting jurisdiction name Details United States us (multiple regions in United States) Service endpoint: us-apigee.googleapis.com Canada ca (multiple regions in Canada) Service endpoint: ca-apigee.googleapis.com Consumer data region description Consumer data region name Details Iowa us-central1 Low CO 2 Oregon us-west1 Low CO 2 Los Angeles us-west2 Salt Lake City us-west3 Las Vegas us-west4 South Carolina us-east1 Northern Virginia us-east4 Columbus us-east5 Dallas us-south1 Montréal northamerica-northeast1 Low CO 2 Toronto northamerica-northeast2 Low CO 2 Europe Control plane hosting jurisdiction description Control plane hosting jurisdiction name Details European Union eu (multiple regions in the European Union) Service endpoint: eu-apigee.googleapis.com Germany de (multiple regions in Germany) Service endpoint: de-apigee.googleapis.com France fr (single region europe-west9) Service endpoint: fr-apigee.googleapis.com Switzerland ch (single region europe-west6) Service endpoint: ch-apigee.googleapis.com Consumer data region description Consumer data region name Details Belgium europe-west1 Low CO 2 Frankfurt europe-west3 Netherlands europe-west4 Zurich europe-west6 Low CO 2 Milan europe-west8 Paris europe-west9 Low CO 2 Turin europe-west12 Warsaw europe-central2 Madrid europe-southwest1 Low CO 2 Finland europe-north1 Low CO 2 Asia-Pacific Control plane hosting jurisdiction description Control plane hosting jurisdiction name Details Australia au (multiple regions in Australia) Service endpoint: au-apigee.googleapis.com India in (multiple regions in India) Service endpoint: in-apigee.googleapis.com Japan jp (multiple regions in Japan) Service endpoint: jp-apigee.googleapis.com Consumer data region description Consumer data region name Details Sydney australia-southeast1 Melbourne australia-southeast2 Mumbai asia-south1 Delhi asia-south2 Tokyo asia-northeast1 Osaka asia-northeast2 Middle East Control plane hosting juridiction description Control plane hosting jurisdiction name Details Qatar qa (single region me-central1) Service endpoint: qa-apigee.googleapis.com Saudi Arabia sa (single region me-central2) Service endpoint: sa-apigee.googleapis.com Israel il (single region me-west1) Service endpoint: il-apigee.googleapis.com Consumer data region description Consumer data region name Details Doha me-central1 Dammam me-central2 Tel Aviv me-west1 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Americas Region description Region name Details Iowa us-central1 Low CO 2 API hub supported Oregon us-west1 Low CO 2 API hub supported Los Angeles us-west2 API hub supported Salt Lake City us-west3 API hub supported Las Vegas us-west4 API hub supported Montréal northamerica-northeast1 Low CO 2 API hub supported Toronto northamerica-northeast2 Low CO 2 API hub supported South Carolina us-east1 API hub supported Northern Virginia us-east4 API hub supported Columbus us-east5 API hub supported Dallas us-south1 API hub supported Santiago southamerica-west1 Low CO 2 API hub supported São Paulo southamerica-east1 API hub supported Europe Region description Region name Details Belgium europe-west1 Low CO 2 London europe-west2 Low CO 2 API hub supported Frankfurt europe-west3 API hub supported Netherlands europe-west4 API hub supported Zurich europe-west6 Low CO 2 API hub supported Milan europe-west8 API hub supported Paris europe-west9 Low CO 2 API hub supported Berlin europe-west10 API hub supported Turin europe-west12 API hub supported Madrid europe-southwest1 Low CO 2 API hub supported Warsaw europe-central2 API hub supported Finland europe-north1 Low CO 2 API hub supported Asia-Pacific Region description Region name Details Sydney australia-southeast1 API hub supported Melbourne australia-southeast2 API hub supported Mumbai asia-south1 API hub supported Delhi asia-south2 API hub supported Singapore asia-southeast1 API hub supported Jakarta asia-southeast2 API hub supported Taiwan asia-east1 API hub supported Hong Kong asia-east2 API hub supported Tokyo asia-northeast1 API hub supported Osaka asia-northeast2 API hub supported Seoul asia-northeast3 API hub supported Middle East Region description Region name Details Doha me-central1 API hub supported Dammam me-central2 API hub supported Tel Aviv me-west1 API hub supported Africa Region description Region name Details Johannesburg africa-south1 API hub supported Select an Apigee API control plane hosting jurisdiction You select the specific Apigee control plane hosting jurisdiction where your data is stored when you provision your Apigee instance.
- You can select the control plane hosting jurisdiction when you provision using the Apigee UI in Google Cloud console, or using the API.

### Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines](https://docs.cloud.google.com/apigee/docs/hybrid/v1.10/cluster-monitoring-guidelines)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: in production, trigger an event notification if the write clientrequest latency value of 99thPercentile is 5 seconds for 3 minutes Cloud Monitoring dashboard MQL query : fetch k8s container metric 'apigee.googleapis.com/cassandra/clientrequest latency' filter (metric.scope == 'Write' && metric.unit == '99thPercentile') group by 1m, [value clientrequest latency mean: mean(value.clientrequest latency)] every 1m group by [metric.scope, metric.unit], [value clientrequest latency mean aggregate: aggregate(value clientrequest latency mean)] Apigee Control plane Apigee Synchronizer service SLI metrics provide request and response counts and latencies between the Apigee control plane and the Hybrid runtime plane.
- Alert threshold None Cloud Monitoring dashboard MQL query : fetch k8s container metric 'apigee.googleapis.com/upstream/request count' filter (resource.container name == 'apigee-synchronizer') && (metric.type == 'CONTRACT') align rate(1m) every 1m group by [metric.method, metric.type, resource.container name], [value request count aggregate: aggregate(value.request count)] Error rate Upstream response count Use case : The upstream/response count SLI metric provides the number of responses the Synchronizer services received from the Apigee control plane.
- Resource types k8s container Metric upstream/request count Filter By method , response type , container name , and all k8s container resource type labels Group By Aggregator sum Alert consideration If there are errors in upstream/response count metrics with non-200 response codes returned from Apigee Control plane, then its required further investigation into those errors.
- Synchronizer instances running in the runtime plane are expected to poll the control plane regularly, download the contracts and make the same available to local runtime instances.

