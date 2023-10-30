import React from 'react';

/**
 * DiscordWidget component to embed a Discord widget in your application.
 *
 * @component
 * @return {JSX.Element} The JSX component representing the Discord widget.
 */
function DiscordWidget() {
    return (
        <iframe
            src="https://discord.com/widget?id=1162487456940175461&theme=dark"
            width="350"
            height="500"
            allowTransparency="true"
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        />
    );
}

export default DiscordWidget;
