import React from 'react';

/**
 * DiscordWidget component to embed a Discord widget in your application.
 *
 * @component
 * @return {JSX.Element} The JSX component representing the Discord widget.
 */
function DiscordWidget() {
    return (
        <div style={{ background: 'transparent' }}>
            <iframe
                src="https://discord.com/widget?id=1162487456940175461&theme=dark"
                width="100%"
                height="400"
                allowtransparency="true"
                frameborder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                style={{ overflow: "hidden", borderRadius: 15 }}
            />
        </div>
    );
}

export default DiscordWidget;
