import { NgModule } from '@angular/core';
import { ExpandableComponent } from './expandable/expandable';
import { TimelineComponent } from './timeline/timeline';
import { FlashCardComponent } from './flash-card/flash-card';
@NgModule({
	declarations: [ExpandableComponent,
    TimelineComponent,
    FlashCardComponent],
	imports: [],
	exports: [ExpandableComponent,
    TimelineComponent,
    FlashCardComponent]
})
export class ComponentsModule {}
