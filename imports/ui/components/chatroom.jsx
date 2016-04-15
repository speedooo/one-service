import React, { Component } from 'react';

import Channel from './channel.jsx';

// App component - represents the whole app
export class ChatRoom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentChannel: "",
        };
    }
    getChannels() {
        return [
            { _id: 1, displayname: 'Plumber Request' },
            { _id: 2, displayname: 'Coffee Request' },
            { _id: 3, displayname: 'Random' },
        ];
    }
    setCurrentChannel(channel) {
        this.setState({
            currentChannel: channel.displayname,
        });
    }

    renderChannels() {
        return this.getChannels().map((channel) => (
            <li key={channel._id} onClick={ this.setCurrentChannel.bind(this, channel)}>{channel.displayname}</li>
        ));
    }

    render() {
        return (
            <div className="container">
                <div id="channel-menu">
                    <h1>Channels</h1>
                    <ul>
                        {this.renderChannels()}
                    </ul>
                </div>
                <div id="chat">
                    <h1>{this.state.currentChannel}</h1>
                    <div>Chat content here</div>
                </div>
            </div>
        )
    }
}
