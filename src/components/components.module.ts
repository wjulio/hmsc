import { NgModule } from '@angular/core';
import { ExpandableComponent } from './expandable/expandable';
import { TimelineComponent } from './timeline/timeline';
import { FlashCardComponent } from './flash-card/flash-card';
import { ExpandableHeaderComponent } from './expandable-header/expandable-header';
@NgModule({
	declarations: [ExpandableComponent,
    TimelineComponent,
    FlashCardComponent,
    ExpandableHeaderComponent],
	imports: [],
	exports: [ExpandableComponent,
    TimelineComponent,
    FlashCardComponent,
    ExpandableHeaderComponent]
})
export class ComponentsModule {}
