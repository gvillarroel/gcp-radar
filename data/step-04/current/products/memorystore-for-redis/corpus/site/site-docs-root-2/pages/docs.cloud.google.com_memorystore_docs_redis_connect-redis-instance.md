---
title: "Connect to a Redis instance \_|\_ Memorystore for Redis \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview
source_metadata:
  url: https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance
  title: "Connect to a Redis instance \_|\_ Memorystore for Redis \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Memorystore
Memorystore for Redis
Guides
Send feedback
Connect to a Redis instance
Stay organized with collections
Save and categorize content based on your preferences.
Note: If you are looking for the Memorystore for Redis Cluster documentation,
see Connect to a Memorystore for Redis Cluster instance .
This page describes how to connect to your Redis instance using Telnet and
redis-cli . In addition, this page provides instructions for how to connect
when using features such as read replicas, AUTH, and in-transit encryption.
Finally, this page provides instructions on connecting from a Google Kubernetes Engine
environment.
For a list of Google Cloud environments that Memorystore for Redis supports, see
Supported environments . Some
serverless environments that Memorystore supports require a
Serverless VPC Access connector. See Serverless VPC Access connector requirement
for more details.
Note: If your instance uses customer-managed encryption keys (CMEK)
and the Cloud Key Management Service API is unavailable because of an
outage, then when you reconnect to your instance, you might need to use a
different IP address.
Connect to a Redis instance from a Compute Engine VM using telnet
You can connect to the Memorystore for Redis instance from any Compute Engine
VM that uses the instance's authorized network with a supported RFC 1918 IP address .
If you don't have a Compute Engine VM that uses that same authorized
network as your instance, then create one and connect to the VM by using SSH. To
do this, follow the steps in Create a Linux VM instance in Compute Engine .
Use apt-get to install telnet :
sudo apt-get install telnet
From the terminal, telnet to the IP address of the instance. Replace
VARIABLES with appropriate values.
telnet INSTANCE_IP_ADDRESS 6379
If you can connect to the instance, then the command returns this result:
Trying INSTANCE_IP_ADDRESS …
Connected to INSTANCE_IP_ADDRESS
In the telnet session, enter some Redis commands:
Enter:
PING
Result:
PONG
Enter
SET HELLO WORLD
Result:
+OK
Enter:
GET HELLO
Result:
$5
WORLD
Connect to a Redis instance from a Compute Engine VM using redis-cli
You can connect to the Redis instance from any Compute Engine VM
that uses the Redis instance's authorized network with a supported RFC 1918 IP address .
If you don't already have a Compute Engine VM that uses the authorized
network for your Redis instance, create one and connect to it by following
Create a VM instance in a specific subnet .
Install redis-cli on the Compute Engine VM by running the following
command from the Compute Engine SSH terminal:
sudo apt-get install redis-tools
Run the following command in the Compute Engine terminal ,
replacing variables with appropriate values.
redis-cli -h redis-instance-ip-address
You are now connected to your Redis instance using redis-cli .
Once you are done testing your connection to the Redis instance, you should
consider deleting the Compute Engine VM
you used to connect to the Redis instance. Doing so helps you avoid incurring
charges to your Cloud Billing account.
Connect to a Redis instance that uses AUTH
This section describes how to connect to a Redis instance that has the AUTH
feature enabled.
If you don't already have a Compute Engine VM that uses the same authorized
network as your Redis instance, create one and connect to it by following
Quickstart Using a Linux VM .
Install redis-cli on the Compute Engine VM by running the following
command from the Compute Engine SSH terminal:
sudo apt-get install redis-tools
Get your instance's AUTH string
Run the following command to use redis-cli to authenticate and connect to
your instance, replacing variables with appropriate values:
redis-cli -h instance-ip-address -a auth-string
Or:
redis-cli -h instance-ip-address
AUTH auth-string
Run a Redis SET and GET command to verify that you have established an
authenticated connection to your instance.
Once you are done testing your connection to the Redis instance, you should
consider deleting the Compute Engine VM
you used to connect to the Redis instance. Doing so helps you avoid incurring
charges to your Cloud Billing account.
Connect to a Redis instance using the read endpoint
If your instance has read replicas
enabled, you can connect to the read endpoint using the following instructions:
If you don't already have a Compute Engine VM that uses that same
authorized network as your Redis instance, create one and connect to it by
following Quickstart using a Linux VM .
Install telnet using apt-get :
sudo apt-get install telnet
To find the IP address of your instance's read endpoint, view read replica information for your instance .
From the terminal, telnet to the read endpoint IP address of the Redis instance, replacing
variables with appropriate values.
telnet read-endpoint-ip 6379
If successful, the command will return this result:
Trying read-endpoint-ip …
Connected to read-endpoint-ip
In the telnet session, enter some Redis commands:
Enter:
PING
Result:
PONG
Connect to a Redis instance securely by using Stunnel and telnet
This section provides an example of how to connect to a Redis instance that has
in-transit encryption enabled using Stunnel .
If you don't already have a Redis instance that has in-transit encryption
enabled, create one by following Creating a Redis instance with in-transit encryption .
If you don't already have a Compute Engine VM that uses the same authorized
network as the Redis instance from the previous step, create one and
connect to it by following Quickstart using a Linux VM .
Install the necessary tools for this guide by running the following
commands:
sudo apt-get install stunnel4
sudo apt-get install telnet
Note: The remaining steps in this guide occur in the SSH terminal of the
Compute Engine VM you created and connected to, unless otherwise
specified.
Configure your Compute Engine VM for use with Stunnel:
Make a new file in which to put your Certificate Authority
(CA) by running the following command:
sudo vim /tmp/server_ca.pem
View your Redis instance's Certificate Authority(s) by running the
following command in the standard terminal you use to manage
Google Cloud resources (not the Compute Engine terminal):
gcloud redis instances describe instance-id --region= region
There may be up to three CAs.
Copy all of the visible Certificate Authorities including the
-----BEGIN CERTIFICATE----- line and the -----END CERTIFICATE-----
lines, and paste and save it the server_ca.pem file you previously
created.
Note: Make sure that the text of the Certificate Authority is
completely left justified. There should be no leading whitespace on any
line of the CA.
Make a new file in which to put Stunnel configuration information by
running the following command:
sudo vim /etc/stunnel/redis-client.conf
Paste the following text in the file, replacing redis-instance-ip
with the Redis instance's IP address:
output=/tmp/stunnel.log
CAfile=/tmp/server_ca.pem
client=yes
pid=/var/run/stunnel.pid
verifyChain=yes
sslVersion=TLSv1.2
[redis]
accept=127.0.0.1:6378
connect= redis-instance-ip :6378
Start stunnel by running the following command:
sudo stunnel /etc/stunnel/redis-client.conf
Verify that stunnel is running:
ps aux | grep stunnel
Restart Stunnel by running the following commands:
sudo systemctl restart stunnel4
Note: You can use the ps aux | grep stunnel command before
and after restarting stunnel to confirm that the restart was successful.
If the stunell process ID, shown by the ps aux | grep stunnel
command, is different then you know stunell has been restarted
successfully.
To connect to your Redis instance using Telnet, run the following command:
telnet localhost 6378
In the Telnet session, ping the Redis instance:
Enter:
PING
Result:
PONG
Connect from a local machine by using port forwarding
It can be helpful to connect to your Redis instance from your local machine
during development. To do so you must create a Compute Engine instance to use
for port forwarding to the Redis instance.
Create a Compute Engine instance by running the following command:
gcloud compute instances create COMPUTE_VM_NAME --machine-type=f1-micro --zone= ZONE
Where:
COMPUTE_VM_NAME is the name you designate for the Compute Engine VM.
ZONE is the zone where you want to provision the VM.
This command creates a Compute Engine VM with the f1-micro machine
type
for cost-effectiveness. You can choose other machine types.
Open a new terminal on your local machine.
To create an SSH tunnel that port forwards traffic through the
Compute Engine VM, run the following command:
gcloud compute ssh COMPUTE_VM_NAME --zone= ZONE -- -N -L 6379: REDIS_INSTANCE_IP_ADDRESS :6379
Where:
COMPUTE_VM_NAME is the name of the Compute Engine VM.
ZONE is the same zone where the Compute Engine VM is
located.
REDIS_INSTANCE_IP_ADDRESS is the IP address of your Redis
instance.
To test the connection, open a new terminal window and run the following
command:
redis-cli ping
If working properly, the result should return:
PONG
You are now connected to the Redis instance, and you can send commands to the
Redis instance using this open SSH tunnel. If you have not already installed
redis-cli , install it so you can run this command.
The SSH tunnel remains open as long as you keep the terminal window with the
SSH tunnel connection up and running.
Connect to a Redis instance from a Google Kubernetes Engine cluster
Note: To connect to a Redis instance that uses the private services access connect mode you must have
VPC-native/IP aliasing enabled on your GKE cluster. To use
GKE to connect to a Redis instance that uses the direct peering connect mode ,
use the workaround in step 5.
To verify if your cluster uses IP aliasing, use gcloud container clusters describe .
You can connect to your Redis instance from Google Kubernetes Engine
clusters that use the same authorized network as your Redis instance.
Connect from a pod running a bash shell
Go to the GKE page in the Google Cloud console. GKE
Click the GKE cluster you'd like to connect from. If you don't already have a cluster, create one with IP aliases enabled. For instructions on how to create a cluster with IP aliases enabled, see Creating a VPC-native cluster .
Click the Connect button to the right of your cluster's name, then click the Run in Cloud Shell button in the window that appears.
Configure kubectl command line access by running the following command:
gcloud container clusters get-credentials CLUSTER_NAME --zone= CLUSTER_ZONE --project= PROJECT_ID
CLUSTER_NAME is the name of your cluster.
CLUSTER_ZONE is the zone your cluster is in. Must also be the zone your Redis instance is in.
PROJECT_ID is the project where your cluster and your Redis instances exist.
You should get the success message: kubeconfig generated for CLUSTER_NAME
If your cluster is version 1.8 or higher and has IP aliases enabled, skip this step. If your cluster is version 1.7 or lower, or your version 1.8 or higher cluster doesn't have IP aliases enabled, follow these workaround steps before trying to connect to your instance:
Workaround
Run the following commands, replacing RESERVED_IP_RANGE with the reserved IP range of your instance:
git clone https://github.com/bowei/k8s-custom-iptables.git
cd k8s-custom-iptables/
TARGETS=" RESERVED_IP_RANGE " ./install.sh
If you don't know the reserved IP range of your instance, you can find out by entering this command: gcloud redis instances describe INSTANCE_ID --region= REGION
For more information about IP aliases, including how to create a cluster with this setting enabled, see Creating a VPC-native cluster .
Use the following command to connect to a bash shell:
kubectl run -i --tty busybox --image=busybox -- sh
Telnet to your Redis instance using the host address and port number:
telnet HOST-IP PORT
Enter a basic Redis command to verify the connection:
PING
+PONG
To close the telnet connection, press Control+C (or Command+C on Mac). To exit the bash shell in your pod, enter return. If you are done and no longer need to connect to Redis, run the following command from the
/k8s-custom-iptables/ directory:
./uninstall.sh
Connect to a Redis instance from a Google Kubernetes Engine pod
Before you begin, you need a GKE cluster. If you don't
already have a cluster, create one with IP aliases enabled. For instructions on how to create a cluster
with IP aliases enabled, see Creating a VPC-native cluster .
From the top-right corner of the console, click Activate Cloud Shell button.
Configure kubectl command line access by running the following command:
gcloud container clusters get-credentials CLUSTER_NAME --zone CLUSTER_ZONE --project PROJECT_ID
CLUSTER_NAME is the name of your cluster.
CLUSTER_ZONE is the zone your cluster is in. Must also be the zone your Redis instance is in.
PROJECT_ID is the project where your cluster and your Redis instances exist.
You should get the success message: kubeconfig generated for CLUSTER_NAME
If your cluster is version 1.8 or higher and has IP aliases enabled, skip this step. If your cluster is version 1.7 or lower, or your version 1.8 or higher cluster doesn't have IP aliases enabled, follow these workaround steps before trying to connect to your instance:
Workaround
Run the following commands, replacing RESERVED_IP_RANGE with the reserved IP range of your instance:
git clone https://github.com/bowei/k8s-custom-iptables.git
cd k8s-custom-iptables/
TARGETS=" RESERVED_IP_RANGE " ./install.sh
If you don't know the reserved IP range of your instance, you can find out by entering this command: gcloud redis instances describe INSTANCE_ID --region [REGION]
For more information about IP aliases, including how to create a cluster with this setting enabled, see Creating a VPC-native cluster .
Use the following command to start a Redis pod running the redis-cli :
kubectl run -i --tty redisbox --image=redis:7.2 -- sh
Run a redis-cli command, replacing HOST-IP with the host IP address of your Redis instance:
redis-cli -h HOST-IP info
Optionally, run a Redis benchmark command, again replacing HOST-IP with the host IP address of your Redis instance:
redis-benchmark -c 100 -n 100000 -d 1024 -r 100000 -t PING,SET,GET,INCR,LPUSH,RPUSH,LPOP,RPOP,SADD,SPOP,MSET -h HOST-IP -q
To exit the Redis pod, enter return . If you are done and no longer need to connect to Redis, run the following command from the /k8s-custom-iptables/ directory:
./uninstall.sh
What's next
Connect to your Redis instance using a sample application that runs on:
Compute Engine
GKE
Cloud Run
App Engine standard environment
App Engine flexible environment
Cloud Run functions
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
