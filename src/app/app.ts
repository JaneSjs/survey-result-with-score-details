import { Component, OnInit } from '@angular/core';
import { AngularComponentFactory, SurveyModule } from 'survey-angular-ui';
import { RendererFactory, Serializer, SurveyModel } from 'survey-core';
import {
  CHOICE_WITH_SCORE_RESULTS_RENDERER,
  CustomRendererComponents,
  QUESTION_WITH_SCORE_RESULTS_RENDERER,
  QuestionType,
} from './_utils/detailed-scores.entities';
import { surveyJson, surveyAnswers } from './_utils/survey.json';
import { BooleanWithScoreResultsComponent } from './boolean-with-score-results/boolean-with-score-results.component';
import { ChoiceWithScoreResultsComponent } from './choice-with-score-results/choice-with-score-results.component';
import { SelectBaseWithScoreResultsComponent } from './select-base-with-score-results/select-base-with-score-results.component';
import { defaultCss } from 'survey-core';

Object.assign(defaultCss.dropdown, defaultCss.radiogroup);

@Component({
  selector: 'app-root',
  imports: [SurveyModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  model?: SurveyModel;

  constructor() {
    this.preconfigureScoreProperties();
    this.preconfigureQuestionTemplates();
    this.overrideRenderAs();
  }

  ngOnInit() {
    this.model = new SurveyModel(surveyJson);
    this.model.data = surveyAnswers;
    this.model.readOnly = true;
  }

  private preconfigureScoreProperties() {
    Serializer.addProperty('boolean', {
      name: 'yesScore',
      type: 'number',
      minValue: 0,
    });
    Serializer.addProperty('boolean', {
      name: 'noScore',
      type: 'number',
      minValue: 0,
    });
    Serializer.addProperty('itemvalue', {
      name: 'score',
      type: 'number',
      minValue: 0,
    });
  }

  private preconfigureQuestionTemplates() {
    // Boolean
    RendererFactory.Instance.registerRenderer(
      QuestionType.booleanQuestion,
      QUESTION_WITH_SCORE_RESULTS_RENDERER,
      CustomRendererComponents.booleanQuestion
    );
    AngularComponentFactory.Instance.registerComponent(
      CustomRendererComponents.booleanQuestion,
      BooleanWithScoreResultsComponent
    );

    // Radiogroup and Dropdown and Checkbox
    RendererFactory.Instance.registerRenderer(
      QuestionType.radiogroupQuestion,
      QUESTION_WITH_SCORE_RESULTS_RENDERER,
      CustomRendererComponents.selectBaseQuestion
    );
    RendererFactory.Instance.registerRenderer(
      QuestionType.dropdownQuestion,
      QUESTION_WITH_SCORE_RESULTS_RENDERER,
      CustomRendererComponents.selectBaseQuestion
    );
    RendererFactory.Instance.registerRenderer(
      QuestionType.checkboxQuestion,
      QUESTION_WITH_SCORE_RESULTS_RENDERER,
      CustomRendererComponents.selectBaseQuestion
    );
    AngularComponentFactory.Instance.registerComponent(
      CustomRendererComponents.selectBaseQuestion,
      SelectBaseWithScoreResultsComponent
    );
    AngularComponentFactory.Instance.registerComponent(
      CHOICE_WITH_SCORE_RESULTS_RENDERER,
      ChoiceWithScoreResultsComponent
    );
  }

  private overrideRenderAs() {
    Object.values(QuestionType).forEach((questionType) => {
      Serializer.getProperty(questionType, 'renderAs').defaultValue =
        QUESTION_WITH_SCORE_RESULTS_RENDERER;
    });
  }
}
