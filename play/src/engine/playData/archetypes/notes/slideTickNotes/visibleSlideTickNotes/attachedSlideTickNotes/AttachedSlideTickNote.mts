import { getAttached } from '../../utils.mjs'
import { VisibleSlideTickNote } from '../VisibleSlideTickNote.mjs'

export abstract class AttachedSlideTickNote extends VisibleSlideTickNote {
    attachedSlideTickData = this.defineData({
        attachRef: { name: 'attach', type: Number },
        timeScaleGroup: { name: 'timeScaleGroup', type: Number },
    })

    preprocessOrder = 1
    preprocess() {
        this.data.timeScaleGroup = this.attachedSlideTickData.timeScaleGroup
        super.preprocess()
        ;({ lane: this.data.lane, size: this.data.size } = getAttached(
            this.attachedSlideTickData.attachRef,
            this.targetTime
        ))
    }
}
