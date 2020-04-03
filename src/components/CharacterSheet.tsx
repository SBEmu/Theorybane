import React, {Component, ReactNode} from "react";
import {Character as TheorybaneCharacter} from '@sbemu/libtheorybane'
import {Stat} from "./Stat";

interface Props {
    character: TheorybaneCharacter
    notifyChanged(): void
}

export class CharacterSheet extends Component<Props> {
    constructor(props: Props) {
        super(props)
        this.addDexterity = this.addDexterity.bind(this);
        this.subtractDexterity = this.subtractDexterity.bind(this);
        this.maximizeDexterity = this.maximizeDexterity.bind(this);
        this.minimizeDexterity = this.minimizeDexterity.bind(this);
        this.addStrength = this.addStrength.bind(this);
        this.subtractStrength = this.subtractStrength.bind(this);
        this.maximizeStrength = this.maximizeStrength.bind(this);
        this.minimizeStrength = this.minimizeStrength.bind(this);
        this.addIntelligence = this.addIntelligence.bind(this);
        this.subtractIntelligence = this.subtractIntelligence.bind(this);
        this.maximizeIntelligence = this.maximizeIntelligence.bind(this);
        this.minimizeIntelligence = this.minimizeIntelligence.bind(this);
        this.addSpirit = this.addSpirit.bind(this);
        this.subtractSpirit = this.subtractSpirit.bind(this);
        this.maximizeSpirit = this.maximizeSpirit.bind(this);
        this.minimizeSpirit = this.minimizeSpirit.bind(this);
        this.addConstitution = this.addConstitution.bind(this);
        this.subtractConstitution = this.subtractConstitution.bind(this);
        this.maximizeConstitution = this.maximizeConstitution.bind(this);
        this.minimizeConstitution = this.minimizeConstitution.bind(this);
    }

    render(): ReactNode {
        const stats = this.props.character.stats
        return (
            <div className='character-sheet'>
                Ability points: {this.props.character.getAbilityPoints()}
                <Stat name="Dexterity"
                      amount={stats.dexterity}
                      maxAmount={stats.maxDexterity}
                      onAdd={this.addDexterity}
                      onSubtract={this.subtractDexterity}
                      onMax={this.maximizeDexterity}
                      onMin={this.minimizeDexterity} />
                <Stat name="Strength"
                      amount={stats.strength}
                      maxAmount={stats.maxStrength}
                      onAdd={this.addStrength}
                      onSubtract={this.subtractStrength}
                      onMax={this.maximizeStrength}
                      onMin={this.minimizeStrength} />
                <Stat name="Intelligence"
                      amount={stats.intelligence}
                      maxAmount={stats.maxIntelligence}
                      onAdd={this.addIntelligence}
                      onSubtract={this.subtractIntelligence}
                      onMax={this.maximizeIntelligence}
                      onMin={this.minimizeIntelligence} />
                <Stat name="Spirit"
                      amount={stats.spirit}
                      maxAmount={stats.maxSpirit}
                      onAdd={this.addSpirit}
                      onSubtract={this.subtractSpirit}
                      onMax={this.maximizeSpirit}
                      onMin={this.minimizeSpirit} />
                <Stat name="Constitution"
                      amount={stats.constitution}
                      maxAmount={stats.maxConstitution}
                      onAdd={this.addConstitution}
                      onSubtract={this.subtractConstitution}
                      onMax={this.maximizeConstitution}
                      onMin={this.minimizeConstitution} />
            </div>
        )
    }
    
    addDexterity(): void {
        this.invokeChange(() => this.props.character.addDexterity(1))
    }

    subtractDexterity(): void {
        this.invokeChange(() => this.props.character.subtractDexterity(1))
    }

    maximizeDexterity(): void {
        const current = this.props.character.stats.dexterity
        const max = this.props.character.stats.maxDexterity
        const toAdd = Math.min(max - current, this.props.character.getAbilityPoints())
        this.invokeChange(() => this.props.character.addDexterity(toAdd))
    }

    minimizeDexterity(): void {
        const current = this.props.character.stats.dexterity
        const min = this.props.character.stats.minDexterity
        this.invokeChange(() => this.props.character.subtractDexterity(current - min))
    }

    addStrength(): void {
        this.invokeChange(() => this.props.character.addStrength(1))
    }

    subtractStrength(): void {
        this.invokeChange(() => this.props.character.subtractStrength(1))
    }

    maximizeStrength(): void {
        const current = this.props.character.stats.strength
        const max = this.props.character.stats.maxStrength
        const toAdd = Math.min(max - current, this.props.character.getAbilityPoints())
        this.invokeChange(() => this.props.character.addStrength(toAdd))
    }

    minimizeStrength(): void {
        const current = this.props.character.stats.strength
        const min = this.props.character.stats.minStrength
        this.invokeChange(() => this.props.character.subtractStrength(current - min))
    }

    addIntelligence(): void {
        this.invokeChange(() => this.props.character.addIntelligence(1))
    }

    subtractIntelligence(): void {
        this.invokeChange(() => this.props.character.subtractIntelligence(1))
    }

    maximizeIntelligence(): void {
        const current = this.props.character.stats.intelligence
        const max = this.props.character.stats.maxIntelligence
        const toAdd = Math.min(max - current, this.props.character.getAbilityPoints())
        this.invokeChange(() => this.props.character.addIntelligence(toAdd))
    }

    minimizeIntelligence(): void {
        const current = this.props.character.stats.intelligence
        const min = this.props.character.stats.minIntelligence
        this.invokeChange(() => this.props.character.subtractIntelligence(current - min))
    }

    addSpirit(): void {
        this.invokeChange(() => this.props.character.addSpirit(1))
    }

    subtractSpirit(): void {
        this.invokeChange(() => this.props.character.subtractSpirit(1))
    }

    maximizeSpirit(): void {
        const current = this.props.character.stats.spirit
        const max = this.props.character.stats.maxSpirit
        const toAdd = Math.min(max - current, this.props.character.getAbilityPoints())
        this.invokeChange(() => this.props.character.addSpirit(toAdd))
    }

    minimizeSpirit(): void {
        const current = this.props.character.stats.spirit
        const min = this.props.character.stats.minSpirit
        this.invokeChange(() => this.props.character.subtractSpirit(current - min))
    }

    addConstitution(): void {
        this.invokeChange(() => this.props.character.addConstitution(1))
    }

    subtractConstitution(): void {
        this.invokeChange(() => this.props.character.subtractConstitution(1))
    }

    maximizeConstitution(): void {
        const current = this.props.character.stats.constitution
        const max = this.props.character.stats.maxConstitution
        const toAdd = Math.min(max - current, this.props.character.getAbilityPoints())
        this.invokeChange(() => this.props.character.addConstitution(toAdd))
    }

    minimizeConstitution(): void {
        const current = this.props.character.stats.constitution
        const min = this.props.character.stats.minConstitution
        this.invokeChange(() => this.props.character.subtractConstitution(current - min))
    }
    
    invokeChange(change: () => void)
    {
        try {
            change()
            this.props.notifyChanged()
        } catch (e) {
            alert(e.message)
        }
    }
}