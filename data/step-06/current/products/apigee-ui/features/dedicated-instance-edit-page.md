---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:10:02.167Z"
product_name: "Apigee UI"
product_slug: "apigee-ui"
feature_name: "Dedicated instance edit page"
feature_slug: "dedicated-instance-edit-page"
latest_feature_date: "2022-04-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview"
  - "https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart"
keywords:
  - "dedicated"
  - "instance"
  - "edit"
  - "page"
  - "management"
  - "ui"
  - "provides"
  - "adding"
---

# Dedicated instance edit page

Product: Apigee UI
Coverage: MEDIUM

## Step 02 Summary

The instance management UI provides a dedicated edit page for adding or removing environments and updating accepted projects.

## Extended Definition

The instance management UI provides a dedicated edit page for adding or removing environments and updating accepted projects.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy)
- [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview)
- [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)

## Supporting Pages

### Building a simple API proxy \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/build-simple-api-proxy)
- Source ID: `site-docs-reference-required-14`
- Final score: 111
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Create the instance template gcloud compute instance - templates create $ MIG NAME \ -- project $ PROJECT ID \ -- region $ REGION \ -- network $ VPC NAME \ -- subnet $ VPC SUBNET \ -- tags = https - server , apigee - mig - proxy , gke - apigee - proxy \ -- machine - type e2 - medium -- image - family debian - 12 \ -- image - project debian - cloud -- boot - disk - size 20 GB \ -- no - address \ -- metadata ENDPOINT = $ APIGEE ENDPOINT , startup - script - url = gs : //apigee-5g-saas/apigee-envoy-proxy-release/latest/conf/startup-script.sh Create the managed instance group gcloud compute instance - groups managed create $MIG NAME \ -- project $PROJECT ID -- base - instance - name apigee - mig \ -- size 2 -- template $MIG NAME -- region $REGION Configure autoscaling gcloud compute instance - groups managed set - autoscaling $MIG NAME \ -- project $PROJECT ID -- region $REGION -- max - num - replicas 50 \ -- target - cpu - utilization 0.75 -- cool - down - period 90 Define a named port gcloud compute instance - groups managed set - named - ports $MIG NAME \ -- project $PROJECT ID -- region $REGION -- named - ports https: 443 Create a Google-managed SSL certificate and key for the load balancer gcloud compute ssl-certificates create $CERTIFICATE NAME \ --domains=$DOMAIN HOSTNAME \ --project $PROJECT ID \ --global Validate that the certificate is provisioned gcloud compute ssl-certificates describe $CERTIFICATE NAME \ --global \ --format="get(name,managed.status, managed.Status)" Create the Global Cloud Load Balancer (GCLB) Create a health check gcloud compute health-checks create https hc-apigee-envoy-443 \ --project $PROJECT ID --port 443 --global \ --request-path /healthz/ingress Create the backend service for http1 gcloud compute backend - services create YOUR BACKEND 1 \ -- project $ PROJECT ID \ -- protocol HTTPS \ -- health - checks hc - apigee - envoy - 443 \ -- port - name https \ -- timeout 302 s \ -- connection - draining - timeout 300 s \ -- global Create the backend service for http2 gcloud compute backend - services create YOUR BACKEND 2 \ -- project $ PROJECT ID \ -- protocol HTTP2 \ -- health - checks hc - apigee - envoy - 443 \ -- port - name https \ -- timeout 302 s \ -- connection - draining - timeout 300 s \ -- global Add MIGs to the backend service.
- Create another backend service for http2 Create backend service for http2 gcloud compute backend - services create YOUR BACKEND 2 \ -- project $ PROJECT ID \ -- protocol HTTP2 \ -- health - checks hc - apigee - envoy - 443 \ -- port - name https \ -- timeout 302 s \ -- connection - draining - timeout 300 s \ -- global Attach the second backend service to the MIG gcloud compute backend - services add - backend YOUR BACKEND 2 \ -- project $PROJECT ID -- instance - group $MIG NAME \ -- instance - group - region $REGION \ -- balancing - mode UTILIZATION -- max - utilization 0.8 -- global List the URL map for the existing Apigee GCLB gcloud compute url-maps list -project $PROJECT ID Pick up the correct URL map name used for Apigee load balancing gcloud compute url - maps export APIGEE URL MAP NAME - project $ PROJECT ID Create a load balancing URL map YAML file If you already have an existing URL map, merge this configuration into that.
- Otherwise, create a YAML file at /tmp/apigee-map.yaml with this configuration. defaultService : projects / dg - runtime - test1 / global / backendServices / YOUR BACKEND 1 name : matcher1 routeRules : - matchRules : - headerMatches : - headerName : Content - Type prefixMatch : application / grpc prefixMatch : / priority : 100 routeAction : weightedBackendServices : - backendService : projects / dg - runtime - test1 / global / backendServices / YOUR BACKEND 2 weight : 100 Apply the new YAML for gRPC routing gcloud compute url - maps import APIGEE URL MAP NAME \ -- source / tmp / apigee - map . yaml \ -- global - project $ PROJECT ID Adding security Proxy security is achieved by adding a policy to your proxy.
- In this example we are reusing the MIG, but you could also create a new pair of MIGs. gcloud compute backend - services add - backend YOUR BACKEND 1 \ -- project $PROJECT ID -- instance - group $MIG NAME \ -- instance - group - region $REGION \ -- balancing - mode UTILIZATION -- max - utilization 0.8 -- global gcloud compute backend - services add - backend YOUR BACKEND 2 \ -- project $PROJECT ID -- instance - group $MIG NAME \ -- instance - group - region $REGION \ -- balancing - mode UTILIZATION -- max - utilization 0.8 -- global Create a load balancing URL map.

### Get started with the Apigee Extension Processor \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart](https://docs.cloud.google.com/apigee/docs/api-platform/service-extensions/extension-processor-quickstart)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Go to the VPC Networks page in the Google Cloud console: Go to VPC Networks Required roles To get the permissions that you need to install the Apigee Extension Processor, ask your administrator to grant you the following IAM roles: Create and manage service accounts: Service Account Admin ( roles/iam.serviceAccountAdmin ) on organization Create and manage service extensions: Service Extensions Admin ( roles/networkservices.serviceExtensionsAdmin ) on organization Create and manage network endpoint groups (NEGs): Compute Instance Admin ( roles/compute.instanceAdmin ) on organization Create and manage networking resources: Compute Network Admin ( roles/compute.networkAdmin ) on organization Create and manage backend services: Compute Load Balancer Admin ( roles/compute.loadBalancerAdmin ) on organization Create and manage Apigee resources: Apigee Org Admin ( roles/apigee.admin ) on organization Create and manage traffic extensions: Apigee APIM Service Extension Admin ( roles/apigee.apimServiceExtensionAdmin ) on organization View traffic extensions: Apigee APIM Service Extension Viewer ( roles/apigee.apimServiceExtensionViewer ) on organization Manage long-running operations: Apigee APIM Service Extension Service Agent ( roles/apigee.apimServiceExtensionServiceAgent ) on the service agent in the Google Cloud project For more information about granting roles, see Manage access to projects, folders, and organizations .
- Create a developer App and App credentials To create a developer App and App credentials for the newly created API product: Go to the Apigee API management page in the Google Cloud console: Apigee API management Create a developer: Select Distribution > Developers .
- Go to the Instances page in the Google Cloud console to select an instance and view its details: Go to Instances You can use Extension Processor with a Subscription or Pay-as-you-go Apigee organization.
- View instance versions in the Instance details page of the Apigee UI in Google Cloud console.

### UI overview \_|\_ Apigee \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview](https://docs.cloud.google.com/apigee/docs/api-platform/fundamentals/ui-overview)
- Source ID: `site-docs-reference-required-14`
- Final score: 101
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following table maps each Apigee UI feature page to its current location in the Apigee UI: Feature Apigee UI Proxies Proxy development > API proxies Go to API proxies Sharedflows Proxy development > Sharedflows Go to Sharedflows Offline debug Proxy development > Offline debug Go to Offline debug API products Distribution > API products Go to API products Portals Distribution > Portals Go to Portals Monetization Distribution > Monetization Go to Monetization Developers Distribution > Developers Go to Developers Apps Distribution > Apps Go to Apps API monitoring Proxy development > API monitoring Go to API monitoring API metrics Analytics > API metrics Go to API metrics Developer Engagement Analytics > Developer analysis Go to Developer analysis Traffic Composition Analytics > Developer analysis Go to Developer analysis Devices Analytics > End user analysis Go to End user analysis Geomap Analytics > End user analysis Go to End user analysis Custom reports Analytics > Custom reports Go to Custom reports Instances Management > Instances Go to Instances Data collectors Management > Data collectors Go to Data collectors Environments Management > Environments Go to Environments Endpoint attachments Management > Endpoint attachments Go to Endpoint attachments Roles Identity and Access Management (IAM) > Roles Go to Roles Users IAM Go to IAM Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Using the Apigee UI, you can: Build an API proxy Deploy and undeploy API proxies to your cluster Create, edit, and delete environments and environment groups Assign environment-level access control to users Work with target servers , KVMs , and shared flows Use the Apigee UI To open the Apigee UI, go to the Apigee API management page.
- Whether you are a Pay-as-you-go or Subscription customer, this view provides you with a snapshot of key resource usage, as well as shortcuts to other monitoring and identity management resources for your organization, including: Cloud Monitoring Cloud Billing Identity and Access Management Explore Apigee API management features From the main navigation menu, you can explore the range of Apigee API management features available for your organization, as described in the table below: Main navigation menu Purpose Proxy development Develop and deploy API proxies .
- Apigee API management From the Overview page, you can: Get started as a new Apigee user Test your Apigee runtime View key resource usage metrics Explore Apigee API management features Get started as a new Apigee user If you just are new to Apigee, you can begin your API management journey with quickstart learning options launched from the Overview page: Begin by deploying your first proxy : Watch a video tutorial that walks you through the steps required to create and deploy an API proxy.

