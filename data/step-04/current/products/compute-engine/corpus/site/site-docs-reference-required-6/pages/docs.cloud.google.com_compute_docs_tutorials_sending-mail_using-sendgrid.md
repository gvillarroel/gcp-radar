---
title: "Sending email with SendGrid \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/compute/docs/tutorials/sending-mail/using-sendgrid
knowledge_key: corpus
source_id: site-docs-reference-required-6
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/access/organization-policies
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/tutorials/sending-mail/using-sendgrid
  title: "Sending email with SendGrid \_|\_ Compute Engine \_|\_ Google Cloud Documentation"
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
Sending email with SendGrid
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial shows how to use SendGrid to send email from an app running on a
Compute Engine virtual machine (VM) instance.
Objectives
Use SendGrid with Postfix on a Compute Engine instance.
Use SendGrid in Java code running on a Compute Engine instance.
Use SendGrid in Node.js code running on a Compute Engine instance.
Use SendGrid with a Microsoft Exchange edge transport server on a Compute Engine instance.
For other information about setting up SendGrid, see the SendGrid developer
documentation .
Costs
In this document, you use the following billable components of Google Cloud:
Compute Engine
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
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
In the Google Cloud console, go to the
Create an instance page.
Go to Create an instance
Set Name to sendgrid-tutorial .
In the OS and Storage section, click Change
to begin configuring your boot disk.
On the Public images tab, choose a Debian or CentOS image version .
Click Select .
To create the VM, click Create .
Use the
Google Cloud Marketplace
to sign up for the SendGrid email service. Make a note of your SendGrid SMTP
account credentials, which include username, password, and hostname. Your
SMTP username and password are the same as what you used to sign up for the
service. The SendGrid hostname is smtp.sendgrid.net .
Create an API key:
Sign in to SendGrid
and go to Settings > API Keys .
Create an API key.
Select the permissions for the key. At a minimum, the key must have
Mail send permissions to send email.
Click Save to create the key.
SendGrid generates a new key. This is the only copy
of the key, so make sure that you copy the key and save it for later.
Sending mail from your instance with Postfix
Complete the following steps to connect to your sendgrid-tutorial
instance and run SendGrid with
Postfix .
Note: The SendGrid documentation provides a set of instructions for
Postfix installation and setup. If you run into
issues setting up Postfix with SendGrid, review the
SendGrid Postfix
instructions.
Connect to your sendgrid-tutorial instance using SSH
In the Google Cloud console, go to the
VM instances page.
Go to VM instances
In the list of virtual machine instances, click SSH in the row of
the instance that you want to connect to.
Configuring SendGrid as an SMTP relay with Postfix
Run the following commands in your SSH terminal to use SendGrid as an SMTP
relay with Postfix.
Become a superuser:
sudo su -
Set a safe umask:
umask 077
Install the Postfix Mail Transport Agent:
Debian
apt update && apt -y install postfix libsasl2-modules
CentOS
yum install postfix cyrus-sasl-plain cyrus-sasl-md5 -y
If prompted, select the Local Only configuration and accept the
default domain name.
Modify the Postfix configuration options. Open /etc/postfix/main.cf for
editing. For example, to use the nano text editor, enter the following
command:
nano /etc/postfix/main.cf
Update the file:
Comment out the following lines:
# default_transport = error
# relay_transport = error
Add the following lines to the end of the file:
relayhost = [smtp.sendgrid.net]:2525
smtp_tls_security_level = encrypt
smtp_sasl_auth_enable = yes
smtp_sasl_password_maps = hash:/etc/postfix/sasl_passwd
header_size_limit = 4096000
smtp_sasl_security_options = noanonymous
The above lines enforce SSL/TLS support and configure SMTP
authentication for these requests. A simple access and security layer
(SASL) module handles authentication in the Postfix configuration.
Save and close the file.
Generate the SASL password map using the API key you generated in the
Before you begin section. Replace
your-api-key with the API key you generated.
echo [smtp.sendgrid.net]:2525 apikey: your-api-key >> /etc/postfix/sasl_passwd
Use the postmap utility to generate a .db file:
postmap /etc/postfix/sasl_passwd
Verify that you have a .db file:
ls -l /etc/postfix/sasl_passwd*
-rw------- 1 root root ... /etc/postfix/sasl_passwd
-rw------- 1 root root ... /etc/postfix/sasl_passwd.db
Remove the file containing your credentials because it is no longer needed:
rm /etc/postfix/sasl_passwd
Set the permissions on your .db file and verify that the other file was
removed:
chmod 600 /etc/postfix/sasl_passwd.db
ls -la /etc/postfix/sasl_passwd*
-rw------- 1 root root ... /etc/postfix/sasl_passwd.db
Reload your configuration to load the modified parameters:
Debian
/etc/init.d/postfix restart
CentOS
postfix reload
Install the mailutils or mailx package:
Debian
apt -y install mailutils
CentOS
yum install mailx -y
Send a test email:
echo ' message ' | mail -s subject email@example.com
Replace the following:
message : The body of the email.
subject : The subject of the email.
email@example.com : The email address that you
want to send a message to.
Look in your system logs for a status line containing status and the
successful server response code (250) :
Debian
tail - n 5 / var / log / syslog
CentOS
tail - n 5 / var / log / maillog
Sending mail with Java on your instance
Connect to your sendgrid-tutorial instance using SSH
In the Google Cloud console, go to the
VM instances page.
Go to VM instances
In the list of virtual machine instances, click SSH in the row of
the instance that you want to connect to.
Construct and send an email message
The following instructions use the SendGrid
Java client library
to construct and send an email message through SendGrid. You can view the full
example on
GitHub .
In your SSH terminal:
Become a superuser and set a safe umask:
sudo su -
umask 077
Install Java and Maven:
apt -y update && apt -y install git-core openjdk-11-jdk maven
Clone the GitHub repo:
git clone https://github.com/GoogleCloudPlatform/java-docs-samples.git
Go to the main source code for the example:
cd /root/java-docs-samples/compute/sendgrid/src/main/java/com/example/compute/sendgrid
Open SendEmailServelet.java for editing.
Replace your-sendgrid-api-key with the
API key
for your SendGrid account.
Replace your-sendgrid-from-email
with the email address you want to send mail from.
Replace destination-email with the
email address you want to send mail to.
Go to the root directory of the sample code:
cd /root/java-docs-samples/compute/sendgrid
Package the Java class:
mvn clean package
Go to the new target directory:
cd target
Set permissions that let you execute the jar file:
chmod +x compute-sendgrid-1.0-SNAPSHOT-jar-with-dependencies.jar
Run the alternative Java version selector:
update-alternatives --config java
Select the java-11-openjdk-amd64 option.
Execute the Java file:
java -jar compute-sendgrid-1.0-SNAPSHOT-jar-with-dependencies.jar
Sending mail with Node.js on your instance
To run this sample, you must have Node.js version 7.6 or later installed
on the VM instance.
Connect to your sendgrid-tutorial instance using SSH
In the Google Cloud console, go to the
VM instances page.
Go to VM instances
In the list of virtual machine instances, click SSH in the row of
the instance that you want to connect to.
Construct and send an email message
In your SSH terminal:
Become a superuser and set a safe umask:
sudo su -
umask 077
Update your package repositories:
Debian
apt update
CentOS
yum update -y
Install Node.js dependencies:
Debian
apt -y install git-core curl build-essential openssl libssl-dev
CentOS
yum install git-core curl openssl openssl-devel -y
yum groupinstall "Development Tools" -y
Install Node.js .
By default, the installation also installs npm :
Debian
curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
sudo apt -y install nodejs
CentOS
curl --silent --location https://rpm.nodesource.com/setup_14.x | bash -
Then, install Node.js:
yum -y install nodejs
Install the SendGrid Node.js client:
npm install sendgrid
Clone the sample repository:
git clone https://github.com/GoogleCloudPlatform/nodejs-docs-samples.git
Go to the directory that contains the SendGrid sample:
cd nodejs-docs-samples/compute
Copy the sendgrid.js file:
cp sendgrid.js sendmail.js
Open sendmail.js for editing.
Replace your-sendgrid-api-key with the
API key
for your SendGrid account.
Replace from-email@example.com with the
email address that you want to send mail from.
Replace to-email@example.com with the
email address that you want to send mail to.
// This sample is based off of:
// https://github.com/sendgrid/sendgrid-nodejs/tree/master/packages/mail
const sendgrid = require ( '@sendgrid/mail' );
sendgrid . setApiKey ( process . env . SENDGRID_API_KEY || '<your-sendgrid-api-key>' );
async function sendgridExample () {
await sendgrid . send ({
to : 'to_email@example.com' ,
from : 'from_email@example.com' ,
subject : 'Sendgrid test email from Node.js on Google Cloud Platform' ,
text : 'Well hello! This is a Sendgrid test email from Node.js on Google Cloud Platform.' ,
});
}
sendgridExample ();
Run the program to send an email message through SendGrid:
node sendmail.js
Sending mail from an Exchange edge transport server
You can set up Microsoft Exchange to send outbound email with SendGrid
by configuring an outbound send connector. For details, see
Deploying Microsoft Exchange Server 2016 on Compute Engine .
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
Delete the project
The easiest way to eliminate billing is to delete the project that you
created for the tutorial.
To delete the project:
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple architectures, tutorials, or quickstarts, reusing projects
can help you avoid exceeding project quota limits.
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
Delete your Compute Engine instance
To delete a Compute Engine instance:
In the Google Cloud console, go to the
VM instances page.
Go to VM instances
Select the checkbox for
your sendgrid-tutorial instance.
To delete the instance, click more_vert More actions , click Delete ,
and then follow the instructions.
What's next
Explore reference architectures, diagrams, and best practices about Google Cloud.
Take a look at our
Cloud Architecture Center .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
