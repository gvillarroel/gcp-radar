---
title: "Authentication for Google Cloud APIs and services \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/docs/authentication
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/docs/quotas
source_metadata:
  url: https://docs.cloud.google.com/docs/authentication
  title: "Authentication for Google Cloud APIs and services \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Google Cloud SDK
Authentication
Guides
Send feedback
Authentication for Google Cloud APIs and services
Stay organized with collections
Save and categorize content based on your preferences.
This document helps you understand some key authentication methods and concepts
and where to get help with implementing or troubleshooting authentication.
The primary focus of the authentication documentation is for Google Cloud
services, but the list of authentication use cases and the
introductory material on this page includes use cases for other Google products
as well.
Introduction
Authentication is the process by which your identity is confirmed
through the use of some kind of credential . Authentication is
about proving that you are who you say you are.
Google provides many APIs and services, which require
authentication to access. Google also provides a number of
services that host applications written by our customers; these applications
also need to determine the identity of their users.
Google APIs implement and extend the
OAuth 2.0 framework .
How to get help with authentication
Action
Instructions
Authenticate to Vertex AI in express mode
( Preview ).
Use the API key created for you during the sign-on process to
authenticate to Vertex AI. For more information, see
Vertex AI in express mode overview .
Authenticate to a Google Cloud service from my application using
a high-level programming language.
Set up Application Default Credentials ,
and then use one of the
Cloud Client Libraries .
Authenticate to an application that requires an ID token.
Get an OpenID Connect (OIDC) ID token
and provide it with your request.
Implement user authentication for an application that accesses Google
or Google Cloud services and resources.
See
Authenticate application users
for a comparison of options.
Try out some gcloud commands in my local development
environment.
Initialize the gcloud CLI .
Try out some Google Cloud REST API
requests in my local development environment.
Use a command-line tool such as curl to
call the REST API .
Try out a code snippet included in my product documentation.
Set up ADC for a local development environment ,
and install your product's client library in your local environment. The
client library
finds your credentials automatically .
Get help with another authentication use case.
See the
Authentication use cases
page.
See a list of the products Google provides in the identity and access
management space.
See the
Google identity and access management products
page.
Choose the right authentication method for your use case
When you access Google Cloud services by using the Google Cloud CLI, Cloud Client Libraries,
tools that support
Application Default Credentials (ADC)
like Terraform, or REST requests, use the following diagram to help you choose an authentication
method:
This diagram guides you through the following questions:
Are you running code in a single-user development environment, such as your own workstation,
Cloud Shell, or a virtual desktop interface?
If yes, proceed to question 4.
If no, proceed to question 2.
Are you running code in Google Cloud?
If yes, proceed to question 3.
If no, proceed to question 5.
Are you running containers in Google Kubernetes Engine?
If yes, use
Workload Identity Federation for GKE
to attach service accounts to Kubernetes pods.
If no,
attach a service account
to the resource.
Does your use case require a service account?
For example, you want to configure authentication and authorization consistently for your
application across all environments.
If no,
authenticate with user credentials .
If yes,
impersonate a service account with user credentials .
Does your workload authenticate with an external identity provider that supports
workload identity federation ?
If yes,
configure Workload Identity Federation
to let applications running on-premises or on other cloud providers use a service account.
If no,
create a service account key .
Authorization methods for Google Cloud services
Authorization for Google Cloud is primarily handled by
Identity and Access Management (IAM) . IAM offers granular
control by principal and by resource.
You can apply another layer of authorization with
OAuth 2.0 scopes. When you
authenticate to a Google Cloud service, you can use a global scope that
authorizes access to all Google Cloud services
( https://www.googleapis.com/auth/cloud-platform ), or, if a service supports
it, you can restrict access with a more limited scope. Limited scopes can
help to reduce risk if your code is running in environments where compromised
tokens might be a concern, such as mobile apps.
The authorization scopes that are accepted by an API method are listed in the
API reference documentation for each Google Cloud service.
Application Default Credentials
Application Default Credentials (ADC) is a strategy used by the authentication libraries to automatically find
credentials based on the application environment. The authentication libraries make those
credentials available to
Cloud Client Libraries and Google API Client Libraries .
When you use ADC, your code can run in either a development or production environment without
changing how your application authenticates to Google Cloud services and APIs.
Using ADC can simplify your development process, because it lets you use the
same authentication code in a variety of environments. If you're using a service
in express mode, however, you don't need to use ADC.
Before you can use ADC, you must provide your credentials to ADC ,
based on where you want your code to run. ADC
automatically locates credentials and gets a token in the background,
enabling your authentication code to run in different environments without
modification. For example, the same version of your code could authenticate with
Google Cloud APIs when running on a development workstation or on
Compute Engine.
Your gcloud credentials are not the same as the credentials you provide to ADC using the
gcloud CLI. For more information, see
gcloud CLI authentication configuration and ADC configuration .
Terminology
The following terms are important to understand when discussing authentication
and authorization.
Authentication
Authentication is the process of determining the identity of the principal
attempting to access a resource.
Authorization
Authorization is the process of determining whether the principal or application
attempting to access a resource has been authorized for that level of access.
Credentials
When this document uses the term user account , it refers to a Google Account,
or a user account managed by your identity provider and federated with
Workforce Identity Federation .
For authentication, credentials are a digital object that provide proof of
identity. Passwords, PINs, and biometric data can all be used as credentials,
depending on the application requirements. For example, when you log into your
user account, you provide your password and satisfy any two-factor
authentication requirement as proof that the account in fact belongs to you, and
you are not being spoofed by a bad actor.
Tokens are not credentials. They are a digital object that proves that
the caller provided proper credentials.
The type of credential you need to provide depends on what you are
authenticating to.
The following types of credentials can be created in the
Google Cloud console:
API keys
You can use API keys with APIs that accept them to access the API. API
keys that are not bound to a service account provide a project, which is
used for billing and quota purposes. If the API key is bound to a service
account, the API key also provides the identity and authorization of the
service account ( Preview ).
For more information about API
keys, see API keys . For more
information about API keys that are bound to a service account, see the
Google Cloud express mode FAQ .
OAuth Client IDs
OAuth Client IDs are used to identify an application to
Google Cloud. This is necessary when you want to access resources
owned by your end users, also called three-legged OAuth (3LO). For more
information about how to get and use an OAuth Client ID, see
Setting up OAuth 2.0 .
Service account keys
Service account keys identify a principal (the service account) and the
project associated with the service account.
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
You can also create credentials by using the gcloud CLI. These
credentials include the following types:
Local ADC files
Credential configurations used by
Workload Identity Federation
Credential configurations used by Workforce Identity Federation
Note: If you are accepting credential configurations (JSON, files, or streams)
created by an external organization, you must validate the credential
configuration before you use it. For more information, see Security
requirements when using credential configurations from an external source .
Principal
A principal is an identity that can be granted access
to a resource. For authentication, Google APIs support two types of principals:
user accounts and service accounts .
Whether you use a user account or a service account to authenticate depends on
your use case. You might use both, each at different stages of your project or
in different development environments.
User accounts
User accounts represent a developer, administrator, or any other person who
interacts with Google APIs and services.
User accounts are managed as Google Accounts ,
either with Google Workspace or
Cloud Identity . They can also be user accounts that are managed
by a third-party identity provider and federated with
Workforce Identity Federation .
With a user account, you can authenticate to Google APIs and services in the
following ways:
Use the gcloud CLI to
set up Application Default Credentials (ADC) .
Use your user credentials to
sign in to the Google Cloud CLI , and then use the tool to
access Google Cloud services.
Use your user credentials to impersonate a service account .
Use your user credentials to
sign in to the Google Cloud CLI , and then use the tool to
generate access tokens .
For an overview of ways to configure identities for users in Google Cloud,
see Identities for users .
Service accounts
Service accounts are accounts that do not
represent a human user. They provide a way to manage authentication and
authorization when a human is not directly involved, such as when an application
needs to access Google Cloud resources. Service accounts are managed by
IAM.
The following list provides some methods for using a service account to
authenticate to Google APIs and services, in order from most secure to least
secure. For more information, see
Choose the right authentication method for your use case
on this page.
Attach a user-managed service account to the resource and
use ADC to authenticate .
This is the recommended way to authenticate production code running on
Google Cloud.
Use a service account to impersonate another service account .
Service account impersonation lets you temporarily grant more privileges to
a service account. Granting extra privileges on a temporary basis enables
that service account to perform the required access without having to
permanently acquire more privilege.
Use Workload Identity Federation to authenticate workloads that run
on-premises or on a different cloud provider.
Use the default service account .
Using the default service account isn't recommended because it's highly privileged by default, which violates the principle of least privilege .
Use a service account key .
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
For an overview of ways to configure workload identities, including service
accounts, for Google Cloud,
see Identities for workloads . For best practices,
see Best practices for using service accounts .
Token
For authentication and authorization, a token is a digital object that shows
that a caller provided proper credentials that were exchanged for that token.
The token contains information about the identity of the principal making the
request and the type of access they're authorized for.
Tokens can be thought of as being like hotel keys. When you check in to a hotel
and present the proper documentation to the hotel registration desk, you receive
a key that gives you access to specific hotel resources. For example, the key
might give you access to your room and the guest elevator, but would not give
you access to any other room or the service elevator.
With the exception of API keys, Google APIs do not support credentials directly.
Your application must acquire or generate a token and provide it to the API.
There are several different types of tokens. For more information, see
Tokens overview .
Workload and workforce
Google Cloud identity and access products enable access to
Google Cloud services and resources for both programmatic access and human
users. Google Cloud uses the terms workload for programmatic access and
workforce for user access.
Workload Identity Federation lets you provide access to
on-premises or multi-cloud workloads without having to create and manage
service account keys.
Workforce Identity Federation lets you use an external identity provider
to authenticate and authorize a workforce—a group of users, such as employees,
partners, and contractors—using IAM, so that the users can access
Google Cloud services.
What's next
Learn more about how Google Cloud services
use IAM to control access to Google Cloud resources .
Understand how Application Default Credentials works , and
how you can set it up for a variety of development environments .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
