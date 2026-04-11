---
title: "Debugging connection issues \_|\_ Cloud SQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/debugging-connectivity
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/mysql
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/debugging-connectivity
  title: "Debugging connection issues \_|\_ Cloud SQL \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
Guides
Send feedback
Debugging connection issues
Stay organized with collections
Save and categorize content based on your preferences.
Introduction
Generally, connection issues fall into one of the following three areas:
Connecting - are you able to reach your instance over the network?
Authorizing - are you authorized to connect to the instance?
Authenticating - does the database accept your database credentials?
Each of those can be further broken down into different paths for
investigation. The following section includes examples of questions you can ask
yourself to help further narrow down the issue:
Connection issues checklist
Connecting
Private IP
Have you enabled the Service Networking API for your project?
Are you using a Shared VPC ?
Does your user or service account have the required IAM permissions to manage a private services access connection?
Is private services access connection configured for your project?
Did you allocate an IP address range for the private connection?
Did your allocated IP address ranges contain at least a /24 space for every region where you are planning to create mysql instances?
If you are specifying an allocated IP address range for your mysql instances, does the range contain at least a /24 space for every region where you are planning to create mysql instances in this range?
Is the private connection created?
If the private connection was changed, were the vpc-peerings updated?
Do the VPC logs indicate any errors?
Is your source machine's IP a non-RFC 1918 address ?
Public IP
Is your source IP listed as an authorized network ?
Are SSL/TLS certificates required ?
Does your user or service account have the required IAM permissions to connect to a Cloud SQL instance?
Authorizing
Cloud SQL Auth Proxy
Is the Cloud SQL Auth Proxy up to date ?
Is the Cloud SQL Auth Proxy running ?
Is the instance connection name formed correctly in the Cloud SQL Auth Proxy connection command ?
Have you checked the Cloud SQL Auth Proxy output? Pipe the output to a file, or watch the Cloud Shell terminal where you started the Cloud SQL Auth Proxy.
Does your user or service account have the required IAM permissions to connect to a Cloud SQL instance?
Have you enabled the Cloud SQL Admin API for your project?
If you have an outbound firewall policy, make sure it allows connections to port 3307 on the target Cloud SQL instance.
If you are connecting using UNIX domain sockets, confirm that the sockets were created by listing the directory specified with the -dir when you started the Cloud SQL Auth Proxy.
Cloud SQL connectors and language-specific code
Is the connection string formed correctly?
Have you compared your code with the sample code for your programming language?
Are you using a runtime or framework for which we don't have sample code ?
If so, have you looked to the community for relevant reference material?
Self-managed SSL/TLS certificates
Is the client certificate installed on the source machine?
Is the client certificate spelled correctly in the connection arguments ?
Is the client certificate still valid ?
Are you getting errors when connecting using SSL ?
Is the server certificate still valid ?
Authorized networks
Is the source IP address included?
Are you using a non-RFC 1918 IP address ?
Are you using an unsupported IP address ?
Connection failures
Are you authorized to connect ?
Are you seeing connection limit errors?
Is your application closing connections properly?
Authenticating
Native database authentication (username/password)
Are you seeing access denied errors?
Are the username and password correct?
IAM database authentication
Have you enabled the cloudsql.iam_authentication flag on your instance?
Did you add a policy binding for the account?
Are you using the Cloud SQL Auth Proxy with the -enable_iam_login or an Oauth 2.0 token as the database password?
If using a service account, are you using the shortened email name ?
Learn more about IAM database authentication in PostgreSQL .
Error messages
For specific API error messages, see the Error messages reference page.
Additional connectivity troubleshooting
For other issues, see the
Connectivity section in the troubleshooting page.
Common connection issues
Verify that your application is closing connections properly
If you see errors containing " Aborted connection nnnn to db: ", it usually
indicates that your application is not stopping connections properly. Network issues can also cause this error. The error does not mean that
there are problems with your Cloud SQL instance. You are also encouraged to run tcpdump to inspect the packets to track down the source of the problem.
For examples of best practices for connection management, see
Managing database connections .
Verify that your certificates have not expired
If your instance is configured to use SSL, go to the
Cloud SQL Instances page
in the Google Cloud console and open the instance. Open its Connections page, select the
Security tab and make sure that your server certificate is valid. If it has expired, you must
add a new certificate and rotate to it.
Verify that you are authorized to connect
If your connections are failing, check that you are authorized to connect:
If you are having trouble connecting using an IP address, for example,
you are connecting from your on-premises environment with the mysql
client, then make sure that the IP address you are connecting from
is authorized to connect
to the Cloud SQL instance.
Connections to a Cloud SQL instance using a private IP address are
automatically authorized for RFC 1918
address ranges . This way, all private clients can access the database
without going through the Cloud SQL Auth Proxy. Non-RFC 1918 address ranges must be configured
as authorized networks .
Cloud SQL doesn't learn Non-RFC 1918 subnet routes from your
VPC by default. You need to update the network peering to Cloud SQL to export any
Non-RFC 1918 routes. For example:
gcloud compute networks peerings update cloudsql-mysql-googleapis-com \
--network = NETWORK \
--export-subnet-routes-with-public-ip \
--project = PROJECT_ID
Here's your
current IP address .
Try the
gcloud sql connect
command to connect to your instance. This command authorizes your IP address for a
short time. You can run this command in an environment with
gcloud CLI and mysql client installed. You can also run this command
in Cloud Shell , which is available in the
Google Cloud console and has gcloud CLI and the mysql client pre-installed.
Cloud Shell provides a Compute Engine instance that you can use
to connect to Cloud SQL.
Temporarily allow all IP addresses to connect to an instance. For IPv4
authorize 0.0.0.0/0 (for IPv6, authorize ::/0 .
Note: Authorizing all IP addresses opens your
database to any client that tries to connect. If you have sensitive or
proprietary data in your database, don't use this method to investigate
connectivity issues.
Verify how you connect
If you get an error message like:
ERROR 1045 (28000): Access denied for user 'root'@'1.2.3.4' (using password: NO)
when you connect, verify that you are providing a password.
If you get an error message like:
ERROR 1045 (28000): Access denied for user 'root'@'1.2.3.4' (using password: YES)
when you connect, verify that you are using the correct password and that you
are connecting over SSL if the instance requires it.
Determine how connections are being initiated
You can see information about your current connections by connecting to your
database and running the following command:
SHOW PROCESSLIST ;
Connections that show an IP address, such as 1.2.3.4 , are connecting using IP.
Connections with cloudsqlproxy~1.2.3.4 are using the Cloud SQL Auth Proxy, or else they
originated from App Engine. Connections from localhost may be
used by some internal Cloud SQL processes.
Connection limits
There are no QPS limits for Cloud SQL instances. However, there are connection,
size, and App Engine specific limits in place. See
Quotas and Limits .
Database connections consume resources on the server and the connecting
application. Always use good connection management practices to minimize
your application's footprint and reduce the likelihood of exceeding
Cloud SQL connection limits .
For more information, see
Managing database connections .
Show connections and threads
If you get the "too many connections" error message, or want to find out what is
happening on an instance, you can show the number of connections and threads
with SHOW PROCESSLIST .
From a MySQL client , run:
mysql> SHOW PROCESSLIST ;
You get output similar to the following:
+----+-----------+--------------+-----------+---------+------+-------+----------------------+
| Id | User | Host | db | Command | Time | State | Info |
+----+-----------+--------------+-----------+---------+------+-------+----------------------+
| 3 | user-name | client-IP | NULL | Query | 0 | NULL | SHOW processlist |
| 5 | user-name | client-IP | guestbook | Sleep | 1 | | SELECT * from titles |
| 17 | user-name | client-IP | employees | Query | 0 | NULL | SHOW processlist |
+----+-----------+--------------+-----------+---------+------+-------+----------------------+
3 rows in set (0.09 sec)
For information about how to interpret the columns returned from
PROCESSLIST , see the MySQL reference .
To get a thread count, you can use:
mysql> SHOW STATUS WHERE Variable_name = 'Threads_connected' ;
You get output similar to the following:
+-------------------+-------+
| Variable_name | Value |
+-------------------+-------+
| Threads_connected | 7 |
+-------------------+-------+
1 row in set (0.08 sec)
Connections timeout (from Compute Engine)
Connections with a Compute Engine instance timeout after 10 minutes of
inactivity, which can affect long-lived unused connections between your
Compute Engine instance and your Cloud SQL instance. For more
information, see Networking and Firewalls
in the Compute Engine documentation.
To keep long-lived unused connections alive, you can set the
TCP keepalive .
The following commands set the TCP keepalive value to one minute and make the
configuration permanent across instance reboots.
Display the current tcp_keepalive_time value.
cat /proc/sys/net/ipv4/tcp_keepalive_time
Set tcp_keepalive_time to 60 seconds and make it permanent across reboots.
echo 'net.ipv4.tcp_keepalive_time = 60' | sudo tee -a /etc/sysctl.conf
Apply the change.
sudo /sbin/sysctl --load = /etc/sysctl.conf
Display the tcp_keepalive_time value to verify the change was applied.
cat /proc/sys/net/ipv4/tcp_keepalive_time
Connect with IPv6
If you get either of the error messages
Can't connect to MySQL server on '2001:1234::4321' (10051)
Can't connect to MySQL server on '2001:1234::4321' (101)
when you connect it is likely that you are attempting to connect to the IPv6
address of your instance but do not have IPv6 available on your workstation. You
can verify whether IPv6 is functional on your workstation by going to
ipv6.google.com . If it does not load then
you do not have IPv6 available. Connect to the IPv4
address or your Cloud SQL instance instead. You may need to
add an IPv4 address to your instance first.
Tools for debugging connectivity
Note: Tools that are based on the Internet Control Message Protocol (ICMP), such
as ping and traceroute , do not work with Cloud SQL.
Do not use these tools for troubleshooting because they can return false
negatives.
tcpdump
The tcpdump is a tool to capture packets. It's highly encouraged to run tcpdump to capture and inspect the packets between your host and the Cloud SQL instances when you are debugging the connectivity problems.
Locate your local IP address
If you don't know the local address of your host, then run the
ip -br address show command. On Linux, this shows the network interface,
the status of the interface, the local IP, and MAC addresses. For example:
eth0 UP 10.128.0.7/32 fe80::4001:aff:fe80:7/64 .
Alternatively, you can run ipconfig or ifconfig to see
the status of your network interfaces.
Test with Connectivity Test
Connectivity Test is a diagnostics tool that lets you check connectivity between endpoints in your network. It analyzes your configuration and in some cases performs run-time verification. It supports Cloud SQL now. Follow these instructions to run tests with your Cloud SQL instances.
Test your connection
You can use the mysql client to test your ability to connect
from your local environment. For more information, see
Connecting the mysql client using IP addresses and
Connecting the mysql client using the Cloud SQL Auth Proxy .
Determine the IP address for your application
To determine the IP address of a computer running your application so you
can authorize access to your Cloud SQL instance from that address,
use one of the following options:
If the computer is not behind a proxy or firewall, log in to the computer
and use the
What is my IP?
site to determine its IP address.
If the computer is behind a proxy or firewall, log in to the computer and
use a tool or service like
whatismyipaddress.com
to determine its true IP address.
Open local ports
To verify that your host is listening on the ports you think it is, run the
ss -tunlp4 command. This tells you what ports are open and
listening.
For example, if you have a MySQL database running, then port 3306 should be up and
listening. For SSH, you should see port 22.
For example, if you have a PostgreSQL database running, then port 5432 should be
up and listening. For SSH, you should see port 22.
All local port activity
Use the netstat command to see all the local port activity. For
example, netstat -lt shows all the currently active ports.
Connect to your Cloud SQL instance using telnet
To verify that you can connect to your Cloud SQL instance using TCP , run
the telnet command. Telnet attempts to connect to the IP address and
port you give it.
If your Cloud SQL instance is running a MySQL database, for example,
then you should be able to telnet to it on port 3306:
telnet 35.193.198.159 3306 .
If your Cloud SQL instance is running a PostgreSQL database, for example,
then you should be able to telnet to it on port 5432:
telnet 35.193.198.159 5432 .
On success, you see the following:
Trying 35.193.198.159...
Connected to 35.193.198.159.
.
On failure, you see telnet hangs until you force-close the attempt:
Trying 35.193.198.159...
^C.
.
Client authentication
Client authentication is controlled by a configuration file, which is named
pg_hba.conf (HBA stands for host-based authentication).
Make sure the replication connections section of the pg_hba.conf
file on the source database is updated to accept connections from the
Cloud SQL VPC's IP address range.
Cloud Logging
Cloud SQL and Cloud SQL use Cloud Logging. See the
Cloud Logging documentation
for complete information and review the
Cloud SQL sample queries .
View logs
You can view logs for Cloud SQL instances and other Google Cloud
projects such as Cloud VPN or Compute Engine instances. To view logs for
your Cloud SQL instance log entries:
Console
In the Google Cloud console, go to the Cloud Logging page.
Go to Cloud Logging
Select an existing Cloud SQL project at the top of the page.
In the Query builder, add the following:
Resource: Select Cloud SQL Database . In the dialog, select a
Cloud SQL instance.
Log names: Scroll to the Cloud SQL section and select
appropriate log files for your instance. For example:
cloudsql.googlapis.com/mysql-general.log
cloudsql.googleapis.com/mysql.err
cloudsql.googleapis.com/postgres.log
Severity: Select a log level.
Time range: Select a preset or create a custom range.
gcloud
Use the gcloud logging
command to view log entries. In the example below, replace PROJECT_ID .
The limit
flag is an optional parameter that indicates the maximum number of entries to
return.
gcloud logging read "projects/ PROJECT_ID /logs/cloudsql.googleapis.com/mysql-general.log" \
--limit = 10
gcloud logging read "projects/ PROJECT_ID /logs/cloudsql.googleapis.com/postgres.log" \
--limit = 10
Private IP addresses
Connections to a Cloud SQL instance using a private IP address are
automatically authorized for RFC 1918
address ranges . Non-RFC 1918 address ranges must be configured
in Cloud SQL as authorized
networks . You also need to update the network peering to Cloud SQL to
export any Non-RFC 1918 routes. For example:
gcloud compute networks peerings update cloudsql-mysql-googleapis-com
--network = NETWORK
--export-subnet-routes-with-public-ip
--project = PROJECT_ID
VPN troubleshooting
See the Cloud VPN troubleshooting page.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
