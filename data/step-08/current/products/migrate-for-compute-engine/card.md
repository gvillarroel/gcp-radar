# Migrate for Compute Engine

Schema version: `step-08-product-feature-cards-v1`
Generated at: `2026-05-05T20:05:36.019Z`
Product status: `PASS`

## Summary

- Feature cards: 14
- Step 07 failed features: 0
- Step 07 warned features: 0
- Corpus health: healthy
- IAM mapping: 0 explicit, 0 derived, 14 unknown

## Service Card

- Service card ID: `migrate-for-compute-engine:service`
- Latest feature date: 2021-02-09
- Official source links: 6
- Security capabilities: 14

## Features

| Feature | Coverage | Gate | IAM | Sources |
| --- | --- | --- | --- | --- |
| Balanced disk type support in GcpDiskType | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle)<br>[source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices)<br>[source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions) |
| Automatic license assignment for offline migration | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle)<br>[source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices)<br>[source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started) |
| Automatic VDDK max open sessions adjustment | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices)<br>[source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started)<br>[source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions) |
| Google Cloud OS Config agent auto-deployment | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle)<br>[source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices)<br>[source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started) |
| Manager and Cloud Extensions connectivity over port 443 | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices)<br>[source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started)<br>[source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions) |
| Secret Manager integration | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/architecture)<br>[source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices)<br>[source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started) |
| vCenter certificate update flow support | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle)<br>[source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices)<br>[source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions) |
| Windows Server BYOL upgrade | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices)<br>[source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started)<br>[source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions) |
| Azure to Google Cloud migration | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/architecture)<br>[source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle)<br>[source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started) |
| Reduced network connectivity between Cloud Extensions and Manager | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices)<br>[source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started)<br>[source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/supported-os-versions) |
| System upgrade and patch management | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/architecture)<br>[source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices)<br>[source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started) |
| Shielded VM Secure Boot | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle)<br>[source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices)<br>[source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started) |
| UEFI VM migration support | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle)<br>[source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices)<br>[source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started) |
| Windows Server 2019 migration support | MEDIUM | PASS | unknown | [source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/lifecycle)<br>[source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-best-practices)<br>[source](https://docs.cloud.google.com/migrate/virtual-machines/docs/5.0/discover/migrating-vms-migrate-for-compute-engine-getting-started) |
