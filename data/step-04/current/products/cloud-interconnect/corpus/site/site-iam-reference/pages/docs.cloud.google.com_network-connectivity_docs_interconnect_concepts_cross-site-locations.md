---
title: "Colocation facilities for Cross-Site Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/cross-site-locations
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/cross-site-locations
  title: "Colocation facilities for Cross-Site Interconnect \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Colocation facilities for Cross-Site Interconnect | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Network Connectivity
Cloud Interconnect
Start free
Overview
Guides
Reference
Support
Resources
More
Technology areas
More
Overview
Guides
Reference
Support
Resources
Cross-product tools
More
Console
Cloud Interconnect
Network Connectivity home
Cloud Interconnect overview
Options for connecting to multiple VPC networks
Best practices
Key terms
Topology for production-level applications (recommended)
Topology for non-critical applications
Dedicated Interconnect
Overview
Colocation facilities
Create Dedicated Interconnect connections
Provisioning overview
Order a connection
Retrieve LOA-CFAs
Test connections
Create VLAN attachments
Configure on-premises routers
Manage Dedicated Interconnect connections
View VLAN attachments and groups
Modify VLAN attachments
Disable or enable VLAN attachments
Duplicate a connection for redundancy
Use connections in other projects
Configure traffic differentiation
List locations
View connection details
Get diagnostics
Modify connection groups
Modify connections
Delete VLAN attachments
Delete connections
Change reliability options
Establish 99.99% availability
Establish 99.9% availability
Partner Interconnect
Overview
Supported service providers
Create Partner Interconnect connections
Provisioning overview
Create VLAN attachments
Request connections
Activate connections
Configure on-premises routers
Manage Partner Interconnect connections
Duplicate a VLAN attachment for redundancy
View VLAN attachments
Modify VLAN attachments
Disable VLAN attachments
Delete VLAN attachments
Establish 99.99% availability
Establish 99.9% availability
Cross-Cloud Interconnect
Overview
Create Cross-Cloud Interconnect connections
Connect to AWS
Overview
Choose your locations
Order Cross-Cloud Interconnect connections
Order AWS ports
Configure Google Cloud resources
Configure your AWS resources
Verify your connections
Connect to Azure
Overview
Choose your locations
Order Cross-Cloud Interconnect connections
Order Azure ports
Configure your Google Cloud resources
Configure your Azure resources
Verify your connections
Connect to OCI
Overview
Choose your locations
Order Cross-Cloud Interconnect connections
Order OCI ports
Configure your Google Cloud resources
Configure your OCI resources
Verify your connections
Connect to Alibaba Cloud
Overview
Choose your locations
Order Cross-Cloud Interconnect connections
Order Alibaba Cloud ports
Configure your Google Cloud resources
Configure your Alibaba Cloud resources
Verify your connections
Manage Cross-Cloud Interconnect connections
View VLAN attachments
Modify VLAN attachments
Disable VLAN attachments
Use connections in other projects
Configure traffic differentiation
View connection details
Get diagnostics
Disconnect networks
Delete connections
Partner Cross-Cloud Interconnect for OCI
Overview
Create Partner Cross-Cloud Interconnect connections
Provisioning overview
Paired locations
Create VLAN attachments
Request OCI connections
Activate connections
Partner Cross-Cloud Interconnect for AWS
Overview
Create Partner Cross-Cloud Interconnect connections
Provisioning overview
Choose a paired location
Create a connection initiated from Google Cloud
Create a connection initiated from AWS
Manage connections
Cross-Site Interconnect
Overview
Colocation facilities
Create Cross-Site Interconnect Connections
Provisioning overview
Check bandwidth quotas and limits
Order connections
Retrieve LOA-CFAs
Test connections
Create a cross-site network
Configure on-premises routers
Manage Cross-Site Interconnect connections
View cross-site networks
Modify a cross-site network
Disable a wire group
Delete a cross-site network
List locations
View connection details
Get diagnostics
Delete connections
Deploy
HA VPN over Cloud Interconnect
Overview
Deployment process
Terraform examples
Assign internal IP address ranges to HA VPN gateways
Configure HA VPN over Cloud Interconnect
Delete HA VPN over Cloud Interconnect
MACsec for Cloud Interconnect
Overview
Set up MACsec
Enable MACsec
Disable MACsec
Modify fail-open behavior
Get MACsec keys
View MACsec status
Rotate MACsec keys
Troubleshoot MACsec
Manage
Restrict Cloud Interconnect usage
Manage resources by using custom constraints
Create and manage tags
Calculate network throughput over Cloud Interconnect
Monitor and troubleshoot
Fix SLA eligibility problems
Monitor connections
Troubleshooting
Infrastructure maintenance events
Failure scenarios and impacts
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
Requirements and recommendations
Locations table
Cross-Site Interconnect SLA availability
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Colocation facilities for Cross-Site Interconnect
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Requirements and recommendations
Locations table
Cross-Site Interconnect SLA availability
Cross-Site Interconnect connections are available from 89 locations.
For more information, see geography and regions .
This page lists all the locations where you can create
Cross-Site Interconnect connections.
To list locations , you can
also use the Google Cloud console or the Google Cloud CLI.
Requirements and recommendations
Before you set up Cross-Site Interconnect, your on-premises
network sites must physically meet Google's network in a supported colocation
facility, also known as a connection location. This facility is where a
vendor—the colocation facility provider—provisions a circuit
between your network and a Google Edge point of presence (PoP).
To ensure that you can create cross-site networks between connections in
given a pair of metros, you can describe a location by using the Google Cloud CLI . The command output includes a CrossSiteInterconnectInfos
field, which lists the metros that the location can connect to. Cross-site networks
support intercontinental connectivity where indicated by the
CrossSiteInterconnectInfos field. However, you can't create cross-site
networks between connections that are in the same metro.
For more information, see the
Cross-Site Interconnect overview .
Locations table
Cross-Site Interconnect is available at colocation facilities
in the following countries:
APAC
Australia, Japan, Singapore, Taiwan
Europe
France, Germany, Sweden
North America
Canada, United States
In the following table, locations are organized by metropolitan area, and then
by edge availability domain (metro availability zone). The name of each location
indicates its edge availability domain, such as the zone1 in iad-zone1-1 .
Note: For information about which service providers are in each colocation
facility, contact the facility provider or view the facility provider's website
that's listed in PeeringDB. If the name of the facility provider isn't
hyperlinked in the Facility column, then the facility provider doesn't have
a published entry in PeeringDB for the location.
Asia Oceania EMEA North America
More
Metropolitan area
Colocation facility name
Facility
Link type & MACsec support [M]
Singapore
sin-zone1-2260
Equinix Singapore (SG3)
10 Gbps [M]
100 Gbps [M]
Singapore
sin-zone2-2260
Equinix Singapore (SG3)
10 Gbps [M]
100 Gbps [M]
Singapore
sin-zone1-388
Global Switch Singapore
10 Gbps [M]
100 Gbps [M]
Singapore
sin-zone2-388
Global Switch Singapore
10 Gbps [M]
100 Gbps [M]
Taipei
tsa-zone1-2886
CHT Taipei-Aikuo IDC
10 Gbps [M]
100 Gbps [M]
Taipei
tsa-zone2-2886
CHT Taipei-Aikuo IDC
10 Gbps [M]
100 Gbps [M]
Taipei
tsa-zone1-456
Chief LY Building Taipei
10 Gbps [M]
100 Gbps [M]
Taipei
tsa-zone2-456
Chief LY Building Taipei
10 Gbps [M]
100 Gbps [M]
Taipei
tsa-zone1-99004
Asia Pacific Telecom Co., Ltd.
10 Gbps [M]
100 Gbps [M]
Taipei
tsa-zone2-99004
Asia Pacific Telecom Co., Ltd.
10 Gbps [M]
100 Gbps [M]
Tokyo
nrt-zone1-1893
Equinix Tokyo (TY4)
10 Gbps [M]
100 Gbps [M]
Tokyo
nrt-zone2-1893
Equinix Tokyo (TY4)
10 Gbps [M]
100 Gbps [M]
Tokyo
nrt-zone1-599
ComSpace I
10 Gbps [M]
100 Gbps [M]
Tokyo
nrt-zone1-738
AT Tokyo CC2
10 Gbps [M]
100 Gbps [M]
Tokyo
nrt-zone2-738
AT Tokyo CC2
10 Gbps [M]
100 Gbps [M]
Metropolitan area
Colocation facility name
Facility
Link type & MACsec support [M]
Melbourne
mel-zone1-1988
Equinix ME1/ME2 - Melbourne
10 Gbps [M]
100 Gbps [M]
Melbourne
mel-zone2-1988
Equinix ME1/ME2 - Melbourne
10 Gbps [M]
100 Gbps [M]
Melbourne
mel-zone1-4843
NEXTDC M2
10 Gbps [M]
100 Gbps [M]
Melbourne
mel-zone2-4843
NEXTDC M2
10 Gbps [M]
100 Gbps [M]
Perth
per-zone1-5749
Equinix PE2 - Perth (formerly Metronode Perth 2)
10 Gbps [M]
100 Gbps [M]
Perth
per-zone2-5749
Equinix PE2 - Perth (formerly Metronode Perth 2)
10 Gbps [M]
100 Gbps [M]
Sydney
syd-zone1-1605
Equinix Sydney (SY3)
10 Gbps [M]
100 Gbps [M]
Sydney
syd-zone2-1605
Equinix Sydney (SY3)
10 Gbps [M]
100 Gbps [M]
Sydney
syd-zone1-1660
NEXTDC S1
10 Gbps [M]
100 Gbps [M]
Sydney
syd-zone2-1660
NEXTDC S1
10 Gbps [M]
100 Gbps [M]
Metropolitan area
Colocation facility name
Facility
Link type & MACsec support [M]
Frankfurt
fra-zone1-277
e-shelter Frankfurt (FRA1)
10 Gbps [M]
100 Gbps [M]
Frankfurt
fra-zone2-277
e-shelter Frankfurt (FRA1)
10 Gbps [M]
100 Gbps [M]
Frankfurt
fra-zone1-58
Digital Realty Frankfurt FRA1-16
10 Gbps [M]
100 Gbps [M]
Frankfurt
fra-zone1-683
Equinix Frankfurt West (FR4)
10 Gbps [M]
100 Gbps [M]
Frankfurt
fra-zone2-683
Equinix Frankfurt West (FR4)
10 Gbps [M]
100 Gbps [M]
Marseille
mrs-zone1-226
Digital Realty Marseille MRS1-3
10 Gbps [M]
100 Gbps [M]
Marseille
mrs-zone2-226
Digital Realty Marseille MRS1-3
10 Gbps [M]
100 Gbps [M]
Paris
cdg-zone1-1536
Digital Realty Paris PAR7
10 Gbps [M]
100 Gbps [M]
Paris
cdg-zone1-181
Global Switch (Paris)
10 Gbps [M]
100 Gbps [M]
Paris
cdg-zone2-181
Global Switch (Paris)
10 Gbps [M]
100 Gbps [M]
Paris
cdg-zone1-3342
DATA4 Paris Marcoussis
10 Gbps [M]
100 Gbps [M]
Paris
cdg-zone1-53
Telehouse - Paris 2 (Voltaire - Léon Frot)
10 Gbps [M]
100 Gbps [M]
Paris
cdg-zone2-53
Telehouse - Paris 2 (Voltaire - Léon Frot)
10 Gbps [M]
100 Gbps [M]
Stockholm
arn-zone1-156
Equinix Stockholm Bromma (SK1)
10 Gbps [M]
100 Gbps [M]
Stockholm
arn-zone2-156
Equinix Stockholm Bromma (SK1)
10 Gbps [M]
100 Gbps [M]
Stockholm
arn-zone1-208
Digital Realty Stockholm STO1-6
10 Gbps [M]
100 Gbps [M]
Stockholm
arn-zone2-208
Digital Realty Stockholm STO1-6
10 Gbps [M]
100 Gbps [M]
Metropolitan area
Colocation facility name
Facility
Link type & MACsec support [M]
Ashburn
iad-zone1-1
Equinix DC1-DC15, DC21 - Ashburn
10 Gbps [M]
100 Gbps [M]
Ashburn
iad-zone2-1
Equinix DC1-DC15, DC21 - Ashburn
10 Gbps [M]
100 Gbps [M]
Ashburn
iad-zone1-5467
CoreSite - Reston (VA3)
10 Gbps [M]
100 Gbps [M]
Ashburn
iad-zone2-5467
CoreSite - Reston (VA3)
10 Gbps [M]
100 Gbps [M]
Atlanta
atl-zone1-3725
Digital Realty ATL
10 Gbps [M]
100 Gbps [M]
Atlanta
atl-zone2-3725
Digital Realty ATL
10 Gbps [M]
100 Gbps [M]
Atlanta
atl-zone1-3853
zColo Atlanta - 1100 White SW
10 Gbps [M]
100 Gbps [M]
Atlanta
atl-zone1-940
Equinix AT1 - Atlanta
10 Gbps [M]
100 Gbps [M]
Atlanta
atl-zone2-940
Equinix AT1 - Atlanta
10 Gbps [M]
100 Gbps [M]
Chicago
ord-zone1-440
CoreSite - Chicago (CH1)
10 Gbps [M]
100 Gbps [M]
Chicago
ord-zone2-440
CoreSite - Chicago (CH1)
10 Gbps [M]
100 Gbps [M]
Chicago
ord-zone1-7
Equinix Chicago (CH1/CH2/CH4)
10 Gbps [M]
100 Gbps [M]
Chicago
ord-zone2-7
Equinix Chicago (CH1/CH2/CH4)
10 Gbps [M]
100 Gbps [M]
Dallas
dfw-zone1-4
Equinix Dallas (DA1)
10 Gbps [M]
100 Gbps [M]
Dallas
dfw-zone2-4
Equinix Dallas (DA1)
10 Gbps [M]
100 Gbps [M]
Denver
den-zone1-389
Coresite Denver
10 Gbps [M]
100 Gbps [M]
Denver
den-zone2-389
Coresite Denver
10 Gbps [M]
100 Gbps [M]
Los Angeles
lax-zone1-19
CoreSite - LA1 - One Wilshire
10 Gbps [M]
100 Gbps [M]
Los Angeles
lax-zone2-19
CoreSite - LA1 - One Wilshire
10 Gbps [M]
100 Gbps [M]
Los Angeles
lax-zone1-333
Equinix LA3/LA4 - Los Angeles, El Segundo
10 Gbps [M]
100 Gbps [M]
Los Angeles
lax-zone1-403
Digital Realty LAX (600 West 7th)
10 Gbps [M]
100 Gbps [M]
Los Angeles
lax-zone2-403
Digital Realty LAX (600 West 7th)
10 Gbps [M]
100 Gbps [M]
Los Angeles
lax-zone1-8
Equinix Los Angeles (LA1)
10 Gbps [M]
100 Gbps [M]
Los Angeles
lax-zone2-8
Equinix Los Angeles (LA1)
10 Gbps [M]
100 Gbps [M]
Miami
mia-zone1-15
Equinix Miami (MI1)
10 Gbps [M]
100 Gbps [M]
Miami
mia-zone2-15
Equinix Miami (MI1)
10 Gbps [M]
100 Gbps [M]
New York
lga-zone1-1422
DataBank New York (LGA1)
10 Gbps [M]
100 Gbps [M]
New York
lga-zone2-1422
DataBank New York (LGA1)
10 Gbps [M]
100 Gbps [M]
New York
lga-zone1-16
Digital Realty | Telx New York (111 8th Ave)
10 Gbps [M]
100 Gbps [M]
New York
lga-zone2-16
Digital Realty | Telx New York (111 8th Ave)
10 Gbps [M]
100 Gbps [M]
New York
lga-zone1-36
Equinix NY5 - New York, Secaucus
10 Gbps [M]
100 Gbps [M]
New York
lga-zone2-36
Equinix NY5 - New York, Secaucus
10 Gbps [M]
100 Gbps [M]
New York
lga-zone1-9
165 Halsey - 9th Floor MMR
10 Gbps [M]
100 Gbps [M]
Phoenix
phx-zone2-1488
CyrusOne Phoenix
10 Gbps [M]
100 Gbps [M]
Phoenix
phx-zone1-917
PhoenixNAP
10 Gbps [M]
100 Gbps [M]
Phoenix
phx-zone2-917
PhoenixNAP
10 Gbps [M]
100 Gbps [M]
Salt Lake City
slc-zone1-10938
DataBank Salt Lake City (SLC5)
10 Gbps [M]
100 Gbps [M]
Salt Lake City
slc-zone2-10938
DataBank Salt Lake City (SLC5)
10 Gbps [M]
100 Gbps [M]
Salt Lake City
slc-zone2-99001
Aligned Salt Lake (SLC-01)
10 Gbps [M]
100 Gbps [M]
San Francisco Bay Area
sfo-zone1-1619
CoreSite - Santa Clara (SV4)
10 Gbps [M]
100 Gbps [M]
San Francisco Bay Area
sfo-zone2-1619
CoreSite - Santa Clara (SV4)
10 Gbps [M]
100 Gbps [M]
San Francisco Bay Area
sjc-zone1-6
Equinix SV1/SV5/SV10 - Silicon Valley, San Jose
10 Gbps [M]
100 Gbps [M]
San Francisco Bay Area
sjc-zone2-6
Equinix SV1/SV5/SV10 - Silicon Valley, San Jose
10 Gbps [M]
100 Gbps [M]
Toronto
yyz-zone1-2206
Equinix Toronto (TR2)
10 Gbps [M]
100 Gbps [M]
Toronto
yyz-zone2-2206
Equinix Toronto (TR2)
10 Gbps [M]
100 Gbps [M]
Toronto
yyz-zone1-392
151 Front Street West
10 Gbps [M]
100 Gbps [M]
Toronto
yyz-zone2-392
151 Front Street West
10 Gbps [M]
100 Gbps [M]
Cross-Site Interconnect SLA availability
This section shows what SLA is available for a wire group the connects each pair
of metro availability zones. Select a metro from the Metro box to view the
SLAs between that metro and each other metro with which you can create a wire
group.
All
Ashburn
Atlanta
Chicago
Dallas
Denver
Frankfurt
Los Angeles
Marseille
Melbourne
Miami
New York
Paris
Perth
Phoenix
Salt Lake City
San Francisco Bay Area
Singapore
Stockholm
Sydney
Taipei
Tokyo
Toronto
Select an option Metro All
Ashburn
Atlanta
Chicago
Dallas
Denver
Frankfurt
Los Angeles
Marseille
Melbourne
Miami
New York
Paris
Perth
Phoenix
Salt Lake City
San Francisco Bay Area
Singapore
Stockholm
Sydney
Taipei
Tokyo
Toronto
Metro 1
Metro 2
Available SLA
Ashburn
Atlanta
99.95%
Ashburn
Chicago
99.95%
Ashburn
Dallas
99.95%
Ashburn
Denver
99.95%
Ashburn
Frankfurt
99.95%
Ashburn
Los Angeles
99.95%
Ashburn
Marseille
99.95%
Ashburn
Melbourne
99.95%
Ashburn
Miami
99.95%
Ashburn
New York
99.95%
Ashburn
Paris
99.95%
Ashburn
Perth
99.95%
Ashburn
Phoenix
99.95%
Ashburn
Salt Lake City
99.95%
Ashburn
San Francisco Bay Area
99.95%
Ashburn
Singapore
99.95%
Ashburn
Stockholm
99.95%
Ashburn
Sydney
99.95%
Ashburn
Taipei
99.95%
Ashburn
Tokyo
99.95%
Ashburn
Toronto
99.95%
Atlanta
Chicago
99.95%
Atlanta
Dallas
99.95%
Atlanta
Denver
99.95%
Atlanta
Frankfurt
99.95%
Atlanta
Los Angeles
99.95%
Atlanta
Marseille
99.95%
Atlanta
Melbourne
99.95%
Atlanta
Miami
99.95%
Atlanta
New York
99.95%
Atlanta
Paris
99.95%
Atlanta
Perth
99.95%
Atlanta
Phoenix
99.95%
Atlanta
Salt Lake City
99.95%
Atlanta
San Francisco Bay Area
99.95%
Atlanta
Singapore
99.95%
Atlanta
Stockholm
99.95%
Atlanta
Sydney
99.95%
Atlanta
Taipei
99.95%
Atlanta
Tokyo
99.95%
Atlanta
Toronto
99.95%
Chicago
Dallas
99.95%
Chicago
Denver
99.95%
Chicago
Frankfurt
99.95%
Chicago
Los Angeles
99.95%
Chicago
Marseille
99.95%
Chicago
Melbourne
99.95%
Chicago
Miami
99.95%
Chicago
New York
99.95%
Chicago
Paris
99.95%
Chicago
Perth
99.95%
Chicago
Phoenix
99.95%
Chicago
Salt Lake City
99.95%
Chicago
San Francisco Bay Area
99.95%
Chicago
Singapore
99.95%
Chicago
Stockholm
99.95%
Chicago
Sydney
99.95%
Chicago
Taipei
99.95%
Chicago
Tokyo
99.95%
Chicago
Toronto
99.95%
Dallas
Denver
99.95%
Dallas
Frankfurt
99.95%
Dallas
Los Angeles
99.95%
Dallas
Marseille
99.95%
Dallas
Melbourne
99.95%
Dallas
Miami
99.95%
Dallas
New York
99.95%
Dallas
Paris
99.95%
Dallas
Perth
99.95%
Dallas
Phoenix
99.95%
Dallas
Salt Lake City
99.95%
Dallas
San Francisco Bay Area
99.95%
Dallas
Singapore
99.95%
Dallas
Stockholm
99.95%
Dallas
Sydney
99.95%
Dallas
Taipei
99.95%
Dallas
Tokyo
99.95%
Dallas
Toronto
99.95%
Denver
Frankfurt
99.95%
Denver
Los Angeles
99.95%
Denver
Marseille
99.95%
Denver
Melbourne
99.95%
Denver
Miami
99.95%
Denver
New York
99.95%
Denver
Paris
99.95%
Denver
Perth
99.95%
Denver
Phoenix
99.95%
Denver
Salt Lake City
99.95%
Denver
San Francisco Bay Area
99.95%
Denver
Singapore
99.95%
Denver
Stockholm
99.95%
Denver
Sydney
99.95%
Denver
Taipei
99.95%
Denver
Tokyo
99.95%
Denver
Toronto
99.95%
Frankfurt
Los Angeles
99.95%
Frankfurt
Marseille
99.95%
Frankfurt
Melbourne
99.95%
Frankfurt
Miami
99.95%
Frankfurt
New York
99.95%
Frankfurt
Paris
99.95%
Frankfurt
Phoenix
99.95%
Frankfurt
Salt Lake City
99.95%
Frankfurt
San Francisco Bay Area
99.95%
Frankfurt
Stockholm
99.95%
Frankfurt
Sydney
99.95%
Frankfurt
Tokyo
99.95%
Frankfurt
Toronto
99.95%
Los Angeles
Marseille
99.95%
Los Angeles
Melbourne
99.95%
Los Angeles
Miami
99.95%
Los Angeles
New York
99.95%
Los Angeles
Paris
99.95%
Los Angeles
Perth
99.95%
Los Angeles
Phoenix
99.95%
Los Angeles
Salt Lake City
99.95%
Los Angeles
San Francisco Bay Area
99.95%
Los Angeles
Singapore
99.95%
Los Angeles
Stockholm
99.95%
Los Angeles
Sydney
99.95%
Los Angeles
Taipei
99.95%
Los Angeles
Tokyo
99.95%
Los Angeles
Toronto
99.95%
Marseille
Melbourne
99.95%
Marseille
Miami
99.95%
Marseille
New York
99.95%
Marseille
Paris
99.95%
Marseille
Phoenix
99.95%
Marseille
Salt Lake City
99.95%
Marseille
San Francisco Bay Area
99.95%
Marseille
Stockholm
99.95%
Marseille
Sydney
99.95%
Marseille
Taipei
99.95%
Marseille
Tokyo
99.95%
Marseille
Toronto
99.95%
Melbourne
Miami
99.95%
Melbourne
New York
99.95%
Melbourne
Paris
99.95%
Melbourne
Perth
99.95%
Melbourne
Phoenix
99.95%
Melbourne
Salt Lake City
99.95%
Melbourne
San Francisco Bay Area
99.95%
Melbourne
Singapore
99.95%
Melbourne
Stockholm
99.95%
Melbourne
Sydney
99.95%
Melbourne
Taipei
99.95%
Melbourne
Tokyo
99.95%
Melbourne
Toronto
99.95%
Miami
New York
99.95%
Miami
Paris
99.95%
Miami
Perth
99.95%
Miami
Phoenix
99.95%
Miami
Salt Lake City
99.95%
Miami
San Francisco Bay Area
99.95%
Miami
Singapore
99.95%
Miami
Stockholm
99.95%
Miami
Sydney
99.95%
Miami
Taipei
99.95%
Miami
Tokyo
99.95%
Miami
Toronto
99.95%
New York
Paris
99.95%
New York
Perth
99.95%
New York
Phoenix
99.95%
New York
Salt Lake City
99.95%
New York
San Francisco Bay Area
99.95%
New York
Singapore
99.95%
New York
Stockholm
99.95%
New York
Sydney
99.95%
New York
Taipei
99.95%
New York
Tokyo
99.95%
New York
Toronto
99.95%
Paris
Phoenix
99.95%
Paris
Salt Lake City
99.95%
Paris
San Francisco Bay Area
99.95%
Paris
Stockholm
99.95%
Paris
Sydney
99.95%
Paris
Taipei
99.95%
Paris
Tokyo
99.95%
Paris
Toronto
99.95%
Perth
Phoenix
99.95%
Perth
Salt Lake City
99.95%
Perth
San Francisco Bay Area
99.95%
Perth
Singapore
99.95%
Perth
Sydney
99.95%
Perth
Taipei
99.95%
Perth
Tokyo
99.95%
Perth
Toronto
99.95%
Phoenix
Salt Lake City
99.95%
Phoenix
San Francisco Bay Area
99.95%
Phoenix
Singapore
99.95%
Phoenix
Stockholm
99.95%
Phoenix
Sydney
99.95%
Phoenix
Taipei
99.95%
Phoenix
Tokyo
99.95%
Phoenix
Toronto
99.95%
Salt Lake City
San Francisco Bay Area
99.95%
Salt Lake City
Singapore
99.95%
Salt Lake City
Stockholm
99.95%
Salt Lake City
Sydney
99.95%
Salt Lake City
Taipei
99.95%
Salt Lake City
Tokyo
99.95%
Salt Lake City
Toronto
99.95%
San Francisco Bay Area
Singapore
99.95%
San Francisco Bay Area
Stockholm
99.95%
San Francisco Bay Area
Sydney
99.95%
San Francisco Bay Area
Taipei
99.95%
San Francisco Bay Area
Tokyo
99.95%
San Francisco Bay Area
Toronto
99.95%
Singapore
Sydney
99.95%
Singapore
Taipei
99.95%
Singapore
Tokyo
99.95%
Singapore
Toronto
99.95%
Stockholm
Sydney
99.95%
Stockholm
Taipei
99.95%
Stockholm
Tokyo
99.95%
Stockholm
Toronto
99.95%
Sydney
Taipei
99.95%
Sydney
Tokyo
99.95%
Sydney
Toronto
99.95%
Taipei
Tokyo
99.95%
Taipei
Toronto
99.95%
Tokyo
Toronto
99.95%
If you have an existing wire group, you can view the SLA that is
available for your wire group by checking the availabilityClass field in the
gcloud compute interconnects wire-groups describe
command output. For more information about viewing wire groups, see
View cross-site networks .
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
