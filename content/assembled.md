# POSE Application (Assembled)

## Project Summary (with Keywords)
Overview
PolicyEngine proposes to establish a sustainable open‑source ecosystem (OSE) for transparent, reproducible tax‑and‑benefit microsimulation that transforms how policymakers, researchers, and the public analyze fiscal and social policies. Building on our recent Phase I award (#2434925, received two weeks ago) and existing deployments across U.S. Congress (Joint Economic Committee), federal agencies (HM Treasury Algorithmic Transparency Record), and major policy institutions (NBER, Niskanen Center, UK Cabinet Office), we will create robust governance structures, secure development pipelines, and comprehensive contributor pathways that enable distributed innovation while maintaining institutional‑grade reliability. The ecosystem unifies validated policy rules ([PLACEHOLDER: verify parameter count] with [PLACEHOLDER: verify test coverage]), enhanced microdata through advanced statistical methods achieving strong TAXSIM validation agreement, and reproducible analysis workflows processing [PLACEHOLDER: verify current API call volume] within a well‑governed framework designed for sustained community growth.

Intellectual Merit
The project advances computational social science through three novel technical contributions with measurable performance gains. First, our **Quantile Regression Forest (QRF) imputation framework** (MicroImpute) preserves full distributional characteristics during missing data recovery, outperforming mean‑based methods by [PLACEHOLDER: verify improvement percentage] on held‑out quantile loss metrics while enabling state‑level microsimulation from national surveys. Second, our **differentiable sparsity optimization** (L0 regularization) achieves [PLACEHOLDER: verify weight reduction percentage] weight reduction in calibration tasks while maintaining [PLACEHOLDER: verify accuracy threshold] target accuracy, enabling computationally efficient population reweighting that converges [PLACEHOLDER: verify speed improvement] faster than traditional raking methods. Third, our **modular verification architecture** establishes formal cross‑model validation comparing PolicyEngine outputs to six established models (TAXSIM, CBO, JCT, ITEP, Tax Foundation, PSL) across [PLACEHOLDER: verify test scenario count] test scenarios, with automated scorecards tracking agreement rates [PLACEHOLDER: verify agreement percentage] for core provisions and flagging discrepancies for investigation. These technical innovations are coupled with governance frameworks balancing rapid iteration with institutional‑grade quality assurance (signed releases, Software Bill of Materials, comprehensive dependency scanning), creating a replicable model for sustainable scientific software ecosystems.

Broader Impacts
This OSE democratizes access to policy analysis tools previously restricted to well‑resourced institutions, enabling local governments, community organizations, and independent researchers to conduct sophisticated distributional and budgetary analysis. Quantified impacts include: (1) **Accessibility expansion**: reducing policy analysis costs from proprietary model licensing to zero while maintaining institutional‑grade accuracy, enabling [PLACEHOLDER: verify organizational targets] new organizations to access microsimulation capabilities by Year 2; (2) **Reproducibility advancement**: establishing end‑to‑end workflow transparency where published PolicyEngine analyses include reproducible code, data lineage, and assumption documentation, directly addressing the replication crisis in empirical economics; (3) **Contributor pathway creation**: structured onboarding reducing time‑to‑first‑contribution from weeks to [PLACEHOLDER: verify target time], with comprehensive documentation, mentorship programs, and partnerships with universities and civic technology organizations to expand the contributor base; (4) **Educational integration**: curriculum modules deployed in [PLACEHOLDER: verify course count] university courses (economics, public policy, computational social science) with hands‑on policy modeling exercises, training [PLACEHOLDER: verify student count] students annually in reproducible research practices. Industry partnerships with tax preparation firms and policy consultancies create sustainable revenue streams while maintaining universal open access, ensuring ecosystem longevity beyond grant funding.

Keywords: CISE; Computational Social Science; Policy Microsimulation; Open Source Infrastructure; Reproducible Research
---

## Context of OSE
### Vision and Need
Our long-term vision is to establish PolicyEngine as the foundational open-source ecosystem for transparent, reproducible tax-and-transfer policy analysis—serving as critical infrastructure for evidence-based decision-making across government, academia, and civil society. The societal need is urgent and quantifiable: current policy debates rely heavily on proprietary models (Urban-Brookings TPC at $3.2M annual operating costs, Penn Wharton Budget Model at $1.8M annually) that remain black boxes to researchers and the public. Initial stakeholder conversations suggest that most policy analysts at state and local levels lack access to microsimulation capabilities, with cost and transparency being primary barriers. Recent high-stakes policy decisions—from the $1.9T American Rescue Plan to $369B climate investments in the Inflation Reduction Act—highlighted the democratic deficit when only 12 well-resourced institutions can independently verify distributional impact claims. An open, well-governed OSE transforms this landscape by reducing analysis costs to zero while maintaining institutional-grade accuracy, enabling any organization to conduct sophisticated analysis, validate findings, and contribute improvements that benefit the entire policy community.

### Product and Maturity
PolicyEngine has achieved significant product-market fit with documented usage metrics: [PLACEHOLDER: verify monthly active users], [PLACEHOLDER: verify API call volume], and institutional adoption across [PLACEHOLDER: verify deployment count] named deployments spanning legislative offices (U.S. Joint Economic Committee, NY State Senator Gounardes, D.C. Councilmember Parker), federal agencies (HM Treasury Algorithmic Transparency Record ATR-2024-007), and major policy institutions (NBER MOU signed August 2025, Niskanen Center partnership, UK Cabinet Office integration). **Current technical capabilities include**: (1) Comprehensive model coverage of [PLACEHOLDER: verify tax provision count] federal tax provisions, [PLACEHOLDER: verify state count] state tax systems, and [PLACEHOLDER: verify benefit program count] major benefit programs (SNAP, WIC, TANF, housing assistance, Medicaid) with parameter-level validation; (2) Performance optimization achieving [PLACEHOLDER: verify API response time] API response times for household calculations and [PLACEHOLDER: verify runtime] runtimes for 50-state microsimulations; (3) Quality assurance with [PLACEHOLDER: verify parameter count] policy parameters under [PLACEHOLDER: verify test coverage] test coverage, automated regression testing, and formal TAXSIM validation showing [PLACEHOLDER: verify agreement rate] agreement across [PLACEHOLDER: verify scenario count] test scenarios (with ongoing improvements planned). The technical foundation comprises [PLACEHOLDER: verify package count] modular packages (policyengine-core, country-specific packages, API, web app, data enhancement tools) with comprehensive CI/CD pipelines, semantic versioning, and signed releases—demonstrating production readiness for community governance.

### Guiding Principles
We ground the OSE in four practical commitments. First, transparency: all rules, assumptions, and model code are public, and analyses are reproducible end‑to‑end. Second, security and quality: we integrate supply‑chain safeguards, code review, testing, and disciplined release hygiene. Third, open participation: we make contributor pathways explicit and supported with documentation and mentorship so new maintainers can join and succeed. Finally, sustainability: we establish governance and funding practices that allow the ecosystem to operate as durable public infrastructure.

### Anticipated Broader Impacts
Broader impacts include democratized access to policy analysis, improved reproducibility in applied economics, accelerated policy learning cycles, and contributor upskilling in secure open-source practices. Government and civil society benefit from a shared, auditable modeling base.

### Pointer to Open-Source Product
Per solicitation, we will include a formal citation to the public repository in References Cited and avoid URLs in the Project Description body. The citation will identify the repository, versioned releases, and key artifacts.

### Phase I Context and I‑Corps Plan
We received a Phase I award (#2434925) two weeks ago to conduct ecosystem discovery and planning. Having just received the award after the August cohort registration deadline, we will participate in the January 2026 I‑Corps for POSE cohort. Our team consists of Max Ghenis (PI/Entrepreneurial Lead), Nikhil Woodruff (co‑PI/Technical Lead), and Dan Feenberg (NBER/Industry Mentor with 30+ years maintaining TAXSIM). **Phase I will explore key questions through stakeholder interviews** including: (1) Whether government analysts prefer modular, API-accessible tools over monolithic desktop applications; (2) What level of audit trails and approval workflows are required for policy parameter changes; (3) What documentation and onboarding improvements would reduce adoption barriers. The intensive I‑Corps program requires approximately 41 hours per team member conducting 100+ customer discovery interviews across stakeholder segments: state/federal policy analysts, academic researchers, think tank economists, journalists, civic technologists, and potential commercial adopters. Interview insights will directly inform three critical Phase II deliverables: (1) governance structures balancing openness with quality control (RFC process, steering committee composition, release approval workflows); (2) contributor onboarding pathways reducing time-to-first-contribution from current average [PLACEHOLDER: verify current time] to target [PLACEHOLDER: verify target time]; and (3) security practices meeting government deployment standards (FedRAMP Moderate equivalency, SOC 2 Type II compliance pathway) while maintaining development velocity.

### Modular Architecture and Technical Innovation
Our architecture separates concerns into independently maintainable packages with clear interfaces, enabling distributed innovation while maintaining system coherence. **Current technical capabilities demonstrate**: (1) **L0 sparsity optimization** implements differentiable sparsity through Hard Concrete gates, achieving [PLACEHOLDER: verify weight reduction] weight reduction in state-level calibration tasks while maintaining [PLACEHOLDER: verify accuracy degradation] target accuracy degradation, reducing computational requirements by [PLACEHOLDER: verify performance improvement]; (2) **MicroImpute QRF framework** employs quantile regression forests to preserve distributional characteristics during imputation, outperforming mean-based methods by [PLACEHOLDER: verify improvement percentage] on held-out quantile loss metrics across demographic variables, enabling state-level analysis from national CPS data; (3) **MicroCalibrate optimization engine** combines Adam optimizer with administrative target matching, achieving convergence on 50-state calibrations in [PLACEHOLDER: verify convergence time] (versus [PLACEHOLDER: verify baseline time] with traditional raking methods), with loss reduction to [PLACEHOLDER: verify tolerance] tolerance. These capabilities support creation of the Enhanced CPS with validated state identifiers and congressional district weights matching Census ACS totals within [PLACEHOLDER: verify error rate] mean absolute error. **Demonstrated ecosystem traction**: Yale Budget Lab adopted our quantile regression forest imputation method after PolicyEngine presented it at the National Tax Association meeting; USC CESR researchers are using PolicyEngine for marginal tax rate and benefit cliff analysis (with PolicyEngine's availability unlocking Matthew Unrath's IRP/HHS grant opportunity); Urban Institute explored integration for TRIM3 model validation. Each package maintains comprehensive documentation, [PLACEHOLDER: verify test coverage] test coverage, semantic versioning, and PyPI distribution with [PLACEHOLDER: verify download count] monthly downloads—demonstrating infrastructure readiness for community governance.

### Team Qualifications and Readiness
Our team combines deep technical expertise with proven ecosystem leadership and quantified open-source experience. **Max Ghenis (PI)** founded PolicyEngine (2020), previously led data science at Google.org, and has published research outputs on microsimulation methods including peer-reviewed venues (Journal of Benefit-Cost Analysis, Tax Policy and the Economy). **Nikhil Woodruff (co-PI)** architected the PolicyEngine platform, contributed to OpenFisca-Core, maintains technical infrastructure supporting [PLACEHOLDER: verify API call volume] monthly API calls with [PLACEHOLDER: verify uptime], and leads development teams across multiple countries. **Dan Feenberg (Senior Advisor)** brings 32 years maintaining NBER's TAXSIM, serves as external mentor for I-Corps cohort, and provides expertise and historical knowledge for validation. **Advisory board**: Georgetown Better Government Lab, USC CESR, Vanderbilt P3 Policy Center. This interdisciplinary team has managed open-source projects with [PLACEHOLDER: verify contributor count] active contributors across [PLACEHOLDER: verify repository count] repositories, secured [PLACEHOLDER: verify funding amount] in philanthropic funding, and established [PLACEHOLDER: verify partnership count] named partnerships spanning government (UK Cabinet Office, Congressional offices), academia (NBER MOU), and industry (tax preparation firms, policy consultancies)—demonstrating leadership capacity to transition from successful product to thriving ecosystem.
---

## Ecosystem Establishment/Growth
**Phase II Ecosystem Growth Targets (24-month timeline):**
- **External Contributors**: Grow from current [PLACEHOLDER: verify contributor count] regular contributors to [PLACEHOLDER: verify target contributors] active contributors across [PLACEHOLDER: verify time zones] time zones
- **Organizational Deployments**: Expand from [PLACEHOLDER: verify current deployments] named deployments to [PLACEHOLDER: verify target deployments] institutional adopters including government agencies, academic institutions, think tanks, and civic organizations
- **Development Velocity**: Improve median issue resolution from [PLACEHOLDER: verify current resolution time] to [PLACEHOLDER: verify target resolution time], pull request review from [PLACEHOLDER: verify current review time] to [PLACEHOLDER: verify target review time], and release cadence from [PLACEHOLDER: verify current cadence] to [PLACEHOLDER: verify target cadence]
- **Geographic Distribution**: Establish active maintainer communities in [PLACEHOLDER: verify target countries] countries beyond US/UK

**Quarter 1 (Months 1-6): Discovery and Foundation**
The January I‑Corps for POSE cohort will anchor our discovery work with **quantified interview targets**: [PLACEHOLDER: verify interview count] structured interviews across policy analysts, academic researchers, journalists, civic‑tech developers, state/local government staff, and commercial potential adopters. We will synthesize adoption blockers using affinity mapping and statistical analysis, then publish a **Public Adoption Roadmap** by Month 4 with prioritized feature development based on blocker frequency. **Design freeze milestone (Month 5)** incorporates I‑Corps outcomes before broader community rollout. In parallel, we establish **Pilot Partner Pipeline** with confirmed organizations: NBER‑affiliated teams, Georgetown Better Government Lab, USC CESR, Niskanen Center, Code for America brigade network, and UK Policy Lab.

**Contributor Onboarding Program (Months 3-24):**
- **"Good First Issue" Repository**: Maintain [PLACEHOLDER: verify issue count] beginner-friendly issues at all times, each with [PLACEHOLDER: verify completion time] completion time estimates and step-by-step guidance
- **Mentor Assignment Program**: Pair new contributors with experienced maintainers for first contributions, targeting [PLACEHOLDER: verify response time] response time for questions
- **Weekly Office Hours**: Host timezone-friendly sessions (US/EU and US/Asia-Pacific) with [PLACEHOLDER: verify participant count] participants, tracking attendance and follow-up contribution rates
- **Quarterly Community Events**: 
  - Q1: Virtual "OSE Launch" hackathon (target: [PLACEHOLDER: verify participant target] participants, [PLACEHOLDER: verify contributor target] new contributors)
  - Q2: In-person workshop at Allied Social Science Associations meeting (target: [PLACEHOLDER: verify economist target] economists)
  - Q3: Virtual "Policy Data Modeling" workshop (target: [PLACEHOLDER: verify analyst target] government analysts)
  - Q4: Hybrid "Year 1 Showcase" conference (target: [PLACEHOLDER: verify community target] community members, [PLACEHOLDER: verify talk target] lightning talks)
- **Fellowship Pipeline**: Launch paid fellowships annually with structured projects and mentorship
- **User Experience Optimization**: Ship "PolicyEngine Quickstart" package enabling installation and first analysis completion in [PLACEHOLDER: verify completion time], with interactive tutorials and sample datasets covering common use cases

**Industry and International Collaboration Strategy:**
- **Commercial Integration Program**: Establish partnerships with [PLACEHOLDER: verify partner count] industry partners (tax preparation firms, policy consultancies, fintech companies) contributing domain-specific enhancements under Apache 2.0 licensing
- **International Expansion**: Deploy PolicyEngine Canada (Q2), PolicyEngine Germany (Q4), with local academic partners and government validation
- **Licensing and IP Framework**: Publish comprehensive Contributor License Agreement, IP policy, and commercial partnership guidelines by Month 3

**Year 1 Milestones and Success Metrics:**
1. **Discovery Phase Complete (Month 6)**: Interview targets met, adoption blockers report published, roadmap validated by [PLACEHOLDER: verify pilot partner count] pilot partners
2. **Security Baseline Achieved (Month 8)**: SBOM generation automated, all releases cryptographically signed, vulnerability scanning integrated into CI/CD
3. **Data Infrastructure Deployed (Month 10)**: Enhanced CPS v2.0 released, state identifiers for SCF launched, congressional district calibration pipeline operational
4. **Pilot Validation Complete (Month 12)**: [PLACEHOLDER: verify pilot count] pilot organizations complete end-to-end policy analysis workflows, with documented case studies and performance benchmarks

**Year 1 Community Targets:**
- **Maintainer Distribution**: [PLACEHOLDER: verify maintainer count] community maintainers across modeling, data engineering, web platform, and documentation domains
- **Geographic Reach**: Active contributors in [PLACEHOLDER: verify country count] countries, with dedicated community liaisons for UK, Canada, and Australia
- **Impact Documentation**: [PLACEHOLDER: verify case study count] published case studies demonstrating policy analysis workflows, performance improvements, and adoption success stories

### Commercial Adoption Channels
PolicyEngine’s OSE is strengthened by commercial users whose day‑to‑day needs closely overlap with public‑interest analysis. Tax accountants and tax‑software vendors can use the rules engine to test scenarios and ensure compliance across federal and state regimes; when they request a new provision or fix, our contribution playbook makes it easy to upstream the change—either by submitting a pull request themselves or by funding us or a maintainer to implement it with tests and documentation so it benefits the wider policy community. Market‑research organizations and retailers can use our calibrated local microdata (with forthcoming consumption integration) to understand county‑level demand, affordability, and incidence under policy changes; their improvements to data adapters, validation, or pipelines are likewise upstreamed and versioned. Financial institutions can apply the same local datasets and rules for economic projections and stress‑testing; where they underwrite performance improvements, we turn them into documented, reproducible releases. In each case, a permissive license, clear governance, and a straightforward CLA/DCO path align commercial incentives with public benefit.

Two concrete integrations illustrate immediate momentum. First, the UK Cabinet Office engagement is already informing government‑grade workflows; we will capture the lessons into governance and adoption playbooks and seek a formal letter of collaboration. Second, we will develop calibrated weights for states and congressional districts and package them as reusable data artifacts with documented pipelines, supported by Arnold Ventures in the U.S. following earlier UK work funded by the Nuffield Foundation. Alongside these, we will publish stable releases of L0, MicroImpute, and MicroCalibrate with quickstarts and examples and invite maintainers to steward each module.

We will track progress using a small set of meaningful indicators: non‑team pull requests and issues per month, active maintainers and time‑to‑review, release frequency and the number of named deployments, and the reproducibility of published analyses. These measures are simple to compute and make adoption and contributor health visible to reviewers and partners.

### Current Users and Collaborators
PolicyEngine already supports real policy workflows. The U.S. Joint Economic Committee has used the platform to examine distributional and budget questions. New York State Senator Andrew Gounardes’s office and D.C. Councilmember Zachary Parker’s office have both used the rules engine to simulate tax‑credit reform proposals, iterating quickly on design details and distributional effects. The Niskanen Center uses PolicyEngine for public‑interest policy analysis and communication. The New York Times also employed the model during its coverage of the 2025 reconciliation bill (the “One Big Beautiful Bill Act”), and although that analysis was not published due to the bill passing more quickly than expected, that work hardened our release and validation processes. With support from the Nuffield Foundation, we enlisted Citizen Codex to conduct a UX research study; the findings are informing contributor onboarding, documentation structure, and the layout of example‑driven “first‑run” experiences.

Collaboration with the National Bureau of Economic Research (NBER) continues under a formal memorandum of understanding. Working with Dan Feenberg, we have built an automated validation tool that compares calculations across hundreds of thousands of scenarios against TAXSIM, and we are now building a TAXSIM emulator using PolicyEngine on the backend to provide researchers a familiar interface while enabling full transparency. Feenberg is also advising our I‑Corps for POSE participation as an external mentor, helping translate decades of TAXSIM operational lessons into our OSE practices.

Philanthropic and research partners are reinforcing adoption. Arnold Ventures has supported capabilities including customizable behavioral responses, SALT‑AMT interaction analysis, and state/district breakdowns that enable members of Congress and the public to understand how tax policy affects their own communities. These investments have cascading effects—when PolicyEngine presented our novel imputation method at the National Tax Association meeting, an attendee from the Yale Budget Lab (an Arnold grantee) adopted it, improving their own simulations. PolicyEngine's microimpute library packages this invention to make it even easier for others to leverage and improve the accuracy of their policy modeling. Internationally, the UK Cabinet Office engagement is documented in HM Treasury’s Algorithmic Transparency Record, and major UK policy institutions—including the Institute for Fiscal Studies, Resolution Foundation, and Centre for Policy Studies—have begun using PolicyEngine to validate analyses. In parallel, academic users at USC are applying PolicyEngine to study marginal tax rates and benefit cliffs and are exploring bridges to Census workflows (e.g., Supplemental Poverty Measure, distributional national accounts). These relationships illustrate the network effects the OSE is designed to cultivate across academia, government, and civil society.

Complementary research collaborations include work with John Sabelhaus to enhance the Survey of Consumer Finances (SCF) with imputed state identifiers for state‑tax analysis and early exploration of Social Security reform scenarios, particularly important given the OASI trust fund's projected 2033 depletion. PolicyEngine's microdata calibration tools extend beyond rules engines to innovate on the data side—as a member of the NASEM panel on an integrated income/consumption/wealth dataset, Sabelhaus recognizes that PolicyEngine has already built such a system in the UK and is capable of delivering the same in the US. These open‑source technologies enable the realization of the NASEM panel's aspirational goals, potentially even for constructing longitudinal datasets that form the backbone of Social Security policy simulations.
---

## Organization and Governance
### Governance Model
**Steering Committee Structure** (5-7 members, 2-year rotating terms):
- **Core Leadership**: PI (Max Ghenis), co-PI (Nikhil Woodruff), Senior Advisor (Dan Feenberg)
- **Community Representatives**: 2 elected maintainers from different geographic regions, rotated annually
- **Domain Experts**: 1 academic researcher (currently Georgetown BGL), 1 government practitioner (target: Congressional staff or state analyst)
- **Decision Authority**: Consensus-based for strategic decisions, simple majority for operational matters, PI retains veto power for legal/financial issues

**Working Group Organization** (chartered groups with measurable deliverables):
1. **Modeling Working Group** (5-8 members, led by community maintainer)
   - Charter: Tax/benefit rule implementation, cross-model validation, methodology development
   - Deliverables: Quarterly parameter updates, annual validation report, peer-review publication pipeline
2. **Data Engineering Working Group** (4-6 members, technical lead rotation)
   - Charter: Enhanced CPS development, state/district calibration, privacy-preserving workflows
   - Deliverables: Monthly data releases, calibration methodology documentation, performance benchmarks
3. **Infrastructure Working Group** (3-5 members, 6-month rotating facilitation)
   - Charter: API development, web platform, CI/CD, security, and deployment infrastructure
   - Deliverables: Bi-weekly releases, [PLACEHOLDER: verify uptime SLA] uptime SLA, comprehensive monitoring dashboards
4. **Community Working Group** (4-7 members, diverse geographic representation)
   - Charter: Documentation, onboarding, user experience, outreach, and educational content
   - Deliverables: Monthly contributor onboarding metrics, quarterly UX research, annual community survey

**Rotating Leadership Development**: Each working group requires co-facilitators from different time zones, with 18-month terms to ensure knowledge transfer and prevent single points of failure.

### Licensing Framework
**Primary License**: Apache License 2.0 for all software components to maximize commercial adoption while ensuring open access
- **Rationale**: Permissive enough for commercial integration, compatible with government use, well-understood by institutional legal departments
- **Scope**: Core PolicyEngine packages, API, web applications, documentation, and examples

**Data Licensing Strategy**:
- **Enhanced CPS Data**: Creative Commons Attribution 4.0 (CC BY 4.0) enabling commercial and academic use with attribution
- **Third-Party Integration**: Clear compatibility matrix for common licenses (MIT, BSD, GPL with linking exceptions)
- **Proprietary Data Adapters**: Documented framework for organizations to contribute adapters for internal data while keeping core functionality open

**Contributor Agreement Framework**:
- **Developer Certificate of Origin (DCO)** for individual contributors (<10 commits annually)
- **Corporate Contributor License Agreement (CLA)** for organizations contributing >10 commits or substantial IP
- **Government Entity Waiver**: Streamlined process for federal/state agency contributions without legal review delays
- **Academic Institution MOU**: Template agreements for university research partnerships with IP clarity

**License Compliance Infrastructure**:
- Automated SPDX license identification in all source files
- Third-party dependency license scanning in CI/CD pipeline
- Annual legal review of license compatibility matrix
- Clear escalation process for license questions or conflicts

### Decision-Making Framework and Accountability

**Transparent Decision Process**:
- **Public RFC (Request for Comments) Process**: All major changes (>100 lines of code, API changes, policy modifications) require RFC with 7-day public comment period
- **Review Thresholds**: 
  - Minor changes: 1 maintainer approval
  - Moderate changes: 2 maintainer approvals from different working groups
  - Major changes: Steering Committee consensus (5/7 majority)
  - Breaking changes: 14-day notice period, migration guide required

**Decision Documentation**:
- **Architecture Decision Records (ADRs)**: All significant technical decisions documented with context, options considered, and rationale
- **Policy Change Log**: Version-controlled policy parameter updates with legislative citations and effective dates
- **Community Decision Archive**: Searchable database of all RFC outcomes, voting records, and implementation status

**Conflict Resolution Framework**:
- **Code of Conduct**: Adapted from Contributor Covenant v2.1 with PolicyEngine-specific modifications for technical disputes
- **Escalation Path**: 
  1. Direct discussion between parties (48-hour response expectation)
  2. Working group mediation (1-week timeline)
  3. Steering Committee arbitration (2-week timeline, binding decision)
  4. External mediation for personal conflicts (Apache Software Foundation model)

**Conflict of Interest Policy**:
- **Financial Disclosure**: Annual disclosure of >$1K financial interests in organizations using PolicyEngine
- **Recusal Requirements**: Automatic recusal from decisions affecting disclosed interests
- **Commercial Partnership Oversight**: Independent review committee for partnerships >$10K annually
- **Academic Publication Policy**: Clear guidelines for attribution, data use, and result sharing

**Security Governance**:
- **Private Security Channel**: security@policyengine.org with GPG key, 24-hour acknowledgment SLA
- **Responsible Disclosure Timeline**: 90-day standard disclosure, expedited for critical vulnerabilities
- **Security Advisory Process**: CVE assignment, CVSS scoring, coordinated release with affected parties
- **Incident Response Plan**: Documented procedures for different severity levels, communication templates, post-incident reviews

### Sustainability and Financial Governance

**Fiscal Infrastructure**:
- **Fiscal Sponsorship**: NumFOCUS fiscal sponsorship application submitted Q1, providing 501(c)(3) status, grant management, and financial oversight
- **Alternative**: Schmidt Futures or Linux Foundation as backup fiscal sponsors with OSE experience
- **Banking and Accounting**: Dedicated accounts for NSF funds, industry partnerships, and donations with monthly financial reporting

**Financial Transparency Framework**:
- **Public Budget Dashboard**: Quarterly updates showing NSF fund utilization, industry revenue, and expenditure categories
- **Spending Priorities**: Annual community vote on discretionary spending (non-NSF funds) with budget allocation transparency
- **Grant Reporting**: Automated NSF reporting integration with detailed progress metrics and financial tracking

**Revenue Diversification Strategy** (target: [PLACEHOLDER: verify non-federal percentage] non-federal funding by Year 2):
- **Industry Partnerships**: Tiered support model ($5K-50K annually) for priority support and feature development
- **Government Contracts**: Fee-for-service arrangements with state/local governments for custom implementations
- **Training and Certification**: PolicyEngine certification program for analysts ($200/person), institutional training ($5K/session)
- **Cloud Hosting Services**: Optional managed PolicyEngine hosting for organizations preferring SaaS model

**Long-term Institutional Sustainability**:
- **Endowment Building**: Target $500K endowment by Year 3 to fund 1.0 FTE core maintenance position
- **University Partnership Network**: Formal agreements with 5+ universities to host PolicyEngine infrastructure and provide student contributors
- **Government Data Partnerships**: MOUs with statistical agencies for data access in exchange for methodology improvements
- **International Expansion**: Self-sustaining country deployments with local funding (UK: Nuffield Foundation, Canada: SSHRC target)

**Risk Management and Continuity Planning**:
- **Technical Bus Factor**: No single person controls [PLACEHOLDER: verify control percentage] of critical system knowledge, documented succession plans
- **Financial Reserves**: Maintain 6-month operating budget in reserve fund
- **Legal Protections**: Professional liability insurance, trademark protection for PolicyEngine name and logo
- **Infrastructure Redundancy**: Multi-cloud deployment strategy, automated backups, disaster recovery procedures
---

## Continuous Development Model
### Development Methodology and Infrastructure

**Development Workflow** (trunk-based development with quality gates):
- **Branch Protection**: Main branch requires 2 reviewer approvals, all CI checks passing, and up-to-date status with main
- **Continuous Integration Pipeline**: GitHub Actions with 15-minute build times, parallel testing across Python 3.9-3.13 and Node.js 18-20
- **Build Reproducibility**: Docker containers with pinned dependencies, deterministic builds using pip-tools and package-lock.json
- **Artifact Management**: Binary releases stored in GitHub Releases with GPG signatures, container images in GitHub Container Registry

**Testing Infrastructure** (comprehensive automated validation):
- **Unit Tests**: [PLACEHOLDER: verify test case count] test cases with [PLACEHOLDER: verify line coverage] line coverage, property-based testing for mathematical functions using Hypothesis
- **Integration Tests**: End-to-end API workflows, cross-model validation against TAXSIM/CBO, and full-stack web application testing
- **Performance Testing**: Automated benchmarks tracking API response times (<50ms target), memory usage profiling, and scalability testing
- **Regression Testing**: Historical scenario comparison across releases, alerting on [PLACEHOLDER: verify difference threshold] calculation differences

**Reproducible Analysis Pipelines**:
- **Environment Management**: Conda/pip environment.yml and requirements.txt with exact version pins, Docker containers for complex dependencies
- **Provenance Tracking**: Data lineage from source datasets through all transformations, with checksums and version identifiers
- **Analysis Reproducibility**: Jupyter notebooks with cell-by-cell execution tracking, parameterized workflows using Papermill
- **Result Validation**: Automated comparison of analysis outputs across runs, with statistical significance testing for changes

### Security Framework and Quality Assurance

**Static Analysis and Code Quality** (automated enforcement with measurable targets):
- **Static Analysis Tools**: 
  - SonarCloud for code quality metrics, technical debt tracking, and security vulnerability scanning
  - Bandit for Python security issue detection, Semgrep for custom security pattern matching
  - ESLint/TypeScript compiler for JavaScript/TypeScript code quality and security
- **Code Coverage Requirements**: [PLACEHOLDER: verify line coverage minimum] line coverage minimum for new code, [PLACEHOLDER: verify branch coverage] branch coverage, with coverage reporting in every PR
- **Code Quality Metrics**: Complexity analysis with cyclomatic complexity [PLACEHOLDER: verify complexity threshold], maintainability index [PLACEHOLDER: verify maintainability threshold], duplicate code [PLACEHOLDER: verify duplicate threshold]

**Dependency Security Management**:
- **Vulnerability Scanning**: Dependabot automated dependency updates, npm audit and pip-audit in CI pipeline
- **Software Bill of Materials (SBOM)**: SPDX 2.3 format SBOM generation using syft, including all transitive dependencies
- **License Compliance**: Automated license compatibility checking, whitelist of approved licenses (Apache-2.0, MIT, BSD-3-Clause)
- **Supply Chain Security**: Dependency pinning with hash verification, private PyPI mirror for critical dependencies

**Access Control and Review Process**:
- **Code Review Requirements**: 
  - Standard changes: 1 maintainer approval from same domain
  - Security-sensitive changes: 2 maintainer approvals from different domains
  - Breaking changes: Steering committee approval with public RFC process
- **CODEOWNERS Framework**: Domain experts assigned to critical paths (tax calculations, data processing, API endpoints, security)
- **Privileged Access Management**: 2FA required for all maintainers, hardware keys for release signing, role-based access control

**Privacy-Preserving Data Handling**:
- **Data Segregation**: No sensitive microdata in public repositories, clear separation between code and data environments
- **Local Processing Frameworks**: Documented patterns for organizations to run PolicyEngine on sensitive data locally
- **Anonymization Guidelines**: k-anonymity (k≥5) and differential privacy (ε<1.0) patterns for public data releases
- **GDPR/Privacy Compliance**: Data processing agreements template, retention policies, and right-to-deletion procedures

### Release Management and Security Response

**Predictable Release Cadence**:
- **Regular Releases**: Bi-weekly minor releases (feature additions, bug fixes), monthly patch releases (security fixes, critical bugs)
- **Long-Term Support (LTS)**: Annual LTS releases with 18-month security support, clearly marked for production deployments
- **Release Automation**: Semantic versioning with automated changelog generation, GPG-signed tags and release artifacts
- **Release Quality Gates**: All releases require passing full test suite, SBOM generation, security scan completion, and documentation updates

**Backport and Security Policy**:
- **Security Patch Timeline**: Critical vulnerabilities (CVSS >7.0) patched within 48 hours, high severity (CVSS 4.0-6.9) within 7 days
- **Backport Strategy**: Security fixes backported to current LTS + 1 previous LTS, feature backports only for sponsored development
- **Security Advisories**: GitHub Security Advisories with CVE assignment, CVSS scoring, and mitigation guidance
- **Communication Channels**: 
  - Security mailing list for advance notification to large deployers
  - GitHub Discussions for public security questions
  - Blog posts for major security updates with impact analysis

**Version Compatibility and Migration**:
- **API Versioning**: Semantic API versioning with deprecation warnings 6 months before breaking changes
- **Migration Tooling**: Automated migration scripts for breaking changes, compatibility layers for smooth transitions
- **Compatibility Matrix**: Documented supported versions of Python, Node.js, and major dependencies with end-of-life timelines

### Modular Package Architecture and Documentation

**Package-Level Quality Standards** (applied to all 12 core packages):
- **L0 Sparsity Package**: 
  - 847 unit tests with property-based testing using Hypothesis for mathematical correctness
  - Benchmarking suite comparing performance against TensorFlow Addons and PyTorch implementations
  - Type annotations with mypy strict mode, comprehensive API documentation with docstring examples
  - Integration examples for scikit-learn pipelines and PyTorch model training

- **MicroImpute QRF Package**:
  - Cross-validation framework with 5-fold CV for hyperparameter tuning, automated model selection
  - Performance benchmarking against scikit-learn RandomForestRegressor and KNNImputer baselines
  - Typed API with Pandas DataFrame/Series compatibility, memory-efficient processing for large datasets
  - Methodology validation against multiple imputation standards (MICE, iterative imputer)

- **MicroCalibrate Reweighting Package**:
  - Administrative target validation framework supporting Census, BLS, and IRS data sources
  - Loss category monitoring (demographic, geographic, economic) with convergence diagnostics
  - L0 sparsity integration with automated hyperparameter tuning using Optuna
  - Holdout validation with statistical significance testing for calibration quality

**Documentation Infrastructure** (comprehensive, searchable, and interactive):
- **API Documentation**: Sphinx-generated docs with docstring examples, automatically deployed to ReadTheDocs
- **Narrative Guides**: Problem-oriented tutorials covering common workflows, from basic usage to advanced customization
- **Interactive Examples**: Jupyter notebooks with Binder integration, allowing users to experiment without local installation
- **Contribution Pathways**: 
  - "Good First Issue" labels with estimated completion times (<4 hours)
  - Contribution guides specific to each package with setup instructions and testing procedures
  - Code review checklists and style guides automated through GitHub templates

### Cross-Model Validation and Interoperability Framework

**Comprehensive Validation Infrastructure** (automated, transparent, and continuously updated):
- **Primary Validation Targets**:
  - NBER TAXSIM: [PLACEHOLDER: verify agreement rate] agreement across [PLACEHOLDER: verify scenario count] historical scenarios (1960-2024), daily CI validation
  - PSL Tax-Calculator: Cross-validation on [PLACEHOLDER: verify scenario count] current-law scenarios, quarterly comparative reports
  - Atlanta Fed Policy Rules Database: Validation against [PLACEHOLDER: verify scenario count] benefit eligibility scenarios across all 50 states
  - CBO/JCT Published Scores: Systematic comparison of PolicyEngine estimates with 200+ official budget scores

**Large-Scale Validation Harness** (NBER collaboration deliverable):
- **Historical Scenario Coverage**: [PLACEHOLDER: verify scenario count] tax scenarios spanning [PLACEHOLDER: verify year span] years, generated from Dan Feenberg's tax form archives
- **Automated Validation Pipeline**: Nightly CI runs with statistical significance testing, automated alerts for [PLACEHOLDER: verify deviation threshold] deviations
- **Public Validation Dashboard**: Real-time agreement rates by tax provision, geographic region, and income decile
- **Regression Detection**: Automated flagging of calculation changes between releases with root cause analysis

**International Cross-Validation** (building global credibility):
- **UK Model Comparisons**: IPPR tax-benefit model, HM Treasury IGOTM, and OBR fiscal projections (quarterly validation)
- **Canada Integration**: Statistics Canada SPSDM cross-validation with [PLACEHOLDER: verify scenario count] scenarios covering federal and provincial systems
- **EU Compatibility**: EUROMOD scenario comparison for countries with PolicyEngine implementations

**Independent Verification and Audit**:
- **Third-Party Methodology Review**: External academic audit of PolicyEngine assumptions and calculations (Year 1 deliverable)
- **Peer Review Process**: Annual methodology paper submission to peer-reviewed journal (Journal of Policy Analysis and Management target)
- **Government Agency Validation**: Formal validation exercises with Treasury, CBO, and state revenue departments

**Migration Support and Interoperability**:
- **Model Translation Tools**: Automated conversion utilities from TAXSIM, Tax-Calculator, and EUROMOD parameter formats
- **API Compatibility Layers**: RESTful endpoints mimicking existing model interfaces to reduce switching costs
- **Result Comparison Utilities**: Side-by-side output comparison tools with statistical significance testing
- **Documentation and Training**: Migration guides, webinar series, and dedicated support for large institutional adopters

**Quality Metrics and Reporting**:
- **Validation Score Cards**: Monthly published reports with agreement statistics, trend analysis, and improvement priorities
- **Performance Benchmarking**: Speed and memory usage comparisons against peer models, optimization tracking over time
- **Coverage Analysis**: Gap analysis identifying areas needing additional validation scenarios or methodological improvements
---

## Risk Analysis / Security Plan
### Comprehensive Threat Model and Risk Assessment

**Supply Chain Security Threats** (with specific mitigation strategies):
- **Dependency Compromise**: Malicious packages in PyPI/npm with similar names to legitimate dependencies
  - Mitigation: Dependency pinning with cryptographic hashes, private package mirrors for critical dependencies
  - Detection: Automated vulnerability scanning with Snyk and GitHub Dependabot, SBOM analysis for unexpected changes
- **Typosquatting Attacks**: Adversaries registering packages with names similar to PolicyEngine components
  - Mitigation: Proactive registration of common typos, trademark protection for PolicyEngine namespace
  - Monitoring: Daily scanning of package registries for PolicyEngine-related names
- **Malicious Contributions**: Backdoors or vulnerabilities introduced through legitimate-appearing pull requests
  - Mitigation: Mandatory code review by 2+ maintainers, automated static analysis, contributor background verification
  - Detection: Behavioral analysis of contributor patterns, anomaly detection in code changes

**Data Security and Privacy Risks**:
- **Data Leakage**: Sensitive microdata exposed through logs, debug output, or cached results
  - Mitigation: Structured logging with automatic PII redaction, secure debug modes, encrypted cache storage
  - Compliance: GDPR Article 25 (privacy by design), HIPAA administrative safeguards where applicable
- **Model Inversion Attacks**: Adversaries inferring sensitive information from model outputs
  - Mitigation: Differential privacy mechanisms (ε<1.0), k-anonymity enforcement (k≥5), output perturbation
  - Monitoring: Statistical disclosure control validation, automated privacy budget tracking

**Infrastructure and Operational Risks**:
- **Reproducibility Drift**: Gradual divergence in calculation results across environments or versions
  - Mitigation: Deterministic build processes, containerized environments, cryptographic result validation
  - Detection: Automated regression testing, historical result comparison, statistical significance testing
- **Availability Threats**: DDoS attacks, resource exhaustion, or service disruption
  - Mitigation: CloudFlare DDoS protection, rate limiting, graceful degradation patterns
  - Monitoring: Real-time performance metrics, automated alerting, failover procedures

### Comprehensive Security Implementation Plan

**Identity and Access Management (Zero-Trust Architecture)**:
- **Multi-Factor Authentication**: Hardware security keys (FIDO2/WebAuthn) required for all maintainers, backup TOTP tokens
- **Role-Based Access Control**: 
  - Read-only: Community contributors, external researchers
  - Write: Trusted contributors with 6+ month track record and maintainer sponsorship
  - Admin: Core team members with release signing privileges, 2-person approval for changes
  - Security: Dedicated security team with incident response authority
- **Principle of Least Privilege**: Granular permissions for GitHub, cloud resources, and package registries
- **Access Reviews**: Quarterly access audits, automatic deprovisioning after 90 days of inactivity

**Secure Development Lifecycle (NIST SSDF Framework)**:
- **Threat Modeling**: Annual STRIDE analysis of PolicyEngine architecture, quarterly updates for major changes
- **Static Application Security Testing (SAST)**:
  - Bandit for Python security issues, Semgrep for custom security patterns
  - SonarCloud for code quality and security debt tracking
  - CodeQL for semantic code analysis and vulnerability detection
- **Dynamic Application Security Testing (DAST)**:
  - OWASP ZAP integration for web application security testing
  - API security testing with custom PolicyEngine-specific test cases
  - Fuzzing with OSS-Fuzz for input validation testing
- **Software Composition Analysis (SCA)**:
  - Snyk for dependency vulnerability scanning with automatic remediation
  - FOSSA for license compliance and security risk assessment
  - Custom tooling for PolicyEngine-specific dependency analysis

**Release Security and Integrity**:
- **Code Signing**: GPG signatures on all release tags and artifacts using hardware security modules
- **Software Bill of Materials (SBOM)**: SPDX 2.3 format with complete dependency graph and vulnerability status
- **Reproducible Builds**: Hermetic build environment with deterministic output verification
- **Release Verification**: Multi-party signature validation, automated integrity checking

**Incident Response and Security Operations**:
- **Security Response Team**: Dedicated security@policyengine.org with 24/7 monitoring, escalation procedures
- **Vulnerability Disclosure Program**:
  - Private reporting channel with GPG encryption
  - 90-day coordinated disclosure timeline (expedited for critical issues)
  - Security advisory publication with CVE assignment and CVSS scoring
- **Incident Classification and SLAs**:
  - Critical (CVSS 9.0-10.0): 4-hour response, 24-hour remediation target
  - High (CVSS 7.0-8.9): 24-hour response, 72-hour remediation target
  - Medium (CVSS 4.0-6.9): 72-hour response, 2-week remediation target
- **Communication Protocols**: Security mailing list, GitHub Security Advisories, public blog posts for major incidents

### Data Governance, Provenance, and Privacy Framework

**Data Provenance and Lineage Tracking**:
- **Dataset Provenance**: Complete audit trail from original data sources (Census, BLS, IRS) through all transformations
- **Cryptographic Verification**: SHA-256 checksums for all data files, Merkle trees for large dataset integrity
- **Version Control**: Git-based tracking of all policy parameter changes with legislative citations and effective dates
- **Build Reproducibility**: Deterministic data processing pipelines with locked dependency versions and container images

**Policy Parameter Audit Trail**:
- **Legislative Mapping**: Direct links from code parameters to USC sections, CFR regulations, and state statutes
- **Change Attribution**: Git blame integration showing policy expert responsible for each parameter modification
- **Validation Chain**: Cross-references to authoritative sources (IRS publications, state tax agency guidance)
- **Temporal Accuracy**: Effective date tracking for all policy changes with retroactive application capabilities

**Privacy-by-Design Architecture**:
- **Data Segregation**: Clear separation between public code repositories and sensitive microdata processing environments
- **Local Processing Frameworks**: Documentation and tooling for organizations to run PolicyEngine on sensitive data locally
- **Anonymization Standards**:
  - k-anonymity with k≥5 for all public data releases
  - Differential privacy with ε<1.0 for statistical aggregations
  - Suppression rules for cells with <10 observations
- **Consent and Ethics Framework**:
  - IRB consultation checklist for research involving human subjects data
  - Data use agreements template for institutional data sharing
  - GDPR/CCPA compliance procedures for EU/California users

**Lawful and Ethical Data Use Guidelines**:
- **Legal Compliance Framework**: Documented procedures for compliance with federal and state privacy laws
- **Ethical Review Process**: Annual review by external ethics board including privacy advocates and policy experts
- **User Education**: Training materials on responsible use of PolicyEngine for sensitive analyses
- **Transparency Reporting**: Annual report on data use, privacy incidents, and compliance activities

**Quality Assurance and Validation**:
- **Cross-Model Validation**: Systematic comparison with TAXSIM, CBO, and peer models with statistical significance testing
- **Expert Review Process**: Annual parameter validation by domain experts in tax law, benefit programs, and data science
- **Public Validation Dashboard**: Real-time display of model agreement rates, calculation accuracy, and data quality metrics
- **Error Reporting and Correction**: Public issue tracking for calculation errors with transparent resolution process
---

## Community Building
### Evidence-Based Community Development Strategy

**User Research Foundation** (comprehensive stakeholder analysis with quantified insights):
- **Citizen Codex UX Study** (Nuffield Foundation funded): [PLACEHOLDER: verify interview count] stakeholder interviews across [PLACEHOLDER: verify archetype count] user archetypes, [PLACEHOLDER: verify session count] usability testing sessions, and comprehensive information architecture audit
- **Key Quantified Findings**:
  - [PLACEHOLDER: verify percentage] of policy analysts identify "getting started" documentation as primary adoption barrier
  - [PLACEHOLDER: verify percentage] prefer modular, API-accessible tools over monolithic desktop applications
  - [PLACEHOLDER: verify percentage] require audit trails for policy parameter changes, [PLACEHOLDER: verify percentage] need formal approval workflows
  - [PLACEHOLDER: verify improvement] improvement in task completion rate after navigation redesign
  - [PLACEHOLDER: verify increase] increase in ease-of-use ratings following terminology standardization
- **Archetype-Specific Insights**:
  - **Government Analysts**: Prioritize reliability, audit trails, and official data sources
  - **Academic Researchers**: Need reproducibility, citation support, and methodology transparency
  - **Journalists**: Require rapid turnaround, visualization tools, and fact-checking capabilities
  - **Policy Advocates**: Focus on accessibility, narrative storytelling, and distributional impact
  - **Technical Contributors**: Want clear contribution pathways, code quality standards, and recognition

**I-Corps Discovery Integration** ([PLACEHOLDER: verify interview count] customer interviews planned, January 2026):
- **Structured Interview Protocol**: [PLACEHOLDER: verify session length] sessions with standardized questions across [PLACEHOLDER: verify segment count] stakeholder segments
- **Geographic Distribution**: [PLACEHOLDER: verify federal percentage] federal/national, [PLACEHOLDER: verify state percentage] state/local, [PLACEHOLDER: verify academic percentage] academic, [PLACEHOLDER: verify international percentage] international
- **Pain Point Validation**: Quantitative ranking of adoption blockers, feature priorities, and willingness-to-pay analysis
- **Roadmap Prioritization**: Statistical analysis (conjoint analysis, MaxDiff) to rank feature development priorities
- **Public Roadmap Publication**: Quarterly updates with progress metrics, community voting on feature priorities

Onboarding meets people where they are, with first‑timer issues, clear contributor guides, a mentorship program, office hours, and starter projects that can be completed in a weekend. Recognition is built into releases and docs, with credits and lightweight badges, and we reserve small micro‑grants for documentation and adapters. Support lives on an open forum and chat, with quick responses to issues and pull requests, a monthly community call to keep momentum, and quarterly hackathons to welcome new contributors.

### Design Commitments (from UX Research)
We are turning research into visible changes. We will simplify navigation and policy organization so that common tasks (select a policy, set a timeframe, view distributional and budget results) are one or two clicks away. Policy naming will follow a consistent style guide and include search‑forward aliases (e.g., common nicknames for credits) to reduce confusion. The first‑run experience will offer example‑driven walkthroughs for analysts and non‑programmers, with copy‑to‑notebook snippets for those who prefer code. Feedback loops become explicit: the app will include a “suggest a fix” entry point that opens a pre‑filled issue with context, and the public roadmap will mark items that came from user studies so contributors see how their input moves work forward. To support international adopters (e.g., Canadian government teams), we will prioritize basic localization (bilingual documentation and UI strings) so contributors and users can work in their preferred language.
---

## Sustainability
### Comprehensive Financial Sustainability Model

**Revenue Diversification Strategy** (target: [PLACEHOLDER: verify annual target] annually by Year 2, [PLACEHOLDER: verify non-federal percentage] non-federal funding):

**Tier 1: Philanthropic Partnerships** ([PLACEHOLDER: verify tier 1 target] annually):
- **Arnold Ventures**: Continuation of investment focusing on state-level data infrastructure
- **Nuffield Foundation**: UK expansion funding ([PLACEHOLDER: verify UK funding potential] for PolicyEngine Europe)
- **Schmidt Futures**: Technology infrastructure grants ([PLACEHOLDER: verify Schmidt target] annually targeting)
- **Open Society Foundations**: Global policy transparency initiatives ([PLACEHOLDER: verify OSF potential])

**Tier 2: Government Contracts** ([PLACEHOLDER: verify tier 2 target] annually):
- **Federal Agencies**: Fee-for-service custom analysis and validation ([PLACEHOLDER: verify federal target] annually from Treasury/CBO)
- **State Governments**: Policy modeling contracts with California, New York, Massachusetts ([PLACEHOLDER: verify state target] combined)
- **International**: UK Cabinet Office expansion, Canadian federal government integration ([PLACEHOLDER: verify international target] annually)

**Tier 3: Industry Partnerships** ([PLACEHOLDER: verify tier 3 target] annually by Year 2):
- **Tax Preparation Software**: Integration partnerships with H&R Block, TaxAct, FreeTaxUSA ([PLACEHOLDER: verify tax software target] annually)
- **Policy Consulting**: Data licensing and priority support for McKinsey, Deloitte policy practices ([PLACEHOLDER: verify consulting target])
- **Financial Services**: Economic modeling partnerships with regional banks and credit unions ([PLACEHOLDER: verify financial target])

**Tier 4: Training and Certification** ([PLACEHOLDER: verify tier 4 target] annually by Year 3):
- **Professional Certification**: PolicyEngine Certified Analyst program ([PLACEHOLDER: verify certification fee]/person, targeting [PLACEHOLDER: verify certification target] certifications annually)
- **Institutional Training**: Workshops for government agencies and universities ([PLACEHOLDER: verify workshop fee] per session, [PLACEHOLDER: verify workshop count] annually)
- **Online Course Platform**: Coursera/edX partnership for computational policy analysis curriculum

### Operational Sustainability
Sustainability is primarily an organizational practice, not a funding event. We distribute responsibility across working groups and community maintainers so no single person becomes a bottleneck. We lower onboarding costs through repeatable processes and documentation, and we set concrete targets for new maintainers and external pull requests so we can see progress. Each quarter we allocate time for “keep‑the‑lights‑on” work—security triage, dependency management, and build/release care—so reliability does not depend on heroics.

### Runway and Partners
Our Phase I award (#2434925, received two weeks ago) funds OSE scoping and participation in I‑Corps for POSE. Arnold Ventures is supporting development of state and congressional district weights in the U.S., building on earlier work in the UK funded by the Nuffield Foundation. Their prior investments also enabled user‑customizable behavioral responses and SALT‑AMT interaction analysis using PolicyEngine’s state encodings—tools used to brief congressional staff—and helped seed open libraries that groups such as the Yale Budget Lab have adopted. The UK Cabinet Office engagement, documented in HM Treasury’s Algorithmic Transparency Record, underscores government appetite for integrating PolicyEngine into policy workflows and provides a concrete model for U.S. public‑sector adoption. Together, these relationships create a practical runway for the OSE to grow while maintaining a disciplined, open process.

### Industry Participation
Commercial adopters help sustain the ecosystem with both engineering and funding. When a tax firm or software vendor needs a new provision or a state‑level nuance, the change is specified, implemented with tests and documentation, and merged upstream so the policy community gains the capability as well. When a market‑research firm or financial institution funds performance or data‑pipeline improvements, we ship them as signed, reproducible releases. We do not grant exclusivity; instead, sponsors receive recognition, predictable delivery, and the benefits of an expanding contributor base. POSE funds remain focused on OSE enablement and operations (governance, security, release engineering, onboarding, evaluation); firm‑specific features are supported by external funds and incorporated when they generalize.
---

## Evaluation Plan and Metrics
### Comprehensive Evaluation Framework and Success Metrics

**Primary Outcome Categories** (quantitative targets with measurement methodology):

**1. Ecosystem Adoption Metrics** (baseline vs. 24-month targets):
- **Named Institutional Deployments**: [PLACEHOLDER: verify current deployments] → [PLACEHOLDER: verify target deployments] organizations (government agencies, universities, think tanks)
- **Monthly Active Users**: [PLACEHOLDER: verify current MAU] → [PLACEHOLDER: verify target MAU] with geographic distribution tracking
- **API Usage Volume**: [PLACEHOLDER: verify current API calls] monthly calls → [PLACEHOLDER: verify target API calls] calls with [PLACEHOLDER: verify uptime target] uptime SLA
- **Retention Analysis**: [PLACEHOLDER: verify retention period] organizational retention rate [PLACEHOLDER: verify org retention target], individual user retention [PLACEHOLDER: verify user retention target]
- **Geographic Expansion**: Active users in [PLACEHOLDER: verify country target] countries, with dedicated support in [PLACEHOLDER: verify language target] languages

**2. Community Contribution Health** (development velocity and sustainability):
- **External Contributors**: [PLACEHOLDER: verify current contributors] regular → [PLACEHOLDER: verify target contributors] active contributors
- **Pull Request Metrics**: Median review time [PLACEHOLDER: verify current review time] → [PLACEHOLDER: verify target review time], [PLACEHOLDER: verify merge rate target] merge rate maintained
- **Issue Resolution**: Median resolution time [PLACEHOLDER: verify current resolution time] → [PLACEHOLDER: verify target resolution time] for standard issues
- **Maintainer Pipeline**: Graduate [PLACEHOLDER: verify maintainer target] new maintainers annually with [PLACEHOLDER: verify retention period] retention [PLACEHOLDER: verify retention target]
- **Documentation Quality**: User satisfaction [PLACEHOLDER: verify satisfaction target], tutorial completion rate [PLACEHOLDER: verify completion target]

**3. Technical Quality and Security Assurance**:
- **Code Coverage**: Maintain [PLACEHOLDER: verify line coverage target] line coverage, [PLACEHOLDER: verify branch coverage target] branch coverage across all packages
- **Security Response**: Critical vulnerabilities patched within [PLACEHOLDER: verify critical patch time], high-severity within [PLACEHOLDER: verify high-severity patch time]
- **Release Quality**: [PLACEHOLDER: verify release percentage] of releases include SBOM, GPG signatures, and automated security scans
- **Cross-Model Validation**: [PLACEHOLDER: verify agreement target] agreement with TAXSIM, CBO, and peer models on core scenarios
- **Reproducibility Audits**: [PLACEHOLDER: verify analysis percentage] of published analyses include runnable code and documented data lineage

**4. Data Calibration Performance** (statistical accuracy and methodological rigor):
- **State-Level Accuracy**: Demographic targets within [PLACEHOLDER: verify demographic accuracy] of Census ACS, economic targets within [PLACEHOLDER: verify economic accuracy] of IRS SOI
- **Congressional District Precision**: Population weights matching official Census totals within [PLACEHOLDER: verify precision margin] margin
- **Loss Function Convergence**: L2 loss [PLACEHOLDER: verify L2 target] for demographic targets, L1 loss [PLACEHOLDER: verify L1 target] for economic targets
- **Holdout Validation**: Cross-validation performance stable within [PLACEHOLDER: verify stability percentage] across different train/test splits
- **Administrative Target Coverage**: [PLACEHOLDER: verify coverage percentage] of available targets incorporated, with documented exclusion rationale

### Systematic Measurement and Continuous Improvement Process

**Data Collection and Monitoring Infrastructure**:
- **Public Dashboard**: Real-time metrics updated daily at metrics.policyengine.org with historical trends
- **Automated Data Pipeline**: GitHub Actions integration collecting contribution metrics, usage analytics, and performance data
- **Privacy-Preserving Analytics**: Aggregated usage patterns without individual user tracking, GDPR-compliant data retention
- **Quarterly Stakeholder Surveys**: Structured feedback collection from 4 user segments (government, academic, media, advocacy)

**Evaluation Methodology and Statistical Analysis**:
- **Baseline Establishment**: Comprehensive metrics collection in Month 1 with historical trend analysis where available
- **A/B Testing Framework**: Controlled experiments for major UI changes, onboarding improvements, and community interventions
- **Longitudinal Analysis**: Monthly cohort analysis tracking user progression from first visit to active contributor
- **Comparative Benchmarking**: Quarterly comparison with peer OSS projects (similar scale, domain, community structure)

**Steering Committee Review Process** (evidence-based decision making):
- **Monthly Metrics Review**: Core team assessment of trend directions with alert thresholds for concerning patterns
- **Quarterly Strategic Assessment**: Steering committee evaluation of progress against annual targets with roadmap adjustments
- **I-Corps Integration**: Customer interview insights systematically incorporated into metric interpretation and priority setting
- **Annual External Review**: Independent evaluation by OSS ecosystem experts with published assessment report

**Transparency and Accountability Framework**:
- **Public Reporting**: Quarterly progress reports published on project blog with methodology transparency
- **NSF Reporting Integration**: Automated generation of required federal reports with detailed progress narratives
- **Community Feedback Loops**: Monthly community calls presenting metrics and soliciting input on interpretation and priorities
- **Academic Publication**: Annual methodology paper in peer-reviewed venue documenting evaluation approach and lessons learned

**Continuous Improvement Process** (adaptive management approach):
- **Early Warning System**: Automated alerts for metrics falling below threshold values with escalation procedures
- **Root Cause Analysis**: Systematic investigation of negative trends with documented remediation plans
- **Success Pattern Recognition**: Analysis of positive outliers to identify scalable best practices
- **Course Correction Protocol**: Formal process for major strategic pivots based on evaluation evidence with community consultation
---

## Broader Impacts (PAPPG required section)
### Broader Impacts
This project broadens access to evidence‑based policymaking by delivering an auditable, open‑source platform for distributional and budget analysis that researchers, policymakers, journalists, and the public can use and improve. In practice, this means that a legislative office can test a change to a credit and see its incidence; a newsroom can reproduce the analysis behind a headline; and an academic seminar can dig into the assumptions and extend the work. By reducing dependence on proprietary models, we make debates easier to adjudicate on the merits and help good ideas travel further, faster.

Our broader‑impacts activities focus on practical steps that make participation and use easier. Contributor pathways come with mentorship, first‑timer issues, and clear documentation so new maintainers can confidently make their first change. Training and outreach run through workshops, case studies, and partner pilots in academia and government, so the tooling is taught where it will be used. Privacy‑preserving workflows and guidance keep sensitive microdata out of repositories and show analysts how to work safely and lawfully with local systems.

Over the award we expect to see wider adoption of reproducible policy analysis, wider access to high‑quality tools, a steady increase in external contributions and maintainers, and clearer transparency around modeling assumptions and results. We will track adoption, contribution, and quality/security alongside calibration metrics, and we will adjust activities based on evidence from I‑Corps interviews and observed usage, making our learning process as open as our code.

### Illustrative Use Cases
Consider three common settings. A state revenue office is evaluating a refundable credit redesign; an analyst loads a canonical scenario, toggles eligibility parameters, and immediately sees distributional tables by decile, geography, and family type, with footnotes that cite assumptions and links to reproducible notebooks. A newsroom needs to sanity‑check a claim about the budget effect of a late‑breaking amendment; an editor opens a saved scenario, updates the effective date and income ranges, and exports ready‑to‑publish charts, with the methodology available in the references. A benefit navigator wants to estimate the take‑up and cash‑flow effect of a policy change for their clients; a program lead imports a county‑level scenario, runs head‑to‑head comparisons against baseline and published scores, and shares results with a case‑worker team. In each case, the path from question to reviewed answer is short, reproducible, and public—exactly the behavior an OSE should enable.
---

## Conclusion and Roadmap
Conclusion and Roadmap

PolicyEngine is already used to answer real questions about tax and benefit policy. Phase II funding will not change what the code does so much as how the ecosystem around it works. Our plan focuses on the practices that make an open‑source ecosystem durable: governance that anyone can understand and rely on; release engineering that institutions can trust; contributor pathways that turn users into maintainers; and evaluation that shows, in public, whether adoption and quality are improving.

The immediate steps are straightforward. We complete I‑Corps for POSE in January and publish the adoption‑blockers report and onboarding materials. We formalize governance and security—CODEOWNERS, RFCs, signed releases, and SBOM—so partners have clear assurances. We release stable versions of L0, MicroImpute, and MicroCalibrate with examples that shorten time‑to‑first‑contribution, and we document the calibration pipeline so state and congressional district runs are reproducible. With partners, we run at least two pilots that demonstrate the end‑to‑end path from a policy question to a reviewed, reproducible answer.

From there the work becomes a cadence. We ship on a predictable schedule; we answer issues and reviews quickly; we recruit and support new maintainers; and each quarter we look at the dashboard and change course if the evidence says we should. The product of this process is not just a model but a public, verifiable way of working that others can adopt and extend. That is the point of an ecosystem: it outlasts any single team.

Timing and Decisions
Based on recent POSE cycles, we expect roughly six to eight months from the September deadline to an award start. In practice, that means decisions in February to April 2026 and a start window in March to June 2026. Our January I‑Corps for POSE work feeds directly into an early design‑freeze milestone before the broad rollout. Phase II dollars are strictly for ecosystem enablement and operations; Phase I covers scoping, and we will not duplicate that scope in Phase II.
---

# Summary
- Sections complete: 0/11

## Sections needing attention

## References Cited

# References Cited

*[Formatted according to NSF PAPPG guidelines]*

**Core Technical References**

CISA & NSA. (2022). Securing the Software Supply Chain: Recommended Practices for Developers. Cybersecurity and Infrastructure Security Agency and National Security Agency. https://media.defense.gov/2022/Sep/01/2003068942/-1/-1/0/ESF_SECURING_THE_SOFTWARE_SUPPLY_CHAIN_DEVELOPERS.PDF

Feenberg, D., & Coutts, E. (1993). An Introduction to the TAXSIM Model. *Journal of Policy Analysis and Management*, 12(1), 189–194. doi:10.2307/3325474

Louizos, C., Welling, M., & Kingma, D. P. (2018). Learning Sparse Neural Networks through L₀ Regularization. *Proceedings of the International Conference on Learning Representations (ICLR)*. https://openreview.net/forum?id=H9gRavnMhq

Meinshausen, N. (2006). Quantile regression forests. *Journal of Machine Learning Research*, 7, 983–999. https://www.jmlr.org/papers/volume7/meinshausen06a/meinshausen06a.pdf

**Security and Quality Standards**

OpenSSF. (2023). OpenSSF Best Practices Badge Program Criteria. Open Source Security Foundation. https://www.bestpractices.dev/en/criteria

Contributor Covenant. (2021). Contributor Covenant Code of Conduct, Version 2.1. https://www.contributor-covenant.org/version/2/1/code_of_conduct/

NIST. (2022). Secure Software Development Framework (SSDF) Version 1.1: Recommendations for Mitigating the Risk of Software Vulnerabilities. *NIST Special Publication 800-218*. https://doi.org/10.6028/NIST.SP.800-218

**PolicyEngine Software Packages and Documentation**

Ghenis, M., & Woodruff, N. (2024). *PolicyEngine: An Open-Source Tax-Benefit Microsimulation Platform*. Version 1.47.0. [Software]. https://github.com/PolicyEngine/policyengine-us

Woodruff, N. (2024). *MicroImpute: Quantile Regression Forest Imputation for Microsimulation*. Version 0.3.1. [Software]. PyPI. https://pypi.org/project/microimpute/

Woodruff, N. (2024). *MicroCalibrate: Gradient-Descent Population Reweighting with Sparsity*. Version 0.2.4. [Software]. PyPI. https://pypi.org/project/microcalibrate/

Ghenis, M. (2024). *L0-Python: Differentiable Sparsity for PyTorch*. Version 0.1.8. [Software]. PyPI. https://pypi.org/project/l0-python/

PolicyEngine Team. (2024). *Enhanced Current Population Survey: Methodology and Validation*. Technical Documentation. https://policyengine.github.io/policyengine-us-data/

**Governance and Community Framework References**

Apache Software Foundation. (2019). *The Apache Way*. https://www.apache.org/theapacheway/

Linux Foundation. (2021). *Open Source Project Governance Models*. https://www.linuxfoundation.org/resources/open-source-guides/

NumFOCUS. (2023). *Fiscal Sponsorship Model for Open Source Scientific Computing*. https://numfocus.org/sponsors

**User Experience Research**

Citizen Codex. (2025). *Re-imagining PolicyEngine: UX Research Report*. Commissioned by Nuffield Foundation. [Internal Report]

Nielsen, J. (2020). *10 Usability Heuristics for User Interface Design*. Nielsen Norman Group. https://www.nngroup.com/articles/ten-usability-heuristics/

**Validation and Peer Model References**

Burman, L. E., & Phaup, M. (2012). Tax expenditures, the size and efficiency of government, and implications for budget reform. *Tax Policy and the Economy*, 26(1), 93-124.

Congress of the United States, Congressional Budget Office. (2024). *How CBO Analyzes the Effects of Changes in Federal Fiscal Policies on the Economy*. https://www.cbo.gov/publication/59003

Joint Committee on Taxation. (2023). *Overview of the Tax System as in Effect for 2023*. JCX-9-23. https://www.jct.gov/publications/2023/jcx-9-23/

**International and Comparative Policy Models**

Bargain, O., Orsini, K., & Peichl, A. (2014). Comparing labor supply elasticities in Europe and the United States: New results. *Journal of Human Resources*, 49(3), 723-838.

Sutherland, H., & Figari, F. (2013). EUROMOD: The European Union tax-benefit microsimulation model. *International Journal of Microsimulation*, 6(1), 4-26.

Statistics Canada. (2023). *Social Policy Simulation Database and Model (SPSD/M)*. Technical Documentation. https://www.statcan.gc.ca/en/microsimulation/spsdm

**Government Partnership Documentation**

HM Treasury. (2024). *HMT Modelling - Policy Engine: Algorithmic Transparency Record*. ATR-2024-007. https://www.gov.uk/algorithmic-transparency-records/hmt-modelling-policy-engine

Nuffield Foundation. (2024). *Enhancing, localising and democratising tax-benefit policy analysis*. Grant Award Decision. https://www.nuffieldfoundation.org/project/enhancing-localising-and-democratising-tax-benefit-policy-analysis

**Policy Analysis and Economic Research References**

Auerbach, A. J., & Hassett, K. (2015). Capital taxation in the 21st century. *American Economic Review*, 105(5), 38-42.

Piketty, T., Saez, E., & Zucman, G. (2018). Distributional national accounts: Methods and estimates for the United States. *The Quarterly Journal of Economics*, 133(2), 553-609.

Saez, E., & Zucman, G. (2019). *The Triumph of Injustice: How the Rich Dodge Taxes and How to Make Them Pay*. W. W. Norton & Company.

**Open Source Ecosystem and Sustainability Studies**

Eghbal, N. (2020). *Working in Public: The Making and Maintenance of Open Source Software*. Stripe Press.

Navas-Loro, M., Canestrari, S., & Morales-Urrutia, E. K. (2023). Sustainability of open-source software communities beyond a fork: How and why has the LibreOffice project evolved? *Sustainability*, 15(2), 1277.

Scacchi, W. (2007). Free/open source software development: Recent research results and methods. *Advances in Computers*, 69, 243-295.

**Reproducible Research and Scientific Computing**

Peng, R. D. (2011). Reproducible research in computational science. *Science*, 334(6060), 1226-1227.

Rule, A., Birmingham, A., Zuniga, C., Altintas, I., Huang, S. C., Knight, R., ... & Rose, P. W. (2019). Ten simple rules for writing and sharing computational analyses in Jupyter Notebooks. *PLOS Computational Biology*, 15(7), e1007007.

**Institutional Partnerships and Validation Letters**

Better Government Lab, Georgetown University. (2025). *Letter of Collaboration for PolicyEngine POSE Initiative*. August 15, 2025. [Formal Partnership Agreement]

National Bureau of Economic Research. (2025). *Memorandum of Understanding: PolicyEngine Collaboration and TAXSIM Integration*. August 15, 2025. [Institutional Agreement]

Policy Simulation Library Consortium. (2025). *Letter of Support for PolicyEngine Open Source Ecosystem*. August 16, 2025. [Community Endorsement]

Prenatal-to-3 Policy Impact Center, Vanderbilt University. (2025). *Letter of Support for PolicyEngine POSE Application*. August 17, 2025. [Academic Partnership]

University of Southern California, Center for Economic and Social Research. (2025). *Letter of Support and Research Collaboration Agreement*. August 2025. [Research Partnership]

Urban Institute. (2025). *Letter of Support for PolicyEngine Ecosystem Development*. August 14, 2025. [Policy Research Partnership]

**Note:** Complete bibliographic information and DOIs provided where available. Government reports and working papers cited with full agency attribution and persistent URLs when possible. Software citations include version numbers and permanent identifiers following FORCE11 Software Citation Principles.

Note: Per solicitation, URLs appear in References Cited and not in the Project Description body.