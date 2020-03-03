import React, {Component, ReactNode} from "react";
import {Character as TheorybaneCharacter} from '@sbemu/libtheorybane'
import {CharacterSheet} from "./CharacterSheet";

interface Props {}
interface State {
    character: TheorybaneCharacter
}

export class Character extends Component<Props, State> {
    constructor(props: {}) {
        super(props)
        this.state = {
            character: new TheorybaneCharacter()
        }
    }

    render(): ReactNode {
        return (
          <div>
              Hello Character!
              <CharacterSheet character={this.state.character} />
          </div>
        )
    }
}