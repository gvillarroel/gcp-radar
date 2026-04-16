---
title: "Manage CA Service resources using custom constraints \_|\_ Certificate Authority\
  \ Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/certificate-authority-service/docs/custom-constraints
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/certificate-authority-service/docs
source_metadata:
  url: https://docs.cloud.google.com/certificate-authority-service/docs/custom-constraints
  title: "Manage CA Service resources using custom constraints \_|\_ Certificate Authority\
    \ Service \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Certificate Authority Service
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Manage CA Service resources using custom constraints
This page shows you how to use Organization Policy Service custom constraints to restrict
specific operations on the following Google Cloud resources:
privateca.googleapis.com/CaPool
privateca.googleapis.com/CertificateAuthority
privateca.googleapis.com/CertificateTemplate
To learn more about Organization Policy, see
Custom organization policies .
About organization policies and constraints
The Google Cloud Organization Policy Service gives you centralized, programmatic
control over your organization's resources. As the
organization policy administrator , you can define an organization
policy, which is a set of restrictions called constraints that apply to
Google Cloud resources and descendants of those resources in the
Google Cloud resource hierarchy . You can enforce organization
policies at the organization, folder, or project level.
Organization Policy provides built-in managed constraints
for various Google Cloud services. However, if you want more granular,
customizable control over the specific fields that are restricted in your
organization policies, you can also create custom constraints and use those
custom constraints in an organization policy.
Policy inheritance
By default, organization policies are inherited by the descendants of the
resources on which you enforce the policy. For example, if you enforce a policy
on a folder, Google Cloud enforces the policy on all projects in the
folder. To learn more about this behavior and how to change it, refer to
Hierarchy evaluation rules .
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Ensure that you know your
organization ID .
Required roles
To get the permissions that
you need to manage custom organization policies,
ask your administrator to grant you the
Organization Policy Administrator ( roles/orgpolicy.policyAdmin )
IAM role on the organization resource.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Set up a custom constraint
A custom constraint is defined in a YAML file by the resources, methods,
conditions, and actions that are supported by the service on which you are
enforcing the organization policy. Conditions for your custom constraints are
defined using
Common Expression Language (CEL) . For more information about how to build
conditions in custom constraints using CEL, see the CEL section of
Creating and managing custom constraints .
Console
To create a custom constraint, do the following:
In the Google Cloud console, go to the Organization policies page.
Go to Organization policies
From the project picker, select the project that you want to set the organization
policy for.
Click add Custom constraint .
In the Display name box, enter a human-readable name for the constraint. This name is
used in error messages and can be used for identification and debugging. Don't use
personally identifiable information (PII) or sensitive data in display names because this
name could be exposed in error messages. This field can contain up to 200 characters.
In the Constraint ID box, enter the ID that you want for your new custom
constraint. A custom constraint can only contain letters (including upper and lowercase) or
numbers, for example custom.enforceCaPoolEncodingFormat . This field can contain up to
70 characters, not counting the prefix ( custom. ), for example,
organizations/123456789/customConstraints/custom . Don't include PII or
sensitive data in your constraint ID, because it could be exposed in error messages.
In the Description box, enter a human-readable description of the constraint. This
description is used as an error message when the policy is violated. Include details about
why the policy violation occurred and how to resolve the policy violation. Don't include
PII or sensitive data in your description, because it could be exposed in error messages.
This field can contain up to 2000 characters.
In the Resource type box, select the name of the Google Cloud REST resource
containing the object and field that you want to restrict—for example,
container.googleapis.com/NodePool . Most resource types support up to 20 custom
constraints. If you attempt to create more custom constraints, the operation fails.
Under Enforcement method , select whether to enforce the
constraint on a REST CREATE method or both CREATE and
UPDATE methods. If you enforce the constraint with the UPDATE
method on a resource that violates the constraint, changes to that resource are blocked by
the organization policy unless the change resolves the violation.
To see supported methods for each service, find the service in
Services that support custom constraints .
To define a condition, click edit Edit condition .
In the Add condition panel, create a CEL condition that refers to a supported
service resource, for example, resource.management.autoUpgrade == false . This
field can contain up to 1000 characters. For details about CEL usage, see
Common Expression Language .
For more information about the service resources you can use in your custom constraints,
see
Custom constraint supported services .
Click Save .
Under Action , select whether to allow or deny the evaluated method if the condition
is met.
The deny action means that the operation to create or update the resource is blocked if the
condition evaluates to true.
The allow action means that the operation to create or update the resource is permitted only
if the condition evaluates to true. Every other case except those explicitly listed in the
condition is blocked.
Click Create constraint .
When you have entered a value into each field, the equivalent YAML configuration for this
custom constraint appears on the right.
gcloud
To create a custom constraint, create a YAML file using the following format:
name : organizations/ ORGANIZATION_ID /customConstraints/ CONSTRAINT_NAME
resourceTypes : RESOURCE_NAME
methodTypes :
- CREATE - UPDATE
condition : " CONDITION "
actionType : ACTION
displayName : DISPLAY_NAME
description : DESCRIPTION
Replace the following:
ORGANIZATION_ID : your organization ID, such as
123456789 .
CONSTRAINT_NAME : the name that you want for your new custom
constraint. A custom constraint can only contain letters (including upper and lowercase)
or numbers, for example, custom.enforceCaPoolEncodingFormat . This field can contain up to 70
characters, not counting the prefix ( custom. )— for example,
organizations/123456789/customConstraints/custom . Don't include PII or
sensitive data in your constraint ID, because it could be exposed in error messages.
RESOURCE_NAME : the fully qualified name of the Google Cloud
resource containing the object and field that you want to restrict. For example,
privateca.googleapis.com/CaPool . Most resource types support up to 20 custom
constraints. If you attempt to create more custom constraints, the operation fails.
methodTypes : the REST methods that the constraint is enforced on.
Can be CREATE or both CREATE and
UPDATE . If you enforce the constraint with the UPDATE method on
a resource that violates the constraint, changes to that resource are blocked by the
organization policy unless the change resolves the violation.
To see the supported methods for each service, find the service in
Services that support custom constraints .
CONDITION : a
CEL condition that is written against a representation of a supported service
resource. This field can contain up to 1000 characters. For example,
"resource.publishingOptions.encodingFormat == 'DER'" .
For more information about the resources available to write conditions against, see
Supported resources .
ACTION : the action to take if the condition is met.
Possible values are ALLOW and
DENY .
The allow action means that if the condition evaluates to true, the operation to create or
update the resource is permitted. This also means that every other case except the one
explicitly listed in the condition is blocked.
The deny action means that if the condition evaluates to true, the operation to create or
update the resource is blocked.
DISPLAY_NAME : a human-readable name for the constraint. This name
is used in error messages and can be used for identification and debugging. Don't use PII
or sensitive data in display names because this name could be exposed in error messages.
This field can contain up to 200 characters.
DESCRIPTION : a human-friendly description of the constraint to
display as an error message when the policy is violated. This field can contain up to
2000 characters.
After you have created the YAML file for a new custom constraint, you must set it up to make
it available for organization policies in your organization. To set up a custom constraint,
use the
gcloud org-policies set-custom-constraint command:
gcloud org-policies set-custom-constraint CONSTRAINT_PATH
Replace CONSTRAINT_PATH with the full path to your custom constraint
file. For example, /home/user/customconstraint.yaml .
After this operation is complete, your custom constraints are available as organization
policies in your list of Google Cloud organization policies.
To verify that the custom constraint exists, use the
gcloud org-policies list-custom-constraints command:
gcloud org-policies list-custom-constraints --organization = ORGANIZATION_ID
Replace ORGANIZATION_ID with the ID of your organization resource.
For more information, see
Viewing organization policies .
Enforce a custom organization policy
You can enforce a constraint by creating an organization policy that references it, and then
applying that organization policy to a Google Cloud resource.
Console
In the Google Cloud console, go to the Organization policies page.
Go to Organization policies
From the project picker, select the project that you want to set the
organization policy for.
From the list on the Organization policies page, select your constraint to view
the Policy details page for that constraint.
To configure the organization policy for this resource, click Manage policy .
On the Edit policy page, select Override parent's policy .
Click Add a rule .
In the Enforcement section, select whether this organization policy is enforced or
not.
Optional: To make the organization policy conditional on a tag, click
Add condition . Note that if you add a conditional rule to an organization
policy, you must add at least one unconditional rule or the policy cannot be saved. For more
information, see
Scope organization policies with tags .
Click Test changes to simulate the effect of the organization policy. For more
information, see
Test organization policy changes with Policy Simulator .
To enforce the organization policy in dry-run mode, click Set dry run policy . For
more information, see
Test organization policies .
After you verify that the organization policy in dry-run mode works as intended, set the
live policy by clicking Set policy .
gcloud
To create an organization policy with boolean rules, create a policy YAML file that
references the constraint:
name : projects/ PROJECT_ID /policies/ CONSTRAINT_NAME
spec :
rules :
- enforce : true
dryRunSpec :
rules :
- enforce : true
Replace the following:
PROJECT_ID : the project that you want to enforce your constraint
on.
CONSTRAINT_NAME : the name you defined for your custom constraint. For
example, custom.enforceCaPoolEncodingFormat .
To enforce the organization policy in
dry-run mode , run
the following command with the dryRunSpec flag:
gcloud org-policies set-policy POLICY_PATH --update-mask = dryRunSpec
Replace POLICY_PATH with the full path to your organization policy
YAML file. The policy requires up to 15 minutes to take effect.
After you verify that the organization policy in dry-run mode works as intended, set the
live policy with the org-policies set-policy command and the spec
flag:
gcloud org-policies set-policy POLICY_PATH --update-mask = spec
Replace POLICY_PATH with the full path to your organization policy
YAML file. The policy requires up to 15 minutes to take effect.
Test the custom organization policy
The following example creates a custom constraint and policy that require all Certificate Authority Pool (CaPool) resources in a specific project to issue certificates with a maximum certificate lifetime of no more than 30 days.
Before you begin, you should know the following:
Your organization ID
A project ID
Required roles
To get the permissions that
you need to manage custom constraints, enable APIs, and manage CA Service resources for this guide,
ask your administrator to grant you the
following IAM roles:
Organization Policy Administrator ( roles/orgpolicy.policyAdmin )
on organization
CA Service Admin ( roles/privateca.admin )
on project
Service Usage Admin ( roles/serviceusage.serviceUsageAdmin )
on project
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Enable the Organization Policy Service API
The gcloud org-policies commands require the orgpolicy.googleapis.com API. Enable this API in your project:
gcloud services enable orgpolicy.googleapis.com --project = PROJECT_ID
Replace PROJECT_ID with your project ID.
Create the constraint
Save the following file as constraint-cas-capool-lifetime.yaml :
name : organizations/ ORGANIZATION_ID /customConstraints/custom.enforceCasMaxLifetime30d
resourceTypes :
- privateca.googleapis.com/CaPool
methodTypes :
- CREATE
- UPDATE
condition : "!has(resource.issuancePolicy.maximumLifetime) || duration(resource.issuancePolicy.maximumLifetime) > duration('2592000s')"
actionType : DENY
displayName : Enforce Max Certificate Lifetime (30 Days)
description : Only allows CaPools where the issuancePolicy.maximumLifetime field is set to 30 days (2592000 seconds) or less.
Replace ORGANIZATION_ID with your organization ID.
Apply the following constraint:
gcloud org-policies set-custom-constraint ~/constraint-cas-capool-lifetime.yaml
Verify that the constraint exists:
gcloud org-policies list-custom-constraints --organization = ORGANIZATION_ID
Replace ORGANIZATION_ID with your organization ID.
Create the policy
Save the following file as policy-cas-capool-lifetime.yaml :
name : projects/ PROJECT_ID /policies/custom.enforceCasMaxLifetime30d
spec :
rules :
- enforce : true
Replace PROJECT_ID with your project ID.
Apply the following policy:
gcloud org-policies set-policy ~/policy-cas-capool-lifetime.yaml
Verify that the policy exists:
gcloud org-policies list --project = PROJECT_ID
Replace PROJECT_ID with your project ID.
After you apply the policy, wait about 15 minutes for Google Cloud to
start enforcing the policy. For more information, see Creating and managing organization policies .
Test the policy
To test the custom constraint, you'll create and update a
CA Service pool using the gcloud CLI.
Define variables for your test resources:
PROJECT_ID : your Google Cloud project ID
LOCATION : the region for the CA pool, for example,
us-west1
POOL_NAME : a name for your test CA pool, such as
my-test-pool
Create a CA Pool with a maximum lifetime more than 30 days:
Create a YAML file named capool_violating.yaml with a maximumLifetime more than 30 days (for example, 31 days, which is 2,678,400 seconds). The maximumLifetime field is set in seconds.
# capool_violating.yaml
maximumLifetime : 2678400s
To create a CA Pool that violates the policy, run the following command:
# This creation should be blocked by the policy
gcloud privateca pools create POOL_NAME -violating \
--location LOCATION \
--project PROJECT_ID \
--issuance-policy capool_violating.yaml
The command fails with a FAILED_PRECONDITION error, indicating a violation of the customConstraints/custom.enforceCasMaxLifetime30d constraint.
Create a CA pool with a compliant maximum lifetime:
Create a YAML file named capool_compliant.yaml with a maximumLifetime of 30
days (2,592,000 seconds). The maximumLifetime field is set in seconds.
# capool_compliant.yaml
maximumLifetime : 2592000s
To create the CA pool, run the following command:
gcloud privateca pools create POOL_NAME \
--location " LOCATION " \
--project " PROJECT_ID " \
--issuance-policy capool_compliant.yaml
The command completes successfully.
Try to update the CA pool to a non-compliant maximum lifetime:
Run the following command to apply the settings from
capool_violating.yaml :
# This update is blocked by the policy
gcloud privateca pools update POOL_NAME \
--location " LOCATION " \
--project " PROJECT_ID " \
--issuance-policy capool_violating.yaml
This command fails with a FAILED_PRECONDITION error, indicating a violation of the customConstraints/custom.enforceCasMaxLifetime30d constraint.
Update the CA pool to a different compliant maximum lifetime
Create a YAML file named capool_compliant_update.yaml with a
maximumLifetime of 15 days (1,296,000 seconds). The maximumLifetime field is set in seconds.
# capool_compliant_update.yaml
maximumLifetime : 1296000s
To update the CA pool, run the following command:
gcloud privateca pools update POOL_NAME \
--location " LOCATION " \
--project " PROJECT_ID " \
--issuance-policy capool_compliant_update.yaml
The command completes successfully.
Clean up the test resources.
Delete the CA pool created during the test:
gcloud privateca pools delete POOL_NAME \
--location " LOCATION " \
--project " PROJECT_ID " \
Example custom organization policies for common use cases
This table provides syntax examples for some common custom constraints.
Description
Constraint syntax
Enforce specific key algorithms for all CAs
Ensures any new Certificate Authority uses one of the allowed key algorithms.
name : organizations/ ORGANIZATION_ID /customConstraints/custom.casAllowedKeyAlgos
resourceTypes :
- privateca.googleapis.com/CertificateAuthority
methodTypes :
- CREATE
- UPDATE
condition : "resource.keySpec.algorithm in ['EC_P256_SHA256', 'RSA_PSS_3072_SHA256']"
actionType : ALLOW
displayName : Restrict CA Key Algorithms
description : Only allows specific key algorithms for new CAs.
Require a specific organization name in the CA subject
Ensures all new CAs have a standardized organization field in their subject.
name : organizations/ ORGANIZATION_ID /customConstraints/custom.casRequireSubjectOrg
resourceTypes :
- privateca.googleapis.com/CertificateAuthority
methodTypes :
- CREATE
- UPDATE
condition : "resource.config.subjectConfig.subject.organization == 'Example Company Inc.'"
actionType : ALLOW
displayName : Enforce CA Subject Organization
description : Requires new CAs to have the specified organization name.
Enforce Maximum Certificate Lifetime for CaPools
Ensures that CaPools are configured to issue certificates with a maximum lifetime of no more than 30 days.
name : organizations/ ORGANIZATION_ID /customConstraints/custom.enforceCasMaxLifetime30d
resourceTypes :
- privateca.googleapis.com/CaPool
methodTypes :
- CREATE
- UPDATE
condition : "!has(resource.issuancePolicy.maximumLifetime) || duration(resource.issuancePolicy.maximumLifetime) > duration('2592000s')"
actionType : DENY
displayName : Enforce Max Certificate Lifetime (30 Days)
description : Only allows CaPools where the issuancePolicy.maximumLifetime field is set to 30 days (2592000 seconds) or less.
Certificate Authority Service supported resources
The following table lists the Certificate Authority Service resources that you can reference
in custom constraints.
Resource
Field
privateca.googleapis.com/CaPool
resource.encryptionSpec.cloudKmsKey
resource.issuancePolicy.allowedIssuanceModes.allowConfigBasedIssuance
resource.issuancePolicy.allowedIssuanceModes.allowCsrBasedIssuance
resource.issuancePolicy.allowedKeyTypes.ellipticCurve.signatureAlgorithm
resource.issuancePolicy.allowedKeyTypes.rsa.maxModulusSize
resource.issuancePolicy.allowedKeyTypes.rsa.minModulusSize
resource.issuancePolicy.backdateDuration
resource.issuancePolicy.baselineValues.additionalExtensions.critical
resource.issuancePolicy.baselineValues.additionalExtensions.objectId.objectIdPath
resource.issuancePolicy.baselineValues.additionalExtensions.value
resource.issuancePolicy.baselineValues.aiaOcspServers
resource.issuancePolicy.baselineValues.caOptions.isCa
resource.issuancePolicy.baselineValues.caOptions.maxIssuerPathLength
resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.certSign
resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.contentCommitment
resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.crlSign
resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.dataEncipherment
resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.decipherOnly
resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.digitalSignature
resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.encipherOnly
resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.keyAgreement
resource.issuancePolicy.baselineValues.keyUsage.baseKeyUsage.keyEncipherment
resource.issuancePolicy.baselineValues.keyUsage.extendedKeyUsage.clientAuth
resource.issuancePolicy.baselineValues.keyUsage.extendedKeyUsage.codeSigning
resource.issuancePolicy.baselineValues.keyUsage.extendedKeyUsage.emailProtection
resource.issuancePolicy.baselineValues.keyUsage.extendedKeyUsage.ocspSigning
resource.issuancePolicy.baselineValues.keyUsage.extendedKeyUsage.serverAuth
resource.issuancePolicy.baselineValues.keyUsage.extendedKeyUsage.timeStamping
resource.issuancePolicy.baselineValues.keyUsage.unknownExtendedKeyUsages.objectIdPath
resource.issuancePolicy.baselineValues.nameConstraints.critical
resource.issuancePolicy.baselineValues.nameConstraints.excludedDnsNames
resource.issuancePolicy.baselineValues.nameConstraints.excludedEmailAddresses
resource.issuancePolicy.baselineValues.nameConstraints.excludedIpRanges
resource.issuancePolicy.baselineValues.nameConstraints.excludedUris
resource.issuancePolicy.baselineValues.nameConstraints.permittedDnsNames
resource.issuancePolicy.baselineValues.nameConstraints.permittedEmailAddresses
resource.issuancePolicy.baselineValues.nameConstraints.permittedIpRanges
resource.issuancePolicy.baselineValues.nameConstraints.permittedUris
resource.issuancePolicy.baselineValues.policyIds.objectIdPath
resource.issuancePolicy.identityConstraints.allowSubjectAltNamesPassthrough
resource.issuancePolicy.identityConstraints.allowSubjectPassthrough
resource.issuancePolicy.identityConstraints.celExpression
resource.issuancePolicy.maximumLifetime
resource.issuancePolicy.passthroughExtensions.additionalExtensions.objectIdPath
resource.issuancePolicy.passthroughExtensions.knownExtensions
resource.name
resource.publishingOptions.encodingFormat
resource.publishingOptions.publishCaCert
resource.publishingOptions.publishCrl
resource.tier
privateca.googleapis.com/CertificateAuthority
resource.config.publicKey.format
resource.config.publicKey.key
resource.config.subjectConfig.subject.commonName
resource.config.subjectConfig.subject.countryCode
resource.config.subjectConfig.subject.locality
resource.config.subjectConfig.subject.organization
resource.config.subjectConfig.subject.organizationalUnit
resource.config.subjectConfig.subject.postalCode
resource.config.subjectConfig.subject.province
resource.config.subjectConfig.subject.rdnSequence.attributes.objectId.objectIdPath
resource.config.subjectConfig.subject.rdnSequence.attributes.type
resource.config.subjectConfig.subject.rdnSequence.attributes.value
resource.config.subjectConfig.subject.streetAddress
resource.config.subjectConfig.subjectAltName.customSans.critical
resource.config.subjectConfig.subjectAltName.customSans.objectId.objectIdPath
resource.config.subjectConfig.subjectAltName.customSans.value
resource.config.subjectConfig.subjectAltName.dnsNames
resource.config.subjectConfig.subjectAltName.emailAddresses
resource.config.subjectConfig.subjectAltName.ipAddresses
resource.config.subjectConfig.subjectAltName.uris
resource.config.subjectKeyId.keyId
resource.config.x509Config.additionalExtensions.critical
resource.config.x509Config.additionalExtensions.objectId.objectIdPath
resource.config.x509Config.additionalExtensions.value
resource.config.x509Config.aiaOcspServers
resource.config.x509Config.caOptions.isCa
resource.config.x509Config.caOptions.maxIssuerPathLength
resource.config.x509Config.keyUsage.baseKeyUsage.certSign
resource.config.x509Config.keyUsage.baseKeyUsage.contentCommitment
resource.config.x509Config.keyUsage.baseKeyUsage.crlSign
resource.config.x509Config.keyUsage.baseKeyUsage.dataEncipherment
resource.config.x509Config.keyUsage.baseKeyUsage.decipherOnly
resource.config.x509Config.keyUsage.baseKeyUsage.digitalSignature
resource.config.x509Config.keyUsage.baseKeyUsage.encipherOnly
resource.config.x509Config.keyUsage.baseKeyUsage.keyAgreement
resource.config.x509Config.keyUsage.baseKeyUsage.keyEncipherment
resource.config.x509Config.keyUsage.extendedKeyUsage.clientAuth
resource.config.x509Config.keyUsage.extendedKeyUsage.codeSigning
resource.config.x509Config.keyUsage.extendedKeyUsage.emailProtection
resource.config.x509Config.keyUsage.extendedKeyUsage.ocspSigning
resource.config.x509Config.keyUsage.extendedKeyUsage.serverAuth
resource.config.x509Config.keyUsage.extendedKeyUsage.timeStamping
resource.config.x509Config.keyUsage.unknownExtendedKeyUsages.objectIdPath
resource.config.x509Config.nameConstraints.critical
resource.config.x509Config.nameConstraints.excludedDnsNames
resource.config.x509Config.nameConstraints.excludedEmailAddresses
resource.config.x509Config.nameConstraints.excludedIpRanges
resource.config.x509Config.nameConstraints.excludedUris
resource.config.x509Config.nameConstraints.permittedDnsNames
resource.config.x509Config.nameConstraints.permittedEmailAddresses
resource.config.x509Config.nameConstraints.permittedIpRanges
resource.config.x509Config.nameConstraints.permittedUris
resource.config.x509Config.policyIds.objectIdPath
resource.gcsBucket
resource.keySpec.algorithm
resource.keySpec.cloudKmsKeyVersion
resource.lifetime
resource.name
resource.subordinateConfig.certificateAuthority
resource.subordinateConfig.pemIssuerChain.pemCertificates
resource.type
resource.userDefinedAccessUrls.aiaIssuingCertificateUrls
resource.userDefinedAccessUrls.crlAccessUrls
privateca.googleapis.com/CertificateTemplate
resource.description
resource.identityConstraints.allowSubjectAltNamesPassthrough
resource.identityConstraints.allowSubjectPassthrough
resource.identityConstraints.celExpression
resource.maximumLifetime
resource.name
resource.passthroughExtensions.additionalExtensions.objectIdPath
resource.passthroughExtensions.knownExtensions
resource.predefinedValues.additionalExtensions.critical
resource.predefinedValues.additionalExtensions.objectId.objectIdPath
resource.predefinedValues.additionalExtensions.value
resource.predefinedValues.aiaOcspServers
resource.predefinedValues.caOptions.isCa
resource.predefinedValues.caOptions.maxIssuerPathLength
resource.predefinedValues.keyUsage.baseKeyUsage.certSign
resource.predefinedValues.keyUsage.baseKeyUsage.contentCommitment
resource.predefinedValues.keyUsage.baseKeyUsage.crlSign
resource.predefinedValues.keyUsage.baseKeyUsage.dataEncipherment
resource.predefinedValues.keyUsage.baseKeyUsage.decipherOnly
resource.predefinedValues.keyUsage.baseKeyUsage.digitalSignature
resource.predefinedValues.keyUsage.baseKeyUsage.encipherOnly
resource.predefinedValues.keyUsage.baseKeyUsage.keyAgreement
resource.predefinedValues.keyUsage.baseKeyUsage.keyEncipherment
resource.predefinedValues.keyUsage.extendedKeyUsage.clientAuth
resource.predefinedValues.keyUsage.extendedKeyUsage.codeSigning
resource.predefinedValues.keyUsage.extendedKeyUsage.emailProtection
resource.predefinedValues.keyUsage.extendedKeyUsage.ocspSigning
resource.predefinedValues.keyUsage.extendedKeyUsage.serverAuth
resource.predefinedValues.keyUsage.extendedKeyUsage.timeStamping
resource.predefinedValues.keyUsage.unknownExtendedKeyUsages.objectIdPath
resource.predefinedValues.nameConstraints.critical
resource.predefinedValues.nameConstraints.excludedDnsNames
resource.predefinedValues.nameConstraints.excludedEmailAddresses
resource.predefinedValues.nameConstraints.excludedIpRanges
resource.predefinedValues.nameConstraints.excludedUris
resource.predefinedValues.nameConstraints.permittedDnsNames
resource.predefinedValues.nameConstraints.permittedEmailAddresses
resource.predefinedValues.nameConstraints.permittedIpRanges
resource.predefinedValues.nameConstraints.permittedUris
resource.predefinedValues.policyIds.objectIdPath
What's next
Learn more about
Organization Policy Service .
Learn more about how to
create and manage organization policies .
See the full list of managed
organization policy constraints .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
