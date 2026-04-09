---
title: "Security overview \_|\_ GKE on AWS \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/security
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/aws-iam-roles
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/security
  title: "Security overview \_|\_ GKE on AWS \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The product described by this documentation, GKE on AWS, is now in maintenance mode and will be shut down on March 17, 2027.
Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE Multi-Cloud
GKE on AWS
Guides
Send feedback
Security overview
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the security architecture of GKE on AWS,
including encryption and node configuration.
GKE clusters offer features to help secure your workloads,
including the contents of your container image, the container runtime, the
cluster network, and access to the cluster API server.
When you use GKE clusters, you agree to take on certain
responsibilities for your clusters. For more information, see
GKE clusters shared responsibilities .
AWS KMS encryption
GKE on AWS uses customer-managed
AWS Key Management Service
(KMS) symmetric keys to encrypt:
Kubernetes state data in
etcd
EC2 instance
user data
EBS volumes for
at-rest encryption
of control plane and node pool data
For production environments, we recommend using different keys for configuration
and volume encryption. To further minimize risks if a key is compromised, you
can also create different keys for each of the following:
Cluster control plane configuration
Cluster control plane database
Cluster control plane main volume
Cluster control plane root volume
Node pool configuration
Node pool root volume
For additional security, you can create an AWS KMS key policy that assigns only
the minimum required set of permissions. For more information, see
Creating KMS keys with specific permissions .
At-rest data Encryption
At-rest data encryption is the encryption of stored data, as distinct from data
in transit. By default, GKE on AWS encrypts data in etcd and storage
volumes at rest using AWS platform-managed keys.
GKE on AWS clusters store data in AWS Elastic
Block Storage (EBS) volumes. These EBS volumes are always encrypted at rest with
AWS Key Management System (AWS KMS) keys. When you create clusters and
node pools, you can provide a Customer-Managed KMS Key (CMK) to
encrypt the underlying EBS volumes. If you don't specify a key, AWS uses the
default AWS-managed key
within the AWS region where the cluster runs.
In addition, all GKE clusters enable Application-layer Secrets
Encryption for sensitive data, such as Kubernetes
Secret
objects, which are stored in
etcd .
Even if attackers gain access to the underlying volume where etcd data is stored,
these data is encrypted.
When you create a cluster, you must pass an AWS KMS key to the
--database-encryption-kms-key-arn
field. This key is used for envelope encryption of application data. Because
this resource field is immutable and cannot be modified once the cluster is
created, we suggest you use a
KMS key alias .
You can use a key aliases to rotate the keys used for
at-rest encryption throughout the lifecycle of the cluster.
How application level encryption works
Kubernetes offers application-level encryption with a technique known as
envelope encryption . A local key, commonly called a
data encryption key (DEK) ,
is used to encrypt a Secret. The DEK itself is then encrypted with a second
key called the
key encryption key (KEK) .
The KEK is not stored by Kubernetes. When you create a new Kubernetes Secret,
your cluster does the following:
The Kubernetes API server generates a unique DEK for the Secret using a
random number generator.
The Kubernetes API server encrypts the Secret locally with the DEK.
The Kubernetes API server sends the DEK to AWS KMS for encryption.
AWS KMS uses a pre-generated KEK to encrypt the DEK and returns the
encrypted DEK to the Kubernetes API server's AWS KMS plugin.
The Kubernetes API server saves the encrypted Secret and the encrypted
DEK to etcd. The plaintext DEK is not saved to disk.
The Kubernetes API server creates an in-memory cache entry to map the
encrypted DEK to the plaintext DEK. This lets the API Server decrypt
recently-accessed Secrets without querying the AWS KMS.
When a client requests a Secret from the Kubernetes API server, here's what
happens:
The Kubernetes API server retrieves the encrypted Secret and the encrypted
DEK from etcd.
The Kubernetes API server checks the cache for an existing map entry
and if found, decrypts the Secret with it.
If there is no matching cache entry, the API server sends the DEK to
AWS KMS for decryption using the KEK. The decrypted DEK is then used
to decrypt the Secret.
Finally, the Kubernetes API server returns the decrypted Secret to the
client.
Key Rotation
In contrast to certificate rotation, key rotation is the act of changing the
underlying cryptographic material contained in a key encryption key (KEK) . It
can be triggered automatically as part of a scheduled rotation, or manually,
usually after a security incident where keys might have been compromised. Key
rotation replaces only the single field in the key that contains the raw
encryption/decryption key data.
KMS Key Rotation
AWS KMS supports
automatic rotation of KMS keys .
When enabled, AWS automatically generates new cryptographic key material for
your key once a year. No manual actions are required.
For more information, see Key rotation .
Cluster trust
All cluster communication uses Transport Layer Security (TLS). Each cluster is
provisioned with the following main self-signed root certificate authorities
(CAs):
The cluster root CA is used to validate requests sent to the API server.
The etcd root CA is used to validate requests sent to etcd replicas.
Each cluster has a unique root CA. If one cluster's CA is compromised, no other
cluster's CA is affected. All root CAs have a validity period of 30 years.
Node security
GKE on AWS deploys your workloads onto node pools of AWS
EC2 instances. The following section explains security features of
nodes.
Ubuntu
Your nodes run an optimized version of the
Ubuntu
OS to run the Kubernetes control plane and nodes.
For more information, see
security features in the Ubuntu documentation.
GKE clusters implement several security features, including the
following:
Optimized package set
Google Cloud-tailored Linux kernel
Limited user accounts and disabled root login
Additional security guides are available for Ubuntu, such as the following:
CIS Benchmark
DISA STIG
FIPS 140-2
Secure your workloads
Kubernetes allows users to quickly provision, scale, and update container-based
workloads. This section describes tactics that you can use to limit the
side-effects of running containers on cluster and Google Cloud services.
Limit Pod container process privileges
Limiting the privileges of containerized processes is important for your
cluster's security. You can set security-related options with a
security context .
These settings let you change the security settings of
your processes such as the following:
User and group running the process
Available Linux capabilities
Privilege escalation
The default GKE on AWS node operating system, Ubuntu, uses
default
Docker AppArmor security policies
for all containers. You can view the profile's template on
GitHub .
Among other things, this profile denies containers the following abilities:
Writing to files directly in a process ID directory ( /proc/ )
Writing to files that are not in /proc/
Writing to files in /proc/sys other than /proc/sys/kernel/shm*
Mounting file systems
Restrict the ability for workloads to self-modify
Certain Kubernetes workloads, especially system workloads, have permission to
self-modify. For example, some workloads vertically autoscale themselves. While
convenient, this can allow an attacker who has already compromised a node to
escalate further in the cluster. For example, an attacker could have a workload
on the node change itself to run as a more privileged service account that
exists in the same namespace.
Ideally, workloads should not be granted the permission to modify themselves in
the first place. When self-modification is necessary, you can limit permissions
by installing
Policy Controller
or
Gatekeeper
in your cluster and applying constraints, such as
NoUpdateServiceAccount
from the open source Gatekeeper library, which provides several useful security
policies.
When you deploy policies, it is usually necessary to allow the controllers that
manage the cluster lifecycle to bypass the policies. This is necessary so that
the controllers can make changes to the cluster, such as applying cluster
upgrades. For example, if you deploy the NoUpdateServiceAccount policy on
GKE on AWS, you must set the following parameters in the Constraint :
parameters :
allowedGroups : []
allowedUsers :
- service- PROJECT_NUMBER @gcp-sa-gkemulticloud. iam.gserviceaccount.com
Replace PROJECT_NUMBER with the number (not ID) of the
project that hosts the cluster.
Use Binary Authorization
Another way of securing your workloads is to enable Binary Authorization.
Binary Authorization is a security feature that ensures only trusted container images
are deployed on GKE clusters.
Here's how the process works:
Administrators create a policy that defines the requirements for deploying
an image. This includes specifying the trusted and authorized entities
(attestors) that can sign images, and might include other criteria that an
image must meet to be considered safe for deployment.
An attestor (for example, a developer or an automated system) uses a
cryptographic algorithm to generate a key pair (private and public keys).
The private key, which is kept secret, is used to generate a digital
signature (that is, a unique set of characters) for an image. This signature
acts as a seal of approval - it's a sign that the image has passed all
necessary checks and validations.
The digital signature is then 'attached' to the image. In other words, the
signature is stored in the metadata of the image, usually in the image
registry.
The public key is then registered with the Binary Authorization system so that
the system can use the public key for signature verification.
When a request to deploy a container is made, the Binary Authorization system
retrieves the digital signature attached to the image in the registry.
The Binary Authorization system uses the registered public key to verify the
digital signature attached to the image. It also checks if the image meets
all other criteria defined in the policy. If the digital signature can be
successfully verified using the public key and the image data, and the image
meets all other criteria defined in the policy, the Binary Authorization system
allows the container to be deployed. If the digital signature can't be
successfully verified using the public key and the image data, or if the
image doesn't meet other criteria defined in the policy, the Binary Authorization
system denies the container deployment.
For more information about how Binary Authorization works, see
Binary Authorization overview .
To enable Binary Authorization on an existing cluster or when creating a cluster, see
How to enable Binary Authorization .
Isolate workloads on dedicated node pools
You can use Kubernetes taints and tolerations to designate specific node pools
to run specific types of workloads. For example, you can tell
GKE on AWS to schedule user workloads away from most system-managed
workloads, or place workloads with different trust levels on different node
pools.
Workload isolation using taints and tolerations isn't a guaranteed security
measure. Only use this alongside the other hardening measures that
GKE on AWS offers.
To learn more, see Isolate workloads in dedicated node pools .
What's next
Learn about Key rotation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
