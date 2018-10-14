import { NgModule } from '@angular/core';
import { ExpandableComponent } from './expandable/expandable';
import { TimelineComponent } from './timeline/timeline';
@NgModule({
	declarations: [ExpandableComponent,
    TimelineComponent],
	imports: [],
	exports: [ExpandableComponent,
    TimelineComponent]
})
export class ComponentsModule {}
