// Cloud Computing Questions
export const cloudComputingQuestions = {
  theory: [
    {
      id: 1,
      question: "What are the three main service models in cloud computing?",
      options: [
        "IaaS, PaaS, SaaS",
        "Public, Private, Hybrid",
        "On-premise, Cloud, Edge",
        "Local, Regional, Global"
      ],
      correct: 0,
      explanation: "The three main service models are Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS).",
      difficulty: "Basic",
      topic: "Cloud Models"
    },
    {
      id: 2,
      question: "Which cloud deployment model offers the highest level of control?",
      options: [
        "Public Cloud",
        "Private Cloud",
        "Hybrid Cloud",
        "Community Cloud"
      ],
      correct: 1,
      explanation: "Private cloud offers the highest level of control as it's dedicated to a single organization and can be customized to specific needs.",
      difficulty: "Intermediate",
      topic: "Cloud Deployment"
    }
  ],
  coding: [
    {
      id: 11,
      question: "What is the correct AWS CLI command to list S3 buckets?",
      code: `AWS CLI command to list S3 buckets`,
      options: [
        "aws s3 ls",
        "aws s3 list-buckets",
        "aws s3 show",
        "aws s3 display"
      ],
      correct: 0,
      explanation: "The correct AWS CLI command to list S3 buckets is 'aws s3 ls' which lists all buckets in your account.",
      difficulty: "Basic",
      topic: "AWS CLI"
    }
  ]
};
