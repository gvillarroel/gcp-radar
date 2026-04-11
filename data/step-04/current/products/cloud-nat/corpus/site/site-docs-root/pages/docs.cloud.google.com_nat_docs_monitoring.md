---
title: "Logs and metrics \_|\_ Cloud NAT \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/nat/docs/monitoring
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/nat/docs
source_metadata:
  url: https://docs.cloud.google.com/nat/docs/monitoring
  title: "Logs and metrics \_|\_ Cloud NAT \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud NAT
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Logs and metrics
Logging
Cloud NAT logging lets you log NAT connections and errors. When
Cloud NAT logging is enabled, one log entry can be generated for
each of the following scenarios:
When a network connection using NAT is created.
When a packet is dropped because no port was available for NAT.
You can choose to log both kinds of events, or only one or the other.
Created logs are sent to Cloud Logging .
Specifications
The following specifications apply to Cloud NAT logging:
Cloud NAT logging handles TCP and UDP traffic only.
Cloud NAT logging only logs dropped packets if they are
egress (outbound) TCP and UDP packets. It does not log dropped incoming
packets. For example, if an inbound response to an outbound
request is dropped for any reason, no error is logged.
Each VM instance can only generate a certain number of log entries per unit
time, proportional to its number of vCPUs . The
VM can generate 50-100 log entries per second per vCPU.
This rate threshold affects the number of events that can be logged. Even if
some events are filtered out, their occurrence counts toward the number of
possible log entries. Limiting logs to only errors or only network address
translation connections does not necessarily increase the number of viewed log
entries. For example, if you choose to log only successful connections, periods
of excessive failed connection attempts and NAT errors can still restrict the
number of successful connection log entries.
Cloud NAT logging does not log every single packet. Even if the
VM's rate threshold has not been reached, some conditions can cause
events to be omitted from the log. You should rely on the presence of entries
in Cloud NAT logging to make informed decisions, but you
must not assume that the absence of entries means that an event didn't happen.
Configure logging
To configure Cloud NAT logging, follow these steps.
Enable logging
If logging is enabled, all collected logs are sent to Cloud Logging by
default. You can filter these so that only certain logs are sent.
You can also specify these values when you create or edit a NAT gateway. The
following directions show how to enable logging for an existing NAT gateway.
Console
In the Google Cloud console, go to the Cloud NAT page.
Go to Cloud NAT
Click your NAT gateway.
Click edit Edit .
Click Advanced configurations .
In the Logging section, select one of the following:
No logging : disables logging
Translation and errors : sends all logs to Logging
Translation only : sends a log only when a
connection is created; does not log dropped packets
Errors only : sends a log when a packet is dropped because no port
was available; does not log new connections
Click Save .
gcloud
Use the
gcloud compute routers nats update command .
The following commands enable logging for an existing NAT gateway.
In each command, replace the following:
NAT_GATEWAY : the name of the NAT gateway
ROUTER_NAME : the name of the Cloud Router
that hosts the NAT gateway
REGION : the region of the Cloud Router
To log network address translation events and errors:
gcloud compute routers nats update NAT_GATEWAY \
--router= ROUTER_NAME \
--region= REGION \
--enable-logging
To log only network address translation events:
gcloud compute routers nats update NAT_GATEWAY \
--router= ROUTER_NAME \
--region= REGION \
--enable-logging \
--log-filter=TRANSLATIONS_ONLY
To log only errors:
gcloud compute routers nats update NAT_GATEWAY \
--router= ROUTER_NAME \
--region= REGION \
--enable-logging \
--log-filter=ERRORS_ONLY
Clear log filters
If you have a filter set, you can clear it. Clearing a log filter means that
both network address translation events and errors are logged, provided that
logging is enabled.
Console
In the Google Cloud console, go to the Cloud NAT page.
Go to Cloud NAT
Click your NAT gateway.
Click edit Edit .
Click Advanced configurations .
In the Logging section, select Translation and errors .
Click Save .
gcloud
Use the
gcloud compute routers nats update command .
The --log-filter=ALL flag in the following command sets the log filter to
accept all logs.
gcloud compute routers nats update NAT_GATEWAY \
--router= ROUTER_NAME \
--region= REGION \
--log-filter=ALL
Replace the following:
NAT_GATEWAY : the name of the NAT gateway
ROUTER_NAME : the name of the Cloud Router
that hosts the NAT gateway
REGION : the region of the Cloud Router
Disable logging
To disable logging, do the following:
Console
In the Google Cloud console, go to the Cloud NAT page.
Go to Cloud NAT
Click your NAT gateway.
Click edit Edit .
Click Advanced configurations .
In the Logging section, select No logging .
Click Save .
gcloud
Use the
gcloud compute routers nats update command .
gcloud compute routers nats update NAT_GATEWAY \
--router= ROUTER_NAME \
--region= REGION \
--no-enable-logging
Replace the following:
NAT_GATEWAY : the name of the NAT gateway
ROUTER_NAME : the name of the Cloud Router
that hosts the NAT gateway
REGION : the region of the Cloud Router
Determine logging status
To determine the status for logging, do the following:
Console
In the Google Cloud console, go to the Cloud NAT page.
Go to Cloud NAT
Click your NAT gateway.
Click edit Edit .
Click Advanced configurations .
Inspect the selections in the Logging section.
gcloud
gcloud compute routers nats describe NAT_GATEWAY \
--router= ROUTER_NAME \
--region= REGION
Replace the following:
NAT_GATEWAY : the name of the NAT gateway
ROUTER_NAME : the name of the Cloud Router
that hosts the NAT gateway
REGION : the region of the Cloud Router
View logs
To view NAT logs, do the following:
Console
In the Google Cloud console, go to the Logs Explorer page.
Go to Logs Explorer
To see all NAT logs, in the Log name menu, select
Cloud NAT Gateway .
To see logs for only one region, in the Log name menu, select
Cloud NAT Gateway , and then slide the cursor right to select a region.
To see logs for only one gateway, in the Log name menu, select
Cloud NAT Gateway , and then slide the cursor right to select a region.
Slide the cursor right again to select a single gateway.
Alternatively, enter the following expression into
the query editor:
resource.type="nat_gateway"
logName="projects/{#project_id}/logs/compute.googleapis.com%2Fnat_flows"
gcloud
gcloud logging read 'resource.type=nat_gateway' \
--limit=10 \
--format=json
Where:
resource.type=nat_gateway : limits the output to your NAT gateways
--limit=10 : limits the output to 10 entries; you can input a different
value to see more or fewer entries, or omit it entirely to see a
continuous scroll of logs
--format=json : displays the output in JSON format
For more options, see Reading log
entries .
You can configure the export of
logs-based metrics for resource logs.
What is logged
Cloud NAT log entries contain information useful for monitoring
and debugging your NAT traffic. Log entries contain the following
types of information:
General information shown in most Google Cloud logs, such as severity,
project ID, project number, and timestamp.
Specific information related to Cloud NAT. Some log fields
contain entries that are themselves multiple fields. These entries
and field descriptions are shown in the following tables.
Log fields
Field
Value
Meaning
connection
object( NatIpConnection )
7-tuple describing the source VM IP address and port, NAT source IP
address and port, destination IP address and port, and IP address protocol
of this connection.
allocation_status
enum
Indicates whether this connection was successfully allocated or
dropped. One of OK or DROPPED .
gateway_identifiers
object( NatGateway )
The NAT gateway configuration that the connection used.
endpoint
object( InstanceDetails )
VM instance details. In a Shared VPC configuration,
project_id corresponds to the service project.
vpc
object( VpcDetails )
Virtual Private Cloud (VPC) network details. In a Shared VPC configuration,
project_id corresponds to that of the host project.
destination
object( DestinationDetails )
Details of the destination of the connection.
NatIpConnection field format
Field
Type
Description
src_ip
string
Source IP address
src_port
int32
Source port
nat_ip
string
NAT IP address
nat_port
int32
NAT assigned port
dest_ip
string
Destination IP address 1
dest_port
int32
Destination port
protocol
int32
IANA protocol number
1
For NAT64, this field is populated with the destination IPv4-embedded
IPv6 address.
NatGateway field format
Field
Type
Description
gateway_name
string
Name of the NAT gateway
router_name
string
Cloud Router associated with the NAT gateway
region
string
Region of the Cloud Router
InstanceDetails field format
Field
Type
Description
project_id
string
ID of the project containing the VM
vm_name
string
Instance name of the VM
region
string
Region of the VM
zone
string
Zone of the VM
VpcDetails field format
Field
Type
Description
project_id
string
ID of the project containing the network
vpc_name
string
Network on which the VM is operating
subnetwork_name
string
Subnet on which the VM is operating
DestinationDetails field format
Field
Type
Description
geo_location
object( GeographicDetails )
If the destination of the connection was external to Google Cloud,
this field is populated with available location metadata.
instance
object( InstanceDetails )
If the destination of the connection is an instance within the same
project as the source, this field is populated with VM instance
details.
vpc
object( VpcDetails )
If the destination of the connection is within the same project as the
source, this field is populated with the
destination VPC network details. If the destination is a
cross-project VPC network, then this field will display a blank.
GeographicDetails field format
Field
Type
Description
continent
string
Continent for external endpoints
country
string
Country for external endpoints
region
string
Region for external endpoints
city
string
City for external endpoints
asn
string
The autonomous system number (ASN) of the external network to which
this endpoint belongs.
Examples
Example 1: NAT-ed TCP connection record from a VM instance in a
Shared VPC network going to an external server in
France.
{
insertId: "1the8juf6vab1t"
jsonPayload: {
allocation_status: "OK"
connection: {
dest_ip : "198.51.100.142"
dest_port: 80
nat_ip: "203.0.113.17"
nat_port: 34889
protocol: "tcp"
src_ip: "10.0.0.1"
src_port: 45047
}
destination: {
geo_location: {
city: "Bordeaux"
continent: "Europe"
country: "France"
region: "Nouvelle-Aquitaine"
}
}
endpoint: {
project_id: "service-project-1"
region: "europe-west1"
vm_name: "vm-1"
zone: "europe-west1-b"
}
gateway_identifiers: {
gateway_name: "my-nat-1"
region: "europe-west1"
router_name: "my-router-1"
}
vpc: {
project_id: "host-project"
subnetwork_name: "subnetwork-1"
vpc_name: "network-1"
}
}
labels: {
nat.googleapis.com/instance_name: "vm-1"
nat.googleapis.com/instance_zone: "europe-west1-b"
nat.googleapis.com/nat_ip: "203.0.113.17"
nat.googleapis.com/network_name: "network-1"
nat.googleapis.com/router_name: "my-router-1"
nat.googleapis.com/subnetwork_name: "subnetwork-1"
}
logName: "projects/host-project/logs/compute.googleapis.com%2Fnat_flows"
receiveTimestamp: "2018-06-28T10:46:08.123456789Z"
resource: {
labels: {
gateway_name: "my-nat-1"
project_id: "host-project"
region: "europe-west1-d"
router_id: "987654321123456"
}
type: "nat_gateway"
}
timestamp: "2018-06-28T10:46:00.602240572Z"
}
Example 2: Record for a packet dropped because there were no available ports.
Sending VM was trying to reach the external IP address of another VM in the
same project.
{
insertId: "1the8juf6vab1l"
jsonPayload: {
allocation_status: "DROPPED"
connection: {
dest_ip : "192.0.2.87"
dest_port: 80
protocol: "tcp"
src_ip: "10.0.128.1"
src_port: 45047
}
destination: {
instance: {
project_id: "service-project-1"
region: "asia-east1"
vm_name: "vm-2"
zone: "asia-east1-b"
}
}
endpoint: {
project_id: "service-project-1"
region: "europe-west1"
vm_name: "vm-1"
zone: "europe-west1-b"
}
gateway_identifiers: {
cloud_router: "my-router-1"
gateway_name: "my-nat-2"
region: "europe-west1"
}
vpc: {
project_id: "host-project"
subnetwork_name: "subnetwork-1"
vpc_name: "network-1"
}
}
logName: "projects/host-project/logs/compute.googleapis.com%2Fnat_flows"
receiveTimestamp: "2018-06-28T10:46:09.123456789Z"
resource: {
labels: {
gateway_name: "my-nat-2"
project_id: "host-project"
region: "europe-west1-d"
router_id: "987654321123456"
}
type: "nat_gateway"
}
timestamp: "2018-06-28T10:46:01.602240572Z"
}
Pricing for Cloud NAT logging
See Logging pricing .
Monitoring
Cloud NAT exposes key metrics to Cloud Monitoring that give you insights
into your fleet's usage of NAT gateways.
Metrics are sent automatically to Cloud Monitoring. There, you can create
custom dashboards, set up alerts, and query the metrics.
Following are the required Identity and Access Management (IAM) roles:
For Shared VPC users with VMs and NAT gateways defined in different
projects, access to the VM level metrics requires the
roles/monitoring.viewer
IAM role for the project of each VM.
For the NAT gateway resource, access to the gateway metrics requires the
roles/monitoring.viewer IAM role for the project that
contains the gateway.
View predefined dashboards
Cloud NAT provides a set of predefined dashboards that display
activity across your gateway:
Open connections
Egress data processed by NAT (rate)
Ingress data processed by NAT (rate)
Port usage
NAT allocation errors
Dropped sent packets rate
Dropped received packets rate
To view predefined dashboards from the details page of a particular
gateway, follow these steps:
Console
In the Google Cloud console, go to the Cloud NAT page.
Go to Cloud NAT
Click an existing gateway.
Click the Monitoring tab.
Scroll to see all the dashboards. You can change the view from 1 hour
to 30 days by using the control at the top of the page. Hovering over a
point on the graph gives you details for that specific time.
Define custom dashboards
To create a custom dashboard to view
VM instance metrics or NAT
gateway metrics , follow these steps:
Console
In the Google Cloud console, go to the dashboard Dashboards page:
Go to Dashboards
If you use the search bar to find this page, then select the result whose subheading is
Monitoring .
Click Create dashboard
Optional: Update the dashboard title with a descriptive name for your dashboard.
Click Add Widget and then select Metric .
Expand the Metric menu, enter Cloud NAT Gateway or VM Instance
in the filter bar, and then use the submenus to select a specific resource type and metric:
In the Active resources menu, select Cloud NAT Gateway or VM Instance .
In the Active metric categories menu, select Nat .
In the Active metrics menu, select the metric that you want to view.
Click Apply .
Combine time series:
To display every time series, in the Aggregation element, ensure the first menu
is set to Unaggregated and the second menu is set to None .
To combine time series, in the Aggregation element, use the first menu to
select a function and the second menu to select the labels. If the second menu is set to
None , then the chart displays one time series.
For example, to display the average value of time series after grouping by zone,
set the first menu to Mean and the second to zone .
For information about combining time series, see
Choose how to display charted data .
For each additional widget that you want to add to your dashboard, click Add widget ,
complete the dialog, and then select Apply .
For more information about adding widgets, see the following pages:
Add charts and tables .
Display alert charts and incidents .
Display logs .
Add text and groupings .
Define alerting policies
To create a metrics-based alerting policy ,
follow these steps:
Console
You can create alerting policies to monitor the values of metrics and to notify you when
those metrics violate a condition.
In the Google Cloud console, go to the
notifications Alerting page:
Go to Alerting
If you use the search bar to find this page, then select the result whose subheading is
Monitoring .
If you haven't created your notification channels and if you want to be notified, then click
Edit Notification Channels and add your notification channels. Return to the
Alerting page after you add your channels.
From the Alerting page, select Create policy .
To select the metric, expand the Select a metric menu and then do the following:
To limit the menu to relevant entries, enter Cloud NAT gateway or VM Instance
into the filter bar. If there are no results after you filter the menu, then disable
the Show only active resources & metrics toggle.
For the Resource type , select Cloud NAT gateway or VM Instance .
Select a Metric category and a Metric , and then select Apply .
Click Next .
The settings in the Configure alert trigger page determine when the alert is triggered.
Select a condition type and, if necessary, specify a threshold. For more
information, see
Create metric-threshold alerting policies .
Click Next .
Optional: To add notifications to your alerting policy, click
Notification channels . In the dialog, select one or more notification
channels from the menu, and then click OK .
Optional: Update the Incident autoclose duration . This field determines when
Monitoring closes incidents in the absence of metric data.
Optional: Click Documentation , and then add any information that you
want included in a notification message.
Click Alert name and enter a name for the alerting policy.
Click Create Policy .
For more information, see Alerting overview .
Metric reporting frequency and retention
Metrics for Cloud NAT are batched and exported to
Monitoring every one minute. Monitoring data is retained for
six weeks.
By default, the dashboard provides data analysis for the past hour ( 1h ).
You can request analysis for a different time interval either
by selecting one of the preconfigured intervals from the menu
or by manually entering the time interval you want. For example:
3h (for 3 hours) or 4d (for 4 days) or 6w (for six weeks).
VM instance metrics
The "metric type" strings in this table must be prefixed
with compute.googleapis.com/ . That prefix has been
omitted from the entries in the table.
Metric type Launch stage Display name
Kind, Type, Unit Monitored resources
Description Labels
nat/allocated_ports
GA
Allocated ports
GAUGE , INT64 , {port}
gce_instance
Number of ports allocated to a VM by the NAT gateway. Sampled every 60 seconds. After sampling, data isn't visible for up to 165 seconds.
nat_project_number :
The project number to which the NAT gateway belongs.
router_id :
The Cloud Router ID to which the NAT gateway belongs.
nat_gateway_name :
The name of the NAT gateway.
nat_ip :
The NAT IP allocated to the NAT gateway.
nat/closed_connections_count
GA
Closed connections count
DELTA , INT64 , {connection}
gce_instance
Count of connections closed over the NAT gateway. Sampled every 60 seconds. After sampling, data isn't visible for up to 165 seconds.
nat_project_number :
The project number to which the NAT gateway belongs.
router_id :
The Cloud Router ID to which the NAT gateway belongs.
nat_gateway_name :
The name of the NAT gateway.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
nat/dropped_received_packets_count
GA
Received packets dropped count
DELTA , INT64 , {packet}
gce_instance
Count of received packets dropped by the NAT gateway. Sampled every 60 seconds. After sampling, data isn't visible for up to 165 seconds.
nat_project_number :
The project number to which the NAT gateway belongs.
router_id :
The Cloud Router ID to which the NAT gateway belongs.
nat_gateway_name :
The name of the NAT gateway.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
nat/dropped_sent_packets_count
GA
Sent packets dropped count
DELTA , INT64 , {packet}
gce_instance
Count of sent packets dropped by the NAT gateway. Sampled every 60 seconds. After sampling, data isn't visible for up to 165 seconds.
nat_project_number :
The project number to which the NAT gateway belongs.
router_id :
The Cloud Router ID to which the NAT gateway belongs.
nat_gateway_name :
The name of the NAT gateway.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
reason :
The reason for the packet drop. Possible values are OUT_OF_RESOURCES, ENDPOINT_INDEPENDENCE_CONFLICT.
nat/new_connections_count
GA
New connections count
DELTA , INT64 , {connection}
gce_instance
Count of new connections created over the NAT gateway. Sampled every 60 seconds. After sampling, data isn't visible for up to 165 seconds.
nat_project_number :
The project number to which the NAT gateway belongs.
router_id :
The Cloud Router ID to which the NAT gateway belongs.
nat_gateway_name :
The name of the NAT gateway.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
nat/open_connections
GA
Open connections
GAUGE , INT64 , {connection}
gce_instance
Number of connections open on the NAT gateway. Sampled every 60 seconds. After sampling, data isn't visible for up to 165 seconds.
nat_project_number :
The project number to which the NAT gateway belongs.
router_id :
The Cloud Router ID to which the NAT gateway belongs.
nat_gateway_name :
The name of the NAT gateway.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
nat/port_usage
GA
Port usage
GAUGE , INT64 , {port}
gce_instance
Maximum number of connections from a VM to a single destination endpoint (IP:port). Sampled every 60 seconds. After sampling, data isn't visible for up to 165 seconds.
nat_project_number :
The project number to which the NAT gateway belongs.
router_id :
The Cloud Router ID to which the NAT gateway belongs.
nat_gateway_name :
The name of the NAT gateway.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
nat/received_bytes_count
GA
Received bytes count
DELTA , INT64 , By
gce_instance
Count of bytes received (destination -> source) through the NAT gateway. Sampled every 60 seconds. After sampling, data isn't visible for up to 165 seconds.
nat_project_number :
The project number to which the NAT gateway belongs.
router_id :
The Cloud Router ID to which the NAT gateway belongs.
nat_gateway_name :
The name of the NAT gateway.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
nat/received_packets_count
GA
Received packets count
DELTA , INT64 , {packet}
gce_instance
Count of packets received (destination -> source) through the NAT gateway. Sampled every 60 seconds. After sampling, data isn't visible for up to 165 seconds.
nat_project_number :
The project number to which the NAT gateway belongs.
router_id :
The Cloud Router ID to which the NAT gateway belongs.
nat_gateway_name :
The name of the NAT gateway.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
nat/sent_bytes_count
GA
Sent bytes count
DELTA , INT64 , By
gce_instance
Count of bytes sent (source -> destination) over the NAT gateway. Sampled every 60 seconds. After sampling, data isn't visible for up to 165 seconds.
nat_project_number :
The project number to which the NAT gateway belongs.
router_id :
The Cloud Router ID to which the NAT gateway belongs.
nat_gateway_name :
The name of the NAT gateway.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
nat/sent_packets_count
GA
Sent packets count
DELTA , INT64 , {packet}
gce_instance
Count of packets sent (source -> destination) over the NAT gateway. Sampled every 60 seconds. After sampling, data isn't visible for up to 165 seconds.
nat_project_number :
The project number to which the NAT gateway belongs.
router_id :
The Cloud Router ID to which the NAT gateway belongs.
nat_gateway_name :
The name of the NAT gateway.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
VM instance filtering dimensions
label_key
Type
Description
project_id
STRING
The project ID of the VM instance.
instance_id
STRING
The ID of the VM instance.
zone
STRING
The zone of the VM instance.
nat_project_number
STRING
The project number to which the NAT gateway belongs.
router_id
STRING
The Cloud Router ID to which the NAT gateway belongs.
nat_gateway_name
STRING
The name of the NAT gateway.
nat_ip
STRING
The NAT IP address allocated to the NAT gateway. Valid for metrics
allocated_ports .
ip_protocol
STRING
The protocol of the connection. Can be TCP ,
UDP or ICMP . Valid for all metrics except
allocated_ports .
reason
STRING
The reason for the packet drop. Possible values are:
OUT_OF_RESOURCES , if Cloud NAT runs out
of NAT IP addresses or ports.
ENDPOINT_INDEPENDENCE_CONFLICT , when an
endpoint
independent conflict arises.
Valid for metrics dropped_sent_packets_count .
NAT gateway metrics
The "metric type" strings in this table must be prefixed
with router.googleapis.com/ . That prefix has been
omitted from the entries in the table.
Metric type Launch stage Display name
Kind, Type, Unit Monitored resources
Description Labels
nat/allocated_ports
GA
Allocated ports
GAUGE , INT64 , {port}
nat_gateway
Number of ports allocated to all VMs by the NAT gateway. Sampled every 60 seconds. After sampling, data isn't visible for up to 225 seconds.
nat_ip :
NAT IP of the ports.
nat/closed_connections_count
GA
Closed connections count
DELTA , INT64 , {connection}
nat_gateway
Count of connections closed over the NAT gateway. Sampled every 60 seconds. After sampling, data isn't visible for up to 225 seconds.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
nat/dropped_received_packets_count
GA
Received packets dropped count
DELTA , INT64 , {packet}
nat_gateway
Count of received packets dropped by the NAT gateway. Sampled every 60 seconds. After sampling, data isn't visible for up to 225 seconds.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
nat/dropped_sent_packets_count
GA
Sent packets dropped count
DELTA , INT64 , {packet}
nat_gateway
Count of sent packets dropped by the NAT gateway. Sampled every 60 seconds. After sampling, data isn't visible for up to 225 seconds.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
reason :
The reason for the packet drop. Possible values are OUT_OF_RESOURCES, ENDPOINT_INDEPENDENCE_CONFLICT.
nat/nat_allocation_failed
GA
NAT allocation failed
GAUGE , BOOL ,
nat_gateway
Indicates if there is a failure in allocating NAT IPs to any VM in the NAT gateway. Sampled every 60 seconds. After sampling, data isn't visible for up to 120 seconds.
nat/new_connections_count
GA
New connections count
DELTA , INT64 , {connection}
nat_gateway
Count of new connections created over the NAT gateway. Sampled every 60 seconds. After sampling, data isn't visible for up to 225 seconds.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
nat/open_connections
GA
Open connections
GAUGE , INT64 , {connection}
nat_gateway
Number of connections open on the NAT gateway. Sampled every 60 seconds. After sampling, data isn't visible for up to 225 seconds.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
nat/port_usage
GA
Port usage
GAUGE , INT64 , {port}
nat_gateway
Maximum number of connections from a VM to a single destination endpoint (IP:port). Sampled every 60 seconds. After sampling, data isn't visible for up to 225 seconds.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
nat/received_bytes_count
GA
Received bytes count
DELTA , INT64 , By
nat_gateway
Count of bytes received (destination -> source) through the NAT gateway. Sampled every 60 seconds. After sampling, data isn't visible for up to 225 seconds.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
nat/received_packets_count
GA
Received packets count
DELTA , INT64 , {packet}
nat_gateway
Count of packets received (destination -> source) through the NAT gateway. Sampled every 60 seconds. After sampling, data isn't visible for up to 225 seconds.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
nat/sent_bytes_count
GA
Sent bytes count
DELTA , INT64 , By
nat_gateway
Count of bytes sent (source -> destination) over the NAT gateway. Sampled every 60 seconds. After sampling, data isn't visible for up to 225 seconds.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
nat/sent_packets_count
GA
Sent packets count
DELTA , INT64 , {packet}
nat_gateway
Count of packets sent (source -> destination) over the NAT gateway. Sampled every 60 seconds. After sampling, data isn't visible for up to 225 seconds.
ip_protocol :
The protocol of the connection. Can be TCP, UDP or ICMP.
Gateway filtering dimensions
label_key
Type
Description
project_id
STRING
The project ID of the gateway.
region
STRING
The region of the gateway.
router_id
STRING
The Cloud Router ID to which the NAT gateway belongs.
gateway_name
STRING
The name of the NAT gateway.
ip_protocol
STRING
The protocol of the connection. Can be TCP ,
UDP or ICMP . Valid for all metrics except
allocated_ports .
nat_ip
STRING
The NAT IP address allocated to the NAT gateway. Valid for metrics
allocated_ports .
reason
STRING
The reason for the packet drop. Possible values are:
OUT_OF_RESOURCES , if Cloud NAT runs out
of NAT IP addresses or ports.
ENDPOINT_INDEPENDENCE_CONFLICT , when an
endpoint
independent conflict arises.
Valid for metrics dropped_sent_packets_count .
Query metrics using the Monitoring API
You can construct arbitrary queries over the Cloud NAT metrics by using the
Monitoring API's v3 projects.timeSeries.list request .
API example
Getting allocated ports of a VM, with 1m aggregates,
timeSeries.list
parameters:
name: projects/ PROJECT_ID
Filter: resource.type = "gce_instance" AND
metric.name="compute.googleapis.com/nat/allocated_ports" AND
metric.labels.nat_gateway_name="nat-1-237227-1569344091-5"
interval.start_time: 2019-09-24T16:58:53Z
interval.end_time: 2019-09-24T16:58:53Z
aggregation.alignmentPeriod: 60s
aggregation.crossSeriesReducer: REDUCE_SUM
aggregation.perSeriesAligner: ALIGN_SUM
"timeSeries": [
{
"resource": {
"labels": {
"instance_id": "1406292833167995938",
"project_id": " PROJECT_ID ",
"zone": "us-west1-c"
},
"type": "gce_instance"
},
"metric": {
"labels": {
"nat_ip": "70.32.157.11",
"nat_gateway_name": "nat-1-237227-1569344091-5",
"nat_project_number": " PROJECT_NUMBER ",
"router_id": "1380055590921303155"
},
"type": "compute.googleapis.com/nat/allocated_ports"
},
"metricKind": "GAUGE",
"points": [
{
"interval": {
"endTime": "2019-09-24T16:58:53.699Z",
"startTime": "2019-09-24T16:58:53.699Z"
},
"value": {
"int64Value": "64"
}
}
],
"valueType": "INT64"
}
]
Pricing for Cloud NAT monitoring
There is no cost for Cloud NAT monitoring.
What's next
Learn more about logging .
Learn more about monitoring .
Troubleshoot Cloud NAT .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
