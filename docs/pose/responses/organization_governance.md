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
