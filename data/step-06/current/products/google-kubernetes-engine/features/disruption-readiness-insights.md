---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.783Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Disruption readiness insights"
feature_slug: "disruption-readiness-insights"
latest_feature_date: "2023-08-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/batch-platform-on-gke"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners"
keywords:
  - "disruption"
  - "readiness"
  - "insights"
  - "provides"
  - "recommendations"
  - "help"
  - "workloads"
  - "stay"
---

# Disruption readiness insights

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Provides insights and recommendations to help workloads stay ready for disruption, including guidance based on Pod Disruption Budgets.

## Extended Definition

Provides insights and recommendations to help workloads stay ready for disruption, including guidance based on Pod Disruption Budgets.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql)
- [https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/batch-platform-on-gke](https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/batch-platform-on-gke)
- [https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners](https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners)

## Supporting Pages

### "Deploy a highly-available PostgreSQL database on GKE \_|\_ Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/postgresql)
- Source ID: `site-docs-root-2`
- Final score: 141
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Choose blue-green upgrades if your workloads are less tolerant of disruptions, and a temporary cost increase due to higher resource usage is acceptable.
- Use the Recommender service to check for deprecation insights and recommendations to avoid service interruptions.
- To get a baseline result, test with multi-connections via multi jobs (threads) for 30 seconds. pgbench -h $HOST PGPOOL -U postgres postgres -c10 -j4 -T 30 -R 200 The output looks similar to the following: pgbench (14.5) starting vacuum...end. transaction type: <builtin: TPC-B (sort of)> scaling factor: 1 query mode: simple number of clients: 10 number of threads: 4 duration: 30 s number of transactions actually processed: 5980 latency average = 7.613 ms latency stddev = 2.898 ms rate limit schedule lag: avg 0.256 (max 36.613) ms initial connection time = 397.804 ms tps = 201.955497 (without initial connection time) To ensure availability during upgrades, you can generate some load against your database, and ensure that the PostgreSQL application provides a consistent response rate during the upgrade.
- 0s Normal Pulled pod/postgresql-postgresql-ha-postgresql-0 Container image "us-docker.pkg.dev/psch-gke-dev/main/bitnami/postgresql-repmgr:14.5.0-debian-11-r10" already present on machine 0s Normal Created pod/postgresql-postgresql-ha-postgresql-0 Created container postgresql 0s Normal Started pod/postgresql-postgresql-ha-postgresql-0 Started container postgresql Prepare for disaster recovery To ensure that your production workloads remain available in the event of a service-interrupting event, you should prepare a disaster recovery (DR) plan.

### "Best practices for running batch workloads on GKE \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/batch-platform-on-gke](https://docs.cloud.google.com/kubernetes-engine/docs/best-practices/batch-platform-on-gke)
- Source ID: `site-docs-reference-required-4`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Autopilot Standard This page introduces the best practices for building and optimizing batch processing platforms with Google Kubernetes Engine (GKE), including best practices for: Architecture Job management Multi-tenancy Security Queueing Storage Performance Cost efficiency Monitoring GKE provides a powerful framework for orchestrating batch workloads such as data processing, training machine learning models , running scientific simulations , and other high performance computing workloads .
- The following table lists the key recommendations when managing queueing and fair sharing among batch workloads: Recommendation Resources Use Kueue Kueue is a kubernetes-native Job queueing system for batch, high performance computing, machine learning, and similar applications in a Kubernetes cluster.
- The following table lists the key recommendations when managing access and security Recommendation Resources Set Workload Identity Federation for GKE GKE allows workloads in your GKE cluster to impersonate Identity and Access Management (IAM) service accounts to access Google Cloud services.
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Send feedback Best practices for running batch workloads on GKE Stay organized with collections Save and categorize content based on your preferences.

### "Autopilot partners \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners](https://docs.cloud.google.com/kubernetes-engine/docs/resources/autopilot-partners)
- Source ID: `site-docs-reference-2`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Kubecost Kubecost provides real-time cost visibility and insights for teams using GKE, including Autopilot, helping you monitor your Kubernetes costs.
- Sysdig Secure DevOps Platform The Sysdig Secure Devops Platform helps you implement container security practices in your GKE Autopilot clusters, including monitoring and securing workloads using the Sysdig agent.
- Datadog Datadog provides visibility into containerized apps running on GKE Autopilot by collecting metrics, logs, and traces, which helps to identify performance issues and provide context for troubleshooting.
- Autopilot This page provides information about Google Kubernetes Engine (GKE) Autopilot partner organizations and the specialized workloads that they make available in Autopilot clusters.

