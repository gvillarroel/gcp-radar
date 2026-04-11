---
title: "Create and customize workloads \_|\_ Confidential Space \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-customize-workloads
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-grant-access-confidential-resources
source_metadata:
  url: https://docs.cloud.google.com/confidential-computing/confidential-space/docs/create-customize-workloads
  title: "Create and customize workloads \_|\_ Confidential Space \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Confidential Space
Guides
Send feedback
Create and customize workloads
Stay organized with collections
Save and categorize content based on your preferences.
Workload author
A workload is created by a workload author, and processes the confidential data
that data collaborators want to work with.
A workload author needs to put together the following resources to create a
workload:
An application to process the confidential data. You
can write your application in any language you choose, providing you build a
containerized image that supports it.
A containerized image to package the application
into, using Docker .
A repository in Artifact Registry to store the Docker
image in.
Launch policies
set on the container image that control how a workload can be run, and
restrict the capability of a malicious workload operator.
To deploy the workload , a Confidential VM
is run by a workload operator based on the
Confidential Space image . This
retrieves the containerized image from Artifact Registry and runs it.
Data collaborators must
validate a workload's attestations
before it can access their data.
Note: If data collaborator resources are stored outside of Google Cloud, a
workload author also needs to implement
attestation tokens
themselves, and work with data collaborators so they can verify those tokens.
Before you begin
Writing a workload for Confidential Space is more than just code and debugging. You
also need to talk with data collaborators to assess their needs, set up your
environment, package your code into a containerized image, and work with a
workload operator to make sure everything deploys correctly.
Talk with the data collaborators
Before you start writing your application, you need to have a conversation with
your data collaborators about the private data they want you to work on.
Questions you can ask include the following:
What are the organization IDs involved?
What are the project numbers involved?
What are the Google Cloud resources I need to access, and what are their IDs
and names?
Are there resources I need to access that aren't managed by Google Cloud
IAM?
How should the application compare and process the private data?
What format should the output be in?
Where should the output be stored, and should it be encrypted?
Are all data collaborators seeing the same result, or are the outputs unique
for each?
Additionally, each data collaborator might also have unique privacy requirements
that you need to fulfill. It's vitally important that no private data gets
exposed as a result of a workload.
Build your Confidential Space solution
It's useful to set up two (or more) projects with appropriate permissions as a
test environment, like in
Create your first Confidential Space environment .
Try to mirror the data collaborators' project setups as best you can. This lets
you gain experience with cross-project permissions, and retrieving the data you
need from specific Google Cloud resources. It can also give you an appreciation
of the
workload operator and data collaborator roles
and their responsibilities.
During the early building phase, it's useful to observe the following practices:
When working as a data collaborator, keep
attestation validation
to a minimum for the sake of development speed.
When working as a workload operator, use the Confidential Space debug image
instead of production when
deploying the workload . This gives
you more ways to troubleshoot the workload.
As your application matures and its state becomes more predictable, you can
increasingly lock down your solution with
attestation validation
and
launch policies , and switch to the production
Confidential Space image.
After you get your workload working correctly in your test environment, you can
then switch over to testing in your data collaborators' projects with real
resources, but fake data so you can demonstrate to the data collaborators how
everything works. At this point in time you might start working with an
independent workload operator.
When all is working and the output is as expected, you can start testing on
production data. After that testing is complete and all parties sign off on the
results, the workload is ready to be put into production.
Be careful with output
While testing your code it can be tempting to debug by printing to STDOUT or
STDERR . If you choose to do so, be careful that you're not exposing private
data that other parties could read by accessing logs. Before your code starts
working on production, make sure that it's not outputting anything other than
what's strictly necessary.
The same is true of the final output. Only provide a final result that does not
compromise the privacy and sensitivity of the original data.
Build a containerized image with Docker
Applications need to be packaged into a containerized image built by Docker,
which is stored in Artifact Registry. When a workload is deployed, the Docker image
is pulled from the Artifact Registry repository by the Confidential Space image, run, and
the application can start working on the appropriate project resources.
When building your Docker image, take the following things into account:
Additional Linux capabilities
Disk and memory limits
Expired OIDC tokens
Resources not managed by Google Cloud IAM
Inbound ports
Launch policies
Multiple workload runs
Namespaced cgroups
Reproducible container images
Signed container images
Additional Linux capabilities
The Confidential Space workload runs in a Linux container using containerd. This
container runs using
default Linux capabilities .
In order to add capabilities, you can use
tee-added-capabilities .
Disk and memory limits
Confidential Space automatically resizes the boot disk stateful partition when
using
larger boot disk sizes .
The partition size is roughly the boot disk size minus 5 GB.
As part of Confidential Space integrity file system protections, Confidential Space
stores disk integrity tags in memory. This uses approximately 1% memory overhead
for each disk byte. For example, a 100 GB disk requires 1 GB of memory
and a 10 TB disk requires 100 GB of memory.
Make sure to keep within VM memory limits. Swap memory is disabled on
Confidential Space VMs, which means excessive memory use can crash the workload.
Ensure your machine selection supports your workload memory usage in addition to
the disk integrity overhead.
Expired OIDC tokens
An OIDC token is made available for your workload to consume when it starts. It
contains verified attestation claims about your workload's VM, and is stored in
the workload container at
/run/container_launcher/attestation_verifier_claims_token . The token expires
after 60 minutes.
If the token expires, a refresh is attempted in the background using exponential
backoff until it succeeds. If a refresh fails (due to network issues, an
attestation service outage, or otherwise), your workload code needs to be able
to handle that failure.
Your workload could handle a token refresh failure in one of the following ways:
Ignore the expired token, assuming it's no longer required after the initial
use.
Wait for the expired token to be refreshed successfully.
Exit the workload.
In-memory scratch mounts
Confidential Space supports adding in-memory scratch spaces. This uses the
available memory in the Confidential Space VM. Because the scratch space uses the
Confidential VM's memory, it has the same integrity and
confidentiality properties as the Confidential VM.
You can use
tee-dev-shm-size
to increase the size of the /dev/shm shared memory mount for the workload.
The /dev/shm size is specified in KB.
You can use
tee-mount to specify
tmpfs mounts in the running container using semicolon-separated configurations.
The type and source are always tmpfs . The destination is the mountpoint,
which interacts with the
tee.launch_policy.allow_mount_destinations launch policy. You can optionally
specify the tmpfs size in bytes. The default size is 50% of VM memory.
Inbound ports
By default, Confidential Space VMs operate with a firewall rule to block all
inbound ports. When using a Confidential Space image version of 230600 or higher,
you can specify inbound ports to keep open in the Dockerfile when building
your workload image.
Caution: Open ports expand the attack surface of a workload. Workload authors
must be careful to secure their workloads appropriately.
To open ports, add the EXPOSE keyword to your Dockerfile , along with the
port number to keep open and an optional protocol of tcp or udp . If you
don't specify the protocol for a port, both TCP and UDP are allowed. Here's an
example Dockerfile that exposes inbound ports:
FROM alpine:latest
EXPOSE 80
EXPOSE 443/tcp
EXPOSE 81/udp
WORKDIR /test
COPY salary /test
ENTRYPOINT ["/test/salary"]
CMD []
Note: Changing the exposed ports for an image changes its digest. Resource
owners might need to update their workload identity providers to authorize the
new image digest.
Depending on the base image you use, some ports might already be exposed. Your
Dockerfile only exposes additional ports; it can't block ports that have
already been opened by the base image.
Workload operators should make sure that the exposed ports are open in their
VPC firewall before running the workload. The
port numbers can be supplied by the workload author, or pulled from the
Docker image information .
Exposed ports are logged in the console and are redirected to Cloud Logging
when using the
tee-container-log-redirect
metadata variable.
Launch policies
Launch policies override the VM metadata variables
set by workload operators to restrict malicious actions. A workload author can
set policies with a label
as part of building their container image.
For example, in a Dockerfile :
LABEL "tee.launch_policy.allow_cmd_override"="true"
In a Bazel BUILD file:
container_image(
...
labels={"tee.launch_policy.allow_cmd_override":"true"}
...
)
The available launch policies are in the following table:
Policy
Type
Description
tee.launch_policy.allow_capabilities
Interacts with:
Workload operator : The
tee-added-capabilities
metadata variable.
Boolean (default is false )
Determines if the workload operator can add additional Linux capabilities
to the workload container.
tee.launch_policy.allow_cgroups
Interacts with:
Workload operator : The
tee-cgroup-ns
metadata variable.
Boolean (default is false )
Determines if workload container is allowed to include a namespaced cgroup mount at
/sys/fs/cgroup .
tee.launch_policy.allow_cmd_override
Interacts with:
Workload operator : The
tee-cmd
metadata variable.
Data collaborators : The
container.cmd_override
assertion.
Boolean (default is false )
Determines if the
CMD
specified in the workload container's Dockerfile can be
overridden by a workload operator with the
tee-cmd
metadata value.
tee.launch_policy.allow_env_override
Interacts with:
Workload operator : The
tee-env- ENVIRONMENT_VARIABLE_NAME
metadata variable.
Data collaborators : The
container.env
and
container.env_override
assertions.
Comma-separated string
A comma-separated string of permitted environment variable names that
are allowed to be set by a workload operator with
tee-env- ENVIRONMENT_VARIABLE_NAME
metadata values.
tee.launch_policy.allow_mount_destinations
Interacts with:
Workload operator : The
tee-mount
metadata variable.
Colon-separated string
A colon-separated string of permitted mount directories the workload
operator is allowed to mount to using tee-mount .
For example: /run/tmp:/var/tmp:/tmp
tee.launch_policy.log_redirect
Interacts with:
Workload operator : The
tee-container-log-redirect
metadata variable.
Defined string
Determines how logging works if
tee-container-log-redirect
is set to true by a workload operator.
The valid values are the following:
debugonly (default): Only allow stdout and
stderr redirects when using a debug image.
always : Always allow stdout and
stderr redirects.
never : Never allow stdout and
stderr redirects.
tee.launch_policy.monitoring_memory_allow
Interacts with:
Data collaborators : The
monitoring_enabled.memory
assertion.
Workload operator : The
tee-monitoring-memory-enable
metadata variable.
Defined string
Determines how workload memory usage monitoring works if
tee-monitoring-memory-enable
is set to true by a workload operator.
The valid values are the following:
debugonly (default): Only allow memory usage monitoring
when using a debug image.
always : Always allow memory usage monitoring.
never : Never allow memory usage monitoring.
Caution : If you allow memory usage monitoring, the workload
operator can see workload memory usage metrics in
Cloud Logging and
Metrics Explorer . If your workload isn't written in a way
that prevents total memory usage from leaking sensitive information,
block this feature on production workloads.
Multiple workload runs
To ensure a clean environment, a VM must be restarted to restart a workload.
This encrypts the VM disk with an ephemeral key, to address the attack vector of
modifying a workload image on the disk after it has been downloaded and
measured.
This also adds overheads like boot time and pulling the workload image to each
workload run. If these overheads impact your workload's performance too much,
you can code a workload restart into the workload itself, at the cost of
increasing your risk profile.
Namespaced cgroups
The Confidential Space workload runs without a cgroup mount by default.
In order to manage cgroups within the workload container, you can use
tee-cgroup-ns . This
creates a mount at /sys/fs/cgroup in the container file system.
Reproducible container images
Building a container image in a reproducible way can help to increase trust
between parties. You can
build reproducible images with Bazel .
Resources not managed by Google Cloud IAM
To access resources not managed by Google Cloud IAM, your
workload needs to specify a custom audience.
For more information, see
Access resources not managed by Google Cloud IAM .
Signed container images
You can sign a container image with a public key, which a data collaborator can
then use for attestation instead of specifying an image digest in their
WIP policy .
This means data collaborators don't need to update their WIP policies each time
a workload is updated, and the workload can continue to access protected
resources uninterrupted.
You can use Sigstore Cosign to sign the container
image. To ensure that Confidential Space can fetch the signatures, workload
operators must add the signature information to the
tee-signed-image-repos
metadata variable before deploying the workload.
During runtime, signatures are sent to the Confidential Space attestation service
for verification. The attestation service returns an attestation claims token
that contains the verified signature claims. Here's an example signature claim:
"image_signatures" : [
{
"key_id" : "hexadecimal-sha256-fingerprint-public-key1" ,
"signature" : "base64-encoded-signature" ,
"signature_algorithm" : "RSASSA_PSS_SHA256"
},
{
"key_id" : "hexadecimal-sha256-fingerprint-public-key2" ,
"signature" : "base64-encoded-signature" ,
"signature_algorithm" : "RSASSA_PSS_SHA256" ,
},
{
"key_id" : "hexadecimal-sha256-fingerprint-public-key3" ,
"signature" : "base64-encoded-signature" ,
"signature_algorithm" : "RSASSA_PSS_SHA256" ,
}
]
Note: If a workload author updates a container signature for a running workload,
Confidential Space can take up to 1 hour to detect the updated signatures.
To configure container image signing, see
Signed container image codelab .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
