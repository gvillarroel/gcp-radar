---
title: "Sending email with Mailgun \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/tutorials/sending-mail/using-mailgun
knowledge_key: corpus
source_id: site-docs-reference-required-8
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/instance-groups/distributing-instances-with-regional-instance-groups
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/tutorials/sending-mail/using-mailgun
  title: "Sending email with Mailgun \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Guides
Send feedback
Sending email with Mailgun
Stay organized with collections
Save and categorize content based on your preferences.
Google Cloud works with Mailgun to provide an email service that has a
programmatic API, log retention, email personalization, analytics, and email
validation.
The following instructions show you how to configure Mailgun as an email relay
with Postfix.
Before you begin
Sign up for and create a new Mailgun account on the
Google Cloud Marketplace .
Get your credentials. The instructions require that you know your Mailgun
SMTP username, password, and hostname. Get your username and password from
the Mailgun control panel, under the Domains section.
Depending on how the domain is configured in Mailgun, the SMTP hostname is
either smtp.mailgun.org or smtp.eu.mailgun.org .
Configure your firewall rules
to allow outgoing traffic on TCP port 2525 .
Configuring Mailgun as a mail relay with Postfix
Configuring Mailgun as a mail relay allows the
Postfix mail transfer agent to
forward emails destined for remote delivery.
Connect to your instance using SSH.
gcloud compute ssh [ INSTANCE_NAME ]
where [INSTANCE_NAME] is the name of the VM instance where you want to
send email from.
Become a superuser and set a safe umask.
user@test-instance:~$ sudo su -
root@test-instance:~# umask 077
Install the Postfix Mail Transport Agent.
Debian
root@test-instance:~# apt update && apt -y install postfix libsasl2-modules
CentOS
root@test-instance:~# yum install postfix cyrus-sasl-plain cyrus-sasl-md5 -y
When prompted, select the Local Only configuration and accept the default
choices for domain names.
Modify the Postfix configuration options. Postfix configuration options are
set in the main.cf file. Open the file with the text editor of your choice.
root@test-instance:~# vi /etc/postfix/main.cf
If they exist, comment out the following lines.
# default_transport = error
# relay_transport = error
Add the Mailgun SMTP service by adding the following line to the end of the
file.
relayhost = [smtp.mailgun.org]:2525
Note: You must use port 2525 because port 25 isn't allowed on
Compute Engine.
To enforce SSL/TLS support and configure SMTP authentication for these
requests, add the following lines to the end of the file. A simple access and
security layer (SASL) module handles authentication in the Postfix
configuration.
smtp_tls_security_level = encrypt
smtp_sasl_auth_enable = yes
smtp_sasl_password_maps = hash:/etc/postfix/sasl_passwd
smtp_sasl_security_options = noanonymous
Save your changes and close the file.
Generate the SASL password map.
Create a new password file that is ready for standard input.
root@test-instance:~# cat > /etc/postfix/sasl_passwd
At the prompt, enter the service details, replacing YOUR_SMTP_LOGIN and
YOUR_SMTP_PASSWORD with your credentials. See the Mailgun
help
for instructions on how to view or change your per-domain credentials.
> [smtp.mailgun.org]:2525 YOUR_SMTP_LOGIN:YOUR_SMTP_PASSWORD
Close and save the file by typing the delimiter, EOF .
> EOF
Use the postmap utility to generate a .db file.
root@test-instance:~# postmap /etc/postfix/sasl_passwd
root@test-instance:~# ls -l /etc/postfix/sasl_passwd*
-rw------- 1 root root 68 Jun 1 10:50 /etc/postfix/sasl_passwd
-rw------- 1 root root 12288 Jun 1 10:51 /etc/postfix/sasl_passwd.db
Next, remove the file that contains your credentials because it is no longer
needed.
root@test-instance:~# rm /etc/postfix/sasl_passwd
Set the permissions on your .db file.
root@test-instance:~# chmod 600 /etc/postfix/sasl_passwd.db
root@test-instance:~# ls -la /etc/postfix/sasl_passwd.db
-rw------- 1 root root 12288 Aug 31 18:51 /etc/postfix/sasl_passwd.db
Finally, reload your configuration to load the modified parameters.
Debian
root@test-wheezy:~# /etc/init.d/postfix restart
CentOS
[root@test-centos ~]# postfix reload
Test your configuration. Install the mailx or mailutils package and test
your configuration.
Debian
root@test-wheezy:~# apt -y install mailutils
CentOS
[root@test-centos ~]# yum install mailx -y
Send a test message.
root@test-instance:~# echo 'Test passed.' | mail -s 'Test-Email' EMAIL@EXAMPLE.COM
Look in your systems logs for a status line containing status and the
successful server response code (250) .
Debian
root@test-wheezy:~# tail -n 5 /var/log/syslog
CentOS
[root@test-centos ~]# tail -n 5 /var/log/maillog
For detailed examples and information about other topics including
tracking and routing messages, read the
Mailgun documentation .
Explore reference architectures, diagrams, and best practices about Google Cloud.
Take a look at our
Cloud Architecture Center .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
