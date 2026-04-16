---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:48:38.137Z"
product_name: "Google Distributed Cloud (software only) for VMware"
product_slug: "google-distributed-cloud-software-only-for-vmware"
feature_name: "Private registry credentials"
feature_slug: "private-registry-credentials"
latest_feature_date: "2022-12-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/artifact-registry"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest"
  - "https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster-topology-domains"
keywords:
  - "private"
  - "registry"
  - "credentials"
  - "admin"
  - "user"
  - "clusters"
  - "can"
  - "use"
---

# Private registry credentials

Product: Google Distributed Cloud (software only) for VMware
Coverage: MEDIUM

## Step 02 Summary

Admin and user clusters can use separate private registry credentials and addresses, including prepared Secrets support and gkectl credential updates.

## Extended Definition

In Google Distributed Cloud for VMware, private registry access is configured through the admin cluster’s `privateRegistry` section, which requires a registry address and a credentials reference (credentials file path and entry name) to locate the username/password used for access. The referenced credentials file is a `CredentialFile` block (for example with a user-defined entry name such as `private-registry-creds`), and the configuration can also include CA certificate and component access key paths used during image pulls. The admin cluster can be configured so managed user clusters pull workload images from that configured private registry, but the provided excerpts do not explicitly state that admin and user clusters maintain separate private registry credentials and addresses.

## Evidence Summary

The cited pages define required and optional `privateRegistry` fields in admin cluster configuration, show how to reference credential and CA files, and state that managed user clusters pull workload images via the admin cluster’s private registry settings.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/artifact-registry](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/artifact-registry)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster-topology-domains](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster-topology-domains)

## Supporting Pages

### "Use Artifact Registry as a private registry for workload images \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/artifact-registry](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/artifact-registry)
- Source ID: `site-docs-reference`
- Final score: 213
- Re-rank relevance: STRONG
- Re-rank rationale: The page provides direct, detailed instructions for configuring private registry credentials in the admin cluster, including the required CredentialFile format and service-account-key authentication.

Evidence snippets:
- For example: apiVersion : v1 kind : "CredentialFile" items : - name : "private-registry-creds" username : " json key" password : '{ "type": "service account", "project id": "example-project-12345", "private key id": "d2661ccb21e686658c6552cf1e0166b857091b2e", "private key": "-----BEGIN PRIVATE ... -----END PRIVATE KEY-----\n", "client email": "test-537@example-project-12345.iam.gserviceaccount.com", "client id": "111772984510027821291", "auth uri": "https://accounts.google.com/o/oauth2/auth", "token uri": "https://oauth2.googleapis.com/token", "auth provider x509 cert url": "https://www.googleapis.com/oauth2/v1/certs", "client x509 cert url": "https://www.googleapis.com/robot/v1/metadata/x509/test-537%40example-project-12345.iam.gserviceaccount.com", "universe domain": "googleapis.com" } ' Configure privateRegistry in the admin cluster configuration file To use a private registry, you need to configure the privateRegistry section when you create the admin cluster.
- The steps on this page explain how to get the address, credentials, and CA certificate that the privateRegistry section in the admin cluster configuration file requires.
- Run the following command to extract the CA certificate of the Artifact Registry endpoint and save it to a file called ar-ca.pem : true openssl s client -connect REGION -docker.pkg.dev:443 -showcerts 2 >/dev/null sed -ne '/-BEGIN/,/-END/p' > ar-ca.pem Fill in the privateRegistry section as follows: privateRegistry : address : " REGISTRY ADDRESS " credentials : fileRef : path : " CREDENTIAL FILE PATH " entry : "private-registry-creds" caCertPath : " CA CERT PATH " componentAccessServiceAccountKeyPath : " COMPONENT ACCESS KEY PATH " Replace the following: REGISTRY ADDRESS : the registryUri value.
- You can use any value for the name field, as long it matches the value you will add to the privateRegistry.entry field. apiVersion : v1 kind : "CredentialFile" items : - name : "private-registry-creds" username : " json key" password : In the directory where the JSON key file for the registry's service account is located, run cat on the key file to output the contents.

### "Admin cluster configuration file 1.30 and higher \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/admin-cluster-configuration-file-latest)
- Source ID: `site-docs-reference`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- Example: privateRegistry: credentials: fileRef: path: "my-config-folder/admin-creds.yaml" privateRegistry.credentials.fileRef.entry Required for private registry Mutable String The name of the credentials block, in your credentials configuration file , that holds the username and password of your private registry account. privateRegistry: credentials: fileRef: entry: "private-registry-creds" privateRegistry.caCertPath Required for private registry Mutable String When the container runtime pulls an image from your private registry, the registry must prove its identity by presenting a certificate.
- When you configure the privateRegistry section, all user clusters managed by this admin cluster will pull workload images from the private registry that you configure here.
- Example: loadBalancer : f5BigIP : credentials : fileRef : path : "my-config-folder/admin-creds.yaml" loadBalancer.f5BigIP.credentialsfileRef.entry 1.30 and higher Not allowed for new clusters Required if loadBalancer.kind = "F5BigIp" Mutable String The name of the credentials block, in your credentials configuration file , that holds the username and password of your F5 BIG-IP account.
- Examples: privateRegistry: address: "203.0.113.10" privateRegistry: address: "fqdn.example.com" privateRegistry.credentials.fileRef.path Required for private registry Mutable String The path of a credentials configuration file that holds the username and password of an account that Google Distributed Cloud can use to access your private registry.

### "Create an admin cluster for use in topology domains \_|\_ Google Distributed\

- URL: [https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster-topology-domains](https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/create-admin-cluster-topology-domains)
- Source ID: `site-docs-reference`
- Final score: 189
- Re-rank relevance: N/A

Evidence snippets:
- If you don't specify a name here, you must set a name in vSphereInfraConfig.defaultTopologyDomain in the vSphere infrastructure configuration file. proxy If the network that will have your admin cluster nodes is behind a proxy server, fill in the proxy section. privateRegistry Decide where you want to keep container images for the Google Distributed Cloud components.
- At the end of this procedure, you will have a running admin cluster that you can use to create and manage user clusters in topology domains.
- There is only one vSphere infrastructure configuration file for the admin cluster and all managed user clusters.
- User clusters are created and upgraded by their managing admin without the use of a bootstrap cluster.

