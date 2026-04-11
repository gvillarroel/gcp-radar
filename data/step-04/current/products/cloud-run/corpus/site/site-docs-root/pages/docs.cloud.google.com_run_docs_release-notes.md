---
title: "Cloud Run release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/run/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/run/docs
source_metadata:
  url: https://docs.cloud.google.com/run/docs/release-notes
  title: "Cloud Run release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Cloud Run
Resources
Send feedback
Cloud Run release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Cloud Run. You
can periodically check this page for announcements about new or updated
features, bug fixes, known issues, and deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
March 25, 2026
Feature
Deploying services using a Compose file
is in General Availability .
March 17, 2026
Feature
Support for Ruby 4.0 runtime is in General Availability .
March 13, 2026
Feature
Configuring Identity-Aware Proxy (IAP) directly on Cloud Run
to secure your services without the need for load balancers is in
General Availability (GA) .
March 12, 2026
Feature
Support for Go 1.26 runtime is in General Availability .
March 03, 2026
Feature
Support for Ruby 4.0 runtime is in Preview .
February 27, 2026
Feature
Support for PHP 8.5 runtime is in General Availability .
February 24, 2026
Feature
Deploy a highly available, multi-region Cloud Run service with automated
failover and failback for external traffic using Cloud Run service health
(Preview).
Feature
You can use the Cloud Run remote MCP server to let
agents and AI applications deploy with Cloud Run ( Preview ).
February 19, 2026
Feature
Support for Go 1.26 runtime is in Preview .
February 18, 2026
Feature
Support for .NET 10 runtime is in General Availability .
February 17, 2026
Feature
Cloud Run source deployment supports Ubuntu 24
LTS base images in General Availability . This builder is available under
gcr.io/buildpacks/builder:google-24 . For more information, see
Builders .
February 11, 2026
Feature
Support for osonly24 runtime is in General Availability . The OS only runtime lets you deploy binaries such as Dart and Go. For more information, see Configure the OS only runtime .
February 06, 2026
Feature
Expanded coverage for compute flexible committed use discounts (CUDs) is
available to all Cloud Billing accounts. Your Cloud Billing accounts have
been automatically migrated to the
new spend-based CUD model and you no longer need to opt-in
to benefit from the expanded coverage. For the full list of eligible SKUs
across Compute Engine, GKE, and Cloud Run,
see SKU Groups - Compute Flexible CUD Eligible SKUs .
To learn more about compute flexible CUDs for Cloud Run and how they apply to your usage, see
the compute flexible CUDs documentation .
February 05, 2026
Feature
You can configure Direct VPC ingress for Cloud Run worker pools . When you configure Direct VPC ingress,
each worker instance receives a private IP address on your configured network
and subnet. To access private IP addresses between instances in your VPC network for secure internal communication, see Retrieve the private IP addresses using the metadata server (MDS) .
February 02, 2026
Feature
Support for NVIDIA RTX PRO 6000 Blackwell GPU is in Preview .
For more information, see GPU support for services ,
jobs , and worker pools .
Feature
Support for PHP 8.5 runtime is in Preview .
January 27, 2026
Feature
Support for .NET 10 runtime is in Preview .
January 22, 2026
Feature
The Python buildpack supports default entrypoint detection for the Agent Development Kit (ADK) framework in General Availability . For more information, see Build a Python application .
January 20, 2026
Feature
The following new region is now available: asia-southeast3 .
January 13, 2026
Feature
Cloud Run and Cloud Run functions source deployments support the pyproject.toml
file for managing dependencies. This feature is in General Availability for all
supported Python versions .
For more information, see Deploy Python applications with a pyproject.toml
file .
December 22, 2025
Feature
Support for Java 25 runtime is in General Availability .
December 19, 2025
Feature
Support for Python 3.14 runtime is in General Availability . Starting from Python version 3.14 and later, the Python buildpack uses the uv package manager as the
default installer for the dependencies you specify in your requirements.txt file. You can also use pip as the default installer for these versions by setting the GOOGLE_PYTHON_PACKAGE_MANAGER environment variable to pip . For more information, see Specify dependencies in Python .
Feature
Cloud Run and Cloud Run functions source deployments support pyproject.toml
file for managing dependencies. This feature is in General Availability for Python version 3.13 and later, and is in Preview for Python version 3.12 and earlier.
For more information, see Deploy Python applications with a pyproject.toml
file .
Feature
The Python buildpack supports default entrypoint detection for the Agent Development Kit (ADK) framework (Preview). For more information, see Build a Python application .
December 18, 2025
Feature
Support for osonly24 runtime is in Preview . The OS only runtime lets you deploy Go applications from source, and binaries such as Dart and Go. For more information, see Configure the OS only runtime .
December 01, 2025
Feature
You can use
Developer Connect in the Cloud Run console
to set up continuous deployments from GitHub, GitLab, and Bitbucket
repositories (Preview).
November 21, 2025
Feature
Deploy a highly available, multi-region Cloud Run service with automated
failover and failback for internal traffic using Cloud Run service health
(Preview).
Feature
Configure HTTP and gRPC readiness probes
for your Cloud Run services (Preview).
November 20, 2025
Feature
Support for Node.js 24 runtime is in General Availability .
November 19, 2025
Feature
You can deploy source artifacts directly to
Cloud Run ,
bypassing the Cloud Build step. (Preview)
November 17, 2025
Feature
Cloud Run and Cloud Run functions source deployments support pyproject.toml
file for managing dependencies. If you use a pyproject.toml file, source deployments
use one of the following to find and install dependencies:
pip
uv
poetry
For more information, see Deploy Python applications with a pyproject.toml
file (Preview).
Feature
The time it takes for initial deployments to Cloud Run in a new project has been reduced.
This change results in reduced latency and a faster getting started experience.
November 13, 2025
Feature
You can deploy services to Cloud Run using a Compose file
(Preview).
November 12, 2025
Feature
Support for Python 3.14 runtime is in Preview . Starting from Python version 3.14 and later, the Python buildpack uses the uv package manager as the
default installer for the dependencies you specify in your requirements.txt file. You can also use pip as the default installer for these versions by setting the GOOGLE_PYTHON_PACKAGE_MANAGER environment variable to pip . For more information, see Specify dependencies in Python .
Feature
Cloud Run source deployment supports Ubuntu 24
LTS base images (Preview). This builder is available under
gcr.io/buildpacks/builder:google-24 . For more information, see
Builders .
November 11, 2025
Feature
You can set a task timeout up to 168 hours
(7 days) for Cloud Run jobs. (GA)
November 06, 2025
Feature
Use dual-stack subnets with IPv6
to let your Cloud Run resources send IPv4 and internal IPv6 traffic to a VPC
network with Direct VPC egress, and send external IPv6 traffic to the public
internet. (GA)
October 31, 2025
Feature
Support for Java 25 runtime is in Preview .
October 30, 2025
Feature
For Cloud Run source deployed services and functions with GPU enabled , Cloud Run defaults to using Cloud Build's e2-highcpu-8 machine type for
the build process when using the gcloud CLI or the Google Cloud console. This
change allows for higher CPU support and faster build times, and also leads to a
moderate increase in the overall cost of your service (GA).
October 21, 2025
Feature
Support for configuring GPU
for your Cloud Run job is in General Availability (GA).
Feature
Direct VPC egress now supports Private NAT (GA).
October 20, 2025
Feature
Direct VPC egress now supports VPC Flow Logs (Preview).
October 06, 2025
Feature
Support for applying maximum instance configuration at the service level is in General Availability (GA).
September 24, 2025
Feature
Support for setting multiple environment variables using the .env file is in General Availability (GA). For more information, see Configure environment variables for services , jobs , and worker pools .
September 23, 2025
Feature
You can specify mount options when you configure Cloud Storage volume mounts for Cloud Run services , jobs , and worker pools . (GA)
September 10, 2025
Feature
You can deploy and configure a multi-region service from a single gcloud CLI command or by using a YAML or Terraform file (GA).
Feature
Cloud Run Threat Detection is available in General Availability .
September 03, 2025
Feature
You can configure GPU in your Cloud Run worker pool (Preview).
August 21, 2025
Feature
Support for Go 1.25 runtime is in General Availability (GA) .
August 20, 2025
Feature
For Cloud Run source deployed services and functions with GPU enabled , Cloud Run defaults to using Cloud Build's e2-highcpu-8 machine type for the build process when you use the gcloud beta run command (Preview). This change allows for higher CPU support and faster build times, and also leads to a moderate increase in the overall cost of your service.
August 14, 2025
Feature
The Python buildpack supports Cloud Run source deployments for modern web frameworks such as FastAPI , Gradio , and Streamlit .
For Python version 3.13 and later, the Python buildpack sets the default entrypoint for Cloud Run source deployments based on the web server or framework configuration in your requirements.txt file. For more information, see Build a Python application .
August 13, 2025
Feature
You can set multiple environment variables using the .env file (Preview). For more information, see Configure environment variables for services , jobs , and worker pools .
August 05, 2025
Feature
Support for manually scaling your Cloud Run service is now at General Availability (GA).
July 30, 2025
Feature
Support for Go 1.24 runtime is in General Availability (GA) .
Feature
Support for Go 1.25 runtime is in Preview . This runtime is available for early testers using existing release candidates .
Feature
Support for Node.js 24 runtime is in Preview . Node.js 24 is in the Current release state and enters long-term support (LTS) in October 2025. For more information, see Node.js v24.0.0 (Current)
in the Node.js website.
July 16, 2025
Feature
You can disable the built-in run.app URL of a Cloud Run service to ensure that traffic can only ingress through paths that you've explicitly configured ( GA ).
July 15, 2025
Feature
Support for the Go 1.24 runtime is in Preview .
Feature
Compute flexible committed use discounts (CUDs) have expanded to also cover your Cloud Billing account's spend across Cloud Run services with request-based billing and Cloud Run functions.
The improved spend-based CUD experience is available without requiring an opt-in for new users or users who don't have an active spend-based CUD.
To learn more about how opting into the new model affects your flexible CUDs, see Committed use discounts .
June 30, 2025
Feature
You can apply maximum instance configuration at the service level (in Preview).
June 25, 2025
Feature
Cloud Run worker pools are now available (Preview). Worker pools are specifically designed for non-request workloads.
June 24, 2025
Feature
A new region is now available for Cloud Run GPUs : us-east4 .
June 17, 2025
Feature
Support for the PHP 8.4 runtime is in General Availability (GA) .
Feature
Support for the Ruby 3.4 runtime is in General Availability (GA) .
June 16, 2025
Feature
You can configure GPU in your Cloud Run job (Preview).
June 09, 2025
Feature
You can use request host and request path in IAM Conditions when defining access control for invoking Cloud Run services.
May 30, 2025
Feature
For Java Cloud Run functions that use functions-framework version 1.4.0 or later, you
can now use the logging class java.util.logging.Logger to add a unique execution
ID to log outputs.
May 28, 2025
Feature
Multiple regions now benefit from enhanced responsiveness for latency-sensitive applications for Cloud Run service URLs .
May 15, 2025
Change
The region selector when creating a service or a job from the Google Cloud console now defaults to europe-west1 .
May 13, 2025
Feature
Labels you previously set for your Cloud Run functions using either
gcloud functions commands or the Cloud Functions v2 API propagate to Cloud Run when you deploy your functions in Cloud Run . For more information on creating labels in Cloud Run, see Configure labels for services .
May 06, 2025
Feature
Direct VPC egress supports Private NAT ( Preview ).
Change
The Cloud Monitoring memory usage metrics now show lower memory utilization for most services using the second generation execution environment. These metrics previously included memory used by the operating system page cache.
May 05, 2025
Feature
Support for the Ruby 3.4 runtime is in Preview .
Feature
Support for the Python 3.13 runtime is in General Availability (GA) .
Feature
Support for the PHP 8.4 runtime is in Preview .
April 22, 2025
Feature
Cloud KMS with Autokey is now in General Availability (GA) for Cloud Run.
April 21, 2025
Feature
Support for the Python 3.13 runtime is now in Preview .
April 09, 2025
Feature
Gemini Cloud Assist in Cloud Run is supported in Preview . You can use the chat panel to design , optimize , and troubleshoot your Cloud Run apps with Gemini assistance.
April 07, 2025
Feature
Direct VPC egress support for Cloud Run jobs is now generally available (GA).
Feature
You can now configure Identity-Aware Proxy (IAP) for Cloud Run to secure your services with a single click from all ingress paths (in Preview).
Feature
Configuring GPU in your Cloud Run service is now generally available (GA).
Feature
Cloud Run Threat Detection is available in Preview .
April 02, 2025
Feature
Deploying multiple containers (sidecars) to a Cloud Run job is now generally available. (GA)
March 28, 2025
Feature
The ability to disable the Invoker IAM check for Cloud Run services is now at general availability (GA).
March 26, 2025
Change
Cloud Run services configured with Direct VPC egress now use only 2 times (2X) as many IP addresses as the number of instances for the duration of the instance plus up to 20 minutes, reduced from 4X as many IP addresses.
March 25, 2025
Feature
New services using GPUs by default will have zonal redundancy turned on. However, you can now specify GPUs with zonal redundancy or without zonal redundancy , and request quota for either of these configurations. (In Preview)
March 11, 2025
Feature
A new region is now available for Cloud Run GPUs : europe-west1 .
March 06, 2025
Feature
The following new region is now available: europe-north2 .
March 04, 2025
Feature
The following new region is now available: northamerica-south1 .
March 03, 2025
Feature
Support for the Go 1.23 runtime is now in general availability (GA).
February 19, 2025
Feature
Support for deploying functions in Cloud Run is now in general availability (GA). Note that you must use Google Cloud SDK 511.0.0 version or later if using the gcloud CLI. Review the use cases guide for deploying new functions.
Feature
Support for configuring automatic base image updates for Cloud Run source deployed services and functions is now in general availability (GA). Note that you must use Google Cloud SDK 511.0.0 version or later if using the gcloud CLI.
February 18, 2025
Feature
You can now scale your Cloud Run service manually , in place of the built-in Cloud Run autoscaling feature . (Preview)
February 07, 2025
Change
Cloud Run integrations are discontinued from the Google Cloud console and Google Cloud CLI. No action is required; your deployed services that use these integrations will continue to work. We recommend transitioning to use the individual product experiences for each integration you have deployed. For more information about configuring resources for your services to connect to other Google Cloud products, see Connect to Google Cloud services .
February 04, 2025
Feature
When deploying a function in Cloud Run, you can now specify an Artifact Registry image repository to store the container (Preview).
January 24, 2025
Feature
You can now use dual-stack subnets with internal IPv6 to let your Cloud Run services and jobs send IPv4 and internal IPv6 traffic to a VPC network with Direct VPC egress. (Preview)
January 22, 2025
Feature
The Cloud Run Builder ( roles/run.builder ) IAM role is now available in preview. When deploying a service or function from source , grant this role to the Compute Engine default service account that builds your Cloud Run resource.
January 14, 2025
Feature
You can now deploy multiple containers (sidecars) to a Cloud Run job. (In Preview)
January 13, 2025
Breaking
The principal (user or service account) creating or updating a Cloud Run resource now needs explicit permission to access the container image(s). When using Artifact Registry, ensure the principal has the Artifact Registry Reader ( roles/artifactregistry.reader ) IAM role on the project or repository containing the container image(s) to deploy.
December 17, 2024
Feature
New finer-grained predefined IAM roles are available for Cloud Run : Cloud Run Service Invoker, Cloud Run Jobs Executor, Cloud Run Jobs Executor With Overrides. These roles make it easier to grant least privilege access to production accounts accessing Cloud Run resources.
December 16, 2024
Change
Service-level minimum instances are now set using the --min command line flag, --service-min-instances remains available as an alias to --min .
December 13, 2024
Change
The CPU allocation setting has been renamed to Billing in the Google Cloud console for Cloud Run services.
The two billing settings are:
Request-based billing (default), previously called CPU is only allocated during request processing , only charges your Cloud Run instances during request processing, container startup, and container shutdown.
Instance-based billing, previously called CPU always allocated , charges your Cloud Run instances for the entire lifecycle of instances, even when there are no incoming requests.
For more details, see the Billing settings guide.
December 09, 2024
Feature
You can now create custom organization policies for Serverless VPC Access connectors and apply them to projects, folders, or organizations (GA).
November 25, 2024
Feature
You can now set a task timeout up to 168 hours (7 days) for Cloud Run jobs. (Preview)
November 19, 2024
Feature
Support for the Go 1.23 runtime is now in Preview.
November 18, 2024
Feature
Support for the Node.js 22 runtime is now in general availability (GA).
November 15, 2024
Change
asia-south1 (Mumbai, India) is now subject to Tier 1 pricing .
Feature
Cloud Run is now in scope for International Traffic in Arms Regulations (ITAR) .
November 12, 2024
Feature
The in-memory volume type is now generally available (GA) for Cloud Run services and jobs .
November 07, 2024
Feature
You can now specify mount options when you configure Cloud Storage volume mounts for both Cloud Run services and jobs . (In Preview)
October 23, 2024
Feature
GPU support (Preview) is now available in the following region: europe-west4 .
October 21, 2024
Feature
You can now create custom organization policies and apply them to projects, folders, or organizations (GA).
Announcement
Cloud Run integrations are discontinued from the Google Cloud console and Google Cloud CLI for new users. If you are an existing user, you will continue to have access until January 2025. No action is required, your deployed services that use these integrations will continue to work. We recommend transitioning to use the individual product experiences for each integration you have deployed. For more information about configuring resources for your services to connect to other Google Cloud products, see Connect to Google Cloud services .
October 10, 2024
Feature
You can now deploy and configure a multi-region service from a single gcloud CLI command (in Preview).
October 01, 2024
Feature
Service-level minimum instances are now generally available (GA).
September 24, 2024
Feature
GPU support (Preview) is now available in the following region: asia-southeast1 .
September 23, 2024
Change
The runtime support schedule for some PHP runtimes has been extended to match PHP's public support schedule .
September 17, 2024
Feature
The Direct VPC egress feature of Cloud Run now supports Secure Web Proxy .
September 16, 2024
Feature
You can now apply custom constraints for projects that get enforced by organization policies on your Cloud Run services and jobs (in Preview).
September 03, 2024
Feature
Deterministic URLs , which let you predict a Cloud Run service URL before the service is created, is now in general availability (GA).
August 27, 2024
Feature
The following Cloud Run volume types are now generally available (GA):
Mounting an NFS file share as a volume for Cloud Run services and jobs .
Mounting a Cloud Storage bucket as a storage volume for Cloud Run services and jobs .
August 26, 2024
Feature
You can now configure traffic routing between Cloud Run and Cloud Run, Google Kubernetes Engine, and Google Compute Engine services using Cloud Service Mesh service routing APIs . Cloud Run also automatically authenticates calls to destination services using service account credentials (In Preview).
August 22, 2024
Feature
Cloud Run is now supported by Sovereign Controls by Partners . The set of packages and features provided by Sovereign Controls by Partners lets you use Cloud Run while meeting digital sovereignty requirements and managing your workloads with data sovereignty guarantees.
August 21, 2024
Feature
Cloud Run now provides security updates for services that are deployed from source when you specify the runtime base image (Preview). Automatic security updates are enabled by default for functions. For details, see Configure automatic base image updates .
Feature
You can now configure GPU in your Cloud Run service (Preview).
Feature
You can now deploy functions in Cloud Run (Preview). Functions that were created using the Cloud Functions v2 API can now be directly updated in Cloud Run. Note that you must use Google Cloud SDK 489.0.0 version or later if using the gcloud CLI.
Learn more about the different use cases for deploying functions.
July 18, 2024
Feature
You can now disable the default run.app URL for your Cloud Run services (Preview).
July 15, 2024
Feature
Compute flexible committed use discounts are now available for Cloud Run services with CPU always allocated , and Cloud Run jobs. A single flexible commitment covers eligible spend across
Compute Engine, GKE, and Cloud Run. For more information, see Committed use discounts .
July 11, 2024
Announcement
Starting July 2024, Cloud Build changed the default behavior for how Cloud Build uses service accounts in new projects. This change is detailed in Cloud Build Service Account Change documentation. As a result of this change, new projects deploying to Cloud Run from source code for the first time may be using a default Cloud Build service account with insufficient permissions for deploying from source.
If you are impacted by this change, you can do one of the following:
Review the Cloud Build guidance on changes to the default service account and opt out of these changes .
Grant the Cloud Build Service Account ( roles/cloudbuild.builds.builder ) role to the Compute Engine default service account.
June 27, 2024
Feature
The following IAM roles are now available in preview:
Cloud Run Source Developer ( roles/run.sourceDeveloper ) for deploying a Cloud Run service or job from source.
Cloud Run Source Viewer ( roles/run.sourceViewer ) viewing a Cloud Run service or job that is deployed from source.
May 20, 2024
Feature
Uptime checks can now be configured and viewed directly within the Cloud Run "metrics" page.
May 17, 2024
Feature
Cloud Run is now covered by FedRAMP High .
May 15, 2024
Feature
Cloud Run has been added to Google Cloud's Pricing Calculator .
April 24, 2024
Feature
Support for Direct VPC egress , which lets you send traffic directly to a VPC network with no Serverless VPC Access connector required, is now at general availability (GA).
April 15, 2024
Feature
The Direct VPC egress feature of Cloud Run is now supported in all regions .
March 28, 2024
Change
All jobs are now subject to maintenance events , not just jobs longer than one hour, which increases reliability for jobs under 1 hour. These maintenance events are transparent and don't require any changes to your container.
March 22, 2024
Feature
Direct VPC egress (Preview) is now available in the following additional regions :
africa-south1
asia-south1
asia-southeast2
australia-southeast2
europe-central2
europe-west2
europe-west6
europe-west8
europe-west9
europe-west10
me-central1
me-central2
southamerica-west1
us-east5
us-west2
us-west3
us-west8
Feature
Cloud Run services can now connect to Vertex AI to access generative AI models using integrations (Preview).
Feature
Cloud Run services can now connect to a Firestore database using integrations (Preview).
March 19, 2024
Feature
You can now mount an NFS file share as a volume for Cloud Run services and jobs . (In Preview)
March 14, 2024
Feature
Direct VPC egress now supports Cloud NAT with Public NAT IP addresses (in Preview).
March 07, 2024
Feature
Charts on the metrics dashboard of Cloud Run services now display deployment events.
March 05, 2024
Feature
You can now apply minimum instance configuration at the service level (in Preview).
February 13, 2024
Feature
You can now set and override the deployment service account for Cloud Run integrations when creating, updating, or deleting integrations using the Google Cloud CLI.
January 31, 2024
Feature
The following new region is now available: africa-south1 .
January 23, 2024
Feature
The option to update a Serverless VPC Access connector is now available at general availability (GA). This feature allows you to edit the machine (instance) type, as well as the minimum and maximum number of instances.
January 19, 2024
Feature
You can now mount a Cloud Storage bucket as a storage volume for services, and also for Cloud Run jobs .
January 18, 2024
Feature
Direct VPC egress (Preview) is now available in the following additional regions :
asia-east1
asia-east2
asia-northeast2
asia-south2
australia-southeast1
europe-north1
europe-southwest1
europe-west12
europe-west4
me-west1
northamerica-northeast1
northamerica-northeast2
southamerica-east1
us-east4
us-south1
us-west1
us-west4
January 10, 2024
Change
Tags configured on Cloud Run services are now available when exporting Cloud Billing data to BigQuery .
December 18, 2023
Feature
For revisions that have CPU allocation set to CPU always on, instance autoscaling now occurs for CPU activity even outside of incoming requests.
December 15, 2023
Feature
You can now collect Prometheus metrics from Cloud Run services by using the Managed Service for Prometheus sidecar for Cloud Run .
November 17, 2023
Feature
For services with cold start times exceeding 10 seconds, requests are now queued for at least the cold start time before timing out while waiting for instances to start.
November 14, 2023
Feature
Cancelling a currently running job execution is now at general availability (GA).
November 13, 2023
Feature
Deploying sidecar containers to your Cloud Run service is now at general availability (GA). Console UI and CLI are also now available for this feature.
November 08, 2023
Feature
Setting custom audiences on your Cloud Run services is now at general availability (GA).
October 31, 2023
Feature
Job overrides are now at general availability (GA). This feature lets you override the arguments, environment variables, number of tasks, and task timeouts already configured for a job when you execute a job.
October 11, 2023
Feature
Shared VPC ingress is now at general availability (GA). Shared VPC traffic is now considered "internal" for Cloud Run services that are connected to the Shared VPC network.
September 27, 2023
Feature
Long running jobs greater than 1 hour are at general availability (GA).
September 21, 2023
Feature
Cloud Run integrations (Preview) are now available in the following regions :
asia-northeast1
asia-northeast2
asia-south1
asia-southeast2
australia-southeast1
europe-central2
europe-north1
europe-west2
europe-west3
northamerica-northeast1
southamerica-east1
us-east4
us-west2
us-west3
September 19, 2023
Feature
The following new region is now available: me-central2 .
September 18, 2023
Feature
Cloud Run Operators are available in
Cloud Composer .
August 25, 2023
Feature
You can now cancel a currently running job execution . (In Preview.)
August 22, 2023
Feature
The following new region is now available: europe-west10 .
August 14, 2023
Feature
You can now send traffic directly to a VPC network with no Serverless VPC Access connector required (Preview).
August 08, 2023
Feature
You can now override the arguments, environment variables, number of tasks, and task timeout already configured for a job when you execute a job. (In Preview)
August 03, 2023
Change
Accessing a service that's prohibited by the Internal or Internal and Cloud Load Balancing ingress setting now results in a 404 rather than 403 error code.
July 05, 2023
Feature
Long running jobs greater than 1 hour are now supported (in Preview).
June 09, 2023
Feature
You can now create and then configure a Serverless VPC Access connector for your service or job directly from the Create form in the Google Cloud console. (Preview)
May 17, 2023
Feature
Allocating up to 32 GiB of memory and up to 8 CPU to your Cloud Run services is now at general availability (GA).
May 12, 2023
Feature
You can now deploy sidecar containers to your Cloud Run service. (In Preview.)
Feature
You can now configure in-memory volumes for your Cloud Run containers. (In Preview.)
May 10, 2023
Feature
Cloud Run integrations (Preview) are now available in asia-east1 , europe-west4 , us-east1 , and us-west1 .
May 09, 2023
Feature
Cloud Run services can now connect to Firebase Hosting for custom domains and CDN capabilities , using Integrations (Preview).
Change
Cloud Run now logs container health check failures , including default TCP startup probe failures.
May 03, 2023
Feature
CPU allocation recommender now automatically recommends CPU allocation changes based on traffic received by your Cloud Run service over the past month. (In Preview)
April 26, 2023
Announcement
Cloud Run source deployment now supports Ubuntu 22 LTS base images. This is a new builder that is available under gcr.io/buildpacks/builder:google-22 and addresses multiple security issues. You can read more about the google-22 builder in our announcement on GitHub .
The default builder for Cloud Run source deployments will be switched to google-22 at a future date. To preview the google-22 builder, see Deploy from source with Cloud Run .
April 20, 2023
Feature
Cloud Run integrations (Preview) are now available in europe-west1 .
April 18, 2023
Feature
Session affinity for Cloud Run service revisions is now at general availability (GA).
Feature
A Cloud Run service revision will now accept requests from the Shared VPC network that it is connected to , including when Ingress is configured as "Internal" or "Internal and Cloud Load Balancing." (Preview)
April 13, 2023
Feature
Startup CPU boost for Cloud Run services is now at general availability (GA).
April 11, 2023
Breaking
Source code deployments that use Node.js now automatically run the npm run build command by default when any build script is defined in the package.json file.
For details about how to configure the package.json file, including the option to set environment variables or prevent the default script from running, see the Node.js buildpack configuration in the Google Cloud's buildpacks documentation.
April 10, 2023
Change
When deploying a new revision , Cloud Run now starts enough instances of the new revision before directing traffic to it. This reduces the impact of new revision deployments on request latencies, notably when serving high levels of traffic.
April 07, 2023
Feature
Support for Identity-aware Proxy (IAP) with Cloud Run to use identity and context to guard access to your applications is now at general availability (GA).
April 06, 2023
Feature
Regional external and regional internal HTTP(S) load balancers now support using Cloud Run services as backends for the load balancer. This is configured using a serverless network endpoint group (NEG).
For details, see:
Serverless NEG concepts
Setting up a regional external HTTP(S) load balancer with a Cloud Run backend
Setting up an internal HTTP(S) load balancer with a Cloud Run backend
This feature is available in General availability .
March 30, 2023
Feature
The following new region is now available: me-central1 .
March 29, 2023
Feature
Cloud Run jobs are now at general availability (GA).
March 23, 2023
Feature
The following new region is now available: europe-west12 .
March 11, 2023
Feature
Cloud Run healthcheck probes now support container port configuration.
March 07, 2023
Feature
You can now authenticate to a Cloud Run service by including a Google-signed OpenID Connect ID token in the X-Serverless-Authorization header if your application already uses the Authorization header for custom authorization.
February 27, 2023
Change
When session affinity is enabled on a Cloud Run service that is splitting traffic between multiple revisions, requests from the same clients are now routed to the same revision . When updating the traffic splitting configuration, Cloud Run minimizes the number of clients that are redirected to a new revision.
February 16, 2023
Feature
You can now deploy public container images from Docker Hub to Cloud Run.
February 03, 2023
Feature
You can now deploy multi-architecture container images to Cloud Run if their manifest list includes amd64/linux .
January 12, 2023
Change
Terraform resources for Cloud Run Services and Cloud Run Jobs based on the Cloud Run Admin API v2 are now generally available (GA).
December 21, 2022
Feature
The option to update a Serverless VPC Access connector is now available in preview. This feature allows you to edit the machine (instance) type, as well as the minimum and maximum number of instances.
December 09, 2022
Feature
Healthcheck probes are now at general availability (GA).
December 06, 2022
Feature
Cloud Run support for a new second generation execution environment is now at generally availability (GA).
Feature
Cloud Run support for network file systems such as NFS, NDB, 9P, CIFS/Samba, and Ceph , as well as
Cloud Filestore and Cloud Storage FUSE , is now at general availability (GA.)
November 17, 2022
Feature
Logs from Cloud Run services can now be tailed or viewed in a command-line friendly format using gcloud beta run services logs tail and gcloud beta run services logs read
October 07, 2022
Feature
Cloud Run services can now use the Global External HTTP(S) Load Balancer to map Custom Domains using integrations (Preview).
Feature
Cloud Run services can now connect to Memorystore for Redis instances using integrations (Preview).
October 04, 2022
Feature
New security recommendations are created for Cloud Run services, which recommends securing environment variables that might contain passwords, API keys and Google application credentials.
September 30, 2022
Change
The Cloud Run Admin API v2 is now at general availability (GA).
Feature
The Cloud Run first generation execution environment now has faster filesystem performance.
September 23, 2022
Feature
You can now configure an HTTP liveness healthcheck probe .
September 20, 2022
Feature
Cloud Run now supports workforce identity federation
September 14, 2022
Feature
Startup CPU boost for revisions is now available to provide additional CPU during container instance startup time.
September 13, 2022
Feature
You can now deploy Cloud Run services from Cloud Deploy (Preview).
Feature
Startup healthcheck probes are now available (Preview).
Feature
The following new region is now available: me-west1 .
September 05, 2022
Change
Cloud Run now allows up to 4,000 serving revisions and 2,000 tagged revisions per region and project.
September 01, 2022
Change
Terraform samples are now available in many of the Cloud Run tutorials and guides, such as:
Static outbound IP address ,
Pub/Sub with Cloud Run
Authenticating service to service
Rollbacks & Rollouts
Request Timeouts
and many other pages. You can also find a full list of Terraform samples in GitHub.
July 18, 2022
Feature
Cloud Run now supports container images in the
Open Container Initiative (OCI) image format.
July 11, 2022
Feature
Cloud Run now writes Access Transparency logs , see Enabling Access Transparency .
June 08, 2022
Feature
Session affinity is now available for Cloud Run service revisions.
June 07, 2022
Feature
The following new region is now available: us-south1 .
June 06, 2022
Feature
You can now create and edit Cloud Run jobs using the Cloud console.
May 24, 2022
Feature
The following new region is now available: us-east5 .
May 16, 2022
Feature
You can now tag services using Resource Manager tags for fine-grained access control.
May 11, 2022
Feature
Cloud Run jobs are now available in Preview.
May 09, 2022
Feature
The following new region is now available: europe-southwest1 .
May 05, 2022
Feature
You can now define service-level objectives (SLOs) for your Cloud Run services using SLO monitoring in Cloud Monitoring or the Cloud Run service page.
May 03, 2022
Feature
The following new region is now available: europe-west9 .
April 22, 2022
Feature
You can now allocate up to 32 GiB of memory and up to 8 CPU to your Cloud Run services.
April 19, 2022
Feature
The following new region is now available: europe-west8 .
March 28, 2022
Feature
Cloud Run reports a new Cloud Monitoring metric: Container Startup Latency, measuring the startup time of container instances.
March 24, 2022
Feature
Support for Serverless VPC Access connectors in Shared VPC host projects is now at general availability (GA). Learn about the advantages of this method and how to configure connectors in host projects .
February 25, 2022
Feature
Cloud Run now supports using less than one CPU. Refer to CPU limits for details. (Available in public preview.)
February 16, 2022
Feature
BigQuery remote functions allow you to implement custom BigQuery SQL functions leveraging Cloud Run HTTP services (Preview)
February 09, 2022
Fixed
The configured container arguments are now correctly overriding arguments defined inside the container image. This change applies to new services only.
December 16, 2021
Change
For consistency with latency reported in request logs, the request_latencies monitoring metric now excludes container startup latency.
December 14, 2021
Feature
The ability to configure Cloud Run services to have CPU allocated for the entire lifetime of container instances is now at general availability (GA).
December 02, 2021
Feature
Internal ingress from Workflows to Cloud Run is now at general availability (GA).
November 16, 2021
Feature
The following new region is now available: southamerica-west1 .
November 09, 2021
Feature
Cloud Run support for referencing Secret Manager Secrets is now at general availability (GA).
November 01, 2021
Feature
Committed use discount recommender now automatically generates recommendations to purchase Cloud Run committed use discounts based on historical usage.
Feature
You can now allocate up to 16GiB of memory to your Cloud Run services.
October 27, 2021
Feature
Cloud Run now supports a new second generation execution environment that provides full Linux compatibility rather than system call emulation. This execution environment provides better performance and the ability to use network file systems. (Available in public preview.)
Feature
Cloud Run now supports network file systems such as NFS, NDB, 9P, CIFS/Samba, and Ceph , as well as
Cloud Filestore and Cloud Storage FUSE . (Available in public preview.)
September 28, 2021
Feature
Binary Authorization for Cloud Run is now at generally availability (GA).
Feature
Customer managed encryption keys are now at general availability (GA).
September 13, 2021
Feature
You can now configure Cloud Run services to have CPU allocated for the entire lifetime of container instances. Pricing depends on the CPU allocation configuration. (Available in public preview.)
August 24, 2021
Feature
Deploying to Cloud Run from source code is now at General Availability (GA).
August 03, 2021
Feature
The following new region is now available: northamerica-northeast2 .
July 27, 2021
Feature
Cloud Run VPC Service Controls are now at General Availability (GA).
Feature
Committed use discounts are now at General Availability (GA).
Feature
The following organization policies are now at General Availability (GA): Cloud Run Allowed ingress settings and Allowed VPC egress settings .
July 26, 2021
Feature
Cloud Run container instances can now process up to 1,000 concurrent requests , see Setting maximum concurrency . The default is still 80.
July 20, 2021
Feature
Cloud Run is now covered by FedRAMP Moderate
June 30, 2021
Feature
Cloud Run is now available in the following region:
asia-south2 (Delhi, India)
June 25, 2021
Feature
Cloud Run is now available in the following region:
australia-southeast2 (Melbourne)
June 22, 2021
Feature
Cloud Run support for WebSockets , HTTP/2 , and gRPC streaming are now at general availability (GA).
June 03, 2021
Feature
Request timeouts up to 60 minutes are now at general availability (GA).
May 14, 2021
Feature
User labels now appear in logs .
May 12, 2021
Feature
Cloud Run now provides UI, command line, and YAML support for referencing Secret Manager Secrets . (Available in public preview.)
Feature
Customer managed encryption keys are now available for use with Cloud Run. (Available in public preview.)
Feature
Recommender now provides recommendations for securing Cloud Run services by creating dedicated service accounts. (Available in public preview.)
Feature
Committed use discounts are now available for Cloud Run . (Available in public preview.)
Feature
You can now use Binary authorization with Cloud Run to enforce policy-based deployment of Cloud Run services. (Available in public preview.)
May 03, 2021
Feature
You can now use Identity-aware Proxy with Cloud Run to use identity and context to guard access to your applications. (Available in public preview.)
Change
By default, the memory allocated to each container instance of a new service is 512MiB. The new default applies to new services. Existing
services retain their allocated memory.
April 14, 2021
Feature
Cloud Run is now available in europe-central2 (Warsaw)
April 01, 2021
Feature
Restricting ingress on Cloud Run is now at general availability (GA).
March 31, 2021
Feature
"Memory limit exceeded" and "No instances available" errors are now captured and aggregated in Cloud Error Reporting
March 18, 2021
Feature
Shared VPC on Cloud Run is now at general availability (GA).
March 08, 2021
Feature
The ability to specify a minimum number of container instances to be kept warm and ready to serve requests is now at general availability (GA).
March 05, 2021
Feature
You can now use VPC Service Controls with Cloud Run to set up a secure perimeter to guard against data exfiltration. (Available in public preview.)
March 03, 2021
Feature
Cloud Run reports a new Cloud Monitoring metric: Instance count , which counts the number of container instances that exist, broken down by state (active or idle).
March 01, 2021
Feature
Cloud Run is now available in the following regions:
us-west2 (Los Angeles)
us-west3 (Salt Lake city)
us-west4 (Las Vegas)
January 20, 2021
Feature
Cloud Run now supports WebSockets , HTTP/2 and gRPC streaming .
December 18, 2020
Feature
Cloud Run now allows you to restrict ingress of your Cloud Run services.
Feature
You can now allocate up to 8GiB of memory to your Cloud Run services.
December 16, 2020
Feature
You can now build and deploy source code to Cloud Run using a single command: gcloud beta run deploy --source .
December 14, 2020
Feature
Cloud Run container instances can now process up to 250 concurrent requests , see Configuring maximum concurrency . The default is still 80.
October 23, 2020
Feature
Cloud Run services can now be triggered using Eventarc (available in public preview)
October 19, 2020
Feature
Cloud Run is now available in the following regions:
asia-east2 (Hong Kong)
asia-northeast3 (Seoul, South Korea)
asia-southeast2 (Jakarta)
asia-south1 (Mumbai, India)
europe-west2 (London, UK)
europe-west3 (Frankfurt, Germany)
europe-west6 (Zurich, Switzerland)
southamerica-east1 (Sao Paulo, Brazil)
Feature
You can now purchase a custom domain via Cloud Domains using the Cloud Run user interface.
October 15, 2020
Feature
You can now specify a minimum number of container instances to be kept warm and ready to serve requests, for services requiring reduced latency and fewer cold starts.
October 13, 2020
Feature
You can now control egress traffic from a service and route all outbound requests to your VPC network. This allows you to configure a static outbound IP address by leveraging Cloud NAT .
October 12, 2020
Feature
You can now allocate 4 vCPUs to container instances of Cloud Run services.
Feature
Traces of requests to Cloud Run services are now automatically captured in Cloud Trace
October 11, 2020
Feature
When a container instance needs to be shut down, it now receives a SIGTERM signal. If handled, CPU is allocated for up to 10 seconds before the container is shut down .
October 06, 2020
Feature
Cloud Run now supports request timeouts up to 60 minutes . However, timeouts greater than 15 minutes are a beta feature.
September 29, 2020
Feature
Cloud Run now supports server-side HTTP and gRPC streaming.
August 19, 2020
Feature
Cloud Code IDE extensions now allow you to develop and debug Cloud Run services locally. See Cloud Code for VS Code and Cloud Code for IntelliJ
August 18, 2020
Feature
You can now allocate up to 4GiB of memory to your Cloud Run (fully managed) services.
August 03, 2020
Feature
When setting up Continuous Deployment in the Cloud Run user interface, you can now select a repository that contains Go, Node.js, Python Java or .NET Core code. It will be built using Google Cloud Buildpacks without needing a Dockerfile.
July 30, 2020
Feature
You can now tag Cloud Run revisions. Tagged revisions get a dedicated URL allowing developers to reach these specific revisions without needing to allocate traffic to it.
July 27, 2020
Feature
Cloud Run is now available in asia-southeast1 (Singapore)
July 23, 2020
Feature
Serverless VPC Access support for Shared VPC is now available in Beta.
July 21, 2020
Feature
Cloud Run resources are now available in
Cloud Asset Inventory
July 13, 2020
Feature
The Cloud Run user interface now allows you to easily set up Continuous Deployment from Git using Cloud Build
July 07, 2020
Feature
External HTTP(S) Load Balancing is now supported for Cloud Run services via Serverless network endpoint groups .
Notably, this feature allows you to use Cloud CDN and multi-region load balancing.
This feature is available in Beta.
June 30, 2020
Feature
Cloud Run (fully managed) support for connecting to a VPC network with Serverless VPC Access is now at general availability (GA).
June 29, 2020
Feature
Cloud Run is now available in the following regions:
asia-northeast2 (Osaka)
australia-southeast1 (Sydney)
northamerica-northeast1 (Montréal)
June 16, 2020
Feature
The Cloud Run user interface now allows you to copy a Cloud Run service.
June 09, 2020
Feature
Export a Cloud Run service to a YAML file with gcloud run services describe SERVICE --format export
June 03, 2020
Feature
The Cloud Run user interface now allows you to edit the service YAML.
May 20, 2020
Feature
The Cloud Run container instance metadata server now exposes the unique identifier of the container instance and the region of the Cloud Run service
May 13, 2020
Feature
Cloud Run (fully managed) now supports connecting to a VPC network with Serverless VPC Access , in beta.
May 08, 2020
Feature
Cloud Code IDE extensions support Cloud Run. See Cloud Code for VS Code and Cloud Code for IntelliJ
March 30, 2020
Feature
The Cloud Run revision details panel now surfaces build information if the Container Analysis API has been enabled and the container has been built with Cloud Build , as well as source repository information if the container has been built by a Cloud Build Trigger .
March 23, 2020
Fixed
You can now
restrict which regions are available to deploy Cloud Run (fully managed) services using an organization policy with a resource locations
constraint .
March 16, 2020
Feature
Cloud Run (fully managed) now supports deploying container images from Cloud Artifact Registry
February 12, 2020
Feature
Cloud Run (fully managed) now supports rollbacks, gradual rollouts (blue/green deployments), and other traffic migration manipulations between revisions.
January 30, 2020
Feature
Cloud Run is now available in the following regions:
asia-east1 (Taiwan)
europe-north1 (Finland)
europe-west4 (Netherlands)
us-east4 (Northern Virginia)
us-west1 (Oregon)
January 27, 2020
Deprecated
The Cloud Run v1alpha1 API is deprecated and will be turned down. It is replaced by the Cloud Run v1 API
January 24, 2020
Feature
You can now allocate 2 vCPUs to Cloud Run (fully managed) services.
January 07, 2020
Feature
Deploy Cloud Run services from a local configuration file with gcloud beta run services replace service.yaml .
Feature
You can now customize the container port on which requests are sent. We still recommend listening on $PORT for better container portability.
Feature
Specify custom command and arguments for your deployed containers.
Feature
Use custom revision names with the --revision-suffix command line flag.
December 23, 2019
Change
Cloud Run (fully managed) Service Level Agreement (SLA) has been updated to a Monthly Uptime Percentage of at least 99.95%
November 14, 2019
Announcement
Cloud Run (fully managed) is now Generally Available (GA).
October 25, 2019
Breaking
Legacy versions of the container instance metadata server have been removed.
October 22, 2019
Change
Cloud Run (fully managed) free tier is now applied as a spending based discount.
October 21, 2019
Feature
Cloud Run is now covered by HIPAA Compliance .
October 01, 2019
Feature
The max instances setting feature allows you to set a limit to the total number of container instances that are started up to handle traffic.
September 26, 2019
Feature
The "Metrics" tab on the service detail page now includes an "Error Reporting" table that displays the top application errors for this service.
Feature
The "Metrics" tab on the service detail page now includes a " Billable container instance time " chart, allowing you to better understand how many instances are actively serving traffic for this service.
September 25, 2019
Feature
Cloud Run (fully managed) now supports unary gRPC .
September 19, 2019
Feature
Cloud Run (fully managed) v1 API is now available.
September 10, 2019
Feature
You can set labels on Cloud Run services and revisions.
August 19, 2019
Change
Cloud Run (fully managed) services are now only accessible via HTTPS. Any HTTP requests to Cloud Run services now receives a 302 "Moved Temporarily" status code that redirects to the HTTPS location. Web browsers follow this redirection.
July 10, 2019
Feature
The following new regions are now available: asia-northeast1 , europe-west1 , and us-east1 .
July 08, 2019
Feature
New YAML tab on the service details page.
June 18, 2019
Change
New --platform flag added to Cloud Run gcloud command line . This argument is optional but will be required in a future release of the tool.
June 07, 2019
Feature
Per-service identity .
May 20, 2019
Feature
New "Metrics" tab in the Cloud Run service detail view, displaying a list of curated monitoring metrics .
May 17, 2019
Feature
Cloud Run (fully managed) has been added to the Google Cloud Platform Pricing Calculator .
May 07, 2019
Feature
Cloud SQL is now supported .
April 09, 2019
Feature
Cloud Run (fully managed) Beta release.
August 15, 2018
Feature
Cloud Run (fully managed) Alpha release.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
