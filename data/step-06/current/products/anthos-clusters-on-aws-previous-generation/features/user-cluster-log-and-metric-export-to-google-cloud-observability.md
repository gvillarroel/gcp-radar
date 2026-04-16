---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:04:30.746Z"
product_name: "Anthos clusters on AWS (previous generation)"
product_slug: "anthos-clusters-on-aws-previous-generation"
feature_name: "User cluster log and metric export to Google Cloud observability"
feature_slug: "user-cluster-log-and-metric-export-to-google-cloud-observability"
latest_feature_date: "2021-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster"
  - "https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster"
  - "https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster"
keywords:
  - "observability"
  - "metric"
  - "export"
  - "user"
  - "cluster"
---

# User cluster log and metric export to Google Cloud observability

Product: Anthos clusters on AWS (previous generation)
Coverage: MEDIUM

## Step 02 Summary

Anthos clusters on AWS user clusters can export logs and metrics to Cloud Logging and Cloud Monitoring.

## Extended Definition

Anthos clusters on AWS user clusters can export logs and metrics to Cloud Logging and Cloud Monitoring.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster)
- [https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster)
- [https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster)

## Supporting Pages

### Create a cluster \_|\_ GKE on AWS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-cluster)
- Source ID: `site-docs-root-2`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information about this command including its optional parameters, see the gcloud container aws reference page. gcloud container aws clusters create CLUSTER NAME \ -- aws - region AWS REGION \ -- location GOOGLE CLOUD LOCATION \ -- cluster - version CLUSTER VERSION \ -- fleet - project FLEET PROJECT \ -- vpc - id VPC ID \ -- subnet - ids CONTROL PLANE SUBNET 1 , CONTROL PLANE SUBNET 2 , CONTROL PLANE SUBNET 3 \ -- pod - address - cidr - blocks POD ADDRESS CIDR BLOCKS \ -- service - address - cidr - blocks SERVICE ADDRESS CIDR BLOCKS \ -- role - arn API ROLE ARN \ -- database - encryption - kms - key - arn DB KMS KEY ARN \ -- admin - users ADMIN USERS LIST \ -- config - encryption - kms - key - arn CONFIG KMS KEY ARN \ -- iam - instance - profile CONTROL PLANE PROFILE \ -- tags "Name= CLUSTER NAME -cp" Replace the following: CLUSTER NAME : your chosen cluster name AWS REGION : the AWS region to create the cluster in GOOGLE CLOUD LOCATION : the name of the Google Cloud location from which this cluster will be managed, as defined in Google Cloud management regions .
- To authorize the Kubernetes workload identity gke-system/gke-telemetry-agent to write logs to Google Cloud Logging, and metrics to Google Cloud Monitoring, run this command: gcloud projects add-iam-policy-binding GOOGLE PROJECT ID \ --member = "serviceAccount: GOOGLE PROJECT ID .svc.id.goog[gke-system/gke-telemetry-agent]" \ --role = roles/gkemulticloud.telemetryWriter Replace GOOGLE PROJECT ID with the cluster's Google Cloud project ID.
- DB KMS KEY ARN : the Amazon Resource Name (ARN) of the AWS KMS key to encrypt the cluster's secrets CONFIG KMS KEY ARN : the Amazon Resource Name (ARN) of the AWS KMS key to encrypt user data ADMIN USERS LIST (optional): a comma-separated list of email addresses of the users to grant administrative privileges to - for example, "kai@example.com,hao@example.com,kalani@example.com".
- Defaults to the user creating the cluster If present, the --tags parameter applies the given AWS tag to all the underlying AWS resources managed by GKE on AWS.

### "In-cluster control plane supported features \_|\_ Cloud Service Mesh v1.21\

- URL: [https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.21/docs/supported-features-in-cluster)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Telemetry Metrics Feature GKE clusters on Google Cloud GKE Enterprise clusters on-premises Other GKE Enterprise clusters Cloud Monitoring (HTTP in-proxy metrics) Cloud Monitoring (TCP in-proxy metrics) Istio Telemetry API Custom adapters/backends, in or out of process Arbitrary telemetry and logging backends Prometheus metrics export to customer-installed Prometheus, Grafana, and Kiali dashboards Compatible Compatible Compatible Google Cloud Managed Service for Prometheus, not including the Cloud Service Mesh dashboard The topology graph in the Google Cloud console no longer uses the Mesh telemetry service as its data source.
- Feature GKE clusters on Google Cloud Distributed Cloud GKE Multi-Cloud Other GKE Enterprise clusters IAP integration End-user authentication Audit policies (preview) Dry-run mode Denial logging Authorization policy Feature GKE clusters on Google Cloud Other GKE Enterprise clusters Authorization v1beta1 policy Path templating Authentication policy Peer authentication Feature GKE clusters on Google Cloud Other GKE Enterprise clusters Auto-mTLS mTLS PERMISSIVE mode For information on enabling mTLS STRICT mode, see Configuring transport security .
- User interface Feature GKE clusters on Google Cloud Google Distributed Cloud Google Distributed Cloud (software only) for bare metal Other GKE Enterprise clusters Cloud Service Mesh dashboards in the Google Cloud console Cloud Monitoring Cloud Logging Cloud Trace Note: On-premises clusters require GKE Enterprise version 1.11 or later.
- Feature GKE clusters on Google Cloud Other GKE Enterprise clusters IPv4 HTTP/1.1 HTTP/2 TCP byte streams (Note 1) gRPC IPv6 Notes: Although TCP is a supported protocol for networking, TCP metrics aren't collected or reported.

### "In-cluster control plane supported features \_|\_ Cloud Service Mesh v1.22\

- URL: [https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster](https://docs.cloud.google.com/service-mesh/v1.22/docs/supported-features-in-cluster)
- Source ID: `site-docs-reference-2`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Telemetry Metrics Feature GKE clusters on Google Cloud GKE Enterprise clusters on-premises Other GKE Enterprise clusters Cloud Monitoring (HTTP in-proxy metrics) Cloud Monitoring (TCP in-proxy metrics) Istio Telemetry API Custom adapters/backends, in or out of process Arbitrary telemetry and logging backends Prometheus metrics export to customer-installed Prometheus, Grafana, and Kiali dashboards Compatible Compatible Compatible Google Cloud Managed Service for Prometheus, not including the Cloud Service Mesh dashboard The topology graph in the Google Cloud console no longer uses the Mesh telemetry service as its data source.
- Feature GKE clusters on Google Cloud Distributed Cloud GKE Multi-Cloud Other GKE Enterprise clusters IAP integration End-user authentication Audit policies (preview) Dry-run mode Denial logging Authorization policy Feature GKE clusters on Google Cloud Other GKE Enterprise clusters Authorization v1beta1 policy Path templating Authentication policy Peer authentication Feature GKE clusters on Google Cloud Other GKE Enterprise clusters Auto-mTLS mTLS PERMISSIVE mode For information on enabling mTLS STRICT mode, see Configuring transport security .
- User interface Feature GKE clusters on Google Cloud Google Distributed Cloud Google Distributed Cloud (software only) for bare metal Other GKE Enterprise clusters Cloud Service Mesh dashboards in the Google Cloud console Cloud Monitoring Cloud Logging Cloud Trace Note: On-premises clusters require GKE Enterprise version 1.11 or later.
- Feature GKE clusters on Google Cloud Other GKE Enterprise clusters IPv4 HTTP/1.1 HTTP/2 TCP byte streams (Note 1) gRPC IPv6 Notes: Although TCP is a supported protocol for networking, TCP metrics aren't collected or reported.

