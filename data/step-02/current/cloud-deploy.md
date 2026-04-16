# Cloud Deploy

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 42
Unique features: 43

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-23 | Deployment analysis |  | Deployment analysis monitors deployed application performance and can automatically trigger actions such as rollbacks. |
| 2026-03-23 | Tasks |  | Tasks let you provide user-defined actions in Cloud Deploy, including deploy hooks, deployment verification, analysis, and custom target type workflows. |
| 2026-03-02 | Regional availability in asia-southeast3 |  | Cloud Deploy is available in the asia-southeast3 region. |
| 2026-02-11 | Cloud Run worker pool deployments |  | Cloud Deploy can deploy containerized workloads to Cloud Run worker pools. |
| 2025-09-02 | Custom organization policy constraints |  | Custom organization policy constraints provide granular control over specific fields for selected Cloud Deploy resources. |
| 2025-01-13 | GKE DNS-based endpoint connectivity |  | Cloud Deploy can connect to a GKE cluster through its DNS-based endpoint to simplify private-cluster networking. |
| 2024-11-20 | Scheduled release promotion |  | Scheduled release promotion automatically promotes releases across targets at specified times. |
| 2024-10-16 | Automatic rollback to last successful rollout |  | Automatic rollback restores deployment state to the most recent successful rollout when a rollout fails. |
| 2024-10-16 | Automatic rollout retry |  | Automatic rollout retry re-attempts failed rollouts without manual intervention. |
| 2024-10-10 | Deploy policy rollout freeze windows |  | Deploy policies can block rollouts during specified time windows. |
| 2024-06-28 | Verbose execution logging |  | Verbose execution logging lets targets run Skaffold, gcloud, and kubectl with debug-level or equivalent logging. |
| 2024-06-27 | Proxy support for GKE targets |  | Cloud Deploy supports deployments to Google Kubernetes Engine targets through a proxy. |
| 2023-12-18 | Custom target types |  | Custom target types let you define your own target types and deploy to them with Cloud Deploy. |
| 2023-12-18 | Sample custom targets |  | Sample custom targets provide example implementations for custom target integrations such as Terraform Infrastructure Manager, GitOps, Vertex AI, and Helm. |
| 2023-11-16 | Release render failure alerts |  | Release render failure alerts notify you when Cloud Deploy release rendering fails. |
| 2023-11-13 | Automated release promotion |  | Automated release promotion advances releases through the delivery pipeline automatically. |
| 2023-11-13 | Automated rollout phase advancement |  | Automated rollout phase advancement moves rollouts through their phases automatically. |
| 2023-11-08 | Operations Suite alert configuration in console |  | The Cloud Deploy console supports configuring Google Cloud Operations Suite alerts. |
| 2023-10-23 | Cloud Run job deployments |  | Cloud Deploy supports deploying Cloud Run jobs in addition to Cloud Run services. |
| 2023-08-07 | Deploy hooks |  | Deploy hooks let you run custom actions before and after deployments in Cloud Deploy. |
| 2023-07-24 | Console-based resource creation |  | The Google Cloud console can create Cloud Deploy delivery pipelines, targets, and releases. |
| 2023-07-24 | routeUpdateWaitTime for Gateway API canary deployments |  | RouteUpdateWaitTime controls HTTPRoute propagation timing for GKE and Anthos Gateway API canary deployments. |
| 2023-07-17 | Deploy parameters |  | Deploy parameters pass values into manifests at the delivery pipeline, target, and release levels. |
| 2023-06-22 | Canary pod overprovisioning control |  | Canary pod overprovisioning control prevents extra GKE and Anthos pods from being created during canary deployments. |
| 2023-05-16 | Container image security insights |  | Container image security insights are displayed on the Cloud Deploy release details page. |
| 2023-05-05 | In-cluster deployment verification |  | In-cluster deployment verification runs verification in the same GKE or Anthos cluster where the application is deployed. |
| 2023-04-04 | Canary deployment strategy |  | The canary deployment strategy progressively rolls out changes in Cloud Deploy. |
| 2023-03-06 | Parallel multi-target deployment |  | Parallel multi-target deployment lets Cloud Deploy deploy to multiple targets at the same time. |
| 2022-09-22 | Deployment verification |  | Deployment verification validates deployed applications as part of the deployment process. |
| 2022-09-13 | Cloud Run deployments |  | Cloud Deploy supports deploying applications to Cloud Run. |
| 2022-07-27 | Automatic skaffold.yaml generation |  | Cloud Deploy can generate a skaffold.yaml file from a single Kubernetes manifest when creating a release. |
| 2022-07-25 | Release configuration comparison in console |  | The Google Cloud console can view and compare Kubernetes and Skaffold configuration files for releases. |
| 2022-07-11 | Delivery pipeline suspension |  | Delivery pipeline suspension lets you pause a delivery pipeline in Cloud Deploy. |
| 2022-07-11 | Release abandonment |  | Release abandonment lets you permanently abandon a release in Cloud Deploy. |
| 2022-06-03 | Regional availability in australia-southeast1 |  | Cloud Deploy is available in the australia-southeast1 region. |
| 2022-05-10 | Cloud Build timeout configuration |  | Cloud Build timeout configuration lets Cloud Deploy change build operation timeouts from the default one hour. |
| 2022-02-28 | Anthos user cluster deployments |  | Cloud Deploy supports deploying applications to Anthos user clusters. |
| 2022-01-19 | Console rollback from pipeline visualization |  | The delivery pipeline visualization in Google Cloud console supports rolling back targets. |
| 2022-01-17 | Provenance labels on deployed resources |  | Cloud Deploy automatically applies provenance labels to deployed resources. |
| 2022-01-12 | Contextual documentation in console |  | The Learn button in the Google Cloud console shows documentation and tutorials relevant to the current Cloud Deploy screen. |
| 2022-01-12 | Deployment metrics in console |  | The Google Cloud console displays deployment metrics for Cloud Deploy. |
| 2021-08-20 | Custom execution environments |  | Custom execution environments let Cloud Deploy configure pools, service accounts, and Cloud Storage buckets for render and deploy activity. |
| 2021-08-11 | Shareable deployment targets |  | Shareable deployment targets let multiple delivery pipelines use the same target definitions. |

Source file slug: `cloud-deploy.md`

