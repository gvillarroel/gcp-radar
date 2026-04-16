---
title: "Configure email notifications \_|\_ Cloud Composer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-1/configure-email
knowledge_key: corpus
source_id: site-docs-reference-required-8
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-1/known-issues
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-1/configure-email
  title: "Configure email notifications \_|\_ Cloud Composer \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

On September 15, 2026 , all Cloud Composer 1 versions and versions 2.0.x of Cloud Composer 2 will reach their planned end of life . You will not be able to use environments with these versions. We recommend planning migration to Cloud Composer 3 . Cloud Composer 2 versions 2.1.x and later are still supported and are not impacted by this change.
Home
Documentation
Data analytics
Cloud Composer
Composer 1 Guides
Send feedback
Configure email notifications
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
This page explains how to configure SMTP services for your
Cloud Composer environment.
Before you begin
If your Cloud Composer environment is
configured for Private IP , make sure that it has
connectivity to the API endpoint for your external email service (such as
https://api.sendgrid.com , or your preferred SMTP server).
Configure SendGrid email services
To receive notifications, configure your environment variables
to send email through the SendGrid email service.
Sign up with SendGrid
If you haven't already, sign up with SendGrid in Google Cloud console, click
Manage On Provider to go to the SendGrid domain, and click Settings to retrieve
your username and to create an API key. As a Google Cloud developer, you can
start with 12,000 free emails per month.
Go to SendGrid Email API
Configure variables
SendGrid uses the API key and a From email address for sending mail. You
can provide this information with one of the following options:
(Recommended)
Store values in Secret Manager
Note: This option is available in Airflow 2.1.4 and later versions. In
Airflow versions from 2.1.4 to 2.2.3, you still need to use an environment
variable to set the email address, but you can store the SendGrid API key in
a secret.
Store values in Airflow
Caution: If you use this option, the value for the SendGrid API key is
stored in an Airflow connection.
Store values in Secret Manager
To store values in Secret Manager:
Configure Secret Manager for your
environment. Make sure to set up permissions and Airflow configuration
options for the secrets backend.
Override the following Airflow configuration options:
Section
Key
Value
email
email_conn_id
sendgrid_default
email
email_backend
airflow.providers.sendgrid.utils.emailer.send_email
Create a secret for the SendGrid connection named
airflow-connections-sendgrid_default . Set the secret's value to the
connection URI. For example:
sendgrid://<username>:<sendgrid_api_key>@smtp.sendgrid.net:587
For more information about storing connections in
Secret Manager, see
Manage Airflow connections .
Configure the email address for SendGrid. It's not possible to set up the
email address through a secret. Instead, override the
following Airflow configuration option:
Section
Key
Value
email
from_email
The From email address, such as noreply@example.com .
Deprecated: In Airflow versions 2.1.4 to 2.1.3,
set the SENDGRID_MAIL_FROM environment variable instead of
overriding the Airflow configuration option.
Store values in Airflow
Override the following Airflow configuration options:
Section
Key
Value
email
email_conn_id
sendgrid_default
email
email_backend
airflow.providers.sendgrid.utils.emailer.send_email
In Airflow, configure the connection
named sendgrid_default . Specify the Sendgrid API key in the connection
URI. For example:
gcloud composer environments run ENVIRONMENT_NAME \
--location LOCATION \
connections add -- \
--conn-uri "sendgrid:// USERNAME : SENDGRID_API_KEY @smtp.sendgrid.net:587" \
sendgrid_default
Replace the following:
ENVIRONMENT_NAME : the name of your environment.
LOCATION : the region where the environment is located.
USERNAME : the SendGrid username.
SENDGRID_API_KEY : the SendGrid API key.
Configure the email address for SendGrid. It's not possible to set up the
email address through a secret. Instead, override the
following Airflow configuration option:
Section
Key
Value
email
from_email
The From email address, such as noreply@example.com .
Deprecated: In Airflow versions 2.1.4 to 2.1.3,
set the SENDGRID_MAIL_FROM environment variable instead of
overriding the Airflow configuration option.
Test your SendGrid configuration
To test SendGrid configuration:
Create a test DAG that uses the EmailOperator . For example:
import datetime
import airflow
from airflow.operators.email import EmailOperator
with airflow . DAG (
"composer_sample_sendgrid" ,
start_date = datetime . datetime ( 2022 , 1 , 1 ),
) as dag :
task_email = EmailOperator (
task_id = "send-email" ,
conn_id = "sendgrid_default" ,
# You can specify more than one recipient with a list.
to = "user@example.com" ,
subject = "EmailOperator test for SendGrid" ,
html_content = "This is a test message sent through SendGrid." ,
dag = dag ,
)
Upload the DAG to your environment and check that
the task succeeds.
Sign in to SendGrid in with your SendGrid credentials.
In the SendGrid UI, go to Activity page.
Search the list for the email. You should see that SendGrid processed
and delivered the email.
If the email is not processed and delivered:
Check your SendGrid configuration.
Verify that you enabled the Secret Manager backend. Make
sure that you granted extra permissions and set overrides for Airflow
configuration options.
Check the spam filter in your email client.
Configure third-party SMTP services
To send email through a third-party SMTP service,
override the email_backend Airflow configuration option
and configure other SMTP-related parameters.
Note: Using a third-party SMTP service requires setting an SMTP password.
Cloud Composer does not support configuring
the smtp_password because the value is stored in plain text in airflow.cfg
and considered non-secure. See Configuring an SMTP password
to learn about setting an SMTP password in a more secure way.
To configure a third-party SMTP service, override the following Airflow configuration options:
Section
Key
Value
email
email_backend
airflow.utils.email.send_email_smtp
smtp
smtp_host
The hostname for the SMTP server.
smtp
smtp_user
The username on the SMTP server.
smtp
smtp_port
The port for the SMTP server. Port 25 is not available. You can use other ports, such as standard SMTP ports 465 and 587.
smtp
smtp_password
Setting a password via smtp_password is not supported. To set an SMTP password, follow instructions provided in Configuring an SMTP password .
smtp
smtp_mail_from
The From email address, such as noreply-composer@ .
smtp
smtp_starttls
For enhanced security, set to True .
smtp
smtp_ssl
For enhanced security, set to True .
Configure an SMTP password for a third-party SMTP service
Keeping an SMTP password in plain text in Airflow configuration file is a bad
security practice. That's why Cloud Composer does not support
this method. Instead, you can use two other methods for configuring an SMTP
password.
Using a command to retrieve the SMTP password
It is not possible to retrieve the SMTP password using a command in
Cloud Composer 1. Providing password through a command will trigger an
error when accessing Admin > Configuration in the
Airflow UI.
Using a secret stored in Secret Manager to retrieve an SMTP password
You can configure Secret Manager as your
Airflow secrets backend.
Note: If the smtp_ssl Airflow configuration option is set to True for your
environment, then disable this override if you get the
SSL_WRONG_VERSION_NUMBER error.
Once you configure Secret Manager for your Composer
environment, you can store an SMTP password in Secret Manager:
Create a new secret:
echo -n " SMTP_PASSWORD " | gcloud beta secrets create \
airflow-config-smtp-password \
--data-file = - \
--replication-policy = automatic
Replace SMTP_PASSWORD with your SMTP password.
Configure Airflow to obtain the SMTP password from
Secret Manager. To do so, override
the following Airflow configuration option:
Section
Key
Value
smtp
smtp_password_secret
smtp-password
What's next
Override Airflow configuration options
Set environment variables
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
