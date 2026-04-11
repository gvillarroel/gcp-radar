---
title: "Manage transfer agents \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage-transfer/docs/managing-on-prem-agents
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/storage-transfer/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/storage-transfer/docs/managing-on-prem-agents
  title: "Manage transfer agents \_|\_ Storage Transfer Service \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Storage Transfer Service
Send feedback
Manage transfer agents
Stay organized with collections
Save and categorize content based on your preferences.
Storage Transfer Service agents are applications running inside an Open Container
Initiative (OCI) container, that coordinate with Storage Transfer Service for transfers
involving file systems or
S3-compatible storage .
By default, Storage Transfer Service uses Docker to build and run OCI containers.
Storage Transfer Service also supports Podman for container management; you must
install your agents using the podman run command
in order to use Podman.
If your transfer does not involve a file system or S3-compatible storage, you
do not need to set up agents.
Transfers from Amazon S3 do not require agents. S3-compatible
storage refers to storage systems that use the S3 API but are not hosted by
Amazon directly.
This document describes how to administer transfer agents on
your servers.
Overview
Agent processes are dynamic. While you are running a transfer, you can add
agents to
increase performance .
Newly started agents join the assigned agent pool and perform work from
existing transfers. You can use this to adjust how many agents are running,
or to adapt transfer performance to changing transfer demand.
Agent processes are a fault-tolerant collective. If one agent stops running,
the remaining agents continue to do work. If all of your agents stop, when
you add new agents the transfer resumes where the agents stopped. This
enables you to avoid monitoring agents, retrying transfers, or implementing
recovery logic. You can patch, move, and dynamically scale your agent pools
without transfer downtime by
coordinating agents with Google Kubernetes Engine .
For example, you submit two transfers while two agents are running. If one
of the agents stops due to a machine reboot or operating system patch, the
remaining agent continues working. The two transfers are still running, but
slower since a single agent is moving data. If the remaining agent also
stops, then all transfers stop making progress, since there are no agents
running. When you restart the agent processes, the transfers resume where
they left off.
Agent processes belong to a pool. They collectively move your data in
parallel. Because of this, all agents within a pool must have the same
access to all data sources that you want to transfer.
For example, if you are transferring data from a particular file system, you
must mount the file system to every machine that is hosting agents in your
agent pool. If some agents in your pool can reach a data source and others
can't, transfers from that data source won't succeed.
Before you begin
Before configuring your transfers, make sure you have configured access:
for users and service accounts .
If you'll be using gcloud commands,
install the gcloud CLI .
Install and run transfer agents
Important: Users able to create transfer jobs can retrieve data from, and
download data to, any file system directory that is accessible by the agent.
If agents are run as root and are given access to the entire
file system, a malicious actor may be able to take over the host. It is
strongly recommended that you restrict agent access to only necessary
directories.
We recommend installing a minimum of three agents per agent pool, ideally on
separate machines. For more information about determining how many agents to
run, see
Maximizing transfer agent performance .
Don't include sensitive information such as personally identifiable information
(PII) or security data in your agent ID prefix. Resource names may be
propagated to the names of other Google Cloud resources and may be exposed
to Google-internal systems outside of your project.
To install and run transfer agents:
Google Cloud console
In the Google Cloud console, go to the Agent pools page.
Go to Agent pools
Select the agent pool to which to add the new agent.
Click Install agent .
Follow the instructions to install and run the agent.
For more information about the agent's command-line options, see
Agent command-line options .
gcloud CLI
To install one or more agents using the gcloud CLI, run
gcloud transfer agents install :
gcloud transfer agents install --pool = POOL_NAME --count = NUM_AGENTS \
--mount-directories = MOUNT_DIRECTORIES
The tool walks you through any required steps to install the agent(s). This
command installs NUM_AGENTS agent(s) on your machine, mapped to
the pool name specified as POOL_NAME , and authenticates the
agent using your gcloud credentials. The pool name must exist, or an
error is returned.
The --mount-directories flag is optional but is strongly recommended. Its
value is a comma-separated list of directories on the file system to which
to grant the agent access.
Omitting this flag mounts the entire file system to the agent container. See
the
gcloud reference
for more details.
S3-compatible sources
When installing agents to use with an S3-compatible source,
you must provide AWS credentials either as environment variables as the
values of AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY , or stored as
default credentials in your system's configuration files.
export AWS_ACCESS_KEY_ID = ID
export AWS_SECRET_ACCESS_KEY = SECRET
gcloud transfer agents install --pool = POOL_NAME \
--creds-file = /relative/path/to/service-account-key.json
Use a service account key
Note:
Service account keys are a security risk if not managed correctly. You should
choose a more secure alternative to service account keys
whenever possible. If you must authenticate with a service account key, you are responsible for the
security of the private key and for other operations described by
Best practices for managing service account keys .
If you are prevented from creating a service account key, service account key creation might
be disabled for your organization. For more information, see
Managing secure-by-default organization resources .
If you acquired the service account key from an external source, you must validate it before use.
For more information, see
Security requirements for externally sourced credentials .
To run agents using a
service account key , use
the --creds-file option:
gcloud transfer agents install --pool = POOL_NAME --count = NUM_AGENTS \
--creds-file = /relative/path/to/service-account-key.json
More info
For a full list of optional flags, run
gcloud transfer agents install --help or read the
gcloud transfer reference .
Docker
Before using Docker to install agents, follow the instructions to
install Docker .
The docker run command installs one agent. To increase the number of agents
in your pool, re-run this command as many times as required.
When installing agents, you can choose to authenticate using your gcloud
default credentials, or with a service account.
Default credentials
To allow the Docker container to authenticate with your gcloud default
credentials, create a Docker volume containing a file with your application
default credentials by running the following command:
sudo docker run -ti --name gcloud-config google/cloud-sdk gcloud auth application-default login
Then use the following command to install an agent, using the
--volumes-from flag to mount the gcloud-config credentials volume:
sudo docker run --ulimit memlock=64000000 -d --rm \
--volumes-from gcloud-config \
-v HOST_DIRECTORY : CONTAINER_DIRECTORY \
gcr.io/cloud-ingest/tsop-agent:latest \
--project-id= PROJECT_ID \
--hostname=$(hostname) \
--agent-pool= POOL_NAME
Service account auth
To install and run transfer agents docker run using service account
credentials, specify the path to your JSON-formatted service account key
using the --creds-file flag.
The path must be prefixed with the string, /transfer_root .
See
Create and manage service account keys
for more information about service account keys.
Note:
Service account keys are a security risk if not managed correctly. You should
choose a more secure alternative to service account keys
whenever possible. If you must authenticate with a service account key, you are responsible for the
security of the private key and for other operations described by
Best practices for managing service account keys .
If you are prevented from creating a service account key, service account key creation might
be disabled for your organization. For more information, see
Managing secure-by-default organization resources .
If you acquired the service account key from an external source, you must validate it before use.
For more information, see
Security requirements for externally sourced credentials .
sudo docker run --ulimit memlock=64000000 -d --rm \
-v HOST_DIRECTORY : CONTAINER_DIRECTORY \
-v PATH/TO/KEY.JSON :/etc/gcloud/key.json:ro \
gcr.io/cloud-ingest/tsop-agent:latest \
--project-id= PROJECT_ID \
--creds-file=/etc/gcloud/key.json \
--hostname=$(hostname) \
--agent-pool= POOL_NAME
Options and flags
Replace the variables in the examples above with the following
information:
HOST_DIRECTORY is the directory on the host machine
that you intend to copy from. You can use more than one -v flag
to specify additional directories to copy from.
CONTAINER_DIRECTORY is the directory mapped within
the agent container. It must be the same as
HOST_DIRECTORY .
PROJECT_ID is the
project ID
that is hosting the transfer.
POOL_NAME is the name of the agent pool in which to
install this agent. If you omit this flag, the agent is installed into your
project's transfer_service_default pool.
The docker run command supports additional flags.
--enable-mount-directory mounts the entire file system under the
/transfer_root directory on the container. If --enable-mount-directory
is specified, directory restrictions using the -v flag are not applied.
Caution: If agents are run as root and are given access to the entire file
system, a malicious actor may be able to take over the host. It is strongly
recommended that you restrict agent access to only necessary directories.
--creds-file=/etc/gcloud/key.json specifies the path to
the JSON-formatted service account credential file on the container. This
file is mounted by the
-v <var>HOST_PATH/TO/KEY.JSON</var>:/etc/gcloud/key.json:ro flag in the
command.
--enable-s3 specifies that this agent is for transfers from
S3-compatible storage . Agents
installed with this option cannot be used for transfers from POSIX file
systems.
If your transfer is from AWS S3 or S3-compatible storage, pass your
access key ID and secret key using environment variables:
sudo docker run --ulimit memlock=64000000 -d --rm \
-v HOST_DIRECTORY : CONTAINER_DIRECTORY \
-v PATH/TO/KEY.JSON :/etc/gcloud/key.json:ro \
-e AWS_ACCESS_KEY_ID= AWS_ACCESS_KEY_ID \
-e AWS_SECRET_ACCESS_KEY= AWS_SECRET_ACCESS_KEY \
gcr.io/cloud-ingest/tsop-agent:latest \
--project-id= PROJECT_ID \
--creds-file=/etc/gcloud/key.json \
--hostname=$(hostname) \
--agent-pool= POOL_NAME
--gcs-api-endpoint=storage. LOCATION .rep.googleapis.com
specifies a Cloud Storage regional endpoint. When a Cloud Storage
regional endpoint is specified, all data transfer traffic through the
agent remains within that Google Cloud region. See
Regional endpoints for details.
--env HTTPS_PROXY= PROXY specifies a forward proxy
on your network. The value of PROXY is the HTTP URL
and port of the proxy server. Ensure that you specify the HTTP URL, and not
an HTTPS URL, to avoid double-wrapping requests in TLS encryption.
Double-wrapped requests prevent the proxy server from sending valid
outbound requests.
--agent-id-prefix= ID_PREFIX
specifies an optional prefix that is prepended to the agent ID to help
identify the agent or its machine in the Google Cloud console. When a prefix is
used, the agent ID is formatted as prefix + hostname + Docker container
ID .
--log-dir= LOGS_DIRECTORY modifies the directory
to which the agent writes logs. The default directory is /tmp/ .
If you haven't specified --enable_mount_directory , you must
prefix this path with /transfer_root . For example,
/transfer_root/ logs .
--max-physical-mem= MAX_MEMORY : agents default to
using 8GiB maximum of system memory. If the default
doesn't fit your environment, you can specify a relevant maximum memory
usage in the following formats:
max-physical-mem value
Maximum memory setting
6g
6 gigabytes
6gb
6 gigabytes
6GiB
6 gibibytes
--network= DOCKER_NETWORK : Specify the
docker network for this container. Specifying --network=host
can improve performance by reducing network overhead, but allows the
container full access to the host's network.
Podman
Before using Podman to install agents, install Podman :
sudo apt-get update
sudo apt-get -y install podman
When installing agents, you can choose to authenticate using your gcloud
default credentials, or with a service account.
Default credentials
To allow the agent container to authenticate with your Google Cloud CLI
default credentials, create a volume containing a file with your
application default credentials by running the following command:
gcloud auth print-access-token | podman login -u oauth2accesstoken --password-stdin gcr.io
sudo podman pull gcr.io/google.com/cloudsdktool/google-cloud-cli:stable
sudo podman run -ti --replace --name gcloud-config gcr.io/google.com/cloudsdktool/google-cloud-cli:stable gcloud auth application-default login
Then use the following command to install an agent, using the
--volumes-from flag to mount the gcloud-config credentials volume.
The command installs one agent. To increase the number of agents in your
pool, re-run this command as many times as required.
sudo podman run --ulimit memlock=64000000 -d --rm \
--volumes-from gcloud-config \
-v HOST_DIRECTORY : CONTAINER_DIRECTORY \
gcr.io/cloud-ingest/tsop-agent:latest \
--project-id= PROJECT_ID \
--hostname=$(hostname) \
--agent-pool= POOL_NAME
Service account auth
To install and run transfer agents using service account
credentials, you must make your JSON-formatted service account key
available on the container. To do so:
Mount the host location of the key to any path on the container. For
example: -v $HOME/.config/gcloud/credentials.json:/key.json:ro . This
specifies that the key is located on the host machine at
$HOME/.config/gcloud/credentials.json and should be mounted as
/key.json on the container. The ro indicates that the file is made
available as read-only to the container.
Specify the container path of the key as the value of --creds-file .
In the example from the previous step, specify
--creds-file=/key.json .
See
Create and manage service account keys
for more information about service account keys.
Note:
Service account keys are a security risk if not managed correctly. You should
choose a more secure alternative to service account keys
whenever possible. If you must authenticate with a service account key, you are responsible for the
security of the private key and for other operations described by
Best practices for managing service account keys .
If you are prevented from creating a service account key, service account key creation might
be disabled for your organization. For more information, see
Managing secure-by-default organization resources .
If you acquired the service account key from an external source, you must validate it before use.
For more information, see
Security requirements for externally sourced credentials .
sudo podman run --ulimit memlock=64000000 -d --rm \
-v HOST_DIRECTORY : CONTAINER_DIRECTORY \
-v HOST_PATH/TO/KEY.JSON :/etc/gcloud/key.json:ro \
gcr.io/cloud-ingest/tsop-agent:latest \
--project-id= PROJECT_ID \
--creds-file=/etc/gcloud/key.json \
--hostname=$(hostname) \
--agent-pool= POOL_NAME
Options and flags
Replace the variables in the examples above with the following
information:
HOST_DIRECTORY is the directory on the host machine
that you intend to copy from. You can use more than one -v flag
to specify additional directories to copy from.
CONTAINER_DIRECTORY is the directory mapped within
the agent container. It must be the same as
HOST_DIRECTORY .
PROJECT_ID is the
project ID
that is hosting the transfer.
POOL_NAME is the name of the agent pool in which to
install this agent. If you omit this flag, the agent is installed into your
project's transfer_service_default pool.
The podman run command supports additional flags.
--enable-mount-directory mounts the entire file system under the
/transfer_root directory on the container. If --enable-mount-directory
is specified, directory restrictions using the -v flag are not applied.
Caution: If agents are run as root and are given access to the entire file
system, a malicious actor may be able to take over the host. It is strongly
recommended that you restrict agent access to only necessary directories.
--creds-file=/etc/gcloud/key.json specifies the path to
the JSON-formatted service account credential file on the container. This
file is mounted by the
-v <var>HOST_PATH/TO/KEY.JSON</var>:/etc/gcloud/key.json:ro flag in the
command.
--enable-s3 specifies that this agent is for transfers from
S3-compatible storage . Agents
installed with this option cannot be used for transfers from POSIX file
systems.
If your transfer is from AWS S3 or S3-compatible storage, pass your
access key ID and secret key using environment variables:
-e AWS_ACCESS_KEY_ID= AWS_ACCESS_KEY_ID \
-e AWS_SECRET_ACCESS_KEY= AWS_SECRET_ACCESS_KEY
```
--env HTTPS_PROXY= PROXY specifies a forward proxy
on your network. The value of PROXY is the HTTP URL
and port of the proxy server. Ensure that you specify the HTTP URL, and not
an HTTPS URL, to avoid double-wrapping requests in TLS encryption.
Double-wrapped requests prevent the proxy server from sending valid
outbound requests.
--agent-id-prefix= ID_PREFIX
specifies an optional prefix that is prepended to the agent ID to help
identify the agent or its machine in the Google Cloud console. When a prefix is
used, the agent ID is formatted as prefix + hostname + OCI container
ID .
--log-dir= LOGS_DIRECTORY modifies the directory
to which the agent writes logs. The default directory is /tmp/ .
If you haven't specified --enable_mount_directory , you must
prefix this path with /transfer_root . For example,
/transfer_root/ logs .
--max-physical-mem= MAX_MEMORY : agents default to
using 8GiB maximum of system memory. If the default
doesn't fit your environment, you can specify a relevant maximum memory
usage in the following formats:
max-physical-mem value
Maximum memory setting
6g
6 gigabytes
6gb
6 gigabytes
6GiB
6 gibibytes
--network= DOCKER_NETWORK : Specify the
docker network for this container. Specifying --network=host
can improve performance by reducing network overhead, but allows the
container full access to the host's network.
Troubleshooting
If your configuration of SELinux requires that labels be placed on volume
content mounted into a container, add the :Z flag to the volume:
sudo podman run --ulimit memlock=64000000 -d --rm \
-v HOST_DIRECTORY : CONTAINER_DIRECTORY :Z \
-v HOST_PATH/TO/KEY.JSON :/etc/gcloud/key.json:ro \
gcr.io/cloud-ingest/tsop-agent:latest \
--project-id= PROJECT_ID \
--creds-file=/etc/gcloud/key.json:ro \
--hostname=$(hostname) \
--agent-pool= POOL_NAME
Without a label, the security system might prevent the processes running
inside the container from using the content. By default, Podman does not
change the labels set by the OS.
Confirm agent connections
To confirm that your agents are connected:
In the Google Cloud console, go to the Agent pools page.
Go to Agent pools
Your agent pools are displayed, with the number of connected agents.
Select an agent pool to view details on connected agents.
If a new agent doesn't show up in the agent pool page within 10 minutes of
its creation, see
Agents are not connected .
Monitor agent activity
You can use Cloud Monitoring
to monitor agent activity.
Monitoring is available along project , agent_pool , and agent_id
dimensions.
Using this monitoring data, you can set up alerts to notify you of potential
issues with your transfer. To do so,
create an alert
on either of the following Google Cloud metrics:
Metric name
What it describes
Suggested uses
storagetransfer.googleapis.com/agent/transferred_bytes_count
Measures how quickly a specific agent is moving data across all jobs that
it services at a point in time.
Alert for dips in performance.
storagetransfer.googleapis.com/agent/connected
A boolean that is True for each agent that Google Cloud
received a recent heartbeat message from.
Alert for failing agents
Failing below a number of agents that you
consider necessary for reasonable performance
Signal an issue with agent machines
Stop an agent
To stop an agent, run docker stop on the agent's Docker container ID. To find
the ID and stop the agent:
In the Google Cloud console, go to the Agent pools page.
Go to Agent pools
Select the agent pool containing the agent to stop.
Select an agent from the list. Use the Filter field to search
for prefixes, agent status, agent age, and more.
Click Stop agent . The docker stop command with the specific container
ID is displayed.
Run the command on the machine on which the agent is running. A successful
docker stop command returns the container ID.
Once stopped, the agent is shown in the agent pools list as Disconnected .
Restart an agent
Stopped agents cannot be restarted. Instead,
install new agents into the agent pool.
Delete an agent
To delete specific agents, list which agents are running on your machine:
docker container list --all --filter ancestor = gcr.io/cloud-ingest/tsop-agent
Then pass the agent IDs to transfer agents delete :
gcloud transfer agents delete --ids = id1,id2,…
To delete all agents running on the machine, use either the --all flag
or the --uninstall flag. Both flags delete all agents on the machine;
the --uninstall flag additionally uninstalls the agent Docker image.
gcloud transfer agents delete --all
gcloud transfer agents delete --uninstall
File system transfer details
Incremental transfers
Storage Transfer Service begins all transfers by computing the data present at the source
and destination to determine which source files are new, updated, or deleted
since the last transfer. We do this to reduce the amount of data we send from
your machines, to use bandwidth effectively, and to reduce transfer times.
To detect whether a file has changed, we check the last modified
time and size of the source file, and compare that to the last modified time and
size recorded when the file was last copied. When we detect a new or changed
file, we copy the entire file to its destination. For more information about
file freshness, see Data consistency details .
By default we detect, but do not act on, files deleted on the source. If you
choose the sync option Delete destination files that aren't also in the
source when creating or
editing , your transfer will delete the
corresponding object at the destination.
If you choose the sync option Delete destination files that aren't also in the
source , files that are accidentally deleted at the source are also deleted at
the destination. To prevent data loss from accidental deletions, we recommend
enabling object versioning in your
destination bucket if you choose to use this option. Then, if you delete a file
accidentally, you can restore your objects in Cloud Storage to an older version.
Data consistency details
A successful transfer operation will transfer all source files which existed and
were not modified during the operation's entire running time. Source files that
were created, updated, or deleted during a transfer may or may not have those
changes reflected in the destination data set.
Storage Transfer Service uses a file's last modification time and size to determine if it
changed. If a file is updated without changing its last modification time or
size, and you enable the delete-objects-from-source option, you may lose data
from that change.
When using the delete-objects-from-source feature, we strongly recommend that
you freeze writes to the source for the duration of the transfer to protect
against data loss.
To freeze writes to your source, do either of the following:
Clone the directory you intend to transfer, and then use the cloned
directory as the transfer source.
Halt applications that write to the source directory.
If it's important to capture changes that occurred during a transfer, you can
either re-run the transfer, or set the source file system as read-only while the
operation is running.
Since Cloud Storage doesn't have the notion of directories, empty source
directories are not transferred.
Important: We strongly advise that you validate that a transfer was successful
before deleting any source data. This service doesn't have the capability to
restore data in Cloud Storage.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
