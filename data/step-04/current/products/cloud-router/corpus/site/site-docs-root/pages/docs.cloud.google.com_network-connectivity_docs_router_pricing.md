---
title: Network Connectivity pricing | Google Cloud
url: https://docs.cloud.google.com/network-connectivity/docs/router/pricing
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/router
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/router/pricing
  title: Network Connectivity pricing | Google Cloud
  fetched_via: http_bfs
  content_scope: document
  content_type: text/html; charset=utf-8
  status_code: 200
---

Network Connectivity pricing | Google Cloud
Page Contents
Network Connectivity pricing
This page describes pricing for all Network Connectivity products.
Cloud VPN pricing
At a high level, your Cloud VPN charges consist of the following:
An hourly charge for each Cloud VPN gateway; this charge is determined partly by the number of tunnels attached to the gateway, as well as the location of the gateway
A monthly charge for IPsec traffic
An hourly charge for any external IP address assigned to a VPN gateway but not used by a tunnel
For more information about Cloud VPN, see the Cloud VPN overview.
Note: Only VPN tunnels in certain tunnel states are billed.
Pricing table
To view pricing, select the location of the Cloud VPN gateway. Except where otherwise noted, all details apply to both Classic VPN and HA VPN.
Iowa (us-central1)
Johannesburg (africa-south1)
Taiwan (asia-east1)
Hong Kong (asia-east2)
Tokyo (asia-northeast1)
Osaka (asia-northeast2)
Seoul (asia-northeast3)
Mumbai (asia-south1)
Delhi (asia-south2)
Singapore (asia-southeast1)
Jakarta (asia-southeast2)
Bangkok (asia-southeast3)
Sydney (australia-southeast1)
Melbourne (australia-southeast2)
Warsaw (europe-central2)
Finland (europe-north1)
Stockholm (europe-north2)
Madrid (europe-southwest1)
Belgium (europe-west1)
Berlin (europe-west10)
Turin (europe-west12)
London (europe-west2)
Frankfurt (europe-west3)
Netherlands (europe-west4)
Zurich (europe-west6)
Milan (europe-west8)
Paris (europe-west9)
Doha (me-central1)
Dammam (me-central2)
Tel Aviv (me-west1)
Montreal (northamerica-northeast1)
Toronto (northamerica-northeast2)
Mexico (northamerica-south1)
Sao Paulo (southamerica-east1)
Santiago (southamerica-west1)
Iowa (us-central1)
Oklahoma (us-central2)
South Carolina (us-east1)
Northern Virginia (us-east4)
Columbus (us-east5)
Alabama (us-east7)
Dallas (us-south1)
Oregon (us-west1)
Los Angeles (us-west2)
Salt Lake City (us-west3)
Las Vegas (us-west4)
Phoenix (us-west8)
Hourly Hourly
Monthly Monthly
Component billed
Price (USD)
Hourly charge for each tunnel attached to the gateway.
HA VPN only: For 99.99% availability, you must configure two tunnels, or, if working with an AWS peer gateway, four tunnels.
$0.05 / 1 hour IPsec traffic
You are charged as follows:
If the Cloud VPN tunnel connects to another Cloud VPN gateway, you are charged data transfer pricing as described in VM-VM data transfer pricing within Google Cloud . Data transfer pricing is based on the IP addresses of the destination VPN gateway—not the destination VM address.
If the source and destination Cloud VPN gateways are in the same Google Cloud region, data transfer is billed as traffic between zones in the same region.
If the Cloud VPN tunnel connects to a VPN gateway outside of Google Cloud, you are charged as described in Internet data transfer out rates .
External IP address for VPN gateway
You are charged as described in IP address pricing .
An external IP address is charged only if it is not being used by a VPN tunnel.
Google does not charge for forwarding rules that send traffic to the VPN gateway.
If you pay in a currency other than USD, the prices listed in your currency on Cloud Platform SKUs apply.
Pricing scenarios
For help understanding Cloud VPN pricing, refer to the following examples.
us-central1 gateway to data center
Suppose you have a VPN gateway in us-central1. That gateway uses two tunnels to connect with an on-premises data center in Iowa.
Each month, you send 2 tebibytes (TiB) of data through the tunnel, from your Virtual Private Cloud (VPC) network to your data center. At the same time, you send 2 TiB in the other direction—from the data center to your VPC network.
Additionally, your gateway uses a reserved external IP address.
The following table shows the charges that you'd incur during a 30-day month with this setup.
Gateway
Data transfer
Data transfer in
IP address
Total
us-central1 gateway ($0.050) x 2 tunnels x 720 hours = $72.00
2 TiB (or 2,048 GiB) x $0.11 = $225.28
No charge for data transfer in
No charge for a reserved external IP address that is used by a tunnel
$297.28
asia-northeast1 gateway to data center and another VPC network
Suppose your project has a VPC network called Network A, which includes a VPN gateway in asia-northeast1. This gateway uses two tunnels to connect with an on-premises data center in Tokyo. Additionally, this gateway uses two tunnels to connect with Network B, another VPC network in your project. Network B's gateway is located in europe-west6.
Each month, your data usage is as follows:
Users in Network A download 10 TiB of data from Cloud Storage and send it to the Tokyo data center.
Networks A and B send each other about 20 TiB of data.
Both the asia-northeast1 and europe-west6 gateways use reserved external IP addresses.
Additionally, you have a third VPN gateway in southamerica-east1. You created this gateway several months ago and assigned it a reserved external IP address. However, you never set up a tunnel for this gateway.
The following table shows the charges that this setup would incur during a 30-day month.
Gateway
Data transfer
Data transfer in
IP address
Total
asia-northeast1 gateway ($0.075), with four tunnels x 720 hours = $216.00
Traffic to the data center: 10 TiB (or 10,240 GiB) x $0.14 = $1,433.60
No charge for data transfer in.
No charge for a reserved external IP address that is used by a tunnel.
$3,288.00
Traffic to Network B: 20 TiB (or 20,480 GiB) x $0.08 = $1,638.40
No charge for data transfer in.
europe-west6 gateway ($0.065) x 2 tunnels x 720 hours = $93.60
Traffic to Network A: 20 TiB (or 20,480 GiB) x $0.08 = $1,638.40
No charge for data transfer in.
No charge for a reserved external IP address that is used by a tunnel.
$1,732.00
southamerica-east1 gateway ($0.075) x 0 tunnels x 720 hours = no charge
No data transfer out
No charge for data transfer in.
One unused external IP address in southamerica-east1 ($0.015) x 720 hours = $10.80.
$10.80
Grand total
$5,030.80
Cloud Interconnect pricing
This document explains Cloud Interconnect pricing details.
If you pay in a currency other than USD, the prices listed in your currency on Cloud Platform SKUs apply.
Dedicated Interconnect
Google charges you on an hourly basis for both Cloud Interconnect connections and VLAN attachments. The hourly charge for each resource, either Cloud Interconnect connection or VLAN attachment, is charged to the project that owns the resource.
Data transfer from your Virtual Private Cloud (VPC) networks through your Cloud Interconnect connections is discounted compared to general network pricing for Google Cloud . Data transfer out pricing depends on the number of gibibytes (GiB) transferred and the location of your Cloud Interconnect connection.
This discounted pricing applies only to traffic that originates in the region where the VLAN attachment is located. You can use VLAN attachments to access services located in a different region than the VLAN attachment. In this case, you are charged standard cross-region rates for traffic between the region where the VLAN attachment is located and the region where the service is located.
Cloud Interconnect data transfer out charges accrue to the project that owns the VLAN attachment. The project that owns the Cloud Interconnect connection is not billed for the data transfer. Specifically, costs for data transfer from a VLAN attachment in a Shared VPC service project, which travels through a Cloud Interconnect connection in a different host project, are attributed to the service project.
For HA VPN over Cloud Interconnect deployments, you are charged for your Dedicated Interconnect connections, VLAN attachments, HA VPN tunnels, and regional external IP addresses, if an IP address is assigned to a VPN gateway but not used by a tunnel.
In terms of HA VPN over Cloud Interconnect data transfer, you are charged only for Cloud Interconnect data transfer out. You are not charged for Cloud VPN data transfer.
For more information, see Cloud VPN pricing .
Pricing tables
Dedicated Interconnect pricing
Hourly Hourly
Monthly Monthly
Resource
Price (USD)
Cloud Interconnect connection 10-Gbps circuit
$2.328 / 1 hour Cloud Interconnect connection 100-Gbps circuit
$23.28 / 1 hour 50-, 100-, 200-, 300-, 400-, or 500-Mbps VLAN attachment
$0.10 / 1 hour 1-, 2-, 5-, or 10-Gbps VLAN attachment
$0.10 / 1 hour 20-Gbps VLAN attachment
$0.20 / 1 hour 50-Gbps VLAN attachment
$0.50 / 1 hour 100-Gbps VLAN attachment
$1.00 / 1 hour
Application awareness on Dedicated Interconnect pricing
Hourly Hourly
Monthly Monthly
Cloud Interconnect connection
Application awareness price
10-Gbps
$0.3492 / 1 hour 100-Gbps
$3.492 / 1 hour
Data transfer from a VPC network through a Cloud Interconnect connection
North America
The following table shows the prices for the North America geographic area.
Connection location
Region of VLAN attachment
Price (USD)
United States, Canada
United States, Canada
$0.02 / 1 gibibyte Mexico
United States, Canada
$0.1107 / 1 gibibyte
Europe, Middle East, and Africa (EMEAR)
﻿ The following table shows the prices for the Europe, Middle East, and Africa (EMEAR) geographic area.
Connection location
Region of VLAN attachment
Price (USD)
Europe
Europe
$0.02 / 1 gibibyte Middle East
Europe
$0.10 / 1 gibibyte Africa
Europe
$0.11 / 1 gibibyte Middle East
Middle East
$0.09 / 1 gibibyte Europe
Middle East
$0.10 / 1 gibibyte Africa
Africa
$0.11 / 1 gibibyte
Asia
﻿ The following table shows the prices for the Asia geographic area.
Connection location
Region of VLAN attachment
Price (USD)
Asia*
Asia*
$0.042 / 1 gibibyte Indonesia
Asia*
$0.0594 / 1 gibibyte Indonesia
Indonesia
$0.0484 / 1 gibibyte Asia*
Indonesia
$0.0594 / 1 gibibyte Manila
Indonesia
$0.1306 / 1 gibibyte India
India
$0.045 / 1 gibibyte
﻿ * Includes all of Asia except China, India, Indonesia, and the Philippines.
Australia
The following table shows the prices for the Australia geographic area.
Connection location
Region of VLAN attachment
Price
Australia
Australia
$0.042 / 1 gibibyte
South America
The following table shows the prices for the South America geographic area.
Connection location
Region of VLAN attachment
Price
South America
South America
$0.11 / 1 gibibyte South America
United States
$0.1107 / 1 gibibyte
Inbound data transfer through a Cloud Interconnect connection
Traffic type
Price
Data transfer in
Google does not charge for inbound data transfer. However, there might be a charge for resources that process the transferred data. For a list of these resources, see the VPC section of All networking pricing .
Responses to requests count as outbound data transfer traffic and are charged.
Pricing example
The following table shows an example usage pattern of Dedicated Interconnect connections for a single month.
Resources
Usage
Estimated cost
Cloud Interconnect connection
capacity 30 Gbps (3 x 10-Gbps circuit)
3 x 10-Gbps circuit x 24 hrs @ $2.328 per hour x 30 days = $5,028.48
Redundant Cloud Interconnect connection
capacity 30 Gbps (3 x 10-Gbps circuit)
3 x 10-Gbps circuit x 24 hrs @ $2.328 per hour x 30 days = $5,028.48
VLAN attachment
6 (one per Cloud Interconnect connection circuit)
6 x 10-Gbps attachment x 24 hrs @ $0.10 per hour x 30 days = $432.00
Data transfer (leaving from a Google Cloud region in the United States over a Cloud Interconnect connection in the United States)
20 TiB
20,480 GiB x $0.02 = $409.60
Total cost
$10,898.56
Partner Interconnect
Google charges you on an hourly basis for VLAN attachments, depending on their capacity. The hourly charges are billed to the project that owns the VLAN attachment. Your service provider might also charge you for services such as using their network, which isn't included in your Google Cloud bills. For information about their pricing, contact your service provider.
Data transfer from your VPC networks though your attachments is discounted compared to general network pricing for Google Cloud . Outbound data transfer pricing depends on the number of gibibytes (GiB) transferred and the location of your Cloud Interconnect connection.
This discounted pricing applies only to traffic that originates in the region where the VLAN attachment is located. You can use VLAN attachments to access services located in a different region than the VLAN attachment. In this case, you are charged standard cross-region rates for traffic between the region where the VLAN attachment is located and the region where the service is located.
Cloud Interconnect data transfer out charges accrue to the project that owns the VLAN attachment. The project that owns the Cloud Interconnect connection is not billed for data transfer. Specifically, costs for data transfer traffic from a VLAN attachment in a Shared VPC service project, which travels through a Cloud Interconnect connection in a different host project, are attributed to the service project.
For HA VPN over Cloud Interconnect deployments, you are charged for your VLAN attachments, HA VPN tunnels, and regional external IP addresses, if an address is assigned to a VPN gateway but not used by a tunnel.
In terms of HA VPN over Cloud Interconnect data transfer, you are charged only for Cloud Interconnect outbound data transfer. You are not charged for Cloud VPN data transfer.
For more information, see Cloud VPN pricing .
Pricing tables
Partner Interconnect pricing
Hourly Hourly
Monthly Monthly
Partner VLAN attachment capacity
Price (USD)
50 Mbps
$0.05417 / 1 hour 100 Mbps
$0.0625 / 1 hour 200 Mbps
$0.08333 / 1 hour 300 Mbps
$0.1111 / 1 hour 400 Mbps
$0.1389 / 1 hour 500 Mbps
$0.1736 / 1 hour 1 Gbps
$0.2778 / 1 hour 2 Gbps
$0.5694 / 1 hour 5 Gbps
$1.25 / 1 hour 10 Gbps
$2.36 / 1 hour 20 Gbps
$3.61 / 1 hour 50 Gbps
$9.02 / 1 hour
Data transfer from a VPC network through a Cloud Interconnect connection
North America
The following table shows the prices for the North America geographic area.
Connection location
Region of VLAN attachment
Price (USD)
United States, Canada
United States, Canada
$0.02 / 1 gibibyte Mexico
United States, Canada
$0.1107 / 1 gibibyte
Europe, Middle East, and Africa (EMEAR)
The following table shows the prices for the Europe, Middle East, and Africa (EMEAR) geographic area.
Connection location
Region of VLAN attachment
Price (USD)
Europe
Europe
$0.02 / 1 gibibyte Middle East
Europe
$0.10 / 1 gibibyte Africa
Europe
$0.11 / 1 gibibyte Middle East
Middle East
$0.09 / 1 gibibyte Europe
Middle East
$0.10 / 1 gibibyte Africa
Africa
$0.11 / 1 gibibyte
Asia
The following table shows the prices for the Asia geographic area.
Connection location
Region of VLAN attachment
Price (USD)
Asia*
Asia*
$0.042 / 1 gibibyte Indonesia
Asia*
$0.0594 / 1 gibibyte Indonesia
Indonesia
$0.0484 / 1 gibibyte Asia*
Indonesia
$0.0594 / 1 gibibyte Manila
Indonesia
$0.1306 / 1 gibibyte India
India
$0.045 / 1 gibibyte
* Includes all of Asia except China, India, Indonesia, and the Philippines.
Australia
The following table shows the prices for the Australia geographic area.
Connection location
Region of VLAN attachment
Price (USD)
Australia
Australia
$0.042 / 1 gibibyte
South America
The following table shows the prices for the South America geographic area.
Connection location
Region of VLAN attachment
Price (USD)
South America
South America
$0.11 / 1 gibibyte South America
United States
$0.1107 / 1 gibibyte
Inbound data transfer through a Cloud Interconnect connection
Traffic type
Price (USD)
Data transfer in
Google does not charge for inbound data transfer. However, there might be a charge for resources that process the transferred data. For a list of these resources, see the VPC section of All networking pricing .
Responses to requests count as outbound data transfer traffic and are charged.
Pricing example
The following table shows an example usage pattern of Partner Interconnect connections for a single month.
Resources
Usage
Estimated cost
VLAN attachment
6 100-Mbps attachments
6 x $0.0625 x 720 hours = $270.00
Data transfer out (leaving from a Google Cloud region in the United States over a Cloud Interconnect connection in the United States)
20 TiB
20,480 GiB x $0.02 = $409.60
Total cost
$679.60
Cross-Cloud Interconnect
Google charges you on an hourly basis for both Cross-Cloud Interconnect connections and VLAN attachments. The hourly charge for each resource, either Cross-Cloud Interconnect connection or VLAN attachment, is charged to the project that owns the resource.
Data transfer from your Virtual Private Cloud (VPC) networks through your Cross-Cloud Interconnect connections is discounted compared to general network pricing for Google Cloud . Data transfer pricing depends on the number of gibibytes (GiB) transferred and the location of your Cross-Cloud Interconnect connection.
This discounted pricing applies only to traffic that originates in the region where the VLAN attachment is located. You can use VLAN attachments to access services located in a different region than the VLAN attachment. In this case, you are charged standard cross-region rates for traffic between the region where the VLAN attachment is located and the region where the service is located.
Cross-Cloud Interconnect data transfer out charges accrue to the project that owns the VLAN attachment. The project that owns the Cloud Interconnect connection is not billed for data transfer. Specifically, costs for data transfer from a VLAN attachment in a Shared VPC service project, which travels through a Cloud Interconnect connection in a different host project, are attributed to the service project.
For HA VPN over Cloud Interconnect deployments, you are charged for your Cross-Cloud Interconnect connections, VLAN attachments, HA VPN tunnels, and regional external IP addresses, if an IP address is assigned to a VPN gateway but not used by a tunnel.
In terms of HA VPN over Cloud Interconnect data transfer out, you are charged only for Cloud Interconnect data transfer. You are not charged for Cloud VPN data transfer.
For more information, see Cloud VPN pricing .
Pricing tables
Cross-Cloud Interconnect pricing
Hourly Hourly
Monthly Monthly
Resource
Price (USD)
Cross-Cloud Interconnect connection
$5.60 / 1 hour Cross-Cloud Interconnect connection
$30.00 / 1 hour A 50-, 100-, 200-, 300-, 400-, or 500-Mbps VLAN attachment
$0.10 / 1 hour A 1-, 2-, 5-, or 10-Gbps VLAN attachment
$0.10 / 1 hour A 20-Gbps VLAN attachment
$0.20 / 1 hour A 50-Gbps VLAN attachment
$0.50 / 1 hour A 100-Gbps VLAN attachment
$1.00 / 1 hour
Application awareness on Cross-Cloud Interconnect pricing
Hourly Hourly
Monthly Monthly
Cloud Interconnect connection
Application awareness price
10-Gbps
$0.3492 / 1 hour 100-Gbps
$3.492 / 1 hour
Data transfer from a VPC network through a Cloud Interconnect connection
North America
The following table shows the prices for the North America geographic area.
Connection location
Region of VLAN attachment
Price (USD)
United States, Canada
United States, Canada
$0.02 / 1 gibibyte Mexico
United States, Canada
$0.1107 / 1 gibibyte
Europe, Middle East, and Africa (EMEAR)
The following table shows the prices for the Europe, Middle East, and Africa (EMEAR) geographic area.
Connection location
Region of VLAN attachment
Price (USD)
Europe
Europe
$0.02 / 1 gibibyte Middle East
Europe
$0.10 / 1 gibibyte Africa
Europe
$0.11 / 1 gibibyte Middle East
Middle East
$0.09 / 1 gibibyte Europe
Middle East
$0.10 / 1 gibibyte Africa
Africa
$0.11 / 1 gibibyte
Asia
The following table shows the prices for the Asia geographic area.
Connection location
Region of VLAN attachment
Price (USD)
Asia*
Asia*
$0.042 / 1 gibibyte Indonesia
Asia*
$0.0594 / 1 gibibyte Indonesia
Indonesia
$0.0484 / 1 gibibyte Asia*
Indonesia
$0.0594 / 1 gibibyte Manila
Indonesia
$0.1306 / 1 gibibyte India
India
$0.045 / 1 gibibyte
* Includes all of Asia except China, India, Indonesia, and the Philippines.
Australia
The following table shows the prices for the Australia geographic area.
Connection location
Region of VLAN attachment
Price (USD)
Australia
Australia
$0.042 / 1 gibibyte
South America
The following table shows the prices for the South America geographic area.
Connection location
Region of VLAN attachment
Price (USD)
South America
South America
$0.11 / 1 gibibyte South America
United States
$0.1107 / 1 gibibyte
Inbound data transfer through a Cloud Interconnect connection
Traffic type
Price (USD)
Data transfer in
Google does not charge for inbound data transfer. However, there might be a charge for resources that process the transferred data. For a list of these resources, see the VPC section of All networking pricing .
Responses to requests count as outbound data transfer traffic and are charged.
Pricing example
The following table shows an example usage pattern of Cross-Cloud Interconnect connections for a single month.
Resources
Usage
Estimated cost
Cross-Cloud Interconnect connection
capacity 10 Gbps (1 x 10-Gbps circuit)
1 x 10-Gbps circuit x 24 hrs @ $5.60 per hour x 30 days = $4,032
Redundant Cross-Cloud Interconnect connection
capacity 10 Gbps (1 x 10-Gbps circuit)
1 x 10-Gbps circuit x 24 hrs @ $5.60 per hour x 30 days = $4,032
VLAN attachment
2 (one per Cloud Interconnect connection circuit)
2 x 10-Gbps attachment x 24 hrs @ $0.10 per hour x 30 days = $144.00
Data transfer (leaving from a Google Cloud region in the United States over a Cloud Interconnect connection in the United States)
200 TiB
204,800 GiB x $0.02 = $4,096.00
Total cost
$12,304
Cross-Site Interconnect pricing
Google charges you on an hourly basis for Cross-Site Interconnect connections. The hourly charge for those resources is charged to the project that owns the resource.
Pricing tables
Cross-Site Interconnect pricing
Hourly Hourly
Monthly Monthly
Resource
Price (USD)
Cross-Site Interconnect connection: per 10-Gbps circuit
$2.328 / 1 hour Cross-Site Interconnect connection: per 100-Gbps circuit
$23.28 / 1 hour
Note: Hourly wire charges apply on top of the Interconnect connection, and they depend on the source/destination locations of the wire and the wire size. To request wire pricing, contact your account team.
Pricing scenarios
This section describes different pricing scenarios for how Google Cloud calculates pricing for Cloud Interconnect outbound data transfer; that is, when a virtual machine (VM) instance or a non-VM Google Cloud product or service sends traffic to your on-premises location over a VLAN attachment located in the same or different geographical location:
A VM in the same region as a VLAN attachment, using either regional or global VPC dynamic routing
A VM in the same continent but different region than a VLAN attachment, using global VPC dynamic routing
A VM in a different continent than a VLAN attachment, using global VPC dynamic routing
A VM in a different continent than a VLAN attachment, using VPC Network Peering
A non-VM Google Cloud product or service in a different location than a VLAN attachment, using global VPC dynamic routing
Note: You have to pay standard inter-region charges for traffic between the region of the VM and the region of the VLAN attachment, which is more if they are in different continents. This applies to non-VM traffic as well.
For more information about costs for each scenario, including data transfer charges between regions within a continent and between continents, see General network pricing .
A VM in the same region as a VLAN attachment, using either regional or global VPC dynamic routing
Note: The dynamic routing mode that you use does not impact the pricing.
In this scenario, there are two regions within North America, us-west1 and us-east1. These regions use VPC regional dynamic routing provided by Cloud Router. In this scenario, it doesn't matter which dynamic routing mode you use.
VM in same continent, regional routing (click to enlarge). Cloud Interconnect data transfer charges for North America. No region-to-region data transfer charges.
You order a Cloud Interconnect connection running from your on-premises location to San Jose (SJC) and create two VLAN attachments over that connection. One VLAN attachment goes to region us-east1, and the other VLAN attachment goes to region us-west1.
If you send traffic from a VM in us-east1 or from a VM in us-west1 to your on-premises location over your Cloud Interconnect connection in SJC, you are charged the following rates:
Cloud Interconnect data transfer out charges for North America (because that is where the Cloud Interconnect connection is located).
You are not charged region-to-region data transfer charges because the VMs are using a VLAN attachment in the same region.
Note: Unless you enable global dynamic routing for your VPC network by using Cloud Router, your regions without a VLAN attachment have no access to your Cloud Interconnect connection. This also means that you can't accidentally incur intercontinental data transfer charges if you have regions located on different continents.
A VM in the same continent but different region than a VLAN attachment, using global VPC dynamic routing
In this scenario, you have VMs in two regions located in North America, us-west1 and us-east1. You have enabled global dynamic routing for your VPC network by using Cloud Router. Global dynamic routing enables VLAN attachments in one region to be used by one or more VMs located in another region.
VM in same continent, global dynamic routing (click to enlarge). Region-to-region data transfer charges from us-east1 to us-west1. Cloud Interconnect data transfer charges for North America from us-west1 to on-premises.
You order a Cloud Interconnect connection running from your on-premises location to San Jose (SJC) and create one VLAN attachment over that connection to us-west1. You then send traffic from a VM in us-east1 to your on-premises location through the VLAN attachment located in us-west1. You are then charged the following rates:
Region-to-region data transfer charges for forwarding traffic from us-east1 to the VLAN attachment in us-west1. The VLAN attachment in us-west1 is considered the source of traffic.
Cloud Interconnect data transfer charges for North America for traffic from region us-west1 to your on-premises location.
A VM in a different continent than a VLAN attachment, using global VPC dynamic routing
This scenario is the same as the preceding example, except that one region, us-west1, is located in North America, and the other region, asia-east1, is located in Asia. Sending traffic between regions on different continents results in more expensive inter-region data transfer rates.
VM in a different continent, global dynamic routing (click to enlarge). Intercontinental region-to-region data transfer charges for traffic forwarded from asia-east1 to us-west1. Cloud Interconnect data transfer charges for North America from us-west1 to on-premises.
The only way to send traffic from asia-east1 over Cloud Interconnect in North America is by enabling VPC global dynamic routing. This makes the VLAN attachment in us-west1 available to VMs in all regions in your VPC network. You are then charged the following rates:
Intercontinental region-to-region data transfer charges for traffic forwarded from asia-east1 to us-west1.
Cloud Interconnect data transfer charges for North America for traffic from region us-west1 to your on-premises location.
A VM in a different continent than a VLAN attachment, using VPC Network Peering
This scenario is similar to the preceding example, except that there are two VPC networks connected through VPC Network Peering. Sending traffic between regions results in the same rates as the preceding example that uses global dynamic routing.
VM in a different continent, VPC Network Peering (click to enlarge). Intercontinental region-to-region data transfer charges for traffic forwarded from us-east4 to asia-northeast1. Cloud Interconnect data transfer charges for Asia from asia-northeast1 to on-premises.
You send traffic from us-east4 to your on-premises network over Cloud Interconnect in Asia by using VPC Network Peering. You are then charged the following rates:
Intercontinental region-to-region data transfer charges for traffic forwarded from us-east4 to asia-northeast1.
Cloud Interconnect data transfer charges for Asia for traffic from region asia-northeast1 to your on-premises location.
A non-VM Google Cloud product or service in a different location than a VLAN attachment, using global VPC dynamic routing
In addition to the preceding scenarios, Cloud Interconnect data transfer charges apply to traffic sent from a Google Cloud product or service that is not a VM to your on-premises location over a VLAN attachment. You pay the product's data transfer charges to reach the region of the VLAN attachment, and then pay the Cloud Interconnect data transfer out charges based on the continent where the Cloud Interconnect connection is located.
Note: For information about data transfer charges for other Google Cloud products not described in this example, see the pricing page for that product.
The following example describes charges for traffic transferring out from a Cloud Storage bucket in a different region in North America than the region where the VLAN attachment is located.
Non-VM in two North American regions, global dynamic routing (click to enlarge). Cloud Storage data transfer charges for traffic forwarded from a Cloud Storage bucket in northamerica-northeast1 to us-west1. Cloud Interconnect data transfer charges for North America from us-west1 to on-premises.
In this scenario, you have resources in two regions located in North America, us-west1 (Oregon) and northamerica-northeast1 (Montreal). You have enabled global dynamic routing for your VPC network by using Cloud Router.
You order a Cloud Interconnect connection running from your on-premises location to San Jose (SJC) and create one VLAN attachment over that connection to us-west1. You then send traffic from a Cloud Storage bucket in northamerica-northeast1 to your on-premises location through the VLAN attachment located in us-west1. You are charged the following rates:
The Cloud Storage data transfer cost for forwarding traffic from a Cloud Storage bucket in northamerica-northeast1 to a VLAN attachment in us-west1.
Cloud Interconnect data transfer charges for North America for traffic from region us-west1 to your on-premises location (because that is where your Cloud Interconnect connection is located).
If the Cloud Storage bucket is located in a different continent than the VLAN attachment, you pay Cloud Storage intercontinental data transfer charges to reach the VLAN attachment in us-west1.
For a full list of pricing scenarios for Cloud Storage, see the Cloud Storage pricing page.
Cloud Router pricing
Cloud Router is provided free of charge. General networking costs apply to control plane (BGP) traffic. In most cases, these costs are negligible.
For more information about networking costs, see General network pricing in the Virtual Private Cloud (VPC) documentation.
Network Connectivity Center pricing
This document describes pricing for Network Connectivity Center.
Network Connectivity Center is a hub-and-spoke model for network connectivity management in Google Cloud. With this model, virtual private cloud networks and on-premises networks connect to a Network Connectivity Center hub by using spokes that have supported Google Cloud spoke resources attached to them.
For more information about Network Connectivity Center, see the Network Connectivity Center overview .
Current pricing
The following sections describe the current pricing for Network Connectivity Center.
Hubs and spokes
The following table describes charges for hubs and spokes. Spoke hours refers to the number of hours within a month that a spoke is active .
Spoke hour charges are waived for up to three VPN spokes and three Cloud Interconnect spokes.
Note : Cloud Interconnect spokes are sometimes referred to as VLAN attachment spokes .
Resource
Price (USD)
Hub
No charge
Spoke hours (Cloud Interconnect, Cloud VPN and Cloud Router appliance spokes)
$0.075 per hour
Spoke hours (VPC and producer VPC spokes)
$0.10 per hour
Advanced Data Networking
Advanced Data Networking (ADN) refers to the data processing fee charged for all traffic that is sent from a spoke through a hub. Charges are attributed to the spoke project that originates the traffic.
The ADN charge is $0.02 per Gibibyte (GiB) per month.
This charge applies for traffic originating from VPC spokes. Traffic that is sent within a VPC network does not incur ADN. ADN charges for traffic originating from hybrid spokes are currently waived. Hybrid spokes are of type Cloud Interconnect, Cloud VPN or Router Appliance.
Data transfer
Site-to-site data transfer refers to any traffic sent from one hybrid endpoint (VPN, Interconnect VLAN attachment, or Router Appliance) to another hybrid endpoint in a different supported cloud region.
These charges apply even if the hybrid endpoint happens to be connected to another network or project in Google Cloud and doesn't actually leave Google's network; for example, if a VPN tunnel connects to another VPC in Google cloud, traffic from that VPN to an Interconnect VLAN attachment is still considered site-to-site data transfer.
We recommend connecting hybrid endpoints together using Network Connectivity Center (NCC), but note that these charges apply even if NCC isn't used. For example, if static routes are configured to send traffic from one hybrid endpoint to another hybrid endpoint then that traffic would still be billed as site-to-site data transfer.
Data transfer charges are based on gibibytes (GiB) of traffic per month.
Item
Price (USD)
Data transfer to worldwide destinations
(excluding Australia)
(USD)
0 gibibyte to 1,024 gibibyte
$0.12 / 1 gibibyte, per 1 month / account
1,024 gibibyte to 10,240 gibibyte
$0.11 / 1 gibibyte, per 1 month / account
10,240 gibibyte and above
$0.08 / 1 gibibyte, per 1 month / account
Data transfer to Australia destinations
(USD)
0 gibibyte to 1,024 gibibyte
$0.19 / 1 gibibyte, per 1 month / account
1,024 gibibyte to 10,240 gibibyte
$0.18 / 1 gibibyte, per 1 month / account
10,240 gibibyte and above
$0.15 / 1 gibibyte, per 1 month / account
Pricing example
Advanced Data Networking
In this example, an enterprise has two Virtual Private Cloud (VPC) global networks, VPC-1 and VPC-2, which it connects via VPC spokes to their Network Connectivity Center hub. Each VPC is in its own project distinct from the hub project. Additionally, there is also a Cloud Interconnect (IC-1) spoke connected to the same hub for on-premise network access.
Each month, VPC-1 sends 10 TiB of data to VPC-2, and VPC-2 sends 5 TiB of data to VPC-1. Each VPC-1 and VPC-2 also send an additional 1 TiB of data to the IC-1 spoke over the same period.
The following table describes the charges for one 30-day month.
Resources
Usage
Formula
Estimated monthly cost
Spoke hour charges
3 spokes
2 x 24 hours x 30 days at $0.10
1 x 24 hours x 30 days at $0.075
$198
Advanced Data Networking charges
10 TiB of data (VPC-1 -> VPC-2)
5 TiB of data (VPC-2 -> VPC-1)
1 TiB of data (VPC-1 -> IC-1)
1 TiB of data (VPC-2 -> IC-1)
10 TiB (10 * 1024 GiB = 10,240 GiB) at $0.02 per GiB
5 TiB (5 * 1024 GiB = 5120 GiB) at $0.02 per GiB
1 TiB (1 * 1024 GiB = 1024 GiB) at $0.02 per GiB
1 TiB (1 * 1024 GiB = 1024 GiB) at $0.02 per GiB
$204.80
+
$102.40
+
$20.48
+
$20.48
Total cost
17 TiB of data
$546.16
Note that both the Spoke hour charges and Advanced Data Networking charges for VPC spokes accrue in their respective projects.
Data transfer
In this example, an enterprise connects two Router appliance spokes to their Network Connectivity Center hub. One spoke represents an office in Los Angeles (us-west2). Another represents an office in Mumbai (asia-south1).
Every month, the US office transfers 5 TiB of data to the Asia office, and the Asia office transfers 5 TiB to the US office.
The following table describes the charges for one 30-day month.
Resources
Usage
Formula
Estimated monthly cost
Spoke hour charges
2 spokes
2 x 24 hours x 30 days at $0.075
$108.00
Data transfer charges
5 TiB of data transferred (Los Angeles -> Mumbai)
5 TiB of data transferred (Mumbai -> Los Angeles)
Total: 10 TiB between one unique site pair.
Advanced Data Networking
10 TiB of data
10 TiB (10 * 1,024 GiB = 10,240 GiB) at $0.02 per GiB
$204.80
Currently waived
Total cost
$1,234.40
Pricing for other Google Cloud resources
The pricing on this page does not include charges for other Google Cloud resources and products that you might be using in conjunction with Network Connectivity Center. For example:
If you use Router appliance spokes, you pay for the underlying Compute Engine resources.
If you use VLAN attachment spokes, you pay for the underlying Cloud Interconnect resources.
If you use VPN spokes, you pay for the underlying Cloud VPN resources.
Router appliance pricing
Pricing for Router appliance is part of Network Connectivity Center pricing. For pricing, see Network Connectivity Center pricing .
For more information about networking costs, see General network pricing in the Virtual Private Cloud documentation.
CDN Interconnect pricing
The special pricing for your traffic egressing from Google Cloud to a CDN provider is automatic. Google works with approved CDN partners in supported locations to allowlist provider IP addresses. This means that any data that you send to your allowlisted CDN provider from Google Cloud is charged at the reduced price. This reduced price applies only to IPv4 traffic. It does not apply to IPv6 traffic.
Traffic between Google Cloud and pre-approved CDN Interconnect locations is billed as follows:
Ingress traffic is free for all regions.
Egress traffic rates apply only to data leaving Compute Engine or Cloud Storage. Egress charges for CDN Interconnect appear on the invoice as Compute Engine Data Transfer Out via Carrier Peering Network .
For inter-region CDN Interconnect traffic rates, see Internet egress rates .
Intra-region pricing for CDN Interconnect applies only to intra-region egress traffic that is sent to Google-approved CDN Interconnect providers at specific locations that Google approves for those providers.
Consult with your CDN provider to verify that they are an approved provider, and if so, which of their CDN locations are approved for this program. They can help you set up your deployment to use intra-region egress routes when using Google Cloud as the origin source.
Continental location
Intra-region CDN Interconnect traffic rate
North America
$0.04/GB
Europe
$0.05/GB
Asia
$0.06/GB
What's next?
Read the Network Connectivity documentation .
Get started with Network Connectivity .
Try the Pricing calculator .
Request a custom quote
With Google Cloud's pay-as-you-go pricing, you only pay for the services you use. Connect with our sales team to get a custom quote for your organization.
Contact sales
menu
Overview Solutions Products Pricing Resources Docs Support Contact us

search send
Docs Support
Console Sign in
Start free
Start free
Contact us
close Accelerate your digital transformation
Whether your business is early in its journey or well on its way to digital transformation, Google Cloud can help solve your toughest challenges.
Learn more
Key benefits
Why Google Cloud
Top reasons businesses choose us.
AI and ML
Get enterprise-ready AI.
Multicloud
Run your apps wherever you need them.
Global infrastructure
Build on the same infrastructure as Google.
Data Cloud
Make smarter decisions with unified data.
Modern Infrastructure Cloud
Next generation of cloud infrastructure.
Security
Protect your users, data, and apps.
Productivity and collaboration
Connect your teams with AI-powered apps.
Reports and insights
Executive insights
Curated C-suite perspectives.
Analyst reports
Read what industry analysts say about us.
Whitepapers
Browse and download popular whitepapers.
Customer stories
Explore case studies and videos.
close Industry Solutions
Application Modernization
Artificial Intelligence
APIs and Applications
Data Analytics
Databases
Infrastructure Modernization
Productivity and Collaboration
Security
Startups and SMB
See all solutions
Industry Solutions
Reduce cost, increase operational agility, and capture new market opportunities.
Retail
Analytics and collaboration tools for the retail value chain.
Consumer Packaged Goods
Solutions for CPG digital transformation and brand growth.
Financial Services
Computing, data management, and analytics tools for financial services.
Healthcare and Life Sciences
Advance research at scale and empower healthcare innovation.
Media and Entertainment
Solutions for content production and distribution operations.
Telecommunications
Hybrid and multi-cloud services to deploy and monetize 5G.
Games
AI-driven solutions to build and scale games faster.
Manufacturing
Migration and AI tools to optimize the manufacturing value chain.
Supply Chain and Logistics
Enable sustainable, efficient, and resilient data-driven operations across supply chain and logistics operations.
Government
Data storage, AI, and analytics solutions for government agencies.
Education
Teaching tools to provide more engaging learning experiences.
Not seeing what you're looking for?
See all industry solutions
Application Modernization
Assess, plan, implement, and measure software practices and capabilities to modernize and simplify your organization’s business application portfolios.
CAMP
Program that uses DORA to improve your software delivery capabilities.
Modernize Traditional Applications
Analyze, categorize, and get started with cloud migration on traditional workloads.
Migrate from PaaS: Cloud Foundry, Openshift
Tools for moving your existing containers into Google's managed container services.
Migrate from Mainframe
Automated tools and prescriptive guidance for moving your mainframe apps to the cloud.
Modernize Software Delivery
Software supply chain best practices - innerloop productivity, CI/CD and S3C.
DevOps Best Practices
Processes and resources for implementing DevOps in your org.
SRE Principles
Tools and resources for adopting SRE in your org.
Platform Engineering
Comprehensive suite of managed services and Golden Paths to build, manage, and scale IDPs.
Run Applications at the Edge
Guidance for localized and low latency apps on Google’s hardware agnostic edge solution.
Architect for Multicloud
Manage workloads across multiple clouds with a consistent platform.
Go Serverless
Fully managed environment for developing, deploying and scaling apps.
Artificial Intelligence
Add intelligence and efficiency to your business with AI and machine learning.
Customer Engagement Suite with Google AI
End-to-end application that combines our most advanced conversational AI.
Document AI
Document processing and data capture automated at scale.
Vertex AI Search for commerce
Google-quality search and product recommendations for retailers.
Google Cloud with Gemini
AI assistants for application development, coding, and more.
Generative AI on Google Cloud
Transform content creation and discovery, research, customer service, and developer efficiency with the power of generative AI.
APIs and Applications
Speed up the pace of innovation without coding, using APIs, apps, and automation.
New Business Channels Using APIs
Attract and empower an ecosystem of developers and partners.
Unlocking Legacy Applications Using APIs
Cloud services for extending and modernizing legacy apps.
Open Banking APIx
Simplify and accelerate secure delivery of open banking compliant APIs.
Data Analytics
Generate instant insights from data at any scale with a serverless, fully managed analytics platform that significantly simplifies analytics.
Data Migration
Migrate and modernize your data warehouse and data lakes with AI-powered migration services.
Data Lakehouse
Unify and govern your multimodal data with a high-performance and open data lakehouse.
Real-time Analytics
Insights from ingesting, processing, and analyzing event streams.
Marketing Analytics
Solutions for collecting, analyzing, and activating customer data.
Datasets
Data from Google, public, and commercial providers to enrich your analytics and AI initiatives.
Business Intelligence
Solutions for modernizing your BI stack and creating rich data experiences.
AI for Data Analytics
Write SQL, build predictive models, and visualize data with AI for data analytics.
Geospatial Analytics
A comprehensive platform to solve for geospatial use cases at scale.
Databases
Migrate and manage enterprise data with security, reliability, high availability, and fully managed data services.
Database Migration
Guides and tools to simplify your database migration life cycle.
Database Modernization
Upgrades to modernize your operational database infrastructure.
Databases for Games
Build global, live games with Google Cloud databases.
Google Cloud Databases
Database services to migrate, manage, and modernize data.
Migrate Oracle workloads to Google Cloud
Rehost, replatform, rewrite your Oracle workloads.
Open Source Databases
Fully managed open source databases with enterprise-grade support.
SQL Server on Google Cloud
Options for running SQL Server virtual machines on Google Cloud.
Gemini for Databases
Supercharge database development and management with AI.
Infrastructure Modernization
Migrate quickly with solutions for SAP, VMware, Windows, Oracle, and other workloads.
Application Migration
Discovery and analysis tools for moving to the cloud.
SAP on Google Cloud
Certifications for running SAP applications and SAP HANA.
High Performance Computing
Compute, storage, and networking options to support any workload.
Windows on Google Cloud
Tools and partners for running Windows workloads.
Data Center Migration
Migration solutions for VMs, apps, databases, and more.
Active Assist
Automatic cloud resource optimization and increased security.
Virtual Desktops
Remote work solutions for desktops and applications (VDI & DaaS).
Rapid Migration and Modernization Program
End-to-end migration program to simplify your path to the cloud.
Backup and Disaster Recovery
Ensure your business continuity needs are met.
Red Hat on Google Cloud
Google and Red Hat provide an enterprise-grade platform for traditional on-prem and custom applications.
Cross-Cloud Network
Simplify hybrid and multicloud networking, and secure your workloads, data, and users.
Observability
Monitor, troubleshoot, and improve app performance with end-to-end visibility.
Productivity and Collaboration
Change the way teams work with solutions designed for humans and built for impact.
Google Workspace
Collaboration and productivity tools for enterprises.
Google Workspace Essentials
Secure video meetings and modern collaboration for teams.
Cloud Identity
Unified platform for IT admins to manage user devices and apps.
Chrome Enterprise
ChromeOS, Chrome Browser, and Chrome devices built for business.
Security
Detect, investigate, and respond to online threats to help protect your business.
Agentic SOC
Delivering better security outcomes with AI agents.
Web App and API Protection
Threat and fraud protection for your web applications and APIs.
Security and Resilience Framework
Solutions for each phase of the security and resilience life cycle.
Risk and compliance as code (RCaC)
Solution to modernize your governance, risk, and compliance function with automation.
Software Supply Chain Security
Solution for improving end-to-end software supply chain security.
Security Foundation
Recommended products to help achieve a strong security posture.
Google Cloud Cybershield™
Strengthen nationwide cyber defense.
Startups and SMB
Accelerate startup and SMB growth with tailored solutions and programs.
Startup Program
Get financial, business, and technical support to take your startup to the next level.
Small and Medium Business
Explore solutions for web hosting, app development, AI, and analytics.
Software as a Service
Build better SaaS products, scale efficiently, and grow your business.
close Featured Products
AI and Machine Learning
Business Intelligence
Compute
Containers
Data Analytics
Databases
Developer Tools
Distributed Cloud
Hybrid and Multicloud
Industry Specific
Integration Services
Management Tools
Maps and Geospatial
Media Services
Migration
Mixed Reality
Networking
Operations
Productivity and Collaboration
Security and Identity
Serverless
Storage
Web3
See all products (100+)
Featured Products
Compute Engine
Virtual machines running in Google’s data center.
Cloud Storage
Object storage that’s secure, durable, and scalable.
BigQuery
Autonomous data to AI platform for analytics and data science.
Cloud Run
Fully managed environment for running containerized apps.
Google Kubernetes Engine
Managed environment for running containerized apps.
Vertex AI
Unified platform for ML models and generative AI.
Looker
Platform for BI, data applications, and embedded analytics.
Apigee API Management
Manage the full life cycle of APIs anywhere with visibility and control.
Cloud SQL
Relational database services for MySQL, PostgreSQL and SQL Server.
Gemini Enterprise
Secure platform to discover, create, run, and govern AI agents.
Cloud CDN
Content delivery network for delivering web and video.
Not seeing what you're looking for?
See all products (100+)
AI and Machine Learning
Vertex AI Platform
Unified platform for ML models and generative AI.
Vertex AI Studio
Build, tune, and deploy foundation models on Vertex AI.
Vertex AI Agent Builder
Build and deploy gen AI experiences.
Conversational Agents
Build conversational AI with both deterministic and gen AI functionality.
Vertex AI Search
Build Google-quality search for your enterprise apps and experiences.
Speech-to-Text
Speech recognition and transcription across 125 languages.
Text-to-Speech
Speech synthesis in 220+ voices and 40+ languages.
Translation AI
Language detection, translation, and glossary support.
Gemini Enterprise
Secure platform to discover, create, run, and govern AI agents.
Vision AI
Custom and pre-trained models to detect emotion, text, and more.
Contact Center as a Service
Omnichannel contact center solution that is native to the cloud.
Not seeing what you're looking for?
See all AI and machine learning products
Business Intelligence
Looker
Platform for BI, data applications, and embedded analytics.
Looker Studio
Interactive data suite for dashboarding, reporting, and analytics.
Compute
Compute Engine
Virtual machines running in Google’s data center.
App Engine
Serverless application platform for apps and back ends.
Cloud GPUs
GPUs for ML, scientific computing, and 3D visualization.
Migrate to Virtual Machines
Server and virtual machine migration to Compute Engine.
Spot VMs
Compute instances for batch jobs and fault-tolerant workloads.
Batch
Fully managed service for scheduling batch jobs.
Sole-Tenant Nodes
Dedicated hardware for compliance, licensing, and management.
Bare Metal
Infrastructure to run specialized workloads on Google Cloud.
Recommender
Usage recommendations for Google Cloud products and services.
VMware Engine
Fully managed, native VMware Cloud Foundation software stack.
Cloud Run
Fully managed environment for running containerized apps.
Not seeing what you're looking for?
See all compute products
Containers
Google Kubernetes Engine
Managed environment for running containerized apps.
Cloud Run
Fully managed environment for running containerized apps.
Cloud Build
Solution for running build steps in a Docker container.
Artifact Registry
Package manager for build artifacts and dependencies.
Cloud Code
IDE support to write, run, and debug Kubernetes applications.
Cloud Deploy
Fully managed continuous delivery to GKE and Cloud Run.
Migrate to Containers
Components for migrating VMs into system containers on GKE.
Deep Learning Containers
Containers with data science frameworks, libraries, and tools.
Knative
Components to create Kubernetes-native cloud-based software.
Data Analytics
BigQuery
Autonomous data to AI platform for analytics and data science.
Looker
Platform for BI, data applications, and embedded analytics.
Dataflow
Real-time analytics for stream and batch processing.
Pub/Sub
Messaging service for event ingestion and delivery.
Dataproc
Managed service for running Apache Spark and Apache Hadoop clusters.
Google Cloud Serverless for Apache Spark
Quick VM startup and dynamic autoscaling for Spark workloads.
Cloud Composer
Workflow orchestration service built on Apache Airflow.
BigLake
Storage engine for building data lakehouses with Apache Iceberg.
Dataplex Universal Catalog
A unified data-to-AI governance fabric for all Google Cloud services.
BigQuery Migration Services
Free-to-use, cloud-native and AI-powered data migration services.
Managed Service for Apache Kafka
Managed Kafka service to operate highly available Apache Kafka clusters.
Not seeing what you're looking for?
See all data analytics products
Databases
AlloyDB for PostgreSQL
Fully managed, PostgreSQL-compatible database for enterprise workloads.
Cloud SQL
Fully managed database for MySQL, PostgreSQL, and SQL Server.
Firestore
Highly scalable and serverless NoSQL document database, with MongoDB compatibility.
Spanner
Cloud-native relational database with unlimited scale and 99.999% availability.
Bigtable
Cloud-native wide-column database for large-scale, low-latency workloads.
Datastream
Serverless change data capture and replication service.
Database Migration Service
Serverless, minimal downtime migrations to Cloud SQL.
Bare Metal Solution
Fully managed infrastructure for your Oracle workloads.
Memorystore
Fully managed Redis and Memcached for sub-millisecond data access.
Developer Tools
Artifact Registry
Universal package manager for build artifacts and dependencies.
Cloud Code
IDE support to write, run, and debug Kubernetes applications.
Cloud Build
Continuous integration and continuous delivery platform.
Cloud Deploy
Fully managed continuous delivery to GKE and Cloud Run.
Cloud Deployment Manager
Service for creating and managing Google Cloud resources.
Cloud SDK
Command-line tools and libraries for Google Cloud.
Cloud Scheduler
Cron job scheduler for task automation and management.
Cloud Source Repositories
Private Git repository to store, manage, and track code.
Infrastructure Manager
Automate infrastructure management with Terraform.
Cloud Workstations
Managed and secure development environments in the cloud.
Gemini Code Assist
AI-powered assistant available across Google Cloud and your IDE.
Not seeing what you're looking for?
See all developer tools
Distributed Cloud
Google Distributed Cloud Connected
Distributed cloud services for edge workloads.
Google Distributed Cloud Air-gapped
Distributed cloud for air-gapped workloads.
Hybrid and Multicloud
Google Kubernetes Engine
Managed environment for running containerized apps.
Apigee API Management
API management, development, and security platform.
Migrate to Containers
Tool to move workloads and existing applications to GKE.
Cloud Build
Service for executing builds on Google Cloud infrastructure.
Observability
Monitoring, logging, and application performance suite.
Cloud Service Mesh
Fully managed service mesh based on Envoy and Istio.
Google Distributed Cloud
Fully managed solutions for the edge and data centers.
Industry Specific
Anti Money Laundering AI
Detect suspicious, potential money laundering activity with AI.
Cloud Healthcare API
Solution for bridging existing care systems and apps on Google Cloud.
Device Connect for Fitbit
Gain a 360-degree patient view with connected Fitbit data on Google Cloud.
Telecom Network Automation
Ready to use cloud-native automation for telecom networks.
Telecom Data Fabric
Telecom data management and analytics with an automated approach.
Telecom Subscriber Insights
Ingests data to improve subscriber acquisition and retention.
Spectrum Access System (SAS)
Controls fundamental access to the Citizens Broadband Radio Service (CBRS).
Integration Services
Application Integration
Connect to 3rd party apps and enable data consistency without code.
Workflows
Workflow orchestration for serverless products and API services.
Apigee API Management
Manage the full life cycle of APIs anywhere with visibility and control.
Cloud Tasks
Task management service for asynchronous task execution.
Cloud Scheduler
Cron job scheduler for task automation and management.
Dataproc
Service for running Apache Spark and Apache Hadoop clusters.
Cloud Data Fusion
Data integration for building and managing data pipelines.
Cloud Composer
Workflow orchestration service built on Apache Airflow.
Pub/Sub
Messaging service for event ingestion and delivery.
Eventarc
Build an event-driven architecture that can connect any service.
Management Tools
Cloud Shell
Interactive shell environment with a built-in command line.
Cloud console
Web-based interface for managing and monitoring cloud apps.
Cloud Endpoints
Deployment and development management for APIs on Google Cloud.
Cloud IAM
Permissions management system for Google Cloud resources.
Cloud APIs
Programmatic interfaces for Google Cloud services.
Service Catalog
Service catalog for admins managing internal enterprise solutions.
Cost Management
Tools for monitoring, controlling, and optimizing your costs.
Observability
Monitoring, logging, and application performance suite.
Carbon Footprint
Dashboard to view and export Google Cloud carbon emissions reports.
Config Connector
Kubernetes add-on for managing Google Cloud resources.
Active Assist
Tools for easily managing performance, security, and cost.
Not seeing what you're looking for?
See all management tools
Maps and Geospatial
Earth Engine
Geospatial platform for Earth observation data and analysis.
Google Maps Platform
Create immersive location experiences and improve business operations.
Media Services
Cloud CDN
Content delivery network for serving web and video content.
Live Stream API
Service to convert live video and package for streaming.
OpenCue
Open source render manager for visual effects and animation.
Transcoder API
Convert video files and package them for optimized delivery.
Video Stitcher API
Service for dynamic or server side ad insertion.
Migration
Migration Center
Unified platform for migrating and modernizing with Google Cloud.
Application Migration
App migration to the cloud for low-cost refresh cycles.
Migrate to Virtual Machines
Components for migrating VMs and physical servers to Compute Engine.
Cloud Foundation Toolkit
Reference templates for Deployment Manager and Terraform.
Database Migration Service
Serverless, minimal downtime migrations to Cloud SQL.
Migrate to Containers
Components for migrating VMs into system containers on GKE.
BigQuery Migration Services
Streamlined data warehouse and data lake migration tooling and incentives.
Rapid Migration and Modernization Program
End-to-end migration program to simplify your path to the cloud.
Transfer Appliance
Storage server for moving large volumes of data to Google Cloud.
Storage Transfer Service
Data transfers from online and on-premises sources to Cloud Storage.
VMware Engine
Migrate and run your VMware workloads natively on Google Cloud.
Mixed Reality
Immersive Stream for XR
Hosts, renders, and streams 3D and XR experiences.
Networking
Cloud Armor
Security policies and defense against web and DDoS attacks.
Cloud CDN and Media CDN
Content delivery network for serving web and video content.
Cloud DNS
Domain name system for reliable and low-latency name lookups.
Cloud Load Balancing
Service for distributing traffic across applications and regions.
Cloud NAT
NAT service for giving private instances internet access.
Cloud Connectivity
Connectivity options for VPN, peering, and enterprise needs.
Network Connectivity Center
Connectivity management to help simplify and scale networks.
Network Intelligence Center
Network monitoring, verification, and optimization platform.
Network Service Tiers
Cloud network options based on performance, availability, and cost.
Virtual Private Cloud
Single VPC for an entire organization, isolated within projects.
Private Service Connect
Secure connection between your VPC and services.
Not seeing what you're looking for?
See all networking products
Operations
Cloud Logging
Google Cloud audit, platform, and application logs management.
Cloud Monitoring
Infrastructure and application health with rich metrics.
Error Reporting
Application error identification and analysis.
Managed Service for Prometheus
Fully-managed Prometheus on Google Cloud.
Cloud Trace
Tracing system collecting latency data from applications.
Cloud Profiler
CPU and heap profiler for analyzing application performance.
Cloud Quotas
Manage quotas for all Google Cloud services.
Productivity and Collaboration
AppSheet
No-code development platform to build and extend applications.
Gemini Enterprise
Secure platform to discover, create, run, and govern AI agents.
Google Workspace
Collaboration and productivity tools for individuals and organizations.
Google Workspace Essentials
Secure video meetings and modern collaboration for teams.
Cloud Identity
Unified platform for IT admins to manage user devices and apps.
Chrome Enterprise
ChromeOS, Chrome browser, and Chrome devices built for business.
Security and Identity
Cloud IAM
Permissions management system for Google Cloud resources.
Sensitive Data Protection
Discover, classify, and protect your valuable data assets.
Mandiant Managed Defense
Find and eliminate threats with confidence 24x7.
Google Threat Intelligence
Know who’s targeting you.
Security Command Center
Platform for defending against threats to your Google Cloud assets.
Cloud Key Management
Manage encryption keys on Google Cloud.
Mandiant Incident Response
Minimize the impact of a breach.
Chrome Enterprise Premium
Get secure enterprise browsing with extensive endpoint visibility.
Assured Workloads
Compliance and security controls for sensitive workloads.
Google Security Operations
Detect, investigate, and respond to cyber threats.
Mandiant Consulting
Get expert guidance before, during, and after an incident.
Not seeing what you're looking for?
See all security and identity products
Serverless
Cloud Run
Fully managed environment for running containerized apps.
Cloud Functions
Platform for creating functions that respond to cloud events.
App Engine
Serverless application platform for apps and back ends.
Workflows
Workflow orchestration for serverless products and API services.
API Gateway
Develop, deploy, secure, and manage APIs with a fully managed gateway.
Storage
Cloud Storage
Object storage that’s secure, durable, and scalable.
Block Storage
High-performance storage for AI, analytics, databases, and enterprise applications.
Filestore
File storage that is highly scalable and secure.
Persistent Disk
Block storage for virtual machine instances running on Google Cloud.
Cloud Storage for Firebase
Object storage for storing and serving user-generated content.
Local SSD
Block storage that is locally attached for high-performance needs.
Storage Transfer Service
Data transfers from online and on-premises sources to Cloud Storage.
Google Cloud Managed Lustre
High performance managed parallel file service.
Google Cloud NetApp Volumes
File storage service for NFS, SMB, and multi-protocol environments.
Backup and DR Service
Service for centralized, application-consistent data protection.
Web3
Blockchain Node Engine
Fully managed node hosting for developing on the blockchain.
Blockchain RPC
Enterprise-grade RPC for building on the blockchain.
close Save money with our transparent approach to pricing
Google Cloud's pay-as-you-go pricing offers automatic savings based on monthly usage and discounted rates for prepaid resources. Contact us today to get a quote.
Request a quote
Pricing overview and tools
Google Cloud pricing
Pay only for what you use with no lock-in.
Pricing calculator
Calculate your cloud savings.
Google Cloud free tier
Explore products with free monthly usage.
Cost optimization framework
Get best practices to optimize workload costs.
Cost management tools
Tools to monitor and control your costs.
Product-specific Pricing
Compute Engine
Cloud SQL
Google Kubernetes Engine
Cloud Storage
BigQuery
See full price list with 100+ products
close Learn & build
Google Cloud Free Program
$300 in free credits and 20+ free products.
Solution Generator
Get AI generated solution recommendations.
Quickstarts
Get tutorials and walkthroughs.
Blog
Read our latest product news and stories.
Learning Hub
Grow your career with role-based training.
Google Cloud certification
Prepare and register for certifications.
Cloud computing basics
Learn more about cloud computing basics.
Cloud Architecture Center
Get reference architectures and best practices.
Connect
Innovators
Join Google Cloud's developer program.
Developer Center
Stay in the know and stay connected.
Events and webinars
Browse upcoming and on demand events.
Google Cloud Community
Ask questions, find answers, and connect.
Consulting and Partners
Google Cloud Consulting
Work with our experts on cloud projects.
Google Cloud Marketplace
Deploy ready-to-go solutions in a few clicks.
Find a partner
Explore the benefits of working with a partner.
Google Cloud partners
Learn about the ecosystem and resources.
close
Overview arrow_forward
Solutions arrow_forward
Products arrow_forward
Pricing arrow_forward
Resources arrow_forward
Docs
Support
Console
Accelerate your digital transformation
Learn more
Key benefits
Why Google Cloud
AI and ML
Multicloud
Global infrastructure
Data Cloud
Modern Infrastructure Cloud
Security
Productivity and collaboration
Reports and insights
Executive insights
Analyst reports
Whitepapers
Customer stories
Industry Solutions
Retail
Consumer Packaged Goods
Financial Services
Healthcare and Life Sciences
Media and Entertainment
Telecommunications
Games
Manufacturing
Supply Chain and Logistics
Government
Education
See all industry solutions
See all solutions
Application Modernization
CAMP
Modernize Traditional Applications
Migrate from PaaS: Cloud Foundry, Openshift
Migrate from Mainframe
Modernize Software Delivery
DevOps Best Practices
SRE Principles
Platform Engineering
Run Applications at the Edge
Architect for Multicloud
Go Serverless
Artificial Intelligence
Customer Engagement Suite with Google AI
Document AI
Vertex AI Search for commerce
Google Cloud with Gemini
Generative AI on Google Cloud
APIs and Applications
New Business Channels Using APIs
Unlocking Legacy Applications Using APIs
Open Banking APIx
Data Analytics
Data Migration
Data Lakehouse
Real-time Analytics
Marketing Analytics
Datasets
Business Intelligence
AI for Data Analytics
Geospatial Analytics
Databases
Database Migration
Database Modernization
Databases for Games
Google Cloud Databases
Migrate Oracle workloads to Google Cloud
Open Source Databases
SQL Server on Google Cloud
Gemini for Databases
Infrastructure Modernization
Application Migration
SAP on Google Cloud
High Performance Computing
Windows on Google Cloud
Data Center Migration
Active Assist
Virtual Desktops
Rapid Migration and Modernization Program
Backup and Disaster Recovery
Red Hat on Google Cloud
Cross-Cloud Network
Observability
Productivity and Collaboration
Google Workspace
Google Workspace Essentials
Cloud Identity
Chrome Enterprise
Security
Agentic SOC
Web App and API Protection
Security and Resilience Framework
Risk and compliance as code (RCaC)
Software Supply Chain Security
Security Foundation
Google Cloud Cybershield™
Startups and SMB
Startup Program
Small and Medium Business
Software as a Service
Featured Products
Compute Engine
Cloud Storage
BigQuery
Cloud Run
Google Kubernetes Engine
Vertex AI
Looker
Apigee API Management
Cloud SQL
Gemini Enterprise
Cloud CDN
See all products (100+)
AI and Machine Learning
Vertex AI Platform
Vertex AI Studio
Vertex AI Agent Builder
Conversational Agents
Vertex AI Search
Speech-to-Text
Text-to-Speech
Translation AI
Gemini Enterprise
Vision AI
Contact Center as a Service
See all AI and machine learning products
Business Intelligence
Looker
Looker Studio
Compute
Compute Engine
App Engine
Cloud GPUs
Migrate to Virtual Machines
Spot VMs
Batch
Sole-Tenant Nodes
Bare Metal
Recommender
VMware Engine
Cloud Run
See all compute products
Containers
Google Kubernetes Engine
Cloud Run
Cloud Build
Artifact Registry
Cloud Code
Cloud Deploy
Migrate to Containers
Deep Learning Containers
Knative
Data Analytics
BigQuery
Looker
Dataflow
Pub/Sub
Dataproc
Google Cloud Serverless for Apache Spark
Cloud Composer
BigLake
Dataplex Universal Catalog
BigQuery Migration Services
Managed Service for Apache Kafka
See all data analytics products
Databases
AlloyDB for PostgreSQL
Cloud SQL
Firestore
Spanner
Bigtable
Datastream
Database Migration Service
Bare Metal Solution
Memorystore
Developer Tools
Artifact Registry
Cloud Code
Cloud Build
Cloud Deploy
Cloud Deployment Manager
Cloud SDK
Cloud Scheduler
Cloud Source Repositories
Infrastructure Manager
Cloud Workstations
Gemini Code Assist
See all developer tools
Distributed Cloud
Google Distributed Cloud Connected
Google Distributed Cloud Air-gapped
Hybrid and Multicloud
Google Kubernetes Engine
Apigee API Management
Migrate to Containers
Cloud Build
Observability
Cloud Service Mesh
Google Distributed Cloud
Industry Specific
Anti Money Laundering AI
Cloud Healthcare API
Device Connect for Fitbit
Telecom Network Automation
Telecom Data Fabric
Telecom Subscriber Insights
Spectrum Access System (SAS)
Integration Services
Application Integration
Workflows
Apigee API Management
Cloud Tasks
Cloud Scheduler
Dataproc
Cloud Data Fusion
Cloud Composer
Pub/Sub
Eventarc
Management Tools
Cloud Shell
Cloud console
Cloud Endpoints
Cloud IAM
Cloud APIs
Service Catalog
Cost Management
Observability
Carbon Footprint
Config Connector
Active Assist
See all management tools
Maps and Geospatial
Earth Engine
Google Maps Platform
Media Services
Cloud CDN
Live Stream API
OpenCue
Transcoder API
Video Stitcher API
Migration
Migration Center
Application Migration
Migrate to Virtual Machines
Cloud Foundation Toolkit
Database Migration Service
Migrate to Containers
BigQuery Migration Services
Rapid Migration and Modernization Program
Transfer Appliance
Storage Transfer Service
VMware Engine
Mixed Reality
Immersive Stream for XR
Networking
Cloud Armor
Cloud CDN and Media CDN
Cloud DNS
Cloud Load Balancing
Cloud NAT
Cloud Connectivity
Network Connectivity Center
Network Intelligence Center
Network Service Tiers
Virtual Private Cloud
Private Service Connect
See all networking products
Operations
Cloud Logging
Cloud Monitoring
Error Reporting
Managed Service for Prometheus
Cloud Trace
Cloud Profiler
Cloud Quotas
Productivity and Collaboration
AppSheet
Gemini Enterprise
Google Workspace
Google Workspace Essentials
Cloud Identity
Chrome Enterprise
Security and Identity
Cloud IAM
Sensitive Data Protection
Mandiant Managed Defense
Google Threat Intelligence
Security Command Center
Cloud Key Management
Mandiant Incident Response
Chrome Enterprise Premium
Assured Workloads
Google Security Operations
Mandiant Consulting
See all security and identity products
Serverless
Cloud Run
Cloud Functions
App Engine
Workflows
API Gateway
Storage
Cloud Storage
Block Storage
Filestore
Persistent Disk
Cloud Storage for Firebase
Local SSD
Storage Transfer Service
Google Cloud Managed Lustre
Google Cloud NetApp Volumes
Backup and DR Service
Web3
Blockchain Node Engine
Blockchain RPC
Save money with our transparent approach to pricing
Request a quote
Pricing overview and tools
Google Cloud pricing
Pricing calculator
Google Cloud free tier
Cost optimization framework
Cost management tools
Product-specific Pricing
Compute Engine
Cloud SQL
Google Kubernetes Engine
Cloud Storage
BigQuery
See full price list with 100+ products
Learn & build
Google Cloud Free Program
Solution Generator
Quickstarts
Blog
Learning Hub
Google Cloud certification
Cloud computing basics
Cloud Architecture Center
Connect
Innovators
Developer Center
Events and webinars
Google Cloud Community
Consulting and Partners
Google Cloud Consulting
Google Cloud Marketplace
Find a partner
Google Cloud partners
Why Google
Choosing Google Cloud
Trust and security
Modern Infrastructure Cloud
Multicloud
Global infrastructure
Locations
Customers and case studies
Analyst reports
Whitepapers
Blog
Products and pricing
Google Cloud pricing
Google Workspace pricing
See all products
Solutions
Infrastructure modernization
Databases
Application modernization
Smart analytics
Artificial Intelligence
Security
Productivity & work transformation
Industry solutions
DevOps solutions
Small business solutions
See all solutions
Resources
Google Cloud Affiliate Program
Google Cloud documentation
Google Cloud quickstarts
Google Cloud Marketplace
Learn about cloud computing
Support
Code samples
Cloud Architecture Center
Training
Certifications
Google for Developers
Google Cloud for Startups
System status
Release Notes
Engage
Contact sales
Find a Partner
Become a Partner
Events
Podcasts
Developer Center
Press Corner
Google Cloud on YouTube
Google Cloud Tech on YouTube
Follow on X
Join User Research
We're hiring. Join Google Cloud!
Community forums
About Google
Privacy
Site terms
Google Cloud terms
Cookies management controls
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter Subscribe
language ‪English‬
‪English‬
‪Deutsch‬
‪Español‬
‪Español (Latinoamérica)‬
‪Français‬
‪Indonesia‬
‪Italiano‬
‪Português (Brasil)‬
‪简体中文‬
‪繁體中文‬
‪日本語‬
‪한국어‬
