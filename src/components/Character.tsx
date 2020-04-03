import React, {Component, ReactNode} from "react";
import {Character as TheorybaneCharacter} from '@sbemu/libtheorybane'
import {CharacterSheet} from "./CharacterSheet";

interface Props {}
interface State {
    character: TheorybaneCharacter
}

export class Character extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            character: new TheorybaneCharacter()
        }

        this.notifyChanged = this.notifyChanged.bind(this)
    }

    render(): ReactNode {
        return (
          <div>
              <CharacterSheet notifyChanged={this.notifyChanged} character={this.state.character} />
          </div>
        )
    }

    notifyChanged(): void {
        this.forceUpdate()
    }
}