---
title: "Configure DNS routing policies and health checks \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dns/docs/configure-routing-policies
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dns/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/dns/docs/configure-routing-policies
  title: "Configure DNS routing policies and health checks \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud DNS
Guides
Send feedback
Configure DNS routing policies and health checks
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to configure DNS routing policies and
enable health checks by using Cloud DNS. Before you use this page,
familiarize yourself with
DNS routing policies and health checks .
Before you begin
To configure DNS routing policies, create a resource record set and choose one of
the following DNS routing policies to apply to the resource record set.
Weighted round robin (WRR) routing policy
Geolocation routing policy
Geolocation routing policy with a geofence
Failover routing policy
DNS routing policies support multiple IP addresses per geographic location
in the geolocation routing policy. When you specify multiple IP addresses for a
geographic location, Cloud DNS returns all of the IP addresses
specified for that location. You cannot combine a geolocation routing policy
with a custom-weighted WRR policy.
Apply only one routing policy type to a resource record set at a time. You cannot combine routing
policies except when configuring a failover routing policy, in which case, you
can set a geolocation routing policy as the backup.
Make sure that you enable global access for regional load balancers.
Before you configure DNS routing policies for public zones, disable
the constraints/compute.disableInternetNetworkEndpointGroup
organization policy constraint. For more information, see
Organization policy constraints .
Make sure that you have the required permissions to configure
DNS routing policies.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following IAM roles.
Permissions
dns.networks.useHealthSignals to create a policy with health checks for internal passthrough Network Load Balancers
dns.changes.create to create a resource record set
dns.managedZones.list to list managed zones
Roles
DNS Administrator ( roles/dns.admin )
DNS Peer ( roles/dns.peer )
Create DNS routing policies for private zones
Before you create DNS routing policies for private zones, complete the
following steps.
Create a private zone .
Set up one of the following internal load balancers:
Internal passthrough Network Load Balancer
Internal Application Load Balancer
Cross-region internal Application Load Balancer
Internal proxy Network Load Balancer ( Preview )
Create forwarding rules for the internal load balancer .
Set up health checking for the internal load balancer .
Note: For Cloud DNS to work with health checks, enable global
access for internal load balancers.
To create DNS routing policies for private zones, follow these
steps.
Console
Start the configuration
In the Google Cloud console, go to the Cloud DNS zones page.
Go to Cloud DNS zones
Click the name of the managed zone that you want to add the record to.
On the Zone details page, click Add with routing policy .
Base data
Optional: On the Create record set with routing policy page, for
DNS name , enter a subdomain of the DNS name—for
example, mail . The trailing dot is automatically added.
Important: Adding the at sign (@) in this field causes the record
to fail.
For Resource record type , select an option.
For TTL , enter a numeric value for the resource record's
time to live, which is the amount of time for which it can be cached.
This value must be a positive integer.
Optional: For TTL unit , select the unit of time—for example,
minutes . The default is set to minutes .
Click Next .
Routing policy type
For Routing policy , select Weighted round robin ,
Geolocation , or Failover .
Click Next .
Routing policy data
WRR
For Weight , enter the weight corresponding to this
subsection of the resource record (RR) data.
This weight must be a nonnegative number from 0.0 to 1000.0. Ratio of
traffic routed to the target is calculated from the ratio of individual
weight over the total across all weights. For example, if target A has
a weight of 25 and target B has a weight of 75, with a total weight of
100, Cloud DNS routes 25/100 = 0.25 (25 percent) of the total
traffic to target A, and 75/100= 0.75 (75 percent) to target B.
In the IPv4 health checked targets section, do the following:
For Project , select the project where the forwarding
rule exists.
For Forwarding rule , select a forwarding rule.
The forwarding rule specifies an internal IP address, port,
and one of the following targets:
A regional backend service
A global or regional target HTTPS proxy
A regional target TCP proxy
Click Done .
Optional: To add another health-checked target, click Add target .
Optional: To allow IPv4 addresses without health checking, do the
following:
Select Allow IPv4 addresses without health checking .
For IPv4 Address , enter an IPv4 address.
Optional: To add another set of WRR policy routing data, click
Add routing data .
Click Next .
Geolocation
For Geo fencing , select Disabled or Enabled .
Enabling geofencing restricts the traffic to a specific geolocation
even if all the endpoints in that geolocation are unhealthy.
For Source region , select a valid Google Cloud
source region.
In the IPv4 health checked targets section, do the following:
For Project , select the project where the forwarding
rule exists.
For Forwarding rule , select a forwarding rule.
The forwarding rule specifies an internal IP address, port,
and one of the following targets:
A regional backend service
A global or regional target HTTPS proxy
A regional target TCP proxy
Click Done .
Optional: To add another health-checked target, click Add target .
Optional: To allow IPv4 addresses without health checking, do the
following:
Select Allow IPv4 addresses without health checking .
For IPv4 Address , enter an IPv4 address.
Optional: To add set of another geolocation policy routing data, click
Add routing data .
Click Next .
Failover
In the Primary health checked targets section, do the following:
For Project , select the project where the forwarding
rule exists.
For Forwarding rule , select a forwarding rule.
The forwarding rule specifies an internal IP address, port,
and one of the following targets:
A regional backend service
A global or regional target HTTPS proxy
A regional target TCP proxy
In the Backup geolocation policy section, do the following:
For Geo fencing , select Disabled or Enabled . Enabling
geofencing restricts the traffic to a specific geolocation
even if all the endpoints in that geolocation are unhealthy.
For Source region , select a valid Google Cloud
source region.
In the IPv4 health checked targets section, do the following:
For Project , select the project where the forwarding
rule exists.
For Forwarding rule , select a forwarding rule.
The forwarding rule specifies one of the following options:
An internal IP address, port, and a regional backend service
An HTTP(S) proxy
A TCP proxy
When all primary IP addresses are unhealthy, traffic is
automatically handled according to the backup geolocation policy.
Click Done .
Optional: To add another health-checked target, click Add target .
Optional: To allow IPv4 addresses without health checking, do the
following:
Select Allow IPv4 addresses without health checking .
For IPv4 Address , enter an IPv4 address.
Optional: To add another set of backup geolocation policy routing
data, click Add routing data .
In the Trickle traffic (%) field, enter the percentage of
the traffic sent to the failover targets,
regardless of the health check status of the primary targets.
Click Next .
Review and create
Click Review .
Review your Cloud DNS record set with routing policy configuration.
Click Create .
gcloud
For a resource record set, you set either a routing policy ( routingPolicy )
or DNS data ( rrdatas ), not both. To change between a routing policy and
DNS data, update the resource record set. For example, to change a resource
record set containing DNS data ( rrdatas ) to instead contain a
a routing policy ( routingPolicy ), delete rrdatas and add routingPolicy
to the same resource record set.
To create DNS routing policies for private zones, follow these
steps.
Note: To enable health checking in DNS routing policies with
gcloud CLI, you must specify the name of the forwarding rule.
Specifying just the IP address of the forwarding rule doesn't result in
health checking.
Run the
gcloud dns record-sets create command :
WRR
gcloud dns record-sets create RRSET_NAME \
--ttl= TTL \
--type= RRSET_TYPE \
--zone= MANAGED_ZONE \
--routing-policy-type=WRR \
--routing-policy-data= ROUTING_POLICY_DATA \
--enable-health-checking
Replace the following:
RRSET_NAME : the DNS name that matches the incoming
queries with this zone's DNS name as its suffix, such as
service.example.com .
TTL : the TTL, in seconds, in which the resolver caches
ResourceRecordSet , such as 30 .
RRSET_TYPE : the resource record type
of this ResourceRecordSet , such as A . For a list of supported
record types, see
Supported record types for DNS routing policies .
MANAGED_ZONE : the managed zone that this
ResourceRecordSet is affiliated with, such as service-zone .
The name of this ResourceRecordSet must have the DNS name of the
managed zone as its suffix.
ROUTING_POLICY_DATA : enter a semicolon-delimited
list in the format ${weight_percent}:${rrdatas} , such as
.8=203.0.113.1;.2=198.51.100.1 . Specify the weight as a
nonnegative decimal. The ratio of traffic routed to the target is calculated
from the ratio of individual weight over the total across all
weights. Forwarding rule names are acceptable values and result in
health checking.
--enable-health-checking : the flag to enable health checking. When you
use this flag, you must provide the forwarding rule name instead of the
IP address in the --routing-policy-data field.
Geolocation
gcloud dns record-sets create RRSET_NAME \
--ttl= TTL \
--type= RRSET_TYPE \
--zone= MANAGED_ZONE \
--routing-policy-type=GEO \
--routing-policy-data= ROUTING_POLICY_DATA \
--enable-health-checking
Replace the following:
RRSET_NAME : the DNS name that matches the incoming
queries with this zone's DNS name as its suffix, such as
service.example.com .
TTL : the TTL, in seconds, in which the resolver caches
ResourceRecordSet , such as 30 .
RRSET_TYPE : the resource record type
of this ResourceRecordSet , such as A . For a list of supported
record types, see
Supported record types for DNS routing policies .
MANAGED_ZONE : the managed zone that this
ResourceRecordSet is affiliated with, such as service-zone .
The name of this ResourceRecordSet must have the DNS name of the
managed zone as its suffix.
ROUTING_POLICY_DATA : enter a semicolon-delimited
list in the format ${region}=${IP_address} , such as
asia-east1=198.51.100.1;us-central1=203.0.113.1 . You can specify
multiple IP addresses for a single region by adding IP addresses
separated by a comma.
Forwarding rule names are acceptable values and result in
health checking.
--enable-health-checking : the flag to enable health checking. When you
use this flag, you must provide the forwarding rule name instead of the
IP address in the --routing-policy-data field.
Geolocation with geofence
gcloud dns record-sets create RRSET_NAME \
--ttl= TTL \
--type= RRSET_TYPE \
--zone= MANAGED_ZONE \
--routing-policy-type=GEO \
--routing-policy-data= ROUTING_POLICY_DATA \
--enable-geo-fencing \
--enable-health-checking
Replace the following:
RRSET_NAME : the DNS name that matches the incoming
queries with this zone's DNS name as its suffix, such as
service.example.com .
TTL : the TTL, in seconds, in which the resolver caches
ResourceRecordSet , such as 30 .
RRSET_TYPE : the resource record type
of this ResourceRecordSet , such as A . For a list of supported
record types, see
Supported record types for DNS routing policies .
MANAGED_ZONE : the managed zone that this
ResourceRecordSet is affiliated with, such as service-zone .
The name of this ResourceRecordSet must have the DNS name of the
managed zone as its suffix.
ROUTING_POLICY_DATA : enter a semicolon-delimited
list in the format ${region}=${IP_address} , such as
asia-east1=198.51.100.1;us-central1=203.0.113.1 . You can specify
multiple IP addresses for a single region by adding IP addresses
separated by a comma.
Forwarding rule names are acceptable values and result in
health checking.
--enable-geo-fencing : for GEO routing policies, this determines
whether traffic should failover across regions if all endpoints in a
region are unhealthy. When set, Cloud DNS always directs queries
to the nearest region, even if all endpoints in that region are unhealthy.
Use --no-enable-geo-fencing to disable geofencing. When not set,
Cloud DNS directs queries to the next nearest
region when all endpoints in a region are unhealthy. This defaults to
false .
--enable-health-checking : the flag to enable health checking. When you
use this flag, you must provide the forwarding rule name instead of the
IP address in the --routing-policy-data field.
Failover
gcloud dns record-sets create RRSET_NAME \
--ttl= TTL \
--type= RRSET_TYPE \
--zone= MANAGED_ZONE \
--routing-policy-type=FAILOVER \
--routing-policy-primary-data= ROUTING_POLICY_PRIMARY_DATA \
--routing-policy-backup-data-type= ROUTING_POLICY_BACKUP_DATA_TYPE \
--routing-policy-backup-data= ROUTING_POLICY_BACKUP_DATA \
--backup-data-trickle-ratio= BACKUP_DATA_TRICKLE_RATIO \
--enable-geo-fencing \
--enable-health-checking
Replace the following:
RRSET_NAME : the DNS name that matches the incoming
queries with this zone's DNS name as its suffix, such as
service.example.com .
TTL : the TTL, in seconds, in which the resolver caches
ResourceRecordSet , such as 30 .
RRSET_TYPE : the resource record type
of this ResourceRecordSet , such as A . For a list of supported
record types, see
Supported record types for DNS routing policies .
MANAGED_ZONE : the managed zone that this
ResourceRecordSet is affiliated with, such as service-zone .
The name of this ResourceRecordSet must have the DNS name of the
managed zone as its suffix.
ROUTING_POLICY_PRIMARY_DATA : the primary target to use
for FAILOVER routing policies. This target must be a reference to
one or more forwarding rules, such as forwarding-rule-1 . As long as at least
one of these forwarding rules is healthy, the IP addresses of all
healthy forwarding rules are used to answer queries for this name.
ROUTING_POLICY_BACKUP_DATA_TYPE : for FAILOVER routing
policies, the type of routing policy the backup data uses. This must
be GEO .
ROUTING_POLICY_BACKUP_DATA : the backup target to use
for FAILOVER routing policies. These targets are used when all
forwarding rules specified in --routing-policy-primary-data are
unhealthy. Cloud DNS only supports geo-based backup targets. The
format of this field matches that of --routing-policy-data when
--routing-policy-type = 'GEO' , such as asia-east1=forwarding-rule-2 .
BACKUP_DATA_TRICKLE_RATIO : the ratio of traffic to
send to the backup targets, even when the primaries are healthy. The ratio
must be between 0 and 1, such as 0.1 . The default is set to 0 .
--enable-geo-fencing : for GEO routing policies, this determines
whether traffic should failover across regions if all endpoints in a
region are unhealthy. When set, Cloud DNS always directs queries
to the nearest region, even if all endpoints in that region are unhealthy.
Use --no-enable-geo-fencing to disable geofencing. When not set,
Cloud DNS directs queries to the next nearest
region when all endpoints in a region are unhealthy. This defaults to
false .
--enable-health-checking : the flag to enable health checking. When you
use this flag, you must provide the forwarding rule name instead of the
IP address in the --routing-policy-data field.
Note: You must specify both the routing policy type and the routing policy data.
API
Use the
resourceRecordSets.create
method.
WRR
POST https://dns.googleapis.com/dns/v1/projects/ PROJECT_ID /managedZones/ MANAGED_ZONE /rrsets
{
"name": " RRSET_NAME ",
"type": " RRSET_TYPE ",
"ttl": TTL ,
"routingPolicy": {
"wrr": {
"items": [
{
"weight": WEIGHT ,
"healthCheckedTargets": {
"internalLoadBalancers": [
{
"loadBalancerType": " LOAD_BALANCER_TYPE "
"ipAddress": " IP_ADDRESS "
"port": " PORT_NUMBER "
"ipProtocol": " IP_PROTOCOL "
"networkUrl": " NETWORK_URL "
"project": " PROJECT_ID "
"region": " REGION "
}
]
}
},
{
"weight": WEIGHT ,
"healthCheckedTargets": {
"internalLoadBalancers": [
{
"loadBalancerType": " LOAD_BALANCER_TYPE "
"ipAddress": " IP_ADDRESS "
"port": " PORT_NUMBER "
"ipProtocol": " IP_PROTOCOL "
"networkUrl": " NETWORK_URL "
"project": " PROJECT_ID "
"region": " REGION "
}
]
}
}
]
}
}
}
Replace the following:
PROJECT_ID : the ID of the project
MANAGED_ZONE : the managed zone that this
ResourceRecordSet is affiliated with, such as service-zone ;
the name of this ResourceRecordSet must have the DNS name of the
managed zone as its suffix
RRSET_NAME : the DNS name that matches the incoming
queries with this zone's DNS name as its suffix, such as
service.example.com
RRSET_TYPE : the resource record type
of this ResourceRecordSet , such as A
TTL : the TTL, in seconds, in which the resolver caches
this ResourceRecordSet , such as 30
WEIGHT : for WRR policies, a semicolon-delimited list
in the format ${weight_percent}=${rrdatas} , such as
.8=10.128.1.1;.2=10.130.1.1 ; specify the weight as any nonnegative
decimal
Note: You must specify weight as a nonnegative
number. The ratio of traffic routed to the target is calculated
from the ratio of individual weight over the total across all
weights.
LOAD_BALANCER_TYPE : the type of load balancer,
such as regionalL4ilb , globalL7ilb , or regionalL7ilb .
This setting is optional.
IP_ADDRESS : the IP address that the forwarding rule
serves
PORT_NUMBER : the port number
IP_PROTOCOL : defines the protocol used for the health
check; valid options are tcp and udp
NETWORK_URL : the network URL to which this forwarding
rule applies
REGION : the region in which you created the forwarding
rule
Geolocation
POST https://dns.googleapis.com/dns/v1/projects/ PROJECT_ID /managedZones/ MANAGED_ZONE /rrsets
{
"name": " RRSET_NAME ",
"type": " RRSET_TYPE ",
"ttl": TTL ,
"routingPolicy": {
"geo": {
"items": [
{
"location": " LOCATION ",
"healthCheckedTargets": {
"internalLoadBalancers": [
{
"loadBalancerType": " LOAD_BALANCER_TYPE "
"ipAddress": " IP_ADDRESS "
"port": " PORT_NUMBER "
"ipProtocol": " IP_PROTOCOL "
"networkUrl": " NETWORK_URL "
"project": " PROJECT_ID "
"region": " REGION "
}
]
}
},
{
"location": " LOCATION ",
"healthCheckedTargets": {
"internalLoadBalancers": [
{
"loadBalancerType": " LOAD_BALANCER_TYPE "
"ipAddress": " IP_ADDRESS "
"port": " PORT_NUMBER "
"ipProtocol": " IP_PROTOCOL "
"networkUrl": " NETWORK_URL "
"project": " PROJECT_ID "
"region": " REGION "
}
]
}
}
]
}
}
}
Replace the following:
PROJECT_ID : the ID of the project
MANAGED_ZONE : the managed zone that this
ResourceRecordSet is affiliated with, such as service-zone ;
the name of this ResourceRecordSet must have the DNS name of the
managed zone as its suffix
RRSET_NAME : the DNS name that matches the incoming
queries with this zone's DNS name as its suffix, such as
service.example.com
RRSET_TYPE : the resource record type
of this ResourceRecordSet , such as A
TTL : the TTL, in seconds, in which the resolver caches
this ResourceRecordSet , such as 30
LOCATION : for GEO policies, the geolocation for
which you need to create the policy, such as asia-east1
LOAD_BALANCER_TYPE : the type of load balancer,
such as regionalL4ilb , globalL7ilb , or regionalL7ilb .
This setting is optional.
IP_ADDRESS : the IP address that the forwarding rule
serves
PORT_NUMBER : the port number of the internal load
balancer
IP_PROTOCOL : defines the protocol used for the health
check; valid options are tcp and udp
NETWORK_URL : the network URL to which this forwarding
rule applies
REGION : the region in which you created the forwarding
rule
Failover
In the failover option, Cloud DNS only supports GEO policies.
POST https://dns.googleapis.com/dns/v1/projects/ PROJECT_ID /managedZones/ MANAGED_ZONE /rrsets
{
"name": " RRSET_NAME ",
"type": " RRSET_TYPE ",
"ttl": TTL ,
"routingPolicy": {
"primaryBackup": {
"trickleTraffic": TRICKLE_TRAFFIC ,
"primaryTargets": {
"internalLoadBalancers": [
{
"ipAddress": " IP_ADDRESS "
"ipProtocol": " IP_PROTOCOL "
"loadBalancerType": " LOAD_BALANCER_TYPE "
"networkUrl": " NETWORK_URL "
"port": " PORT_NUMBER "
"project": " PROJECT_ID "
"region": " REGION "
}
]
},
"backupGeoTargets": {
"enableFencing": ENABLE_FENCING ,
"items": [
{
"location": " LOCATION ",
"rrdatas": [
" RRDATA "
]
},
{
"location": " LOCATION ",
"rrdatas": [
" RRDATA "
]
}
]
}
}
}
}
Replace the following:
PROJECT_ID : the ID of the project
MANAGED_ZONE : the managed zone that this
ResourceRecordSet is affiliated with, such as service-zone ;
the name of this ResourceRecordSet must have the DNS name of the
managed zone as its suffix
RRSET_NAME : the DNS name that matches the incoming
queries with this zone's DNS name as its suffix, such as
service.example.com
RRSET_TYPE : the resource record type
of this ResourceRecordSet , such as A
TTL : the TTL, in seconds, in which the resolver caches
this ResourceRecordSet , such as 30
TRICKLE_TRAFFIC : the ratio of traffic to
send to the backup targets even when the primaries are healthy; the ratio
must be between 0 and 1, such as 0.1
IP_ADDRESS : the IP address that the forwarding rule
serves
PORT_NUMBER : the port number
IP_PROTOCOL : defines the protocol used for the health
check; valid options are tcp and udp
NETWORK_URL : the network URL to which this forwarding
rule applies
PORT_NUMBER : the port number of the internal load
balancer
REGION : the region in which you created the forwarding
rule
ENABLE_FENCING : for GEO routing policies, this
determines whether traffic should failover across regions if all
endpoints in a region are unhealthy. When set, Cloud DNS always
directs queries to the nearest region, even if all endpoints in that
region are unhealthy. When not set, Cloud DNS directs queries to
the next nearest region when all endpoints in a region are unhealthy.
This defaults to false .
LOCATION : for GEO policies, the geolocation for
which you need to create the policy, such as asia-east1
WEIGHT : for WRR policies, a semicolon-delimited list
in the format ${weight_percent}=${rrdatas} , such as
.8=10.128.1.1;.2=10.130.1.1 ; specify the weight as any nonnegative
decimal
Note: You must specify weight as a nonnegative
number. The ratio of traffic routed to the target is calculated
from the ratio of individual weight over the total across all
weights.
RRDATA : an arbitrary value associated with the resource
record set, such as 198.51.100.5 ; you can also enter multiple
values, rrdata1 rrdata2 rrdata3 , such as 198.51.100.1
203.0.113.1 ...
Create DNS routing policies for public zones
To create DNS routing policies for public zones, follow these
steps.
Console
Start the configuration
In the Google Cloud console, go to the Cloud DNS zones page.
Go to Cloud DNS zones
Click the name of the managed zone that you want to add the record to.
On the Zone details page, click Add with routing policy .
Base data
Optional: On the Create record set with routing policy page, for
DNS name , enter a subdomain of the pre-filled DNS name—for
example, mail . The trailing dot is automatically added.
Important: Adding the at sign (@) in this field causes the record
to fail.
For Resource record type , select an option.
For TTL , enter a numeric value for the resource record's
time to live, which is the amount of time that it can be cached. This
value must be a positive integer.
Optional: For TTL unit , select the unit of time—for example,
minutes . The default is set to minutes .
Click Next .
Routing policy type
For Routing policy , select Weighted round robin ,
Geolocation , or Failover .
Click Next .
Routing policy data
WRR
For Weight , enter the weight corresponding to this
subsection of the resource record (RR) data.
This weight must be a nonnegative number from 0.0 to 1000.0. Ratio of
traffic routed to the target is calculated from the ratio of individual
weight over the total across all weights. For example, if target A has
a weight of 25 and target B has a weight of 75, with a total weight of
100, Cloud DNS routes 25/100 = 0.25 (25 percent) of the total
traffic to target A, and 75/100= 0.75 (75 percent) to target B.
In the External IP addresses section, do the following:
For IP address , enter an external IP address.
Optional: To select an external IP address of a Google Cloud
resource in the current project, click Select .
To enable health checking, select Health checking 1 .
Optional: To add another external IP address, click Add IP address .
Click Done .
If you enabled health checking in the previous step, in the
Health check list, select a health check or create a new one by
following these steps.
Click Create a new health check .
For Name , enter a name for the health check.
Optional: For Description , enter a description for the health
check.
For Source regions , select any three Google Cloud
regions from which you want to send health check probes.
Optional: In the Protocol list, select a protocol.
For Port , enter a port number.
The protocol and the port number determine how Cloud DNS
sends the health check probes.
Optional: To configure content-based health check, for Response ,
provide an expected response string, each up to 1,024 ASCII (single byte)
characters in length.
Optional: To turn on health check logs, for Logs , select
On .
For Check interval , enter the time interval in seconds
between health check probes. The check interval is the amount
of time from the start of one probe issued by one prober to the
start of the next probe issued by the same prober.
For Timeout , enter the amount of time in seconds you want
Google Cloud to wait for a response to a probe.
For Healthy threshold , enter the number of consecutive
successful probe results for a backend to be considered healthy.
For Unhealthy threshold , enter the number of consecutive
failed probe results for a backend to be considered unhealthy.
Click Create .
Click Next
Geolocation
For Geo fencing , select Disabled or Enabled . Enabling
geofencing restricts the traffic to a specific geolocation
even if all the endpoints in that geolocation are unhealthy.
For Source region , select a valid Google Cloud
source region.
In the External IP addresses section, do the following:
For IP address , enter an external IP address.
Optional: To select an external IP address of a Google Cloud
resource in the current project, click Select .
To enable health checking, select Health checking 1 .
Optional: To add another external IP address, click Add IP address .
Click Done .
If you enabled health checking in the previous step, in the
Health check list, select a health check or create a new one by
following these steps.
Click Create a new health check .
For Name , enter a name for the health check.
Optional: For Description , enter a description for the
health check.
For Source regions , select any three Google Cloud
regions from which you want to send health check probes.
Optional: In the Protocol list, select a protocol.
For Port , enter a port number.
The protocol and the port number determine how Cloud DNS
sends the health check probes.
Optional: To configure content-based health check, for Response ,
provide an expected response string, each up to 1,024 ASCII (single byte)
characters in length.
Optional: To turn on health check logs, for Logs , select
On .
For Check interval , enter the time interval in seconds
between health check probes. The check interval is the amount
of time from the start of one probe issued by one prober to the
start of the next probe issued by the same prober.
For Timeout , enter the amount of time in seconds you want
Google Cloud to wait for a response to a probe.
For Healthy threshold , enter the number of consecutive
successful probe results for a backend to be considered healthy.
For Unhealthy threshold , enter the number of consecutive
failed probe results for a backend to be considered unhealthy.
Click Create .
Click Next
Failover
In the Primary external IP address target section, for
IP address , enter the primary external IP address that is health
checked for this record.
Optional:To select a primary external IP address of a Google Cloud
resource in the current project, click Select .
Optional: To add another primary external IP address, click
Add target . When DNSSEC is enabled, you can add only one primary
external IP address target .
In the Backup geolocation policy section, do the following:
For Geo fencing , select Disabled or Enabled . Enabling
geofencing restricts the traffic to a specific geolocation
even if all the endpoints in that geolocation are unhealthy.
For Source region , select a valid Google Cloud
source region.
In the External IP addresses section, do the following:
For IP address , enter an external IP address.
Optional: To select an external IP address of a Google Cloud
resource in the current project, click Select .
To enable health checking, select Health checking 1 .
Optional: To add another external IP address, click
Add IP address .
Click Done .
If you enabled health checking in the previous step, in the
Health check list, select a health check.
If you don't have an existing health check, create a new health
check.
Click Create a new health check .
For Name , enter a name for the health check.
Optional: For Description , enter a description for the health
check.
For Source regions , select any three Google Cloud
regions from which you want to send health check probes.
Optional: In the Protocol list, select a protocol.
For Port , enter a port number.
The protocol and the port number determine how Cloud DNS
sends the health check probes.
Optional: To configure content-based health check, for Response ,
provide an expected response string, each up to 1,024 ASCII (single byte)
characters in length.
Optional: To turn on health check logs, for Logs , select
On .
For Check interval , enter the time interval in seconds
between health check probes. The check interval is the amount
of time from the start of one probe issued by one prober to the
start of the next probe issued by the same prober.
For Timeout , enter the amount of time in seconds you want
Google Cloud to wait for a response to a probe.
For Healthy threshold , enter the number of consecutive
successful probe results for a backend to be considered healthy.
For Unhealthy threshold , enter the number of consecutive
failed probe results for a backend to be considered unhealthy.
Click Create .
In the Trickle traffic (%) field, enter the percentage of the
traffic sent to the failover targets, regardless of the health check
status of the primary targets.
In the Health check list, select a health check.
Click Next .
Review and create
Click Review .
Review your Cloud DNS record set with routing policy configuration.
Click Create .
gcloud
To create DNS routing policies for public zones, follow these
steps.
To enable health checking in DNS routing policies for public zones,
create a health check for external endpoints.
Run the gcloud beta compute health-checks create command :
gcloud beta compute health-checks create PROTOCOL HEALTH_CHECK_NAME \
--global \
--check-interval= CHECK_INTERVAL \
--source-regions= SOURCE_REGIONS \
--port= PORT_NUMBER
Replace the following:
PROTOCOL : the protocol used for the health check.
Valid options are http , https , ssl , or tcp .
HEALTH_CHECK_NAME : the name of the health check.
CHECK_INTERVAL : the amount of time from the start
of one health check probe system's connection to the start of the
next one. Units are seconds. The CHECK_INTERVAL
value must be between 30 and 300 seconds.
SOURCE_REGIONS : a comma-separated list of
Google Cloud regions from which you want to send health check
probes.
PORT_NUMBER : the port number for health check
requests.
To create a ResourceRecordSet and apply a routing policy to it, run the
gcloud beta dns record-sets create command .
WRR
gcloud beta dns record-sets create RRSET_NAME \
--ttl= TTL \
--type= RRSET_TYPE \
--zone= MANAGED_ZONE \
--routing-policy-type=WRR \
--routing-policy-data= ROUTING_POLICY_DATA \
--health-check= HEALTH_CHECK_NAME
Replace the following:
RRSET_NAME : the DNS name that matches the
incoming queries with this zone's DNS name as its suffix, such
as service.example.com .
TTL : the TTL, in seconds, in which the
resolver caches this ResourceRecordSet , such as 30 .
RRSET_TYPE : the resource record type
of this ResourceRecordSet , such as A .
MANAGED_ZONE : the managed zone that this
ResourceRecordSet is affiliated with, such as service-zone .
The name of this ResourceRecordSet must have the DNS name of
the managed zone as its suffix.
ROUTING_POLICY_DATA : the routing policy data.
Enter a semicolon-delimited list in the format
${weight_percent}:${rrdatas} , such as
.8=203.0.113.1;.2=198.51.100.1 . Specify the weight as a
nonnegative decimal. Weight must be a nonnegative number from
0 to 1000 .
HEALTH_CHECK_NAME : the name of the health
check that you created in the previous step.
Geolocation
gcloud beta dns record-sets create RRSET_NAME \
--ttl= TTL \
--type= RRSET_TYPE \
--zone= MANAGED_ZONE \
--routing-policy-type=GEO \
--routing-policy-data= ROUTING_POLICY_DATA \
--health-check= HEALTH_CHECK_NAME
Replace the following:
RRSET_NAME : the DNS name that matches the
incoming queries with this zone's DNS name as its suffix, such
as service.example.com .
TTL : the TTL, in seconds, in which the
resolver caches this ResourceRecordSet , such as 30 .
RRSET_TYPE : the resource record type
of this ResourceRecordSet , such as A .
MANAGED_ZONE : the managed zone that this
ResourceRecordSet is affiliated with, such as service-zone .
The name of this ResourceRecordSet must have the DNS name of the
managed zone as its suffix.
ROUTING_POLICY_DATA : the routing policy data.
Enter a semicolon-delimited list in the format
${region}=${IP_address},${IP_address} , such as
asia-east1=198.51.100.1;us-central1=203.0.113.1, 203.0.113.2 .
You can specify multiple IP addresses for a single region by
adding IP addresses separated by a comma. Forwarding rule names
are acceptable values and result in health checking.
HEALTH_CHECK_NAME : the name of the health
check that you created in the previous step.
Geolocation with geofence
gcloud beta dns record-sets create RRSET_NAME \
--ttl= TTL \
--type= RRSET_TYPE \
--zone= MANAGED_ZONE \
--routing-policy-type=GEO \
--routing-policy-data= ROUTING_POLICY_DATA \
--health-check= HEALTH_CHECK_NAME \
--enable-geo-fencing
Replace the following:
RRSET_NAME : the DNS name that matches the
incoming queries with this zone's DNS name as its suffix, such
as service.example.com .
TTL : the TTL, in seconds, in which the
resolver caches this ResourceRecordSet , such as 30 .
RRSET_TYPE : the resource record type
of this ResourceRecordSet , such as A .
MANAGED_ZONE : the managed zone that this
ResourceRecordSet is affiliated with, such as service-zone .
The name of this ResourceRecordSet must have the DNS name of
the managed zone as its suffix.
ROUTING_POLICY_DATA : the routing policy data.
Enter a semicolon-delimited list in the format
${region}=${IP_address} , such as
asia-east1=198.51.100.1;us-central1=203.0.113.1 . You can
specify multiple IP addresses for a single region by adding IP
addresses separated by a comma. Forwarding rule names are
acceptable values and result in health checking.
HEALTH_CHECK_NAME : the name of the health
check that you created in the previous step.
--enable-geo-fencing : for GEO routing policies, this
determines whether traffic should failover across regions if all
endpoints in a region are unhealthy. When set, Cloud DNS
always directs queries to the nearest region, even if all
endpoints in that region are unhealthy. Use
--no-enable-geo-fencing to disable geofencing. When not set,
Cloud DNS directs queries to the next nearest
region when all endpoints in a region are unhealthy. This
defaults to false .
Failover
gcloud beta dns record-sets create RRSET_NAME \
--ttl= TTL \
--type= RRSET_TYPE \
--zone= MANAGED_ZONE \
--routing-policy-type=FAILOVER \
--routing-policy-primary-data= ROUTING_POLICY_PRIMARY_DATA \
--routing-policy-backup-data= ROUTING_POLICY_BACKUP_DATA \
--routing-policy-backup-data-type= ROUTING_POLICY_BACKUP_DATA_TYPE \
--backup-data-trickle-ratio= BACKUP_DATA_TRICKLE_RATIO \
--health-check= HEALTH_CHECK_NAME
Replace the following:
RRSET_NAME : the DNS name that matches the
incoming queries with this zone's DNS name as its suffix, such
as service.example.com .
TTL : the TTL, in seconds, in which the
resolver caches this ResourceRecordSet , such as 30
RRSET_TYPE : the resource record type
of this ResourceRecordSet , such as A .
MANAGED_ZONE : the managed zone that this
ResourceRecordSet is affiliated with, such as service-zone .
The name of this ResourceRecordSet must have the DNS name of
the managed zone as its suffix.
ROUTING_POLICY_PRIMARY_DATA : the primary
target to use for FAILOVER routing policies. This target must
be a reference to one or more forwarding rules, such as
forwarding-rule-1 . As long as at least one of these forwarding
rules is healthy, the IP addresses of all healthy forwarding
rules are used to answer queries for this name.
ROUTING_POLICY_BACKUP_DATA : the backup
target to use for FAILOVER routing policies. These targets are
used when all forwarding rules specified in
--routing-policy-primary-data are unhealthy.
Cloud DNS only supports geo-based backup targets. The
format of this field matches that of --routing-policy-data
when --routing-policy-type = 'GEO' , such as
asia-east1=forwarding-rule-2 .
ROUTING_POLICY_BACKUP_DATA_TYPE : for
FAILOVER routing policies, the type of routing policy the
backup data uses. This must be GEO .
BACKUP_DATA_TRICKLE_RATIO : the ratio of
traffic to send to the backup targets, even when the primaries
are healthy. The ratio must be between 0 and 1, such as 0.1 .
The default is set to 0 .
HEALTH_CHECK_NAME : the name of the health
check that you created in the previous step.
Note: You must specify both the routing policy type and the routing
policy data.
API
To enable health checking in DNS routing policies for public zones,
use the healthChecks.insert method .
To create a ResourceRecordSet and apply a routing policy to it, use the
resourceRecordSets.create method .
WRR
POST https://dns.googleapis.com/dns/v1/projects/ PROJECT_ID /managedZones/ MANAGED_ZONE /rrsets
{
"name": " RRSET_NAME ",
"type": " RRSET_TYPE ",
"ttl": TTL ,
"routingPolicy": {
"healthCheck": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /global/healthChecks/ HEALTH_CHECK_NAME "
"wrr": {
"items": [
{
"weight": WEIGHT ,
"rrdata": [" RRDATA "],
"healthCheckedTargets": {
"externalEndpoints": [" EXTERNAL_ENDPOINTS "]
}
},
{
"weight": WEIGHT ,
"rrdata": [" RRDATA "],
"healthCheckedTargets": {
"externalEndpoints": [" EXTERNAL_ENDPOINTS "]
}
}
]
}
}
}
Replace the following:
PROJECT_ID : the ID of the project.
MANAGED_ZONE : the managed zone that this
ResourceRecordSet is affiliated with, such as service-zone ;
the name of this ResourceRecordSet must have the DNS name of the
managed zone as its suffix.
RRSET_NAME : the DNS name that matches the incoming
queries with this zone's DNS name as its suffix, such as
service.example.com .
RRSET_TYPE : the resource record type
of this ResourceRecordSet , such as A .
TTL : the TTL, in seconds, in which the resolver caches this
ResourceRecordSet , such as 30 .
HEALTH_CHECK_NAME : the name of the health check.
WEIGHT : for WRR policies, a semicolon-delimited list
in the format ${weight_percent}=${rrdatas} , such as
.8=10.128.1.1;.2=10.130.1.1 ; specify the weight as any nonnegative
decimal.
Note: You must specify weight as a nonnegative
number. The ratio of traffic routed to the target is calculated
from the ratio of individual weight over the total across all
weights.
RRDATA : an arbitrary value associated with the resource
record set, such as 198.51.100.5 ; you can also enter multiple
values, rrdata1 , rrdata2 , rrdata3 , such as 198.51.100.1 ,
203.0.113.1 .
EXTERNAL_ENDPOINTS : the internet IP addresses to
be health checked.
Geolocation
POST https://dns.googleapis.com/dns/v1/projects/ PROJECT_ID /managedZones/ MANAGED_ZONE /rrsets
{
"name": " RRSET_NAME ",
"type": " RRSET_TYPE ",
"ttl": TTL ,
"routingPolicy": {
"healthCheck": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /global/healthChecks/ HEALTH_CHECK_NAME "
"geo": {
"enableFencing": ENABLE_FENCING
"items": [
{
"location": " LOCATION ",
"rrdata": [" RRDATA "],
"healthCheckedTargets": {
"externalEndpoints": [" EXTERNAL_ENDPOINTS "]
}
},
{
"location": " LOCATION ",
"rrdata": [" RRDATA "],
"healthCheckedTargets": {
"externalEndpoints": [" EXTERNAL_ENDPOINTS "]
}
}
]
}
}
}
Replace the following:
PROJECT_ID : the ID of the project.
MANAGED_ZONE : the managed zone that this
ResourceRecordSet is affiliated with, such as service-zone ;
the name of this ResourceRecordSet must have the DNS name of the
managed zone as its suffix.
RRSET_NAME : the DNS name that matches the incoming
queries with this zone's DNS name as its suffix, such as
service.example.com .
RRSET_TYPE : the resource record type
of this ResourceRecordSet , such as A .
TTL : the TTL, in seconds, in which the resolver caches this
ResourceRecordSet , such as 30 .
HEALTH_CHECK_NAME : the name of the health check.
ENABLE_FENCING : for GEO routing policies, this
determines whether traffic should failover across regions if all
endpoints in a region are unhealthy. When set, Cloud DNS always
directs queries to the nearest region, even if all endpoints in that
region are unhealthy. When not set, Cloud DNS directs queries to
the next nearest region when all endpoints in a region are unhealthy.
Valid options are true and false . The default setting for this
is false .
LOCATION : for GEO policies, the geolocation for
which you need to create the policy, such as asia-east1 .
RRDATA : an arbitrary value associated with the resource
record set, such as 198.51.100.5 ; you can also enter multiple
values, rrdata1 , rrdata2 , rrdata3 , such as 198.51.100.1 ,
203.0.113.1 .
EXTERNAL_ENDPOINTS : the internet IP addresses to
be health checked.
Failover
In the failover option, Cloud DNS only supports GEO policies.
POST https://dns.googleapis.com/dns/v1/projects/ PROJECT_ID /managedZones/ MANAGED_ZONE /rrsets
{
"name": " RRSET_NAME ",
"type": " RRSET_TYPE ",
"ttl": TTL ,
"routingPolicy": {
"healthCheck": "https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /global/healthChecks/ HEALTH_CHECK_NAME "
"primaryBackup": {
"trickleTraffic": TRICKLE_TRAFFIC ,
"primaryTargets": {
"rrdata": [" RRDATA "]
},
"backupGeoTargets": {
"enableFencing": ENABLE_FENCING ,
"items": [
{
"location": " LOCATION ",
"rrdatas": [" RRDATA ]
},
{
"location": " LOCATION ",
"rrdatas": [" RRDATA ", " RRDATA "]
}
]
}
}
}
}
Replace the following:
PROJECT_ID : the ID of the project.
MANAGED_ZONE : the managed zone that this
ResourceRecordSet is affiliated with, such as service-zone ;
the name of this ResourceRecordSet must have the DNS name of the
managed zone as its suffix.
RRSET_NAME : the DNS name that matches the incoming
queries with this zone's DNS name as its suffix, such as
service.example.com .
RRSET_TYPE : the resource record type
of this ResourceRecordSet , such as A .
TTL : the TTL, in seconds, in which the resolver caches this
ResourceRecordSet , such as 30 .
HEALTH_CHECK_NAME : the name of the health check.
TRICKLE_TRAFFIC : the ratio of traffic to
send to the backup targets even when the primaries are healthy; the ratio
must be between 0 and 1, such as 0.1 .
LOCATION : for GEO policies, the geolocation for
which you need to create the policy, such as asia-east1 .
RRDATA : an arbitrary value associated with the resource
record set, such as 198.51.100.5 ; you can also enter multiple
values, rrdata1 , rrdata2 , rrdata3 , such as 198.51.100.1 ,
203.0.113.1 .
ENABLE_FENCING : for GEO routing policies, this
determines whether traffic must failover across regions if all
endpoints in a region are unhealthy. When set, Cloud DNS always
directs queries to the nearest region, even if all endpoints in that
region are unhealthy. When not set, Cloud DNS directs queries to
the next nearest region when all endpoints in a region are unhealthy.
The default setting for this is false .
Update DNS routing policies
To update a resource record set's routing policy, follow these steps.
Console
Note: You can update a routing policy in the Google Cloud console
without enabling health checks. To enable health checks, use the
gcloud CLI or the Cloud DNS API.
In the Google Cloud console, go to the Cloud DNS zones
page.
Go to Cloud DNS zones
Click the zone for which you want to update the resource record set's
routing policy.
On the Zone details page, next to the resource record set that you
want to update, click
edit Edit .
After you have made the updates, click Save .
gcloud
Note: To enable health checking in DNS routing policies with
gcloud CLI, you must specify the name of the forwarding rule.
Specifying just the IP address of the forwarding rule doesn't result in
health checking.
Run the
gcloud dns record-sets update command :
WRR
gcloud dns record-sets update RRSET_NAME \
--ttl= TTL \
--type= RRSET_TYPE \
--zone= MANAGED_ZONE \
--routing-policy-type=WRR \
--routing-policy-data= ROUTING_POLICY_DATA \
--enable-health-checking
Geolocation
gcloud dns record-sets update RRSET_NAME \
--ttl= TTL \
--type= RRSET_TYPE \
--zone= MANAGED_ZONE \
--routing-policy-type=GEO \
--routing-policy-data= ROUTING_POLICY_DATA \
--enable-health-checking
Geolocation with geofence
gcloud dns record-sets update RRSET_NAME \
--ttl= TTL \
--type= RRSET_TYPE \
--zone= MANAGED_ZONE \
--routing-policy-type=GEO \
--routing-policy-data= ROUTING_POLICY_DATA \
--enable-geo-fencing
--enable-health-checking
Failover
gcloud dns record-sets update RRSET_NAME \
--ttl= TTL \
--type= RRSET_TYPE \
--zone= MANAGED_ZONE \
--routing-policy-type=FAILOVER \
--enable-geo-fencing \
--routing-policy-primary-data= ROUTING_POLICY_PRIMARY_DATA \
--routing-policy-backup-data= ROUTING_POLICY_BACKUP_DATA \
--backup-data-trickle-ratio= BACKUP_DATA_TRICKLE_RATIO \
--enable-health-checking
Replace the following:
RRSET_NAME : the DNS name that matches the incoming
queries with this zone's DNS name as its suffix, such as
service.example.com
TTL : the TTL, in seconds, in which the resolver caches this
ResourceRecordSet , such as 30
RRSET_TYPE : the resource record type
of this ResourceRecordSet , such as A
For a list of supported record types, see
Select resource record types .
MANAGED_ZONE : the managed zone that this
ResourceRecordSet is affiliated with, such as service-zone .
The name of this ResourceRecordSet must have the DNS name of the
managed zone as its suffix
ROUTING_POLICY_TYPE : the type of routing policy.
Enter WRR for weighted round robin, GEO for geo-location, or
FAILOVER for failover policies. You cannot
modify this field after a policy has a chosen type; you can only delete
the policy and add a new policy with the different type.
ROUTING_POLICY_DATA : the routing policy data
For --routing-policy-type=WRR , enter a semicolon-delimited list in
the format ${weight_percent}:${rrdatas} , such as
.8=203.0.113.1;.2=198.51.100.1 . Specify the weight as a
nonnegative decimal. The ratio of traffic routed to the target is calculated
from the ratio of individual weight over the total across all
weights. Forwarding rule names are acceptable values and result in
health checking.
For --routing-policy-type=GEO , enter a semicolon-delimited list in
the format ${region}=${IP_address} , such as
asia-east1=198.51.100.1;us-central1=203.0.113.1 . You can specify
multiple IP addresses for a single region by adding IP addresses
separated by a comma.
Forwarding rule names are acceptable values and result in
health checking.
For --routing-policy-type=FAILOVER , enter the name of the forwarding
rule that you created in the format ${region}=${Forwarding rule name} .
Note:
When health checks are disabled, the rrdata for `WRR` or `GEO` can be
RFC 1035
format DNS `rrdata`.
When health checks are enabled, the rrdata is a reference to
a forwarding rule. Cloud DNS uses the IP
address of the forwarding rule as the rrdata. If it becomes unhealthy,
Cloud DNS monitors the health status of the forwarding rule
and removes the forwarding rule from the results.
--enable-geo-fencing : for GEO routing policies, this determines
whether traffic should fail over across regions if all endpoints in a
region are unhealthy. When set, Cloud DNS always directs queries
to the nearest region, even if all endpoints in that region are unhealthy.
Use --no-enable-geo-fencing to disable geofencing. When unset, all
endpoints in a region are unhealthy and Cloud DNS directs queries
to the next nearest region. The default setting for this is false .
ROUTING_POLICY_PRIMARY_DATA : the primary target to use
for FAILOVER routing policies. This target must be a reference to
one or more forwarding rules, such as forwarding-rule-1 . As long as at least
one of these forwarding rules is healthy, the IP addresses of all
healthy forwarding rules are used to answer queries for this name.
ROUTING_POLICY_BACKUP_DATA : the backup target to use
for FAILOVER routing policies. These targets are used when all
forwarding rules specified in --routing-policy-primary-data are
unhealthy. Cloud DNS only supports geo-based backup targets. The
format of this field matches that of --routing-policy-data when
--routing-policy-type = 'GEO' , such as asia-east1=forwarding-rule-2 .
BACKUP_DATA_TRICKLE_RATIO : the ratio of traffic to
send to the backup targets even when the primaries are healthy. The ratio
must be between 0 and 1, such as 0.1 . The default is set to 0.
--enable-health-checking : Enables the health checking of forwarding
rules that are provided as rrdata to --routing-policy-data .
Note: You must specify both the routing policy type and the routing
policy data.
API
Use the
resourceRecordSets.patch
method. Specify only one of rrset.rrdatas or rrset.routingPolicy . If
specifying routingPolicy , you must specify the new routingPolicy field
in its entirety.
WRR
For WRR policies, use the following method:
PATCH https://dns.googleapis.com/dns/v1/projects/ PROJECT_ID /managedZones/ MANAGED_ZONE /rrsets/ RRSET_NAME / RRSET_TYPE
{
"name": " RRSET_NAME ",
"type": " RRSET_TYPE ",
"ttl": TTL,
"routingPolicy": {
"wrr": {
"items": [
{
"weight": WEIGHT ,
"rrdatas": [" RRDATA "]
},
{
"weight": WEIGHT ,
"rrdatas": [" RRDATA "]
}
]
}
}
}
Replace the following:
PROJECT_ID : the ID of the project
MANAGED_ZONE : the managed zone that this
ResourceRecordSet is affiliated with, such as service-zone ;
the name of this ResourceRecordSet must have the DNS name of the
managed zone as its suffix
RRSET_NAME : the DNS name that matches the incoming
queries with this zone's DNS name as its suffix, such as
service.example.com
RRSET_TYPE : the resource record type
of this ResourceRecordSet , such as A
WEIGHT : for WRR policies, a semicolon-delimited list
in the format ${weight_percent}=${rrdatas} , such as
.8=10.128.1.1;.2=10.130.1.1 ; specify the weight as any nonnegative
decimal
Note: You must specify weight as a nonnegative
number. The ratio of traffic routed to the target is calculated
from the ratio of individual weight over the total across all
weights.
RRDATA : an arbitrary value associated with the resource
record set, such as 198.51.100.5 ; you can also enter multiple
values, rrdata1 rrdata2 rrdata3 , such as 198.51.100.1
203.0.113.1 ...
Geolocation
Use the following method:
PATCH https://dns.googleapis.com/dns/v1/projects/ PROJECT_ID /managedZones/ MANAGED_ZONE /rrsets/ RRSET_NAME / RRSET_TYPE
{
"name": " RRSET_NAME ",
"type": " RRSET_TYPE ",
"ttl": TTL ,
"routingPolicy": {
"geo": {
"items": [
{
"location": " LOCATION ",
"healthCheckedTargets": {
"internalLoadBalancers": [
{
"loadBalancerType": " LOAD_BALANCER_TYPE "
"ipAddress": " IP_ADDRESS "
"port": " PORT_NUMBER "
"ipProtocol": " IP_PROTOCOL "
"networkUrl": " NETWORK_URL "
"project": " PROJECT_ID "
"region": " REGION "
}
]
}
},
{
"location": " LOCATION ",
"healthCheckedTargets": {
"internalLoadBalancers": [
{
"loadBalancerType": " LOAD_BALANCER_TYPE "
"ipAddress": " IP_ADDRESS "
"port": " PORT_NUMBER "
"ipProtocol": " IP_PROTOCOL "
"networkUrl": " NETWORK_URL "
"project": " PROJECT_ID "
"region": " REGION "
}
]
}
}
]
}
}
}
Replace the following:
PROJECT_ID : the ID of the project
MANAGED_ZONE : the managed zone that this
ResourceRecordSet is affiliated with, such as service-zone ;
the name of this ResourceRecordSet must have the DNS name of the
managed zone as its suffix
RRSET_NAME : the DNS name that matches the incoming
queries with this zone's DNS name as its suffix, such as
service.example.com
RRSET_TYPE : the resource record type
of this ResourceRecordSet , such as A
TTL : the TTL, in seconds, in which the resolver caches this
ResourceRecordSet , such as 30
LOCATION : for GEO policies, the geolocation for
which you need to update the policy, such as asia-east1
LOAD_BALANCER_TYPE : the type of load balancer,
such as regionalL4ilb , globalL7ilb , or regionalL7ilb .
This setting is optional.
IP_ADDRESS : the IP address that the forwarding rule
serves
PORT_NUMBER : the port number
IP_PROTOCOL : defines the protocol used for the health
check; valid options are tcp and udp
NETWORK_URL : the network URL to which this forwarding
rule applies
REGION : the region in which you created the forwarding
rule
Delete DNS routing policies
To delete a routing policy, you must delete the resource record set that
contains the routing policy. To do so, follow these steps.
Console
In the Google Cloud console, go to the Cloud DNS zones page.
Go to Cloud DNS zones
Click the zone for which you want to delete the resource record set.
On the Zone details page, next to the DNS name of
the resource record set that you want to delete, select the checkbox.
Click Delete record sets .
gcloud
Run the
gcloud dns record-sets delete command :
gcloud dns record-sets delete RRSET_NAME \
--type= RRSET_TYPE \
--zone= MANAGED_ZONE \
Replace the following:
RRSET_NAME : the DNS name that matches the incoming
queries with this zone's DNS name as its suffix, such as
service.example.com
RRSET_TYPE : the resource record type
of this ResourceRecordSet , such as A
For a list of supported record types, see
Selecting resource record types .
MANAGED_ZONE : the managed zone that this
ResourceRecordSet is affiliated with, such as service-zone ;
the name of this ResourceRecordSet must have the DNS name of the
managed zone as its suffix
API
Use the
resourceRecordSets.delete
method:
DELETE https://dns.googleapis.com/dns/v1/projects/ PROJECT_ID /managedZones/ MANAGED_ZONE /rrsets/ RRSET_NAME / RRSET_TYPE
Replace the following:
PROJECT_ID : the ID of the project
MANAGED_ZONE : the managed zone that this
ResourceRecordSet is affiliated with, such as my-zone-name ;
the name of this ResourceRecordSet must have the DNS name of the
managed zone as its suffix
RRSET_NAME : the DNS name that matches the incoming
queries with this zone's DNS name as its suffix, such as
test.example.com
RRSET_TYPE : the resource record type
of this ResourceRecordSet , such as A
What's next
To work with managed zones, see
Create, modify, and delete zones .
To find solutions for common issues that you might encounter when using
Cloud DNS, see Troubleshooting .
To get an overview of Cloud DNS, see
Cloud DNS overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
