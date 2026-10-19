const sidebars = {
  tutorialSidebar: [
    'INSTRUCTIONS',
    {
      type: 'category',
      label: 'Exercise Submission',
      link: {
        type: 'generated-index',
        title: 'Completed Assignment Materials',
        description: 'Find all submitted assignment materials below.',
        image: 'img/doc-rescue.png',
      },
      items: [
        'Submission/memo',
        'Submission/webhooks-docs', 
        'Submission/disposition-list', 
        'Submission/gap-list', 
        'Submission/retrieval-test'],
    },
    {
      type: 'category',
      label: 'Source Files',
      items: [
        'Source/assistant-transcript',
        'Source/docs-webhooks',
        'Source/release-notes-v2',
        'Source/runbook-webhooks-internal'],
    },
  ],
};

export default sidebars;
