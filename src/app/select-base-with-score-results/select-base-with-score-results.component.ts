import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { QuestionAngular, SurveyModule } from 'survey-angular-ui';
import { CHOICE_WITH_SCORE_RESULTS_RENDERER, CustomRendererComponents } from '../_utils/detailed-scores.entities';
import { ExtendedQuestionSelectBase } from '../_utils/extended-questions.model';

@Component({
  selector: `${CustomRendererComponents.selectBaseQuestion}`,
  templateUrl: './select-base-with-score-results.component.html',
  styleUrl: './select-base-with-score-results.component.scss',
  imports: [
    CommonModule,
    SurveyModule
  ]
})
export class SelectBaseWithScoreResultsComponent
  extends QuestionAngular<ExtendedQuestionSelectBase>
  implements OnInit
{
  constructor(
    changeDetectorRef: ChangeDetectorRef,
  ) {
    super(changeDetectorRef);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.model.itemComponent = CHOICE_WITH_SCORE_RESULTS_RENDERER;
  }
}
