---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.900Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Password policies"
feature_slug: "password-policies"
latest_feature_date: "2022-07-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication"
  - "https://docs.cloud.google.com/sql/docs/mysql/create-manage-users"
  - "https://docs.cloud.google.com/sql/docs/mysql/authentication"
keywords:
  - "password"
  - "policies"
  - "sql"
  - "for"
  - "mysql"
  - "supports"
  - "at"
  - "the"
---

# Password policies

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports password policies at the instance and user levels for built-in authentication.

## Extended Definition

Cloud SQL for MySQL supports password policies at the instance and user levels for built-in authentication.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication](https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication)
- [https://docs.cloud.google.com/sql/docs/mysql/create-manage-users](https://docs.cloud.google.com/sql/docs/mysql/create-manage-users)
- [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication)

## Supporting Pages

### "Cloud SQL built-in database authentication \_|\_ Cloud SQL for MySQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication](https://docs.cloud.google.com/sql/docs/mysql/built-in-authentication)
- Source ID: `site-iam-reference`
- Final score: 328
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- MySQL PostgreSQL SQL Server This page describes how built-in authentication works on Cloud SQL instances and how database administrators can set password policies for local database users.
- Cloud SQL built-in authentication for read replicas You manage password policies for replicas on the primary instance.
- Cloud SQL uses the following types of authentication for database users: The database's built-in authentication uses a username and a password to authenticate local database users.
- Note: User password policy options are supported on Cloud SQL for MySQL 8.0 and later.

### "Manage users with built-in authentication \_|\_ Cloud SQL for MySQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-manage-users](https://docs.cloud.google.com/sql/docs/mysql/create-manage-users)
- Source ID: `site-docs-root`
- Final score: 294
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PUT -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /users?name= user-id " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "status": "DONE", "user": "user@example.com", "insertTime": "2020-02-07T22:38:41.217Z", "startTime": "2020-02-07T22:38:41.217Z", "endTime": "2020-02-07T22:38:44.801Z", "operationType": "UPDATE USER", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } mysql Client To change the password, at the mysql prompt, use the following SET PASSWORD statement: SET PASSWORD FOR USER NAME = PASSWORD ( 'auth string' ); Flush the mysql.user table to ensure that the change persists: FLUSH TABLES mysql . user ; If a user is locked out due to password policy settings, change the password to unlock them.
- Before using any of the request data, make the following replacements: PROJECT ID : your project ID INSTANCE ID : the instance ID USER ID : the ID of the user PASSWORD : the password of the user FAILED ATTEMPTS CHECK : set to true to enable a check for the number of failed attempts to log in after which the account is locked NUMBER OF ATTEMPTS : the number of failed attempts to log in after which the account is locked PASSWORD EXPIRATION DURATION : the number of days after which the password expires and the user needs to create a new one VERIFY PASSWORD : set to true to make it mandatory for users to enter their existing password when attempting to change the password User password policy options are supported on Cloud SQL for MySQL 8.0.
- Before using any of the request data, make the following replacements: PROJECT ID : your project ID INSTANCE ID : the instance ID USER ID : the ID of the user PASSWORD : the password of the user FAILED ATTEMPTS CHECK : set to true to enable a check for the number of failed attempts to log in after which the account is locked NUMBER OF ATTEMPTS : the number of failed attempts to log in after which the account is locked PASSWORD EXPIRATION DURATION : the number of days after which the password expires and the user needs to create a new one VERIFY PASSWORD : set to true to make it mandatory for users to enter their existing password when attempting to change the password User password policy options are supported on Cloud SQL for MySQL 8.0.
- The --password-policy-password-expiration-duration option is also supported on Cloud SQL for MySQL 5.7. gcloud sql users set-password-policy USER NAME \ --instance = INSTANCE NAME \ --host = HOST \ --password-policy-enable-failed-attempts-check \ --password-policy-allowed-failed-attempts = PASSWORD POLICY ALLOWED FAILED ATTEMPTS \ --password-policy-password-expiration-duration = PASSWORD POLICY PASSWORD EXPIRATION DURATION \ --password-policy-enable-password-verification To remove a user password policy, use the --clear-password-policy parameter. gcloud sql users set-password-policy USER NAME \ --instance = INSTANCE NAME \ --host = HOST \ --clear-password-policy To view the user password policy, see List users .

### IAM authentication \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication)
- Source ID: `site-docs-root`
- Final score: 290
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- In Cloud SQL, you can use the following types of database authentication for database users: The database's built-in authentication uses a username and password to authenticate a database user.
- Note: If you're using Workforce Identity Federation , database authentication for user logins isn't supported for Cloud SQL for MySQL databases.
- Automatic versus manual IAM database authentication Cloud SQL for MySQL has two options for IAM database authentication: automatic and manual.
- IAM database authentication is not supported for instances that use MySQL 5.6.

