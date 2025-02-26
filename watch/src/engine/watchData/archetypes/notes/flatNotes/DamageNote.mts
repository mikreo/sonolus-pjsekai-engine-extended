import { approach } from '../../../../../../../shared/src/engine/data/note.mjs'
import { perspectiveLayout } from '../../../../../../../shared/src/engine/data/utils.mjs'
import { options } from '../../../../configuration/options.mjs'
import { note } from '../../../note.mjs'
import { getZ, layer, skin } from '../../../skin.mjs'
import { scaledTimeToEarliestTime, timeToScaledTime } from '../../timeScale.mjs'
import { Note } from '../Note.mjs'

export class DamageNote extends Note {
    sprites = {
        left: skin.sprites.damageNoteLeft,
        middle: skin.sprites.damageNoteMiddle,
        right: skin.sprites.damageNoteRight,
        fallback: skin.sprites.damageNoteFallback,
    }

    visualTime = this.entityMemory({
        min: Number,
        max: Number,
        hidden: Number,
    })

    initialized = this.entityMemory(Boolean)

    spriteLayouts = this.entityMemory({
        left: Quad,
        middle: Quad,
        right: Quad,
    })
    z = this.entityMemory(Number)

    y = this.entityMemory(Number)

    globalPreprocess() {
        this.life.miss = -80
    }

    preprocess() {
        super.preprocess()

        this.visualTime.max = timeToScaledTime(this.targetTime, this.data.timeScaleGroup)
        this.visualTime.min = this.visualTime.max - note.duration
    }

    spawnTime() {
        return scaledTimeToEarliestTime(
            Math.min(
                this.visualTime.min,
                this.visualTime.max,
                timeToScaledTime(this.targetTime, this.data.timeScaleGroup)
            ),
            this.data.timeScaleGroup
        )
    }

    despawnTime() {
        return this.targetTime
    }

    initialize() {
        if (this.initialized) return
        this.initialized = true

        this.globalInitialize()
    }

    updateParallel() {
        if (this.data.size < 0.125) return
        const scaledTime = timeToScaledTime(time.now, this.data.timeScaleGroup)
        if (options.hidden > 0 && scaledTime > this.visualTime.hidden) return
        if (scaledTime < this.visualTime.min) return

        this.render()
    }

    get useFallbackSprites() {
        return (
            !this.sprites.left.exists || !this.sprites.middle.exists || !this.sprites.right.exists
        )
    }

    globalInitialize() {
        if (options.hidden > 0)
            this.visualTime.hidden = this.visualTime.max - note.duration * options.hidden

        const l = this.data.lane - this.data.size
        const r = this.data.lane + this.data.size

        const b = 1 + note.h
        const t = 1 - note.h

        if (this.useFallbackSprites) {
            perspectiveLayout({ l, r, b, t }).copyTo(this.spriteLayouts.middle)
        } else {
            const ml = l + 0.3
            const mr = r - 0.3

            perspectiveLayout({ l, r: ml, b, t }).copyTo(this.spriteLayouts.left)
            perspectiveLayout({ l: ml, r: mr, b, t }).copyTo(this.spriteLayouts.middle)
            perspectiveLayout({ l: mr, r, b, t }).copyTo(this.spriteLayouts.right)
        }

        this.z = getZ(layer.note.body, this.targetTime, this.data.lane)
    }

    render() {
        this.y = approach(
            this.visualTime.min,
            this.visualTime.max,
            timeToScaledTime(time.now, this.data.timeScaleGroup)
        )

        if (this.useFallbackSprites) {
            this.sprites.fallback.draw(this.spriteLayouts.middle.mul(this.y), this.z, 1)
        } else {
            this.sprites.left.draw(this.spriteLayouts.left.mul(this.y), this.z, 1)
            this.sprites.middle.draw(this.spriteLayouts.middle.mul(this.y), this.z, 1)
            this.sprites.right.draw(this.spriteLayouts.right.mul(this.y), this.z, 1)
        }
    }
}
