---
title: "All colocation facilities \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/choosing-colocation-facilities
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/choosing-colocation-facilities
  title: "All colocation facilities \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

All colocation facilities | Cloud Interconnect | Google Cloud Documentation
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
Establish 99. 99% availability
Establish 99. 9% availability
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
Requirements and recommendations Choose a location for Dedicated Interconnect
Low-latency locations
Other Google Cloud location options
Locations table
Special Considerations
What's next
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
All colocation facilities
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Requirements and recommendations Choose a location for Dedicated Interconnect
Low-latency locations
Other Google Cloud location options
Locations table
Special Considerations
What's next
Dedicated Interconnect connections are available from 161 locations.
For more information, see geography and regions .
This page lists all the locations where you can create
Dedicated Interconnect connections.
To list locations , you can
also use the Google Cloud console or the Google Cloud CLI.
Requirements and recommendations
Before you set up Dedicated Interconnect, your network must
physically meet Google's network in a supported colocation facility, also known
as a connection location. This facility is where a vendor, the colocation
facility provider, provisions a circuit between your network and a Google Edge
point of presence (PoP).
For more information, see the
Dedicated Interconnect overview .
Choose a location for Dedicated Interconnect
In the Locations table , each geographic area
lists the regions in which you can create VLAN attachments.
The region you choose affects latency and outbound data transfer costs
for Dedicated Interconnect. For example, if you have VMs in
region us-east4 , you might select a location in Ashburn, create your
Dedicated Interconnect connection in Ashburn, and then create a
VLAN attachment in us-east4 . Your traffic then doesn't have to travel far
to move between your VMs and the Dedicated Interconnect
connection, which results in lower latency than, for example, creating a
Dedicated Interconnect connection and a VLAN attachment in Europe.
Also, it's more cost-effective to create VLAN attachments in the same
regions as your VMs because you don't have to pay inter-region outbound data
transfer costs when VMs send traffic to your on-premises network.
Low-latency locations
In general, you achieve the lowest latency in a region by connecting in
locations that are geographically situated in the metropolitan area closest to
that region.
If your Google Cloud workload requires low latency, choose a location from
the table that lists a region in the Low-latency region column. Then, create
your VLAN attachments in that region.
Other Google Cloud location options
For other location options, such as network edge locations or
Cloud CDN locations, see
Choosing a product .
Locations table
In the following table, locations are organized by metropolitan area, and then
by edge availability domain (metro availability zone). The name of each location
indicates its edge availability domain, such as the zone1 in iad-zone1-1 .
Note: For information about which service providers are in each colocation
facility, contact the facility provider or view the facility provider's website
that's listed in PeeringDB. If the name of the facility provider is not hyperlinked,
then the facility provider does not have a published entry in PeeringDB for
the location.
Africa Asia Oceania EMEA India North America South America
More
The Africa geographic area supports the following regions:
africa-south1 (Johannesburg)
europe-west2 (London)
Metropolitan area
Colocation facility name
Facility
Low-latency region
Link type & MACsec support [M]
Cape Town
cpt-zone1-99025 ¹
Teraco Cape Town, South Africa
10 Gbps [M]
100 Gbps [M]
Cape Town
cpt-zone2-99025 ¹
Teraco Cape Town, South Africa
10 Gbps [M]
100 Gbps [M]
Johannesburg
jnb-zone1-850
Teraco Johannesburg Campus, South Africa
africa-south1
10 Gbps [M]
100 Gbps [M]
Johannesburg
jnb-zone2-850
Teraco Johannesburg Campus, South Africa
africa-south1
10 Gbps [M]
100 Gbps [M]
Johannesburg
jnb-zone1-9338
Africa Data Centres, Johannesburg JHB2
africa-south1
10 Gbps [M]
100 Gbps [M]
Johannesburg
jnb-zone2-9338
Africa Data Centres, Johannesburg JHB2
africa-south1
10 Gbps [M]
100 Gbps [M]
Nairobi
nbo-zone1-99029
Africa Data Centres, Nairobi NBO1
10 Gbps [M]
100 Gbps [M]
Nairobi
nbo-zone2-99029
Africa Data Centres, Nairobi NBO1
10 Gbps [M]
100 Gbps [M]
The Asia geographic area supports the following regions:
asia-east1 (Taiwan)
asia-east2 (Hong Kong)
asia-northeast1 (Tokyo)
asia-northeast2 (Osaka)
asia-northeast3 (Seoul)
asia-southeast1 (Singapore)
asia-southeast2 (Jakarta)
asia-southeast3 (Bangkok)
Metropolitan area
Colocation facility name
Facility
Low-latency region
Link type & MACsec support [M]
Bangkok
bkk-zone1-4001
CS LoxInfo Data Center - The Cloud
asia-southeast3
10 Gbps [M]
100 Gbps [M]
Bangkok
bkk-zone2-4001
CS LoxInfo Data Center - The Cloud
asia-southeast3
10 Gbps [M]
100 Gbps [M]
Bangkok
bkk-zone1-6323
True IDC - North Muang Thong, Thailand
asia-southeast3
10 Gbps [M]
100 Gbps [M]
Bangkok
bkk-zone2-6323
True IDC - North Muang Thong, Thailand
asia-southeast3
10 Gbps [M]
100 Gbps [M]
Hong Kong
hkg-zone1-1118
Equinix Hong Kong (HK2)
asia-east2
10 Gbps [M]
100 Gbps [M]
Hong Kong
hkg-zone2-1118
Equinix Hong Kong (HK2)
asia-east2
10 Gbps [M]
100 Gbps [M]
Hong Kong
hkg-zone2-225
MEGA-i (iAdvantage Hong Kong)
asia-east2
10 Gbps [M]
100 Gbps [M]
Hsinchu
hsz-zone1-10843 ¹
CHT Zhubei IDC
10 Gbps [M]
100 Gbps [M]
Hsinchu
hsz-zone2-10843 ¹
CHT Zhubei IDC
10 Gbps [M]
100 Gbps [M]
Jakarta
cgk-zone1-5865
NTT Com Jakarta
asia-southeast2
10 Gbps [M]
100 Gbps [M]
Jakarta
cgk-zone2-5865
NTT Com Jakarta
asia-southeast2
10 Gbps [M]
100 Gbps [M]
Jakarta
cgk-zone1-8168
DCI Indonesia
asia-southeast2
10 Gbps [M]
100 Gbps [M]
Jakarta
cgk-zone2-8168
DCI Indonesia
asia-southeast2
10 Gbps [M]
100 Gbps [M]
Kuala Lumpur
kul-zone1-1514
CSF CX2 Cyberjaya
10 Gbps [M]
Kuala Lumpur
kul-zone2-1514
CSF CX2 Cyberjaya
10 Gbps [M]
100 Gbps [M]
Kuala Lumpur
kul-zone1-460
AIMS Kuala Lumpur
10 Gbps [M]
100 Gbps [M]
Kuala Lumpur
kul-zone2-460
AIMS Kuala Lumpur
10 Gbps [M]
100 Gbps [M]
Manila
mnl-zone1-99027
ePLDT Vitro Makati
10 Gbps [M]
100 Gbps [M]
Manila
mnl-zone2-99027
ePLDT Vitro Makati
10 Gbps [M]
100 Gbps [M]
Manila
mnl-zone1-99028
Globe Roosevelt (QC2)
10 Gbps [M]
100 Gbps [M]
Manila
mnl-zone2-99028
Globe Roosevelt (QC2)
10 Gbps [M]
100 Gbps [M]
Osaka
kix-zone1-2072
NTT Telepark Dojima Building 2
asia-northeast2
10 Gbps [M]
100 Gbps [M]
Osaka
kix-zone2-2072
NTT Telepark Dojima Building 2
asia-northeast2
10 Gbps [M]
100 Gbps [M]
Osaka
kix-zone1-1791
Equinix Osaka (OS1)
asia-northeast2
10 Gbps [M]
100 Gbps [M]
Osaka
kix-zone2-1791
Equinix Osaka (OS1)
asia-northeast2
10 Gbps [M]
100 Gbps [M]
Seoul
icn-zone2-3829
Sejong IX Center
asia-northeast3
10 Gbps [M]
100 Gbps [M]
Seoul
icn-zone2-7574
LG Uplus SEOCHO1 IDC
asia-northeast3
10 Gbps [M]
100 Gbps [M]
Seoul
icn-zone2-7674
KINX Gasan
asia-northeast3
10 Gbps [M]
100 Gbps [M]
Singapore
sin-zone1-2260
Equinix Singapore (SG3)
asia-southeast1
10 Gbps [M]
100 Gbps [M]
Singapore
sin-zone2-2260
Equinix Singapore (SG3)
asia-southeast1
10 Gbps [M]
100 Gbps [M]
400 Gbps [M]
Singapore
sin-zone1-388
Global Switch Singapore
asia-southeast1
10 Gbps [M]
100 Gbps [M]
400 Gbps [M]
Singapore
sin-zone2-388
Global Switch Singapore
asia-southeast1
10 Gbps [M]
100 Gbps [M]
Taipei
tsa-zone1-2886
CHT Taipei-Aikuo IDC
asia-east1
10 Gbps [M]
100 Gbps [M]
Taipei
tsa-zone2-2886
CHT Taipei-Aikuo IDC
asia-east1
10 Gbps [M]
100 Gbps [M]
Taipei
tsa-zone1-456
Chief LY Building Taipei
asia-east1
10 Gbps [M]
100 Gbps [M]
Taipei
tsa-zone2-456
Chief LY Building Taipei
asia-east1
10 Gbps [M]
100 Gbps [M]
Taipei
tsa-zone1-99004
Asia Pacific Telecom Co., Ltd.
asia-east1
10 Gbps [M]
100 Gbps [M]
Taipei
tsa-zone2-99004
Asia Pacific Telecom Co., Ltd.
asia-east1
10 Gbps [M]
100 Gbps [M]
Tokyo
nrt-zone1-1893
Equinix Tokyo (TY4)
asia-northeast1
10 Gbps [M]
100 Gbps [M]
Tokyo
nrt-zone2-1893
Equinix Tokyo (TY4)
asia-northeast1
10 Gbps [M]
100 Gbps [M]
Tokyo
nrt-zone1-452
Equinix Tokyo (TY2)
asia-northeast1
10 Gbps [M]
100 Gbps [M]
Tokyo
nrt-zone2-452
Equinix Tokyo (TY2)
asia-northeast1
10 Gbps [M]
100 Gbps [M]
Tokyo
nrt-zone1-599
ComSpace I
asia-northeast1
10 Gbps [M]
100 Gbps [M]
Tokyo
nrt-zone2-599
ComSpace I
asia-northeast1
10 Gbps [M]
100 Gbps [M]
Tokyo
nrt-zone1-738
AT Tokyo CC2
asia-northeast1
10 Gbps [M]
100 Gbps [M]
Tokyo
nrt-zone2-738
AT Tokyo CC2
asia-northeast1
10 Gbps [M]
100 Gbps [M]
The Oceania geographic area supports the following regions:
australia-southeast1 (Sydney)
australia-southeast2 (Melbourne)
Metropolitan area
Colocation facility name
Facility
Low-latency region
Link type & MACsec support [M]
Auckland
akl-zone1-1353 ¹
Vocus Auckland - Albany
10 Gbps [M]
100 Gbps [M]
Auckland
akl-zone2-1353 ¹
Vocus Auckland - Albany
10 Gbps [M]
100 Gbps [M]
Brisbane
bne-zone1-4688 ¹
NEXTDC B2
10 Gbps [M]
100 Gbps [M]
Brisbane
bne-zone2-4688 ¹
NEXTDC B2
10 Gbps [M]
100 Gbps [M]
Canberra
cbr-zone1-9378 ¹
Equinix CA1 - Canberra
10 Gbps [M]
100 Gbps [M]
Canberra
cbr-zone2-9378 ¹
Equinix CA1 - Canberra
10 Gbps [M]
100 Gbps [M]
Melbourne
mel-zone1-1988
Equinix ME1/ME2 - Melbourne
australia-southeast2
10 Gbps [M]
100 Gbps [M]
Melbourne
mel-zone2-1988
Equinix ME1/ME2 - Melbourne
australia-southeast2
10 Gbps [M]
100 Gbps [M]
Melbourne
mel-zone1-4843
NEXTDC M2
australia-southeast2
10 Gbps [M]
100 Gbps [M]
Melbourne
mel-zone2-4843
NEXTDC M2
australia-southeast2
10 Gbps [M]
100 Gbps [M]
Perth
per-zone1-5749 ¹
Equinix PE2 - Perth (formerly Metronode Perth 2)
10 Gbps [M]
100 Gbps [M]
Perth
per-zone2-5749 ¹
Equinix PE2 - Perth (formerly Metronode Perth 2)
10 Gbps [M]
100 Gbps [M]
Sydney
syd-zone1-1605
Equinix Sydney (SY3)
australia-southeast1
10 Gbps [M]
100 Gbps [M]
Sydney
syd-zone2-1605
Equinix Sydney (SY3)
australia-southeast1
10 Gbps [M]
100 Gbps [M]
Sydney
syd-zone1-1660
NEXTDC S1
australia-southeast1
10 Gbps [M]
100 Gbps [M]
Sydney
syd-zone2-1660
NEXTDC S1
australia-southeast1
10 Gbps [M]
100 Gbps [M]
The EMEA geographic area supports the following regions:
europe-central2 (Poland)
europe-north1 (Finland)
europe-north2 (Stockholm)
europe-west1 (Belgium)
europe-west2 (UK)
europe-west3 (Germany)
europe-west4 (Netherlands)
europe-west6 (Zurich)
europe-west8 (Milan)
europe-west9 (Paris)
europe-west10 (Berlin)
europe-west12 (Turin)
europe-southwest1 (Madrid)
me-west1 (Tel Aviv)
me-central1 (Doha)
me-central2 (Dammam)
Metropolitan area
Colocation facility name
Facility
Low-latency region
Link type & MACsec support [M]
Amsterdam
ams-zone1-1236
Equinix Amsterdam Schepenbergweg (AM5) (formerly Telecity AMS5)
europe-west4
10 Gbps [M]
100 Gbps [M]
Amsterdam
ams-zone2-1236
Equinix Amsterdam Schepenbergweg (AM5) (formerly Telecity AMS5)
europe-west4
10 Gbps [M]
100 Gbps [M]
Amsterdam
ams-zone1-1320
Equinix Amsterdam (AM3)
europe-west4
10 Gbps [M]
100 Gbps [M]
Amsterdam
ams-zone2-1320
Equinix Amsterdam (AM3)
europe-west4
10 Gbps [M]
100 Gbps [M]
Athens
ath-zone1-1949 ¹
Digital Realty Athens Campus (ATH1, ATH2, ATH3)
10 Gbps [M]
100 Gbps [M]
Athens
ath-zone2-1949 ¹
Digital Realty Athens Campus (ATH1, ATH2, ATH3)
10 Gbps [M]
100 Gbps [M]
Barcelona
bcn-zone1-122 ¹
Equinix BA1 - Barcelona
10 Gbps [M]
100 Gbps [M]
Barcelona
bcn-zone2-122 ¹
Equinix BA1 - Barcelona
10 Gbps [M]
100 Gbps [M]
Berlin
ber-zone1-331
Level(3) Berlin
europe-west10
10 Gbps [M]
100 Gbps [M]
Berlin
ber-zone2-331
Level(3) Berlin
europe-west10
10 Gbps [M]
100 Gbps [M]
Berlin
ber-zone1-478
NTT Berlin 1 Data Center (BER1)
europe-west10
10 Gbps [M]
100 Gbps [M]
Berlin
ber-zone2-478
NTT Berlin 1 Data Center (BER1)
europe-west10
10 Gbps [M]
100 Gbps [M]
Brussels
bru-zone1-68 ¹
Digital Realty Brussels (BRU1)
europe-west1
10 Gbps [M]
100 Gbps [M]
Brussels
bru-zone2-68 ¹
Digital Realty Brussels (BRU1)
europe-west1
10 Gbps [M]
100 Gbps [M]
Bucharest
otp-zone1-99039 ¹
NXDATA-1 Bucharest Romania (BU1)
10 Gbps [M]
100 Gbps [M]
Bucharest
otp-zone2-99039 ¹
NXDATA-1 Bucharest Romania (BU1)
10 Gbps [M]
100 Gbps [M]
Copenhagen
cph-zone1-148 ¹
Digital Realty Copenhagen CPH1-3
10 Gbps [M]
100 Gbps [M]
Copenhagen
cph-zone2-148 ¹
Digital Realty Copenhagen CPH1-3
10 Gbps [M]
100 Gbps [M]
Dammam
dmm-zone1-99049
Quantum Switch DMM A
me-central2
10 Gbps [M]
100 Gbps [M]
Dammam
dmm-zone2-99049
Quantum Switch DMM A
me-central2
10 Gbps [M]
100 Gbps [M]
Dammam
dmm-zone1-99055
Saudi Telecom Company (STC) DMM52
me-central2
10 Gbps [M]
100 Gbps [M]
Dammam
dmm-zone2-99055
Saudi Telecom Company (STC) DMM52
me-central2
10 Gbps [M]
100 Gbps [M]
Doha
dia-zone1-99011
Ooredoo QDC5 (Qatar Data Center Ooredoo)
me-central1
10 Gbps [M]
100 Gbps [M]
Doha
dia-zone2-99011
Ooredoo QDC5 (Qatar Data Center Ooredoo)
me-central1
10 Gbps [M]
100 Gbps [M]
Doha
dia-zone1-99036
Quantum Switch (QSDC) DOA A
me-central1
10 Gbps [M]
100 Gbps [M]
Doha
dia-zone2-99036
Quantum Switch (QSDC) DOA A
me-central1
10 Gbps [M]
100 Gbps [M]
Dubai
dxb-zone1-1355 ¹
Equinix DX1 - Dubai
10 Gbps [M]
100 Gbps [M]
Dubai
dxb-zone2-1355 ¹
Equinix DX1 - Dubai
10 Gbps [M]
100 Gbps [M]
Dublin
dub-zone1-4484 ¹
Keppel Data Centre Dublin 1
10 Gbps [M]
100 Gbps [M]
Dublin
dub-zone2-4484 ¹
Keppel Data Centre Dublin 1
10 Gbps [M]
100 Gbps [M]
Dusseldorf
dus-zone1-106 ¹
Digital Realty Dusseldorf DUS1-2
10 Gbps [M]
100 Gbps [M]
Dusseldorf
dus-zone2-106 ¹
Digital Realty Dusseldorf DUS1-2
10 Gbps [M]
100 Gbps [M]
Frankfurt
fra-zone1-277
e-shelter Frankfurt (FRA1)
europe-west3
10 Gbps [M]
100 Gbps [M]
Frankfurt
fra-zone2-277
e-shelter Frankfurt (FRA1)
europe-west3
10 Gbps [M]
100 Gbps [M]
Frankfurt
fra-zone1-58
Digital Realty Frankfurt FRA1-16
europe-west3
10 Gbps [M]
100 Gbps [M]
Frankfurt
fra-zone2-58
Digital Realty Frankfurt FRA1-16
europe-west3
10 Gbps [M]
100 Gbps [M]
400 Gbps [M]
Frankfurt
fra-zone1-683
Equinix Frankfurt West (FR4)
europe-west3
10 Gbps [M]
100 Gbps [M]
400 Gbps [M]
Frankfurt
fra-zone2-683
Equinix Frankfurt West (FR4)
europe-west3
10 Gbps [M]
100 Gbps [M]
Geneva
gva-zone1-826 ¹
Equinix GV2 - Geneva, West
10 Gbps [M]
100 Gbps [M]
Geneva
gva-zone2-826 ¹
Equinix GV2 - Geneva, West
10 Gbps [M]
100 Gbps [M]
Hamburg
ham-zone1-1686
GlobalConnect Hamburg (HAM1) (was Telia)
10 Gbps [M]
100 Gbps [M]
Hamburg
ham-zone2-1686
GlobalConnect Hamburg (HAM1) (was Telia)
10 Gbps [M]
100 Gbps [M]
Hamburg
ham-zone1-427
CenturyLink Hamburg (was Level 3)
10 Gbps [M]
100 Gbps [M]
Hamburg
ham-zone2-427
CenturyLink Hamburg (was Level 3)
10 Gbps [M]
100 Gbps [M]
Helsinki
hem-zone1-7098
Equinix HE7 Helsinki Sinimäki
europe-north1
10 Gbps [M]
100 Gbps [M]
Helsinki
hem-zone2-7098
Equinix HE7 Helsinki Sinimäki
europe-north1
10 Gbps [M]
100 Gbps [M]
Helsinki
hem-zone1-8128
Telia Helsinki Datacenter
europe-north1
10 Gbps [M]
100 Gbps [M]
Helsinki
hem-zone2-8128
Telia Helsinki Datacenter
europe-north1
10 Gbps [M]
100 Gbps [M]
Lisbon
lis-zone1-126 ¹
Equinix LS1 - Lisbon
10 Gbps [M]
100 Gbps [M]
Lisbon
lis-zone2-126 ¹
Equinix LS1 - Lisbon
10 Gbps [M]
100 Gbps [M]
London
lhr-zone1-2262
Equinix London Slough (LD6)
europe-west2
10 Gbps [M]
100 Gbps [M]
London
lhr-zone2-832
Equinix London Slough (LD5-LD6)
europe-west2
10 Gbps [M]
100 Gbps [M]
Madrid
mad-zone1-127
Equinix MD2 - Madrid
europe-southwest1
10 Gbps [M]
100 Gbps [M]
Madrid
mad-zone2-127
Equinix MD2 - Madrid
europe-southwest1
10 Gbps [M]
100 Gbps [M]
Madrid
mad-zone1-130
Digital Realty Madrid MAD1-2
europe-southwest1
10 Gbps [M]
100 Gbps [M]
Madrid
mad-zone2-130
Digital Realty Madrid MAD1-2
europe-southwest1
10 Gbps [M]
100 Gbps [M]
Madrid
mad-zone1-99037
Telefónica Nabiax Alcala datacentre
europe-southwest1
10 Gbps [M]
100 Gbps [M]
Madrid
mad-zone2-99037
Telefónica Nabiax Alcala datacentre
europe-southwest1
10 Gbps [M]
100 Gbps [M]
Madrid
mad-zone1-99038
Telefónica Julián Camarillo
europe-southwest1
10 Gbps [M]
100 Gbps [M]
Madrid
mad-zone2-99038
Telefónica Julián Camarillo
europe-southwest1
10 Gbps [M]
100 Gbps [M]
Manchester
man-zone1-1403 ¹
Equinix MA3 - Manchester, Joule House
10 Gbps [M]
100 Gbps [M]
Manchester
man-zone2-1403 ¹
Equinix MA3 - Manchester, Joule House
10 Gbps [M]
100 Gbps [M]
Marseille
mrs-zone1-226 ¹
Digital Realty Marseille MRS1-3
10 Gbps [M]
100 Gbps [M]
Marseille
mrs-zone2-226 ¹
Digital Realty Marseille MRS1-3
10 Gbps [M]
100 Gbps [M]
Milan
mil-zone1-1974
IRIDEOS Avalon Campus
europe-west8
10 Gbps [M]
100 Gbps [M]
Milan
mil-zone2-1974
IRIDEOS Avalon Campus
europe-west8
10 Gbps [M]
100 Gbps [M]
Milan
mil-zone2-99013
Telecom Italia Sparkle Milano Data Center
europe-west8
10 Gbps [M]
100 Gbps [M]
Milan
mil-zone1-99034
Telecom Italia Rozzano Data Center
europe-west8
10 Gbps [M]
100 Gbps [M]
Milan
mil-zone2-99034
Telecom Italia Rozzano Data Center
europe-west8
10 Gbps [M]
100 Gbps [M]
Munich
muc-zone1-480 ¹
Equinix Munich (MU1)
10 Gbps [M]
100 Gbps [M]
Munich
muc-zone2-480 ¹
Equinix Munich (MU1)
10 Gbps [M]
100 Gbps [M]
Oslo
osl-zone1-5518 ¹
Bulk Oslo Internet Exchange - OS-IX
europe-north3
10 Gbps [M]
100 Gbps [M]
Oslo
osl-zone2-5518 ¹
Bulk Oslo Internet Exchange - OS-IX
europe-north3
10 Gbps [M]
100 Gbps [M]
Paris
cdg-zone1-1536
Digital Realty Paris PAR7
europe-west9
10 Gbps [M]
100 Gbps [M]
Paris
cdg-zone2-1536
Digital Realty Paris PAR7
europe-west9
10 Gbps [M]
100 Gbps [M]
Paris
cdg-zone1-181
Global Switch (Paris)
europe-west9
10 Gbps [M]
100 Gbps [M]
Paris
cdg-zone2-181
Global Switch (Paris)
europe-west9
10 Gbps [M]
100 Gbps [M]
Paris
cdg-zone1-3342
DATA4 Paris Marcoussis
europe-west9
10 Gbps [M]
100 Gbps [M]
Paris
cdg-zone2-3342
DATA4 Paris Marcoussis
europe-west9
10 Gbps [M]
100 Gbps [M]
Paris
cdg-zone1-53
Telehouse - Paris 2 (Voltaire - Léon Frot)
europe-west9
10 Gbps [M]
100 Gbps [M]
Paris
cdg-zone2-53
Telehouse - Paris 2 (Voltaire - Léon Frot)
europe-west9
10 Gbps [M]
100 Gbps [M]
Prague
prg-zone1-214 ¹
CE Colo Prague
10 Gbps [M]
100 Gbps [M]
Prague
prg-zone2-214 ¹
CE Colo Prague
10 Gbps [M]
100 Gbps [M]
Sofia
sof-zone1-663
TELEPOINT Sofia Centre
10 Gbps [M]
100 Gbps [M]
Sofia
sof-zone2-663
TELEPOINT Sofia Centre
10 Gbps [M]
100 Gbps [M]
Sofia
sof-zone1-7097
Equinix SO2 - Sofia
10 Gbps [M]
100 Gbps [M]
Sofia
sof-zone2-7097
Equinix SO2 - Sofia
10 Gbps [M]
100 Gbps [M]
Stockholm
arn-zone1-156
Equinix Stockholm Bromma (SK1)
europe-north2
10 Gbps [M]
100 Gbps [M]
Stockholm
arn-zone2-156
Equinix Stockholm Bromma (SK1)
europe-north2
10 Gbps [M]
100 Gbps [M]
Stockholm
arn-zone1-208
Digital Realty Stockholm STO1-6
europe-north2
10 Gbps [M]
100 Gbps [M]
Stockholm
arn-zone2-208
Digital Realty Stockholm STO1-6
europe-north2
10 Gbps [M]
100 Gbps [M]
Tel Aviv
tlv-zone1-99030
TIS Tel Aviv Burla Hub and Data Center
me-west1
10 Gbps [M]
100 Gbps [M]
Tel Aviv
tlv-zone2-99030
TIS Tel Aviv Burla Hub and Data Center
me-west1
10 Gbps [M]
100 Gbps [M]
Tel Aviv
tlv-zone1-99047
SDS1 Modiin
me-west1
10 Gbps [M]
100 Gbps [M]
Tel Aviv
tlv-zone2-99047
SDS1 Modiin
me-west1
10 Gbps [M]
100 Gbps [M]
Turin
trn-zone1-99032
Telecom Italia Cebrosa Campus
europe-west12
10 Gbps [M]
100 Gbps [M]
Turin
trn-zone2-99032
Telecom Italia Cebrosa Campus
europe-west12
10 Gbps [M]
100 Gbps [M]
Turin
trn-zone1-99033
Telecom Italia Moncalieri Campus
europe-west12
10 Gbps [M]
100 Gbps [M]
Turin
trn-zone2-99033
Telecom Italia Moncalieri Campus
europe-west12
10 Gbps [M]
100 Gbps [M]
Vienna
vie-zone1-67 ¹
Digital Realty Vienna VIE1-2
10 Gbps [M]
100 Gbps [M]
Vienna
vie-zone2-67 ¹
Digital Realty Vienna VIE1-2
10 Gbps [M]
100 Gbps [M]
Warsaw
waw-zone1-2570
Atman Data Center Warsaw-1 (waw-1, Grochowska)
europe-central2
10 Gbps [M]
100 Gbps [M]
Warsaw
waw-zone2-2570
Atman Data Center Warsaw-1 (waw-1, Grochowska)
europe-central2
10 Gbps [M]
100 Gbps [M]
Warsaw
waw-zone1-509
Equinix WA1 - Warsaw, Centrum LIM
europe-central2
10 Gbps [M]
100 Gbps [M]
Warsaw
waw-zone2-509
Equinix WA1 - Warsaw, Centrum LIM
europe-central2
10 Gbps [M]
100 Gbps [M]
Zurich
zrh-zone1-1086
greenDatacenter Lupfig
europe-west6
10 Gbps [M]
100 Gbps [M]
Zurich
zrh-zone2-1086
greenDatacenter Lupfig
europe-west6
10 Gbps [M]
100 Gbps [M]
Zurich
zrh-zone1-81
Digital Realty Zurich ZUR1
europe-west6
10 Gbps [M]
100 Gbps [M]
Zurich
zrh-zone2-81
Digital Realty Zurich ZUR1
europe-west6
10 Gbps [M]
100 Gbps [M]
Zurich
zrh-zone1-83
Equinix ZH2
europe-west6
10 Gbps [M]
100 Gbps [M]
Zurich
zrh-zone2-83
Equinix ZH2
europe-west6
10 Gbps [M]
100 Gbps [M]
The India geographic area supports the following regions:
asia-south1 (Mumbai)
asia-south2 (Delhi)
Metropolitan area
Colocation facility name
Facility
Low-latency region
Link type & MACsec support [M]
Chennai
maa-zone1-4701
Netmagic Chennai
10 Gbps [M]
100 Gbps [M]
Chennai
maa-zone2-4701
Netmagic Chennai
10 Gbps [M]
100 Gbps [M]
Chennai
maa-zone1-552
TATA Communications Chennai
10 Gbps [M]
100 Gbps [M]
Chennai
maa-zone2-552
TATA Communications Chennai
10 Gbps [M]
100 Gbps [M]
Delhi
del-zone1-1622
TATA Communications Delhi
asia-south2
10 Gbps [M]
100 Gbps [M]
Delhi
del-zone2-1622
TATA Communications Delhi
asia-south2
10 Gbps [M]
100 Gbps [M]
Delhi
del-zone1-2411
Sify Greenfort - Noida
asia-south2
10 Gbps [M]
100 Gbps [M]
Delhi
del-zone2-2411
Sify Greenfort - Noida
asia-south2
10 Gbps [M]
100 Gbps [M]
Hyderabad
hyd-zone1-6781 ¹
STT Hyderabad 1
10 Gbps [M]
100 Gbps [M]
Hyderabad
hyd-zone2-6781 ¹
STT Hyderabad 1
10 Gbps [M]
100 Gbps [M]
Mumbai
bom-zone1-2310
Equinix MB1 - Mumbai (GPX Mumbai 1)
asia-south1
10 Gbps [M]
100 Gbps [M]
Mumbai
bom-zone2-2310
Equinix MB1 - Mumbai (GPX Mumbai 1)
asia-south1
10 Gbps [M]
100 Gbps [M]
Mumbai
bom-zone1-554
Tata Mumbai IDC
asia-south1
10 Gbps [M]
100 Gbps [M]
Mumbai
bom-zone2-554
Tata Mumbai IDC
asia-south1
10 Gbps [M]
100 Gbps [M]
The North America geographic area supports the following regions:
northamerica-northeast1 (Montréal)
northamerica-northeast2 (Toronto)
northamerica-south1 (Querétaro)
us-central1 (Iowa)
us-east1 (South Carolina)
us-east4 (Virginia)
us-east5 (Columbus)
us-south1 (Dallas)
us-west1 (Oregon)
us-west2 (Los Angeles)
us-west3 (Salt Lake City)
us-west4 (Las Vegas)
Metropolitan area
Colocation facility name
Facility
Low-latency region
Link type & MACsec support [M]
Ashburn
iad-zone1-1
Equinix DC1-DC15, DC21 - Ashburn
us-east4
10 Gbps [M]
100 Gbps [M]
400 Gbps [M]
Ashburn
iad-zone2-1
Equinix DC1-DC15, DC21 - Ashburn
us-east4
10 Gbps [M]
100 Gbps [M]
Ashburn
iad-zone1-5467
CoreSite - Reston (VA3)
us-east4
10 Gbps [M]
100 Gbps [M]
Ashburn
iad-zone2-5467
CoreSite - Reston (VA3)
us-east4
10 Gbps [M]
100 Gbps [M]
400 Gbps [M]
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
atl-zone2-3853
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
Aurora
auz-zone1-3143 ¹
CyrusOne Aurora
us-central6
10 Gbps [M]
100 Gbps [M]
Aurora
auz-zone2-3143 ¹
CyrusOne Aurora
us-central6
10 Gbps [M]
100 Gbps [M]
Austin
aus-zone1-1483 ¹
CyrusOne Austin (Met 2)
10 Gbps [M]
100 Gbps [M]
Austin
aus-zone2-1483 ¹
CyrusOne Austin (Met 2)
10 Gbps [M]
100 Gbps [M]
Boston
bos-zone1-219 ¹
Markley Group Boston - One Summer Street
10 Gbps [M]
100 Gbps [M]
Boston
bos-zone2-219 ¹
Markley Group Boston - One Summer Street
10 Gbps [M]
100 Gbps [M]
Calgary
yyc-zone1-3251 ¹
Equinix CL3 - Calgary (formerly Q9 Calgary Three)
10 Gbps [M]
100 Gbps [M]
Calgary
yyc-zone2-3251 ¹
Equinix CL3 - Calgary (formerly Q9 Calgary Three)
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
Columbus
cmh-zone1-2377 ¹
Cologix COL1-3
us-east5
10 Gbps [M]
100 Gbps [M]
400 Gbps [M]
Columbus
cmh-zone2-2377 ¹
Cologix COL1-3
us-east5
10 Gbps [M]
100 Gbps [M]
400 Gbps [M]
Council Bluffs
cbf-zone1-575 ¹
Nebraska Data Centers (1623 Farnam)
us-central1
10 Gbps [M]
100 Gbps [M]
400 Gbps [M]
Council Bluffs
cbf-zone2-575 ¹
Nebraska Data Centers (1623 Farnam)
us-central1
10 Gbps [M]
100 Gbps [M]
400 Gbps [M]
Dallas
dfw-zone1-4 ¹
Equinix Dallas (DA1)
us-south1
10 Gbps [M]
100 Gbps [M]
400 Gbps [M]
Dallas
dfw-zone2-4 ¹
Equinix Dallas (DA1)
us-south1
10 Gbps [M]
100 Gbps [M]
400 Gbps [M]
Denver
den-zone1-389 ¹
Coresite Denver
10 Gbps [M]
100 Gbps [M]
Denver
den-zone2-389 ¹
Coresite Denver
10 Gbps [M]
100 Gbps [M]
Houston
hou-zone1-1476 ¹
Databank Houston West
10 Gbps [M]
100 Gbps [M]
Houston
hou-zone2-1476 ¹
Databank Houston West
10 Gbps [M]
100 Gbps [M]
Kansas City
mci-zone1-435 ¹
Netrality Kansas City - 1102 Grand
10 Gbps [M]
100 Gbps [M]
Kansas City
mci-zone2-435 ¹
Netrality Kansas City - 1102 Grand
10 Gbps [M]
100 Gbps [M]
Las Vegas
las-zone1-770
Switch Las Vegas
us-west4
10 Gbps [M]
100 Gbps [M]
400 Gbps [M]
Las Vegas
las-zone2-770
Switch Las Vegas
us-west4
10 Gbps [M]
100 Gbps [M]
400 Gbps [M]
Los Angeles
lax-zone1-19
CoreSite - LA1 - One Wilshire
us-west2
10 Gbps [M]
100 Gbps [M]
400 Gbps [M]
Los Angeles
lax-zone2-19
CoreSite - LA1 - One Wilshire
us-west2
10 Gbps [M]
100 Gbps [M]
400 Gbps [M]
Los Angeles
lax-zone1-333
Equinix LA3/LA4 - Los Angeles, El Segundo
us-west2
10 Gbps [M]
100 Gbps [M]
Los Angeles
lax-zone2-333
Equinix LA3/LA4 - Los Angeles, El Segundo
us-west2
10 Gbps [M]
100 Gbps [M]
Los Angeles
lax-zone1-403
Digital Realty LAX (600 West 7th)
us-west2
10 Gbps [M]
100 Gbps [M]
Los Angeles
lax-zone2-403
Digital Realty LAX (600 West 7th)
us-west2
10 Gbps [M]
100 Gbps [M]
Los Angeles
lax-zone1-8
Equinix Los Angeles (LA1)
us-west2
10 Gbps [M]
100 Gbps [M]
Los Angeles
lax-zone2-8
Equinix Los Angeles (LA1)
us-west2
10 Gbps [M]
100 Gbps [M]
Miami
mia-zone1-15 ¹
Equinix Miami (MI1)
10 Gbps [M]
100 Gbps [M]
Miami
mia-zone2-15 ¹
Equinix Miami (MI1)
10 Gbps [M]
100 Gbps [M]
Minneapolis
msp-zone1-3312 ¹
Cologix MIN3
10 Gbps [M]
100 Gbps [M]
Minneapolis
msp-zone2-3312 ¹
Cologix MIN3
10 Gbps [M]
100 Gbps [M]
Montréal
yul-zone1-1944
Cologix MTL3
northamerica-northeast1
10 Gbps [M]
100 Gbps [M]
Montréal
yul-zone2-1944
Cologix MTL3
northamerica-northeast1
10 Gbps [M]
100 Gbps [M]
Montréal
yul-zone1-99002
Cologix MTL10-H
northamerica-northeast1
10 Gbps [M]
100 Gbps [M]
Montréal
yul-zone2-99002
Cologix MTL10-H
northamerica-northeast1
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
lga-zone1-9
165 Halsey - 9th Floor MMR
10 Gbps [M]
100 Gbps [M]
400 Gbps [M]
New York
lga-zone2-9
165 Halsey - 9th Floor MMR
10 Gbps [M]
100 Gbps [M]
400 Gbps [M]
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
Philadelphia
phl-zone1-146 ¹
Equinix PH1 - Philadelphia
10 Gbps [M]
100 Gbps [M]
Philadelphia
phl-zone2-146 ¹
Equinix PH1 - Philadelphia
10 Gbps [M]
100 Gbps [M]
Phoenix
phx-zone1-1488
CyrusOne Phoenix
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
400 Gbps [M]
Phoenix
phx-zone2-917
PhoenixNAP
10 Gbps [M]
100 Gbps [M]
400 Gbps [M]
Portland
pdx-zone1-1922 ¹
EdgeConneX Portland (EDCPOR01)
us-west1
10 Gbps [M]
100 Gbps [M]
Portland
pdx-zone2-1922 ¹
EdgeConneX Portland (EDCPOR01)
us-west1
10 Gbps [M]
100 Gbps [M]
Queretaro
qro-zone1-1778 ¹
KIO Networks QRO/1
northamerica-south1
10 Gbps [M]
100 Gbps [M]
Queretaro
qro-zone2-1778 ¹
KIO Networks QRO/1
northamerica-south1
10 Gbps [M]
100 Gbps [M]
Queretaro
qro-zone1-99009
TRIARA QUERÉTARO
northamerica-south1
10 Gbps
Queretaro
qro-zone2-99009
TRIARA QUERÉTARO
northamerica-south1
10 Gbps
Salt Lake City
slc-zone1-10938
DataBank Salt Lake City (SLC5)
us-west3
10 Gbps [M]
100 Gbps [M]
Salt Lake City
slc-zone2-10938
DataBank Salt Lake City (SLC5)
us-west3
10 Gbps [M]
100 Gbps [M]
Salt Lake City
slc-zone1-99001
Aligned Salt Lake (SLC-01)
us-west3
10 Gbps [M]
100 Gbps [M]
Salt Lake City
slc-zone2-99001
Aligned Salt Lake (SLC-01)
us-west3
10 Gbps [M]
100 Gbps [M]
San Antonio
sat-zone1-1484 ¹
CyrusOne San Antonio
10 Gbps [M]
100 Gbps [M]
San Antonio
sat-zone2-1484 ¹
CyrusOne San Antonio
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
Seattle
sea-zone1-86 ¹
Equinix Seattle (SE2/3)
10 Gbps [M]
100 Gbps [M]
Seattle
sea-zone2-86 ¹
Equinix Seattle (SE2/3)
10 Gbps [M]
100 Gbps [M]
Toronto
yyz-zone1-2206
Equinix Toronto (TR2)
northamerica-northeast2
10 Gbps [M]
100 Gbps [M]
Toronto
yyz-zone2-2206
Equinix Toronto (TR2)
northamerica-northeast2
10 Gbps [M]
100 Gbps [M]
Toronto
yyz-zone1-392
151 Front Street West
northamerica-northeast2
10 Gbps [M]
100 Gbps [M]
Toronto
yyz-zone2-392
151 Front Street West
northamerica-northeast2
10 Gbps [M]
100 Gbps [M]
Vancouver
yvr-zone1-1881 ¹
Cologix VAN2
10 Gbps [M]
100 Gbps [M]
Vancouver
yvr-zone2-1881 ¹
Cologix VAN2
10 Gbps [M]
100 Gbps [M]
The South America geographic area supports the following regions:
southamerica-east1 (São Paulo)
southamerica-west1 (Santiago)
Metropolitan area
Colocation facility name
Facility
Low-latency region
Link type & MACsec support [M]
Bogota
bog-zone1-10902
Odata DC BG01
10 Gbps [M]
100 Gbps [M]
Bogota
bog-zone2-10902
Odata DC BG01
10 Gbps [M]
100 Gbps [M]
Bogota
bog-zone1-1354
Equinix Bogota (BG1)
10 Gbps [M]
100 Gbps [M]
Bogota
bog-zone2-1354
Equinix Bogota (BG1)
10 Gbps [M]
100 Gbps [M]
Buenos Aires
eze-zone1-1550 ¹
Cirion Buenos Aires - BUE1
10 Gbps [M]
100 Gbps [M]
Buenos Aires
eze-zone2-1550 ¹
Cirion Buenos Aires - BUE1
10 Gbps [M]
100 Gbps [M]
Rio de Janeiro
rio-zone1-1374
Cirion Rio de Janeiro - RIO1
10 Gbps [M]
100 Gbps [M]
Rio de Janeiro
rio-zone2-1374
Cirion Rio de Janeiro - RIO1
10 Gbps [M]
100 Gbps [M]
Rio de Janeiro
rio-zone1-1899
Equinix RJ2 - Rio de Janeiro
10 Gbps [M]
100 Gbps [M]
Rio de Janeiro
rio-zone2-1899
Equinix RJ2 - Rio de Janeiro
10 Gbps [M]
100 Gbps [M]
Santiago
scl-zone1-1779
Cirion Santiago de Chile - SAN1
southamerica-west1
10 Gbps [M]
100 Gbps [M]
Santiago
scl-zone2-1779
Cirion Santiago de Chile - SAN1
southamerica-west1
10 Gbps [M]
100 Gbps [M]
Santiago
scl-zone1-7594
Ascenty - Chile 1
southamerica-west1
10 Gbps [M]
100 Gbps [M]
Santiago
scl-zone2-7594
Ascenty - Chile 1
southamerica-west1
10 Gbps [M]
100 Gbps [M]
Santiago
scl-zone1-99014
GTD Panamericana
southamerica-west1
10 Gbps [M]
100 Gbps [M]
Santiago
scl-zone2-99014
GTD Panamericana
southamerica-west1
10 Gbps [M]
100 Gbps [M]
Sao Paulo
gru-zone1-1057
Cirion São Paulo - SAO1
southamerica-east1
10 Gbps [M]
100 Gbps [M]
Sao Paulo
gru-zone2-1057
Cirion São Paulo - SAO1
southamerica-east1
10 Gbps [M]
100 Gbps [M]
Sao Paulo
gru-zone1-165
Equinix São Paulo (SP4)
southamerica-east1
10 Gbps [M]
100 Gbps [M]
Sao Paulo
gru-zone2-165
Equinix São Paulo (SP4)
southamerica-east1
10 Gbps [M]
100 Gbps [M]
Sao Paulo
gru-zone1-7580
Ascenty - Sao Paulo 2
southamerica-east1
10 Gbps [M]
100 Gbps [M]
Sao Paulo
gru-zone2-7580
Ascenty - Sao Paulo 2
southamerica-east1
10 Gbps [M]
100 Gbps [M]
1 Both zones are located in the same facility for this metropolitan area. If you add
a connection at this colocation facility for production-level applications, we recommend that
you consider using the critical production reliability option. For more information about
reliability, see
Resiliency and SLA options .
Special Considerations
Connectivity at Google's facilities yyz-zone1-392 and yyz-zone2-392 at 151
Front Street West requires placing orders on demand to provisioning partner,
which typically means extended lead times. Ordering dedicated interconnects at
this location can take several weeks and might require all parties involved to
coordinate on joint testing and troubleshooting during turn up. If these lead
times are not acceptable, consider ordering in a different location.
What's next
Learn about global cloud locations .
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
