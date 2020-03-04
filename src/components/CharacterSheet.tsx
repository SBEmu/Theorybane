import React, {Component, ReactNode} from "react";
import {Character} from '@sbemu/libtheorybane'

interface Props {
    character: Character
}

export class CharacterSheet extends Component<Props> {
    render(): ReactNode {
        const stats = this.props.character.stats
        return (
            <div className='character-sheet'>
                Dexterity: {stats.dexterity}/{stats.maxDexterity}<br />
                Strength: {stats.strength}/{stats.maxStrength}<br />
                Intelligence: {stats.intelligence}/{stats.maxIntelligence}<br />
                Spirit: {stats.spirit}/{stats.maxSpirit}<br />
                Constitution: {stats.constitution}/{stats.maxConstitution}<br />
            </div>
        )
    }
}