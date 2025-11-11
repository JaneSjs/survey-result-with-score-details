
export const surveyAnswers: Record<string, string | string[] | boolean> = {
  question1: 'Item 3',
  question2: [
    'Item 1'
  ],
  question3: 'Item 1',
  question4: true
};

export const surveyJson = {
  showNavigationButtons: false,
  navigationButtonsLocation: 'none',
  showPrevButton: false,
  maxTextLength: 10000,
  maxCommentLength: 10000,
  autoGrowComment: true,
  headerView: 'advanced',
  elements: [
    {
      type: 'radiogroup',
      name: 'question1',
      choices: [
        {
          value: 'Item 1',
          score: 10
        },
        {
          value: 'Item 2',
          score: 5
        },
        {
          value: 'Item 3',
          score: 2
        }
      ],
    },
    {
      type: 'checkbox',
      name: 'question2',
      choices: [
        {
          value: 'Item 1',
          score: 10
        },
        {
          value: 'Item 2',
          score: 5
        },
        {
          value: 'Item 3',
          score: 2
        }
      ],
    },
    {
      type: 'dropdown',
      name: 'question3',
      choices: [
        {
          value: 'Item 1',
          score: 10
        },
        {
          value: 'Item 2',
          score: 5
        },
        {
          value: 'Item 3',
          score: 2
        }
      ],
    },
    {
      type: 'boolean',
      name: 'question4',
      yesScore: 10,
      noScore: 5,
    }
  ]
}
