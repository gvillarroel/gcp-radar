# Cloud Run

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 178
Unique features: 138

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2026-03-25 | Compose file deployment |  | Cloud Run supports deploying services from a Compose file; Cloud Run supports deploying services from a Compose file. |
| 2026-03-17 | Ruby 4.0 runtime |  | Cloud Run supports the Ruby 4.0 runtime for services; Cloud Run supports the Ruby 4.0 runtime for services. |
| 2026-03-13 | Identity-Aware Proxy integration |  | Cloud Run can be configured directly with Identity-Aware Proxy to protect services without a load balancer; Cloud Run supports configuring Identity-Aware Proxy to secure services across ingress paths. |
| 2026-03-12 | Go 1.26 runtime |  | Cloud Run supports the Go 1.26 runtime for services; Cloud Run supports the Go 1.26 runtime for services. |
| 2026-02-27 | PHP 8.5 runtime |  | Cloud Run supports the PHP 8.5 runtime for services; Cloud Run supports the PHP 8.5 runtime for services. |
| 2026-02-24 | Cloud Run remote MCP server |  | Cloud Run provides a remote MCP server that agents and AI applications can use to deploy with Cloud Run. |
| 2026-02-24 | Multi-region service health for external traffic |  | Cloud Run service health supports highly available multi-region services with automated failover and failback for external traffic. |
| 2026-02-18 | .NET 10 runtime |  | Cloud Run supports the .NET 10 runtime for services; Cloud Run supports the .NET 10 runtime for services. |
| 2026-02-17 | Ubuntu 24 LTS base images for source deployment |  | Cloud Run source deployments support Ubuntu 24 LTS base images; Cloud Run source deployments support Ubuntu 24 LTS base images. |
| 2026-02-11 | osonly24 runtime |  | Cloud Run supports the osonly24 runtime for deploying binaries and OS-only workloads; Cloud Run supports the osonly24 runtime for deploying binaries and OS-only workloads. |
| 2026-02-06 | Compute flexible committed use discounts for Cloud Run |  | Cloud Run usage is covered by expanded compute flexible committed use discounts under the spend-based CUD model. |
| 2026-02-05 | Direct VPC ingress for worker pools |  | Cloud Run worker pools support Direct VPC ingress so each worker instance can receive a private IP address on a configured network and subnet. |
| 2026-02-02 | NVIDIA RTX PRO 6000 Blackwell GPU support |  | Cloud Run supports NVIDIA RTX PRO 6000 Blackwell GPUs for supported workloads. |
| 2026-01-22 | ADK default entrypoint detection |  | The Cloud Run Python buildpack can automatically detect the default entrypoint for Agent Development Kit applications; The Cloud Run Python buildpack can automatically detect the default entrypoint for Agent Development Kit applications. |
| 2026-01-13 | pyproject.toml dependency management for source deployments |  | Cloud Run source deployments support using pyproject.toml to manage Python dependencies; Cloud Run source deployments support using pyproject.toml to manage Python dependencies. |
| 2025-12-22 | Java 25 runtime |  | Cloud Run supports the Java 25 runtime for services; Cloud Run supports the Java 25 runtime for services. |
| 2025-12-19 | Python 3.14 runtime |  | Cloud Run supports the Python 3.14 runtime for services; Cloud Run supports the Python 3.14 runtime for services. |
| 2025-12-19 | uv as default Python package manager |  | The Cloud Run Python buildpack uses uv as the default package installer for Python 3.14 and later, with optional pip override; The Cloud Run Python buildpack uses uv as the default package installer for Python 3.14 and later, with optional pip override. |
| 2025-12-01 | Developer Connect continuous deployment integration |  | Cloud Run console integrates with Developer Connect to set up continuous deployments from supported source repositories. |
| 2025-11-21 | HTTP and gRPC readiness probes |  | Cloud Run services support configurable HTTP and gRPC readiness probes. |
| 2025-11-21 | Multi-region service health for internal traffic |  | Cloud Run service health supports highly available multi-region services with automated failover and failback for internal traffic. |
| 2025-11-20 | Node.js 24 runtime |  | Cloud Run supports the Node.js 24 runtime for services; Cloud Run supports the Node.js 24 runtime for deployed workloads. |
| 2025-11-19 | Direct source artifact deployment |  | Cloud Run can deploy source artifacts directly without using a Cloud Build step. |
| 2025-11-11 | Extended task timeout for Cloud Run jobs |  | Cloud Run jobs support task timeouts of up to 168 hours. |
| 2025-11-06 | Dual-stack Direct VPC egress with IPv6 |  | Cloud Run supports dual-stack subnets with IPv6 for Direct VPC egress and external IPv6 traffic. |
| 2025-10-30 | e2-highcpu-8 default machine type for GPU source builds |  | Cloud Run uses Cloud Build e2-highcpu-8 by default for GPU-enabled source builds from the console or gcloud CLI; Cloud Run uses Cloud Build e2-highcpu-8 by default for GPU-enabled source builds with the gcloud beta run command. |
| 2025-10-21 | GPU support for Cloud Run jobs |  | Cloud Run jobs support GPU configuration. |
| 2025-10-21 | Private NAT support for Direct VPC egress |  | Cloud Run Direct VPC egress supports Private NAT. |
| 2025-10-20 | VPC Flow Logs support for Direct VPC egress |  | Cloud Run Direct VPC egress supports VPC Flow Logs. |
| 2025-10-06 | Service-level maximum instance configuration |  | Cloud Run supports applying maximum instance configuration at the service level. |
| 2025-09-24 | .env file environment variable configuration |  | Cloud Run supports setting multiple environment variables from a .env file; Cloud Run supports setting multiple environment variables from a .env file for services, jobs, and worker pools. |
| 2025-09-23 | Mount options for Cloud Storage volume mounts |  | Cloud Run supports specifying mount options for Cloud Storage volume mounts. |
| 2025-09-10 | Cloud Run Threat Detection |  | Cloud Run provides a threat detection capability for workloads; Cloud Run Threat Detection provides threat detection capabilities for Cloud Run workloads. |
| 2025-09-10 | Single-command multi-region service deployment |  | Cloud Run supports deploying and configuring a multi-region service from one gcloud command or from YAML or Terraform. |
| 2025-09-03 | GPU support for worker pools |  | Cloud Run worker pools support GPU configuration. |
| 2025-08-21 | Go 1.25 runtime |  | Cloud Run supports the Go 1.25 runtime for services; Cloud Run supports the Go 1.25 runtime for deployed workloads. |
| 2025-08-14 | Python buildpack automatic entrypoint detection |  | For Python 3.13 and later, the Python buildpack sets the default entrypoint for Cloud Run source deployments from web server or framework settings in requirements.txt. |
| 2025-08-14 | Python buildpack modern web framework support |  | The Python buildpack supports Cloud Run source deployments for modern web frameworks including FastAPI, Gradio, and Streamlit. |
| 2025-08-05 | Manual scaling |  | Cloud Run supports manually scaling a service instead of relying only on autoscaling; Cloud Run supports manually scaling a service instead of relying only on autoscaling. |
| 2025-07-30 | Go 1.24 runtime |  | Cloud Run supports the Go 1.24 runtime for deployed workloads; Cloud Run supports the Go 1.24 runtime for deployed workloads. |
| 2025-07-16 | run.app URL disablement |  | Cloud Run can disable a service's built-in run.app URL so traffic only enters through explicitly configured paths. |
| 2025-07-15 | Flexible committed use discounts for request-based billing and functions |  | Flexible committed use discounts cover Cloud Billing spend for Cloud Run services with request-based billing and Cloud Run functions. |
| 2025-06-30 | Service-level maximum instances |  | Cloud Run supports applying maximum instance configuration at the service level. |
| 2025-06-25 | Worker pools |  | Cloud Run worker pools provide a resource type designed for non-request workloads. |
| 2025-06-17 | PHP 8.4 runtime |  | Cloud Run supports the PHP 8.4 runtime for deployed workloads; Cloud Run supports the PHP 8.4 runtime for deployed workloads. |
| 2025-06-17 | Ruby 3.4 runtime |  | Cloud Run supports the Ruby 3.4 runtime for deployed workloads; Cloud Run supports the Ruby 3.4 runtime for deployed workloads. |
| 2025-06-16 | GPU for Cloud Run jobs |  | Cloud Run jobs support GPU configuration for job execution. |
| 2025-06-09 | Request host and path IAM Conditions |  | Cloud Run supports using request host and request path attributes in IAM Conditions for service invocation access control. |
| 2025-05-30 | Java function execution ID logging |  | Java Cloud Run functions can add a unique execution ID to logs when using java.util.logging.Logger with Functions Framework 1.4.0 or later. |
| 2025-05-13 | Function label propagation to Cloud Run |  | Labels set for Cloud Run functions through gcloud functions commands or the Cloud Functions v2 API propagate to Cloud Run deployments. |
| 2025-05-06 | Direct VPC egress with Private NAT |  | Direct VPC egress supports Private NAT for Cloud Run networking. |
| 2025-05-05 | Python 3.13 runtime |  | Cloud Run supports the Python 3.13 runtime for deployed workloads; Cloud Run supports the Python 3.13 runtime for deployed workloads. |
| 2025-04-22 | Cloud KMS Autokey |  | Cloud Run supports Cloud KMS Autokey for encryption key management. |
| 2025-04-09 | Gemini Cloud Assist in Cloud Run |  | Gemini Cloud Assist provides in-product chat assistance to design, optimize, and troubleshoot Cloud Run applications. |
| 2025-04-07 | Direct VPC egress for jobs |  | Cloud Run jobs support Direct VPC egress for outbound network access. |
| 2025-04-07 | GPU for Cloud Run services |  | Cloud Run services support GPU configuration for service workloads. |
| 2025-04-02 | Multiple containers for jobs |  | Cloud Run jobs support deploying multiple containers, including sidecars, in a single job; Cloud Run jobs support deploying multiple containers, including sidecars, in a single job. |
| 2025-03-28 | Invoker IAM check disablement |  | Cloud Run services can disable the Invoker IAM check for invocation access control behavior. |
| 2025-03-25 | GPU zonal redundancy options |  | Cloud Run lets GPU services use zonal redundancy or non-redundant GPU configurations and request quota for either option. |
| 2025-03-03 | Go 1.23 runtime |  | Cloud Run supports the Go 1.23 runtime for deployed workloads; Cloud Run supports the Go 1.23 runtime for deployed workloads. |
| 2025-02-19 | Automatic base image updates |  | Cloud Run source-deployed services and functions support automatic base image updates. |
| 2025-02-19 | Functions deployment in Cloud Run |  | Cloud Run supports deploying functions as Cloud Run workloads. |
| 2025-02-04 | Artifact Registry repository selection for functions |  | Cloud Run functions can specify an Artifact Registry image repository for storing built containers. |
| 2025-01-24 | Direct VPC egress with dual-stack subnets and internal IPv6 |  | Cloud Run services and jobs can use dual-stack subnets with internal IPv6 to send IPv4 and internal IPv6 traffic through Direct VPC egress. |
| 2025-01-22 | Cloud Run Builder IAM role |  | The Cloud Run Builder IAM role grants build permissions for deploying services or functions from source. |
| 2024-12-17 | Cloud Run Jobs Executor role |  | The Cloud Run Jobs Executor predefined IAM role grants least-privilege access for executing Cloud Run jobs. |
| 2024-12-17 | Cloud Run Jobs Executor With Overrides role |  | The Cloud Run Jobs Executor With Overrides predefined IAM role grants least-privilege access for executing Cloud Run jobs with overrides. |
| 2024-12-17 | Cloud Run Service Invoker role |  | The Cloud Run Service Invoker predefined IAM role grants least-privilege access for invoking Cloud Run services. |
| 2024-12-09 | Custom organization policies for Serverless VPC Access connectors |  | Custom organization policies can be created for Serverless VPC Access connectors and applied at project, folder, or organization scope. |
| 2024-11-25 | Extended task timeout for jobs |  | Cloud Run jobs support task timeouts up to 168 hours. |
| 2024-11-18 | Node.js 22 runtime |  | Cloud Run supports the Node.js 22 runtime for deployed workloads. |
| 2024-11-12 | In-memory volume |  | In-memory volumes let Cloud Run services and jobs mount ephemeral memory-backed storage. |
| 2024-11-07 | Cloud Storage volume mount options |  | Cloud Storage volume mounts let Cloud Run services and jobs specify mount options when attaching buckets as volumes. |
| 2024-10-23 | GPU support |  | GPU support lets Cloud Run services use attached GPUs for accelerated workloads; GPU support lets Cloud Run services use attached GPUs for accelerated workloads. |
| 2024-10-21 | Custom organization policies |  | Custom organization policies let you define and apply Cloud Run-specific policy controls at the project, folder, or organization level; Custom organization policies let you enforce custom organization policy constraints on Cloud Run services and jobs. |
| 2024-10-10 | Multi-region service deployment |  | Multi-region service deployment lets you deploy and configure a Cloud Run multi-region service with a single gcloud command. |
| 2024-10-01 | Service-level minimum instances |  | Service-level minimum instances let you keep a configured minimum number of instances warm for a Cloud Run service; Service-level minimum instances let you keep a configured minimum number of instances warm for a Cloud Run service. |
| 2024-09-17 | Direct VPC egress Secure Web Proxy support |  | Direct VPC egress can route Cloud Run traffic through Secure Web Proxy. |
| 2024-09-03 | Deterministic URLs |  | Deterministic URLs let you predict a Cloud Run service URL before the service is created. |
| 2024-08-27 | Cloud Storage volume mounts |  | Cloud Storage volume mounts let Cloud Run services and jobs mount a Cloud Storage bucket as a storage volume; Cloud Storage volume mounts let Cloud Run services and jobs mount a Cloud Storage bucket as a storage volume. |
| 2024-08-27 | NFS volume mounts |  | NFS volume mounts let Cloud Run services and jobs mount an NFS file share as a volume; NFS volume mounts let Cloud Run services and jobs mount an NFS file share as a volume. |
| 2024-08-26 | Cloud Service Mesh service routing |  | Cloud Service Mesh service routing lets Cloud Run route traffic to Cloud Run, GKE, and Compute Engine services and automatically authenticate calls with service account credentials. |
| 2024-08-21 | Automatic base image security updates |  | Automatic base image security updates provide security updates for services deployed from source when a runtime base image is specified. |
| 2024-08-21 | Cloud Run functions |  | Cloud Run functions let you deploy and directly update functions in Cloud Run, including functions created with the Cloud Functions v2 API. |
| 2024-07-18 | Disable default run.app URL |  | Disabling the default run.app URL lets you turn off the default Cloud Run service URL. |
| 2024-07-15 | Compute flexible committed use discounts |  | Compute flexible committed use discounts let eligible Cloud Run services and jobs share flexible commitments across Compute Engine, GKE, and Cloud Run. |
| 2024-06-27 | Cloud Run Source Developer role |  | The Cloud Run Source Developer IAM role grants permissions to deploy a Cloud Run service or job from source. |
| 2024-06-27 | Cloud Run Source Viewer role |  | The Cloud Run Source Viewer IAM role grants permissions to view a Cloud Run service or job that is deployed from source. |
| 2024-05-20 | Uptime checks in Cloud Run metrics |  | Uptime checks in the Cloud Run metrics page let you configure and view uptime checks directly from the metrics interface. |
| 2024-04-24 | Direct VPC egress |  | Direct VPC egress lets Cloud Run send traffic directly to a VPC network without requiring a Serverless VPC Access connector; Direct VPC egress lets Cloud Run send traffic directly to a VPC network without requiring a Serverless VPC Access connector. |
| 2024-03-22 | Firestore integration |  | Firestore integration lets Cloud Run services connect to a Firestore database using integrations. |
| 2024-03-22 | Vertex AI integration |  | Vertex AI integration lets Cloud Run services connect to Vertex AI to access generative AI models. |
| 2024-03-14 | Direct VPC egress Cloud NAT support |  | Direct VPC egress can use Cloud NAT with public NAT IP addresses. |
| 2024-03-07 | Deployment events in metrics dashboard |  | Deployment events in the metrics dashboard let Cloud Run service charts display deployment events. |
| 2024-02-13 | Integration deployment service account override |  | Integration deployment service account override lets you set and override the deployment service account for Cloud Run integrations through the Google Cloud CLI. |
| 2024-01-23 | Serverless VPC Access connector updates |  | Serverless VPC Access connector updates let you change the connector machine type and minimum and maximum instance counts. |
| 2021-09-28 | Binary Authorization |  | Binary Authorization for Cloud Run enforces deployment policies based on trusted container images and attestations. |
| 2021-09-28 | Customer-managed encryption keys |  | Customer-managed encryption keys let Cloud Run use user-controlled encryption keys for protected resources. |
| 2021-09-13 | CPU always allocated |  | CPU always allocated lets Cloud Run services keep CPU assigned for the entire lifetime of container instances. |
| 2021-08-24 | Deploy from source |  | Deploy from source lets you deploy Cloud Run directly from source code without prebuilding a container image. |
| 2021-07-27 | Allowed ingress settings organization policy |  | The Allowed ingress settings organization policy controls which ingress settings are permitted for Cloud Run. |
| 2021-07-27 | Allowed VPC egress settings organization policy |  | The Allowed VPC egress settings organization policy controls which VPC egress settings are permitted for Cloud Run. |
| 2021-07-27 | Committed use discounts |  | Committed use discounts let Cloud Run workloads receive discounted pricing through committed usage. |
| 2021-07-27 | VPC Service Controls |  | VPC Service Controls let Cloud Run enforce a secure service perimeter to help prevent data exfiltration; VPC Service Controls let Cloud Run enforce a secure service perimeter to help prevent data exfiltration. |
| 2021-07-26 | Maximum concurrency 1000 |  | Maximum concurrency 1000 lets a Cloud Run container instance process up to 1,000 concurrent requests. |
| 2021-03-31 | Cloud Error Reporting aggregation for platform errors |  | Cloud Error Reporting aggregation captures and groups Cloud Run platform errors such as memory limit exceeded and no instances available. |
| 2021-03-18 | Shared VPC |  | Shared VPC lets Cloud Run services connect through a host project's shared VPC network. |
| 2021-03-08 | Minimum instances |  | Minimum instances let you keep a specified number of Cloud Run container instances warm and ready to serve requests; Cloud Run services can keep a minimum number of container instances warm to reduce latency and cold starts. |
| 2021-03-03 | Instance count metric |  | Cloud Run provides a Cloud Monitoring metric that counts container instances by state, such as active or idle. |
| 2021-03-01 | Regional availability |  | Cloud Run expanded availability to the us-west2, us-west3, and us-west4 regions; Cloud Run expanded availability to the asia-east2, asia-northeast3, asia-southeast2, asia-south1, europe-west2, europe-west3, europe-west6, and southamerica-east1 regions. |
| 2021-01-20 | gRPC streaming support |  | Cloud Run supports streaming gRPC requests and responses. |
| 2021-01-20 | HTTP/2 support |  | Cloud Run supports HTTP/2 for service communication. |
| 2021-01-20 | WebSockets support |  | Cloud Run supports WebSocket connections for interactive bidirectional communication. |
| 2020-12-18 | 8 GiB memory allocation |  | Cloud Run services can allocate up to 8 GiB of memory per service instance. |
| 2020-12-18 | Ingress restriction |  | Cloud Run services can restrict which inbound traffic is allowed to reach them. |
| 2020-12-16 | Source-based deployment |  | Cloud Run can build and deploy directly from source code with a single gcloud command. |
| 2020-12-14 | 250-request concurrency |  | Cloud Run container instances can process up to 250 concurrent requests. |
| 2020-10-23 | Eventarc triggers |  | Cloud Run services can be triggered by Eventarc events. |
| 2020-10-19 | Cloud Domains custom domain purchase |  | Cloud Run lets users purchase a custom domain through Cloud Domains in the Cloud Run interface. |
| 2020-10-13 | VPC egress routing |  | Cloud Run services can route outbound traffic through a VPC network, enabling static outbound IP configuration with Cloud NAT. |
| 2020-10-12 | 4 vCPU allocation |  | Cloud Run service instances can allocate up to 4 vCPUs. |
| 2020-10-12 | Automatic Cloud Trace capture |  | Cloud Run automatically captures request traces in Cloud Trace. |
| 2020-10-11 | SIGTERM shutdown handling |  | Cloud Run sends SIGTERM before shutting down a container instance and can continue CPU allocation for up to 10 seconds if the signal is handled. |
| 2020-10-06 | 60-minute request timeout |  | Cloud Run supports request timeouts of up to 60 minutes. |
| 2020-03-30 | Revision build information |  | The Cloud Run revision details panel can display build information for containers built with Cloud Build when Container Analysis API is enabled. |
| 2020-03-30 | Revision source repository information |  | The Cloud Run revision details panel can display source repository information for containers built by a Cloud Build trigger. |
| 2020-03-16 | Artifact Registry image deployment |  | Cloud Run supports deploying container images from Artifact Registry. |
| 2020-02-12 | Gradual rollout |  | Cloud Run supports gradual traffic rollouts between revisions for deployment changes. |
| 2020-02-12 | Revision rollback |  | Cloud Run supports rolling back service traffic to earlier revisions. |
| 2020-02-12 | Revision traffic migration |  | Cloud Run supports traffic migration controls between service revisions. |
| 2020-01-27 | Cloud Run v1alpha1 API | 2020-01-27 | The Cloud Run v1alpha1 API is deprecated and replaced by the Cloud Run v1 API; deprecated on 2020-01-27. |
| 2020-01-24 | 2 vCPU allocation |  | Cloud Run services can allocate up to 2 vCPUs. |
| 2020-01-07 | Custom container command and arguments |  | Cloud Run lets deployed containers specify custom startup commands and arguments. |
| 2020-01-07 | Custom container port |  | Cloud Run lets services customize the container port that receives requests. |
| 2020-01-07 | Custom revision names |  | Cloud Run supports custom revision names through the revision suffix flag. |
| 2020-01-07 | Service replacement from configuration file |  | Cloud Run services can be deployed from a local configuration file with the gcloud services replace command. |
| 2019-10-21 | HIPAA compliance coverage |  | Cloud Run is covered by HIPAA compliance requirements. |
| 2019-10-01 | Maximum instances setting |  | Cloud Run supports a maximum instances setting to limit the total number of container instances started for traffic. |

Source file slug: `cloud-run.md`

