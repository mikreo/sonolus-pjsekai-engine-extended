import { OptionName } from 'sonolus-core'
import { defineOptions } from 'sonolus.js'

export const options = defineOptions({
    isAutoplay: {
        name: OptionName.AutoPlay,
        scope: 'Sekai',
        standard: true,
        type: 'toggle',
        def: 0,
    },
    speed: {
        name: OptionName.LevelSpeed,
        standard: true,
        type: 'slider',
        def: 1,
        min: 0.5,
        max: 2,
        step: 0.05,
        display: 'percentage',
    },
    noteSpeed: {
        name: OptionName.NoteSpeed,
        scope: 'Sekai',
        type: 'slider',
        def: 6,
        min: 1,
        max: 12,
        step: 0.1,
        display: 'number',
    },
    noteEffectSize: {
        name: OptionName.NoteEffectSize,
        scope: 'Sekai',
        type: 'slider',
        def: 1,
        min: 0.1,
        max: 2,
        step: 0.05,
        display: 'percentage',
    },
    slotEffectSize: {
        name: OptionName.SlotEffectSize,
        scope: 'Sekai',
        type: 'slider',
        def: 1,
        min: 0,
        max: 2,
        step: 0.05,
        display: 'percentage',
    },
    connectorAlpha: {
        name: OptionName.ConnectorTransparency,
        scope: 'Sekai',
        type: 'slider',
        def: 1,
        min: 0.1,
        max: 1,
        step: 0.05,
        display: 'percentage',
    },
    stageCover: {
        name: OptionName.VerticalStageCover,
        scope: 'Sekai',
        type: 'slider',
        def: 0,
        min: 0,
        max: 1,
        step: 0.05,
        display: 'percentage',
    },
    isMirrorEnabled: {
        name: OptionName.MirrorLevel,
        type: 'toggle',
        def: 0,
    },
    isSimLineEnabled: {
        name: OptionName.SimultaneousLineVisibility,
        scope: 'Sekai',
        type: 'toggle',
        def: 1,
    },
    isSFXEnabled: {
        name: OptionName.SFX,
        scope: 'Sekai',
        type: 'toggle',
        def: 1,
    },
    isNoteEffectEnabled: {
        name: OptionName.NoteEffect,
        scope: 'Sekai',
        type: 'toggle',
        def: 1,
    },
    isLaneEffectEnabled: {
        name: OptionName.LaneEffect,
        scope: 'Sekai',
        type: 'toggle',
        def: 1,
    },
    isSlotEffectEnabled: {
        name: OptionName.SlotEffect,
        scope: 'Sekai',
        type: 'toggle',
        def: 1,
    },
    isStageAspectRatioLocked: {
        name: OptionName.LockStageAspectRatio,
        scope: 'Sekai',
        type: 'toggle',
        def: 1,
    },
    isBetterJudgmentEnabled: {
        name: 'Use better judgment text' as OptionName,
        scope: 'Sekai',
        type: 'toggle',
        def: 1,
    },
    isAutoJudgmentEnabled: {
        name: 'Show AUTO on judgment' as OptionName,
        scope: 'Sekai',
        type: 'toggle',
        def: 1,
    },
    isBetterPauseButtonEnabled: {
        name: 'Use better pause button' as OptionName,
        scope: 'Sekai',
        type: 'toggle',
        def: 0,
    },
    hideAllComponents: {
        name: 'Hide UI' as OptionName,
        scope: 'Sekai',
        type: 'toggle',
        def: 0,
    },
    hideLane: {
        name: 'Hide lane' as OptionName,
        scope: 'Sekai',
        type: 'toggle',
        def: 0,
    },
    stageTilt: {
        name: OptionName.StageTilt,
        scope: 'Sekai',
        type: 'slider',
        def: 0,
        min: 0,
        max: 1,
        step: 0.01,
        display: 'percentage',
    },
    additionalNoteSpeed: {
        name: 'Additional Note Speed' as OptionName,
        scope: 'Sekai',
        type: 'slider',
        def: 1,
        min: 0.1,
        max: 100,
        step: 0.1,
        display: 'number',
    },
})
