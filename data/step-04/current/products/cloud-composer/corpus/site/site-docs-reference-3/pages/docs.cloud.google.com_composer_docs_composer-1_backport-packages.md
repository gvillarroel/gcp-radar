---
title: "Import operators from backport provider packages \_|\_ Cloud Composer \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-1/backport-packages
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-1/access-airflow-web-interface
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-1/backport-packages
  title: "Import operators from backport provider packages \_|\_ Cloud Composer \_\
    |\_ Google Cloud Documentation"
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
Import operators from backport provider packages
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
This page explains what Airflow backport provider packages are and how you can use them in your DAGs.
Backport provider packages are Airflow 2 versions of operators, transfers,
sensors, hooks, and secrets that are packaged as PyPI modules.
To simplify things, this document focuses just on operators. You can use all
other content from a backport package in the same way as shown for operators.
Backport provider packages solve an important problem: you can get new
features and security updates for operators, transfers, sensors, and hooks
without upgrading your Airflow environment to a later version. For example,
the provider package for Google
is available in Airflow 2. You can import operators from the
backported version
of this package in your Airflow 1.10.* environment.
Before Apache Airflow introduced the concept of backport provider packages,
operators were an integral part of Airflow. To get new versions of operators,
you needed a newer version of Airflow. This required upgrading your
Cloud Composer environment to a later version. Airflow 2 moves away
from this model and introduces provider packages. A provider package for
Airflow 2 is a PyPI module that contains operators, transfers, sensors, hooks,
and secrets for a specific provider (for example, Google). If you use Airflow
1.10.*, you can benefit from this change and use backported versions of
provider packages.
Note: Backport packages are only available for Python 3. You might also need
to update the way operators are called in your DAG code because backported
versions of operators often use a different syntax.
Use preinstalled backport packages
Some backport packages are already installed in Cloud Composer
images. You don't need to install these backport packages to your environment.
Just make sure that you import operators from a backport package in your DAG
code as described later on this page.
To check which backport packages are available in your environment, see
the list of packages
in the Cloud Composer image for your environment.
Each preinstalled backport package in your environment has a specific version.
If you want to use a different version,
update your environment
and specify the required version. We do not recommend to downgrade
preinstalled backport packages. Install an earlier version only if you
discover an issue with a later version. You cannot uninstall preinstalled
backport packages, only change the installed versions.
Install and upgrade backport packages
To install or upgrade a backport package:
Find the required backport package on PyPI.org .
Install or upgrade the package like any other PyPI package.
If required, install cross provider package dependencies. These are extra
dependencies that you might need to use all the features of the backport
package.
For example, to use SalesforceToGcsOperator from
apache-airflow-backport-providers-google , you need the [salesforce]
extra.
Install
apache-airflow-backport-providers-google and specify the [salesforce]
extra in the Extras and version field.
Note: To see a list of cross provider packages, go to the package's page
on on PyPI.org. Cross provider packages are listed in the "Cross provider
package dependencies" section.
Import operators from backport provider packages in DAGs
To see a list of contents in a backport package, go to the backport package
page on PyPI.org. For example, the page for
apache-airflow-backport-providers-google
lists operators, transfers, sensors, hooks, and secrets for this package.
Backport provider packages introduce new and moved operators and other
content. There is a difference between these two types of content, as
explained later.
Import new operators
New operators are those that don't exist in Airflow 1.10.*. If you try to
import such an operator without its backport package, you get an import error.
To use new operators from a backport package, import them from their
corresponding airflow.providers.* package, as described on the page for this
backport package on PyPI.org.
The following example imports new operators from the
apache-airflow-backport-providers-google
package:
from airflow.providers.google.cloud.operators.bigquery_dts import (
BigQueryCreateDataTransferOperator ,
BigQueryDeleteDataTransferConfigOperator ,
)
Import moved operators
Moved operators are those that already exist in Airflow 1.10.*. After you
install a backport operator package, you can import two different versions of
an operator. One version is bundled with Airflow, and another one is a moved
operator. To use a moved operator, import it by using a new import path.
Important: Moved operators from backport packages are still available by their
original paths in Airflow 1.10.*. If you import an operator by using its
original import path, your DAG uses the original version of the operator that
is bundled with Airflow.
To use moved operators from a backport package, import them from a
corresponding airflow.contrib.* package, as described on the page for this
backport package on PyPI.org.
The following example imports moved operators from the
apache-airflow-backport-providers-google
package:
from airflow.contrib.operators.bigquery_operator import (
BigQueryCreateEmptyDatasetOperator ,
BigQueryOperator ,
)
What's next
Writing DAGs
Installing PyPI packages
List of preinstalled packages in Cloud Composer images
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-09 UTC."],[],[]]
