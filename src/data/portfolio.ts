export type Project = {
  title: string;
  summary: string;
  outcome: string;
  technologies: string[];
  repositoryUrl: string;
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const profile = {
  name: "Ismail Abdur-Rahman",
  role: "Cloud Engineer & Business Solutions Architect",
  introduction:
    "I translate business requirements into secure, tested, and cost-conscious cloud solutions.",
  summary:
    "My work combines business analysis, cloud architecture, Infrastructure as Code, security, and technical documentation. Each project begins with a business problem and ends with validated evidence—not merely deployed resources.",
  email: "ismail.abdur.rahmanmba@gmail.com",
  githubUrl: "https://github.com/thecloudengineer2026",
  linkedinUrl: "https://www.linkedin.com/in/ismail-abdur-rahman-mba/",
};

export const projects: Project[] = [
  {
    title: "Secure AWS Foundation",
    summary:
      "A cost-conscious AWS security foundation designed to improve visibility, accountability, and incident awareness.",
    outcome:
      "Implemented identity controls, audit logging, centralized log storage, metric filters, alarms, and notifications.",
    technologies: [
      "AWS IAM",
      "CloudTrail",
      "Amazon S3",
      "CloudWatch",
      "Amazon SNS",
    ],
    repositoryUrl:
      "https://github.com/thecloudengineer2026/cloud-engineering-playbooks/tree/main/playbook-02-secure-aws-foundation",
  },
  {
    title: "StartupCo Access Modernization",
    summary:
      "A role-based access modernization solution replacing shared administrative access with individual identities and scoped permissions.",
    outcome:
      "Validated permitted and prohibited actions across developer, operations, finance, and analyst roles with MFA enforcement.",
    technologies: [
      "AWS IAM",
      "MFA",
      "Managed Policies",
      "Inline Policies",
      "AWS CLI",
    ],
    repositoryUrl:
      "https://github.com/thecloudengineer2026/cloud-engineering-playbooks/tree/main/playbook-03-startupco-access-modernization",
  },
  {
    title: "TechHealth Infrastructure as Code Migration",
    summary:
      "A tested AWS CDK modernization proof of concept for replacing manually administered healthcare application infrastructure.",
    outcome:
      "Built and validated segmented EC2 and RDS tiers, secret-based credentials, SSH-free administration, TLS connectivity, and reproducible deployment.",
    technologies: [
      "AWS CDK",
      "TypeScript",
      "Amazon VPC",
      "Amazon EC2",
      "Amazon RDS",
      "Systems Manager",
      "Secrets Manager",
      "Jest",
    ],
    repositoryUrl:
      "https://github.com/thecloudengineer2026/cloud-engineering-playbooks/tree/main/playbook-04-techhealth-cdk-migration",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Cloud Architecture",
    skills: [
      "Amazon VPC",
      "Amazon EC2",
      "Amazon RDS",
      "AWS IAM",
      "CloudFront",
      "Amplify Hosting",
    ],
  },
  {
    category: "Infrastructure & Delivery",
    skills: [
      "AWS CDK",
      "CloudFormation",
      "Terraform",
      "Git",
      "GitHub",
      "CI/CD",
    ],
  },
  {
    category: "Security & Operations",
    skills: [
      "Systems Manager",
      "Secrets Manager",
      "CloudTrail",
      "CloudWatch",
      "MFA",
      "Least Privilege",
    ],
  },
  {
    category: "Development & Analysis",
    skills: [
      "TypeScript",
      "Next.js",
      "PowerShell",
      "Automated Testing",
      "Business Analysis",
      "Technical Documentation",
    ],
  },
];

export const principles = [
  {
    title: "Business-driven",
    description:
      "Architecture decisions begin with the business problem, operating constraints, and measurable outcome.",
  },
  {
    title: "Security-by-design",
    description:
      "Identity, network boundaries, credential handling, and prohibited access paths are considered from the beginning.",
  },
  {
    title: "Tested and evidenced",
    description:
      "Successful deployment is not enough. Controls and connectivity are validated through positive and negative tests.",
  },
  {
    title: "Cost-conscious",
    description:
      "Lab and production tradeoffs are documented clearly, with unnecessary recurring infrastructure avoided.",
  },
];