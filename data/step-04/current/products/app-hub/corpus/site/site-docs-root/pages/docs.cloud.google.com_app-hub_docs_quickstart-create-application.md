---
title: "Quickstart: Create an application from existing resources \_|\_ App Hub \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/app-hub/docs/quickstart-create-application
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/app-hub/docs
source_metadata:
  url: https://docs.cloud.google.com/app-hub/docs/quickstart-create-application
  title: "Quickstart: Create an application from existing resources \_|\_ App Hub\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
App Hub
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create an application from existing resources
This quickstart shows you how to organize existing Google Cloud resources in
an App Hub application by registering them as
services .
First, you deploy sample components, which you then use to define a global web
application in App Hub.
This quickstart supports users who want to use their existing infrastructure to
gain visibility and operational control by grouping Google Cloud resources into
logical applications.
Before you begin
Before you start this quickstart, do the following:
Choose your application setup model . This
quickstart assumes you have defined an
application management boundary and
creates an application using the
management project .
For more information about this resource configuration, see
the App Hub resource model .
Note the project ID of the management project to use throughout this
document. For more information, see
Find the project name, number, and ID .
Verify that the following APIs are enabled in the management project.
When you set up a management project, most of the APIs you need for this
quickstart are enabled automatically.
Compute Engine API ( compute.googleapis.com )
Infrastructure Manager API ( config.googleapis.com )
Enable APIs
Required roles
To get the permissions that
you need to enable required APIs and create a sample application from
existing resources,
ask your administrator to grant you the
following IAM roles on the management project:
To enable required APIs:
Service Usage Admin ( roles/serviceusage.serviceUsageAdmin )
To get full access to required services:
App Hub Admin ( roles/apphub.admin )
Cloud Run Admin ( roles/run.admin )
Compute Admin ( roles/compute.admin )
Cloud Infrastructure Manager Admin ( roles/config.admin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Deploy sample components for the application
You must first deploy a set of sample Google Cloud resources that you will later
use to define a global application
in App Hub by registering them as
application components :
A Cloud Run service
that acts as the application's backend service.
A global external Application Load Balancer
that acts as the application's frontend service by directing traffic to the
Cloud Run service as a forwarding rule.
Follow these steps to deploy these resources:
gcloud
Set the required environment variables:
export PROJECT_ID = " PROJECT_ID "
export REGION = " REGION "
Replace the following:
PROJECT_ID : the ID of your
management project.
REGION : your chosen
region for resources, for example,
us-central1 .
Deploy a sample Cloud Run service named hello-run :
gcloud run deploy hello-run \
--image = us-docker.pkg.dev/cloudrun/container/hello \
--allow-unauthenticated \
--region = ${ REGION } \
--project = ${ PROJECT_ID }
Create the global external Application Load Balancer. This process
involves the following steps:
Create a serverless network endpoint group (NEG) called
hello-run-neg :
gcloud compute network-endpoint-groups create hello-run-neg \
--region = ${ REGION } \
--network-endpoint-type = serverless \
--cloud-run-service = hello-run \
--project = ${ PROJECT_ID }
The NEG acts as a backend for the load balancer, pointing to your
hello-run service.
Create a backend service to manage how traffic is distributed to the
NEG:
gcloud compute backend-services create hello-backend-service \
--global \
--load-balancing-scheme = EXTERNAL_MANAGED \
--project = ${ PROJECT_ID }
Add the serverless NEG to the backend service:
gcloud compute backend-services add-backend hello-backend-service \
--global \
--network-endpoint-group = hello-run-neg \
--network-endpoint-group-region = ${ REGION } \
--project = ${ PROJECT_ID }
Create a URL map to route incoming requests to the backend service:
gcloud compute url-maps create hello-url-map \
--default-service = hello-backend-service \
--project = ${ PROJECT_ID }
Create an HTTP proxy to receive requests and route them using the
URL map:
gcloud compute target-http-proxies create hello-http-proxy \
--url-map = hello-url-map \
--project = ${ PROJECT_ID }
Create a global forwarding rule:
gcloud compute forwarding-rules create hello-forwarding-rule \
--global \
--load-balancing-scheme = EXTERNAL_MANAGED \
--target-http-proxy = hello-http-proxy \
--ports = 80 \
--project = ${ PROJECT_ID }
This forwarding rule provides a public IP address and port to handle
incoming user requests and directs them to the proxy.
Terraform
Create a main.tf file and add the following code:
# Provider configuration
provider "google" {
project = " PROJECT_ID "
}
# Cloud Run service
resource "google_cloud_run_v2_service" "default" {
name = "hello-run"
location = " REGION "
template {
containers {
image = "us-docker.pkg.dev/cloudrun/container/hello"
}
}
}
# Allow unauthenticated access to the Cloud Run service
resource "google_cloud_run_v2_service_iam_member" "noauth" {
project = google_cloud_run_v2_service.default.project
location = google_cloud_run_v2_service.default.location
name = google_cloud_run_v2_service.default.name
role = "roles/run.invoker"
member = "allUsers"
}
Replace the following:
PROJECT_ID : the ID of your
management project.
REGION : your chosen
region for resources, for example,
us-central1 .
This block defines the Google Cloud provider and configures a
public-facing Cloud Run service using a sample hello-world
container image. It also includes an IAM policy binding
to allow unauthenticated invocations, making the service publicly
accessible.
Add the following code to your main.tf file to create the global
external Application Load Balancer:
# Serverless NEG for the Cloud Run service
resource "google_compute_region_network_endpoint_group" "serverless_neg" {
name = "hello-run-neg"
network_endpoint_type = "SERVERLESS"
region = " REGION "
cloud_run {
service = google_cloud_run_v2_service.default.name
}
}
# Global external backend service
resource "google_compute_backend_service" "default" {
name = "hello-backend-service"
protocol = "HTTP"
load_balancing_scheme = "EXTERNAL_MANAGED"
backend {
group = google_compute_region_network_endpoint_group.serverless_neg.id
}
}
# URL map to route requests to the backend service
resource "google_compute_url_map" "default" {
name = "hello-url-map"
default_service = google_compute_backend_service.default.id
}
# HTTP proxy to route requests to the URL map
resource "google_compute_target_http_proxy" "default" {
name = "hello-http-proxy"
url_map = google_compute_url_map.default.id
}
# Global forwarding rule to handle incoming requests
resource "google_compute_global_forwarding_rule" "default" {
name = "hello-forwarding-rule"
target = google_compute_target_http_proxy.default.id
port_range = "80"
}
This block defines the following components:
A serverless network endpoint group (NEG), which acts as a backend
for the load balancer and points to the Cloud Run service.
A backend service that directs traffic to the serverless NEG.
A URL map to route incoming requests to the backend service.
An HTTP proxy to receive requests and route them using the URL
map.
A global forwarding rule, which provides a public IP address and
port to handle incoming user requests and directs them to the proxy.
Initialize and apply the Terraform configuration:
terraform init
terraform apply
Terraform deploys the resources to your project.
Define the application in App Hub
After deploying the resources as a forwarding rule and a Cloud Run
service, follow these steps to group them in an App Hub application by
registering them as the application's
services :
Console
Go to the Applications page from App Hub:
Go to Applications
Click add Create application .
In the Application details tab, select Global as the
application location.
Enter my-global-app for the Application name .
Optionally, add a display name and a description for the application.
Click Continue .
In the Application resources tab, browse through infrastructure
resources and select the checkboxes of the forwarding rule and the
Cloud Run service.
Click Continue .
In the Attributes and owners tab, you can add
attributes for the
application, such as criticality, environment, and application owners.
You can choose to use the same attributes and owners for the resources
you are registering to the application or
define those later .
Click Create .
When the application is created, the Applications page displays its
details, including the resources you registered as services.
gcloud
Create the application:
gcloud apphub applications create my-global-app \
--location = global \
--display-name = "My Global Application" \
--project = ${ PROJECT_ID }
Discover the IDs for the forwarding rule and the Cloud Run
service in the appropriate region:
gcloud apphub discovered-services list \
--location = global \
--project = ${ PROJECT_ID }
gcloud apphub discovered-services list \
--location = ${ REGION } \
--project = ${ PROJECT_ID }
Note the ID of the forwarding rule and the Cloud Run service.
Register the forwarding rule to the global application:
gcloud apphub applications services create frontend-service \
--application = my-global-app \
--discovered-service = projects/ ${ PROJECT_ID } /locations/global/discoveredServices/ FRONTEND_ID \
--display-name = "Frontend Service" \
--location = global \
--project = ${ PROJECT_ID }
Replace FRONTEND_ID with the ID of the
forwarding rule.
Register the Cloud Run service to the global application:
gcloud apphub applications services create backend-service \
--application = my-global-app \
--discovered-service = projects/ ${ PROJECT_ID } /locations/ ${ REGION } /discoveredServices/ BACKEND_ID \
--display-name = "Backend Service" \
--location = global \
--project = ${ PROJECT_ID }
Replace BACKEND_ID with the ID of the
Cloud Run service.
Terraform
Create an application.tf file and add the following code:
# Application
resource "google_apphub_application" "my_global_app" {
project = " PROJECT_ID "
location = "global"
application_id = "my-global-app"
display_name = "My Global Web App"
description = "A sample global web application."
scope {
type = "GLOBAL"
}
attributes {
criticality {
type = "MEDIUM"
}
environment {
type = "DEVELOPMENT"
}
business_owners {
display_name = "Example Business Owner"
email = "business-owner@example.com"
}
developer_owners {
display_name = "Example Developer"
email = "dev-owner@example.com"
}
operator_owners {
display_name = "Example Operator"
email = "operator-owner@example.com"
}
}
}
This block uses the
google_apphub_application
resource to create a logical grouping of application components.
This example creates a global application and defines attributes for
governance and discoverability, such as criticality, environment, and
owners. You can modify those values for your sample configuration.
Add the following code to application.tf to discover your deployed
resources:
# Discover the forwarding rule
data "google_apphub_discovered_service" "frontend_service" {
location = "global"
service_uri = "//compute.googleapis.com/${google_compute_global_forwarding_rule.default.id}"
}
# Discover the Cloud Run service
data "google_apphub_discovered_service" "backend_service" {
location = " REGION "
service_uri = "//run.googleapis.com/${google_cloud_run_v2_service.default.id}"
}
The
google_apphub_discovered_service
data sources find the resource names of your existing infrastructure
based on their URIs. This step lets App Hub identify the
specific resources you want to register as services.
Add the following code to application.tf to register the discovered
resources:
# Register the forwarding rule as a service in the application
resource "google_apphub_service" "frontend" {
project = " PROJECT_ID "
location = "global"
application_id = google_apphub_application.my_global_app.application_id
service_id = "frontend-service"
display_name = "Frontend Service (LB)"
discovered_service = data.google_apphub_discovered_service.frontend_service.name
}
# Register the Cloud Run service as a service in the application
resource "google_apphub_service" "backend" {
project = " PROJECT_ID "
location = "global"
application_id = google_apphub_application.my_global_app.application_id
service_id = "backend-service"
display_name = "Backend Service (Cloud Run)"
discovered_service = data.google_apphub_discovered_service.backend_service.name
}
The
google_apphub_service
resources formally register the discovered resources in your
application as services. This step links your infrastructure with the
application you defined in App Hub.
Initialize and apply the Terraform configuration:
terraform init
terraform apply
Terraform registers the resources to your my-global-app application in
App Hub.
Optional: Monitor your new application
After defining your application in App Hub, you can use integrated
Google Cloud products to monitor its health and performance:
View operational data in Cloud Hub :
Set up Cloud Hub .
In the Google Cloud console, go to the Home page of Cloud Hub.
Go to Home
From the application selector, choose the my-global-app application.
The page displays a summary of your application's health. For more
information, see the Cloud Hub overview .
View detailed dashboards in Application Monitoring :
Set up Google Cloud Observability for Application Monitoring .
In the Google Cloud console, go to the Application monitoring page:
Go to Application monitoring
If you use the search bar to find this page, then select the result whose subheading is
Monitoring .
From the project picker of the Google Cloud console, select the
management project.
The Application Monitoring page displays predefined dashboards for
your application. For more information, see
Monitor application health and performance .
For detailed instructions on how to use the predefined dashboards and
explore your telemetry data, see
View application telemetry .
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
Unregister the services .
Delete the global application .
If you used Terraform to deploy your application, run terraform destroy in
the directory containing your Terraform files to deprovision all the
resources you created.
Optional: If you created a new project for this quickstart,
delete the project .
What's next
Learn more about App Hub
Manage services and workloads
Monitor your application's health
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
