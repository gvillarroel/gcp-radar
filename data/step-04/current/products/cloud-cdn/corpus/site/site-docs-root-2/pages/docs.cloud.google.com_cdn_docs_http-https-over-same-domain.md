---
title: "Deliver secure and non-secure content over the same hostname \_|\_ Cloud CDN\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/cdn/docs/http-https-over-same-domain
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/cdn/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/cdn/docs/http-https-over-same-domain
  title: "Deliver secure and non-secure content over the same hostname \_|\_ Cloud\
    \ CDN \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud CDN
Guides
Send feedback
Deliver secure and non-secure content over the same hostname
Stay organized with collections
Save and categorize content based on your preferences.
It is common to deliver HTTP and HTTPS content over the same hostname when using
Cloud CDN. While many browsers enforce the use of Transport Layer
Security (TLS) and disallow non-secure content delivery, there are still use
cases where non-secure delivery and secure delivery must be allowed over the
same hostname. This article discusses how you can achieve this functionality
using Cloud CDN.
Challenge
When a client is establishing a connection with a CDN edge server, the end-user
delivery protocol is negotiated. Most conventional CDN platforms direct traffic
to their respective delivery footprint by:
Pointing to a domain name belonging to the CDN, using a DNS CNAME record.
Routing traffic to a subset of servers that support TLS negotiation for that
domain name.
Because Cloud CDN integrates with Cloud Load Balancing, Cloud CDN's
approach differs from the approach of conventional CDNs. Cloud CDN leverages the
Anycast IP address of the external Application Load Balancer. When configuring Cloud CDN,
you have a specific IP address to direct traffic to. This requires an A
record (for IPv4) and/or AAAA (for IPv6) record construct in your DNS record,
rather than a CNAME record with a hostname value.
By default, when configuring the frontend of the load balancer,
Google Cloud dynamically assigns an ephemeral IP address. Because you need
to configure your HTTP and HTTPS configurations separately, this can cause you
to have two IP addresses for your Cloud CDN instance. Because the same
A or AAAA record IP address is for both HTTP and HTTPS, it's not possible to
properly handle this case in DNS.
Solution
When delivering both secure and non-secure content over the same hostname, the
client is directed to an edge server that can negotiate either HTTP or HTTPS. To
make this work with Cloud CDN, you can reserve an IP address and bind the
reserved IP address to both the HTTP and HTTPS frontend configuration in the
external Application Load Balancer.
HTTP and HTTPS over the same domain
In the diagram:
incoming requests for www.example.com come from clients using HTTP/2,
HTTPS, and HTTP.
Two IP addresses are reserved, one for IPv4 and one for IPv6:
34.95.111.204
[2600:1901:0:b13e::]
These two IP addresses are bound to www.example.com in Cloud DNS.
When configuring the external Application Load Balancer, the frontend
configuration includes four forwarding rules that use the reserved IP addresses:
Name
Protocol
IP:Port
ipv4-http
HTTP
34.95.111.204:80
ipv4-https
HTTPS
34.95.111.204:443
ipv6-http
HTTP
[2600:1901:0:b13e::]:80
ipv6-https
HTTPS
[2600:1901:0:b13e::]:443
For Cloud CDN cache misses, the load balancer distributes requests to
the backend origins, based on settings defined in the load balancer's URL map.
Step 1: Reserve a global external IP address
Create an IPv4 or an IPv6 address (or both). To support IPv4 and IPv6
addressing, you must create one IPv4 address and one IPv6 address.
In your DNS record,create an A (or AAAA) record to direct traffic to this
reserved IP address.
Console
Note: For global external Application Load Balancers, the Google Cloud console isn't supported.
In the Google Cloud console, go to the External IP addresses page.
Go to the External IP addresses page
Click Reserve static address to reserve an IPv4 address.
Assign a Name of ipv4-address .
Set the Network tier to Premium .
Set the IP version to IPv4 .
Set the Type to Global .
Click Reserve .
The load balancer uses Premium Tier
networking , as required when
Cloud CDN is enabled.
gcloud
gcloud compute addresses create ipv4-address \
--network-tier=PREMIUM \
--ip-version=IPV4 \
--global
Note the IPv4 address that was reserved:
gcloud compute addresses describe lb-ipv4-1 \
--format="get(address)" \
--global
Repeat this step for IPv6.
For more information, see
Reserving a new static external IP
address .
Step 2: Bind the reserved IP address to the load balancer
This section shows how to assign the IP address(es) to your load balancer.
End-to-end instructions for setting up the load balancer are beyond the scope of
this article. For an example setup, see
Creating an HTTPS load balancer .
The frontend configuration section allows you to select the protocol used
between the client and the load balancer.
In this example, you are using both HTTP and HTTPS between the client and
the load balancer, so you need one or more SSL certificate resources to
configure the proxy.
Console
Note: For global external Application Load Balancers, the Google Cloud console isn't supported.
Configuring the HTTP forwarding rule
In the Google Cloud console, go to the Load balancing page.
Go to the Load balancing page
Select your load balancer and click Edit .
In the left panel, click Frontend configuration .
In the Name field, enter ipv4-http .
In the Protocol field, select HTTP .
Set IP version to IPv4 .
In IP address , select ipv4-address , which you created earlier.
Ensure that the Port is set to 80 , to allow HTTP traffic.
Click Done .
Configuring the HTTPS forwarding rule
In the Google Cloud console, go to the Load balancing page.
Go to the Load balancing page
Select your load balancer and click Edit .
In the left panel, click Frontend configuration .
In the Name field, enter ipv4-https .
In the Protocol field, select HTTPS .
Set IP version to IPv4 .
In IP address , select ipv4-address , which you created earlier.
Ensure that the Port is set to 443 , to allow HTTP traffic.
For Choose certificate repository , select Use certificate map
or Use classic certificates .
Depending on your selection, select a certificate map or a classic certificate.
Click Done .
Repeat these steps for IPv6.
Review and finalize
In the left panel, click Review and finalize .
Compare your settings to what you intended to create.
If everything looks correct, click Update .
gcloud
Create a target HTTP proxy to route requests to your URL map.
gcloud compute target-http-proxies create http-lb-proxy \
--url-map=web-map
Create a target HTTPS proxy to route requests to your URL map. The
proxy is the portion of the load balancer that holds the SSL certificate
for HTTPS Load Balancing, so you also load your certificate in this step.
gcloud compute target-https-proxies create https-lb-proxy \
--url-map=web-map --ssl-certificates=www-ssl-cert
Create two global forwarding rules to route incoming requests to
the proxy, one for each of the IP address(es) you created.
For a global external Application Load Balancer, use the
gcloud CLI command with load-balancing-scheme=EXTERNAL_MANAGED . This
setting offers advanced traffic
management capability .
For an classic Application Load Balancer, use load-balancing-scheme=EXTERNAL .
gcloud compute forwarding-rules create ipv4-http \
--load-balancing-scheme= LOAD_BALANCING_SCHEME \
--network-tier=PREMIUM \
--address=ipv4-address \
--global \
--target-http-proxy=http-lb-proxy \
--ports=80
gcloud compute forwarding-rules create ipv4-https \
--load-balancing-scheme= LOAD_BALANCING_SCHEME \
--network-tier=PREMIUM \
--address=ipv4-address \
--global \
--target-https-proxy=https-lb-proxy \
--ports=443
After creating the global forwarding rules, it can take several minutes for
your configuration to propagate worldwide.
Step 3: Create an A or AAAA record in your DNS zone file
The last step in the process is creating an A and/or AAAA record in your DNS zone
file to point to Cloud CDN where your hostname value will answer with the
reserved IP address(es) that you assigned on the load balancer.
Now, you can serve both HTTP and HTTPS over the same hostname through Cloud CDN.
Optional: Redirecting HTTP to HTTPS
If you want to redirect HTTP requests to your HTTPS load balancer, you must add
a partial HTTP load balancer that has a frontend but no backends. The frontend
receives requests and then redirects them to the HTTPS load balancer. It does
this by using the following:
A forwarding rule with the same reserved external IP address that your HTTPS
load balancer uses, as shown on this page.
A target HTTP proxy, as shown on this page.
A URL map that
redirects traffic to the HTTPS load balancer .
Getting support
If you have questions about Google Cloud and Cloud CDN, contact
your Google Cloud Sales team or reach out via the Google Cloud
Community Slack channel
and post a note in the #cloud-cdn channel.
What's next?
For details about what content is cached, see Caching
details .
For resolving load balancer issues, see the load balancer troubleshooting
page .
For resolving Cloud CDN issues, see the Cloud CDN
troubleshooting page .
For information about using Cloud CDN in GKE,
see Cloud CDN on the Ingress features
page .
To check whether Cloud CDN is
serving responses from cache, View logs .
Clean up the load balancer setup .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
