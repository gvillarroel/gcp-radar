---
title: "Mapping custom domains \_|\_ Cloud Run \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/run/docs/mapping-custom-domains
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/run/docs
source_metadata:
  url: https://docs.cloud.google.com/run/docs/mapping-custom-domains
  title: "Mapping custom domains \_|\_ Cloud Run \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Cloud Run
Guides
Send feedback
Mapping custom domains
Stay organized with collections
Save and categorize content based on your preferences.
You can set up a custom domain rather than the default address that
Cloud Run provides for a deployed service.
There are a few ways to set up a custom domain for a Cloud Run
service:
Use a global external Application Load Balancer (Recommended)
Use Cloud Run domain mapping (Limited availability and Preview)
Use Firebase Hosting
You can map multiple custom domains to the same Cloud Run service.
Before you begin
Purchase a new domain, unless you already have one that you want to use. You
can use any domain name registrar.
Map a custom domain using a global external Application Load Balancer
With this option, you add a global external Application Load Balancer
in front of your Cloud Run service and configure a custom domain at
the load balancer level.
One advantage of using a global external Application Load Balancer is that it gives you a lot of
control around your custom domain setup.
For example, it lets you use your own TLS certificate or route
specific URL paths to the Cloud Run service.
It also lets you configure Cloud CDN for caching and Google Cloud Armor
for additional security.
You can also map multiple services to a dynamic hostname or
path in your custom domain URL pattern for a single load balancer, for example, <service>.example.com ,
using URL masks .
Refer to the documentation on setting up a global external Application Load Balancer with Cloud Run .
Map a custom domain using Cloud Run domain mapping (Limited availability and Preview)
Preview
— Cloud Run domain mappings
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Cloud Run domain mapping limitations
The following considerations apply to Cloud Run domain mappings:
Cloud Run domain mappings are in the preview launch stage .
Due to latency issues , they are not
production-ready and are not supported at General Availability. At the moment,
this option is not recommended for production services.
A Google-managed certificate for HTTPS connections is automatically issued and
renewed when you map a service to a custom domain.
Provisioning the SSL certificate usually takes about 15 minutes but can take
up to 24 hours.
You cannot disable TLS 1.0 and 1.1. If this is an issue, you can use Firebase
Hosting or Cloud Load Balancing to enable TLS 1.2-only traffic.
You cannot upload and use your own (self-managed) certificates.
Cloud Run domain mappings are limited to 64 characters.
Domain mapping is available in the following regions:
asia-east1
asia-northeast1
asia-southeast1
europe-north1
europe-west1
europe-west4
us-central1
us-east1
us-east4
us-west1
To map custom domains in other regions, you must use one of the
other mapping options.
When you use Cloud Run domain mappings, you map a custom domain to your
service, then update your DNS records.
You can map a domain, such as example.com or a subdomain, such as
subdomain.example.com .
You can only map a domain to / , not to a specific URL path like /users .
You cannot use wildcard certificates with this feature.
Map a custom domain to a service
You can use the Google Cloud console, gcloud CLI, or Terraform to map a
custom domain to a service.
Note: If you have already configured domain forwarding on a third-party load balancer,
you don't need to use Cloud Run domain mapping. Ensure that the
forwarding settings on the third-party load balancer are set correctly.
Console
Open the domain mappings page in the Google Cloud console:
Domain mappings page
Click Add Mapping .
If your display window is too small, the Add Mapping button isn't
displayed and you must click the three-dot vertical ellipse icon in the
corner of the page.
From the drop-down list, select the service you are mapping the custom
domain to.
Select Cloud Run Domain Mappings .
In the Add mapping form, select Verify a new domain .
In the Base domain to verify field, you must verify the ownership of
a domain before you can use it, unless you purchased your domain
from Google.
If you want to map subdomain.example.com or
subdomain1.subdomain2.example.com , you must verify ownership
of example.com .
For more information on verifying domain ownership, refer to
Search Console help .
Click Continue .
After domain verification is finished, click Continue verification and close .
Update your DNS records at your domain registrar
website using the DNS records displayed in the last step.
You can display the records at any time by clicking DNS Records in
the "..." action menu for a domain mapping.
Click Done .
gcloud
You must verify domain ownership the first
time you use that domain in the Google Cloud project, unless you purchased your
custom domain from Google.
You can determine whether the custom domain you want to use has been
verified by running the following command:
gcloud domains list-user-verified
If your ownership of the domain needs to be
verified, open the Search Console verification page:
gcloud domains verify BASE-DOMAIN
where BASE-DOMAIN is the base domain you want
to verify. For example, if you want to map subdomain.example.com , you
must verify the ownership of example.com .
In Search Console , complete domain ownership verification. For
more information, refer to
Search Console help .
Map your service to the custom domain:
gcloud beta run domain-mappings create --service SERVICE --domain DOMAIN
Replace SERVICE with your service name.
Replace DOMAIN with your custom domain, for example, example.com
or subdomain.example.com
Note: If you are using a domain that is already mapped to another service,
use the --force-override flag
when you create the domain mapping. That domain will be removed from the
other service to point to this one.
Terraform
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
To create a Cloud Run service, add the following to your existing main.tf file:
resource "google_cloud_run_v2_service" "default" {
name = "custom-domain" # Replace with your service name
location = "us-central1"
deletion_protection = false # set to true to prevent destruction of the resource
template {
containers {
image = "us-docker.pkg.dev/cloudrun/container/hello" # Replace with your container image
}
}
}
Replace:
custom-domain with your Cloud Run service name.
us-docker.pkg.dev/cloudrun/container/hello with a reference to your container image. If you use Artifact Registry,
the repository REPO_NAME must
already be created. The URL has the shape LOCATION -docker.pkg.dev/ PROJECT_ID / REPO_NAME / PATH : TAG .
Map your Cloud Run service to the custom domain:
data "google_project" "project" {}
resource "google_cloud_run_domain_mapping" "default" {
name = "verified-domain.com"
location = google_cloud_run_v2_service.default.location
metadata {
namespace = data.google_project.project.project_id
}
spec {
route_name = google_cloud_run_v2_service.default.name
}
}
Replace verified-domain.com with your custom verified domain, for example, example.com or subdomain.example.com .
Add your DNS records at your domain registrar
After you've mapped your service to a custom domain in Cloud Run,
you must update your DNS records at your domain registrar. As a convenience,
Cloud Run generates and displays the DNS records you must enter. You
must add these records that point to the Cloud Run service at your
domain registrar for the mapping to go into effect.
If you're using Cloud DNS as your DNS provider, see Adding a
record .
Note: Some third-party CDN providers might inadvertently intercept validation
requests, preventing them from reaching the Cloud Run service and causing
the domain mapping to fail or its certificate to fail to renew. For example,
if you are using Cloudflare CDN, you must turn off the " Always use https "
option in the " Edge Certificates " tab of the SSL/TLS tab.
Retrieve the DNS record information for your domain mappings using the following:
Console
Go to the Cloud Run domain mappings page:
Domain mappings page
Click the three-dot vertical ellipse icon to the right of your service,
then click DNS RECORDS to display all the DNS records:
gcloud
gcloud beta run domain-mappings describe --domain [ DOMAIN ]
Replace [DOMAIN] with your custom domain, for example, example.com or
subdomain.example.com .
You need all of the records returned under the heading resourceRecords .
Sign in to your account at your domain registrar and then open the DNS
configuration page.
Locate the host records section of your domain's configuration page and
then add each of the resource records that you received when you mapped
your domain to your Cloud Run service.
When you add each of the previous DNS records to the account at the DNS provider:
Select the type returned in the DNS record in the previous step: A , or AAAA ,
or CNAME .
Use the name www to map to www.example.com .
Use the name @ to map example.com .
Save your changes in the DNS configuration page of your domain's account.
In most cases, it takes only a few minutes for these changes to take effect, but
in some cases it can take up to several hours, depending on the registrar and
the Time-To-Live (TTL) of any
previous DNS records for your domain. You can use a
dig tool, such as
the online dig version ,
to confirm the DNS records have been successfully updated.
Test for success by browsing to your service at its new URL, for
example, https://www.example.com . It can take several minutes for
the managed SSL certificate to be issued.
Add verified domain owners to other users or service accounts
When a user verifies a domain, that domain is only verified
to that user's account. This means that only that user can add more domain
mappings that use that domain. So, to enable other users to add mappings that
use that domain, you must add them as verified owners.
Note: A verified domain owner can override existing domain mappings from
other projects after confirmation.
If you need to add verified owners of your domain to other users or
service accounts, you can add permission through the Search Console page:
Navigate to the following address in your web browser:
https://search.google.com/search-console/welcome
Under Properties , click the domain that you want to add a user or service
account to.
Go to the Verified owners list, click Add an owner , and
then enter a Google Account email address or service account ID.
To view a list of your service accounts, open the Service Accounts
page in the Google Cloud console:
Go to Service Accounts page
Delete a Cloud Run domain mapping
You can use the Google Cloud console or the gcloud CLI to delete
a domain mapping.
Console
Open the Domain mappings page in the Google Cloud console:
Domain mappings page
In the Domain mappings page, select the domain mapping that you want
to delete and click Delete .
gcloud
Delete the domain mapping:
gcloud beta run domain-mappings delete --domain DOMAIN
Replace DOMAIN with your custom domain, for example, example.com
or subdomain.example.com .
Map a custom domain using Firebase Hosting
Note: Firebase Hosting is not covered by Google Cloud Terms of Service .
See Terms of Service for Firebase Services .
With this option, you configure Firebase Hosting
in front of your Cloud Run service and connect a domain to Firebase
Hosting.
Using Firebase Hosting has a low price and optionally lets you host and
serve static content alongside the dynamic content served by your
Cloud Run service.
To map a custom domain using Firebase Hosting:
Add Firebase to your Google Cloud project .
Install the Firebase CLI .
In a folder different from the source code of your service, create a
firebase.json file with the following content:
{
"hosting" : {
"rewrites" : [{
"source" : "**" ,
"run" : {
"serviceId" : " SERVICE_NAME " ,
"region" : " REGION "
}
}]
}
}
Replace SERVICE_NAME and REGION with the name and
region of your Cloud Run service.
Deploy the Firebase Hosting configuration:
firebase deploy --only hosting --project PROJECT_ID
Connect a custom domain to Firebase Hosting .
Read more about Firebase Hosting and Cloud Run .
Using custom domains with authenticated services
Authenticated services are protected by IAM .
Such Cloud Run services require client authentication that
declares the intended recipient of a request at credential-generation time (the
audience ).
Audience is usually the full URL of the target service, which by default for
Cloud Run services is a generated URL ending in
run.app .
If you use a custom domain, however, you can configure a custom audience
so that your service accepts your custom domain as a valid audience.
What's next
Learn how to secure your Cloud Run services .
To set up a custom domain for Cloud Run by using a global external Application Load Balancer,
see Set up a global external Application Load Balancer with Cloud Run .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
