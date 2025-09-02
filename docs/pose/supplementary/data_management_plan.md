NSF POSE Phase II — Data Management Plan

Project: PolicyEngine — Establishing a Sustainable Open‑Source Ecosystem

This Data Management Plan (DMP) follows NSF PAPPG 24‑1 (II.D.2.i–ii). It describes the data, software, and documentation that the project will generate; the standards and metadata used; policies for access, sharing, and reuse; and long‑term archiving and preservation. The project is an Open‑Source Ecosystem (OSE) enablement effort; accordingly, materials are open by default, with safeguards for any sensitive or third‑party data.

Types of data, software, and other materials produced
- Software and configurations: source code for rules engines, data pipelines, validation harnesses, CI/CD workflows, and site/documentation artifacts; configuration files (YAML/JSON); container recipes; small example datasets for tests and demonstrations.
- Derived, non‑confidential datasets: calibration outputs (e.g., weights by geography), synthetic example records, validation summaries and error metrics, comparison tables (e.g., across models), and public‑domain administrative aggregates used for benchmarking.
- Documentation and governance: contributor guides, API specifications, evaluation methods, governance records (RFCs, meeting notes), training materials, and diagrams.
- Project artifacts: issues, discussions, and metrics needed to run the OSE (e.g., contributor counts, release cadence, CI status). These are considered part of the open record of the ecosystem.
- Sensitive or restricted data (not redistributed): any confidential administrative microdata or records accessed under data use agreements (DUAs) only for validation (if used); raw interview notes from customer‑discovery activities that could identify individuals or institutions.

Standards, formats, and metadata
- Formats: text (Markdown, reStructuredText), CSV/Parquet/JSON for tabular data, YAML for configuration and metadata, SVG/PNG for diagrams, and container images (OCI). All formats are open and machine‑readable.
- Metadata: README files at dataset and code‑module levels describe provenance, schema, units, sample, processing steps, and citation. Data dictionaries (CSV/JSON) accompany tabular data. Release notes enumerate changes and breaking updates.
- Persistent identifiers and versioning: semantic versioning for software; Git tags for releases; DOIs minted via Zenodo for each public release (software and major datasets). Cross‑references include commit hashes and DOI badges in READMEs.
- Interoperability: when possible, adhere to relevant community schemas (e.g., tidy data principles for CSV, JSON Schema for JSON outputs). Scripts provide reproducible pipelines to regenerate derived datasets from public sources.

Policies for access and sharing
- Open by default: software, documentation, governance records, and derived non‑confidential datasets are published in public GitHub repositories under OSI/Creative Commons licenses (see Reuse and licensing). Releases are archived with DOIs on Zenodo.
- Embargoes: none anticipated for project‑generated materials; short embargoes may occur to coordinate simultaneous publication of validation results with partners.
- Sensitive/restricted data: confidential administrative microdata (if accessed) will not be shared, downloaded, or archived in project repositories. Validation conducted on restricted data will yield only aggregate, disclosure‑controlled outputs (e.g., error metrics, charts) suitable for public release. Any interview‑based notes used for customer discovery will be de‑identified before sharing and only presented in aggregate.
- Access methods: GitHub (browse/clone), GitHub Releases (tarballs), Zenodo (DOIs with metadata landing pages), and a public documentation site linking to canonical artifacts.

Policies and provisions for reuse, redistribution, and derivative products
- Licensing: code under a permissive open‑source license (e.g., Apache‑2.0 or MIT); documentation and diagrams under Creative Commons Attribution (CC BY 4.0); metadata under CC0 when feasible. Each repository and dataset includes an explicit LICENSE file.
- Attribution and citation: CITATION.cff and Zenodo records provide citation text and DOIs. Users must preserve attribution and note any modifications in derivatives.
- Third‑party content: any externally licensed data or code retains its original license; we provide clear provenance and instructions to obtain those sources directly when redistribution is not permitted.
- Reuse facilitation: containerized environments, pinned dependencies, and Makefile/CLI scripts reproduce results end‑to‑end from public inputs wherever possible.

Archiving, preservation, and access timeline
- Near‑term availability: artifacts are made public upon creation or release. Branch protections and CI enforce build/test integrity.
- Long‑term preservation: each public release is archived on Zenodo with a release‑series DOI; GitHub repositories are retained indefinitely and mirrored to an organization backup. We commit to preserving public data, code, and documentation for at least five years beyond the end of the award, exceeding the NSF minimum.
- Integrity: releases include checksums; CI validates schema and reproducibility. Container images are pushed to a public registry with immutable digests.

Roles, responsibilities, and resources
- Project lead (PI) oversees policy compliance, review of public artifacts, and de‑identification processes.
- Technical lead maintains repositories, CI, release engineering, and reproducibility scripts.
- Data steward curates datasets and metadata, manages DOI deposits, and ensures adherence to disclosure control.
- Resources are budgeted for storage, archiving (Zenodo is no‑cost), and modest hosting/automation.

Privacy, confidentiality, security, and compliance
- Personally identifiable information (PII): the project will not collect, store, or release PII. Any customer‑discovery interviews will avoid PII; notes will be de‑identified and summarized in aggregate.
- Restricted/administrative data: if used for validation, access occurs only within the originating custodian’s approved environment or under DUA terms; no restricted data is transferred to project infrastructure. Only non‑disclosive aggregates leave such environments, following custodian rules (e.g., primary/secondary suppression, minimum cell sizes).
- Public microdata: when using public sources (e.g., CPS), we document provenance, version, and transformation steps; the original data are referenced rather than mirrored unless license permits redistribution.
- Security: repositories use 2FA‑enforced organization policies; CI secrets are scoped minimally; releases are signed where supported.

Tools and software
- Primary platforms: GitHub for code/issues/releases; GitHub Actions for CI; Zenodo for archiving/DOIs; container registry for runtime environments; public website for documentation linking to canonical artifacts.
- Reproducibility: scripts and containers enable users to regenerate derived datasets from public inputs; deterministic builds are preferred.

Expected period of data retention
- Public artifacts (software, documentation, non‑confidential datasets) are retained for at least five years beyond the end of the award and, barring exceptional circumstances, indefinitely.
- Restricted data are never hosted by the project; retention follows custodian policies under the applicable DUA and is out of scope for public archiving.

Contact and updates
- The project website and repositories include a “Data & Licensing” page and CONTACT file directing inquiries to the data steward. The DMP will be updated if project scope or custodial policies change.

